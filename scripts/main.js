import { fishList } from "./fishList.js";
import { tipList } from "./tipList.js";
import { locationList } from "./locationList.js";
import { renderFishToDOM } from "./render.js";
import { renderTipsToDOM } from "./render.js";
import { renderLocationToDOM } from "./render.js";

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
