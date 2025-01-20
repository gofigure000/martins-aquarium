import { database } from "./aquariumData.js";

export const locationList = () => {
  let locationHTML = "";

  for (const location of database.location) {
    locationHTML += `
           <article class="location">
               <class="location__details">
                   <h1 class="location__topic">${location.name} - ${location.country}</h1>
                   <li class="location__text">${location.description}</li>
               </ul>
           </article>
       `;
  }

  return locationHTML;
};
