import jyotish from "../../data/jyotish";

export async function GET(req) {
  // Fetch Authorization header
  const authHeader = req.headers.get("authorization");

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


  const data = {
    "feedId": 188,
    "feedVersionId": 189,
    "userId": "1",
    "sessionId": "c8680837-2410-47a9-a016-fca2b17f5059",
    "pageId": "ea0bd85b-0e41-4ecf-9fee-bd1b7b95dd61",
    "pageNo": 1,
    "items": [
        {
            "position": 1,
            "componentId": 3,
            "contentProvider": 3,
            "content": {
                "id": "MJ_BANNER_HOME_HI",
                "propertyId": null,
                "type": "header-widget",
                "dateModified": "2025-04-21T17:19:19.397626",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "title_hn": "बैनर",
                    "url": "https://spiderstagejsapi.amarujala.com/mj/api/banner",
                    "height": null
                },
                "bookmarked": false
            }
        },
        {
            "position": 2,
            "componentId": 3,
            "contentProvider": 3,
            "content": {
                "id": "MJ_TOOLS_HI",
                "propertyId": null,
                "type": "header-widget",
                "dateModified": "2025-04-21T17:19:19.397626",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "title_hn": "टूल",
                    "url": "https://spiderstagejsapi.amarujala.com/mj/api/tools/list",
                    "height": null
                },
                "bookmarked": false
            }
        },
        {
            "position": 3,
            "componentId": 5,
            "contentProvider": 3,
            "content": {
                "id": "MJ_ASTRO_VEDIC_HI",
                "propertyId": null,
                "type": "discovery-url",
                "dateModified": "2025-04-21T17:19:19.397626",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "title": "वैदिक ज्योतिष",
                    "url": "https://spiderstagejsapi.amarujala.com/mj/api/astro?page=1&expertise=ज्योतिष शास्त्र&lang=hi&limit=7"
                },
                "bookmarked": false
            }
        },
        {
            "position": 4,
            "componentId": 5,
            "contentProvider": 3,
            "content": {
                "id": "MJ_ASTRO_TAROT_HI",
                "propertyId": null,
                "type": "discovery-url",
                "dateModified": "2025-04-21T17:19:19.397626",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "title": "टैरो",
                    "url": "https://spiderstagejsapi.amarujala.com/mj/api/astro?expertise=tarot&page=1&lang=en&limit=7"
                },
                "bookmarked": false
            }
        },
        {
            "position": 5,
            "componentId": 5,
            "contentProvider": 3,
            "content": {
                "id": "MJ_POOJA_HI",
                "propertyId": null,
                "type": "discovery-url",
                "dateModified": "2025-04-21T17:19:19.397626",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "title": "पूजा",
                    "url": "https://spiderstagejsapi.amarujala.com/mj/api/list?type=pooja&page_no=1&limit=7"
                },
                "bookmarked": false
            }
        },
        {
            "position": 6,
            "componentId": 1,
            "contentProvider": 3,
            "content": {
                "id": "MJ_BLOGS_HI",
                "propertyId": null,
                "type": "discovery",
                "dateModified": "2025-04-09T16:32:55.631268",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "feed": {
                        "feedId": 185,
                        "feedVersionId": 186,
                        "userId": "1",
                        "sessionId": "c8680837-2410-47a9-a016-fca2b17f5059",
                        "pageId": "21624f58-e795-4384-b113-65a3a26ef21c",
                        "pageNo": 1,
                        "items": [
                            {
                                "position": 1,
                                "componentId": 102,
                                "contentProvider": 3,
                                "content": {
                                    "id": "67d827ba7655850c1104917d",
                                    "propertyId": null,
                                    "type": "story",
                                    "dateModified": "2025-03-18T13:15:02.848",
                                    "categories": [
                                        10542
                                    ],
                                    "categoryLabel": "हिन्दी ब्लॉग्स",
                                    "categorySlug": "blogs-hindi",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "full_slug": "blogs-hindi/aaj-ka-love-rashifal-19-march-2025-today-astrology-love-prediction-horoscope-dainik",
                                        "image": "/myjyotish.com/2025/03/17/aaj-ka-love-rashifal_64f7793e5333da1c70432d877c948a9b.jpeg",
                                        "custom_attribute_value": null,
                                        "is_premium": false,
                                        "title_hn": "Aaj Ka Love Rashifal 19 March 2025 : पार्टनर के लिए निकालें कुछ खास समय तभी बनेगी बात, जानें आज का लव राशिफल",
                                        "synopsis": "Aaj Ka Love Rashifal 19 March 2025 : पार्टनर के लिए निकालें कुछ खास समय तभी बनेगी बात, जानें आज का लव राशिफल",
                                        "custom_attribute": null
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 2,
                                "componentId": 101,
                                "contentProvider": 1,
                                "content": {
                                    "id": "67d82a8df0fc6b7d0f00cd63",
                                    "propertyId": null,
                                    "type": "story",
                                    "dateModified": "2025-03-18T12:23:02.129",
                                    "categories": [
                                        10542
                                    ],
                                    "categoryLabel": "हिन्दी ब्लॉग्स",
                                    "categorySlug": "blogs-hindi",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "full_slug": "blogs-hindi/mesh-masik-rashifal-april-2025-there-may-be-big-changes-for-aries-people-in-the-month-of-april-know-the-mont",
                                        "image": "/myjyotish.com/2025/03/17/mesh-masik-rashifal-april_9f04126c516f96017a82151543b930fa.jpeg",
                                        "custom_attribute_value": null,
                                        "is_premium": false,
                                        "title_hn": "Mesh Masik Rashifal April 2025: मेष राशि वालों के लिए अप्रैल माह में हो सकते हैं बड़े बदलाव, जाने मासिक राशिफल",
                                        "synopsis": "Mesh Masik Rashifal April 2025: मेष राशि वालों के लिए अप्रैल माह में हो सकते हैं बड़े बदलाव, जाने मासिक राशिफल",
                                        "custom_attribute": null
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 3,
                                "componentId": 101,
                                "contentProvider": 1,
                                "content": {
                                    "id": "67d9013d128d73837b024bd3",
                                    "propertyId": null,
                                    "type": "story",
                                    "dateModified": "2025-03-18T10:45:14.145",
                                    "categories": [
                                        10542
                                    ],
                                    "categoryLabel": "हिन्दी ब्लॉग्स",
                                    "categorySlug": "blogs-hindi",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "full_slug": "blogs-hindi/budh-asta-2025-in-meen-rashi-negative-impact-on-zodiac-sign",
                                        "image": "/myjyotish.com/2025/01/28/budh-asta-2025_ffddc97ba69be7765370cbcc27cacad4.jpeg",
                                        "custom_attribute_value": null,
                                        "is_premium": false,
                                        "title_hn": "Budh Asta 2025: बुध हुए अस्त, इन चार राशियों को रहना होना सचेत",
                                        "synopsis": "Budh Asta 2025: बुध हुए अस्त, इन चार राशियों को रहना होना सचेत",
                                        "custom_attribute": null
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 4,
                                "componentId": 101,
                                "contentProvider": 1,
                                "content": {
                                    "id": "67d82e16a0b306ab4d02d0ed",
                                    "propertyId": null,
                                    "type": "story",
                                    "dateModified": "2025-03-18T10:00:02.849",
                                    "categories": [
                                        10542
                                    ],
                                    "categoryLabel": "हिन्दी ब्लॉग्स",
                                    "categorySlug": "blogs-hindi",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "full_slug": "blogs-hindi/rang-panchami-2025-date-rang-panchami-will-be-celebrated-on-march-19-know-the-specialty-and-worship-method-o",
                                        "image": "/myjyotish.com/2025/03/17/rang-panchami-puja_c40d7d267d573d0bd3ee6b4268c33e3b.jpeg",
                                        "custom_attribute_value": null,
                                        "is_premium": false,
                                        "title_hn": "Rang Panchami 2025 Date: 19 मार्च को मनाई जाएगी रंग पंचमी, जानें इस दिन की विशेषता और पूजा विधि",
                                        "synopsis": "Rang Panchami 2025 Date: 19 मार्च को मनाई जाएगी रंग पंचमी, जानें इस दिन की विशेषता और पूजा विधि ",
                                        "custom_attribute": null
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 5,
                                "componentId": 101,
                                "contentProvider": 1,
                                "content": {
                                    "id": "67d81b28a3d04c4b94001721",
                                    "propertyId": null,
                                    "type": "story",
                                    "dateModified": "2025-03-17T18:43:40.278",
                                    "categories": [
                                        10542
                                    ],
                                    "categoryLabel": "हिन्दी ब्लॉग्स",
                                    "categorySlug": "blogs-hindi",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "full_slug": "blogs-hindi/aaj-ka-panchang-18-march-2025-shubh-muhurat-yoga-karna-abhijeet-muhurat-rahu-kaal",
                                        "image": "/myjyotish.com/2024/09/17/aaj-ka-panchang-18-september-2024_174e82088992989edc680272d2333d50.jpeg",
                                        "custom_attribute_value": null,
                                        "is_premium": false,
                                        "title_hn": "Aaj ka Panchang 18 March 2025: आज बन रहे हैं कई योग, पढ़ें 18 मार्च का पंचांग",
                                        "synopsis": "Aaj ka Panchang 18 March 2025: आज होली पर बन रहे हैं कई योग, पढ़ें 18 मार्च का पंचांग",
                                        "custom_attribute": null
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 6,
                                "componentId": 101,
                                "contentProvider": 1,
                                "content": {
                                    "id": "67d6e8b85c818f09ca08db5d",
                                    "propertyId": null,
                                    "type": "story",
                                    "dateModified": "2025-03-17T17:00:02.873",
                                    "categories": [
                                        10542
                                    ],
                                    "categoryLabel": "हिन्दी ब्लॉग्स",
                                    "categorySlug": "blogs-hindi",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "full_slug": "blogs-hindi/aaj-ka-rashifal-18-march-today-s-horoscope-prediction-of-all-12-zodiac-sign",
                                        "image": "/myjyotish.com/2025/03/16/aaj-ka-rashifal_897a1d712e08b806db91451783be3a97.jpeg",
                                        "custom_attribute_value": null,
                                        "is_premium": false,
                                        "title_hn": "Aaj Ka Rashifal : आज का दिन रहेगा इन राशियों के लिए खास पूरे होंगे अधूरे काम, जानें दैनिक राशिफल",
                                        "synopsis": "Aaj Ka Rashifal : आज का दिन रहेगा इन राशियों के लिए खास पूरे होंगे अधूरे काम, जानें दैनिक राशिफल",
                                        "custom_attribute": null
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 7,
                                "componentId": 101,
                                "contentProvider": 1,
                                "content": {
                                    "id": "67d6ec3175a8fcc5920e1682",
                                    "propertyId": null,
                                    "type": "story",
                                    "dateModified": "2025-03-17T13:15:03.08",
                                    "categories": [
                                        10542
                                    ],
                                    "categoryLabel": "हिन्दी ब्लॉग्स",
                                    "categorySlug": "blogs-hindi",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "full_slug": "blogs-hindi/aaj-ka-love-rashifal-18-march-2025-today-astrology-love-prediction-horoscope",
                                        "image": "/myjyotish.com/2025/03/16/aaj-ka-love-rashifal_7bbef90a2407f72ad8429b2f3d19dbf1.jpeg",
                                        "custom_attribute_value": null,
                                        "is_premium": false,
                                        "title_hn": "Aaj Ka Love Rashifal 18 March 2025 : रिश्ते में समझ और स्नेह बढ़ेगा, कुछ राशियों को मिलेगा नया रोमांटिक अनुभव",
                                        "synopsis": "Aaj Ka Love Rashifal 18 March 2025 : रिश्ते में समझ और स्नेह बढ़ेगा, कुछ राशियों को मिलेगा नया रोमांटिक अनुभव",
                                        "custom_attribute": null
                                    },
                                    "bookmarked": false
                                }
                            }
                        ],
                        "feedTitle": "Blogs Listing Hindi"
                    },
                    "title_hn": "ज्योतिष ब्लॉग",
                    "icon_image": "",
                    "feed_id": 185
                },
                "bookmarked": false
            }
        },
        {
            "position": 7,
            "componentId": 1,
            "contentProvider": 3,
            "content": {
                "id": "MJ_VIDEO_HI",
                "propertyId": null,
                "type": "discovery",
                "dateModified": "2025-04-09T16:29:23.607351",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "feed": {
                        "feedId": 187,
                        "feedVersionId": 188,
                        "userId": "1",
                        "sessionId": "c8680837-2410-47a9-a016-fca2b17f5059",
                        "pageId": "92eb7c5d-c01d-4d6a-a3a8-e517c71f3ce9",
                        "pageNo": 1,
                        "items": [],
                        "feedTitle": "Video Listing Hindi"
                    },
                    "title_hn": "एमजे वीडियो",
                    "icon_image": "",
                    "feed_id": 187
                },
                "bookmarked": false
            }
        },
        {
            "position": 8,
            "componentId": 3,
            "contentProvider": 3,
            "content": {
                "id": "MJ_CUSTOMER_SAYS_HI",
                "propertyId": null,
                "type": "header-widget",
                "dateModified": "2025-04-21T17:19:19.397626",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "title_hn": "हमारे ग्राहक क्या कहते हैं",
                    "url": "https://spiderstagejsapi.amarujala.com/mj/api/astrologer/reviews?limit=2",
                    "height": null
                },
                "bookmarked": false
            }
        }
    ],
    "feedTitle": "MJ Home Page"
};

  return Response.json(data);
}
