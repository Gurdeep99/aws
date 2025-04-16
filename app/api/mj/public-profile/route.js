import jyotish from "../../data/jyotish";
import axios from "axios";

export async function GET(req) {
  // Fetch Authorization header
  const authHeader = req.headers.get("authorization");

  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") || "test-1TaLLd8Y"; // Default value 10

  if (authHeader !== "Bearer 117f34ce-8402-4003-a6de-cd0d28b4c216") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const res = await axios.get(
      `https://spiderstagejsapi.amarujala.com/mj/api/astrologer?project=MJ&slug=${slug}`,
      {
        headers: {
          Authorization: "Bearer JZ4gaKolUuBFhE8lomM9t1s9tG2OBPO9X7LnOg989xRSY",
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

