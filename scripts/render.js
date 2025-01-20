export const renderFishToDOM = (fishHTML) => {
  const fishList = document.getElementById("fishList");

  if (fishList) {
    fishList.innerHTML = fishHTML;
  } else {
    console.error('Could not find element with id "fishList"');
  }
};

export const renderTipsToDOM = (tipHTML) => {
  const tipList = document.getElementById("tipList");

  if (tipList) {
    tipList.innerHTML = tipHTML;
  } else {
    console.error('Could not find element with id "tipList"');
  }
};

export const renderLocationToDOM = (locationHTML) => {
  const locationList = document.getElementById("locationList");

  if (locationList) {
    locationList.innerHTML = locationHTML;
  } else {
    console.error('Could not find element with id "locationList"');
  }
};

export const renderHolyFishToDOM = (holyFishHTML) => {
  const holyFishList = document.getElementById("holyFishList");

  if (holyFishList) {
    holyFishList.innerHTML = holyFishHTML;
  } else {
    console.error('Could not find element with id "holyFishList"');
  }
};

export const renderSoldierFishToDOM = (soldierFishHTML) => {
  const soldierFishList = document.getElementById("soldierFishList");

  if (soldierFishList) {
    soldierFishList.innerHTML = soldierFishHTML;
  } else {
    console.error('Could not find element with id "soldierFishList"');
  }
};

export const renderRegularFishToDOM = (regularFishHTML) => {
  const regularFishList = document.getElementById("regularFishList");

  if (regularFishList) {
    regularFishList.innerHTML = regularFishHTML;
  } else {
    console.error('Could not find element with id "regularFishList"');
  }
};
