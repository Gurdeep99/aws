

export async function GET(req, { params }) {
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

    const { slug } = params;

    try {
        const response1 = await new Promise((resolve) => setTimeout(resolve, 3000)).then(() =>
            axios.post(`https://sso.amarujala.com/v1/chat/vendor_status`, {
                chat_id: slug,
                status: 'completed',
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        );

        if (response1.status === 200) {
            const response2 = await new Promise((resolve) => setTimeout(resolve, 3000)).then(() =>
                axios.post(`http://sso.amarujala.com/v1/chat/status`, {
                    chat_id: slug,
                    status: 'completed',
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
            );
            if (response2.status === 200) {
                return new Response(JSON.stringify({ "api 1": response1.data, "api 2": response2.data }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                });
            } else {
                return new Response(JSON.stringify({ "api 1": response1.data }), {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
        } else {
            return new Response(JSON.stringify("Something went wrong"), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

    } catch (error) {
        console.error('Error fetching:', error.message);
        return new Response(JSON.stringify("Something went wrong"), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

}
