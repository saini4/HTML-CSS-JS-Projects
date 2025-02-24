const btn = document.querySelector(".joke-btn");
const joke = document.querySelector(".joke");

btn.addEventListener("click", async () => {
  const jokeText = await fetchJoke();
  if (jokeText) {
    joke.textContent = jokeText;
  } else {
    joke.textContent = "Failed to fetch a joke. Please try again!";
  }
});

async function fetchJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  return `${data.setup} ${data.punchline}`;
}