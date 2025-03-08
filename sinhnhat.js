
var modal = document.getElementById("myModal");  
var btn = document.getElementById("openModalBtn");  
var span = document.getElementsByClassName("close")[0];  
function releaseBalloons() {
            for (let i = 0; i < 10; i++) {
                let balloon = document.createElement("div");
                balloon.classList.add("balloon");
                balloon.innerHTML = "🎈";
                balloon.style.left = Math.random() * 100 + "vw";
                balloon.style.animationDuration = (3 + Math.random() * 2) + "s";
                document.body.appendChild(balloon);
                setTimeout(() => balloon.remove(), 4000);
            }
        }

btn.onclick = function() {  
  modal.style.display = "block";  
}  


span.onclick = function() {  
  modal.style.display = "none";  
}  


window.onclick = function(event) {  
  if (event.target == modal) {  
    modal.style.display = "none";  
  }  
}  
btn.onclick = function() {  
    modal.classList.add("show");  
  }  
  
  span.onclick = function() {  
    modal.classList.remove("show");  
  }  
  
  window.onclick = function(event) {  
    if (event.target == modal) {  
      modal.classList.remove("show");  
    }  
  }  