import { console } from "inspector";
import blog from "../../../data/blog";

export async function GET(req) {
  // Fetch Authorization header
  const limit = 10; // Default value for limit
  const authHeader = req.headers.get("authorization");
  const lang = req.headers.get("lang");

  // Fetch query parameters
  const { searchParams } = new URL(req.url);
  const pageNumber = Number(searchParams.get("pageNumber")); // Default value 0
  const project = searchParams.get("project");


  if (authHeader !== "Bearer 117f34ce-8402-4003-a6de-cd0d28b4c216") {
    return new Response(JSON.stringify({ message: "token missing!" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
  if(project !== "MJ"){
    return new Response(JSON.stringify({ message: "Cannot read properties of undefined (reading 'cms')" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
  }

  const titleSelector = lang == 'hi' ? "ब्लॉग" : "Blog"; // Default value for language

  const skip = (pageNumber - 1) * limit;

  const data = {
    title : titleSelector,
    items: blog().slice(skip, skip + limit),
  };

  return Response.json(data);
}
