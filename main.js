let titleOfRecipe = document.getElementById("name"); 
let mealPicture = document.getElementById("foto");
let ingredientsPart = document.getElementById("ingredients");
let instructionsPart = document.getElementById("instructions");
let youtube = document.getElementById("youtube");

function IdArrayAndContent(){
 let arr = [titleOfRecipe, mealPicture, ingredientsPart, instructionsPart, youtube];

  for (let i = 0; i < arr.length; i++) {
    arr[i].innerHTML = "";  
  }
}

function getAxios() {
  axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => {
      let recipe = response.data.meals[0];
      videoLink(recipe)
      instructionsAndTitle(recipe)
      displayImage(recipe)
      displayIngredients(recipe)
    })
}

function videoLink(recipe){
     
  if (recipe.strYoutube) {
    anchor.innerHTML = "Watch Tutorial";
  } else {
    anchor.innerHTML = "Cannot play, skip to the rest";
    }
  }

function instructionsAndTitle(recipe){
  let meal = recipe.strMeal;
  instructionsPart.innerHTML = recipe.strInstructions;
  titleOfRecipe.innerHTML = meal;
}

function displayImage(recipe){
  let mealPic = recipe.strMealThumb;
  let img = document.createElement("img");
  img.setAttribute("src", mealPic);
  mealPicture.append(img);
}

function displayIngredients(recipe){
  let allIngredients = [];

  for (let i = 1; i < 20; i++) {
    let ingredient = recipe[`strMeasure${i}`] + " "  + recipe[`strIngredient${i}`];
                  
    if (ingredient.length > 2) {
      allIngredients.push(ingredient);
    }
  }

  for (let i = 0; i < allIngredients.length; i++) {
    let item = document.createElement("p");
    let list = document.createElement("p");
    ingredientsPart.append(list);
    item.innerHTML = allIngredients[i];
    list.append(item);
  }
}

function videoLink(recipe){
  let anchor = document.createElement("a");
  let youtubeLink = recipe.strYoutube;
  youtube.append(anchor);
  anchor.setAttribute("href", youtubeLink, "target", "_blank");

  if (recipe.strYoutube) {
    anchor.innerHTML = "Watch Tutorial";
  } else {
    anchor.innerHTML = "Cannot play, skip to the rest";
  }
}

let newRecipe = document.getElementById('newRecipe');
newRecipe.addEventListener("click", newMeal)

function newMeal() {
  IdArrayAndContent();
  getAxios();
};

