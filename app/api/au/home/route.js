export async function GET(request) {
    // Handle the GET request here
    return new Response(JSON.stringify({ message: 'Hello from API!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  export async function POST(request) {
    // Handle POST request here
    const data = await request.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  