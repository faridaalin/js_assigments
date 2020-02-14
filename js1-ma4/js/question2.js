const gamesUrl = "https://api.rawg.io/api/games";

fetch(gamesUrl)
  .then(response => response.json())
  .then(json => createGames(json))
  .catch(error => console.log(error));

function createGames(json) {
  const resultsArray = json.results;
  const resultsContainer = document.querySelector(".results");

  resultsArray.forEach(result => {
    let gameName = result.name;
    let image = result.background_image;

    const div = document.createElement("div");
    div.classList.add("game");

    const h2 = document.createElement("h2");
    h2.textContent = gameName;

    const img = document.createElement("img");
    img.setAttribute("src", `${image}`);
    img.setAttribute("alt", `${gameName}`);

    div.appendChild(h2);
    div.appendChild(img);
    resultsContainer.appendChild(div);
  });
}
