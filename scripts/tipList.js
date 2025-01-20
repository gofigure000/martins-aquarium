import { database } from "./aquariumData.js";

export const tipList = () => {
  let tipHTML = "";

  for (const tip of database.tips) {
    tipHTML += `
           <article class="tips">
               <class="tip__details">
                   <h1 class="tip__topic">${tip.topic}</h1>
                   <li class="tip__text">${tip.text}</li>
               </ul>
           </article>
       `;
  }

  return tipHTML;
};
