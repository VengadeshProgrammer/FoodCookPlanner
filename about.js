window.addEventListener("load", ()=>{
    const tableEL = document.querySelector("table");
    const formEL = document.querySelector("form");
    const inputEL = document.querySelector("form #input");
    const buttonEL = document.getElementById("support");
    let selectedEL = undefined;
    tableEL.addEventListener("click", (e)=>{
        if(e.target.tagName.toLowerCase() == "th") return;
        if(selectedEL != undefined)
        {
            selectedEL.parentElement.classList.remove("active");
            if(selectedEL == e.target) return;
            e.target.parentElement.classList.add("active");
        }
        selectedEL = e.target;
        e.target.parentElement.classList.add("active"); 
    });
    buttonEL.addEventListener("click", ()=>{
        formEL.hidden = !formEL.hidden;
    });
    formEL.addEventListener("submit", (e)=>{
        e.preventDefault();
        if(inputEL.value == null || inputEL.value == undefined) return;
        console.log(`Thanks For Donating ₹${inputEL.value}`);
    });
});