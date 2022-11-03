  let titleOfRecipe = document.getElementById("name"); 
  let mealPicture = document.getElementById("foto");
  let ingredientsPart = document.getElementById("ingredients");
  let instructionsPart = document.getElementById("instructions");
  let youtube = document.getElementById("youtube");

function IDArrayAndContent(){
 
 let arr = [titleOfRecipe, mealPicture, ingredientsPart, instructionsPart, youtube];

  for (let i = 0; i < arr.length; i++) {
    arr[i].innerHTML = "";  
  }
}


function getAxios() {
  axios.get("https://www.themealdb.com/api/json/v1/1/random.php")

    .then(response => {
      let recipe = response.data.meals[0];
      let meal = recipe.strMeal;
      let mealPic = recipe.strMealThumb;
      let youtubeLink = recipe.strYoutube;
      let allIngredients = [];
  
     ;
      let anchor = document.createElement("a");
      let img = document.createElement("img");
     
    
      instructionsPart.innerHTML = recipe.strInstructions;
      youtube.append(anchor);
      titleOfRecipe.innerHTML = meal;
      img.setAttribute("src", mealPic);
      mealPicture.append(img);

      anchor.setAttribute("href", youtubeLink, "target", "_blank");

      if (recipe.strYoutube) {
        anchor.innerHTML = "Watch Tutorial";
      } else {
        anchor.innerHTML = "Cannot play, skip to the rest";
      }
      
      for (let i = 1; i < 20; i++) {
          let ingredient = recipe[`strMeasure${i}`] + " "  + recipe[`strIngredient${i}`];
                  
            if (ingredient.length > 2) {
                 allIngredients.push(ingredient);
             }
      };


      for (let i = 0; i < allIngredients.length; i++) {
        let item = document.createElement("p");
        let list = document.createElement("p");
        ingredientsPart.append(list);

        item.innerHTML = allIngredients[i];
        list.append(item);
      }
    })
}

let newRecipe = document.getElementById('newRecipe');
newRecipe.addEventListener("click", newMeal)


function newMeal() {
  IDArrayAndContent();
  getAxios();
};