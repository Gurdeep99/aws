import jyotish from "../../data/jyotish";

export async function GET(req) {
  // Fetch Authorization header
  const authHeader = req.headers.get("authorization");
  const lang = req.headers.get("lang");

  // Fetch query parameters
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit") || "10"; // Default value 10
  const skip = searchParams.get("skip") || "0"; // Default value 0

  if (authHeader !== "Bearer 117f34ce-8402-4003-a6de-cd0d28b4c216") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const data_en = {
    banner: {
      image:
        "https://spidercmsstage.amarujala.com/assets/images/myjyotish.com/2025/04/07/frame-1686551514_67f3742cb45d6.jpg",
    },
    tools: [
      {
        name: "Panchang",
        slug: null,
        image: null,
      },
      {
        name: "Horoscope",
        slug: null,
        image: null,
      },
      {
        name: "Kundli",
        slug: null,
        image: null,
      },
      {
        name: "Free Chat",
        slug: null,
        image: null,
      },
    ],
    astrologers: {
      vedic: {
        section_title: "Vedic Jyotish",
        list: [
          {
            _id: "67e670bd3748c72ddf53be90",
            name: "test",
            profile_pic: "https://userimg.amarujala.com/images/photo.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-28T15:22:36+05:30",
            profile_id: "67330a2b546e970f88638189",
          },
          {
            _id: "5c21073042c792295c74a7c4",
            name: "Myjyotish Expert",
            profile_pic:
              "https://userimg.amarujala.com/2019/3/1/5c78e5746873a.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "OFFLINE",
            updated_at: "2025-03-25T12:50:13+05:30",
            profile_id: "5c19f385a7bc5d75373a83c7",
          },
          {
            _id: "673c35f3eba3dc57f816f57d",
            name: "vaibhav gupta",
            profile_pic:
              "https://userimg.amarujala.com/2024/11/19/673c35d3835ee.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-10T13:45:33+05:30",
            profile_id: "673c35d5f5ba8d5929264d17",
          },
        ],
      },
      numerology: {
        section_title: "Numerology",
        list: [
          {
            _id: "67e670bd3748c72ddf53be90",
            name: "test",
            profile_pic: "https://userimg.amarujala.com/images/photo.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-28T15:22:36+05:30",
            profile_id: "67330a2b546e970f88638189",
          },
          {
            _id: "673c35f3eba3dc57f816f57d",
            name: "vaibhav gupta",
            profile_pic:
              "https://userimg.amarujala.com/2024/11/19/673c35d3835ee.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-10T13:45:33+05:30",
            profile_id: "673c35d5f5ba8d5929264d17",
          },
        ],
      },
    },
    reviews: {
      section_title: "What our customer Says",
      list: [
        {
          first_name: "test",
          last_name: "",
          comment: "Good",
          review_title: null,
          rating: "5",
          updated_at: "2025-01-24T06:29:29.199Z",
        },
        {
          first_name: "Amit",
          last_name: "Singh",
          comment: "Why my delivery status is still pending",
          review_title: null,
          rating: "1",
          updated_at: "2021-11-25T11:26:21.000Z",
        },
        {
          first_name: "Amit",
          last_name: "Singh",
          comment: "why my delivery status is still pending??",
          review_title: null,
          rating: "1",
          updated_at: "2021-11-25T11:25:50.000Z",
        },
        {
          first_name: "Suraj",
          last_name: "Pratap",
          comment: null,
          review_title: null,
          rating: "4",
          updated_at: "2021-08-12T14:57:43.000Z",
        },
        {
          first_name: "Raju",
          last_name: "Singh",
          comment: null,
          review_title: null,
          rating: "5",
          updated_at: "2021-08-04T15:48:41.000Z",
        },
        {
          first_name: "Amit",
          last_name: "Singh",
          comment: null,
          review_title: null,
          rating: "5",
          updated_at: "2021-07-26T14:21:21.000Z",
        },
        {
          first_name: "Nalin",
          last_name: "Sharma",
          comment:
            "It was in 2019 that me and my husband completed 8 years of marriage. Sadly, we could not suffice the societal expectation of bearing a child over these years. Consulting the best of all doctors proved to be of no use. With each passing the day the inner void kept growing big. Being a homemaker, it affected me more than my husband. I was in dire need of help to prevent me from sinking. I'm super blessed that my neighbour supported me during the madly tough time and took me to an astrologer whose",
          review_title: "Easy to deal with site",
          rating: "5",
          updated_at: "2020-12-18T12:11:13.000Z",
        },
      ],
    },
  };

  const data_hi = {
    banner: {
      image:
        "https://spidercmsstage.amarujala.com/assets/images/myjyotish.com/2025/04/07/frame-1686551514_67f3742cb45d6.jpg",
    },
    tools: [
      {
        name: "पंचांग",
        slug: null,
        image: "Horoscope",
      },
      {
        name: "राशिफल",
        slug: null,
        image: "Horoscope",
      },
      {
        name: "कुंडली",
        slug: null,
        image: "Horoscope",
      },
      {
        name: "मुफ्त बातचीत",
        slug: null,
        image: "Horoscope",
      },
    ],
    astrologers: {
      vedic: {
        section_title: "वैदिक ज्योतिष",
        list: [
          {
            _id: "67e670bd3748c72ddf53be90",
            name: "test",
            profile_pic: "https://userimg.amarujala.com/images/photo.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-28T15:22:36+05:30",
            profile_id: "67330a2b546e970f88638189",
          },
          {
            _id: "5c21073042c792295c74a7c4",
            name: "माई ज्योतिष विशेषज्ञ",
            profile_pic:
              "https://userimg.amarujala.com/2019/3/1/5c78e5746873a.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "OFFLINE",
            updated_at: "2025-03-25T12:50:13+05:30",
            profile_id: "5c19f385a7bc5d75373a83c7",
          },
          {
            _id: "673c35f3eba3dc57f816f57d",
            name: "vaibhav gupta",
            profile_pic:
              "https://userimg.amarujala.com/2024/11/19/673c35d3835ee.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-10T13:45:33+05:30",
            profile_id: "673c35d5f5ba8d5929264d17",
          },
        ],
      },
      numerology: {
        section_title: "अंक ज्योतिष",
        list: [
          {
            _id: "67e670bd3748c72ddf53be90",
            name: "test",
            profile_pic: "https://userimg.amarujala.com/images/photo.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-28T15:22:36+05:30",
            profile_id: "67330a2b546e970f88638189",
          },
          {
            _id: "673c35f3eba3dc57f816f57d",
            name: "vaibhav gupta",
            profile_pic:
              "https://userimg.amarujala.com/2024/11/19/673c35d3835ee.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-10T13:45:33+05:30",
            profile_id: "673c35d5f5ba8d5929264d17",
          },
        ],
      },
      tarot: {
        section_title: "tarot",
        list: [
          {
            _id: "67e670bd3748c72ddf53be90",
            name: "test",
            profile_pic: "https://userimg.amarujala.com/images/photo.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-28T15:22:36+05:30",
            profile_id: "67330a2b546e970f88638189",
          },
          {
            _id: "67e670bd3748c72ddf53be90",
            name: "test",
            profile_pic: "https://userimg.amarujala.com/images/photo.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-28T15:22:36+05:30",
            profile_id: "67330a2b546e970f88638189",
          },
          {
            _id: "67e670bd3748c72ddf53be90",
            name: "test",
            profile_pic: "https://userimg.amarujala.com/images/photo.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-28T15:22:36+05:30",
            profile_id: "67330a2b546e970f88638189",
          },
          {
            _id: "67e670bd3748c72ddf53be90",
            name: "test",
            profile_pic: "https://userimg.amarujala.com/images/photo.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-28T15:22:36+05:30",
            profile_id: "67330a2b546e970f88638189",
          },
          {
            _id: "67e670bd3748c72ddf53be90",
            name: "test",
            profile_pic: "https://userimg.amarujala.com/images/photo.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-28T15:22:36+05:30",
            profile_id: "67330a2b546e970f88638189",
          },
          {
            _id: "67e670bd3748c72ddf53be90",
            name: "test",
            profile_pic: "https://userimg.amarujala.com/images/photo.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-28T15:22:36+05:30",
            profile_id: "67330a2b546e970f88638189",
          },
          {
            _id: "673c35f3eba3dc57f816f57d",
            name: "vaibhav gupta",
            profile_pic:
              "https://userimg.amarujala.com/2024/11/19/673c35d3835ee.jpg",
            social: {
              youtube: "",
              twitter: "",
              facebook: "",
            },
            presence: "ONLINE",
            updated_at: "2025-03-10T13:45:33+05:30",
            profile_id: "673c35d5f5ba8d5929264d17",
          },
        ],
      },
    },
    
    reviews: {
      section_title: "हमारे ग्राहक क्या कहते हैं",
      list: [
        {
          first_name: "test",
          last_name: "",
          comment: "Good",
          review_title: null,
          rating: "5",
          updated_at: "2025-01-24T06:29:29.199Z",
        },
        {
          first_name: "Amit",
          last_name: "Singh",
          comment: "Why my delivery status is still pending",
          review_title: null,
          rating: "1",
          updated_at: "2021-11-25T11:26:21.000Z",
        },
        {
          first_name: "Amit",
          last_name: "Singh",
          comment: "why my delivery status is still pending??",
          review_title: null,
          rating: "1",
          updated_at: "2021-11-25T11:25:50.000Z",
        },
        {
          first_name: "Suraj",
          last_name: "Pratap",
          comment: null,
          review_title: null,
          rating: "4",
          updated_at: "2021-08-12T14:57:43.000Z",
        },
        {
          first_name: "Raju",
          last_name: "Singh",
          comment: null,
          review_title: null,
          rating: "5",
          updated_at: "2021-08-04T15:48:41.000Z",
        },
        {
          first_name: "Amit",
          last_name: "Singh",
          comment: null,
          review_title: null,
          rating: "5",
          updated_at: "2021-07-26T14:21:21.000Z",
        },
        {
          first_name: "Nalin",
          last_name: "Sharma",
          comment:
            "It was in 2019 that me and my husband completed 8 years of marriage. Sadly, we could not suffice the societal expectation of bearing a child over these years. Consulting the best of all doctors proved to be of no use. With each passing the day the inner void kept growing big. Being a homemaker, it affected me more than my husband. I was in dire need of help to prevent me from sinking. I'm super blessed that my neighbour supported me during the madly tough time and took me to an astrologer whose",
          review_title: "Easy to deal with site",
          rating: "5",
          updated_at: "2020-12-18T12:11:13.000Z",
        },
      ],
    },
  };

  return Response.json(lang === "hi" ? data_hi : data_en);
}
