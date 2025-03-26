import React from "react";

const jyotish = () => {
  const data = [
    {
      name: "एस्ट्रो साकेत",
      url: "https://userimg.amarujala.com/2024/8/28/66cea43c88511.png",
      status: "",
      id: 1,
    },
    {
      name: "एस्ट्रो शील चंद",
      url: "https://userimg.amarujala.com/2024/8/27/66cdc007df87d.jpeg",
      status: "",
      id: 2,
    },
    {
      name: "एस्ट्रो आशुतोष दुबे",
      url: "https://userimg.amarujala.com/2025/1/28/6798b3c51f615.jpeg",
      status: "",
      id: 3,
    },
    {
      name: "एस्ट्रो रितेश पांडे",
      url: "https://userimg.amarujala.com/2024/8/28/66cea32d5a4c8.png",
      status: "",
      id: 4,
    },
    {
      name: "एस्ट्रो त्रिलोकी नाथ",
      url: "https://userimg.amarujala.com/2024/12/18/676294de9d9fc.png",
      status: "",
      id: 5,
    },
    {
      name: "एस्ट्रो वैभव कुमार उपाध्याय",
      url: "https://userimg.amarujala.com/2025/1/2/67766167bfc0b.png",
      status: "",
      id: 6,
    },
    {
      name: "एस्ट्रो दीपक शर्मा",
      url: "https://userimg.amarujala.com/2024/12/21/6766b2cd8bdf8.jpg",
      status: "",
      id: 7,
    },
    {
      name: "एस्ट्रो राधा बल्लभ मिश्रा",
      url: "https://userimg.amarujala.com/2024/10/24/671a1b2e4a743.png",
      status: "",
      id: 8,
    },
    {
      name: "एस्ट्रो बालकेश",
      url: "https://userimg.amarujala.com/2024/11/27/6746c2b0b914a.png",
      status: "",
      id: 9,
    },
    {
      name: "टैरो आशा राजपति",
      url: "https://userimg.amarujala.com/2024/9/5/66d9943ba152f.png",
      status: "",
      id: 10,
    },
    {
      name: "एस्ट्रो अभिषेक",
      url: "https://userimg.amarujala.com/2025/3/13/67d2882c53122.jpeg",
      status: "",
      id: 11,
    },
    {
      name: "एस्ट्रो सुप्रिया कंडवाल",
      url: "https://userimg.amarujala.com/2025/1/16/6788aec4b5640.jpeg",
      status: "",
      id: 12,
    },
    {
      name: "एस्ट्रो कर्म जीत",
      url: "https://userimg.amarujala.com/2024/12/10/6757e3ae76475.png",
      status: "",
      id: 13,
    },
    {
      name: "एस्ट्रो डॉ अभिमन्यू पाराशर",
      url: "https://userimg.amarujala.com/2024/8/28/66ceb4bd9c0f5.png",
      status: "",
      id: 14,
    },
    {
      name: "एस्ट्रो अनिल सचदेव",
      url: "https://userimg.amarujala.com/2024/8/27/66cdc0439e5f4.jpeg",
      status: "",
      id: 15,
    },
    {
      name: "एस्ट्रो बिक्रम मजूमदार",
      url: "https://userimg.amarujala.com/2025/1/27/67971e6033ffa.jpeg",
      status: "",
      id: 16,
    },
    {
      name: "एस्ट्रो पंकज जीत सिंह",
      url: "https://userimg.amarujala.com/2024/8/28/66cea4603ae5f.png",
      status: "",
      id: 17,
    },
    {
      name: "एस्ट्रो नित्यानंद तिवारी",
      url: "https://userimg.amarujala.com/2024/8/27/66cdc05fbb60e.jpeg",
      status: "",
      id: 18,
    },
    {
      name: "एस्ट्रो संकेत जी",
      url: "https://userimg.amarujala.com/2024/8/28/66ced6167963b.png",
      status: "",
      id: 19,
    },
    {
      name: "एस्ट्रो राज शर्मा",
      url: "https://userimg.amarujala.com/2024/8/28/66ceb775d47d0.png",
      status: "",
      id: 20,
    },
  ];

  function getRandomSeven() {
    let randomSeven = [];
    let randomIndex;
    let copyData = [...data];
    for (let i = 0; i < 7; i++) {
      randomIndex = Math.floor(Math.random() * copyData.length);
      const randomItem = copyData.splice(randomIndex, 1)[0];
      randomItem.status = getRandomStatus();
      randomSeven.push(randomItem);
    }

    // sort the array by status
    randomSeven.sort((a, b) => {
      const statusPriority = {
        online: 0,
        bussy: 1,
        offline: 2,
      };
      return statusPriority[a.status] - statusPriority[b.status];
    });

    return randomSeven;
  }

  function getRandomStatus() {
    const statuses = ["online", "bussy", "offline"];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
  }

  return getRandomSeven();
};

export default jyotish;
