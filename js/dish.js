document.addEventListener("DOMContentLoaded", function () {
    // Parse URL parameters to get the dish ID
    const urlParams = new URLSearchParams(window.location.search);
    const dishId = urlParams.get("id");

    if (!dishId) {
        alert("No dish selected!");
        window.location.href = "index.html"; // Redirect to home if no dish is selected
        return;
    }

    // Fetch dish data from JSON file 
    fetch("dishes.json")
        .then(response => response.json())
        .then(dishes => {
            const dish = dishes.find(d => d.id == dishId);

            if (!dish) {
                alert("Dish not found!");
                window.location.href = "index.html";
                return;
            }

            document.getElementById("dish-image").src = dish.image;
            document.getElementById("dish-image").alt = dish.name;
            document.getElementById("dish-title").textContent = dish.name;
            document.getElementById("dish-author").textContent = dish.author;
            document.getElementById("dish-description").textContent = dish.description;

            const ingredientsList = document.getElementById("dish-ingredients");
            ingredientsList.innerHTML = ""; // Clear existing items
            if (dish.ingredients.length > 1) {
                dish.ingredients.forEach(ingredient => {
                    const li = document.createElement("li");
                    li.textContent = ingredient;
                    ingredientsList.appendChild(li);
                });
            } else {
                document.getElementById("ingred-container").innerHTML = "";
            }


            // Populate preparation steps
            if (dish.preparation != "") {
                document.getElementById("dish-preparation").textContent = dish.preparation;
            } else {
                document.getElementById("prep-container").innerHTML = "";
            }

            const sensoryList = document.getElementById("dish-sensory");
            sensoryList.innerHTML = ""; // Clear existing items
            dish.sensory.forEach(sense => {
                const li = document.createElement("li");
                li.classList = "mb-3"
                li.textContent = sense;
                sensoryList.appendChild(li);
            });

            const finalThoughts = document.createElement("a");
            finalThoughts.innerHTML = `${dish.recommend}`;
            document.getElementById("dish-finale").append(finalThoughts);
        })
        .catch(error => console.error("Error loading dish data:", error));
});

const backHome = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const dishId = urlParams.get("id");
    fetch("dishes.json")
    .then(response => response.json())
    .then(dishes => {
        const dish = dishes.find(d => d.id == dishId);

        if (!dish) {
            alert("Dish not found!");
            window.location.href = "index.html";
            return;
        }

        if (dish.author == "Philippe Edralin") {
            console.log(dish.author);
            window.location.href = 'index.html#Philippines';
        } else if (dish.author == "Aliexandra Po") {
            console.log(dish.author);
            window.location.href = 'index.html#Singapore';
        } else if (dish.author == "Audrey Datario") {
            window.location.href = 'index.html#Vietnam';
        } else if (dish.author == "Sofia Co") {
            window.location.href = 'index.html#Thailand';
        } else if (dish.author == "Antonio Mendoza") {
            window.location.href = 'index.html#Malaysia';
        }
    })
    .catch(error => console.error("Error loading dish data:", error));
}
