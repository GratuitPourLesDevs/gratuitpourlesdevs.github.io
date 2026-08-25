(() => {
  const W =
      "https://gratuitpourlesdevs-oauth.gratuitpourlesdevsallianciasolutions.workers.dev",
    SITE = "gratuitpourlesdevs.fr",
    KEY = "gpld-monetization-admin-token",
    $ = (id) => document.getElementById(id);
  let popup = null;
  const token = () => sessionStorage.getItem(KEY);
  function login(msg = "") {
    $("login").hidden = false;
    $("dashboard").hidden = true;
    $("login-status").textContent = msg;
  }
  function dashboard() {
    $("login").hidden = true;
    $("dashboard").hidden = false;
    load();
  }
  $("login-button").onclick = () => {
    popup = open(
      `${W}/auth?provider=github&site_id=${encodeURIComponent(SITE)}&origin=${encodeURIComponent(location.origin)}`,
      "gpld-monetization-auth",
      "popup,width=720,height=760",
    );
  };
  addEventListener("message", (e) => {
    if (
      e.origin !== new URL(W).origin ||
      e.source !== popup ||
      typeof e.data !== "string"
    )
      return;
    if (e.data === "authorizing:github") {
      popup.postMessage("authorizing:github", e.origin);
      return;
    }
    const p = "authorization:github:success:";
    if (!e.data.startsWith(p)) return;
    try {
      const data = JSON.parse(e.data.slice(p.length));
      sessionStorage.setItem(KEY, data.token);
      popup?.close();
      dashboard();
    } catch {
      login("Connexion impossible.");
    }
  });
  async function api(path, opt = {}) {
    const r = await fetch(W + path, {
      ...opt,
      headers: {
        "Content-Type": "application/json",
        ...(opt.headers || {}),
        Authorization: `Bearer ${token()}`,
      },
    });
    if (r.status === 401) {
      sessionStorage.removeItem(KEY);
      login("Session expirée.");
      throw Error("unauthorized");
    }
    const p = await r.json();
    if (!r.ok) {
      const error = Error(p.error || "Erreur API");
      error.details = p.errors;
      throw error;
    }
    return p;
  }
  function paint(v) {
    const f = $("settings-form").elements;
    f.enabled.checked = v.enabled;
    f.clientId.value = v.clientId || "";
    f.catalogue.value = v.slots?.catalogue || "";
    f.guide.value = v.slots?.guide || "";
    f.offer.value = v.slots?.offer || "";
    f.consentReady.checked = v.consentReady;
    ["catalogue", "guide", "offer"].forEach(
      (k) =>
        ($("preview-" + k).textContent = v.slots?.[k]
          ? `Slot ${v.slots[k]}`
          : "Non configuré"),
    );
    $("state-title").textContent = v.enabled
      ? "Diffusion active"
      : "Publicités désactivées";
    $("state-copy").textContent = v.enabled
      ? "Les emplacements configurés peuvent afficher une annonce responsive."
      : "Aucun script Google n’est chargé tant que la diffusion est désactivée.";
    $("state-pill").textContent = v.enabled ? "ACTIF" : "INACTIF";
    $("state-pill").classList.toggle("on", v.enabled);
    $("updated-meta").textContent = v.updatedAt
      ? `Dernière modification : ${new Date(v.updatedAt).toLocaleString("fr-FR")} par ${v.updatedBy}`
      : "Aucune modification enregistrée.";
  }
  async function load() {
    try {
      paint(await api("/api/monetization/settings"));
    } catch (e) {
      if (e.message !== "unauthorized")
        $("save-status").textContent = e.message;
    }
  }
  $("settings-form").oninput = () => {
    const f = $("settings-form").elements;
    ["catalogue", "guide", "offer"].forEach(
      (k) =>
        ($("preview-" + k).textContent = f[k].value
          ? `Slot ${f[k].value}`
          : "Non configuré"),
    );
  };
  $("settings-form").onsubmit = async (e) => {
    e.preventDefault();
    const f = e.currentTarget.elements,
      s = $("save-status"),
      button = $("save");
    button.disabled = true;
    s.className = "status";
    s.textContent = "Enregistrement…";
    try {
      const saved = await api("/api/monetization/settings", {
        method: "PUT",
        body: JSON.stringify({
          enabled: f.enabled.checked,
          clientId: f.clientId.value,
          slots: {
            catalogue: f.catalogue.value,
            guide: f.guide.value,
            offer: f.offer.value,
          },
          consentReady: f.consentReady.checked,
        }),
      });
      paint(saved);
      s.className = "status success";
      s.textContent =
        "Configuration enregistrée et prise en compte par le site.";
    } catch (err) {
      s.textContent = (err.details || [err.message]).join(" ");
    } finally {
      button.disabled = false;
    }
  };
  $("logout").onclick = () => {
    sessionStorage.removeItem(KEY);
    login();
  };
  const preview =
    ["127.0.0.1", "localhost"].includes(location.hostname) &&
    new URLSearchParams(location.search).has("preview");

  if (preview) {
    $("login").hidden = true;
    $("dashboard").hidden = false;
    paint({
      enabled: false,
      clientId: "ca-pub-1234567890123456",
      slots: {
        catalogue: "1234567890",
        guide: "2345678901",
        offer: "3456789012",
      },
      consentReady: true,
    });
  } else {
    token() ? dashboard() : login();
  }
})();
