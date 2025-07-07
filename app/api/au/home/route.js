import fs from 'fs';
import path from 'path';

// Fisher-Yates shuffle function to randomize the array
const shuffleArray = (array) => {
  let shuffledArray = [...array]; // Clone the array to avoid modifying the original
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
};

export async function GET(request) {
  try {
    // Path to the data.json file inside the public folder
    const filePath = path.resolve(process.cwd(), 'public', 'data.json');
    
    // Read the data from the file
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Shuffle the data to randomize the order
    const shuffledData = shuffleArray(data);

    // Return the data in the required format
    return new Response(JSON.stringify({
      "feedId": 2269,
      "feedVersionId": 2270,
      "userId": "6741d0e7c722f07def054cc",
      "sessionId": "c60e11e1-d2cb-4d3f-85f6-11e3f13cda9c",
      "pageId": "766946f5-73e7-420b-b76b-48fe2156977a",
      "pageNo": 1,
      "items": shuffledData, // Randomized data
      "feedTitle": null
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error reading the file:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
