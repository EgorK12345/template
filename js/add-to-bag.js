var addButton = document.querySelector(".addtobag-btn");

addButton.addEventListener("click", function(event){
  var itemInfo = document.querySelector(".item-info"),
    bagState = document.querySelector(".bag-state");

  addToBag(itemInfo);

  bagSum = parseFloat(localStorage.bagTotal).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '); /*adds spacing between nums*/
  bagState.textContent = " \u00A3 " + bagSum + " (" + localStorage.itemsNumber +")";
});

function addToBag(itemInfo){
  var item = {};

  item.name = itemInfo.querySelector(".item-header").innerHTML;
  item.price = itemInfo.querySelector(".item-price").innerHTML.match(/\d+\.?\d+/)[0];
  item.photo = document.querySelector(".item-images img").src.match(/img\/\S+/)[0];

  //sets item properties
  item.properties = {};
  itemCriteries = itemInfo.querySelectorAll("[class$='select']")
  for(var i = 0, length = itemCriteries.length; i < length; i++) {
    var criteriaName = itemCriteries[i].firstElementChild.innerHTML,
      criteriaValue;

    if(itemCriteries[i].getElementsByClassName("highlighted")[0]){
      criteriaValue = itemCriteries[i].querySelector(".highlighted").innerHTML;
    }
    else {
      criteriaValue = itemCriteries[i].querySelector(".select-button").innerHTML;
    }

    item.properties[criteriaName] = criteriaValue;
  }

  if(!localStorage.getItem(JSON.stringify(item))) {
    localStorage.setItem(JSON.stringify(item), 1);
  }
  else {
    var quantity = parseInt(localStorage.getItem(JSON.stringify(item)));
    quantity += 1;
    localStorage.setItem(JSON.stringify(item), quantity);
  }

  localStorage.itemsNumber++;
  localStorage.bagTotal = (parseFloat(localStorage.bagTotal) + parseFloat(item.price)).toFixed(2);
  console.log(localStorage);
}
