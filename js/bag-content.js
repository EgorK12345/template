var bagItem = document.querySelector(".bag-item"),
  bagItemsList = bagItem.parentElement,
  bagClone = bagItem.cloneNode(true);

bagItemsList.innerHTML = "";

for(var i; i < localStorage.length; i++){
  var item = localStorage.key(i),
    quantity = localStorage.getItem(item);
  
  if(IsJsonString(item)){
    displayBagItem(JSON.parse(item), quantity);
  }
}

if(localStorage.itemsNumber === "0"){
  createBagMessage("Your shopping bag is empty. Use catalog to add new items");
}

function displayBagItem(item, quantity){
  var newBagItem = bagClone.cloneNode(true),
    properties = newBagItem.querySelector(".item-properties");

  newBagItem.querySelector(".item-photo img").src = item.photo;
  newBagItem.querySelector(".item-name").innerHTML = item.name;
  newBagItem.querySelector(".item-price").innerHTML = " \u00A3 " + item.price;

  item.properties["Quantity:"] = quantity;

  for(var property in item.properties){
    var li = document.createElement('li'),
      PN = document.createElement('span'),
      PV = document.createElement('span')

    properties.appendChild(li);
    PN.className = "property-name";
    PN.innerHTML = property;
    li.appendChild(PN);
    PV.className = "property-value";
    PV.innerHTML = item.properties[property];
    li.appendChild(PV);
  }

  bagItemsList.appendChild(newBagItem);
}

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}