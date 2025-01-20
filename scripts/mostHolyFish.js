import { database } from "./aquariumData.js";

const mostHolyFish = [];

for (const holyFish of database.fish) {
  if (holyFish.length % 3 === 0) {
    mostHolyFish.push(holyFish);
  }
}

export const mostHolyFishTable = () => {
  let holyFishHTML = "";

  for (const holyFish of mostHolyFish) {
    holyFishHTML += `
           <article class="fish">
               <img src="${holyFish.image}" alt="${holyFish.name}" class="fish__name">
               <div class="fish__details">
                   <h2 class="fish__name">${holyFish.name}</h2>
                   <h2 class="fish__species">${holyFish.species}</h2>
                   <h2 class="fish__length">${holyFish.length}</h2>
                   <h2 class="fish__location">${holyFish.location}</h2>
                   <h2 class="fish__diet">${holyFish.diet}</h2>
               </div>
           </article>
       `;
  }

  return holyFishHTML;
};
