// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-3-04/sw.js", {
    scope: "/ICS20-Unit-3-04/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  // input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)

  // process
  let celsius = ((fahrenheit - 32) * 5) / 9
  // output
  document.getElementById("celsius").innerHTML =
    "Celsius = " + celsius.toFixed(2) + "°C"
}
