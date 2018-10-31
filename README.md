# Feed Reader Testing Project

This project includes a web-based application that reads RSS feeds and a series of Jasmine test suites.

## Table of Contents

* [Getting Started](#gettingstarted)
* [Instructions](#instructions)
* [Authors](#authors)

## GettingStarted

First clone this repo locally or else fork then clone locally.</br>
Open index.html and follow below instructions.

## Instructions

On running the index.html a series of test suites will kick in and will test the following-
1. Feed test for -
    * URL - Ensures that a URL is defined and not empty.
    * Name - Ensures that a name is defined and not empty.
2. Menu test for -
    * Default hidden - Ensures the menu element is hidden by default.
    * Toggle visibility - Ensures the menu changes visibility when the menu icon is clicked.
3. Initial Entry test to -
    * Ensure that there is at least a single entry (`.entry` element) within the `.feed` container initially.
4. New Feed Selection test to -
    * Ensure when a new feed is loaded than the content actually changes.

## Authors

* [Vikrant Sharma](https://github.com/vikkrantxx7) - JavaScript implementation.
* [Udacity Team](https://github.com/udacity) - Base Code