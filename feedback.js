window.onload = () => {
    const formEL = document.forms.form;
    formEL.addEventListener("submit", (e)=>
    {
        e.preventDefault();
        let formData = new FormData(formEL);
        fetch("https://reqres.in/api/users/2", {
            method:"GET",
        })
        .then(res=>res.json())
        .then(data=>console.log(data));
    });
    const radios = document.getElementById("radios");
    radios.addEventListener("change", (e)=>{
        if(e.target.value == "Contribution")
        {
            let inter = setInterval(()=>{
                alert("Thank You for your Contribution!");
                clearInterval(inter);
            }, 1000);
        }
    });
    const checkEL = document.getElementById("terms");
    checkEL.addEventListener("change", (e)=>{
        console.log(e.target.checked);
    });
};