import { database } from "./aquariumData.js";

export const fishList = () => {
  let fishHTML = "";

  for (const fish of database.fish) {
    fishHTML += `
           <article class="fish">
               <img src="${fish.image}" alt="${fish.name}" class="fish__name">
               <div class="fish__details">
                   <h2 class="fish__name">${fish.name}</h2>
                   <h2 class="fish__species">${fish.species}</h2>
                   <h2 class="fish__length">${fish.length}</h2>
                   <h2 class="fish__location">${fish.location}</h2>
                   <h2 class="fish__diet">${fish.diet}</h2>
               </div>
           </article>
       `;
  }

  return fishHTML;
};
