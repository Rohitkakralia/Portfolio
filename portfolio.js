let sidebar = document.getElementById("sidemenu");
function openmenu(){
    sidebar.style.right = "0px";
}
function closemenu(){
    sidebar.style.right = "-200px";
}

// mode
// let header =document.querySelector("#header");
// function changeMode(){
//     const body = document.querySelector("body");
//     if(body.classList.contains('light')){
//         body.classList.remove('light', 'animatedButton', 'circleInButton');
//         body.classList.add('dark', 'darkAnimatedButton','darkCircleInButton');
        

//     }else{
//         body.classList.remove('dark', 'darkAnimatedButton', 'darkCircleInButton');
//         body.classList.add('light', 'animatedButton', 'circleInButton');
//     }
// }


let modeBtn = document.querySelector("#btn");
let currMode = "light";
modeBtn.addEventListener("click", ()=>{
       if(document.querySelector(".mode").innerText === "Dark Mode"){
            document.querySelector(".mode").innerText = "Light Mode";
            document.querySelector("body").style.backgroundColor = "black";
            document.querySelector("#logoR").style.color = "white";
             document.querySelector(".nav").style.color = "white";
             document.querySelector(".nav2").style.color = "white";
             document.querySelector(".nav3").style.color = "white";
             document.querySelector(".nav4").style.color = "white";
             document.querySelector(".nav5").style.color = "white";
             document.querySelector(".dsa").style.backgroundColor = "black";
             document.querySelector(".hello").style.color = "white";
             document.querySelector(".n").style.color = "white";
             document.querySelector(".soft").style.color = "white";
             document.querySelector(".Contact-button").style.border = "2px solid white";
             document.querySelector(".logo1").style.color = "white";
             document.querySelector(".logo2").style.color = "white";
             document.querySelector(".line").style.backgroundColor = "white";
             document.querySelector(".fa-solid").style.color = "white";
            

       }else if(document.querySelector(".mode").innerText === "Light Mode"){
            document.querySelector(".mode").innerText = "Dark Mode";
            document.querySelector("body").style.backgroundColor = "white";
            document.querySelector("#logoR").style.color = "black";
            document.querySelector(".nav").style.color = "black";
            document.querySelector(".nav2").style.color = "black";
            document.querySelector(".nav3").style.color = "black";
            document.querySelector(".nav4").style.color = "black";
            document.querySelector(".nav5").style.color = "black";
            document.querySelector(".dsa").style.backgroundColorcolor = "black";
            document.querySelector(".hello").style.color = "black";
            document.querySelector(".n").style.color = "black";
            document.querySelector(".soft").style.color = "black";
            document.querySelector(".CV-button").style.border = "2px solid black";
            document.querySelector(".Contact-button").style.border = "2px solid black";
            document.querySelector(".logo1").style.color = "black";
             document.querySelector(".logo2").style.color = "black";
             document.querySelector(".line").style.backgroundColor = "white";
       }
       console.log(currMode);
});