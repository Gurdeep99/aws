import flag from "../data/flag.json";
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
    return Response.json(flag);
}

