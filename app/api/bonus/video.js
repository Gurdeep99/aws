
import axios from "axios";

export async function GET(req) {
  // Fetch Authorization header
  const authHeader = req.headers.get("authorization");

  const { searchParams } = new URL(req.url);
  const skip = searchParams.get("skip") || 0; // Default value 10
  const limit = searchParams.get("limit") || 10; // Default value 10

  if (authHeader !== "Bearer 117f34ce-8402-4003-a6de-cd0d28b4c216") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const res = await axios.get(
      `https://spiderjsapi.amarujala.com/api/video/list?propertyId=672c76f5defff29dda0a9420&skip=${skip}&limit=${limit}`,
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

