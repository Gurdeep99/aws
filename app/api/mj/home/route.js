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
    "sessionId": "5ac00e67-a972-4a96-8e05-bd502663f055",
    "pageId": "8e7f7af3-d56a-4c9b-bc8a-21b2effd9671",
    "pageNo": 1,
    "items": [
        {
            "position": 1,
            "componentId": 3,
            "contentProvider": 3,
            "content": {
                "id": "MJ_BANNER_HOME_EN",
                "propertyId": null,
                "type": "header-widget",
                "dateModified": "2025-04-21T17:32:31.71459",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "title_hn": "Banner",
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
                "id": "MJ_TOOLS_EN",
                "propertyId": null,
                "type": "header-widget",
                "dateModified": "2025-04-21T17:32:31.71459",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "title_hn": "Tools",
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
                "id": "MJ_ASTRO_VEDIC_EN",
                "propertyId": null,
                "type": "discovery-url",
                "dateModified": "2025-04-21T17:32:31.71459",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "title": "Vedic Jyotish",
                    "url": "https://spiderstagejsapi.amarujala.com/mj/api/astro?page=1&expertise=ज्योतिष शास्त्र&lang=en&limit=7"
                },
                "bookmarked": false
            }
        },
        {
            "position": 4,
            "componentId": 5,
            "contentProvider": 3,
            "content": {
                "id": "MJ_ASTRO_TAROT_EN",
                "propertyId": null,
                "type": "discovery-url",
                "dateModified": "2025-04-21T17:32:31.71459",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "title": "Tarot",
                    "url": "https://spiderstagejsapi.amarujala.com/mj/api/astro?page=1&expertise=tarot&lang=en&limit=7"
                },
                "bookmarked": false
            }
        },
        {
            "position": 5,
            "componentId": 5,
            "contentProvider": 3,
            "content": {
                "id": "MJ_POOJA_EN",
                "propertyId": null,
                "type": "discovery-url",
                "dateModified": "2025-04-21T17:32:31.71459",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "title": "Pooja",
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
                "id": "MJ_BLOGS_EN",
                "propertyId": null,
                "type": "discovery",
                "dateModified": "2025-04-09T16:32:24.272328",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "feed": {
                        "feedId": 184,
                        "feedVersionId": 185,
                        "userId": "1",
                        "sessionId": "5ac00e67-a972-4a96-8e05-bd502663f055",
                        "pageId": "47a27a5a-6d75-4a89-b864-557ae6f0a5fb",
                        "pageNo": 1,
                        "items": [
                            {
                                "position": 1,
                                "componentId": 108,
                                "contentProvider": 3,
                                "content": {
                                    "id": "60b8c8380b77290cdb26b215",
                                    "propertyId": null,
                                    "type": "video",
                                    "dateModified": "2025-04-01T00:00:00",
                                    "categories": [
                                        10528
                                    ],
                                    "categoryLabel": "Astrology Blogs",
                                    "categorySlug": "astrology-blogs",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "image": "/en.myjyotish.com/2021/06/03/meaning-and-benefits-of-chanting-rudrashtakam_1622722588.png",
                                        "video_duration": "",
                                        "full_slug": "video/astrology-blogs/meaning-and-benefits-of-chanting-rudrashtakam",
                                        "is_premium": false,
                                        "video_url": "www.youtube.com/embed/96AGxHWIpws",
                                        "title_hn": "Meaning and benefits of chanting Rudrashtakam",
                                        "mute": false,
                                        "is_native_player": false,
                                        "synopsis": "The only way to change your life is Rudrashtakam which is going to fulfil all your wishes",
                                        "youtube_id": "96AGxHWIpws",
                                        "autoplay": false,
                                        "video_type": "youtube"
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 2,
                                "componentId": 108,
                                "contentProvider": 1,
                                "content": {
                                    "id": "60b76def83ea7d14063d611f",
                                    "propertyId": null,
                                    "type": "video",
                                    "dateModified": "2025-04-01T00:00:00",
                                    "categories": [
                                        10528
                                    ],
                                    "categoryLabel": "Astrology Blogs",
                                    "categorySlug": "astrology-blogs",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "image": "/en.myjyotish.com/2021/06/02/how-mirror-influence-your-life_1622633933.png",
                                        "video_duration": "",
                                        "full_slug": "video/astrology-blogs/vastu-tips-for-having-mirror-in-your-house",
                                        "is_premium": false,
                                        "video_url": "www.youtube.com/embed/PHRAU2OxELo",
                                        "title_hn": "Vastu tips for having mirror in your house",
                                        "mute": false,
                                        "is_native_player": false,
                                        "synopsis": "A mirror is a very small object, but it plays an important role in bringing positive energy to your house.",
                                        "youtube_id": "PHRAU2OxELo",
                                        "autoplay": false,
                                        "video_type": "youtube"
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 3,
                                "componentId": 108,
                                "contentProvider": 1,
                                "content": {
                                    "id": "60cc855b8ebc3e32351b9146",
                                    "propertyId": null,
                                    "type": "video",
                                    "dateModified": "2025-04-01T00:00:00",
                                    "categories": [
                                        10528
                                    ],
                                    "categoryLabel": "Astrology Blogs",
                                    "categorySlug": "astrology-blogs",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "image": "/en.myjyotish.com/2021/06/18/palmistry_1624016193.jpeg",
                                        "video_duration": "1:46",
                                        "full_slug": "video/astrology-blogs/palmistry-know-the-various-significant-palm-lines",
                                        "is_premium": false,
                                        "video_url": "www.youtube.com/embed/CChVeHT3Kno",
                                        "title_hn": "Palmistry: Know the various significant Palm Lines",
                                        "mute": false,
                                        "is_native_player": false,
                                        "synopsis": "Palmistry: Know the various significant Palm Lines",
                                        "youtube_id": "CChVeHT3Kno",
                                        "autoplay": false,
                                        "video_type": "youtube"
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 4,
                                "componentId": 108,
                                "contentProvider": 1,
                                "content": {
                                    "id": "60b64e278ebc3e38087758c1",
                                    "propertyId": null,
                                    "type": "video",
                                    "dateModified": "2025-04-01T00:00:00",
                                    "categories": [
                                        10528
                                    ],
                                    "categoryLabel": "Astrology Blogs",
                                    "categorySlug": "astrology-blogs",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "image": "HpoWvJ5NlJI.0000000.jpg",
                                        "video_duration": "",
                                        "full_slug": "video/astrology-blogs/know-what-is-the-benefit-of-serving-animals-and-birds-in-life",
                                        "is_premium": false,
                                        "video_url": "https://videocdn.amarujala.com/embed-vod/HpoWvJ5NlJI",
                                        "title_hn": "Know what is the benefit of serving animals and birds in life",
                                        "mute": false,
                                        "is_native_player": true,
                                        "synopsis": "Feeding the animals, we not only support someone in need but also add to our good Karma. In our Vedas and scriptures also, there is mention of the importance of feeding animals, and how by feeding animals, you can absolve your sins.",
                                        "youtube_id": "HpoWvJ5NlJI",
                                        "autoplay": false,
                                        "video_type": "auw_video"
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 5,
                                "componentId": 108,
                                "contentProvider": 1,
                                "content": {
                                    "id": "60b646ef8ebc3e7fd658f506",
                                    "propertyId": null,
                                    "type": "video",
                                    "dateModified": "2025-04-01T00:00:00",
                                    "categories": [
                                        10528
                                    ],
                                    "categoryLabel": "Astrology Blogs",
                                    "categorySlug": "astrology-blogs",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "image": "/en.myjyotish.com/2021/06/01/significance-of-fire-and-its-vastu-tips_1622558289.png",
                                        "video_duration": "",
                                        "full_slug": "video/astrology-blogs/significance-of-fire-and-its-vastu-tips",
                                        "is_premium": false,
                                        "video_url": "www.youtube.com/embed/T5oKrYlUVEM",
                                        "title_hn": "Significance of Fire and its VASTU TIPS",
                                        "mute": false,
                                        "is_native_player": false,
                                        "synopsis": "Every element has some significance in terms of directions. Agni, i.e. fire, is related to the south-east. It is said that everything related to fire should be kept in this direction as it is auspicious.",
                                        "youtube_id": "T5oKrYlUVEM",
                                        "autoplay": false,
                                        "video_type": "youtube"
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 6,
                                "componentId": 108,
                                "contentProvider": 1,
                                "content": {
                                    "id": "60b632258ebc3e17554e9f6f",
                                    "propertyId": null,
                                    "type": "video",
                                    "dateModified": "2025-04-01T00:00:00",
                                    "categories": [
                                        10528
                                    ],
                                    "categoryLabel": "Astrology Blogs",
                                    "categorySlug": "astrology-blogs",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "image": "/en.myjyotish.com/2021/06/01/manglik-defect-is-formed-from-mars-know-remedies_1622552871.png",
                                        "video_duration": "",
                                        "full_slug": "video/astrology-blogs/manglik-dosh-is-created-by-mars-leads-trouble-in-marriage-know-the-remedy",
                                        "is_premium": false,
                                        "video_url": "www.youtube.com/embed/p8tAgeBkn-E",
                                        "title_hn": "Manglik Dosh is created by Mars, leads trouble in marriage, know the remedy",
                                        "mute": false,
                                        "is_native_player": false,
                                        "synopsis": "Since Mars is considered the planet of war, Mangal dosh creates highly unfavorable circumstances for marriage.",
                                        "youtube_id": "p8tAgeBkn-E",
                                        "autoplay": false,
                                        "video_type": "youtube"
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 7,
                                "componentId": 101,
                                "contentProvider": 1,
                                "content": {
                                    "id": "673240f1b53f970c870abc3d",
                                    "propertyId": null,
                                    "type": "story",
                                    "dateModified": "2024-11-11T23:07:57.11",
                                    "categories": [
                                        10528
                                    ],
                                    "categoryLabel": "Astrology Blogs",
                                    "categorySlug": "astrology-blogs",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "full_slug": "astrology-blogs/kumbh-mela-date-how-is-the-date-of-kumbh-mela-decided-know-the-story-behind-it",
                                        "image": "/en.myjyotish.com/2024/11/11/kumbh_f4ad8024bdd58ffda56bc7a96f656894.jpeg",
                                        "custom_attribute_value": null,
                                        "is_premium": false,
                                        "title_hn": "Kumbh Mela Date: How is the date of Kumbh Mela decided? Know the story behind it",
                                        "synopsis": "Kumbh Mela Date: Maha Kumbh is organized after every 12 years, but how are the dates of Kumbh Mela decided? Let us know in this article how the date of Kumbh Mela is calculated.",
                                        "custom_attribute": null
                                    },
                                    "bookmarked": false
                                }
                            }
                        ],
                        "feedTitle": "Blogs Listing English"
                    },
                    "title_hn": "JYOTISH BLOGS",
                    "icon_image": "",
                    "feed_id": 184
                },
                "bookmarked": false
            }
        },
        {
            "position": 7,
            "componentId": 1,
            "contentProvider": 3,
            "content": {
                "id": "MJ_VIDEO_EN",
                "propertyId": null,
                "type": "discovery",
                "dateModified": "2025-04-09T16:31:13.509969",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "feed": {
                        "feedId": 186,
                        "feedVersionId": 187,
                        "userId": "1",
                        "sessionId": "5ac00e67-a972-4a96-8e05-bd502663f055",
                        "pageId": "7ee9d9b3-cfba-4c18-ab87-03dd22e36af5",
                        "pageNo": 1,
                        "items": [
                            {
                                "position": 1,
                                "componentId": 108,
                                "contentProvider": 3,
                                "content": {
                                    "id": "60ba206f8ebc3eb4e82f78d5",
                                    "propertyId": null,
                                    "type": "video",
                                    "dateModified": "2025-04-01T00:00:00",
                                    "categories": [],
                                    "categoryLabel": null,
                                    "categorySlug": null,
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "image": "/en.myjyotish.com/2021/06/04/significance-of-sky-element-and-brahmin-place_1622810604.png",
                                        "video_duration": "",
                                        "full_slug": "video/astrology-blogs/significance-of-sky-element-and-brahman",
                                        "is_premium": false,
                                        "video_url": "www.youtube.com/embed/C09dhMd68o8",
                                        "title_hn": "Significance of sky element and Brahman",
                                        "mute": false,
                                        "is_native_player": false,
                                        "synopsis": "In Hinduism, the sky is synonymous with space. It is beyond the mind. Hence, it is compared to Brahman himself.",
                                        "youtube_id": "C09dhMd68o8",
                                        "autoplay": false,
                                        "video_type": "youtube"
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 2,
                                "componentId": 108,
                                "contentProvider": 1,
                                "content": {
                                    "id": "60b7a7b7c09aad6a5670c2e0",
                                    "propertyId": null,
                                    "type": "video",
                                    "dateModified": "2025-04-01T00:00:00",
                                    "categories": [
                                        10530
                                    ],
                                    "categoryLabel": "Numerology Predictions",
                                    "categorySlug": "numerology-predictions",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "image": "/en.myjyotish.com/2021/06/02/these-days-of-the-month-of-june-which-can-prove-to-be-auspicious-for-you_1622648500.jpeg",
                                        "video_duration": "",
                                        "full_slug": "video/numerology-predictions/the-miraculous-days-of-the-month-of-june-which-can-prove-to-be-auspicious-for-you",
                                        "is_premium": false,
                                        "video_url": "www.youtube.com/embed/dVRDNJyb84",
                                        "title_hn": "The miraculous days of the month of June which can prove to be auspicious for you",
                                        "mute": false,
                                        "is_native_player": false,
                                        "synopsis": "the monthly horoscope of June 2021 to know which zodiacs are destined to shine and who have to face some other challenges.",
                                        "youtube_id": "dVRDNJyb84",
                                        "autoplay": false,
                                        "video_type": "youtube"
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 3,
                                "componentId": 108,
                                "contentProvider": 1,
                                "content": {
                                    "id": "60b7888abf4504270c4e4960",
                                    "propertyId": null,
                                    "type": "video",
                                    "dateModified": "2025-04-01T00:00:00",
                                    "categories": [
                                        10531
                                    ],
                                    "categoryLabel": "Horoscope",
                                    "categorySlug": "horoscope",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "image": "/en.myjyotish.com/2021/06/02/mars-transit-in-cancer-2021_1622640765.png",
                                        "video_duration": "",
                                        "full_slug": "video/horoscope/mangal-dev-to-enter-in-the-house-cancer-know-what-will-be-the-effect-and-its-remedies",
                                        "is_premium": false,
                                        "video_url": "www.youtube.com/embed/8FVvWbrTNB4",
                                        "title_hn": "Mangal Dev to enter in the house Cancer, know what will be the effect and its remedies",
                                        "mute": false,
                                        "is_native_player": false,
                                        "synopsis": "When Mars is in Cancer the native does not like to work, which appears difficult for him/her. Even a small task seem huge.",
                                        "youtube_id": "8FVvWbrTNB4",
                                        "autoplay": false,
                                        "video_type": "youtube"
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 4,
                                "componentId": 108,
                                "contentProvider": 1,
                                "content": {
                                    "id": "60bf66d68ebc3e01810c4e3e",
                                    "propertyId": null,
                                    "type": "video",
                                    "dateModified": "2025-04-01T00:00:00",
                                    "categories": [],
                                    "categoryLabel": null,
                                    "categorySlug": null,
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "image": "/en.myjyotish.com/2021/06/08/what-is-your-relation-between-metals-and-gems_1623156091.png",
                                        "video_duration": "",
                                        "full_slug": "video/what-is-your-relation-between-metals-and-gems",
                                        "is_premium": false,
                                        "video_url": "www.youtube.com/embed/80n3ybdW-L4",
                                        "title_hn": "What is your relation between metals and gems",
                                        "mute": false,
                                        "is_native_player": false,
                                        "synopsis": "Every Gemstone has been assigned a particular metal in which it gives the best results.",
                                        "youtube_id": "80n3ybdW-L4",
                                        "autoplay": false,
                                        "video_type": "youtube"
                                    },
                                    "bookmarked": false
                                }
                            },
                            {
                                "position": 5,
                                "componentId": 108,
                                "contentProvider": 1,
                                "content": {
                                    "id": "60b611048ebc3e2e36460745",
                                    "propertyId": null,
                                    "type": "video",
                                    "dateModified": "2025-04-01T00:00:00",
                                    "categories": [
                                        10530
                                    ],
                                    "categoryLabel": "Numerology Predictions",
                                    "categorySlug": "numerology-predictions",
                                    "tags": null,
                                    "embeddings": null,
                                    "dataMap": {
                                        "image": "/en.myjyotish.com/2021/06/01/those-who-are-born-on-this-date-never-cheats_1622544505.jpeg",
                                        "video_duration": "",
                                        "full_slug": "video/numerology-predictions/those-who-are-born-on-this-date-never-cheats",
                                        "is_premium": false,
                                        "video_url": "www.youtube.com/embed/2U-9e17XNEI",
                                        "title_hn": "Those who are born on this date, never cheats",
                                        "mute": false,
                                        "is_native_player": false,
                                        "synopsis": "Those who are born on this date, never cheats",
                                        "youtube_id": "2U-9e17XNEI",
                                        "autoplay": false,
                                        "video_type": "youtube"
                                    },
                                    "bookmarked": false
                                }
                            }
                        ],
                        "feedTitle": "Video Listing English"
                    },
                    "title_hn": "MJ VIDEOS",
                    "icon_image": "",
                    "feed_id": 186
                },
                "bookmarked": false
            }
        },
        {
            "position": 8,
            "componentId": 3,
            "contentProvider": 3,
            "content": {
                "id": "MJ_CUSTOMER_SAYS_EN",
                "propertyId": null,
                "type": "header-widget",
                "dateModified": "2025-04-21T17:32:31.71459",
                "categories": [],
                "categoryLabel": null,
                "categorySlug": null,
                "tags": null,
                "embeddings": null,
                "dataMap": {
                    "title_hn": "What our customer says",
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
