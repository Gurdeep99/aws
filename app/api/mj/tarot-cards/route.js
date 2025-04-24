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
    title: "Tarot Cards",
    backCard: "https://cdnb.artstation.com/p/assets/images/images/014/976/765/large/sonya-henar-tarot-back.jpg?1546553128",
    feed : [
    {
        "id": 1,
        "name": "The Fool",
        "description": "Represents new beginnings, innocence, and spontaneity. The Fool signifies a journey of self-discovery and the courage to embark on new adventures.",
        "frontImage": "https://aws.gurdeep.net/tarot/00_TheFool.png"
    },
    {
        "id": 2,
        "name": "The Magician",
        "description": "Symbolizes resourcefulness, creativity, and mastery. The Magician indicates the power to manifest desires and use skills effectively to achieve goals.",
        "frontImage": "https://aws.gurdeep.net/tarot/01_TheMagician.png"
    },
    {
        "id": 3,
        "name": "The High Priestess",
        "description": "Embodies intuition, mystery, and wisdom. The High Priestess represents inner knowledge, spiritual insight, and the importance of listening to one`s inner voice.",
        "frontImage": "https://aws.gurdeep.net/tarot/02_TheHighPriestess.png"
    },
    {
        "id": 4,
        "name": "The Empress",
        "description": "Represents fertility, nurturing, and abundance. The Empress signifies growth, creativity, and the nurturing aspects of motherhood and care.",
        "frontImage": "https://aws.gurdeep.net/tarot/03_TheEmpress.png"
    },
    {
        "id": 5,
        "name": "The Emperor",
        "description": "Symbolizes authority, structure, and stability. The Emperor indicates leadership, control, and the establishment of order and discipline.",
        "frontImage": "https://aws.gurdeep.net/tarot/04_TheEmperor.png"
    },
    {
        "id": 6,
        "name": "The Hierophant",
        "description": "Represents tradition, spiritual guidance, and conformity. The Hierophant signifies adherence to conventional values and seeking wisdom from established sources.",
        "frontImage": "https://aws.gurdeep.net/tarot/05_TheHierophant.png"
    },
    {
        "id": 7,
        "name": "The Lovers",
        "description": "Embodies love, harmony, and partnership. The Lovers card indicates meaningful relationships, choices, and the alignment of values and desires.",
        "frontImage": "https://aws.gurdeep.net/tarot/06_TheLovers.png"
    },
    {
        "id": 8,
        "name": "The Chariot",
        "description": "Symbolizes determination, willpower, and victory. The Chariot represents overcoming obstacles through focus and drive, achieving success through control and ambition.",
        "frontImage": "https://aws.gurdeep.net/tarot/07_TheChariot.png"
    },
    {
        "id": 9,
        "name": "The Strength",
        "description": "Represents courage, inner strength, and resilience. The Strength card signifies the power to overcome challenges through bravery and compassion.",
        "frontImage": "https://aws.gurdeep.net/tarot/08_TheStrength.png"
    },
    {
        "id": 10,
        "name": "The Hermit",
        "description": "Symbolizes solitude, reflection, and inner guidance. The Hermit represents a time for introspection and seeking deeper truths within oneself.",
        "frontImage": "https://aws.gurdeep.net/tarot/09_TheHermit.png"
    },
    {
        "id": 11,
        "name": "Wheel of Fortune",
        "description": "Represents cycles, change, and destiny. The Wheel of Fortune signifies the ups and downs of life and the inevitable changes that come with it.",
        "frontImage": "https://aws.gurdeep.net/tarot/10_WheelOfFortune.png"
    },
    {
        "id": 12,
        "name": "Justice",
        "description": "Symbolizes fairness, balance, and truth. Justice represents the need for accountability, making fair decisions, and upholding ethical principles.",
        "frontImage": "https://aws.gurdeep.net/tarot/11_Justice.png"
    },
    {
        "id": 13,
        "name": "The Hanged Man",
        "description": "Represents surrender, new perspectives, and letting go. The Hanged Man indicates a period of pause and reflection, leading to enlightenment and a fresh viewpoint.",
        "frontImage": "https://aws.gurdeep.net/tarot/12_TheHangedMan.png"
    },
    {
        "id": 14,
        "name": "Death",
        "description": "Symbolizes transformation, endings, and new beginnings. Death represents significant change, the end of a chapter, and the opportunity for renewal and growth.",
        "frontImage": "https://aws.gurdeep.net/tarot/13_Death.png"
    },
    {
        "id": 15,
        "name": "Temperance",
        "description": "Represents balance, moderation, and harmony. Temperance signifies the need to find equilibrium and integrate different aspects of life in a harmonious way.",
        "frontImage": "https://aws.gurdeep.net/tarot/14_Temperance.png"
    },
    {
        "id": 16,
        "name": "The Devil",
        "description": "Symbolizes temptation, materialism, and bondage. The Devil represents being trapped by negative influences or unhealthy attachments and the need to break free.",
        "frontImage": "https://aws.gurdeep.net/tarot/15_TheDevil.png"
    },
    {
        "id": 17,
        "name": "The Tower",
        "description": "Represents upheaval, sudden change, and revelation. The Tower signifies dramatic shifts and the breaking down of old structures to make way for new growth.",
        "frontImage": "https://aws.gurdeep.net/tarot/16_TheTower.png"
    },
    {
        "id": 18,
        "name": "The Star",
        "description": "Symbolizes hope, inspiration, and renewal. The Star represents a sense of optimism, healing, and the promise of brighter days ahead.",
        "frontImage": "https://aws.gurdeep.net/tarot/17_TheStar.png"
    },
    {
        "id": 19,
        "name": "The Moon",
        "description": "Represents illusion, intuition, and the subconscious. The Moon signifies the exploration of hidden emotions and the need to trust one`s instincts amidst uncertainty.",
        "frontImage": "https://aws.gurdeep.net/tarot/18_TheMoon.png"
    },
    {
        "id": 20,
        "name": "The Sun",
        "description": "Symbolizes joy, success, and vitality. The Sun represents happiness, achievement, and the positive outcomes resulting from hard work and effort.",
        "frontImage": "https://aws.gurdeep.net/tarot/19_TheSun.png"
    },
    {
        "id": 21,
        "name": "Judgement",
        "description": "Represents reflection, reckoning, and transformation. Judgement signifies the need to evaluate past actions, seek forgiveness, and embrace personal growth.",
        "frontImage": "https://aws.gurdeep.net/tarot/20_Judgement.png"
    },
    {
        "id": 22,
        "name": "The World",
        "description": "Symbolizes completion, achievement, and wholeness. The World represents the successful completion of a journey and the integration of experiences into a sense of fulfillment.",
        "frontImage": "https://aws.gurdeep.net/tarot/21_TheWorld.png"
    }
]};

  return Response.json(data);
}
