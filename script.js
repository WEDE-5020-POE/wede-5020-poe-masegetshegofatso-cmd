const searchInput=document.getElementByld(searchInput);
if(searchInput){
  searchInput.addEventListener("keyup", function(){
   let filter = this.value.toLowercase();
   let items = document.querySelectorAll("serviceList li");
   items.forEach(function(item){

    if(item.textContent.toLowerCase().includes(filter)){
      item.style.display = "";
    }else{
      item.style.display = "none";
    }        

  });

 });

}

<script src="script.js"></script>

