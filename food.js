var Products = (function(oldProducts) {
	let dogFoodArr = [];
	let catFoodArr = [];

	foodObj = Object.create(null);

	foodObj.loadDogFood = function (callback){
		let myRequest = new XMLHttpRequest(); 
		myRequest.addEventListener("load", function(){
			dogFoodArr = JSON.parse(event.target.responseText).dog_brands;
			callback(dogFoodArr);
		})
		myRequest.open("GET", "dogfood.json");
		myRequest.send();
	},

	foodObj.loadCatFood = function (callback){
		let myRequest = new XMLHttpRequest(); 
		myRequest.addEventListener("load", function(){
			catFoodArr = JSON.parse(event.target.responseText).cat_brands;
			callback(catFoodArr);
		})
		myRequest.open("GET", "catfood.json");
		myRequest.send();
	}	

	return oldProducts;

}(Products || {}));