// Get the necessary elements
const image = document.getElementById('image');
const author = document.getElementById('author');
const likeButton = document.getElementById('like-button');
const likeCounter = document.getElementById('like-counter');

// Function to get a random image from Unsplash
async function getRandomImage() {
  const response = await fetch('https://api.unsplash.com/photos/random?client_id=v6gE_trJi7WzypaubCP_QOsP7kcJC_sHjD3hCd3kRUY');
  const data = await response.json();
  return data;
}

// Function to display the image and author information
async function displayImage() {
  const imageData = await getRandomImage();
  image.src = imageData.urls.regular;
  author.textContent = imageData.user.name;
}

// Function to handle like button click
function handleLikeClick() {
  likeCounter.textContent = parseInt(likeCounter.textContent) + 1;
}

// Event listener for page load
window.addEventListener('load', displayImage);

// Event listener for like button click
likeButton.addEventListener('click', handleLikeClick);