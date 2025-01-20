import { fishList } from "./fishList.js";
import { tipList } from "./tipList.js";
import { mostHolyFishTable } from "./mostHolyFish.js";
import { soldierFishTable } from "./soldierFish.js";
import { regularFishTable } from "./regularFish.js";
import { locationList } from "./locationList.js";
import { renderFishToDOM } from "./render.js";
import { renderTipsToDOM } from "./render.js";
import { renderLocationToDOM } from "./render.js";
import { renderHolyFishToDOM } from "./render.js";
import { renderSoldierFishToDOM } from "./render.js";
import { renderRegularFishToDOM } from "./render.js";

// Generate the fish list
const fishHTML = fishList();
renderFishToDOM(fishHTML);

// Generate the care tips
const tipHTML = tipList();
renderTipsToDOM(tipHTML);

// Generate the location list
const locationHTML = locationList();
renderLocationToDOM(locationHTML);

// Render each HTML string to the correct DOM element

// Generate the holy fish list
const holyFishHTML = mostHolyFishTable();
renderHolyFishToDOM(holyFishHTML);

// Generate the soldier fish list
const soldierFishHTML = soldierFishTable();
renderSoldierFishToDOM(soldierFishHTML);

// Generate the regular fish list
const regularFishHTML = regularFishTable();
renderRegularFishToDOM(regularFishHTML);
