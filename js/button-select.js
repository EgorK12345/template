var options = document.getElementsByClassName("select-criteria");

for(var i = 0, length = options.length; i < length; i++){
  options[i].parentNode.addEventListener("click", function(event) {
    var target = event.target;

    if (target.tagName != 'BUTTON') return;

    highlight(target);
  });
}

function highlight(node){
  childs = Array.prototype.slice.call(node.parentNode.childNodes);

  for(var i = 0; i < childs.length; i++){
    if(childs[i].className === "select-button highlighted"){
      childs[i].className = "select-button";
    }
  }

  node.className = "select-button highlighted";
}