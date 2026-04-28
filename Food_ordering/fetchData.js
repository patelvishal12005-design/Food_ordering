import fs from 'fs';

const API_URL = "http://127.0.0.1:8000/api/foods/";
const OUTPUT_FILE = "./src/foods.json";

// Default fallback data in case backend is unreachable
const defaultFoods = [
  { id: 1, name: "Burger", price: 120, description: "Juicy grilled burger with extra cheese.", image: "burger.jpg" },
  { id: 2, name: "Pizza", price: 180, description: "Delicious cheesy pizza with fresh toppings.", image: "pizza.jpg" },
  { id: 3, name: "Sandwich", price: 90, description: "Healthy veg sandwich with fresh veggies.", image: "sandwich.jpg" },
  { id: 4, name: "Special Burger", price: 150, description: "Specialty burger", image: "burger.jpg" },
  { id: 5, name: "Large Pizza", price: 250, description: "Premium pizza with extra toppings and crust.", image: "pizza.jpg" },
  { id: 6, name: "Veg Sandwich", price: 110, description: "Healthy veg sandwich with fresh veggies.", image: "sandwich.jpg" }
];

async function fetchAndSaveData() {
  console.log(`[SYNC] Fetching foods from local backend: ${API_URL}`);
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    if (data && data.length > 0) {
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));
      console.log(`[SYNC] Success! Saved ${data.length} foods to ${OUTPUT_FILE}`);
    } else {
      console.log(`[SYNC] Backend returned empty data. Using defaults.`);
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(defaultFoods, null, 2));
    }
  } catch (error) {
    console.error(`[SYNC] Failed to fetch from backend: ${error.message}`);
    console.log(`[SYNC] Backend is likely not running. Using fallback static data.`);
    
    // Create the file with default data if it doesn't exist to prevent import errors
    if (!fs.existsSync(OUTPUT_FILE)) {
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(defaultFoods, null, 2));
    }
  }
}

fetchAndSaveData();
