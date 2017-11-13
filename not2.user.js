// ==UserScript==
// @name         2UI For Scratch 3
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Positioning like Scratch 2
// @author       infinitytec and JGames101
// @match        https://llk.github.io/scratch-gui/*
// @grant        GM_addStyle
// @updateURL    https://github.com/JGames101/2ui/raw/master/not2.user.js
// ==/UserScript==

(function() {
    'use strict';
    //From NickyNouse
    // inject 2.0 stylesheet
    var style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', 'https://mrjacobbloom.github.io/scratch-themes-resources/2/style.css');
    document.head.appendChild(style);
    // import @comp09's filters from tjvr/scratchblocks
    fetch('https://mrjacobbloom.github.io/scratch-themes-resources/2/filters.svg').then(function(response) {
        return response.text();
    }).then(function(response) {
        var doc = new DOMParser().parseFromString(response, 'image/svg+xml');
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.appendChild(document.importNode(doc.documentElement.firstElementChild, true));
        document.body.appendChild(svg);
    });
    //Reposition everything
    GM_addStyle("html {overflow-y: hidden; min-width: 1240px;}");
    GM_addStyle(".gui_body-wrapper_-N0sA {height: calc(100% - 2rem);}");
    GM_addStyle(".gui_flex-wrapper_uXHkj{}");
    GM_addStyle(".gui_editor-wrapper_2DYcj {position: relative; width: 60%; left: 39%;}");
    GM_addStyle(".gui_stage-and-target-wrapper_69KBf {position: relative; width: 40%; right: 61%;}");
    GM_addStyle(".target-pane_stage-selector-wrapper_qekSW {position: relative;right: 85%;}");
    GM_addStyle(".sprite-selector_sprite-selector_2KgCX {position: relative;left: 16.5%;}");
    GM_addStyle(".controls_controls-container_2xinB {position: relative; left: 87%;");
})();
