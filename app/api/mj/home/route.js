import jyotish from "../../data/jyotish";

export async function GET(req) {
  // Fetch Authorization header
  const authHeader = req.headers.get("authorization");

  // Fetch query parameters
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit") || "10"; // Default value 10
  const skip = searchParams.get("skip") || "0";   // Default value 0

  if(authHeader !== "Bearer 117f34ce-8402-4003-a6de-cd0d28b4c216"){
    return new Response(JSON.stringify({ message : "Unauthorized"}), { status: 401, headers: { "Content-Type": "application/json" } });
  }

  const data = {
    banner : "https://aws.gurdeep.net/mj/banner.png",
    tools: {
      panchang : "https://www.myjyotish.com/panchang/aaj-ka-panchang",
      horoscope : "https://www.myjyotish.com/horoscope",
      kundli : "https://www.myjyotish.com/tags/kundli",
    },
    vedic : jyotish(),
    astro : jyotish()
  };




  return Response.json(data);
}
