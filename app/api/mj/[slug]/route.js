import axios from 'axios';

export async function GET(req, { params }) {
    const { slug } = params;

    try {
        const response1 = await axios.post(`https://ssostage.amarujala.com/v1/chat/vendor_status`, {
            chat_id: slug,
            status: 'completed',
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const response2 = await axios.post(`http://ssostage.amarujala.com/v1/chat/status`, {
            chat_id: slug,
            status: 'completed',
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response1.status === 200 || response2.status === 200) {
            return new Response("Weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response("Munna nahi hoga tum se", {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        console.error('Error fetching:', error.message);
        return new Response("Munna nahi hoga tum se", {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
