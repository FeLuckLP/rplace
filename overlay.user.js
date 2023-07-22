// ==UserScript==
// @name         Gronkh + Bonjwa + r/placeDE Template
// @namespace    http://tampermonkey.net/
// @version      11.1
// @description  try to take over the canvas! Combination of Gronkh, Bonjwa and r/placeDE template
// @author       Chris-GW, nama17, Kloroller_DE, vertigo, Sockenschuh
// @match        https://garlic-bread.reddit.com/*
// @icon         https://icons.duckduckgo.com/ip3/www.gronkh.tv.ico
// @updateURL    https://github.com/FeLuckLP/rplace/raw/main/overlay.user.js
// @downloadURL  https://github.com/FeLuckLP/rplace/raw/main/overlay.user.js
// ==/UserScript==

addOverlayImage("https://raw.githubusercontent.com/FeLuckLP/rplace/main/overlay.png")
addOverlayImage("https://raw.githubusercontent.com/rplacebonjwa/rplace/main/overlay.png")
addOverlayImage("https://place.army/overlay_target.png")

function addOverlayImage(url) {
  var overlayImage = null;
  if (window.top !== window.self) {
    window.addEventListener('load', () => {
      const canvasContainer = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("div.layout").querySelector("garlic-bread-canvas").shadowRoot.querySelector("div.container");
      overlayImage = document.createElement("img");
      overlayImage.src = url + "?" + Date.now()
      overlayImage.style = `position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1500px;pointerEvents: 'none';`;
      canvasContainer.appendChild(overlayImage);
    }, false);
  }

  setInterval(function () {
    overlayImage.src = url + "?" + Date.now()
  }, 30000);
}

