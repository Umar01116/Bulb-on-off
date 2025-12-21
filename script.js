 document.querySelector("button").addEventListener("click", function(){
    let img = document.querySelector("img");
    let button = document.querySelector("button");
    if(img.src.includes("bulb-turn-off.png")){
        img.src = "bulb-on-light.png";
        img.classList.add("bulb-on");
        button.innerText = "Turn off";
    }
    else{
        img.src = "bulb-turn-off.png";
        img.classList.remove("bulb-on");
        button.innerText = "Turn on";
    }
   });