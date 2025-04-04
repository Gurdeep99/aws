import React from "react";

const blog = () => {
  const data = [
    {
        "image": "/myjyotish.com/2025/01/21/ghatasthapana-shubh-muhurat_8094220363da2a61d006a1cf9db48a00.jpeg",
        "full_slug": "blogs-hindi/magh-gupt-navratri-ghatasthapana-muhurat-2025-when-is-the-auspicious-time-of-magh-gupt-navratri-ghat-establis",
        "updated_at": "2025-01-22 11:59:02",
        "title_hn": "Magh Gupt Navratri Ghatasthapana Muhurat 2025: कब है माघ गुप्त नवरात्रि घट स्थापना शुभ मुहूर्त की शुरुआत?",
        "type": "story",
        "status" : "",
        "_id": "678fbd8fad1209fe49054d49"
    },
    {
        "image": "/myjyotish.com/2024/09/17/aaj-ka-choghadiya_4b8bea1a223f6aaa25fc9b25b136f27f.jpeg",
        "full_slug": "blogs-hindi/aaj-ka-choghadiya-22-january-2025-shubh-time",
        "updated_at": "2025-01-22 10:55:07",
        "title_hn": "Aaj Ka Choghadiya 22 January 2025: आज के दिन करना चाहते हैं कोई शुभ कार्य? तो जानें आज का चौघड़िया",
        "type": "story",
        "status" : "",
        "_id": "678f9ae410f15b41c5018106"
    },
    {
        "image": "/myjyotish.com/2025/01/21/kark-masik-rashifal-february_5564c84d7a35d59d037141145ffcb652.jpeg",
        "full_slug": "blogs-hindi/kark-masik-rashifal-february-2025-cancerians-should-avoid-unnecessary-stress-rahu-ketu-transit-can-cause-c",
        "updated_at": "2025-01-22 10:00:03",
        "title_hn": "Kark Masik Rashifal February 2025: : कर्क राशि वाले बेवजह के तनाव से बचें राहु केतु का गोचर दे सकता है छल",
        "type": "story",
        "status" : "",
        "_id": "678fb977ac93f91e770cac30"
    },
    {
        "image": "/myjyotish.com/2024/09/17/aaj-ka-panchang-18-september-2024_174e82088992989edc680272d2333d50.jpeg",
        "full_slug": "blogs-hindi/aaj-ka-panchang-22-january-2025-shubh-muhurat-yoga-karna-abhijeet-muhurat-rahu-kaal",
        "updated_at": "2025-01-21 18:39:52",
        "title_hn": "Aaj ka Panchang 22 January 2025: बुधवार का दिन इन राशि के जातकों के लिए है शुभ, पढ़ें आज का पंचांग",
        "type": "story",
        "status" : "",
        "_id": "678f9c9a86ce3bdf6f0394f4"
    },
    {
        "image": "/myjyotish.com/2025/01/21/shattila-ekadashi-2025_5982fe279fee7db8bded0ae6eff96721.jpeg",
        "full_slug": "blogs-hindi/shattila-ekadashi-2025-positive-impact-on-zodiac-sign",
        "updated_at": "2025-01-21 16:56:41",
        "title_hn": "Shattila Ekadashi 2025: षटतिला एकादशी पर बन रहे हैं शुभ संयोग, कुछ राशि के जातकों को पहुंचेगा सीधा लाभ",
        "type": "story",
        "status" : "",
        "_id": "678f81d9321053fe07046157"
    },
    {
        "image": "/myjyotish.com/2025/01/14/ekadashi_009686b1b2f4c2a067556404f41a2dd4.jpeg",
        "full_slug": "blogs-hindi/shattila-ekadashi-2025-know-the-shubh-muhurat-and-puja-vidhi",
        "updated_at": "2025-01-21 15:29:23",
        "title_hn": "Shattila Ekadashi 2025: इस दिन रखा जाएगा षटतिला एकादशी व्रत, जानिए शुभ मुहूर्त एवं महत्व",
        "type": "story",
        "status" : "",
        "_id": "678f6f35a11a5e946c0960fe"
    },
    {
        "image": "/myjyotish.com/2025/01/21/akshayvat-tree_a2aa8ff0ca01e79c718d39bf95aec27c.jpeg",
        "full_slug": "blogs-hindi/akshayvat-tree-is-one-of-the-oldest-trees-in-the-world-know-its-importance",
        "updated_at": "2025-01-21 15:12:13",
        "title_hn": "Akshayvat Tree: दुनिया के सबसे उम्रदराज पेड़ों में शामिल हैं अक्षयवट वृक्ष, जानें महत्व",
        "type": "story",
        "status" : "",
        "_id": "678f625668eebf4c3e0ac9f2"
    },
    {
        "image": "/myjyotish.com/2025/01/21/mahakumbh-2025_670993a5679e711beb5c4f1421bca7d3.jpeg",
        "full_slug": "blogs-hindi/the-number-of-devotees-bathing-in-mahakumbh-has-crossed-8-crores",
        "updated_at": "2025-01-21 13:05:33",
        "title_hn": "Mahakumbh 2025: महाकुंभ में स्नान करने वाले श्रद्धालुओं का आंकड़ा पहुंचा 8 करोड़ के पार",
        "type": "story",
        "status" : "",
        "_id": "678f4e1e65f07a1cba08a7b0"
    },
    {
        "image": "/myjyotish.com/2025/01/19/mahakumbh-jyotish-mahotsav-2025_b0d515c89543d6e587ae546df9405661.jpeg",
        "full_slug": "blogs-hindi/jyotish-mahotsav-mahakumbh-2025-will-be-held-on-january-25-at-prayagraj",
        "updated_at": "2025-01-21 12:01:36",
        "title_hn": "Jyotish Mahotsav: ज्योतिष में रखते हैं रुचि? महाकुंभ में बनें ज्योतिष महोत्सव का हिस्सा",
        "type": "story",
        "status" : "",
        "_id": "678f3ec3fe26574c5a0683e5"
    },
    {
        "image": "/myjyotish.com/2024/11/11/aaj-ka-rashifal_96088309b7cda4cd06dc19be6f32b7d0.jpeg",
        "full_slug": "blogs-hindi/aaj-ka-rashifal-12-november-read-today-12-november-2024-daily-horoscope-for-all-zodiac-sign",
        "updated_at": "2024-12-09 17:42:41",
        "title_hn": "Aaj Ka Rashifal 13 November : बुध प्रदोष योग आरंभ और पंचक समाप्ति से ये 4 राशि वाले होंगे लकी, दैनिक राशिफल",
        "type": "story",
        "status" : "",
        "_id": "67321c95e9e3000d2b0d7221"
    },
    {
        "image": "/myjyotish.com/2024/11/12/sun-transit-in-scorpio-2024_06600850ede37c967ad967592aee9d8b.jpeg",
        "full_slug": "blogs-hindi/sun-transit-in-scorpio-2024-these-4-zodiac-signs-have-to-be-careful",
        "updated_at": "2024-11-18 14:30:13",
        "title_hn": "Sun Transit in Scorpio 2024: सूर्य का वृश्चिक राशि में गोचर! 16 नवंबर से इन चार राशियों के बिगड़ सकते हैं काम",
        "type": "story",
        "status" : "",
        "_id": "67333e8948322c6e89067ee8"
    },
    {
        "image": "/myjyotish.com/2024/11/12/maha-kumbh-2025_9500fb601351f74a082aa4de32f6af55.jpeg",
        "full_slug": "blogs-hindi/mahakumbh-2025-mahaparv-festival-know-what-is-its-importance",
        "updated_at": "2024-11-12 15:58:40",
        "title_hn": "Maha Kumbh 2025: कुम्भ महापर्व में कौन-सा पर्व कब है? जानिए तिथि और महत्व",
        "type": "story",
        "status" : "",
        "_id": "6733085aa4091f545700edee"
    },
    {
        "image": "/myjyotish.com/2024/09/17/aaj-ka-panchang-18-september-2024_174e82088992989edc680272d2333d50.jpeg",
        "full_slug": "blogs-hindi/aaj-ka-panchang-13-november-2024-shubh-muhurat-time-abhijeet-muhurat-yaga-karna",
        "updated_at": "2024-11-12 15:42:53",
        "title_hn": "Aaj ka Panchang 13 November 2024: आज बन रहे हैं कई शुभ योग, पढ़ें आज का पंचांग",
        "type": "story",
        "status" : "",
        "_id": "673324563b94e2089202623f"
    },
    {
        "image": "/myjyotish.com/2024/11/11/aaj-ka-love-rashifal_c8c09dd6516e203cfa726ecceb2d2600.jpeg",
        "full_slug": "blogs-hindi/aaj-ka-love-rashifal-13-november-2024-today-astrology-love-prediction-horoscope-dainik-love-rashifal-in-hindi",
        "updated_at": "2024-11-12 13:15:02",
        "title_hn": "Aaj Ka Love Rashifal 13 November 2024: प्यार में रह सकती है कुछ खटपट लेकिन जल्द ही मिलेगी राहत,लव राशिफल",
        "type": "story",
        "status" : "",
        "_id": "673223da39f2165f100a3646"
    },
    {
        "image": "/myjyotish.com/2024/11/12/khatu-shyam-katha_4409589d9d7e12589f445ee08441b7e9.jpeg",
        "full_slug": "blogs-hindi/khatu-shyam-katha-know-who-is-khatu-shyam-the-story-is-related-to-the-mahabharata",
        "updated_at": "2024-11-12 12:50:50",
        "title_hn": "Khatu Shyam Katha: जानिए कौन हैं खाटू श्याम, महाभारत काल से जुड़ी है कथा",
        "type": "story",
        "status" : "",
        "_id": "673301c486d6f902920323e6"
    },
    {
        "image": "/myjyotish.com/2024/11/11/december-aries-horoscope-predictions_85c49cef17d2bc2b96bd36b4736498ec.jpeg",
        "full_slug": "blogs-hindi/mesh-masik-rashifal-december-2024-december-aries-horoscope-predictions",
        "updated_at": "2024-11-12 11:37:56",
        "title_hn": "Mesh Masik Rashifal December 2024: बिगड़ सकते हैं हालात अगर नहीं रखा अपना ख्याल, जानें अपना मासिक राशिफल",
        "type": "story",
        "status" : "",
        "_id": "6732297e56f807134800c0bf"
    },
    {
        "image": "/myjyotish.com/2024/11/12/khatu-shyam-ji-ki-aarti_5805e729a3be5c540dba260b4071b16a.jpeg",
        "full_slug": "blogs-hindi/khatu-shyam-ji-aarti-lyrics-in-hindi-om-jai-shri-shyam-hare",
        "updated_at": "2024-11-12 11:19:08",
        "title_hn": "Khatu Shyam Aarti: \"ॐ जय श्री श्याम हरे\" खाटू श्याम जी की आरती",
        "type": "story",
        "status" : "",
        "_id": "6732ec45d6002ccb710b61a0"
    },
    {
        "image": "/myjyotish.com/2024/11/12/shani-margi-2024_b4e8cd27cf2b97746d94e86e0a1baba0.jpeg",
        "full_slug": "blogs-hindi/shani-margi-on-15-november-2024-these-3-zodiac-sign-should-be-careful",
        "updated_at": "2024-11-12 10:39:41",
        "title_hn": "Shani Margi 2024: शनि हो रहे हैं मार्गी और 15 नवंबर से तीन राशियों की बढ़ सकती हैं मुश्किलें",
        "type": "story",
        "status" : "",
        "_id": "6732e26f0a09482534049fd2"
    },
    {
        "image": "/myjyotish.com/2024/11/11/sun-transit-in-scorpio-2024_6d1214fbfef93300f55a6a3c6b13553c.jpeg",
        "full_slug": "blogs-hindi/sun-transit-in-scorpio-2024-surya-gochar-vrishchik-rashi-vrishchik-sankranti",
        "updated_at": "2024-11-11 17:33:05",
        "title_hn": "Sun Transit in Scorpio 2024: सूर्य का वृश्चिक राशि में प्रवेश, वृषभ, कर्क समेत इन राशियों को होगा लाभ",
        "type": "story",
        "status" : "",
        "_id": "6731f265939cfa71c40a66f2"
    },
    {
        "image": "/myjyotish.com/2024/11/11/aaj-ka-rashifal_51670cf7ca7771a03bd602b900ac48ba.jpeg",
        "full_slug": "blogs-hindi/aaj-ka-rashifal-12-november-2024-today-horoscope-daily-horoscope-for-all-zodiac-sign",
        "updated_at": "2024-11-11 17:00:02",
        "title_hn": "Aaj Ka Rashifal 12 November : हरि प्रबोधिनी एकादशी और तुलसी विवाह का शुभ योग पूरी होगी इच्छाएं, राशिफल",
        "type": "story",
        "status" : "",
        "_id": "6731b05ccf0fbedb4307121c"
    },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-panchang-18-september-2024_174e82088992989edc680272d2333d50.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-panchang-12-november-2024-abhijeet-muhurat-shubh-yog-karan",
      "updated_at": "2024-11-11 16:34:39",
      "title_hn": "Aaj ka Panchang 12 November 2024: देवउठनी एकादशी पर बन रहे हैं कई शुभ योग, पढ़ें आज का पंचांग",
      "type": "story",
      "status" : "",
      "_id": "6731e4b5c69e782b7b0b881e"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-choghadiya_4b8bea1a223f6aaa25fc9b25b136f27f.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-choghadiya-12-november-2024-shubh-time",
      "updated_at": "2024-11-11 15:26:54",
      "title_hn": "Aaj Ka Choghadiya 12 November 2024: आज करना चाहते हैं कोई कार्य? तो जान लें आज चौघड़िया",
      "type": "story",
      "status" : "",
      "_id": "6731d4d29cc9ea211d0e499c"
  },
  {
      "image": "/myjyotish.com/2024/11/11/kabha-mal_bc3f952642b074123a914c5e5fd97702.jpeg",
      "full_slug": "blogs-hindi/how-is-the-date-of-kumbh-mela-decided-know-the-story-behind-it-kumbh-mela-dates",
      "updated_at": "2024-11-11 14:11:20",
      "title_hn": "Kumbh Mela Date: कैसे तय होती है कुंभ मेले की तिथि? जानें क्या है इसके पीछे की कहानी",
      "type": "story",
      "status" : "",
      "_id": "6731c3087f6d3ab7b709ca76"
  },
  {
      "image": "/myjyotish.com/2024/11/11/aaj-ka-love-rashifal_5344f24d02c802875641e8438acd5228.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-12-november-2024-today-love-horoscope-dainik-love-rashifal-in-hindi-for-all-zodiac-sign",
      "updated_at": "2024-11-11 13:15:02",
      "title_hn": "Aaj Ka Love Rashifal 12 November 2024: आज कोई दोस्त आपके दिल में प्रेम की लौ जला सकता है, जानें लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6731ad983244e61f500a6e13"
  },
  {
      "image": "/myjyotish.com/2024/11/11/kundali-gun-milan_289cd5dd85912011a06df18d570a9163.jpeg",
      "full_slug": "blogs-hindi/know-how-many-gunas-should-match-in-the-kundali-gun-milan",
      "updated_at": "2024-11-11 10:39:00",
      "title_hn": "Kundali Gun Milan: कर रहे हैं विवाह? तो जानिए कि कुंडली में कितने गुण मिलने चाहिए",
      "type": "story",
      "status" : "",
      "_id": "67319156af1c71c4f90ee584"
  },
  {
      "image": "/myjyotish.com/2024/11/10/aaja-ka-rashafal_773385536db6bbe1e2cc0286e09b12ed.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-11-november-read-today-11-november-2024-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-11-10 17:00:02",
      "title_hn": "Aaj Ka Rashifal 11 November : भीष्मपंचक पर 12 राशियों को रहना होगा सजग बदलने वाले हैं ग्रह, जानें राशिफल",
      "type": "story",
      "status" : "",
      "_id": "672f61aac6e88626c809b9e4"
  },
  {
      "image": "/myjyotish.com/2024/11/10/budh-nakshatra-gochar_4625da6b998ada0c9e5ca332f82879b0.jpeg",
      "full_slug": "blogs-hindi/budh-in-jyeshtha-nakshatra-on-11-november-2024-mercury-transit-impact-on-all-zodiac-sign",
      "updated_at": "2024-11-10 16:31:40",
      "title_hn": "Budh Nakshatra Gochar: 11 नवंबर को बुध ग्रह ज्येष्ठा नक्षत्र में प्रवेश, जानें समस्त राशियों में असर",
      "type": "story",
      "status" : "",
      "_id": "6730923c7b3adf121a089006"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-choghadiya_4b8bea1a223f6aaa25fc9b25b136f27f.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-choghadiya-11-november-2024-shubh-time",
      "updated_at": "2024-11-10 14:22:13",
      "title_hn": "Aaj Ka Choghadiya 11 November 2024: आज करना चाहते हैं कोई कार्य? तो जान लें आज चौघड़िया",
      "type": "story",
      "status" : "",
      "_id": "6730596ec232f71674027e70"
  },
  {
      "image": "/myjyotish.com/2024/11/09/aaj-ka-love-rashifal_f0deb6ef0023edeeb7e40fc597336f25.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-11-november-2024-today-astrology-love-prediction-horoscope-dainik-love-rashifal-in-hindi",
      "updated_at": "2024-11-10 13:15:03",
      "title_hn": "Aaj Ka Love Rashifal 11 November 2024: प्रेम के लिए दिन खास किसी से मुलाकात के लिए विशेष, जानें अपना लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "672f64b300fd61179e0465a3"
  },
  {
      "image": "/myjyotish.com/2024/09/06/aaj-ka-panchang-7-september-2024_cb1e6ca2c760621fa8927519fe244c9f.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-panchang-11-november-2024-shubh-muhurat-yoga-karna-abhijeet-muhurat",
      "updated_at": "2024-11-10 12:36:23",
      "title_hn": "Aaj ka Panchang 11 November 2024: आज हो रहा है कई शुभ मुहूर्तों का निर्माण, पढ़ें आज का पंचांग",
      "type": "story",
      "status" : "",
      "_id": "67305b4eeb212bda130e315a"
  },
  {
      "image": "/myjyotish.com/2024/11/10/weekly-love-horoscope-11-to-17-november_7099e83ef3993365db5dabe488a9b4ed.jpeg",
      "full_slug": "blogs-hindi/weekly-love-horoscope-11-to-17-november-saptahik-love-rashifal-for-all-zodiac-sign",
      "updated_at": "2024-11-10 12:11:32",
      "title_hn": "Weekly Love Horoscope 11 to 17 November: कर्क, कन्या समेत इन राशियों के मिल सकते हैं दिल, जानें लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6730553d315c98547004f726"
  },
  {
      "image": "/myjyotish.com/2024/11/10/weekly-horoscope-11-to-17-november_aa167dc752f263c5f420cdf404313290.jpeg",
      "full_slug": "blogs-hindi/weekly-horoscope-11-to-17-november-2024-saptahik-rashifal-in-hindi",
      "updated_at": "2024-11-10 11:00:17",
      "title_hn": "Weekly Horoscope 11 to 17 November: मिथुन, कर्क समेत इन राशियों के लिए सप्ताह है शुभ, पढ़ें साप्ताहिक राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6730426f685ff147cd02ab43"
  },
  {
      "image": "/myjyotish.com/2024/11/10/aaj-ka-rashifal_d93bb071fa7e303fa8d1ab5b65467a99.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-10-november-read-today-10-november-2024-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-11-10 10:17:35",
      "title_hn": "Aaj Ka Rashifal 10 November 2024: अक्षय नवमी के दिन सिंह राशि समेत इन 2 राशियों को मिलेगा फायदा",
      "type": "story",
      "status" : "",
      "_id": "672e357e48f1992499040d96"
  },
  {
      "image": "/myjyotish.com/2024/11/06/rahu-nakshatra-pada-parivartan-2024_faabc46b6fdc4c4d602fac11ac1cacbf.jpeg",
      "full_slug": "blogs-hindi/rahu-nakshatra-pada-parivartan-2024-these-zodiac-sign-should-be-carefull",
      "updated_at": "2024-11-10 10:05:43",
      "title_hn": "Rahu Nakshatra Pada Parivartan 2024: 10 नवंबर राहु का नक्षत्र परिवर्तन! मेष, कर्क समेत ये राशियां रहें सावधान",
      "type": "story",
      "status" : "",
      "_id": "672b5733fbdbcf7eb103f808"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-panchang-18-september-2024_174e82088992989edc680272d2333d50.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-panchang-10-november-2024-shubh-muhurat-yoga-karna-abhijeet-muhurat",
      "updated_at": "2024-11-09 14:01:02",
      "title_hn": "Aaj ka Panchang 10 November 2024: आज हो रहा है कई शुभ मुहूर्तों का निर्माण, पढ़ें आज का पंचांग",
      "type": "story",
      "status" : "",
      "_id": "672db781dd85b4dde8010031"
  },
  {
      "image": "/myjyotish.com/2024/11/08/aaj-ka-love-rashifal_ac0d2bd4aff2a1969c7c76e29ce9df4b.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-10-november-2024-today-astrology-love-prediction-horoscope",
      "updated_at": "2024-11-09 13:15:02",
      "title_hn": "Aaj Ka Love Rashifal 10 November 2024: लव के लिए कुछ आज समय निकालें वरना आपका साथी हो सकता है आपसे नाराज",
      "type": "story",
      "status" : "",
      "_id": "672e33dd2bc16c7bab0303a7"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-choghadiya_4b8bea1a223f6aaa25fc9b25b136f27f.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-choghadiya-10-november-2024-shubh-time",
      "updated_at": "2024-11-09 13:01:02",
      "title_hn": "Aaj Ka Choghadiya 10 November 2024: अक्षय नवमी पर करना चाहते हैं कोई कार्य? तो जान लें आज चौघड़िया",
      "type": "story",
      "status" : "",
      "_id": "672db2a8aeb0ea00860a28e9"
  },
  {
      "image": "/myjyotish.com/2024/11/08/aaj-ka-rashifal_526199fdf333369c8dbb8bc86513fbd7.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-09-november-2024-today-horoscope-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-11-08 17:00:02",
      "title_hn": "Aaj Ka Rashifal 09 November 2024:  शुरू होगा आज से मृत्यु पंचक, आपकी असावधानी बढ़ा सकती हैं मुश्किलें",
      "type": "story",
      "status" : "",
      "_id": "672df2e7f264de64ba0c7750"
  },
  {
      "image": "/myjyotish.com/2024/11/08/kartik-purnima-snan-muhurat-2024_5a88e27e7ca3e4e4f88ce5458535cfab.jpeg",
      "full_slug": "blogs-hindi/kartik-purnima-2024-shubh-muhurat-and-snan-time",
      "updated_at": "2024-11-08 16:53:16",
      "title_hn": "Kartik Purnima Snan 2024: कार्तिक पूर्णिमा के दिन इस मुहूर्त में करें स्नान, मिलेगा विशेष लाभ",
      "type": "story",
      "status" : "",
      "_id": "672debd83e90562695074777"
  },
  {
      "image": "/myjyotish.com/2024/11/08/mahakumbh-shahi-snan_4d7772ffad3cc3ebf58f3708c609866b.jpeg",
      "full_slug": "blogs-hindi/mahakumbh-2024-shahi-snan-dates-and-history",
      "updated_at": "2024-11-08 13:45:40",
      "title_hn": "Mahakumbh Shahi Snan: महाकुंभ में क्यों किया जाता है शाही स्नान? जानें इतिहास",
      "type": "story",
      "status" : "",
      "_id": "672dc88363be2b3920017036"
  },
  {
      "image": "/myjyotish.com/2024/11/08/aaj-ka-love-rashifal_6deb37b76fa693efb702175097393356.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-09-november-2024-today-love-horoscope-dainik-love-rashifal-in-hindi-for-all-zodiac-sign",
      "updated_at": "2024-11-08 13:15:02",
      "title_hn": "Aaj Ka Love Rashifal 09 November 2024: आज प्रेम का रिश्ता होगा किसी दूसरे के कारण खराब, ध्यान से लें फैसले",
      "type": "story",
      "status" : "",
      "_id": "672dbcdc5aa342ae6b0d19b7"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-choghadiya_4b8bea1a223f6aaa25fc9b25b136f27f.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-choghadiya-9-november-2024-shubh-time",
      "updated_at": "2024-11-08 13:10:27",
      "title_hn": "Aaj Ka Choghadiya 9 November 2024: आज करना चाहते हैं कोई कार्य? तो जान लें आज चौघड़िया",
      "type": "story",
      "status" : "",
      "_id": "672db2c81a4e591b4b0fdb97"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-panchang-18-september-2024_174e82088992989edc680272d2333d50.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-panchang-9-november-2024-shubh-muhurat-yoga-karna-abhijeet-muhurat",
      "updated_at": "2024-11-08 12:33:16",
      "title_hn": "Aaj ka Panchang 9 November 2024: आज हो रहा है कई शुभ मुहूर्तों का निर्माण, पढ़ें आज का पंचांग",
      "type": "story",
      "status" : "",
      "_id": "672db613cbcc407465040ca9"
  },
  {
      "image": "/myjyotish.com/2024/11/08/prayag-mahatva_5a264a457a31cd4f947ec354dea44c06.jpeg",
      "full_slug": "blogs-hindi/mahakubh-prayagraj-mahatva-ganaga-snan-se-milti-hai-mukti",
      "updated_at": "2024-11-08 11:56:53",
      "title_hn": "Prayagraj Mahatva: प्रयाग में गंगा स्नान से मिलती है समस्त पापों से मुक्ति, जानिए क्या है महत्व",
      "type": "story",
      "status" : "",
      "_id": "672daeedc3324acff80d4ef9"
  },
  {
      "image": "/myjyotish.com/2024/11/08/dev-diwali-2024_bbde85c74d14bbedd067971cbf5deced.jpeg",
      "full_slug": "blogs-hindi/dev-deepawali-2024-shubh-muhurat-and-date",
      "updated_at": "2024-11-08 10:58:52",
      "title_hn": "Dev Deepawali 2024: कब है देव दिवाली? जानें सही तिथि और शुभ मुहूर्त",
      "type": "story",
      "status" : "",
      "_id": "672da18882eeee521303d68a"
  },
  {
      "image": "/myjyotish.com/2024/11/06/maha-kumbh-2025_03203d745606d942c55d8e9a088018d8.jpeg",
      "full_slug": "blogs-hindi/maha-kumbh-2025-is-starting-from-january-13-know-its-importance",
      "updated_at": "2024-11-08 10:36:58",
      "title_hn": "Mahakumbh 2025: 13 जनवरी से शुरू हो रहा है महाकुंभ, जानें महत्व",
      "type": "story",
      "status" : "",
      "_id": "672b29685055e2f31706b13e"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-panchang-18-september-2024_174e82088992989edc680272d2333d50.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-panchang-8-november-2024-shubh-muhurat-abhijeet-kaal-yoga-karna",
      "updated_at": "2024-11-08 05:31:01",
      "title_hn": "Aaj ka Panchang 8 November 2024: आज बन रहे हैं कई शुभ योग, इन मुहूर्तों में किए गए कार्य होंगे सफल",
      "type": "story",
      "status" : "",
      "_id": "672b42729f595fdbcc0475d6"
  },
  {
      "image": "/myjyotish.com/2024/11/06/aaj-ka-rashifal_c542ef77e957e31ea6124823afe64b9d.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-8-november-read-today-08-november-2024-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-11-08 05:00:02",
      "title_hn": "Aaj Ka Rashifal 08 November 2024:  शुक्रवार के दिन शूल और गंड योग से रहे सावधान ध्यान से करें अपने काम",
      "type": "story",
      "status" : "",
      "_id": "672b8a7b7bead6f13e0b5c8e"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-choghadiya_4b8bea1a223f6aaa25fc9b25b136f27f.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-choghadiya-8-november-2024-shubh-time",
      "updated_at": "2024-11-08 04:31:02",
      "title_hn": "Aaj Ka Choghadiya 8 November 2024: गोपाष्टमी पर करना चाहते हैं कोई कार्य? तो जान लें आज चौघड़िया",
      "type": "story",
      "status" : "",
      "_id": "672c7d81b4d4953ef70838ed"
  },
  {
      "image": "/myjyotish.com/2024/11/06/aaj-ka-love-rashifal_bb3afdf887f8d7ed95d014ae5fbcf318.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-08-november-2024-today-love-horoscope-astrology-prediction",
      "updated_at": "2024-11-08 04:00:03",
      "title_hn": "Aaj Ka Love Rashifal 08 November 2024: लव लाइफ रहने वाली है मस्ती भरी, पार्टनर कर सकता है आपके साथ प्रैंक",
      "type": "story",
      "status" : "",
      "_id": "672b8e520beda568370a177c"
  },
  {
      "image": "/myjyotish.com/2024/11/07/mahakumbh_11882eaa4639c55b108b6aabef59b8c3.jpeg",
      "full_slug": "blogs-hindi/maha-kumbh-is-related-to-samridra-manthan-and-know-why-maha-kumbh-is-held-after-every-12-years",
      "updated_at": "2024-11-07 17:52:07",
      "title_hn": "Mahakumbh: जहां पर गिरीं थीं अमृत की बूंदें, वहां पर लगता है कुंभ, जानिए क्या है कथा",
      "type": "story",
      "status" : "",
      "_id": "672c7b7a26a0e1dbba07086f"
  },
  {
      "image": "",
      "full_slug": "maha-khumbh/kumbh-mela-pragraj",
      "updated_at": "2024-11-07 13:48:08",
      "title_hn": "maha kumbh",
      "type": "story",
      "status" : "",
      "_id": "672c77a56860d83f977b797e"
  },
  {
      "image": "/myjyotish.com/2024/11/01/mahakumbh-2025_8598297923116b5416ab6589a9dfe413.jpeg",
      "full_slug": "blogs-hindi/kab-hai-mahakumbh-2024-kab-hoga-shahi-snan-kumbh",
      "updated_at": "2024-11-07 13:37:00",
      "title_hn": "Mahakumbh 2024: इस तिथि से मनाया जाएगा महाकुंभ का पर्व, जानें कब-कब होगा विशेष स्नान",
      "type": "story",
      "status" : "",
      "_id": "6724628d11b876ed130716a5"
  },
  {
      "image": "/myjyotish.com/2024/11/07/maha-kumbh_c9c64d16ce0198c15aec8fbcd46e2873.jpeg",
      "full_slug": "maha-khumbh/maha-kumbh",
      "updated_at": "2024-11-07 13:32:23",
      "title_hn": "महाकुंभ- Aaj ka kumbh",
      "type": "story",
      "status" : "",
      "_id": "672c73dc6860d83f977b7977"
  },
  {
      "image": "/myjyotish.com/2024/11/02/aaj-ka-rashifal_078ad8f6474ce1ca09c82b25b3d8ccc3.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-4-november-read-today-04-november-2024-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-11-07 13:25:18",
      "title_hn": "Aaj Ka Rashifal 04 November 2024: अनुराधा नक्षत्र के साथ शोभन योग खुलने वाली हैं इन राशियों की किस्मत",
      "type": "story",
      "status" : "",
      "_id": "672634dead4d08b3e909387c"
  },
  {
      "image": "/myjyotish.com/2024/11/07/tulsi-vivah_3bf7be9e4e74d225ebe9b5bd28147662.jpeg",
      "full_slug": "blogs-hindi/follow-these-remedies-on-tulsi-vihah-your-married-life-will-be-happy",
      "updated_at": "2024-11-07 12:27:39",
      "title_hn": "Tulsi Vivah Upay: तुलसी विवाह पर अपनाएं ये अचूक उपाय, दांपत्य जीवन बीतेगा खुशहाल",
      "type": "story",
      "status" : "",
      "_id": "672c648b46fc32db7a020ad4"
  },
  {
      "image": "/myjyotish.com/2024/11/07/shukra-gochar-on-chhath_bfd2ac4095df946472d8e21d7bedb5ce.jpeg",
      "full_slug": "blogs-hindi/venus-transits-in-sagittarius-on-chhath-7-november-2024-shukra-gochar",
      "updated_at": "2024-11-07 12:07:58",
      "title_hn": "Shukra Gochar on Chhath: छठ के महापर्व पर शुक्र का धनु राशि में गोचर, इन जातकों को मिलेगा लाभ",
      "type": "story",
      "status" : "",
      "_id": "672c5412794ae1c899070a49"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-panchang-18-september-2024_174e82088992989edc680272d2333d50.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-panchang-7-november-2024-shubh-muhurat-abhijeet-muhurat-yoga-and-karna",
      "updated_at": "2024-11-07 05:30:02",
      "title_hn": "Aaj ka Panchang 7 November 2024: आज बन रहे हैं कई शुभ योग, इन मुहूर्तों में किए गए कार्य होंगे सफल",
      "type": "story",
      "status" : "",
      "_id": "672b3b35dfcc3b489e0d5ed9"
  },
  {
      "image": "/myjyotish.com/2024/11/05/aaj-ka-rashifal_fc55b03a03a5b6c863a945483e496871.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-7-november-read-today-07-november-2024-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-11-06 17:00:02",
      "title_hn": "Aaj Ka Rashifal 07 November 2024: सूर्य षष्ठी पर मिलेगा इन राशियों को मिलेगा राजयोग फल, जानें दैनिक राशिफल",
      "type": "story",
      "status" : "",
      "_id": "672a5077d4bb85607804ccc7"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-choghadiya_4b8bea1a223f6aaa25fc9b25b136f27f.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-choghadiya-7-november-2024-shubh-time-for-work",
      "updated_at": "2024-11-06 14:13:50",
      "title_hn": "Aaj Ka Choghadiya 7 November 2024: छठ पूजा के पर्व पर करना है कोई शुभ कार्य? तो पढ़ लें आज का चौघड़िया",
      "type": "story",
      "status" : "",
      "_id": "672b2b395d0e2f3ca501ad29"
  },
  {
      "image": "/myjyotish.com/2024/11/06/maha-kumbh-2025_08f5ad7fd21a8b8d46a656ec9bd77153.jpeg",
      "full_slug": "blogs-hindi/maha-kumbh-2025-is-going-to-be-held-in-prayagraj-it-has-a-special-connection-with-makar-sankranti",
      "updated_at": "2024-11-06 14:02:34",
      "title_hn": "Maha Kumbh 2025: प्रयागराज में लगने जा रहा है महाकुंभ, मकर संक्रांति से होता है विशेष संबंध",
      "type": "story",
      "status" : "",
      "_id": "672b25583c4aff8010036f6a"
  },
  {
      "image": "/myjyotish.com/2024/11/05/aaj-ka-love-rashifal_8033dc2cbf27a86a06b05cabfd83a08e.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-7-november-2024-today-love-horoscope-astrology-prediction",
      "updated_at": "2024-11-06 13:15:02",
      "title_hn": "Aaj Ka Love Rashifal 07 November 2024: लव पार्टनर का ड्रीम आज आपको करेगा रोमांचित, जानें अपना लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "672a5362ff3e5ce5a102238e"
  },
  {
      "image": "/myjyotish.com/2024/11/06/dev-uthani-ekadashi-daan_f3ab3c8f9a9c3a84a291befc0cfe370c.jpeg",
      "full_slug": "blogs-hindi/dev-uthani-ekadashi-2024-daan-niyam",
      "updated_at": "2024-11-06 12:26:15",
      "title_hn": "Dev Uthani Ekadashi 2024: देवउठनी एकादशी पर इन चीजों का दान करने से घर में आएगी समृद्धि",
      "type": "story",
      "status" : "",
      "_id": "672b1292e0c7cf613a08712a"
  },
  {
      "image": "/myjyotish.com/2024/11/06/ketu-nakshatra-gochar-2024_7107116249e20fb34999b16a3c6f158c.jpeg",
      "full_slug": "blogs-hindi/ketu-gochar-in-uttara-phalguni-nakshatra-on-10-november-2024-3-zodiac-sign-will-get-benefit",
      "updated_at": "2024-11-06 11:00:57",
      "title_hn": "Ketu Nakshatra Gochar 2024: केतु का उत्तरा फाल्गुनी नक्षत्र में प्रवेश, तीन राशियों की चमक रही है किस्मत",
      "type": "story",
      "status" : "",
      "_id": "672aff0637518fa5190b3fb0"
  },
  {
      "image": "/myjyotish.com/2024/11/04/aaj-ka-rashifal_97907aa38eda1828eaa22d22d6b05ee2.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-06-november-read-today-06-november-2024-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-11-05 17:00:02",
      "title_hn": "Aaj Ka Rashifal 06 November 2024: आज शुक्र के धनु राशि में गोचर से वृष और तुला जातक रहें संभल कर, जानें राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6728d17fef60fa50e603a0ff"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-panchang-18-september-2024_174e82088992989edc680272d2333d50.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-panchang-6-november-2024-shubh-muhurat-abhijeet-yog-karana",
      "updated_at": "2024-11-05 15:01:02",
      "title_hn": "Aaj ka Panchang 6 November 2024: आज बन रहे हैं कई शुभ योग, बनेंगे सभी काम, पढ़ें 6 नवंबर का पंचांग",
      "type": "story",
      "status" : "",
      "_id": "67289e28e9b8c3ad1d0a2e8c"
  },
  {
      "image": "/myjyotish.com/2024/11/05/chhathi-maiyya-ki-aarti_5e74f11c8720812b44357ed42b8d9fd5.jpeg",
      "full_slug": "blogs-hindi/chhathi-maiya-ki-aarti-chhath-puja-2024",
      "updated_at": "2024-11-05 14:04:16",
      "title_hn": "Chhathi Maiya Ki Aarti: जय छठी मईया! इस विशेष छठ पूजा के अवसर पर गाएं छठी माई की भव्य आरती",
      "type": "story",
      "status" : "",
      "_id": "6729d78ea967babc91012800"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-choghadiya_4b8bea1a223f6aaa25fc9b25b136f27f.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-choghadiya-6-november-2024-shubh-muhurat",
      "updated_at": "2024-11-05 14:01:01",
      "title_hn": "Aaj Ka Choghadiya 6 November 2024: आज करना चाहते हैं कोई शुभ कार्य? तो पढ़ लें 6 नवंबर का चौघड़िया",
      "type": "story",
      "status" : "",
      "_id": "67288434dfac7765c502d8bc"
  },
  {
      "image": "/myjyotish.com/2024/11/04/aaj-ka-love-rashifal_83eae12afe7001f2783e0d7e212aefa5.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-6-november-2024-today-love-horoscope-astrology-prediction",
      "updated_at": "2024-11-05 13:15:02",
      "title_hn": "Aaj Ka Love Rashifal 06 November 2024: आज के दिन प्रेम में रहेगी थोड़ी शैतानी तो कैसा रहेगा दिन,जाने लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6728d08096b205fff305a72e"
  },
  {
      "image": "/myjyotish.com/2024/11/05/chhath-puja-2024_419c4e6baf5dfffe17f5fb938b706c31.jpeg",
      "full_slug": "blogs-hindi/chhath-puja-samagri-list-2024-jaruri-samaan",
      "updated_at": "2024-11-05 12:03:42",
      "title_hn": "Chhath Puja Samagri List 2024: छठ पूजा 2024: जानें, छठ पूजा की समाग्री की पूरी लिस्ट और जरूरी सामान",
      "type": "story",
      "status" : "",
      "_id": "6729ba606871f9bb9b03335d"
  },
  {
      "image": "/myjyotish.com/2024/11/05/chhath-puja-2024-ke-niyam_c593b6fb4a7e5c241bd2a00f577d697e.jpeg",
      "full_slug": "blogs-hindi/chhath-puja-ki-shuruaat-nahay-khay-se-jane-iss-din-ke-niyam",
      "updated_at": "2024-11-05 10:38:48",
      "title_hn": "Chhath Puja 2024 Niyam: छठ पूजा की शुरुआत नहाय-खाय से, जानें इस पर्व के अहम नियम और खास बातें!",
      "type": "story",
      "status" : "",
      "_id": "6729a1d08194a9b4e60794b3"
  },
  {
      "image": "/myjyotish.com/2024/11/04/aaj-ka-rashifal_c4b865349e0f3b7c50e41fbec41419f1.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-05-november-2024-today-horoscope-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-11-04 17:00:02",
      "title_hn": "Aaj Ka Rashifal 05 November 2024: दुर्वा गणपति व्रत पर मिथुन और कन्या राशि के लिए है खास समय",
      "type": "story",
      "status" : "",
      "_id": "67287062931141d43d0c7040"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-panchang-18-september-2024_174e82088992989edc680272d2333d50.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-panchang-5-november-2024-shubh-muhurat-abhijeet-yog-karana",
      "updated_at": "2024-11-04 15:35:42",
      "title_hn": "Aaj ka Panchang 5 November 2024: आज बन रहे हैं कई शुभ योग, बनेंगे सभी काम, पढ़ें 5 नवंबर का पंचांग",
      "type": "story",
      "status" : "",
      "_id": "67288dcf5382cc9e970d8074"
  },
  {
      "image": "/myjyotish.com/2024/11/04/guru-shani-gochar-2025_fe7f43d942846ec0b35b28f0a5128574.jpeg",
      "full_slug": "blogs-hindi/shani-and-guru-gochar-2025-know-which-zodiac-sign-will-get-benefit",
      "updated_at": "2024-11-04 15:34:55",
      "title_hn": "Shani- Guru Gochar 2025: गुरु और शनि का राशि परिवर्तन! मेष, तुला, वृश्चिक समेत इन राशियों के सपने होंगे साकार",
      "type": "story",
      "status" : "",
      "_id": "67289c2ae9f7641ae8043418"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-choghadiya_4b8bea1a223f6aaa25fc9b25b136f27f.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-choghadiya-5-november-2024-shubh-muhurat",
      "updated_at": "2024-11-04 13:54:06",
      "title_hn": "Aaj Ka Choghadiya 5 November 2024: आज करना चाहते हैं कोई शुभ कार्य? तो पढ़ लें 5 नवंबर का चौघड़िया",
      "type": "story",
      "status" : "",
      "_id": "6728849b50397bb25b064cd1"
  },
  {
      "image": "/myjyotish.com/2024/11/04/devuthani-ekadashi_56355533a9a7553ec3f8a13a25292ec3.jpeg",
      "full_slug": "blogs-hindi/dev-uthani-ekadashi-2024-prabodhini-ekadashi-shubh-muhurat-and-puja-vidhi",
      "updated_at": "2024-11-04 13:34:22",
      "title_hn": "Dev Uthani Ekadashi 2024: इस तिथि को है देवउठनी एकादशी, जानिए शुभ मुहूर्त और पूजन विधि",
      "type": "story",
      "status" : "",
      "_id": "67287fef8a2184e59b0e9bea"
  },
  {
      "image": "/myjyotish.com/2024/11/04/aaj-ka-love-rashifal_f706bbb8edfea8747ea228592bb3f04a.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-05-november-2024-today-love-horoscope-dainik-love-rashifal-in-hindi",
      "updated_at": "2024-11-04 13:15:03",
      "title_hn": "Aaj Ka Love Rashifal 05 November 2024: आपका रिश्ता आज हो सकता है किसी दुविधा का शिकार, जानें अपना लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6728728c038e02545d06e457"
  },
  {
      "image": "/myjyotish.com/2024/11/04/tulsi-vivah-2024_216c3caa96f0e4db34e5b1e7c79e9ac4.jpeg",
      "full_slug": "blogs-hindi/tulsi-vivah-2024-date-and-shubh-muhurat-puja-vidhi",
      "updated_at": "2024-11-04 11:53:58",
      "title_hn": "Tulsi Vivah 2024: कब है तुलसी विवाह? 12 या 13 नवंबर में ना हो कंफ्यूज, जानिए शुभ मुहूर्त और सही तिथि",
      "type": "story",
      "status" : "",
      "_id": "672868714560e537c3021e8d"
  },
  {
      "image": "/myjyotish.com/2024/11/04/november-grah-gochar-2024_48c50e1b16d1917b7e9a2ad723a2955d.jpeg",
      "full_slug": "blogs-hindi/november-grah-gochar-2024-planet-transit-grah-rashi-parivartan",
      "updated_at": "2024-11-04 10:19:08",
      "title_hn": "November Grah Gochar 2024: नवंबर में चार बड़े ग्रहों की बदल रही है चाल, तीन राशियों की चमकेगी किस्मत",
      "type": "story",
      "status" : "",
      "_id": "67284e95cb5f12e37b096ba6"
  },
  {
      "image": "/myjyotish.com/2024/11/02/aaj-ka-love-rashifal_857da385c48061393fb345c015b52f1a.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-4-november-2024-today-love-horoscope-dainik-love-rashifal-in-hindi-for-all-zodiac-sign",
      "updated_at": "2024-11-03 13:15:02",
      "title_hn": "Aaj Ka Love Rashifal 04 November 2024: आपकी लव लाइफ उमंग से रहेगी भरी, जानें अपना लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6726331678d119750705cdde"
  },
  {
      "image": "/myjyotish.com/2024/10/28/vastu-dosh_280f10c7eff8467a06e60ec4e3103ab4.jpeg",
      "full_slug": "blogs-hindi/ghar-me-vastu-dosh-ke-karan-or-lakshan",
      "updated_at": "2024-11-03 10:06:02",
      "title_hn": "Vastu Dosh: घर में कैसे उत्पन्न होता है वास्तु दोष? जानें लक्षण और निवारण के उपाय",
      "type": "story",
      "status" : "",
      "_id": "671f4cd25f7e41d8b60c561a"
  },
  {
      "image": "/myjyotish.com/2024/11/02/weekly-horoscope_850a9f1440c0f0861ae3bebf71832157.jpeg",
      "full_slug": "blogs-hindi/weekly-horoscope-4-to-10-november-2024-saptahik-rashifal-for-all-zodiac-sign",
      "updated_at": "2024-11-03 09:26:01",
      "title_hn": "Weekly Horoscope 4 to 10 November: मेष, कर्क और सिंह राशि वाले स्वास्थ्य का रखें ध्यान, पढें साप्ताहिक राशिफल",
      "type": "story",
      "status" : "",
      "_id": "67259df865a10b4acc01ef17"
  },
  {
      "image": "/myjyotish.com/2024/11/02/aaj-ka-rashifal_9ce70d69fd78f16b3f45940c3e27209e.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-03-november-2024-today-horoscope-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-11-02 17:00:02",
      "title_hn": "Aaj Ka Rashifal 3 November :  आज यम द्वितीया पर जरूर जलाएं यम दीप दूर होंगे रोग दोष , जानें दैनिक राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6725ce8013397545b70087b5"
  },
  {
      "image": "/myjyotish.com/2024/11/02/happy-bhai-dooj_6a01258432163300cd2e8b2e2a82f2e2.jpeg",
      "full_slug": "blogs-hindi/happy-bhai-dooj-wishes-2024-bhai-dooj-quotes-images",
      "updated_at": "2024-11-02 14:51:29",
      "title_hn": "Happy Bhai Dooj Wishes: भाई दूज के शुभ पर्व पर अपने भाई-बहनों को भेजें ये शुभकामना संदेश",
      "type": "feature-story",
      "_id": "6725beba54f622c9350b085f"
  },
  {
      "image": "/myjyotish.com/2024/11/02/aaj-ka-love-rashifal_cce86725f8f8ecba7e6e8b2ee34dbee0.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-03-november-2024-today-love-horoscope-dainik-love-rashifal-in-hindi-for-all-zodiac-sign",
      "updated_at": "2024-11-02 13:15:02",
      "title_hn": "Aaj Ka Love Rashifal 03 November 2024: प्रेम के लिए आज कैसा रहेगा आपका दिन, पढ़िए अपना लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6725ccdfd9f03fb97106153d"
  },
  {
      "image": "/myjyotish.com/2024/11/02/shani-margi_896f9f7e84d9f6661403fd70d5f73830.jpeg",
      "full_slug": "blogs-hindi/shani-margi-on-15-november-2024-these-zodiac-sign-should-be-carefull",
      "updated_at": "2024-11-02 12:55:56",
      "title_hn": "Shani Margi 2024: शनि हो रहे हैं मार्गी! कर्क, सिंह समेत इन राशियों की बढ़ सकती हैं मुश्किलें",
      "type": "story",
      "status" : "",
      "_id": "6725d3ee3eb88cf4730a3561"
  },
  {
      "image": "/myjyotish.com/2024/09/12/aaj-ka-choghadiya-13-september-2024_735a6c9d16c935994d2590b46c734c31.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-choghadiya-3-november-2024-shubh-time-bhai-dooj",
      "updated_at": "2024-11-02 11:55:27",
      "title_hn": "Aaj Ka Choghadiya 3 November 2024: भाई दूज पर कर रहे हैं कोई शुभ कार्य? तो उससे पहले पढ़ लें आज का चौघड़िया",
      "type": "story",
      "status" : "",
      "_id": "6725c5a9f0679e53100e5375"
  },
  {
      "image": "/myjyotish.com/2024/11/02/weekly-love-horoscope_8c08e019a3e255b3164e9bdd275f63d2.jpeg",
      "full_slug": "blogs-hindi/weekly-love-horoscope-4-to-10-november-2024-prem-rashifal-for-all-zodiac-sign",
      "updated_at": "2024-11-02 09:26:06",
      "title_hn": "Weekly Love Horoscope 4 to 10 November: इन जातकों को मिल सकता है उनका हमसफर, पढ़ें साप्ताहिक लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6725a29bfd049b9fc10549f3"
  },
  {
      "image": "/myjyotish.com/2024/11/02/shukra-gochar-in-dhanu-rashi_3560f26b8047716b7315d33f0b02cff9.jpeg",
      "full_slug": "blogs-hindi/shukra-gochar-in-dhanu-rashi-on-7-november-2024-venus-transit-in-sagittarius",
      "updated_at": "2024-11-02 09:08:05",
      "title_hn": "Shukra Gochar in Dhanu Rashi: शुक्र ग्रह का धनु राशि में प्रवेश, तीन राशियां रहें सावधान वरना होगा नुकसान",
      "type": "story",
      "status" : "",
      "_id": "672597dfe5da5a3a61083f46"
  },
  {
      "image": "/myjyotish.com/2024/11/01/aaj-ka-rashifal_5da261c8c75e995ff364174b31aceb9e.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-2-november-2024-dainik-rashifal-november",
      "updated_at": "2024-11-01 17:00:02",
      "title_hn": "Aaj Ka Rashifal 2 November: कार्तिक माह के शुक्ल पक्ष में सभी पर रहेगी श्री हरि की कृपा, पढ़ें दैनिक राशिफल",
      "type": "story",
      "status" : "",
      "_id": "672441d60e71d04316010043"
  },
  {
      "image": "/myjyotish.com/2024/10/25/govardhan-puja-bhog_1837d39b8fe15e21d40addd6b8177b3f.jpeg",
      "full_slug": "blogs-hindi/govardhan-puja-me-rashi-ke-anusar-lgaye-bhog",
      "updated_at": "2024-11-01 14:43:16",
      "title_hn": "Govardhan Puja Bhog: गोवर्धन पूजा में भगवान श्री कृष्ण जी को अपनी राशि के अनुसार लगाएं भोग, मिलेगा विशेष फल",
      "type": "story",
      "status" : "",
      "_id": "671b4c9c682a65e12a060a29"
  },
  {
      "image": "/myjyotish.com/2024/11/01/shukra-gochar_30b54673d89eb3d82df79f9c0ef8cae3.jpeg",
      "full_slug": "blogs-hindi/shukra-gochar-in-dhanu-rashi-7-november-2024-venus-transit-in-sagittarius-know-who-will-get-benefit",
      "updated_at": "2024-11-01 13:32:04",
      "title_hn": "Shukra Gochar in Dhanu Rashi: दिवाली के बाद शुक्र ग्रह का धनु राशि में प्रवेश, तीन राशियों को हो रहा सीधा लाभ",
      "type": "story",
      "status" : "",
      "_id": "67248521946672f0140d0285"
  },
  {
      "image": "/myjyotish.com/2024/10/29/lkashhama-mata-aarata_a5ff4bb711d47f834cf2b812be859fab.jpeg",
      "full_slug": "blogs-hindi/lakshami-mata-aarti-lyrics-in-hindi-lakshami-mata-aarti-mahalakshami-aarti",
      "updated_at": "2024-11-01 12:30:07",
      "title_hn": "Lakshmi Mata Aarti Lyrics: माता लक्ष्मी जी की आरती \"ॐ जय लक्ष्मी माता\"",
      "type": "story",
      "status" : "",
      "_id": "67207bbddb2b3190800bbe0b"
  },
  {
      "image": "/myjyotish.com/2024/11/01/aaj-ka-love-rashifal_32241482412b594b32c94ae141cbf6d0.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-2-november-2024-dainik-prem-rashifal-today-love-horoscope",
      "updated_at": "2024-11-01 12:01:02",
      "title_hn": "Aaj Ka Love Rashifal 2 November 2024: पार्टनर के साथ अच्छा समय बीतेगा, लेकिन अन्य चीजों को न करें इग्नोर",
      "type": "story",
      "status" : "",
      "_id": "672466dda9127da5ef06bed4"
  },
  {
      "image": "/myjyotish.com/2024/11/01/vastu-tips_890533b3a5e9f28d6c49baf5333c6232.jpeg",
      "full_slug": "blogs-hindi/vastu-dosha-nivaran-upay-vastu-dosh-kaise-dur-karein",
      "updated_at": "2024-11-01 10:30:02",
      "title_hn": "Vastu Tips: वास्तु दोष निवारण के लिए अपनाएं ये उपाय, घर में आएगी खुशहाली",
      "type": "story",
      "status" : "",
      "_id": "6724443d4c365b862302a3d3"
  },
  {
      "image": "/myjyotish.com/2024/11/01/dev-deepawali_468e4f00b5d8ca7ba54883ca738c9742.jpeg",
      "full_slug": "blogs-hindi/dev-diwali-kab-hai-kyu-manate-hain-dev-deepawali",
      "updated_at": "2024-11-01 09:59:50",
      "title_hn": "Dev Diwali 2024: जानें क्यों मनाते हैं देवता इस खास दीपावली का पर्व और इस त्योहार से जुड़ी अनोखी परंपराएँ!",
      "type": "story",
      "status" : "",
      "_id": "6724378811e8ea234d096c44"
  },
  {
      "image": "/myjyotish.com/2024/10/27/november-rashifal-2024_5013133077e5eeeff2e8d2141deb6cd2.jpeg",
      "full_slug": "blogs-hindi/november-monthly-horoscope-2024-masik-rashifal",
      "updated_at": "2024-11-01 09:49:28",
      "title_hn": "November Monthly Horoscope 2024: कर्क, सिंह और कुंभ समेत इन राशियों के लिए नवंबर का महीना होगा शुभ",
      "type": "story",
      "status" : "",
      "_id": "671e2d34d61383d7ee05c91b"
  },
  {
      "image": "/myjyotish.com/2024/11/01/vishwakarma-puja_a25dc7d457b1814a44ec71d5bf30a608.jpeg",
      "full_slug": "blogs-hindi/vishwakarma-puja-2024-vishwakarma-puja-is-celebrated-after-diwali-know-the-shubh-muhurat",
      "updated_at": "2024-11-01 08:21:54",
      "title_hn": "Vishwakarma Puja 2024: दीपावली के बाद भी मनाते हैं विश्वकर्मा पूजा, जानें शुभ मुहूर्त और पूजा विधि",
      "type": "story",
      "status" : "",
      "_id": "672439b678bc0f44b006d8d3"
  },
  {
      "image": "/myjyotish.com/2024/10/30/aaj-ka-rashifal_b441748c0cc6098e419022da0d451576.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-1-november-read-today-01-november-2024-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-10-31 17:00:02",
      "title_hn": "Aaj Ka Rashifal 1 November : आज कार्तिक अमावस्या प्रीति योग से बनेंगे इन राशियों के काम,  जानें दैनिक राशिफल",
      "type": "story",
      "status" : "",
      "_id": "67223e7f33c5125e430e639a"
  },
  {
      "image": "/myjyotish.com/2024/10/30/aaj-ka-love-rashifal_03451f5a7e6d76640b992781ccdfbbb9.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-1-november-2024-today-love-horoscope-dainik-love-rashifal-in-hindi-for-all-zodiac-sign",
      "updated_at": "2024-10-31 13:15:02",
      "title_hn": "Aaj Ka Love Rashifal 01 November 2024: प्यार को लेकर कोई अहम फैसला ले सकते हैं, पढ़ें अपना लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6722406315556334ab04e451"
  },
  {
      "image": "/myjyotish.com/2024/10/30/kumbha-masik-rashifal-november-2024_f462b9c825441dfb685132c5bd2e2092.jpeg",
      "full_slug": "blogs-hindi/kumbha-masik-rashifal-november-2024-aquarius-monthly-horoscope-november",
      "updated_at": "2024-10-31 12:42:55",
      "title_hn": "Kumbha Masik Rashifal November 2024: शनि होंगे मार्गी कुंभ राशि वालों के अब बनेंगे अधूरे काम",
      "type": "story",
      "status" : "",
      "_id": "67223b698102dd05010f28f9"
  },
  {
      "image": "/myjyotish.com/2024/10/27/diwali-2024_955097416da8d409c0fe29f018a24b30.jpeg",
      "full_slug": "blogs-hindi/lakshami-puja-vidhi-diwali-2024",
      "updated_at": "2024-10-31 12:11:02",
      "title_hn": "Diwali 2024: दिवाली पर माता लक्ष्मी जी को प्रसन्न करने के लिए इस विधि से करें पूजा",
      "type": "story",
      "status" : "",
      "_id": "671de0ae6df1a9abe2091606"
  },
  {
      "image": "/myjyotish.com/2024/10/30/kartik-amavasya_8b1f5369a292d4b59fd506563078707a.jpeg",
      "full_slug": "blogs-hindi/kartik-amavasya-2024-the-measures-taken-on-the-day-of-kartik-amavasya-give-special-benefits-know-about-karti",
      "updated_at": "2024-10-31 10:13:42",
      "title_hn": "Kartik Amavasya 2024 : कार्तिक अमावस्या के दिन किए जाने वाले उपाय दिलाते हैं विशेष लाभ, जानें कार्तिक अमावस्या",
      "type": "story",
      "status" : "",
      "_id": "672230fad37f892ab80791a5"
  },
  {
      "image": "/myjyotish.com/2024/10/31/shubh-deepawali_531a3f2c24dde30a5163538f5f8e4518.jpeg",
      "full_slug": "blogs-hindi/happy-diwali-2024-wishes-in-hindi-happy-diwali-quotes",
      "updated_at": "2024-10-31 08:17:11",
      "title_hn": "Happy Diwali 2024 Wishes: इस दीवाली अपने प्रियजनों को भेजें दीपावली के ये खास शुभकामना संदेश",
      "type": "feature-story",
      "_id": "67225154691aa8cb9a0a8799"
  },
  {
      "image": "/myjyotish.com/2024/10/30/aaj-ka-rashifal_1cd9f408bd8371332679d49b92ad5da5.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-31-october-read-today-31-october-2024-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-10-30 17:00:03",
      "title_hn": "Aaj Ka Rashifal 31 October : यम देव के त्रास से मिलेगी मुक्ति, कन्या और तुला राशि वाले पाएंगे विशेष लाभ",
      "type": "story",
      "status" : "",
      "_id": "6721a5a34b9fa02523016f7a"
  },
  {
      "image": "/myjyotish.com/2024/10/30/sharda-puja-diwali_591b64a712352e55db7706bdce422800.jpeg",
      "full_slug": "blogs-hindi/sharda-puja-diwali-2024-sharda-puja-on-diwali-dispels-the-darkness-of-ignorance-and-gives-the-light-of-knowled",
      "updated_at": "2024-10-30 15:22:20",
      "title_hn": "Sharda Puja Diwali 2024 दिवाली पर शारदा पूजा दूर होता है अज्ञान का अंधकार, मिलता है ज्ञान का प्रकाश",
      "type": "story",
      "status" : "",
      "_id": "6721df910d07e6b3e20a168e"
  },
  {
      "image": "/myjyotish.com/2024/10/30/aaj-ka-love-rashifal_e52762e54c41035fc4dc004ef5783f66.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-31-october-2024-today-love-horoscope-dainik-love-rashifal-in-hindi",
      "updated_at": "2024-10-30 13:15:02",
      "title_hn": "Aaj Ka Love Rashifal 31 October 2024: पार्टनर के साथ आज अपने रिश्ते को पाएंगे रोमांटिक, पढ़ें अपना लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6721a73ecf28dcc86c0ad1c7"
  },
  {
      "image": "/myjyotish.com/2024/10/30/hanuman-jayanti_0ac747cbc51feaa3de891e84e2cd8310.jpeg",
      "full_slug": "blogs-hindi/hanuman-jayanti-2024-chant-this-hymn-on-the-birth-anniversary-of-hanuman-ji-all-troubles-will-go-away",
      "updated_at": "2024-10-30 12:16:24",
      "title_hn": "Hanuman Jayanti 2024 : हनुमान जी के जन्मोत्सव पर करें इस स्त्रोत का जाप दूर होंगे सभी कष्ट",
      "type": "story",
      "status" : "",
      "_id": "6721d6378a0b1542db07ecbf"
  },
  {
      "image": "/myjyotish.com/2024/10/27/diwali-kyu-manayi-jati-hai_c751419c703f6588e4e01e54f6eb9f78.jpeg",
      "full_slug": "blogs-hindi/when-and-why-is-diwali-celebrated-know-the-beliefs-related-to-this-festival",
      "updated_at": "2024-10-30 11:49:02",
      "title_hn": "Diwali Kyu Manate Hain: दिवाली कब और क्यों मनाई जाती है? जानिए इस त्योहार से जुड़ी मान्यता",
      "type": "story",
      "status" : "",
      "_id": "671decab1826eefc8503e335"
  },
  {
      "image": "/myjyotish.com/2024/10/30/capricorn-monthly-finance-horoscope-november_841ff9496da52a29ce0f63f585ccf298.jpeg",
      "full_slug": "blogs-hindi/makar-masik-rashifal-november-2024-capricorn-monthly-horoscope-november-2024",
      "updated_at": "2024-10-30 11:12:47",
      "title_hn": "Makar Masik Rashifal November 2024: नवंबर माह में मकर राशि वालों के लिए खुल सकते हैं भाग्य द्वारा",
      "type": "story",
      "status" : "",
      "_id": "6721a942c73176f84f0855a5"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-choghadiya_4b8bea1a223f6aaa25fc9b25b136f27f.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-choghadiya-30-october-2024-shubh-time",
      "updated_at": "2024-10-29 19:04:16",
      "title_hn": "Aaj Ka Choghadiya 30 October 2024: आज करना है कोई शुभ कार्य? तो पढ़ लें आज का चौघड़िया",
      "type": "story",
      "status" : "",
      "_id": "6720e450a94394e5170dbd67"
  },
  {
      "image": "/myjyotish.com/2024/10/29/aaj-ka-rashifal-30-october_9322fd2f881b672ef4865f49c6ca5ce5.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-30-october-2024-dainik-rashifal",
      "updated_at": "2024-10-29 16:43:49",
      "title_hn": "Aaj Ka Rashifal 30 October 2024: हनुमान जी का पूजन दूर करेगा सभी राशियों के संकट, जानें आपना दैनिक राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6720c2ff8110227040086bd8"
  },
  {
      "image": "/myjyotish.com/2024/10/29/love-rashifal_72a76a35c8260e1fc482c701d98cb377.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-30-october-2024-today-love-horoscope-dainik-love-rashifal",
      "updated_at": "2024-10-29 15:35:10",
      "title_hn": "Aaj Ka Love Rashifal 30 October 2024: पार्टनर के साथ आज अपने रिश्ते को पाएंगे रोमांटिक, पढ़ें अपना लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "6720b34a572ee516620a8b81"
  },
  {
      "image": "/myjyotish.com/2024/10/29/dhanteras_6b6757098f7652e6532a175cc36d1b81.jpeg",
      "full_slug": "blogs-hindi/dhateras-2024-me-kya-kharidein-dhateras-shopping-idea",
      "updated_at": "2024-10-29 11:13:46",
      "title_hn": "Dhanteras 2024: धनतेरस पूजा के लिए जरूर खरीदें ये 5 चीजें, होगी सैभाग्य की प्राप्ति",
      "type": "story",
      "status" : "",
      "_id": "6720705bfff5cc07830a5713"
  },
  {
      "image": "/myjyotish.com/2024/10/25/dhanteras-shopping-muhurat-2024_403373f89fd97a74c7a4ae972fb0e4fe.jpeg",
      "full_slug": "blogs-hindi/dhanteras-2024-vahan-muhurat-car-purchasing-muhurat",
      "updated_at": "2024-10-29 10:15:11",
      "title_hn": "Dhanteras 2024: गाड़ी खरीदने का शुभ मुहूर्त, इस बार खरीदारी के लिए मिलेंगे दो खास दिन! जानें सबसे शुभ समय!",
      "type": "story",
      "status" : "",
      "_id": "671f31e556f10ef6860c5bbe"
  },
  {
      "image": "/myjyotish.com/2024/10/28/dhanteras-2024_f5d038377a53138ef23470a10b9f4e21.jpeg",
      "full_slug": "blogs-hindi/dhanteras-2024-upay-do-these-7-jyotishi-upay-on-dhanteras-to-attract-wealth",
      "updated_at": "2024-10-28 17:59:44",
      "title_hn": "Dhanteras 2024 Upay: धन को आकर्षित करने के लिए धनतेरस पर करें ये 7 ज्योतिषीय उपाय",
      "type": "story",
      "status" : "",
      "_id": "671f83ad408512b11b040c4a"
  },
  {
      "image": "/myjyotish.com/2024/10/28/november-love-rsashifal-2024_7238a5d07b531ccde3d301f09eb1a7d1.jpeg",
      "full_slug": "blogs-hindi/monthly-love-rashifal-november-2024-masik-prem-rashifal",
      "updated_at": "2024-10-28 17:50:12",
      "title_hn": "Monthly Love Rashifal November 2024: इस महीने कुछ राशियों को मिलेगा उनका खोया हुआ प्यार, पढ़ें प्रेम राशिफल",
      "type": "story",
      "status" : "",
      "_id": "671f5c5e17c056da390157cd"
  },
  {
      "image": "/myjyotish.com/2024/10/28/dhanteras-2024_a3618ab08f3aaa02118dec2af7940e5d.jpeg",
      "full_slug": "blogs-hindi/dhanteras-2024-gold-purchasing-shubh-muhurat-and-know-the-benefits",
      "updated_at": "2024-10-28 17:30:03",
      "title_hn": "Dhanteras 2024: देखें शुभ समय और फिर खरीदें सोना, जानिए धनत्रयोदशी पर आभूषण खरीदने के फायदे",
      "type": "story",
      "status" : "",
      "_id": "671f7cba812acf4b3a067418"
  },
  {
      "image": "/myjyotish.com/2024/10/28/mangal-transit-in-pushya-nakshatra-2024_18ae7b93d5b64fbfbf43d8461a108e69.jpeg",
      "full_slug": "blogs-hindi/mangal-transit-in-pushya-nakshatra-2024-3-zodiac-signs-will-get-benefits",
      "updated_at": "2024-10-28 17:14:14",
      "title_hn": "Mangal Transit in Pushya Nakshatra 2024: मंगल का पुष्य नक्षत्र में प्रवेश, धनतेरस पर 3 राशियां बनेंगी धनवान",
      "type": "story",
      "status" : "",
      "_id": "671f715a25ae6ebac408ad60"
  },
  {
      "image": "/myjyotish.com/2024/10/28/aaj-ka-rashifal_8e3cfbd5dbac605da3eb8dc2b42e5b2e.jpeg",
      "full_slug": "astrology-blog/aaj-ka-rashifal-29-october-read-today-29-october-2024-daily-horoscope-for-all-zodiac",
      "updated_at": "2024-10-28 17:00:02",
      "title_hn": "Aaj Ka Rashifal 29 October : धन त्रयोदशी के दिन जानें धनतेरस राशिफल कौन कौन होने वाला है मालामाल",
      "type": "story",
      "status" : "",
      "_id": "671f72bc1fc0decf5b003d80"
  },
  {
      "image": "/myjyotish.com/2024/10/28/aaj-ka-love-rashifal_60a9d1fbbcebe63cef91725fc83528b9.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-29-october-2024-today-love-horoscope-dainik-love-rashifal",
      "updated_at": "2024-10-28 13:18:10",
      "title_hn": "Aaj Ka Love Rashifal 29 October 2024: आज कुछ राशियों की लव लाइफ होगी नफरत का शिकार रहना होगा सतर्क",
      "type": "story",
      "status" : "",
      "_id": "671f37d08c945e037e08a35d"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-choghadiya_4b8bea1a223f6aaa25fc9b25b136f27f.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-choghadiya-29-october-2024-dhanteras-purchasing-shubh-time",
      "updated_at": "2024-10-28 12:21:49",
      "title_hn": "Aaj Ka Choghadiya 29 October 2024: धनतेरस के दिन इन शुभ मुहूर्त में करें खरीदारी, पढ़ें 29 अक्टूबर का चौघड़िया",
      "type": "story",
      "status" : "",
      "_id": "671f347da926c1dd9b01277a"
  },
  {
      "image": "/myjyotish.com/2024/10/28/yama-pacaka_3be0097aec523afc60132ec09f7533f4.jpeg",
      "full_slug": "blogs-hindi/yama-panchak-2024-what-is-yama-panchak",
      "updated_at": "2024-10-28 11:56:54",
      "title_hn": "Yama Panchak 2024: क्या होता है यम पंचक, दिवाली में क्यों माना जाता है इसे महत्वपूर्ण",
      "type": "story",
      "status" : "",
      "_id": "671f2c862b1b5d95d30d60dd"
  },
  {
      "image": "/myjyotish.com/2024/10/27/rama-ekadashi_9b9cd40873f60f2e596fd6806180a6f2.jpeg",
      "full_slug": "blogs-hindi/rama-ekadashi-vrat-niyam-know-what-to-eat-and-what-not-to-eat",
      "updated_at": "2024-10-28 09:58:37",
      "title_hn": "Rama Ekadashi Vrat Niyam: इन चीजों को खाने से टूट सकता है रमा एकादशी का व्रत, जानें क्या खाएं और क्या नहीं?",
      "type": "story",
      "status" : "",
      "_id": "671dd9bfb048a406e00ca785"
  },
  {
      "image": "/myjyotish.com/2024/10/26/aaj-ka-rashifal_7237d3232fa86564d4855f5c07eaf7f4.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-28-october-2024-today-horoscope-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-10-27 17:00:02",
      "title_hn": "Aaj Ka Rashifal 28 October : एकादशी के साथ द्वादशी का योग दुर्लभ संयोग मिलेगा, लाभ जानें दैनिक राशिफल",
      "type": "story",
      "status" : "",
      "_id": "671d02b053872648af05d14b"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-choghadiya_4b8bea1a223f6aaa25fc9b25b136f27f.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-choghadiya-28-october-2024-shubh-time",
      "updated_at": "2024-10-27 15:00:57",
      "title_hn": "Aaj Ka Choghadiya 28 October 2024: आज करना है कोई शुभ कार्य? तो पढ़ लें 28 अक्टूबर का चौघड़िया",
      "type": "story",
      "status" : "",
      "_id": "671e0849f9be4f13fd0f5013"
  },
  {
      "image": "/myjyotish.com/2024/10/27/rama-ekadashi_430e36f02f43fc3a2e6c177296bba839.jpeg",
      "full_slug": "blogs-hindi/rama-ekadashi-yoga-2024-rare-yoga-is-being-formed-on-rama-ekadashi",
      "updated_at": "2024-10-27 13:21:02",
      "title_hn": "Rama Ekadashi Yoga 2024: रमा एकादशी पर बन रहे दुर्लभ योग, चमकने वाली है कुछ राशियों की किस्मत",
      "type": "story",
      "status" : "",
      "_id": "671ddd22e41f1859c8058e99"
  },
  {
      "image": "/myjyotish.com/2024/10/26/aaj-ka-love-rashifal_760f63d50c3ce0bbfa9713c9b61be233.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-28-october-2024-today-love-horoscope-astrology-prediction",
      "updated_at": "2024-10-27 13:15:02",
      "title_hn": "Aaj Ka Love Rashifal 28 October 2024: आज के दिन प्यार नई उमंग लेकर आने वाला है जो बदलेगा आपका अनुभव, लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "671d0435d4e116e5de0cbfa3"
  },
  {
      "image": "/myjyotish.com/2024/10/27/weekly-love-horoscope-28-oct-to-3-nov_4eb1c76996f2ccbcf6af48649f7b9b49.jpeg",
      "full_slug": "blogs-hindi/weekly-love-horoscope-28-october-to-3-november-2024-saptahik-prem-rashifal",
      "updated_at": "2024-10-27 11:04:29",
      "title_hn": "Weekly Love Horoscope 28 Oct to 3 Nov: प्रेम के मामले में इन जातकों के बनेंगे नए रिश्ते, पढ़ें अपना राशिफल",
      "type": "story",
      "status" : "",
      "_id": "671dcdae0ea502de36008767"
  },
  {
      "image": "/myjyotish.com/2024/10/27/weekly-horoscope-28-oct-to-3-nov_2d8f71375a4c243f69b6bcc5ca6fedc8.jpeg",
      "full_slug": "blogs-hindi/weekly-horoscope-28-october-to-3-november-2024-saptahik-rashifal",
      "updated_at": "2024-10-27 10:38:30",
      "title_hn": "Weekly Horoscope 28 Oct to 3 Nov: मेष, मकर, कुंभ समेत इन राशियों को मिलेगा लाभ, पढ़ें अपना राशिफल",
      "type": "story",
      "status" : "",
      "_id": "671dca9b0ad4192bb703c039"
  },
  {
      "image": "/myjyotish.com/2024/10/25/aaj-ka-rashifal_c83df54f710071e98ce780cdc6c9fce4.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-27-october-2024-today-horoscope-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-10-26 17:00:03",
      "title_hn": "Aaj Ka Rashifal 27 October : संडे का दिन देगा इन राशियों को आराम का मजा, जानें दैनिक राशिफल",
      "type": "story",
      "status" : "",
      "_id": "671baf9cddcdb4c9f90f718c"
  },
  {
      "image": "/myjyotish.com/2024/10/25/dhanu-masik-rashifal-november_d2d2a2edd39cc4b4601a76513ce7fb50.jpeg",
      "full_slug": "blogs-hindi/dhanu-masik-rashifal-november-sagittarius-monthly-horoscope",
      "updated_at": "2024-10-26 14:16:54",
      "title_hn": "Dhanu Masik Rashifal November 2024: धनु राशि की खुल सकती है लॉटरी, मेहनत लाएगी रंग जानें अपना नवंबर राशिफल",
      "type": "story",
      "status" : "",
      "_id": "671bb502ac9a34d5ed0cd0b8"
  },
  {
      "image": "/myjyotish.com/2024/10/25/aaj-ka-love-rashifal_fcf5cbcf116268ce24305e68dc8b81a9.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-27-october-2024-today-love-horoscope-astrology-prediction",
      "updated_at": "2024-10-26 13:44:02",
      "title_hn": "Aaj Ka Love Rashifal 27 October 2024: लव लाइफ होगी खुशनुमा, प्रपोजल करने वाले हैं तो, पढ़ें अपना लव राशिफल",
      "type": "story",
      "status" : "",
      "_id": "671bb1fa60c1317d0d00424a"
  },
  {
      "image": "/myjyotish.com/2024/10/17/diwali-kab-hai-2024_5e5c1432c2bb2885c612a908737437a2.jpeg",
      "full_slug": "blogs-hindi/diwali-31-or-1-november-diwali-2024-kab-hai",
      "updated_at": "2024-10-26 10:01:02",
      "title_hn": "Diwali 2024: दिवाली कब मनाएं 31 अक्टूबर या 01 नवंबर? जानें क्या है लक्ष्मी पूजन का शुभ मुहूर्त",
      "type": "story",
      "status" : "",
      "_id": "671b94593a104142f101a771"
  },
  {
      "image": "/myjyotish.com/2024/09/17/aaj-ka-choghadiya_4b8bea1a223f6aaa25fc9b25b136f27f.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-choghadiya-26-october-2024-read-shubh-time",
      "updated_at": "2024-10-25 18:35:13",
      "title_hn": "Aaj Ka Choghadiya 26 October 2024: आज कर रहे हैं कोई शुभ कार्य? तो पढ़ लें 26 अक्टूबर को चौघड़िया",
      "type": "story",
      "status" : "",
      "_id": "671b96e6c1f7332b18007390"
  },
  {
      "image": "/myjyotish.com/2024/10/24/aaj-ka-rashifal_ae6f7e7bc76ba1a9375c324a91f03000.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-rashifal-26-october-read-today-26-october-2024-daily-horoscope-for-all-zodiac-sign",
      "updated_at": "2024-10-25 17:00:02",
      "title_hn": "Aaj Ka Rashifal 26 October : शनिवार के दिन आश्लेषा योग लापरवाही डाल सकती है संकट में, जानें दैनिक राशिफल",
      "type": "story",
      "status" : "",
      "_id": "671a5d610c29d548a40610d9"
  },
  {
      "image": "/myjyotish.com/2024/10/25/dhanteras-shopping-muhurat-2024_403373f89fd97a74c7a4ae972fb0e4fe.jpeg",
      "full_slug": "blogs-hindi/buy-vehicles-on-this-shubh-muhurat-of-dhanteras-2024-shopping-muhurat",
      "updated_at": "2024-10-25 14:03:26",
      "title_hn": "Dhanteras Shopping Muhurat 2024: धनतेरस के दिन इस शुभ मुहूर्त में खरीदें वाहन",
      "type": "story",
      "status" : "",
      "_id": "671b571a367532039d02b3af"
  },
  {
      "image": "/myjyotish.com/2024/10/24/aaj-ka-love-rashifal_a67085088dbbf9d52edecfb591f620ab.jpeg",
      "full_slug": "blogs-hindi/aaj-ka-love-rashifal-26-october-2024-today-love-horoscope-astrology-prediction",
      "updated_at": "2024-10-25 13:15:02",
      "title_hn": "Aaj Ka Love Rashifal 26 October 2024: अपका जलवा आज साथी के सिर चढ़ कर बोलेगा अगर ध्यान रखें इस बात पर",
      "type": "story",
      "status" : "",
      "_id": "671a5ecbbda3abe14e051409"
  },
  {
      "image": "/myjyotish.com/2024/10/25/yama-deep-daan_c0eab8fcecf9989fe53eef4701b8022b.jpeg",
      "full_slug": "blogs-hindi/what-is-yama-deepam-yama-deep-daan-yam-deepam-kyu-manaya-jata-hai",
      "updated_at": "2024-10-25 12:20:38",
      "title_hn": "Yama Deep Daan: दीवाली के दौरान क्यों किया जाता है यम दीप दान? जानें क्या है महत्व",
      "type": "story",
      "status" : "",
      "_id": "671b3f84fbbd3403440bfcd4"
  },
  {
      "image": "/myjyotish.com/2024/10/25/diwali-diya-oil-benefits_6f610e538413ed5c5d6ad6024ffc83ee.jpeg",
      "full_slug": "blogs-hindi/diwali-diya-oil-diwali-me-ghee-til-or-sarson-ke-tel-se-kyu-jalaya-jata-hai-diya",
      "updated_at": "2024-10-25 11:24:49",
      "title_hn": "Diwali Diya Oil: दिवाली में घी, तिल और सरसों का तेल से क्यों जलाया जाता है दीया? जानिए क्या है फायदे",
      "type": "story",
      "status" : "",
      "_id": "671b32661c70cac73c0d5a6c"
  }
];

  return data;
};

export default blog;
