  var btn = document.querySelector('button')
  var name = document.querySelector('input');
  var output = document.getElementById('output')
  
  btn.onclick = function myfunction() {
    
    if(input.value == ""){
    alert("Gagal");
    }else{
      output.innerHTML = input.value;
      input.value = "";
    }
  } 

