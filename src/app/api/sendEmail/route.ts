import emailjs from '@emailjs/browser';
export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const result = await emailjs.send(
    process.env.EMAILJS_SERVICE_ID!,
    process.env.EMAILJS_TEMPLATE_ID!,
    { name, email, message },
    process.env.EMAILJS_PRIVATE_KEY! // pas public ici
  );

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
