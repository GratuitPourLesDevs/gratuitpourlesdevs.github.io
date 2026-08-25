export const prerender = true;

export function GET() {
  const client = import.meta.env.PUBLIC_ADSENSE_CLIENT?.trim() ?? '';
  const publisher = client.replace(/^ca-/, '');
  const configured = import.meta.env.PUBLIC_ADSENSE_ENABLED === 'true' && /^pub-\d+$/.test(publisher);
  const body = configured
    ? `google.com, ${publisher}, DIRECT, f08c47fec0942fa0\n`
    : '# AdSense non configuré\n';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
