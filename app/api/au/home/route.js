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

// GET method to return shuffled data
export async function GET(request) {
  try {
    // Path to the data.json file inside src/data/
    const filePath = path.resolve(process.cwd(), 'src', 'data', 'data.json');
    
    // Read the data from the file
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Shuffle the data to randomize the order
    const shuffledData = shuffleArray(data);

    // Return the shuffled data as a JSON response
    return new Response(JSON.stringify({
      "feedId": 2269,
      "feedVersionId": 2270,
      "userId": "6741d0e7c722f07def054cc",
      "sessionId": "c60e11e1-d2cb-4d3f-85f6-11e3f13cda9c",
      "pageId": "766946f5-73e7-420b-b76b-48fe2156977a",
      "pageNo": 1,
      "items": shuffledData,
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

// POST method to handle adding data (optional)
export async function POST(request) {
  try {
    const data = await request.json();

    // Path to the data.json file inside src/data/
    const filePath = path.resolve(process.cwd(), 'src', 'data', 'data.json');
    
    // Read existing data
    const existingData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    // Append new data
    existingData.push(data);

    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 4));

    // Return the added data as a response
    return new Response(JSON.stringify({
      "feedId": 2269,
      "feedVersionId": 2270,
      "userId": "6741d0e7c722f07def054cc",
      "sessionId": "c60e11e1-d2cb-4d3f-85f6-11e3f13cda9c",
      "pageId": "766946f5-73e7-420b-b76b-48fe2156977a",
      "pageNo": 1,
      "items": [data],
      "feedTitle": null
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error adding data:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
