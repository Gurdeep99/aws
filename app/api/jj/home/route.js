import jyotish from "../../data/jyotish";
import axios from "axios";

export async function GET(req) {
  // Fetch Authorization header
  const authHeader = req.headers.get("authorization");

  const { searchParams } = new URL(req.url);
  const skip = searchParams.get("skip") || 0; // Default value 10
  const limit = searchParams.get("limit") || 1; // Default value 10

  if (authHeader !== "Bearer 117f34ce-8402-4003-a6de-cd0d28b4c216") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const res = await axios.get(
      `https://node-spiderapi.amarujala.com/jeevanjali/homePageStories?skip=${skip}&limit=${limit}`,
      {
        headers: {
            clientkey: "57398d264f1c1b0016ac7a05",
            propertykey: '64214cfbc12c3bc7ce012854',
            authorization: "Bearer Wp9Rg0OYrD91tAP9hf2v3NAaK7TVEPaIPjxFRW0YBW",
        },
      }
    );
    const data_en = res.data;   
    return Response.json(data_en);
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching data", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

