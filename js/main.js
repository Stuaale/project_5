
  //Settings in place for lightbox options
  
  lightbox.option({
      'resizeDuration' : 500,
      'fadeDuration' : 1000,
      'wrapAround' : true,
      'alwaysShowNavOnTouchDevices': true
  });

  //This is the JS to support filter on search box

let filterInput = document.getElementById("search");  
    filterInput.addEventListener("keyup", imageNames);

    function imageNames(){
        let filterValue = document.getElementById("search").value.toUpperCase();
        let ul = document.getElementById("image-list");
        let li = ul.querySelectorAll("li.image-items");
        
        for (let i = 0; i < li.length; i++){
          let a = li[i].getElementsByTagName("a")[0];
          if(a.getAttribute('data-title').toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
          } else {
            li[i].style.display = 'none';
          }
        }
    }   

    


  
    
