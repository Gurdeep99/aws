export async function GET(req) {
    const headers = {};
    for (let [key, value] of req.headers.entries()) {
      headers[key] = value;
    }
  
    const { searchParams } = new URL(req.url);
    const query = {};
    for (let [key, value] of searchParams.entries()) {
      query[key] = value;
    }
  
    return Response.json({
      method: "GET",
      headers,
      query,
      body: null,
    });
  }
  
  export async function POST(req) {
    const headers = {};
    for (let [key, value] of req.headers.entries()) {
      headers[key] = value;
    }
  
    const { searchParams } = new URL(req.url);
    const query = {};
    for (let [key, value] of searchParams.entries()) {
      query[key] = value;
    }
  
    const body = await req.json();
  
    return Response.json({
      method: "POST",
      headers,
      query,
      body,
    });
  }
  