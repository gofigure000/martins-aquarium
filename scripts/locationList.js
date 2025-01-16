import { database } from "./aquariumData.js";

export const locationList = () => {
  let locationHTML = "";

  for (const location of database.location) {
    locationHTML += `
           <article class="location">
               <ul class="location__details">
                   <section class="location__topic">${location.name}</section>
                   <section class="location__text">${location.country}</section>
                   <section class="location__text">${location.description}</section>
               </ul>
           </article>
       `;
  }

  return locationHTML;
};
