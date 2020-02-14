const gamesUrl = "https://api.rawg.io/api/games";

fetch(gamesUrl)
  .then(response => response.json())
  .then(json => createGames(json))
  .catch(error => console.log(error));

function createGames(json) {
  const resultsArray = json.results;
  const resultsContainer = document.querySelector(".results");

  let html = "";

  resultsArray.forEach(result => {
    let gameName = result.name;
    let image = result.background_image;

    html += `<div class="game">
                <h2>${gameName}</h2>
                <img src="${image}" alt="${gameName}">
      </div>`;
  });

  resultsContainer.innerHTML = html;
}
