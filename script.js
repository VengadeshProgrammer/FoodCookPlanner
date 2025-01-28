window.onload = () => {
const inputBtn = document.getElementById("input-button");
const inputFood = document.getElementById("input");
const foodContainer = document.getElementById("food-container");
const nothingBanner  = document.getElementById("nothing_banner");
const foodStatistics = document.getElementById("foodStatistics");
const localStorageKey = "foodItems";
//focus the input
inputFood.focus();
        function useLocalStorageData(){
        let foodItems = [...JSON.parse(localStorage.getItem(localStorageKey))];
        foodItems.forEach(item=>{
                const liEl = document.createElement("li");
                const btn = document.createElement("button");
                btn.className = "del-icon";
                btn.innerHTML = `<i class="fa fa-remove"></i>`;
                liEl.className = "food-item";
                const textNode = document.createTextNode(item.foodItem);
                liEl.append(textNode);
                liEl.append(btn);
                foodContainer.insertAdjacentElement("beforeend", liEl);
        });
        };
        useLocalStorageData();
refreshUI();
const save = () => {
        if(/^\s*$/.test(inputFood.value)) return;
        let trimmedVal = inputFood.value.trim();
         if(inputFood.value == null || inputFood.value == undefined) return;
//    foodContainer.innerHTML += `<li class="food-item">${inputFood.value.toUpperCase()}</li>`;
const liEl = document.createElement("li");
const btn = document.createElement("button");
btn.className = "del-icon";
btn.innerHTML = `<i class="fa fa-remove"></i>`;
liEl.className = "food-item";
const textNode = document.createTextNode(trimmedVal);
liEl.append(textNode);
liEl.append(btn);
foodContainer.insertAdjacentElement("beforeend", liEl);
localStorage.setItem(localStorageKey, JSON.stringify([...JSON.parse(localStorage.getItem(localStorageKey) || "[]"), {foodItem: inputFood.value}]));
inputFood.value = "";
refreshUI();
//    createAlertViaDOM("✅ Food is Updated!");
};
inputBtn.addEventListener("click", save);
function del(e) 
{
        e.target.parentElement.parentElement.classList.toggle("onRemove");
        let inter = setInterval(()=>{
                const existingList = e.target.parentElement.parentElement;
                existingList.remove();                
                refreshUI();
               const fetchedFoodItems = [...JSON.parse(localStorage.getItem(localStorageKey))];
               fetchedFoodItems.forEach(item=>{
                if(item.foodItem == existingList.innerText)
                {
                        fetchedFoodItems.splice(fetchedFoodItems.indexOf(item), 1);
                };
               });
               localStorage.setItem(localStorageKey, JSON.stringify(fetchedFoodItems));
                clearInterval(inter);
        }, 510);
};         
foodContainer.addEventListener("click", (e)=>
        {
                if(e.target.className == "fa fa-remove")
                {
                        del(e);
                }
        });
 inputFood.addEventListener("keyup", (e)=>{
         if(e.key === "Enter") save();
        else if(e.key == "z" && e.ctrlKey) inputFood.value = "";
 });     
function singularOrPlural(){
        if(foodContainer.children.length > 1)
        {
                return "lists";
        }
        else if(foodContainer.children.length === 1)
        {
                return "list";
        }
}
function textColor()
{
        if(foodContainer.children.length === 1)
        {
                return "red";
        }
        else
        {
                return "black";
        }
};
 function refreshUI(){
        if(foodContainer.children.length > 0)
        {
                foodStatistics.style.opacity = 1;
                foodContainer.style.opacity = 1;
                nothingBanner.hidden = true;
                foodStatistics.innerHTML = `<span style="color:${textColor()};">You have ${foodContainer.children.length} ${singularOrPlural()} </span>`
        }
        else
        {
                nothingBanner.hidden = !true;
                foodStatistics.style.opacity = 0;
                foodContainer.style.opacity = 0;
        }
 };
};