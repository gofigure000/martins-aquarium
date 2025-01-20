import { database } from "./aquariumData.js";

const regularFish = [];

for (const regular of database.fish) {
  if (regular.length % 5 !== 0 && regular.length % 3 !== 0) {
    regularFish.push(regular);
  }
}

export const regularFishTable = () => {
  let regularFishHTML = "";

  for (const regular of regularFish) {
    regularFishHTML += `
           <article class="fish">
               <img src="${regular.image}" alt="${regular.name}" class="fish__name">
               <div class="fish__details">
                   <h2 class="fish__name">${regular.name}</h2>
                   <h2 class="fish__species">${regular.species}</h2>
                   <h2 class="fish__length">${regular.length}</h2>
                   <h2 class="fish__location">${regular.location}</h2>
                   <h2 class="fish__diet">${regular.diet}</h2>
               </div>
           </article>
       `;
  }

  return regularFishHTML;
};
