/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _orgchartWebcomponentsMin = __webpack_require__(1);
	
	var _orgchartWebcomponentsMin2 = _interopRequireDefault(_orgchartWebcomponentsMin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	    var datascource = {
	        "distributor_id": 16344,
	        "num_children": 875,
	        "username": "distributor.16344",
	        "full_name": "Faye Blanda Rohan",
	        "status": "Active",
	        "product_name": "Light Miner",
	        "category_name": "Bitcoin",
	        "parent_id": 16321,
	        "binary_placement": "Left",
	        "children": [{
	            "distributor_id": 18183,
	            "num_children": 864,
	            "username": "distributor.18183",
	            "full_name": "Conrad Ziemann Satterfield",
	            "status": "Active",
	            "product_name": "Strong Miner",
	            "category_name": "Bitcoin",
	            "parent_id": 16344,
	            "binary_placement": "Left",
	            "children": [{
	                "distributor_id": 18191,
	                "num_children": 2,
	                "username": "distributor.18191",
	                "full_name": "Patrick Bashirian Skiles",
	                "status": "Active",
	                "product_name": "Light Miner",
	                "category_name": "Bitcoin",
	                "parent_id": 18183,
	                "binary_placement": "Right",
	                "children": [{
	                    "distributor_id": 22249,
	                    "num_children": 1,
	                    "username": "distributor.22249",
	                    "full_name": "Samantha Mueller Hickle",
	                    "status": "Active",
	                    "product_name": "Light Miner",
	                    "category_name": "Bitcoin",
	                    "parent_id": 18191,
	                    "binary_placement": "Left",
	                    "children": [{
	                        "distributor_id": 23292,
	                        "num_children": 0,
	                        "username": "distributor.23292",
	                        "full_name": "Buck Deckow Hegmann",
	                        "status": "Active",
	                        "product_name": "Kickstarter",
	                        "category_name": "Bitcoin",
	                        "parent_id": 22249,
	                        "binary_placement": "Left",
	                        "parent_username": "distributor.22249"
	                    }],
	                    "parent_username": "distributor.18191"
	                }],
	                "parent_username": "distributor.18183"
	            }, {
	                "distributor_id": 18190,
	                "num_children": 860,
	                "username": "distributor.18190",
	                "full_name": "Deborah Abshire Mertz",
	                "status": "Active",
	                "product_name": "Light Miner",
	                "category_name": "Bitcoin",
	                "parent_id": 18183,
	                "binary_placement": "Left",
	                "children": [{
	                    "distributor_id": 18194,
	                    "num_children": 858,
	                    "username": "distributor.18194",
	                    "full_name": "Mara Conroy Feeney",
	                    "status": "Active",
	                    "product_name": "Kickstarter",
	                    "category_name": "Bitcoin",
	                    "parent_id": 18190,
	                    "binary_placement": "Left",
	                    "children": [{
	                        "distributor_id": 18203,
	                        "num_children": 0,
	                        "username": "distributor.18203",
	                        "full_name": "Judah Pfannerstill Walsh",
	                        "status": "Active",
	                        "product_name": "Kickstarter",
	                        "category_name": "Bitcoin",
	                        "parent_id": 18194,
	                        "binary_placement": "Right",
	                        "parent_username": "distributor.18194"
	                    }, {
	                        "distributor_id": 18202,
	                        "num_children": 856,
	                        "username": "distributor.18202",
	                        "full_name": "Clare Kuhn Macejkovic",
	                        "status": "Active",
	                        "product_name": "Light Miner",
	                        "category_name": "Bitcoin",
	                        "parent_id": 18194,
	                        "binary_placement": "Left",
	                        "children": [{
	                            "distributor_id": 18216,
	                            "num_children": 80,
	                            "username": "distributor.18216",
	                            "full_name": "Elsie Collins V Hermiston",
	                            "status": "Active",
	                            "product_name": "Kickstarter",
	                            "category_name": "Bitcoin",
	                            "parent_id": 18202,
	                            "binary_placement": "Left",
	                            "children": [{
	                                "distributor_id": 18226,
	                                "num_children": 2,
	                                "username": "distributor.18226",
	                                "full_name": "Dr. Lane Walsh Cronin",
	                                "status": "Active",
	                                "product_name": "Kickstarter",
	                                "category_name": "Bitcoin",
	                                "parent_id": 18216,
	                                "binary_placement": "Right",
	                                "children": [{
	                                    "distributor_id": 18241,
	                                    "num_children": 0,
	                                    "username": "distributor.18241",
	                                    "full_name": "Jordi Gaylord I Gottlieb",
	                                    "status": "Active",
	                                    "product_name": "Kickstarter",
	                                    "category_name": "Ethereum",
	                                    "parent_id": 18226,
	                                    "binary_placement": "Left",
	                                    "parent_username": "distributor.18226"
	                                }, {
	                                    "distributor_id": 18242,
	                                    "num_children": 0,
	                                    "username": "distributor.18242",
	                                    "full_name": "Dr. Gage Borer Connelly",
	                                    "status": "Active",
	                                    "product_name": "Kickstarter",
	                                    "category_name": "Ethereum",
	                                    "parent_id": 18226,
	                                    "binary_placement": "Right",
	                                    "parent_username": "distributor.18226"
	                                }],
	                                "parent_username": "distributor.18216"
	                            }, {
	                                "distributor_id": 18225,
	                                "num_children": 76,
	                                "username": "distributor.18225",
	                                "full_name": "Aniya Swaniawski Feest",
	                                "status": "Active",
	                                "product_name": "Kickstarter",
	                                "category_name": "Bitcoin",
	                                "parent_id": 18216,
	                                "binary_placement": "Left",
	                                "children": [{
	                                    "distributor_id": 18230,
	                                    "num_children": 71,
	                                    "username": "distributor.18230",
	                                    "full_name": "Serenity Leuschke Doyle",
	                                    "status": "Active",
	                                    "product_name": "Light Miner",
	                                    "category_name": "Bitcoin",
	                                    "parent_id": 18225,
	                                    "binary_placement": "Left",
	                                    "children": [{
	                                        "distributor_id": 18236,
	                                        "num_children": 55,
	                                        "username": "distributor.18236",
	                                        "full_name": "Helga Hansen Schinner",
	                                        "status": "Active",
	                                        "product_name": null,
	                                        "category_name": null,
	                                        "parent_id": 18230,
	                                        "binary_placement": "Left",
	                                        "children": [{
	                                            "distributor_id": 18239,
	                                            "num_children": 54,
	                                            "username": "distributor.18239",
	                                            "full_name": "Prof. Rene Powlowski Witting",
	                                            "status": "Active",
	                                            "product_name": "Kickstarter",
	                                            "category_name": "Bitcoin",
	                                            "parent_id": 18236,
	                                            "binary_placement": "Left",
	                                            "children": [{
	                                                "distributor_id": 22235,
	                                                "num_children": 52,
	                                                "username": "distributor.22235",
	                                                "full_name": "Alexane Heaney Conroy",
	                                                "status": "Active",
	                                                "product_name": "Master Miner",
	                                                "category_name": "Bitcoin",
	                                                "parent_id": 18239,
	                                                "binary_placement": "Left",
	                                                "children": [{
	                                                    "distributor_id": 22239,
	                                                    "num_children": 0,
	                                                    "username": "distributor.22239",
	                                                    "full_name": "Augustine Parker Berge",
	                                                    "status": "Active",
	                                                    "product_name": null,
	                                                    "category_name": null,
	                                                    "parent_id": 22235,
	                                                    "binary_placement": "Right",
	                                                    "parent_username": "distributor.22235"
	                                                }, {
	                                                    "distributor_id": 22238,
	                                                    "num_children": 50,
	                                                    "username": "distributor.22238",
	                                                    "full_name": "Mrs. Sandy Gleichner V Kerluke",
	                                                    "status": "Active",
	                                                    "product_name": null,
	                                                    "category_name": null,
	                                                    "parent_id": 22235,
	                                                    "binary_placement": "Left",
	                                                    "children": [{
	                                                        "distributor_id": 23807,
	                                                        "num_children": 1,
	                                                        "username": "distributor.23807",
	                                                        "full_name": "Clay Dickinson Waelchi",
	                                                        "status": "Active",
	                                                        "product_name": "Mid Miner",
	                                                        "category_name": "Bitcoin",
	                                                        "parent_id": 22238,
	                                                        "binary_placement": "Right",
	                                                        "children": [{
	                                                            "distributor_id": 26765,
	                                                            "num_children": 0,
	                                                            "username": "distributor.26765",
	                                                            "full_name": "Genesis Hand Hamill",
	                                                            "status": "Active",
	                                                            "product_name": "XS",
	                                                            "category_name": "Bitcoin",
	                                                            "parent_id": 23807,
	                                                            "binary_placement": "Left",
	                                                            "parent_username": "distributor.23807"
	                                                        }],
	                                                        "parent_username": "distributor.22238"
	                                                    }, {
	                                                        "distributor_id": 23806,
	                                                        "num_children": 47,
	                                                        "username": "distributor.23806",
	                                                        "full_name": "Mr. Glennie Kovacek DDS Satterfield",
	                                                        "status": "Active",
	                                                        "product_name": "Kickstarter",
	                                                        "category_name": "Bitcoin",
	                                                        "parent_id": 22238,
	                                                        "binary_placement": "Left",
	                                                        "children": [{
	                                                            "distributor_id": 25471,
	                                                            "num_children": 46,
	                                                            "username": "distributor.25471",
	                                                            "full_name": "Deon Lakin Walter",
	                                                            "status": "Active",
	                                                            "product_name": null,
	                                                            "category_name": null,
	                                                            "parent_id": 23806,
	                                                            "binary_placement": "Left",
	                                                            "children": [{
	                                                                "distributor_id": 26756,
	                                                                "num_children": 45,
	                                                                "username": "distributor.26756",
	                                                                "full_name": "Kenny Ullrich Gutkowski",
	                                                                "status": "Active",
	                                                                "product_name": null,
	                                                                "category_name": null,
	                                                                "parent_id": 25471,
	                                                                "binary_placement": "Left",
	                                                                "children": [{
	                                                                    "distributor_id": 26861,
	                                                                    "num_children": 44,
	                                                                    "username": "distributor.26861",
	                                                                    "full_name": "Mr. Edison Herzog Mosciski",
	                                                                    "status": "Active",
	                                                                    "product_name": "Kickstarter",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 26756,
	                                                                    "binary_placement": "Left",
	                                                                    "children": [{
	                                                                        "distributor_id": 29313,
	                                                                        "num_children": 0,
	                                                                        "username": "distributor.29313",
	                                                                        "full_name": "Sandy Kunde Bergnaum",
	                                                                        "status": "Active",
	                                                                        "product_name": "Kickstarter",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 26861,
	                                                                        "binary_placement": "Right",
	                                                                        "parent_username": "distributor.26861"
	                                                                    }, {
	                                                                        "distributor_id": 29312,
	                                                                        "num_children": 42,
	                                                                        "username": "distributor.29312",
	                                                                        "full_name": "Mr. Justyn Deckow Klocko",
	                                                                        "status": "Active",
	                                                                        "product_name": "Kickstarter",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 26861,
	                                                                        "binary_placement": "Left",
	                                                                        "children": [{
	                                                                            "distributor_id": 29335,
	                                                                            "num_children": 40,
	                                                                            "username": "distributor.29335",
	                                                                            "full_name": "Willie Bode Schroeder",
	                                                                            "status": "Active",
	                                                                            "product_name": "Light Miner",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 29312,
	                                                                            "binary_placement": "Left",
	                                                                            "children": [{
	                                                                                "distributor_id": 29897,
	                                                                                "num_children": 0,
	                                                                                "username": "distributor.29897",
	                                                                                "full_name": "Manuela O'Connell Crona",
	                                                                                "status": "Active",
	                                                                                "product_name": null,
	                                                                                "category_name": null,
	                                                                                "parent_id": 29335,
	                                                                                "binary_placement": "Right",
	                                                                                "parent_username": "distributor.29335"
	                                                                            }, {
	                                                                                "distributor_id": 29896,
	                                                                                "num_children": 38,
	                                                                                "username": "distributor.29896",
	                                                                                "full_name": "Mr. Mason Greenfelder Walsh",
	                                                                                "status": "Active",
	                                                                                "product_name": "Mid Miner",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 29335,
	                                                                                "binary_placement": "Left",
	                                                                                "children": [{
	                                                                                    "distributor_id": 29912,
	                                                                                    "num_children": 0,
	                                                                                    "username": "distributor.29912",
	                                                                                    "full_name": "Shemar Waters Schaden",
	                                                                                    "status": "Active",
	                                                                                    "product_name": null,
	                                                                                    "category_name": null,
	                                                                                    "parent_id": 29896,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.29896"
	                                                                                }, {
	                                                                                    "distributor_id": 29911,
	                                                                                    "num_children": 36,
	                                                                                    "username": "distributor.29911",
	                                                                                    "full_name": "Prof. Jamel Grimes Cole",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Light Miner",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 29896,
	                                                                                    "binary_placement": "Left",
	                                                                                    "parent_username": "distributor.29896"
	                                                                                }],
	                                                                                "parent_username": "distributor.29335"
	                                                                            }],
	                                                                            "parent_username": "distributor.29312"
	                                                                        }, {
	                                                                            "distributor_id": 29336,
	                                                                            "num_children": 0,
	                                                                            "username": "distributor.29336",
	                                                                            "full_name": "Ressie McKenzie Monahan",
	                                                                            "status": "Active",
	                                                                            "product_name": null,
	                                                                            "category_name": null,
	                                                                            "parent_id": 29312,
	                                                                            "binary_placement": "Right",
	                                                                            "parent_username": "distributor.29312"
	                                                                        }],
	                                                                        "parent_username": "distributor.26861"
	                                                                    }],
	                                                                    "parent_username": "distributor.26756"
	                                                                }],
	                                                                "parent_username": "distributor.25471"
	                                                            }],
	                                                            "parent_username": "distributor.23806"
	                                                        }],
	                                                        "parent_username": "distributor.22238"
	                                                    }],
	                                                    "parent_username": "distributor.22235"
	                                                }],
	                                                "parent_username": "distributor.18239"
	                                            }, {
	                                                "distributor_id": 22236,
	                                                "num_children": 0,
	                                                "username": "distributor.22236",
	                                                "full_name": "Jana Koepp Dooley",
	                                                "status": "Active",
	                                                "product_name": "Kickstarter",
	                                                "category_name": "Bitcoin",
	                                                "parent_id": 18239,
	                                                "binary_placement": "Right",
	                                                "parent_username": "distributor.18239"
	                                            }],
	                                            "parent_username": "distributor.18236"
	                                        }],
	                                        "parent_username": "distributor.18230"
	                                    }, {
	                                        "distributor_id": 18237,
	                                        "num_children": 14,
	                                        "username": "distributor.18237",
	                                        "full_name": "Aniyah Mraz Howe",
	                                        "status": "Active",
	                                        "product_name": "Kickstarter",
	                                        "category_name": "Bitcoin",
	                                        "parent_id": 18230,
	                                        "binary_placement": "Right",
	                                        "children": [{
	                                            "distributor_id": 22402,
	                                            "num_children": 0,
	                                            "username": "distributor.22402",
	                                            "full_name": "Ms. Sincere Cremin Sr. Sauer",
	                                            "status": "Active",
	                                            "product_name": null,
	                                            "category_name": null,
	                                            "parent_id": 18237,
	                                            "binary_placement": "Left",
	                                            "parent_username": "distributor.18237"
	                                        }, {
	                                            "distributor_id": 22403,
	                                            "num_children": 12,
	                                            "username": "distributor.22403",
	                                            "full_name": "Phoebe Hahn Daniel",
	                                            "status": "Active",
	                                            "product_name": null,
	                                            "category_name": null,
	                                            "parent_id": 18237,
	                                            "binary_placement": "Right",
	                                            "children": [{
	                                                "distributor_id": 39064,
	                                                "num_children": 4,
	                                                "username": "distributor.39064",
	                                                "full_name": "Felipe Cummerata Bahringer",
	                                                "status": "Active",
	                                                "product_name": null,
	                                                "category_name": null,
	                                                "parent_id": 22403,
	                                                "binary_placement": "Left",
	                                                "children": [{
	                                                    "distributor_id": 43377,
	                                                    "num_children": 0,
	                                                    "username": "distributor.43377",
	                                                    "full_name": "Delaney Kirlin PhD Johnson",
	                                                    "status": "Active",
	                                                    "product_name": null,
	                                                    "category_name": null,
	                                                    "parent_id": 39064,
	                                                    "binary_placement": "Right",
	                                                    "parent_username": "distributor.39064"
	                                                }, {
	                                                    "distributor_id": 43376,
	                                                    "num_children": 2,
	                                                    "username": "distributor.43376",
	                                                    "full_name": "Viola Graham Greenholt",
	                                                    "status": "Active",
	                                                    "product_name": null,
	                                                    "category_name": null,
	                                                    "parent_id": 39064,
	                                                    "binary_placement": "Left",
	                                                    "children": [{
	                                                        "distributor_id": 43423,
	                                                        "num_children": 0,
	                                                        "username": "distributor.43423",
	                                                        "full_name": "Dr. Green Rutherford Gerhold",
	                                                        "status": "Active",
	                                                        "product_name": null,
	                                                        "category_name": null,
	                                                        "parent_id": 43376,
	                                                        "binary_placement": "Left",
	                                                        "parent_username": "distributor.43376"
	                                                    }, {
	                                                        "distributor_id": 43424,
	                                                        "num_children": 0,
	                                                        "username": "distributor.43424",
	                                                        "full_name": "Mr. Furman Lehner PhD Thiel",
	                                                        "status": "Active",
	                                                        "product_name": null,
	                                                        "category_name": null,
	                                                        "parent_id": 43376,
	                                                        "binary_placement": "Right",
	                                                        "parent_username": "distributor.43376"
	                                                    }],
	                                                    "parent_username": "distributor.39064"
	                                                }],
	                                                "parent_username": "distributor.22403"
	                                            }, {
	                                                "distributor_id": 39065,
	                                                "num_children": 6,
	                                                "username": "distributor.39065",
	                                                "full_name": "John Hane Baumbach",
	                                                "status": "Active",
	                                                "product_name": null,
	                                                "category_name": null,
	                                                "parent_id": 22403,
	                                                "binary_placement": "Right",
	                                                "children": [{
	                                                    "distributor_id": 43348,
	                                                    "num_children": 2,
	                                                    "username": "distributor.43348",
	                                                    "full_name": "Dr. Martina Kulas MD Abshire",
	                                                    "status": "Active",
	                                                    "product_name": null,
	                                                    "category_name": null,
	                                                    "parent_id": 39065,
	                                                    "binary_placement": "Right",
	                                                    "children": [{
	                                                        "distributor_id": 43402,
	                                                        "num_children": 0,
	                                                        "username": "distributor.43402",
	                                                        "full_name": "Norma McLaughlin Trantow",
	                                                        "status": "Active",
	                                                        "product_name": null,
	                                                        "category_name": null,
	                                                        "parent_id": 43348,
	                                                        "binary_placement": "Right",
	                                                        "parent_username": "distributor.43348"
	                                                    }, {
	                                                        "distributor_id": 43401,
	                                                        "num_children": 0,
	                                                        "username": "distributor.43401",
	                                                        "full_name": "Ana Turcotte PhD Bashirian",
	                                                        "status": "Active",
	                                                        "product_name": null,
	                                                        "category_name": null,
	                                                        "parent_id": 43348,
	                                                        "binary_placement": "Left",
	                                                        "parent_username": "distributor.43348"
	                                                    }],
	                                                    "parent_username": "distributor.39065"
	                                                }, {
	                                                    "distributor_id": 43347,
	                                                    "num_children": 2,
	                                                    "username": "distributor.43347",
	                                                    "full_name": "Darien Schulist Rogahn",
	                                                    "status": "Active",
	                                                    "product_name": null,
	                                                    "category_name": null,
	                                                    "parent_id": 39065,
	                                                    "binary_placement": "Left",
	                                                    "children": [{
	                                                        "distributor_id": 43395,
	                                                        "num_children": 0,
	                                                        "username": "distributor.43395",
	                                                        "full_name": "Marques Grady Daugherty",
	                                                        "status": "Active",
	                                                        "product_name": null,
	                                                        "category_name": null,
	                                                        "parent_id": 43347,
	                                                        "binary_placement": "Right",
	                                                        "parent_username": "distributor.43347"
	                                                    }, {
	                                                        "distributor_id": 43394,
	                                                        "num_children": 0,
	                                                        "username": "distributor.43394",
	                                                        "full_name": "Dr. Edison Corwin Muller",
	                                                        "status": "Active",
	                                                        "product_name": null,
	                                                        "category_name": null,
	                                                        "parent_id": 43347,
	                                                        "binary_placement": "Left",
	                                                        "parent_username": "distributor.43347"
	                                                    }],
	                                                    "parent_username": "distributor.39065"
	                                                }],
	                                                "parent_username": "distributor.22403"
	                                            }],
	                                            "parent_username": "distributor.18237"
	                                        }],
	                                        "parent_username": "distributor.18230"
	                                    }],
	                                    "parent_username": "distributor.18225"
	                                }, {
	                                    "distributor_id": 18231,
	                                    "num_children": 3,
	                                    "username": "distributor.18231",
	                                    "full_name": "Doyle McKenzie I Labadie",
	                                    "status": "Active",
	                                    "product_name": null,
	                                    "category_name": null,
	                                    "parent_id": 18225,
	                                    "binary_placement": "Right",
	                                    "children": [{
	                                        "distributor_id": 35486,
	                                        "num_children": 2,
	                                        "username": "distributor.35486",
	                                        "full_name": "Melba Daugherty Stiedemann",
	                                        "status": "Active",
	                                        "product_name": "Kickstarter",
	                                        "category_name": "Bitcoin",
	                                        "parent_id": 18231,
	                                        "binary_placement": "Right",
	                                        "children": [{
	                                            "distributor_id": 35488,
	                                            "num_children": 0,
	                                            "username": "distributor.35488",
	                                            "full_name": "Ms. Genoveva Schamberger MD Moore",
	                                            "status": "Active",
	                                            "product_name": null,
	                                            "category_name": null,
	                                            "parent_id": 35486,
	                                            "binary_placement": "Left",
	                                            "parent_username": "distributor.35486"
	                                        }, {
	                                            "distributor_id": 35489,
	                                            "num_children": 0,
	                                            "username": "distributor.35489",
	                                            "full_name": "Leola Koepp Jr. Ankunding",
	                                            "status": "Active",
	                                            "product_name": null,
	                                            "category_name": null,
	                                            "parent_id": 35486,
	                                            "binary_placement": "Right",
	                                            "parent_username": "distributor.35486"
	                                        }],
	                                        "parent_username": "distributor.18231"
	                                    }],
	                                    "parent_username": "distributor.18225"
	                                }],
	                                "parent_username": "distributor.18216"
	                            }],
	                            "parent_username": "distributor.18202"
	                        }, {
	                            "distributor_id": 18217,
	                            "num_children": 774,
	                            "username": "distributor.18217",
	                            "full_name": "Ardith Kerluke McLaughlin",
	                            "status": "Active",
	                            "product_name": null,
	                            "category_name": null,
	                            "parent_id": 18202,
	                            "binary_placement": "Right",
	                            "children": [{
	                                "distributor_id": 28731,
	                                "num_children": 773,
	                                "username": "distributor.28731",
	                                "full_name": "Danyka Harber Ruecker",
	                                "status": "Active",
	                                "product_name": "Kickstarter",
	                                "category_name": "Bitcoin",
	                                "parent_id": 18217,
	                                "binary_placement": "Right",
	                                "children": [{
	                                    "distributor_id": 29821,
	                                    "num_children": 771,
	                                    "username": "distributor.29821",
	                                    "full_name": "Gabrielle Borer Denesik",
	                                    "status": "Active",
	                                    "product_name": "Kickstarter",
	                                    "category_name": "Bitcoin",
	                                    "parent_id": 28731,
	                                    "binary_placement": "Right",
	                                    "children": [{
	                                        "distributor_id": 29825,
	                                        "num_children": 769,
	                                        "username": "distributor.29825",
	                                        "full_name": "Isobel Pollich Braun",
	                                        "status": "Active",
	                                        "product_name": null,
	                                        "category_name": null,
	                                        "parent_id": 29821,
	                                        "binary_placement": "Right",
	                                        "children": [{
	                                            "distributor_id": 29829,
	                                            "num_children": 768,
	                                            "username": "distributor.29829",
	                                            "full_name": "Amara Feest Wisoky",
	                                            "status": "Active",
	                                            "product_name": "Master Miner",
	                                            "category_name": "Bitcoin",
	                                            "parent_id": 29825,
	                                            "binary_placement": "Right",
	                                            "children": [{
	                                                "distributor_id": 29837,
	                                                "num_children": 291,
	                                                "username": "distributor.29837",
	                                                "full_name": "Lacey Cassin II Breitenberg",
	                                                "status": "Active",
	                                                "product_name": "Kickstarter",
	                                                "category_name": "Bitcoin",
	                                                "parent_id": 29829,
	                                                "binary_placement": "Right",
	                                                "children": [{
	                                                    "distributor_id": 29841,
	                                                    "num_children": 208,
	                                                    "username": "distributor.29841",
	                                                    "full_name": "Dr. Alexanne Farrell Senger",
	                                                    "status": "Active",
	                                                    "product_name": "Light Miner",
	                                                    "category_name": "Bitcoin",
	                                                    "parent_id": 29837,
	                                                    "binary_placement": "Right",
	                                                    "children": [{
	                                                        "distributor_id": 29843,
	                                                        "num_children": 205,
	                                                        "username": "distributor.29843",
	                                                        "full_name": "Ned VonRueden Dickens",
	                                                        "status": "Active",
	                                                        "product_name": "Light Miner",
	                                                        "category_name": "Bitcoin",
	                                                        "parent_id": 29841,
	                                                        "binary_placement": "Left",
	                                                        "children": [{
	                                                            "distributor_id": 29845,
	                                                            "num_children": 204,
	                                                            "username": "distributor.29845",
	                                                            "full_name": "Lottie Hintz Ebert",
	                                                            "status": "Active",
	                                                            "product_name": "Kickstarter",
	                                                            "category_name": "Bitcoin",
	                                                            "parent_id": 29843,
	                                                            "binary_placement": "Left",
	                                                            "children": [{
	                                                                "distributor_id": 36077,
	                                                                "num_children": 10,
	                                                                "username": "distributor.36077",
	                                                                "full_name": "Adrianna Abshire Rau",
	                                                                "status": "Active",
	                                                                "product_name": "Mid Miner",
	                                                                "category_name": "Bitcoin",
	                                                                "parent_id": 29845,
	                                                                "binary_placement": "Right",
	                                                                "children": [{
	                                                                    "distributor_id": 45080,
	                                                                    "num_children": 3,
	                                                                    "username": "distributor.45080",
	                                                                    "full_name": "Nelle O'Hara Raynor",
	                                                                    "status": "Active",
	                                                                    "product_name": "Kickstarter",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 36077,
	                                                                    "binary_placement": "Right",
	                                                                    "children": [{
	                                                                        "distributor_id": 45208,
	                                                                        "num_children": 2,
	                                                                        "username": "distributor.45208",
	                                                                        "full_name": "Alena Glover Hamill",
	                                                                        "status": "Active",
	                                                                        "product_name": "Mid Miner",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 45080,
	                                                                        "binary_placement": "Right",
	                                                                        "children": [{
	                                                                            "distributor_id": 54906,
	                                                                            "num_children": 0,
	                                                                            "username": "distributor.54906",
	                                                                            "full_name": "Prof. Kendall O'Connell Deckow",
	                                                                            "status": "Active",
	                                                                            "product_name": "Kickstarter",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 45208,
	                                                                            "binary_placement": "Right",
	                                                                            "parent_username": "distributor.45208"
	                                                                        }, {
	                                                                            "distributor_id": 54905,
	                                                                            "num_children": 0,
	                                                                            "username": "distributor.54905",
	                                                                            "full_name": "Markus Ratke McClure",
	                                                                            "status": "Active",
	                                                                            "product_name": "Kickstarter",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 45208,
	                                                                            "binary_placement": "Left",
	                                                                            "parent_username": "distributor.45208"
	                                                                        }],
	                                                                        "parent_username": "distributor.45080"
	                                                                    }],
	                                                                    "parent_username": "distributor.36077"
	                                                                }, {
	                                                                    "distributor_id": 45079,
	                                                                    "num_children": 5,
	                                                                    "username": "distributor.45079",
	                                                                    "full_name": "Iliana Ryan Towne",
	                                                                    "status": "Active",
	                                                                    "product_name": "Light Miner",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 36077,
	                                                                    "binary_placement": "Left",
	                                                                    "children": [{
	                                                                        "distributor_id": 45200,
	                                                                        "num_children": 0,
	                                                                        "username": "distributor.45200",
	                                                                        "full_name": "Prof. Aracely Hackett Auer",
	                                                                        "status": "Active",
	                                                                        "product_name": "Kickstarter",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 45079,
	                                                                        "binary_placement": "Right",
	                                                                        "parent_username": "distributor.45079"
	                                                                    }, {
	                                                                        "distributor_id": 45199,
	                                                                        "num_children": 3,
	                                                                        "username": "distributor.45199",
	                                                                        "full_name": "Ned Deckow Vandervort",
	                                                                        "status": "Active",
	                                                                        "product_name": "Mid Miner",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 45079,
	                                                                        "binary_placement": "Left",
	                                                                        "children": [{
	                                                                            "distributor_id": 47086,
	                                                                            "num_children": 1,
	                                                                            "username": "distributor.47086",
	                                                                            "full_name": "Dr. Moises Schuppe Langworth",
	                                                                            "status": "Active",
	                                                                            "product_name": "Kickstarter",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 45199,
	                                                                            "binary_placement": "Left",
	                                                                            "children": [{
	                                                                                "distributor_id": 54940,
	                                                                                "num_children": 0,
	                                                                                "username": "distributor.54940",
	                                                                                "full_name": "Carmella Kris Stracke",
	                                                                                "status": "Active",
	                                                                                "product_name": "Mid Miner",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 47086,
	                                                                                "binary_placement": "Left",
	                                                                                "parent_username": "distributor.47086"
	                                                                            }],
	                                                                            "parent_username": "distributor.45199"
	                                                                        }, {
	                                                                            "distributor_id": 47087,
	                                                                            "num_children": 0,
	                                                                            "username": "distributor.47087",
	                                                                            "full_name": "Mr. Wilbert O'Connell MD Mills",
	                                                                            "status": "Active",
	                                                                            "product_name": "Kickstarter",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 45199,
	                                                                            "binary_placement": "Right",
	                                                                            "parent_username": "distributor.45199"
	                                                                        }],
	                                                                        "parent_username": "distributor.45079"
	                                                                    }],
	                                                                    "parent_username": "distributor.36077"
	                                                                }],
	                                                                "parent_username": "distributor.29845"
	                                                            }, {
	                                                                "distributor_id": 36076,
	                                                                "num_children": 192,
	                                                                "username": "distributor.36076",
	                                                                "full_name": "Mr. Lewis Koss Marks",
	                                                                "status": "Active",
	                                                                "product_name": "Kickstarter",
	                                                                "category_name": "Bitcoin",
	                                                                "parent_id": 29845,
	                                                                "binary_placement": "Left",
	                                                                "children": [{
	                                                                    "distributor_id": 100109,
	                                                                    "num_children": 21,
	                                                                    "username": "distributor.100109",
	                                                                    "full_name": "Mireya Trantow IV Kshlerin",
	                                                                    "status": "Active",
	                                                                    "product_name": "Master Miner",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 36076,
	                                                                    "binary_placement": "Right",
	                                                                    "children": [{
	                                                                        "distributor_id": 128678,
	                                                                        "num_children": 0,
	                                                                        "username": "distributor.128678",
	                                                                        "full_name": "Gavin Berge Raynor",
	                                                                        "status": "Active",
	                                                                        "product_name": "Kickstarter",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 100109,
	                                                                        "binary_placement": "Left",
	                                                                        "parent_username": "distributor.100109"
	                                                                    }, {
	                                                                        "distributor_id": 127676,
	                                                                        "num_children": 19,
	                                                                        "username": "distributor.127676",
	                                                                        "full_name": "Rylee Feest Smith",
	                                                                        "status": "Active",
	                                                                        "product_name": "Kickstarter",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 100109,
	                                                                        "binary_placement": "Right",
	                                                                        "children": [{
	                                                                            "distributor_id": 127774,
	                                                                            "num_children": 8,
	                                                                            "username": "distributor.127774",
	                                                                            "full_name": "Isac Maggio Yost",
	                                                                            "status": "Active",
	                                                                            "product_name": "Light Miner",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 127676,
	                                                                            "binary_placement": "Right",
	                                                                            "children": [{
	                                                                                "distributor_id": 127796,
	                                                                                "num_children": 3,
	                                                                                "username": "distributor.127796",
	                                                                                "full_name": "Miss Bettye Baumbach PhD Braun",
	                                                                                "status": "Active",
	                                                                                "product_name": "Kickstarter",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 127774,
	                                                                                "binary_placement": "Right",
	                                                                                "children": [{
	                                                                                    "distributor_id": 132969,
	                                                                                    "num_children": 2,
	                                                                                    "username": "distributor.132969",
	                                                                                    "full_name": "Hipolito Lubowitz Smith",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Kickstarter",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 127796,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.127796"
	                                                                                }],
	                                                                                "parent_username": "distributor.127774"
	                                                                            }, {
	                                                                                "distributor_id": 127786,
	                                                                                "num_children": 3,
	                                                                                "username": "distributor.127786",
	                                                                                "full_name": "Mr. Kennedi Batz II Runolfsson",
	                                                                                "status": "Active",
	                                                                                "product_name": "Kickstarter",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 127774,
	                                                                                "binary_placement": "Left",
	                                                                                "children": [{
	                                                                                    "distributor_id": 132974,
	                                                                                    "num_children": 2,
	                                                                                    "username": "distributor.132974",
	                                                                                    "full_name": "Ila McCullough PhD Stracke",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Kickstarter",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 127786,
	                                                                                    "binary_placement": "Left",
	                                                                                    "parent_username": "distributor.127786"
	                                                                                }],
	                                                                                "parent_username": "distributor.127774"
	                                                                            }],
	                                                                            "parent_username": "distributor.127676"
	                                                                        }, {
	                                                                            "distributor_id": 128664,
	                                                                            "num_children": 9,
	                                                                            "username": "distributor.128664",
	                                                                            "full_name": "Vernon Satterfield Prosacco",
	                                                                            "status": "Active",
	                                                                            "product_name": "Kickstarter",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 127676,
	                                                                            "binary_placement": "Left",
	                                                                            "children": [{
	                                                                                "distributor_id": 193846,
	                                                                                "num_children": 7,
	                                                                                "username": "distributor.193846",
	                                                                                "full_name": "Dr. Marcella Block Harris",
	                                                                                "status": "Active",
	                                                                                "product_name": "Kickstarter",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 128664,
	                                                                                "binary_placement": "Right",
	                                                                                "children": [{
	                                                                                    "distributor_id": 193852,
	                                                                                    "num_children": 5,
	                                                                                    "username": "distributor.193852",
	                                                                                    "full_name": "Prof. Agustina Streich I Goyette",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Light Miner",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 193846,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.193846"
	                                                                                }, {
	                                                                                    "distributor_id": 194639,
	                                                                                    "num_children": 0,
	                                                                                    "username": "distributor.194639",
	                                                                                    "full_name": "Mr. German Miller III Cassin",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Kickstarter",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 193846,
	                                                                                    "binary_placement": "Left",
	                                                                                    "parent_username": "distributor.193846"
	                                                                                }],
	                                                                                "parent_username": "distributor.128664"
	                                                                            }, {
	                                                                                "distributor_id": 156541,
	                                                                                "num_children": 0,
	                                                                                "username": "distributor.156541",
	                                                                                "full_name": "Alba Friesen I Barrows",
	                                                                                "status": "Active",
	                                                                                "product_name": "Kickstarter",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 128664,
	                                                                                "binary_placement": "Left",
	                                                                                "parent_username": "distributor.128664"
	                                                                            }],
	                                                                            "parent_username": "distributor.127676"
	                                                                        }],
	                                                                        "parent_username": "distributor.100109"
	                                                                    }],
	                                                                    "parent_username": "distributor.36076"
	                                                                }, {
	                                                                    "distributor_id": 43108,
	                                                                    "num_children": 169,
	                                                                    "username": "distributor.43108",
	                                                                    "full_name": "Frida Bailey DDS Konopelski",
	                                                                    "status": "Active",
	                                                                    "product_name": "Strong Miner",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 36076,
	                                                                    "binary_placement": "Left",
	                                                                    "children": [{
	                                                                        "distributor_id": 55326,
	                                                                        "num_children": 59,
	                                                                        "username": "distributor.55326",
	                                                                        "full_name": "Nicholas Quigley Krajcik",
	                                                                        "status": "Active",
	                                                                        "product_name": "Kickstarter",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 43108,
	                                                                        "binary_placement": "Right",
	                                                                        "children": [{
	                                                                            "distributor_id": 58713,
	                                                                            "num_children": 57,
	                                                                            "username": "distributor.58713",
	                                                                            "full_name": "Miss Raina Prohaska Harber",
	                                                                            "status": "Active",
	                                                                            "product_name": "Kickstarter",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 55326,
	                                                                            "binary_placement": "Right",
	                                                                            "children": [{
	                                                                                "distributor_id": 92285,
	                                                                                "num_children": 55,
	                                                                                "username": "distributor.92285",
	                                                                                "full_name": "Dr. Malinda West PhD Lindgren",
	                                                                                "status": "Active",
	                                                                                "product_name": "Strong Miner",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 58713,
	                                                                                "binary_placement": "Right",
	                                                                                "children": [{
	                                                                                    "distributor_id": 124679,
	                                                                                    "num_children": 54,
	                                                                                    "username": "distributor.124679",
	                                                                                    "full_name": "Axel Russel Moore",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Kickstarter",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 92285,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.92285"
	                                                                                }],
	                                                                                "parent_username": "distributor.58713"
	                                                                            }, {
	                                                                                "distributor_id": 124779,
	                                                                                "num_children": 0,
	                                                                                "username": "distributor.124779",
	                                                                                "full_name": "Prof. Norval Douglas Ziemann",
	                                                                                "status": "Active",
	                                                                                "product_name": "Light Miner",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 58713,
	                                                                                "binary_placement": "Left",
	                                                                                "parent_username": "distributor.58713"
	                                                                            }],
	                                                                            "parent_username": "distributor.55326"
	                                                                        }, {
	                                                                            "distributor_id": 55387,
	                                                                            "num_children": 0,
	                                                                            "username": "distributor.55387",
	                                                                            "full_name": "Tatum Glover II Ondricka",
	                                                                            "status": "Active",
	                                                                            "product_name": null,
	                                                                            "category_name": null,
	                                                                            "parent_id": 55326,
	                                                                            "binary_placement": "Left",
	                                                                            "parent_username": "distributor.55326"
	                                                                        }],
	                                                                        "parent_username": "distributor.43108"
	                                                                    }, {
	                                                                        "distributor_id": 55325,
	                                                                        "num_children": 108,
	                                                                        "username": "distributor.55325",
	                                                                        "full_name": "Delmer Tillman Schmeler",
	                                                                        "status": "Active",
	                                                                        "product_name": "Kickstarter",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 43108,
	                                                                        "binary_placement": "Left",
	                                                                        "children": [{
	                                                                            "distributor_id": 58647,
	                                                                            "num_children": 41,
	                                                                            "username": "distributor.58647",
	                                                                            "full_name": "Max Ritchie IV Douglas",
	                                                                            "status": "Active",
	                                                                            "product_name": "Kickstarter",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 55325,
	                                                                            "binary_placement": "Right",
	                                                                            "children": [{
	                                                                                "distributor_id": 127815,
	                                                                                "num_children": 39,
	                                                                                "username": "distributor.127815",
	                                                                                "full_name": "Prof. Giuseppe Herman V Murray",
	                                                                                "status": "Active",
	                                                                                "product_name": "Light Miner",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 58647,
	                                                                                "binary_placement": "Right",
	                                                                                "children": [{
	                                                                                    "distributor_id": 127820,
	                                                                                    "num_children": 20,
	                                                                                    "username": "distributor.127820",
	                                                                                    "full_name": "Fannie Lubowitz Ernser",
	                                                                                    "status": "Active",
	                                                                                    "product_name": null,
	                                                                                    "category_name": null,
	                                                                                    "parent_id": 127815,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.127815"
	                                                                                }, {
	                                                                                    "distributor_id": 128529,
	                                                                                    "num_children": 17,
	                                                                                    "username": "distributor.128529",
	                                                                                    "full_name": "Raul Mayer Greenholt",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Strong Miner",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 127815,
	                                                                                    "binary_placement": "Left",
	                                                                                    "parent_username": "distributor.127815"
	                                                                                }],
	                                                                                "parent_username": "distributor.58647"
	                                                                            }, {
	                                                                                "distributor_id": 146714,
	                                                                                "num_children": 0,
	                                                                                "username": "distributor.146714",
	                                                                                "full_name": "Cordell O'Connell Hoppe",
	                                                                                "status": "Active",
	                                                                                "product_name": "Pro Miner",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 58647,
	                                                                                "binary_placement": "Left",
	                                                                                "parent_username": "distributor.58647"
	                                                                            }],
	                                                                            "parent_username": "distributor.55325"
	                                                                        }, {
	                                                                            "distributor_id": 55335,
	                                                                            "num_children": 65,
	                                                                            "username": "distributor.55335",
	                                                                            "full_name": "Miss Ludie Goyette DVM Russel",
	                                                                            "status": "Active",
	                                                                            "product_name": "Kickstarter",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 55325,
	                                                                            "binary_placement": "Left",
	                                                                            "children": [{
	                                                                                "distributor_id": 58770,
	                                                                                "num_children": 1,
	                                                                                "username": "distributor.58770",
	                                                                                "full_name": "Garnet Jones V Gusikowski",
	                                                                                "status": "Active",
	                                                                                "product_name": "Strong Miner",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 55335,
	                                                                                "binary_placement": "Right",
	                                                                                "children": [{
	                                                                                    "distributor_id": 82350,
	                                                                                    "num_children": 0,
	                                                                                    "username": "distributor.82350",
	                                                                                    "full_name": "Lucious Haag I Stark",
	                                                                                    "status": "Active",
	                                                                                    "product_name": null,
	                                                                                    "category_name": null,
	                                                                                    "parent_id": 58770,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.58770"
	                                                                                }],
	                                                                                "parent_username": "distributor.55335"
	                                                                            }, {
	                                                                                "distributor_id": 55368,
	                                                                                "num_children": 62,
	                                                                                "username": "distributor.55368",
	                                                                                "full_name": "Olga Orn Pagac",
	                                                                                "status": "Active",
	                                                                                "product_name": null,
	                                                                                "category_name": null,
	                                                                                "parent_id": 55335,
	                                                                                "binary_placement": "Left",
	                                                                                "children": [{
	                                                                                    "distributor_id": 58134,
	                                                                                    "num_children": 61,
	                                                                                    "username": "distributor.58134",
	                                                                                    "full_name": "Lowell Reichel Bartoletti",
	                                                                                    "status": "Active",
	                                                                                    "product_name": null,
	                                                                                    "category_name": null,
	                                                                                    "parent_id": 55368,
	                                                                                    "binary_placement": "Left",
	                                                                                    "parent_username": "distributor.55368"
	                                                                                }],
	                                                                                "parent_username": "distributor.55335"
	                                                                            }],
	                                                                            "parent_username": "distributor.55325"
	                                                                        }],
	                                                                        "parent_username": "distributor.43108"
	                                                                    }],
	                                                                    "parent_username": "distributor.36076"
	                                                                }],
	                                                                "parent_username": "distributor.29845"
	                                                            }],
	                                                            "parent_username": "distributor.29843"
	                                                        }],
	                                                        "parent_username": "distributor.29841"
	                                                    }, {
	                                                        "distributor_id": 29844,
	                                                        "num_children": 1,
	                                                        "username": "distributor.29844",
	                                                        "full_name": "Francisco Jast Murphy",
	                                                        "status": "Active",
	                                                        "product_name": "Light Miner",
	                                                        "category_name": "Bitcoin",
	                                                        "parent_id": 29841,
	                                                        "binary_placement": "Right",
	                                                        "children": [{
	                                                            "distributor_id": 29858,
	                                                            "num_children": 0,
	                                                            "username": "distributor.29858",
	                                                            "full_name": "Bernita Abernathy Schmeler",
	                                                            "status": "Active",
	                                                            "product_name": "Kickstarter",
	                                                            "category_name": "Bitcoin",
	                                                            "parent_id": 29844,
	                                                            "binary_placement": "Right",
	                                                            "parent_username": "distributor.29844"
	                                                        }],
	                                                        "parent_username": "distributor.29841"
	                                                    }],
	                                                    "parent_username": "distributor.29837"
	                                                }, {
	                                                    "distributor_id": 29840,
	                                                    "num_children": 81,
	                                                    "username": "distributor.29840",
	                                                    "full_name": "Miss Mariana Lakin V Cummings",
	                                                    "status": "Active",
	                                                    "product_name": "Kickstarter",
	                                                    "category_name": "Bitcoin",
	                                                    "parent_id": 29837,
	                                                    "binary_placement": "Left",
	                                                    "children": [{
	                                                        "distributor_id": 31332,
	                                                        "num_children": 32,
	                                                        "username": "distributor.31332",
	                                                        "full_name": "Daphne Hodkiewicz Hilpert",
	                                                        "status": "Active",
	                                                        "product_name": null,
	                                                        "category_name": null,
	                                                        "parent_id": 29840,
	                                                        "binary_placement": "Left",
	                                                        "children": [{
	                                                            "distributor_id": 31850,
	                                                            "num_children": 31,
	                                                            "username": "distributor.31850",
	                                                            "full_name": "Mac Lueilwitz Labadie",
	                                                            "status": "Active",
	                                                            "product_name": "Kickstarter",
	                                                            "category_name": "Bitcoin",
	                                                            "parent_id": 31332,
	                                                            "binary_placement": "Left",
	                                                            "children": [{
	                                                                "distributor_id": 31856,
	                                                                "num_children": 17,
	                                                                "username": "distributor.31856",
	                                                                "full_name": "Johanna Aufderhar Pfannerstill",
	                                                                "status": "Active",
	                                                                "product_name": null,
	                                                                "category_name": null,
	                                                                "parent_id": 31850,
	                                                                "binary_placement": "Right",
	                                                                "children": [{
	                                                                    "distributor_id": 31862,
	                                                                    "num_children": 16,
	                                                                    "username": "distributor.31862",
	                                                                    "full_name": "Kristy Smith Kassulke",
	                                                                    "status": "Active",
	                                                                    "product_name": "Kickstarter",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 31856,
	                                                                    "binary_placement": "Right",
	                                                                    "children": [{
	                                                                        "distributor_id": 35879,
	                                                                        "num_children": 14,
	                                                                        "username": "distributor.35879",
	                                                                        "full_name": "Dr. Raul Lynch Jr. Satterfield",
	                                                                        "status": "Active",
	                                                                        "product_name": null,
	                                                                        "category_name": null,
	                                                                        "parent_id": 31862,
	                                                                        "binary_placement": "Right",
	                                                                        "children": [{
	                                                                            "distributor_id": 36258,
	                                                                            "num_children": 13,
	                                                                            "username": "distributor.36258",
	                                                                            "full_name": "Darron Robel Koelpin",
	                                                                            "status": "Active",
	                                                                            "product_name": null,
	                                                                            "category_name": null,
	                                                                            "parent_id": 35879,
	                                                                            "binary_placement": "Right",
	                                                                            "children": [{
	                                                                                "distributor_id": 36259,
	                                                                                "num_children": 12,
	                                                                                "username": "distributor.36259",
	                                                                                "full_name": "Ronny Sporer Franecki",
	                                                                                "status": "Active",
	                                                                                "product_name": "Kickstarter",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 36258,
	                                                                                "binary_placement": "Right",
	                                                                                "children": [{
	                                                                                    "distributor_id": 36263,
	                                                                                    "num_children": 0,
	                                                                                    "username": "distributor.36263",
	                                                                                    "full_name": "Mrs. Jada Robel II Becker",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Kickstarter",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 36259,
	                                                                                    "binary_placement": "Left",
	                                                                                    "parent_username": "distributor.36259"
	                                                                                }, {
	                                                                                    "distributor_id": 36264,
	                                                                                    "num_children": 10,
	                                                                                    "username": "distributor.36264",
	                                                                                    "full_name": "Casimer Mueller Cummerata",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Kickstarter",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 36259,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.36259"
	                                                                                }],
	                                                                                "parent_username": "distributor.36258"
	                                                                            }],
	                                                                            "parent_username": "distributor.35879"
	                                                                        }],
	                                                                        "parent_username": "distributor.31862"
	                                                                    }, {
	                                                                        "distributor_id": 35878,
	                                                                        "num_children": 0,
	                                                                        "username": "distributor.35878",
	                                                                        "full_name": "Prof. Brandon Prosacco Koepp",
	                                                                        "status": "Active",
	                                                                        "product_name": null,
	                                                                        "category_name": null,
	                                                                        "parent_id": 31862,
	                                                                        "binary_placement": "Left",
	                                                                        "parent_username": "distributor.31862"
	                                                                    }],
	                                                                    "parent_username": "distributor.31856"
	                                                                }],
	                                                                "parent_username": "distributor.31850"
	                                                            }, {
	                                                                "distributor_id": 31855,
	                                                                "num_children": 12,
	                                                                "username": "distributor.31855",
	                                                                "full_name": "Prof. Kiel McKenzie Stoltenberg",
	                                                                "status": "Active",
	                                                                "product_name": null,
	                                                                "category_name": null,
	                                                                "parent_id": 31850,
	                                                                "binary_placement": "Left",
	                                                                "children": [{
	                                                                    "distributor_id": 31860,
	                                                                    "num_children": 11,
	                                                                    "username": "distributor.31860",
	                                                                    "full_name": "Dr. Hudson Bradtke Bruen",
	                                                                    "status": "Active",
	                                                                    "product_name": "Kickstarter",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 31855,
	                                                                    "binary_placement": "Left",
	                                                                    "children": [{
	                                                                        "distributor_id": 36028,
	                                                                        "num_children": 0,
	                                                                        "username": "distributor.36028",
	                                                                        "full_name": "Mr. Barry Okuneva Lubowitz",
	                                                                        "status": "Active",
	                                                                        "product_name": null,
	                                                                        "category_name": null,
	                                                                        "parent_id": 31860,
	                                                                        "binary_placement": "Right",
	                                                                        "parent_username": "distributor.31860"
	                                                                    }, {
	                                                                        "distributor_id": 36027,
	                                                                        "num_children": 9,
	                                                                        "username": "distributor.36027",
	                                                                        "full_name": "Leonardo Bruen Donnelly",
	                                                                        "status": "Active",
	                                                                        "product_name": null,
	                                                                        "category_name": null,
	                                                                        "parent_id": 31860,
	                                                                        "binary_placement": "Left",
	                                                                        "children": [{
	                                                                            "distributor_id": 36029,
	                                                                            "num_children": 8,
	                                                                            "username": "distributor.36029",
	                                                                            "full_name": "Eleazar Gulgowski Stroman",
	                                                                            "status": "Active",
	                                                                            "product_name": "Kickstarter",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 36027,
	                                                                            "binary_placement": "Left",
	                                                                            "children": [{
	                                                                                "distributor_id": 36030,
	                                                                                "num_children": 6,
	                                                                                "username": "distributor.36030",
	                                                                                "full_name": "Dr. Lenny Keeling Larkin",
	                                                                                "status": "Active",
	                                                                                "product_name": null,
	                                                                                "category_name": null,
	                                                                                "parent_id": 36029,
	                                                                                "binary_placement": "Left",
	                                                                                "children": [{
	                                                                                    "distributor_id": 136827,
	                                                                                    "num_children": 5,
	                                                                                    "username": "distributor.136827",
	                                                                                    "full_name": "Alisha Herzog Runolfsson",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Kickstarter",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 36030,
	                                                                                    "binary_placement": "Left",
	                                                                                    "parent_username": "distributor.36030"
	                                                                                }],
	                                                                                "parent_username": "distributor.36029"
	                                                                            }, {
	                                                                                "distributor_id": 36031,
	                                                                                "num_children": 0,
	                                                                                "username": "distributor.36031",
	                                                                                "full_name": "Bella Cruickshank Quitzon",
	                                                                                "status": "Active",
	                                                                                "product_name": null,
	                                                                                "category_name": null,
	                                                                                "parent_id": 36029,
	                                                                                "binary_placement": "Right",
	                                                                                "parent_username": "distributor.36029"
	                                                                            }],
	                                                                            "parent_username": "distributor.36027"
	                                                                        }],
	                                                                        "parent_username": "distributor.31860"
	                                                                    }],
	                                                                    "parent_username": "distributor.31855"
	                                                                }],
	                                                                "parent_username": "distributor.31850"
	                                                            }],
	                                                            "parent_username": "distributor.31332"
	                                                        }],
	                                                        "parent_username": "distributor.29840"
	                                                    }, {
	                                                        "distributor_id": 31333,
	                                                        "num_children": 47,
	                                                        "username": "distributor.31333",
	                                                        "full_name": "Fredrick Ondricka Lemke",
	                                                        "status": "Active",
	                                                        "product_name": null,
	                                                        "category_name": null,
	                                                        "parent_id": 29840,
	                                                        "binary_placement": "Right",
	                                                        "children": [{
	                                                            "distributor_id": 31851,
	                                                            "num_children": 46,
	                                                            "username": "distributor.31851",
	                                                            "full_name": "Cortney Stehr Medhurst",
	                                                            "status": "Active",
	                                                            "product_name": "Kickstarter",
	                                                            "category_name": "Bitcoin",
	                                                            "parent_id": 31333,
	                                                            "binary_placement": "Right",
	                                                            "children": [{
	                                                                "distributor_id": 34213,
	                                                                "num_children": 41,
	                                                                "username": "distributor.34213",
	                                                                "full_name": "Fermin Friesen Lakin",
	                                                                "status": "Active",
	                                                                "product_name": "Kickstarter",
	                                                                "category_name": "Bitcoin",
	                                                                "parent_id": 31851,
	                                                                "binary_placement": "Right",
	                                                                "children": [{
	                                                                    "distributor_id": 35010,
	                                                                    "num_children": 40,
	                                                                    "username": "distributor.35010",
	                                                                    "full_name": "Ms. Eve Shields Huel",
	                                                                    "status": "Active",
	                                                                    "product_name": null,
	                                                                    "category_name": null,
	                                                                    "parent_id": 34213,
	                                                                    "binary_placement": "Right",
	                                                                    "children": [{
	                                                                        "distributor_id": 36256,
	                                                                        "num_children": 38,
	                                                                        "username": "distributor.36256",
	                                                                        "full_name": "Elmore Gottlieb Turcotte",
	                                                                        "status": "Active",
	                                                                        "product_name": null,
	                                                                        "category_name": null,
	                                                                        "parent_id": 35010,
	                                                                        "binary_placement": "Right",
	                                                                        "children": [{
	                                                                            "distributor_id": 36257,
	                                                                            "num_children": 37,
	                                                                            "username": "distributor.36257",
	                                                                            "full_name": "Miss Antonietta Waelchi Streich",
	                                                                            "status": "Active",
	                                                                            "product_name": null,
	                                                                            "category_name": null,
	                                                                            "parent_id": 36256,
	                                                                            "binary_placement": "Right",
	                                                                            "children": [{
	                                                                                "distributor_id": 36283,
	                                                                                "num_children": 35,
	                                                                                "username": "distributor.36283",
	                                                                                "full_name": "Rey Dickens Schoen",
	                                                                                "status": "Active",
	                                                                                "product_name": null,
	                                                                                "category_name": null,
	                                                                                "parent_id": 36257,
	                                                                                "binary_placement": "Right",
	                                                                                "children": [{
	                                                                                    "distributor_id": 36285,
	                                                                                    "num_children": 34,
	                                                                                    "username": "distributor.36285",
	                                                                                    "full_name": "Dr. Neil Berge DDS Kertzmann",
	                                                                                    "status": "Active",
	                                                                                    "product_name": null,
	                                                                                    "category_name": null,
	                                                                                    "parent_id": 36283,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.36283"
	                                                                                }],
	                                                                                "parent_username": "distributor.36257"
	                                                                            }, {
	                                                                                "distributor_id": 36282,
	                                                                                "num_children": 0,
	                                                                                "username": "distributor.36282",
	                                                                                "full_name": "Romaine Bernier Herman",
	                                                                                "status": "Active",
	                                                                                "product_name": null,
	                                                                                "category_name": null,
	                                                                                "parent_id": 36257,
	                                                                                "binary_placement": "Left",
	                                                                                "parent_username": "distributor.36257"
	                                                                            }],
	                                                                            "parent_username": "distributor.36256"
	                                                                        }],
	                                                                        "parent_username": "distributor.35010"
	                                                                    }, {
	                                                                        "distributor_id": 36255,
	                                                                        "num_children": 0,
	                                                                        "username": "distributor.36255",
	                                                                        "full_name": "Mr. Lowell Kunde II Huel",
	                                                                        "status": "Active",
	                                                                        "product_name": null,
	                                                                        "category_name": null,
	                                                                        "parent_id": 35010,
	                                                                        "binary_placement": "Left",
	                                                                        "parent_username": "distributor.35010"
	                                                                    }],
	                                                                    "parent_username": "distributor.34213"
	                                                                }],
	                                                                "parent_username": "distributor.31851"
	                                                            }, {
	                                                                "distributor_id": 34212,
	                                                                "num_children": 3,
	                                                                "username": "distributor.34212",
	                                                                "full_name": "Eve Macejkovic Marks",
	                                                                "status": "Active",
	                                                                "product_name": "Kickstarter",
	                                                                "category_name": "Bitcoin",
	                                                                "parent_id": 31851,
	                                                                "binary_placement": "Left",
	                                                                "children": [{
	                                                                    "distributor_id": 35008,
	                                                                    "num_children": 2,
	                                                                    "username": "distributor.35008",
	                                                                    "full_name": "Ulices Tremblay Wolff",
	                                                                    "status": "Active",
	                                                                    "product_name": "Kickstarter",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 34212,
	                                                                    "binary_placement": "Left",
	                                                                    "children": [{
	                                                                        "distributor_id": 53571,
	                                                                        "num_children": 0,
	                                                                        "username": "distributor.53571",
	                                                                        "full_name": "Miss Alvera Willms Mitchell",
	                                                                        "status": "Active",
	                                                                        "product_name": "Kickstarter",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 35008,
	                                                                        "binary_placement": "Left",
	                                                                        "parent_username": "distributor.35008"
	                                                                    }, {
	                                                                        "distributor_id": 53572,
	                                                                        "num_children": 0,
	                                                                        "username": "distributor.53572",
	                                                                        "full_name": "Mr. Esteban Kuvalis III Rodriguez",
	                                                                        "status": "Active",
	                                                                        "product_name": "Kickstarter",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 35008,
	                                                                        "binary_placement": "Right",
	                                                                        "parent_username": "distributor.35008"
	                                                                    }],
	                                                                    "parent_username": "distributor.34212"
	                                                                }],
	                                                                "parent_username": "distributor.31851"
	                                                            }],
	                                                            "parent_username": "distributor.31333"
	                                                        }],
	                                                        "parent_username": "distributor.29840"
	                                                    }],
	                                                    "parent_username": "distributor.29837"
	                                                }],
	                                                "parent_username": "distributor.29829"
	                                            }, {
	                                                "distributor_id": 29836,
	                                                "num_children": 475,
	                                                "username": "distributor.29836",
	                                                "full_name": "Bella Friesen Collier",
	                                                "status": "Active",
	                                                "product_name": "Kickstarter",
	                                                "category_name": "Bitcoin",
	                                                "parent_id": 29829,
	                                                "binary_placement": "Left",
	                                                "children": [{
	                                                    "distributor_id": 29839,
	                                                    "num_children": 0,
	                                                    "username": "distributor.29839",
	                                                    "full_name": "Macie McCullough Stokes",
	                                                    "status": "Active",
	                                                    "product_name": "Kickstarter",
	                                                    "category_name": "Bitcoin",
	                                                    "parent_id": 29836,
	                                                    "binary_placement": "Right",
	                                                    "parent_username": "distributor.29836"
	                                                }, {
	                                                    "distributor_id": 29838,
	                                                    "num_children": 473,
	                                                    "username": "distributor.29838",
	                                                    "full_name": "Carrie Kassulke V Hilll",
	                                                    "status": "Active",
	                                                    "product_name": "Strong Miner",
	                                                    "category_name": "Bitcoin",
	                                                    "parent_id": 29836,
	                                                    "binary_placement": "Left",
	                                                    "children": [{
	                                                        "distributor_id": 31848,
	                                                        "num_children": 426,
	                                                        "username": "distributor.31848",
	                                                        "full_name": "Gabe Satterfield Waelchi",
	                                                        "status": "Active",
	                                                        "product_name": "Light Miner",
	                                                        "category_name": "Bitcoin",
	                                                        "parent_id": 29838,
	                                                        "binary_placement": "Left",
	                                                        "children": [{
	                                                            "distributor_id": 31858,
	                                                            "num_children": 423,
	                                                            "username": "distributor.31858",
	                                                            "full_name": "Mike Runolfsson Rolfson",
	                                                            "status": "Active",
	                                                            "product_name": "Mid Miner",
	                                                            "category_name": "Bitcoin",
	                                                            "parent_id": 31848,
	                                                            "binary_placement": "Left",
	                                                            "children": [{
	                                                                "distributor_id": 31868,
	                                                                "num_children": 56,
	                                                                "username": "distributor.31868",
	                                                                "full_name": "Brandyn Kohler Schuster",
	                                                                "status": "Active",
	                                                                "product_name": "Mid Miner",
	                                                                "category_name": "Bitcoin",
	                                                                "parent_id": 31858,
	                                                                "binary_placement": "Right",
	                                                                "children": [{
	                                                                    "distributor_id": 36174,
	                                                                    "num_children": 0,
	                                                                    "username": "distributor.36174",
	                                                                    "full_name": "Mr. Reese Kiehn PhD Orn",
	                                                                    "status": "Active",
	                                                                    "product_name": "Kickstarter",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 31868,
	                                                                    "binary_placement": "Right",
	                                                                    "parent_username": "distributor.31868"
	                                                                }, {
	                                                                    "distributor_id": 36173,
	                                                                    "num_children": 54,
	                                                                    "username": "distributor.36173",
	                                                                    "full_name": "Prof. Selina Kuhlman DVM Schuppe",
	                                                                    "status": "Active",
	                                                                    "product_name": "Kickstarter",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 31868,
	                                                                    "binary_placement": "Left",
	                                                                    "children": [{
	                                                                        "distributor_id": 127669,
	                                                                        "num_children": 0,
	                                                                        "username": "distributor.127669",
	                                                                        "full_name": "Mortimer Howell Littel",
	                                                                        "status": "Active",
	                                                                        "product_name": null,
	                                                                        "category_name": null,
	                                                                        "parent_id": 36173,
	                                                                        "binary_placement": "Right",
	                                                                        "parent_username": "distributor.36173"
	                                                                    }, {
	                                                                        "distributor_id": 45344,
	                                                                        "num_children": 52,
	                                                                        "username": "distributor.45344",
	                                                                        "full_name": "Perry Halvorson Sauer",
	                                                                        "status": "Active",
	                                                                        "product_name": "Strong Miner",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 36173,
	                                                                        "binary_placement": "Left",
	                                                                        "children": [{
	                                                                            "distributor_id": 45378,
	                                                                            "num_children": 40,
	                                                                            "username": "distributor.45378",
	                                                                            "full_name": "Erling Haag Wintheiser",
	                                                                            "status": "Active",
	                                                                            "product_name": "Strong Miner",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 45344,
	                                                                            "binary_placement": "Left",
	                                                                            "children": [{
	                                                                                "distributor_id": 115552,
	                                                                                "num_children": 1,
	                                                                                "username": "distributor.115552",
	                                                                                "full_name": "Bridie Prohaska Labadie",
	                                                                                "status": "Active",
	                                                                                "product_name": null,
	                                                                                "category_name": null,
	                                                                                "parent_id": 45378,
	                                                                                "binary_placement": "Right",
	                                                                                "children": [{
	                                                                                    "distributor_id": 119658,
	                                                                                    "num_children": 0,
	                                                                                    "username": "distributor.119658",
	                                                                                    "full_name": "Cindy Kohler Fritsch",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Pro Miner",
	                                                                                    "category_name": "Dash",
	                                                                                    "parent_id": 115552,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.115552"
	                                                                                }],
	                                                                                "parent_username": "distributor.45378"
	                                                                            }, {
	                                                                                "distributor_id": 45386,
	                                                                                "num_children": 37,
	                                                                                "username": "distributor.45386",
	                                                                                "full_name": "Dr. Cullen Hodkiewicz DDS Stehr",
	                                                                                "status": "Active",
	                                                                                "product_name": "Mid Miner",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 45378,
	                                                                                "binary_placement": "Left",
	                                                                                "children": [{
	                                                                                    "distributor_id": 52241,
	                                                                                    "num_children": 0,
	                                                                                    "username": "distributor.52241",
	                                                                                    "full_name": "Prof. Diana O'Conner PhD Mohr",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Mid Miner",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 45386,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.45386"
	                                                                                }, {
	                                                                                    "distributor_id": 52240,
	                                                                                    "num_children": 35,
	                                                                                    "username": "distributor.52240",
	                                                                                    "full_name": "Dorcas Wiza Hoppe",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Mid Miner",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 45386,
	                                                                                    "binary_placement": "Left",
	                                                                                    "parent_username": "distributor.45386"
	                                                                                }],
	                                                                                "parent_username": "distributor.45378"
	                                                                            }],
	                                                                            "parent_username": "distributor.45344"
	                                                                        }, {
	                                                                            "distributor_id": 45379,
	                                                                            "num_children": 10,
	                                                                            "username": "distributor.45379",
	                                                                            "full_name": "Hailee Shields Bechtelar",
	                                                                            "status": "Active",
	                                                                            "product_name": "Strong Miner",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 45344,
	                                                                            "binary_placement": "Right",
	                                                                            "children": [{
	                                                                                "distributor_id": 67948,
	                                                                                "num_children": 2,
	                                                                                "username": "distributor.67948",
	                                                                                "full_name": "Prof. Paolo Bartell Pollich",
	                                                                                "status": "Active",
	                                                                                "product_name": "Master Miner",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 45379,
	                                                                                "binary_placement": "Left",
	                                                                                "children": [{
	                                                                                    "distributor_id": 68450,
	                                                                                    "num_children": 0,
	                                                                                    "username": "distributor.68450",
	                                                                                    "full_name": "Maci Bernhard Gulgowski",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Master Miner",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 67948,
	                                                                                    "binary_placement": "Left",
	                                                                                    "parent_username": "distributor.67948"
	                                                                                }, {
	                                                                                    "distributor_id": 73484,
	                                                                                    "num_children": 0,
	                                                                                    "username": "distributor.73484",
	                                                                                    "full_name": "Aubrey Brown Grady",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Master Miner",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 67948,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.67948"
	                                                                                }],
	                                                                                "parent_username": "distributor.45379"
	                                                                            }, {
	                                                                                "distributor_id": 110112,
	                                                                                "num_children": 6,
	                                                                                "username": "distributor.110112",
	                                                                                "full_name": "Mr. Austin Cartwright V Sauer",
	                                                                                "status": "Active",
	                                                                                "product_name": null,
	                                                                                "category_name": null,
	                                                                                "parent_id": 45379,
	                                                                                "binary_placement": "Right",
	                                                                                "children": [{
	                                                                                    "distributor_id": 115885,
	                                                                                    "num_children": 5,
	                                                                                    "username": "distributor.115885",
	                                                                                    "full_name": "Pasquale Murazik Vandervort",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Strong Miner",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 110112,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.110112"
	                                                                                }],
	                                                                                "parent_username": "distributor.45379"
	                                                                            }],
	                                                                            "parent_username": "distributor.45344"
	                                                                        }],
	                                                                        "parent_username": "distributor.36173"
	                                                                    }],
	                                                                    "parent_username": "distributor.31868"
	                                                                }],
	                                                                "parent_username": "distributor.31858"
	                                                            }, {
	                                                                "distributor_id": 31867,
	                                                                "num_children": 365,
	                                                                "username": "distributor.31867",
	                                                                "full_name": "Ms. Claire Ullrich Effertz",
	                                                                "status": "Active",
	                                                                "product_name": "Kickstarter",
	                                                                "category_name": "Bitcoin",
	                                                                "parent_id": 31858,
	                                                                "binary_placement": "Left",
	                                                                "children": [{
	                                                                    "distributor_id": 33232,
	                                                                    "num_children": 1,
	                                                                    "username": "distributor.33232",
	                                                                    "full_name": "Vicenta Renner Homenick",
	                                                                    "status": "Active",
	                                                                    "product_name": "Kickstarter",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 31867,
	                                                                    "binary_placement": "Right",
	                                                                    "children": [{
	                                                                        "distributor_id": 68992,
	                                                                        "num_children": 0,
	                                                                        "username": "distributor.68992",
	                                                                        "full_name": "Dr. Jane Schamberger III O'Reilly",
	                                                                        "status": "Active",
	                                                                        "product_name": "Strong Miner",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 33232,
	                                                                        "binary_placement": "Right",
	                                                                        "parent_username": "distributor.33232"
	                                                                    }],
	                                                                    "parent_username": "distributor.31867"
	                                                                }, {
	                                                                    "distributor_id": 33231,
	                                                                    "num_children": 362,
	                                                                    "username": "distributor.33231",
	                                                                    "full_name": "Juliet Rohan Gutmann",
	                                                                    "status": "Active",
	                                                                    "product_name": "Kickstarter",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 31867,
	                                                                    "binary_placement": "Left",
	                                                                    "children": [{
	                                                                        "distributor_id": 33722,
	                                                                        "num_children": 361,
	                                                                        "username": "distributor.33722",
	                                                                        "full_name": "Dr. Kenna Collins PhD Schmeler",
	                                                                        "status": "Active",
	                                                                        "product_name": "Kickstarter",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 33231,
	                                                                        "binary_placement": "Left",
	                                                                        "children": [{
	                                                                            "distributor_id": 33878,
	                                                                            "num_children": 0,
	                                                                            "username": "distributor.33878",
	                                                                            "full_name": "Unique Kertzmann Robel",
	                                                                            "status": "Active",
	                                                                            "product_name": "Kickstarter",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 33722,
	                                                                            "binary_placement": "Right",
	                                                                            "parent_username": "distributor.33722"
	                                                                        }, {
	                                                                            "distributor_id": 33877,
	                                                                            "num_children": 359,
	                                                                            "username": "distributor.33877",
	                                                                            "full_name": "Ethan Quigley II Jenkins",
	                                                                            "status": "Active",
	                                                                            "product_name": "Kickstarter",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 33722,
	                                                                            "binary_placement": "Left",
	                                                                            "children": [{
	                                                                                "distributor_id": 33889,
	                                                                                "num_children": 358,
	                                                                                "username": "distributor.33889",
	                                                                                "full_name": "Hosea Kerluke Crona",
	                                                                                "status": "Active",
	                                                                                "product_name": "Pro Miner",
	                                                                                "category_name": "Bitcoin",
	                                                                                "parent_id": 33877,
	                                                                                "binary_placement": "Left",
	                                                                                "children": [{
	                                                                                    "distributor_id": 33897,
	                                                                                    "num_children": 91,
	                                                                                    "username": "distributor.33897",
	                                                                                    "full_name": "Dr. Roger Reynolds Weimann",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Kickstarter",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 33889,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.33889"
	                                                                                }, {
	                                                                                    "distributor_id": 33896,
	                                                                                    "num_children": 265,
	                                                                                    "username": "distributor.33896",
	                                                                                    "full_name": "Lilian Jones Waelchi",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Light Miner",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 33889,
	                                                                                    "binary_placement": "Left",
	                                                                                    "parent_username": "distributor.33889"
	                                                                                }],
	                                                                                "parent_username": "distributor.33877"
	                                                                            }],
	                                                                            "parent_username": "distributor.33722"
	                                                                        }],
	                                                                        "parent_username": "distributor.33231"
	                                                                    }],
	                                                                    "parent_username": "distributor.31867"
	                                                                }],
	                                                                "parent_username": "distributor.31858"
	                                                            }],
	                                                            "parent_username": "distributor.31848"
	                                                        }, {
	                                                            "distributor_id": 31859,
	                                                            "num_children": 1,
	                                                            "username": "distributor.31859",
	                                                            "full_name": "Faustino Hoppe III Yundt",
	                                                            "status": "Active",
	                                                            "product_name": "Kickstarter",
	                                                            "category_name": "Bitcoin",
	                                                            "parent_id": 31848,
	                                                            "binary_placement": "Right",
	                                                            "children": [{
	                                                                "distributor_id": 31869,
	                                                                "num_children": 0,
	                                                                "username": "distributor.31869",
	                                                                "full_name": "Lucienne Zieme Smith",
	                                                                "status": "Active",
	                                                                "product_name": null,
	                                                                "category_name": null,
	                                                                "parent_id": 31859,
	                                                                "binary_placement": "Right",
	                                                                "parent_username": "distributor.31859"
	                                                            }],
	                                                            "parent_username": "distributor.31848"
	                                                        }],
	                                                        "parent_username": "distributor.29838"
	                                                    }, {
	                                                        "distributor_id": 31849,
	                                                        "num_children": 45,
	                                                        "username": "distributor.31849",
	                                                        "full_name": "Nya Farrell Swift",
	                                                        "status": "Active",
	                                                        "product_name": "Kickstarter",
	                                                        "category_name": "Bitcoin",
	                                                        "parent_id": 29838,
	                                                        "binary_placement": "Right",
	                                                        "children": [{
	                                                            "distributor_id": 32042,
	                                                            "num_children": 25,
	                                                            "username": "distributor.32042",
	                                                            "full_name": "Miss Luisa Kshlerin MD Barrows",
	                                                            "status": "Active",
	                                                            "product_name": "Mid Miner",
	                                                            "category_name": "Bitcoin",
	                                                            "parent_id": 31849,
	                                                            "binary_placement": "Right",
	                                                            "children": [{
	                                                                "distributor_id": 55370,
	                                                                "num_children": 6,
	                                                                "username": "distributor.55370",
	                                                                "full_name": "Selmer Koelpin Stroman",
	                                                                "status": "Active",
	                                                                "product_name": "Mid Miner",
	                                                                "category_name": "Bitcoin",
	                                                                "parent_id": 32042,
	                                                                "binary_placement": "Left",
	                                                                "children": [{
	                                                                    "distributor_id": 55375,
	                                                                    "num_children": 5,
	                                                                    "username": "distributor.55375",
	                                                                    "full_name": "Ms. Alison Schimmel Adams",
	                                                                    "status": "Active",
	                                                                    "product_name": "Kickstarter",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 55370,
	                                                                    "binary_placement": "Left",
	                                                                    "children": [{
	                                                                        "distributor_id": 55396,
	                                                                        "num_children": 4,
	                                                                        "username": "distributor.55396",
	                                                                        "full_name": "Prof. Trevor Zboncak Kuvalis",
	                                                                        "status": "Active",
	                                                                        "product_name": "Light Miner",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 55375,
	                                                                        "binary_placement": "Left",
	                                                                        "children": [{
	                                                                            "distributor_id": 56250,
	                                                                            "num_children": 0,
	                                                                            "username": "distributor.56250",
	                                                                            "full_name": "Eleanore Windler IV Kunde",
	                                                                            "status": "Active",
	                                                                            "product_name": null,
	                                                                            "category_name": null,
	                                                                            "parent_id": 55396,
	                                                                            "binary_placement": "Right",
	                                                                            "parent_username": "distributor.55396"
	                                                                        }, {
	                                                                            "distributor_id": 56249,
	                                                                            "num_children": 2,
	                                                                            "username": "distributor.56249",
	                                                                            "full_name": "Mrs. Jermaine McClure Dach",
	                                                                            "status": "Active",
	                                                                            "product_name": null,
	                                                                            "category_name": null,
	                                                                            "parent_id": 55396,
	                                                                            "binary_placement": "Left",
	                                                                            "children": [{
	                                                                                "distributor_id": 56298,
	                                                                                "num_children": 1,
	                                                                                "username": "distributor.56298",
	                                                                                "full_name": "Mrs. Liana Schamberger II Balistreri",
	                                                                                "status": "Active",
	                                                                                "product_name": null,
	                                                                                "category_name": null,
	                                                                                "parent_id": 56249,
	                                                                                "binary_placement": "Left",
	                                                                                "children": [{
	                                                                                    "distributor_id": 78979,
	                                                                                    "num_children": 0,
	                                                                                    "username": "distributor.78979",
	                                                                                    "full_name": "Prof. Kaitlyn Bradtke III Schaefer",
	                                                                                    "status": "Active",
	                                                                                    "product_name": null,
	                                                                                    "category_name": null,
	                                                                                    "parent_id": 56298,
	                                                                                    "binary_placement": "Left",
	                                                                                    "parent_username": "distributor.56298"
	                                                                                }],
	                                                                                "parent_username": "distributor.56249"
	                                                                            }],
	                                                                            "parent_username": "distributor.55396"
	                                                                        }],
	                                                                        "parent_username": "distributor.55375"
	                                                                    }],
	                                                                    "parent_username": "distributor.55370"
	                                                                }],
	                                                                "parent_username": "distributor.32042"
	                                                            }, {
	                                                                "distributor_id": 55371,
	                                                                "num_children": 17,
	                                                                "username": "distributor.55371",
	                                                                "full_name": "Leta Treutel O'Reilly",
	                                                                "status": "Active",
	                                                                "product_name": "Mid Miner",
	                                                                "category_name": "Bitcoin",
	                                                                "parent_id": 32042,
	                                                                "binary_placement": "Right",
	                                                                "children": [{
	                                                                    "distributor_id": 75779,
	                                                                    "num_children": 16,
	                                                                    "username": "distributor.75779",
	                                                                    "full_name": "Caterina Will I Gerlach",
	                                                                    "status": "Active",
	                                                                    "product_name": "Kickstarter",
	                                                                    "category_name": "Bitcoin",
	                                                                    "parent_id": 55371,
	                                                                    "binary_placement": "Right",
	                                                                    "children": [{
	                                                                        "distributor_id": 97685,
	                                                                        "num_children": 14,
	                                                                        "username": "distributor.97685",
	                                                                        "full_name": "Quinn Vandervort Rempel",
	                                                                        "status": "Active",
	                                                                        "product_name": "Kickstarter",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 75779,
	                                                                        "binary_placement": "Right",
	                                                                        "children": [{
	                                                                            "distributor_id": 97708,
	                                                                            "num_children": 13,
	                                                                            "username": "distributor.97708",
	                                                                            "full_name": "Regan Farrell Dach",
	                                                                            "status": "Active",
	                                                                            "product_name": "Kickstarter",
	                                                                            "category_name": "Bitcoin",
	                                                                            "parent_id": 97685,
	                                                                            "binary_placement": "Right",
	                                                                            "children": [{
	                                                                                "distributor_id": 98101,
	                                                                                "num_children": 6,
	                                                                                "username": "distributor.98101",
	                                                                                "full_name": "Ahmed Roberts II Huels",
	                                                                                "status": "Active",
	                                                                                "product_name": null,
	                                                                                "category_name": null,
	                                                                                "parent_id": 97708,
	                                                                                "binary_placement": "Right",
	                                                                                "children": [{
	                                                                                    "distributor_id": 100034,
	                                                                                    "num_children": 5,
	                                                                                    "username": "distributor.100034",
	                                                                                    "full_name": "Prof. Leon Kassulke Hirthe",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Strong Miner",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 98101,
	                                                                                    "binary_placement": "Right",
	                                                                                    "parent_username": "distributor.98101"
	                                                                                }],
	                                                                                "parent_username": "distributor.97708"
	                                                                            }, {
	                                                                                "distributor_id": 98119,
	                                                                                "num_children": 5,
	                                                                                "username": "distributor.98119",
	                                                                                "full_name": "Elias Hauck II Bradtke",
	                                                                                "status": "Active",
	                                                                                "product_name": null,
	                                                                                "category_name": null,
	                                                                                "parent_id": 97708,
	                                                                                "binary_placement": "Left",
	                                                                                "children": [{
	                                                                                    "distributor_id": 100042,
	                                                                                    "num_children": 4,
	                                                                                    "username": "distributor.100042",
	                                                                                    "full_name": "Rogers Reinger Harris",
	                                                                                    "status": "Active",
	                                                                                    "product_name": "Light Miner",
	                                                                                    "category_name": "Bitcoin",
	                                                                                    "parent_id": 98119,
	                                                                                    "binary_placement": "Left",
	                                                                                    "parent_username": "distributor.98119"
	                                                                                }],
	                                                                                "parent_username": "distributor.97708"
	                                                                            }],
	                                                                            "parent_username": "distributor.97685"
	                                                                        }],
	                                                                        "parent_username": "distributor.75779"
	                                                                    }, {
	                                                                        "distributor_id": 108940,
	                                                                        "num_children": 0,
	                                                                        "username": "distributor.108940",
	                                                                        "full_name": "Dr. Jermain Cremin PhD Cole",
	                                                                        "status": "Active",
	                                                                        "product_name": "Kickstarter",
	                                                                        "category_name": "Bitcoin",
	                                                                        "parent_id": 75779,
	                                                                        "binary_placement": "Left",
	                                                                        "parent_username": "distributor.75779"
	                                                                    }],
	                                                                    "parent_username": "distributor.55371"
	                                                                }],
	                                                                "parent_username": "distributor.32042"
	                                                            }],
	                                                            "parent_username": "distributor.31849"
	                                                        }, {
	                                                            "distributor_id": 32041,
	                                                            "num_children": 18,
	                                                            "username": "distributor.32041",
	                                                            "full_name": "Pietro Yundt V Lubowitz",
	                                                            "status": "Active",
	                                                            "product_name": "Light Miner",
	                                                            "category_name": "Bitcoin",
	                                                            "parent_id": 31849,
	                                                            "binary_placement": "Left",
	                                                            "children": [{
	                                                                "distributor_id": 39052,
	                                                                "num_children": 4,
	                                                                "username": "distributor.39052",
	                                                                "full_name": "Lonie Legros Grant",
	                                                                "status": "Active",
	                                                                "product_name": null,
	                                                                "category_name": null,
	                                                                "parent_id": 32041,
	                                                                "binary_placement": "Left",
	                                                                "children": [{
	                                                                    "distributor_id": 39473,
	                                                                    "num_children": 2,
	                                                                    "username": "distributor.39473",
	                                                                    "full_name": "Virginia Gusikowski Lemke",
	                                                                    "status": "Active",
	                                                                    "product_name": null,
	                                                                    "category_name": null,
	                                                                    "parent_id": 39052,
	                                                                    "binary_placement": "Left",
	                                                                    "children": [{
	                                                                        "distributor_id": 39481,
	                                                                        "num_children": 1,
	                                                                        "username": "distributor.39481",
	                                                                        "full_name": "Darrick Stanton Funk",
	                                                                        "status": "Active",
	                                                                        "product_name": null,
	                                                                        "category_name": null,
	                                                                        "parent_id": 39473,
	                                                                        "binary_placement": "Left",
	                                                                        "children": [{
	                                                                            "distributor_id": 56028,
	                                                                            "num_children": 0,
	                                                                            "username": "distributor.56028",
	                                                                            "full_name": "Earnest Nicolas Mosciski",
	                                                                            "status": "Active",
	                                                                            "product_name": null,
	                                                                            "category_name": null,
	                                                                            "parent_id": 39481,
	                                                                            "binary_placement": "Left",
	                                                                            "parent_username": "distributor.39481"
	                                                                        }],
	                                                                        "parent_username": "distributor.39473"
	                                                                    }],
	                                                                    "parent_username": "distributor.39052"
	                                                                }, {
	                                                                    "distributor_id": 39474,
	                                                                    "num_children": 0,
	                                                                    "username": "distributor.39474",
	                                                                    "full_name": "Karina Thompson Sr. Konopelski",
	                                                                    "status": "Active",
	                                                                    "product_name": null,
	                                                                    "category_name": null,
	                                                                    "parent_id": 39052,
	                                                                    "binary_placement": "Right",
	                                                                    "parent_username": "distributor.39052"
	                                                                }],
	                                                                "parent_username": "distributor.32041"
	                                                            }, {
	                                                                "distributor_id": 39053,
	                                                                "num_children": 12,
	                                                                "username": "distributor.39053",
	                                                                "full_name": "Dr. Judy Jerde Johnston",
	                                                                "status": "Active",
	                                                                "product_name": null,
	                                                                "category_name": null,
	                                                                "parent_id": 32041,
	                                                                "binary_placement": "Right",
	                                                                "children": [{
	                                                                    "distributor_id": 39478,
	                                                                    "num_children": 11,
	                                                                    "username": "distributor.39478",
	                                                                    "full_name": "Dr. Axel Connelly II Sporer",
	                                                                    "status": "Active",
	                                                                    "product_name": null,
	                                                                    "category_name": null,
	                                                                    "parent_id": 39053,
	                                                                    "binary_placement": "Left",
	                                                                    "children": [{
	                                                                        "distributor_id": 56011,
	                                                                        "num_children": 10,
	                                                                        "username": "distributor.56011",
	                                                                        "full_name": "Ashly O'Conner Rau",
	                                                                        "status": "Active",
	                                                                        "product_name": null,
	                                                                        "category_name": null,
	                                                                        "parent_id": 39478,
	                                                                        "binary_placement": "Left",
	                                                                        "children": [{
	                                                                            "distributor_id": 56211,
	                                                                            "num_children": 9,
	                                                                            "username": "distributor.56211",
	                                                                            "full_name": "Whitney Schuster Champlin",
	                                                                            "status": "Active",
	                                                                            "product_name": null,
	                                                                            "category_name": null,
	                                                                            "parent_id": 56011,
	                                                                            "binary_placement": "Left",
	                                                                            "children": [{
	                                                                                "distributor_id": 56217,
	                                                                                "num_children": 8,
	                                                                                "username": "distributor.56217",
	                                                                                "full_name": "Edmund Collins IV Walter",
	                                                                                "status": "Active",
	                                                                                "product_name": null,
	                                                                                "category_name": null,
	                                                                                "parent_id": 56211,
	                                                                                "binary_placement": "Left",
	                                                                                "children": [{
	                                                                                    "distributor_id": 56221,
	                                                                                    "num_children": 7,
	                                                                                    "username": "distributor.56221",
	                                                                                    "full_name": "Micheal Padberg Jacobs",
	                                                                                    "status": "Active",
	                                                                                    "product_name": null,
	                                                                                    "category_name": null,
	                                                                                    "parent_id": 56217,
	                                                                                    "binary_placement": "Left",
	                                                                                    "parent_username": "distributor.56217"
	                                                                                }],
	                                                                                "parent_username": "distributor.56211"
	                                                                            }],
	                                                                            "parent_username": "distributor.56011"
	                                                                        }],
	                                                                        "parent_username": "distributor.39478"
	                                                                    }],
	                                                                    "parent_username": "distributor.39053"
	                                                                }],
	                                                                "parent_username": "distributor.32041"
	                                                            }],
	                                                            "parent_username": "distributor.31849"
	                                                        }],
	                                                        "parent_username": "distributor.29838"
	                                                    }],
	                                                    "parent_username": "distributor.29836"
	                                                }],
	                                                "parent_username": "distributor.29829"
	                                            }],
	                                            "parent_username": "distributor.29825"
	                                        }],
	                                        "parent_username": "distributor.29821"
	                                    }, {
	                                        "distributor_id": 29824,
	                                        "num_children": 0,
	                                        "username": "distributor.29824",
	                                        "full_name": "Alva Wyman Sr. Veum",
	                                        "status": "Active",
	                                        "product_name": "Kickstarter",
	                                        "category_name": "Bitcoin",
	                                        "parent_id": 29821,
	                                        "binary_placement": "Left",
	                                        "parent_username": "distributor.29821"
	                                    }],
	                                    "parent_username": "distributor.28731"
	                                }, {
	                                    "distributor_id": 29820,
	                                    "num_children": 0,
	                                    "username": "distributor.29820",
	                                    "full_name": "Percival Schuster IV Paucek",
	                                    "status": "Active",
	                                    "product_name": "Kickstarter",
	                                    "category_name": "Bitcoin",
	                                    "parent_id": 28731,
	                                    "binary_placement": "Left",
	                                    "parent_username": "distributor.28731"
	                                }],
	                                "parent_username": "distributor.18217"
	                            }],
	                            "parent_username": "distributor.18202"
	                        }],
	                        "parent_username": "distributor.18194"
	                    }],
	                    "parent_username": "distributor.18190"
	                }, {
	                    "distributor_id": 18195,
	                    "num_children": 0,
	                    "username": "distributor.18195",
	                    "full_name": "Irving Spencer DVM Cartwright",
	                    "status": "Active",
	                    "product_name": "Light Miner",
	                    "category_name": "Bitcoin",
	                    "parent_id": 18190,
	                    "binary_placement": "Right",
	                    "parent_username": "distributor.18190"
	                }],
	                "parent_username": "distributor.18183"
	            }],
	            "parent_username": "distributor.16344"
	        }, {
	            "distributor_id": 18184,
	            "num_children": 9,
	            "username": "distributor.18184",
	            "full_name": "Shemar Goldner DDS D'Amore",
	            "status": "Active",
	            "product_name": "Light Miner",
	            "category_name": "Bitcoin",
	            "parent_id": 16344,
	            "binary_placement": "Right",
	            "children": [{
	                "distributor_id": 29893,
	                "num_children": 8,
	                "username": "distributor.29893",
	                "full_name": "Oliver Daugherty Rutherford",
	                "status": "Active",
	                "product_name": null,
	                "category_name": null,
	                "parent_id": 18184,
	                "binary_placement": "Right",
	                "children": [{
	                    "distributor_id": 46920,
	                    "num_children": 7,
	                    "username": "distributor.46920",
	                    "full_name": "Eladio Wolf Bogan",
	                    "status": "Active",
	                    "product_name": null,
	                    "category_name": null,
	                    "parent_id": 29893,
	                    "binary_placement": "Right",
	                    "children": [{
	                        "distributor_id": 47047,
	                        "num_children": 6,
	                        "username": "distributor.47047",
	                        "full_name": "Esmeralda Kuhic Tremblay",
	                        "status": "Active",
	                        "product_name": "Starter",
	                        "category_name": "Bitcoin",
	                        "parent_id": 46920,
	                        "binary_placement": "Right",
	                        "children": [{
	                            "distributor_id": 47549,
	                            "num_children": 2,
	                            "username": "distributor.47549",
	                            "full_name": "Miss Eldridge Flatley Kertzmann",
	                            "status": "Active",
	                            "product_name": null,
	                            "category_name": null,
	                            "parent_id": 47047,
	                            "binary_placement": "Right",
	                            "children": [{
	                                "distributor_id": 48594,
	                                "num_children": 1,
	                                "username": "distributor.48594",
	                                "full_name": "Brody Schaden Gleichner",
	                                "status": "Active",
	                                "product_name": null,
	                                "category_name": null,
	                                "parent_id": 47549,
	                                "binary_placement": "Right",
	                                "children": [{
	                                    "distributor_id": 53692,
	                                    "num_children": 0,
	                                    "username": "distributor.53692",
	                                    "full_name": "Dr. Eleonore Schimmel Maggio",
	                                    "status": "Active",
	                                    "product_name": null,
	                                    "category_name": null,
	                                    "parent_id": 48594,
	                                    "binary_placement": "Right",
	                                    "parent_username": "distributor.48594"
	                                }],
	                                "parent_username": "distributor.47549"
	                            }],
	                            "parent_username": "distributor.47047"
	                        }, {
	                            "distributor_id": 47548,
	                            "num_children": 2,
	                            "username": "distributor.47548",
	                            "full_name": "Prof. Beverly Yost III Kris",
	                            "status": "Active",
	                            "product_name": null,
	                            "category_name": null,
	                            "parent_id": 47047,
	                            "binary_placement": "Left",
	                            "children": [{
	                                "distributor_id": 49250,
	                                "num_children": 0,
	                                "username": "distributor.49250",
	                                "full_name": "Rhoda Schaefer Douglas",
	                                "status": "Active",
	                                "product_name": null,
	                                "category_name": null,
	                                "parent_id": 47548,
	                                "binary_placement": "Left",
	                                "parent_username": "distributor.47548"
	                            }, {
	                                "distributor_id": 49251,
	                                "num_children": 0,
	                                "username": "distributor.49251",
	                                "full_name": "Dr. Saul Mohr Cronin",
	                                "status": "Active",
	                                "product_name": null,
	                                "category_name": null,
	                                "parent_id": 47548,
	                                "binary_placement": "Right",
	                                "parent_username": "distributor.47548"
	                            }],
	                            "parent_username": "distributor.47047"
	                        }],
	                        "parent_username": "distributor.46920"
	                    }],
	                    "parent_username": "distributor.29893"
	                }],
	                "parent_username": "distributor.18184"
	            }],
	            "parent_username": "distributor.16344"
	        }],
	        "parent_username": "distributor.16321"
	    },
	        orgchart = new _orgchartWebcomponentsMin2.default({
	        'data': datascource,
	        'nodeTitle': 'full_name',
	        'depth': 2,
	        'nodeContent': 'product_name'
	    });
	
	    document.querySelector('#chart-container').appendChild(orgchart);
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _toConsumableArray(e) {
	  if (Array.isArray(e)) {
	    for (var t = 0, n = Array(e.length); t < e.length; t++) {
	      n[t] = e[t];
	    }return n;
	  }return Array.from(e);
	}function _classCallCheck(e, t) {
	  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	}function _possibleConstructorReturn(e, t) {
	  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof2(t)) && "function" != typeof t ? e : t;
	}function _inherits(e, t) {
	  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof2(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}Object.defineProperty(exports, "__esModule", { value: !0 });var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
	  return typeof e === "undefined" ? "undefined" : _typeof2(e);
	} : function (e) {
	  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
	},
	    _createClass = function () {
	  function e(e, t) {
	    for (var n = 0; n < t.length; n++) {
	      var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
	    }
	  }return function (t, n, i) {
	    return n && e(t.prototype, n), i && e(t, i), t;
	  };
	}(),
	    OrgChart = function (e) {
	  function t(e) {
	    _classCallCheck(this, t);var n = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));Promise.prototype.finally = function (e) {
	      var t = this.constructor;return this.then(function (n) {
	        return t.resolve(e()).then(function () {
	          return n;
	        });
	      }, function (n) {
	        return t.resolve(e()).then(function () {
	          throw n;
	        });
	      });
	    };var i = { nodeTitle: "name", nodeId: "id", toggleSiblingsResp: !1, depth: 999, chartClass: "", parentNodeSymbol: "fa-users", draggable: !1, direction: "t2b", pan: !1, zoom: !1 },
	        r = Object.assign(i, e);if (n.options = r, n.addEventListener("click", n._clickChart.bind(n)), r.pan && r.chartContainer) {
	      document.querySelector(r.chartContainer).style.overflow = "hidden", n.addEventListener("mousedown", n._onPanStart.bind(n)), n.addEventListener("touchstart", n._onPanStart.bind(n)), document.body.addEventListener("mouseup", n._onPanEnd.bind(n)), document.body.addEventListener("touchend", n._onPanEnd.bind(n));
	    }if (r.zoom && r.chartContainer) {
	      var s = document.querySelector(r.chartContainer);s.addEventListener("wheel", n._onWheeling.bind(n)), s.addEventListener("touchstart", n._onTouchStart.bind(n)), document.body.addEventListener("touchmove", n._onTouchMove.bind(n)), document.body.addEventListener("touchend", n._onTouchEnd.bind(n));
	    }return n;
	  }return _inherits(t, e), _createClass(t, [{ key: "connectedCallback", value: function value() {
	      var e = this,
	          t = this.options,
	          n = t.data;if (this.setAttribute("class", "orgchart" + ("" !== t.chartClass ? " " + t.chartClass : "") + ("t2b" !== t.direction ? " " + t.direction : "")), "object" === (void 0 === n ? "undefined" : _typeof(n))) this.buildHierarchy(this, t.ajaxURL ? n : this._attachRel(n, "00"), 0);else if ("string" == typeof n && n.startsWith("#")) this.buildHierarchy(this, this._buildJsonDS(document.querySelector(n).children[0]), 0);else {
	        var i = document.createElement("i");i.setAttribute("class", "fa fa-circle-o-notch fa-spin spinner"), this.appendChild(i), this._getJSON(n).then(function (n) {
	          e.buildHierarchy(e, t.ajaxURL ? n : e._attachRel(n, "00"), 0);
	        }).catch(function (e) {
	          console.error("failed to fetch datasource for orgchart", e);
	        }).finally(function () {
	          var t = e.querySelector(".spinner");t.parentNode.removeChild(t);
	        });
	      }
	    } }, { key: "disconnectedCallback", value: function value() {} }, { key: "attributeChangedCallback", value: function value(e, t, n) {} }, { key: "_closest", value: function value(e, t) {
	      return e && (t(e) && e !== this ? e : this._closest(e.parentNode, t));
	    } }, { key: "_siblings", value: function value(e, t) {
	      return Array.from(e.parentNode.children).filter(function (n) {
	        return n !== e && (!t || e.matches(t));
	      });
	    } }, { key: "_prevAll", value: function value(e, t) {
	      for (var n = [], i = e.previousElementSibling; i;) {
	        t && !i.matches(t) || n.push(i), i = i.previousElementSibling;
	      }return n;
	    } }, { key: "_nextAll", value: function value(e, t) {
	      for (var n = [], i = e.nextElementSibling; i;) {
	        t && !i.matches(t) || n.push(i), i = i.nextElementSibling;
	      }return n;
	    } }, { key: "_isVisible", value: function value(e) {
	      return null !== e.offsetParent;
	    } }, { key: "_addClass", value: function value(e, t) {
	      e.forEach(function (e) {
	        t.indexOf(" ") > 0 ? t.split(" ").forEach(function (t) {
	          return e.classList.add(t);
	        }) : e.classList.add(t);
	      });
	    } }, { key: "_removeClass", value: function value(e, t) {
	      e.forEach(function (e) {
	        t.indexOf(" ") > 0 ? t.split(" ").forEach(function (t) {
	          return e.classList.remove(t);
	        }) : e.classList.remove(t);
	      });
	    } }, { key: "_css", value: function value(e, t, n) {
	      e.forEach(function (e) {
	        e.style[t] = n;
	      });
	    } }, { key: "_removeAttr", value: function value(e, t) {
	      e.forEach(function (e) {
	        e.removeAttribute(t);
	      });
	    } }, { key: "_one", value: function value(e, t, n, i) {
	      var r = function r(s) {
	        try {
	          n.call(i, s);
	        } finally {
	          e.removeEventListener(t, r);
	        }
	      };e.addEventListener(t, r);
	    } }, { key: "_getDescElements", value: function value(e, t) {
	      var n = [];return e.forEach(function (e) {
	        return n.push.apply(n, _toConsumableArray(e.querySelectorAll(t)));
	      }), n;
	    } }, { key: "_getJSON", value: function value(e) {
	      return new Promise(function (t, n) {
	        function i() {
	          4 === this.readyState && (200 === this.status ? t(JSON.parse(this.response)) : n(new Error(this.statusText)));
	        }var r = new XMLHttpRequest();r.open("GET", e), r.onreadystatechange = i, r.responseType = "json", r.setRequestHeader("Content-Type", "application/json"), r.send();
	      });
	    } }, { key: "_buildJsonDS", value: function value(e) {
	      var t = this,
	          n = { name: e.firstChild.textContent.trim(), relationship: ("LI" === e.parentNode.parentNode.nodeName ? "1" : "0") + (e.parentNode.children.length > 1 ? 1 : 0) + (e.children.length ? 1 : 0) };return e.id && (n.id = e.id), e.querySelector("ul") && Array.from(e.querySelector("ul").children).forEach(function (e) {
	        n.children || (n.children = []), n.children.push(t._buildJsonDS(e));
	      }), n;
	    } }, { key: "_attachRel", value: function value(e, t) {
	      if (e.relationship = t + (e.children && e.children.length > 0 ? 1 : 0), e.children) {
	        var n = !0,
	            i = !1,
	            r = void 0;try {
	          for (var s, o = e.children[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
	            var a = s.value;this._attachRel(a, "1" + (e.children.length > 1 ? 1 : 0));
	          }
	        } catch (e) {
	          i = !0, r = e;
	        } finally {
	          try {
	            !n && o.return && o.return();
	          } finally {
	            if (i) throw r;
	          }
	        }
	      }return e;
	    } }, { key: "_repaint", value: function value(e) {
	      e && (e.style.offsetWidth = e.offsetWidth);
	    } }, { key: "_isInAction", value: function value(e) {
	      return e.querySelector(":scope > .edge").className.indexOf("fa-") > -1;
	    } }, { key: "_getNodeState", value: function value(e, t) {
	      var n = this,
	          i = void 0,
	          r = { exist: !1, visible: !1 };return "parent" === t ? (i = this._closest(e, function (e) {
	        return e.classList && e.classList.contains("nodes");
	      }), i && (r.exist = !0), r.exist && this._isVisible(i.parentNode.children[0]) && (r.visible = !0)) : "children" === t ? (i = this._closest(e, function (e) {
	        return "TR" === e.nodeName;
	      }).nextElementSibling, i && (r.exist = !0), r.exist && this._isVisible(i) && (r.visible = !0)) : "siblings" === t && (i = this._siblings(this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).parentNode), i.length && (r.exist = !0), r.exist && i.some(function (e) {
	        return n._isVisible(e);
	      }) && (r.visible = !0)), r;
	    } }, { key: "getRelatedNodes", value: function value(e, t) {
	      return "parent" === t ? this._closest(e, function (e) {
	        return e.classList.contains("nodes");
	      }).parentNode.children[0].querySelector(".node") : "children" === t ? Array.from(this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).lastChild.children).map(function (e) {
	        return e.querySelector(".node");
	      }) : "siblings" === t ? this._siblings(this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).parentNode).map(function (e) {
	        return e.querySelector(".node");
	      }) : [];
	    } }, { key: "_switchHorizontalArrow", value: function value(e) {
	      var t = this.options,
	          n = e.querySelector(".leftEdge"),
	          i = e.querySelector(".rightEdge"),
	          r = this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).parentNode;if (t.toggleSiblingsResp && (void 0 === t.ajaxURL || this._closest(e, function (e) {
	        return e.classList.contains(".nodes");
	      }).dataset.siblingsLoaded)) {
	        var s = r.previousElementSibling,
	            o = r.nextElementSibling;s && (s.classList.contains("hidden") ? (n.classList.add("fa-chevron-left"), n.classList.remove("fa-chevron-right")) : (n.classList.add("fa-chevron-right"), n.classList.remove("fa-chevron-left"))), o && (o.classList.contains("hidden") ? (i.classList.add("fa-chevron-right"), i.classList.remove("fa-chevron-left")) : (i.classList.add("fa-chevron-left"), i.classList.remove("fa-chevron-right")));
	      } else {
	        var a = this._siblings(r),
	            l = !!a.length && !a.some(function (e) {
	          return e.classList.contains("hidden");
	        });n.classList.toggle("fa-chevron-right", l), n.classList.toggle("fa-chevron-left", !l), i.classList.toggle("fa-chevron-left", l), i.classList.toggle("fa-chevron-right", !l);
	      }
	    } }, { key: "_hoverNode", value: function value(e) {
	      var t = e.target,
	          n = !1,
	          i = t.querySelector(":scope > .topEdge"),
	          r = t.querySelector(":scope > .bottomEdge"),
	          s = t.querySelector(":scope > .leftEdge");"mouseenter" === e.type ? (i && (n = this._getNodeState(t, "parent").visible, i.classList.toggle("fa-chevron-up", !n), i.classList.toggle("fa-chevron-down", n)), r && (n = this._getNodeState(t, "children").visible, r.classList.toggle("fa-chevron-down", !n), r.classList.toggle("fa-chevron-up", n)), s && this._switchHorizontalArrow(t)) : Array.from(t.querySelectorAll(":scope > .edge")).forEach(function (e) {
	        e.classList.remove("fa-chevron-up", "fa-chevron-down", "fa-chevron-right", "fa-chevron-left");
	      });
	    } }, { key: "_clickNode", value: function value(e) {
	      var t = e.currentTarget,
	          n = this.querySelector(".focused");n && n.classList.remove("focused"), t.classList.add("focused");
	    } }, { key: "_buildParentNode", value: function value(e, t, n) {
	      var i = this,
	          r = document.createElement("table");t.relationship = "001", this._createNode(t, 0).then(function (e) {
	        e.classList.remove("slide-up"), e.classList.add("slide-down");var t = document.createElement("tr"),
	            s = document.createElement("tr"),
	            o = document.createElement("tr"),
	            a = document.createElement("tr");t.setAttribute("class", "hidden"), t.innerHTML = '<td colspan="2"></td>', r.appendChild(t), s.setAttribute("class", "lines hidden"), s.innerHTML = '<td colspan="2"><div class="downLine"></div></td>', r.appendChild(s), o.setAttribute("class", "lines hidden"), o.innerHTML = '<td class="rightLine">&nbsp;</td><td class="leftLine">&nbsp;</td>', r.appendChild(o), a.setAttribute("class", "nodes"), a.innerHTML = '<td colspan="2"></td>', r.appendChild(a), r.querySelector("td").appendChild(e), i.insertBefore(r, i.children[0]), r.children[3].children[0].appendChild(i.lastChild), n();
	      }).catch(function (e) {
	        console.error("Failed to create parent node", e);
	      });
	    } }, { key: "_switchVerticalArrow", value: function value(e) {
	      e.classList.toggle("fa-chevron-up"), e.classList.toggle("fa-chevron-down");
	    } }, { key: "showParent", value: function value(e) {
	      var t = this._prevAll(this._closest(e, function (e) {
	        return e.classList.contains("nodes");
	      }));this._removeClass(t, "hidden"), this._addClass(Array(t[0].children).slice(1, -1), "hidden");var n = t[2].querySelector(".node");this._one(n, "transitionend", function () {
	        n.classList.remove("slide"), this._isInAction(e) && this._switchVerticalArrow(e.querySelector(":scope > .topEdge"));
	      }, this), this._repaint(n), n.classList.add("slide"), n.classList.remove("slide-down");
	    } }, { key: "showSiblings", value: function value(e, t) {
	      var n = this,
	          i = [],
	          r = this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).parentNode;i = t ? "left" === t ? this._prevAll(r) : this._nextAll(r) : this._siblings(r), this._removeClass(i, "hidden");var s = this._prevAll(this._closest(e, function (e) {
	        return e.classList.contains("nodes");
	      }));if (r = Array.from(s[0].querySelectorAll(":scope > .hidden")), t ? this._removeClass(r.slice(0, 2 * i.length), "hidden") : this._removeClass(r, "hidden"), !this._getNodeState(e, "parent").visible) {
	        this._removeClass(s, "hidden");var o = s[2].querySelector(".node");this._one(o, "transitionend", function (e) {
	          e.target.classList.remove("slide");
	        }, this), this._repaint(o), o.classList.add("slide"), o.classList.remove("slide-down");
	      }i.forEach(function (e) {
	        Array.from(e.querySelectorAll(".node")).forEach(function (e) {
	          n._isVisible(e) && (e.classList.add("slide"), e.classList.remove("slide-left", "slide-right"));
	        });
	      }), this._one(i[0].querySelector(".slide"), "transitionend", function () {
	        var t = this;i.forEach(function (e) {
	          t._removeClass(Array.from(e.querySelectorAll(".slide")), "slide");
	        }), this._isInAction(e) && (this._switchHorizontalArrow(e), e.querySelector(".topEdge").classList.remove("fa-chevron-up"), e.querySelector(".topEdge").classList.add("fa-chevron-down"));
	      }, this);
	    } }, { key: "hideSiblings", value: function value(e, t) {
	      var n = this,
	          i = this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).parentNode;(this._siblings(i).forEach(function (e) {
	        e.querySelector(".spinner") && (n.dataset.inAjax = !1);
	      }), !t || t && "left" === t) && this._prevAll(i).forEach(function (e) {
	        Array.from(e.querySelectorAll(".node")).forEach(function (e) {
	          n._isVisible(e) && e.classList.add("slide", "slide-right");
	        });
	      });if (!t || t && "left" !== t) {
	        this._nextAll(i).forEach(function (e) {
	          Array.from(e.querySelectorAll(".node")).forEach(function (e) {
	            n._isVisible(e) && e.classList.add("slide", "slide-left");
	          });
	        });
	      }var r = [];this._siblings(i).forEach(function (e) {
	        Array.prototype.push.apply(r, Array.from(e.querySelectorAll(".slide")));
	      });var s = [],
	          o = !0,
	          a = !1,
	          l = void 0;try {
	        for (var d, c = r[Symbol.iterator](); !(o = (d = c.next()).done); o = !0) {
	          var h = d.value,
	              u = this._closest(h, function (e) {
	            return e.classList.contains("nodes");
	          }).previousElementSibling;s.push(u), s.push(u.previousElementSibling);
	        }
	      } catch (e) {
	        a = !0, l = e;
	      } finally {
	        try {
	          !o && c.return && c.return();
	        } finally {
	          if (a) throw l;
	        }
	      }s = [].concat(_toConsumableArray(new Set(s))), s.forEach(function (e) {
	        e.style.visibility = "hidden";
	      }), this._one(r[0], "transitionend", function (n) {
	        var o = this;s.forEach(function (e) {
	          e.removeAttribute("style");
	        });var a = [];a = t ? "left" === t ? this._prevAll(i, ":not(.hidden)") : this._nextAll(i, ":not(.hidden)") : this._siblings(i);var l = Array.from(this._closest(i, function (e) {
	          return e.classList.contains("nodes");
	        }).previousElementSibling.querySelectorAll(":scope > :not(.hidden)")),
	            d = l.slice(1, t ? 2 * a.length + 1 : -1);this._addClass(d, "hidden"), this._removeClass(r, "slide"), a.forEach(function (e) {
	          Array.from(e.querySelectorAll(".node")).slice(1).forEach(function (e) {
	            o._isVisible(e) && (e.classList.remove("slide-left", "slide-right"), e.classList.add("slide-up"));
	          });
	        }), a.forEach(function (e) {
	          o._addClass(Array.from(e.querySelectorAll(".lines")), "hidden"), o._addClass(Array.from(e.querySelectorAll(".nodes")), "hidden"), o._addClass(Array.from(e.querySelectorAll(".verticalNodes")), "hidden");
	        }), this._addClass(a, "hidden"), this._isInAction(e) && this._switchHorizontalArrow(e);
	      }, this);
	    } }, { key: "hideParent", value: function value(e) {
	      var t = Array.from(this._closest(e, function (e) {
	        return e.classList.contains("nodes");
	      }).parentNode.children).slice(0, 3);t[0].querySelector(".spinner") && (this.dataset.inAjax = !1), this._getNodeState(e, "siblings").visible && this.hideSiblings(e);var n = t.slice(1);this._css(n, "visibility", "hidden");var i = t[0].querySelector(".node"),
	          r = this._getNodeState(i, "parent").visible;i && this._isVisible(i) && (i.classList.add("slide", "slide-down"), this._one(i, "transitionend", function () {
	        i.classList.remove("slide"), this._removeAttr(n, "style"), this._addClass(t, "hidden");
	      }, this)), i && r && this.hideParent(i);
	    } }, { key: "addParent", value: function value(e, t) {
	      var n = this;this._buildParentNode(e, t, function () {
	        if (!e.querySelector(":scope > .topEdge")) {
	          var t = document.createElement("i");t.setAttribute("class", "edge verticalEdge topEdge fa"), e.appendChild(t);
	        }n.showParent(e);
	      });
	    } }, { key: "_startLoading", value: function value(e, t) {
	      this.options;if (void 0 !== this.dataset.inAjax && "true" === this.dataset.inAjax) return !1;e.classList.add("hidden");var n = document.createElement("i");return n.setAttribute("class", "fa fa-circle-o-notch fa-spin spinner"), t.appendChild(n), this._addClass(Array.from(t.querySelectorAll(":scope > *:not(.spinner)")), "hazy"), this.dataset.inAjax = !0, !0;
	    } }, { key: "_endLoading", value: function value(e, t) {
	      this.options;e.classList.remove("hidden"), t.querySelector(":scope > .spinner").remove(), this._removeClass(Array.from(t.querySelectorAll(":scope > .hazy")), "hazy"), this.dataset.inAjax = !1;
	    } }, { key: "_clickTopEdge", value: function value(e) {
	      e.stopPropagation();var t = this,
	          n = e.target,
	          i = n.parentNode,
	          r = this._getNodeState(i, "parent"),
	          s = this.options;if (r.exist) {
	        var o = this._closest(i, function (e) {
	          return e.classList.contains("nodes");
	        }),
	            a = o.parentNode.firstChild.querySelector(".node");if (a.classList.contains("slide")) return;r.visible ? (this.hideParent(i), this._one(a, "transitionend", function () {
	          this._isInAction(i) && (this._switchVerticalArrow(n), this._switchHorizontalArrow(i));
	        }, this)) : this.showParent(i);
	      } else {
	        var l = n.parentNode.id;this._startLoading(n, i) && this._getJSON("function" == typeof s.ajaxURL.parent ? s.ajaxURL.parent(i.dataset.source) : s.ajaxURL.parent + l).then(function (e) {
	          "true" === t.dataset.inAjax && Object.keys(e).length && t.addParent(i, e);
	        }).catch(function (e) {
	          console.error("Failed to get parent node data.", e);
	        }).finally(function () {
	          t._endLoading(n, i);
	        });
	      }
	    } }, { key: "hideChildren", value: function value(e) {
	      var t = this,
	          n = this._nextAll(e.parentNode.parentNode),
	          i = n[n.length - 1],
	          r = [];i.querySelector(".spinner") && (this.dataset.inAjax = !1);var s = Array.from(i.querySelectorAll(".node")).filter(function (e) {
	        return t._isVisible(e);
	      }),
	          o = i.classList.contains("verticalNodes");o || (s.forEach(function (e) {
	        Array.prototype.push.apply(r, t._prevAll(t._closest(e, function (e) {
	          return e.classList.contains("nodes");
	        }), ".lines"));
	      }), r = [].concat(_toConsumableArray(new Set(r))), this._css(r, "visibility", "hidden")), this._one(s[0], "transitionend", function (a) {
	        this._removeClass(s, "slide"), o ? t._addClass(n, "hidden") : (r.forEach(function (e) {
	          e.removeAttribute("style"), e.classList.add("hidden"), e.parentNode.lastChild.classList.add("hidden");
	        }), this._addClass(Array.from(i.querySelectorAll(".verticalNodes")), "hidden")), this._isInAction(e) && this._switchVerticalArrow(e.querySelector(".bottomEdge"));
	      }, this), this._addClass(s, "slide slide-up");
	    } }, { key: "showChildren", value: function value(e) {
	      var t = this,
	          n = this,
	          i = this._nextAll(e.parentNode.parentNode),
	          r = [];this._removeClass(i, "hidden"), i.some(function (e) {
	        return e.classList.contains("verticalNodes");
	      }) ? i.forEach(function (e) {
	        Array.prototype.push.apply(r, Array.from(e.querySelectorAll(".node")).filter(function (e) {
	          return n._isVisible(e);
	        }));
	      }) : Array.from(i[2].children).forEach(function (e) {
	        Array.prototype.push.apply(r, Array.from(e.querySelector("tr").querySelectorAll(".node")).filter(function (e) {
	          return n._isVisible(e);
	        }));
	      }), this._repaint(r[0]), this._one(r[0], "transitionend", function (n) {
	        t._removeClass(r, "slide"), t._isInAction(e) && t._switchVerticalArrow(e.querySelector(".bottomEdge"));
	      }, this), this._addClass(r, "slide"), this._removeClass(r, "slide-up");
	    } }, { key: "_buildChildNode", value: function value(e, t, n) {
	      var i = t.children || t.siblings;e.querySelector("td").setAttribute("colSpan", 2 * i.length), this.buildHierarchy(e, { children: i }, 0, n);
	    } }, { key: "addChildren", value: function value(e, t) {
	      var n = this,
	          i = this.options,
	          r = 0;this.dataset.inEdit = "addChildren", this._buildChildNode.call(this, this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }), t, function () {
	        if (++r === t.children.length) {
	          if (!e.querySelector(".bottomEdge")) {
	            var s = document.createElement("i");s.setAttribute("class", "edge verticalEdge bottomEdge fa"), e.appendChild(s);
	          }if (!e.querySelector(".symbol")) {
	            var o = document.createElement("i");o.setAttribute("class", "fa " + i.parentNodeSymbol + " symbol"), e.querySelector(":scope > .title").appendChild(o);
	          }n.showChildren(e), n.dataset.inEdit = "";
	        }
	      });
	    } }, { key: "_clickBottomEdge", value: function value(e) {
	      var t = this;e.stopPropagation();var n = this,
	          i = this.options,
	          r = e.target,
	          s = r.parentNode,
	          o = this._getNodeState(s, "children");if (o.exist) {
	        var a = this._closest(s, function (e) {
	          return "TR" === e.nodeName;
	        }).parentNode.lastChild;if (Array.from(a.querySelectorAll(".node")).some(function (e) {
	          return t._isVisible(e) && e.classList.contains("slide");
	        })) return;o.visible ? this.hideChildren(s) : this.showChildren(s);
	      } else {
	        var l = r.parentNode.id;this._startLoading(r, s) && this._getJSON("function" == typeof i.ajaxURL.children ? i.ajaxURL.children(s.dataset.source) : i.ajaxURL.children + l).then(function (e) {
	          "true" === n.dataset.inAjax && e.children.length && n.addChildren(s, e);
	        }).catch(function (e) {
	          console.error("Failed to get children nodes data", e);
	        }).finally(function () {
	          n._endLoading(r, s);
	        });
	      }
	    } }, { key: "_complementLine", value: function value(e, t, n) {
	      var i = e.parentNode.parentNode.children;i[0].children[0].setAttribute("colspan", 2 * t), i[1].children[0].setAttribute("colspan", 2 * t);for (var r = 0; r < n; r++) {
	        var s = document.createElement("td"),
	            o = document.createElement("td");s.setAttribute("class", "rightLine topLine"), s.innerHTML = "&nbsp;", i[2].insertBefore(s, i[2].children[1]), o.setAttribute("class", "leftLine topLine"), o.innerHTML = "&nbsp;", i[2].insertBefore(o, i[2].children[1]);
	      }
	    } }, { key: "_buildSiblingNode", value: function value(e, t, n) {
	      var i = this,
	          r = this,
	          s = t.siblings ? t.siblings.length : t.children.length,
	          o = "TD" === e.parentNode.nodeName ? this._closest(e, function (e) {
	        return "TR" === e.nodeName;
	      }).children.length : 1,
	          a = o + s,
	          l = a > 1 ? Math.floor(a / 2 - 1) : 0;if ("TD" === e.parentNode.nodeName) {
	        var d = this._prevAll(e.parentNode.parentNode);d[0].remove(), d[1].remove();var c = 0;r._buildChildNode.call(r, r._closest(e.parentNode, function (e) {
	          return "TABLE" === e.nodeName;
	        }), t, function () {
	          if (++c === s) {
	            var t = Array.from(r._closest(e.parentNode, function (e) {
	              return "TABLE" === e.nodeName;
	            }).lastChild.children);if (o > 1) {
	              var i = e.parentNode.parentNode;Array.from(i.children).forEach(function (e) {
	                t[0].parentNode.insertBefore(e, t[0]);
	              }), i.remove(), r._complementLine(t[0], a, o), r._addClass(t, "hidden"), t.forEach(function (e) {
	                r._addClass(e.querySelectorAll(".node"), "slide-left");
	              });
	            } else {
	              var d = e.parentNode.parentNode;t[l].parentNode.insertBefore(e.parentNode, t[l + 1]), d.remove(), r._complementLine(t[l], a, 1), r._addClass(t, "hidden"), r._addClass(r._getDescElements(t.slice(0, l + 1), ".node"), "slide-right"), r._addClass(r._getDescElements(t.slice(l + 1), ".node"), "slide-left");
	            }n();
	          }
	        });
	      } else {
	        var h = 0;r.buildHierarchy.call(r, r, t, 0, function () {
	          if (++h === a) {
	            var t = e.nextElementSibling.children[3].children[l],
	                s = document.createElement("td");s.setAttribute("colspan", 2), s.appendChild(e), t.parentNode.insertBefore(s, t.nextElementSibling), r._complementLine(t, a, 1);var o = r._closest(e, function (e) {
	              return e.classList && e.classList.contains("nodes");
	            }).parentNode.children[0];o.classList.add("hidden"), r._addClass(Array.from(o.querySelectorAll(".node")), "slide-down");var d = i._siblings(e.parentNode);r._addClass(d, "hidden"), r._addClass(r._getDescElements(d.slice(0, l), ".node"), "slide-right"), r._addClass(r._getDescElements(d.slice(l), ".node"), "slide-left"), n();
	          }
	        });
	      }
	    } }, { key: "addSiblings", value: function value(e, t) {
	      var n = this;this.dataset.inEdit = "addSiblings", this._buildSiblingNode.call(this, this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }), t, function () {
	        if (n._closest(e, function (e) {
	          return e.classList && e.classList.contains("nodes");
	        }).dataset.siblingsLoaded = !0, !e.querySelector(".leftEdge")) {
	          var t = document.createElement("i"),
	              i = document.createElement("i");t.setAttribute("class", "edge horizontalEdge rightEdge fa"), e.appendChild(t), i.setAttribute("class", "edge horizontalEdge leftEdge fa"), e.appendChild(i);
	        }n.showSiblings(e), n.dataset.inEdit = "";
	      });
	    } }, { key: "removeNodes", value: function value(e) {
	      var t = this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).parentNode,
	          n = this._siblings(t.parentNode);"TD" === t.nodeName ? this._getNodeState(e, "siblings").exist ? (n[2].querySelector(".topLine").nextElementSibling.remove(), n[2].querySelector(".topLine").remove(), n[0].children[0].setAttribute("colspan", n[2].children.length), n[1].children[0].setAttribute("colspan", n[2].children.length), t.remove()) : (n[0].children[0].removeAttribute("colspan"), n[0].querySelector(".bottomEdge").remove(), this._siblings(n[0]).forEach(function (e) {
	        return e.remove();
	      })) : Array.from(t.parentNode.children).forEach(function (e) {
	        return e.remove();
	      });
	    } }, { key: "_clickHorizontalEdge", value: function value(e) {
	      var t = this;e.stopPropagation();var n = this,
	          i = this.options,
	          r = e.target,
	          s = r.parentNode,
	          o = this._getNodeState(s, "siblings");if (o.exist) {
	        var a = this._closest(s, function (e) {
	          return "TABLE" === e.nodeName;
	        }).parentNode;if (this._siblings(a).some(function (e) {
	          var n = e.querySelector(".node");return t._isVisible(n) && n.classList.contains("slide");
	        })) return;if (i.toggleSiblingsResp) {
	          var l = this._closest(s, function (e) {
	            return "TABLE" === e.nodeName;
	          }).parentNode.previousElementSibling,
	              d = this._closest(s, function (e) {
	            return "TABLE" === e.nodeName;
	          }).parentNode.nextElementSibling;r.classList.contains("leftEdge") ? l.classList.contains("hidden") ? this.showSiblings(s, "left") : this.hideSiblings(s, "left") : d.classList.contains("hidden") ? this.showSiblings(s, "right") : this.hideSiblings(s, "right");
	        } else o.visible ? this.hideSiblings(s) : this.showSiblings(s);
	      } else {
	        var c = r.parentNode.id,
	            h = this._getNodeState(s, "parent").exist ? "function" == typeof i.ajaxURL.siblings ? i.ajaxURL.siblings(JSON.parse(s.dataset.source)) : i.ajaxURL.siblings + c : "function" == typeof i.ajaxURL.families ? i.ajaxURL.families(JSON.parse(s.dataset.source)) : i.ajaxURL.families + c;this._startLoading(r, s) && this._getJSON(h).then(function (e) {
	          "true" === n.dataset.inAjax && (e.siblings || e.children) && n.addSiblings(s, e);
	        }).catch(function (e) {
	          console.error("Failed to get sibling nodes data", e);
	        }).finally(function () {
	          n._endLoading(r, s);
	        });
	      }
	    } }, { key: "_clickToggleButton", value: function value(e) {
	      var t = this,
	          n = e.target,
	          i = n.parentNode.nextElementSibling,
	          r = Array.from(i.querySelectorAll(".node")),
	          s = Array.from(i.children).map(function (e) {
	        return e.querySelector(".node");
	      });s.some(function (e) {
	        return e.classList.contains("slide");
	      }) || (n.classList.toggle("fa-plus-square"), n.classList.toggle("fa-minus-square"), r[0].classList.contains("slide-up") ? (i.classList.remove("hidden"), this._repaint(s[0]), this._addClass(s, "slide"), this._removeClass(s, "slide-up"), this._one(s[0], "transitionend", function () {
	        t._removeClass(s, "slide");
	      })) : (this._addClass(r, "slide slide-up"), this._one(r[0], "transitionend", function () {
	        t._removeClass(r, "slide"), r.forEach(function (e) {
	          t._closest(e, function (e) {
	            return "UL" === e.nodeName;
	          }).classList.add("hidden");
	        });
	      }), r.forEach(function (e) {
	        var n = Array.from(e.querySelectorAll(".toggleBtn"));t._removeClass(n, "fa-minus-square"), t._addClass(n, "fa-plus-square");
	      })));
	    } }, { key: "_dispatchClickEvent", value: function value(e) {
	      var t = e.target.classList;t.contains("topEdge") ? this._clickTopEdge(e) : t.contains("rightEdge") || t.contains("leftEdge") ? this._clickHorizontalEdge(e) : t.contains("bottomEdge") ? this._clickBottomEdge(e) : t.contains("toggleBtn") ? this._clickToggleButton(e) : this._clickNode(e);
	    } }, { key: "_onDragStart", value: function value(e) {
	      var t = e.target,
	          n = this.options,
	          i = /firefox/.test(window.navigator.userAgent.toLowerCase());if (i && e.dataTransfer.setData("text/html", "hack for firefox"), this.style.transform) {
	        var r = void 0,
	            s = void 0;document.querySelector(".ghost-node") ? (r = this.querySelector(":scope > .ghost-node"), s = r.children[0]) : (r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r.classList.add("ghost-node"), s = document.createElementNS("http://www.w3.org/2000/svg", "rect"), r.appendChild(s), this.appendChild(r));var o = this.style.transform.split(","),
	            a = Math.abs(window.parseFloat("t2b" === n.direction || "b2t" === n.direction ? o[0].slice(o[0].indexOf("(") + 1) : o[1]));r.setAttribute("width", t.offsetWidth), r.setAttribute("height", t.offsetHeight), s.setAttribute("x", 5 * a), s.setAttribute("y", 5 * a), s.setAttribute("width", 120 * a), s.setAttribute("height", 40 * a), s.setAttribute("rx", 4 * a), s.setAttribute("ry", 4 * a), s.setAttribute("stroke-width", 1 * a);var l = e.offsetX * a,
	            d = e.offsetY * a;if ("l2r" === n.direction ? (l = e.offsetY * a, d = e.offsetX * a) : "r2l" === n.direction ? (l = t.offsetWidth - e.offsetY * a, d = e.offsetX * a) : "b2t" === n.direction && (l = t.offsetWidth - e.offsetX * a, d = t.offsetHeight - e.offsetY * a), i) {
	          var c = document.createElement("img");c.src = "data:image/svg+xml;utf8," + new XMLSerializer().serializeToString(r), e.dataTransfer.setDragImage(c, l, d), s.setAttribute("fill", "rgb(255, 255, 255)"), s.setAttribute("stroke", "rgb(191, 0, 0)");
	        } else e.dataTransfer.setDragImage(r, l, d);
	      }var h = e.target,
	          u = this._closest(h, function (e) {
	        return e.classList && e.classList.contains("nodes");
	      }).parentNode.children[0].querySelector(".node"),
	          f = Array.from(this._closest(h, function (e) {
	        return "TABLE" === e.nodeName;
	      }).querySelectorAll(".node"));this.dragged = h, Array.from(this.querySelectorAll(".node")).forEach(function (e) {
	        f.includes(e) || (n.dropCriteria ? n.dropCriteria(h, u, e) && e.classList.add("allowedDrop") : e.classList.add("allowedDrop"));
	      });
	    } }, { key: "_onDragOver", value: function value(e) {
	      e.preventDefault(), e.currentTarget.classList.contains("allowedDrop") || (e.dataTransfer.dropEffect = "none");
	    } }, { key: "_onDragEnd", value: function value(e) {
	      Array.from(this.querySelectorAll(".allowedDrop")).forEach(function (e) {
	        e.classList.remove("allowedDrop");
	      });
	    } }, { key: "_onDrop", value: function value(e) {
	      var t = e.currentTarget,
	          n = this.dragged,
	          i = this._closest(n, function (e) {
	        return e.classList && e.classList.contains("nodes");
	      }).parentNode.children[0].children[0];if (this._removeClass(Array.from(this.querySelectorAll(".allowedDrop")), "allowedDrop"), t.parentNode.parentNode.nextElementSibling) {
	        var r = window.parseInt(t.parentNode.colSpan) + 2;if (t.parentNode.setAttribute("colspan", r), t.parentNode.parentNode.nextElementSibling.children[0].setAttribute("colspan", r), !n.querySelector(".horizontalEdge")) {
	          var s = document.createElement("i"),
	              o = document.createElement("i");s.setAttribute("class", "edge horizontalEdge rightEdge fa"), n.appendChild(s), o.setAttribute("class", "edge horizontalEdge leftEdge fa"), n.appendChild(o);
	        }var a = t.parentNode.parentNode.nextElementSibling.nextElementSibling,
	            l = document.createElement("td"),
	            d = document.createElement("td");l.setAttribute("class", "leftLine topLine"), l.innerHTML = "&nbsp;", a.insertBefore(l, a.children[1]), d.setAttribute("class", "rightLine topLine"), d.innerHTML = "&nbsp;", a.insertBefore(d, a.children[2]), a.nextElementSibling.appendChild(this._closest(n, function (e) {
	          return "TABLE" === e.nodeName;
	        }).parentNode);var c = this._siblings(this._closest(n, function (e) {
	          return "TABLE" === e.nodeName;
	        }).parentNode).map(function (e) {
	          return e.querySelector(".node");
	        });if (1 === c.length) {
	          var h = document.createElement("i"),
	              u = document.createElement("i");h.setAttribute("class", "edge horizontalEdge rightEdge fa"), c[0].appendChild(h), u.setAttribute("class", "edge horizontalEdge leftEdge fa"), c[0].appendChild(u);
	        }
	      } else {
	        var f = document.createElement("i");f.setAttribute("class", "edge verticalEdge bottomEdge fa"), t.appendChild(f), t.parentNode.setAttribute("colspan", 2);var p = this._closest(t, function (e) {
	          return "TABLE" === e.nodeName;
	        }),
	            v = document.createElement("tr"),
	            g = document.createElement("tr"),
	            m = document.createElement("tr");v.setAttribute("class", "lines"), v.innerHTML = '<td colspan="2"><div class="downLine"></div></td>', p.appendChild(v), g.setAttribute("class", "lines"), g.innerHTML = '<td class="rightLine">&nbsp;</td><td class="leftLine">&nbsp;</td>', p.appendChild(g), m.setAttribute("class", "nodes"), p.appendChild(m), Array.from(n.querySelectorAll(".horizontalEdge")).forEach(function (e) {
	          n.removeChild(e);
	        });var y = this._closest(n, function (e) {
	          return "TABLE" === e.nodeName;
	        }).parentNode;m.appendChild(y);
	      }var b = window.parseInt(i.colSpan);if (b > 2) {
	        i.setAttribute("colspan", b - 2), i.parentNode.nextElementSibling.children[0].setAttribute("colspan", b - 2);var _ = i.parentNode.nextElementSibling.nextElementSibling;_.children[1].remove(), _.children[1].remove();var E = Array.from(i.parentNode.parentNode.children[3].children).map(function (e) {
	          return e.querySelector(".node");
	        });1 === E.length && (E[0].querySelector(".leftEdge").remove(), E[0].querySelector(".rightEdge").remove());
	      } else i.removeAttribute("colspan"), i.querySelector(".node").removeChild(i.querySelector(".bottomEdge")), Array.from(i.parentNode.parentNode.children).slice(1).forEach(function (e) {
	        return e.remove();
	      });var L = new CustomEvent("nodedropped.orgchart", { detail: { draggedNode: n, dragZone: i.children[0], dropZone: t } });this.dispatchEvent(L);
	    } }, { key: "_createNode", value: function value(e, t) {
	      var n = this,
	          i = this.options;return new Promise(function (r, s) {
	        if (e.children) {
	          var o = !0,
	              a = !1,
	              l = void 0;try {
	            for (var d, c = e.children[Symbol.iterator](); !(o = (d = c.next()).done); o = !0) {
	              d.value.parentId = e.id;
	            }
	          } catch (e) {
	            a = !0, l = e;
	          } finally {
	            try {
	              !o && c.return && c.return();
	            } finally {
	              if (a) throw l;
	            }
	          }
	        }var h = document.createElement("div");delete e.children, h.dataset.source = JSON.stringify(e), e[i.nodeId] && (h.id = e[i.nodeId]);var u = n.dataset.inEdit,
	            f = void 0;f = u ? "addChildren" === u ? " slide-up" : "" : t >= i.depth ? " slide-up" : "", h.setAttribute("class", "node " + (e.className || "") + f), i.draggable && h.setAttribute("draggable", !0), e.parentId && h.setAttribute("data-parent", e.parentId), h.innerHTML = '\n        <div class="title">' + e[i.nodeTitle] + "</div>\n        " + (i.nodeContent ? '<div class="content">' + e[i.nodeContent] + "</div>" : "") + "\n      ";var p = e.relationship || "";if (i.verticalDepth && t + 2 > i.verticalDepth) {
	          if (t + 1 >= i.verticalDepth && Number(p.substr(2, 1))) {
	            var v = document.createElement("i"),
	                g = t + 1 >= i.depth ? "plus" : "minus";v.setAttribute("class", "toggleBtn fa fa-" + g + "-square"), h.appendChild(v);
	          }
	        } else {
	          if (Number(p.substr(0, 1))) {
	            var m = document.createElement("i");m.setAttribute("class", "edge verticalEdge topEdge fa"), h.appendChild(m);
	          }if (Number(p.substr(1, 1))) {
	            var y = document.createElement("i"),
	                b = document.createElement("i");y.setAttribute("class", "edge horizontalEdge rightEdge fa"), h.appendChild(y), b.setAttribute("class", "edge horizontalEdge leftEdge fa"), h.appendChild(b);
	          }if (Number(p.substr(2, 1))) {
	            var _ = document.createElement("i"),
	                E = document.createElement("i"),
	                L = h.querySelector(":scope > .title");_.setAttribute("class", "edge verticalEdge bottomEdge fa"), h.appendChild(_), E.setAttribute("class", "fa " + i.parentNodeSymbol + " symbol"), L.insertBefore(E, L.children[0]);
	          }
	        }h.addEventListener("mouseenter", n._hoverNode.bind(n)), h.addEventListener("mouseleave", n._hoverNode.bind(n)), h.addEventListener("click", n._dispatchClickEvent.bind(n)), i.draggable && (h.addEventListener("dragstart", n._onDragStart.bind(n)), h.addEventListener("dragover", n._onDragOver.bind(n)), h.addEventListener("dragend", n._onDragEnd.bind(n)), h.addEventListener("drop", n._onDrop.bind(n))), i.createNode && i.createNode(h, e), r(h);
	      });
	    } }, { key: "buildHierarchy", value: function value(e, t, n, i) {
	      var r = this,
	          s = this.options,
	          o = void 0,
	          a = t.children,
	          l = s.verticalDepth && n + 1 >= s.verticalDepth;if (Object.keys(t).length > 1 && (o = l ? e : document.createElement("table"), l || e.appendChild(o), this._createNode(t, n).then(function (e) {
	        if (l) o.insertBefore(e, o.firstChild);else {
	          var t = document.createElement("tr");t.innerHTML = "\n            <td " + (a ? 'colspan="' + 2 * a.length + '"' : "") + ">\n            </td>\n          ", t.children[0].appendChild(e), o.insertBefore(t, o.children[0] ? o.children[0] : null);
	        }i && i();
	      }).catch(function (e) {
	        console.error("Failed to creat node", e);
	      })), a) {
	        1 === Object.keys(t).length && (o = e);var d = void 0,
	            c = s.verticalDepth && n + 2 >= s.verticalDepth,
	            h = r.dataset.inEdit;if (d = h ? "addSiblings" === h ? "" : " hidden" : n + 1 >= s.depth ? " hidden" : "", !c) {
	          var u = document.createElement("tr");u.setAttribute("class", "lines" + d), u.innerHTML = '\n          <td colspan="' + 2 * a.length + '">\n            <div class="downLine"></div>\n          </td>\n        ', o.appendChild(u);
	        }var f = document.createElement("tr");f.setAttribute("class", "lines" + d), f.innerHTML = '\n        <td class="rightLine">&nbsp;</td>\n        ' + a.slice(1).map(function () {
	          return '\n          <td class="leftLine topLine">&nbsp;</td>\n          <td class="rightLine topLine">&nbsp;</td>\n          ';
	        }).join("") + '\n        <td class="leftLine">&nbsp;</td>\n      ';var p = void 0;if (c) {
	          if (p = document.createElement("ul"), d && p.classList.add(d.trim()), n + 2 === s.verticalDepth) {
	            var v = document.createElement("tr");v.setAttribute("class", "verticalNodes" + d), v.innerHTML = "<td></td>", v.firstChild.appendChild(p), o.appendChild(v);
	          } else o.appendChild(p);
	        } else p = document.createElement("tr"), p.setAttribute("class", "nodes" + d), o.appendChild(f), o.appendChild(p);a.forEach(function (e) {
	          var t = void 0;c ? t = document.createElement("li") : (t = document.createElement("td"), t.setAttribute("colspan", 2)), p.appendChild(t), r.buildHierarchy(t, e, n + 1, i);
	        });
	      }
	    } }, { key: "_clickChart", value: function value(e) {
	      !this._closest(e.target, function (e) {
	        return e.classList && e.classList.contains("node");
	      }) && this.querySelector(".node.focused") && this.querySelector(".node.focused").classList.remove("focused");
	    } }, { key: "_loopChart", value: function value(e) {
	      var t = this,
	          n = { id: e.querySelector(".node").id };return e.children[3] && Array.from(e.children[3].children).forEach(function (e) {
	        n.children || (n.children = []), n.children.push(t._loopChart(e.firstChild));
	      }), n;
	    } }, { key: "getHierarchy", value: function value() {
	      return this.querySelector(".node").id ? this._loopChart(this.querySelector("table")) : "Error: Nodes of orghcart to be exported must have id attribute!";
	    } }, { key: "_onPanStart", value: function value(e) {
	      var t = e.currentTarget;if (this._closest(e.target, function (e) {
	        return e.classList && e.classList.contains("node");
	      }) || e.touches && e.touches.length > 1) return void (t.dataset.panning = !1);t.style.cursor = "move", t.dataset.panning = !0;var n = 0,
	          i = 0,
	          r = window.getComputedStyle(t).transform;if ("none" !== r) {
	        var s = r.split(",");r.includes("3d") ? (n = Number.parseInt(s[12], 10), i = Number.parseInt(s[13], 10)) : (n = Number.parseInt(s[4], 10), i = Number.parseInt(s[5], 10));
	      }var o = 0,
	          a = 0;if (e.targetTouches) {
	        if (1 === e.targetTouches.length) o = e.targetTouches[0].pageX - n, a = e.targetTouches[0].pageY - i;else if (e.targetTouches.length > 1) return;
	      } else o = e.pageX - n, a = e.pageY - i;t.dataset.panStart = JSON.stringify({ startX: o, startY: a }), t.addEventListener("mousemove", this._onPanning.bind(this)), t.addEventListener("touchmove", this._onPanning.bind(this));
	    } }, { key: "_onPanning", value: function value(e) {
	      var t = e.currentTarget;if ("false" !== t.dataset.panning) {
	        var n = 0,
	            i = 0,
	            r = JSON.parse(t.dataset.panStart),
	            s = r.startX,
	            o = r.startY;if (e.targetTouches) {
	          if (1 === e.targetTouches.length) n = e.targetTouches[0].pageX - s, i = e.targetTouches[0].pageY - o;else if (e.targetTouches.length > 1) return;
	        } else n = e.pageX - s, i = e.pageY - o;var a = window.getComputedStyle(t).transform;if ("none" === a) a.includes("3d") ? t.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + n + ", " + i + ", 0, 1)" : t.style.transform = "matrix(1, 0, 0, 1, " + n + ", " + i + ")";else {
	          var l = a.split(",");a.includes("3d") ? (l[12] = n, l[13] = i) : (l[4] = n, l[5] = i + ")"), t.style.transform = l.join(",");
	        }
	      }
	    } }, { key: "_onPanEnd", value: function value(e) {
	      "true" === this.dataset.panning && (this.dataset.panning = !1, this.style.cursor = "default", document.body.removeEventListener("mousemove", this._onPanning), document.body.removeEventListener("touchmove", this._onPanning));
	    } }, { key: "_setChartScale", value: function value(e, t) {
	      var n = window.getComputedStyle(e).transform;if ("none" === n) e.style.transform = "scale(" + t + "," + t + ")";else {
	        var i = n.split(",");n.includes("3d") ? e.style.transform = n + " scale3d(" + t + "," + t + ", 1)" : (i[0] = "matrix(" + t, i[3] = t, e.style.transform = n + " scale(" + t + "," + t + ")");
	      }e.dataset.scale = t;
	    } }, { key: "_onWheeling", value: function value(e) {
	      e.preventDefault();var t = e.deltaY > 0 ? .8 : 1.2;this._setChartScale(this, t);
	    } }, { key: "_getPinchDist", value: function value(e) {
	      return Math.sqrt((e.touches[0].clientX - e.touches[1].clientX) * (e.touches[0].clientX - e.touches[1].clientX) + (e.touches[0].clientY - e.touches[1].clientY) * (e.touches[0].clientY - e.touches[1].clientY));
	    } }, { key: "_onTouchStart", value: function value(e) {
	      if (e.touches && 2 === e.touches.length) {
	        var t = this._getPinchDist(e);this.dataset.pinching = !0, this.dataset.pinchDistStart = t;
	      }
	    } }, { key: "_onTouchMove", value: function value(e) {
	      if (this.dataset.pinching) {
	        var t = this._getPinchDist(e);this.dataset.pinchDistEnd = t;
	      }
	    } }, { key: "_onTouchEnd", value: function value(e) {
	      if (this.dataset.pinching) {
	        this.dataset.pinching = !1;var t = this.dataset.pinchDistEnd - this.dataset.pinchDistStart;t > 0 ? this._setChartScale(this, 1) : t < 0 && this._setChartScale(this, -1);
	      }
	    } }]), t;
	}(HTMLElement);exports.default = OrgChart, window.customElements.define("org-chart", OrgChart);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map