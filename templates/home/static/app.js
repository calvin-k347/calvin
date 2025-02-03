const emoji = document.querySelector(".emoji");
emoji.addEventListener("mouseenter", () =>{
    emoji.innerText = "👀➕"
});
emoji.addEventListener("mouseleave", () =>{
    emoji.innerText = "see more"
});
