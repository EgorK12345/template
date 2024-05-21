var filterMenu = document.getElementsByClassName("filters")[0];

filterMenu.addEventListener( "click", function(event){
  var target = event.target;

  if(target.parentElement.className != "filter-options-list") return;

  var filter = target.parentElement.parentElement,
    optionsList = target.parentElement;

  if(target.className == "filter-option"){
    filter.className = "filter selected";

    for (var i = 1, l = optionsList.children.length; i < l; i++){
      optionsList.children[i].className = "filter-option";
    }

    target.className = "filter-option selected";

  for (var i = 1, l = filter.children.length; i < l; i++){
      if(filter.children[i].className === "selected-option"){
        filter.children[i].innerHTML = target.innerHTML;
      }
    }
  }
  else {
        filter.className = "filter";
    for (var i = 1, l = optionsList.children.length; i < l; i++){
      optionsList.children[i].className = "filter-option";
    }
    for (var i = 0, l = filter.children.length; i < l; i++){
      if(filter.children[i].className === "selected-option"){
        filter.children[i].innerHTML = " ";
      }
    }
  }
});