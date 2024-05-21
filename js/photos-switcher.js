var imagesBlock = document.getElementsByClassName("item-images")[0];

imagesBlock.addEventListener("click", function(event){
  var target = event.target,
    photoNum;

  if (target.parentElement.className != 'img-wrap') return;

  //gets number of clicked photo
  photoNum = target.src.match(/\d(?=\.)/)[0];

  //updates main photo
  var mainPhoto = imagesBlock.firstElementChild;
  mainPhoto.src = mainPhoto.src.replace(/\d(?=\.)/, photoNum);

  for(var i = 1, length = mainPhoto.parentElement.children.length; i < length; i++){
    mainPhoto.parentElement.children[i].className = 'img-wrap';
  }
  target.parentElement.className += " shading";
});


