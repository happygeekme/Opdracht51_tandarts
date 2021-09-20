const patients = [
    {
      id: 1,
      first_name: "Bamby",
      last_name: "McIlwraith",
      email: "bmcilwraith0@wunderground.com",
      phone: "554 103 7622",
      birth_year: 2004,
      sick: false
    },
    {
      id: 2,
      first_name: "Alika",
      last_name: "Baruch",
      email: "abaruch1@multiply.com",
      phone: "400 852 3231",
      birth_year: 1960,
      sick: false
    },
    {
      id: 3,
      first_name: "Shena",
      last_name: "Russon",
      email: "srusson2@goodreads.com",
      phone: "735 803 0647",
      birth_year: 1978,
      sick: false
    },
    {
      id: 4,
      first_name: "Sunshine",
      last_name: "Tomeo",
      email: "stomeo3@netscape.com",
      phone: "909 358 2879",
      birth_year: 1968,
      sick: false
    },
    {
      id: 5,
      first_name: "Cesar",
      last_name: "Hinstock",
      email: "chinstock4@techcrunch.com",
      phone: "745 917 2747",
      birth_year: 2003,
      sick: false
    },
    {
      id: 6,
      first_name: "Olympie",
      last_name: "Spilsbury",
      email: "ospilsbury5@360.cn",
      phone: "586 468 7700",
      birth_year: 1957,
      sick: false
    },
    {
      id: 7,
      first_name: "Lorry",
      last_name: "Sheldon",
      email: "lsheldon6@cafepress.com",
      phone: "769 316 6466",
      birth_year: 1952,
      sick: false
    },
    {
      id: 8,
      first_name: "Kristin",
      last_name: "Gwyllt",
      email: "kgwyllt7@narod.ru",
      phone: "550 967 6989",
      birth_year: 1976,
      sick: false
    },
    {
      id: 9,
      first_name: "Nathanil",
      last_name: "McQuie",
      email: "nmcquie8@foxnews.com",
      phone: "966 200 5567",
      birth_year: 1927,
      sick: false
    },
    {
      id: 10,
      first_name: "Chloris",
      last_name: "Lealle",
      email: "clealle9@soundcloud.com",
      phone: "708 968 2576",
      birth_year: 1989,
      sick: false
    },
    {
      id: 11,
      first_name: "Lusa",
      last_name: "Sheircliffe",
      email: "lsheircliffea@usatoday.com",
      phone: "642 756 3571",
      birth_year: 1983,
      sick: false
    },
    {
      id: 12,
      first_name: "Abigael",
      last_name: "Fardoe",
      email: "afardoeb@vk.com",
      phone: "371 590 8283",
      birth_year: 1977,
      sick: false
    },
    {
      id: 13,
      first_name: "Norean",
      last_name: "Bwy",
      email: "nbwyc@yandex.ru",
      phone: "833 457 6913",
      birth_year: 1980,
      sick: false
    },
    {
      id: 14,
      first_name: "Myra",
      last_name: "Flips",
      email: "mflipsd@wunderground.com",
      phone: "816 794 8244",
      birth_year: 1970,
      sick: false
    },
    {
      id: 15,
      first_name: "Olav",
      last_name: "Korneichuk",
      email: "okorneichuke@multiply.com",
      phone: "517 217 9005",
      birth_year: 2005,
      sick: false
    },
    {
      id: 16,
      first_name: "Karalee",
      last_name: "Harteley",
      email: "kharteleyf@loc.gov",
      phone: "129 642 5184",
      birth_year: 1982,
      sick: false
    },
    {
      id: 17,
      first_name: "Cybill",
      last_name: "Old",
      email: "coldg@mozilla.com",
      phone: "971 219 6714",
      birth_year: 1930,
      sick: false
    },
    {
      id: 18,
      first_name: "Crystal",
      last_name: "Marioneau",
      email: "cmarioneauh@google.de",
      phone: "162 561 9779",
      birth_year: 1926,
      sick: false
    },
    {
      id: 19,
      first_name: "Milzie",
      last_name: "Undy",
      email: "mundyi@ustream.tv",
      phone: "406 339 9940",
      birth_year: 1959,
      sick: false
    },
    {
      id: 20,
      first_name: "Rosabel",
      last_name: "Josefowicz",
      email: "rjosefowiczj@drupal.org",
      phone: "578 285 6139",
      birth_year: 1965,
      sick: false
    },
    {
      id: 21,
      first_name: "Monty",
      last_name: "Fader",
      email: "mfaderk@howstuffworks.com",
      phone: "132 438 8977",
      birth_year: 1971,
      sick: false
    },
    {
      id: 22,
      first_name: "Pamella",
      last_name: "Welbourn",
      email: "pwelbournl@flickr.com",
      phone: "174 815 1370",
      birth_year: 1966,
      sick: false
    },
    {
      id: 23,
      first_name: "Clim",
      last_name: "Nibley",
      email: "cnibleym@taobao.com",
      phone: "763 131 1985",
      birth_year: 1985,
      sick: false
    },
    {
      id: 24,
      first_name: "Selinda",
      last_name: "McCole",
      email: "smccolen@discovery.com",
      phone: "697 492 3682",
      birth_year: 1946,
      sick: false
    },
    {
      id: 25,
      first_name: "Toni",
      last_name: "Drysdale",
      email: "tdrysdaleo@google.de",
      phone: "266 661 5563",
      birth_year: 1957,
      sick: false
    },
    {
      id: 26,
      first_name: "Mara",
      last_name: "Buck",
      email: "mbuckp@wikispaces.com",
      phone: "792 291 9203",
      birth_year: 1991,
      sick: false
    },
    {
      id: 27,
      first_name: "Constantia",
      last_name: "Farny",
      email: "cfarnyq@nifty.com",
      phone: "101 878 3807",
      birth_year: 1964,
      sick: false
    },
    {
      id: 28,
      first_name: "Angil",
      last_name: "Brunnstein",
      email: "abrunnsteinr@fc2.com",
      phone: "233 224 6874",
      birth_year: 1975,
      sick: false
    },
    {
      id: 29,
      first_name: "Georgianne",
      last_name: "Godlee",
      email: "ggodlees@blogger.com",
      phone: "317 773 4308",
      birth_year: 1944,
      sick: false
    },
    {
      id: 30,
      first_name: "Tilda",
      last_name: "Buyers",
      email: "tbuyerst@wisc.edu",
      phone: "422 374 2966",
      birth_year: 2002,
      sick: false
    },
    {
      id: 31,
      first_name: "Gui",
      last_name: "Warman",
      email: "gwarmanu@ycombinator.com",
      phone: "707 706 5373",
      birth_year: 1945,
      sick: false
    },
    {
      id: 32,
      first_name: "Daphene",
      last_name: "Hagley",
      email: "dhagleyv@globo.com",
      phone: "994 758 9721",
      birth_year: 1954,
      sick: false
    },
    {
      id: 33,
      first_name: "Rois",
      last_name: "Riggott",
      email: "rriggottw@google.com",
      phone: "688 645 8130",
      birth_year: 1937,
      sick: false
    },
    {
      id: 34,
      first_name: "Devina",
      last_name: "Filmer",
      email: "dfilmerx@illinois.edu",
      phone: "625 400 7335",
      birth_year: 1992,
      sick: false
    },
    {
      id: 35,
      first_name: "Michel",
      last_name: "Grigs",
      email: "mgrigsy@addthis.com",
      phone: "511 591 5012",
      birth_year: 1955,
      sick: false
    },
    {
      id: 36,
      first_name: "Tonie",
      last_name: "Giraudot",
      email: "tgiraudotz@feedburner.com",
      phone: "184 406 4460",
      birth_year: 1959,
      sick: false
    },
    {
      id: 37,
      first_name: "Taddeo",
      last_name: "Casaccia",
      email: "tcasaccia10@ox.ac.uk",
      phone: "414 792 1069",
      birth_year: 1944,
      sick: false
    },
    {
      id: 38,
      first_name: "Ola",
      last_name: "Clerke",
      email: "oclerke11@alibaba.com",
      phone: "872 333 4357",
      birth_year: 1949,
      sick: false
    },
    {
      id: 39,
      first_name: "Erroll",
      last_name: "Fenelow",
      email: "efenelow12@gravatar.com",
      phone: "121 824 2496",
      birth_year: 1954,
      sick: false
    },
    {
      id: 40,
      first_name: "Berrie",
      last_name: "Beteriss",
      email: "bbeteriss13@craigslist.org",
      phone: "729 204 6364",
      birth_year: 1982,
      sick: false
    },
    {
      id: 41,
      first_name: "Roosevelt",
      last_name: "Yurenin",
      email: "ryurenin14@tinyurl.com",
      phone: "987 535 2673",
      birth_year: 1998,
      sick: false
    },
    {
      id: 42,
      first_name: "Holly",
      last_name: "Ioannou",
      email: "hioannou15@goo.gl",
      phone: "622 291 3082",
      birth_year: 1984,
      sick: false
    },
    {
      id: 43,
      first_name: "Prentiss",
      last_name: "Methringham",
      email: "pmethringham16@slashdot.org",
      phone: "669 443 7067",
      birth_year: 1929,
      sick: false
    },
    {
      id: 44,
      first_name: "Claybourne",
      last_name: "McAllan",
      email: "cmcallan17@taobao.com",
      phone: "585 595 4402",
      birth_year: 1985,
      sick: false
    },
    {
      id: 45,
      first_name: "Torrin",
      last_name: "Escoffrey",
      email: "tescoffrey18@theglobeandmail.com",
      phone: "613 541 9375",
      birth_year: 1986,
      sick: false
    },
    {
      id: 46,
      first_name: "Lizbeth",
      last_name: "GiacobbiniJacob",
      email: "lgiacobbinijacob19@usa.gov",
      phone: "691 802 2471",
      birth_year: 1992,
      sick: false
    },
    {
      id: 47,
      first_name: "Hermon",
      last_name: "Keddey",
      email: "hkeddey1a@biglobe.ne.jp",
      phone: "939 171 1770",
      birth_year: 2004,
      sick: false
    },
    {
      id: 48,
      first_name: "Katharina",
      last_name: "Rydings",
      email: "krydings1b@tinyurl.com",
      phone: "161 371 4977",
      birth_year: 2000,
      sick: false
    },
    {
      id: 49,
      first_name: "Livvyy",
      last_name: "Wheelband",
      email: "lwheelband1c@mayoclinic.com",
      phone: "811 220 7820",
      birth_year: 1981,
      sick: false
    },
    {
      id: 50,
      first_name: "Asia",
      last_name: "Garraway",
      email: "agarraway1d@ebay.co.uk",
      phone: "704 535 7225",
      birth_year: 1976,
      sick: false
    },
  ];
  
  export { patients }