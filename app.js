let profileSecton = document.querySelector(".profle-section");
const container = document.querySelector(".content-section");

const btnProfile = document.querySelector("#btn-profile");   
const btnSocial = document.querySelector("#btn-social");

btnProfile.addEventListener("click", activeBtn) 
btnSocial.addEventListener("click", activeBtn); 

function activeBtn(){ 
    
      btnSocial.parentElement.classList.toggle("active")
     
    }
  

