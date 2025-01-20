import { database } from "./aquariumData.js";

const soldierFish = [];

for (const soldier of database.fish) {
  if (soldier.length % 5 === 0 && soldier.length % 3 !== 0) {
    soldierFish.push(soldier);
  }
}

export const soldierFishTable = () => {
  let soldierFishHTML = "";

  for (const soldier of soldierFish) {
    soldierFishHTML += `
           <article class="fish">
               <img src="${soldier.image}" alt="${soldier.name}" class="fish__name">
               <div class="fish__details">
                   <h2 class="fish__name">${soldier.name}</h2>
                   <h2 class="fish__species">${soldier.species}</h2>
                   <h2 class="fish__length">${soldier.length}</h2>
                   <h2 class="fish__location">${soldier.location}</h2>
                   <h2 class="fish__diet">${soldier.diet}</h2>
               </div>
           </article>
       `;
  }

  return soldierFishHTML;
};
