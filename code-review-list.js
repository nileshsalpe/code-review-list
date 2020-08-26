// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://git.wdf.sap.corp/*
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('html').append(`<div>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.sidepanel  {
  width: 0;
  position: fixed;
  z-index: 1;
  height: 950px;
  top: 0;
  right: 0;
  background-color: #f5f5f5;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.myButton {
  position: absolute;
  z-index: 1;
  top: 70px;
  right: 0;
}

.sidepanel label {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 15px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.checkboxgroup{
    width: 20em;
    overflow: auto;
}

.checkboxgroup p{
    font-size: 15px;
    width: 15em;
    text-align: left;
    color:#111;
}

.checkboxgroup label{
    width: 12em;
    float: right;
    color: #8b4513
}

.sidepanel .closebtn {
  left: 10px;
  font-size: 15px;
  color: red;
}


.openbtn {
  font-size: 15px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color:#444;
}
</style>
<div>

<div id="mySidepanel" class="sidepanel">
<div >
  <a href="javascript:void(0)" class="closebtn"  onclick="closeNav()">X</a>
</div>
<fieldset class="checkboxgroup">
    <p>Code formatting</p>
    <label><input type="checkbox"> No Whitespaces </label>
    <label><input type="checkbox"> Naming </label>
    <label><input type="checkbox"> Wrap@120</label>
    <label><input type="checkbox"> Docs </label>
</fieldset>
<fieldset class="checkboxgroup">
    <p>Code Architecture</p>
    <label><input type="checkbox"> SOLID </label>
    <label><input type="checkbox"> DRY </label>
    <label><input type="checkbox"> Resuable</label>
    <label><input type="checkbox"> Composition</label>
</fieldset>
<fieldset class="checkboxgroup">
    <p>Code  Coding best practices</p>
    <label><input type="checkbox"> Interface</label>
    <label><input type="checkbox"> Code Complexity</label>
    <label><input type="checkbox"> Too many imports</label>
    <label><input type="checkbox"> Args Validation</label>
</fieldset>
<fieldset class="checkboxgroup">
    <p>Non Functional requirements</p>
    <label><input type="checkbox"> Unit Tests</label>
    <label><input type="checkbox"> All Cases</label>
    <label><input type="checkbox"> Externalize Config</label>
    <label><input type="checkbox"> Readbility</label>
</fieldset>
<fieldset class="checkboxgroup">
    <p>Non Functional requirements</p>
    <label><input type="checkbox"> Unit Tests</label>
    <label><input type="checkbox"> All Cases</label>
    <label><input type="checkbox"> Externalize Config</label>
    <label><input type="checkbox"> Readbility</label>
</fieldset>
<fieldset class="checkboxgroup">
    <p>Non Functional requirements</p>
    <label><input type="checkbox"> Unit Tests</label>
    <label><input type="checkbox"> All Cases</label>
    <label><input type="checkbox"> Externalize Config</label>
    <label><input type="checkbox"> Readbility</label>
</fieldset>
<fieldset class="checkboxgroup">
    <p>Security</p>
    <label><input type="checkbox"> Red Data</label>
    <label><input type="checkbox">  Encryption</label>
</fieldset>
</div>

<div id="myButton" class="myButton">
<button class="openbtn" onclick="openNav()">☰ CR List</button>
<div>
<script>
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
  document.getElementById("myButton").style.width = "0";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("myButton").style.width = "250px";
}
</script>

</div>
</div>
`);
    // Your code here...
})();
