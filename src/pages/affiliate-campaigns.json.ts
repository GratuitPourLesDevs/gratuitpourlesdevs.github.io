import { getCollection } from 'astro:content';

export const prerender = true;

const today = new Date();
const offers = await getCollection('offres');
const programs = await getCollection('affiliations');
const campaigns = await getCollection('campagnes');
const offersById = new Map(offers.map((offer) => [offer.id, offer]));
const programsById = new Map(programs.map((program) => [program.id, program]));

type AffiliateProgram = (typeof programs)[number];
type AffiliateCampaign = (typeof campaigns)[number];

function destinationFor(program: AffiliateProgram, campaign: AffiliateCampaign, offerId: string) {
  return campaign.data.urlDestination
    ?? program.data.liensOffres.find((link) => link.offre === offerId)?.url
    ?? program.data.urlAffiliee;
}

function campaignIsCurrent(campaign: AffiliateCampaign) {
  if (campaign.data.statut !== 'active') return false;
  if (campaign.data.dateDebut && campaign.data.dateDebut.getTime() > today.getTime()) return false;
  if (campaign.data.dateFin && campaign.data.dateFin.getTime() < today.getTime()) return false;
  return true;
}

const payload = campaigns
  .filter(campaignIsCurrent)
  .flatMap((campaign) => {
    const program = programsById.get(campaign.data.programme);
    if (!program || program.data.statut !== 'active') return [];

    const campaignOffers = campaign.data.offres.flatMap((offerId) => {
      const offer = offersById.get(offerId);
      const destination = destinationFor(program, campaign, offerId);
      if (!offer || offer.data.statut !== 'active' || !destination) return [];
      return [{
        id: offer.id,
        name: offer.data.nom,
        tagline: offer.data.accroche,
        initials: offer.data.initiales,
        color: offer.data.couleur,
        category: offer.data.categorie,
        href: `/go/${campaign.id}/${offer.id}/`,
      }];
    });

    if (!campaignOffers.length) return [];
    return [{
      id: campaign.id,
      program: { id: program.id, name: program.data.nom, provider: program.data.fournisseur },
      title: campaign.data.titrePublic,
      text: campaign.data.textePublic,
      cta: campaign.data.cta,
      badge: campaign.data.badge,
      status: campaign.data.statut,
      priority: campaign.data.priorite,
      placements: campaign.data.placements,
      categories: campaign.data.categories,
      advantage: campaign.data.avantageUtilisateur ?? program.data.avantageUtilisateur ?? null,
      disclosure: campaign.data.disclosure,
      offers: campaignOffers,
    }];
  })
  .sort((a, b) => a.priority - b.priority || a.id.localeCompare(b.id));

export async function GET() {
  return new Response(JSON.stringify({ campaigns: payload }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600',
    },
  });
}
