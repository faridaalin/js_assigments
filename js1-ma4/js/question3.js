const gamesUrl = "https://api.rawg.io/api/games/4200";

fetch(gamesUrl)
  .then(response => response.json())
  .then(json => createGameDetails(json))
  .catch(error => console.log(error));

function createGameDetails(json) {
  const h1 = document.querySelector("h1");
  h1.innerHTML = json.name;

  const Image = document.querySelector(".image");
  let imgUrl = json.background_image;
  Image.style.backgroundImage = `url(${imgUrl})`;

  const description = document.querySelector(".description");
  description.innerHTML = json.description;
}
