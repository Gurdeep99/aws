import jyotish from "../../../data/jyotish";

export async function GET(req) {
  // Fetch Authorization header
  const authHeader = req.headers.get("authorization");
  const type = req.headers.get("type") || "astro"; // Default value "astro"

  // Fetch query parameters
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit") || "10"; // Default value 10
  const skip = searchParams.get("skip") || "0"; // Default value 0

  if (authHeader !== "Bearer 117f34ce-8402-4003-a6de-cd0d28b4c216") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const data = {
    [type] : jyotish(),
  };

  return Response.json(data);
}

