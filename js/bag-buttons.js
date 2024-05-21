var btnEmptyBag = document.querySelector(".empty-bag-btn"),
  btnBuyNow = document.querySelector(".buy-now-btn");

totalCostUpdate();

btnEmptyBag.addEventListener("click", function(event) {

  bagClear();
  totalCostUpdate();

  createBagMessage("Your shopping bag is empty. Use catalog to add new items");
});

btnBuyNow.addEventListener("click", function(event) {
  
  bagClear();
  totalCostUpdate();

  createBagMessage("Thank you for your purchase");
});

function createBagMessage(text) {
  var itemsList = document.querySelector(".items-list"),
    div = document.createElement('div');

  div.className = "bag-message";
  div.innerHTML = text;

  itemsList.innerHTML = "";
  itemsList.appendChild(div);
}

function totalCostUpdate(){
  var totalCost = document.querySelector(".total-cost div")

  var bagSum = parseFloat(localStorage.bagTotal).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '); /*adds spacing between nums*/
  totalCost.textContent = " \u00A3 " + bagSum;
}