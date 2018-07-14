import OrgChart from '../js/orgchart-webcomponents.min.js';

document.addEventListener('DOMContentLoaded', function () {
  let datascource = {
                "distributor_id": 16344,
                "num_children": 875,
                "username": "distributor.16344",
                "full_name": "Faye Blanda Rohan",
                "status": "Active",
                "product_name": "Light Miner",
                "category_name": "Bitcoin",
                "parent_id": 16321,
                "binary_placement": "Left",
                "children": [
                    {
                        "distributor_id": 18183,
                        "num_children": 864,
                        "username": "distributor.18183",
                        "full_name": "Conrad Ziemann Satterfield",
                        "status": "Active",
                        "product_name": "Strong Miner",
                        "category_name": "Bitcoin",
                        "parent_id": 16344,
                        "binary_placement": "Left",
                        "children": [
                            {
                                "distributor_id": 18191,
                                "num_children": 2,
                                "username": "distributor.18191",
                                "full_name": "Patrick Bashirian Skiles",
                                "status": "Active",
                                "product_name": "Light Miner",
                                "category_name": "Bitcoin",
                                "parent_id": 18183,
                                "binary_placement": "Right",
                                "children": [
                                    {
                                        "distributor_id": 22249,
                                        "num_children": 1,
                                        "username": "distributor.22249",
                                        "full_name": "Samantha Mueller Hickle",
                                        "status": "Active",
                                        "product_name": "Light Miner",
                                        "category_name": "Bitcoin",
                                        "parent_id": 18191,
                                        "binary_placement": "Left",
                                        "children": [
                                            {
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
                                            }
                                        ],
                                        "parent_username": "distributor.18191"
                                    }
                                ],
                                "parent_username": "distributor.18183"
                            },
                            {
                                "distributor_id": 18190,
                                "num_children": 860,
                                "username": "distributor.18190",
                                "full_name": "Deborah Abshire Mertz",
                                "status": "Active",
                                "product_name": "Light Miner",
                                "category_name": "Bitcoin",
                                "parent_id": 18183,
                                "binary_placement": "Left",
                                "children": [
                                    {
                                        "distributor_id": 18194,
                                        "num_children": 858,
                                        "username": "distributor.18194",
                                        "full_name": "Mara Conroy Feeney",
                                        "status": "Active",
                                        "product_name": "Kickstarter",
                                        "category_name": "Bitcoin",
                                        "parent_id": 18190,
                                        "binary_placement": "Left",
                                        "children": [
                                            {
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
                                            },
                                            {
                                                "distributor_id": 18202,
                                                "num_children": 856,
                                                "username": "distributor.18202",
                                                "full_name": "Clare Kuhn Macejkovic",
                                                "status": "Active",
                                                "product_name": "Light Miner",
                                                "category_name": "Bitcoin",
                                                "parent_id": 18194,
                                                "binary_placement": "Left",
                                                "children": [
                                                    {
                                                        "distributor_id": 18216,
                                                        "num_children": 80,
                                                        "username": "distributor.18216",
                                                        "full_name": "Elsie Collins V Hermiston",
                                                        "status": "Active",
                                                        "product_name": "Kickstarter",
                                                        "category_name": "Bitcoin",
                                                        "parent_id": 18202,
                                                        "binary_placement": "Left",
                                                        "children": [
                                                            {
                                                                "distributor_id": 18226,
                                                                "num_children": 2,
                                                                "username": "distributor.18226",
                                                                "full_name": "Dr. Lane Walsh Cronin",
                                                                "status": "Active",
                                                                "product_name": "Kickstarter",
                                                                "category_name": "Bitcoin",
                                                                "parent_id": 18216,
                                                                "binary_placement": "Right",
                                                                "children": [
                                                                    {
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
                                                                    },
                                                                    {
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
                                                                    }
                                                                ],
                                                                "parent_username": "distributor.18216"
                                                            },
                                                            {
                                                                "distributor_id": 18225,
                                                                "num_children": 76,
                                                                "username": "distributor.18225",
                                                                "full_name": "Aniya Swaniawski Feest",
                                                                "status": "Active",
                                                                "product_name": "Kickstarter",
                                                                "category_name": "Bitcoin",
                                                                "parent_id": 18216,
                                                                "binary_placement": "Left",
                                                                "children": [
                                                                    {
                                                                        "distributor_id": 18230,
                                                                        "num_children": 71,
                                                                        "username": "distributor.18230",
                                                                        "full_name": "Serenity Leuschke Doyle",
                                                                        "status": "Active",
                                                                        "product_name": "Light Miner",
                                                                        "category_name": "Bitcoin",
                                                                        "parent_id": 18225,
                                                                        "binary_placement": "Left",
                                                                        "children": [
                                                                            {
                                                                                "distributor_id": 18236,
                                                                                "num_children": 55,
                                                                                "username": "distributor.18236",
                                                                                "full_name": "Helga Hansen Schinner",
                                                                                "status": "Active",
                                                                                "product_name": null,
                                                                                "category_name": null,
                                                                                "parent_id": 18230,
                                                                                "binary_placement": "Left",
                                                                                "children": [
                                                                                    {
                                                                                        "distributor_id": 18239,
                                                                                        "num_children": 54,
                                                                                        "username": "distributor.18239",
                                                                                        "full_name": "Prof. Rene Powlowski Witting",
                                                                                        "status": "Active",
                                                                                        "product_name": "Kickstarter",
                                                                                        "category_name": "Bitcoin",
                                                                                        "parent_id": 18236,
                                                                                        "binary_placement": "Left",
                                                                                        "children": [
                                                                                            {
                                                                                                "distributor_id": 22235,
                                                                                                "num_children": 52,
                                                                                                "username": "distributor.22235",
                                                                                                "full_name": "Alexane Heaney Conroy",
                                                                                                "status": "Active",
                                                                                                "product_name": "Master Miner",
                                                                                                "category_name": "Bitcoin",
                                                                                                "parent_id": 18239,
                                                                                                "binary_placement": "Left",
                                                                                                "children": [
                                                                                                    {
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
                                                                                                    },
                                                                                                    {
                                                                                                        "distributor_id": 22238,
                                                                                                        "num_children": 50,
                                                                                                        "username": "distributor.22238",
                                                                                                        "full_name": "Mrs. Sandy Gleichner V Kerluke",
                                                                                                        "status": "Active",
                                                                                                        "product_name": null,
                                                                                                        "category_name": null,
                                                                                                        "parent_id": 22235,
                                                                                                        "binary_placement": "Left",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "distributor_id": 23807,
                                                                                                                "num_children": 1,
                                                                                                                "username": "distributor.23807",
                                                                                                                "full_name": "Clay Dickinson Waelchi",
                                                                                                                "status": "Active",
                                                                                                                "product_name": "Mid Miner",
                                                                                                                "category_name": "Bitcoin",
                                                                                                                "parent_id": 22238,
                                                                                                                "binary_placement": "Right",
                                                                                                                "children": [
                                                                                                                    {
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
                                                                                                                    }
                                                                                                                ],
                                                                                                                "parent_username": "distributor.22238"
                                                                                                            },
                                                                                                            {
                                                                                                                "distributor_id": 23806,
                                                                                                                "num_children": 47,
                                                                                                                "username": "distributor.23806",
                                                                                                                "full_name": "Mr. Glennie Kovacek DDS Satterfield",
                                                                                                                "status": "Active",
                                                                                                                "product_name": "Kickstarter",
                                                                                                                "category_name": "Bitcoin",
                                                                                                                "parent_id": 22238,
                                                                                                                "binary_placement": "Left",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "distributor_id": 25471,
                                                                                                                        "num_children": 46,
                                                                                                                        "username": "distributor.25471",
                                                                                                                        "full_name": "Deon Lakin Walter",
                                                                                                                        "status": "Active",
                                                                                                                        "product_name": null,
                                                                                                                        "category_name": null,
                                                                                                                        "parent_id": 23806,
                                                                                                                        "binary_placement": "Left",
                                                                                                                        "children": [
                                                                                                                            {
                                                                                                                                "distributor_id": 26756,
                                                                                                                                "num_children": 45,
                                                                                                                                "username": "distributor.26756",
                                                                                                                                "full_name": "Kenny Ullrich Gutkowski",
                                                                                                                                "status": "Active",
                                                                                                                                "product_name": null,
                                                                                                                                "category_name": null,
                                                                                                                                "parent_id": 25471,
                                                                                                                                "binary_placement": "Left",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "distributor_id": 26861,
                                                                                                                                        "num_children": 44,
                                                                                                                                        "username": "distributor.26861",
                                                                                                                                        "full_name": "Mr. Edison Herzog Mosciski",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                        "parent_id": 26756,
                                                                                                                                        "binary_placement": "Left",
                                                                                                                                        "children": [
                                                                                                                                            {
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
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                "distributor_id": 29312,
                                                                                                                                                "num_children": 42,
                                                                                                                                                "username": "distributor.29312",
                                                                                                                                                "full_name": "Mr. Justyn Deckow Klocko",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                "parent_id": 26861,
                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                "children": [
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 29335,
                                                                                                                                                        "num_children": 40,
                                                                                                                                                        "username": "distributor.29335",
                                                                                                                                                        "full_name": "Willie Bode Schroeder",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": "Light Miner",
                                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                                        "parent_id": 29312,
                                                                                                                                                        "binary_placement": "Left",
                                                                                                                                                        "children": [
                                                                                                                                                            {
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
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 29896,
                                                                                                                                                                "num_children": 38,
                                                                                                                                                                "username": "distributor.29896",
                                                                                                                                                                "full_name": "Mr. Mason Greenfelder Walsh",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": "Mid Miner",
                                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                                "parent_id": 29335,
                                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    },
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.29335"
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.29312"
                                                                                                                                                    },
                                                                                                                                                    {
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
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.26861"
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.26756"
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "parent_username": "distributor.25471"
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "parent_username": "distributor.23806"
                                                                                                                    }
                                                                                                                ],
                                                                                                                "parent_username": "distributor.22238"
                                                                                                            }
                                                                                                        ],
                                                                                                        "parent_username": "distributor.22235"
                                                                                                    }
                                                                                                ],
                                                                                                "parent_username": "distributor.18239"
                                                                                            },
                                                                                            {
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
                                                                                            }
                                                                                        ],
                                                                                        "parent_username": "distributor.18236"
                                                                                    }
                                                                                ],
                                                                                "parent_username": "distributor.18230"
                                                                            },
                                                                            {
                                                                                "distributor_id": 18237,
                                                                                "num_children": 14,
                                                                                "username": "distributor.18237",
                                                                                "full_name": "Aniyah Mraz Howe",
                                                                                "status": "Active",
                                                                                "product_name": "Kickstarter",
                                                                                "category_name": "Bitcoin",
                                                                                "parent_id": 18230,
                                                                                "binary_placement": "Right",
                                                                                "children": [
                                                                                    {
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
                                                                                    },
                                                                                    {
                                                                                        "distributor_id": 22403,
                                                                                        "num_children": 12,
                                                                                        "username": "distributor.22403",
                                                                                        "full_name": "Phoebe Hahn Daniel",
                                                                                        "status": "Active",
                                                                                        "product_name": null,
                                                                                        "category_name": null,
                                                                                        "parent_id": 18237,
                                                                                        "binary_placement": "Right",
                                                                                        "children": [
                                                                                            {
                                                                                                "distributor_id": 39064,
                                                                                                "num_children": 4,
                                                                                                "username": "distributor.39064",
                                                                                                "full_name": "Felipe Cummerata Bahringer",
                                                                                                "status": "Active",
                                                                                                "product_name": null,
                                                                                                "category_name": null,
                                                                                                "parent_id": 22403,
                                                                                                "binary_placement": "Left",
                                                                                                "children": [
                                                                                                    {
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
                                                                                                    },
                                                                                                    {
                                                                                                        "distributor_id": 43376,
                                                                                                        "num_children": 2,
                                                                                                        "username": "distributor.43376",
                                                                                                        "full_name": "Viola Graham Greenholt",
                                                                                                        "status": "Active",
                                                                                                        "product_name": null,
                                                                                                        "category_name": null,
                                                                                                        "parent_id": 39064,
                                                                                                        "binary_placement": "Left",
                                                                                                        "children": [
                                                                                                            {
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
                                                                                                            },
                                                                                                            {
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
                                                                                                            }
                                                                                                        ],
                                                                                                        "parent_username": "distributor.39064"
                                                                                                    }
                                                                                                ],
                                                                                                "parent_username": "distributor.22403"
                                                                                            },
                                                                                            {
                                                                                                "distributor_id": 39065,
                                                                                                "num_children": 6,
                                                                                                "username": "distributor.39065",
                                                                                                "full_name": "John Hane Baumbach",
                                                                                                "status": "Active",
                                                                                                "product_name": null,
                                                                                                "category_name": null,
                                                                                                "parent_id": 22403,
                                                                                                "binary_placement": "Right",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "distributor_id": 43348,
                                                                                                        "num_children": 2,
                                                                                                        "username": "distributor.43348",
                                                                                                        "full_name": "Dr. Martina Kulas MD Abshire",
                                                                                                        "status": "Active",
                                                                                                        "product_name": null,
                                                                                                        "category_name": null,
                                                                                                        "parent_id": 39065,
                                                                                                        "binary_placement": "Right",
                                                                                                        "children": [
                                                                                                            {
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
                                                                                                            },
                                                                                                            {
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
                                                                                                            }
                                                                                                        ],
                                                                                                        "parent_username": "distributor.39065"
                                                                                                    },
                                                                                                    {
                                                                                                        "distributor_id": 43347,
                                                                                                        "num_children": 2,
                                                                                                        "username": "distributor.43347",
                                                                                                        "full_name": "Darien Schulist Rogahn",
                                                                                                        "status": "Active",
                                                                                                        "product_name": null,
                                                                                                        "category_name": null,
                                                                                                        "parent_id": 39065,
                                                                                                        "binary_placement": "Left",
                                                                                                        "children": [
                                                                                                            {
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
                                                                                                            },
                                                                                                            {
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
                                                                                                            }
                                                                                                        ],
                                                                                                        "parent_username": "distributor.39065"
                                                                                                    }
                                                                                                ],
                                                                                                "parent_username": "distributor.22403"
                                                                                            }
                                                                                        ],
                                                                                        "parent_username": "distributor.18237"
                                                                                    }
                                                                                ],
                                                                                "parent_username": "distributor.18230"
                                                                            }
                                                                        ],
                                                                        "parent_username": "distributor.18225"
                                                                    },
                                                                    {
                                                                        "distributor_id": 18231,
                                                                        "num_children": 3,
                                                                        "username": "distributor.18231",
                                                                        "full_name": "Doyle McKenzie I Labadie",
                                                                        "status": "Active",
                                                                        "product_name": null,
                                                                        "category_name": null,
                                                                        "parent_id": 18225,
                                                                        "binary_placement": "Right",
                                                                        "children": [
                                                                            {
                                                                                "distributor_id": 35486,
                                                                                "num_children": 2,
                                                                                "username": "distributor.35486",
                                                                                "full_name": "Melba Daugherty Stiedemann",
                                                                                "status": "Active",
                                                                                "product_name": "Kickstarter",
                                                                                "category_name": "Bitcoin",
                                                                                "parent_id": 18231,
                                                                                "binary_placement": "Right",
                                                                                "children": [
                                                                                    {
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
                                                                                    },
                                                                                    {
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
                                                                                    }
                                                                                ],
                                                                                "parent_username": "distributor.18231"
                                                                            }
                                                                        ],
                                                                        "parent_username": "distributor.18225"
                                                                    }
                                                                ],
                                                                "parent_username": "distributor.18216"
                                                            }
                                                        ],
                                                        "parent_username": "distributor.18202"
                                                    },
                                                    {
                                                        "distributor_id": 18217,
                                                        "num_children": 774,
                                                        "username": "distributor.18217",
                                                        "full_name": "Ardith Kerluke McLaughlin",
                                                        "status": "Active",
                                                        "product_name": null,
                                                        "category_name": null,
                                                        "parent_id": 18202,
                                                        "binary_placement": "Right",
                                                        "children": [
                                                            {
                                                                "distributor_id": 28731,
                                                                "num_children": 773,
                                                                "username": "distributor.28731",
                                                                "full_name": "Danyka Harber Ruecker",
                                                                "status": "Active",
                                                                "product_name": "Kickstarter",
                                                                "category_name": "Bitcoin",
                                                                "parent_id": 18217,
                                                                "binary_placement": "Right",
                                                                "children": [
                                                                    {
                                                                        "distributor_id": 29821,
                                                                        "num_children": 771,
                                                                        "username": "distributor.29821",
                                                                        "full_name": "Gabrielle Borer Denesik",
                                                                        "status": "Active",
                                                                        "product_name": "Kickstarter",
                                                                        "category_name": "Bitcoin",
                                                                        "parent_id": 28731,
                                                                        "binary_placement": "Right",
                                                                        "children": [
                                                                            {
                                                                                "distributor_id": 29825,
                                                                                "num_children": 769,
                                                                                "username": "distributor.29825",
                                                                                "full_name": "Isobel Pollich Braun",
                                                                                "status": "Active",
                                                                                "product_name": null,
                                                                                "category_name": null,
                                                                                "parent_id": 29821,
                                                                                "binary_placement": "Right",
                                                                                "children": [
                                                                                    {
                                                                                        "distributor_id": 29829,
                                                                                        "num_children": 768,
                                                                                        "username": "distributor.29829",
                                                                                        "full_name": "Amara Feest Wisoky",
                                                                                        "status": "Active",
                                                                                        "product_name": "Master Miner",
                                                                                        "category_name": "Bitcoin",
                                                                                        "parent_id": 29825,
                                                                                        "binary_placement": "Right",
                                                                                        "children": [
                                                                                            {
                                                                                                "distributor_id": 29837,
                                                                                                "num_children": 291,
                                                                                                "username": "distributor.29837",
                                                                                                "full_name": "Lacey Cassin II Breitenberg",
                                                                                                "status": "Active",
                                                                                                "product_name": "Kickstarter",
                                                                                                "category_name": "Bitcoin",
                                                                                                "parent_id": 29829,
                                                                                                "binary_placement": "Right",
                                                                                                "children": [
                                                                                                    {
                                                                                                        "distributor_id": 29841,
                                                                                                        "num_children": 208,
                                                                                                        "username": "distributor.29841",
                                                                                                        "full_name": "Dr. Alexanne Farrell Senger",
                                                                                                        "status": "Active",
                                                                                                        "product_name": "Light Miner",
                                                                                                        "category_name": "Bitcoin",
                                                                                                        "parent_id": 29837,
                                                                                                        "binary_placement": "Right",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "distributor_id": 29843,
                                                                                                                "num_children": 205,
                                                                                                                "username": "distributor.29843",
                                                                                                                "full_name": "Ned VonRueden Dickens",
                                                                                                                "status": "Active",
                                                                                                                "product_name": "Light Miner",
                                                                                                                "category_name": "Bitcoin",
                                                                                                                "parent_id": 29841,
                                                                                                                "binary_placement": "Left",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "distributor_id": 29845,
                                                                                                                        "num_children": 204,
                                                                                                                        "username": "distributor.29845",
                                                                                                                        "full_name": "Lottie Hintz Ebert",
                                                                                                                        "status": "Active",
                                                                                                                        "product_name": "Kickstarter",
                                                                                                                        "category_name": "Bitcoin",
                                                                                                                        "parent_id": 29843,
                                                                                                                        "binary_placement": "Left",
                                                                                                                        "children": [
                                                                                                                            {
                                                                                                                                "distributor_id": 36077,
                                                                                                                                "num_children": 10,
                                                                                                                                "username": "distributor.36077",
                                                                                                                                "full_name": "Adrianna Abshire Rau",
                                                                                                                                "status": "Active",
                                                                                                                                "product_name": "Mid Miner",
                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                "parent_id": 29845,
                                                                                                                                "binary_placement": "Right",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "distributor_id": 45080,
                                                                                                                                        "num_children": 3,
                                                                                                                                        "username": "distributor.45080",
                                                                                                                                        "full_name": "Nelle O'Hara Raynor",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                        "parent_id": 36077,
                                                                                                                                        "binary_placement": "Right",
                                                                                                                                        "children": [
                                                                                                                                            {
                                                                                                                                                "distributor_id": 45208,
                                                                                                                                                "num_children": 2,
                                                                                                                                                "username": "distributor.45208",
                                                                                                                                                "full_name": "Alena Glover Hamill",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": "Mid Miner",
                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                "parent_id": 45080,
                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                "children": [
                                                                                                                                                    {
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
                                                                                                                                                    },
                                                                                                                                                    {
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
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.45080"
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.36077"
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        "distributor_id": 45079,
                                                                                                                                        "num_children": 5,
                                                                                                                                        "username": "distributor.45079",
                                                                                                                                        "full_name": "Iliana Ryan Towne",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": "Light Miner",
                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                        "parent_id": 36077,
                                                                                                                                        "binary_placement": "Left",
                                                                                                                                        "children": [
                                                                                                                                            {
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
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                "distributor_id": 45199,
                                                                                                                                                "num_children": 3,
                                                                                                                                                "username": "distributor.45199",
                                                                                                                                                "full_name": "Ned Deckow Vandervort",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": "Mid Miner",
                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                "parent_id": 45079,
                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                "children": [
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 47086,
                                                                                                                                                        "num_children": 1,
                                                                                                                                                        "username": "distributor.47086",
                                                                                                                                                        "full_name": "Dr. Moises Schuppe Langworth",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                                        "parent_id": 45199,
                                                                                                                                                        "binary_placement": "Left",
                                                                                                                                                        "children": [
                                                                                                                                                            {
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
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.45199"
                                                                                                                                                    },
                                                                                                                                                    {
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
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.45079"
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.36077"
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "parent_username": "distributor.29845"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "distributor_id": 36076,
                                                                                                                                "num_children": 192,
                                                                                                                                "username": "distributor.36076",
                                                                                                                                "full_name": "Mr. Lewis Koss Marks",
                                                                                                                                "status": "Active",
                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                "parent_id": 29845,
                                                                                                                                "binary_placement": "Left",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "distributor_id": 100109,
                                                                                                                                        "num_children": 21,
                                                                                                                                        "username": "distributor.100109",
                                                                                                                                        "full_name": "Mireya Trantow IV Kshlerin",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": "Master Miner",
                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                        "parent_id": 36076,
                                                                                                                                        "binary_placement": "Right",
                                                                                                                                        "children": [
                                                                                                                                            {
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
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                "distributor_id": 127676,
                                                                                                                                                "num_children": 19,
                                                                                                                                                "username": "distributor.127676",
                                                                                                                                                "full_name": "Rylee Feest Smith",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                "parent_id": 100109,
                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                "children": [
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 127774,
                                                                                                                                                        "num_children": 8,
                                                                                                                                                        "username": "distributor.127774",
                                                                                                                                                        "full_name": "Isac Maggio Yost",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": "Light Miner",
                                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                                        "parent_id": 127676,
                                                                                                                                                        "binary_placement": "Right",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 127796,
                                                                                                                                                                "num_children": 3,
                                                                                                                                                                "username": "distributor.127796",
                                                                                                                                                                "full_name": "Miss Bettye Baumbach PhD Braun",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                                "parent_id": 127774,
                                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.127774"
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 127786,
                                                                                                                                                                "num_children": 3,
                                                                                                                                                                "username": "distributor.127786",
                                                                                                                                                                "full_name": "Mr. Kennedi Batz II Runolfsson",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                                "parent_id": 127774,
                                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.127774"
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.127676"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 128664,
                                                                                                                                                        "num_children": 9,
                                                                                                                                                        "username": "distributor.128664",
                                                                                                                                                        "full_name": "Vernon Satterfield Prosacco",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                                        "parent_id": 127676,
                                                                                                                                                        "binary_placement": "Left",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 193846,
                                                                                                                                                                "num_children": 7,
                                                                                                                                                                "username": "distributor.193846",
                                                                                                                                                                "full_name": "Dr. Marcella Block Harris",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                                "parent_id": 128664,
                                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    },
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.128664"
                                                                                                                                                            },
                                                                                                                                                            {
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
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.127676"
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.100109"
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.36076"
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        "distributor_id": 43108,
                                                                                                                                        "num_children": 169,
                                                                                                                                        "username": "distributor.43108",
                                                                                                                                        "full_name": "Frida Bailey DDS Konopelski",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": "Strong Miner",
                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                        "parent_id": 36076,
                                                                                                                                        "binary_placement": "Left",
                                                                                                                                        "children": [
                                                                                                                                            {
                                                                                                                                                "distributor_id": 55326,
                                                                                                                                                "num_children": 59,
                                                                                                                                                "username": "distributor.55326",
                                                                                                                                                "full_name": "Nicholas Quigley Krajcik",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                "parent_id": 43108,
                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                "children": [
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 58713,
                                                                                                                                                        "num_children": 57,
                                                                                                                                                        "username": "distributor.58713",
                                                                                                                                                        "full_name": "Miss Raina Prohaska Harber",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                                        "parent_id": 55326,
                                                                                                                                                        "binary_placement": "Right",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 92285,
                                                                                                                                                                "num_children": 55,
                                                                                                                                                                "username": "distributor.92285",
                                                                                                                                                                "full_name": "Dr. Malinda West PhD Lindgren",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": "Strong Miner",
                                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                                "parent_id": 58713,
                                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.58713"
                                                                                                                                                            },
                                                                                                                                                            {
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
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.55326"
                                                                                                                                                    },
                                                                                                                                                    {
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
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.43108"
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                "distributor_id": 55325,
                                                                                                                                                "num_children": 108,
                                                                                                                                                "username": "distributor.55325",
                                                                                                                                                "full_name": "Delmer Tillman Schmeler",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                "parent_id": 43108,
                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                "children": [
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 58647,
                                                                                                                                                        "num_children": 41,
                                                                                                                                                        "username": "distributor.58647",
                                                                                                                                                        "full_name": "Max Ritchie IV Douglas",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                                        "parent_id": 55325,
                                                                                                                                                        "binary_placement": "Right",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 127815,
                                                                                                                                                                "num_children": 39,
                                                                                                                                                                "username": "distributor.127815",
                                                                                                                                                                "full_name": "Prof. Giuseppe Herman V Murray",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": "Light Miner",
                                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                                "parent_id": 58647,
                                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    },
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.58647"
                                                                                                                                                            },
                                                                                                                                                            {
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
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.55325"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 55335,
                                                                                                                                                        "num_children": 65,
                                                                                                                                                        "username": "distributor.55335",
                                                                                                                                                        "full_name": "Miss Ludie Goyette DVM Russel",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                                        "parent_id": 55325,
                                                                                                                                                        "binary_placement": "Left",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 58770,
                                                                                                                                                                "num_children": 1,
                                                                                                                                                                "username": "distributor.58770",
                                                                                                                                                                "full_name": "Garnet Jones V Gusikowski",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": "Strong Miner",
                                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                                "parent_id": 55335,
                                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.55335"
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 55368,
                                                                                                                                                                "num_children": 62,
                                                                                                                                                                "username": "distributor.55368",
                                                                                                                                                                "full_name": "Olga Orn Pagac",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": null,
                                                                                                                                                                "category_name": null,
                                                                                                                                                                "parent_id": 55335,
                                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.55335"
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.55325"
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.43108"
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.36076"
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "parent_username": "distributor.29845"
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "parent_username": "distributor.29843"
                                                                                                                    }
                                                                                                                ],
                                                                                                                "parent_username": "distributor.29841"
                                                                                                            },
                                                                                                            {
                                                                                                                "distributor_id": 29844,
                                                                                                                "num_children": 1,
                                                                                                                "username": "distributor.29844",
                                                                                                                "full_name": "Francisco Jast Murphy",
                                                                                                                "status": "Active",
                                                                                                                "product_name": "Light Miner",
                                                                                                                "category_name": "Bitcoin",
                                                                                                                "parent_id": 29841,
                                                                                                                "binary_placement": "Right",
                                                                                                                "children": [
                                                                                                                    {
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
                                                                                                                    }
                                                                                                                ],
                                                                                                                "parent_username": "distributor.29841"
                                                                                                            }
                                                                                                        ],
                                                                                                        "parent_username": "distributor.29837"
                                                                                                    },
                                                                                                    {
                                                                                                        "distributor_id": 29840,
                                                                                                        "num_children": 81,
                                                                                                        "username": "distributor.29840",
                                                                                                        "full_name": "Miss Mariana Lakin V Cummings",
                                                                                                        "status": "Active",
                                                                                                        "product_name": "Kickstarter",
                                                                                                        "category_name": "Bitcoin",
                                                                                                        "parent_id": 29837,
                                                                                                        "binary_placement": "Left",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "distributor_id": 31332,
                                                                                                                "num_children": 32,
                                                                                                                "username": "distributor.31332",
                                                                                                                "full_name": "Daphne Hodkiewicz Hilpert",
                                                                                                                "status": "Active",
                                                                                                                "product_name": null,
                                                                                                                "category_name": null,
                                                                                                                "parent_id": 29840,
                                                                                                                "binary_placement": "Left",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "distributor_id": 31850,
                                                                                                                        "num_children": 31,
                                                                                                                        "username": "distributor.31850",
                                                                                                                        "full_name": "Mac Lueilwitz Labadie",
                                                                                                                        "status": "Active",
                                                                                                                        "product_name": "Kickstarter",
                                                                                                                        "category_name": "Bitcoin",
                                                                                                                        "parent_id": 31332,
                                                                                                                        "binary_placement": "Left",
                                                                                                                        "children": [
                                                                                                                            {
                                                                                                                                "distributor_id": 31856,
                                                                                                                                "num_children": 17,
                                                                                                                                "username": "distributor.31856",
                                                                                                                                "full_name": "Johanna Aufderhar Pfannerstill",
                                                                                                                                "status": "Active",
                                                                                                                                "product_name": null,
                                                                                                                                "category_name": null,
                                                                                                                                "parent_id": 31850,
                                                                                                                                "binary_placement": "Right",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "distributor_id": 31862,
                                                                                                                                        "num_children": 16,
                                                                                                                                        "username": "distributor.31862",
                                                                                                                                        "full_name": "Kristy Smith Kassulke",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                        "parent_id": 31856,
                                                                                                                                        "binary_placement": "Right",
                                                                                                                                        "children": [
                                                                                                                                            {
                                                                                                                                                "distributor_id": 35879,
                                                                                                                                                "num_children": 14,
                                                                                                                                                "username": "distributor.35879",
                                                                                                                                                "full_name": "Dr. Raul Lynch Jr. Satterfield",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": null,
                                                                                                                                                "category_name": null,
                                                                                                                                                "parent_id": 31862,
                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                "children": [
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 36258,
                                                                                                                                                        "num_children": 13,
                                                                                                                                                        "username": "distributor.36258",
                                                                                                                                                        "full_name": "Darron Robel Koelpin",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": null,
                                                                                                                                                        "category_name": null,
                                                                                                                                                        "parent_id": 35879,
                                                                                                                                                        "binary_placement": "Right",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 36259,
                                                                                                                                                                "num_children": 12,
                                                                                                                                                                "username": "distributor.36259",
                                                                                                                                                                "full_name": "Ronny Sporer Franecki",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                                "parent_id": 36258,
                                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    },
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.36258"
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.35879"
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.31862"
                                                                                                                                            },
                                                                                                                                            {
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
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.31856"
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "parent_username": "distributor.31850"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "distributor_id": 31855,
                                                                                                                                "num_children": 12,
                                                                                                                                "username": "distributor.31855",
                                                                                                                                "full_name": "Prof. Kiel McKenzie Stoltenberg",
                                                                                                                                "status": "Active",
                                                                                                                                "product_name": null,
                                                                                                                                "category_name": null,
                                                                                                                                "parent_id": 31850,
                                                                                                                                "binary_placement": "Left",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "distributor_id": 31860,
                                                                                                                                        "num_children": 11,
                                                                                                                                        "username": "distributor.31860",
                                                                                                                                        "full_name": "Dr. Hudson Bradtke Bruen",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                        "parent_id": 31855,
                                                                                                                                        "binary_placement": "Left",
                                                                                                                                        "children": [
                                                                                                                                            {
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
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                "distributor_id": 36027,
                                                                                                                                                "num_children": 9,
                                                                                                                                                "username": "distributor.36027",
                                                                                                                                                "full_name": "Leonardo Bruen Donnelly",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": null,
                                                                                                                                                "category_name": null,
                                                                                                                                                "parent_id": 31860,
                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                "children": [
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 36029,
                                                                                                                                                        "num_children": 8,
                                                                                                                                                        "username": "distributor.36029",
                                                                                                                                                        "full_name": "Eleazar Gulgowski Stroman",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                                        "parent_id": 36027,
                                                                                                                                                        "binary_placement": "Left",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 36030,
                                                                                                                                                                "num_children": 6,
                                                                                                                                                                "username": "distributor.36030",
                                                                                                                                                                "full_name": "Dr. Lenny Keeling Larkin",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": null,
                                                                                                                                                                "category_name": null,
                                                                                                                                                                "parent_id": 36029,
                                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.36029"
                                                                                                                                                            },
                                                                                                                                                            {
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
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.36027"
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.31860"
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.31855"
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "parent_username": "distributor.31850"
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "parent_username": "distributor.31332"
                                                                                                                    }
                                                                                                                ],
                                                                                                                "parent_username": "distributor.29840"
                                                                                                            },
                                                                                                            {
                                                                                                                "distributor_id": 31333,
                                                                                                                "num_children": 47,
                                                                                                                "username": "distributor.31333",
                                                                                                                "full_name": "Fredrick Ondricka Lemke",
                                                                                                                "status": "Active",
                                                                                                                "product_name": null,
                                                                                                                "category_name": null,
                                                                                                                "parent_id": 29840,
                                                                                                                "binary_placement": "Right",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "distributor_id": 31851,
                                                                                                                        "num_children": 46,
                                                                                                                        "username": "distributor.31851",
                                                                                                                        "full_name": "Cortney Stehr Medhurst",
                                                                                                                        "status": "Active",
                                                                                                                        "product_name": "Kickstarter",
                                                                                                                        "category_name": "Bitcoin",
                                                                                                                        "parent_id": 31333,
                                                                                                                        "binary_placement": "Right",
                                                                                                                        "children": [
                                                                                                                            {
                                                                                                                                "distributor_id": 34213,
                                                                                                                                "num_children": 41,
                                                                                                                                "username": "distributor.34213",
                                                                                                                                "full_name": "Fermin Friesen Lakin",
                                                                                                                                "status": "Active",
                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                "parent_id": 31851,
                                                                                                                                "binary_placement": "Right",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "distributor_id": 35010,
                                                                                                                                        "num_children": 40,
                                                                                                                                        "username": "distributor.35010",
                                                                                                                                        "full_name": "Ms. Eve Shields Huel",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": null,
                                                                                                                                        "category_name": null,
                                                                                                                                        "parent_id": 34213,
                                                                                                                                        "binary_placement": "Right",
                                                                                                                                        "children": [
                                                                                                                                            {
                                                                                                                                                "distributor_id": 36256,
                                                                                                                                                "num_children": 38,
                                                                                                                                                "username": "distributor.36256",
                                                                                                                                                "full_name": "Elmore Gottlieb Turcotte",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": null,
                                                                                                                                                "category_name": null,
                                                                                                                                                "parent_id": 35010,
                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                "children": [
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 36257,
                                                                                                                                                        "num_children": 37,
                                                                                                                                                        "username": "distributor.36257",
                                                                                                                                                        "full_name": "Miss Antonietta Waelchi Streich",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": null,
                                                                                                                                                        "category_name": null,
                                                                                                                                                        "parent_id": 36256,
                                                                                                                                                        "binary_placement": "Right",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 36283,
                                                                                                                                                                "num_children": 35,
                                                                                                                                                                "username": "distributor.36283",
                                                                                                                                                                "full_name": "Rey Dickens Schoen",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": null,
                                                                                                                                                                "category_name": null,
                                                                                                                                                                "parent_id": 36257,
                                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.36257"
                                                                                                                                                            },
                                                                                                                                                            {
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
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.36256"
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.35010"
                                                                                                                                            },
                                                                                                                                            {
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
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.34213"
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "parent_username": "distributor.31851"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "distributor_id": 34212,
                                                                                                                                "num_children": 3,
                                                                                                                                "username": "distributor.34212",
                                                                                                                                "full_name": "Eve Macejkovic Marks",
                                                                                                                                "status": "Active",
                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                "parent_id": 31851,
                                                                                                                                "binary_placement": "Left",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "distributor_id": 35008,
                                                                                                                                        "num_children": 2,
                                                                                                                                        "username": "distributor.35008",
                                                                                                                                        "full_name": "Ulices Tremblay Wolff",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                        "parent_id": 34212,
                                                                                                                                        "binary_placement": "Left",
                                                                                                                                        "children": [
                                                                                                                                            {
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
                                                                                                                                            },
                                                                                                                                            {
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
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.34212"
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "parent_username": "distributor.31851"
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "parent_username": "distributor.31333"
                                                                                                                    }
                                                                                                                ],
                                                                                                                "parent_username": "distributor.29840"
                                                                                                            }
                                                                                                        ],
                                                                                                        "parent_username": "distributor.29837"
                                                                                                    }
                                                                                                ],
                                                                                                "parent_username": "distributor.29829"
                                                                                            },
                                                                                            {
                                                                                                "distributor_id": 29836,
                                                                                                "num_children": 475,
                                                                                                "username": "distributor.29836",
                                                                                                "full_name": "Bella Friesen Collier",
                                                                                                "status": "Active",
                                                                                                "product_name": "Kickstarter",
                                                                                                "category_name": "Bitcoin",
                                                                                                "parent_id": 29829,
                                                                                                "binary_placement": "Left",
                                                                                                "children": [
                                                                                                    {
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
                                                                                                    },
                                                                                                    {
                                                                                                        "distributor_id": 29838,
                                                                                                        "num_children": 473,
                                                                                                        "username": "distributor.29838",
                                                                                                        "full_name": "Carrie Kassulke V Hilll",
                                                                                                        "status": "Active",
                                                                                                        "product_name": "Strong Miner",
                                                                                                        "category_name": "Bitcoin",
                                                                                                        "parent_id": 29836,
                                                                                                        "binary_placement": "Left",
                                                                                                        "children": [
                                                                                                            {
                                                                                                                "distributor_id": 31848,
                                                                                                                "num_children": 426,
                                                                                                                "username": "distributor.31848",
                                                                                                                "full_name": "Gabe Satterfield Waelchi",
                                                                                                                "status": "Active",
                                                                                                                "product_name": "Light Miner",
                                                                                                                "category_name": "Bitcoin",
                                                                                                                "parent_id": 29838,
                                                                                                                "binary_placement": "Left",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "distributor_id": 31858,
                                                                                                                        "num_children": 423,
                                                                                                                        "username": "distributor.31858",
                                                                                                                        "full_name": "Mike Runolfsson Rolfson",
                                                                                                                        "status": "Active",
                                                                                                                        "product_name": "Mid Miner",
                                                                                                                        "category_name": "Bitcoin",
                                                                                                                        "parent_id": 31848,
                                                                                                                        "binary_placement": "Left",
                                                                                                                        "children": [
                                                                                                                            {
                                                                                                                                "distributor_id": 31868,
                                                                                                                                "num_children": 56,
                                                                                                                                "username": "distributor.31868",
                                                                                                                                "full_name": "Brandyn Kohler Schuster",
                                                                                                                                "status": "Active",
                                                                                                                                "product_name": "Mid Miner",
                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                "parent_id": 31858,
                                                                                                                                "binary_placement": "Right",
                                                                                                                                "children": [
                                                                                                                                    {
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
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        "distributor_id": 36173,
                                                                                                                                        "num_children": 54,
                                                                                                                                        "username": "distributor.36173",
                                                                                                                                        "full_name": "Prof. Selina Kuhlman DVM Schuppe",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                        "parent_id": 31868,
                                                                                                                                        "binary_placement": "Left",
                                                                                                                                        "children": [
                                                                                                                                            {
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
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                "distributor_id": 45344,
                                                                                                                                                "num_children": 52,
                                                                                                                                                "username": "distributor.45344",
                                                                                                                                                "full_name": "Perry Halvorson Sauer",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": "Strong Miner",
                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                "parent_id": 36173,
                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                "children": [
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 45378,
                                                                                                                                                        "num_children": 40,
                                                                                                                                                        "username": "distributor.45378",
                                                                                                                                                        "full_name": "Erling Haag Wintheiser",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": "Strong Miner",
                                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                                        "parent_id": 45344,
                                                                                                                                                        "binary_placement": "Left",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 115552,
                                                                                                                                                                "num_children": 1,
                                                                                                                                                                "username": "distributor.115552",
                                                                                                                                                                "full_name": "Bridie Prohaska Labadie",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": null,
                                                                                                                                                                "category_name": null,
                                                                                                                                                                "parent_id": 45378,
                                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.45378"
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 45386,
                                                                                                                                                                "num_children": 37,
                                                                                                                                                                "username": "distributor.45386",
                                                                                                                                                                "full_name": "Dr. Cullen Hodkiewicz DDS Stehr",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": "Mid Miner",
                                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                                "parent_id": 45378,
                                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    },
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.45378"
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.45344"
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 45379,
                                                                                                                                                        "num_children": 10,
                                                                                                                                                        "username": "distributor.45379",
                                                                                                                                                        "full_name": "Hailee Shields Bechtelar",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": "Strong Miner",
                                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                                        "parent_id": 45344,
                                                                                                                                                        "binary_placement": "Right",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 67948,
                                                                                                                                                                "num_children": 2,
                                                                                                                                                                "username": "distributor.67948",
                                                                                                                                                                "full_name": "Prof. Paolo Bartell Pollich",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": "Master Miner",
                                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                                "parent_id": 45379,
                                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    },
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.45379"
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 110112,
                                                                                                                                                                "num_children": 6,
                                                                                                                                                                "username": "distributor.110112",
                                                                                                                                                                "full_name": "Mr. Austin Cartwright V Sauer",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": null,
                                                                                                                                                                "category_name": null,
                                                                                                                                                                "parent_id": 45379,
                                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.45379"
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.45344"
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.36173"
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.31868"
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "parent_username": "distributor.31858"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "distributor_id": 31867,
                                                                                                                                "num_children": 365,
                                                                                                                                "username": "distributor.31867",
                                                                                                                                "full_name": "Ms. Claire Ullrich Effertz",
                                                                                                                                "status": "Active",
                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                "parent_id": 31858,
                                                                                                                                "binary_placement": "Left",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "distributor_id": 33232,
                                                                                                                                        "num_children": 1,
                                                                                                                                        "username": "distributor.33232",
                                                                                                                                        "full_name": "Vicenta Renner Homenick",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                        "parent_id": 31867,
                                                                                                                                        "binary_placement": "Right",
                                                                                                                                        "children": [
                                                                                                                                            {
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
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.31867"
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        "distributor_id": 33231,
                                                                                                                                        "num_children": 362,
                                                                                                                                        "username": "distributor.33231",
                                                                                                                                        "full_name": "Juliet Rohan Gutmann",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                        "parent_id": 31867,
                                                                                                                                        "binary_placement": "Left",
                                                                                                                                        "children": [
                                                                                                                                            {
                                                                                                                                                "distributor_id": 33722,
                                                                                                                                                "num_children": 361,
                                                                                                                                                "username": "distributor.33722",
                                                                                                                                                "full_name": "Dr. Kenna Collins PhD Schmeler",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                "parent_id": 33231,
                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                "children": [
                                                                                                                                                    {
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
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 33877,
                                                                                                                                                        "num_children": 359,
                                                                                                                                                        "username": "distributor.33877",
                                                                                                                                                        "full_name": "Ethan Quigley II Jenkins",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                                        "parent_id": 33722,
                                                                                                                                                        "binary_placement": "Left",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 33889,
                                                                                                                                                                "num_children": 358,
                                                                                                                                                                "username": "distributor.33889",
                                                                                                                                                                "full_name": "Hosea Kerluke Crona",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": "Pro Miner",
                                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                                "parent_id": 33877,
                                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    },
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.33877"
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.33722"
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.33231"
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.31867"
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "parent_username": "distributor.31858"
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "parent_username": "distributor.31848"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "distributor_id": 31859,
                                                                                                                        "num_children": 1,
                                                                                                                        "username": "distributor.31859",
                                                                                                                        "full_name": "Faustino Hoppe III Yundt",
                                                                                                                        "status": "Active",
                                                                                                                        "product_name": "Kickstarter",
                                                                                                                        "category_name": "Bitcoin",
                                                                                                                        "parent_id": 31848,
                                                                                                                        "binary_placement": "Right",
                                                                                                                        "children": [
                                                                                                                            {
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
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "parent_username": "distributor.31848"
                                                                                                                    }
                                                                                                                ],
                                                                                                                "parent_username": "distributor.29838"
                                                                                                            },
                                                                                                            {
                                                                                                                "distributor_id": 31849,
                                                                                                                "num_children": 45,
                                                                                                                "username": "distributor.31849",
                                                                                                                "full_name": "Nya Farrell Swift",
                                                                                                                "status": "Active",
                                                                                                                "product_name": "Kickstarter",
                                                                                                                "category_name": "Bitcoin",
                                                                                                                "parent_id": 29838,
                                                                                                                "binary_placement": "Right",
                                                                                                                "children": [
                                                                                                                    {
                                                                                                                        "distributor_id": 32042,
                                                                                                                        "num_children": 25,
                                                                                                                        "username": "distributor.32042",
                                                                                                                        "full_name": "Miss Luisa Kshlerin MD Barrows",
                                                                                                                        "status": "Active",
                                                                                                                        "product_name": "Mid Miner",
                                                                                                                        "category_name": "Bitcoin",
                                                                                                                        "parent_id": 31849,
                                                                                                                        "binary_placement": "Right",
                                                                                                                        "children": [
                                                                                                                            {
                                                                                                                                "distributor_id": 55370,
                                                                                                                                "num_children": 6,
                                                                                                                                "username": "distributor.55370",
                                                                                                                                "full_name": "Selmer Koelpin Stroman",
                                                                                                                                "status": "Active",
                                                                                                                                "product_name": "Mid Miner",
                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                "parent_id": 32042,
                                                                                                                                "binary_placement": "Left",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "distributor_id": 55375,
                                                                                                                                        "num_children": 5,
                                                                                                                                        "username": "distributor.55375",
                                                                                                                                        "full_name": "Ms. Alison Schimmel Adams",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                        "parent_id": 55370,
                                                                                                                                        "binary_placement": "Left",
                                                                                                                                        "children": [
                                                                                                                                            {
                                                                                                                                                "distributor_id": 55396,
                                                                                                                                                "num_children": 4,
                                                                                                                                                "username": "distributor.55396",
                                                                                                                                                "full_name": "Prof. Trevor Zboncak Kuvalis",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": "Light Miner",
                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                "parent_id": 55375,
                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                "children": [
                                                                                                                                                    {
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
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 56249,
                                                                                                                                                        "num_children": 2,
                                                                                                                                                        "username": "distributor.56249",
                                                                                                                                                        "full_name": "Mrs. Jermaine McClure Dach",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": null,
                                                                                                                                                        "category_name": null,
                                                                                                                                                        "parent_id": 55396,
                                                                                                                                                        "binary_placement": "Left",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 56298,
                                                                                                                                                                "num_children": 1,
                                                                                                                                                                "username": "distributor.56298",
                                                                                                                                                                "full_name": "Mrs. Liana Schamberger II Balistreri",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": null,
                                                                                                                                                                "category_name": null,
                                                                                                                                                                "parent_id": 56249,
                                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.56249"
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.55396"
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.55375"
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.55370"
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "parent_username": "distributor.32042"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "distributor_id": 55371,
                                                                                                                                "num_children": 17,
                                                                                                                                "username": "distributor.55371",
                                                                                                                                "full_name": "Leta Treutel O'Reilly",
                                                                                                                                "status": "Active",
                                                                                                                                "product_name": "Mid Miner",
                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                "parent_id": 32042,
                                                                                                                                "binary_placement": "Right",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "distributor_id": 75779,
                                                                                                                                        "num_children": 16,
                                                                                                                                        "username": "distributor.75779",
                                                                                                                                        "full_name": "Caterina Will I Gerlach",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                        "parent_id": 55371,
                                                                                                                                        "binary_placement": "Right",
                                                                                                                                        "children": [
                                                                                                                                            {
                                                                                                                                                "distributor_id": 97685,
                                                                                                                                                "num_children": 14,
                                                                                                                                                "username": "distributor.97685",
                                                                                                                                                "full_name": "Quinn Vandervort Rempel",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": "Kickstarter",
                                                                                                                                                "category_name": "Bitcoin",
                                                                                                                                                "parent_id": 75779,
                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                "children": [
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 97708,
                                                                                                                                                        "num_children": 13,
                                                                                                                                                        "username": "distributor.97708",
                                                                                                                                                        "full_name": "Regan Farrell Dach",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": "Kickstarter",
                                                                                                                                                        "category_name": "Bitcoin",
                                                                                                                                                        "parent_id": 97685,
                                                                                                                                                        "binary_placement": "Right",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 98101,
                                                                                                                                                                "num_children": 6,
                                                                                                                                                                "username": "distributor.98101",
                                                                                                                                                                "full_name": "Ahmed Roberts II Huels",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": null,
                                                                                                                                                                "category_name": null,
                                                                                                                                                                "parent_id": 97708,
                                                                                                                                                                "binary_placement": "Right",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.97708"
                                                                                                                                                            },
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 98119,
                                                                                                                                                                "num_children": 5,
                                                                                                                                                                "username": "distributor.98119",
                                                                                                                                                                "full_name": "Elias Hauck II Bradtke",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": null,
                                                                                                                                                                "category_name": null,
                                                                                                                                                                "parent_id": 97708,
                                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.97708"
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.97685"
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.75779"
                                                                                                                                            },
                                                                                                                                            {
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
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.55371"
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "parent_username": "distributor.32042"
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "parent_username": "distributor.31849"
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "distributor_id": 32041,
                                                                                                                        "num_children": 18,
                                                                                                                        "username": "distributor.32041",
                                                                                                                        "full_name": "Pietro Yundt V Lubowitz",
                                                                                                                        "status": "Active",
                                                                                                                        "product_name": "Light Miner",
                                                                                                                        "category_name": "Bitcoin",
                                                                                                                        "parent_id": 31849,
                                                                                                                        "binary_placement": "Left",
                                                                                                                        "children": [
                                                                                                                            {
                                                                                                                                "distributor_id": 39052,
                                                                                                                                "num_children": 4,
                                                                                                                                "username": "distributor.39052",
                                                                                                                                "full_name": "Lonie Legros Grant",
                                                                                                                                "status": "Active",
                                                                                                                                "product_name": null,
                                                                                                                                "category_name": null,
                                                                                                                                "parent_id": 32041,
                                                                                                                                "binary_placement": "Left",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "distributor_id": 39473,
                                                                                                                                        "num_children": 2,
                                                                                                                                        "username": "distributor.39473",
                                                                                                                                        "full_name": "Virginia Gusikowski Lemke",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": null,
                                                                                                                                        "category_name": null,
                                                                                                                                        "parent_id": 39052,
                                                                                                                                        "binary_placement": "Left",
                                                                                                                                        "children": [
                                                                                                                                            {
                                                                                                                                                "distributor_id": 39481,
                                                                                                                                                "num_children": 1,
                                                                                                                                                "username": "distributor.39481",
                                                                                                                                                "full_name": "Darrick Stanton Funk",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": null,
                                                                                                                                                "category_name": null,
                                                                                                                                                "parent_id": 39473,
                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                "children": [
                                                                                                                                                    {
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
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.39473"
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.39052"
                                                                                                                                    },
                                                                                                                                    {
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
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "parent_username": "distributor.32041"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "distributor_id": 39053,
                                                                                                                                "num_children": 12,
                                                                                                                                "username": "distributor.39053",
                                                                                                                                "full_name": "Dr. Judy Jerde Johnston",
                                                                                                                                "status": "Active",
                                                                                                                                "product_name": null,
                                                                                                                                "category_name": null,
                                                                                                                                "parent_id": 32041,
                                                                                                                                "binary_placement": "Right",
                                                                                                                                "children": [
                                                                                                                                    {
                                                                                                                                        "distributor_id": 39478,
                                                                                                                                        "num_children": 11,
                                                                                                                                        "username": "distributor.39478",
                                                                                                                                        "full_name": "Dr. Axel Connelly II Sporer",
                                                                                                                                        "status": "Active",
                                                                                                                                        "product_name": null,
                                                                                                                                        "category_name": null,
                                                                                                                                        "parent_id": 39053,
                                                                                                                                        "binary_placement": "Left",
                                                                                                                                        "children": [
                                                                                                                                            {
                                                                                                                                                "distributor_id": 56011,
                                                                                                                                                "num_children": 10,
                                                                                                                                                "username": "distributor.56011",
                                                                                                                                                "full_name": "Ashly O'Conner Rau",
                                                                                                                                                "status": "Active",
                                                                                                                                                "product_name": null,
                                                                                                                                                "category_name": null,
                                                                                                                                                "parent_id": 39478,
                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                "children": [
                                                                                                                                                    {
                                                                                                                                                        "distributor_id": 56211,
                                                                                                                                                        "num_children": 9,
                                                                                                                                                        "username": "distributor.56211",
                                                                                                                                                        "full_name": "Whitney Schuster Champlin",
                                                                                                                                                        "status": "Active",
                                                                                                                                                        "product_name": null,
                                                                                                                                                        "category_name": null,
                                                                                                                                                        "parent_id": 56011,
                                                                                                                                                        "binary_placement": "Left",
                                                                                                                                                        "children": [
                                                                                                                                                            {
                                                                                                                                                                "distributor_id": 56217,
                                                                                                                                                                "num_children": 8,
                                                                                                                                                                "username": "distributor.56217",
                                                                                                                                                                "full_name": "Edmund Collins IV Walter",
                                                                                                                                                                "status": "Active",
                                                                                                                                                                "product_name": null,
                                                                                                                                                                "category_name": null,
                                                                                                                                                                "parent_id": 56211,
                                                                                                                                                                "binary_placement": "Left",
                                                                                                                                                                "children": [
                                                                                                                                                                    {
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
                                                                                                                                                                    }
                                                                                                                                                                ],
                                                                                                                                                                "parent_username": "distributor.56211"
                                                                                                                                                            }
                                                                                                                                                        ],
                                                                                                                                                        "parent_username": "distributor.56011"
                                                                                                                                                    }
                                                                                                                                                ],
                                                                                                                                                "parent_username": "distributor.39478"
                                                                                                                                            }
                                                                                                                                        ],
                                                                                                                                        "parent_username": "distributor.39053"
                                                                                                                                    }
                                                                                                                                ],
                                                                                                                                "parent_username": "distributor.32041"
                                                                                                                            }
                                                                                                                        ],
                                                                                                                        "parent_username": "distributor.31849"
                                                                                                                    }
                                                                                                                ],
                                                                                                                "parent_username": "distributor.29838"
                                                                                                            }
                                                                                                        ],
                                                                                                        "parent_username": "distributor.29836"
                                                                                                    }
                                                                                                ],
                                                                                                "parent_username": "distributor.29829"
                                                                                            }
                                                                                        ],
                                                                                        "parent_username": "distributor.29825"
                                                                                    }
                                                                                ],
                                                                                "parent_username": "distributor.29821"
                                                                            },
                                                                            {
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
                                                                            }
                                                                        ],
                                                                        "parent_username": "distributor.28731"
                                                                    },
                                                                    {
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
                                                                    }
                                                                ],
                                                                "parent_username": "distributor.18217"
                                                            }
                                                        ],
                                                        "parent_username": "distributor.18202"
                                                    }
                                                ],
                                                "parent_username": "distributor.18194"
                                            }
                                        ],
                                        "parent_username": "distributor.18190"
                                    },
                                    {
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
                                    }
                                ],
                                "parent_username": "distributor.18183"
                            }
                        ],
                        "parent_username": "distributor.16344"
                    },
                    {
                        "distributor_id": 18184,
                        "num_children": 9,
                        "username": "distributor.18184",
                        "full_name": "Shemar Goldner DDS D'Amore",
                        "status": "Active",
                        "product_name": "Light Miner",
                        "category_name": "Bitcoin",
                        "parent_id": 16344,
                        "binary_placement": "Right",
                        "children": [
                            {
                                "distributor_id": 29893,
                                "num_children": 8,
                                "username": "distributor.29893",
                                "full_name": "Oliver Daugherty Rutherford",
                                "status": "Active",
                                "product_name": null,
                                "category_name": null,
                                "parent_id": 18184,
                                "binary_placement": "Right",
                                "children": [
                                    {
                                        "distributor_id": 46920,
                                        "num_children": 7,
                                        "username": "distributor.46920",
                                        "full_name": "Eladio Wolf Bogan",
                                        "status": "Active",
                                        "product_name": null,
                                        "category_name": null,
                                        "parent_id": 29893,
                                        "binary_placement": "Right",
                                        "children": [
                                            {
                                                "distributor_id": 47047,
                                                "num_children": 6,
                                                "username": "distributor.47047",
                                                "full_name": "Esmeralda Kuhic Tremblay",
                                                "status": "Active",
                                                "product_name": "Starter",
                                                "category_name": "Bitcoin",
                                                "parent_id": 46920,
                                                "binary_placement": "Right",
                                                "children": [
                                                    {
                                                        "distributor_id": 47549,
                                                        "num_children": 2,
                                                        "username": "distributor.47549",
                                                        "full_name": "Miss Eldridge Flatley Kertzmann",
                                                        "status": "Active",
                                                        "product_name": null,
                                                        "category_name": null,
                                                        "parent_id": 47047,
                                                        "binary_placement": "Right",
                                                        "children": [
                                                            {
                                                                "distributor_id": 48594,
                                                                "num_children": 1,
                                                                "username": "distributor.48594",
                                                                "full_name": "Brody Schaden Gleichner",
                                                                "status": "Active",
                                                                "product_name": null,
                                                                "category_name": null,
                                                                "parent_id": 47549,
                                                                "binary_placement": "Right",
                                                                "children": [
                                                                    {
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
                                                                    }
                                                                ],
                                                                "parent_username": "distributor.47549"
                                                            }
                                                        ],
                                                        "parent_username": "distributor.47047"
                                                    },
                                                    {
                                                        "distributor_id": 47548,
                                                        "num_children": 2,
                                                        "username": "distributor.47548",
                                                        "full_name": "Prof. Beverly Yost III Kris",
                                                        "status": "Active",
                                                        "product_name": null,
                                                        "category_name": null,
                                                        "parent_id": 47047,
                                                        "binary_placement": "Left",
                                                        "children": [
                                                            {
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
                                                            },
                                                            {
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
                                                            }
                                                        ],
                                                        "parent_username": "distributor.47047"
                                                    }
                                                ],
                                                "parent_username": "distributor.46920"
                                            }
                                        ],
                                        "parent_username": "distributor.29893"
                                    }
                                ],
                                "parent_username": "distributor.18184"
                            }
                        ],
                        "parent_username": "distributor.16344"
                    }
                ],
                "parent_username": "distributor.16321"
            },
  orgchart = new OrgChart({
    'data' : datascource,
    'nodeTitle': 'full_name',
    'depth': 2,
    'nodeContent': 'product_name'
  });

  document.querySelector('#chart-container').appendChild(orgchart); 

});