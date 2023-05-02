let parentDiv = document.querySelector(".section");
for (let i = 0; i < 6; i++) {
  var newDiv = document.createElement("div");
  newDiv.className = "row m-3 p-0 bg-light d-flex";
  newDiv.innerHTML =`
  <div class="col-lg-4">
    <img class="img-fluid" src="images/products/1.jpg" alt="image Lamborghini Urus" />
  </div>
  <div class="col-8">
    <h2 class="carNames text-uppercase">Lamborghini Urus</h2>
    <p class="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi expedita minima exercitationem accusamus reiciendis, fugiat unde sapiente soluta quaerat nostrum quasi non magnam nisi sint veniam natus nulla eius.
    </p>
        <div class="row">
            <div class="col">price 79 000</div>
            <div class="col">
                <input type="button" value="+ comparer" class="btn btn-danger" />
            </div>
        </div>
  </div>
  `
  parentDiv.appendChild(newDiv);
}
