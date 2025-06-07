

export async function GET(req) {
    // Fetch Authorization header
    const authHeader = req.headers.get("authorization");

    // Fetch query parameters
    const { searchParams } = new URL(req.url);

    if (authHeader !== "Bearer 117f34ce-8402-4003-a6de-cd0d28b4c216") {
        return new Response(JSON.stringify({ message: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
        });
    }

    const data = {
        title: "Kundli",
        tabs: [
            {
                'title': "Basic Details",
                'key': 'basic-details',
            },
            {
                'title': "Charts & Planets",
                'key': 'charts-planets',
            },
            {
                'title': "Dasha",
                'key': 'dasha',
            },
            {
                'title': "Kundli Dosh",
                'key': 'kundli-dosh',
            },
            {
                'title': "KP System",
                'key': 'kp-system',
            },
        ],
        
    };
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });

}
