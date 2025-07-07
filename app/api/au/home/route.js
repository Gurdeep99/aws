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

export default async function handler(req, res) {
  try {
    // Path to the data.json file inside the public folder
    const filePath = path.resolve(process.cwd(), 'public', 'data.json');
    
    // Read the data from the file
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Shuffle the data to randomize the order
    const shuffledData = shuffleArray(data);

    // Send the randomized data as a response
    res.status(200).json(shuffledData);
  } catch (error) {
    console.error('Error reading the file:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
