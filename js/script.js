let parentDiv = document.querySelector(".section");
for (let i = 1; i < 7; i++) {
  var newDiv = document.createElement("div");
  newDiv.className = "row m-3 p-0 bg-light d-flex";
  newDiv.innerHTML =`
  <div class="col-lg-4">
    <img class="img-fluid" src="images/products/${i}.jpg" alt="${i === 1 ? "image lamborghini urus" : i === 2 ? "image toyota 4runner" : i === 3 ? "image range rover" : i === 4 ? "image mercedes-benz classe A" : i === 5 ? "image mg mga 1500 Roadster" : i === 6?"image audi a1" : "image de voiture indisponible"}"/>
  </div>
  <div class="col-8">
    <h2 class="carNames text-uppercase">${i === 1 ? "lamborghini urus" : i === 2 ? "toyota 4runner" : i === 3 ? "range rover" : i === 4 ? "mercedes-benz classe A" : i === 5 ? "mg mga 1500 Roadster" : i === 6?"audi a1" : "voiture indisponible"}</h2>
    <p class="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi expedita minima exercitationem accusamus reiciendis, fugiat unde sapiente soluta quaerat nostrum quasi non magnam nisi sint veniam natus nulla eius.
    </p>
        <div class="row">
            <div class="carPrice col">${i === 1 ? "79 000" : i === 2 ? "71 000" : i === 3 ? "79 000" : i === 4 ? "79 000" : i === 5 ? "50 995" : i === 6 ? "77 999" : "79 000"}</div>
            <div class="col">
                <input type="button" value="+ comparer" class="btn btn-danger" />
            </div>
        </div>
  </div>
  `
  parentDiv.appendChild(newDiv);
}
