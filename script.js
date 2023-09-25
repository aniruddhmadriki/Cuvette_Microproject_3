// import JSON file
const foodData = require('./food.json');

// 1. List all items
function listAllItems(foodList){
    return foodList.map(items => items.foodname);
}
console.log("List of all food items: ", listAllItems(foodData));

// 2. List all foods with category 'Vegetable'
function listAllvegetable(foodList){
    return foodList.filter(item => item.category === 'Vegetable').map(item => item.foodname);
}
console.log("All food items of the type 'vegetable' are: ", listAllvegetable(foodData));

// 3. List all foods with the category 'Fruit'
function listAllFruit(foodList){
    return foodList.filter(item => item.category === 'Fruit').map(item => item.foodname);
}
console.log("All food items of the type 'Fruit' are: ", listAllFruit(foodData));

//4. List all foods with the category 'Protein'
function listAllProtein(foodList){
    return foodList.filter(item => item.category === 'Protein').map(item => item.foodname);
}
console.log("All food items of the type 'Protein' are: ", listAllProtein(foodData));

// 5. List all foods with the category 'Nuts'
function listAllNuts(foodList){
    return foodList.filter(item => item.category === 'Nuts').map(item => item.foodname);
}
console.log("All food items of the type 'Nuts' are: ", listAllNuts(foodData));

// 6. List all foods with the category 'Grain'
function listAllGrain(foodList){
    return foodList.filter(item => item.category === 'Grain').map(item => item.foodname);
}
console.log("All food items of the type 'Grain' are: ", listAllGrain(foodData));

// 7. List all foods with the category 'Dairy'
function listAllDairy(foodList){
    return foodList.filter(item => item.category === 'Dairy').map(item => item.foodname);
}
console.log("All food items of the type 'Dairy' are: ", listAllDairy(foodData));

// 8. List all food items with calorie >100
function calorieAboveHundred(foodList){
    return foodList.filter(item => item.calorie >100).map(item => item.foodname);
}
console.log("All food items with calories greater then 100 are: ", calorieAboveHundred(foodData));

// 9. List all food items with calorie <100
function calorieBelowHundred(foodList){
    return foodList.filter(item => item.calorie <100).map(item => item.foodname);
}
console.log("All food items with calories lower then 100 are: ", calorieBelowHundred(foodData));

// 10. List all the food items in descending order of their protein content 
function sortByProteinDesc(foodList){
    return foodList.slice().sort((x,y) => y.proteins - x.proteins).map(item => item.foodname);
}
console.log("List of food items in descending order of their protein content is: ", sortByProteinDesc(foodData));

// 11. List all food items in the ascending order of their cab content
function sortByCabAsc(foodList){
    return foodList.slice().sort((x,y)=> x.cab - y.cab).map(item => item.foodname);
}
console.log("List of all food items in the ascending order of their cab content is: ", sortByCabAsc(foodData));