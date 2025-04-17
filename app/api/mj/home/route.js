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
    "sessionId": "9d61db14-d212-44d2-be78-e773f365cb79",
    "pageId": "396734d5-992c-4123-b1bd-f1fa6c4a0cf8",
    "pageNo": 1,
    "items": [
      {
        "position": 1,
        "componentId": 3,
        "contentProvider": 3,
        "content": {
          "id": "POOJA_ENGLISH",
          "propertyId": null,
          "type": "header-widget",
          "dateModified": "2025-04-10T17:58:23.984318",
          "categories": [],
          "categoryLabel": null,
          "categorySlug": null,
          "tags": null,
          "embeddings": null,
          "dataMap": {
            "title_hn": "Pooja",
            "url": "https://spiderstagejsapi.amarujala.com/mj/api/list?type=pooja&limit=7",
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
          "id": "VEDIC_JYOTISH_ENGLISH",
          "propertyId": null,
          "type": "header-widget",
          "dateModified": "2025-04-10T13:24:13.649096",
          "categories": [],
          "categoryLabel": null,
          "categorySlug": null,
          "tags": null,
          "embeddings": null,
          "dataMap": {
            "title_hn": "Vedic Jyotish",
            "url": "https://spiderstagejsapi.amarujala.com/mj/api/astro?expertise=ज्योतिष शास्त्र&limit=7",
            "height": null
          },
          "bookmarked": false
        }
      },
      {
        "position": 3,
        "componentId": 3,
        "contentProvider": 3,
        "content": {
          "id": "TAROT_ENGLISH",
          "propertyId": null,
          "type": "header-widget",
          "dateModified": "2025-04-10T15:29:11.498788",
          "categories": [],
          "categoryLabel": null,
          "categorySlug": null,
          "tags": null,
          "embeddings": null,
          "dataMap": {
            "title_hn": "Tarot",
            "url": "https://spiderstagejsapi.amarujala.com/mj/api/astro?expertise=टैरो&limit=7",
            "height": null
          },
          "bookmarked": false
        }
      },
      {
        "position": 4,
        "componentId": 1,
        "contentProvider": 3,
        "content": {
          "id": "MJ_VIDEO_ENGLISH",
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
              "sessionId": "9d61db14-d212-44d2-be78-e773f365cb79",
              "pageId": "8dbf969e-dd2b-4657-b8de-68ba4e1fc1cd",
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
                    "id": "60b8c8380b77290cdb26b215",
                    "propertyId": null,
                    "type": "video",
                    "dateModified": "2025-04-01T00:00:00",
                    "categories": [10528],
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
                  "position": 3,
                  "componentId": 108,
                  "contentProvider": 1,
                  "content": {
                    "id": "60b7a7b7c09aad6a5670c2e0",
                    "propertyId": null,
                    "type": "video",
                    "dateModified": "2025-04-01T00:00:00",
                    "categories": [10530],
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
                  "position": 4,
                  "componentId": 108,
                  "contentProvider": 1,
                  "content": {
                    "id": "60b7888abf4504270c4e4960",
                    "propertyId": null,
                    "type": "video",
                    "dateModified": "2025-04-01T00:00:00",
                    "categories": [10531],
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
                  "position": 5,
                  "componentId": 108,
                  "contentProvider": 1,
                  "content": {
                    "id": "60b76def83ea7d14063d611f",
                    "propertyId": null,
                    "type": "video",
                    "dateModified": "2025-04-01T00:00:00",
                    "categories": [10528],
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
                  "position": 6,
                  "componentId": 108,
                  "contentProvider": 1,
                  "content": {
                    "id": "60cc855b8ebc3e32351b9146",
                    "propertyId": null,
                    "type": "video",
                    "dateModified": "2025-04-01T00:00:00",
                    "categories": [10528],
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
                  "position": 7,
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
        "position": 5,
        "componentId": 1,
        "contentProvider": 3,
        "content": {
          "id": "MJ_BLOGS_ENGLISH",
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
              "sessionId": "9d61db14-d212-44d2-be78-e773f365cb79",
              "pageId": "cdfbf7d2-18d9-46e8-b9ea-8874a0d0d8e5",
              "pageNo": 1,
              "items": [
                {
                  "position": 1,
                  "componentId": 102,
                  "contentProvider": 3,
                  "content": {
                    "id": "673240f1b53f970c870abc3d",
                    "propertyId": null,
                    "type": "story",
                    "dateModified": "2024-11-11T23:07:57.11",
                    "categories": [10528],
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
                },
                {
                  "position": 2,
                  "componentId": 101,
                  "contentProvider": 1,
                  "content": {
                    "id": "673240112b759b7d450c13c0",
                    "propertyId": null,
                    "type": "story",
                    "dateModified": "2024-11-11T23:04:14.469",
                    "categories": [10528],
                    "categoryLabel": "Astrology Blogs",
                    "categorySlug": "astrology-blogs",
                    "tags": null,
                    "embeddings": null,
                    "dataMap": {
                      "full_slug": "astrology-blogs/kundali-gun-milan-are-you-getting-married-so-know-how-many-qualities-should-be-found-in-the-horoscope",
                      "image": "/en.myjyotish.com/2024/11/11/kundali-gun-milan_3e198e852d3afbdcaad1bef5d085cb7d.jpeg",
                      "custom_attribute_value": null,
                      "is_premium": false,
                      "title_hn": "Kundali Gun Milan: Are you getting married? So know how many qualities should be found in the horoscope",
                      "synopsis": "Kundali Gun Milan: Before marriage, the qualities of the bride and groom are matched in their Kundali, but often a question arises in people's mind that how many qualities are required for marriage. So let's know in detail in this sequence.",
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
                    "id": "6730c2bdd1fab13e5705a984",
                    "propertyId": null,
                    "type": "story",
                    "dateModified": "2024-11-10T23:11:29.531",
                    "categories": [10528],
                    "categoryLabel": "Astrology Blogs",
                    "categorySlug": "astrology-blogs",
                    "tags": null,
                    "embeddings": null,
                    "dataMap": {
                      "full_slug": "astrology-blogs/today-s-panchang-11th-2024-many-auspicious-yogas-are-being-formed-today-read-here",
                      "image": "/en.myjyotish.com/2024/08/06/panchang_2b4229b4d8db12769937f07d751d2e9b.jpeg",
                      "custom_attribute_value": null,
                      "is_premium": false,
                      "title_hn": "Today's Panchang 11th 2024: Many Auspicious Yogas Are Being Formed Today, Read Here",
                      "synopsis": "Today's Panchang 11 November 2024: Many auspicious yogas are being formed today. Read the Panchang to know in detail.",
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
                    "id": "6730bfeabde93ed70904edf6",
                    "propertyId": null,
                    "type": "story",
                    "dateModified": "2024-11-10T23:11:23.147",
                    "categories": [10528],
                    "categoryLabel": "Astrology Blogs",
                    "categorySlug": "astrology-blogs",
                    "tags": null,
                    "embeddings": null,
                    "dataMap": {
                      "full_slug": "astrology-blogs/today-s-choghadiya-11th-november-2024-know-auspicious-time-to-start-any-new-work-today-read-here",
                      "image": "/en.myjyotish.com/2024/08/06/choghadiya_6a952fd606f946f9719aa24ad8caca6f.jpeg",
                      "custom_attribute_value": null,
                      "is_premium": false,
                      "title_hn": "Today's Choghadiya 11th November 2024: Know Auspicious Time To Start Any New Work Today, Read Here",
                      "synopsis": "Today's Choghadiya: If you plan to start any auspicious work today, then you may read today's Choghadiya according to Hindu calendar here.",
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
                    "id": "6730bed497a18897150db706",
                    "propertyId": null,
                    "type": "story",
                    "dateModified": "2024-11-10T19:40:56.755",
                    "categories": [10528],
                    "categoryLabel": "Astrology Blogs",
                    "categorySlug": "astrology-blogs",
                    "tags": null,
                    "embeddings": null,
                    "dataMap": {
                      "full_slug": "astrology-blogs/weekly-love-horoscope-11-nov-17nov-in-matters-of-love-these-people-will-form-new-relationships-read-here",
                      "image": "/en.myjyotish.com/2024/08/04/weekly-love-horoscope_2f3b2ab72fd3cb7d2133c4868e961859.jpeg",
                      "custom_attribute_value": null,
                      "is_premium": false,
                      "title_hn": "Weekly Love Horoscope 11 Nov - 17Nov : In matters of love, these people will form new relationships, Read here",
                      "synopsis": "Weekly Love Horoscope 11 to 17 November: In this week of November, some zodiac signs are seen getting their love, while for some zodiac signs the situation may be a little tough.",
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
                    "id": "6730bd149fd49b83840d4432",
                    "propertyId": null,
                    "type": "story",
                    "dateModified": "2024-11-10T19:35:39.665",
                    "categories": [10528],
                    "categoryLabel": "Astrology Blogs",
                    "categorySlug": "astrology-blogs",
                    "tags": null,
                    "embeddings": null,
                    "dataMap": {
                      "full_slug": "astrology-blogs/weekly-horoscope-11-17-november-2024-these-zodiac-signs-including-aries-capricorn-will-be-lucky",
                      "image": "",
                      "custom_attribute_value": null,
                      "is_premium": false,
                      "title_hn": "Weekly Horoscope 11 - 17 November 2024: These zodiac signs including Aries, & Capricorn, will be lucky",
                      "synopsis": "Due to the transit of planets in November, changes are being seen in the people of some zodiac signs, while this week the people of some zodiac signs are also advised to be a little cautious.",
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
                    "id": "672b3011c3e8982ddd081c35",
                    "propertyId": null,
                    "type": "story",
                    "dateModified": "2024-11-10T07:47:22.146",
                    "categories": [10528],
                    "categoryLabel": "Astrology Blogs",
                    "categorySlug": "astrology-blogs",
                    "tags": null,
                    "embeddings": null,
                    "dataMap": {
                      "full_slug": "astrology-blogs/ketu-nakshatra-gochar-2024-ketu-enters-uttara-phalguni-constellation-luck-is-shining-for-three-zodiac-signs",
                      "image": "/en.myjyotish.com/2024/11/06/ketuketu_557474071f652568d15a9b59eb1eb33c.jpeg",
                      "custom_attribute_value": null,
                      "is_premium": false,
                      "title_hn": "Ketu Nakshatra Gochar 2024: Ketu enters Uttara Phalguni constellation, luck is shining for three zodiac signs",
                      "synopsis": "Ketu Nakshatra Gochar 2024: Ketu is a shadow planet and it is going to change its constellation on November 10. Due to the change in constellation of Ketu, its effect is being seen in all the zodiac signs.",
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
      }
    ],
    "feedTitle": "MJ Home Page"
  };

  return Response.json(data);
}
