

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
        "title": "MJ Astro App",
        "profile": {
            "name": "Qachat1",
            "_id": "67c0158efb46ed681b5aad7f",
            "profile_id": "67c01571ea5a9a255d7d4ce3",
            "rating": 5,
            "profile_pic": "https://userimg.amarujala.com/images/photo.jpg",
            "presence": "ONLINE",
            "component_id": 1001,
            "phone_no": "91 1234808080"
        },
        "services": [
            {
                "vendor_service_id": "67c03160fb46ed681b5aad8b",
                "service_id": "5d31962b8ebc3e6c6716831c",
                "service_name": "Talk to astrologer",
                "slug": "talk-to-astrologer-by-qachat1",
                "selling_price": 10,
                "original_price": 10,
                "status": "ACTIVE",
                "presence": "ONLINE",
                "next_availability": null
            },
            {
                "vendor_service_id": "67c03189a606977fb36fe92a",
                "service_id": "67a9b1e6d251a50b795e9b38",
                "service_name": "Chat to astrologer",
                "slug": "chat-to-astrologer-by-qachat1",
                "selling_price": 10,
                "original_price": 10,
                "status": "ACTIVE",
                "presence": "OFFLINE",
                "next_availability": "2025-06-20T18:50:00+05:30"
            }
        ],
        "widgets": [
            {
                "title": "earning",
                "link": "/earning",
                "image": "https://staticimg.amarujala.com/assets/images/myjyotish.com/2025/05/09/earning-astro_520dfd5214087305d347c83a147a0f4e.png",
                "native_id": null,
                "component_id": 1031
            },
            {
                "title": "reviews",
                "link": "/reviews",
                "image": "https://staticimg.amarujala.com/assets/images/myjyotish.com/2025/05/09/review-astro_5086c3316865cf7f0dbbbc83c1e4850a.png",
                "native_id": null,
                "component_id": 1031
            },
            {
                "title": "online time",
                "link": "/online time",
                "image": "https://staticimg.amarujala.com/assets/images/myjyotish.com/2025/05/09/online-time-astro_3a86fd4e3c7179d19d251336977af910.png",
                "native_id": null,
                "component_id": 1031
            },
            {
                "title": "notify",
                "link": "/notify",
                "image": "https://staticimg.amarujala.com/assets/images/myjyotish.com/2025/05/09/notify-astro_03161885223534b1ca5fc4bf779878a6.png",
                "native_id": null,
                "component_id": 1031
            }
        ],
        "guidelines": {
            "title": "Platform Guidelines",
            "description": "Hello World",
            "component_id": 1041
        }
    };
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });

}
