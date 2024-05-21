var main = document.querySelector(".main");

main.addEventListener("click", function(event){
  var target = event.target;

  if(target.className !== "remove-button") return;

  var itemInfo = target.parentElement;

  var quantity = itemInfo.querySelectorAll(".item-properties>li")[2].lastElementChild;

  quantity.innerHTML -= 1;
  removeFromBag(itemInfo.closest(".bag-item"));

  if(quantity.innerHTML === "0"){

    itemInfo.closest(".bag-item").remove();
    if(localStorage.itemsNumber === "0"){
      createBagMessage("Your shopping bag is empty. Use catalog to add new items");
    }
  }


});

function removeFromBag(bagItem){
  var item = {};

  item.name = bagItem.querySelector(".item-name").innerHTML;
  item.price = bagItem.querySelector(".item-price").innerHTML.match(/\d+\.?\d+/)[0];
  item.photo = document.querySelector(".item-photo img").src.match(/img\/\S+/)[0];

  item.properties = {};

  var properties = bagItem.querySelector(".item-properties"),
    property;

  for(var i = 0, l = properties.children.length-1; i < l; i++){
    property = properties.children[i];

    item.properties[property.firstElementChild.innerHTML] = property.lastElementChild.innerHTML;
  }

  if(localStorage[JSON.stringify(item)] == 1){
    localStorage.removeItem(JSON.stringify(item));
  }
  else {
    localStorage[JSON.stringify(item)] -= 1;
  }

  localStorage.itemsNumber -= 1;
  localStorage.bagTotal = (parseFloat(localStorage.bagTotal) - parseFloat(item.price)).toFixed(2);

  bagUpdate();
  totalCostUpdate()
}

