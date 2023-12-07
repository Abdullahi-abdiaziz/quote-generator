const quote = document.getElementById("quote");
const author = document.getElementById("writer");

const container = document.querySelector("#quote-box");

// const body = document.body;

const icon = document.querySelectorAll(".icon");

const generateQuote = document.getElementById("new-quote");

const apiKey = "Q4HafUiEkvLOL6LblG9c4g==R4JTF2ZawN70SAap";
const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=happiness"; // Replace with the actual API endpoint

async function fetchQuotes() {
  const url = `${apiUrl}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const quotes = await response.json();
    

    author.innerHTML = quotes[0].author;
    quote.innerHTML = quotes[0].quote;

    const randomHexColor = getRandomHexColor();

    // Change the background color of the body
    document.body.style.backgroundColor = randomHexColor;
    icon.forEach((item) => {
      item.style.backgroundColor = randomHexColor;
    });
    generateQuote.style.backgroundColor = randomHexColor;
    container.style.color = randomHexColor;

    console.log(quotes[0].quote);
    console.log(quotes[0].author);
  } catch (error) {
    console.error("Error:", error);
  }
}



generateQuote.addEventListener("click", fetchQuotes);

// Generate Random Hexadecimal Color
function getRandomHexColor() {
  // Generate random values for red, green, and blue components
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Convert the decimal values to hexadecimal and construct the color string
  var hexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(
    16
  )}`;

  return hexColor;
}
