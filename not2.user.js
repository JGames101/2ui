// ==UserScript==
// @name         I can't beleive it's not 2.0
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Making 3.0 look like 2.0
// @author       infinitytec
// @match        https://llk.github.io/scratch-gui/*
// @grant        GM_addStyle
// @updateURL    https://github.com/infinitytec/I-Cant-Beleive-Its-Not-2/raw/master/not2.user.js
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
    GM_addStyle(".blocklyText {font-size: 10pt;}");
    GM_addStyle(".gui_stage-menu-wrapper_W5Ler {border-radius: 10px 10px 0px 0px;border: 1px solid #D0D1D2;margin-left: 0.5rem;margin-right: 0.5rem;margin-top: 5px;}");
    GM_addStyle(".stage-selector_header_2GVr1, .gui_stage-menu-wrapper_W5Ler, .sprite-info_sprite-info_3EyZh, .gui_tab_27Unf.gui_is-selected_sHAiu {border: 1px solid #D0D1D2;background: #fefefe; /* Old browsers */background: -moz-linear-gradient(top, #fefefe 0%, #e7e9e9 100%); /* FF3.6-15 */background: -webkit-linear-gradient(top, #fefefe 0%,#e7e9e9 100%); /* Chrome10-25,Safari5.1-6 */background: linear-gradient(to bottom, #fefefe 0%,#e7e9e9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefefe', endColorstr='#e7e9e9',GradientType=0 ); /* IE6-9 */}");
    GM_addStyle(".stage_stage-wrapper_eRRuk {border-radius: 0px; border: 1px solid #D0D1D2;}");
    GM_addStyle(".target-pane_stage-selector-wrapper_qekSW {position: relative;right: 85%;}");
    GM_addStyle(".sprite-selector_sprite-selector_2KgCX {position: relative;left: 16.5%;}");
    GM_addStyle(".sprite-selector_scroll-wrapper_3NNnc, .stage-selector_stage-selector_3oWOr, .blocklyFlyoutBackground, .blocklyToolboxDiv, .scratchCategoryMenu{background: #E6E8E8; fill: #E6E8E8; background-color: #E6E8E8;}");
    GM_addStyle(".gui_tab_27Unf {background-color: #F2F2F2;border: 1px solid #D0D1D2;");
    GM_addStyle(".controls_controls-container_2xinB {position: relative; left: 87%;");
    GM_addStyle(" .gui_tab_27Unf.gui_is-selected_sHAiu { color: #5C5D5F;}");
    GM_addStyle(".menu-bar_menu-bar_JcuHF {height: 2rem; background-color: #9C9EA2;}");
    GM_addStyle(".menu-bar_menu-item_2lssx {padding: 0 .5rem;line-height: 2rem;}");
    GM_addStyle(".menu-bar_scratch-logo_2uReV {height: 2rem; padding: 0.3rem 0;}");
    GM_addStyle(".language-selector_language-select_8Vfnm {height: 1.5rem; background: rgba(255, 255, 255, 0.1); border: 1px solid #9C9EA2; color: white;}");
    GM_addStyle(".icon-button_container_278u5 {color: #9C9EA2;}");
    GM_addStyle(".icon-button_container_278u5 {filter: saturate(0%);}");
    GM_addStyle(".icon-button_container_278u5:hover {color: #007BE7 !important; -webkit-transform: scale(1.0);-ms-transform: scale(1.0);transform: scale(1.0);filter: saturate(100%);}");
    GM_addStyle(".monitor_monitor_11Vhm {background: #B6B6B6; border: 1.5px solid #9C9EA2;} .monitor_value_3Yexa { box-shadow: inset .5px .5px 2px #4d4d4d; border: 1px solid white;}");
})();
