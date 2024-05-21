var bagState = document.querySelector(".bag-state");

if(!localStorage.itemsNumber){
  localStorage.itemsNumber = 0;
}

if(!localStorage.bagTotal){
  localStorage.bagTotal = 0;
}

if(localStorage.itemsNumber !== 0 && localStorage.bagTotal !== 0){
  var bagSum = parseFloat(localStorage.bagTotal).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '); /*adds spacing between nums*/
  if( bagSum !== "0.00"){
    bagState.textContent = " \u00A3 " + bagSum + " (" + localStorage.itemsNumber +")";
  }
}

function bagUpdate(){
  var bagSum = parseFloat(localStorage.bagTotal).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '); /*adds spacing between nums*/
  if( bagSum !== "0.00"){
    bagState.textContent = " \u00A3 " + bagSum + " (" + localStorage.itemsNumber +")";
  }
  else{
    bagState.textContent = "";
  }
}

function bagClear(){
  localStorage.clear();
  localStorage.bagTotal = 0;
  localStorage.itemsNumber = 0;
  bagUpdate();
}