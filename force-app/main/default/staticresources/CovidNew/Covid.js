window.Covid = (function() {

    var data = [
    {
        "date": "01-Apr-20",
        "states": [
            {
                "state": "an",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ap",
                "confirmed": "67",
                "recovered": "1",
                "deceased": "0"
            },
            {
                "state": "ar",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "15",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "br",
                "confirmed": "3",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ch",
                "confirmed": "2",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ct",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "32",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dn",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "gj",
                "confirmed": "13",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "hp",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "hr",
                "confirmed": "0",
                "recovered": "10",
                "deceased": "0"
            },
            {
                "state": "jh",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "jk",
                "confirmed": "7",
                "recovered": "1",
                "deceased": "0"
            },
            {
                "state": "ka",
                "confirmed": "9",
                "recovered": "1",
                "deceased": "0"
            },
            {
                "state": "kl",
                "confirmed": "24",
                "recovered": "2",
                "deceased": "0"
            },
            {
                "state": "la",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ld",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "mn",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "mp",
                "confirmed": "32",
                "recovered": "0",
                "deceased": "1"
            },
            {
                "state": "mz",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "or",
                "confirmed": "1",
                "recovered": "1",
                "deceased": "0"
            },
            {
                "state": "pb",
                "confirmed": "4",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "py",
                "confirmed": "2",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "rj",
                "confirmed": "27",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "sk",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "tg",
                "confirmed": "30",
                "recovered": "0",
                "deceased": "3"
            },
            {
                "state": "tn",
                "confirmed": "110",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "tr",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "13",
                "recovered": "0",
                "deceased": "2"
            },
            {
                "state": "ut",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "wb",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            }
        ]
    },
    {
        "date": "01-May-20",
        "states": [
            {
                "state": "an",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ap",
                "confirmed": "60",
                "recovered": "82",
                "deceased": "2"
            },
            {
                "state": "ar",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "0",
                "recovered": "4",
                "deceased": "0"
            },
            {
                "state": "br",
                "confirmed": "41",
                "recovered": "14",
                "deceased": "1"
            },
            {
                "state": "ch",
                "confirmed": "14",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ct",
                "confirmed": "3",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "223",
                "recovered": "73",
                "deceased": "2"
            },
            {
                "state": "dn",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "gj",
                "confirmed": "326",
                "recovered": "123",
                "deceased": "22"
            },
            {
                "state": "hp",
                "confirmed": "0",
                "recovered": "2",
                "deceased": "0"
            },
            {
                "state": "hr",
                "confirmed": "18",
                "recovered": "6",
                "deceased": "0"
            },
            {
                "state": "jh",
                "confirmed": "3",
                "recovered": "2",
                "deceased": "0"
            },
            {
                "state": "jk",
                "confirmed": "25",
                "recovered": "31",
                "deceased": "0"
            },
            {
                "state": "ka",
                "confirmed": "24",
                "recovered": "22",
                "deceased": "0"
            },
            {
                "state": "kl",
                "confirmed": "0",
                "recovered": "9",
                "deceased": "0"
            },
            {
                "state": "la",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ld",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "0",
                "recovered": "10",
                "deceased": "0"
            },
            {
                "state": "mn",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "mp",
                "confirmed": "90",
                "recovered": "42",
                "deceased": "8"
            },
            {
                "state": "mz",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "or",
                "confirmed": "11",
                "recovered": "14",
                "deceased": "0"
            },
            {
                "state": "pb",
                "confirmed": "105",
                "recovered": "4",
                "deceased": "0"
            },
            {
                "state": "py",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "rj",
                "confirmed": "82",
                "recovered": "223",
                "deceased": "4"
            },
            {
                "state": "sk",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "tg",
                "confirmed": "6",
                "recovered": "22",
                "deceased": "0"
            },
            {
                "state": "tn",
                "confirmed": "203",
                "recovered": "54",
                "deceased": "1"
            },
            {
                "state": "tr",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "117",
                "recovered": "103",
                "deceased": "2"
            },
            {
                "state": "ut",
                "confirmed": "0",
                "recovered": "1",
                "deceased": "1"
            },
            {
                "state": "wb",
                "confirmed": "37",
                "recovered": "15",
                "deceased": "8"
            }
        ]
    },
    {
        "date": "01-Jun-20",
        "states": [
            {
                "state": "an",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ap",
                "confirmed": "105",
                "recovered": "34",
                "deceased": "2"
            },
            {
                "state": "ar",
                "confirmed": "18",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "146",
                "recovered": "99",
                "deceased": "0"
            },
            {
                "state": "br",
                "confirmed": "138",
                "recovered": "221",
                "deceased": "0"
            },
            {
                "state": "ch",
                "confirmed": "4",
                "recovered": "15",
                "deceased": "0"
            },
            {
                "state": "ct",
                "confirmed": "49",
                "recovered": "7",
                "deceased": "0"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "990",
                "recovered": "268",
                "deceased": "50"
            },
            {
                "state": "dn",
                "confirmed": "1",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "2",
                "recovered": "6",
                "deceased": "0"
            },
            {
                "state": "gj",
                "confirmed": "423",
                "recovered": "861",
                "deceased": "25"
            },
            {
                "state": "hp",
                "confirmed": "9",
                "recovered": "2",
                "deceased": "0"
            },
            {
                "state": "hr",
                "confirmed": "265",
                "recovered": "7",
                "deceased": "1"
            },
            {
                "state": "jh",
                "confirmed": "26",
                "recovered": "40",
                "deceased": "0"
            },
            {
                "state": "jk",
                "confirmed": "155",
                "recovered": "19",
                "deceased": "3"
            },
            {
                "state": "ka",
                "confirmed": "187",
                "recovered": "100",
                "deceased": "1"
            },
            {
                "state": "kl",
                "confirmed": "57",
                "recovered": "18",
                "deceased": "1"
            },
            {
                "state": "la",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ld",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "1",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "mn",
                "confirmed": "12",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "mp",
                "confirmed": "194",
                "recovered": "161",
                "deceased": "8"
            },
            {
                "state": "mz",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "or",
                "confirmed": "156",
                "recovered": "119",
                "deceased": "0"
            },
            {
                "state": "pb",
                "confirmed": "38",
                "recovered": "13",
                "deceased": "-1"
            },
            {
                "state": "py",
                "confirmed": "9",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "rj",
                "confirmed": "269",
                "recovered": "181",
                "deceased": "5"
            },
            {
                "state": "sk",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "tg",
                "confirmed": "94",
                "recovered": "63",
                "deceased": "6"
            },
            {
                "state": "tn",
                "confirmed": "1162",
                "recovered": "413",
                "deceased": "11"
            },
            {
                "state": "tr",
                "confirmed": "107",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "un",
                "confirmed": "139",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "286",
                "recovered": "187",
                "deceased": "5"
            },
            {
                "state": "ut",
                "confirmed": "52",
                "recovered": "120",
                "deceased": "0"
            },
            {
                "state": "wb",
                "confirmed": "271",
                "recovered": "149",
                "deceased": "8"
            }
        ]
    },
    {
        "date": "01-Jul-20",
        "states": [
            {
                "state": "an",
                "confirmed": "3",
                "recovered": "5",
                "deceased": "0"
            },
            {
                "state": "ap",
                "confirmed": "657",
                "recovered": "477",
                "deceased": "6"
            },
            {
                "state": "ar",
                "confirmed": "4",
                "recovered": "4",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "548",
                "recovered": "184",
                "deceased": "0"
            },
            {
                "state": "br",
                "confirmed": "216",
                "recovered": "267",
                "deceased": "5"
            },
            {
                "state": "ch",
                "confirmed": "6",
                "recovered": "3",
                "deceased": "0"
            },
            {
                "state": "ct",
                "confirmed": "82",
                "recovered": "53",
                "deceased": "1"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "2442",
                "recovered": "1644",
                "deceased": "61"
            },
            {
                "state": "dn",
                "confirmed": "16",
                "recovered": "27",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "72",
                "recovered": "74",
                "deceased": "1"
            },
            {
                "state": "gj",
                "confirmed": "675",
                "recovered": "368",
                "deceased": "21"
            },
            {
                "state": "hp",
                "confirmed": "26",
                "recovered": "42",
                "deceased": "0"
            },
            {
                "state": "hr",
                "confirmed": "393",
                "recovered": "527",
                "deceased": "4"
            },
            {
                "state": "jh",
                "confirmed": "35",
                "recovered": "47",
                "deceased": "0"
            },
            {
                "state": "jk",
                "confirmed": "198",
                "recovered": "134",
                "deceased": "4"
            },
            {
                "state": "ka",
                "confirmed": "1272",
                "recovered": "145",
                "deceased": "7"
            },
            {
                "state": "kl",
                "confirmed": "151",
                "recovered": "132",
                "deceased": "1"
            },
            {
                "state": "la",
                "confirmed": "17",
                "recovered": "46",
                "deceased": "0"
            },
            {
                "state": "ld",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "2",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "mn",
                "confirmed": "26",
                "recovered": "26",
                "deceased": "0"
            },
            {
                "state": "mp",
                "confirmed": "268",
                "recovered": "260",
                "deceased": "9"
            },
            {
                "state": "mz",
                "confirmed": "0",
                "recovered": "1",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "42",
                "recovered": "14",
                "deceased": "0"
            },
            {
                "state": "or",
                "confirmed": "251",
                "recovered": "164",
                "deceased": "1"
            },
            {
                "state": "pb",
                "confirmed": "100",
                "recovered": "122",
                "deceased": "5"
            },
            {
                "state": "py",
                "confirmed": "25",
                "recovered": "29",
                "deceased": "0"
            },
            {
                "state": "rj",
                "confirmed": "304",
                "recovered": "354",
                "deceased": "8"
            },
            {
                "state": "sk",
                "confirmed": "1",
                "recovered": "2",
                "deceased": "0"
            },
            {
                "state": "tg",
                "confirmed": "1018",
                "recovered": "788",
                "deceased": "7"
            },
            {
                "state": "tn",
                "confirmed": "3882",
                "recovered": "2852",
                "deceased": "63"
            },
            {
                "state": "tr",
                "confirmed": "8",
                "recovered": "1",
                "deceased": "0"
            },
            {
                "state": "un",
                "confirmed": "-89",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "564",
                "recovered": "545",
                "deceased": "21"
            },
            {
                "state": "ut",
                "confirmed": "66",
                "recovered": "86",
                "deceased": "0"
            },
            {
                "state": "wb",
                "confirmed": "611",
                "recovered": "398",
                "deceased": "15"
            }
        ]
    },
    {
        "date": "01-Aug-20",
        "states": [
            {
                "state": "an",
                "confirmed": "88",
                "recovered": "12",
                "deceased": "2"
            },
            {
                "state": "ap",
                "confirmed": "9276",
                "recovered": "12750",
                "deceased": "58"
            },
            {
                "state": "ar",
                "confirmed": "83",
                "recovered": "51",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "1457",
                "recovered": "1085",
                "deceased": "3"
            },
            {
                "state": "br",
                "confirmed": "3521",
                "recovered": "1823",
                "deceased": "14"
            },
            {
                "state": "ch",
                "confirmed": "28",
                "recovered": "16",
                "deceased": "3"
            },
            {
                "state": "ct",
                "confirmed": "235",
                "recovered": "380",
                "deceased": "1"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "1118",
                "recovered": "1201",
                "deceased": "26"
            },
            {
                "state": "dn",
                "confirmed": "45",
                "recovered": "30",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "280",
                "recovered": "227",
                "deceased": "3"
            },
            {
                "state": "gj",
                "confirmed": "1136",
                "recovered": "875",
                "deceased": "24"
            },
            {
                "state": "hp",
                "confirmed": "70",
                "recovered": "43",
                "deceased": "0"
            },
            {
                "state": "hr",
                "confirmed": "793",
                "recovered": "853",
                "deceased": "7"
            },
            {
                "state": "jh",
                "confirmed": "790",
                "recovered": "170",
                "deceased": "8"
            },
            {
                "state": "jk",
                "confirmed": "613",
                "recovered": "654",
                "deceased": "11"
            },
            {
                "state": "ka",
                "confirmed": "5172",
                "recovered": "3860",
                "deceased": "98"
            },
            {
                "state": "kl",
                "confirmed": "1129",
                "recovered": "752",
                "deceased": "8"
            },
            {
                "state": "la",
                "confirmed": "58",
                "recovered": "13",
                "deceased": "0"
            },
            {
                "state": "ld",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "33",
                "recovered": "37",
                "deceased": "0"
            },
            {
                "state": "mn",
                "confirmed": "135",
                "recovered": "10",
                "deceased": "1"
            },
            {
                "state": "mp",
                "confirmed": "808",
                "recovered": "698",
                "deceased": "9"
            },
            {
                "state": "mz",
                "confirmed": "5",
                "recovered": "6",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "138",
                "recovered": "5",
                "deceased": "0"
            },
            {
                "state": "or",
                "confirmed": "1602",
                "recovered": "756",
                "deceased": "11"
            },
            {
                "state": "pb",
                "confirmed": "944",
                "recovered": "341",
                "deceased": "19"
            },
            {
                "state": "py",
                "confirmed": "134",
                "recovered": "98",
                "deceased": "2"
            },
            {
                "state": "rj",
                "confirmed": "1160",
                "recovered": "823",
                "deceased": "14"
            },
            {
                "state": "sk",
                "confirmed": "11",
                "recovered": "38",
                "deceased": "0"
            },
            {
                "state": "tg",
                "confirmed": "2083",
                "recovered": "1114",
                "deceased": "11"
            },
            {
                "state": "tn",
                "confirmed": "5879",
                "recovered": "7010",
                "deceased": "99"
            },
            {
                "state": "tr",
                "confirmed": "252",
                "recovered": "136",
                "deceased": "2"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "3587",
                "recovered": "2471",
                "deceased": "47"
            },
            {
                "state": "ut",
                "confirmed": "264",
                "recovered": "162",
                "deceased": "3"
            },
            {
                "state": "wb",
                "confirmed": "2589",
                "recovered": "2143",
                "deceased": "48"
            }
        ]
    },
    {
        "date": "01-Sep-20",
        "states": [
            {
                "state": "an",
                "confirmed": "28",
                "recovered": "67",
                "deceased": "0"
            },
            {
                "state": "ap",
                "confirmed": "10368",
                "recovered": "9350",
                "deceased": "84"
            },
            {
                "state": "ar",
                "confirmed": "100",
                "recovered": "94",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "2684",
                "recovered": "1434",
                "deceased": "9"
            },
            {
                "state": "br",
                "confirmed": "1928",
                "recovered": "2029",
                "deceased": "15"
            },
            {
                "state": "ch",
                "confirmed": "204",
                "recovered": "120",
                "deceased": "1"
            },
            {
                "state": "ct",
                "confirmed": "1884",
                "recovered": "578",
                "deceased": "10"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "2312",
                "recovered": "1050",
                "deceased": "18"
            },
            {
                "state": "dn",
                "confirmed": "19",
                "recovered": "41",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "588",
                "recovered": "273",
                "deceased": "2"
            },
            {
                "state": "gj",
                "confirmed": "1310",
                "recovered": "1131",
                "deceased": "14"
            },
            {
                "state": "hp",
                "confirmed": "139",
                "recovered": "173",
                "deceased": "4"
            },
            {
                "state": "hr",
                "confirmed": "1694",
                "recovered": "1163",
                "deceased": "17"
            },
            {
                "state": "jh",
                "confirmed": "2177",
                "recovered": "1006",
                "deceased": "11"
            },
            {
                "state": "jk",
                "confirmed": "525",
                "recovered": "469",
                "deceased": "14"
            },
            {
                "state": "ka",
                "confirmed": "9058",
                "recovered": "5159",
                "deceased": "135"
            },
            {
                "state": "kl",
                "confirmed": "1140",
                "recovered": "2111",
                "deceased": "4"
            },
            {
                "state": "la",
                "confirmed": "52",
                "recovered": "104",
                "deceased": "1"
            },
            {
                "state": "ld",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "72",
                "recovered": "73",
                "deceased": "2"
            },
            {
                "state": "mn",
                "confirmed": "130",
                "recovered": "120",
                "deceased": "1"
            },
            {
                "state": "mp",
                "confirmed": "1525",
                "recovered": "1335",
                "deceased": "32"
            },
            {
                "state": "mz",
                "confirmed": "1",
                "recovered": "21",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "53",
                "recovered": "133",
                "deceased": "0"
            },
            {
                "state": "or",
                "confirmed": "3025",
                "recovered": "3484",
                "deceased": "11"
            },
            {
                "state": "pb",
                "confirmed": "1516",
                "recovered": "1120",
                "deceased": "59"
            },
            {
                "state": "py",
                "confirmed": "355",
                "recovered": "341",
                "deceased": "12"
            },
            {
                "state": "rj",
                "confirmed": "1470",
                "recovered": "1312",
                "deceased": "13"
            },
            {
                "state": "sk",
                "confirmed": "18",
                "recovered": "12",
                "deceased": "1"
            },
            {
                "state": "tg",
                "confirmed": "2734",
                "recovered": "2325",
                "deceased": "9"
            },
            {
                "state": "tn",
                "confirmed": "5928",
                "recovered": "6031",
                "deceased": "96"
            },
            {
                "state": "tr",
                "confirmed": "509",
                "recovered": "221",
                "deceased": "10"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "5343",
                "recovered": "4537",
                "deceased": "56"
            },
            {
                "state": "ut",
                "confirmed": "571",
                "recovered": "404",
                "deceased": "11"
            },
            {
                "state": "wb",
                "confirmed": "2943",
                "recovered": "3346",
                "deceased": "55"
            }
        ]
    },
    {
        "date": "01-Oct-20",
        "states": [
            {
                "state": "an",
                "confirmed": "13",
                "recovered": "15",
                "deceased": "0"
            },
            {
                "state": "ap",
                "confirmed": "6751",
                "recovered": "7297",
                "deceased": "41"
            },
            {
                "state": "ar",
                "confirmed": "224",
                "recovered": "159",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "1585",
                "recovered": "1904",
                "deceased": "14"
            },
            {
                "state": "br",
                "confirmed": "1370",
                "recovered": "1242",
                "deceased": "2"
            },
            {
                "state": "ch",
                "confirmed": "119",
                "recovered": "196",
                "deceased": "2"
            },
            {
                "state": "ct",
                "confirmed": "2551",
                "recovered": "2981",
                "deceased": "29"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "3037",
                "recovered": "3167",
                "deceased": "40"
            },
            {
                "state": "dn",
                "confirmed": "14",
                "recovered": "10",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "524",
                "recovered": "400",
                "deceased": "12"
            },
            {
                "state": "gj",
                "confirmed": "1350",
                "recovered": "1334",
                "deceased": "10"
            },
            {
                "state": "hp",
                "confirmed": "243",
                "recovered": "218",
                "deceased": "9"
            },
            {
                "state": "hr",
                "confirmed": "1313",
                "recovered": "2161",
                "deceased": "20"
            },
            {
                "state": "jh",
                "confirmed": "1013",
                "recovered": "1119",
                "deceased": "8"
            },
            {
                "state": "jk",
                "confirmed": "1093",
                "recovered": "1680",
                "deceased": "17"
            },
            {
                "state": "ka",
                "confirmed": "10070",
                "recovered": "7144",
                "deceased": "130"
            },
            {
                "state": "kl",
                "confirmed": "8135",
                "recovered": "2828",
                "deceased": "29"
            },
            {
                "state": "la",
                "confirmed": "91",
                "recovered": "85",
                "deceased": "3"
            },
            {
                "state": "ld",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "163",
                "recovered": "26",
                "deceased": "2"
            },
            {
                "state": "mn",
                "confirmed": "128",
                "recovered": "181",
                "deceased": "1"
            },
            {
                "state": "mp",
                "confirmed": "2041",
                "recovered": "2545",
                "deceased": "20"
            },
            {
                "state": "mz",
                "confirmed": "32",
                "recovered": "123",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "81",
                "recovered": "74",
                "deceased": "0"
            },
            {
                "state": "or",
                "confirmed": "3615",
                "recovered": "4380",
                "deceased": "17"
            },
            {
                "state": "pb",
                "confirmed": "1265",
                "recovered": "2271",
                "deceased": "45"
            },
            {
                "state": "py",
                "confirmed": "480",
                "recovered": "431",
                "deceased": "4"
            },
            {
                "state": "rj",
                "confirmed": "2193",
                "recovered": "1953",
                "deceased": "14"
            },
            {
                "state": "sk",
                "confirmed": "38",
                "recovered": "72",
                "deceased": "3"
            },
            {
                "state": "tg",
                "confirmed": "2214",
                "recovered": "2474",
                "deceased": "8"
            },
            {
                "state": "tn",
                "confirmed": "5688",
                "recovered": "5516",
                "deceased": "66"
            },
            {
                "state": "tr",
                "confirmed": "332",
                "recovered": "400",
                "deceased": "6"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "4019",
                "recovered": "4444",
                "deceased": "80"
            },
            {
                "state": "ut",
                "confirmed": "248",
                "recovered": "801",
                "deceased": "14"
            },
            {
                "state": "wb",
                "confirmed": "3275",
                "recovered": "2996",
                "deceased": "59"
            }
        ]
    },
    {
        "date": "01-Nov-20",
        "states": [
            {
                "state": "an",
                "confirmed": "8",
                "recovered": "12",
                "deceased": "1"
            },
            {
                "state": "ap",
                "confirmed": "2618",
                "recovered": "3509",
                "deceased": "16"
            },
            {
                "state": "ar",
                "confirmed": "29",
                "recovered": "114",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "166",
                "recovered": "730",
                "deceased": "1"
            },
            {
                "state": "br",
                "confirmed": "777",
                "recovered": "1195",
                "deceased": "7"
            },
            {
                "state": "ch",
                "confirmed": "58",
                "recovered": "81",
                "deceased": "0"
            },
            {
                "state": "ct",
                "confirmed": "1543",
                "recovered": "1458",
                "deceased": "49"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "5664",
                "recovered": "4159",
                "deceased": "51"
            },
            {
                "state": "dn",
                "confirmed": "2",
                "recovered": "4",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "142",
                "recovered": "237",
                "deceased": "5"
            },
            {
                "state": "gj",
                "confirmed": "860",
                "recovered": "1128",
                "deceased": "5"
            },
            {
                "state": "hp",
                "confirmed": "205",
                "recovered": "102",
                "deceased": "8"
            },
            {
                "state": "hr",
                "confirmed": "1670",
                "recovered": "1221",
                "deceased": "6"
            },
            {
                "state": "jh",
                "confirmed": "326",
                "recovered": "398",
                "deceased": "1"
            },
            {
                "state": "jk",
                "confirmed": "540",
                "recovered": "629",
                "deceased": "4"
            },
            {
                "state": "ka",
                "confirmed": "3652",
                "recovered": "8053",
                "deceased": "24"
            },
            {
                "state": "kl",
                "confirmed": "7025",
                "recovered": "8511",
                "deceased": "28"
            },
            {
                "state": "la",
                "confirmed": "17",
                "recovered": "90",
                "deceased": "0"
            },
            {
                "state": "ld",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "155",
                "recovered": "117",
                "deceased": "2"
            },
            {
                "state": "mn",
                "confirmed": "248",
                "recovered": "203",
                "deceased": "3"
            },
            {
                "state": "mp",
                "confirmed": "723",
                "recovered": "1107",
                "deceased": "7"
            },
            {
                "state": "mz",
                "confirmed": "34",
                "recovered": "8",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "28",
                "recovered": "79",
                "deceased": "0"
            },
            {
                "state": "or",
                "confirmed": "1709",
                "recovered": "1815",
                "deceased": "11"
            },
            {
                "state": "pb",
                "confirmed": "317",
                "recovered": "368",
                "deceased": "11"
            },
            {
                "state": "py",
                "confirmed": "96",
                "recovered": "621",
                "deceased": "3"
            },
            {
                "state": "rj",
                "confirmed": "1754",
                "recovered": "1591",
                "deceased": "10"
            },
            {
                "state": "sk",
                "confirmed": "18",
                "recovered": "34",
                "deceased": "1"
            },
            {
                "state": "tg",
                "confirmed": "1416",
                "recovered": "1579",
                "deceased": "5"
            },
            {
                "state": "tn",
                "confirmed": "2504",
                "recovered": "3644",
                "deceased": "30"
            },
            {
                "state": "tr",
                "confirmed": "77",
                "recovered": "170",
                "deceased": "0"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "1969",
                "recovered": "2388",
                "deceased": "26"
            },
            {
                "state": "ut",
                "confirmed": "222",
                "recovered": "178",
                "deceased": "4"
            },
            {
                "state": "wb",
                "confirmed": "3987",
                "recovered": "4053",
                "deceased": "59"
            }
        ]
    },
    {
        "date": "01-Dec-20",
        "states": [
            {
                "state": "an",
                "confirmed": "8",
                "recovered": "16",
                "deceased": "0"
            },
            {
                "state": "ap",
                "confirmed": "685",
                "recovered": "1094",
                "deceased": "4"
            },
            {
                "state": "ar",
                "confirmed": "14",
                "recovered": "45",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "222",
                "recovered": "135",
                "deceased": "0"
            },
            {
                "state": "br",
                "confirmed": "482",
                "recovered": "567",
                "deceased": "4"
            },
            {
                "state": "ch",
                "confirmed": "128",
                "recovered": "103",
                "deceased": "1"
            },
            {
                "state": "ct",
                "confirmed": "1893",
                "recovered": "2164",
                "deceased": "31"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "4006",
                "recovered": "5036",
                "deceased": "86"
            },
            {
                "state": "dn",
                "confirmed": "2",
                "recovered": "3",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "161",
                "recovered": "128",
                "deceased": "2"
            },
            {
                "state": "gj",
                "confirmed": "1477",
                "recovered": "1547",
                "deceased": "15"
            },
            {
                "state": "hp",
                "confirmed": "709",
                "recovered": "761",
                "deceased": "21"
            },
            {
                "state": "hr",
                "confirmed": "1871",
                "recovered": "2461",
                "deceased": "28"
            },
            {
                "state": "jh",
                "confirmed": "181",
                "recovered": "227",
                "deceased": "5"
            },
            {
                "state": "jk",
                "confirmed": "454",
                "recovered": "503",
                "deceased": "8"
            },
            {
                "state": "ka",
                "confirmed": "1330",
                "recovered": "886",
                "deceased": "14"
            },
            {
                "state": "kl",
                "confirmed": "5375",
                "recovered": "6151",
                "deceased": "26"
            },
            {
                "state": "la",
                "confirmed": "62",
                "recovered": "76",
                "deceased": "2"
            },
            {
                "state": "ld",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "65",
                "recovered": "158",
                "deceased": "1"
            },
            {
                "state": "mn",
                "confirmed": "198",
                "recovered": "152",
                "deceased": "8"
            },
            {
                "state": "mp",
                "confirmed": "1357",
                "recovered": "1683",
                "deceased": "10"
            },
            {
                "state": "mz",
                "confirmed": "22",
                "recovered": "73",
                "deceased": "1"
            },
            {
                "state": "nl",
                "confirmed": "23",
                "recovered": "108",
                "deceased": "0"
            },
            {
                "state": "or",
                "confirmed": "378",
                "recovered": "669",
                "deceased": "5"
            },
            {
                "state": "pb",
                "confirmed": "618",
                "recovered": "812",
                "deceased": "14"
            },
            {
                "state": "py",
                "confirmed": "52",
                "recovered": "72",
                "deceased": "1"
            },
            {
                "state": "rj",
                "confirmed": "2347",
                "recovered": "3007",
                "deceased": "19"
            },
            {
                "state": "sk",
                "confirmed": "42",
                "recovered": "5",
                "deceased": "1"
            },
            {
                "state": "tg",
                "confirmed": "502",
                "recovered": "894",
                "deceased": "3"
            },
            {
                "state": "tn",
                "confirmed": "1404",
                "recovered": "1411",
                "deceased": "10"
            },
            {
                "state": "tr",
                "confirmed": "31",
                "recovered": "34",
                "deceased": "0"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "1657",
                "recovered": "2059",
                "deceased": "27"
            },
            {
                "state": "ut",
                "confirmed": "473",
                "recovered": "538",
                "deceased": "7"
            },
            {
                "state": "wb",
                "confirmed": "3315",
                "recovered": "3340",
                "deceased": "52"
            }
        ]
    },
    {
        "date": "01-Jan-21",
        "states": [
            {
                "state": "an",
                "confirmed": "1",
                "recovered": "4",
                "deceased": "0"
            },
            {
                "state": "ap",
                "confirmed": "326",
                "recovered": "350",
                "deceased": "0"
            },
            {
                "state": "ar",
                "confirmed": "0",
                "recovered": "2",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "40",
                "recovered": "82",
                "deceased": "4"
            },
            {
                "state": "br",
                "confirmed": "463",
                "recovered": "404",
                "deceased": "3"
            },
            {
                "state": "ch",
                "confirmed": "51",
                "recovered": "64",
                "deceased": "1"
            },
            {
                "state": "ct",
                "confirmed": "932",
                "recovered": "1019",
                "deceased": "4"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "585",
                "recovered": "717",
                "deceased": "21"
            },
            {
                "state": "dn",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "69",
                "recovered": "78",
                "deceased": "0"
            },
            {
                "state": "gj",
                "confirmed": "734",
                "recovered": "907",
                "deceased": "3"
            },
            {
                "state": "hp",
                "confirmed": "193",
                "recovered": "412",
                "deceased": "2"
            },
            {
                "state": "hr",
                "confirmed": "286",
                "recovered": "533",
                "deceased": "6"
            },
            {
                "state": "jh",
                "confirmed": "128",
                "recovered": "105",
                "deceased": "0"
            },
            {
                "state": "jk",
                "confirmed": "256",
                "recovered": "248",
                "deceased": "1"
            },
            {
                "state": "ka",
                "confirmed": "877",
                "recovered": "1084",
                "deceased": "6"
            },
            {
                "state": "kl",
                "confirmed": "4991",
                "recovered": "5111",
                "deceased": "23"
            },
            {
                "state": "la",
                "confirmed": "59",
                "recovered": "9",
                "deceased": "0"
            },
            {
                "state": "ld",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "mn",
                "confirmed": "18",
                "recovered": "64",
                "deceased": "1"
            },
            {
                "state": "mp",
                "confirmed": "780",
                "recovered": "900",
                "deceased": "12"
            },
            {
                "state": "mz",
                "confirmed": "12",
                "recovered": "2",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "2",
                "recovered": "14",
                "deceased": "0"
            },
            {
                "state": "or",
                "confirmed": "245",
                "recovered": "301",
                "deceased": "3"
            },
            {
                "state": "pb",
                "confirmed": "248",
                "recovered": "408",
                "deceased": "8"
            },
            {
                "state": "py",
                "confirmed": "32",
                "recovered": "50",
                "deceased": "0"
            },
            {
                "state": "rj",
                "confirmed": "609",
                "recovered": "942",
                "deceased": "4"
            },
            {
                "state": "sk",
                "confirmed": "12",
                "recovered": "5",
                "deceased": "1"
            },
            {
                "state": "tg",
                "confirmed": "461",
                "recovered": "617",
                "deceased": "3"
            },
            {
                "state": "tn",
                "confirmed": "921",
                "recovered": "1029",
                "deceased": "13"
            },
            {
                "state": "tr",
                "confirmed": "4",
                "recovered": "28",
                "deceased": "0"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "1786",
                "recovered": "2082",
                "deceased": "27"
            },
            {
                "state": "ut",
                "confirmed": "361",
                "recovered": "492",
                "deceased": "6"
            },
            {
                "state": "wb",
                "confirmed": "1153",
                "recovered": "1496",
                "deceased": "26"
            }
        ]
    },
    {
        "date": "01-Feb-21",
        "states": [
            {
                "state": "an",
                "confirmed": "0",
                "recovered": "4",
                "deceased": "0"
            },
            {
                "state": "ap",
                "confirmed": "64",
                "recovered": "99",
                "deceased": "1"
            },
            {
                "state": "ar",
                "confirmed": "0",
                "recovered": "3",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "13",
                "recovered": "70",
                "deceased": "1"
            },
            {
                "state": "br",
                "confirmed": "75",
                "recovered": "118",
                "deceased": "2"
            },
            {
                "state": "ch",
                "confirmed": "32",
                "recovered": "21",
                "deceased": "0"
            },
            {
                "state": "ct",
                "confirmed": "322",
                "recovered": "520",
                "deceased": "5"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "121",
                "recovered": "214",
                "deceased": "3"
            },
            {
                "state": "dn",
                "confirmed": "0",
                "recovered": "1",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "60",
                "recovered": "86",
                "deceased": "0"
            },
            {
                "state": "gj",
                "confirmed": "298",
                "recovered": "406",
                "deceased": "1"
            },
            {
                "state": "hp",
                "confirmed": "25",
                "recovered": "37",
                "deceased": "0"
            },
            {
                "state": "hr",
                "confirmed": "92",
                "recovered": "122",
                "deceased": "4"
            },
            {
                "state": "jh",
                "confirmed": "42",
                "recovered": "81",
                "deceased": "1"
            },
            {
                "state": "jk",
                "confirmed": "44",
                "recovered": "83",
                "deceased": "0"
            },
            {
                "state": "ka",
                "confirmed": "388",
                "recovered": "470",
                "deceased": "3"
            },
            {
                "state": "kl",
                "confirmed": "3459",
                "recovered": "5215",
                "deceased": "17"
            },
            {
                "state": "la",
                "confirmed": "4",
                "recovered": "3",
                "deceased": "0"
            },
            {
                "state": "ld",
                "confirmed": "12",
                "recovered": "7",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "0",
                "recovered": "6",
                "deceased": "0"
            },
            {
                "state": "mn",
                "confirmed": "4",
                "recovered": "9",
                "deceased": "0"
            },
            {
                "state": "mp",
                "confirmed": "151",
                "recovered": "260",
                "deceased": "2"
            },
            {
                "state": "mz",
                "confirmed": "0",
                "recovered": "3",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "5",
                "recovered": "4",
                "deceased": "0"
            },
            {
                "state": "or",
                "confirmed": "79",
                "recovered": "136",
                "deceased": "0"
            },
            {
                "state": "pb",
                "confirmed": "194",
                "recovered": "220",
                "deceased": "1"
            },
            {
                "state": "py",
                "confirmed": "28",
                "recovered": "25",
                "deceased": "3"
            },
            {
                "state": "rj",
                "confirmed": "96",
                "recovered": "309",
                "deceased": "0"
            },
            {
                "state": "sk",
                "confirmed": "1",
                "recovered": "4",
                "deceased": "0"
            },
            {
                "state": "tg",
                "confirmed": "118",
                "recovered": "264",
                "deceased": "2"
            },
            {
                "state": "tn",
                "confirmed": "502",
                "recovered": "517",
                "deceased": "7"
            },
            {
                "state": "tr",
                "confirmed": "1",
                "recovered": "3",
                "deceased": "0"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "171",
                "recovered": "389",
                "deceased": "4"
            },
            {
                "state": "ut",
                "confirmed": "51",
                "recovered": "139",
                "deceased": "4"
            },
            {
                "state": "wb",
                "confirmed": "179",
                "recovered": "306",
                "deceased": "6"
            }
        ]
    },
    {
        "date": "01-Mar-21",
        "states": [
            {
                "state": "an",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ap",
                "confirmed": "58",
                "recovered": "51",
                "deceased": "0"
            },
            {
                "state": "ar",
                "confirmed": "1",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "33",
                "recovered": "16",
                "deceased": "1"
            },
            {
                "state": "br",
                "confirmed": "22",
                "recovered": "51",
                "deceased": "0"
            },
            {
                "state": "ch",
                "confirmed": "69",
                "recovered": "19",
                "deceased": "1"
            },
            {
                "state": "ct",
                "confirmed": "256",
                "recovered": "143",
                "deceased": "7"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "175",
                "recovered": "105",
                "deceased": "1"
            },
            {
                "state": "dn",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "40",
                "recovered": "62",
                "deceased": "1"
            },
            {
                "state": "gj",
                "confirmed": "427",
                "recovered": "360",
                "deceased": "1"
            },
            {
                "state": "hp",
                "confirmed": "132",
                "recovered": "15",
                "deceased": "1"
            },
            {
                "state": "hr",
                "confirmed": "166",
                "recovered": "151",
                "deceased": "2"
            },
            {
                "state": "jh",
                "confirmed": "37",
                "recovered": "46",
                "deceased": "0"
            },
            {
                "state": "jk",
                "confirmed": "63",
                "recovered": "56",
                "deceased": "1"
            },
            {
                "state": "ka",
                "confirmed": "349",
                "recovered": "324",
                "deceased": "5"
            },
            {
                "state": "kl",
                "confirmed": "1938",
                "recovered": "3475",
                "deceased": "13"
            },
            {
                "state": "la",
                "confirmed": "1",
                "recovered": "8",
                "deceased": "0"
            },
            {
                "state": "ld",
                "confirmed": "15",
                "recovered": "7",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "1",
                "recovered": "1",
                "deceased": "0"
            },
            {
                "state": "mn",
                "confirmed": "1",
                "recovered": "4",
                "deceased": "0"
            },
            {
                "state": "mp",
                "confirmed": "336",
                "recovered": "219",
                "deceased": "1"
            },
            {
                "state": "mz",
                "confirmed": "0",
                "recovered": "3",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "or",
                "confirmed": "86",
                "recovered": "76",
                "deceased": "0"
            },
            {
                "state": "pb",
                "confirmed": "633",
                "recovered": "394",
                "deceased": "18"
            },
            {
                "state": "py",
                "confirmed": "9",
                "recovered": "16",
                "deceased": "1"
            },
            {
                "state": "rj",
                "confirmed": "119",
                "recovered": "123",
                "deceased": "0"
            },
            {
                "state": "sk",
                "confirmed": "0",
                "recovered": "1",
                "deceased": "0"
            },
            {
                "state": "tg",
                "confirmed": "116",
                "recovered": "165",
                "deceased": "0"
            },
            {
                "state": "tn",
                "confirmed": "474",
                "recovered": "482",
                "deceased": "5"
            },
            {
                "state": "tr",
                "confirmed": "10",
                "recovered": "3",
                "deceased": "0"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "81",
                "recovered": "104",
                "deceased": "3"
            },
            {
                "state": "ut",
                "confirmed": "27",
                "recovered": "26",
                "deceased": "0"
            },
            {
                "state": "wb",
                "confirmed": "198",
                "recovered": "212",
                "deceased": "0"
            }
        ]
    },
    {
        "date": "01-Apr-21",
        "states": [
            {
                "state": "an",
                "confirmed": "1",
                "recovered": "4",
                "deceased": "0"
            },
            {
                "state": "ap",
                "confirmed": "1271",
                "recovered": "464",
                "deceased": "3"
            },
            {
                "state": "ar",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "58",
                "recovered": "34",
                "deceased": "2"
            },
            {
                "state": "br",
                "confirmed": "488",
                "recovered": "158",
                "deceased": "2"
            },
            {
                "state": "ch",
                "confirmed": "257",
                "recovered": "223",
                "deceased": "1"
            },
            {
                "state": "ct",
                "confirmed": "4617",
                "recovered": "1125",
                "deceased": "34"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "2790",
                "recovered": "1121",
                "deceased": "9"
            },
            {
                "state": "dn",
                "confirmed": "17",
                "recovered": "6",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "265",
                "recovered": "104",
                "deceased": "1"
            },
            {
                "state": "gj",
                "confirmed": "2410",
                "recovered": "2015",
                "deceased": "9"
            },
            {
                "state": "hp",
                "confirmed": "409",
                "recovered": "157",
                "deceased": "4"
            },
            {
                "state": "hr",
                "confirmed": "1609",
                "recovered": "964",
                "deceased": "9"
            },
            {
                "state": "jh",
                "confirmed": "690",
                "recovered": "162",
                "deceased": "1"
            },
            {
                "state": "jk",
                "confirmed": "461",
                "recovered": "114",
                "deceased": "4"
            },
            {
                "state": "ka",
                "confirmed": "4234",
                "recovered": "1599",
                "deceased": "18"
            },
            {
                "state": "kl",
                "confirmed": "2798",
                "recovered": "1835",
                "deceased": "11"
            },
            {
                "state": "la",
                "confirmed": "18",
                "recovered": "7",
                "deceased": "0"
            },
            {
                "state": "ld",
                "confirmed": "3",
                "recovered": "8",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "2",
                "recovered": "1",
                "deceased": "0"
            },
            {
                "state": "mn",
                "confirmed": "1",
                "recovered": "7",
                "deceased": "0"
            },
            {
                "state": "mp",
                "confirmed": "2546",
                "recovered": "1573",
                "deceased": "12"
            },
            {
                "state": "mz",
                "confirmed": "3",
                "recovered": "2",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "5",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "or",
                "confirmed": "394",
                "recovered": "121",
                "deceased": "0"
            },
            {
                "state": "pb",
                "confirmed": "3161",
                "recovered": "2291",
                "deceased": "58"
            },
            {
                "state": "py",
                "confirmed": "260",
                "recovered": "43",
                "deceased": "1"
            },
            {
                "state": "rj",
                "confirmed": "1350",
                "recovered": "446",
                "deceased": "4"
            },
            {
                "state": "sk",
                "confirmed": "6",
                "recovered": "6",
                "deceased": "0"
            },
            {
                "state": "tg",
                "confirmed": "887",
                "recovered": "337",
                "deceased": "4"
            },
            {
                "state": "tn",
                "confirmed": "2817",
                "recovered": "1634",
                "deceased": "19"
            },
            {
                "state": "tr",
                "confirmed": "24",
                "recovered": "13",
                "deceased": "0"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "2589",
                "recovered": "510",
                "deceased": "9"
            },
            {
                "state": "ut",
                "confirmed": "500",
                "recovered": "125",
                "deceased": "2"
            },
            {
                "state": "wb",
                "confirmed": "1274",
                "recovered": "534",
                "deceased": "2"
            }
        ]
    },
    {
        "date": "01-May-21",
        "states": [
            {
                "state": "an",
                "confirmed": "97",
                "recovered": "72",
                "deceased": "1"
            },
            {
                "state": "ap",
                "confirmed": "19412",
                "recovered": "11579",
                "deceased": "61"
            },
            {
                "state": "ar",
                "confirmed": "217",
                "recovered": "56",
                "deceased": "0"
            },
            {
                "state": "as",
                "confirmed": "3453",
                "recovered": "2229",
                "deceased": "23"
            },
            {
                "state": "br",
                "confirmed": "13789",
                "recovered": "10905",
                "deceased": "82"
            },
            {
                "state": "ch",
                "confirmed": "799",
                "recovered": "472",
                "deceased": "11"
            },
            {
                "state": "ct",
                "confirmed": "15902",
                "recovered": "13532",
                "deceased": "229"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "25219",
                "recovered": "27421",
                "deceased": "412"
            },
            {
                "state": "dn",
                "confirmed": "212",
                "recovered": "280",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "2303",
                "recovered": "1310",
                "deceased": "54"
            },
            {
                "state": "gj",
                "confirmed": "13847",
                "recovered": "10582",
                "deceased": "172"
            },
            {
                "state": "hp",
                "confirmed": "2751",
                "recovered": "1224",
                "deceased": "28"
            },
            {
                "state": "hr",
                "confirmed": "13588",
                "recovered": "8509",
                "deceased": "125"
            },
            {
                "state": "jh",
                "confirmed": "6323",
                "recovered": "5433",
                "deceased": "169"
            },
            {
                "state": "jk",
                "confirmed": "3832",
                "recovered": "1801",
                "deceased": "47"
            },
            {
                "state": "ka",
                "confirmed": "40990",
                "recovered": "18341",
                "deceased": "271"
            },
            {
                "state": "kl",
                "confirmed": "35636",
                "recovered": "15493",
                "deceased": "48"
            },
            {
                "state": "la",
                "confirmed": "117",
                "recovered": "166",
                "deceased": "1"
            },
            {
                "state": "ld",
                "confirmed": "156",
                "recovered": "41",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "262",
                "recovered": "192",
                "deceased": "3"
            },
            {
                "state": "mn",
                "confirmed": "319",
                "recovered": "79",
                "deceased": "5"
            },
            {
                "state": "mp",
                "confirmed": "12379",
                "recovered": "14562",
                "deceased": "102"
            },
            {
                "state": "mz",
                "confirmed": "113",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "158",
                "recovered": "44",
                "deceased": "3"
            },
            {
                "state": "or",
                "confirmed": "10413",
                "recovered": "5634",
                "deceased": "11"
            },
            {
                "state": "pb",
                "confirmed": "7017",
                "recovered": "4448",
                "deceased": "138"
            },
            {
                "state": "py",
                "confirmed": "1379",
                "recovered": "623",
                "deceased": "12"
            },
            {
                "state": "rj",
                "confirmed": "17652",
                "recovered": "11676",
                "deceased": "160"
            },
            {
                "state": "sk",
                "confirmed": "259",
                "recovered": "41",
                "deceased": "1"
            },
            {
                "state": "tg",
                "confirmed": "7754",
                "recovered": "6542",
                "deceased": "51"
            },
            {
                "state": "tn",
                "confirmed": "19588",
                "recovered": "17164",
                "deceased": "147"
            },
            {
                "state": "tr",
                "confirmed": "173",
                "recovered": "67",
                "deceased": "2"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "30180",
                "recovered": "38826",
                "deceased": "304"
            },
            {
                "state": "ut",
                "confirmed": "5493",
                "recovered": "3644",
                "deceased": "107"
            },
            {
                "state": "wb",
                "confirmed": "17512",
                "recovered": "14374",
                "deceased": "103"
            }
        ]
    },
    {
        "date": "01-Jun-21",
        "states": [
            {
                "state": "an",
                "confirmed": "13",
                "recovered": "26",
                "deceased": "3"
            },
            {
                "state": "ap",
                "confirmed": "11303",
                "recovered": "18257",
                "deceased": "104"
            },
            {
                "state": "ar",
                "confirmed": "370",
                "recovered": "352",
                "deceased": "1"
            },
            {
                "state": "as",
                "confirmed": "4682",
                "recovered": "4992",
                "deceased": "51"
            },
            {
                "state": "br",
                "confirmed": "1174",
                "recovered": "3100",
                "deceased": "59"
            },
            {
                "state": "ch",
                "confirmed": "108",
                "recovered": "389",
                "deceased": "5"
            },
            {
                "state": "ct",
                "confirmed": "1886",
                "recovered": "4471",
                "deceased": "29"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "623",
                "recovered": "1423",
                "deceased": "62"
            },
            {
                "state": "dn",
                "confirmed": "31",
                "recovered": "46",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "903",
                "recovered": "1777",
                "deceased": "22"
            },
            {
                "state": "gj",
                "confirmed": "1561",
                "recovered": "4869",
                "deceased": "22"
            },
            {
                "state": "hp",
                "confirmed": "921",
                "recovered": "2097",
                "deceased": "38"
            },
            {
                "state": "hr",
                "confirmed": "1233",
                "recovered": "3453",
                "deceased": "80"
            },
            {
                "state": "jh",
                "confirmed": "609",
                "recovered": "1449",
                "deceased": "9"
            },
            {
                "state": "jk",
                "confirmed": "1895",
                "recovered": "3682",
                "deceased": "32"
            },
            {
                "state": "ka",
                "confirmed": "14304",
                "recovered": "29271",
                "deceased": "464"
            },
            {
                "state": "kl",
                "confirmed": "19760",
                "recovered": "24117",
                "deceased": "194"
            },
            {
                "state": "la",
                "confirmed": "88",
                "recovered": "120",
                "deceased": "1"
            },
            {
                "state": "ld",
                "confirmed": "89",
                "recovered": "322",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "467",
                "recovered": "760",
                "deceased": "14"
            },
            {
                "state": "mn",
                "confirmed": "798",
                "recovered": "629",
                "deceased": "18"
            },
            {
                "state": "mp",
                "confirmed": "1078",
                "recovered": "4120",
                "deceased": "45"
            },
            {
                "state": "mz",
                "confirmed": "312",
                "recovered": "133",
                "deceased": "2"
            },
            {
                "state": "nl",
                "confirmed": "174",
                "recovered": "373",
                "deceased": "9"
            },
            {
                "state": "or",
                "confirmed": "8735",
                "recovered": "11095",
                "deceased": "37"
            },
            {
                "state": "pb",
                "confirmed": "2149",
                "recovered": "5039",
                "deceased": "99"
            },
            {
                "state": "py",
                "confirmed": "979",
                "recovered": "1403",
                "deceased": "14"
            },
            {
                "state": "rj",
                "confirmed": "1002",
                "recovered": "6114",
                "deceased": "65"
            },
            {
                "state": "sk",
                "confirmed": "309",
                "recovered": "334",
                "deceased": "4"
            },
            {
                "state": "tg",
                "confirmed": "2493",
                "recovered": "3308",
                "deceased": "15"
            },
            {
                "state": "tn",
                "confirmed": "26513",
                "recovered": "31673",
                "deceased": "490"
            },
            {
                "state": "tr",
                "confirmed": "841",
                "recovered": "845",
                "deceased": "6"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "1221",
                "recovered": "5625",
                "deceased": "175"
            },
            {
                "state": "ut",
                "confirmed": "981",
                "recovered": "2062",
                "deceased": "45"
            },
            {
                "state": "wb",
                "confirmed": "9424",
                "recovered": "17722",
                "deceased": "137"
            }
        ]
    },
    {
        "date": "01-Jul-21",
        "states": [
            {
                "state": "an",
                "confirmed": "2",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "ap",
                "confirmed": "3841",
                "recovered": "3963",
                "deceased": "38"
            },
            {
                "state": "ar",
                "confirmed": "311",
                "recovered": "286",
                "deceased": "4"
            },
            {
                "state": "as",
                "confirmed": "2669",
                "recovered": "3329",
                "deceased": "38"
            },
            {
                "state": "br",
                "confirmed": "187",
                "recovered": "224",
                "deceased": "4"
            },
            {
                "state": "ch",
                "confirmed": "17",
                "recovered": "22",
                "deceased": "0"
            },
            {
                "state": "ct",
                "confirmed": "410",
                "recovered": "581",
                "deceased": "6"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "93",
                "recovered": "111",
                "deceased": "4"
            },
            {
                "state": "dn",
                "confirmed": "1",
                "recovered": "2",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "231",
                "recovered": "221",
                "deceased": "6"
            },
            {
                "state": "gj",
                "confirmed": "84",
                "recovered": "300",
                "deceased": "3"
            },
            {
                "state": "hp",
                "confirmed": "167",
                "recovered": "149",
                "deceased": "1"
            },
            {
                "state": "hr",
                "confirmed": "85",
                "recovered": "127",
                "deceased": "15"
            },
            {
                "state": "jh",
                "confirmed": "96",
                "recovered": "156",
                "deceased": "0"
            },
            {
                "state": "jk",
                "confirmed": "298",
                "recovered": "573",
                "deceased": "4"
            },
            {
                "state": "ka",
                "confirmed": "3203",
                "recovered": "14302",
                "deceased": "94"
            },
            {
                "state": "kl",
                "confirmed": "12868",
                "recovered": "11564",
                "deceased": "124"
            },
            {
                "state": "la",
                "confirmed": "17",
                "recovered": "34",
                "deceased": "0"
            },
            {
                "state": "ld",
                "confirmed": "38",
                "recovered": "55",
                "deceased": "1"
            },
            {
                "state": "ml",
                "confirmed": "577",
                "recovered": "250",
                "deceased": "6"
            },
            {
                "state": "mn",
                "confirmed": "508",
                "recovered": "578",
                "deceased": "12"
            },
            {
                "state": "mp",
                "confirmed": "40",
                "recovered": "65",
                "deceased": "12"
            },
            {
                "state": "mz",
                "confirmed": "417",
                "recovered": "357",
                "deceased": "0"
            },
            {
                "state": "nl",
                "confirmed": "66",
                "recovered": "82",
                "deceased": "3"
            },
            {
                "state": "or",
                "confirmed": "3087",
                "recovered": "3457",
                "deceased": "45"
            },
            {
                "state": "pb",
                "confirmed": "290",
                "recovered": "443",
                "deceased": "20"
            },
            {
                "state": "py",
                "confirmed": "216",
                "recovered": "227",
                "deceased": "2"
            },
            {
                "state": "rj",
                "confirmed": "75",
                "recovered": "142",
                "deceased": "2"
            },
            {
                "state": "sk",
                "confirmed": "122",
                "recovered": "36",
                "deceased": "1"
            },
            {
                "state": "tg",
                "confirmed": "869",
                "recovered": "1197",
                "deceased": "8"
            },
            {
                "state": "tn",
                "confirmed": "4481",
                "recovered": "5044",
                "deceased": "102"
            },
            {
                "state": "tr",
                "confirmed": "450",
                "recovered": "150",
                "deceased": "5"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "145",
                "recovered": "260",
                "deceased": "10"
            },
            {
                "state": "ut",
                "confirmed": "124",
                "recovered": "244",
                "deceased": "8"
            },
            {
                "state": "wb",
                "confirmed": "1501",
                "recovered": "1889",
                "deceased": "27"
            }
        ]
    },
    {
        "date": "01-Aug-21",
        "states": [
            {
                "state": "an",
                "confirmed": "2",
                "recovered": "3",
                "deceased": "0"
            },
            {
                "state": "ap",
                "confirmed": "2287",
                "recovered": "2430",
                "deceased": "18"
            },
            {
                "state": "ar",
                "confirmed": "138",
                "recovered": "415",
                "deceased": "2"
            },
            {
                "state": "as",
                "confirmed": "784",
                "recovered": "1449",
                "deceased": "15"
            },
            {
                "state": "br",
                "confirmed": "45",
                "recovered": "66",
                "deceased": "1"
            },
            {
                "state": "ch",
                "confirmed": "1",
                "recovered": "2",
                "deceased": "0"
            },
            {
                "state": "ct",
                "confirmed": "214",
                "recovered": "157",
                "deceased": "1"
            },
            {
                "state": "dd",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "dl",
                "confirmed": "85",
                "recovered": "83",
                "deceased": "1"
            },
            {
                "state": "dn",
                "confirmed": "0",
                "recovered": "5",
                "deceased": "0"
            },
            {
                "state": "ga",
                "confirmed": "59",
                "recovered": "105",
                "deceased": "1"
            },
            {
                "state": "gj",
                "confirmed": "23",
                "recovered": "21",
                "deceased": "0"
            },
            {
                "state": "hp",
                "confirmed": "134",
                "recovered": "118",
                "deceased": "0"
            },
            {
                "state": "hr",
                "confirmed": "29",
                "recovered": "23",
                "deceased": "3"
            },
            {
                "state": "jh",
                "confirmed": "27",
                "recovered": "24",
                "deceased": "1"
            },
            {
                "state": "jk",
                "confirmed": "145",
                "recovered": "109",
                "deceased": "1"
            },
            {
                "state": "ka",
                "confirmed": "1875",
                "recovered": "1502",
                "deceased": "25"
            },
            {
                "state": "kl",
                "confirmed": "20728",
                "recovered": "17792",
                "deceased": "56"
            },
            {
                "state": "la",
                "confirmed": "2",
                "recovered": "1",
                "deceased": "0"
            },
            {
                "state": "ld",
                "confirmed": "6",
                "recovered": "15",
                "deceased": "0"
            },
            {
                "state": "ml",
                "confirmed": "589",
                "recovered": "501",
                "deceased": "11"
            },
            {
                "state": "mn",
                "confirmed": "832",
                "recovered": "957",
                "deceased": "10"
            },
            {
                "state": "mp",
                "confirmed": "17",
                "recovered": "14",
                "deceased": "0"
            },
            {
                "state": "mz",
                "confirmed": "861",
                "recovered": "637",
                "deceased": "2"
            },
            {
                "state": "nl",
                "confirmed": "73",
                "recovered": "51",
                "deceased": "4"
            },
            {
                "state": "or",
                "confirmed": "1437",
                "recovered": "1773",
                "deceased": "64"
            },
            {
                "state": "pb",
                "confirmed": "26",
                "recovered": "55",
                "deceased": "1"
            },
            {
                "state": "py",
                "confirmed": "90",
                "recovered": "70",
                "deceased": "0"
            },
            {
                "state": "rj",
                "confirmed": "10",
                "recovered": "13",
                "deceased": "0"
            },
            {
                "state": "sk",
                "confirmed": "206",
                "recovered": "151",
                "deceased": "1"
            },
            {
                "state": "tg",
                "confirmed": "455",
                "recovered": "648",
                "deceased": "3"
            },
            {
                "state": "tn",
                "confirmed": "1990",
                "recovered": "2156",
                "deceased": "26"
            },
            {
                "state": "tr",
                "confirmed": "222",
                "recovered": "224",
                "deceased": "0"
            },
            {
                "state": "un",
                "confirmed": "0",
                "recovered": "0",
                "deceased": "0"
            },
            {
                "state": "up",
                "confirmed": "35",
                "recovered": "76",
                "deceased": "7"
            },
            {
                "state": "ut",
                "confirmed": "22",
                "recovered": "45",
                "deceased": "0"
            },
            {
                "state": "wb",
                "confirmed": "701",
                "recovered": "827",
                "deceased": "13"
            }
        ]
    }
]
    

	return {
        getData: function() {
    	   return data;				
        }
	};

}())