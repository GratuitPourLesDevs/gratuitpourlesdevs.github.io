export const prerender = true;

export function GET() {
  const client = import.meta.env.PUBLIC_ADSENSE_CLIENT?.trim() ?? '';
  const publisher = client.replace(/^ca-/, '');
  // L'autorisation du domaine est indépendante de l'activation des annonces.
  // L'identifiant éditeur est public et doit rester visible pour la validation
  // AdSense même lorsque la diffusion est suspendue dans la console d'admin.
  const configured = /^pub-\d{10,20}$/.test(publisher);
  const body = configured
    ? `google.com, ${publisher}, DIRECT, f08c47fec0942fa0\n`
    : '# AdSense non configuré\n';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
