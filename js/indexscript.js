const fetchMealsByType = (mealType) => {
  const authorData = {
    Philippines: [
      {by: "Philippe Edralin"}
    ],
    Singapore: [
      {by: "Aliexandra Po"}
    ],
    Vietnam: [
      {by: "Audrey Datario"}
    ],
    Thailand: [
      {by: "Sofia Co"}
    ],
    Malaysia: [
      {by: "Antonio Mendoza"}
    ],
  }

  let authorDiv = document.getElementById("author");
  let author = authorData[mealType][0].by;
  authorDiv.innerText = author;

  let foodType = document.getElementById("foodType");
  foodType.innerText = mealType + " Food Items";

  displayIntro(mealType);
  displayMeals(mealType);
};

const displayIntro = (mealType) => {
  const introContainer = document.getElementById("intro-container");

  introContainer.innerHTML = "";

  const introData = {
    Philippines: [
      {
        text: "Our homeland, the Philippines, is a vibrant archipelago where food is a way of life. Deeply rooted in history and shaped by centuries of trade, colonization, and cultural exchange, Filipino cuisine is a melting pot of Malay, Chinese, Spanish, and Indigenous Influences. What makes it truly stand out is its bold flavors, often brought to life by fragrant spices like black pepper, garlic, and chili. Filipino food is always an explosion of taste and tradition, and is my personal favorite.",
      },
      {
        text: "In this review, I will cover three of the country's most delicious and iconic dishes- all of which also happens to be my favorite appetizer, ulam, and dessert. These dishes will make you appreciate how Southeast Asian spices bring life to the food we love. Ready to take a flavorful adventure? Let’s dig in!",
      },
    ],
    Singapore: [
      {
        text: "Singapore is a cosmopolitan city-state where food is crucial to national identity and a unifying cultural thread. Singaporean cuisine is derived from several ethnic groups and has developed through centuries of political, economic, and social changes. It has numerous influences including Malay, Indonesian, Chinese, Indian, Peranakan and Western traditions and is usually distinguished by its bold and complex (dare I say crazy?) flavors. Some of their trademark ingredients often include fragrant spices, coconut milk, and aromatic herbs. The combination of sweet, savory, spicy, and tangy elements is also a signature characteristic that makes SIngaporean dishes unique and memorable.",
      },
      {
        text: "This food review will take you on a journey (literally) through some of my favorite Singaporean dishes, as I tried them at some of Singapore's famous restaurants during my trip last month. If you feel like you want to recreate these dishes, don’t worry; I’ll be linking a cooking tutorial below as well!",
      }
    ],
    Vietnam: [
      {
        text: "Vietnam, one of the countries located in the Spice Islands, is celebrated for its rich culinary heritage, deeply rooted in its history and diverse geography. Located on the eastern edge of the Indochinese Peninsula, Vietnam's landscape ranges from the fertile plains of the Mekong Delta to the rugged mountains bordering China.",
      },
      {
        text: "Like every other Southeast Asian nation, Vietnamese cuisine emerges from centuries of cultural exchanges, where tradition meets innovation, and every dish tells a story of resilience and adaptation. China’s over a thousand year rule introduced techniques such as stir-frying, noodle-making, and the use of soy sauce and dumplings (Pritzker Military Museum & Library, 2021, 1). Combined with the country’s tropical climate, which supports an abundance of aromatic herbs and spices like lemongrass, mint, coriander, chili peppers, and cinnamon, these influences contribute to the delicate balance of sweet, sour, salty, and umami flavors that define Vietnamese dishes. Whether it's the refreshing zest of fresh herbs or the comforting warmth of slow-simmered broths, every bite tells a story of nature’s bounty and centuries-old traditions (Vietnam Coracle, 2022, 2).",
      },
      {
        text: "For someone living in the Philippines, Vietnamese food is both a familiar comfort and an exciting culinary adventure. Pho Hoa has made its mark as a staple Vietnamese go-to spot in the country, offering an authentic taste of Vietnam’s vibrant cuisine. Whether you’re craving a light, fresh appetizer, a hearty, soul-warming bowl of pho, or a deliciously indulgent dessert, Pho Hoa will have something to offer.",
      },
      {
        text: "This food review will take you on a journey through a three-course meal from Pho Hoa with dishes that captures the soul of Vietnamese cuisine: the Pork and Shrimp Guo Cuon with Peanut Butter Sauce, the Pho Do Bien, and the Chuối Chiên with Vanilla Ice Cream. Get ready to explore these vibrant flavors and discover why Vietnamese cuisine continues to captivate food lovers around the world. But beware—these dishes pack bold flavors that may not suit every palate!"  
      },
    ],
    Thailand: [
      {
        text: "Thai cuisine highlights the use of elements and flavors, particularly that of aromatic and spicy, in creating a tasty and cohesive dish. Staples among the different regions of Thailand vary and tend to take inspiration from its respective neighboring countries. In my trip to Bangkok, being found in the center of Thailand, I was able to experience the various aspects of how Thai cuisine was able to set itself apart.",
      },
      {
        text: "After a tiring morning of roaming through the bustling streets of the Chatuchak Weekend Market, I took a break at the Mixt Food Court, where I found myself surrounded by endless options to try the local food.",
      },
    ],
    Malaysia: [
      {
        text: "Malaysian cuisine is a fusion of influences from Malay, Indian, and Chinese cultures, each contributing to its rich and diverse flavors. Malay food, in particular, is known for its sweet, fragrant, and spicy dishes, often enjoyed by hand. Rice, a staple in Malay meals, is commonly paired with vegetables or meat such as beef, lamb skewers, and chicken.",
      },
      {
        text: "As I explored Quaipo, I found the Arab Asian Resto Cafe, which served Malaysian cuisine and halal food."
      }
    ]
  };

  const intros = introData[mealType] || [];

  intros.forEach((intro) => {
    const introHead = document.createElement("h2");
    introHead.classList =
      "card-title block text-justify mb-7";

      introHead.innerHTML = `
          ${intro.text}
      `;
    introContainer.appendChild(introHead);
  });

}

const displayMeals = (mealType) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  const mealData = {
    Philippines: [
      {
        name: "Tokwa't Baboy",
        image: "/GERPHIS-Assignment2/resources/philippines/tokwatb.png",
        description: "Crispy tofu and tender pork with a tangy soy-vinegar sauce.",
        source: "dish.html?id=1",
      },
      {
        name: "Pork Adobo",
        image: "../resources/philippines/adobo.png",
        description: "Braised pork in soy sauce, vinegar, garlic, and spices.",
        source: "dish.html?id=2",
      },
      {
        name: "Bibingka",
        image: "../resources/philippines/bibingka.png",
        description: "Soft rice cake with coconut milk, cheese, and salted egg.",
        source: "dish.html?id=3",
      },
    ],
    Singapore: [
      {
        name: "Hainanese Chicken Rice",
        image: "../resources/singapore/hainanese.png",
        description: "Hainanese chicken consists of rice cooked with chicken fat, served with steamed chicken, accompanied by chili sauce and cucumbers.",
        source: "dish.html?id=4",
      },
      {
        name: "Laksa",
        image: "../resources/singapore/laksa.png",
        description: "Nyonya Laksa is composed of rice noodles served in a coconut prawn broth.",
        source: "dish.html?id=5",
      },
      {
        name: "Stir Fry Char Siew Noodles",
        image: "../resources/singapore/sfcsnoodles.png",
        description: "Singaporean cuisine is all about noodles, rice, and seafood, along with all kinds of meat.",
        source: "dish.html?id=6",
      },
    ],
    Vietnam: [
      {
        name: "Pork and Shrimp Gỏi Cuốn",
        image: "../resources/vietnam/pnsGuoiCuon.png",
        description: "Short description of the dish...",
        source: "dish.html?id=7",
      },
      {
        name: "Phở Đồ Biển (Seafood Pho)",
        image: "../resources/vietnam/PhoDoBien.png",
        description: "Short description of the dish...",
        source: "dish.html?id=8",
      },
      {
        name: "Chuối Chiên with Vanilla Ice Cream",
        image: "../resources/vietnam/ChuoiChien.png",
        description: "Short description of the dish...",
        source: "dish.html?id=9",
      },
    ],
    Thailand: [
      {
        name: "Som Tam",
        image: "../resources/thailand/somtam.png",
        description: "Also known as Papaya salad, although very simple is a very refreshing dish which brings a little heat.",
        source: "dish.html?id=10",
      },
      {
        name: "Kaeng Khiao Wan",
        image: "../resources/thailand/kkwan.png",
        description: "A curry which makes use of fresh green chillies, basil and the peel of makrut limes, giving it its distinctive green colour.",
        source: "dish.html?id=11",
      },
      {
        name: "Khao Niao Mamuang",
        image: "../resources/thailand/knmamuang.png",
        description: "Mango sticky rice in english, glutinous rice cooked in coconut milk topped with toasted sesame seeds",
        source: "dish.html?id=12",
      },
    ],
    Malaysia: [
      {
        name: "Roti Canai",
        image: "../resources/malaysia/roticanai.png",
        description: "Known as a flatbread dish in Malaysia, it is commonly accompanied by curry or condensed milk for dipping.",
        source: "dish.html?id=13",
      },
      {
        name: "Nasi Goreng",
        image: "../resources/malaysia/nasigoreng.png",
        description: "A type of fried rice dish wrapped in a thin layer of egg omelet.",
        source: "dish.html?id=14",
      },
    ],
  };

  const meals = mealData[mealType] || [];

  meals.forEach((meal) => {
    const mealCard = document.createElement("div");
    mealCard.classList =
      "card card-compact bg-base-100 w-auto shadow-xl rounded-none";

    mealCard.innerHTML = `
        <figure>
          <img class="h-48 w-96 object-cover"
               style="clip-path: polygon(0% 0%, 100% 0, 100% 85%, 51% 100%, 0 85%);" 
               src="${meal.image}" 
               alt="Image of ${meal.name}" />
        </figure>
        <div class="card-body">
          <h2 class="card-title block text-center -mt-3">${meal.name}</h2>
          <p title="${meal.description}">${meal.description}</p>
          <div class="divider my-0"></div>
          <div class="mx-auto">
            <a href="${meal.source}"
                    class="btn btn-outline text-orange-600 h-10 min-h-10">
              VIEW DETAILS
            </a>
          </div>
        </div>
      `;
    cardContainer.appendChild(mealCard);
  });
};
fetchMealsByType('Philippines');

