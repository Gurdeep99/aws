import flag from "../data/flag.json";
import axios from "axios";

export async function GET(req) {
  // Fetch Authorization header
  const authHeader = req.headers.get("authorization");
 
  if (authHeader !== "Bearer 117f34ce-8402-4003-a6de-cd0d28b4c216") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
    return Response.json(flag);
}

