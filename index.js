const food_dom_container = document.querySelector(".food-dom-container");

/* Buttons-target */
let indian = document.querySelector('#indian');
let canadian = document.querySelector('#canadian');
let american = document.querySelector('#american');
let thai = document.querySelector('#thai');
let british = document.querySelector('#british');
let russian = document.querySelector('#russian');

let recipeDB;

const fetchApiData = async (area) => {
  let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}
`);

  const data = await api.json();
  recipeDB = data.meals;
  showData(recipeDB);
};

const searchItem = async () => {
  let searchInput = document.querySelector("#search");
  searchInput.addEventListener("keydown", async (e) => {
    if (e.key == "Enter") {
      let inputVal = searchInput.value;
      console.log(inputVal);

      let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`);

      const data = await api.json();
      recipeDB = data.meals;
      showData(recipeDB);
    }
  });
};
searchItem();

let showData = (recipeDB) => {
    food_dom_container.innerHTML = recipeDB.map((item)=> 
     `
        <div style="text-align: center">
         <div>
           <img src=${item.strMealThumb} style="width:220px; border-radius:10px; border: 2px solid white"/>
           <h6 style="margin-top: 10px;">${item.strMeal}</h6>
         </div>
        </div>
     `
    ).join(""); 
};

/* Button-Events */
indian.addEventListener('click', ()=> {
    fetchApiData('indian');    
});
canadian.addEventListener('click', ()=> {
    fetchApiData('canadian');    
});
american.addEventListener('click', ()=> {
    fetchApiData('american');    
});
thai.addEventListener('click', ()=> {
    fetchApiData('thai');    
});
british.addEventListener('click', ()=> {
    fetchApiData('british');    
});
russian.addEventListener('click', ()=> {
    fetchApiData('russian');    
});



fetchApiData('indian');