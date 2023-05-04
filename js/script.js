let parentDiv = document.querySelector(".section");
for (let i = 1; i < 7; i++) {
  var newDiv = document.createElement("div");
  newDiv.className = "row m-3 p-0 bg-light d-flex";
  newDiv.innerHTML = `
  <div class="col-lg-4 col-sm-12 p-0">
    <img class="img-fluid" src="images/products/${i}.jpg" alt="${
    i === 1
      ? "image lamborghini urus"
      : i === 2
      ? "image toyota 4runner"
      : i === 3
      ? "image land-rover range rover"
      : i === 4
      ? "image mercedes-benz classe A"
      : i === 5
      ? "image mg mga 1500 Roadster"
      : i === 6
      ? "image audi a1"
      : "image de voiture indisponible"
  }"/>
  </div>
  <div class="col-lg-8 col-sm-12 d-flex flex-column justify-content-between">
    <h2 class="carNames text-uppercase mt-2">${
      i === 1
        ? "lamborghini urus"
        : i === 2
        ? "toyota 4runner"
        : i === 3
        ? "land-rover range rover"
        : i === 4
        ? "mercedes-benz classe A"
        : i === 5
        ? "mg mga 1500 Roadster"
        : i === 6
        ? "audi a1"
        : "voiture indisponible"
    }
    </h2>
    <p class="text-dark">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi expedita minima exercitationem accusamus reiciendis, fugiat unde sapiente soluta quaerat nostrum quasi non magnam nisi sint veniam natus nulla eius.
    </p>
    <div class="row">
        <div class="carPrice col-lg-9 col-sm-6 d-flex justify-content-end">
          ${
            i === 1
              ? "<span class='me-3'>195 538 €</span>" + "135 935 €"
              : i === 2
              ? "<span class='me-3'>83 880 €</span>" + "74 900 €"
              : i === 3
              ? "<span class='me-3'>156 300 €</span>" + "95 000 €"
              : i === 4
              ? "<span class='me-3'>95 100 €</span>" + "69 000 €"
              : i === 5
              ? "<span class='me-3'>50 538 €</span>" + "35 999 €"
              : i === 6
              ? "<span class='me-3'>35 000 €</span>" + "22 000 €"
              : "prix indisponible"
          }
        </div>
        <div class="col-lg-3 col-sm-6 mb-3 ">
          <input type="button" value="+ comparer" class="btn btn-danger"/>
        </div>
        </div>
  </div>`;
  parentDiv.appendChild(newDiv);
}
