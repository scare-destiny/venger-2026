import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const supabase = createClient(
  "https://ftqkyjtxwjkjtqnpoyyf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0cWt5anR4d2pranRxbnBveXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MzI5MDQsImV4cCI6MjA2NDEwODkwNH0.lJScb8ObjZr1jO67dtcVLR5orMkaTnDHFnpGaPCnmkQ"
);
const GET = async ({ params }) => {
  const { slug } = params;
  if (!slug) {
    return new Response(JSON.stringify({ error: "Slug is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const { count, error } = await supabase.from("post_likes").select("*", { count: "exact", head: true }).eq("post_slug", decodeURIComponent(slug));
    if (error) {
      console.error("Supabase error:", error);
      return new Response(JSON.stringify({ error: "Database error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ likes: count || 0 }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      }
    });
  } catch (error) {
    console.error("Error fetching likes:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
