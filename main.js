let dogFoodOutput = document.getElementById("dogFoodOutput");
let catFoodOutput = document.getElementById("catFoodOutput");

function showDogFood(dogFoodArr){
	dogFoodOutput.innerHTML = `<h1>Dog Food Brands</h1>`
	dogFoodArr.forEach(function(brand){
		dogFoodOutput.innerHTML += `<h2>${brand.name}</h2>`;
		brand.types.forEach(function(type){
			dogFoodOutput.innerHTML += `<h3>${type.type}</h3>`;
			type.volumes.forEach(function(volume){
				dogFoodOutput.innerHTML += `<p>${volume.name} $${volume.price}</p>`;
			})
		})
	})
}

function showCatFood(catFoodArr){
	catFoodOutput.innerHTML = `<h1>Cat Food Brands</h1>`
	catFoodArr.forEach(function(brand){
		catFoodOutput.innerHTML += `<h2>${brand.name}</h2>`;
		brand.breeds.forEach(function(kind){
			catFoodOutput.innerHTML += `${kind} `;
		})
	
		brand.types.forEach(function(type){
			catFoodOutput.innerHTML += `<h3>${type.type}</h3>`;
			type.volumes.forEach(function(volume){
				catFoodOutput.innerHTML += `<p>${volume.name} $${volume.price}</p>`;
			})
		})
	})	
}

foodObj.loadDogFood(showDogFood);
foodObj.loadCatFood(showCatFood);