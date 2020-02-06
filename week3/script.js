// Call the endpoint and loop through the results to create a carousel using the HTML below.

// The commented HTML is what you'll need to create in a loop.

// The first item needs to have a class of active added to it otherwise the carousel will not display.

const carouselLoop = "https://api.rawg.io/api/games/4003/screenshots";

const carouselInner = document.querySelector(".carousel-inner");

fetch(carouselLoop)
  .then(response => response.json())
  .then(json => loopTroughCarousel(json))
  .catch(error => console.dir(error));

function loopTroughCarousel(json) {
  const screenshots = json.results;
 
  for (let i = 0; i < screenshots.length; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", screenshots[i].image);
    img.classList.add("d-block", "w-100");

    const div = document.createElement("div");
    div.classList.add("carousel-item");
    if (i === 0) {
      div.classList.add("active");
    }

    div.appendChild(img);
    carouselInner.appendChild(div);
  }
}
