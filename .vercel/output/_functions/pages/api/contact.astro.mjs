export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  const services = data.get("services");
  if (!name || !email || !message || !services) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields"
      }),
      { status: 400 }
    );
  }
  try {
    const response = await fetch("https://hook.eu1.make.com/wm9tvk70g88ivmcyfbasm77v7m7kix4j", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message, services })
    });
    if (!response.ok) {
      throw new Error("Failed to send message");
    }
    return new Response(
      JSON.stringify({
        message: "Success!"
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: `An error ${error} occurred while sending the message.`
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
