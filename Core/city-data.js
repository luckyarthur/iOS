/* from https://simplemaps.com/data/world-cities */

const cityData = [
    {
      "city": "Tokyo",
      "latitude": 35.6897,
      "longitude": 139.6922,
      "country_code": "JP"
    },
    {
      "city": "Jakarta",
      "latitude": -6.2146,
      "longitude": 106.8451,
      "country_code": "ID"
    },
    {
      "city": "Delhi",
      "latitude": 28.66,
      "longitude": 77.23,
      "country_code": "IN"
    },
    {
      "city": "Mumbai",
      "latitude": 18.9667,
      "longitude": 72.8333,
      "country_code": "IN"
    },
    {
      "city": "Manila",
      "latitude": 14.5958,
      "longitude": 120.9772,
      "country_code": "PH"
    },
    {
      "city": "Shanghai",
      "latitude": 31.1667,
      "longitude": 121.4667,
      "country_code": "CN"
    },
    {
      "city": "São Paulo",
      "latitude": -23.5504,
      "longitude": -46.6339,
      "country_code": "BR"
    },
    {
      "city": "Seoul",
      "latitude": 37.5833,
      "longitude": 127,
      "country_code": "KR"
    },
    {
      "city": "Mexico City",
      "latitude": 19.4333,
      "longitude": -99.1333,
      "country_code": "MX"
    },
    {
      "city": "Guangzhou",
      "latitude": 23.1288,
      "longitude": 113.259,
      "country_code": "CN"
    },
    {
      "city": "Beijing",
      "latitude": 39.905,
      "longitude": 116.3914,
      "country_code": "CN"
    },
    {
      "city": "Cairo",
      "latitude": 30.0561,
      "longitude": 31.2394,
      "country_code": "EG"
    },
    {
      "city": "New York",
      "latitude": 40.6943,
      "longitude": -73.9249,
      "country_code": "US"
    },
    {
      "city": "Kolkāta",
      "latitude": 22.5411,
      "longitude": 88.3378,
      "country_code": "IN"
    },
    {
      "city": "Moscow",
      "latitude": 55.7558,
      "longitude": 37.6178,
      "country_code": "RU"
    },
    {
      "city": "Bangkok",
      "latitude": 13.75,
      "longitude": 100.5167,
      "country_code": "TH"
    },
    {
      "city": "Buenos Aires",
      "latitude": -34.5997,
      "longitude": -58.3819,
      "country_code": "AR"
    },
    {
      "city": "Shenzhen",
      "latitude": 22.535,
      "longitude": 114.054,
      "country_code": "CN"
    },
    {
      "city": "Dhaka",
      "latitude": 23.7161,
      "longitude": 90.3961,
      "country_code": "BD"
    },
    {
      "city": "Lagos",
      "latitude": 6.45,
      "longitude": 3.4,
      "country_code": "NG"
    },
    {
      "city": "Istanbul",
      "latitude": 41.01,
      "longitude": 28.9603,
      "country_code": "TR"
    },
    {
      "city": "Ōsaka",
      "latitude": 34.6936,
      "longitude": 135.5019,
      "country_code": "JP"
    },
    {
      "city": "Karachi",
      "latitude": 24.86,
      "longitude": 67.01,
      "country_code": "PK"
    },
    {
      "city": "Bangalore",
      "latitude": 12.9699,
      "longitude": 77.598,
      "country_code": "IN"
    },
    {
      "city": "Tehran",
      "latitude": 35.7,
      "longitude": 51.4167,
      "country_code": "IR"
    },
    {
      "city": "Kinshasa",
      "latitude": -4.3317,
      "longitude": 15.3139,
      "country_code": "CD"
    },
    {
      "city": "Ho Chi Minh City",
      "latitude": 10.8167,
      "longitude": 106.6333,
      "country_code": "VN"
    },
    {
      "city": "Los Angeles",
      "latitude": 34.1139,
      "longitude": -118.4068,
      "country_code": "US"
    },
    {
      "city": "Rio de Janeiro",
      "latitude": -22.9083,
      "longitude": -43.1964,
      "country_code": "BR"
    },
    {
      "city": "Nanyang",
      "latitude": 32.9987,
      "longitude": 112.5292,
      "country_code": "CN"
    },
    {
      "city": "Chennai",
      "latitude": 13.0825,
      "longitude": 80.275,
      "country_code": "IN"
    },
    {
      "city": "Chengdu",
      "latitude": 30.6636,
      "longitude": 104.0667,
      "country_code": "CN"
    },
    {
      "city": "Lahore",
      "latitude": 31.5497,
      "longitude": 74.3436,
      "country_code": "PK"
    },
    {
      "city": "Paris",
      "latitude": 48.8566,
      "longitude": 2.3522,
      "country_code": "FR"
    },
    {
      "city": "London",
      "latitude": 51.5072,
      "longitude": -0.1275,
      "country_code": "GB"
    },
    {
      "city": "Linyi",
      "latitude": 35.0606,
      "longitude": 118.3425,
      "country_code": "CN"
    },
    {
      "city": "Tianjin",
      "latitude": 39.1467,
      "longitude": 117.2056,
      "country_code": "CN"
    },
    {
      "city": "Shijiazhuang",
      "latitude": 38.0422,
      "longitude": 114.5086,
      "country_code": "CN"
    },
    {
      "city": "Baoding",
      "latitude": 38.8671,
      "longitude": 115.4845,
      "country_code": "CN"
    },
    {
      "city": "Zhoukou",
      "latitude": 33.625,
      "longitude": 114.6418,
      "country_code": "CN"
    },
    {
      "city": "Lima",
      "latitude": -12.05,
      "longitude": -77.0333,
      "country_code": "PE"
    },
    {
      "city": "Hyderābād",
      "latitude": 17.3667,
      "longitude": 78.4667,
      "country_code": "IN"
    },
    {
      "city": "Bogotá",
      "latitude": 4.6126,
      "longitude": -74.0705,
      "country_code": "CO"
    },
    {
      "city": "Weifang",
      "latitude": 36.7167,
      "longitude": 119.1,
      "country_code": "CN"
    },
    {
      "city": "Nagoya",
      "latitude": 35.1167,
      "longitude": 136.9333,
      "country_code": "JP"
    },
    {
      "city": "Wuhan",
      "latitude": 30.5872,
      "longitude": 114.2881,
      "country_code": "CN"
    },
    {
      "city": "Heze",
      "latitude": 35.2333,
      "longitude": 115.4333,
      "country_code": "CN"
    },
    {
      "city": "Ganzhou",
      "latitude": 25.8292,
      "longitude": 114.9336,
      "country_code": "CN"
    },
    {
      "city": "Tongshan",
      "latitude": 34.261,
      "longitude": 117.1859,
      "country_code": "CN"
    },
    {
      "city": "Chicago",
      "latitude": 41.8373,
      "longitude": -87.6862,
      "country_code": "US"
    },
    {
      "city": "Handan",
      "latitude": 36.6116,
      "longitude": 114.4894,
      "country_code": "CN"
    },
    {
      "city": "Luanda",
      "latitude": -8.8383,
      "longitude": 13.2344,
      "country_code": "AO"
    },
    {
      "city": "Fuyang",
      "latitude": 32.8986,
      "longitude": 115.8045,
      "country_code": "CN"
    },
    {
      "city": "Kuala Lumpur",
      "latitude": 3.1478,
      "longitude": 101.6953,
      "country_code": "MY"
    },
    {
      "city": "Jining",
      "latitude": 35.4,
      "longitude": 116.5667,
      "country_code": "CN"
    },
    {
      "city": "Dongguan",
      "latitude": 23.0475,
      "longitude": 113.7493,
      "country_code": "CN"
    },
    {
      "city": "Hanoi",
      "latitude": 21.0245,
      "longitude": 105.8412,
      "country_code": "VN"
    },
    {
      "city": "Pune",
      "latitude": 18.5196,
      "longitude": 73.8553,
      "country_code": "IN"
    },
    {
      "city": "Chongqing",
      "latitude": 29.55,
      "longitude": 106.5069,
      "country_code": "CN"
    },
    {
      "city": "Changchun",
      "latitude": 43.9,
      "longitude": 125.2,
      "country_code": "CN"
    },
    {
      "city": "Zhumadian",
      "latitude": 32.9773,
      "longitude": 114.0253,
      "country_code": "CN"
    },
    {
      "city": "Ningbo",
      "latitude": 29.875,
      "longitude": 121.5492,
      "country_code": "CN"
    },
    {
      "city": "Onitsha",
      "latitude": 6.1667,
      "longitude": 6.7833,
      "country_code": "NG"
    },
    {
      "city": "Nanjing",
      "latitude": 32.05,
      "longitude": 118.7667,
      "country_code": "CN"
    },
    {
      "city": "Hefei",
      "latitude": 31.8639,
      "longitude": 117.2808,
      "country_code": "CN"
    },
    {
      "city": "Ahmadābād",
      "latitude": 23.03,
      "longitude": 72.58,
      "country_code": "IN"
    },
    {
      "city": "Hong Kong",
      "latitude": 22.305,
      "longitude": 114.185,
      "country_code": "HK"
    },
    {
      "city": "Khartoum",
      "latitude": 15.6031,
      "longitude": 32.5265,
      "country_code": "SD"
    },
    {
      "city": "Nantong",
      "latitude": 31.9829,
      "longitude": 120.8873,
      "country_code": "CN"
    },
    {
      "city": "Yancheng",
      "latitude": 33.3936,
      "longitude": 120.1339,
      "country_code": "CN"
    },
    {
      "city": "Foshan",
      "latitude": 23.0292,
      "longitude": 113.1056,
      "country_code": "CN"
    },
    {
      "city": "Nanning",
      "latitude": 22.8192,
      "longitude": 108.315,
      "country_code": "CN"
    },
    {
      "city": "Hengyang",
      "latitude": 26.8968,
      "longitude": 112.5857,
      "country_code": "CN"
    },
    {
      "city": "Xi’an",
      "latitude": 34.2667,
      "longitude": 108.9,
      "country_code": "CN"
    },
    {
      "city": "Shenyang",
      "latitude": 41.8039,
      "longitude": 123.4258,
      "country_code": "CN"
    },
    {
      "city": "Tangshan",
      "latitude": 39.6292,
      "longitude": 118.1742,
      "country_code": "CN"
    },
    {
      "city": "Shaoyang",
      "latitude": 27.2418,
      "longitude": 111.4725,
      "country_code": "CN"
    },
    {
      "city": "Changsha",
      "latitude": 28.1987,
      "longitude": 112.9709,
      "country_code": "CN"
    },
    {
      "city": "Santiago",
      "latitude": -33.45,
      "longitude": -70.6667,
      "country_code": "CL"
    },
    {
      "city": "Zhengzhou",
      "latitude": 34.7492,
      "longitude": 113.6605,
      "country_code": "CN"
    },
    {
      "city": "Zhanjiang",
      "latitude": 21.1967,
      "longitude": 110.4031,
      "country_code": "CN"
    },
    {
      "city": "Riyadh",
      "latitude": 24.65,
      "longitude": 46.71,
      "country_code": "SA"
    },
    {
      "city": "Cangzhou",
      "latitude": 38.3037,
      "longitude": 116.8452,
      "country_code": "CN"
    },
    {
      "city": "Dar es Salaam",
      "latitude": -6.8,
      "longitude": 39.2833,
      "country_code": "TZ"
    },
    {
      "city": "Maoming",
      "latitude": 21.6618,
      "longitude": 110.9178,
      "country_code": "CN"
    },
    {
      "city": "Huanggang",
      "latitude": 30.45,
      "longitude": 114.875,
      "country_code": "CN"
    },
    {
      "city": "Xinyang",
      "latitude": 32.1264,
      "longitude": 114.0672,
      "country_code": "CN"
    },
    {
      "city": "Shangrao",
      "latitude": 28.4419,
      "longitude": 117.9633,
      "country_code": "CN"
    },
    {
      "city": "Luoyang",
      "latitude": 34.6587,
      "longitude": 112.4245,
      "country_code": "CN"
    },
    {
      "city": "Bijie",
      "latitude": 27.3019,
      "longitude": 105.2863,
      "country_code": "CN"
    },
    {
      "city": "Yantai",
      "latitude": 37.3997,
      "longitude": 121.2664,
      "country_code": "CN"
    },
    {
      "city": "Quanzhou",
      "latitude": 24.9139,
      "longitude": 118.5858,
      "country_code": "CN"
    },
    {
      "city": "Hangzhou",
      "latitude": 30.25,
      "longitude": 120.1675,
      "country_code": "CN"
    },
    {
      "city": "Miami",
      "latitude": 25.7839,
      "longitude": -80.2102,
      "country_code": "US"
    },
    {
      "city": "Kunming",
      "latitude": 25.0433,
      "longitude": 102.7061,
      "country_code": "CN"
    },
    {
      "city": "Nanchong",
      "latitude": 30.7991,
      "longitude": 106.0784,
      "country_code": "CN"
    },
    {
      "city": "Zunyi",
      "latitude": 27.705,
      "longitude": 106.9336,
      "country_code": "CN"
    },
    {
      "city": "Lu’an",
      "latitude": 31.7542,
      "longitude": 116.5078,
      "country_code": "CN"
    },
    {
      "city": "Yichun",
      "latitude": 27.8041,
      "longitude": 114.383,
      "country_code": "CN"
    },
    {
      "city": "Taizhou",
      "latitude": 28.6583,
      "longitude": 121.4221,
      "country_code": "CN"
    },
    {
      "city": "Liaocheng",
      "latitude": 36.45,
      "longitude": 115.9833,
      "country_code": "CN"
    },
    {
      "city": "Qujing",
      "latitude": 25.5102,
      "longitude": 103.8029,
      "country_code": "CN"
    },
    {
      "city": "Xiangyang",
      "latitude": 32.0654,
      "longitude": 112.1531,
      "country_code": "CN"
    },
    {
      "city": "Sūrat",
      "latitude": 21.17,
      "longitude": 72.83,
      "country_code": "IN"
    },
    {
      "city": "Baghdad",
      "latitude": 33.35,
      "longitude": 44.4167,
      "country_code": "IQ"
    },
    {
      "city": "Qingdao",
      "latitude": 36.1167,
      "longitude": 120.4,
      "country_code": "CN"
    },
    {
      "city": "Singapore",
      "latitude": 1.3,
      "longitude": 103.8,
      "country_code": "SG"
    },
    {
      "city": "Dallas",
      "latitude": 32.7936,
      "longitude": -96.7662,
      "country_code": "US"
    },
    {
      "city": "Changde",
      "latitude": 29.0397,
      "longitude": 111.6839,
      "country_code": "CN"
    },
    {
      "city": "Dazhou",
      "latitude": 31.2152,
      "longitude": 107.4947,
      "country_code": "CN"
    },
    {
      "city": "Suzhou",
      "latitude": 33.6333,
      "longitude": 116.9683,
      "country_code": "CN"
    },
    {
      "city": "Philadelphia",
      "latitude": 40.0077,
      "longitude": -75.1339,
      "country_code": "US"
    },
    {
      "city": "Jieyang",
      "latitude": 23.5533,
      "longitude": 116.3649,
      "country_code": "CN"
    },
    {
      "city": "Nairobi",
      "latitude": -1.2864,
      "longitude": 36.8172,
      "country_code": "KE"
    },
    {
      "city": "Nangandao",
      "latitude": 35.2992,
      "longitude": 113.8851,
      "country_code": "CN"
    },
    {
      "city": "Ankara",
      "latitude": 39.93,
      "longitude": 32.85,
      "country_code": "TR"
    },
    {
      "city": "Tai’an",
      "latitude": 36.2001,
      "longitude": 117.0809,
      "country_code": "CN"
    },
    {
      "city": "Yulin",
      "latitude": 22.6293,
      "longitude": 110.1507,
      "country_code": "CN"
    },
    {
      "city": "Dezhou",
      "latitude": 37.4513,
      "longitude": 116.3105,
      "country_code": "CN"
    },
    {
      "city": "Houston",
      "latitude": 29.7863,
      "longitude": -95.3889,
      "country_code": "US"
    },
    {
      "city": "Atlanta",
      "latitude": 33.7627,
      "longitude": -84.4224,
      "country_code": "US"
    },
    {
      "city": "Rangoon",
      "latitude": 16.8,
      "longitude": 96.15,
      "country_code": "MM"
    },
    {
      "city": "Toronto",
      "latitude": 43.7417,
      "longitude": -79.3733,
      "country_code": "CA"
    },
    {
      "city": "Suihua",
      "latitude": 46.6384,
      "longitude": 126.9808,
      "country_code": "CN"
    },
    {
      "city": "Washington",
      "latitude": 38.9047,
      "longitude": -77.0163,
      "country_code": "US"
    },
    {
      "city": "Qiqihar",
      "latitude": 47.3398,
      "longitude": 123.9512,
      "country_code": "CN"
    },
    {
      "city": "Jinhua",
      "latitude": 29.1046,
      "longitude": 119.6494,
      "country_code": "CN"
    },
    {
      "city": "Saint Petersburg",
      "latitude": 59.95,
      "longitude": 30.3167,
      "country_code": "RU"
    },
    {
      "city": "Shantou",
      "latitude": 23.3735,
      "longitude": 116.6941,
      "country_code": "CN"
    },
    {
      "city": "Sydney",
      "latitude": -33.865,
      "longitude": 151.2094,
      "country_code": "AU"
    },
    {
      "city": "Weinan",
      "latitude": 34.4996,
      "longitude": 109.4684,
      "country_code": "CN"
    },
    {
      "city": "Suqian",
      "latitude": 33.9331,
      "longitude": 118.2831,
      "country_code": "CN"
    },
    {
      "city": "Guadalajara",
      "latitude": 20.6767,
      "longitude": -103.3475,
      "country_code": "MX"
    },
    {
      "city": "Suzhou",
      "latitude": 31.304,
      "longitude": 120.6164,
      "country_code": "CN"
    },
    {
      "city": "Fuzhou",
      "latitude": 26.0769,
      "longitude": 119.2917,
      "country_code": "CN"
    },
    {
      "city": "Zhaotong",
      "latitude": 27.3328,
      "longitude": 103.7144,
      "country_code": "CN"
    },
    {
      "city": "Pudong",
      "latitude": 31.2231,
      "longitude": 121.5397,
      "country_code": "CN"
    },
    {
      "city": "Yongzhou",
      "latitude": 26.4515,
      "longitude": 111.5953,
      "country_code": "CN"
    },
    {
      "city": "Belo Horizonte",
      "latitude": -19.8917,
      "longitude": -43.9478,
      "country_code": "BR"
    },
    {
      "city": "Zhangzhou",
      "latitude": 24.5093,
      "longitude": 117.6612,
      "country_code": "CN"
    },
    {
      "city": "Bozhou",
      "latitude": 33.8626,
      "longitude": 115.7742,
      "country_code": "CN"
    },
    {
      "city": "Melbourne",
      "latitude": -37.8136,
      "longitude": 144.9631,
      "country_code": "AU"
    },
    {
      "city": "Nanchang",
      "latitude": 28.6842,
      "longitude": 115.8872,
      "country_code": "CN"
    },
    {
      "city": "Xianyang",
      "latitude": 34.35,
      "longitude": 108.7167,
      "country_code": "CN"
    },
    {
      "city": "Taizhou",
      "latitude": 32.4831,
      "longitude": 119.9,
      "country_code": "CN"
    },
    {
      "city": "Surabaya",
      "latitude": -7.2458,
      "longitude": 112.7378,
      "country_code": "ID"
    },
    {
      "city": "Abidjan",
      "latitude": 5.3364,
      "longitude": -4.0267,
      "country_code": "CI"
    },
    {
      "city": "Ji’an",
      "latitude": 27.1172,
      "longitude": 114.9793,
      "country_code": "CN"
    },
    {
      "city": "Mianyang",
      "latitude": 31.4669,
      "longitude": 104.7385,
      "country_code": "CN"
    },
    {
      "city": "Shaoxing",
      "latitude": 30,
      "longitude": 120.5833,
      "country_code": "CN"
    },
    {
      "city": "Alexandria",
      "latitude": 31.2,
      "longitude": 29.9167,
      "country_code": "EG"
    },
    {
      "city": "Yuncheng",
      "latitude": 35.0304,
      "longitude": 110.998,
      "country_code": "CN"
    },
    {
      "city": "Pingdingshan",
      "latitude": 33.735,
      "longitude": 113.2999,
      "country_code": "CN"
    },
    {
      "city": "Huai’an",
      "latitude": 33.5,
      "longitude": 119.1331,
      "country_code": "CN"
    },
    {
      "city": "Xinpu",
      "latitude": 34.5906,
      "longitude": 119.1801,
      "country_code": "CN"
    },
    {
      "city": "Guilin",
      "latitude": 25.2667,
      "longitude": 110.2833,
      "country_code": "CN"
    },
    {
      "city": "Huaihua",
      "latitude": 27.5494,
      "longitude": 109.9592,
      "country_code": "CN"
    },
    {
      "city": "Jiujiang",
      "latitude": 29.7048,
      "longitude": 116.0021,
      "country_code": "CN"
    },
    {
      "city": "Anqing",
      "latitude": 30.5,
      "longitude": 117.0333,
      "country_code": "CN"
    },
    {
      "city": "Boston",
      "latitude": 42.3188,
      "longitude": -71.0846,
      "country_code": "US"
    },
    {
      "city": "Huanglongsi",
      "latitude": 34.7936,
      "longitude": 114.3403,
      "country_code": "CN"
    },
    {
      "city": "Xiaoganzhan",
      "latitude": 30.9273,
      "longitude": 113.911,
      "country_code": "CN"
    },
    {
      "city": "Changzhou",
      "latitude": 31.8122,
      "longitude": 119.9692,
      "country_code": "CN"
    },
    {
      "city": "Barcelona",
      "latitude": 41.3825,
      "longitude": 2.1769,
      "country_code": "ES"
    },
    {
      "city": "Chenzhou",
      "latitude": 25.7989,
      "longitude": 113.0267,
      "country_code": "CN"
    },
    {
      "city": "Wuxi",
      "latitude": 31.5667,
      "longitude": 120.2833,
      "country_code": "CN"
    },
    {
      "city": "Zibo",
      "latitude": 36.7831,
      "longitude": 118.0497,
      "country_code": "CN"
    },
    {
      "city": "Jiaxing",
      "latitude": 30.7522,
      "longitude": 120.75,
      "country_code": "CN"
    },
    {
      "city": "Dalian",
      "latitude": 38.9131,
      "longitude": 121.61,
      "country_code": "CN"
    },
    {
      "city": "Harbin",
      "latitude": 45.75,
      "longitude": 126.6333,
      "country_code": "CN"
    },
    {
      "city": "Yangzhou",
      "latitude": 32.3912,
      "longitude": 119.4363,
      "country_code": "CN"
    },
    {
      "city": "Yibin",
      "latitude": 28.7596,
      "longitude": 104.64,
      "country_code": "CN"
    },
    {
      "city": "Jiangmen",
      "latitude": 22.5833,
      "longitude": 113.0833,
      "country_code": "CN"
    },
    {
      "city": "Johannesburg",
      "latitude": -26.2044,
      "longitude": 28.0416,
      "country_code": "ZA"
    },
    {
      "city": "Meizhou",
      "latitude": 24.2998,
      "longitude": 116.1191,
      "country_code": "CN"
    },
    {
      "city": "Chifeng",
      "latitude": 42.2663,
      "longitude": 118.9223,
      "country_code": "CN"
    },
    {
      "city": "Casablanca",
      "latitude": 33.5992,
      "longitude": -7.62,
      "country_code": "MA"
    },
    {
      "city": "Guiyang",
      "latitude": 26.5794,
      "longitude": 106.7078,
      "country_code": "CN"
    },
    {
      "city": "Langfang",
      "latitude": 39.5196,
      "longitude": 116.7006,
      "country_code": "CN"
    },
    {
      "city": "Zhangjiakou",
      "latitude": 40.8108,
      "longitude": 114.8811,
      "country_code": "CN"
    },
    {
      "city": "İzmir",
      "latitude": 38.4127,
      "longitude": 27.1384,
      "country_code": "TR"
    },
    {
      "city": "Linfen",
      "latitude": 36.0812,
      "longitude": 111.5087,
      "country_code": "CN"
    },
    {
      "city": "Wenzhou",
      "latitude": 27.9991,
      "longitude": 120.6561,
      "country_code": "CN"
    },
    {
      "city": "Monterrey",
      "latitude": 25.6667,
      "longitude": -100.3,
      "country_code": "MX"
    },
    {
      "city": "Luzhou",
      "latitude": 28.8918,
      "longitude": 105.4409,
      "country_code": "CN"
    },
    {
      "city": "Jiangguanchi",
      "latitude": 34.0244,
      "longitude": 113.8201,
      "country_code": "CN"
    },
    {
      "city": "Neijiang",
      "latitude": 29.5872,
      "longitude": 105.0635,
      "country_code": "CN"
    },
    {
      "city": "Phoenix",
      "latitude": 33.5722,
      "longitude": -112.0891,
      "country_code": "US"
    },
    {
      "city": "Yanjiang",
      "latitude": 30.1256,
      "longitude": 104.6397,
      "country_code": "CN"
    },
    {
      "city": "Yiyang",
      "latitude": 28.5833,
      "longitude": 112.3333,
      "country_code": "CN"
    },
    {
      "city": "Zhaoqing",
      "latitude": 23.047,
      "longitude": 112.465,
      "country_code": "CN"
    },
    {
      "city": "Hengshui",
      "latitude": 37.7348,
      "longitude": 115.686,
      "country_code": "CN"
    },
    {
      "city": "Guigang",
      "latitude": 23.0961,
      "longitude": 109.6092,
      "country_code": "CN"
    },
    {
      "city": "Xiaoxita",
      "latitude": 30.7083,
      "longitude": 111.2803,
      "country_code": "CN"
    },
    {
      "city": "Xiamen",
      "latitude": 24.4797,
      "longitude": 118.0819,
      "country_code": "CN"
    },
    {
      "city": "Chuzhou",
      "latitude": 32.3062,
      "longitude": 118.3115,
      "country_code": "CN"
    },
    {
      "city": "Fuzhou",
      "latitude": 27.9814,
      "longitude": 116.3577,
      "country_code": "CN"
    },
    {
      "city": "Amman",
      "latitude": 31.95,
      "longitude": 35.9333,
      "country_code": "JO"
    },
    {
      "city": "Jeddah",
      "latitude": 21.5428,
      "longitude": 39.1728,
      "country_code": "SA"
    },
    {
      "city": "Sialkot City",
      "latitude": 32.5,
      "longitude": 74.5333,
      "country_code": "PK"
    },
    {
      "city": "Huizhou",
      "latitude": 23.1115,
      "longitude": 114.4152,
      "country_code": "CN"
    },
    {
      "city": "Qingyuan",
      "latitude": 23.6842,
      "longitude": 113.0507,
      "country_code": "CN"
    },
    {
      "city": "Zhuzhou",
      "latitude": 27.8407,
      "longitude": 113.1469,
      "country_code": "CN"
    },
    {
      "city": "Wuhu",
      "latitude": 31.334,
      "longitude": 118.3622,
      "country_code": "CN"
    },
    {
      "city": "Hechi",
      "latitude": 23.0965,
      "longitude": 109.6091,
      "country_code": "CN"
    },
    {
      "city": "Seattle",
      "latitude": 47.6211,
      "longitude": -122.3244,
      "country_code": "US"
    },
    {
      "city": "Loudi",
      "latitude": 27.7378,
      "longitude": 111.9974,
      "country_code": "CN"
    },
    {
      "city": "Binzhou",
      "latitude": 37.3806,
      "longitude": 118.0125,
      "country_code": "CN"
    },
    {
      "city": "Liuzhou",
      "latitude": 24.3181,
      "longitude": 109.4069,
      "country_code": "CN"
    },
    {
      "city": "Yokohama",
      "latitude": 35.4333,
      "longitude": 139.6333,
      "country_code": "JP"
    },
    {
      "city": "Baojishi",
      "latitude": 34.3609,
      "longitude": 107.1751,
      "country_code": "CN"
    },
    {
      "city": "Guang’an",
      "latitude": 30.4673,
      "longitude": 106.6336,
      "country_code": "CN"
    },
    {
      "city": "Hanzhong",
      "latitude": 33.0794,
      "longitude": 107.026,
      "country_code": "CN"
    },
    {
      "city": "Kabul",
      "latitude": 34.5328,
      "longitude": 69.1658,
      "country_code": "AF"
    },
    {
      "city": "Zaozhuang",
      "latitude": 34.8667,
      "longitude": 117.55,
      "country_code": "CN"
    },
    {
      "city": "Berlin",
      "latitude": 52.5167,
      "longitude": 13.3833,
      "country_code": "DE"
    },
    {
      "city": "Anshan",
      "latitude": 41.1066,
      "longitude": 122.9895,
      "country_code": "CN"
    },
    {
      "city": "Deyang",
      "latitude": 31.1289,
      "longitude": 104.395,
      "country_code": "CN"
    },
    {
      "city": "Lanzhou",
      "latitude": 36.0617,
      "longitude": 103.8318,
      "country_code": "CN"
    },
    {
      "city": "Chengde",
      "latitude": 40.9739,
      "longitude": 117.9322,
      "country_code": "CN"
    },
    {
      "city": "San Francisco",
      "latitude": 37.7562,
      "longitude": -122.443,
      "country_code": "US"
    },
    {
      "city": "Puyang",
      "latitude": 35.7639,
      "longitude": 115.03,
      "country_code": "CN"
    },
    {
      "city": "Suining",
      "latitude": 30.5098,
      "longitude": 105.5737,
      "country_code": "CN"
    },
    {
      "city": "Jiaozuo",
      "latitude": 35.229,
      "longitude": 113.2304,
      "country_code": "CN"
    },
    {
      "city": "Bengbu",
      "latitude": 32.9354,
      "longitude": 117.3531,
      "country_code": "CN"
    },
    {
      "city": "Montréal",
      "latitude": 45.5089,
      "longitude": -73.5617,
      "country_code": "CA"
    },
    {
      "city": "Detroit",
      "latitude": 42.3834,
      "longitude": -83.1024,
      "country_code": "US"
    },
    {
      "city": "Baicheng",
      "latitude": 23.901,
      "longitude": 106.6194,
      "country_code": "CN"
    },
    {
      "city": "Busan",
      "latitude": 35.1,
      "longitude": 129.0403,
      "country_code": "KR"
    },
    {
      "city": "Algiers",
      "latitude": 36.7764,
      "longitude": 3.0586,
      "country_code": "DZ"
    },
    {
      "city": "Qincheng",
      "latitude": 34.5809,
      "longitude": 105.7311,
      "country_code": "CN"
    },
    {
      "city": "Taiyuan",
      "latitude": 37.8733,
      "longitude": 112.5425,
      "country_code": "CN"
    },
    {
      "city": "Lucknow",
      "latitude": 26.847,
      "longitude": 80.947,
      "country_code": "IN"
    },
    {
      "city": "Chaoyang",
      "latitude": 41.5757,
      "longitude": 120.4486,
      "country_code": "CN"
    },
    {
      "city": "Hechi",
      "latitude": 24.6928,
      "longitude": 108.085,
      "country_code": "CN"
    },
    {
      "city": "Leshan",
      "latitude": 29.5854,
      "longitude": 103.7575,
      "country_code": "CN"
    },
    {
      "city": "Yulinshi",
      "latitude": 38.2655,
      "longitude": 109.7388,
      "country_code": "CN"
    },
    {
      "city": "Siping",
      "latitude": 43.1715,
      "longitude": 124.3644,
      "country_code": "CN"
    },
    {
      "city": "Madrid",
      "latitude": 40.4189,
      "longitude": -3.6919,
      "country_code": "ES"
    },
    {
      "city": "Jinan",
      "latitude": 36.6667,
      "longitude": 116.9833,
      "country_code": "CN"
    },
    {
      "city": "Shiyan",
      "latitude": 32.6351,
      "longitude": 110.7755,
      "country_code": "CN"
    },
    {
      "city": "Changzhi",
      "latitude": 36.1953,
      "longitude": 113.097,
      "country_code": "CN"
    },
    {
      "city": "San Diego",
      "latitude": 32.8312,
      "longitude": -117.1225,
      "country_code": "US"
    },
    {
      "city": "Faisalabad",
      "latitude": 31.418,
      "longitude": 73.079,
      "country_code": "PK"
    },
    {
      "city": "Santa Cruz",
      "latitude": -17.7892,
      "longitude": -63.1975,
      "country_code": "BO"
    },
    {
      "city": "Bazhou",
      "latitude": 31.8576,
      "longitude": 106.7559,
      "country_code": "CN"
    },
    {
      "city": "Zhongshan",
      "latitude": 22.5333,
      "longitude": 113.35,
      "country_code": "CN"
    },
    {
      "city": "Zhenjiang",
      "latitude": 32.2109,
      "longitude": 119.4551,
      "country_code": "CN"
    },
    {
      "city": "Ürümqi",
      "latitude": 43.825,
      "longitude": 87.6,
      "country_code": "CN"
    },
    {
      "city": "Tongliao",
      "latitude": 43.6172,
      "longitude": 122.264,
      "country_code": "CN"
    },
    {
      "city": "Heyuan",
      "latitude": 23.7503,
      "longitude": 114.6923,
      "country_code": "CN"
    },
    {
      "city": "Tongren",
      "latitude": 27.7233,
      "longitude": 109.1885,
      "country_code": "CN"
    },
    {
      "city": "Qinzhou",
      "latitude": 21.95,
      "longitude": 108.6167,
      "country_code": "CN"
    },
    {
      "city": "Jaipur",
      "latitude": 26.9167,
      "longitude": 75.8667,
      "country_code": "IN"
    },
    {
      "city": "Xinzhou",
      "latitude": 38.4178,
      "longitude": 112.7233,
      "country_code": "CN"
    },
    {
      "city": "Addis Ababa",
      "latitude": 9.0272,
      "longitude": 38.7369,
      "country_code": "ET"
    },
    {
      "city": "Giza",
      "latitude": 29.987,
      "longitude": 31.2118,
      "country_code": "EG"
    },
    {
      "city": "Meishan",
      "latitude": 30.0575,
      "longitude": 103.8381,
      "country_code": "CN"
    },
    {
      "city": "Brasília",
      "latitude": -15.7744,
      "longitude": -48.0773,
      "country_code": "BR"
    },
    {
      "city": "Mashhad",
      "latitude": 36.3069,
      "longitude": 59.6042,
      "country_code": "IR"
    },
    {
      "city": "Jinzhou",
      "latitude": 41.1144,
      "longitude": 121.1292,
      "country_code": "CN"
    },
    {
      "city": "Tieling",
      "latitude": 42.2841,
      "longitude": 123.8365,
      "country_code": "CN"
    },
    {
      "city": "Shaoguan",
      "latitude": 24.8011,
      "longitude": 113.5927,
      "country_code": "CN"
    },
    {
      "city": "Shanwei",
      "latitude": 22.7664,
      "longitude": 115.3331,
      "country_code": "CN"
    },
    {
      "city": "Minneapolis",
      "latitude": 44.9635,
      "longitude": -93.2678,
      "country_code": "US"
    },
    {
      "city": "Kyiv",
      "latitude": 50.45,
      "longitude": 30.5236,
      "country_code": "UA"
    },
    {
      "city": "Sanaa",
      "latitude": 15.35,
      "longitude": 44.2,
      "country_code": "YE"
    },
    {
      "city": "Quezon City",
      "latitude": 14.6333,
      "longitude": 121.0333,
      "country_code": "PH"
    },
    {
      "city": "Dingxi",
      "latitude": 35.5806,
      "longitude": 104.6263,
      "country_code": "CN"
    },
    {
      "city": "Salvador",
      "latitude": -12.9708,
      "longitude": -38.5108,
      "country_code": "BR"
    },
    {
      "city": "Incheon",
      "latitude": 37.4639,
      "longitude": 126.6486,
      "country_code": "KR"
    },
    {
      "city": "Bursa",
      "latitude": 40.1833,
      "longitude": 29.0667,
      "country_code": "TR"
    },
    {
      "city": "Ningde",
      "latitude": 26.6667,
      "longitude": 119.5167,
      "country_code": "CN"
    },
    {
      "city": "Tampa",
      "latitude": 27.9942,
      "longitude": -82.4451,
      "country_code": "US"
    },
    {
      "city": "Daqing",
      "latitude": 46.5979,
      "longitude": 125.008,
      "country_code": "CN"
    },
    {
      "city": "Birmingham",
      "latitude": 52.48,
      "longitude": -1.9025,
      "country_code": "GB"
    },
    {
      "city": "Putian",
      "latitude": 25.4394,
      "longitude": 119.0103,
      "country_code": "CN"
    },
    {
      "city": "Huzhou",
      "latitude": 30.8695,
      "longitude": 120.0958,
      "country_code": "CN"
    },
    {
      "city": "Wuzhou",
      "latitude": 23.4833,
      "longitude": 111.3167,
      "country_code": "CN"
    },
    {
      "city": "Denver",
      "latitude": 39.7621,
      "longitude": -104.8759,
      "country_code": "US"
    },
    {
      "city": "Rome",
      "latitude": 41.8931,
      "longitude": 12.4828,
      "country_code": "IT"
    },
    {
      "city": "La Paz",
      "latitude": -16.4942,
      "longitude": -68.1475,
      "country_code": "BO"
    },
    {
      "city": "Pyongyang",
      "latitude": 39.03,
      "longitude": 125.73,
      "country_code": "KP"
    },
    {
      "city": "Kano",
      "latitude": 12,
      "longitude": 8.5167,
      "country_code": "NG"
    },
    {
      "city": "Taichung",
      "latitude": 24.15,
      "longitude": 120.6667,
      "country_code": "TW"
    },
    {
      "city": "Omdurman",
      "latitude": 15.6835,
      "longitude": 32.4629,
      "country_code": "SD"
    },
    {
      "city": "Zigong",
      "latitude": 29.3498,
      "longitude": 104.7645,
      "country_code": "CN"
    },
    {
      "city": "Qinhuangdao",
      "latitude": 39.9398,
      "longitude": 119.5881,
      "country_code": "CN"
    },
    {
      "city": "Mudanjiang",
      "latitude": 44.5861,
      "longitude": 129.5997,
      "country_code": "CN"
    },
    {
      "city": "Huludao",
      "latitude": 40.7094,
      "longitude": 120.8378,
      "country_code": "CN"
    },
    {
      "city": "Kaohsiung",
      "latitude": 22.6167,
      "longitude": 120.3,
      "country_code": "TW"
    },
    {
      "city": "Xiangtan",
      "latitude": 27.8431,
      "longitude": 112.9228,
      "country_code": "CN"
    },
    {
      "city": "Guayaquil",
      "latitude": -2.1833,
      "longitude": -79.8833,
      "country_code": "EC"
    },
    {
      "city": "Rizhao",
      "latitude": 35.4164,
      "longitude": 119.4331,
      "country_code": "CN"
    },
    {
      "city": "Manchester",
      "latitude": 53.4794,
      "longitude": -2.2453,
      "country_code": "GB"
    },
    {
      "city": "Cawnpore",
      "latitude": 26.4725,
      "longitude": 80.3311,
      "country_code": "IN"
    },
    {
      "city": "Baotou",
      "latitude": 40.6562,
      "longitude": 109.8345,
      "country_code": "CN"
    },
    {
      "city": "Taipei",
      "latitude": 25.0478,
      "longitude": 121.5319,
      "country_code": "TW"
    },
    {
      "city": "Nanping",
      "latitude": 26.6448,
      "longitude": 118.1728,
      "country_code": "CN"
    },
    {
      "city": "Longyan",
      "latitude": 25.0881,
      "longitude": 117.0244,
      "country_code": "CN"
    },
    {
      "city": "Ibadan",
      "latitude": 7.3964,
      "longitude": 3.9167,
      "country_code": "NG"
    },
    {
      "city": "Hohhot",
      "latitude": 40.8151,
      "longitude": 111.6629,
      "country_code": "CN"
    },
    {
      "city": "Chaozhou",
      "latitude": 23.67,
      "longitude": 116.63,
      "country_code": "CN"
    },
    {
      "city": "Antananarivo",
      "latitude": -18.9386,
      "longitude": 47.5214,
      "country_code": "MG"
    },
    {
      "city": "Longba",
      "latitude": 33.535,
      "longitude": 105.349,
      "country_code": "CN"
    },
    {
      "city": "Weihai",
      "latitude": 37.5,
      "longitude": 122.1,
      "country_code": "CN"
    },
    {
      "city": "Chattogram",
      "latitude": 22.335,
      "longitude": 91.8325,
      "country_code": "BD"
    },
    {
      "city": "Santo Domingo",
      "latitude": 18.4764,
      "longitude": -69.8933,
      "country_code": "DO"
    },
    {
      "city": "Xuanzhou",
      "latitude": 30.9475,
      "longitude": 118.7518,
      "country_code": "CN"
    },
    {
      "city": "Sanming",
      "latitude": 26.2658,
      "longitude": 117.6302,
      "country_code": "CN"
    },
    {
      "city": "Brooklyn",
      "latitude": 40.6501,
      "longitude": -73.9496,
      "country_code": "US"
    },
    {
      "city": "Medellín",
      "latitude": 6.2447,
      "longitude": -75.5748,
      "country_code": "CO"
    },
    {
      "city": "Brisbane",
      "latitude": -27.4678,
      "longitude": 153.0281,
      "country_code": "AU"
    },
    {
      "city": "Baoshan",
      "latitude": 25.1211,
      "longitude": 99.169,
      "country_code": "CN"
    },
    {
      "city": "Dubai",
      "latitude": 25.2697,
      "longitude": 55.3094,
      "country_code": "AE"
    },
    {
      "city": "Luohe",
      "latitude": 33.583,
      "longitude": 114.0109,
      "country_code": "CN"
    },
    {
      "city": "Qinbaling",
      "latitude": 35.7278,
      "longitude": 107.64,
      "country_code": "CN"
    },
    {
      "city": "Mirzāpur",
      "latitude": 25.15,
      "longitude": 82.58,
      "country_code": "IN"
    },
    {
      "city": "Guangyuan",
      "latitude": 32.4353,
      "longitude": 105.8398,
      "country_code": "CN"
    },
    {
      "city": "Cali",
      "latitude": 3.44,
      "longitude": -76.5197,
      "country_code": "CO"
    },
    {
      "city": "Daegu",
      "latitude": 35.8667,
      "longitude": 128.6,
      "country_code": "KR"
    },
    {
      "city": "Fortaleza",
      "latitude": -3.7275,
      "longitude": -38.5275,
      "country_code": "BR"
    },
    {
      "city": "Guatemala City",
      "latitude": 14.6099,
      "longitude": -90.5252,
      "country_code": "GT"
    },
    {
      "city": "Yaoundé",
      "latitude": 3.8578,
      "longitude": 11.5181,
      "country_code": "CM"
    },
    {
      "city": "Douala",
      "latitude": 4.05,
      "longitude": 9.7,
      "country_code": "CM"
    },
    {
      "city": "Jilin",
      "latitude": 43.85,
      "longitude": 126.55,
      "country_code": "CN"
    },
    {
      "city": "Lianshan",
      "latitude": 40.7503,
      "longitude": 120.83,
      "country_code": "CN"
    },
    {
      "city": "Lincang",
      "latitude": 23.8864,
      "longitude": 100.0871,
      "country_code": "CN"
    },
    {
      "city": "Antalya",
      "latitude": 36.9081,
      "longitude": 30.6956,
      "country_code": "TR"
    },
    {
      "city": "Tashkent",
      "latitude": 41.3,
      "longitude": 69.2667,
      "country_code": "UZ"
    },
    {
      "city": "Huangshi",
      "latitude": 30.2018,
      "longitude": 115.0326,
      "country_code": "CN"
    },
    {
      "city": "Bandung",
      "latitude": -6.95,
      "longitude": 107.5667,
      "country_code": "ID"
    },
    {
      "city": "Nāgpur",
      "latitude": 21.1539,
      "longitude": 79.0831,
      "country_code": "IN"
    },
    {
      "city": "Dandong",
      "latitude": 40.1167,
      "longitude": 124.3833,
      "country_code": "CN"
    },
    {
      "city": "Huainan",
      "latitude": 32.4831,
      "longitude": 117.0164,
      "country_code": "CN"
    },
    {
      "city": "Shangzhou",
      "latitude": 33.868,
      "longitude": 109.9244,
      "country_code": "CN"
    },
    {
      "city": "Bekasi",
      "latitude": -6.2333,
      "longitude": 107,
      "country_code": "ID"
    },
    {
      "city": "Ghāziābād",
      "latitude": 28.6667,
      "longitude": 77.4167,
      "country_code": "IN"
    },
    {
      "city": "Tijuana",
      "latitude": 32.525,
      "longitude": -117.0333,
      "country_code": "MX"
    },
    {
      "city": "Jiamusi",
      "latitude": 46.8081,
      "longitude": 130.3653,
      "country_code": "CN"
    },
    {
      "city": "Yangjiang",
      "latitude": 21.8556,
      "longitude": 111.9627,
      "country_code": "CN"
    },
    {
      "city": "Accra",
      "latitude": 5.6037,
      "longitude": -0.187,
      "country_code": "GH"
    },
    {
      "city": "Yuxi",
      "latitude": 24.3495,
      "longitude": 102.5432,
      "country_code": "CN"
    },
    {
      "city": "Fushun",
      "latitude": 41.8708,
      "longitude": 123.8917,
      "country_code": "CN"
    },
    {
      "city": "Anshun",
      "latitude": 26.2456,
      "longitude": 105.934,
      "country_code": "CN"
    },
    {
      "city": "Vancouver",
      "latitude": 49.25,
      "longitude": -123.1,
      "country_code": "CA"
    },
    {
      "city": "Tangerang",
      "latitude": -6.1783,
      "longitude": 106.6319,
      "country_code": "ID"
    },
    {
      "city": "Konya",
      "latitude": 37.8714,
      "longitude": 32.4847,
      "country_code": "TR"
    },
    {
      "city": "Queens",
      "latitude": 40.7498,
      "longitude": -73.7976,
      "country_code": "US"
    },
    {
      "city": "Yingkou",
      "latitude": 40.6653,
      "longitude": 122.2297,
      "country_code": "CN"
    },
    {
      "city": "Adana",
      "latitude": 37,
      "longitude": 35.325,
      "country_code": "TR"
    },
    {
      "city": "Medan",
      "latitude": 3.6667,
      "longitude": 98.6667,
      "country_code": "ID"
    },
    {
      "city": "Sanmenxia",
      "latitude": 34.7736,
      "longitude": 111.195,
      "country_code": "CN"
    },
    {
      "city": "Indore",
      "latitude": 22.7206,
      "longitude": 75.8472,
      "country_code": "IN"
    },
    {
      "city": "Ma’anshan",
      "latitude": 31.7135,
      "longitude": 118.3605,
      "country_code": "CN"
    },
    {
      "city": "Pingliang",
      "latitude": 35.5412,
      "longitude": 106.6819,
      "country_code": "CN"
    },
    {
      "city": "Quzhou",
      "latitude": 28.9545,
      "longitude": 118.8763,
      "country_code": "CN"
    },
    {
      "city": "Baku",
      "latitude": 40.3667,
      "longitude": 49.8352,
      "country_code": "AZ"
    },
    {
      "city": "Gaoping",
      "latitude": 30.7804,
      "longitude": 106.13,
      "country_code": "CN"
    },
    {
      "city": "Huaibei",
      "latitude": 33.9562,
      "longitude": 116.789,
      "country_code": "CN"
    },
    {
      "city": "Xining",
      "latitude": 36.6239,
      "longitude": 101.7787,
      "country_code": "CN"
    },
    {
      "city": "Yan’an",
      "latitude": 36.5952,
      "longitude": 109.4863,
      "country_code": "CN"
    },
    {
      "city": "Havana",
      "latitude": 23.1367,
      "longitude": -82.3589,
      "country_code": "CU"
    },
    {
      "city": "Phnom Penh",
      "latitude": 11.5696,
      "longitude": 104.921,
      "country_code": "KH"
    },
    {
      "city": "Fukuoka",
      "latitude": 33.5903,
      "longitude": 130.4019,
      "country_code": "JP"
    },
    {
      "city": "Mogadishu",
      "latitude": 2.0408,
      "longitude": 45.3425,
      "country_code": "SO"
    },
    {
      "city": "Jincheng",
      "latitude": 35.4906,
      "longitude": 112.8483,
      "country_code": "CN"
    },
    {
      "city": "Lishui",
      "latitude": 28.45,
      "longitude": 119.9167,
      "country_code": "CN"
    },
    {
      "city": "Qingyang",
      "latitude": 24.8141,
      "longitude": 118.5792,
      "country_code": "CN"
    },
    {
      "city": "Riverside",
      "latitude": 33.9381,
      "longitude": -117.3948,
      "country_code": "US"
    },
    {
      "city": "Baltimore",
      "latitude": 39.3051,
      "longitude": -76.6144,
      "country_code": "US"
    },
    {
      "city": "Haiphong",
      "latitude": 20.8,
      "longitude": 106.6667,
      "country_code": "VN"
    },
    {
      "city": "Las Vegas",
      "latitude": 36.2333,
      "longitude": -115.2654,
      "country_code": "US"
    },
    {
      "city": "Laibin",
      "latitude": 23.7333,
      "longitude": 109.2333,
      "country_code": "CN"
    },
    {
      "city": "Rawalpindi",
      "latitude": 33.6007,
      "longitude": 73.0679,
      "country_code": "PK"
    },
    {
      "city": "Kumasi",
      "latitude": 6.6833,
      "longitude": -1.6167,
      "country_code": "GH"
    },
    {
      "city": "Portland",
      "latitude": 45.5372,
      "longitude": -122.65,
      "country_code": "US"
    },
    {
      "city": "Vadodara",
      "latitude": 22.3,
      "longitude": 73.2,
      "country_code": "IN"
    },
    {
      "city": "Perth",
      "latitude": -31.9522,
      "longitude": 115.8589,
      "country_code": "AU"
    },
    {
      "city": "Puning",
      "latitude": 23.2993,
      "longitude": 116.1586,
      "country_code": "CN"
    },
    {
      "city": "San Antonio",
      "latitude": 29.4658,
      "longitude": -98.5253,
      "country_code": "US"
    },
    {
      "city": "Haikou",
      "latitude": 20.02,
      "longitude": 110.32,
      "country_code": "CN"
    },
    {
      "city": "Vishākhapatnam",
      "latitude": 17.7333,
      "longitude": 83.3167,
      "country_code": "IN"
    },
    {
      "city": "Gaziantep",
      "latitude": 37.0667,
      "longitude": 37.3833,
      "country_code": "TR"
    },
    {
      "city": "Minsk",
      "latitude": 53.9022,
      "longitude": 27.5618,
      "country_code": "BY"
    },
    {
      "city": "St. Louis",
      "latitude": 38.6358,
      "longitude": -90.2451,
      "country_code": "US"
    },
    {
      "city": "Bamako",
      "latitude": 12.6458,
      "longitude": -7.9922,
      "country_code": "ML"
    },
    {
      "city": "Quito",
      "latitude": -0.2186,
      "longitude": -78.5097,
      "country_code": "EC"
    },
    {
      "city": "Pingxiang",
      "latitude": 27.6333,
      "longitude": 113.85,
      "country_code": "CN"
    },
    {
      "city": "Chongzuo",
      "latitude": 22.4167,
      "longitude": 107.3667,
      "country_code": "CN"
    },
    {
      "city": "Şanlıurfa",
      "latitude": 37.1583,
      "longitude": 38.7917,
      "country_code": "TR"
    },
    {
      "city": "Kananga",
      "latitude": -5.897,
      "longitude": 22.4488,
      "country_code": "CD"
    },
    {
      "city": "Peshawar",
      "latitude": 34,
      "longitude": 71.5,
      "country_code": "PK"
    },
    {
      "city": "Sapporo",
      "latitude": 43.0621,
      "longitude": 141.3544,
      "country_code": "JP"
    },
    {
      "city": "Jixi",
      "latitude": 45.2937,
      "longitude": 130.965,
      "country_code": "CN"
    },
    {
      "city": "Caracas",
      "latitude": 10.5,
      "longitude": -66.9333,
      "country_code": "VE"
    },
    {
      "city": "Fuxin",
      "latitude": 42.0127,
      "longitude": 121.6486,
      "country_code": "CN"
    },
    {
      "city": "Leeds",
      "latitude": 53.7997,
      "longitude": -1.5492,
      "country_code": "GB"
    },
    {
      "city": "Sacramento",
      "latitude": 38.5667,
      "longitude": -121.4683,
      "country_code": "US"
    },
    {
      "city": "Blantyre",
      "latitude": -15.7861,
      "longitude": 35.0058,
      "country_code": "MW"
    },
    {
      "city": "Tainan",
      "latitude": 22.9833,
      "longitude": 120.1833,
      "country_code": "TW"
    },
    {
      "city": "Bucharest",
      "latitude": 44.4,
      "longitude": 26.0833,
      "country_code": "RO"
    },
    {
      "city": "Wuwei",
      "latitude": 37.9278,
      "longitude": 102.6329,
      "country_code": "CN"
    },
    {
      "city": "Bhopāl",
      "latitude": 23.25,
      "longitude": 77.4167,
      "country_code": "IN"
    },
    {
      "city": "Curitiba",
      "latitude": -25.4297,
      "longitude": -49.2719,
      "country_code": "BR"
    },
    {
      "city": "Xiping",
      "latitude": 40.08,
      "longitude": 113.3,
      "country_code": "CN"
    },
    {
      "city": "Asunción",
      "latitude": -25.3,
      "longitude": -57.6333,
      "country_code": "PY"
    },
    {
      "city": "Saidu Sharif",
      "latitude": 34.75,
      "longitude": 72.3572,
      "country_code": "PK"
    },
    {
      "city": "Vienna",
      "latitude": 48.2083,
      "longitude": 16.3731,
      "country_code": "AT"
    },
    {
      "city": "Aleppo",
      "latitude": 36.2,
      "longitude": 37.15,
      "country_code": "SY"
    },
    {
      "city": "Hamburg",
      "latitude": 53.55,
      "longitude": 10,
      "country_code": "DE"
    },
    {
      "city": "Meru",
      "latitude": 0.05,
      "longitude": 37.65,
      "country_code": "KE"
    },
    {
      "city": "Brazzaville",
      "latitude": -4.2667,
      "longitude": 15.2833,
      "country_code": "CG"
    },
    {
      "city": "Orlando",
      "latitude": 28.4772,
      "longitude": -81.3369,
      "country_code": "US"
    },
    {
      "city": "Mersin",
      "latitude": 36.8,
      "longitude": 34.6167,
      "country_code": "TR"
    },
    {
      "city": "Almaty",
      "latitude": 43.25,
      "longitude": 76.9,
      "country_code": "KZ"
    },
    {
      "city": "Barranquilla",
      "latitude": 10.96,
      "longitude": -74.8,
      "country_code": "CO"
    },
    {
      "city": "Kyōto",
      "latitude": 35.0111,
      "longitude": 135.7669,
      "country_code": "JP"
    },
    {
      "city": "Manaus",
      "latitude": -3.1,
      "longitude": -60.0167,
      "country_code": "BR"
    },
    {
      "city": "Liaoyang",
      "latitude": 41.2643,
      "longitude": 123.1772,
      "country_code": "CN"
    },
    {
      "city": "Baiyin",
      "latitude": 36.5448,
      "longitude": 104.1766,
      "country_code": "CN"
    },
    {
      "city": "San Jose",
      "latitude": 37.3019,
      "longitude": -121.8486,
      "country_code": "US"
    },
    {
      "city": "Warsaw",
      "latitude": 52.2167,
      "longitude": 21.0333,
      "country_code": "PL"
    },
    {
      "city": "Shengli",
      "latitude": 37.45,
      "longitude": 118.4667,
      "country_code": "CN"
    },
    {
      "city": "Lubumbashi",
      "latitude": -11.6697,
      "longitude": 27.4581,
      "country_code": "CD"
    },
    {
      "city": "Damascus",
      "latitude": 33.5131,
      "longitude": 36.2919,
      "country_code": "SY"
    },
    {
      "city": "Shuyangzha",
      "latitude": 34.1299,
      "longitude": 118.7734,
      "country_code": "CN"
    },
    {
      "city": "Shangqiu",
      "latitude": 34.4504,
      "longitude": 115.65,
      "country_code": "CN"
    },
    {
      "city": "Eşfahān",
      "latitude": 32.6447,
      "longitude": 51.6675,
      "country_code": "IR"
    },
    {
      "city": "Budapest",
      "latitude": 47.4983,
      "longitude": 19.0408,
      "country_code": "HU"
    },
    {
      "city": "Heihe",
      "latitude": 50.2458,
      "longitude": 127.4886,
      "country_code": "CN"
    },
    {
      "city": "Lusaka",
      "latitude": -15.4167,
      "longitude": 28.2833,
      "country_code": "ZM"
    },
    {
      "city": "Diyarbakır",
      "latitude": 37.9108,
      "longitude": 40.2367,
      "country_code": "TR"
    },
    {
      "city": "Chinchvad",
      "latitude": 18.6278,
      "longitude": 73.8131,
      "country_code": "IN"
    },
    {
      "city": "Shuozhou",
      "latitude": 39.3408,
      "longitude": 112.4292,
      "country_code": "CN"
    },
    {
      "city": "Vitória",
      "latitude": -20.324,
      "longitude": -40.366,
      "country_code": "BR"
    },
    {
      "city": "Cleveland",
      "latitude": 41.4767,
      "longitude": -81.6804,
      "country_code": "US"
    },
    {
      "city": "Pittsburgh",
      "latitude": 40.4396,
      "longitude": -79.9762,
      "country_code": "US"
    },
    {
      "city": "Mecca",
      "latitude": 21.4225,
      "longitude": 39.8261,
      "country_code": "SA"
    },
    {
      "city": "Patna",
      "latitude": 25.61,
      "longitude": 85.1414,
      "country_code": "IN"
    },
    {
      "city": "Mosul",
      "latitude": 36.3667,
      "longitude": 43.1167,
      "country_code": "IQ"
    },
    {
      "city": "Austin",
      "latitude": 30.3004,
      "longitude": -97.7522,
      "country_code": "US"
    },
    {
      "city": "Sanzhou",
      "latitude": 30.82,
      "longitude": 108.4,
      "country_code": "CN"
    },
    {
      "city": "Conakry",
      "latitude": 9.5092,
      "longitude": -13.7122,
      "country_code": "GN"
    },
    {
      "city": "Kampala",
      "latitude": 0.3136,
      "longitude": 32.5811,
      "country_code": "UG"
    },
    {
      "city": "Ecatepec",
      "latitude": 19.6097,
      "longitude": -99.06,
      "country_code": "MX"
    },
    {
      "city": "Cincinnati",
      "latitude": 39.1413,
      "longitude": -84.5061,
      "country_code": "US"
    },
    {
      "city": "Makassar",
      "latitude": -5.1331,
      "longitude": 119.4136,
      "country_code": "ID"
    },
    {
      "city": "Yushan",
      "latitude": 31.3867,
      "longitude": 120.9766,
      "country_code": "CN"
    },
    {
      "city": "Ludhiāna",
      "latitude": 30.9083,
      "longitude": 75.8486,
      "country_code": "IN"
    },
    {
      "city": "Newcastle",
      "latitude": 55.0077,
      "longitude": -1.6578,
      "country_code": "GB"
    },
    {
      "city": "Depok",
      "latitude": -6.394,
      "longitude": 106.8225,
      "country_code": "ID"
    },
    {
      "city": "Zhongli",
      "latitude": 24.965,
      "longitude": 121.2168,
      "country_code": "TW"
    },
    {
      "city": "Kansas City",
      "latitude": 39.1239,
      "longitude": -94.5541,
      "country_code": "US"
    },
    {
      "city": "Rabat",
      "latitude": 34.0253,
      "longitude": -6.8361,
      "country_code": "MA"
    },
    {
      "city": "Ouagadougou",
      "latitude": 12.3572,
      "longitude": -1.5353,
      "country_code": "BF"
    },
    {
      "city": "Davao",
      "latitude": 7.0667,
      "longitude": 125.6,
      "country_code": "PH"
    },
    {
      "city": "Manhattan",
      "latitude": 40.7834,
      "longitude": -73.9662,
      "country_code": "US"
    },
    {
      "city": "Semarang",
      "latitude": -6.9667,
      "longitude": 110.4167,
      "country_code": "ID"
    },
    {
      "city": "Yinchuan",
      "latitude": 38.4795,
      "longitude": 106.2254,
      "country_code": "CN"
    },
    {
      "city": "Multan",
      "latitude": 30.1978,
      "longitude": 71.4711,
      "country_code": "PK"
    },
    {
      "city": "Caloocan City",
      "latitude": 14.65,
      "longitude": 120.9667,
      "country_code": "PH"
    },
    {
      "city": "Harare",
      "latitude": -17.8292,
      "longitude": 31.0522,
      "country_code": "ZW"
    },
    {
      "city": "Novosibirsk",
      "latitude": 55.0333,
      "longitude": 82.9167,
      "country_code": "RU"
    },
    {
      "city": "Chengtangcun",
      "latitude": 35.0833,
      "longitude": 117.15,
      "country_code": "CN"
    },
    {
      "city": "Āgra",
      "latitude": 27.18,
      "longitude": 78.02,
      "country_code": "IN"
    },
    {
      "city": "Karaj",
      "latitude": 35.8327,
      "longitude": 50.9915,
      "country_code": "IR"
    },
    {
      "city": "Indianapolis",
      "latitude": 39.7771,
      "longitude": -86.1458,
      "country_code": "US"
    },
    {
      "city": "Jingdezhen",
      "latitude": 29.2942,
      "longitude": 117.2036,
      "country_code": "CN"
    },
    {
      "city": "Puebla",
      "latitude": 19.0333,
      "longitude": -98.1833,
      "country_code": "MX"
    },
    {
      "city": "Kalyān",
      "latitude": 19.2502,
      "longitude": 73.1602,
      "country_code": "IN"
    },
    {
      "city": "Madurai",
      "latitude": 9.9197,
      "longitude": 78.1194,
      "country_code": "IN"
    },
    {
      "city": "Gujranwala",
      "latitude": 32.15,
      "longitude": 74.1833,
      "country_code": "PK"
    },
    {
      "city": "Benxi",
      "latitude": 41.292,
      "longitude": 123.761,
      "country_code": "CN"
    },
    {
      "city": "Jamshedpur",
      "latitude": 22.8,
      "longitude": 86.1833,
      "country_code": "IN"
    },
    {
      "city": "Zhuhai",
      "latitude": 22.2769,
      "longitude": 113.5678,
      "country_code": "CN"
    },
    {
      "city": "Recife",
      "latitude": -8.0539,
      "longitude": -34.8808,
      "country_code": "BR"
    },
    {
      "city": "Columbus",
      "latitude": 39.9862,
      "longitude": -82.985,
      "country_code": "US"
    },
    {
      "city": "Tabrīz",
      "latitude": 38.0833,
      "longitude": 46.2833,
      "country_code": "IR"
    },
    {
      "city": "Santiago",
      "latitude": 19.5,
      "longitude": -70.67,
      "country_code": "DO"
    },
    {
      "city": "Maracaibo",
      "latitude": 10.6333,
      "longitude": -71.6333,
      "country_code": "VE"
    },
    {
      "city": "Beihai",
      "latitude": 21.4667,
      "longitude": 109.1,
      "country_code": "CN"
    },
    {
      "city": "Shuangyashan",
      "latitude": 46.6388,
      "longitude": 131.1545,
      "country_code": "CN"
    },
    {
      "city": "Kōbe",
      "latitude": 34.6913,
      "longitude": 135.183,
      "country_code": "JP"
    },
    {
      "city": "Charlotte",
      "latitude": 35.208,
      "longitude": -80.8304,
      "country_code": "US"
    },
    {
      "city": "Yucheng",
      "latitude": 29.9888,
      "longitude": 103.0007,
      "country_code": "CN"
    },
    {
      "city": "Changshu",
      "latitude": 31.65,
      "longitude": 120.7333,
      "country_code": "CN"
    },
    {
      "city": "Ximeicun",
      "latitude": 24.9633,
      "longitude": 118.3811,
      "country_code": "CN"
    },
    {
      "city": "Jianguang",
      "latitude": 28.1958,
      "longitude": 115.7833,
      "country_code": "CN"
    },
    {
      "city": "Gwangju",
      "latitude": 35.1667,
      "longitude": 126.9167,
      "country_code": "KR"
    },
    {
      "city": "Xushan",
      "latitude": 30.1697,
      "longitude": 121.2665,
      "country_code": "CN"
    },
    {
      "city": "Guiping",
      "latitude": 23.4,
      "longitude": 110.0833,
      "country_code": "CN"
    },
    {
      "city": "Nāsik",
      "latitude": 20,
      "longitude": 73.7833,
      "country_code": "IN"
    },
    {
      "city": "Porto Alegre",
      "latitude": -30.0328,
      "longitude": -51.23,
      "country_code": "BR"
    },
    {
      "city": "Zhangjiajie",
      "latitude": 29.1255,
      "longitude": 110.4844,
      "country_code": "CN"
    },
    {
      "city": "Valencia",
      "latitude": 10.1667,
      "longitude": -68,
      "country_code": "VE"
    },
    {
      "city": "Virginia Beach",
      "latitude": 36.7335,
      "longitude": -76.0435,
      "country_code": "US"
    },
    {
      "city": "Daejeon",
      "latitude": 36.351,
      "longitude": 127.385,
      "country_code": "KR"
    },
    {
      "city": "Munich",
      "latitude": 48.1372,
      "longitude": 11.5755,
      "country_code": "DE"
    },
    {
      "city": "Yekaterinburg",
      "latitude": 56.8356,
      "longitude": 60.6128,
      "country_code": "RU"
    },
    {
      "city": "Auckland",
      "latitude": -36.85,
      "longitude": 174.7833,
      "country_code": "NZ"
    },
    {
      "city": "Yunfu",
      "latitude": 22.9242,
      "longitude": 112.0353,
      "country_code": "CN"
    },
    {
      "city": "Huangshan",
      "latitude": 29.7132,
      "longitude": 118.3151,
      "country_code": "CN"
    },
    {
      "city": "Huazhou",
      "latitude": 32.6832,
      "longitude": 112.079,
      "country_code": "CN"
    },
    {
      "city": "Shīrāz",
      "latitude": 29.61,
      "longitude": 52.5425,
      "country_code": "IR"
    },
    {
      "city": "León de los Aldama",
      "latitude": 21.1167,
      "longitude": -101.6833,
      "country_code": "MX"
    },
    {
      "city": "Pizhou",
      "latitude": 34.3422,
      "longitude": 118.0097,
      "country_code": "CN"
    },
    {
      "city": "Palembang",
      "latitude": -2.9833,
      "longitude": 104.7644,
      "country_code": "ID"
    },
    {
      "city": "Kharkiv",
      "latitude": 50,
      "longitude": 36.2292,
      "country_code": "UA"
    },
    {
      "city": "Kawanakajima",
      "latitude": 35.53,
      "longitude": 139.705,
      "country_code": "JP"
    },
    {
      "city": "Lianjiang",
      "latitude": 21.6146,
      "longitude": 110.2794,
      "country_code": "CN"
    },
    {
      "city": "Chizhou",
      "latitude": 30.6583,
      "longitude": 117.4849,
      "country_code": "CN"
    },
    {
      "city": "Leizhou",
      "latitude": 20.9147,
      "longitude": 110.0806,
      "country_code": "CN"
    },
    {
      "city": "Guyuan",
      "latitude": 36.008,
      "longitude": 106.2782,
      "country_code": "CN"
    },
    {
      "city": "Rui’an",
      "latitude": 27.778,
      "longitude": 120.6526,
      "country_code": "CN"
    },
    {
      "city": "Birstall",
      "latitude": 52.6736,
      "longitude": -1.12,
      "country_code": "GB"
    },
    {
      "city": "Muscat",
      "latitude": 23.6139,
      "longitude": 58.5922,
      "country_code": "OM"
    },
    {
      "city": "Hebi",
      "latitude": 35.7497,
      "longitude": 114.2887,
      "country_code": "CN"
    },
    {
      "city": "Jingling",
      "latitude": 30.6667,
      "longitude": 113.1667,
      "country_code": "CN"
    },
    {
      "city": "Bronx",
      "latitude": 40.8501,
      "longitude": -73.8662,
      "country_code": "US"
    },
    {
      "city": "The Hague",
      "latitude": 52.08,
      "longitude": 4.27,
      "country_code": "NL"
    },
    {
      "city": "Owerri",
      "latitude": 5.4833,
      "longitude": 7.0333,
      "country_code": "NG"
    },
    {
      "city": "Sharjah",
      "latitude": 25.3575,
      "longitude": 55.3919,
      "country_code": "AE"
    },
    {
      "city": "Farīdābād",
      "latitude": 28.4333,
      "longitude": 77.3167,
      "country_code": "IN"
    },
    {
      "city": "Ulaanbaatar",
      "latitude": 47.9203,
      "longitude": 106.9172,
      "country_code": "MN"
    },
    {
      "city": "Goiânia",
      "latitude": -16.6789,
      "longitude": -49.2539,
      "country_code": "BR"
    },
    {
      "city": "Belém",
      "latitude": -1.4558,
      "longitude": -48.5039,
      "country_code": "BR"
    },
    {
      "city": "Kayseri",
      "latitude": 38.7333,
      "longitude": 35.4833,
      "country_code": "TR"
    },
    {
      "city": "Yueqing",
      "latitude": 28.1188,
      "longitude": 120.9621,
      "country_code": "CN"
    },
    {
      "city": "Belgrade",
      "latitude": 44.8167,
      "longitude": 20.4667,
      "country_code": "RS"
    },
    {
      "city": "Pingdu",
      "latitude": 36.7833,
      "longitude": 119.9556,
      "country_code": "CN"
    },
    {
      "city": "Aurangābād",
      "latitude": 19.88,
      "longitude": 75.32,
      "country_code": "IN"
    },
    {
      "city": "Yutan",
      "latitude": 28.3147,
      "longitude": 112.554,
      "country_code": "CN"
    },
    {
      "city": "Wenling",
      "latitude": 28.3797,
      "longitude": 121.3718,
      "country_code": "CN"
    },
    {
      "city": "Islamabad",
      "latitude": 33.6989,
      "longitude": 73.0369,
      "country_code": "PK"
    },
    {
      "city": "Milwaukee",
      "latitude": 43.0642,
      "longitude": -87.9673,
      "country_code": "US"
    },
    {
      "city": "Milan",
      "latitude": 45.4669,
      "longitude": 9.19,
      "country_code": "IT"
    },
    {
      "city": "Sofia",
      "latitude": 42.6975,
      "longitude": 23.3241,
      "country_code": "BG"
    },
    {
      "city": "Adelaide",
      "latitude": -34.9289,
      "longitude": 138.6011,
      "country_code": "AU"
    },
    {
      "city": "Samsun",
      "latitude": 41.2867,
      "longitude": 36.33,
      "country_code": "TR"
    },
    {
      "city": "Rājkot",
      "latitude": 22.2969,
      "longitude": 70.7984,
      "country_code": "IN"
    },
    {
      "city": "Khulna",
      "latitude": 22.8167,
      "longitude": 89.55,
      "country_code": "BD"
    },
    {
      "city": "Córdoba",
      "latitude": -31.4167,
      "longitude": -64.1833,
      "country_code": "AR"
    },
    {
      "city": "Guarulhos",
      "latitude": -23.4667,
      "longitude": -46.5333,
      "country_code": "BR"
    },
    {
      "city": "Juárez",
      "latitude": 31.7386,
      "longitude": -106.487,
      "country_code": "MX"
    },
    {
      "city": "Prague",
      "latitude": 50.0833,
      "longitude": 14.4167,
      "country_code": "CZ"
    },
    {
      "city": "Montevideo",
      "latitude": -34.8667,
      "longitude": -56.1667,
      "country_code": "UY"
    },
    {
      "city": "Mbuji-Mayi",
      "latitude": -6.1209,
      "longitude": 23.5967,
      "country_code": "CD"
    },
    {
      "city": "Fuqing",
      "latitude": 25.7232,
      "longitude": 119.3735,
      "country_code": "CN"
    },
    {
      "city": "Xintai",
      "latitude": 35.91,
      "longitude": 117.78,
      "country_code": "CN"
    },
    {
      "city": "Doha",
      "latitude": 25.3,
      "longitude": 51.5333,
      "country_code": "QA"
    },
    {
      "city": "Saitama",
      "latitude": 35.8617,
      "longitude": 139.6453,
      "country_code": "JP"
    },
    {
      "city": "Hiroshima",
      "latitude": 34.3853,
      "longitude": 132.4553,
      "country_code": "JP"
    },
    {
      "city": "Meerut",
      "latitude": 28.99,
      "longitude": 77.7,
      "country_code": "IN"
    },
    {
      "city": "Yushu",
      "latitude": 44.8249,
      "longitude": 126.5451,
      "country_code": "CN"
    },
    {
      "city": "Rongcheng",
      "latitude": 26.2312,
      "longitude": 104.0966,
      "country_code": "CN"
    },
    {
      "city": "Yangquan",
      "latitude": 37.8576,
      "longitude": 113.5762,
      "country_code": "CN"
    },
    {
      "city": "Haicheng",
      "latitude": 40.8523,
      "longitude": 122.7474,
      "country_code": "CN"
    },
    {
      "city": "Gaozhou",
      "latitude": 21.9392,
      "longitude": 110.8461,
      "country_code": "CN"
    },
    {
      "city": "Yingtan",
      "latitude": 28.2333,
      "longitude": 117,
      "country_code": "CN"
    },
    {
      "city": "Huaiyin",
      "latitude": 33.58,
      "longitude": 119.03,
      "country_code": "CN"
    },
    {
      "city": "Wuzhong",
      "latitude": 37.9874,
      "longitude": 106.1919,
      "country_code": "CN"
    },
    {
      "city": "Jabalpur",
      "latitude": 23.1667,
      "longitude": 79.9333,
      "country_code": "IN"
    },
    {
      "city": "Thāne",
      "latitude": 19.18,
      "longitude": 72.9633,
      "country_code": "IN"
    },
    {
      "city": "Zhangye",
      "latitude": 38.9355,
      "longitude": 100.4553,
      "country_code": "CN"
    },
    {
      "city": "Rucheng",
      "latitude": 32.3852,
      "longitude": 120.5634,
      "country_code": "CN"
    },
    {
      "city": "Nizhniy Novgorod",
      "latitude": 56.3269,
      "longitude": 44.0075,
      "country_code": "RU"
    },
    {
      "city": "Comayagüela",
      "latitude": 14.0833,
      "longitude": -87.2167,
      "country_code": "HN"
    },
    {
      "city": "Yangshe",
      "latitude": 31.8775,
      "longitude": 120.5512,
      "country_code": "CN"
    },
    {
      "city": "Shaoyang",
      "latitude": 32.9387,
      "longitude": 119.8404,
      "country_code": "CN"
    },
    {
      "city": "Dhanbād",
      "latitude": 23.7928,
      "longitude": 86.435,
      "country_code": "IN"
    },
    {
      "city": "Yichun",
      "latitude": 47.7235,
      "longitude": 128.8893,
      "country_code": "CN"
    },
    {
      "city": "Laiwu",
      "latitude": 36.1833,
      "longitude": 117.6667,
      "country_code": "CN"
    },
    {
      "city": "Kazan",
      "latitude": 55.7908,
      "longitude": 49.1144,
      "country_code": "RU"
    },
    {
      "city": "Dayan",
      "latitude": 26.8808,
      "longitude": 100.2208,
      "country_code": "CN"
    },
    {
      "city": "Suwon",
      "latitude": 37.2858,
      "longitude": 127.01,
      "country_code": "KR"
    },
    {
      "city": "Jiangyin",
      "latitude": 31.9087,
      "longitude": 120.2653,
      "country_code": "CN"
    },
    {
      "city": "Yongcheng",
      "latitude": 33.9317,
      "longitude": 116.4459,
      "country_code": "CN"
    },
    {
      "city": "Calgary",
      "latitude": 51.05,
      "longitude": -114.0667,
      "country_code": "CA"
    },
    {
      "city": "Cần Thơ",
      "latitude": 10.0333,
      "longitude": 105.7833,
      "country_code": "VN"
    },
    {
      "city": "Abuja",
      "latitude": 9.0556,
      "longitude": 7.4914,
      "country_code": "NG"
    },
    {
      "city": "Yiwu",
      "latitude": 29.3081,
      "longitude": 120.0698,
      "country_code": "CN"
    },
    {
      "city": "Mandalay",
      "latitude": 21.9769,
      "longitude": 96.0869,
      "country_code": "MM"
    },
    {
      "city": "Beidao",
      "latitude": 34.6,
      "longitude": 105.92,
      "country_code": "CN"
    },
    {
      "city": "Al Başrah",
      "latitude": 30.4889,
      "longitude": 47.81,
      "country_code": "IQ"
    },
    {
      "city": "Shuangshui",
      "latitude": 26.5944,
      "longitude": 104.8333,
      "country_code": "CN"
    },
    {
      "city": "Sevilla",
      "latitude": 37.3828,
      "longitude": -5.9731,
      "country_code": "ES"
    },
    {
      "city": "Vila Velha",
      "latitude": 3.2167,
      "longitude": -51.2167,
      "country_code": "BR"
    },
    {
      "city": "Allahābād",
      "latitude": 25.455,
      "longitude": 81.84,
      "country_code": "IN"
    },
    {
      "city": "Vārānasi",
      "latitude": 25.3189,
      "longitude": 83.0128,
      "country_code": "IN"
    },
    {
      "city": "Tunis",
      "latitude": 36.8008,
      "longitude": 10.18,
      "country_code": "TN"
    },
    {
      "city": "Chelyabinsk",
      "latitude": 55.15,
      "longitude": 61.4,
      "country_code": "RU"
    },
    {
      "city": "Mombasa",
      "latitude": -4.05,
      "longitude": 39.6667,
      "country_code": "KE"
    },
    {
      "city": "Providence",
      "latitude": 41.823,
      "longitude": -71.4187,
      "country_code": "US"
    },
    {
      "city": "Qom",
      "latitude": 34.6461,
      "longitude": 50.8789,
      "country_code": "IR"
    },
    {
      "city": "Maiduguri",
      "latitude": 11.8333,
      "longitude": 13.15,
      "country_code": "NG"
    },
    {
      "city": "Maputo",
      "latitude": -25.9153,
      "longitude": 32.5764,
      "country_code": "MZ"
    },
    {
      "city": "Rosario",
      "latitude": -32.9575,
      "longitude": -60.6394,
      "country_code": "AR"
    },
    {
      "city": "Benin City",
      "latitude": 6.3176,
      "longitude": 5.6145,
      "country_code": "NG"
    },
    {
      "city": "Xinyu",
      "latitude": 27.795,
      "longitude": 114.9242,
      "country_code": "CN"
    },
    {
      "city": "Ahvāz",
      "latitude": 31.3203,
      "longitude": 48.6692,
      "country_code": "IR"
    },
    {
      "city": "Dublin",
      "latitude": 53.3425,
      "longitude": -6.2658,
      "country_code": "IE"
    },
    {
      "city": "Jacksonville",
      "latitude": 30.3322,
      "longitude": -81.6749,
      "country_code": "US"
    },
    {
      "city": "Medina",
      "latitude": 24.4667,
      "longitude": 39.6,
      "country_code": "SA"
    },
    {
      "city": "Srīnagar",
      "latitude": 34.0911,
      "longitude": 74.8061,
      "country_code": "IN"
    },
    {
      "city": "Omsk",
      "latitude": 54.9667,
      "longitude": 73.3833,
      "country_code": "RU"
    },
    {
      "city": "Huazhou",
      "latitude": 21.654,
      "longitude": 110.6294,
      "country_code": "CN"
    },
    {
      "city": "Cilacap",
      "latitude": -7.7167,
      "longitude": 109.017,
      "country_code": "ID"
    },
    {
      "city": "Xiantao",
      "latitude": 30.3833,
      "longitude": 113.4,
      "country_code": "CN"
    },
    {
      "city": "Bandar Lampung",
      "latitude": -5.4294,
      "longitude": 105.2625,
      "country_code": "ID"
    },
    {
      "city": "Samara",
      "latitude": 53.1833,
      "longitude": 50.1167,
      "country_code": "RU"
    },
    {
      "city": "Guankou",
      "latitude": 28.1417,
      "longitude": 113.625,
      "country_code": "CN"
    },
    {
      "city": "Ulsan",
      "latitude": 35.55,
      "longitude": 129.3167,
      "country_code": "KR"
    },
    {
      "city": "Dingzhou",
      "latitude": 38.5158,
      "longitude": 114.9845,
      "country_code": "CN"
    },
    {
      "city": "Campinas",
      "latitude": -22.9009,
      "longitude": -47.0573,
      "country_code": "BR"
    },
    {
      "city": "Lianyuan",
      "latitude": 27.6961,
      "longitude": 111.6659,
      "country_code": "CN"
    },
    {
      "city": "Rongcheng",
      "latitude": 29.8239,
      "longitude": 112.9019,
      "country_code": "CN"
    },
    {
      "city": "Kaiyuan",
      "latitude": 36.0656,
      "longitude": 113.8153,
      "country_code": "CN"
    },
    {
      "city": "Nay Pyi Taw",
      "latitude": 19.8028,
      "longitude": 96.1583,
      "country_code": "MM"
    },
    {
      "city": "Dakar",
      "latitude": 14.7319,
      "longitude": -17.4572,
      "country_code": "SN"
    },
    {
      "city": "Zhuji",
      "latitude": 29.7169,
      "longitude": 120.2314,
      "country_code": "CN"
    },
    {
      "city": "Zapopan",
      "latitude": 20.7167,
      "longitude": -103.4,
      "country_code": "MX"
    },
    {
      "city": "Leiyang",
      "latitude": 26.4179,
      "longitude": 112.8457,
      "country_code": "CN"
    },
    {
      "city": "Dadukou",
      "latitude": 26.5849,
      "longitude": 101.7149,
      "country_code": "CN"
    },
    {
      "city": "Quetta",
      "latitude": 30.192,
      "longitude": 67.007,
      "country_code": "PK"
    },
    {
      "city": "Amritsar",
      "latitude": 31.6167,
      "longitude": 74.85,
      "country_code": "IN"
    },
    {
      "city": "Callao",
      "latitude": -12.0611,
      "longitude": -77.1333,
      "country_code": "PE"
    },
    {
      "city": "Alīgarh",
      "latitude": 27.88,
      "longitude": 78.08,
      "country_code": "IN"
    },
    {
      "city": "Yingchuan",
      "latitude": 34.1511,
      "longitude": 113.4733,
      "country_code": "CN"
    },
    {
      "city": "Tegucigalpa",
      "latitude": 14.0942,
      "longitude": -87.2067,
      "country_code": "HN"
    },
    {
      "city": "Ciudad Nezahualcóyotl",
      "latitude": 19.41,
      "longitude": -99.03,
      "country_code": "MX"
    },
    {
      "city": "Tripoli",
      "latitude": 32.8752,
      "longitude": 13.1875,
      "country_code": "LY"
    },
    {
      "city": "Rostov",
      "latitude": 47.2333,
      "longitude": 39.7167,
      "country_code": "RU"
    },
    {
      "city": "Nezahualcóyotl",
      "latitude": 19.4,
      "longitude": -98.9889,
      "country_code": "MX"
    },
    {
      "city": "Bhiwandi",
      "latitude": 19.3,
      "longitude": 73.0667,
      "country_code": "IN"
    },
    {
      "city": "Zhoushan",
      "latitude": 30.0162,
      "longitude": 122.0988,
      "country_code": "CN"
    },
    {
      "city": "Tbilisi",
      "latitude": 41.7225,
      "longitude": 44.7925,
      "country_code": "GE"
    },
    {
      "city": "Ufa",
      "latitude": 54.7333,
      "longitude": 55.9667,
      "country_code": "RU"
    },
    {
      "city": "Fès",
      "latitude": 34.0433,
      "longitude": -5.0033,
      "country_code": "MA"
    },
    {
      "city": "Biên Hòa",
      "latitude": 10.9575,
      "longitude": 106.8426,
      "country_code": "VN"
    },
    {
      "city": "Mexicali",
      "latitude": 32.6633,
      "longitude": -115.4678,
      "country_code": "MX"
    },
    {
      "city": "Gwalior",
      "latitude": 26.215,
      "longitude": 78.1931,
      "country_code": "IN"
    },
    {
      "city": "Ankang",
      "latitude": 32.6877,
      "longitude": 109.0235,
      "country_code": "CN"
    },
    {
      "city": "Ikare",
      "latitude": 7.5304,
      "longitude": 5.76,
      "country_code": "NG"
    },
    {
      "city": "Hegang",
      "latitude": 47.3139,
      "longitude": 130.2775,
      "country_code": "CN"
    },
    {
      "city": "Salt Lake City",
      "latitude": 40.7777,
      "longitude": -111.9306,
      "country_code": "US"
    },
    {
      "city": "Bhilai",
      "latitude": 21.2167,
      "longitude": 81.4333,
      "country_code": "IN"
    },
    {
      "city": "Yuyao",
      "latitude": 30.0372,
      "longitude": 121.1546,
      "country_code": "CN"
    },
    {
      "city": "N’Djamena",
      "latitude": 12.11,
      "longitude": 15.05,
      "country_code": "TD"
    },
    {
      "city": "Hanchuan",
      "latitude": 30.652,
      "longitude": 113.8274,
      "country_code": "CN"
    },
    {
      "city": "Gongzhuling",
      "latitude": 43.5036,
      "longitude": 124.8088,
      "country_code": "CN"
    },
    {
      "city": "Copenhagen",
      "latitude": 55.6786,
      "longitude": 12.5635,
      "country_code": "DK"
    },
    {
      "city": "Irbid",
      "latitude": 32.5556,
      "longitude": 35.85,
      "country_code": "JO"
    },
    {
      "city": "Hāora",
      "latitude": 22.59,
      "longitude": 88.31,
      "country_code": "IN"
    },
    {
      "city": "Cologne",
      "latitude": 50.9422,
      "longitude": 6.9578,
      "country_code": "DE"
    },
    {
      "city": "Krasnoyarsk",
      "latitude": 56.0167,
      "longitude": 92.8667,
      "country_code": "RU"
    },
    {
      "city": "Yicheng",
      "latitude": 31.3697,
      "longitude": 119.8239,
      "country_code": "CN"
    },
    {
      "city": "Mizhou",
      "latitude": 36,
      "longitude": 119.4167,
      "country_code": "CN"
    },
    {
      "city": "Nashville",
      "latitude": 36.1715,
      "longitude": -86.7843,
      "country_code": "US"
    },
    {
      "city": "Yerevan",
      "latitude": 40.1814,
      "longitude": 44.5144,
      "country_code": "AM"
    },
    {
      "city": "Rānchi",
      "latitude": 23.3556,
      "longitude": 85.3347,
      "country_code": "IN"
    },
    {
      "city": "Nur-Sultan",
      "latitude": 51.1333,
      "longitude": 71.4333,
      "country_code": "KZ"
    },
    {
      "city": "Nouakchott",
      "latitude": 18.0783,
      "longitude": -15.9744,
      "country_code": "MR"
    },
    {
      "city": "Vereeniging",
      "latitude": -26.6736,
      "longitude": 27.9319,
      "country_code": "ZA"
    },
    {
      "city": "Richmond",
      "latitude": 37.5295,
      "longitude": -77.4756,
      "country_code": "US"
    },
    {
      "city": "São Luís",
      "latitude": -2.53,
      "longitude": -44.3028,
      "country_code": "BR"
    },
    {
      "city": "San Pedro Sula",
      "latitude": 15.5,
      "longitude": -88.0333,
      "country_code": "HN"
    },
    {
      "city": "Taixing",
      "latitude": 32.1724,
      "longitude": 120.0142,
      "country_code": "CN"
    },
    {
      "city": "Memphis",
      "latitude": 35.1046,
      "longitude": -89.9773,
      "country_code": "US"
    },
    {
      "city": "Goyang",
      "latitude": 37.6564,
      "longitude": 126.835,
      "country_code": "KR"
    },
    {
      "city": "Bezwāda",
      "latitude": 16.5167,
      "longitude": 80.6167,
      "country_code": "IN"
    },
    {
      "city": "Edmonton",
      "latitude": 53.5344,
      "longitude": -113.4903,
      "country_code": "CA"
    },
    {
      "city": "Xishan",
      "latitude": 27.6609,
      "longitude": 113.4946,
      "country_code": "CN"
    },
    {
      "city": "Barquisimeto",
      "latitude": 10.0678,
      "longitude": -69.3467,
      "country_code": "VE"
    },
    {
      "city": "Sendai",
      "latitude": 38.2683,
      "longitude": 140.8694,
      "country_code": "JP"
    },
    {
      "city": "Voronezh",
      "latitude": 51.6717,
      "longitude": 39.2106,
      "country_code": "RU"
    },
    {
      "city": "Perm",
      "latitude": 58.0139,
      "longitude": 56.2489,
      "country_code": "RU"
    },
    {
      "city": "Changwon",
      "latitude": 35.2281,
      "longitude": 128.6811,
      "country_code": "KR"
    },
    {
      "city": "Zhongwei",
      "latitude": 37.5139,
      "longitude": 105.1884,
      "country_code": "CN"
    },
    {
      "city": "Shouguang",
      "latitude": 36.8833,
      "longitude": 118.7333,
      "country_code": "CN"
    },
    {
      "city": "Bogor",
      "latitude": -6.6,
      "longitude": 106.8,
      "country_code": "ID"
    },
    {
      "city": "Raleigh",
      "latitude": 35.8325,
      "longitude": -78.6435,
      "country_code": "US"
    },
    {
      "city": "Cartagena",
      "latitude": 10.4236,
      "longitude": -75.5253,
      "country_code": "CO"
    },
    {
      "city": "Chandīgarh",
      "latitude": 30.7353,
      "longitude": 76.7911,
      "country_code": "IN"
    },
    {
      "city": "Bishkek",
      "latitude": 42.8667,
      "longitude": 74.5667,
      "country_code": "KG"
    },
    {
      "city": "Amsterdam",
      "latitude": 52.35,
      "longitude": 4.9166,
      "country_code": "NL"
    },
    {
      "city": "Matola",
      "latitude": -25.9667,
      "longitude": 32.4667,
      "country_code": "MZ"
    },
    {
      "city": "Ogbomoso",
      "latitude": 8.1333,
      "longitude": 4.25,
      "country_code": "NG"
    },
    {
      "city": "Ashgabat",
      "latitude": 37.95,
      "longitude": 58.3833,
      "country_code": "TM"
    },
    {
      "city": "E’zhou",
      "latitude": 30.3972,
      "longitude": 114.8842,
      "country_code": "CN"
    },
    {
      "city": "Maceió",
      "latitude": -9.6658,
      "longitude": -35.735,
      "country_code": "BR"
    },
    {
      "city": "Niamey",
      "latitude": 13.5086,
      "longitude": 2.1111,
      "country_code": "NE"
    },
    {
      "city": "Managua",
      "latitude": 12.15,
      "longitude": -86.2667,
      "country_code": "NI"
    },
    {
      "city": "Patam",
      "latitude": 1.0678,
      "longitude": 104.0167,
      "country_code": "ID"
    },
    {
      "city": "Tekirdağ",
      "latitude": 40.9833,
      "longitude": 27.5167,
      "country_code": "TR"
    },
    {
      "city": "Linhai",
      "latitude": 28.8523,
      "longitude": 121.1409,
      "country_code": "CN"
    },
    {
      "city": "Shubrā al Khaymah",
      "latitude": 30.1286,
      "longitude": 31.2422,
      "country_code": "EG"
    },
    {
      "city": "Monrovia",
      "latitude": 6.3106,
      "longitude": -10.8047,
      "country_code": "LR"
    },
    {
      "city": "Wafangdian",
      "latitude": 39.6271,
      "longitude": 121.9972,
      "country_code": "CN"
    },
    {
      "city": "Zhongxiang",
      "latitude": 31.169,
      "longitude": 112.5853,
      "country_code": "CN"
    },
    {
      "city": "Shymkent",
      "latitude": 42.3,
      "longitude": 69.6,
      "country_code": "KZ"
    },
    {
      "city": "New Orleans",
      "latitude": 30.0687,
      "longitude": -89.9288,
      "country_code": "US"
    },
    {
      "city": "Volgograd",
      "latitude": 48.7,
      "longitude": 44.4833,
      "country_code": "RU"
    },
    {
      "city": "Port-au-Prince",
      "latitude": 18.5425,
      "longitude": -72.3386,
      "country_code": "HT"
    },
    {
      "city": "Mysore",
      "latitude": 12.3086,
      "longitude": 76.6531,
      "country_code": "IN"
    },
    {
      "city": "Odesa",
      "latitude": 46.4775,
      "longitude": 30.7326,
      "country_code": "UA"
    },
    {
      "city": "Kathmandu",
      "latitude": 27.7167,
      "longitude": 85.3667,
      "country_code": "NP"
    },
    {
      "city": "Raipur",
      "latitude": 21.2379,
      "longitude": 81.6337,
      "country_code": "IN"
    },
    {
      "city": "Nice",
      "latitude": 43.7034,
      "longitude": 7.2663,
      "country_code": "FR"
    },
    {
      "city": "Arequipa",
      "latitude": -16.3988,
      "longitude": -71.5369,
      "country_code": "PE"
    },
    {
      "city": "Port Harcourt",
      "latitude": 4.75,
      "longitude": 7,
      "country_code": "NG"
    },
    {
      "city": "Rotterdam",
      "latitude": 51.92,
      "longitude": 4.48,
      "country_code": "NL"
    },
    {
      "city": "Louisville",
      "latitude": 38.1663,
      "longitude": -85.6485,
      "country_code": "US"
    },
    {
      "city": "Zaoyang",
      "latitude": 32.1287,
      "longitude": 112.7581,
      "country_code": "CN"
    },
    {
      "city": "Shuizhai",
      "latitude": 33.4433,
      "longitude": 114.8994,
      "country_code": "CN"
    },
    {
      "city": "Kota",
      "latitude": 25.18,
      "longitude": 75.83,
      "country_code": "IN"
    },
    {
      "city": "Abu Dhabi",
      "latitude": 24.4781,
      "longitude": 54.3686,
      "country_code": "AE"
    },
    {
      "city": "Stockholm",
      "latitude": 59.3294,
      "longitude": 18.0686,
      "country_code": "SE"
    },
    {
      "city": "Ottawa",
      "latitude": 45.4247,
      "longitude": -75.695,
      "country_code": "CA"
    },
    {
      "city": "Asmara",
      "latitude": 15.3333,
      "longitude": 38.9167,
      "country_code": "ER"
    },
    {
      "city": "Freetown",
      "latitude": 8.4833,
      "longitude": -13.2331,
      "country_code": "SL"
    },
    {
      "city": "Jerusalem",
      "latitude": 31.7833,
      "longitude": 35.2167,
      "country_code": "IL"
    },
    {
      "city": "Panama City",
      "latitude": 9,
      "longitude": -79.5,
      "country_code": "PA"
    },
    {
      "city": "Lomé",
      "latitude": 6.1319,
      "longitude": 1.2228,
      "country_code": "TG"
    },
    {
      "city": "Libreville",
      "latitude": 0.3901,
      "longitude": 9.4544,
      "country_code": "GA"
    },
    {
      "city": "Zagreb",
      "latitude": 45.8,
      "longitude": 15.95,
      "country_code": "HR"
    },
    {
      "city": "Dushanbe",
      "latitude": 38.5731,
      "longitude": 68.7864,
      "country_code": "TJ"
    },
    {
      "city": "Lilongwe",
      "latitude": -13.9833,
      "longitude": 33.7833,
      "country_code": "MW"
    },
    {
      "city": "Cotonou",
      "latitude": 6.4,
      "longitude": 2.52,
      "country_code": "BJ"
    },
    {
      "city": "Vientiane",
      "latitude": 17.9667,
      "longitude": 102.6,
      "country_code": "LA"
    },
    {
      "city": "Colombo",
      "latitude": 6.9167,
      "longitude": 79.8333,
      "country_code": "LK"
    },
    {
      "city": "Kigali",
      "latitude": -1.9536,
      "longitude": 30.0606,
      "country_code": "RW"
    },
    {
      "city": "Pretoria",
      "latitude": -25.7464,
      "longitude": 28.1881,
      "country_code": "ZA"
    },
    {
      "city": "Bangui",
      "latitude": 4.3732,
      "longitude": 18.5628,
      "country_code": "CF"
    },
    {
      "city": "Winnipeg",
      "latitude": 49.8844,
      "longitude": -97.1464,
      "country_code": "CA"
    },
    {
      "city": "Quebec City",
      "latitude": 46.8139,
      "longitude": -71.2081,
      "country_code": "CA"
    },
    {
      "city": "Riga",
      "latitude": 56.9475,
      "longitude": 24.1069,
      "country_code": "LV"
    },
    {
      "city": "Oslo",
      "latitude": 59.9111,
      "longitude": 10.7528,
      "country_code": "NO"
    },
    {
      "city": "Chisinau",
      "latitude": 47.0056,
      "longitude": 28.8575,
      "country_code": "MD"
    },
    {
      "city": "Athens",
      "latitude": 37.9794,
      "longitude": 23.7161,
      "country_code": "GR"
    },
    {
      "city": "Bujumbura",
      "latitude": -3.3825,
      "longitude": 29.3611,
      "country_code": "BI"
    },
    {
      "city": "Helsinki",
      "latitude": 60.1756,
      "longitude": 24.9342,
      "country_code": "FI"
    },
    {
      "city": "Skopje",
      "latitude": 41.9833,
      "longitude": 21.4333,
      "country_code": "MK"
    },
    {
      "city": "Kuwait City",
      "latitude": 29.375,
      "longitude": 47.98,
      "country_code": "KW"
    },
    {
      "city": "Kingston",
      "latitude": 17.9714,
      "longitude": -76.7931,
      "country_code": "JM"
    },
    {
      "city": "Vilnius",
      "latitude": 54.6833,
      "longitude": 25.2833,
      "country_code": "LT"
    },
    {
      "city": "San Salvador",
      "latitude": 13.6989,
      "longitude": -89.1914,
      "country_code": "SV"
    },
    {
      "city": "Djibouti",
      "latitude": 11.595,
      "longitude": 43.1481,
      "country_code": "DJ"
    },
    {
      "city": "Lisbon",
      "latitude": 38.7452,
      "longitude": -9.1604,
      "country_code": "PT"
    },
    {
      "city": "Kitchener",
      "latitude": 43.4186,
      "longitude": -80.4728,
      "country_code": "CA"
    },
    {
      "city": "Tallinn",
      "latitude": 59.4372,
      "longitude": 24.745,
      "country_code": "EE"
    },
    {
      "city": "Cape Town",
      "latitude": -33.925,
      "longitude": 18.425,
      "country_code": "ZA"
    },
    {
      "city": "Bratislava",
      "latitude": 48.1447,
      "longitude": 17.1128,
      "country_code": "SK"
    },
    {
      "city": "Tirana",
      "latitude": 41.33,
      "longitude": 19.82,
      "country_code": "AL"
    },
    {
      "city": "Canberra",
      "latitude": -35.2931,
      "longitude": 149.1269,
      "country_code": "AU"
    },
    {
      "city": "Wellington",
      "latitude": -41.2889,
      "longitude": 174.7772,
      "country_code": "NZ"
    },
    {
      "city": "Beirut",
      "latitude": 33.8869,
      "longitude": 35.5131,
      "country_code": "LB"
    },
    {
      "city": "Dodoma",
      "latitude": -6.25,
      "longitude": 35.75,
      "country_code": "TZ"
    },
    {
      "city": "Halifax",
      "latitude": 44.6475,
      "longitude": -63.5906,
      "country_code": "CA"
    },
    {
      "city": "Bissau",
      "latitude": 11.8592,
      "longitude": -15.5956,
      "country_code": "GW"
    },
    {
      "city": "Juba",
      "latitude": 4.85,
      "longitude": 31.6,
      "country_code": "SS"
    },
    {
      "city": "Port Moresby",
      "latitude": -9.4789,
      "longitude": 147.1494,
      "country_code": "PG"
    },
    {
      "city": "Yamoussoukro",
      "latitude": 6.8161,
      "longitude": -5.2742,
      "country_code": "CI"
    },
    {
      "city": "Victoria",
      "latitude": 48.4283,
      "longitude": -123.3647,
      "country_code": "CA"
    },
    {
      "city": "Maseru",
      "latitude": -29.31,
      "longitude": 27.48,
      "country_code": "LS"
    },
    {
      "city": "Nicosia",
      "latitude": 35.1725,
      "longitude": 33.365,
      "country_code": "CY"
    },
    {
      "city": "Windhoek",
      "latitude": -22.57,
      "longitude": 17.0836,
      "country_code": "NA"
    },
    {
      "city": "Porto-Novo",
      "latitude": 6.4833,
      "longitude": 2.6167,
      "country_code": "BJ"
    },
    {
      "city": "Sucre",
      "latitude": -19.0431,
      "longitude": -65.2592,
      "country_code": "BO"
    },
    {
      "city": "San José",
      "latitude": 9.9333,
      "longitude": -84.0833,
      "country_code": "CR"
    },
    {
      "city": "Ljubljana",
      "latitude": 46.05,
      "longitude": 14.5167,
      "country_code": "SI"
    },
    {
      "city": "Sarajevo",
      "latitude": 43.8667,
      "longitude": 18.4167,
      "country_code": "BA"
    },
    {
      "city": "Nassau",
      "latitude": 25.0667,
      "longitude": -77.3333,
      "country_code": "BS"
    },
    {
      "city": "Bloemfontein",
      "latitude": -29.1,
      "longitude": 26.2167,
      "country_code": "ZA"
    },
    {
      "city": "Gaborone",
      "latitude": -24.6569,
      "longitude": 25.9086,
      "country_code": "BW"
    },
    {
      "city": "Paramaribo",
      "latitude": 5.8667,
      "longitude": -55.1667,
      "country_code": "SR"
    },
    {
      "city": "Dili",
      "latitude": -8.5586,
      "longitude": 125.5736,
      "country_code": "TL"
    },
    {
      "city": "Pristina",
      "latitude": 42.6667,
      "longitude": 21.1667,
      "country_code": "XK"
    },
    {
      "city": "Georgetown",
      "latitude": 6.7833,
      "longitude": -58.1667,
      "country_code": "GY"
    },
    {
      "city": "Malabo",
      "latitude": 3.7521,
      "longitude": 8.7737,
      "country_code": "GQ"
    },
    {
      "city": "Brussels",
      "latitude": 50.8467,
      "longitude": 4.3517,
      "country_code": "BE"
    },
    {
      "city": "Male",
      "latitude": 4.175,
      "longitude": 73.5083,
      "country_code": "MV"
    },
    {
      "city": "Podgorica",
      "latitude": 42.4397,
      "longitude": 19.2661,
      "country_code": "ME"
    },
    {
      "city": "Manama",
      "latitude": 26.2167,
      "longitude": 50.5831,
      "country_code": "BH"
    },
    {
      "city": "Port Louis",
      "latitude": -20.1667,
      "longitude": 57.5,
      "country_code": "MU"
    },
    {
      "city": "New Delhi",
      "latitude": 28.7,
      "longitude": 77.2,
      "country_code": "IN"
    },
    {
      "city": "Bern",
      "latitude": 46.948,
      "longitude": 7.4474,
      "country_code": "CH"
    },
    {
      "city": "Reykjavík",
      "latitude": 64.1475,
      "longitude": -21.935,
      "country_code": "IS"
    },
    {
      "city": "Praia",
      "latitude": 14.9177,
      "longitude": -23.5092,
      "country_code": "CV"
    },
    {
      "city": "Luxembourg",
      "latitude": 49.6106,
      "longitude": 6.1328,
      "country_code": "LU"
    },
    {
      "city": "Sri Jayewardenepura Kotte",
      "latitude": 6.9,
      "longitude": 79.9164,
      "country_code": "LK"
    },
    {
      "city": "Bridgetown",
      "latitude": 13.0975,
      "longitude": -59.6167,
      "country_code": "BB"
    },
    {
      "city": "Moroni",
      "latitude": -11.7036,
      "longitude": 43.2536,
      "country_code": "KM"
    },
    {
      "city": "Thimphu",
      "latitude": 27.4833,
      "longitude": 89.6333,
      "country_code": "BT"
    },
    {
      "city": "Mbabane",
      "latitude": -26.3167,
      "longitude": 31.1333,
      "country_code": "SZ"
    },
    {
      "city": "Honiara",
      "latitude": -9.4333,
      "longitude": 159.95,
      "country_code": "SB"
    },
    {
      "city": "Suva",
      "latitude": -18.1333,
      "longitude": 178.4333,
      "country_code": "FJ"
    },
    {
      "city": "Castries",
      "latitude": 14.0167,
      "longitude": -60.9833,
      "country_code": "LC"
    },
    {
      "city": "São Tomé",
      "latitude": 0.3333,
      "longitude": 6.7333,
      "country_code": "ST"
    },
    {
      "city": "Port-Vila",
      "latitude": -17.75,
      "longitude": 168.3,
      "country_code": "VU"
    },
    {
      "city": "Bandar Seri Begawan",
      "latitude": 4.9167,
      "longitude": 114.9167,
      "country_code": "BN"
    },
    {
      "city": "Monaco",
      "latitude": 43.7396,
      "longitude": 7.4069,
      "country_code": "MC"
    },
    {
      "city": "Gitega",
      "latitude": -3.4264,
      "longitude": 29.9306,
      "country_code": "BI"
    },
    {
      "city": "Port of Spain",
      "latitude": 10.6667,
      "longitude": -61.5167,
      "country_code": "TT"
    },
    {
      "city": "Apia",
      "latitude": -13.8333,
      "longitude": -171.8333,
      "country_code": "WS"
    },
    {
      "city": "Vaduz",
      "latitude": 47.1415,
      "longitude": 9.5215,
      "country_code": "LI"
    },
    {
      "city": "Banjul",
      "latitude": 13.4531,
      "longitude": -16.5775,
      "country_code": "GM"
    },
    {
      "city": "Tarawa",
      "latitude": 1.3382,
      "longitude": 173.0176,
      "country_code": "KI"
    },
    {
      "city": "Victoria",
      "latitude": -4.6236,
      "longitude": 55.4544,
      "country_code": "SC"
    },
    {
      "city": "Majuro",
      "latitude": 7.1167,
      "longitude": 171.3667,
      "country_code": "MH"
    },
    {
      "city": "Kingstown",
      "latitude": 13.1667,
      "longitude": -61.2333,
      "country_code": "VC"
    },
    {
      "city": "Nuku‘alofa",
      "latitude": -21.1347,
      "longitude": -175.2083,
      "country_code": "TO"
    },
    {
      "city": "Saint John’s",
      "latitude": 17.1211,
      "longitude": -61.8447,
      "country_code": "AG"
    },
    {
      "city": "Andorra la Vella",
      "latitude": 42.5,
      "longitude": 1.5,
      "country_code": "AD"
    },
    {
      "city": "Belmopan",
      "latitude": 17.25,
      "longitude": -88.7675,
      "country_code": "BZ"
    },
    {
      "city": "Roseau",
      "latitude": 15.3,
      "longitude": -61.3833,
      "country_code": "DM"
    },
    {
      "city": "Basseterre",
      "latitude": 17.2983,
      "longitude": -62.7342,
      "country_code": "KN"
    },
    {
      "city": "Pago Pago",
      "latitude": -14.274,
      "longitude": -170.7046,
      "country_code": "AS"
    },
    {
      "city": "Valletta",
      "latitude": 35.8978,
      "longitude": 14.5125,
      "country_code": "MT"
    },
    {
      "city": "Palikir",
      "latitude": 6.9178,
      "longitude": 158.185,
      "country_code": "FM"
    },
    {
      "city": "Funafuti",
      "latitude": -8.5167,
      "longitude": 179.2167,
      "country_code": "TV"
    },
    {
      "city": "Lobamba",
      "latitude": -26.4167,
      "longitude": 31.1667,
      "country_code": "SZ"
    },
    {
      "city": "Saint George’s",
      "latitude": 12.0444,
      "longitude": -61.7417,
      "country_code": "GD"
    },
    {
      "city": "San Marino",
      "latitude": 43.932,
      "longitude": 12.4484,
      "country_code": "SM"
    },
    {
      "city": "Al Quds",
      "latitude": 31.7764,
      "longitude": 35.2269,
      "country_code": "XW"
    },
    {
      "city": "Capitol Hill",
      "latitude": 15.2137,
      "longitude": 145.7546,
      "country_code": "MP"
    },
    {
      "city": "Hagåtña",
      "latitude": 13.4745,
      "longitude": 144.7504,
      "country_code": "GU"
    },
    {
      "city": "Ngerulmud",
      "latitude": 7.5006,
      "longitude": 134.6242,
      "country_code": "PW"
    },
    {
      "city": "Bareilly",
      "latitude": 28.364,
      "longitude": 79.415,
      "country_code": "IN"
    },
    {
      "city": "Quảng Hà",
      "latitude": 16.06,
      "longitude": 108.25,
      "country_code": "VN"
    },
    {
      "city": "Kitaku",
      "latitude": 33.8704,
      "longitude": 130.82,
      "country_code": "JP"
    },
    {
      "city": "Jodhpur",
      "latitude": 26.2918,
      "longitude": 73.0168,
      "country_code": "IN"
    },
    {
      "city": "Xingcheng",
      "latitude": 24.1681,
      "longitude": 115.6669,
      "country_code": "CN"
    },
    {
      "city": "Dongtai",
      "latitude": 32.8534,
      "longitude": 120.3037,
      "country_code": "CN"
    },
    {
      "city": "Joinvile",
      "latitude": -26.32,
      "longitude": -48.8399,
      "country_code": "BR"
    },
    {
      "city": "Yingcheng",
      "latitude": 24.1876,
      "longitude": 113.4042,
      "country_code": "CN"
    },
    {
      "city": "Dnipro",
      "latitude": 48.45,
      "longitude": 34.9833,
      "country_code": "UA"
    },
    {
      "city": "Glasgow",
      "latitude": 55.8609,
      "longitude": -4.2514,
      "country_code": "GB"
    },
    {
      "city": "Chiba",
      "latitude": 35.6,
      "longitude": 140.1,
      "country_code": "JP"
    },
    {
      "city": "Danyang",
      "latitude": 31.9948,
      "longitude": 119.575,
      "country_code": "CN"
    },
    {
      "city": "Natal",
      "latitude": -6.9838,
      "longitude": -60.2699,
      "country_code": "BR"
    },
    {
      "city": "Naples",
      "latitude": 40.8333,
      "longitude": 14.25,
      "country_code": "IT"
    },
    {
      "city": "Zhaodong",
      "latitude": 46.0635,
      "longitude": 125.9773,
      "country_code": "CN"
    },
    {
      "city": "Xibeijie",
      "latitude": 39.737,
      "longitude": 98.5049,
      "country_code": "CN"
    },
    {
      "city": "Kirkuk",
      "latitude": 35.4667,
      "longitude": 44.4,
      "country_code": "IQ"
    },
    {
      "city": "Huilong",
      "latitude": 31.8131,
      "longitude": 121.6574,
      "country_code": "CN"
    },
    {
      "city": "Tongjin",
      "latitude": 37.2361,
      "longitude": 127.2011,
      "country_code": "KR"
    },
    {
      "city": "Oklahoma City",
      "latitude": 35.4676,
      "longitude": -97.5136,
      "country_code": "US"
    },
    {
      "city": "Toulouse",
      "latitude": 43.6045,
      "longitude": 1.444,
      "country_code": "FR"
    },
    {
      "city": "Denizli",
      "latitude": 37.7731,
      "longitude": 29.0878,
      "country_code": "TR"
    },
    {
      "city": "Dispur",
      "latitude": 26.15,
      "longitude": 91.77,
      "country_code": "IN"
    },
    {
      "city": "Coimbatore",
      "latitude": 11,
      "longitude": 76.9667,
      "country_code": "IN"
    },
    {
      "city": "Luocheng",
      "latitude": 22.7645,
      "longitude": 111.5745,
      "country_code": "CN"
    },
    {
      "city": "Guwāhāti",
      "latitude": 26.1667,
      "longitude": 91.7667,
      "country_code": "IN"
    },
    {
      "city": "Shima",
      "latitude": 24.4475,
      "longitude": 117.8118,
      "country_code": "CN"
    },
    {
      "city": "Sŏngnam",
      "latitude": 37.4386,
      "longitude": 127.1378,
      "country_code": "KR"
    },
    {
      "city": "Solāpur",
      "latitude": 17.6833,
      "longitude": 75.9167,
      "country_code": "IN"
    },
    {
      "city": "Tangier",
      "latitude": 35.7847,
      "longitude": -5.8125,
      "country_code": "MA"
    },
    {
      "city": "Anqiu",
      "latitude": 36.3619,
      "longitude": 119.1072,
      "country_code": "CN"
    },
    {
      "city": "Feicheng",
      "latitude": 36.186,
      "longitude": 116.772,
      "country_code": "CN"
    },
    {
      "city": "Taishan",
      "latitude": 22.2486,
      "longitude": 112.785,
      "country_code": "CN"
    },
    {
      "city": "Meishan",
      "latitude": 34.1736,
      "longitude": 112.839,
      "country_code": "CN"
    },
    {
      "city": "Kisangani",
      "latitude": 0.5153,
      "longitude": 25.1911,
      "country_code": "CD"
    },
    {
      "city": "Khartoum North",
      "latitude": 15.6333,
      "longitude": 32.6333,
      "country_code": "SD"
    },
    {
      "city": "Aguascalientes",
      "latitude": 21.876,
      "longitude": -102.296,
      "country_code": "MX"
    },
    {
      "city": "Marrakech",
      "latitude": 31.6295,
      "longitude": -7.9811,
      "country_code": "MA"
    },
    {
      "city": "Nada",
      "latitude": 19.5,
      "longitude": 109.5833,
      "country_code": "CN"
    },
    {
      "city": "Donetsk",
      "latitude": 48.0089,
      "longitude": 37.8042,
      "country_code": "UA"
    },
    {
      "city": "Taihecun",
      "latitude": 45.768,
      "longitude": 131.0063,
      "country_code": "CN"
    },
    {
      "city": "Wuchuan",
      "latitude": 21.4571,
      "longitude": 110.7659,
      "country_code": "CN"
    },
    {
      "city": "Trujillo",
      "latitude": -8.1119,
      "longitude": -79.0289,
      "country_code": "PE"
    },
    {
      "city": "Cebu City",
      "latitude": 10.3,
      "longitude": 123.9,
      "country_code": "PH"
    },
    {
      "city": "Taihe",
      "latitude": 30.8706,
      "longitude": 105.3784,
      "country_code": "CN"
    },
    {
      "city": "Olinda",
      "latitude": -8,
      "longitude": -34.85,
      "country_code": "BR"
    },
    {
      "city": "Bridgeport",
      "latitude": 41.1918,
      "longitude": -73.1953,
      "country_code": "US"
    },
    {
      "city": "Trichinopoly",
      "latitude": 10.8269,
      "longitude": 78.6928,
      "country_code": "IN"
    },
    {
      "city": "Xin’an",
      "latitude": 34.3662,
      "longitude": 118.3369,
      "country_code": "CN"
    },
    {
      "city": "Padang",
      "latitude": -0.9556,
      "longitude": 100.3606,
      "country_code": "ID"
    },
    {
      "city": "Qingzhou",
      "latitude": 36.6967,
      "longitude": 118.4797,
      "country_code": "CN"
    },
    {
      "city": "Buffalo",
      "latitude": 42.9016,
      "longitude": -78.8487,
      "country_code": "US"
    },
    {
      "city": "Xinyi",
      "latitude": 22.3559,
      "longitude": 110.9369,
      "country_code": "CN"
    },
    {
      "city": "Lichuan",
      "latitude": 30.2965,
      "longitude": 108.9378,
      "country_code": "CN"
    },
    {
      "city": "Daye",
      "latitude": 30.1003,
      "longitude": 114.9699,
      "country_code": "CN"
    },
    {
      "city": "Fort Worth",
      "latitude": 32.7811,
      "longitude": -97.3473,
      "country_code": "US"
    },
    {
      "city": "Zhuanghe",
      "latitude": 39.6896,
      "longitude": 122.9664,
      "country_code": "CN"
    },
    {
      "city": "Hartford",
      "latitude": 41.7661,
      "longitude": -72.6834,
      "country_code": "US"
    },
    {
      "city": "Ad Dammām",
      "latitude": 26.4333,
      "longitude": 50.1,
      "country_code": "SA"
    },
    {
      "city": "Bucheon",
      "latitude": 37.4989,
      "longitude": 126.7831,
      "country_code": "KR"
    },
    {
      "city": "Lhasa",
      "latitude": 29.65,
      "longitude": 91.1,
      "country_code": "CN"
    },
    {
      "city": "Homs",
      "latitude": 34.7333,
      "longitude": 36.7167,
      "country_code": "SY"
    },
    {
      "city": "Jiaozhou",
      "latitude": 36.2481,
      "longitude": 119.9625,
      "country_code": "CN"
    },
    {
      "city": "Mérida",
      "latitude": 20.97,
      "longitude": -89.62,
      "country_code": "MX"
    },
    {
      "city": "Dengtalu",
      "latitude": 36.08,
      "longitude": 114.35,
      "country_code": "CN"
    },
    {
      "city": "Zaria",
      "latitude": 11.0667,
      "longitude": 7.7,
      "country_code": "NG"
    },
    {
      "city": "Hubli",
      "latitude": 15.36,
      "longitude": 75.125,
      "country_code": "IN"
    },
    {
      "city": "Abeokuta",
      "latitude": 7.15,
      "longitude": 3.35,
      "country_code": "NG"
    },
    {
      "city": "Tucson",
      "latitude": 32.1545,
      "longitude": -110.8782,
      "country_code": "US"
    },
    {
      "city": "Krasnodar",
      "latitude": 45.0333,
      "longitude": 38.9833,
      "country_code": "RU"
    },
    {
      "city": "Natal",
      "latitude": -5.795,
      "longitude": -35.2089,
      "country_code": "BR"
    },
    {
      "city": "Novo Hamburgo",
      "latitude": -29.7096,
      "longitude": -51.14,
      "country_code": "BR"
    },
    {
      "city": "Chihuahua",
      "latitude": 28.6353,
      "longitude": -106.0889,
      "country_code": "MX"
    },
    {
      "city": "Klang",
      "latitude": 3.0333,
      "longitude": 101.45,
      "country_code": "MY"
    },
    {
      "city": "Turin",
      "latitude": 45.0667,
      "longitude": 7.7,
      "country_code": "IT"
    },
    {
      "city": "Jos",
      "latitude": 9.9333,
      "longitude": 8.8833,
      "country_code": "NG"
    },
    {
      "city": "Laiyang",
      "latitude": 36.9758,
      "longitude": 120.7136,
      "country_code": "CN"
    },
    {
      "city": "Jalandhar",
      "latitude": 31.3256,
      "longitude": 75.5792,
      "country_code": "IN"
    },
    {
      "city": "Campo Grande",
      "latitude": -20.4686,
      "longitude": -54.6222,
      "country_code": "BR"
    },
    {
      "city": "Sale",
      "latitude": 34.05,
      "longitude": -6.8167,
      "country_code": "MA"
    },
    {
      "city": "Barinas",
      "latitude": 8.6333,
      "longitude": -70.2167,
      "country_code": "VE"
    },
    {
      "city": "Marseille",
      "latitude": 43.2964,
      "longitude": 5.37,
      "country_code": "FR"
    },
    {
      "city": "Kaifeng Chengguanzhen",
      "latitude": 34.85,
      "longitude": 114.35,
      "country_code": "CN"
    },
    {
      "city": "Eskişehir",
      "latitude": 39.7767,
      "longitude": 30.5206,
      "country_code": "TR"
    },
    {
      "city": "Gaomi",
      "latitude": 36.3833,
      "longitude": 119.75,
      "country_code": "CN"
    },
    {
      "city": "Ipoh",
      "latitude": 4.6,
      "longitude": 101.07,
      "country_code": "MY"
    },
    {
      "city": "Hai’an",
      "latitude": 32.532,
      "longitude": 120.4604,
      "country_code": "CN"
    },
    {
      "city": "Liverpool",
      "latitude": 53.4,
      "longitude": -2.9833,
      "country_code": "GB"
    },
    {
      "city": "Zamboanga City",
      "latitude": 6.9167,
      "longitude": 122.0833,
      "country_code": "PH"
    },
    {
      "city": "Oran",
      "latitude": 35.6969,
      "longitude": -0.6331,
      "country_code": "DZ"
    },
    {
      "city": "Southampton",
      "latitude": 50.9,
      "longitude": -1.4,
      "country_code": "GB"
    },
    {
      "city": "Weichanglu",
      "latitude": 37.1792,
      "longitude": 119.9333,
      "country_code": "CN"
    },
    {
      "city": "Pekanbaru",
      "latitude": 0.5333,
      "longitude": 101.45,
      "country_code": "ID"
    },
    {
      "city": "Portsmouth",
      "latitude": 50.8058,
      "longitude": -1.0872,
      "country_code": "GB"
    },
    {
      "city": "Leping",
      "latitude": 28.9632,
      "longitude": 117.1203,
      "country_code": "CN"
    },
    {
      "city": "Erbil",
      "latitude": 36.1911,
      "longitude": 44.0094,
      "country_code": "IQ"
    },
    {
      "city": "Kermānshāh",
      "latitude": 34.3167,
      "longitude": 47.0686,
      "country_code": "IR"
    },
    {
      "city": "Hailun",
      "latitude": 47.4585,
      "longitude": 126.9632,
      "country_code": "CN"
    },
    {
      "city": "Yangchun",
      "latitude": 22.1667,
      "longitude": 111.7833,
      "country_code": "CN"
    },
    {
      "city": "Macheng",
      "latitude": 31.1817,
      "longitude": 115.0189,
      "country_code": "CN"
    },
    {
      "city": "Ilorin",
      "latitude": 8.5,
      "longitude": 4.55,
      "country_code": "NG"
    },
    {
      "city": "Teresina",
      "latitude": -5.0949,
      "longitude": -42.8042,
      "country_code": "BR"
    },
    {
      "city": "Omaha",
      "latitude": 41.2627,
      "longitude": -96.0522,
      "country_code": "US"
    },
    {
      "city": "Yuci",
      "latitude": 37.6804,
      "longitude": 112.73,
      "country_code": "CN"
    },
    {
      "city": "Saratov",
      "latitude": 51.5333,
      "longitude": 46,
      "country_code": "RU"
    },
    {
      "city": "Iguaçu",
      "latitude": -22.74,
      "longitude": -43.47,
      "country_code": "BR"
    },
    {
      "city": "El Paso",
      "latitude": 31.8479,
      "longitude": -106.4309,
      "country_code": "US"
    },
    {
      "city": "Denpasar",
      "latitude": -8.6667,
      "longitude": 115.2167,
      "country_code": "ID"
    },
    {
      "city": "Dehui",
      "latitude": 44.5323,
      "longitude": 125.6965,
      "country_code": "CN"
    },
    {
      "city": "Naucalpan de Juárez",
      "latitude": 19.4753,
      "longitude": -99.2378,
      "country_code": "MX"
    },
    {
      "city": "Bhubaneshwar",
      "latitude": 20.2644,
      "longitude": 85.8281,
      "country_code": "IN"
    },
    {
      "city": "Tongchuan",
      "latitude": 34.9057,
      "longitude": 108.9422,
      "country_code": "CN"
    },
    {
      "city": "Cheongju",
      "latitude": 36.6372,
      "longitude": 127.4897,
      "country_code": "KR"
    },
    {
      "city": "Warri",
      "latitude": 5.5167,
      "longitude": 5.75,
      "country_code": "NG"
    },
    {
      "city": "Pointe-Noire",
      "latitude": -4.7889,
      "longitude": 11.8653,
      "country_code": "CG"
    },
    {
      "city": "Rongjiawan",
      "latitude": 29.3801,
      "longitude": 113.1,
      "country_code": "CN"
    },
    {
      "city": "San Luis Potosí",
      "latitude": 22.1511,
      "longitude": -100.9761,
      "country_code": "MX"
    },
    {
      "city": "Butterworth",
      "latitude": 5.3942,
      "longitude": 100.3664,
      "country_code": "MY"
    },
    {
      "city": "Bhayandar",
      "latitude": 19.3,
      "longitude": 72.85,
      "country_code": "IN"
    },
    {
      "city": "Renqiu",
      "latitude": 38.7094,
      "longitude": 116.1008,
      "country_code": "CN"
    },
    {
      "city": "Toluca",
      "latitude": 19.2925,
      "longitude": -99.6569,
      "country_code": "MX"
    },
    {
      "city": "Honolulu",
      "latitude": 21.3294,
      "longitude": -157.846,
      "country_code": "US"
    },
    {
      "city": "Querétaro",
      "latitude": 20.5875,
      "longitude": -100.3928,
      "country_code": "MX"
    },
    {
      "city": "Xindi",
      "latitude": 29.8182,
      "longitude": 113.4653,
      "country_code": "CN"
    },
    {
      "city": "Wu’an",
      "latitude": 36.6941,
      "longitude": 114.1847,
      "country_code": "CN"
    },
    {
      "city": "São Bernardo do Campo",
      "latitude": -23.6939,
      "longitude": -46.565,
      "country_code": "BR"
    },
    {
      "city": "Hermosillo",
      "latitude": 29.0989,
      "longitude": -110.9542,
      "country_code": "MX"
    },
    {
      "city": "Wutong",
      "latitude": 30.6326,
      "longitude": 120.5474,
      "country_code": "CN"
    },
    {
      "city": "Taguig City",
      "latitude": 14.5167,
      "longitude": 121.05,
      "country_code": "PH"
    },
    {
      "city": "Saltillo",
      "latitude": 25.4333,
      "longitude": -101,
      "country_code": "MX"
    },
    {
      "city": "Gaoyou",
      "latitude": 32.7847,
      "longitude": 119.4432,
      "country_code": "CN"
    },
    {
      "city": "Hejian",
      "latitude": 38.4451,
      "longitude": 116.0897,
      "country_code": "CN"
    },
    {
      "city": "Yiyang",
      "latitude": 26.4103,
      "longitude": 112.3913,
      "country_code": "CN"
    },
    {
      "city": "Puxi",
      "latitude": 35.2125,
      "longitude": 114.735,
      "country_code": "CN"
    },
    {
      "city": "Zijinglu",
      "latitude": 34.7513,
      "longitude": 112.9854,
      "country_code": "CN"
    },
    {
      "city": "Xiashi",
      "latitude": 30.5333,
      "longitude": 120.6833,
      "country_code": "CN"
    },
    {
      "city": "Trabzon",
      "latitude": 41.005,
      "longitude": 39.7225,
      "country_code": "TR"
    },
    {
      "city": "João Pessoa",
      "latitude": -7.0833,
      "longitude": -34.8333,
      "country_code": "BR"
    },
    {
      "city": "Dongyang",
      "latitude": 29.2785,
      "longitude": 120.2282,
      "country_code": "CN"
    },
    {
      "city": "McAllen",
      "latitude": 26.2273,
      "longitude": -98.2471,
      "country_code": "US"
    },
    {
      "city": "Valencia",
      "latitude": 39.4667,
      "longitude": -0.375,
      "country_code": "ES"
    },
    {
      "city": "Qingping",
      "latitude": 34.538,
      "longitude": 113.3796,
      "country_code": "CN"
    },
    {
      "city": "Niigata",
      "latitude": 37.9161,
      "longitude": 139.0364,
      "country_code": "JP"
    },
    {
      "city": "Hamamatsu",
      "latitude": 34.7167,
      "longitude": 137.7333,
      "country_code": "JP"
    },
    {
      "city": "Morelia",
      "latitude": 19.7683,
      "longitude": -101.1894,
      "country_code": "MX"
    },
    {
      "city": "Pasig City",
      "latitude": 14.575,
      "longitude": 121.0833,
      "country_code": "PH"
    },
    {
      "city": "Morādābād",
      "latitude": 28.8418,
      "longitude": 78.7568,
      "country_code": "IN"
    },
    {
      "city": "Culiacán",
      "latitude": 24.8069,
      "longitude": -107.3939,
      "country_code": "MX"
    },
    {
      "city": "Xiangxiang",
      "latitude": 27.7389,
      "longitude": 112.5223,
      "country_code": "CN"
    },
    {
      "city": "Malang",
      "latitude": -7.98,
      "longitude": 112.62,
      "country_code": "ID"
    },
    {
      "city": "Xingyi",
      "latitude": 25.091,
      "longitude": 104.9011,
      "country_code": "CN"
    },
    {
      "city": "Chaohucun",
      "latitude": 31.6783,
      "longitude": 117.7353,
      "country_code": "CN"
    },
    {
      "city": "Fuyang",
      "latitude": 30.0533,
      "longitude": 119.9519,
      "country_code": "CN"
    },
    {
      "city": "Antipolo",
      "latitude": 14.5842,
      "longitude": 121.1763,
      "country_code": "PH"
    },
    {
      "city": "Nottingham",
      "latitude": 52.95,
      "longitude": -1.15,
      "country_code": "GB"
    },
    {
      "city": "Cencheng",
      "latitude": 22.9297,
      "longitude": 111.0186,
      "country_code": "CN"
    },
    {
      "city": "Kraków",
      "latitude": 50.0614,
      "longitude": 19.9372,
      "country_code": "PL"
    },
    {
      "city": "Hempstead",
      "latitude": 40.6629,
      "longitude": -73.6089,
      "country_code": "US"
    },
    {
      "city": "Erzurum",
      "latitude": 39.9097,
      "longitude": 41.2756,
      "country_code": "TR"
    },
    {
      "city": "Al ‘Ayn",
      "latitude": 24.2075,
      "longitude": 55.7447,
      "country_code": "AE"
    },
    {
      "city": "Songzi",
      "latitude": 30.1772,
      "longitude": 111.7732,
      "country_code": "CN"
    },
    {
      "city": "Laixi",
      "latitude": 36.8667,
      "longitude": 120.5333,
      "country_code": "CN"
    },
    {
      "city": "Zhongba",
      "latitude": 31.7761,
      "longitude": 104.7406,
      "country_code": "CN"
    },
    {
      "city": "Qingnian",
      "latitude": 36.8494,
      "longitude": 115.7061,
      "country_code": "CN"
    },
    {
      "city": "Albuquerque",
      "latitude": 35.1053,
      "longitude": -106.6464,
      "country_code": "US"
    },
    {
      "city": "Kaduna",
      "latitude": 10.5231,
      "longitude": 7.4403,
      "country_code": "NG"
    },
    {
      "city": "Tlalnepantla",
      "latitude": 19.5367,
      "longitude": -99.1947,
      "country_code": "MX"
    },
    {
      "city": "Xinhualu",
      "latitude": 34.3962,
      "longitude": 113.7249,
      "country_code": "CN"
    },
    {
      "city": "Guangshui",
      "latitude": 31.6189,
      "longitude": 113.8229,
      "country_code": "CN"
    },
    {
      "city": "Frankfurt",
      "latitude": 50.1136,
      "longitude": 8.6797,
      "country_code": "DE"
    },
    {
      "city": "Samarinda",
      "latitude": -0.5022,
      "longitude": 117.1536,
      "country_code": "ID"
    },
    {
      "city": "Changhua",
      "latitude": 24.0667,
      "longitude": 120.5333,
      "country_code": "TW"
    },
    {
      "city": "Pietermaritzburg",
      "latitude": -29.5833,
      "longitude": 30.4167,
      "country_code": "ZA"
    },
    {
      "city": "Hŭngnam",
      "latitude": 39.8231,
      "longitude": 127.6232,
      "country_code": "KP"
    },
    {
      "city": "Kolhāpur",
      "latitude": 16.7,
      "longitude": 74.2333,
      "country_code": "IN"
    },
    {
      "city": "Ciudad Guayana",
      "latitude": 8.3596,
      "longitude": -62.6517,
      "country_code": "VE"
    },
    {
      "city": "Cúcuta",
      "latitude": 7.9075,
      "longitude": -72.5047,
      "country_code": "CO"
    },
    {
      "city": "Licheng",
      "latitude": 31.4174,
      "longitude": 119.4786,
      "country_code": "CN"
    },
    {
      "city": "Thiruvananthapuram",
      "latitude": 8.5,
      "longitude": 76.8997,
      "country_code": "IN"
    },
    {
      "city": "Tyumen",
      "latitude": 57.15,
      "longitude": 65.5333,
      "country_code": "RU"
    },
    {
      "city": "San Cristóbal",
      "latitude": 7.7682,
      "longitude": -72.2322,
      "country_code": "VE"
    },
    {
      "city": "Zaporizhzhia",
      "latitude": 47.8378,
      "longitude": 35.1383,
      "country_code": "UA"
    },
    {
      "city": "Cancún",
      "latitude": 21.1606,
      "longitude": -86.8475,
      "country_code": "MX"
    },
    {
      "city": "Kumamoto",
      "latitude": 32.8031,
      "longitude": 130.7078,
      "country_code": "JP"
    },
    {
      "city": "Chengguan",
      "latitude": 35.4599,
      "longitude": 113.7975,
      "country_code": "CN"
    },
    {
      "city": "Nehe",
      "latitude": 48.48,
      "longitude": 124.8738,
      "country_code": "CN"
    },
    {
      "city": "Sokoto",
      "latitude": 13.0622,
      "longitude": 5.2339,
      "country_code": "NG"
    },
    {
      "city": "Birmingham",
      "latitude": 33.5277,
      "longitude": -86.7987,
      "country_code": "US"
    },
    {
      "city": "Zunhua",
      "latitude": 40.1881,
      "longitude": 117.9593,
      "country_code": "CN"
    },
    {
      "city": "Orūmīyeh",
      "latitude": 37.55,
      "longitude": 45.1,
      "country_code": "IR"
    },
    {
      "city": "Oyo",
      "latitude": 7.8333,
      "longitude": 3.9333,
      "country_code": "NG"
    },
    {
      "city": "Wugang",
      "latitude": 26.7345,
      "longitude": 110.6293,
      "country_code": "CN"
    },
    {
      "city": "Shuangqiao",
      "latitude": 35.0833,
      "longitude": 112.5833,
      "country_code": "CN"
    },
    {
      "city": "Rennes",
      "latitude": 48.1147,
      "longitude": -1.6794,
      "country_code": "FR"
    },
    {
      "city": "Sizhan",
      "latitude": 39.0099,
      "longitude": 106.3694,
      "country_code": "CN"
    },
    {
      "city": "Langzhong",
      "latitude": 31.5833,
      "longitude": 105.972,
      "country_code": "CN"
    },
    {
      "city": "Bristol",
      "latitude": 51.45,
      "longitude": -2.5833,
      "country_code": "GB"
    },
    {
      "city": "Qian’an",
      "latitude": 40.0059,
      "longitude": 118.6973,
      "country_code": "CN"
    },
    {
      "city": "Lviv",
      "latitude": 49.8419,
      "longitude": 24.0315,
      "country_code": "UA"
    },
    {
      "city": "Zouping",
      "latitude": 36.8625,
      "longitude": 117.7424,
      "country_code": "CN"
    },
    {
      "city": "Bremen",
      "latitude": 53.1153,
      "longitude": 8.7975,
      "country_code": "DE"
    },
    {
      "city": "Reynosa",
      "latitude": 26.0922,
      "longitude": -98.2778,
      "country_code": "MX"
    },
    {
      "city": "An Najaf",
      "latitude": 32.029,
      "longitude": 44.3396,
      "country_code": "IQ"
    },
    {
      "city": "Sagamihara",
      "latitude": 35.5667,
      "longitude": 139.3667,
      "country_code": "JP"
    },
    {
      "city": "Guli",
      "latitude": 28.9008,
      "longitude": 120.0284,
      "country_code": "CN"
    },
    {
      "city": "Sarasota",
      "latitude": 27.3386,
      "longitude": -82.5431,
      "country_code": "US"
    },
    {
      "city": "Okayama",
      "latitude": 34.65,
      "longitude": 133.9167,
      "country_code": "JP"
    },
    {
      "city": "Mississauga",
      "latitude": 43.6,
      "longitude": -79.65,
      "country_code": "CA"
    },
    {
      "city": "Lingbao Chengguanzhen",
      "latitude": 34.5221,
      "longitude": 110.8786,
      "country_code": "CN"
    },
    {
      "city": "Anlu",
      "latitude": 31.2575,
      "longitude": 113.6783,
      "country_code": "CN"
    },
    {
      "city": "Wusong",
      "latitude": 30.9333,
      "longitude": 117.7667,
      "country_code": "CN"
    },
    {
      "city": "Dayton",
      "latitude": 39.7797,
      "longitude": -84.1998,
      "country_code": "US"
    },
    {
      "city": "Enugu",
      "latitude": 6.4403,
      "longitude": 7.4942,
      "country_code": "NG"
    },
    {
      "city": "George Town",
      "latitude": 5.4145,
      "longitude": 100.3292,
      "country_code": "MY"
    },
    {
      "city": "Jaboatão",
      "latitude": -8.1803,
      "longitude": -35.0014,
      "country_code": "BR"
    },
    {
      "city": "Santo André",
      "latitude": -23.6572,
      "longitude": -46.5333,
      "country_code": "BR"
    },
    {
      "city": "Xichang",
      "latitude": 27.8983,
      "longitude": 102.2706,
      "country_code": "CN"
    },
    {
      "city": "Soledad",
      "latitude": 10.92,
      "longitude": -74.77,
      "country_code": "CO"
    },
    {
      "city": "Chengxiang",
      "latitude": 31.4515,
      "longitude": 121.1043,
      "country_code": "CN"
    },
    {
      "city": "Tolyatti",
      "latitude": 53.5167,
      "longitude": 49.4167,
      "country_code": "RU"
    },
    {
      "city": "Sahāranpur",
      "latitude": 29.964,
      "longitude": 77.546,
      "country_code": "IN"
    },
    {
      "city": "Warangal",
      "latitude": 17.9756,
      "longitude": 79.6011,
      "country_code": "IN"
    },
    {
      "city": "Osasco",
      "latitude": -23.5328,
      "longitude": -46.7919,
      "country_code": "BR"
    },
    {
      "city": "Dashiqiao",
      "latitude": 40.6328,
      "longitude": 122.5021,
      "country_code": "CN"
    },
    {
      "city": "Latakia",
      "latitude": 35.5236,
      "longitude": 35.7917,
      "country_code": "SY"
    },
    {
      "city": "Rochester",
      "latitude": 43.168,
      "longitude": -77.6162,
      "country_code": "US"
    },
    {
      "city": "Fresno",
      "latitude": 36.7831,
      "longitude": -119.7941,
      "country_code": "US"
    },
    {
      "city": "Banjarmasin",
      "latitude": -3.3333,
      "longitude": 114.5833,
      "country_code": "ID"
    },
    {
      "city": "Salem",
      "latitude": 11.65,
      "longitude": 78.1667,
      "country_code": "IN"
    },
    {
      "city": "Changsha",
      "latitude": 22.3762,
      "longitude": 112.6877,
      "country_code": "CN"
    },
    {
      "city": "Grenoble",
      "latitude": 45.1715,
      "longitude": 5.7224,
      "country_code": "FR"
    },
    {
      "city": "Shishi",
      "latitude": 24.7355,
      "longitude": 118.6434,
      "country_code": "CN"
    },
    {
      "city": "Guadalupe",
      "latitude": 25.6775,
      "longitude": -100.2597,
      "country_code": "MX"
    },
    {
      "city": "Aracaju",
      "latitude": -10.9111,
      "longitude": -37.0717,
      "country_code": "BR"
    },
    {
      "city": "Bauchi",
      "latitude": 10.3158,
      "longitude": 9.8442,
      "country_code": "NG"
    },
    {
      "city": "Hamilton",
      "latitude": 43.2567,
      "longitude": -79.8692,
      "country_code": "CA"
    },
    {
      "city": "Łódź",
      "latitude": 51.7769,
      "longitude": 19.4547,
      "country_code": "PL"
    },
    {
      "city": "Miluo Chengguanzhen",
      "latitude": 28.8049,
      "longitude": 113.0745,
      "country_code": "CN"
    },
    {
      "city": "Gaizhou",
      "latitude": 40.4019,
      "longitude": 122.3499,
      "country_code": "CN"
    },
    {
      "city": "Shizuoka",
      "latitude": 34.9756,
      "longitude": 138.3825,
      "country_code": "JP"
    },
    {
      "city": "Mālegaon",
      "latitude": 20.55,
      "longitude": 74.55,
      "country_code": "IN"
    },
    {
      "city": "Karbalā’",
      "latitude": 32.6167,
      "longitude": 44.0333,
      "country_code": "IQ"
    },
    {
      "city": "Leling",
      "latitude": 37.7333,
      "longitude": 117.2167,
      "country_code": "CN"
    },
    {
      "city": "São José dos Campos",
      "latitude": -23.1789,
      "longitude": -45.8869,
      "country_code": "BR"
    },
    {
      "city": "Jianshe",
      "latitude": 34.2189,
      "longitude": 113.7693,
      "country_code": "CN"
    },
    {
      "city": "Acapulco de Juárez",
      "latitude": 16.8636,
      "longitude": -99.8825,
      "country_code": "MX"
    },
    {
      "city": "Sheffield",
      "latitude": 53.3833,
      "longitude": -1.4667,
      "country_code": "GB"
    },
    {
      "city": "Jingcheng",
      "latitude": 32.0058,
      "longitude": 120.2547,
      "country_code": "CN"
    },
    {
      "city": "City of Parañaque",
      "latitude": 14.4667,
      "longitude": 121.0167,
      "country_code": "PH"
    },
    {
      "city": "Kochi",
      "latitude": 9.9667,
      "longitude": 76.2833,
      "country_code": "IN"
    },
    {
      "city": "Allentown",
      "latitude": 40.5961,
      "longitude": -75.4756,
      "country_code": "US"
    },
    {
      "city": "Bahawalpur",
      "latitude": 29.3956,
      "longitude": 71.6722,
      "country_code": "PK"
    },
    {
      "city": "Tasikmalaya",
      "latitude": -7.3333,
      "longitude": 108.2,
      "country_code": "ID"
    },
    {
      "city": "Macau",
      "latitude": 22.203,
      "longitude": 113.545,
      "country_code": "MO"
    },
    {
      "city": "Torreón",
      "latitude": 25.5394,
      "longitude": -103.4486,
      "country_code": "MX"
    },
    {
      "city": "Xinmin",
      "latitude": 41.9952,
      "longitude": 122.8224,
      "country_code": "CN"
    },
    {
      "city": "Shanhu",
      "latitude": 29.5908,
      "longitude": 120.8176,
      "country_code": "CN"
    },
    {
      "city": "Zhongshu",
      "latitude": 27.8116,
      "longitude": 106.4133,
      "country_code": "CN"
    },
    {
      "city": "Xigazê",
      "latitude": 29.2649,
      "longitude": 88.8799,
      "country_code": "CN"
    },
    {
      "city": "Gold Coast",
      "latitude": -28.0167,
      "longitude": 153.4,
      "country_code": "AU"
    },
    {
      "city": "Palermo",
      "latitude": 38.1157,
      "longitude": 13.3613,
      "country_code": "IT"
    },
    {
      "city": "Cagayan de Oro",
      "latitude": 8.4833,
      "longitude": 124.65,
      "country_code": "PH"
    },
    {
      "city": "Gorakhpur",
      "latitude": 26.7611,
      "longitude": 83.3667,
      "country_code": "IN"
    },
    {
      "city": "Pinghu",
      "latitude": 30.7005,
      "longitude": 121.0104,
      "country_code": "CN"
    },
    {
      "city": "Guankou",
      "latitude": 30.9933,
      "longitude": 103.624,
      "country_code": "CN"
    },
    {
      "city": "Tulsa",
      "latitude": 36.1284,
      "longitude": -95.9042,
      "country_code": "US"
    },
    {
      "city": "Yatou",
      "latitude": 37.1653,
      "longitude": 122.4867,
      "country_code": "CN"
    },
    {
      "city": "Songyang",
      "latitude": 34.4161,
      "longitude": 113.0424,
      "country_code": "CN"
    },
    {
      "city": "Cape Coral",
      "latitude": 26.6446,
      "longitude": -81.9956,
      "country_code": "US"
    },
    {
      "city": "Ch’ŏngjin",
      "latitude": 41.8,
      "longitude": 129.7831,
      "country_code": "KP"
    },
    {
      "city": "São José dos Pinhais",
      "latitude": -25.57,
      "longitude": -49.18,
      "country_code": "BR"
    },
    {
      "city": "Puyang Chengguanzhen",
      "latitude": 35.7004,
      "longitude": 114.98,
      "country_code": "CN"
    },
    {
      "city": "Qionghu",
      "latitude": 28.8417,
      "longitude": 112.3595,
      "country_code": "CN"
    },
    {
      "city": "Yanshi Chengguanzhen",
      "latitude": 34.723,
      "longitude": 112.7796,
      "country_code": "CN"
    },
    {
      "city": "Ribeirão Prêto",
      "latitude": -21.1783,
      "longitude": -47.8067,
      "country_code": "BR"
    },
    {
      "city": "Dasmariñas",
      "latitude": 14.3294,
      "longitude": 120.9367,
      "country_code": "PH"
    },
    {
      "city": "Huambo",
      "latitude": -12.7667,
      "longitude": 15.7333,
      "country_code": "AO"
    },
    {
      "city": "Wenchang",
      "latitude": 31.054,
      "longitude": 116.9507,
      "country_code": "CN"
    },
    {
      "city": "Shulan",
      "latitude": 44.4167,
      "longitude": 126.95,
      "country_code": "CN"
    },
    {
      "city": "Catia La Mar",
      "latitude": 10.6,
      "longitude": -67.0333,
      "country_code": "VE"
    },
    {
      "city": "Bouaké",
      "latitude": 7.6833,
      "longitude": -5.0331,
      "country_code": "CI"
    },
    {
      "city": "As Sulaymānīyah",
      "latitude": 35.55,
      "longitude": 45.4333,
      "country_code": "IQ"
    },
    {
      "city": "Hwasu-dong",
      "latitude": 37.2,
      "longitude": 126.7667,
      "country_code": "KR"
    },
    {
      "city": "Jeonju",
      "latitude": 35.8219,
      "longitude": 127.1489,
      "country_code": "KR"
    },
    {
      "city": "Durango",
      "latitude": 24.0167,
      "longitude": -104.6667,
      "country_code": "MX"
    },
    {
      "city": "Shimoga",
      "latitude": 13.9304,
      "longitude": 75.56,
      "country_code": "IN"
    },
    {
      "city": "Ansan",
      "latitude": 37.3236,
      "longitude": 126.8219,
      "country_code": "KR"
    },
    {
      "city": "Bulawayo",
      "latitude": -20.1667,
      "longitude": 28.5667,
      "country_code": "ZW"
    },
    {
      "city": "Xiping",
      "latitude": 25.6005,
      "longitude": 103.8166,
      "country_code": "CN"
    },
    {
      "city": "Sanhe",
      "latitude": 39.9808,
      "longitude": 117.0701,
      "country_code": "CN"
    },
    {
      "city": "Guntūr",
      "latitude": 16.3,
      "longitude": 80.45,
      "country_code": "IN"
    },
    {
      "city": "Dali",
      "latitude": 25.7003,
      "longitude": 100.1564,
      "country_code": "CN"
    },
    {
      "city": "Concord",
      "latitude": 37.9722,
      "longitude": -122.0016,
      "country_code": "US"
    },
    {
      "city": "Tiruppūr",
      "latitude": 11.1075,
      "longitude": 77.3398,
      "country_code": "IN"
    },
    {
      "city": "Ch’ŏnan",
      "latitude": 36.8064,
      "longitude": 127.1522,
      "country_code": "KR"
    },
    {
      "city": "Zaragoza",
      "latitude": 41.6483,
      "longitude": -0.883,
      "country_code": "ES"
    },
    {
      "city": "Izhevsk",
      "latitude": 56.85,
      "longitude": 53.2167,
      "country_code": "RU"
    },
    {
      "city": "Guixi",
      "latitude": 28.2861,
      "longitude": 117.2083,
      "country_code": "CN"
    },
    {
      "city": "Honchō",
      "latitude": 35.6947,
      "longitude": 139.9825,
      "country_code": "JP"
    },
    {
      "city": "Sorocaba",
      "latitude": -23.5019,
      "longitude": -47.4578,
      "country_code": "BR"
    },
    {
      "city": "Villahermosa",
      "latitude": 17.9892,
      "longitude": -92.9281,
      "country_code": "MX"
    },
    {
      "city": "Petaling Jaya",
      "latitude": 3.1073,
      "longitude": 101.6067,
      "country_code": "MY"
    },
    {
      "city": "Wuxue",
      "latitude": 29.8518,
      "longitude": 115.5539,
      "country_code": "CN"
    },
    {
      "city": "Utrecht",
      "latitude": 52.1003,
      "longitude": 5.12,
      "country_code": "NL"
    },
    {
      "city": "Kikwit",
      "latitude": -5.0333,
      "longitude": 18.8167,
      "country_code": "CD"
    },
    {
      "city": "Colorado Springs",
      "latitude": 38.8674,
      "longitude": -104.7606,
      "country_code": "US"
    },
    {
      "city": "Valenzuela",
      "latitude": 14.7,
      "longitude": 120.9833,
      "country_code": "PH"
    },
    {
      "city": "Gaobeidian",
      "latitude": 39.3257,
      "longitude": 115.8678,
      "country_code": "CN"
    },
    {
      "city": "Qufu",
      "latitude": 35.6,
      "longitude": 116.9833,
      "country_code": "CN"
    },
    {
      "city": "Ruiming",
      "latitude": 25.8833,
      "longitude": 116.0333,
      "country_code": "CN"
    },
    {
      "city": "Wrocław",
      "latitude": 51.1077,
      "longitude": 17.0353,
      "country_code": "PL"
    },
    {
      "city": "Rasht",
      "latitude": 37.2833,
      "longitude": 49.6,
      "country_code": "IR"
    },
    {
      "city": "Nantes",
      "latitude": 47.2181,
      "longitude": -1.5528,
      "country_code": "FR"
    },
    {
      "city": "Stuttgart",
      "latitude": 48.7761,
      "longitude": 9.1775,
      "country_code": "DE"
    },
    {
      "city": "Al Hufūf",
      "latitude": 25.3608,
      "longitude": 49.5997,
      "country_code": "SA"
    },
    {
      "city": "Xinshi",
      "latitude": 31.0236,
      "longitude": 113.1079,
      "country_code": "CN"
    },
    {
      "city": "Cochabamba",
      "latitude": -17.3935,
      "longitude": -66.157,
      "country_code": "BO"
    },
    {
      "city": "Barnaul",
      "latitude": 53.3567,
      "longitude": 83.7872,
      "country_code": "RU"
    },
    {
      "city": "Tripoli",
      "latitude": 34.4333,
      "longitude": 35.8333,
      "country_code": "LB"
    },
    {
      "city": "Jin’e",
      "latitude": 29.3395,
      "longitude": 105.2868,
      "country_code": "CN"
    },
    {
      "city": "Benghazi",
      "latitude": 32.1167,
      "longitude": 20.0667,
      "country_code": "LY"
    },
    {
      "city": "Kryvyy Rih",
      "latitude": 47.9086,
      "longitude": 33.3433,
      "country_code": "UA"
    },
    {
      "city": "Yanggok",
      "latitude": 37.6367,
      "longitude": 127.2142,
      "country_code": "KR"
    },
    {
      "city": "Changping",
      "latitude": 40.2248,
      "longitude": 116.1944,
      "country_code": "CN"
    },
    {
      "city": "Raurkela",
      "latitude": 22.2492,
      "longitude": 84.8828,
      "country_code": "IN"
    },
    {
      "city": "Ḩalwān",
      "latitude": 29.8419,
      "longitude": 31.3342,
      "country_code": "EG"
    },
    {
      "city": "Charleston",
      "latitude": 32.8153,
      "longitude": -79.9628,
      "country_code": "US"
    },
    {
      "city": "Chimalhuacán",
      "latitude": 19.4167,
      "longitude": -98.9,
      "country_code": "MX"
    },
    {
      "city": "Xinxing",
      "latitude": 39.8734,
      "longitude": 124.1453,
      "country_code": "CN"
    },
    {
      "city": "Suohe",
      "latitude": 34.7879,
      "longitude": 113.392,
      "country_code": "CN"
    },
    {
      "city": "Mangalore",
      "latitude": 12.8703,
      "longitude": 74.8806,
      "country_code": "IN"
    },
    {
      "city": "Zhuangyuan",
      "latitude": 37.3,
      "longitude": 120.8333,
      "country_code": "CN"
    },
    {
      "city": "Ulyanovsk",
      "latitude": 54.3167,
      "longitude": 48.3667,
      "country_code": "RU"
    },
    {
      "city": "Irkutsk",
      "latitude": 52.2833,
      "longitude": 104.3,
      "country_code": "RU"
    },
    {
      "city": "Nānded",
      "latitude": 19.15,
      "longitude": 77.3333,
      "country_code": "IN"
    },
    {
      "city": "Bacoor",
      "latitude": 14.4624,
      "longitude": 120.9645,
      "country_code": "PH"
    },
    {
      "city": "Pontianak",
      "latitude": -0.0206,
      "longitude": 109.3414,
      "country_code": "ID"
    },
    {
      "city": "Bazhou",
      "latitude": 39.1235,
      "longitude": 116.386,
      "country_code": "CN"
    },
    {
      "city": "Springfield",
      "latitude": 42.1155,
      "longitude": -72.5395,
      "country_code": "US"
    },
    {
      "city": "Turpan",
      "latitude": 42.95,
      "longitude": 89.1822,
      "country_code": "CN"
    },
    {
      "city": "Düsseldorf",
      "latitude": 51.2311,
      "longitude": 6.7724,
      "country_code": "DE"
    },
    {
      "city": "Xingtai",
      "latitude": 37.0659,
      "longitude": 114.4753,
      "country_code": "CN"
    },
    {
      "city": "Meihekou",
      "latitude": 42.5279,
      "longitude": 125.678,
      "country_code": "CN"
    },
    {
      "city": "Jurong",
      "latitude": 31.9579,
      "longitude": 119.1595,
      "country_code": "CN"
    },
    {
      "city": "Zhugang",
      "latitude": 28.1277,
      "longitude": 121.2288,
      "country_code": "CN"
    },
    {
      "city": "Khabarovsk",
      "latitude": 48.4833,
      "longitude": 135.0667,
      "country_code": "RU"
    },
    {
      "city": "Xinji",
      "latitude": 37.9423,
      "longitude": 115.2118,
      "country_code": "CN"
    },
    {
      "city": "Hamhŭng",
      "latitude": 39.9167,
      "longitude": 127.5333,
      "country_code": "KP"
    },
    {
      "city": "Serang",
      "latitude": -6.12,
      "longitude": 106.1503,
      "country_code": "ID"
    },
    {
      "city": "Buraydah",
      "latitude": 26.3333,
      "longitude": 43.9667,
      "country_code": "SA"
    },
    {
      "city": "Ta‘izz",
      "latitude": 13.5789,
      "longitude": 44.0219,
      "country_code": "YE"
    },
    {
      "city": "Montpellier",
      "latitude": 43.6119,
      "longitude": 3.8772,
      "country_code": "FR"
    },
    {
      "city": "San Miguel de Tucumán",
      "latitude": -26.8167,
      "longitude": -65.2167,
      "country_code": "AR"
    },
    {
      "city": "Yaroslavl",
      "latitude": 57.6167,
      "longitude": 39.85,
      "country_code": "RU"
    },
    {
      "city": "Zhangshu",
      "latitude": 28.0667,
      "longitude": 115.5375,
      "country_code": "CN"
    },
    {
      "city": "Grand Rapids",
      "latitude": 42.962,
      "longitude": -85.6562,
      "country_code": "US"
    },
    {
      "city": "Vladivostok",
      "latitude": 43.1167,
      "longitude": 131.9,
      "country_code": "RU"
    },
    {
      "city": "Kuantan",
      "latitude": 3.8167,
      "longitude": 103.3333,
      "country_code": "MY"
    },
    {
      "city": "Cuttack",
      "latitude": 20.45,
      "longitude": 85.8667,
      "country_code": "IN"
    },
    {
      "city": "Jambi",
      "latitude": -1.59,
      "longitude": 103.61,
      "country_code": "ID"
    },
    {
      "city": "Zhuozhou",
      "latitude": 39.4887,
      "longitude": 115.9918,
      "country_code": "CN"
    },
    {
      "city": "Uberlândia",
      "latitude": -18.9189,
      "longitude": -48.2769,
      "country_code": "BR"
    },
    {
      "city": "Gothenburg",
      "latitude": 57.6717,
      "longitude": 11.981,
      "country_code": "SE"
    },
    {
      "city": "Tianchang",
      "latitude": 32.6853,
      "longitude": 119.0041,
      "country_code": "CN"
    },
    {
      "city": "Canoas",
      "latitude": -29.92,
      "longitude": -51.18,
      "country_code": "BR"
    },
    {
      "city": "Sargodha",
      "latitude": 32.0836,
      "longitude": 72.6711,
      "country_code": "PK"
    },
    {
      "city": "Las Piñas City",
      "latitude": 14.45,
      "longitude": 120.9833,
      "country_code": "PH"
    },
    {
      "city": "Cimahi",
      "latitude": -6.8833,
      "longitude": 107.5333,
      "country_code": "ID"
    },
    {
      "city": "Kawaguchi",
      "latitude": 35.8078,
      "longitude": 139.7242,
      "country_code": "JP"
    },
    {
      "city": "Tuxtla",
      "latitude": 16.7528,
      "longitude": -93.1167,
      "country_code": "MX"
    },
    {
      "city": "Balikpapan",
      "latitude": -1.1489,
      "longitude": 116.9031,
      "country_code": "ID"
    },
    {
      "city": "Qamdo",
      "latitude": 31.1375,
      "longitude": 97.1777,
      "country_code": "CN"
    },
    {
      "city": "Durban",
      "latitude": -29.8583,
      "longitude": 31.025,
      "country_code": "ZA"
    },
    {
      "city": "Kagoshima",
      "latitude": 31.58,
      "longitude": 130.5281,
      "country_code": "JP"
    },
    {
      "city": "General Santos",
      "latitude": 6.1167,
      "longitude": 125.1667,
      "country_code": "PH"
    },
    {
      "city": "Chānda",
      "latitude": 19.95,
      "longitude": 79.3,
      "country_code": "IN"
    },
    {
      "city": "Al Ḩillah",
      "latitude": 23.4895,
      "longitude": 46.7564,
      "country_code": "SA"
    },
    {
      "city": "Makhachkala",
      "latitude": 42.9833,
      "longitude": 47.4833,
      "country_code": "RU"
    },
    {
      "city": "Mar del Plata",
      "latitude": -38,
      "longitude": -57.55,
      "country_code": "AR"
    },
    {
      "city": "Brampton",
      "latitude": 43.6833,
      "longitude": -79.7667,
      "country_code": "CA"
    },
    {
      "city": "Luocheng",
      "latitude": 30.9793,
      "longitude": 104.28,
      "country_code": "CN"
    },
    {
      "city": "Mission Viejo",
      "latitude": 33.6095,
      "longitude": -117.655,
      "country_code": "US"
    },
    {
      "city": "Dortmund",
      "latitude": 51.5139,
      "longitude": 7.4653,
      "country_code": "DE"
    },
    {
      "city": "Chuxiong",
      "latitude": 25.0461,
      "longitude": 101.5436,
      "country_code": "CN"
    },
    {
      "city": "Makati City",
      "latitude": 14.55,
      "longitude": 121.0333,
      "country_code": "PH"
    },
    {
      "city": "Albany",
      "latitude": 42.6664,
      "longitude": -73.7987,
      "country_code": "US"
    },
    {
      "city": "Shah Alam",
      "latitude": 3.0833,
      "longitude": 101.5333,
      "country_code": "MY"
    },
    {
      "city": "Knoxville",
      "latitude": 35.9692,
      "longitude": -83.9496,
      "country_code": "US"
    },
    {
      "city": "Essen",
      "latitude": 51.4508,
      "longitude": 7.0131,
      "country_code": "DE"
    },
    {
      "city": "Cuiabá",
      "latitude": -15.5958,
      "longitude": -56.0969,
      "country_code": "BR"
    },
    {
      "city": "Shangzhi",
      "latitude": 45.2116,
      "longitude": 127.962,
      "country_code": "CN"
    },
    {
      "city": "Botou",
      "latitude": 38.06,
      "longitude": 116.56,
      "country_code": "CN"
    },
    {
      "city": "Bucaramanga",
      "latitude": 7.1186,
      "longitude": -73.1161,
      "country_code": "CO"
    },
    {
      "city": "Anyang",
      "latitude": 37.3925,
      "longitude": 126.9269,
      "country_code": "KR"
    },
    {
      "city": "Genoa",
      "latitude": 44.4072,
      "longitude": 8.934,
      "country_code": "IT"
    },
    {
      "city": "Kuiju",
      "latitude": 36.8528,
      "longitude": 119.3904,
      "country_code": "CN"
    },
    {
      "city": "Tlaquepaque",
      "latitude": 20.6167,
      "longitude": -103.3167,
      "country_code": "MX"
    },
    {
      "city": "Hachiōji",
      "latitude": 35.6667,
      "longitude": 139.3167,
      "country_code": "JP"
    },
    {
      "city": "Dehra Dūn",
      "latitude": 30.318,
      "longitude": 78.029,
      "country_code": "IN"
    },
    {
      "city": "Aţ Ţā’if",
      "latitude": 21.2667,
      "longitude": 40.4167,
      "country_code": "SA"
    },
    {
      "city": "San Jose del Monte",
      "latitude": 14.8139,
      "longitude": 121.0453,
      "country_code": "PH"
    },
    {
      "city": "Bakersfield",
      "latitude": 35.3529,
      "longitude": -119.0359,
      "country_code": "US"
    },
    {
      "city": "Ogden",
      "latitude": 41.2278,
      "longitude": -111.9682,
      "country_code": "US"
    },
    {
      "city": "Xiulin",
      "latitude": 29.7211,
      "longitude": 112.4037,
      "country_code": "CN"
    },
    {
      "city": "Fu’an",
      "latitude": 27.1,
      "longitude": 119.6333,
      "country_code": "CN"
    },
    {
      "city": "Málaga",
      "latitude": 36.7167,
      "longitude": -4.4167,
      "country_code": "ES"
    },
    {
      "city": "Tomsk",
      "latitude": 56.4886,
      "longitude": 84.9522,
      "country_code": "RU"
    },
    {
      "city": "Kermān",
      "latitude": 30.2833,
      "longitude": 57.0667,
      "country_code": "IR"
    },
    {
      "city": "Kingston upon Hull",
      "latitude": 53.7444,
      "longitude": -0.3325,
      "country_code": "GB"
    },
    {
      "city": "Al Maḩallah al Kubrá",
      "latitude": 30.9667,
      "longitude": 31.1667,
      "country_code": "EG"
    },
    {
      "city": "Luofeng",
      "latitude": 37.359,
      "longitude": 120.396,
      "country_code": "CN"
    },
    {
      "city": "Lingyuan",
      "latitude": 41.2407,
      "longitude": 119.3957,
      "country_code": "CN"
    },
    {
      "city": "Baton Rouge",
      "latitude": 30.4418,
      "longitude": -91.131,
      "country_code": "US"
    },
    {
      "city": "Pereira",
      "latitude": 4.8104,
      "longitude": -75.68,
      "country_code": "CO"
    },
    {
      "city": "Ciudad Bolívar",
      "latitude": 8.1167,
      "longitude": -63.55,
      "country_code": "VE"
    },
    {
      "city": "Durgāpur",
      "latitude": 23.55,
      "longitude": 87.32,
      "country_code": "IN"
    },
    {
      "city": "Orenburg",
      "latitude": 51.7667,
      "longitude": 55.1,
      "country_code": "RU"
    },
    {
      "city": "Shenzhou",
      "latitude": 38.0005,
      "longitude": 115.5541,
      "country_code": "CN"
    },
    {
      "city": "Āsansol",
      "latitude": 23.6833,
      "longitude": 86.9667,
      "country_code": "IN"
    },
    {
      "city": "Bacolod",
      "latitude": 10.6765,
      "longitude": 122.9509,
      "country_code": "PH"
    },
    {
      "city": "Akron",
      "latitude": 41.0798,
      "longitude": -81.5219,
      "country_code": "US"
    },
    {
      "city": "New Haven",
      "latitude": 41.3112,
      "longitude": -72.9246,
      "country_code": "US"
    },
    {
      "city": "Zhenzhou",
      "latitude": 32.2739,
      "longitude": 119.1619,
      "country_code": "CN"
    },
    {
      "city": "Surakarta",
      "latitude": -7.5667,
      "longitude": 110.8167,
      "country_code": "ID"
    },
    {
      "city": "Tlajomulco de Zúñiga",
      "latitude": 20.4736,
      "longitude": -103.4431,
      "country_code": "MX"
    },
    {
      "city": "Jieshou",
      "latitude": 33.2605,
      "longitude": 115.3618,
      "country_code": "CN"
    },
    {
      "city": "Lanxi",
      "latitude": 29.2167,
      "longitude": 119.4722,
      "country_code": "CN"
    },
    {
      "city": "Zāhedān",
      "latitude": 29.4833,
      "longitude": 60.8667,
      "country_code": "IR"
    },
    {
      "city": "Dangyang",
      "latitude": 30.8258,
      "longitude": 111.791,
      "country_code": "CN"
    },
    {
      "city": "Columbia",
      "latitude": 34.0376,
      "longitude": -80.9037,
      "country_code": "US"
    },
    {
      "city": "Kemerovo",
      "latitude": 55.3333,
      "longitude": 86.0667,
      "country_code": "RU"
    },
    {
      "city": "Dresden",
      "latitude": 51.0493,
      "longitude": 13.7384,
      "country_code": "DE"
    },
    {
      "city": "Uyo",
      "latitude": 5.008,
      "longitude": 7.85,
      "country_code": "NG"
    },
    {
      "city": "Bhāvnagar",
      "latitude": 21.765,
      "longitude": 72.1369,
      "country_code": "IN"
    },
    {
      "city": "Luanzhou",
      "latitude": 39.7396,
      "longitude": 118.6978,
      "country_code": "CN"
    },
    {
      "city": "Veracruz",
      "latitude": 19.1903,
      "longitude": -96.1533,
      "country_code": "MX"
    },
    {
      "city": "Novokuznetsk",
      "latitude": 53.75,
      "longitude": 87.1167,
      "country_code": "RU"
    },
    {
      "city": "Nellore",
      "latitude": 14.4333,
      "longitude": 79.9667,
      "country_code": "IN"
    },
    {
      "city": "Chiclayo",
      "latitude": -6.763,
      "longitude": -79.8366,
      "country_code": "PE"
    },
    {
      "city": "Al Ḩudaydah",
      "latitude": 14.8022,
      "longitude": 42.9511,
      "country_code": "YE"
    },
    {
      "city": "Eslāmshahr",
      "latitude": 35.5333,
      "longitude": 51.2,
      "country_code": "IR"
    },
    {
      "city": "Cabinda",
      "latitude": -5.55,
      "longitude": 12.2,
      "country_code": "AO"
    },
    {
      "city": "Amrāvati",
      "latitude": 20.9333,
      "longitude": 77.75,
      "country_code": "IN"
    },
    {
      "city": "Korla",
      "latitude": 41.7646,
      "longitude": 86.1527,
      "country_code": "CN"
    },
    {
      "city": "Huanghua",
      "latitude": 38.371,
      "longitude": 117.3329,
      "country_code": "CN"
    },
    {
      "city": "Xingcheng",
      "latitude": 40.6189,
      "longitude": 120.7205,
      "country_code": "CN"
    },
    {
      "city": "Wancheng",
      "latitude": 18.8,
      "longitude": 110.4,
      "country_code": "CN"
    },
    {
      "city": "Kaiyuan",
      "latitude": 42.538,
      "longitude": 124.0371,
      "country_code": "CN"
    },
    {
      "city": "Leipzig",
      "latitude": 51.35,
      "longitude": 12.3833,
      "country_code": "DE"
    },
    {
      "city": "Fengcheng",
      "latitude": 40.4543,
      "longitude": 124.0646,
      "country_code": "CN"
    },
    {
      "city": "Ajmer",
      "latitude": 26.468,
      "longitude": 74.639,
      "country_code": "IN"
    },
    {
      "city": "Sihui",
      "latitude": 23.3448,
      "longitude": 112.6956,
      "country_code": "CN"
    },
    {
      "city": "Tinnevelly",
      "latitude": 8.7289,
      "longitude": 77.7081,
      "country_code": "IN"
    },
    {
      "city": "Fuding",
      "latitude": 27.2,
      "longitude": 120.2,
      "country_code": "CN"
    },
    {
      "city": "Maturín",
      "latitude": 9.7457,
      "longitude": -63.1832,
      "country_code": "VE"
    },
    {
      "city": "An Nāşirīyah",
      "latitude": 31.0539,
      "longitude": 46.2503,
      "country_code": "IQ"
    },
    {
      "city": "Al Ḩillah",
      "latitude": 32.4833,
      "longitude": 44.4333,
      "country_code": "IQ"
    },
    {
      "city": "Ibagué",
      "latitude": 4.4378,
      "longitude": -75.2006,
      "country_code": "CO"
    },
    {
      "city": "Hannover",
      "latitude": 52.3744,
      "longitude": 9.7386,
      "country_code": "DE"
    },
    {
      "city": "Poznań",
      "latitude": 52.4,
      "longitude": 16.9167,
      "country_code": "PL"
    },
    {
      "city": "Ryazan",
      "latitude": 54.6167,
      "longitude": 39.7167,
      "country_code": "RU"
    },
    {
      "city": "Panshi",
      "latitude": 42.9392,
      "longitude": 126.0561,
      "country_code": "CN"
    },
    {
      "city": "Kassala",
      "latitude": 15.45,
      "longitude": 36.4,
      "country_code": "SD"
    },
    {
      "city": "Chang’an",
      "latitude": 29.4761,
      "longitude": 113.448,
      "country_code": "CN"
    },
    {
      "city": "Wencheng",
      "latitude": 19.6167,
      "longitude": 110.75,
      "country_code": "CN"
    },
    {
      "city": "Shashi",
      "latitude": 30.32,
      "longitude": 112.23,
      "country_code": "CN"
    },
    {
      "city": "Aksu",
      "latitude": 41.1664,
      "longitude": 80.25,
      "country_code": "CN"
    },
    {
      "city": "Salta",
      "latitude": -24.7883,
      "longitude": -65.4106,
      "country_code": "AR"
    },
    {
      "city": "Kimhae",
      "latitude": 35.2342,
      "longitude": 128.8811,
      "country_code": "KR"
    },
    {
      "city": "Astrakhan",
      "latitude": 46.3333,
      "longitude": 48.0167,
      "country_code": "RU"
    },
    {
      "city": "Mingguang",
      "latitude": 32.7816,
      "longitude": 117.9899,
      "country_code": "CN"
    },
    {
      "city": "Naberezhnyye Chelny",
      "latitude": 55.7,
      "longitude": 52.3333,
      "country_code": "RU"
    },
    {
      "city": "Antwerp",
      "latitude": 51.2211,
      "longitude": 4.3997,
      "country_code": "BE"
    },
    {
      "city": "Bīkaner",
      "latitude": 28.0181,
      "longitude": 73.3169,
      "country_code": "IN"
    },
    {
      "city": "Agartala",
      "latitude": 23.8333,
      "longitude": 91.2667,
      "country_code": "IN"
    },
    {
      "city": "Xalapa",
      "latitude": 19.54,
      "longitude": -96.9275,
      "country_code": "MX"
    },
    {
      "city": "Ndola",
      "latitude": -12.9683,
      "longitude": 28.6337,
      "country_code": "ZM"
    },
    {
      "city": "Hamadān",
      "latitude": 34.8065,
      "longitude": 48.5162,
      "country_code": "IR"
    },
    {
      "city": "Villavicencio",
      "latitude": 4.1425,
      "longitude": -73.6294,
      "country_code": "CO"
    },
    {
      "city": "Ailan Mubage",
      "latitude": 43.9167,
      "longitude": 81.3167,
      "country_code": "CN"
    },
    {
      "city": "Ensenada",
      "latitude": 31.8578,
      "longitude": -116.6058,
      "country_code": "MX"
    },
    {
      "city": "Lyon",
      "latitude": 45.76,
      "longitude": 4.84,
      "country_code": "FR"
    },
    {
      "city": "Bắc Ninh",
      "latitude": 21.1861,
      "longitude": 106.0763,
      "country_code": "VN"
    },
    {
      "city": "Ciudad Apodaca",
      "latitude": 25.7833,
      "longitude": -100.1833,
      "country_code": "MX"
    },
    {
      "city": "Santa Teresa del Tuy",
      "latitude": 10.2333,
      "longitude": -66.65,
      "country_code": "VE"
    },
    {
      "city": "Londrina",
      "latitude": -23.3,
      "longitude": -51.18,
      "country_code": "BR"
    },
    {
      "city": "Penza",
      "latitude": 53.2,
      "longitude": 45,
      "country_code": "RU"
    },
    {
      "city": "Heroica Matamoros",
      "latitude": 25.8797,
      "longitude": -97.5042,
      "country_code": "MX"
    },
    {
      "city": "Port Said",
      "latitude": 31.25,
      "longitude": 32.2833,
      "country_code": "EG"
    },
    {
      "city": "New Mirpur",
      "latitude": 33.1333,
      "longitude": 73.75,
      "country_code": "PK"
    },
    {
      "city": "Yucheng",
      "latitude": 36.9329,
      "longitude": 116.6403,
      "country_code": "CN"
    },
    {
      "city": "Bello",
      "latitude": 6.33,
      "longitude": -75.57,
      "country_code": "CO"
    },
    {
      "city": "Meknès",
      "latitude": 33.8833,
      "longitude": -5.55,
      "country_code": "MA"
    },
    {
      "city": "Nuremberg",
      "latitude": 49.4528,
      "longitude": 11.0778,
      "country_code": "DE"
    },
    {
      "city": "Pohang",
      "latitude": 36.0322,
      "longitude": 129.365,
      "country_code": "KR"
    },
    {
      "city": "Utsunomiya",
      "latitude": 36.55,
      "longitude": 139.8833,
      "country_code": "JP"
    },
    {
      "city": "Anda",
      "latitude": 46.4078,
      "longitude": 125.3252,
      "country_code": "CN"
    },
    {
      "city": "Jinghong",
      "latitude": 22.0057,
      "longitude": 100.7948,
      "country_code": "CN"
    },
    {
      "city": "Liaoyuan",
      "latitude": 42.8976,
      "longitude": 125.1381,
      "country_code": "CN"
    },
    {
      "city": "Mesa",
      "latitude": 33.4017,
      "longitude": -111.718,
      "country_code": "US"
    },
    {
      "city": "Surrey",
      "latitude": 49.19,
      "longitude": -122.8489,
      "country_code": "CA"
    },
    {
      "city": "Cuautitlán Izcalli",
      "latitude": 19.65,
      "longitude": -99.25,
      "country_code": "MX"
    },
    {
      "city": "Ujjain",
      "latitude": 23.1828,
      "longitude": 75.7772,
      "country_code": "IN"
    },
    {
      "city": "Santa Marta",
      "latitude": 11.2361,
      "longitude": -74.2017,
      "country_code": "CO"
    },
    {
      "city": "Beining",
      "latitude": 41.5933,
      "longitude": 121.7932,
      "country_code": "CN"
    },
    {
      "city": "Hải Dương",
      "latitude": 20.9411,
      "longitude": 106.3331,
      "country_code": "VN"
    },
    {
      "city": "Carrefour",
      "latitude": 18.5333,
      "longitude": -72.4,
      "country_code": "HT"
    },
    {
      "city": "Homyel’",
      "latitude": 52.4417,
      "longitude": 30.9833,
      "country_code": "BY"
    },
    {
      "city": "Leicester",
      "latitude": 52.6333,
      "longitude": -1.1333,
      "country_code": "GB"
    },
    {
      "city": "Yanji",
      "latitude": 42.9044,
      "longitude": 129.5067,
      "country_code": "CN"
    },
    {
      "city": "Benguela",
      "latitude": -12.55,
      "longitude": 13.4167,
      "country_code": "AO"
    },
    {
      "city": "Yicheng",
      "latitude": 31.7117,
      "longitude": 112.2551,
      "country_code": "CN"
    },
    {
      "city": "Tabūk",
      "latitude": 28.3972,
      "longitude": 36.5789,
      "country_code": "SA"
    },
    {
      "city": "Lipetsk",
      "latitude": 52.6167,
      "longitude": 39.6,
      "country_code": "RU"
    },
    {
      "city": "Ulhāsnagar",
      "latitude": 19.2167,
      "longitude": 73.15,
      "country_code": "IN"
    },
    {
      "city": "Matsuyama",
      "latitude": 33.8333,
      "longitude": 132.7667,
      "country_code": "JP"
    },
    {
      "city": "Muntinlupa City",
      "latitude": 14.3833,
      "longitude": 121.05,
      "country_code": "PH"
    },
    {
      "city": "Kashgar",
      "latitude": 39.45,
      "longitude": 75.9833,
      "country_code": "CN"
    },
    {
      "city": "Linghai",
      "latitude": 41.1676,
      "longitude": 121.3558,
      "country_code": "CN"
    },
    {
      "city": "Aden",
      "latitude": 12.8,
      "longitude": 45.0333,
      "country_code": "YE"
    },
    {
      "city": "Jhānsi",
      "latitude": 25.4486,
      "longitude": 78.5696,
      "country_code": "IN"
    },
    {
      "city": "Kitwe",
      "latitude": -12.8208,
      "longitude": 28.2119,
      "country_code": "ZM"
    },
    {
      "city": "Aba",
      "latitude": 5.1167,
      "longitude": 7.3667,
      "country_code": "NG"
    },
    {
      "city": "Palm Bay",
      "latitude": 27.955,
      "longitude": -80.6627,
      "country_code": "US"
    },
    {
      "city": "Pingtung",
      "latitude": 22.6761,
      "longitude": 120.4942,
      "country_code": "TW"
    },
    {
      "city": "Samarkand",
      "latitude": 39.6542,
      "longitude": 66.9597,
      "country_code": "UZ"
    },
    {
      "city": "Davangere",
      "latitude": 14.4667,
      "longitude": 75.9167,
      "country_code": "IN"
    },
    {
      "city": "Ichikawa",
      "latitude": 35.7219,
      "longitude": 139.9311,
      "country_code": "JP"
    },
    {
      "city": "Jammu",
      "latitude": 32.7333,
      "longitude": 74.85,
      "country_code": "IN"
    },
    {
      "city": "Mazatlán",
      "latitude": 23.22,
      "longitude": -106.42,
      "country_code": "MX"
    },
    {
      "city": "Higashi-ōsaka",
      "latitude": 34.6794,
      "longitude": 135.6008,
      "country_code": "JP"
    },
    {
      "city": "Ile-Ife",
      "latitude": 7.4667,
      "longitude": 4.5667,
      "country_code": "NG"
    },
    {
      "city": "Kirov",
      "latitude": 58.6,
      "longitude": 49.65,
      "country_code": "RU"
    },
    {
      "city": "Madīnat as Sādis min Uktūbar",
      "latitude": 29.9361,
      "longitude": 30.9269,
      "country_code": "EG"
    },
    {
      "city": "Qaraghandy",
      "latitude": 49.8,
      "longitude": 73.1167,
      "country_code": "KZ"
    },
    {
      "city": "Mazatán",
      "latitude": 29.0167,
      "longitude": -110.1333,
      "country_code": "MX"
    },
    {
      "city": "Duisburg",
      "latitude": 51.4322,
      "longitude": 6.7611,
      "country_code": "DE"
    },
    {
      "city": "Mykolaiv",
      "latitude": 46.9667,
      "longitude": 32,
      "country_code": "UA"
    },
    {
      "city": "Matsudo",
      "latitude": 35.7878,
      "longitude": 139.9031,
      "country_code": "JP"
    },
    {
      "city": "Provo",
      "latitude": 40.2457,
      "longitude": -111.6457,
      "country_code": "US"
    },
    {
      "city": "Meicheng",
      "latitude": 30.6412,
      "longitude": 116.5689,
      "country_code": "CN"
    },
    {
      "city": "Niterói",
      "latitude": -22.8833,
      "longitude": -43.1036,
      "country_code": "BR"
    },
    {
      "city": "Rouen",
      "latitude": 49.4428,
      "longitude": 1.0886,
      "country_code": "FR"
    },
    {
      "city": "Oujda-Angad",
      "latitude": 34.6867,
      "longitude": -1.9114,
      "country_code": "MA"
    },
    {
      "city": "Johor Bahru",
      "latitude": 1.4556,
      "longitude": 103.7611,
      "country_code": "MY"
    },
    {
      "city": "Worcester",
      "latitude": 42.2705,
      "longitude": -71.8079,
      "country_code": "US"
    },
    {
      "city": "Hongjiang",
      "latitude": 27.1167,
      "longitude": 109.95,
      "country_code": "CN"
    },
    {
      "city": "Chimbote",
      "latitude": -9.0745,
      "longitude": -78.5936,
      "country_code": "PE"
    },
    {
      "city": "Dengtacun",
      "latitude": 41.4237,
      "longitude": 123.3203,
      "country_code": "CN"
    },
    {
      "city": "Ixtapaluca",
      "latitude": 19.3186,
      "longitude": -98.8822,
      "country_code": "MX"
    },
    {
      "city": "Zhijiang",
      "latitude": 30.4271,
      "longitude": 111.7506,
      "country_code": "CN"
    },
    {
      "city": "Chengjiao",
      "latitude": 35.4043,
      "longitude": 114.0593,
      "country_code": "CN"
    },
    {
      "city": "Beipiao",
      "latitude": 41.802,
      "longitude": 120.7621,
      "country_code": "CN"
    },
    {
      "city": "Murrieta",
      "latitude": 33.572,
      "longitude": -117.1909,
      "country_code": "US"
    },
    {
      "city": "Kota Bharu",
      "latitude": 6.1333,
      "longitude": 102.25,
      "country_code": "MY"
    },
    {
      "city": "Heshan",
      "latitude": 22.7697,
      "longitude": 112.9578,
      "country_code": "CN"
    },
    {
      "city": "Ciudad López Mateos",
      "latitude": 19.55,
      "longitude": -99.2833,
      "country_code": "MX"
    },
    {
      "city": "Vinh",
      "latitude": 18.6733,
      "longitude": 105.6922,
      "country_code": "VN"
    },
    {
      "city": "Tultitlán de Mariano Escobedo",
      "latitude": 19.645,
      "longitude": -99.1694,
      "country_code": "MX"
    },
    {
      "city": "Duyun",
      "latitude": 26.2672,
      "longitude": 107.5143,
      "country_code": "CN"
    },
    {
      "city": "Encheng",
      "latitude": 22.1879,
      "longitude": 112.3131,
      "country_code": "CN"
    },
    {
      "city": "Nishinomiya-hama",
      "latitude": 34.7333,
      "longitude": 135.3333,
      "country_code": "JP"
    },
    {
      "city": "Kandahār",
      "latitude": 31.6078,
      "longitude": 65.7053,
      "country_code": "AF"
    },
    {
      "city": "Cheboksary",
      "latitude": 56.1333,
      "longitude": 47.25,
      "country_code": "RU"
    },
    {
      "city": "Yuanping",
      "latitude": 38.7299,
      "longitude": 112.7134,
      "country_code": "CN"
    },
    {
      "city": "Port Sudan",
      "latitude": 19.6158,
      "longitude": 37.2164,
      "country_code": "SD"
    },
    {
      "city": "Valledupar",
      "latitude": 10.4603,
      "longitude": -73.2597,
      "country_code": "CO"
    },
    {
      "city": "Edinburgh",
      "latitude": 55.953,
      "longitude": -3.189,
      "country_code": "GB"
    },
    {
      "city": "Belgaum",
      "latitude": 15.8667,
      "longitude": 74.5,
      "country_code": "IN"
    },
    {
      "city": "Tula",
      "latitude": 54.2,
      "longitude": 37.6167,
      "country_code": "RU"
    },
    {
      "city": "Taozhou",
      "latitude": 30.8956,
      "longitude": 119.411,
      "country_code": "CN"
    },
    {
      "city": "Suez",
      "latitude": 29.9667,
      "longitude": 32.5333,
      "country_code": "EG"
    },
    {
      "city": "Shahe",
      "latitude": 36.8622,
      "longitude": 114.502,
      "country_code": "CN"
    },
    {
      "city": "Yazd",
      "latitude": 31.8972,
      "longitude": 54.3678,
      "country_code": "IR"
    },
    {
      "city": "Nazrēt",
      "latitude": 8.55,
      "longitude": 39.27,
      "country_code": "ET"
    },
    {
      "city": "Gaoping",
      "latitude": 35.7911,
      "longitude": 112.9259,
      "country_code": "CN"
    },
    {
      "city": "Brookhaven",
      "latitude": 40.8321,
      "longitude": -72.9518,
      "country_code": "US"
    },
    {
      "city": "Greenville",
      "latitude": 34.8353,
      "longitude": -82.3647,
      "country_code": "US"
    },
    {
      "city": "Arāk",
      "latitude": 34.08,
      "longitude": 49.7,
      "country_code": "IR"
    },
    {
      "city": "San Nicolás de los Garza",
      "latitude": 25.75,
      "longitude": -100.2833,
      "country_code": "MX"
    },
    {
      "city": "Gulbarga",
      "latitude": 17.3333,
      "longitude": 76.8333,
      "country_code": "IN"
    },
    {
      "city": "Juiz de Fora",
      "latitude": -21.7642,
      "longitude": -43.3503,
      "country_code": "BR"
    },
    {
      "city": "Dunhua",
      "latitude": 43.3667,
      "longitude": 128.2333,
      "country_code": "CN"
    },
    {
      "city": "Feira de Santana",
      "latitude": -12.25,
      "longitude": -38.97,
      "country_code": "BR"
    },
    {
      "city": "Jiaji",
      "latitude": 19.2431,
      "longitude": 110.4642,
      "country_code": "CN"
    },
    {
      "city": "Az Zarqā’",
      "latitude": 32.0833,
      "longitude": 36.1,
      "country_code": "JO"
    },
    {
      "city": "Americana",
      "latitude": -22.7392,
      "longitude": -47.3314,
      "country_code": "BR"
    },
    {
      "city": "Ardabīl",
      "latitude": 38.25,
      "longitude": 48.3,
      "country_code": "IR"
    },
    {
      "city": "Sylhet",
      "latitude": 24.9,
      "longitude": 91.8667,
      "country_code": "BD"
    },
    {
      "city": "Wichita",
      "latitude": 37.6896,
      "longitude": -97.3442,
      "country_code": "US"
    },
    {
      "city": "Toledo",
      "latitude": 41.6639,
      "longitude": -83.5822,
      "country_code": "US"
    },
    {
      "city": "Kaihua",
      "latitude": 23.3715,
      "longitude": 104.2437,
      "country_code": "CN"
    },
    {
      "city": "Caerdydd",
      "latitude": 51.4833,
      "longitude": -3.1833,
      "country_code": "GB"
    },
    {
      "city": "Jāmnagar",
      "latitude": 22.47,
      "longitude": 70.07,
      "country_code": "IN"
    },
    {
      "city": "Fuyuan",
      "latitude": 48.3614,
      "longitude": 134.2875,
      "country_code": "CN"
    },
    {
      "city": "Dhūlia",
      "latitude": 20.9,
      "longitude": 74.7833,
      "country_code": "IN"
    },
    {
      "city": "Nampula",
      "latitude": -15.1167,
      "longitude": 39.2667,
      "country_code": "MZ"
    },
    {
      "city": "Gaya",
      "latitude": 24.75,
      "longitude": 85.0167,
      "country_code": "IN"
    },
    {
      "city": "Piraeus",
      "latitude": 37.95,
      "longitude": 23.7,
      "country_code": "GR"
    },
    {
      "city": "Ōita",
      "latitude": 33.2333,
      "longitude": 131.6067,
      "country_code": "JP"
    },
    {
      "city": "Florianópolis",
      "latitude": -27.5933,
      "longitude": -48.553,
      "country_code": "BR"
    },
    {
      "city": "Chiniot",
      "latitude": 31.7167,
      "longitude": 72.9833,
      "country_code": "PK"
    },
    {
      "city": "Jiannan",
      "latitude": 31.3446,
      "longitude": 104.1994,
      "country_code": "CN"
    },
    {
      "city": "Wuhai",
      "latitude": 39.6708,
      "longitude": 106.8114,
      "country_code": "CN"
    },
    {
      "city": "Kaliningrad",
      "latitude": 54.7167,
      "longitude": 20.5,
      "country_code": "RU"
    },
    {
      "city": "Sukkur",
      "latitude": 27.6995,
      "longitude": 68.8673,
      "country_code": "PK"
    },
    {
      "city": "Nangong",
      "latitude": 37.3606,
      "longitude": 115.3803,
      "country_code": "CN"
    },
    {
      "city": "Staten Island",
      "latitude": 40.5834,
      "longitude": -74.1496,
      "country_code": "US"
    },
    {
      "city": "San Juan",
      "latitude": -31.5375,
      "longitude": -68.5364,
      "country_code": "AR"
    },
    {
      "city": "Vila Velha",
      "latitude": -20.3364,
      "longitude": -40.2936,
      "country_code": "BR"
    },
    {
      "city": "Macapá",
      "latitude": 0.033,
      "longitude": -51.0653,
      "country_code": "BR"
    },
    {
      "city": "Des Moines",
      "latitude": 41.5725,
      "longitude": -93.6105,
      "country_code": "US"
    },
    {
      "city": "Piura",
      "latitude": -5.2008,
      "longitude": -80.6253,
      "country_code": "PE"
    },
    {
      "city": "Jiaojiangcun",
      "latitude": 28.6804,
      "longitude": 121.45,
      "country_code": "CN"
    },
    {
      "city": "Laohekou",
      "latitude": 32.3849,
      "longitude": 111.6695,
      "country_code": "CN"
    },
    {
      "city": "Fujin",
      "latitude": 47.2489,
      "longitude": 132.0341,
      "country_code": "CN"
    },
    {
      "city": "Beian",
      "latitude": 48.2395,
      "longitude": 126.5037,
      "country_code": "CN"
    },
    {
      "city": "Celaya",
      "latitude": 20.5222,
      "longitude": -100.8122,
      "country_code": "MX"
    },
    {
      "city": "Xiaoyi",
      "latitude": 37.1449,
      "longitude": 111.7718,
      "country_code": "CN"
    },
    {
      "city": "Strasbourg",
      "latitude": 48.5833,
      "longitude": 7.7458,
      "country_code": "FR"
    },
    {
      "city": "Lanús",
      "latitude": -34.7,
      "longitude": -58.4,
      "country_code": "AR"
    },
    {
      "city": "Qingzhen",
      "latitude": 26.5555,
      "longitude": 106.4646,
      "country_code": "CN"
    },
    {
      "city": "Jiangshan",
      "latitude": 28.7412,
      "longitude": 118.6225,
      "country_code": "CN"
    },
    {
      "city": "Ba‘qūbah",
      "latitude": 33.7447,
      "longitude": 44.6436,
      "country_code": "IQ"
    },
    {
      "city": "Tamale",
      "latitude": 9.4075,
      "longitude": -0.8533,
      "country_code": "GH"
    },
    {
      "city": "Gdańsk",
      "latitude": 54.3667,
      "longitude": 18.6333,
      "country_code": "PL"
    },
    {
      "city": "Kanazawa",
      "latitude": 36.5667,
      "longitude": 136.65,
      "country_code": "JP"
    },
    {
      "city": "Manado",
      "latitude": 1.4931,
      "longitude": 124.8413,
      "country_code": "ID"
    },
    {
      "city": "Jinchang",
      "latitude": 38.5168,
      "longitude": 102.1866,
      "country_code": "CN"
    },
    {
      "city": "Calabar",
      "latitude": 4.95,
      "longitude": 8.325,
      "country_code": "NG"
    },
    {
      "city": "Fukuyama",
      "latitude": 34.4858,
      "longitude": 133.3625,
      "country_code": "JP"
    },
    {
      "city": "Long Beach",
      "latitude": 33.7981,
      "longitude": -118.1675,
      "country_code": "US"
    },
    {
      "city": "Malatya",
      "latitude": 38.3554,
      "longitude": 38.3337,
      "country_code": "TR"
    },
    {
      "city": "Huế",
      "latitude": 16.4667,
      "longitude": 107.5833,
      "country_code": "VN"
    },
    {
      "city": "Jalgaon",
      "latitude": 21.0167,
      "longitude": 75.5667,
      "country_code": "IN"
    },
    {
      "city": "Port St. Lucie",
      "latitude": 27.2796,
      "longitude": -80.3883,
      "country_code": "US"
    },
    {
      "city": "Mauá",
      "latitude": -23.6678,
      "longitude": -46.4608,
      "country_code": "BR"
    },
    {
      "city": "Montería",
      "latitude": 8.76,
      "longitude": -75.8856,
      "country_code": "CO"
    },
    {
      "city": "Tel Aviv-Yafo",
      "latitude": 32.0833,
      "longitude": 34.8,
      "country_code": "IL"
    },
    {
      "city": "Xicheng",
      "latitude": 23.3629,
      "longitude": 103.1545,
      "country_code": "CN"
    },
    {
      "city": "Marikina City",
      "latitude": 14.65,
      "longitude": 121.1,
      "country_code": "PH"
    },
    {
      "city": "Pyeongtaek",
      "latitude": 36.9947,
      "longitude": 127.0889,
      "country_code": "KR"
    },
    {
      "city": "Kurnool",
      "latitude": 15.8222,
      "longitude": 78.035,
      "country_code": "IN"
    },
    {
      "city": "Sfax",
      "latitude": 34.75,
      "longitude": 10.72,
      "country_code": "TN"
    },
    {
      "city": "City of Calamba",
      "latitude": 14.2167,
      "longitude": 121.1667,
      "country_code": "PH"
    },
    {
      "city": "Denton",
      "latitude": 33.2176,
      "longitude": -97.1419,
      "country_code": "US"
    },
    {
      "city": "Ar Ramādī",
      "latitude": 33.4167,
      "longitude": 43.3,
      "country_code": "IQ"
    },
    {
      "city": "Melaka",
      "latitude": 2.1889,
      "longitude": 102.2511,
      "country_code": "MY"
    },
    {
      "city": "Volta Redonda",
      "latitude": -22.5196,
      "longitude": -44.095,
      "country_code": "BR"
    },
    {
      "city": "Jian’ou",
      "latitude": 27.0387,
      "longitude": 118.3215,
      "country_code": "CN"
    },
    {
      "city": "Shenmu",
      "latitude": 38.8389,
      "longitude": 110.4896,
      "country_code": "CN"
    },
    {
      "city": "Huadian",
      "latitude": 42.9688,
      "longitude": 126.7388,
      "country_code": "CN"
    },
    {
      "city": "Taoyuan District",
      "latitude": 24.9889,
      "longitude": 121.3111,
      "country_code": "TW"
    },
    {
      "city": "Iloilo",
      "latitude": 10.7167,
      "longitude": 122.5667,
      "country_code": "PH"
    },
    {
      "city": "Kota Kinabalu",
      "latitude": 5.975,
      "longitude": 116.0725,
      "country_code": "MY"
    },
    {
      "city": "Minzhu",
      "latitude": 43.7192,
      "longitude": 127.337,
      "country_code": "CN"
    },
    {
      "city": "Rājshāhi",
      "latitude": 24.3667,
      "longitude": 88.6,
      "country_code": "BD"
    },
    {
      "city": "Ţanţā",
      "latitude": 30.7833,
      "longitude": 31,
      "country_code": "EG"
    },
    {
      "city": "Balashikha",
      "latitude": 55.8,
      "longitude": 37.95,
      "country_code": "RU"
    },
    {
      "city": "Udaipur",
      "latitude": 24.5833,
      "longitude": 73.6833,
      "country_code": "IN"
    },
    {
      "city": "Kursk",
      "latitude": 51.7372,
      "longitude": 36.1872,
      "country_code": "RU"
    },
    {
      "city": "Mariupol",
      "latitude": 47.1306,
      "longitude": 37.5639,
      "country_code": "UA"
    },
    {
      "city": "Bukavu",
      "latitude": -2.5,
      "longitude": 28.8667,
      "country_code": "CD"
    },
    {
      "city": "Hsinchu",
      "latitude": 24.8047,
      "longitude": 120.9714,
      "country_code": "TW"
    },
    {
      "city": "Barcelona",
      "latitude": 10.1333,
      "longitude": -64.6833,
      "country_code": "VE"
    },
    {
      "city": "Constantine",
      "latitude": 36.365,
      "longitude": 6.6147,
      "country_code": "DZ"
    },
    {
      "city": "Tanbei",
      "latitude": 35.0907,
      "longitude": 112.9317,
      "country_code": "CN"
    },
    {
      "city": "Ado-Ekiti",
      "latitude": 7.6167,
      "longitude": 5.2167,
      "country_code": "NG"
    },
    {
      "city": "Batman",
      "latitude": 37.8833,
      "longitude": 41.1333,
      "country_code": "TR"
    },
    {
      "city": "Pasay City",
      "latitude": 14.55,
      "longitude": 121,
      "country_code": "PH"
    },
    {
      "city": "Madison",
      "latitude": 43.0826,
      "longitude": -89.3931,
      "country_code": "US"
    },
    {
      "city": "Pingquan",
      "latitude": 41.0042,
      "longitude": 118.6848,
      "country_code": "CN"
    },
    {
      "city": "Baisha",
      "latitude": 29.4774,
      "longitude": 119.2853,
      "country_code": "CN"
    },
    {
      "city": "Bellary",
      "latitude": 15.15,
      "longitude": 76.915,
      "country_code": "IN"
    },
    {
      "city": "Santiago de Cuba",
      "latitude": 20.0283,
      "longitude": -75.8206,
      "country_code": "CU"
    },
    {
      "city": "Yongji",
      "latitude": 34.867,
      "longitude": 110.4417,
      "country_code": "CN"
    },
    {
      "city": "Reno",
      "latitude": 39.5497,
      "longitude": -119.8483,
      "country_code": "US"
    },
    {
      "city": "Danjiangkou",
      "latitude": 32.5408,
      "longitude": 111.5098,
      "country_code": "CN"
    },
    {
      "city": "Kahramanmaraş",
      "latitude": 37.5875,
      "longitude": 36.9453,
      "country_code": "TR"
    },
    {
      "city": "São José do Rio Prêto",
      "latitude": -20.82,
      "longitude": -49.3789,
      "country_code": "BR"
    },
    {
      "city": "Andijon",
      "latitude": 40.7,
      "longitude": 72.35,
      "country_code": "UZ"
    },
    {
      "city": "Harrisburg",
      "latitude": 40.2752,
      "longitude": -76.8843,
      "country_code": "US"
    },
    {
      "city": "Nancy",
      "latitude": 48.6936,
      "longitude": 6.1846,
      "country_code": "FR"
    },
    {
      "city": "Al Manşūrah",
      "latitude": 31.05,
      "longitude": 31.3833,
      "country_code": "EG"
    },
    {
      "city": "Machida",
      "latitude": 35.5486,
      "longitude": 139.4467,
      "country_code": "JP"
    },
    {
      "city": "Ning’an",
      "latitude": 44.3429,
      "longitude": 129.4621,
      "country_code": "CN"
    },
    {
      "city": "Beira",
      "latitude": -19.8333,
      "longitude": 34.85,
      "country_code": "MZ"
    },
    {
      "city": "Little Rock",
      "latitude": 34.7256,
      "longitude": -92.3576,
      "country_code": "US"
    },
    {
      "city": "Zürich",
      "latitude": 47.3786,
      "longitude": 8.54,
      "country_code": "CH"
    },
    {
      "city": "Zhangjiakou Shi Xuanhua Qu",
      "latitude": 40.5944,
      "longitude": 115.0243,
      "country_code": "CN"
    },
    {
      "city": "Sunch’ŏn",
      "latitude": 39.4167,
      "longitude": 125.9333,
      "country_code": "KP"
    },
    {
      "city": "Diadema",
      "latitude": -23.6858,
      "longitude": -46.6228,
      "country_code": "BR"
    },
    {
      "city": "Guangming",
      "latitude": 45.3357,
      "longitude": 122.7765,
      "country_code": "CN"
    },
    {
      "city": "Sāngli",
      "latitude": 16.8667,
      "longitude": 74.5667,
      "country_code": "IN"
    },
    {
      "city": "Tuticorin",
      "latitude": 8.7833,
      "longitude": 78.1333,
      "country_code": "IN"
    },
    {
      "city": "Herāt",
      "latitude": 34.3738,
      "longitude": 62.1792,
      "country_code": "AF"
    },
    {
      "city": "Kupang",
      "latitude": -10.1633,
      "longitude": 123.5778,
      "country_code": "ID"
    },
    {
      "city": "Larkana",
      "latitude": 27.56,
      "longitude": 68.2264,
      "country_code": "PK"
    },
    {
      "city": "Jeju",
      "latitude": 33.5097,
      "longitude": 126.5219,
      "country_code": "KR"
    },
    {
      "city": "Bandar ‘Abbās",
      "latitude": 27.2,
      "longitude": 56.25,
      "country_code": "IR"
    },
    {
      "city": "Santos",
      "latitude": -23.9608,
      "longitude": -46.3339,
      "country_code": "BR"
    },
    {
      "city": "Stavropol",
      "latitude": 45.05,
      "longitude": 41.9833,
      "country_code": "RU"
    },
    {
      "city": "Katsina",
      "latitude": 12.9908,
      "longitude": 7.6017,
      "country_code": "NG"
    },
    {
      "city": "Yogyakarta",
      "latitude": -7.8014,
      "longitude": 110.3644,
      "country_code": "ID"
    },
    {
      "city": "Calicut",
      "latitude": 11.25,
      "longitude": 75.7667,
      "country_code": "IN"
    },
    {
      "city": "Zanjān",
      "latitude": 36.6667,
      "longitude": 48.4833,
      "country_code": "IR"
    },
    {
      "city": "Welkom",
      "latitude": -27.9831,
      "longitude": 26.7208,
      "country_code": "ZA"
    },
    {
      "city": "Ulan-Ude",
      "latitude": 51.8272,
      "longitude": 107.6064,
      "country_code": "RU"
    },
    {
      "city": "Oakland",
      "latitude": 37.7903,
      "longitude": -122.2165,
      "country_code": "US"
    },
    {
      "city": "Kashiwa",
      "latitude": 35.8544,
      "longitude": 139.9689,
      "country_code": "JP"
    },
    {
      "city": "Mazār-e Sharīf",
      "latitude": 36.7,
      "longitude": 67.1167,
      "country_code": "AF"
    },
    {
      "city": "Kāshān",
      "latitude": 33.9833,
      "longitude": 51.4333,
      "country_code": "IR"
    },
    {
      "city": "Kenitra",
      "latitude": 34.25,
      "longitude": -6.5833,
      "country_code": "MA"
    },
    {
      "city": "Khamīs Mushayţ",
      "latitude": 18.3,
      "longitude": 42.7333,
      "country_code": "SA"
    },
    {
      "city": "Masan",
      "latitude": 35.1833,
      "longitude": 128.55,
      "country_code": "KR"
    },
    {
      "city": "Cusco",
      "latitude": -13.5183,
      "longitude": -71.9781,
      "country_code": "PE"
    },
    {
      "city": "Sevastopol",
      "latitude": 44.6,
      "longitude": 33.5333,
      "country_code": "UA"
    },
    {
      "city": "Mandaluyong City",
      "latitude": 14.5833,
      "longitude": 121.0333,
      "country_code": "PH"
    },
    {
      "city": "Kihŭng",
      "latitude": 37.4167,
      "longitude": 127.1167,
      "country_code": "KR"
    },
    {
      "city": "Toyota",
      "latitude": 35.0833,
      "longitude": 137.1567,
      "country_code": "JP"
    },
    {
      "city": "Akola",
      "latitude": 20.7333,
      "longitude": 77,
      "country_code": "IN"
    },
    {
      "city": "Yan’an Beilu",
      "latitude": 44.0222,
      "longitude": 87.2961,
      "country_code": "CN"
    },
    {
      "city": "Agadir",
      "latitude": 30.4167,
      "longitude": -9.5833,
      "country_code": "MA"
    },
    {
      "city": "Mogi das Cruzes",
      "latitude": -23.5228,
      "longitude": -46.1931,
      "country_code": "BR"
    },
    {
      "city": "Durham",
      "latitude": 35.9794,
      "longitude": -78.9031,
      "country_code": "US"
    },
    {
      "city": "Likasi",
      "latitude": -10.9833,
      "longitude": 26.7333,
      "country_code": "CD"
    },
    {
      "city": "Laval",
      "latitude": 45.5833,
      "longitude": -73.75,
      "country_code": "CA"
    },
    {
      "city": "Winston-Salem",
      "latitude": 36.1029,
      "longitude": -80.2611,
      "country_code": "US"
    },
    {
      "city": "Uijeongbu",
      "latitude": 37.7486,
      "longitude": 127.0389,
      "country_code": "KR"
    },
    {
      "city": "Tver",
      "latitude": 56.8578,
      "longitude": 35.9219,
      "country_code": "RU"
    },
    {
      "city": "Elazığ",
      "latitude": 38.6667,
      "longitude": 39.2167,
      "country_code": "TR"
    },
    {
      "city": "Akure",
      "latitude": 7.25,
      "longitude": 5.195,
      "country_code": "NG"
    },
    {
      "city": "Kumi",
      "latitude": 36.21,
      "longitude": 128.3544,
      "country_code": "KR"
    },
    {
      "city": "Hpa-An",
      "latitude": 16.8906,
      "longitude": 97.6333,
      "country_code": "MM"
    },
    {
      "city": "Bonita Springs",
      "latitude": 26.3559,
      "longitude": -81.7861,
      "country_code": "US"
    },
    {
      "city": "Hailin",
      "latitude": 44.5735,
      "longitude": 129.3825,
      "country_code": "CN"
    },
    {
      "city": "Seremban",
      "latitude": 2.7297,
      "longitude": 101.9381,
      "country_code": "MY"
    },
    {
      "city": "Takamatsu",
      "latitude": 34.35,
      "longitude": 134.05,
      "country_code": "JP"
    },
    {
      "city": "Lecheng",
      "latitude": 25.1307,
      "longitude": 113.3472,
      "country_code": "CN"
    },
    {
      "city": "Zhengjiatun",
      "latitude": 43.513,
      "longitude": 123.5003,
      "country_code": "CN"
    },
    {
      "city": "Luhansk",
      "latitude": 48.5833,
      "longitude": 39.3333,
      "country_code": "UA"
    },
    {
      "city": "Pencheng",
      "latitude": 29.6792,
      "longitude": 115.6611,
      "country_code": "CN"
    },
    {
      "city": "Magnitogorsk",
      "latitude": 53.3833,
      "longitude": 59.0333,
      "country_code": "RU"
    },
    {
      "city": "Angeles City",
      "latitude": 15.1472,
      "longitude": 120.5847,
      "country_code": "PH"
    },
    {
      "city": "El Obeid",
      "latitude": 13.1833,
      "longitude": 30.2167,
      "country_code": "SD"
    },
    {
      "city": "Dalai",
      "latitude": 45.505,
      "longitude": 124.2863,
      "country_code": "CN"
    },
    {
      "city": "Xingren",
      "latitude": 25.4352,
      "longitude": 105.1907,
      "country_code": "CN"
    },
    {
      "city": "Palma",
      "latitude": 39.5667,
      "longitude": 2.6497,
      "country_code": "ES"
    },
    {
      "city": "Kolwezi",
      "latitude": -10.7167,
      "longitude": 25.4667,
      "country_code": "CD"
    },
    {
      "city": "Wenlan",
      "latitude": 23.3689,
      "longitude": 103.3881,
      "country_code": "CN"
    },
    {
      "city": "Indio",
      "latitude": 33.7346,
      "longitude": -116.2346,
      "country_code": "US"
    },
    {
      "city": "Palm Coast",
      "latitude": 29.5392,
      "longitude": -81.246,
      "country_code": "US"
    },
    {
      "city": "Arusha",
      "latitude": -3.3667,
      "longitude": 36.6833,
      "country_code": "TZ"
    },
    {
      "city": "Fenyang",
      "latitude": 37.2652,
      "longitude": 111.7793,
      "country_code": "CN"
    },
    {
      "city": "Toyama",
      "latitude": 36.7,
      "longitude": 137.22,
      "country_code": "JP"
    },
    {
      "city": "Paju",
      "latitude": 37.8328,
      "longitude": 126.8169,
      "country_code": "KR"
    },
    {
      "city": "Mataram",
      "latitude": -8.5833,
      "longitude": 116.1167,
      "country_code": "ID"
    },
    {
      "city": "Chattanooga",
      "latitude": 35.0657,
      "longitude": -85.2488,
      "country_code": "US"
    },
    {
      "city": "Lapu-Lapu City",
      "latitude": 10.315,
      "longitude": 123.9761,
      "country_code": "PH"
    },
    {
      "city": "Nagqu",
      "latitude": 31.4766,
      "longitude": 92.0569,
      "country_code": "CN"
    },
    {
      "city": "Kisumu",
      "latitude": -0.1,
      "longitude": 34.75,
      "country_code": "KE"
    },
    {
      "city": "Jayapura",
      "latitude": -2.5333,
      "longitude": 140.7167,
      "country_code": "ID"
    },
    {
      "city": "Fangting",
      "latitude": 31.1282,
      "longitude": 104.1695,
      "country_code": "CN"
    },
    {
      "city": "Nagasaki",
      "latitude": 32.7833,
      "longitude": 129.8667,
      "country_code": "JP"
    },
    {
      "city": "Spokane",
      "latitude": 47.6671,
      "longitude": -117.433,
      "country_code": "US"
    },
    {
      "city": "Shekhupura",
      "latitude": 31.7083,
      "longitude": 74,
      "country_code": "PK"
    },
    {
      "city": "Sochi",
      "latitude": 43.5853,
      "longitude": 39.7203,
      "country_code": "RU"
    },
    {
      "city": "Bhāgalpur",
      "latitude": 25.25,
      "longitude": 87.0167,
      "country_code": "IN"
    },
    {
      "city": "Ipatinga",
      "latitude": -19.4796,
      "longitude": -42.52,
      "country_code": "BR"
    },
    {
      "city": "Ivanovo",
      "latitude": 57,
      "longitude": 41,
      "country_code": "RU"
    },
    {
      "city": "Osogbo",
      "latitude": 7.7667,
      "longitude": 4.5667,
      "country_code": "NG"
    },
    {
      "city": "Imus",
      "latitude": 14.4297,
      "longitude": 120.9367,
      "country_code": "PH"
    },
    {
      "city": "Ciudad Obregón",
      "latitude": 27.4939,
      "longitude": -109.9389,
      "country_code": "MX"
    },
    {
      "city": "Türkmenabat",
      "latitude": 39.1,
      "longitude": 63.5667,
      "country_code": "TM"
    },
    {
      "city": "Namangan",
      "latitude": 40.9953,
      "longitude": 71.6725,
      "country_code": "UZ"
    },
    {
      "city": "Bryansk",
      "latitude": 53.25,
      "longitude": 34.3667,
      "country_code": "RU"
    },
    {
      "city": "Basuo",
      "latitude": 19.1,
      "longitude": 108.65,
      "country_code": "CN"
    },
    {
      "city": "Taiping",
      "latitude": 32.0691,
      "longitude": 108.0351,
      "country_code": "CN"
    },
    {
      "city": "Maracay",
      "latitude": 10.2469,
      "longitude": -67.5958,
      "country_code": "VE"
    },
    {
      "city": "Murcia",
      "latitude": 37.9866,
      "longitude": -1.1415,
      "country_code": "ES"
    },
    {
      "city": "Jiexiu",
      "latitude": 37.0282,
      "longitude": 111.9103,
      "country_code": "CN"
    },
    {
      "city": "Mbale",
      "latitude": 1.0806,
      "longitude": 34.175,
      "country_code": "UG"
    },
    {
      "city": "Taraz",
      "latitude": 42.8833,
      "longitude": 71.3667,
      "country_code": "KZ"
    },
    {
      "city": "Asyūţ",
      "latitude": 27.1869,
      "longitude": 31.1714,
      "country_code": "EG"
    },
    {
      "city": "Santa Fe",
      "latitude": -31.6333,
      "longitude": -60.7,
      "country_code": "AR"
    },
    {
      "city": "Campina Grande",
      "latitude": -7.2306,
      "longitude": -35.8811,
      "country_code": "BR"
    },
    {
      "city": "Szczecin",
      "latitude": 53.4247,
      "longitude": 14.5553,
      "country_code": "PL"
    },
    {
      "city": "Ghulja",
      "latitude": 43.9,
      "longitude": 81.35,
      "country_code": "CN"
    },
    {
      "city": "Syracuse",
      "latitude": 43.0409,
      "longitude": -76.1438,
      "country_code": "US"
    },
    {
      "city": "Carapicuíba",
      "latitude": -23.5228,
      "longitude": -46.8358,
      "country_code": "BR"
    },
    {
      "city": "Gifu",
      "latitude": 35.4167,
      "longitude": 136.7667,
      "country_code": "JP"
    },
    {
      "city": "Quilon",
      "latitude": 8.8853,
      "longitude": 76.5864,
      "country_code": "IN"
    },
    {
      "city": "Jundiaí",
      "latitude": -23.1864,
      "longitude": -46.8842,
      "country_code": "BR"
    },
    {
      "city": "Lancaster",
      "latitude": 40.0421,
      "longitude": -76.3012,
      "country_code": "US"
    },
    {
      "city": "Eindhoven",
      "latitude": 51.43,
      "longitude": 5.5,
      "country_code": "NL"
    },
    {
      "city": "Sīkar",
      "latitude": 27.6119,
      "longitude": 75.1397,
      "country_code": "IN"
    },
    {
      "city": "Tumkūr",
      "latitude": 13.33,
      "longitude": 77.1,
      "country_code": "IN"
    },
    {
      "city": "Jiangjiafan",
      "latitude": 31.0304,
      "longitude": 112.1,
      "country_code": "CN"
    },
    {
      "city": "Miyazaki",
      "latitude": 31.9167,
      "longitude": 131.4167,
      "country_code": "JP"
    },
    {
      "city": "Arlington",
      "latitude": 32.6998,
      "longitude": -97.125,
      "country_code": "US"
    },
    {
      "city": "Stockton",
      "latitude": 37.9765,
      "longitude": -121.3109,
      "country_code": "US"
    },
    {
      "city": "Bhātpāra",
      "latitude": 22.8667,
      "longitude": 88.4167,
      "country_code": "IN"
    },
    {
      "city": "Sandakan",
      "latitude": 5.8388,
      "longitude": 118.1173,
      "country_code": "MY"
    },
    {
      "city": "Hejin",
      "latitude": 35.5914,
      "longitude": 110.706,
      "country_code": "CN"
    },
    {
      "city": "Thanh Hóa",
      "latitude": 19.8075,
      "longitude": 105.7764,
      "country_code": "VN"
    },
    {
      "city": "Muzaffarnagar",
      "latitude": 29.4708,
      "longitude": 77.7033,
      "country_code": "IN"
    },
    {
      "city": "Poughkeepsie",
      "latitude": 41.6949,
      "longitude": -73.921,
      "country_code": "US"
    },
    {
      "city": "Comilla",
      "latitude": 23.4704,
      "longitude": 91.17,
      "country_code": "BD"
    },
    {
      "city": "Metz",
      "latitude": 49.1203,
      "longitude": 6.1778,
      "country_code": "FR"
    },
    {
      "city": "Campos",
      "latitude": -21.7523,
      "longitude": -41.3304,
      "country_code": "BR"
    },
    {
      "city": "Nha Trang",
      "latitude": 12.25,
      "longitude": 109.1833,
      "country_code": "VN"
    },
    {
      "city": "Belgorod",
      "latitude": 50.6,
      "longitude": 36.6,
      "country_code": "RU"
    },
    {
      "city": "Yola",
      "latitude": 9.2,
      "longitude": 12.4833,
      "country_code": "NG"
    },
    {
      "city": "Minamisuita",
      "latitude": 34.7667,
      "longitude": 135.5167,
      "country_code": "JP"
    },
    {
      "city": "San Lorenzo",
      "latitude": -25.3431,
      "longitude": -57.5094,
      "country_code": "PY"
    },
    {
      "city": "Ad Dīwānīyah",
      "latitude": 31.9892,
      "longitude": 44.9247,
      "country_code": "IQ"
    },
    {
      "city": "Hancheng",
      "latitude": 35.4603,
      "longitude": 110.4292,
      "country_code": "CN"
    },
    {
      "city": "Fuyu",
      "latitude": 45.1804,
      "longitude": 124.82,
      "country_code": "CN"
    },
    {
      "city": "Bologna",
      "latitude": 44.4939,
      "longitude": 11.3428,
      "country_code": "IT"
    },
    {
      "city": "Karamay",
      "latitude": 45.5928,
      "longitude": 84.8711,
      "country_code": "CN"
    },
    {
      "city": "Kākināda",
      "latitude": 16.9333,
      "longitude": 82.2167,
      "country_code": "IN"
    },
    {
      "city": "Augusta",
      "latitude": 33.3645,
      "longitude": -82.0708,
      "country_code": "US"
    },
    {
      "city": "Bhīlwāra",
      "latitude": 25.35,
      "longitude": 74.6333,
      "country_code": "IN"
    },
    {
      "city": "Caxias do Sul",
      "latitude": -29.18,
      "longitude": -51.17,
      "country_code": "BR"
    },
    {
      "city": "Tieli",
      "latitude": 46.9804,
      "longitude": 128.045,
      "country_code": "CN"
    },
    {
      "city": "Cilegon",
      "latitude": -6.0027,
      "longitude": 106.0112,
      "country_code": "ID"
    },
    {
      "city": "Baicheng",
      "latitude": 45.6148,
      "longitude": 122.832,
      "country_code": "CN"
    },
    {
      "city": "Nizāmābād",
      "latitude": 18.6704,
      "longitude": 78.1,
      "country_code": "IN"
    },
    {
      "city": "Boise",
      "latitude": 43.6007,
      "longitude": -116.2312,
      "country_code": "US"
    },
    {
      "city": "Tonalá",
      "latitude": 20.6167,
      "longitude": -103.2333,
      "country_code": "MX"
    },
    {
      "city": "Okazaki",
      "latitude": 34.95,
      "longitude": 137.1667,
      "country_code": "JP"
    },
    {
      "city": "Mwanza",
      "latitude": -2.5167,
      "longitude": 32.9,
      "country_code": "TZ"
    },
    {
      "city": "Aqtöbe",
      "latitude": 50.3,
      "longitude": 57.1667,
      "country_code": "KZ"
    },
    {
      "city": "Plovdiv",
      "latitude": 42.1433,
      "longitude": 24.7489,
      "country_code": "BG"
    },
    {
      "city": "Oxnard",
      "latitude": 34.1963,
      "longitude": -119.1815,
      "country_code": "US"
    },
    {
      "city": "Tétouan",
      "latitude": 35.5667,
      "longitude": -5.3667,
      "country_code": "MA"
    },
    {
      "city": "Florence",
      "latitude": 43.7714,
      "longitude": 11.2542,
      "country_code": "IT"
    },
    {
      "city": "Ḩā’il",
      "latitude": 27.5236,
      "longitude": 41.7001,
      "country_code": "SA"
    },
    {
      "city": "Yidu",
      "latitude": 30.388,
      "longitude": 111.4505,
      "country_code": "CN"
    },
    {
      "city": "Lianzhou",
      "latitude": 24.7868,
      "longitude": 112.3735,
      "country_code": "CN"
    },
    {
      "city": "Scranton",
      "latitude": 41.4044,
      "longitude": -75.6649,
      "country_code": "US"
    },
    {
      "city": "London",
      "latitude": 42.9836,
      "longitude": -81.2497,
      "country_code": "CA"
    },
    {
      "city": "Las Palmas",
      "latitude": 28.1272,
      "longitude": -15.4314,
      "country_code": "ES"
    },
    {
      "city": "Rio Branco",
      "latitude": -9.9781,
      "longitude": -67.8117,
      "country_code": "BR"
    },
    {
      "city": "Modesto",
      "latitude": 37.6374,
      "longitude": -121.0028,
      "country_code": "US"
    },
    {
      "city": "Ichinomiya",
      "latitude": 35.3039,
      "longitude": 136.8031,
      "country_code": "JP"
    },
    {
      "city": "Brno",
      "latitude": 49.1953,
      "longitude": 16.6083,
      "country_code": "CZ"
    },
    {
      "city": "Kissimmee",
      "latitude": 28.3042,
      "longitude": -81.4164,
      "country_code": "US"
    },
    {
      "city": "Pasto",
      "latitude": 1.2136,
      "longitude": -77.2811,
      "country_code": "CO"
    },
    {
      "city": "Qazvīn",
      "latitude": 36.2688,
      "longitude": 50.0041,
      "country_code": "IR"
    },
    {
      "city": "Irapuato",
      "latitude": 20.6667,
      "longitude": -101.35,
      "country_code": "MX"
    },
    {
      "city": "Novi Sad",
      "latitude": 45.2644,
      "longitude": 19.8317,
      "country_code": "RS"
    },
    {
      "city": "Antofagasta",
      "latitude": -23.6464,
      "longitude": -70.398,
      "country_code": "CL"
    },
    {
      "city": "Shihezi",
      "latitude": 44.3,
      "longitude": 86.0333,
      "country_code": "CN"
    },
    {
      "city": "Shache",
      "latitude": 38.4261,
      "longitude": 77.25,
      "country_code": "CN"
    },
    {
      "city": "Pānihāti",
      "latitude": 22.69,
      "longitude": 88.37,
      "country_code": "IN"
    },
    {
      "city": "Huancayo",
      "latitude": -12.0667,
      "longitude": -75.2167,
      "country_code": "PE"
    },
    {
      "city": "Aurora",
      "latitude": 39.7087,
      "longitude": -104.7273,
      "country_code": "US"
    },
    {
      "city": "Malabon",
      "latitude": 14.6625,
      "longitude": 120.9567,
      "country_code": "PH"
    },
    {
      "city": "Parbhani",
      "latitude": 19.2704,
      "longitude": 76.76,
      "country_code": "IN"
    },
    {
      "city": "Usulután",
      "latitude": 13.35,
      "longitude": -88.45,
      "country_code": "SV"
    },
    {
      "city": "Youngstown",
      "latitude": 41.0993,
      "longitude": -80.6463,
      "country_code": "US"
    },
    {
      "city": "Christchurch",
      "latitude": -43.5309,
      "longitude": 172.6365,
      "country_code": "NZ"
    },
    {
      "city": "Hatay",
      "latitude": 36.2,
      "longitude": 36.15,
      "country_code": "TR"
    },
    {
      "city": "Iquitos",
      "latitude": -3.7333,
      "longitude": -73.25,
      "country_code": "PE"
    },
    {
      "city": "Sivas",
      "latitude": 39.75,
      "longitude": 37.0167,
      "country_code": "TR"
    },
    {
      "city": "Helixi",
      "latitude": 30.6267,
      "longitude": 118.9861,
      "country_code": "CN"
    },
    {
      "city": "A Coruña",
      "latitude": 43.3713,
      "longitude": -8.4188,
      "country_code": "ES"
    },
    {
      "city": "Manizales",
      "latitude": 5.06,
      "longitude": -75.52,
      "country_code": "CO"
    },
    {
      "city": "Manukau City",
      "latitude": -36.9833,
      "longitude": 174.8833,
      "country_code": "NZ"
    },
    {
      "city": "Stoke-on-Trent",
      "latitude": 53,
      "longitude": -2.1833,
      "country_code": "GB"
    },
    {
      "city": "Cumaná",
      "latitude": 10.45,
      "longitude": -64.1667,
      "country_code": "VE"
    },
    {
      "city": "Vinnytsia",
      "latitude": 49.2372,
      "longitude": 28.4672,
      "country_code": "UA"
    },
    {
      "city": "Rohtak",
      "latitude": 28.9,
      "longitude": 76.5667,
      "country_code": "IN"
    },
    {
      "city": "Lātūr",
      "latitude": 18.4004,
      "longitude": 76.57,
      "country_code": "IN"
    },
    {
      "city": "Toyohashi",
      "latitude": 34.7667,
      "longitude": 137.3833,
      "country_code": "JP"
    },
    {
      "city": "Sanandaj",
      "latitude": 35.3097,
      "longitude": 46.9989,
      "country_code": "IR"
    },
    {
      "city": "Nuevo Laredo",
      "latitude": 27.4861,
      "longitude": -99.5069,
      "country_code": "MX"
    },
    {
      "city": "Anguo",
      "latitude": 38.4177,
      "longitude": 115.3204,
      "country_code": "CN"
    },
    {
      "city": "Ambon",
      "latitude": -3.705,
      "longitude": 128.17,
      "country_code": "ID"
    },
    {
      "city": "Mandaue City",
      "latitude": 10.3333,
      "longitude": 123.9333,
      "country_code": "PH"
    },
    {
      "city": "Keelung",
      "latitude": 25.1283,
      "longitude": 121.7419,
      "country_code": "TW"
    },
    {
      "city": "Varna",
      "latitude": 43.2078,
      "longitude": 27.9169,
      "country_code": "BG"
    },
    {
      "city": "Lengshuijiang",
      "latitude": 27.6858,
      "longitude": 111.4279,
      "country_code": "CN"
    },
    {
      "city": "Rājapālaiyam",
      "latitude": 9.4204,
      "longitude": 77.58,
      "country_code": "IN"
    },
    {
      "city": "Nagano",
      "latitude": 36.6486,
      "longitude": 138.1928,
      "country_code": "JP"
    },
    {
      "city": "Az Zubayr",
      "latitude": 30.3892,
      "longitude": 47.7081,
      "country_code": "IQ"
    },
    {
      "city": "Al Qaţīf",
      "latitude": 26.5196,
      "longitude": 50.0115,
      "country_code": "SA"
    },
    {
      "city": "Cuernavaca",
      "latitude": 18.9186,
      "longitude": -99.2342,
      "country_code": "MX"
    },
    {
      "city": "Sanya",
      "latitude": 18.2536,
      "longitude": 109.5019,
      "country_code": "CN"
    },
    {
      "city": "Nicolás Romero",
      "latitude": 19.5833,
      "longitude": -99.3667,
      "country_code": "MX"
    },
    {
      "city": "Huichang",
      "latitude": 34.9136,
      "longitude": 112.7852,
      "country_code": "CN"
    },
    {
      "city": "Vitsyebsk",
      "latitude": 55.1833,
      "longitude": 30.1667,
      "country_code": "BY"
    },
    {
      "city": "Bauru",
      "latitude": -22.3147,
      "longitude": -49.0606,
      "country_code": "BR"
    },
    {
      "city": "Bochum",
      "latitude": 51.4833,
      "longitude": 7.2167,
      "country_code": "DE"
    },
    {
      "city": "Anápolis",
      "latitude": -16.3269,
      "longitude": -48.9528,
      "country_code": "BR"
    },
    {
      "city": "Coventry",
      "latitude": 52.4081,
      "longitude": -1.5106,
      "country_code": "GB"
    },
    {
      "city": "Zalantun",
      "latitude": 48.0033,
      "longitude": 122.7365,
      "country_code": "CN"
    },
    {
      "city": "Tecámac",
      "latitude": 19.7131,
      "longitude": -98.9683,
      "country_code": "MX"
    },
    {
      "city": "Jhang City",
      "latitude": 31.2681,
      "longitude": 72.3181,
      "country_code": "PK"
    },
    {
      "city": "Ciudad General Escobedo",
      "latitude": 25.7933,
      "longitude": -100.1583,
      "country_code": "MX"
    },
    {
      "city": "Wŏnsan",
      "latitude": 39.1475,
      "longitude": 127.4461,
      "country_code": "KP"
    },
    {
      "city": "Kocaeli",
      "latitude": 40.7656,
      "longitude": 29.9406,
      "country_code": "TR"
    },
    {
      "city": "Bengkulu",
      "latitude": -3.7956,
      "longitude": 102.2592,
      "country_code": "ID"
    },
    {
      "city": "Montes Claros",
      "latitude": -16.7322,
      "longitude": -43.8636,
      "country_code": "BR"
    },
    {
      "city": "Pétion-Ville",
      "latitude": 18.5098,
      "longitude": -72.2856,
      "country_code": "HT"
    },
    {
      "city": "Shuanghejiedao",
      "latitude": 30.3866,
      "longitude": 106.7756,
      "country_code": "CN"
    },
    {
      "city": "Bydgoszcz",
      "latitude": 53.1167,
      "longitude": 18,
      "country_code": "PL"
    },
    {
      "city": "Surgut",
      "latitude": 61.25,
      "longitude": 73.4333,
      "country_code": "RU"
    },
    {
      "city": "Donostia",
      "latitude": 43.3204,
      "longitude": -1.98,
      "country_code": "ES"
    },
    {
      "city": "Bobo-Dioulasso",
      "latitude": 11.1833,
      "longitude": -4.2833,
      "country_code": "BF"
    },
    {
      "city": "Umuahia",
      "latitude": 5.5333,
      "longitude": 7.4833,
      "country_code": "NG"
    },
    {
      "city": "Gedaref",
      "latitude": 14.0333,
      "longitude": 35.3833,
      "country_code": "SD"
    },
    {
      "city": "Palu",
      "latitude": -0.895,
      "longitude": 119.8594,
      "country_code": "ID"
    },
    {
      "city": "Santa Rosa",
      "latitude": 14.3167,
      "longitude": 121.1167,
      "country_code": "PH"
    },
    {
      "city": "Pokhara",
      "latitude": 28.2097,
      "longitude": 83.9853,
      "country_code": "NP"
    },
    {
      "city": "Mahilyow",
      "latitude": 53.9089,
      "longitude": 30.343,
      "country_code": "BY"
    },
    {
      "city": "Wudalianchi",
      "latitude": 48.6433,
      "longitude": 126.1408,
      "country_code": "CN"
    },
    {
      "city": "Sungai Petani",
      "latitude": 5.65,
      "longitude": 100.48,
      "country_code": "MY"
    },
    {
      "city": "Nam Định",
      "latitude": 20.42,
      "longitude": 106.1683,
      "country_code": "VN"
    },
    {
      "city": "Sinŭiju",
      "latitude": 40.1,
      "longitude": 124.4,
      "country_code": "KP"
    },
    {
      "city": "Hrodna",
      "latitude": 53.6667,
      "longitude": 23.8167,
      "country_code": "BY"
    },
    {
      "city": "Vladimir",
      "latitude": 56.1333,
      "longitude": 40.4167,
      "country_code": "RU"
    },
    {
      "city": "São Vicente",
      "latitude": -23.9633,
      "longitude": -46.3922,
      "country_code": "BR"
    },
    {
      "city": "Wakayama",
      "latitude": 34.2333,
      "longitude": 135.1667,
      "country_code": "JP"
    },
    {
      "city": "Yong’an",
      "latitude": 25.9733,
      "longitude": 117.3593,
      "country_code": "CN"
    },
    {
      "city": "Itaquaquecetuba",
      "latitude": -23.4864,
      "longitude": -46.3486,
      "country_code": "BR"
    },
    {
      "city": "Wuppertal",
      "latitude": 51.2667,
      "longitude": 7.1833,
      "country_code": "DE"
    },
    {
      "city": "Minatitlán",
      "latitude": 17.9833,
      "longitude": -94.55,
      "country_code": "MX"
    },
    {
      "city": "Nizhniy Tagil",
      "latitude": 57.9167,
      "longitude": 59.9667,
      "country_code": "RU"
    },
    {
      "city": "Nara",
      "latitude": 34.6833,
      "longitude": 135.7833,
      "country_code": "JP"
    },
    {
      "city": "Hongzhai",
      "latitude": 35.0476,
      "longitude": 104.6394,
      "country_code": "CN"
    },
    {
      "city": "Bilbao",
      "latitude": 43.2622,
      "longitude": -2.9533,
      "country_code": "ES"
    },
    {
      "city": "Haarlem",
      "latitude": 52.3804,
      "longitude": 4.63,
      "country_code": "NL"
    },
    {
      "city": "Pavlodar",
      "latitude": 52.3156,
      "longitude": 76.9564,
      "country_code": "KZ"
    },
    {
      "city": "Gimpo",
      "latitude": 37.6236,
      "longitude": 126.7142,
      "country_code": "KR"
    },
    {
      "city": "Rahimyar Khan",
      "latitude": 28.4202,
      "longitude": 70.2952,
      "country_code": "PK"
    },
    {
      "city": "Van",
      "latitude": 38.5019,
      "longitude": 43.4167,
      "country_code": "TR"
    },
    {
      "city": "Corrientes",
      "latitude": -27.4833,
      "longitude": -58.8167,
      "country_code": "AR"
    },
    {
      "city": "San Pedro",
      "latitude": 14.3583,
      "longitude": 121.0583,
      "country_code": "PH"
    },
    {
      "city": "Arkhangelsk",
      "latitude": 64.55,
      "longitude": 40.5333,
      "country_code": "RU"
    },
    {
      "city": "Licheng",
      "latitude": 24.4935,
      "longitude": 110.3902,
      "country_code": "CN"
    },
    {
      "city": "Cabimas",
      "latitude": 10.4,
      "longitude": -71.4333,
      "country_code": "VE"
    },
    {
      "city": "Yakeshi",
      "latitude": 49.2842,
      "longitude": 120.7283,
      "country_code": "CN"
    },
    {
      "city": "Baguio City",
      "latitude": 16.4152,
      "longitude": 120.5956,
      "country_code": "PH"
    },
    {
      "city": "Ahmadnagar",
      "latitude": 19.0833,
      "longitude": 74.7333,
      "country_code": "IN"
    },
    {
      "city": "Fayetteville",
      "latitude": 36.0713,
      "longitude": -94.166,
      "country_code": "US"
    },
    {
      "city": "Koshigaya",
      "latitude": 35.8911,
      "longitude": 139.7908,
      "country_code": "JP"
    },
    {
      "city": "Holguín",
      "latitude": 20.8883,
      "longitude": -76.2558,
      "country_code": "CU"
    },
    {
      "city": "Qo‘qon",
      "latitude": 40.5404,
      "longitude": 70.94,
      "country_code": "UZ"
    },
    {
      "city": "Anaheim",
      "latitude": 33.839,
      "longitude": -117.8572,
      "country_code": "US"
    },
    {
      "city": "Yingmen",
      "latitude": 39.83,
      "longitude": 97.73,
      "country_code": "CN"
    },
    {
      "city": "Piracicaba",
      "latitude": -22.725,
      "longitude": -47.6489,
      "country_code": "BR"
    },
    {
      "city": "Khorramābād",
      "latitude": 33.4667,
      "longitude": 48.35,
      "country_code": "IR"
    },
    {
      "city": "Rājahmundry",
      "latitude": 16.9833,
      "longitude": 81.7833,
      "country_code": "IN"
    },
    {
      "city": "Chita",
      "latitude": 52.0333,
      "longitude": 113.5,
      "country_code": "RU"
    },
    {
      "city": "Sārī",
      "latitude": 36.5658,
      "longitude": 53.0597,
      "country_code": "IR"
    },
    {
      "city": "Makiivka",
      "latitude": 48.0556,
      "longitude": 37.9611,
      "country_code": "UA"
    },
    {
      "city": "Chitungwiza",
      "latitude": -18,
      "longitude": 31.1,
      "country_code": "ZW"
    },
    {
      "city": "Pensacola",
      "latitude": 30.4427,
      "longitude": -87.1886,
      "country_code": "US"
    },
    {
      "city": "Victorville",
      "latitude": 34.5277,
      "longitude": -117.3536,
      "country_code": "US"
    },
    {
      "city": "Tokorozawa",
      "latitude": 35.7994,
      "longitude": 139.4689,
      "country_code": "JP"
    },
    {
      "city": "Tanch’ŏn",
      "latitude": 40.458,
      "longitude": 128.911,
      "country_code": "KP"
    },
    {
      "city": "Sumqayıt",
      "latitude": 40.5917,
      "longitude": 49.6397,
      "country_code": "AZ"
    },
    {
      "city": "Kūstī",
      "latitude": 13.17,
      "longitude": 32.66,
      "country_code": "SD"
    },
    {
      "city": "Al ‘Amārah",
      "latitude": 31.8416,
      "longitude": 47.1512,
      "country_code": "IQ"
    },
    {
      "city": "Cuddapah",
      "latitude": 14.4667,
      "longitude": 78.8167,
      "country_code": "IN"
    },
    {
      "city": "Simferopol",
      "latitude": 44.9484,
      "longitude": 34.1,
      "country_code": "UA"
    },
    {
      "city": "Tarlac City",
      "latitude": 15.4802,
      "longitude": 120.5979,
      "country_code": "PH"
    },
    {
      "city": "Lancaster",
      "latitude": 34.6935,
      "longitude": -118.1753,
      "country_code": "US"
    },
    {
      "city": "Greensboro",
      "latitude": 36.0956,
      "longitude": -79.8269,
      "country_code": "US"
    },
    {
      "city": "Iligan",
      "latitude": 8.2333,
      "longitude": 124.25,
      "country_code": "PH"
    },
    {
      "city": "East London",
      "latitude": -33.0153,
      "longitude": 27.9116,
      "country_code": "ZA"
    },
    {
      "city": "Ōtsu",
      "latitude": 35.0167,
      "longitude": 135.85,
      "country_code": "JP"
    },
    {
      "city": "Franca",
      "latitude": -20.5389,
      "longitude": -47.4008,
      "country_code": "BR"
    },
    {
      "city": "Kaluga",
      "latitude": 54.5333,
      "longitude": 36.2667,
      "country_code": "RU"
    },
    {
      "city": "Yeosu",
      "latitude": 34.7368,
      "longitude": 127.7458,
      "country_code": "KR"
    },
    {
      "city": "Corpus Christi",
      "latitude": 27.726,
      "longitude": -97.3755,
      "country_code": "US"
    },
    {
      "city": "Muzaffarpur",
      "latitude": 26.12,
      "longitude": 85.3833,
      "country_code": "IN"
    },
    {
      "city": "Lublin",
      "latitude": 51.2333,
      "longitude": 22.5667,
      "country_code": "PL"
    },
    {
      "city": "Brest",
      "latitude": 52.0847,
      "longitude": 23.6569,
      "country_code": "BY"
    },
    {
      "city": "Lianran",
      "latitude": 24.9211,
      "longitude": 102.4778,
      "country_code": "CN"
    },
    {
      "city": "Alwar",
      "latitude": 27.5667,
      "longitude": 76.6167,
      "country_code": "IN"
    },
    {
      "city": "Baishan",
      "latitude": 41.9377,
      "longitude": 126.4179,
      "country_code": "CN"
    },
    {
      "city": "Kawagoe",
      "latitude": 35.9177,
      "longitude": 139.4911,
      "country_code": "JP"
    },
    {
      "city": "Farg‘ona",
      "latitude": 40.3864,
      "longitude": 71.7864,
      "country_code": "UZ"
    },
    {
      "city": "Tamuramachi-moriyama",
      "latitude": 37.41,
      "longitude": 140.38,
      "country_code": "JP"
    },
    {
      "city": "Brahmapur",
      "latitude": 19.32,
      "longitude": 84.8,
      "country_code": "IN"
    },
    {
      "city": "Buôn Ma Thuột",
      "latitude": 12.6667,
      "longitude": 108.05,
      "country_code": "VN"
    },
    {
      "city": "Biñan",
      "latitude": 14.3333,
      "longitude": 121.0833,
      "country_code": "PH"
    },
    {
      "city": "Iwaki",
      "latitude": 37.0333,
      "longitude": 140.8833,
      "country_code": "JP"
    },
    {
      "city": "Semey",
      "latitude": 50.4111,
      "longitude": 80.2275,
      "country_code": "KZ"
    },
    {
      "city": "Tarsus",
      "latitude": 36.9167,
      "longitude": 34.9,
      "country_code": "TR"
    },
    {
      "city": "Randburg",
      "latitude": -26.0936,
      "longitude": 28.0064,
      "country_code": "ZA"
    },
    {
      "city": "Tepic",
      "latitude": 21.5083,
      "longitude": -104.8931,
      "country_code": "MX"
    },
    {
      "city": "Jitpur",
      "latitude": 27.6666,
      "longitude": 85.3333,
      "country_code": "NP"
    },
    {
      "city": "Kaesŏng",
      "latitude": 37.964,
      "longitude": 126.5644,
      "country_code": "KP"
    },
    {
      "city": "Beni",
      "latitude": 0.5,
      "longitude": 29.4667,
      "country_code": "CD"
    },
    {
      "city": "Chinju",
      "latitude": 35.1928,
      "longitude": 128.0847,
      "country_code": "KR"
    },
    {
      "city": "Tangdong",
      "latitude": 25.9755,
      "longitude": 113.2302,
      "country_code": "CN"
    },
    {
      "city": "Butuan",
      "latitude": 8.9534,
      "longitude": 125.5288,
      "country_code": "PH"
    },
    {
      "city": "Reading",
      "latitude": 51.4542,
      "longitude": -0.9731,
      "country_code": "GB"
    },
    {
      "city": "Belfast",
      "latitude": 54.5964,
      "longitude": -5.93,
      "country_code": "GB"
    },
    {
      "city": "Alicante",
      "latitude": 38.3453,
      "longitude": -0.4831,
      "country_code": "ES"
    },
    {
      "city": "Blida",
      "latitude": 36.4722,
      "longitude": 2.8333,
      "country_code": "DZ"
    },
    {
      "city": "Hangu",
      "latitude": 39.232,
      "longitude": 117.777,
      "country_code": "CN"
    },
    {
      "city": "Yingzhong",
      "latitude": 32.2381,
      "longitude": 119.8133,
      "country_code": "CN"
    },
    {
      "city": "Viña del Mar",
      "latitude": -33.0244,
      "longitude": -71.5517,
      "country_code": "CL"
    },
    {
      "city": "Asahikawa",
      "latitude": 43.7706,
      "longitude": 142.365,
      "country_code": "JP"
    },
    {
      "city": "Bielefeld",
      "latitude": 52.0167,
      "longitude": 8.5333,
      "country_code": "DE"
    },
    {
      "city": "Cuenca",
      "latitude": -2.8974,
      "longitude": -79.0045,
      "country_code": "EC"
    },
    {
      "city": "Fort Wayne",
      "latitude": 41.0886,
      "longitude": -85.1437,
      "country_code": "US"
    },
    {
      "city": "Maebashi",
      "latitude": 36.3833,
      "longitude": 139.0667,
      "country_code": "JP"
    },
    {
      "city": "Lipa City",
      "latitude": 13.9411,
      "longitude": 121.1622,
      "country_code": "PH"
    },
    {
      "city": "Wad Medani",
      "latitude": 14.4,
      "longitude": 33.51,
      "country_code": "SD"
    },
    {
      "city": "Islip",
      "latitude": 40.7384,
      "longitude": -73.1887,
      "country_code": "US"
    },
    {
      "city": "Sousse",
      "latitude": 35.83,
      "longitude": 10.625,
      "country_code": "TN"
    },
    {
      "city": "Kāmārhāti",
      "latitude": 22.67,
      "longitude": 88.37,
      "country_code": "IN"
    },
    {
      "city": "Thessaloníki",
      "latitude": 40.6333,
      "longitude": 22.95,
      "country_code": "GR"
    },
    {
      "city": "Gəncə",
      "latitude": 40.6828,
      "longitude": 46.3606,
      "country_code": "AZ"
    },
    {
      "city": "Bilāspur",
      "latitude": 22.15,
      "longitude": 82.0167,
      "country_code": "IN"
    },
    {
      "city": "Santa Ana",
      "latitude": 33.7366,
      "longitude": -117.8819,
      "country_code": "US"
    },
    {
      "city": "Mymensingh",
      "latitude": 24.7504,
      "longitude": 90.38,
      "country_code": "BD"
    },
    {
      "city": "Al Fayyūm",
      "latitude": 29.3,
      "longitude": 30.8333,
      "country_code": "EG"
    },
    {
      "city": "Flint",
      "latitude": 43.0235,
      "longitude": -83.6922,
      "country_code": "US"
    },
    {
      "city": "Kendari",
      "latitude": -3.9675,
      "longitude": 122.5947,
      "country_code": "ID"
    },
    {
      "city": "Balıkesir",
      "latitude": 39.6511,
      "longitude": 27.8842,
      "country_code": "TR"
    },
    {
      "city": "Az Zaqāzīq",
      "latitude": 30.5667,
      "longitude": 31.5,
      "country_code": "EG"
    },
    {
      "city": "Thái Nguyên",
      "latitude": 21.6,
      "longitude": 105.85,
      "country_code": "VN"
    },
    {
      "city": "Smolensk",
      "latitude": 54.7828,
      "longitude": 32.0453,
      "country_code": "RU"
    },
    {
      "city": "Wŏnju",
      "latitude": 37.3417,
      "longitude": 127.9208,
      "country_code": "KR"
    },
    {
      "city": "Maringá",
      "latitude": -23.4095,
      "longitude": -51.93,
      "country_code": "BR"
    },
    {
      "city": "San Juan",
      "latitude": 18.4037,
      "longitude": -66.0636,
      "country_code": "PR"
    },
    {
      "city": "Dahūk",
      "latitude": 36.85,
      "longitude": 42.9833,
      "country_code": "IQ"
    },
    {
      "city": "Batangas",
      "latitude": 13.75,
      "longitude": 121.05,
      "country_code": "PH"
    },
    {
      "city": "Mathura",
      "latitude": 27.4833,
      "longitude": 77.6833,
      "country_code": "IN"
    },
    {
      "city": "Pelotas",
      "latitude": -31.75,
      "longitude": -52.33,
      "country_code": "BR"
    },
    {
      "city": "Bamiantong",
      "latitude": 44.9164,
      "longitude": 130.5212,
      "country_code": "CN"
    },
    {
      "city": "Kōchi",
      "latitude": 33.5667,
      "longitude": 133.5333,
      "country_code": "JP"
    },
    {
      "city": "Patiāla",
      "latitude": 30.3204,
      "longitude": 76.385,
      "country_code": "IN"
    },
    {
      "city": "Gujrat",
      "latitude": 32.5736,
      "longitude": 74.0789,
      "country_code": "PK"
    },
    {
      "city": "Bonn",
      "latitude": 50.7339,
      "longitude": 7.0997,
      "country_code": "DE"
    },
    {
      "city": "Vũng Tàu",
      "latitude": 10.4042,
      "longitude": 107.1417,
      "country_code": "VN"
    },
    {
      "city": "Markham",
      "latitude": 43.8767,
      "longitude": -79.2633,
      "country_code": "CA"
    },
    {
      "city": "Saugor",
      "latitude": 23.8504,
      "longitude": 78.75,
      "country_code": "IN"
    },
    {
      "city": "Roodepoort",
      "latitude": -26.1625,
      "longitude": 27.8725,
      "country_code": "ZA"
    },
    {
      "city": "Gómez Palacio",
      "latitude": 25.5611,
      "longitude": -103.4983,
      "country_code": "MX"
    },
    {
      "city": "Volzhskiy",
      "latitude": 48.7833,
      "longitude": 44.7667,
      "country_code": "RU"
    },
    {
      "city": "Bari",
      "latitude": 41.1253,
      "longitude": 16.8667,
      "country_code": "IT"
    },
    {
      "city": "Bijāpur",
      "latitude": 16.8244,
      "longitude": 75.7154,
      "country_code": "IN"
    },
    {
      "city": "Sukabumi",
      "latitude": -6.9197,
      "longitude": 106.9272,
      "country_code": "ID"
    },
    {
      "city": "Ulanhot",
      "latitude": 46.0726,
      "longitude": 122.0719,
      "country_code": "CN"
    },
    {
      "city": "Fayetteville",
      "latitude": 35.0846,
      "longitude": -78.9776,
      "country_code": "US"
    },
    {
      "city": "Itajaí",
      "latitude": -26.8996,
      "longitude": -48.68,
      "country_code": "BR"
    },
    {
      "city": "Nakuru",
      "latitude": -0.2833,
      "longitude": 36.0667,
      "country_code": "KE"
    },
    {
      "city": "Yunzhong",
      "latitude": 39.8143,
      "longitude": 113.0946,
      "country_code": "CN"
    },
    {
      "city": "Al Fallūjah",
      "latitude": 33.35,
      "longitude": 43.7833,
      "country_code": "IQ"
    },
    {
      "city": "Boa Vista",
      "latitude": 2.82,
      "longitude": -60.6719,
      "country_code": "BR"
    },
    {
      "city": "Cluj-Napoca",
      "latitude": 46.78,
      "longitude": 23.5594,
      "country_code": "RO"
    },
    {
      "city": "Malmö",
      "latitude": 55.5932,
      "longitude": 13.0214,
      "country_code": "SE"
    },
    {
      "city": "Gwangmyeongni",
      "latitude": 37.4772,
      "longitude": 126.8664,
      "country_code": "KR"
    },
    {
      "city": "Pucallpa",
      "latitude": -8.3833,
      "longitude": -74.55,
      "country_code": "PE"
    },
    {
      "city": "Córdoba",
      "latitude": 37.8833,
      "longitude": -4.7667,
      "country_code": "ES"
    },
    {
      "city": "Kuching",
      "latitude": 1.5397,
      "longitude": 110.3542,
      "country_code": "MY"
    },
    {
      "city": "Zinder",
      "latitude": 13.8,
      "longitude": 8.9833,
      "country_code": "NE"
    },
    {
      "city": "Naha",
      "latitude": 26.2122,
      "longitude": 127.6789,
      "country_code": "JP"
    },
    {
      "city": "Gonder",
      "latitude": 12.6,
      "longitude": 37.4667,
      "country_code": "ET"
    },
    {
      "city": "Uberaba",
      "latitude": -19.7478,
      "longitude": -47.9319,
      "country_code": "BR"
    },
    {
      "city": "Jackson",
      "latitude": 32.3163,
      "longitude": -90.2124,
      "country_code": "US"
    },
    {
      "city": "Mekele",
      "latitude": 13.4833,
      "longitude": 39.4667,
      "country_code": "ET"
    },
    {
      "city": "Kulti",
      "latitude": 23.73,
      "longitude": 86.85,
      "country_code": "IN"
    },
    {
      "city": "Santa Rosa",
      "latitude": 38.4458,
      "longitude": -122.7067,
      "country_code": "US"
    },
    {
      "city": "Gonaïves",
      "latitude": 19.45,
      "longitude": -72.6833,
      "country_code": "HT"
    },
    {
      "city": "Lansing",
      "latitude": 42.7142,
      "longitude": -84.5601,
      "country_code": "US"
    },
    {
      "city": "Binxian",
      "latitude": 35.0364,
      "longitude": 108.0764,
      "country_code": "CN"
    },
    {
      "city": "Newcastle",
      "latitude": -32.9167,
      "longitude": 151.75,
      "country_code": "AU"
    },
    {
      "city": "Kurgan",
      "latitude": 55.4408,
      "longitude": 65.3411,
      "country_code": "RU"
    },
    {
      "city": "Kaiyuan",
      "latitude": 23.7147,
      "longitude": 103.2585,
      "country_code": "CN"
    },
    {
      "city": "Temara",
      "latitude": 33.9234,
      "longitude": -6.9076,
      "country_code": "MA"
    },
    {
      "city": "Uruapan",
      "latitude": 19.4208,
      "longitude": -102.0628,
      "country_code": "MX"
    },
    {
      "city": "Hotan",
      "latitude": 37.1012,
      "longitude": 79.9327,
      "country_code": "CN"
    },
    {
      "city": "Camagüey",
      "latitude": 21.3786,
      "longitude": -77.9186,
      "country_code": "CU"
    },
    {
      "city": "Ann Arbor",
      "latitude": 42.2755,
      "longitude": -83.7312,
      "country_code": "US"
    },
    {
      "city": "San Salvador de Jujuy",
      "latitude": -24.1856,
      "longitude": -65.2994,
      "country_code": "AR"
    },
    {
      "city": "Timişoara",
      "latitude": 45.7597,
      "longitude": 21.23,
      "country_code": "RO"
    },
    {
      "city": "Al Kūt",
      "latitude": 32.4907,
      "longitude": 45.8304,
      "country_code": "IQ"
    },
    {
      "city": "Tapachula",
      "latitude": 14.9,
      "longitude": -92.2667,
      "country_code": "MX"
    },
    {
      "city": "Shāhjānpur",
      "latitude": 27.8804,
      "longitude": 79.905,
      "country_code": "IN"
    },
    {
      "city": "Cherepovets",
      "latitude": 59.1333,
      "longitude": 37.9167,
      "country_code": "RU"
    },
    {
      "city": "Poltava",
      "latitude": 49.5744,
      "longitude": 34.5686,
      "country_code": "UA"
    },
    {
      "city": "Henderson",
      "latitude": 36.0133,
      "longitude": -115.038,
      "country_code": "US"
    },
    {
      "city": "Maroua",
      "latitude": 10.5823,
      "longitude": 14.3275,
      "country_code": "CM"
    },
    {
      "city": "Kaech’ŏn",
      "latitude": 39.6986,
      "longitude": 125.9061,
      "country_code": "KP"
    },
    {
      "city": "Asan",
      "latitude": 36.35,
      "longitude": 126.9167,
      "country_code": "KR"
    },
    {
      "city": "Coatzacoalcos",
      "latitude": 18.15,
      "longitude": -94.4333,
      "country_code": "MX"
    },
    {
      "city": "Huntsville",
      "latitude": 34.6988,
      "longitude": -86.6412,
      "country_code": "US"
    },
    {
      "city": "Trichūr",
      "latitude": 10.52,
      "longitude": 76.21,
      "country_code": "IN"
    },
    {
      "city": "General Trias",
      "latitude": 14.3833,
      "longitude": 120.8833,
      "country_code": "PH"
    },
    {
      "city": "Cirebon",
      "latitude": -6.7167,
      "longitude": 108.5667,
      "country_code": "ID"
    },
    {
      "city": "Tampico",
      "latitude": 22.2553,
      "longitude": -97.8686,
      "country_code": "MX"
    },
    {
      "city": "Lexington",
      "latitude": 38.0423,
      "longitude": -84.4587,
      "country_code": "US"
    },
    {
      "city": "Boaco",
      "latitude": 12.4722,
      "longitude": -85.6586,
      "country_code": "NI"
    },
    {
      "city": "Öskemen",
      "latitude": 49.95,
      "longitude": 82.6167,
      "country_code": "KZ"
    },
    {
      "city": "Cà Mau",
      "latitude": 9.1833,
      "longitude": 105.15,
      "country_code": "VN"
    },
    {
      "city": "Neiva",
      "latitude": 2.9275,
      "longitude": -75.2875,
      "country_code": "CO"
    },
    {
      "city": "Cabuyao",
      "latitude": 14.275,
      "longitude": 121.125,
      "country_code": "PH"
    },
    {
      "city": "Vologda",
      "latitude": 59.2167,
      "longitude": 39.9,
      "country_code": "RU"
    },
    {
      "city": "Saransk",
      "latitude": 54.1833,
      "longitude": 45.1833,
      "country_code": "RU"
    },
    {
      "city": "Mobile",
      "latitude": 30.6783,
      "longitude": -88.1162,
      "country_code": "US"
    },
    {
      "city": "Bor",
      "latitude": 6.2167,
      "longitude": 31.55,
      "country_code": "SS"
    },
    {
      "city": "Münster",
      "latitude": 51.9625,
      "longitude": 7.6256,
      "country_code": "DE"
    },
    {
      "city": "Barddhamān",
      "latitude": 23.25,
      "longitude": 87.85,
      "country_code": "IN"
    },
    {
      "city": "Ksar El Kebir",
      "latitude": 35.0204,
      "longitude": -5.91,
      "country_code": "MA"
    },
    {
      "city": "Karlsruhe",
      "latitude": 49.0167,
      "longitude": 8.4,
      "country_code": "DE"
    },
    {
      "city": "Kasur",
      "latitude": 31.1167,
      "longitude": 74.45,
      "country_code": "PK"
    },
    {
      "city": "Yakou",
      "latitude": 33.2937,
      "longitude": 113.5203,
      "country_code": "CN"
    },
    {
      "city": "Orël",
      "latitude": 52.9686,
      "longitude": 36.0694,
      "country_code": "RU"
    },
    {
      "city": "Safi",
      "latitude": 32.2833,
      "longitude": -9.2333,
      "country_code": "MA"
    },
    {
      "city": "Shahr-e Qods",
      "latitude": 35.7214,
      "longitude": 51.1089,
      "country_code": "IR"
    },
    {
      "city": "Vitória da Conquista",
      "latitude": -14.8661,
      "longitude": -40.8394,
      "country_code": "BR"
    },
    {
      "city": "Ḩamāh",
      "latitude": 35.1333,
      "longitude": 36.75,
      "country_code": "SY"
    },
    {
      "city": "Guarujá",
      "latitude": -23.9936,
      "longitude": -46.2564,
      "country_code": "BR"
    },
    {
      "city": "Catania",
      "latitude": 37.5027,
      "longitude": 15.0873,
      "country_code": "IT"
    },
    {
      "city": "Purnea",
      "latitude": 25.78,
      "longitude": 87.47,
      "country_code": "IN"
    },
    {
      "city": "Fort Collins",
      "latitude": 40.5478,
      "longitude": -105.0656,
      "country_code": "US"
    },
    {
      "city": "Port Elizabeth",
      "latitude": -33.9581,
      "longitude": 25.6,
      "country_code": "ZA"
    },
    {
      "city": "Alanya",
      "latitude": 36.5436,
      "longitude": 31.9997,
      "country_code": "TR"
    },
    {
      "city": "Asheville",
      "latitude": 35.5704,
      "longitude": -82.5536,
      "country_code": "US"
    },
    {
      "city": "Santa Clarita",
      "latitude": 34.4175,
      "longitude": -118.4964,
      "country_code": "US"
    },
    {
      "city": "Gorgān",
      "latitude": 36.83,
      "longitude": 54.48,
      "country_code": "IR"
    },
    {
      "city": "Porto Velho",
      "latitude": -8.7619,
      "longitude": -63.9039,
      "country_code": "BR"
    },
    {
      "city": "Quy Nhơn",
      "latitude": 13.7765,
      "longitude": 109.2237,
      "country_code": "VN"
    },
    {
      "city": "Sambalpur",
      "latitude": 21.4704,
      "longitude": 83.9701,
      "country_code": "IN"
    },
    {
      "city": "Yokkaichi",
      "latitude": 34.9667,
      "longitude": 136.6167,
      "country_code": "JP"
    },
    {
      "city": "Chalco",
      "latitude": 19.2647,
      "longitude": -98.8975,
      "country_code": "MX"
    },
    {
      "city": "Mannheim",
      "latitude": 49.4878,
      "longitude": 8.4661,
      "country_code": "DE"
    },
    {
      "city": "Namp’o",
      "latitude": 38.7333,
      "longitude": 125.4,
      "country_code": "KP"
    },
    {
      "city": "Shahrīār",
      "latitude": 35.6597,
      "longitude": 51.0592,
      "country_code": "IR"
    },
    {
      "city": "Kasugai",
      "latitude": 35.25,
      "longitude": 136.9667,
      "country_code": "JP"
    },
    {
      "city": "Sapele",
      "latitude": 5.8904,
      "longitude": 5.68,
      "country_code": "NG"
    },
    {
      "city": "Blumenau",
      "latitude": -26.9189,
      "longitude": -49.0658,
      "country_code": "BR"
    },
    {
      "city": "Sariwŏn",
      "latitude": 38.5039,
      "longitude": 125.7589,
      "country_code": "KP"
    },
    {
      "city": "St. Catharines",
      "latitude": 43.1833,
      "longitude": -79.2333,
      "country_code": "CA"
    },
    {
      "city": "Matadi",
      "latitude": -5.8167,
      "longitude": 13.4833,
      "country_code": "CD"
    },
    {
      "city": "Niagara Falls",
      "latitude": 43.06,
      "longitude": -79.1067,
      "country_code": "CA"
    },
    {
      "city": "Fīrozābād",
      "latitude": 27.15,
      "longitude": 78.3949,
      "country_code": "IN"
    },
    {
      "city": "San Fernando",
      "latitude": 15.0333,
      "longitude": 120.6833,
      "country_code": "PH"
    },
    {
      "city": "St. Paul",
      "latitude": 44.9477,
      "longitude": -93.104,
      "country_code": "US"
    },
    {
      "city": "Vladikavkaz",
      "latitude": 43.0167,
      "longitude": 44.65,
      "country_code": "RU"
    },
    {
      "city": "Yakutsk",
      "latitude": 62.0272,
      "longitude": 129.7319,
      "country_code": "RU"
    },
    {
      "city": "Minna",
      "latitude": 9.6139,
      "longitude": 6.5569,
      "country_code": "NG"
    },
    {
      "city": "Hisar",
      "latitude": 29.1489,
      "longitude": 75.7367,
      "country_code": "IN"
    },
    {
      "city": "Puerto La Cruz",
      "latitude": 10.2167,
      "longitude": -64.6167,
      "country_code": "VE"
    },
    {
      "city": "Ciudad del Este",
      "latitude": -25.5167,
      "longitude": -54.6167,
      "country_code": "PY"
    },
    {
      "city": "Podolsk",
      "latitude": 55.4297,
      "longitude": 37.5444,
      "country_code": "RU"
    },
    {
      "city": "Ciudad Victoria",
      "latitude": 23.7333,
      "longitude": -99.1333,
      "country_code": "MX"
    },
    {
      "city": "Akita",
      "latitude": 39.7197,
      "longitude": 140.1025,
      "country_code": "JP"
    },
    {
      "city": "Kumul",
      "latitude": 42.827,
      "longitude": 93.515,
      "country_code": "CN"
    },
    {
      "city": "Vaughan",
      "latitude": 43.8333,
      "longitude": -79.5,
      "country_code": "CA"
    },
    {
      "city": "Ōakashichō",
      "latitude": 34.6431,
      "longitude": 134.9975,
      "country_code": "JP"
    },
    {
      "city": "Pekalongan",
      "latitude": -6.8883,
      "longitude": 109.6753,
      "country_code": "ID"
    },
    {
      "city": "Adıyaman",
      "latitude": 37.7644,
      "longitude": 38.2763,
      "country_code": "TR"
    },
    {
      "city": "Vila Nova de Gaia",
      "latitude": 41.1333,
      "longitude": -8.6167,
      "country_code": "PT"
    },
    {
      "city": "Curepipe",
      "latitude": -20.3162,
      "longitude": 57.5166,
      "country_code": "MU"
    },
    {
      "city": "Cabanatuan City",
      "latitude": 15.4833,
      "longitude": 120.9667,
      "country_code": "PH"
    },
    {
      "city": "Oaxaca",
      "latitude": 17.0833,
      "longitude": -96.75,
      "country_code": "MX"
    },
    {
      "city": "Armenia",
      "latitude": 4.5389,
      "longitude": -75.6725,
      "country_code": "CO"
    },
    {
      "city": "Wollongong",
      "latitude": -34.4331,
      "longitude": 150.8831,
      "country_code": "AU"
    },
    {
      "city": "Brest",
      "latitude": 48.39,
      "longitude": -4.49,
      "country_code": "FR"
    },
    {
      "city": "Awka",
      "latitude": 6.2,
      "longitude": 7.0667,
      "country_code": "NG"
    },
    {
      "city": "Iksan",
      "latitude": 35.9439,
      "longitude": 126.9544,
      "country_code": "KR"
    },
    {
      "city": "Taubaté",
      "latitude": -23.0333,
      "longitude": -45.55,
      "country_code": "BR"
    },
    {
      "city": "Antioch",
      "latitude": 37.9789,
      "longitude": -121.7958,
      "country_code": "US"
    },
    {
      "city": "Lakeland",
      "latitude": 28.0556,
      "longitude": -81.9545,
      "country_code": "US"
    },
    {
      "city": "Cadiz",
      "latitude": 10.9587,
      "longitude": 123.3086,
      "country_code": "PH"
    },
    {
      "city": "Sóc Trăng",
      "latitude": 9.6,
      "longitude": 105.9719,
      "country_code": "VN"
    },
    {
      "city": "Āwasa",
      "latitude": 7.05,
      "longitude": 38.4667,
      "country_code": "ET"
    },
    {
      "city": "Mardan",
      "latitude": 34.1958,
      "longitude": 72.0447,
      "country_code": "PK"
    },
    {
      "city": "Popayán",
      "latitude": 2.4411,
      "longitude": -76.6061,
      "country_code": "CO"
    },
    {
      "city": "Praia Grande",
      "latitude": -24.0058,
      "longitude": -46.4028,
      "country_code": "BR"
    },
    {
      "city": "Qianzhou",
      "latitude": 28.3185,
      "longitude": 109.7318,
      "country_code": "CN"
    },
    {
      "city": "Cotabato",
      "latitude": 7.2167,
      "longitude": 124.25,
      "country_code": "PH"
    },
    {
      "city": "Bīdar",
      "latitude": 17.9229,
      "longitude": 77.5175,
      "country_code": "IN"
    },
    {
      "city": "Białystok",
      "latitude": 53.1167,
      "longitude": 23.1667,
      "country_code": "PL"
    },
    {
      "city": "Mérida",
      "latitude": 8.5833,
      "longitude": -71.1333,
      "country_code": "VE"
    },
    {
      "city": "Murmansk",
      "latitude": 68.9667,
      "longitude": 33.0833,
      "country_code": "RU"
    },
    {
      "city": "Afyonkarahisar",
      "latitude": 38.7581,
      "longitude": 30.5386,
      "country_code": "TR"
    },
    {
      "city": "Valladolid",
      "latitude": 41.652,
      "longitude": -4.7286,
      "country_code": "ES"
    },
    {
      "city": "Jember",
      "latitude": -8.1727,
      "longitude": 113.6873,
      "country_code": "ID"
    },
    {
      "city": "Bahía Blanca",
      "latitude": -38.7167,
      "longitude": -62.2667,
      "country_code": "AR"
    },
    {
      "city": "İskenderun",
      "latitude": 36.5804,
      "longitude": 36.17,
      "country_code": "TR"
    },
    {
      "city": "Al Mubarraz",
      "latitude": 25.4416,
      "longitude": 49.6642,
      "country_code": "SA"
    },
    {
      "city": "Petrópolis",
      "latitude": -22.505,
      "longitude": -43.1789,
      "country_code": "BR"
    },
    {
      "city": "Al Kharj",
      "latitude": 24.1556,
      "longitude": 47.312,
      "country_code": "SA"
    },
    {
      "city": "Rāmpur",
      "latitude": 28.8154,
      "longitude": 79.025,
      "country_code": "IN"
    },
    {
      "city": "Najrān",
      "latitude": 17.4917,
      "longitude": 44.1322,
      "country_code": "SA"
    },
    {
      "city": "Chernihiv",
      "latitude": 51.5,
      "longitude": 31.3,
      "country_code": "UA"
    },
    {
      "city": "Yangsan",
      "latitude": 35.3386,
      "longitude": 129.0386,
      "country_code": "KR"
    },
    {
      "city": "Vigo",
      "latitude": 42.2358,
      "longitude": -8.7267,
      "country_code": "ES"
    },
    {
      "city": "Oyster Bay",
      "latitude": 40.7845,
      "longitude": -73.5139,
      "country_code": "US"
    },
    {
      "city": "Valparaíso",
      "latitude": -33.0458,
      "longitude": -71.6197,
      "country_code": "CL"
    },
    {
      "city": "Augsburg",
      "latitude": 48.3717,
      "longitude": 10.8983,
      "country_code": "DE"
    },
    {
      "city": "Mbeya",
      "latitude": -8.9,
      "longitude": 33.45,
      "country_code": "TZ"
    },
    {
      "city": "Limeira",
      "latitude": -22.5647,
      "longitude": -47.4017,
      "country_code": "BR"
    },
    {
      "city": "Rangpur",
      "latitude": 25.75,
      "longitude": 89.25,
      "country_code": "BD"
    },
    {
      "city": "Ponta Grossa",
      "latitude": -25.09,
      "longitude": -50.16,
      "country_code": "BR"
    },
    {
      "city": "Shiliguri",
      "latitude": 26.72,
      "longitude": 88.42,
      "country_code": "IN"
    },
    {
      "city": "Aksaray",
      "latitude": 38.3686,
      "longitude": 34.0297,
      "country_code": "TR"
    },
    {
      "city": "Navotas",
      "latitude": 14.6667,
      "longitude": 120.9417,
      "country_code": "PH"
    },
    {
      "city": "Çorum",
      "latitude": 40.5489,
      "longitude": 34.9533,
      "country_code": "TR"
    },
    {
      "city": "Bāli",
      "latitude": 22.65,
      "longitude": 88.34,
      "country_code": "IN"
    },
    {
      "city": "Ismailia",
      "latitude": 30.5833,
      "longitude": 32.2667,
      "country_code": "EG"
    },
    {
      "city": "Pānīpat",
      "latitude": 29.4004,
      "longitude": 76.97,
      "country_code": "IN"
    },
    {
      "city": "Cagliari",
      "latitude": 39.2224,
      "longitude": 9.104,
      "country_code": "IT"
    },
    {
      "city": "Delmas",
      "latitude": 18.55,
      "longitude": -72.3,
      "country_code": "HT"
    },
    {
      "city": "Batna",
      "latitude": 35.55,
      "longitude": 6.1667,
      "country_code": "DZ"
    },
    {
      "city": "Kunp’o",
      "latitude": 37.3675,
      "longitude": 126.9469,
      "country_code": "KR"
    },
    {
      "city": "Tambov",
      "latitude": 52.7167,
      "longitude": 41.4333,
      "country_code": "RU"
    },
    {
      "city": "Iaşi",
      "latitude": 47.1622,
      "longitude": 27.5889,
      "country_code": "RO"
    },
    {
      "city": "Thiès",
      "latitude": 14.7833,
      "longitude": -16.9167,
      "country_code": "SN"
    },
    {
      "city": "Makurdi",
      "latitude": 7.73,
      "longitude": 8.53,
      "country_code": "NG"
    },
    {
      "city": "Morioka",
      "latitude": 39.6833,
      "longitude": 141.15,
      "country_code": "JP"
    },
    {
      "city": "Kherson",
      "latitude": 46.6333,
      "longitude": 32.6,
      "country_code": "UA"
    },
    {
      "city": "Groznyy",
      "latitude": 43.3125,
      "longitude": 45.6986,
      "country_code": "RU"
    },
    {
      "city": "Hong’an",
      "latitude": 47.21,
      "longitude": 123.61,
      "country_code": "CN"
    },
    {
      "city": "Bafoussam",
      "latitude": 5.4667,
      "longitude": 10.4167,
      "country_code": "CM"
    },
    {
      "city": "Resistencia",
      "latitude": -27.4514,
      "longitude": -58.9867,
      "country_code": "AR"
    },
    {
      "city": "Braşov",
      "latitude": 45.65,
      "longitude": 25.6,
      "country_code": "RO"
    },
    {
      "city": "Juliaca",
      "latitude": -15.4908,
      "longitude": -70.1269,
      "country_code": "PE"
    },
    {
      "city": "Graz",
      "latitude": 47.0667,
      "longitude": 15.4333,
      "country_code": "AT"
    },
    {
      "city": "Karīmnagar",
      "latitude": 18.4333,
      "longitude": 79.15,
      "country_code": "IN"
    },
    {
      "city": "Sétif",
      "latitude": 36.19,
      "longitude": 5.41,
      "country_code": "DZ"
    },
    {
      "city": "Trenton",
      "latitude": 40.2236,
      "longitude": -74.7641,
      "country_code": "US"
    },
    {
      "city": "Kaunas",
      "latitude": 54.9,
      "longitude": 23.9333,
      "country_code": "LT"
    },
    {
      "city": "Mulhouse",
      "latitude": 47.75,
      "longitude": 7.34,
      "country_code": "FR"
    },
    {
      "city": "Hulin",
      "latitude": 45.7671,
      "longitude": 132.9646,
      "country_code": "CN"
    },
    {
      "city": "Sekondi",
      "latitude": 4.9433,
      "longitude": -1.704,
      "country_code": "GH"
    },
    {
      "city": "Lincoln",
      "latitude": 40.809,
      "longitude": -96.6788,
      "country_code": "US"
    },
    {
      "city": "Bhuj",
      "latitude": 23.2504,
      "longitude": 69.81,
      "country_code": "IN"
    },
    {
      "city": "Ostrava",
      "latitude": 49.8356,
      "longitude": 18.2925,
      "country_code": "CZ"
    },
    {
      "city": "Ichalkaranji",
      "latitude": 16.7,
      "longitude": 74.47,
      "country_code": "IN"
    },
    {
      "city": "Tirupati",
      "latitude": 13.65,
      "longitude": 79.42,
      "country_code": "IN"
    },
    {
      "city": "Springfield",
      "latitude": 37.1943,
      "longitude": -93.2916,
      "country_code": "US"
    },
    {
      "city": "Punto Fijo",
      "latitude": 11.7167,
      "longitude": -70.1833,
      "country_code": "VE"
    },
    {
      "city": "Plano",
      "latitude": 33.0502,
      "longitude": -96.7487,
      "country_code": "US"
    },
    {
      "city": "Irvine",
      "latitude": 33.6772,
      "longitude": -117.7738,
      "country_code": "US"
    },
    {
      "city": "Fukushima",
      "latitude": 37.7608,
      "longitude": 140.4733,
      "country_code": "JP"
    },
    {
      "city": "Orléans",
      "latitude": 47.9025,
      "longitude": 1.909,
      "country_code": "FR"
    },
    {
      "city": "Hospet",
      "latitude": 15.2667,
      "longitude": 76.4,
      "country_code": "IN"
    },
    {
      "city": "Tacna",
      "latitude": -18.0556,
      "longitude": -70.2483,
      "country_code": "PE"
    },
    {
      "city": "Korhogo",
      "latitude": 9.4578,
      "longitude": -5.6294,
      "country_code": "CI"
    },
    {
      "city": "Constanţa",
      "latitude": 44.1733,
      "longitude": 28.6383,
      "country_code": "RO"
    },
    {
      "city": "Haifa",
      "latitude": 32.8,
      "longitude": 34.9833,
      "country_code": "IL"
    },
    {
      "city": "Coacalco",
      "latitude": 19.6333,
      "longitude": -99.0931,
      "country_code": "MX"
    },
    {
      "city": "Crato",
      "latitude": -7.2342,
      "longitude": -39.4094,
      "country_code": "BR"
    },
    {
      "city": "Limoges",
      "latitude": 45.8353,
      "longitude": 1.2625,
      "country_code": "FR"
    },
    {
      "city": "Davenport",
      "latitude": 41.5563,
      "longitude": -90.6052,
      "country_code": "US"
    },
    {
      "city": "Coro",
      "latitude": 11.395,
      "longitude": -69.6816,
      "country_code": "VE"
    },
    {
      "city": "Bago",
      "latitude": 17.3433,
      "longitude": 96.4981,
      "country_code": "MM"
    },
    {
      "city": "Fuquan",
      "latitude": 26.7039,
      "longitude": 107.5087,
      "country_code": "CN"
    },
    {
      "city": "Tongchuanshi",
      "latitude": 35.08,
      "longitude": 109.03,
      "country_code": "CN"
    },
    {
      "city": "Āīzawl",
      "latitude": 23.7104,
      "longitude": 92.72,
      "country_code": "IN"
    },
    {
      "city": "Taboão da Serra",
      "latitude": -23.6019,
      "longitude": -46.7528,
      "country_code": "BR"
    },
    {
      "city": "Sannai",
      "latitude": 24.16,
      "longitude": 80.83,
      "country_code": "IN"
    },
    {
      "city": "Huozhou",
      "latitude": 36.5726,
      "longitude": 111.7176,
      "country_code": "CN"
    },
    {
      "city": "Temuco",
      "latitude": -38.7399,
      "longitude": -72.5901,
      "country_code": "CL"
    },
    {
      "city": "Sterlitamak",
      "latitude": 53.6333,
      "longitude": 55.95,
      "country_code": "RU"
    },
    {
      "city": "Rockford",
      "latitude": 42.2597,
      "longitude": -89.0641,
      "country_code": "US"
    },
    {
      "city": "Tegal",
      "latitude": -6.8667,
      "longitude": 109.1333,
      "country_code": "ID"
    },
    {
      "city": "Ica",
      "latitude": -14.0667,
      "longitude": -75.7333,
      "country_code": "PE"
    },
    {
      "city": "Newark",
      "latitude": 40.7245,
      "longitude": -74.1725,
      "country_code": "US"
    },
    {
      "city": "Jining",
      "latitude": 41.03,
      "longitude": 113.08,
      "country_code": "CN"
    },
    {
      "city": "Chuncheon",
      "latitude": 37.8747,
      "longitude": 127.7342,
      "country_code": "KR"
    },
    {
      "city": "Malārd",
      "latitude": 35.6658,
      "longitude": 50.9767,
      "country_code": "IR"
    },
    {
      "city": "Pematangsiantar",
      "latitude": 2.96,
      "longitude": 99.06,
      "country_code": "ID"
    },
    {
      "city": "Long Xuyên",
      "latitude": 10.3686,
      "longitude": 105.4234,
      "country_code": "VN"
    },
    {
      "city": "Petrozavodsk",
      "latitude": 61.7833,
      "longitude": 34.35,
      "country_code": "RU"
    },
    {
      "city": "South Bend",
      "latitude": 41.6767,
      "longitude": -86.2696,
      "country_code": "US"
    },
    {
      "city": "Mingaora",
      "latitude": 34.7717,
      "longitude": 72.36,
      "country_code": "PK"
    },
    {
      "city": "Bārāsat",
      "latitude": 22.2333,
      "longitude": 88.45,
      "country_code": "IN"
    },
    {
      "city": "Shreveport",
      "latitude": 32.4656,
      "longitude": -93.7956,
      "country_code": "US"
    },
    {
      "city": "Sincelejo",
      "latitude": 9.2994,
      "longitude": -75.3958,
      "country_code": "CO"
    },
    {
      "city": "Việt Trì",
      "latitude": 21.3228,
      "longitude": 105.4019,
      "country_code": "VN"
    },
    {
      "city": "Cherkasy",
      "latitude": 49.4444,
      "longitude": 32.0597,
      "country_code": "UA"
    },
    {
      "city": "Wiesbaden",
      "latitude": 50.0825,
      "longitude": 8.24,
      "country_code": "DE"
    },
    {
      "city": "Kostroma",
      "latitude": 57.7667,
      "longitude": 40.9333,
      "country_code": "RU"
    },
    {
      "city": "Round Lake Beach",
      "latitude": 42.379,
      "longitude": -88.0811,
      "country_code": "US"
    },
    {
      "city": "Gyeongsan",
      "latitude": 35.8167,
      "longitude": 128.7333,
      "country_code": "KR"
    },
    {
      "city": "Katowice",
      "latitude": 50.25,
      "longitude": 19,
      "country_code": "PL"
    },
    {
      "city": "Shaowu",
      "latitude": 27.3417,
      "longitude": 117.4869,
      "country_code": "CN"
    },
    {
      "city": "Linxia Chengguanzhen",
      "latitude": 35.6,
      "longitude": 103.2167,
      "country_code": "CN"
    },
    {
      "city": "Pachuca",
      "latitude": 20.1,
      "longitude": -98.75,
      "country_code": "MX"
    },
    {
      "city": "Dire Dawa",
      "latitude": 9.5833,
      "longitude": 41.8667,
      "country_code": "ET"
    },
    {
      "city": "Khmelnytskyi",
      "latitude": 49.42,
      "longitude": 27,
      "country_code": "UA"
    },
    {
      "city": "Aomori",
      "latitude": 40.8222,
      "longitude": 140.7475,
      "country_code": "JP"
    },
    {
      "city": "Owo",
      "latitude": 7.2004,
      "longitude": 5.59,
      "country_code": "NG"
    },
    {
      "city": "Savannah",
      "latitude": 32.0281,
      "longitude": -81.1784,
      "country_code": "US"
    },
    {
      "city": "Posadas",
      "latitude": -27.3667,
      "longitude": -55.8969,
      "country_code": "AR"
    },
    {
      "city": "Gatineau",
      "latitude": 45.4833,
      "longitude": -75.65,
      "country_code": "CA"
    },
    {
      "city": "Windsor",
      "latitude": 42.2833,
      "longitude": -83,
      "country_code": "CA"
    },
    {
      "city": "Tsu",
      "latitude": 34.7186,
      "longitude": 136.5056,
      "country_code": "JP"
    },
    {
      "city": "Myrtle Beach",
      "latitude": 33.7096,
      "longitude": -78.8843,
      "country_code": "US"
    },
    {
      "city": "Mbandaka",
      "latitude": 0.0486,
      "longitude": 18.2603,
      "country_code": "CD"
    },
    {
      "city": "Tehuacán",
      "latitude": 18.4617,
      "longitude": -97.3928,
      "country_code": "MX"
    },
    {
      "city": "La Guaira",
      "latitude": 10.6,
      "longitude": -66.9331,
      "country_code": "VE"
    },
    {
      "city": "Kunsan",
      "latitude": 35.9786,
      "longitude": 126.7114,
      "country_code": "KR"
    },
    {
      "city": "Nizhnevartovsk",
      "latitude": 60.9389,
      "longitude": 76.595,
      "country_code": "RU"
    },
    {
      "city": "Chula Vista",
      "latitude": 32.6281,
      "longitude": -117.0145,
      "country_code": "US"
    },
    {
      "city": "Ratlām",
      "latitude": 23.3167,
      "longitude": 75.0667,
      "country_code": "IN"
    },
    {
      "city": "Yeosu",
      "latitude": 34.7607,
      "longitude": 127.6622,
      "country_code": "KR"
    },
    {
      "city": "Crato",
      "latitude": -7.4639,
      "longitude": -63.04,
      "country_code": "BR"
    },
    {
      "city": "Derby",
      "latitude": 52.9167,
      "longitude": -1.4667,
      "country_code": "GB"
    },
    {
      "city": "Kafr ad Dawwār",
      "latitude": 31.1417,
      "longitude": 30.1272,
      "country_code": "EG"
    },
    {
      "city": "Eugene",
      "latitude": 44.0563,
      "longitude": -123.1173,
      "country_code": "US"
    },
    {
      "city": "Gijón",
      "latitude": 43.5293,
      "longitude": -5.6773,
      "country_code": "ES"
    },
    {
      "city": "Chiayi",
      "latitude": 23.48,
      "longitude": 120.4497,
      "country_code": "TW"
    },
    {
      "city": "Fuchū",
      "latitude": 35.6689,
      "longitude": 139.4778,
      "country_code": "JP"
    },
    {
      "city": "Palmas",
      "latitude": -10.2128,
      "longitude": -48.3603,
      "country_code": "BR"
    },
    {
      "city": "Craiova",
      "latitude": 44.3333,
      "longitude": 23.8167,
      "country_code": "RO"
    },
    {
      "city": "Maradi",
      "latitude": 13.5,
      "longitude": 7.1,
      "country_code": "NE"
    },
    {
      "city": "Sorong",
      "latitude": -0.8667,
      "longitude": 131.25,
      "country_code": "ID"
    },
    {
      "city": "Majene",
      "latitude": -3.5336,
      "longitude": 118.966,
      "country_code": "ID"
    },
    {
      "city": "Bukhara",
      "latitude": 39.7747,
      "longitude": 64.4286,
      "country_code": "UZ"
    },
    {
      "city": "Thái Bình",
      "latitude": 20.4461,
      "longitude": 106.3422,
      "country_code": "VN"
    },
    {
      "city": "Binjai",
      "latitude": 3.6,
      "longitude": 98.4853,
      "country_code": "ID"
    },
    {
      "city": "Oral",
      "latitude": 51.2333,
      "longitude": 51.3667,
      "country_code": "KZ"
    },
    {
      "city": "Brāhmanbāria",
      "latitude": 23.9667,
      "longitude": 91.1,
      "country_code": "BD"
    },
    {
      "city": "Sartā",
      "latitude": 36.5504,
      "longitude": 53.1,
      "country_code": "IR"
    },
    {
      "city": "Imphāl",
      "latitude": 24.82,
      "longitude": 93.95,
      "country_code": "IN"
    },
    {
      "city": "Plymouth",
      "latitude": 50.3714,
      "longitude": -4.1422,
      "country_code": "GB"
    },
    {
      "city": "Ichihara",
      "latitude": 35.4981,
      "longitude": 140.1156,
      "country_code": "JP"
    },
    {
      "city": "Santo Domingo de los Colorados",
      "latitude": -0.2542,
      "longitude": -79.1719,
      "country_code": "EC"
    },
    {
      "city": "Novorossiysk",
      "latitude": 44.7167,
      "longitude": 37.7667,
      "country_code": "RU"
    },
    {
      "city": "Santa Ana",
      "latitude": 13.9833,
      "longitude": -89.5333,
      "country_code": "SV"
    },
    {
      "city": "Zhytomyr",
      "latitude": 50.2544,
      "longitude": 28.6578,
      "country_code": "UA"
    },
    {
      "city": "Mito",
      "latitude": 36.3667,
      "longitude": 140.4667,
      "country_code": "JP"
    },
    {
      "city": "Gombe",
      "latitude": 10.2904,
      "longitude": 11.17,
      "country_code": "NG"
    },
    {
      "city": "Espoo",
      "latitude": 60.21,
      "longitude": 24.66,
      "country_code": "FI"
    },
    {
      "city": "Drug",
      "latitude": 21.19,
      "longitude": 81.28,
      "country_code": "IN"
    },
    {
      "city": "Bamenda",
      "latitude": 5.9333,
      "longitude": 10.1667,
      "country_code": "CM"
    },
    {
      "city": "Handwāra",
      "latitude": 34.4,
      "longitude": 74.28,
      "country_code": "IN"
    },
    {
      "city": "Lucena",
      "latitude": 13.9333,
      "longitude": 121.6167,
      "country_code": "PH"
    },
    {
      "city": "Canton",
      "latitude": 40.8075,
      "longitude": -81.3677,
      "country_code": "US"
    },
    {
      "city": "Yoshkar-Ola",
      "latitude": 56.6328,
      "longitude": 47.8958,
      "country_code": "RU"
    },
    {
      "city": "Nalchik",
      "latitude": 43.4833,
      "longitude": 43.6167,
      "country_code": "RU"
    },
    {
      "city": "Aswān",
      "latitude": 24.0889,
      "longitude": 32.8997,
      "country_code": "EG"
    },
    {
      "city": "Salamanca",
      "latitude": 20.5703,
      "longitude": -101.1972,
      "country_code": "MX"
    },
    {
      "city": "İnegöl",
      "latitude": 40.0806,
      "longitude": 29.5097,
      "country_code": "TR"
    },
    {
      "city": "Chernivtsi",
      "latitude": 48.2908,
      "longitude": 25.9344,
      "country_code": "UA"
    },
    {
      "city": "Yao",
      "latitude": 34.6269,
      "longitude": 135.6008,
      "country_code": "JP"
    },
    {
      "city": "Sumaré",
      "latitude": -22.8219,
      "longitude": -47.2669,
      "country_code": "BR"
    },
    {
      "city": "Lubbock",
      "latitude": 33.5659,
      "longitude": -101.8878,
      "country_code": "US"
    },
    {
      "city": "Yanbu‘",
      "latitude": 24.0943,
      "longitude": 38.0493,
      "country_code": "SA"
    },
    {
      "city": "Sumy",
      "latitude": 50.9068,
      "longitude": 34.7992,
      "country_code": "UA"
    },
    {
      "city": "Tshikapa",
      "latitude": -6.4167,
      "longitude": 20.8,
      "country_code": "CD"
    },
    {
      "city": "Anantapur",
      "latitude": 14.6833,
      "longitude": 77.6,
      "country_code": "IN"
    },
    {
      "city": "San Pablo",
      "latitude": 14.0667,
      "longitude": 121.3167,
      "country_code": "PH"
    },
    {
      "city": "Reading",
      "latitude": 40.34,
      "longitude": -75.9267,
      "country_code": "US"
    },
    {
      "city": "Winter Haven",
      "latitude": 28.0118,
      "longitude": -81.7017,
      "country_code": "US"
    },
    {
      "city": "Myeik",
      "latitude": 12.4394,
      "longitude": 98.6003,
      "country_code": "MM"
    },
    {
      "city": "Marabá",
      "latitude": -5.3689,
      "longitude": -49.1178,
      "country_code": "BR"
    },
    {
      "city": "Kütahya",
      "latitude": 39.4242,
      "longitude": 29.9833,
      "country_code": "TR"
    },
    {
      "city": "Salem",
      "latitude": 44.9231,
      "longitude": -123.0246,
      "country_code": "US"
    },
    {
      "city": "Djelfa",
      "latitude": 34.6667,
      "longitude": 3.25,
      "country_code": "DZ"
    },
    {
      "city": "Petrolina",
      "latitude": -9.38,
      "longitude": -40.51,
      "country_code": "BR"
    },
    {
      "city": "Suncheon",
      "latitude": 34.9506,
      "longitude": 127.4875,
      "country_code": "KR"
    },
    {
      "city": "St. Petersburg",
      "latitude": 27.7931,
      "longitude": -82.6652,
      "country_code": "US"
    },
    {
      "city": "Dera Ghazi Khan",
      "latitude": 30.05,
      "longitude": 70.6333,
      "country_code": "PK"
    },
    {
      "city": "Kindu",
      "latitude": -2.95,
      "longitude": 25.9167,
      "country_code": "CD"
    },
    {
      "city": "Oruro",
      "latitude": -17.9667,
      "longitude": -67.1167,
      "country_code": "BO"
    },
    {
      "city": "Dezfūl",
      "latitude": 32.3878,
      "longitude": 48.4033,
      "country_code": "IR"
    },
    {
      "city": "Osmaniye",
      "latitude": 37.075,
      "longitude": 36.25,
      "country_code": "TR"
    },
    {
      "city": "Lafayette",
      "latitude": 30.2084,
      "longitude": -92.0323,
      "country_code": "US"
    },
    {
      "city": "Kyŏngju",
      "latitude": 35.85,
      "longitude": 129.2167,
      "country_code": "KR"
    },
    {
      "city": "Dumai",
      "latitude": 1.6667,
      "longitude": 101.45,
      "country_code": "ID"
    },
    {
      "city": "Kakogawachō-honmachi",
      "latitude": 34.7569,
      "longitude": 134.8414,
      "country_code": "JP"
    },
    {
      "city": "Gent",
      "latitude": 51.0536,
      "longitude": 3.7253,
      "country_code": "BE"
    },
    {
      "city": "Geelong",
      "latitude": -38.15,
      "longitude": 144.35,
      "country_code": "AU"
    },
    {
      "city": "Çorlu",
      "latitude": 41.1597,
      "longitude": 27.8028,
      "country_code": "TR"
    },
    {
      "city": "Nawabshah",
      "latitude": 26.2442,
      "longitude": 68.41,
      "country_code": "PK"
    },
    {
      "city": "Gelsenkirchen",
      "latitude": 51.5167,
      "longitude": 7.1,
      "country_code": "DE"
    },
    {
      "city": "Fukui",
      "latitude": 36.0641,
      "longitude": 136.2196,
      "country_code": "JP"
    },
    {
      "city": "Mönchengladbach",
      "latitude": 51.2,
      "longitude": 6.4333,
      "country_code": "DE"
    },
    {
      "city": "Bordeaux",
      "latitude": 44.84,
      "longitude": -0.58,
      "country_code": "FR"
    },
    {
      "city": "Annaba",
      "latitude": 36.9,
      "longitude": 7.7667,
      "country_code": "DZ"
    },
    {
      "city": "Venice",
      "latitude": 45.4397,
      "longitude": 12.3319,
      "country_code": "IT"
    },
    {
      "city": "Barueri",
      "latitude": -23.5111,
      "longitude": -46.8764,
      "country_code": "BR"
    },
    {
      "city": "Nonthaburi",
      "latitude": 13.8667,
      "longitude": 100.5167,
      "country_code": "TH"
    },
    {
      "city": "Laredo",
      "latitude": 27.5629,
      "longitude": -99.4875,
      "country_code": "US"
    },
    {
      "city": "Jersey City",
      "latitude": 40.7161,
      "longitude": -74.0682,
      "country_code": "US"
    },
    {
      "city": "Quảng Ngãi",
      "latitude": 15.1206,
      "longitude": 108.7922,
      "country_code": "VN"
    },
    {
      "city": "Concord",
      "latitude": 35.3933,
      "longitude": -80.6366,
      "country_code": "US"
    },
    {
      "city": "Damanhūr",
      "latitude": 31.05,
      "longitude": 30.4667,
      "country_code": "EG"
    },
    {
      "city": "Dongta",
      "latitude": 38.0937,
      "longitude": 106.3321,
      "country_code": "CN"
    },
    {
      "city": "Ciudad Benito Juárez",
      "latitude": 25.65,
      "longitude": -100.0833,
      "country_code": "MX"
    },
    {
      "city": "Cascavel",
      "latitude": -24.9558,
      "longitude": -53.4553,
      "country_code": "BR"
    },
    {
      "city": "Hiratsuka",
      "latitude": 35.3231,
      "longitude": 139.3422,
      "country_code": "JP"
    },
    {
      "city": "Columbus",
      "latitude": 32.51,
      "longitude": -84.8771,
      "country_code": "US"
    },
    {
      "city": "Chandler",
      "latitude": 33.2826,
      "longitude": -111.8516,
      "country_code": "US"
    },
    {
      "city": "Governador Valadares",
      "latitude": -18.87,
      "longitude": -41.97,
      "country_code": "BR"
    },
    {
      "city": "Sakarya",
      "latitude": 40.7778,
      "longitude": 30.4028,
      "country_code": "TR"
    },
    {
      "city": "Tagum",
      "latitude": 7.4478,
      "longitude": 125.8078,
      "country_code": "PH"
    },
    {
      "city": "Kunduz",
      "latitude": 36.728,
      "longitude": 68.8725,
      "country_code": "AF"
    },
    {
      "city": "Ciudad Santa Catarina",
      "latitude": 25.6833,
      "longitude": -100.45,
      "country_code": "MX"
    },
    {
      "city": "Los Mochis",
      "latitude": 25.7835,
      "longitude": -108.9937,
      "country_code": "MX"
    },
    {
      "city": "Sōka",
      "latitude": 35.8256,
      "longitude": 139.8056,
      "country_code": "JP"
    },
    {
      "city": "Texcoco",
      "latitude": 19.52,
      "longitude": -98.88,
      "country_code": "MX"
    },
    {
      "city": "Mişrātah",
      "latitude": 32.3778,
      "longitude": 15.0901,
      "country_code": "LY"
    },
    {
      "city": "Isparta",
      "latitude": 37.7667,
      "longitude": 30.55,
      "country_code": "TR"
    },
    {
      "city": "Etāwah",
      "latitude": 26.7855,
      "longitude": 79.015,
      "country_code": "IN"
    },
    {
      "city": "Huayin",
      "latitude": 34.5664,
      "longitude": 110.0866,
      "country_code": "CN"
    },
    {
      "city": "McKinney",
      "latitude": 33.2015,
      "longitude": -96.6669,
      "country_code": "US"
    },
    {
      "city": "Playa del Carmen",
      "latitude": 20.6275,
      "longitude": -87.0811,
      "country_code": "MX"
    },
    {
      "city": "Scottsdale",
      "latitude": 33.6872,
      "longitude": -111.8651,
      "country_code": "US"
    },
    {
      "city": "Wolverhampton",
      "latitude": 52.5833,
      "longitude": -2.1333,
      "country_code": "GB"
    },
    {
      "city": "Killeen",
      "latitude": 31.0754,
      "longitude": -97.7296,
      "country_code": "US"
    },
    {
      "city": "Bergen",
      "latitude": 60.3925,
      "longitude": 5.3233,
      "country_code": "NO"
    },
    {
      "city": "Tallahassee",
      "latitude": 30.4551,
      "longitude": -84.2526,
      "country_code": "US"
    },
    {
      "city": "Shinozaki",
      "latitude": 33.95,
      "longitude": 130.9333,
      "country_code": "JP"
    },
    {
      "city": "Horlivka",
      "latitude": 48.3336,
      "longitude": 38.0925,
      "country_code": "UA"
    },
    {
      "city": "Antsirabe",
      "latitude": -19.8667,
      "longitude": 47.0333,
      "country_code": "MG"
    },
    {
      "city": "Ondo",
      "latitude": 7.0904,
      "longitude": 4.84,
      "country_code": "NG"
    },
    {
      "city": "Hakodate",
      "latitude": 41.7733,
      "longitude": 140.7261,
      "country_code": "JP"
    },
    {
      "city": "Ấp Đa Lợi",
      "latitude": 11.9304,
      "longitude": 108.42,
      "country_code": "VN"
    },
    {
      "city": "Foz do Iguaçu",
      "latitude": -25.5478,
      "longitude": -54.5878,
      "country_code": "BR"
    },
    {
      "city": "Tokushima",
      "latitude": 34.0667,
      "longitude": 134.55,
      "country_code": "JP"
    },
    {
      "city": "Peoria",
      "latitude": 40.752,
      "longitude": -89.6153,
      "country_code": "US"
    },
    {
      "city": "Santa Maria",
      "latitude": -29.6833,
      "longitude": -53.8,
      "country_code": "BR"
    },
    {
      "city": "Kediri",
      "latitude": -7.8166,
      "longitude": 112.0119,
      "country_code": "ID"
    },
    {
      "city": "Fort-de-France",
      "latitude": 14.6104,
      "longitude": -61.08,
      "country_code": "MQ"
    },
    {
      "city": "Damaturu",
      "latitude": 11.75,
      "longitude": 11.9667,
      "country_code": "NG"
    },
    {
      "city": "Malolos",
      "latitude": 14.8433,
      "longitude": 120.8114,
      "country_code": "PH"
    },
    {
      "city": "La Paz",
      "latitude": 24.1422,
      "longitude": -110.3108,
      "country_code": "MX"
    },
    {
      "city": "Wilmington",
      "latitude": 34.21,
      "longitude": -77.8866,
      "country_code": "US"
    },
    {
      "city": "Rāichūr",
      "latitude": 16.2104,
      "longitude": 77.355,
      "country_code": "IN"
    },
    {
      "city": "Mawlamyine",
      "latitude": 16.4847,
      "longitude": 97.6258,
      "country_code": "MM"
    },
    {
      "city": "Turmero",
      "latitude": 10.2283,
      "longitude": -67.4753,
      "country_code": "VE"
    },
    {
      "city": "Kuala Terengganu",
      "latitude": 5.3303,
      "longitude": 103.1408,
      "country_code": "MY"
    },
    {
      "city": "Daloa",
      "latitude": 6.89,
      "longitude": -6.45,
      "country_code": "CI"
    },
    {
      "city": "Puerto Princesa",
      "latitude": 9.75,
      "longitude": 118.75,
      "country_code": "PH"
    },
    {
      "city": "Qarshi",
      "latitude": 38.8667,
      "longitude": 65.8,
      "country_code": "UZ"
    },
    {
      "city": "Montgomery",
      "latitude": 32.3473,
      "longitude": -86.2666,
      "country_code": "US"
    },
    {
      "city": "Gilbert",
      "latitude": 33.3101,
      "longitude": -111.7463,
      "country_code": "US"
    },
    {
      "city": "Rishon LeẔiyyon",
      "latitude": 31.95,
      "longitude": 34.8,
      "country_code": "IL"
    },
    {
      "city": "Ongole",
      "latitude": 15.5,
      "longitude": 80.05,
      "country_code": "IN"
    },
    {
      "city": "Arua",
      "latitude": 3.03,
      "longitude": 30.91,
      "country_code": "UG"
    },
    {
      "city": "Verona",
      "latitude": 45.4386,
      "longitude": 10.9928,
      "country_code": "IT"
    },
    {
      "city": "Bharatpur",
      "latitude": 27.2172,
      "longitude": 77.49,
      "country_code": "IN"
    },
    {
      "city": "Rạch Giá",
      "latitude": 10.0125,
      "longitude": 105.0808,
      "country_code": "VN"
    },
    {
      "city": "Kanggye",
      "latitude": 40.9667,
      "longitude": 126.6,
      "country_code": "KP"
    },
    {
      "city": "Taganrog",
      "latitude": 47.2333,
      "longitude": 38.9,
      "country_code": "RU"
    },
    {
      "city": "Buenaventura",
      "latitude": 3.8724,
      "longitude": -77.0505,
      "country_code": "CO"
    },
    {
      "city": "Kızıltepe",
      "latitude": 37.1939,
      "longitude": 40.5861,
      "country_code": "TR"
    },
    {
      "city": "Vitoria-Gasteiz",
      "latitude": 42.8467,
      "longitude": -2.6731,
      "country_code": "ES"
    },
    {
      "city": "El Fasher",
      "latitude": 13.63,
      "longitude": 25.35,
      "country_code": "SD"
    },
    {
      "city": "Várzea Grande",
      "latitude": -15.65,
      "longitude": -56.14,
      "country_code": "BR"
    },
    {
      "city": "Glendale",
      "latitude": 33.5791,
      "longitude": -112.2311,
      "country_code": "US"
    },
    {
      "city": "Santiago del Estero",
      "latitude": -27.7844,
      "longitude": -64.2669,
      "country_code": "AR"
    },
    {
      "city": "Uşak",
      "latitude": 38.6833,
      "longitude": 29.4,
      "country_code": "TR"
    },
    {
      "city": "Begusarai",
      "latitude": 25.42,
      "longitude": 86.13,
      "country_code": "IN"
    },
    {
      "city": "North Las Vegas",
      "latitude": 36.288,
      "longitude": -115.0901,
      "country_code": "US"
    },
    {
      "city": "Sonīpat",
      "latitude": 28.9958,
      "longitude": 77.0114,
      "country_code": "IN"
    },
    {
      "city": "Los Teques",
      "latitude": 10.3411,
      "longitude": -67.0406,
      "country_code": "VE"
    },
    {
      "city": "Mabalacat",
      "latitude": 15.2167,
      "longitude": 120.5833,
      "country_code": "PH"
    },
    {
      "city": "Jinshi",
      "latitude": 29.6334,
      "longitude": 111.8746,
      "country_code": "CN"
    },
    {
      "city": "Osh",
      "latitude": 40.5333,
      "longitude": 72.7833,
      "country_code": "KG"
    },
    {
      "city": "Iwo",
      "latitude": 7.63,
      "longitude": 4.18,
      "country_code": "NG"
    },
    {
      "city": "Bata",
      "latitude": 1.85,
      "longitude": 9.75,
      "country_code": "GQ"
    },
    {
      "city": "Chōfugaoka",
      "latitude": 35.6506,
      "longitude": 139.5408,
      "country_code": "JP"
    },
    {
      "city": "Komsomol’sk-na-Amure",
      "latitude": 50.55,
      "longitude": 137,
      "country_code": "RU"
    },
    {
      "city": "Bābol",
      "latitude": 36.55,
      "longitude": 52.6833,
      "country_code": "IR"
    },
    {
      "city": "Galaţi",
      "latitude": 45.4233,
      "longitude": 28.0425,
      "country_code": "RO"
    },
    {
      "city": "Al Bayḑā’",
      "latitude": 32.7628,
      "longitude": 21.755,
      "country_code": "LY"
    },
    {
      "city": "Yamagata",
      "latitude": 38.25,
      "longitude": 140.3333,
      "country_code": "JP"
    },
    {
      "city": "Manzhouli",
      "latitude": 49.5881,
      "longitude": 117.4525,
      "country_code": "CN"
    },
    {
      "city": "Kiel",
      "latitude": 54.3233,
      "longitude": 10.1394,
      "country_code": "DE"
    },
    {
      "city": "Braunschweig",
      "latitude": 52.2692,
      "longitude": 10.5211,
      "country_code": "DE"
    },
    {
      "city": "Rivne",
      "latitude": 50.6197,
      "longitude": 26.2514,
      "country_code": "UA"
    },
    {
      "city": "Gdynia",
      "latitude": 54.5189,
      "longitude": 18.5319,
      "country_code": "PL"
    },
    {
      "city": "Palangkaraya",
      "latitude": -2.21,
      "longitude": 113.92,
      "country_code": "ID"
    },
    {
      "city": "Al Minyā",
      "latitude": 28.0833,
      "longitude": 30.75,
      "country_code": "EG"
    },
    {
      "city": "Ḩafr al Bāţin",
      "latitude": 28.4337,
      "longitude": 45.9601,
      "country_code": "SA"
    },
    {
      "city": "Caruaru",
      "latitude": -8.28,
      "longitude": -35.98,
      "country_code": "BR"
    },
    {
      "city": "San Bernardo",
      "latitude": -33.6,
      "longitude": -70.7,
      "country_code": "CL"
    },
    {
      "city": "Būkān",
      "latitude": 36.5208,
      "longitude": 46.2117,
      "country_code": "IR"
    },
    {
      "city": "Aachen",
      "latitude": 50.7762,
      "longitude": 6.0838,
      "country_code": "DE"
    },
    {
      "city": "Sahiwal",
      "latitude": 30.6706,
      "longitude": 73.1064,
      "country_code": "PK"
    },
    {
      "city": "Chigasaki",
      "latitude": 35.3339,
      "longitude": 139.4047,
      "country_code": "JP"
    },
    {
      "city": "Thủ Dầu Một",
      "latitude": 11.0042,
      "longitude": 106.6583,
      "country_code": "VN"
    },
    {
      "city": "Sibu",
      "latitude": 2.3,
      "longitude": 111.8167,
      "country_code": "MY"
    },
    {
      "city": "Anchorage",
      "latitude": 61.1508,
      "longitude": -149.1091,
      "country_code": "US"
    },
    {
      "city": "Paraná",
      "latitude": -31.7444,
      "longitude": -60.5175,
      "country_code": "AR"
    },
    {
      "city": "Oruro",
      "latitude": -17.98,
      "longitude": -67.13,
      "country_code": "BO"
    },
    {
      "city": "Merlo",
      "latitude": -34.6653,
      "longitude": -58.7275,
      "country_code": "AR"
    },
    {
      "city": "Syktyvkar",
      "latitude": 61.6667,
      "longitude": 50.8167,
      "country_code": "RU"
    },
    {
      "city": "Khimki",
      "latitude": 55.8892,
      "longitude": 37.445,
      "country_code": "RU"
    },
    {
      "city": "Birāṭnagar",
      "latitude": 26.4833,
      "longitude": 87.2833,
      "country_code": "NP"
    },
    {
      "city": "Chemnitz",
      "latitude": 50.8333,
      "longitude": 12.9167,
      "country_code": "DE"
    },
    {
      "city": "Saskatoon",
      "latitude": 52.1333,
      "longitude": -106.6833,
      "country_code": "CA"
    },
    {
      "city": "Yato",
      "latitude": 35.4693,
      "longitude": 139.4616,
      "country_code": "JP"
    },
    {
      "city": "Colón",
      "latitude": 9.3598,
      "longitude": -79.9004,
      "country_code": "PA"
    },
    {
      "city": "Abertawe",
      "latitude": 51.6167,
      "longitude": -3.95,
      "country_code": "GB"
    },
    {
      "city": "Fuji",
      "latitude": 35.1614,
      "longitude": 138.6764,
      "country_code": "JP"
    },
    {
      "city": "Puerto Montt",
      "latitude": -41.4718,
      "longitude": -72.9396,
      "country_code": "CL"
    },
    {
      "city": "Jessore",
      "latitude": 23.1704,
      "longitude": 89.2,
      "country_code": "BD"
    },
    {
      "city": "Beichengqu",
      "latitude": 40.4348,
      "longitude": 113.1565,
      "country_code": "CN"
    },
    {
      "city": "Tuy Hòa",
      "latitude": 13.0875,
      "longitude": 109.3106,
      "country_code": "VN"
    },
    {
      "city": "Shrīrāmpur",
      "latitude": 22.75,
      "longitude": 88.34,
      "country_code": "IN"
    },
    {
      "city": "Chesapeake",
      "latitude": 36.6778,
      "longitude": -76.3024,
      "country_code": "US"
    },
    {
      "city": "Hāpur",
      "latitude": 28.7437,
      "longitude": 77.7628,
      "country_code": "IN"
    },
    {
      "city": "Bahir Dar",
      "latitude": 11.585,
      "longitude": 37.39,
      "country_code": "ET"
    },
    {
      "city": "Manisa",
      "latitude": 38.6131,
      "longitude": 27.4258,
      "country_code": "TR"
    },
    {
      "city": "Tanga",
      "latitude": -5.0667,
      "longitude": 39.1,
      "country_code": "TZ"
    },
    {
      "city": "Sabzevār",
      "latitude": 36.2167,
      "longitude": 57.6667,
      "country_code": "IR"
    },
    {
      "city": "Rāmgundam",
      "latitude": 18.8,
      "longitude": 79.45,
      "country_code": "IN"
    },
    {
      "city": "Porto",
      "latitude": 41.1495,
      "longitude": -8.6108,
      "country_code": "PT"
    },
    {
      "city": "Tacloban",
      "latitude": 11.2444,
      "longitude": 125.0039,
      "country_code": "PH"
    },
    {
      "city": "Myitkyina",
      "latitude": 25.3867,
      "longitude": 97.3936,
      "country_code": "MM"
    },
    {
      "city": "Barnstable",
      "latitude": 41.6722,
      "longitude": -70.3599,
      "country_code": "US"
    },
    {
      "city": "Haeju",
      "latitude": 38.0333,
      "longitude": 125.7167,
      "country_code": "KP"
    },
    {
      "city": "Petaẖ Tiqwa",
      "latitude": 32.0833,
      "longitude": 34.8833,
      "country_code": "IL"
    },
    {
      "city": "Norfolk",
      "latitude": 36.8945,
      "longitude": -76.259,
      "country_code": "US"
    },
    {
      "city": "González Catán",
      "latitude": -34.7708,
      "longitude": -58.6464,
      "country_code": "AR"
    },
    {
      "city": "Juazeiro do Norte",
      "latitude": -7.21,
      "longitude": -39.32,
      "country_code": "BR"
    },
    {
      "city": "Diaobingshancun",
      "latitude": 42.4391,
      "longitude": 123.5426,
      "country_code": "CN"
    },
    {
      "city": "Tarapoto",
      "latitude": -6.4833,
      "longitude": -76.3667,
      "country_code": "PE"
    },
    {
      "city": "Zhangping",
      "latitude": 25.2938,
      "longitude": 117.4148,
      "country_code": "CN"
    },
    {
      "city": "San Juan del Río",
      "latitude": 20.3833,
      "longitude": -99.9833,
      "country_code": "MX"
    },
    {
      "city": "Tsukuba-kenkyūgakuen-toshi",
      "latitude": 36.0333,
      "longitude": 140.0667,
      "country_code": "JP"
    },
    {
      "city": "São Carlos",
      "latitude": -22.0178,
      "longitude": -47.8908,
      "country_code": "BR"
    },
    {
      "city": "Ilhéus",
      "latitude": -14.7936,
      "longitude": -39.0395,
      "country_code": "BR"
    },
    {
      "city": "Fremont",
      "latitude": 37.5265,
      "longitude": -121.9852,
      "country_code": "US"
    },
    {
      "city": "Halle",
      "latitude": 51.4828,
      "longitude": 11.9697,
      "country_code": "DE"
    },
    {
      "city": "Düzce",
      "latitude": 40.8417,
      "longitude": 31.1583,
      "country_code": "TR"
    },
    {
      "city": "Anju",
      "latitude": 39.6167,
      "longitude": 125.6667,
      "country_code": "KP"
    },
    {
      "city": "Aarhus",
      "latitude": 56.1572,
      "longitude": 10.2107,
      "country_code": "DK"
    },
    {
      "city": "Kennewick",
      "latitude": 46.1978,
      "longitude": -119.1732,
      "country_code": "US"
    },
    {
      "city": "Hobart",
      "latitude": -42.8806,
      "longitude": 147.325,
      "country_code": "AU"
    },
    {
      "city": "Artux",
      "latitude": 39.7114,
      "longitude": 76.1753,
      "country_code": "CN"
    },
    {
      "city": "Chimoio",
      "latitude": -19.1167,
      "longitude": 33.45,
      "country_code": "MZ"
    },
    {
      "city": "Limassol",
      "latitude": 34.675,
      "longitude": 33.0443,
      "country_code": "CY"
    },
    {
      "city": "Garland",
      "latitude": 32.91,
      "longitude": -96.6305,
      "country_code": "US"
    },
    {
      "city": "Magdeburg",
      "latitude": 52.1278,
      "longitude": 11.6292,
      "country_code": "DE"
    },
    {
      "city": "Irving",
      "latitude": 32.8584,
      "longitude": -96.9702,
      "country_code": "US"
    },
    {
      "city": "Hachimanchō",
      "latitude": 40.51,
      "longitude": 141.54,
      "country_code": "JP"
    },
    {
      "city": "Longueuil",
      "latitude": 45.5333,
      "longitude": -73.5167,
      "country_code": "CA"
    },
    {
      "city": "Mokpo",
      "latitude": 34.7936,
      "longitude": 126.3886,
      "country_code": "KR"
    },
    {
      "city": "Košice",
      "latitude": 48.7167,
      "longitude": 21.25,
      "country_code": "SK"
    },
    {
      "city": "‘Ajmān",
      "latitude": 25.3994,
      "longitude": 55.4797,
      "country_code": "AE"
    },
    {
      "city": "Lille",
      "latitude": 50.6278,
      "longitude": 3.0583,
      "country_code": "FR"
    },
    {
      "city": "Neya",
      "latitude": 34.7661,
      "longitude": 135.6281,
      "country_code": "JP"
    },
    {
      "city": "Banda Aceh",
      "latitude": 5.55,
      "longitude": 95.3175,
      "country_code": "ID"
    },
    {
      "city": "Le Havre",
      "latitude": 49.49,
      "longitude": 0.1,
      "country_code": "FR"
    },
    {
      "city": "Taiping",
      "latitude": 4.85,
      "longitude": 100.7333,
      "country_code": "MY"
    },
    {
      "city": "P’yŏng-dong",
      "latitude": 39.25,
      "longitude": 125.85,
      "country_code": "KP"
    },
    {
      "city": "Springs",
      "latitude": -26.2547,
      "longitude": 28.4428,
      "country_code": "ZA"
    },
    {
      "city": "Ivano-Frankivsk",
      "latitude": 48.9228,
      "longitude": 24.7106,
      "country_code": "UA"
    },
    {
      "city": "As Sīb",
      "latitude": 23.6802,
      "longitude": 58.1825,
      "country_code": "OM"
    },
    {
      "city": "Nārāyanganj",
      "latitude": 23.6167,
      "longitude": 90.5,
      "country_code": "BD"
    },
    {
      "city": "Wuyishan",
      "latitude": 27.7562,
      "longitude": 118.0267,
      "country_code": "CN"
    },
    {
      "city": "Sato",
      "latitude": 33.1631,
      "longitude": 129.7177,
      "country_code": "JP"
    },
    {
      "city": "Āmol",
      "latitude": 36.4669,
      "longitude": 52.3569,
      "country_code": "IR"
    },
    {
      "city": "Quilmes",
      "latitude": -34.7167,
      "longitude": -58.2667,
      "country_code": "AR"
    },
    {
      "city": "Mirpur Khas",
      "latitude": 25.5269,
      "longitude": 69.0111,
      "country_code": "PK"
    },
    {
      "city": "Nizhnekamsk",
      "latitude": 55.6333,
      "longitude": 51.8167,
      "country_code": "RU"
    },
    {
      "city": "Visalia",
      "latitude": 36.3276,
      "longitude": -119.3269,
      "country_code": "US"
    },
    {
      "city": "Al Jubayl",
      "latitude": 27.0046,
      "longitude": 49.646,
      "country_code": "SA"
    },
    {
      "city": "Pathein",
      "latitude": 16.7667,
      "longitude": 94.7333,
      "country_code": "MM"
    },
    {
      "city": "Secunderābād",
      "latitude": 17.45,
      "longitude": 78.5,
      "country_code": "IN"
    },
    {
      "city": "Chishui",
      "latitude": 28.5902,
      "longitude": 105.6946,
      "country_code": "CN"
    },
    {
      "city": "Centurion",
      "latitude": -25.8603,
      "longitude": 28.1894,
      "country_code": "ZA"
    },
    {
      "city": "Atlantic City",
      "latitude": 39.3797,
      "longitude": -74.4527,
      "country_code": "US"
    },
    {
      "city": "Uluberiya",
      "latitude": 22.47,
      "longitude": 88.11,
      "country_code": "IN"
    },
    {
      "city": "Shakhty",
      "latitude": 47.7,
      "longitude": 40.2333,
      "country_code": "RU"
    },
    {
      "city": "Messina",
      "latitude": 38.1833,
      "longitude": 15.55,
      "country_code": "IT"
    },
    {
      "city": "Pākdasht",
      "latitude": 35.4817,
      "longitude": 51.6803,
      "country_code": "IR"
    },
    {
      "city": "El Tigre",
      "latitude": 8.8858,
      "longitude": -64.2611,
      "country_code": "VE"
    },
    {
      "city": "Kremenchuk",
      "latitude": 49.0775,
      "longitude": 33.4239,
      "country_code": "UA"
    },
    {
      "city": "Abhā",
      "latitude": 18.2167,
      "longitude": 42.5,
      "country_code": "SA"
    },
    {
      "city": "Ibb",
      "latitude": 13.9759,
      "longitude": 44.1709,
      "country_code": "YE"
    },
    {
      "city": "Garoua",
      "latitude": 9.3,
      "longitude": 13.4,
      "country_code": "CM"
    },
    {
      "city": "Bole",
      "latitude": 44.898,
      "longitude": 82.0726,
      "country_code": "CN"
    },
    {
      "city": "Najafābād",
      "latitude": 32.6342,
      "longitude": 51.3667,
      "country_code": "IR"
    },
    {
      "city": "Bayamo",
      "latitude": 20.3817,
      "longitude": -76.6428,
      "country_code": "CU"
    },
    {
      "city": "Porbandar",
      "latitude": 21.6425,
      "longitude": 69.6047,
      "country_code": "IN"
    },
    {
      "city": "Granada",
      "latitude": 37.1781,
      "longitude": -3.6008,
      "country_code": "ES"
    },
    {
      "city": "Kamianske",
      "latitude": 48.5076,
      "longitude": 34.6132,
      "country_code": "UA"
    },
    {
      "city": "Borūjerd",
      "latitude": 33.8972,
      "longitude": 48.7514,
      "country_code": "IR"
    },
    {
      "city": "Singaraja",
      "latitude": -8.1152,
      "longitude": 115.0944,
      "country_code": "ID"
    },
    {
      "city": "Miri",
      "latitude": 4.4028,
      "longitude": 113.9933,
      "country_code": "MY"
    },
    {
      "city": "Machala",
      "latitude": -3.2667,
      "longitude": -79.9667,
      "country_code": "EC"
    },
    {
      "city": "Longquan",
      "latitude": 28.0733,
      "longitude": 119.1277,
      "country_code": "CN"
    },
    {
      "city": "Monclova",
      "latitude": 26.9103,
      "longitude": -101.4222,
      "country_code": "MX"
    },
    {
      "city": "Puducherry",
      "latitude": 11.93,
      "longitude": 79.83,
      "country_code": "IN"
    },
    {
      "city": "Olongapo",
      "latitude": 14.8333,
      "longitude": 120.2833,
      "country_code": "PH"
    },
    {
      "city": "Saga",
      "latitude": 33.2667,
      "longitude": 130.3,
      "country_code": "JP"
    },
    {
      "city": "Nashua",
      "latitude": 42.7491,
      "longitude": -71.491,
      "country_code": "US"
    },
    {
      "city": "Santarém",
      "latitude": -2.4431,
      "longitude": -54.7083,
      "country_code": "BR"
    },
    {
      "city": "Paradise",
      "latitude": 36.0807,
      "longitude": -115.1369,
      "country_code": "US"
    },
    {
      "city": "Okara",
      "latitude": 30.81,
      "longitude": 73.4597,
      "country_code": "PK"
    },
    {
      "city": "Kasukabe",
      "latitude": 35.9753,
      "longitude": 139.7525,
      "country_code": "JP"
    },
    {
      "city": "Talisay",
      "latitude": 10.25,
      "longitude": 123.8333,
      "country_code": "PH"
    },
    {
      "city": "Hialeah",
      "latitude": 25.8696,
      "longitude": -80.3046,
      "country_code": "US"
    },
    {
      "city": "Saidpur",
      "latitude": 25.8004,
      "longitude": 89,
      "country_code": "BD"
    },
    {
      "city": "York",
      "latitude": 39.9651,
      "longitude": -76.7315,
      "country_code": "US"
    },
    {
      "city": "Burnaby",
      "latitude": 49.2667,
      "longitude": -122.9667,
      "country_code": "CA"
    },
    {
      "city": "Rancagua",
      "latitude": -34.1654,
      "longitude": -70.7398,
      "country_code": "CL"
    },
    {
      "city": "Dzerzhinsk",
      "latitude": 56.2333,
      "longitude": 43.45,
      "country_code": "RU"
    },
    {
      "city": "Milton Keynes",
      "latitude": 52.04,
      "longitude": -0.76,
      "country_code": "GB"
    },
    {
      "city": "Marília",
      "latitude": -22.2139,
      "longitude": -49.9458,
      "country_code": "BR"
    },
    {
      "city": "Barishal",
      "latitude": 22.7,
      "longitude": 90.3667,
      "country_code": "BD"
    },
    {
      "city": "Bratsk",
      "latitude": 56.1667,
      "longitude": 101.6167,
      "country_code": "RU"
    },
    {
      "city": "Jiayuguan",
      "latitude": 39.8112,
      "longitude": 98.2862,
      "country_code": "CN"
    },
    {
      "city": "Arlington",
      "latitude": 38.8786,
      "longitude": -77.1011,
      "country_code": "US"
    },
    {
      "city": "Indaiatuba",
      "latitude": -23.0903,
      "longitude": -47.2181,
      "country_code": "BR"
    },
    {
      "city": "Freiburg im Breisgau",
      "latitude": 47.9947,
      "longitude": 7.8497,
      "country_code": "DE"
    },
    {
      "city": "Madan",
      "latitude": 30.3392,
      "longitude": 48.3042,
      "country_code": "IR"
    },
    {
      "city": "Qarchak",
      "latitude": 35.4394,
      "longitude": 51.5689,
      "country_code": "IR"
    },
    {
      "city": "Itabuna",
      "latitude": -14.7896,
      "longitude": -39.28,
      "country_code": "BR"
    },
    {
      "city": "Neuquén",
      "latitude": -38.9573,
      "longitude": -68.0455,
      "country_code": "AR"
    },
    {
      "city": "Ibb",
      "latitude": 13.9667,
      "longitude": 44.1667,
      "country_code": "YE"
    },
    {
      "city": "Ageoshimo",
      "latitude": 35.9775,
      "longitude": 139.5933,
      "country_code": "JP"
    },
    {
      "city": "Badalona",
      "latitude": 41.4333,
      "longitude": 2.2333,
      "country_code": "ES"
    },
    {
      "city": "Singkawang",
      "latitude": 0.9,
      "longitude": 108.9833,
      "country_code": "ID"
    },
    {
      "city": "Orsk",
      "latitude": 51.2145,
      "longitude": 58.5441,
      "country_code": "RU"
    },
    {
      "city": "Vizianagaram",
      "latitude": 18.1167,
      "longitude": 83.4167,
      "country_code": "IN"
    },
    {
      "city": "Evansville",
      "latitude": 37.9881,
      "longitude": -87.5341,
      "country_code": "US"
    },
    {
      "city": "Cotia",
      "latitude": -23.6039,
      "longitude": -46.9189,
      "country_code": "BR"
    },
    {
      "city": "North Hempstead",
      "latitude": 40.7912,
      "longitude": -73.6688,
      "country_code": "US"
    },
    {
      "city": "Pāli",
      "latitude": 25.7725,
      "longitude": 73.3233,
      "country_code": "IN"
    },
    {
      "city": "Noginsk",
      "latitude": 64.4833,
      "longitude": 91.2333,
      "country_code": "RU"
    },
    {
      "city": "Kropyvnytskyi",
      "latitude": 48.5103,
      "longitude": 32.2667,
      "country_code": "UA"
    },
    {
      "city": "Częstochowa",
      "latitude": 50.8,
      "longitude": 19.1167,
      "country_code": "PL"
    },
    {
      "city": "Guantánamo",
      "latitude": 20.1383,
      "longitude": -75.2061,
      "country_code": "CU"
    },
    {
      "city": "Krefeld",
      "latitude": 51.3333,
      "longitude": 6.5667,
      "country_code": "DE"
    },
    {
      "city": "Guadalupe",
      "latitude": 22.7528,
      "longitude": -102.5078,
      "country_code": "MX"
    },
    {
      "city": "Kolpino",
      "latitude": 59.73,
      "longitude": 30.65,
      "country_code": "RU"
    },
    {
      "city": "Huixquilucan",
      "latitude": 19.3611,
      "longitude": -99.3508,
      "country_code": "MX"
    },
    {
      "city": "Burgas",
      "latitude": 42.5,
      "longitude": 27.4667,
      "country_code": "BG"
    },
    {
      "city": "Puerto Vallarta",
      "latitude": 20.6667,
      "longitude": -105.2667,
      "country_code": "MX"
    },
    {
      "city": "Avondale",
      "latitude": 33.3858,
      "longitude": -112.3236,
      "country_code": "US"
    },
    {
      "city": "Nyala",
      "latitude": 12.05,
      "longitude": 24.8833,
      "country_code": "SD"
    },
    {
      "city": "Brownsville",
      "latitude": 25.998,
      "longitude": -97.4565,
      "country_code": "US"
    },
    {
      "city": "Sakurazuka",
      "latitude": 34.8,
      "longitude": 135.3603,
      "country_code": "JP"
    },
    {
      "city": "Daşoguz",
      "latitude": 41.8167,
      "longitude": 59.9831,
      "country_code": "TM"
    },
    {
      "city": "Türkistan",
      "latitude": 43.3,
      "longitude": 68.2436,
      "country_code": "KZ"
    },
    {
      "city": "Probolinggo",
      "latitude": -7.75,
      "longitude": 113.2167,
      "country_code": "ID"
    },
    {
      "city": "Atsugichō",
      "latitude": 35.4333,
      "longitude": 139.3667,
      "country_code": "JP"
    },
    {
      "city": "Jacareí",
      "latitude": -23.305,
      "longitude": -45.9658,
      "country_code": "BR"
    },
    {
      "city": "Gusau",
      "latitude": 12.1704,
      "longitude": 6.66,
      "country_code": "NG"
    },
    {
      "city": "Buenavista",
      "latitude": 19.6083,
      "longitude": -99.1694,
      "country_code": "MX"
    },
    {
      "city": "Quetzaltenango",
      "latitude": 14.8333,
      "longitude": -91.5167,
      "country_code": "GT"
    },
    {
      "city": "Araraquara",
      "latitude": -21.7939,
      "longitude": -48.1758,
      "country_code": "BR"
    },
    {
      "city": "Angarsk",
      "latitude": 52.5667,
      "longitude": 103.9167,
      "country_code": "RU"
    },
    {
      "city": "Nāgercoil",
      "latitude": 8.17,
      "longitude": 77.43,
      "country_code": "IN"
    },
    {
      "city": "Heroica Nogales",
      "latitude": 31.3186,
      "longitude": -110.9458,
      "country_code": "MX"
    },
    {
      "city": "Apapa",
      "latitude": 6.4489,
      "longitude": 3.3589,
      "country_code": "NG"
    },
    {
      "city": "Nyanza",
      "latitude": -2.3496,
      "longitude": 29.74,
      "country_code": "RW"
    },
    {
      "city": "Itapevi",
      "latitude": -23.5489,
      "longitude": -46.9342,
      "country_code": "BR"
    },
    {
      "city": "Bạc Liêu",
      "latitude": 9.2833,
      "longitude": 105.7167,
      "country_code": "VN"
    },
    {
      "city": "Varāmīn",
      "latitude": 35.2714,
      "longitude": 51.6511,
      "country_code": "IR"
    },
    {
      "city": "Padangsidempuan",
      "latitude": 1.3667,
      "longitude": 99.2667,
      "country_code": "ID"
    },
    {
      "city": "Karnāl",
      "latitude": 29.6804,
      "longitude": 76.97,
      "country_code": "IN"
    },
    {
      "city": "Mubi",
      "latitude": 10.2686,
      "longitude": 13.267,
      "country_code": "NG"
    },
    {
      "city": "Toamasina",
      "latitude": -18.1492,
      "longitude": 49.4023,
      "country_code": "MG"
    },
    {
      "city": "Engels",
      "latitude": 51.4667,
      "longitude": 46.1167,
      "country_code": "RU"
    },
    {
      "city": "Campeche",
      "latitude": 19.85,
      "longitude": -90.5306,
      "country_code": "MX"
    },
    {
      "city": "Korolëv",
      "latitude": 55.9167,
      "longitude": 37.8167,
      "country_code": "RU"
    },
    {
      "city": "Cidade de Nacala",
      "latitude": -14.5186,
      "longitude": 40.715,
      "country_code": "MZ"
    },
    {
      "city": "Hunchun",
      "latitude": 42.8679,
      "longitude": 130.3585,
      "country_code": "CN"
    },
    {
      "city": "Tampere",
      "latitude": 61.4981,
      "longitude": 23.7608,
      "country_code": "FI"
    },
    {
      "city": "Minamiōzuma",
      "latitude": 36.2404,
      "longitude": 137.97,
      "country_code": "JP"
    },
    {
      "city": "Blagoveshchensk",
      "latitude": 50.2578,
      "longitude": 127.5364,
      "country_code": "RU"
    },
    {
      "city": "Velikiy Novgorod",
      "latitude": 58.521,
      "longitude": 31.2758,
      "country_code": "RU"
    },
    {
      "city": "Ashdod",
      "latitude": 31.7978,
      "longitude": 34.6503,
      "country_code": "IL"
    },
    {
      "city": "Carlos Manuel de Céspedes",
      "latitude": 21.5767,
      "longitude": -78.2775,
      "country_code": "CU"
    },
    {
      "city": "Niğde",
      "latitude": 37.9667,
      "longitude": 34.6792,
      "country_code": "TR"
    },
    {
      "city": "Sandton",
      "latitude": -26.107,
      "longitude": 28.0517,
      "country_code": "ZA"
    },
    {
      "city": "Tanjore",
      "latitude": 10.8,
      "longitude": 79.15,
      "country_code": "IN"
    },
    {
      "city": "Staryy Oskol",
      "latitude": 51.2981,
      "longitude": 37.835,
      "country_code": "RU"
    },
    {
      "city": "Puri",
      "latitude": 19.8,
      "longitude": 85.8167,
      "country_code": "IN"
    },
    {
      "city": "Cartago",
      "latitude": 9.8667,
      "longitude": -83.9167,
      "country_code": "CR"
    },
    {
      "city": "Ji’an Shi",
      "latitude": 41.1231,
      "longitude": 126.1815,
      "country_code": "CN"
    },
    {
      "city": "Soledad de Graciano Sánchez",
      "latitude": 22.1833,
      "longitude": -100.9333,
      "country_code": "MX"
    },
    {
      "city": "Presidente Prudente",
      "latitude": -22.1258,
      "longitude": -51.3889,
      "country_code": "BR"
    },
    {
      "city": "José C. Paz",
      "latitude": -34.5167,
      "longitude": -58.7667,
      "country_code": "AR"
    },
    {
      "city": "Ternopil",
      "latitude": 49.5667,
      "longitude": 25.6,
      "country_code": "UA"
    },
    {
      "city": "Rufisque",
      "latitude": 14.7167,
      "longitude": -17.2667,
      "country_code": "SN"
    },
    {
      "city": "Guéckédou",
      "latitude": 8.5667,
      "longitude": -10.1333,
      "country_code": "GN"
    },
    {
      "city": "Formosa",
      "latitude": -26.1847,
      "longitude": -58.1758,
      "country_code": "AR"
    },
    {
      "city": "Gabès",
      "latitude": 33.9004,
      "longitude": 10.1,
      "country_code": "TN"
    },
    {
      "city": "Imperatriz",
      "latitude": -5.52,
      "longitude": -47.49,
      "country_code": "BR"
    },
    {
      "city": "Sambhal",
      "latitude": 28.58,
      "longitude": 78.55,
      "country_code": "IN"
    },
    {
      "city": "Polokwane",
      "latitude": -23.9,
      "longitude": 29.45,
      "country_code": "ZA"
    },
    {
      "city": "Neyshābūr",
      "latitude": 36.22,
      "longitude": 58.82,
      "country_code": "IR"
    },
    {
      "city": "Sidon",
      "latitude": 33.5606,
      "longitude": 35.3981,
      "country_code": "LB"
    },
    {
      "city": "Radom",
      "latitude": 51.4036,
      "longitude": 21.1567,
      "country_code": "PL"
    },
    {
      "city": "Lutsk",
      "latitude": 50.7478,
      "longitude": 25.3244,
      "country_code": "UA"
    },
    {
      "city": "La Serena",
      "latitude": -29.9027,
      "longitude": -71.252,
      "country_code": "CL"
    },
    {
      "city": "Gujiao",
      "latitude": 37.9069,
      "longitude": 112.17,
      "country_code": "CN"
    },
    {
      "city": "Gulfport",
      "latitude": 30.4271,
      "longitude": -89.0703,
      "country_code": "US"
    },
    {
      "city": "San Felipe",
      "latitude": 10.3353,
      "longitude": -68.7458,
      "country_code": "VE"
    },
    {
      "city": "Sāveh",
      "latitude": 35.0211,
      "longitude": 50.3564,
      "country_code": "IR"
    },
    {
      "city": "La Vega",
      "latitude": 19.2242,
      "longitude": -70.5283,
      "country_code": "DO"
    },
    {
      "city": "Appleton",
      "latitude": 44.2779,
      "longitude": -88.3891,
      "country_code": "US"
    },
    {
      "city": "Khomeynī Shahr",
      "latitude": 32.7,
      "longitude": 51.5211,
      "country_code": "IR"
    },
    {
      "city": "Al Khubar",
      "latitude": 26.3,
      "longitude": 50.2167,
      "country_code": "SA"
    },
    {
      "city": "Islington",
      "latitude": 51.544,
      "longitude": -0.1027,
      "country_code": "GB"
    },
    {
      "city": "Córdoba",
      "latitude": 18.8942,
      "longitude": -96.9347,
      "country_code": "MX"
    },
    {
      "city": "San Pedro de Macorís",
      "latitude": 18.4504,
      "longitude": -69.3,
      "country_code": "DO"
    },
    {
      "city": "Ciudad Acuña",
      "latitude": 29.3242,
      "longitude": -100.9317,
      "country_code": "MX"
    },
    {
      "city": "Sabadell",
      "latitude": 41.5483,
      "longitude": 2.1075,
      "country_code": "ES"
    },
    {
      "city": "Hortolândia",
      "latitude": -22.8583,
      "longitude": -47.22,
      "country_code": "BR"
    },
    {
      "city": "Bitung",
      "latitude": 1.4472,
      "longitude": 125.1978,
      "country_code": "ID"
    },
    {
      "city": "Naihāti",
      "latitude": 22.9,
      "longitude": 88.42,
      "country_code": "IN"
    },
    {
      "city": "Damietta",
      "latitude": 31.4167,
      "longitude": 31.8167,
      "country_code": "EG"
    },
    {
      "city": "Groningen",
      "latitude": 53.2204,
      "longitude": 6.58,
      "country_code": "NL"
    },
    {
      "city": "Kure",
      "latitude": 34.2492,
      "longitude": 132.5658,
      "country_code": "JP"
    },
    {
      "city": "Manta",
      "latitude": -0.95,
      "longitude": -80.7162,
      "country_code": "EC"
    },
    {
      "city": "Butembo",
      "latitude": 0.1251,
      "longitude": 29.299,
      "country_code": "CD"
    },
    {
      "city": "San Miguel",
      "latitude": 13.4833,
      "longitude": -88.1833,
      "country_code": "SV"
    },
    {
      "city": "Concepción",
      "latitude": -36.8271,
      "longitude": -73.0503,
      "country_code": "CL"
    },
    {
      "city": "Netanya",
      "latitude": 32.3328,
      "longitude": 34.86,
      "country_code": "IL"
    },
    {
      "city": "Bremerton",
      "latitude": 47.5436,
      "longitude": -122.7122,
      "country_code": "US"
    },
    {
      "city": "Alor Setar",
      "latitude": 6.1167,
      "longitude": 100.3667,
      "country_code": "MY"
    },
    {
      "city": "Hickory",
      "latitude": 35.7425,
      "longitude": -81.323,
      "country_code": "US"
    },
    {
      "city": "Lübeck",
      "latitude": 53.8697,
      "longitude": 10.6864,
      "country_code": "DE"
    },
    {
      "city": "Los Ángeles",
      "latitude": -37.4707,
      "longitude": -72.3517,
      "country_code": "CL"
    },
    {
      "city": "Aberdeen",
      "latitude": 57.15,
      "longitude": -2.11,
      "country_code": "GB"
    },
    {
      "city": "Luton",
      "latitude": 51.8783,
      "longitude": -0.4147,
      "country_code": "GB"
    },
    {
      "city": "Tacoma",
      "latitude": 47.2431,
      "longitude": -122.4531,
      "country_code": "US"
    },
    {
      "city": "Denov",
      "latitude": 38.2772,
      "longitude": 67.8872,
      "country_code": "UZ"
    },
    {
      "city": "Qostanay",
      "latitude": 53.2144,
      "longitude": 63.6246,
      "country_code": "KZ"
    },
    {
      "city": "Banjarbaru",
      "latitude": -3.4667,
      "longitude": 114.75,
      "country_code": "ID"
    },
    {
      "city": "Sa Đéc",
      "latitude": 10.3105,
      "longitude": 105.7397,
      "country_code": "VN"
    },
    {
      "city": "Norwich",
      "latitude": 52.63,
      "longitude": 1.297,
      "country_code": "GB"
    },
    {
      "city": "Petropavl",
      "latitude": 54.8622,
      "longitude": 69.1408,
      "country_code": "KZ"
    },
    {
      "city": "Marg‘ilon",
      "latitude": 40.4667,
      "longitude": 71.7167,
      "country_code": "UZ"
    },
    {
      "city": "Gangneung",
      "latitude": 37.7556,
      "longitude": 128.8961,
      "country_code": "KR"
    },
    {
      "city": "San Bernardino",
      "latitude": 34.1417,
      "longitude": -117.2946,
      "country_code": "US"
    },
    {
      "city": "Cúa",
      "latitude": 10.1667,
      "longitude": -66.8833,
      "country_code": "VE"
    },
    {
      "city": "Meycauayan",
      "latitude": 14.7333,
      "longitude": 120.95,
      "country_code": "PH"
    },
    {
      "city": "Vantaa",
      "latitude": 60.3,
      "longitude": 25.0333,
      "country_code": "FI"
    },
    {
      "city": "As Samāwah",
      "latitude": 31.3167,
      "longitude": 45.2833,
      "country_code": "IQ"
    },
    {
      "city": "Ormoc",
      "latitude": 11.0167,
      "longitude": 124.6167,
      "country_code": "PH"
    },
    {
      "city": "College Station",
      "latitude": 30.5852,
      "longitude": -96.296,
      "country_code": "US"
    },
    {
      "city": "Golmud",
      "latitude": 36.4028,
      "longitude": 94.9042,
      "country_code": "CN"
    },
    {
      "city": "Kalamazoo",
      "latitude": 42.2749,
      "longitude": -85.5882,
      "country_code": "US"
    },
    {
      "city": "Cartagena",
      "latitude": 37.6,
      "longitude": -0.9819,
      "country_code": "ES"
    },
    {
      "city": "Regina",
      "latitude": 50.4547,
      "longitude": -104.6067,
      "country_code": "CA"
    },
    {
      "city": "Thousand Oaks",
      "latitude": 34.1914,
      "longitude": -118.8755,
      "country_code": "US"
    },
    {
      "city": "La Victoria",
      "latitude": 10.2278,
      "longitude": -67.3336,
      "country_code": "VE"
    },
    {
      "city": "Shimla",
      "latitude": 31.1033,
      "longitude": 77.1722,
      "country_code": "IN"
    },
    {
      "city": "Mohammedia",
      "latitude": 33.6833,
      "longitude": -7.3833,
      "country_code": "MA"
    },
    {
      "city": "Babruysk",
      "latitude": 53.15,
      "longitude": 29.2333,
      "country_code": "BY"
    },
    {
      "city": "Roanoke",
      "latitude": 37.2785,
      "longitude": -79.958,
      "country_code": "US"
    },
    {
      "city": "Osan",
      "latitude": 37.145,
      "longitude": 127.0694,
      "country_code": "KR"
    },
    {
      "city": "Geneva",
      "latitude": 46.2,
      "longitude": 6.15,
      "country_code": "CH"
    },
    {
      "city": "Criciúma",
      "latitude": -28.68,
      "longitude": -49.39,
      "country_code": "BR"
    },
    {
      "city": "Fontana",
      "latitude": 34.0968,
      "longitude": -117.4599,
      "country_code": "US"
    },
    {
      "city": "Sikasso",
      "latitude": 11.3167,
      "longitude": -5.6667,
      "country_code": "ML"
    },
    {
      "city": "Warnes",
      "latitude": -17.5103,
      "longitude": -63.1647,
      "country_code": "BO"
    },
    {
      "city": "Padova",
      "latitude": 45.4064,
      "longitude": 11.8778,
      "country_code": "IT"
    },
    {
      "city": "Ciudad Madero",
      "latitude": 22.25,
      "longitude": -97.8333,
      "country_code": "MX"
    },
    {
      "city": "Oberhausen",
      "latitude": 51.4699,
      "longitude": 6.8514,
      "country_code": "DE"
    },
    {
      "city": "Jalālābād",
      "latitude": 34.4303,
      "longitude": 70.4528,
      "country_code": "AF"
    },
    {
      "city": "Moreno Valley",
      "latitude": 33.9244,
      "longitude": -117.2045,
      "country_code": "US"
    },
    {
      "city": "Sidi Bel Abbès",
      "latitude": 35.2,
      "longitude": -0.6333,
      "country_code": "DZ"
    },
    {
      "city": "Jerez de la Frontera",
      "latitude": 36.7,
      "longitude": -6.1167,
      "country_code": "ES"
    },
    {
      "city": "Limbe",
      "latitude": 4.0167,
      "longitude": 9.2167,
      "country_code": "CM"
    },
    {
      "city": "Timon",
      "latitude": -5.115,
      "longitude": -42.845,
      "country_code": "BR"
    },
    {
      "city": "Ploieşti",
      "latitude": 44.9386,
      "longitude": 26.0225,
      "country_code": "RO"
    },
    {
      "city": "Metepec",
      "latitude": 19.2511,
      "longitude": -99.6047,
      "country_code": "MX"
    },
    {
      "city": "Pskov",
      "latitude": 57.8167,
      "longitude": 28.3333,
      "country_code": "RU"
    },
    {
      "city": "Bila Tserkva",
      "latitude": 49.7956,
      "longitude": 30.1167,
      "country_code": "UA"
    },
    {
      "city": "Dayr az Zawr",
      "latitude": 35.3333,
      "longitude": 40.15,
      "country_code": "SY"
    },
    {
      "city": "Babylon",
      "latitude": 40.6924,
      "longitude": -73.3585,
      "country_code": "US"
    },
    {
      "city": "Chungju",
      "latitude": 36.9706,
      "longitude": 127.9322,
      "country_code": "KR"
    },
    {
      "city": "San-Pédro",
      "latitude": 4.7704,
      "longitude": -6.64,
      "country_code": "CI"
    },
    {
      "city": "Bukit Mertajam",
      "latitude": 5.3617,
      "longitude": 100.461,
      "country_code": "MY"
    },
    {
      "city": "Ijebu-Ode",
      "latitude": 6.8204,
      "longitude": 3.92,
      "country_code": "NG"
    },
    {
      "city": "Cork",
      "latitude": 51.9,
      "longitude": -8.4731,
      "country_code": "IE"
    },
    {
      "city": "Pamplona",
      "latitude": 42.8167,
      "longitude": -1.65,
      "country_code": "ES"
    },
    {
      "city": "Guarenas",
      "latitude": 10.4739,
      "longitude": -66.5383,
      "country_code": "VE"
    },
    {
      "city": "Rostock",
      "latitude": 54.0833,
      "longitude": 12.1333,
      "country_code": "DE"
    },
    {
      "city": "Dongning",
      "latitude": 44.0608,
      "longitude": 131.1187,
      "country_code": "CN"
    },
    {
      "city": "Moratuwa",
      "latitude": 6.7804,
      "longitude": 79.88,
      "country_code": "LK"
    },
    {
      "city": "Ich’ŏn",
      "latitude": 37.2792,
      "longitude": 127.4425,
      "country_code": "KR"
    },
    {
      "city": "Puerto Cabello",
      "latitude": 10.4667,
      "longitude": -68.0167,
      "country_code": "VE"
    },
    {
      "city": "Beersheba",
      "latitude": 31.2589,
      "longitude": 34.7978,
      "country_code": "IL"
    },
    {
      "city": "Nasīm Shahr",
      "latitude": 35.5644,
      "longitude": 51.1647,
      "country_code": "IR"
    },
    {
      "city": "North Port",
      "latitude": 27.0577,
      "longitude": -82.1975,
      "country_code": "US"
    },
    {
      "city": "La Romana",
      "latitude": 18.417,
      "longitude": -68.9666,
      "country_code": "DO"
    },
    {
      "city": "Lubuklinggau",
      "latitude": -3.2967,
      "longitude": 102.8617,
      "country_code": "ID"
    },
    {
      "city": "Qinā",
      "latitude": 26.1667,
      "longitude": 32.7167,
      "country_code": "EG"
    },
    {
      "city": "Mary",
      "latitude": 37.6,
      "longitude": 61.8333,
      "country_code": "TM"
    },
    {
      "city": "Santa Cruz",
      "latitude": 28.4667,
      "longitude": -16.25,
      "country_code": "ES"
    },
    {
      "city": "Fargo",
      "latitude": 46.8652,
      "longitude": -96.8292,
      "country_code": "US"
    },
    {
      "city": "Huangyan",
      "latitude": 28.65,
      "longitude": 121.25,
      "country_code": "CN"
    },
    {
      "city": "Santa Clara",
      "latitude": 22.4067,
      "longitude": -79.9531,
      "country_code": "CU"
    },
    {
      "city": "Kharagpur",
      "latitude": 22.3302,
      "longitude": 87.3237,
      "country_code": "IN"
    },
    {
      "city": "Northcote",
      "latitude": -36.7913,
      "longitude": 174.7758,
      "country_code": "NZ"
    },
    {
      "city": "Waitakere",
      "latitude": -36.849,
      "longitude": 174.543,
      "country_code": "NZ"
    },
    {
      "city": "Lobito",
      "latitude": -12.37,
      "longitude": 13.5412,
      "country_code": "AO"
    },
    {
      "city": "Monywa",
      "latitude": 22.1083,
      "longitude": 95.1358,
      "country_code": "MM"
    },
    {
      "city": "Dindigul",
      "latitude": 10.35,
      "longitude": 77.95,
      "country_code": "IN"
    },
    {
      "city": "Morogoro",
      "latitude": -6.8242,
      "longitude": 37.6633,
      "country_code": "TZ"
    },
    {
      "city": "Green Bay",
      "latitude": 44.515,
      "longitude": -87.9896,
      "country_code": "US"
    },
    {
      "city": "Portoviejo",
      "latitude": -1.0544,
      "longitude": -80.4544,
      "country_code": "EC"
    },
    {
      "city": "Pingzhen",
      "latitude": 24.9439,
      "longitude": 121.2161,
      "country_code": "TW"
    },
    {
      "city": "Linz",
      "latitude": 48.3,
      "longitude": 14.2833,
      "country_code": "AT"
    },
    {
      "city": "Trieste",
      "latitude": 45.6361,
      "longitude": 13.8042,
      "country_code": "IT"
    },
    {
      "city": "Sacala",
      "latitude": -14.45,
      "longitude": 40.6667,
      "country_code": "MZ"
    },
    {
      "city": "Itami",
      "latitude": 34.7867,
      "longitude": 135.4056,
      "country_code": "JP"
    },
    {
      "city": "Phan Thiết",
      "latitude": 10.9375,
      "longitude": 108.1583,
      "country_code": "VN"
    },
    {
      "city": "Kalemie",
      "latitude": -5.9147,
      "longitude": 29.1939,
      "country_code": "CD"
    },
    {
      "city": "Biskra",
      "latitude": 34.85,
      "longitude": 5.7333,
      "country_code": "DZ"
    },
    {
      "city": "Ingrāj Bāzār",
      "latitude": 25,
      "longitude": 88.15,
      "country_code": "IN"
    },
    {
      "city": "Banī Suwayf",
      "latitude": 29.0667,
      "longitude": 31.0833,
      "country_code": "EG"
    },
    {
      "city": "Ellore",
      "latitude": 16.7,
      "longitude": 81.1,
      "country_code": "IN"
    },
    {
      "city": "Mossoró",
      "latitude": -5.19,
      "longitude": -37.34,
      "country_code": "BR"
    },
    {
      "city": "Mytishchi",
      "latitude": 55.9167,
      "longitude": 37.7333,
      "country_code": "RU"
    },
    {
      "city": "Zanzibar",
      "latitude": -6.1667,
      "longitude": 39.2,
      "country_code": "TZ"
    },
    {
      "city": "Jiutai",
      "latitude": 44.1447,
      "longitude": 125.8443,
      "country_code": "CN"
    },
    {
      "city": "Qā’em Shahr",
      "latitude": 36.4611,
      "longitude": 52.8606,
      "country_code": "IR"
    },
    {
      "city": "Bolu",
      "latitude": 40.7333,
      "longitude": 31.6,
      "country_code": "TR"
    },
    {
      "city": "Amarillo",
      "latitude": 35.1988,
      "longitude": -101.8311,
      "country_code": "US"
    },
    {
      "city": "Ziguinchor",
      "latitude": 12.5833,
      "longitude": -16.2667,
      "country_code": "SN"
    },
    {
      "city": "Ternate",
      "latitude": 0.7833,
      "longitude": 127.3667,
      "country_code": "ID"
    },
    {
      "city": "Puqi",
      "latitude": 29.7204,
      "longitude": 113.88,
      "country_code": "CN"
    },
    {
      "city": "Sete Lagoas",
      "latitude": -19.4496,
      "longitude": -44.25,
      "country_code": "BR"
    },
    {
      "city": "Bené Beraq",
      "latitude": 32.0807,
      "longitude": 34.8338,
      "country_code": "IL"
    },
    {
      "city": "Toruń",
      "latitude": 53.0167,
      "longitude": 18.6167,
      "country_code": "PL"
    },
    {
      "city": "Coquimbo",
      "latitude": -29.9532,
      "longitude": -71.338,
      "country_code": "CL"
    },
    {
      "city": "Mandi Burewala",
      "latitude": 30.15,
      "longitude": 72.6833,
      "country_code": "PK"
    },
    {
      "city": "Kamirenjaku",
      "latitude": 35.6833,
      "longitude": 139.5594,
      "country_code": "JP"
    },
    {
      "city": "Marawi City",
      "latitude": 8,
      "longitude": 124.3,
      "country_code": "PH"
    },
    {
      "city": "Erfurt",
      "latitude": 50.9787,
      "longitude": 11.0328,
      "country_code": "DE"
    },
    {
      "city": "Portland",
      "latitude": 43.6773,
      "longitude": -70.2715,
      "country_code": "US"
    },
    {
      "city": "Matsue",
      "latitude": 35.4681,
      "longitude": 133.0486,
      "country_code": "JP"
    },
    {
      "city": "Biysk",
      "latitude": 52.5167,
      "longitude": 85.1667,
      "country_code": "RU"
    },
    {
      "city": "Charleroi",
      "latitude": 50.4167,
      "longitude": 4.4442,
      "country_code": "BE"
    },
    {
      "city": "Kassel",
      "latitude": 51.3158,
      "longitude": 9.4979,
      "country_code": "DE"
    },
    {
      "city": "Poza Rica de Hidalgo",
      "latitude": 20.5333,
      "longitude": -97.45,
      "country_code": "MX"
    },
    {
      "city": "Tanjungpinang",
      "latitude": 0.9188,
      "longitude": 104.4554,
      "country_code": "ID"
    },
    {
      "city": "Zhubei",
      "latitude": 24.8333,
      "longitude": 121.0119,
      "country_code": "TW"
    },
    {
      "city": "Djougou",
      "latitude": 9.7004,
      "longitude": 1.68,
      "country_code": "BJ"
    },
    {
      "city": "Luxor",
      "latitude": 25.6969,
      "longitude": 32.6422,
      "country_code": "EG"
    },
    {
      "city": "Huntington",
      "latitude": 40.8522,
      "longitude": -73.3824,
      "country_code": "US"
    },
    {
      "city": "Tarakan",
      "latitude": 3.3,
      "longitude": 117.6333,
      "country_code": "ID"
    },
    {
      "city": "Santa Barbara",
      "latitude": 34.4285,
      "longitude": -119.7202,
      "country_code": "US"
    },
    {
      "city": "Gainesville",
      "latitude": 29.6804,
      "longitude": -82.3458,
      "country_code": "US"
    },
    {
      "city": "Las Tunas",
      "latitude": 20.9667,
      "longitude": -76.95,
      "country_code": "CU"
    },
    {
      "city": "Lyubertsy",
      "latitude": 55.6814,
      "longitude": 37.8939,
      "country_code": "RU"
    },
    {
      "city": "Sosnowiec",
      "latitude": 50.3,
      "longitude": 19.1667,
      "country_code": "PL"
    },
    {
      "city": "Arica",
      "latitude": -18.4784,
      "longitude": -70.3211,
      "country_code": "CL"
    },
    {
      "city": "Huacho",
      "latitude": -11.1083,
      "longitude": -77.6083,
      "country_code": "PE"
    },
    {
      "city": "Debrecen",
      "latitude": 47.53,
      "longitude": 21.6392,
      "country_code": "HU"
    },
    {
      "city": "Nandyāl",
      "latitude": 15.48,
      "longitude": 78.48,
      "country_code": "IN"
    },
    {
      "city": "Cajamarca",
      "latitude": -7.1644,
      "longitude": -78.5106,
      "country_code": "PE"
    },
    {
      "city": "Croydon",
      "latitude": 51.3727,
      "longitude": -0.1099,
      "country_code": "GB"
    },
    {
      "city": "Lashkar Gāh",
      "latitude": 31.5938,
      "longitude": 64.3716,
      "country_code": "AF"
    },
    {
      "city": "Yachiyo",
      "latitude": 35.7225,
      "longitude": 140.0997,
      "country_code": "JP"
    },
    {
      "city": "Haldia",
      "latitude": 22.0257,
      "longitude": 88.0583,
      "country_code": "IN"
    },
    {
      "city": "San Pablo de las Salinas",
      "latitude": 19.6656,
      "longitude": -99.0917,
      "country_code": "MX"
    },
    {
      "city": "Jacobabad",
      "latitude": 28.2769,
      "longitude": 68.4514,
      "country_code": "PK"
    },
    {
      "city": "Tokat",
      "latitude": 40.3097,
      "longitude": 36.5542,
      "country_code": "TR"
    },
    {
      "city": "Qyzylorda",
      "latitude": 44.8479,
      "longitude": 65.4999,
      "country_code": "KZ"
    },
    {
      "city": "Néma",
      "latitude": 16.6171,
      "longitude": -7.25,
      "country_code": "MR"
    },
    {
      "city": "Olympia",
      "latitude": 47.0417,
      "longitude": -122.8959,
      "country_code": "US"
    },
    {
      "city": "Gurgaon",
      "latitude": 28.45,
      "longitude": 77.02,
      "country_code": "IN"
    },
    {
      "city": "Liège",
      "latitude": 50.625,
      "longitude": 5.5907,
      "country_code": "BE"
    },
    {
      "city": "Oulu",
      "latitude": 65.0142,
      "longitude": 25.4719,
      "country_code": "FI"
    },
    {
      "city": "El Jadid",
      "latitude": 33.2333,
      "longitude": -8.5,
      "country_code": "MA"
    },
    {
      "city": "Frisco",
      "latitude": 33.1555,
      "longitude": -96.8215,
      "country_code": "US"
    },
    {
      "city": "Isidro Casanova",
      "latitude": -34.7,
      "longitude": -58.5833,
      "country_code": "AR"
    },
    {
      "city": "Maīmanah",
      "latitude": 35.9302,
      "longitude": 64.7701,
      "country_code": "AF"
    },
    {
      "city": "Yonkers",
      "latitude": 40.9466,
      "longitude": -73.8674,
      "country_code": "US"
    },
    {
      "city": "Rio Claro",
      "latitude": -22.4108,
      "longitude": -47.5608,
      "country_code": "BR"
    },
    {
      "city": "Norwich",
      "latitude": 41.5495,
      "longitude": -72.0882,
      "country_code": "US"
    },
    {
      "city": "Az Zāwīyah",
      "latitude": 32.7604,
      "longitude": 12.72,
      "country_code": "LY"
    },
    {
      "city": "Bulandshahr",
      "latitude": 28.4104,
      "longitude": 77.8484,
      "country_code": "IN"
    },
    {
      "city": "Kasama",
      "latitude": -10.1996,
      "longitude": 31.1799,
      "country_code": "ZM"
    },
    {
      "city": "Divinópolis",
      "latitude": -20.1495,
      "longitude": -44.9,
      "country_code": "BR"
    },
    {
      "city": "Puerto Cortés",
      "latitude": 15.8833,
      "longitude": -87.95,
      "country_code": "HN"
    },
    {
      "city": "Lahad Datu",
      "latitude": 5.03,
      "longitude": 118.34,
      "country_code": "MY"
    },
    {
      "city": "Bojnūrd",
      "latitude": 37.4667,
      "longitude": 57.3333,
      "country_code": "IR"
    },
    {
      "city": "Spring Valley",
      "latitude": 36.0987,
      "longitude": -115.2619,
      "country_code": "US"
    },
    {
      "city": "Pagadian",
      "latitude": 7.8333,
      "longitude": 123.4333,
      "country_code": "PH"
    },
    {
      "city": "Nagareyama",
      "latitude": 35.8561,
      "longitude": 139.9025,
      "country_code": "JP"
    },
    {
      "city": "Banja Luka",
      "latitude": 44.7667,
      "longitude": 17.1833,
      "country_code": "BA"
    },
    {
      "city": "Glendale",
      "latitude": 34.1818,
      "longitude": -118.2468,
      "country_code": "US"
    },
    {
      "city": "Huntington Beach",
      "latitude": 33.696,
      "longitude": -118.0025,
      "country_code": "US"
    },
    {
      "city": "Almería",
      "latitude": 36.8333,
      "longitude": -2.45,
      "country_code": "ES"
    },
    {
      "city": "Brescia",
      "latitude": 45.5389,
      "longitude": 10.2203,
      "country_code": "IT"
    },
    {
      "city": "Baharampur",
      "latitude": 24.1,
      "longitude": 88.25,
      "country_code": "IN"
    },
    {
      "city": "Taranto",
      "latitude": 40.4181,
      "longitude": 17.2408,
      "country_code": "IT"
    },
    {
      "city": "Ashino",
      "latitude": 42.975,
      "longitude": 144.3747,
      "country_code": "JP"
    },
    {
      "city": "Talca",
      "latitude": -35.455,
      "longitude": -71.67,
      "country_code": "CL"
    },
    {
      "city": "Martapura",
      "latitude": -3.4135,
      "longitude": 114.8365,
      "country_code": "ID"
    },
    {
      "city": "Chakradharpur",
      "latitude": 22.7,
      "longitude": 85.63,
      "country_code": "IN"
    },
    {
      "city": "Deltona",
      "latitude": 28.905,
      "longitude": -81.2137,
      "country_code": "US"
    },
    {
      "city": "Chilpancingo",
      "latitude": 17.55,
      "longitude": -99.5,
      "country_code": "MX"
    },
    {
      "city": "Naga City",
      "latitude": 13.6167,
      "longitude": 123.1667,
      "country_code": "PH"
    },
    {
      "city": "Richmond",
      "latitude": 49.1667,
      "longitude": -123.1333,
      "country_code": "CA"
    },
    {
      "city": "H̱olon",
      "latitude": 32.0167,
      "longitude": 34.7667,
      "country_code": "IL"
    },
    {
      "city": "Gemena",
      "latitude": 3.25,
      "longitude": 19.7667,
      "country_code": "CD"
    },
    {
      "city": "Tocuyito",
      "latitude": 10.0889,
      "longitude": -68.0922,
      "country_code": "VE"
    },
    {
      "city": "Oradea",
      "latitude": 47.0722,
      "longitude": 21.9211,
      "country_code": "RO"
    },
    {
      "city": "Legazpi City",
      "latitude": 13.1333,
      "longitude": 123.7333,
      "country_code": "PH"
    },
    {
      "city": "Hedong",
      "latitude": 42.5404,
      "longitude": 129.0039,
      "country_code": "CN"
    },
    {
      "city": "Madhyamgram",
      "latitude": 22.7,
      "longitude": 88.45,
      "country_code": "IN"
    },
    {
      "city": "Aurora",
      "latitude": 41.7637,
      "longitude": -88.2901,
      "country_code": "US"
    },
    {
      "city": "Bhiwāni",
      "latitude": 28.7833,
      "longitude": 76.1333,
      "country_code": "IN"
    },
    {
      "city": "Burhānpur",
      "latitude": 21.3004,
      "longitude": 76.13,
      "country_code": "IN"
    },
    {
      "city": "Mbanza-Ngungu",
      "latitude": -5.2496,
      "longitude": 14.86,
      "country_code": "CD"
    },
    {
      "city": "Huánuco",
      "latitude": -9.9294,
      "longitude": -76.2397,
      "country_code": "PE"
    },
    {
      "city": "Prokopyevsk",
      "latitude": 53.8833,
      "longitude": 86.7167,
      "country_code": "RU"
    },
    {
      "city": "Rajin",
      "latitude": 42.3444,
      "longitude": 130.3844,
      "country_code": "KP"
    },
    {
      "city": "Ghāndīnagar",
      "latitude": 23.22,
      "longitude": 72.68,
      "country_code": "IN"
    },
    {
      "city": "Eldoret",
      "latitude": 0.5167,
      "longitude": 35.2833,
      "country_code": "KE"
    },
    {
      "city": "Tegucigalpita",
      "latitude": 15.78,
      "longitude": -86.7878,
      "country_code": "HN"
    },
    {
      "city": "Hino",
      "latitude": 35.6714,
      "longitude": 139.395,
      "country_code": "JP"
    },
    {
      "city": "Kusŏng",
      "latitude": 39.9667,
      "longitude": 125.1667,
      "country_code": "KP"
    },
    {
      "city": "Sūhāj",
      "latitude": 26.5606,
      "longitude": 31.6917,
      "country_code": "EG"
    },
    {
      "city": "Suzuka",
      "latitude": 34.8822,
      "longitude": 136.5842,
      "country_code": "JP"
    },
    {
      "city": "Khammam",
      "latitude": 17.25,
      "longitude": 80.15,
      "country_code": "IN"
    },
    {
      "city": "Kırıkkale",
      "latitude": 39.8417,
      "longitude": 33.5139,
      "country_code": "TR"
    },
    {
      "city": "Ar Raqqah",
      "latitude": 35.95,
      "longitude": 39.0167,
      "country_code": "SY"
    },
    {
      "city": "Kumagaya",
      "latitude": 36.1472,
      "longitude": 139.3886,
      "country_code": "JP"
    },
    {
      "city": "Higashi-Hiroshima",
      "latitude": 34.4167,
      "longitude": 132.7333,
      "country_code": "JP"
    },
    {
      "city": "Brikama",
      "latitude": 13.2804,
      "longitude": -16.6599,
      "country_code": "GM"
    },
    {
      "city": "Acarigua",
      "latitude": 9.5597,
      "longitude": -69.2019,
      "country_code": "VE"
    },
    {
      "city": "Hugli",
      "latitude": 22.9,
      "longitude": 88.39,
      "country_code": "IN"
    },
    {
      "city": "Viranşehir",
      "latitude": 37.2306,
      "longitude": 39.7653,
      "country_code": "TR"
    },
    {
      "city": "San Luis Río Colorado",
      "latitude": 32.4767,
      "longitude": -114.7625,
      "country_code": "MX"
    },
    {
      "city": "Iskandar",
      "latitude": 41.5507,
      "longitude": 69.6807,
      "country_code": "UZ"
    },
    {
      "city": "Tempe",
      "latitude": 33.3881,
      "longitude": -111.9318,
      "country_code": "US"
    },
    {
      "city": "Naka",
      "latitude": 37.4504,
      "longitude": 138.86,
      "country_code": "JP"
    },
    {
      "city": "Kenema",
      "latitude": 7.8833,
      "longitude": -11.1833,
      "country_code": "SL"
    },
    {
      "city": "Overland Park",
      "latitude": 38.887,
      "longitude": -94.687,
      "country_code": "US"
    },
    {
      "city": "Bandar-e Būshehr",
      "latitude": 28.9667,
      "longitude": 50.8333,
      "country_code": "IR"
    },
    {
      "city": "Yamaguchi",
      "latitude": 34.1781,
      "longitude": 131.4739,
      "country_code": "JP"
    },
    {
      "city": "Parma",
      "latitude": 44.8015,
      "longitude": 10.328,
      "country_code": "IT"
    },
    {
      "city": "Anseong",
      "latitude": 37.0078,
      "longitude": 127.2797,
      "country_code": "KR"
    },
    {
      "city": "Yuzhno-Sakhalinsk",
      "latitude": 46.95,
      "longitude": 142.7333,
      "country_code": "RU"
    },
    {
      "city": "Richmond Hill",
      "latitude": 43.8667,
      "longitude": -79.4333,
      "country_code": "CA"
    },
    {
      "city": "Desē",
      "latitude": 11.1333,
      "longitude": 39.6333,
      "country_code": "ET"
    },
    {
      "city": "Gorontalo",
      "latitude": 0.5411,
      "longitude": 123.0594,
      "country_code": "ID"
    },
    {
      "city": "Cholula de Rivadabia",
      "latitude": 19.0633,
      "longitude": -98.3064,
      "country_code": "MX"
    },
    {
      "city": "Guacara",
      "latitude": 10.2261,
      "longitude": -67.877,
      "country_code": "VE"
    },
    {
      "city": "Grand Prairie",
      "latitude": 32.6872,
      "longitude": -97.0209,
      "country_code": "US"
    },
    {
      "city": "Quelimane",
      "latitude": -17.8764,
      "longitude": 36.8872,
      "country_code": "MZ"
    },
    {
      "city": "Tébessa",
      "latitude": 35.4,
      "longitude": 8.1167,
      "country_code": "DZ"
    },
    {
      "city": "San Fernando",
      "latitude": 7.894,
      "longitude": -67.473,
      "country_code": "VE"
    },
    {
      "city": "Al Jahrā’",
      "latitude": 29.3375,
      "longitude": 47.6581,
      "country_code": "KW"
    },
    {
      "city": "Karaman",
      "latitude": 37.1833,
      "longitude": 33.2167,
      "country_code": "TR"
    },
    {
      "city": "Cap-Haïtien",
      "latitude": 19.75,
      "longitude": -72.2,
      "country_code": "HT"
    },
    {
      "city": "Oakville",
      "latitude": 43.45,
      "longitude": -79.6833,
      "country_code": "CA"
    },
    {
      "city": "Muar",
      "latitude": 2.05,
      "longitude": 102.56,
      "country_code": "MY"
    },
    {
      "city": "Prato",
      "latitude": 43.8808,
      "longitude": 11.0966,
      "country_code": "IT"
    },
    {
      "city": "Godoy Cruz",
      "latitude": -32.9167,
      "longitude": -68.8333,
      "country_code": "AR"
    },
    {
      "city": "Muş",
      "latitude": 38.7333,
      "longitude": 41.4911,
      "country_code": "TR"
    },
    {
      "city": "Hyesan",
      "latitude": 41.4,
      "longitude": 128.1833,
      "country_code": "KP"
    },
    {
      "city": "Kielce",
      "latitude": 50.8725,
      "longitude": 20.6319,
      "country_code": "PL"
    },
    {
      "city": "Arapiraca",
      "latitude": -9.7525,
      "longitude": -36.6611,
      "country_code": "BR"
    },
    {
      "city": "Valencia",
      "latitude": 7.9,
      "longitude": 125.0833,
      "country_code": "PH"
    },
    {
      "city": "Sunrise Manor",
      "latitude": 36.1785,
      "longitude": -115.049,
      "country_code": "US"
    },
    {
      "city": "Araçatuba",
      "latitude": -21.2089,
      "longitude": -50.4328,
      "country_code": "BR"
    },
    {
      "city": "Swindon",
      "latitude": 51.56,
      "longitude": -1.78,
      "country_code": "GB"
    },
    {
      "city": "Guanare",
      "latitude": 9.0436,
      "longitude": -69.7489,
      "country_code": "VE"
    },
    {
      "city": "Waco",
      "latitude": 31.5598,
      "longitude": -97.1881,
      "country_code": "US"
    },
    {
      "city": "Basildon",
      "latitude": 51.5761,
      "longitude": 0.4886,
      "country_code": "GB"
    },
    {
      "city": "Madiun",
      "latitude": -7.63,
      "longitude": 111.5231,
      "country_code": "ID"
    },
    {
      "city": "Kawara",
      "latitude": 35.2647,
      "longitude": 139.1522,
      "country_code": "JP"
    },
    {
      "city": "Gibraltar",
      "latitude": 36.1324,
      "longitude": -5.3781,
      "country_code": "GI"
    },
    {
      "city": "Valera",
      "latitude": 9.32,
      "longitude": -70.62,
      "country_code": "VE"
    },
    {
      "city": "Barrancabermeja",
      "latitude": 7.09,
      "longitude": -73.85,
      "country_code": "CO"
    },
    {
      "city": "Mahbūbnagar",
      "latitude": 16.7333,
      "longitude": 77.9833,
      "country_code": "IN"
    },
    {
      "city": "Pasuruan",
      "latitude": -7.6406,
      "longitude": 112.9065,
      "country_code": "ID"
    },
    {
      "city": "Aydın",
      "latitude": 37.8481,
      "longitude": 27.8453,
      "country_code": "TR"
    },
    {
      "city": "Shibīn al Kawm",
      "latitude": 30.592,
      "longitude": 30.9,
      "country_code": "EG"
    },
    {
      "city": "Armavir",
      "latitude": 45,
      "longitude": 41.1167,
      "country_code": "RU"
    },
    {
      "city": "Balakovo",
      "latitude": 52.039,
      "longitude": 47.7839,
      "country_code": "RU"
    },
    {
      "city": "Rio Grande",
      "latitude": -32.0495,
      "longitude": -52.12,
      "country_code": "BR"
    },
    {
      "city": "Batu",
      "latitude": -7.8672,
      "longitude": 112.5239,
      "country_code": "ID"
    },
    {
      "city": "Salinas",
      "latitude": 36.6884,
      "longitude": -121.6317,
      "country_code": "US"
    },
    {
      "city": "Mwene-Ditu",
      "latitude": -7,
      "longitude": 23.45,
      "country_code": "CD"
    },
    {
      "city": "Sơn Tây",
      "latitude": 21.1382,
      "longitude": 105.505,
      "country_code": "VN"
    },
    {
      "city": "Ferraz de Vasconcelos",
      "latitude": -23.5411,
      "longitude": -46.3689,
      "country_code": "BR"
    },
    {
      "city": "Santa Bárbara d’Oeste",
      "latitude": -22.7539,
      "longitude": -47.4139,
      "country_code": "BR"
    },
    {
      "city": "Oviedo",
      "latitude": 43.3634,
      "longitude": -5.8423,
      "country_code": "ES"
    },
    {
      "city": "Saddiqabad",
      "latitude": 28.3006,
      "longitude": 70.1302,
      "country_code": "PK"
    },
    {
      "city": "Rybinsk",
      "latitude": 58.05,
      "longitude": 38.8333,
      "country_code": "RU"
    },
    {
      "city": "Anjōmachi",
      "latitude": 34.9667,
      "longitude": 137.0833,
      "country_code": "JP"
    },
    {
      "city": "Chŏngju",
      "latitude": 39.65,
      "longitude": 125.3333,
      "country_code": "KP"
    },
    {
      "city": "Cachoeiro de Itapemirim",
      "latitude": -20.8489,
      "longitude": -41.1128,
      "country_code": "BR"
    },
    {
      "city": "Jōetsu",
      "latitude": 37.15,
      "longitude": 138.2333,
      "country_code": "JP"
    },
    {
      "city": "Saint-Denis",
      "latitude": -20.8789,
      "longitude": 55.4481,
      "country_code": "RE"
    },
    {
      "city": "Hagen",
      "latitude": 51.3594,
      "longitude": 7.475,
      "country_code": "DE"
    },
    {
      "city": "Ngaoundéré",
      "latitude": 7.3214,
      "longitude": 13.5839,
      "country_code": "CM"
    },
    {
      "city": "Potosí",
      "latitude": -19.5833,
      "longitude": -65.75,
      "country_code": "BO"
    },
    {
      "city": "San Carlos City",
      "latitude": 15.9281,
      "longitude": 120.3489,
      "country_code": "PH"
    },
    {
      "city": "Pak Kret",
      "latitude": 13.9125,
      "longitude": 100.4978,
      "country_code": "TH"
    },
    {
      "city": "Waterbury",
      "latitude": 41.5583,
      "longitude": -73.0361,
      "country_code": "US"
    },
    {
      "city": "Donghua",
      "latitude": 35.2175,
      "longitude": 106.6545,
      "country_code": "CN"
    },
    {
      "city": "Parakou",
      "latitude": 9.34,
      "longitude": 2.62,
      "country_code": "BJ"
    },
    {
      "city": "Mutare",
      "latitude": -18.9728,
      "longitude": 32.6694,
      "country_code": "ZW"
    },
    {
      "city": "Kōfu",
      "latitude": 35.6667,
      "longitude": 138.5667,
      "country_code": "JP"
    },
    {
      "city": "Mataró",
      "latitude": 41.54,
      "longitude": 2.45,
      "country_code": "ES"
    },
    {
      "city": "Narsingdi",
      "latitude": 23.9,
      "longitude": 90.7167,
      "country_code": "BD"
    },
    {
      "city": "Araure",
      "latitude": 9.5667,
      "longitude": -69.2167,
      "country_code": "VE"
    },
    {
      "city": "Tottori",
      "latitude": 35.5011,
      "longitude": 134.235,
      "country_code": "JP"
    },
    {
      "city": "Pinar del Río",
      "latitude": 22.4122,
      "longitude": -83.6719,
      "country_code": "CU"
    },
    {
      "city": "Clarksville",
      "latitude": 36.5695,
      "longitude": -87.342,
      "country_code": "US"
    },
    {
      "city": "Rāiganj",
      "latitude": 25.6167,
      "longitude": 88.1167,
      "country_code": "IN"
    },
    {
      "city": "Prabumulih",
      "latitude": -3.4328,
      "longitude": 104.2356,
      "country_code": "ID"
    },
    {
      "city": "Tachikawa",
      "latitude": 35.6939,
      "longitude": 139.4194,
      "country_code": "JP"
    },
    {
      "city": "Al Ḩasakah",
      "latitude": 36.5117,
      "longitude": 40.7422,
      "country_code": "SY"
    },
    {
      "city": "Turku",
      "latitude": 60.4517,
      "longitude": 22.27,
      "country_code": "FI"
    },
    {
      "city": "Guatire",
      "latitude": 10.4717,
      "longitude": -66.5406,
      "country_code": "VE"
    },
    {
      "city": "Iquique",
      "latitude": -20.2141,
      "longitude": -70.1524,
      "country_code": "CL"
    },
    {
      "city": "Cedar Rapids",
      "latitude": 41.9665,
      "longitude": -91.6782,
      "country_code": "US"
    },
    {
      "city": "San Diego",
      "latitude": 10.2558,
      "longitude": -67.9539,
      "country_code": "VE"
    },
    {
      "city": "Gharyān",
      "latitude": 32.1669,
      "longitude": 13.0167,
      "country_code": "LY"
    },
    {
      "city": "Bournemouth",
      "latitude": 50.72,
      "longitude": -1.88,
      "country_code": "GB"
    },
    {
      "city": "Chaedŏk",
      "latitude": 40.6723,
      "longitude": 129.2027,
      "country_code": "KP"
    },
    {
      "city": "Izuo",
      "latitude": 34.4836,
      "longitude": 135.4236,
      "country_code": "JP"
    },
    {
      "city": "La Plata",
      "latitude": -34.9333,
      "longitude": -57.95,
      "country_code": "AR"
    },
    {
      "city": "Prizren",
      "latitude": 42.2167,
      "longitude": 20.7333,
      "country_code": "XK"
    },
    {
      "city": "Sioux Falls",
      "latitude": 43.5397,
      "longitude": -96.732,
      "country_code": "US"
    },
    {
      "city": "Mainz",
      "latitude": 50,
      "longitude": 8.2711,
      "country_code": "DE"
    },
    {
      "city": "Cabo Frio",
      "latitude": -22.8789,
      "longitude": -42.0189,
      "country_code": "BR"
    },
    {
      "city": "Shendi",
      "latitude": 16.6805,
      "longitude": 33.42,
      "country_code": "SD"
    },
    {
      "city": "Reims",
      "latitude": 49.2628,
      "longitude": 4.0347,
      "country_code": "FR"
    },
    {
      "city": "Ed Damazin",
      "latitude": 11.7704,
      "longitude": 34.35,
      "country_code": "SD"
    },
    {
      "city": "Khŭjand",
      "latitude": 40.2833,
      "longitude": 69.6167,
      "country_code": "TJ"
    },
    {
      "city": "Huntington",
      "latitude": 38.4109,
      "longitude": -82.4344,
      "country_code": "US"
    },
    {
      "city": "Dunhuang",
      "latitude": 40.1411,
      "longitude": 94.6616,
      "country_code": "CN"
    },
    {
      "city": "Mahesāna",
      "latitude": 23.6,
      "longitude": 72.4,
      "country_code": "IN"
    },
    {
      "city": "Modena",
      "latitude": 44.6458,
      "longitude": 10.9257,
      "country_code": "IT"
    },
    {
      "city": "Guri",
      "latitude": 37.5947,
      "longitude": 127.1428,
      "country_code": "KR"
    },
    {
      "city": "Jamaame",
      "latitude": 0.0722,
      "longitude": 42.7506,
      "country_code": "SO"
    },
    {
      "city": "Panabo",
      "latitude": 7.3,
      "longitude": 125.6833,
      "country_code": "PH"
    },
    {
      "city": "Ādoni",
      "latitude": 15.63,
      "longitude": 77.28,
      "country_code": "IN"
    },
    {
      "city": "Temirtaū",
      "latitude": 50.0667,
      "longitude": 72.9667,
      "country_code": "KZ"
    },
    {
      "city": "Basel",
      "latitude": 47.5606,
      "longitude": 7.5906,
      "country_code": "CH"
    },
    {
      "city": "Yei",
      "latitude": 4.0904,
      "longitude": 30.68,
      "country_code": "SS"
    },
    {
      "city": "Santo Agostinho",
      "latitude": -8.2869,
      "longitude": -35.035,
      "country_code": "BR"
    },
    {
      "city": "Ontario",
      "latitude": 34.0393,
      "longitude": -117.6064,
      "country_code": "US"
    },
    {
      "city": "Toyokawa",
      "latitude": 34.8268,
      "longitude": 137.3759,
      "country_code": "JP"
    },
    {
      "city": "Luzhang",
      "latitude": 25.8519,
      "longitude": 98.8562,
      "country_code": "CN"
    },
    {
      "city": "Hagerstown",
      "latitude": 39.6401,
      "longitude": -77.7217,
      "country_code": "US"
    },
    {
      "city": "Al Qāmishlī",
      "latitude": 37.05,
      "longitude": 41.2167,
      "country_code": "SY"
    },
    {
      "city": "Manzanillo",
      "latitude": 19.0522,
      "longitude": -104.3158,
      "country_code": "MX"
    },
    {
      "city": "Erie",
      "latitude": 42.1168,
      "longitude": -80.0733,
      "country_code": "US"
    },
    {
      "city": "Vancouver",
      "latitude": 45.6366,
      "longitude": -122.5967,
      "country_code": "US"
    },
    {
      "city": "Nampa",
      "latitude": 43.5845,
      "longitude": -116.5631,
      "country_code": "US"
    },
    {
      "city": "Fardīs",
      "latitude": 35.7247,
      "longitude": 50.9883,
      "country_code": "IR"
    },
    {
      "city": "Fianarantsoa",
      "latitude": -21.4333,
      "longitude": 47.0833,
      "country_code": "MG"
    },
    {
      "city": "Banjar",
      "latitude": -7.3667,
      "longitude": 108.5333,
      "country_code": "ID"
    },
    {
      "city": "Severodvinsk",
      "latitude": 64.5667,
      "longitude": 39.85,
      "country_code": "RU"
    },
    {
      "city": "Rzeszów",
      "latitude": 50.05,
      "longitude": 22,
      "country_code": "PL"
    },
    {
      "city": "Calbayog City",
      "latitude": 12.0667,
      "longitude": 124.6,
      "country_code": "PH"
    },
    {
      "city": "Bhusāval",
      "latitude": 21.02,
      "longitude": 75.83,
      "country_code": "IN"
    },
    {
      "city": "Trondheim",
      "latitude": 63.44,
      "longitude": 10.4,
      "country_code": "NO"
    },
    {
      "city": "Uji",
      "latitude": 34.8808,
      "longitude": 135.7794,
      "country_code": "JP"
    },
    {
      "city": "Passo Fundo",
      "latitude": -28.25,
      "longitude": -52.42,
      "country_code": "BR"
    },
    {
      "city": "Aqtaū",
      "latitude": 43.65,
      "longitude": 51.15,
      "country_code": "KZ"
    },
    {
      "city": "Reggio di Calabria",
      "latitude": 38.1144,
      "longitude": 15.65,
      "country_code": "IT"
    },
    {
      "city": "Niš",
      "latitude": 43.3192,
      "longitude": 21.8961,
      "country_code": "RS"
    },
    {
      "city": "Abakan",
      "latitude": 53.7167,
      "longitude": 91.4167,
      "country_code": "RU"
    },
    {
      "city": "Burlington",
      "latitude": 43.3167,
      "longitude": -79.8,
      "country_code": "CA"
    },
    {
      "city": "Bahraigh",
      "latitude": 27.6204,
      "longitude": 81.6699,
      "country_code": "IN"
    },
    {
      "city": "Bo",
      "latitude": 7.9564,
      "longitude": -11.74,
      "country_code": "SL"
    },
    {
      "city": "Worthing",
      "latitude": 50.8147,
      "longitude": -0.3714,
      "country_code": "GB"
    },
    {
      "city": "Pinrang",
      "latitude": -3.7857,
      "longitude": 119.6522,
      "country_code": "ID"
    },
    {
      "city": "Spartanburg",
      "latitude": 34.9437,
      "longitude": -81.9257,
      "country_code": "US"
    },
    {
      "city": "Brăila",
      "latitude": 45.2692,
      "longitude": 27.9575,
      "country_code": "RO"
    },
    {
      "city": "Nova Friburgo",
      "latitude": -22.26,
      "longitude": -42.54,
      "country_code": "BR"
    },
    {
      "city": "Gastonia",
      "latitude": 35.2494,
      "longitude": -81.1853,
      "country_code": "US"
    },
    {
      "city": "Amadora",
      "latitude": 38.75,
      "longitude": -9.2333,
      "country_code": "PT"
    },
    {
      "city": "Braga",
      "latitude": 41.5333,
      "longitude": -8.4167,
      "country_code": "PT"
    },
    {
      "city": "Fort Lauderdale",
      "latitude": 26.1412,
      "longitude": -80.1464,
      "country_code": "US"
    },
    {
      "city": "Kabankalan",
      "latitude": 9.9833,
      "longitude": 122.8167,
      "country_code": "PH"
    },
    {
      "city": "Tonk",
      "latitude": 26.1505,
      "longitude": 75.79,
      "country_code": "IN"
    },
    {
      "city": "Berazategui",
      "latitude": -34.7679,
      "longitude": -58.2133,
      "country_code": "AR"
    },
    {
      "city": "Khowy",
      "latitude": 38.5503,
      "longitude": 44.9519,
      "country_code": "IR"
    },
    {
      "city": "Sirsa",
      "latitude": 29.4904,
      "longitude": 75.03,
      "country_code": "IN"
    },
    {
      "city": "Narashino",
      "latitude": 35.6808,
      "longitude": 140.0267,
      "country_code": "JP"
    },
    {
      "city": "Tāngāil",
      "latitude": 24.25,
      "longitude": 89.92,
      "country_code": "BD"
    },
    {
      "city": "Jaunpur",
      "latitude": 25.7333,
      "longitude": 82.6833,
      "country_code": "IN"
    },
    {
      "city": "Saarbrücken",
      "latitude": 49.2333,
      "longitude": 7,
      "country_code": "DE"
    },
    {
      "city": "Santo Tomas",
      "latitude": 14.0833,
      "longitude": 121.1833,
      "country_code": "PH"
    },
    {
      "city": "Petropavlovsk-Kamchatskiy",
      "latitude": 53.0167,
      "longitude": 158.65,
      "country_code": "RU"
    },
    {
      "city": "Sittwe",
      "latitude": 20.1444,
      "longitude": 92.8969,
      "country_code": "MM"
    },
    {
      "city": "Phan Rang-Tháp Chàm",
      "latitude": 11.5643,
      "longitude": 108.9886,
      "country_code": "VN"
    },
    {
      "city": "Jīma",
      "latitude": 7.6667,
      "longitude": 36.8333,
      "country_code": "ET"
    },
    {
      "city": "Townsville",
      "latitude": -19.2564,
      "longitude": 146.8183,
      "country_code": "AU"
    },
    {
      "city": "Lhokseumawe",
      "latitude": 5.18,
      "longitude": 97.1506,
      "country_code": "ID"
    },
    {
      "city": "Gliwice",
      "latitude": 50.2976,
      "longitude": 18.6766,
      "country_code": "PL"
    },
    {
      "city": "Funtua",
      "latitude": 11.5204,
      "longitude": 7.32,
      "country_code": "NG"
    },
    {
      "city": "Hinthada",
      "latitude": 17.6483,
      "longitude": 95.4679,
      "country_code": "MM"
    },
    {
      "city": "La Rioja",
      "latitude": -29.4131,
      "longitude": -66.8558,
      "country_code": "AR"
    },
    {
      "city": "Çanakkale",
      "latitude": 40.15,
      "longitude": 26.4,
      "country_code": "TR"
    },
    {
      "city": "Madanapalle",
      "latitude": 13.55,
      "longitude": 78.5,
      "country_code": "IN"
    },
    {
      "city": "Palopo",
      "latitude": -3,
      "longitude": 120.2,
      "country_code": "ID"
    },
    {
      "city": "Ayacucho",
      "latitude": -13.1631,
      "longitude": -74.2244,
      "country_code": "PE"
    },
    {
      "city": "Tunja",
      "latitude": 5.5403,
      "longitude": -73.3614,
      "country_code": "CO"
    },
    {
      "city": "Obuase",
      "latitude": 6.2,
      "longitude": -1.6833,
      "country_code": "GH"
    },
    {
      "city": "Alleppey",
      "latitude": 9.5004,
      "longitude": 76.37,
      "country_code": "IN"
    },
    {
      "city": "Ipswich",
      "latitude": 52.0594,
      "longitude": 1.1556,
      "country_code": "GB"
    },
    {
      "city": "Boma",
      "latitude": -5.85,
      "longitude": 13.05,
      "country_code": "CD"
    },
    {
      "city": "Tiaret",
      "latitude": 35.3667,
      "longitude": 1.3167,
      "country_code": "DZ"
    },
    {
      "city": "Edirne",
      "latitude": 41.6781,
      "longitude": 26.5594,
      "country_code": "TR"
    },
    {
      "city": "Chicoloapan",
      "latitude": 19.4167,
      "longitude": -98.9,
      "country_code": "MX"
    },
    {
      "city": "Longjing",
      "latitude": 42.77,
      "longitude": 129.4197,
      "country_code": "CN"
    },
    {
      "city": "Split",
      "latitude": 43.51,
      "longitude": 16.45,
      "country_code": "HR"
    },
    {
      "city": "Lorain",
      "latitude": 41.4409,
      "longitude": -82.184,
      "country_code": "US"
    },
    {
      "city": "Klerksdorp",
      "latitude": -26.8667,
      "longitude": 26.6667,
      "country_code": "ZA"
    },
    {
      "city": "Murfreesboro",
      "latitude": 35.8492,
      "longitude": -86.4119,
      "country_code": "US"
    },
    {
      "city": "High Point",
      "latitude": 35.9907,
      "longitude": -79.9938,
      "country_code": "US"
    },
    {
      "city": "Hamm",
      "latitude": 51.6667,
      "longitude": 7.8167,
      "country_code": "DE"
    },
    {
      "city": "Tarija",
      "latitude": -21.5317,
      "longitude": -64.7311,
      "country_code": "BO"
    },
    {
      "city": "Al ‘Arīsh",
      "latitude": 31.1249,
      "longitude": 33.8006,
      "country_code": "EG"
    },
    {
      "city": "El Oued",
      "latitude": 33.3704,
      "longitude": 6.86,
      "country_code": "DZ"
    },
    {
      "city": "Paita",
      "latitude": -5.0667,
      "longitude": -81.1,
      "country_code": "PE"
    },
    {
      "city": "Newport News",
      "latitude": 37.1051,
      "longitude": -76.5185,
      "country_code": "US"
    },
    {
      "city": "Torbalı",
      "latitude": 38.1619,
      "longitude": 27.3583,
      "country_code": "TR"
    },
    {
      "city": "Potsdam",
      "latitude": 52.4,
      "longitude": 13.0667,
      "country_code": "DE"
    },
    {
      "city": "Langsa",
      "latitude": 4.4667,
      "longitude": 97.95,
      "country_code": "ID"
    },
    {
      "city": "Bade",
      "latitude": 24.9575,
      "longitude": 121.2989,
      "country_code": "TW"
    },
    {
      "city": "Bida",
      "latitude": 9.0804,
      "longitude": 6.01,
      "country_code": "NG"
    },
    {
      "city": "Şalālah",
      "latitude": 17.0197,
      "longitude": 54.0897,
      "country_code": "OM"
    },
    {
      "city": "Matosinhos",
      "latitude": 41.2077,
      "longitude": -8.6674,
      "country_code": "PT"
    },
    {
      "city": "Baranavichy",
      "latitude": 53.1167,
      "longitude": 25.9833,
      "country_code": "BY"
    },
    {
      "city": "Bīrjand",
      "latitude": 32.8667,
      "longitude": 59.2,
      "country_code": "IR"
    },
    {
      "city": "Vellore",
      "latitude": 12.9204,
      "longitude": 79.15,
      "country_code": "IN"
    },
    {
      "city": "Dam Dam",
      "latitude": 22.62,
      "longitude": 88.42,
      "country_code": "IN"
    },
    {
      "city": "Bejaïa",
      "latitude": 36.75,
      "longitude": 5.0667,
      "country_code": "DZ"
    },
    {
      "city": "Rancho Cucamonga",
      "latitude": 34.1248,
      "longitude": -117.5666,
      "country_code": "US"
    },
    {
      "city": "Norilsk",
      "latitude": 69.3333,
      "longitude": 88.2167,
      "country_code": "RU"
    },
    {
      "city": "Santander",
      "latitude": 43.4667,
      "longitude": -3.8,
      "country_code": "ES"
    },
    {
      "city": "Hemet",
      "latitude": 33.7341,
      "longitude": -116.9969,
      "country_code": "US"
    },
    {
      "city": "Yangmei",
      "latitude": 24.9167,
      "longitude": 121.15,
      "country_code": "TW"
    },
    {
      "city": "Ciudad Valles",
      "latitude": 21.9833,
      "longitude": -99.0167,
      "country_code": "MX"
    },
    {
      "city": "Kadugli",
      "latitude": 11.01,
      "longitude": 29.7,
      "country_code": "SD"
    },
    {
      "city": "Les Cayes",
      "latitude": 18.2004,
      "longitude": -73.75,
      "country_code": "HT"
    },
    {
      "city": "Hitachi",
      "latitude": 36.6,
      "longitude": 140.65,
      "country_code": "JP"
    },
    {
      "city": "Sunderland",
      "latitude": 54.9061,
      "longitude": -1.3811,
      "country_code": "GB"
    },
    {
      "city": "Letpandan",
      "latitude": 17.7866,
      "longitude": 95.7507,
      "country_code": "MM"
    },
    {
      "city": "Kamakurayama",
      "latitude": 35.3197,
      "longitude": 139.5525,
      "country_code": "JP"
    },
    {
      "city": "Zabrze",
      "latitude": 50.3,
      "longitude": 18.7833,
      "country_code": "PL"
    },
    {
      "city": "Almada",
      "latitude": 38.6803,
      "longitude": -9.1583,
      "country_code": "PT"
    },
    {
      "city": "Ilford",
      "latitude": 51.5588,
      "longitude": 0.0855,
      "country_code": "GB"
    },
    {
      "city": "Cuautla",
      "latitude": 18.8167,
      "longitude": -98.95,
      "country_code": "MX"
    },
    {
      "city": "Santa Cruz",
      "latitude": 36.9789,
      "longitude": -122.0346,
      "country_code": "US"
    },
    {
      "city": "Saint-Louis",
      "latitude": 16.0333,
      "longitude": -16.5,
      "country_code": "SN"
    },
    {
      "city": "Barra Mansa",
      "latitude": -22.56,
      "longitude": -44.17,
      "country_code": "BR"
    },
    {
      "city": "Ait Melloul",
      "latitude": 30.3342,
      "longitude": -9.4972,
      "country_code": "MA"
    },
    {
      "city": "Plzeň",
      "latitude": 49.7414,
      "longitude": 13.3825,
      "country_code": "CZ"
    },
    {
      "city": "Ciudad del Carmen",
      "latitude": 18.6333,
      "longitude": -91.8333,
      "country_code": "MX"
    },
    {
      "city": "Danbury",
      "latitude": 41.4016,
      "longitude": -73.471,
      "country_code": "US"
    },
    {
      "city": "Toulon",
      "latitude": 43.1258,
      "longitude": 5.9306,
      "country_code": "FR"
    },
    {
      "city": "Peoria",
      "latitude": 33.7844,
      "longitude": -112.2989,
      "country_code": "US"
    },
    {
      "city": "Oeiras",
      "latitude": 38.697,
      "longitude": -9.3017,
      "country_code": "PT"
    },
    {
      "city": "Dagupan City",
      "latitude": 16.0333,
      "longitude": 120.3333,
      "country_code": "PH"
    },
    {
      "city": "Ereğli",
      "latitude": 41.2583,
      "longitude": 31.425,
      "country_code": "TR"
    },
    {
      "city": "Oceanside",
      "latitude": 33.2247,
      "longitude": -117.3083,
      "country_code": "US"
    },
    {
      "city": "Shibirghān",
      "latitude": 36.665,
      "longitude": 65.752,
      "country_code": "AF"
    },
    {
      "city": "Chandannagar",
      "latitude": 22.8667,
      "longitude": 88.3833,
      "country_code": "IN"
    },
    {
      "city": "Harar",
      "latitude": 9.32,
      "longitude": 42.15,
      "country_code": "ET"
    },
    {
      "city": "Middlesbrough",
      "latitude": 54.5767,
      "longitude": -1.2355,
      "country_code": "GB"
    },
    {
      "city": "Tyre",
      "latitude": 33.2667,
      "longitude": 35.2,
      "country_code": "LB"
    },
    {
      "city": "Koronadal",
      "latitude": 6.5,
      "longitude": 124.85,
      "country_code": "PH"
    },
    {
      "city": "Olsztyn",
      "latitude": 53.78,
      "longitude": 20.4942,
      "country_code": "PL"
    },
    {
      "city": "Cuddalore",
      "latitude": 11.75,
      "longitude": 79.75,
      "country_code": "IN"
    },
    {
      "city": "Marāgheh",
      "latitude": 37.3833,
      "longitude": 46.2667,
      "country_code": "IR"
    },
    {
      "city": "Ōbiraki",
      "latitude": 40.57,
      "longitude": 140.47,
      "country_code": "JP"
    },
    {
      "city": "Tebingtinggi",
      "latitude": 3.3283,
      "longitude": 99.1625,
      "country_code": "ID"
    },
    {
      "city": "Comitán",
      "latitude": 16.2511,
      "longitude": -92.1342,
      "country_code": "MX"
    },
    {
      "city": "San Francisco de Macorís",
      "latitude": 19.3,
      "longitude": -70.25,
      "country_code": "DO"
    },
    {
      "city": "Takaoka",
      "latitude": 42.6504,
      "longitude": 141.55,
      "country_code": "JP"
    },
    {
      "city": "Sīrjān",
      "latitude": 29.47,
      "longitude": 55.73,
      "country_code": "IR"
    },
    {
      "city": "Tanauan",
      "latitude": 14.0833,
      "longitude": 121.15,
      "country_code": "PH"
    },
    {
      "city": "Menemen",
      "latitude": 38.6,
      "longitude": 27.0667,
      "country_code": "TR"
    },
    {
      "city": "Malaybalay",
      "latitude": 8.1575,
      "longitude": 125.1278,
      "country_code": "PH"
    },
    {
      "city": "Elk Grove",
      "latitude": 38.416,
      "longitude": -121.3842,
      "country_code": "US"
    },
    {
      "city": "Syzran",
      "latitude": 53.1667,
      "longitude": 48.4667,
      "country_code": "RU"
    },
    {
      "city": "Carúpano",
      "latitude": 10.6722,
      "longitude": -63.2403,
      "country_code": "VE"
    },
    {
      "city": "Saint-Étienne",
      "latitude": 45.4347,
      "longitude": 4.3903,
      "country_code": "FR"
    },
    {
      "city": "Lagos de Moreno",
      "latitude": 21.3564,
      "longitude": -101.9292,
      "country_code": "MX"
    },
    {
      "city": "León",
      "latitude": 12.4333,
      "longitude": -86.8833,
      "country_code": "NI"
    },
    {
      "city": "Chīrāla",
      "latitude": 15.82,
      "longitude": 80.35,
      "country_code": "IN"
    },
    {
      "city": "Titāgarh",
      "latitude": 22.74,
      "longitude": 88.37,
      "country_code": "IN"
    },
    {
      "city": "Bielsko-Biała",
      "latitude": 49.8225,
      "longitude": 19.0444,
      "country_code": "PL"
    },
    {
      "city": "Beppuchō",
      "latitude": 42.9304,
      "longitude": 143.17,
      "country_code": "JP"
    },
    {
      "city": "Bytom",
      "latitude": 50.347,
      "longitude": 18.923,
      "country_code": "PL"
    },
    {
      "city": "Linjiang",
      "latitude": 41.8082,
      "longitude": 126.9137,
      "country_code": "CN"
    },
    {
      "city": "Hạ Long",
      "latitude": 20.95,
      "longitude": 107.0833,
      "country_code": "VN"
    },
    {
      "city": "Deo",
      "latitude": 24.6561,
      "longitude": 84.4356,
      "country_code": "IN"
    },
    {
      "city": "Pembroke Pines",
      "latitude": 26.0128,
      "longitude": -80.3382,
      "country_code": "US"
    },
    {
      "city": "Tlemcen",
      "latitude": 34.8828,
      "longitude": -1.3167,
      "country_code": "DZ"
    },
    {
      "city": "Albacete",
      "latitude": 38.9956,
      "longitude": -1.8558,
      "country_code": "ES"
    },
    {
      "city": "Castellón de la Plana",
      "latitude": 39.97,
      "longitude": -0.05,
      "country_code": "ES"
    },
    {
      "city": "Shāhīn Shahr",
      "latitude": 32.8639,
      "longitude": 51.5475,
      "country_code": "IR"
    },
    {
      "city": "Comodoro Rivadavia",
      "latitude": -45.8667,
      "longitude": -67.5,
      "country_code": "AR"
    },
    {
      "city": "Ludwigshafen",
      "latitude": 49.4811,
      "longitude": 8.4353,
      "country_code": "DE"
    },
    {
      "city": "Vallejo",
      "latitude": 38.1133,
      "longitude": -122.2358,
      "country_code": "US"
    },
    {
      "city": "Escuintla",
      "latitude": 14.305,
      "longitude": -90.785,
      "country_code": "GT"
    },
    {
      "city": "Izumo",
      "latitude": 35.3681,
      "longitude": 132.755,
      "country_code": "JP"
    },
    {
      "city": "Bertoua",
      "latitude": 4.5833,
      "longitude": 13.6833,
      "country_code": "CM"
    },
    {
      "city": "Banyuwangi",
      "latitude": -8.195,
      "longitude": 114.3696,
      "country_code": "ID"
    },
    {
      "city": "Mülheim",
      "latitude": 51.4283,
      "longitude": 6.8789,
      "country_code": "DE"
    },
    {
      "city": "Sacaba",
      "latitude": -17.4042,
      "longitude": -66.0408,
      "country_code": "BO"
    },
    {
      "city": "Carpina",
      "latitude": -7.8508,
      "longitude": -35.2547,
      "country_code": "BR"
    },
    {
      "city": "Banhā",
      "latitude": 30.4628,
      "longitude": 31.1797,
      "country_code": "EG"
    },
    {
      "city": "Barrie",
      "latitude": 44.3711,
      "longitude": -79.6769,
      "country_code": "CA"
    },
    {
      "city": "Krasnogorsk",
      "latitude": 55.8167,
      "longitude": 37.3333,
      "country_code": "RU"
    },
    {
      "city": "Kaolack",
      "latitude": 14.152,
      "longitude": -16.0726,
      "country_code": "SN"
    },
    {
      "city": "Sakura",
      "latitude": 35.7239,
      "longitude": 140.2239,
      "country_code": "JP"
    },
    {
      "city": "Burgos",
      "latitude": 42.35,
      "longitude": -3.6822,
      "country_code": "ES"
    },
    {
      "city": "Guanajuato",
      "latitude": 21.0178,
      "longitude": -101.2567,
      "country_code": "MX"
    },
    {
      "city": "Reggio Emilia",
      "latitude": 44.7,
      "longitude": 10.6333,
      "country_code": "IT"
    },
    {
      "city": "Francisco Morato",
      "latitude": -23.2817,
      "longitude": -46.7425,
      "country_code": "BR"
    },
    {
      "city": "Garden Grove",
      "latitude": 33.7787,
      "longitude": -117.9601,
      "country_code": "US"
    },
    {
      "city": "Volgodonsk",
      "latitude": 47.5167,
      "longitude": 42.15,
      "country_code": "RU"
    },
    {
      "city": "Bago",
      "latitude": 10.5388,
      "longitude": 122.8384,
      "country_code": "PH"
    },
    {
      "city": "Niiza",
      "latitude": 35.7933,
      "longitude": 139.5653,
      "country_code": "JP"
    },
    {
      "city": "Toledo",
      "latitude": 10.3833,
      "longitude": 123.65,
      "country_code": "PH"
    },
    {
      "city": "Kamensk-Ural’skiy",
      "latitude": 56.4,
      "longitude": 61.9333,
      "country_code": "RU"
    },
    {
      "city": "Kohat",
      "latitude": 33.5869,
      "longitude": 71.4414,
      "country_code": "PK"
    },
    {
      "city": "Nishio",
      "latitude": 34.8667,
      "longitude": 137.0667,
      "country_code": "JP"
    },
    {
      "city": "Loja",
      "latitude": -3.9906,
      "longitude": -79.205,
      "country_code": "EC"
    },
    {
      "city": "Cuauhtémoc",
      "latitude": 28.405,
      "longitude": -106.8667,
      "country_code": "MX"
    },
    {
      "city": "Medford",
      "latitude": 42.3372,
      "longitude": -122.8537,
      "country_code": "US"
    },
    {
      "city": "Hamilton",
      "latitude": -37.7833,
      "longitude": 175.2833,
      "country_code": "NZ"
    },
    {
      "city": "Ussuriysk",
      "latitude": 43.8,
      "longitude": 131.95,
      "country_code": "RU"
    },
    {
      "city": "Uvira",
      "latitude": -3.4044,
      "longitude": 29.1379,
      "country_code": "CD"
    },
    {
      "city": "Portmore",
      "latitude": 17.9667,
      "longitude": -76.8667,
      "country_code": "JM"
    },
    {
      "city": "Machilīpatnam",
      "latitude": 16.1667,
      "longitude": 81.1333,
      "country_code": "IN"
    },
    {
      "city": "Bordj Bou Arreridj",
      "latitude": 36.0667,
      "longitude": 4.7667,
      "country_code": "DZ"
    },
    {
      "city": "Nukus",
      "latitude": 42.4647,
      "longitude": 59.6022,
      "country_code": "UZ"
    },
    {
      "city": "Malāyer",
      "latitude": 34.2942,
      "longitude": 48.82,
      "country_code": "IR"
    },
    {
      "city": "N’Zérékoré",
      "latitude": 7.76,
      "longitude": -8.83,
      "country_code": "GN"
    },
    {
      "city": "Cary",
      "latitude": 35.782,
      "longitude": -78.8191,
      "country_code": "US"
    },
    {
      "city": "Kluang",
      "latitude": 2.0383,
      "longitude": 103.3179,
      "country_code": "MY"
    },
    {
      "city": "Novocherkassk",
      "latitude": 47.4222,
      "longitude": 40.0939,
      "country_code": "RU"
    },
    {
      "city": "Marysville",
      "latitude": 48.0809,
      "longitude": -122.1561,
      "country_code": "US"
    },
    {
      "city": "Digos",
      "latitude": 6.75,
      "longitude": 125.35,
      "country_code": "PH"
    },
    {
      "city": "San Luis",
      "latitude": -33.2994,
      "longitude": -66.3392,
      "country_code": "AR"
    },
    {
      "city": "Corona",
      "latitude": 33.8616,
      "longitude": -117.5649,
      "country_code": "US"
    },
    {
      "city": "Oldenburg",
      "latitude": 53.1439,
      "longitude": 8.2139,
      "country_code": "DE"
    },
    {
      "city": "Medinīpur",
      "latitude": 22.4333,
      "longitude": 87.3333,
      "country_code": "IN"
    },
    {
      "city": "Fenglu",
      "latitude": 24.6728,
      "longitude": 102.9149,
      "country_code": "CN"
    },
    {
      "city": "Al Marj",
      "latitude": 32.5005,
      "longitude": 20.83,
      "country_code": "LY"
    },
    {
      "city": "Sŏsan",
      "latitude": 36.7817,
      "longitude": 126.4522,
      "country_code": "KR"
    },
    {
      "city": "Ocala",
      "latitude": 29.178,
      "longitude": -82.1511,
      "country_code": "US"
    },
    {
      "city": "Sonsonate",
      "latitude": 13.72,
      "longitude": -89.73,
      "country_code": "SV"
    },
    {
      "city": "Gondomar",
      "latitude": 41.15,
      "longitude": -8.5333,
      "country_code": "PT"
    },
    {
      "city": "Sarh",
      "latitude": 9.15,
      "longitude": 18.3833,
      "country_code": "TD"
    },
    {
      "city": "Jamālpur",
      "latitude": 24.9004,
      "longitude": 89.95,
      "country_code": "BD"
    },
    {
      "city": "Fredericksburg",
      "latitude": 38.2992,
      "longitude": -77.4872,
      "country_code": "US"
    },
    {
      "city": "Sobral",
      "latitude": -3.6861,
      "longitude": -40.3497,
      "country_code": "BR"
    },
    {
      "city": "Ambato",
      "latitude": -1.2417,
      "longitude": -78.6197,
      "country_code": "EC"
    },
    {
      "city": "Bāramūla",
      "latitude": 34.2,
      "longitude": 74.34,
      "country_code": "IN"
    },
    {
      "city": "Roxas City",
      "latitude": 11.5833,
      "longitude": 122.75,
      "country_code": "PH"
    },
    {
      "city": "Sorsogon",
      "latitude": 12.9667,
      "longitude": 124,
      "country_code": "PH"
    },
    {
      "city": "Oyama",
      "latitude": 36.3147,
      "longitude": 139.8003,
      "country_code": "JP"
    },
    {
      "city": "Takaoka",
      "latitude": 36.75,
      "longitude": 137.0333,
      "country_code": "JP"
    },
    {
      "city": "Tanjungbalai",
      "latitude": 2.9667,
      "longitude": 99.8,
      "country_code": "ID"
    },
    {
      "city": "Hŭich’ŏn",
      "latitude": 40.1711,
      "longitude": 126.2758,
      "country_code": "KP"
    },
    {
      "city": "Uppsala",
      "latitude": 59.8498,
      "longitude": 17.6389,
      "country_code": "SE"
    },
    {
      "city": "Itapecerica da Serra",
      "latitude": -23.7172,
      "longitude": -46.8494,
      "country_code": "BR"
    },
    {
      "city": "São Caetano do Sul",
      "latitude": -23.6228,
      "longitude": -46.5508,
      "country_code": "BR"
    },
    {
      "city": "Zlatoust",
      "latitude": 55.1667,
      "longitude": 59.6667,
      "country_code": "RU"
    },
    {
      "city": "Rustenburg",
      "latitude": -25.65,
      "longitude": 27.24,
      "country_code": "ZA"
    },
    {
      "city": "Pátra",
      "latitude": 38.25,
      "longitude": 21.7333,
      "country_code": "GR"
    },
    {
      "city": "Ríohacha",
      "latitude": 11.5442,
      "longitude": -72.9069,
      "country_code": "CO"
    },
    {
      "city": "Nador",
      "latitude": 35.1667,
      "longitude": -2.9333,
      "country_code": "MA"
    },
    {
      "city": "Iwata",
      "latitude": 34.7178,
      "longitude": 137.8514,
      "country_code": "JP"
    },
    {
      "city": "Gainesville",
      "latitude": 34.2903,
      "longitude": -83.8301,
      "country_code": "US"
    },
    {
      "city": "Itu",
      "latitude": -23.2642,
      "longitude": -47.2992,
      "country_code": "BR"
    },
    {
      "city": "Fatehpur",
      "latitude": 25.8804,
      "longitude": 80.8,
      "country_code": "IN"
    },
    {
      "city": "‘Ar‘ar",
      "latitude": 30.9833,
      "longitude": 41.0167,
      "country_code": "SA"
    },
    {
      "city": "Hà Tĩnh",
      "latitude": 18.3428,
      "longitude": 105.9058,
      "country_code": "VN"
    },
    {
      "city": "Al Kūfah",
      "latitude": 32.03,
      "longitude": 44.4,
      "country_code": "IQ"
    },
    {
      "city": "Kimberley",
      "latitude": -28.7386,
      "longitude": 24.7586,
      "country_code": "ZA"
    },
    {
      "city": "Tenāli",
      "latitude": 16.243,
      "longitude": 80.64,
      "country_code": "IN"
    },
    {
      "city": "Skikda",
      "latitude": 36.8667,
      "longitude": 6.9,
      "country_code": "DZ"
    },
    {
      "city": "Nantou",
      "latitude": 23.9167,
      "longitude": 120.6833,
      "country_code": "TW"
    },
    {
      "city": "Siirt",
      "latitude": 37.8417,
      "longitude": 41.9458,
      "country_code": "TR"
    },
    {
      "city": "Kuytun",
      "latitude": 44.4196,
      "longitude": 84.9012,
      "country_code": "CN"
    },
    {
      "city": "Osnabrück",
      "latitude": 52.2789,
      "longitude": 8.0431,
      "country_code": "DE"
    },
    {
      "city": "Rio Largo",
      "latitude": -9.4783,
      "longitude": -35.8533,
      "country_code": "BR"
    },
    {
      "city": "Körfez",
      "latitude": 40.7706,
      "longitude": 29.7661,
      "country_code": "TR"
    },
    {
      "city": "Perugia",
      "latitude": 43.1121,
      "longitude": 12.3888,
      "country_code": "IT"
    },
    {
      "city": "Udipi",
      "latitude": 13.3322,
      "longitude": 74.7461,
      "country_code": "IN"
    },
    {
      "city": "Oshawa",
      "latitude": 43.9,
      "longitude": -78.85,
      "country_code": "CA"
    },
    {
      "city": "Klaipėda",
      "latitude": 55.7075,
      "longitude": 21.1428,
      "country_code": "LT"
    },
    {
      "city": "Leverkusen",
      "latitude": 51.0333,
      "longitude": 6.9833,
      "country_code": "DE"
    },
    {
      "city": "Tuluá",
      "latitude": 4.0904,
      "longitude": -76.21,
      "country_code": "CO"
    },
    {
      "city": "Idlib",
      "latitude": 35.9333,
      "longitude": 36.6333,
      "country_code": "SY"
    },
    {
      "city": "Warrington",
      "latitude": 53.3917,
      "longitude": -2.5972,
      "country_code": "GB"
    },
    {
      "city": "Sitalpur",
      "latitude": 27.63,
      "longitude": 80.75,
      "country_code": "IN"
    },
    {
      "city": "Cienfuegos",
      "latitude": 22.1456,
      "longitude": -80.4364,
      "country_code": "CU"
    },
    {
      "city": "Bayamón",
      "latitude": 18.3793,
      "longitude": -66.1635,
      "country_code": "PR"
    },
    {
      "city": "Proddatūr",
      "latitude": 14.73,
      "longitude": 78.55,
      "country_code": "IN"
    },
    {
      "city": "Conjeeveram",
      "latitude": 12.8308,
      "longitude": 79.7078,
      "country_code": "IN"
    },
    {
      "city": "Saqqez",
      "latitude": 36.2497,
      "longitude": 46.2733,
      "country_code": "IR"
    },
    {
      "city": "Dourados",
      "latitude": -22.23,
      "longitude": -54.81,
      "country_code": "BR"
    },
    {
      "city": "Huddersfield",
      "latitude": 53.645,
      "longitude": -1.7798,
      "country_code": "GB"
    },
    {
      "city": "Fukang",
      "latitude": 44.1523,
      "longitude": 87.9793,
      "country_code": "CN"
    },
    {
      "city": "Ube",
      "latitude": 33.9517,
      "longitude": 131.2467,
      "country_code": "JP"
    },
    {
      "city": "Slough",
      "latitude": 51.51,
      "longitude": -0.59,
      "country_code": "GB"
    },
    {
      "city": "Bhisho",
      "latitude": -32.8494,
      "longitude": 27.4381,
      "country_code": "ZA"
    },
    {
      "city": "Chillán",
      "latitude": -36.6067,
      "longitude": -72.1033,
      "country_code": "CL"
    },
    {
      "city": "Enterprise",
      "latitude": 36.0164,
      "longitude": -115.2208,
      "country_code": "US"
    },
    {
      "city": "Odense",
      "latitude": 55.4004,
      "longitude": 10.3833,
      "country_code": "DK"
    },
    {
      "city": "Metro",
      "latitude": -5.1167,
      "longitude": 105.3,
      "country_code": "ID"
    },
    {
      "city": "Ramat Gan",
      "latitude": 32.0833,
      "longitude": 34.8167,
      "country_code": "IL"
    },
    {
      "city": "Muridke",
      "latitude": 31.802,
      "longitude": 74.255,
      "country_code": "PK"
    },
    {
      "city": "Ipswich",
      "latitude": -27.6167,
      "longitude": 152.7667,
      "country_code": "AU"
    },
    {
      "city": "Ruse",
      "latitude": 43.8475,
      "longitude": 25.9544,
      "country_code": "BG"
    },
    {
      "city": "Myingyan",
      "latitude": 21.4618,
      "longitude": 95.3914,
      "country_code": "MM"
    },
    {
      "city": "Chapecó",
      "latitude": -27.1,
      "longitude": -52.64,
      "country_code": "BR"
    },
    {
      "city": "Tangjin",
      "latitude": 36.8944,
      "longitude": 126.6297,
      "country_code": "KR"
    },
    {
      "city": "Tema",
      "latitude": 5.6667,
      "longitude": -0.0167,
      "country_code": "GH"
    },
    {
      "city": "‘Unayzah",
      "latitude": 26.084,
      "longitude": 43.994,
      "country_code": "SA"
    },
    {
      "city": "Barreiras",
      "latitude": -12.1528,
      "longitude": -44.99,
      "country_code": "BR"
    },
    {
      "city": "Piedras Negras",
      "latitude": 28.7,
      "longitude": -100.5231,
      "country_code": "MX"
    },
    {
      "city": "Itapetininga",
      "latitude": -23.5917,
      "longitude": -48.0531,
      "country_code": "BR"
    },
    {
      "city": "Pocheon",
      "latitude": 37.8944,
      "longitude": 127.1992,
      "country_code": "KR"
    },
    {
      "city": "Turgutlu",
      "latitude": 38.5,
      "longitude": 27.7,
      "country_code": "TR"
    },
    {
      "city": "Navsāri",
      "latitude": 20.8504,
      "longitude": 72.92,
      "country_code": "IN"
    },
    {
      "city": "Wau",
      "latitude": 7.7,
      "longitude": 27.9833,
      "country_code": "SS"
    },
    {
      "city": "Gölcük",
      "latitude": 40.6667,
      "longitude": 29.8333,
      "country_code": "TR"
    },
    {
      "city": "Muzaffargarh",
      "latitude": 30.0703,
      "longitude": 71.1933,
      "country_code": "PK"
    },
    {
      "city": "Jizzax",
      "latitude": 40.1167,
      "longitude": 67.85,
      "country_code": "UZ"
    },
    {
      "city": "Atyraū",
      "latitude": 47.1167,
      "longitude": 51.8833,
      "country_code": "KZ"
    },
    {
      "city": "Simao",
      "latitude": 22.7807,
      "longitude": 100.9782,
      "country_code": "CN"
    },
    {
      "city": "Mostar",
      "latitude": 43.3494,
      "longitude": 17.8125,
      "country_code": "BA"
    },
    {
      "city": "El Geneina",
      "latitude": 13.45,
      "longitude": 22.44,
      "country_code": "SD"
    },
    {
      "city": "Bandar-e Māhshahr",
      "latitude": 30.5589,
      "longitude": 49.1981,
      "country_code": "IR"
    },
    {
      "city": "Manchester",
      "latitude": 42.9848,
      "longitude": -71.4447,
      "country_code": "US"
    },
    {
      "city": "Anaco",
      "latitude": 9.4333,
      "longitude": -64.4667,
      "country_code": "VE"
    },
    {
      "city": "Sullana",
      "latitude": -4.9,
      "longitude": -80.7,
      "country_code": "PE"
    },
    {
      "city": "Godhra",
      "latitude": 22.7755,
      "longitude": 73.6149,
      "country_code": "IN"
    },
    {
      "city": "Zemun",
      "latitude": 44.85,
      "longitude": 20.4,
      "country_code": "RS"
    },
    {
      "city": "Mahābād",
      "latitude": 36.7704,
      "longitude": 45.72,
      "country_code": "IR"
    },
    {
      "city": "Budaun",
      "latitude": 28.03,
      "longitude": 79.09,
      "country_code": "IN"
    },
    {
      "city": "Chittoor",
      "latitude": 13.2,
      "longitude": 79.1167,
      "country_code": "IN"
    },
    {
      "city": "Andong",
      "latitude": 36.5656,
      "longitude": 128.725,
      "country_code": "KR"
    },
    {
      "city": "Ash Shaţrah",
      "latitude": 31.4175,
      "longitude": 46.1772,
      "country_code": "IQ"
    },
    {
      "city": "Moçâmedes",
      "latitude": -15.1953,
      "longitude": 12.1508,
      "country_code": "AO"
    },
    {
      "city": "Rafsanjān",
      "latitude": 30.4,
      "longitude": 56,
      "country_code": "IR"
    },
    {
      "city": "Benoni",
      "latitude": -26.1883,
      "longitude": 28.3206,
      "country_code": "ZA"
    },
    {
      "city": "Heidelberg",
      "latitude": 49.4122,
      "longitude": 8.71,
      "country_code": "DE"
    },
    {
      "city": "Al Ghardaqah",
      "latitude": 27.2578,
      "longitude": 33.8117,
      "country_code": "EG"
    },
    {
      "city": "Salihli",
      "latitude": 38.4811,
      "longitude": 28.1392,
      "country_code": "TR"
    },
    {
      "city": "Elektrostal",
      "latitude": 55.8,
      "longitude": 38.45,
      "country_code": "RU"
    },
    {
      "city": "Bontang",
      "latitude": 0.1333,
      "longitude": 117.5,
      "country_code": "ID"
    },
    {
      "city": "Đồng Hới",
      "latitude": 17.4833,
      "longitude": 106.6,
      "country_code": "VN"
    },
    {
      "city": "Krishnanagar",
      "latitude": 23.4,
      "longitude": 88.5,
      "country_code": "IN"
    },
    {
      "city": "Szeged",
      "latitude": 46.25,
      "longitude": 20.1667,
      "country_code": "HU"
    },
    {
      "city": "Sherbrooke",
      "latitude": 45.4,
      "longitude": -71.9,
      "country_code": "CA"
    },
    {
      "city": "Solingen",
      "latitude": 51.1667,
      "longitude": 7.0833,
      "country_code": "DE"
    },
    {
      "city": "Tacheng",
      "latitude": 46.7468,
      "longitude": 82.979,
      "country_code": "CN"
    },
    {
      "city": "Dhamār",
      "latitude": 14.55,
      "longitude": 44.4017,
      "country_code": "YE"
    },
    {
      "city": "José María Ezeiza",
      "latitude": -34.8333,
      "longitude": -58.5167,
      "country_code": "AR"
    },
    {
      "city": "Bragança Paulista",
      "latitude": -22.9189,
      "longitude": -46.5425,
      "country_code": "BR"
    },
    {
      "city": "Ra’s al Khaymah",
      "latitude": 25.7915,
      "longitude": 55.9428,
      "country_code": "AE"
    },
    {
      "city": "Pindamonhangaba",
      "latitude": -22.9239,
      "longitude": -45.4617,
      "country_code": "BR"
    },
    {
      "city": "Dijon",
      "latitude": 47.3167,
      "longitude": 5.0167,
      "country_code": "FR"
    },
    {
      "city": "Livorno",
      "latitude": 43.55,
      "longitude": 10.3167,
      "country_code": "IT"
    },
    {
      "city": "Khōst",
      "latitude": 33.3333,
      "longitude": 69.9167,
      "country_code": "AF"
    },
    {
      "city": "Darmstadt",
      "latitude": 49.8667,
      "longitude": 8.65,
      "country_code": "DE"
    },
    {
      "city": "Saint-Marc",
      "latitude": 19.1167,
      "longitude": -72.7,
      "country_code": "HT"
    },
    {
      "city": "Arad",
      "latitude": 46.1667,
      "longitude": 21.3167,
      "country_code": "RO"
    },
    {
      "city": "Khanpur",
      "latitude": 28.6471,
      "longitude": 70.662,
      "country_code": "PK"
    },
    {
      "city": "Matsuzaka",
      "latitude": 34.5781,
      "longitude": 136.5275,
      "country_code": "JP"
    },
    {
      "city": "Taunggyi",
      "latitude": 20.7833,
      "longitude": 96.9667,
      "country_code": "MM"
    },
    {
      "city": "Bingöl",
      "latitude": 38.8861,
      "longitude": 40.5017,
      "country_code": "TR"
    },
    {
      "city": "San Nicolás de los Arroyos",
      "latitude": -33.3333,
      "longitude": -60.2167,
      "country_code": "AR"
    },
    {
      "city": "Huaycan",
      "latitude": -12.0139,
      "longitude": -76.825,
      "country_code": "PE"
    },
    {
      "city": "Tiraspol",
      "latitude": 46.8319,
      "longitude": 29.5767,
      "country_code": "MD"
    },
    {
      "city": "Shahr-e Kord",
      "latitude": 32.3256,
      "longitude": 50.8644,
      "country_code": "IR"
    },
    {
      "city": "Talas",
      "latitude": 38.6833,
      "longitude": 35.5667,
      "country_code": "TR"
    },
    {
      "city": "Punta del Este",
      "latitude": -34.97,
      "longitude": -54.95,
      "country_code": "UY"
    },
    {
      "city": "Ekibastuz",
      "latitude": 51.7298,
      "longitude": 75.3266,
      "country_code": "KZ"
    },
    {
      "city": "Trece Martires City",
      "latitude": 14.2833,
      "longitude": 120.8667,
      "country_code": "PH"
    },
    {
      "city": "Ōgaki",
      "latitude": 35.3594,
      "longitude": 136.6128,
      "country_code": "JP"
    },
    {
      "city": "Hat Yai",
      "latitude": 7.0167,
      "longitude": 100.4667,
      "country_code": "TH"
    },
    {
      "city": "Chirchiq",
      "latitude": 41.4667,
      "longitude": 69.5833,
      "country_code": "UZ"
    },
    {
      "city": "Catamarca",
      "latitude": -28.4686,
      "longitude": -65.7792,
      "country_code": "AR"
    },
    {
      "city": "Nakhodka",
      "latitude": 67.7504,
      "longitude": 77.52,
      "country_code": "RU"
    },
    {
      "city": "Jijiga",
      "latitude": 9.35,
      "longitude": 42.8,
      "country_code": "ET"
    },
    {
      "city": "Kramatorsk",
      "latitude": 48.7208,
      "longitude": 37.5556,
      "country_code": "UA"
    },
    {
      "city": "Champaign",
      "latitude": 40.1144,
      "longitude": -88.2735,
      "country_code": "US"
    },
    {
      "city": "Alexandria",
      "latitude": 38.8185,
      "longitude": -77.0861,
      "country_code": "US"
    },
    {
      "city": "George",
      "latitude": -33.9667,
      "longitude": 22.45,
      "country_code": "ZA"
    },
    {
      "city": "Herne",
      "latitude": 51.5426,
      "longitude": 7.219,
      "country_code": "DE"
    },
    {
      "city": "Ravenna",
      "latitude": 44.4178,
      "longitude": 12.1994,
      "country_code": "IT"
    },
    {
      "city": "Zarzis",
      "latitude": 33.5104,
      "longitude": 11.1,
      "country_code": "TN"
    },
    {
      "city": "Hayward",
      "latitude": 37.6328,
      "longitude": -122.0772,
      "country_code": "US"
    },
    {
      "city": "La Laguna",
      "latitude": 28.48,
      "longitude": -16.32,
      "country_code": "ES"
    },
    {
      "city": "Higashi-murayama",
      "latitude": 35.7547,
      "longitude": 139.4686,
      "country_code": "JP"
    },
    {
      "city": "Saharsa",
      "latitude": 25.88,
      "longitude": 86.6,
      "country_code": "IN"
    },
    {
      "city": "Stara Zagora",
      "latitude": 42.4247,
      "longitude": 25.6256,
      "country_code": "BG"
    },
    {
      "city": "Châu Đốc",
      "latitude": 10.7,
      "longitude": 105.1167,
      "country_code": "VN"
    },
    {
      "city": "Guimarães",
      "latitude": 41.445,
      "longitude": -8.2908,
      "country_code": "PT"
    },
    {
      "city": "Harīpur",
      "latitude": 31.52,
      "longitude": 75.98,
      "country_code": "IN"
    },
    {
      "city": "Springfield",
      "latitude": 39.771,
      "longitude": -89.6538,
      "country_code": "US"
    },
    {
      "city": "San Cristóbal",
      "latitude": 16.7367,
      "longitude": -92.6383,
      "country_code": "MX"
    },
    {
      "city": "Rafael Castillo",
      "latitude": -34.7167,
      "longitude": -58.6167,
      "country_code": "AR"
    },
    {
      "city": "Villanueva",
      "latitude": 15.3167,
      "longitude": -88.0167,
      "country_code": "HN"
    },
    {
      "city": "Gojra",
      "latitude": 31.15,
      "longitude": 72.6833,
      "country_code": "PK"
    },
    {
      "city": "Lakewood",
      "latitude": 39.6977,
      "longitude": -105.1168,
      "country_code": "US"
    },
    {
      "city": "Oxford",
      "latitude": 51.7519,
      "longitude": -1.2578,
      "country_code": "GB"
    },
    {
      "city": "Villeurbanne",
      "latitude": 45.7667,
      "longitude": 4.8803,
      "country_code": "FR"
    },
    {
      "city": "Lafayette",
      "latitude": 40.399,
      "longitude": -86.8594,
      "country_code": "US"
    },
    {
      "city": "Fethiye",
      "latitude": 36.6206,
      "longitude": 29.1142,
      "country_code": "TR"
    },
    {
      "city": "Ŭiwang",
      "latitude": 37.3447,
      "longitude": 126.9683,
      "country_code": "KR"
    },
    {
      "city": "Navojoa",
      "latitude": 27.0813,
      "longitude": -109.4461,
      "country_code": "MX"
    },
    {
      "city": "Calama",
      "latitude": -22.4624,
      "longitude": -68.9272,
      "country_code": "CL"
    },
    {
      "city": "Erzincan",
      "latitude": 39.7464,
      "longitude": 39.4914,
      "country_code": "TR"
    },
    {
      "city": "Middelburg",
      "latitude": -25.7684,
      "longitude": 29.4783,
      "country_code": "ZA"
    },
    {
      "city": "Mandi Bahauddin",
      "latitude": 32.5861,
      "longitude": 73.4917,
      "country_code": "PK"
    },
    {
      "city": "Zonguldak",
      "latitude": 41.4304,
      "longitude": 31.78,
      "country_code": "TR"
    },
    {
      "city": "Hitachi-Naka",
      "latitude": 36.3964,
      "longitude": 140.5344,
      "country_code": "JP"
    },
    {
      "city": "Isiro",
      "latitude": 2.7833,
      "longitude": 27.6167,
      "country_code": "CD"
    },
    {
      "city": "Jinggangshan",
      "latitude": 26.5736,
      "longitude": 114.1639,
      "country_code": "CN"
    },
    {
      "city": "Jiutepec",
      "latitude": 18.8833,
      "longitude": -99.1667,
      "country_code": "MX"
    },
    {
      "city": "Batumi",
      "latitude": 41.6458,
      "longitude": 41.6417,
      "country_code": "GE"
    },
    {
      "city": "Pathānkot",
      "latitude": 32.2689,
      "longitude": 75.6497,
      "country_code": "IN"
    },
    {
      "city": "Nazilli",
      "latitude": 37.9125,
      "longitude": 28.3206,
      "country_code": "TR"
    },
    {
      "city": "Frederick",
      "latitude": 39.4336,
      "longitude": -77.4141,
      "country_code": "US"
    },
    {
      "city": "Lajes",
      "latitude": -27.8158,
      "longitude": -50.3258,
      "country_code": "BR"
    },
    {
      "city": "Piteşti",
      "latitude": 44.8667,
      "longitude": 24.8833,
      "country_code": "RO"
    },
    {
      "city": "Chlef",
      "latitude": 36.1647,
      "longitude": 1.3317,
      "country_code": "DZ"
    },
    {
      "city": "Chetumal",
      "latitude": 18.5036,
      "longitude": -88.3053,
      "country_code": "MX"
    },
    {
      "city": "Rondonópolis",
      "latitude": -16.4695,
      "longitude": -54.64,
      "country_code": "BR"
    },
    {
      "city": "Esmeraldas",
      "latitude": 0.95,
      "longitude": -79.6667,
      "country_code": "EC"
    },
    {
      "city": "Angers",
      "latitude": 47.4736,
      "longitude": -0.5542,
      "country_code": "FR"
    },
    {
      "city": "Hanam",
      "latitude": 37.5392,
      "longitude": 127.2147,
      "country_code": "KR"
    },
    {
      "city": "Daiwanishi",
      "latitude": 34.83,
      "longitude": 135.4172,
      "country_code": "JP"
    },
    {
      "city": "Matagalpa",
      "latitude": 12.9167,
      "longitude": -85.9167,
      "country_code": "NI"
    },
    {
      "city": "Salzburg",
      "latitude": 47.7972,
      "longitude": 13.0477,
      "country_code": "AT"
    },
    {
      "city": "Vidisha",
      "latitude": 23.5239,
      "longitude": 77.8061,
      "country_code": "IN"
    },
    {
      "city": "Cẩm Phả",
      "latitude": 21.0071,
      "longitude": 107.2845,
      "country_code": "VN"
    },
    {
      "city": "Kariya",
      "latitude": 34.9833,
      "longitude": 137,
      "country_code": "JP"
    },
    {
      "city": "Tochigi",
      "latitude": 36.3824,
      "longitude": 139.7341,
      "country_code": "JP"
    },
    {
      "city": "Lake Charles",
      "latitude": 30.2012,
      "longitude": -93.2122,
      "country_code": "US"
    },
    {
      "city": "Odessa",
      "latitude": 31.8831,
      "longitude": -102.3406,
      "country_code": "US"
    },
    {
      "city": "Nalgonda",
      "latitude": 17.05,
      "longitude": 79.27,
      "country_code": "IN"
    },
    {
      "city": "Ordu",
      "latitude": 40.9833,
      "longitude": 37.8833,
      "country_code": "TR"
    },
    {
      "city": "San Cristóbal",
      "latitude": 18.416,
      "longitude": -70.109,
      "country_code": "DO"
    },
    {
      "city": "Tuscaloosa",
      "latitude": 33.2348,
      "longitude": -87.5267,
      "country_code": "US"
    },
    {
      "city": "Horad Barysaw",
      "latitude": 54.226,
      "longitude": 28.4922,
      "country_code": "BY"
    },
    {
      "city": "Neuss",
      "latitude": 51.2003,
      "longitude": 6.6939,
      "country_code": "DE"
    },
    {
      "city": "Miskolc",
      "latitude": 48.1,
      "longitude": 20.7833,
      "country_code": "HU"
    },
    {
      "city": "Warner Robins",
      "latitude": 32.597,
      "longitude": -83.6529,
      "country_code": "US"
    },
    {
      "city": "Bartın",
      "latitude": 41.6344,
      "longitude": 32.3375,
      "country_code": "TR"
    },
    {
      "city": "Palmdale",
      "latitude": 34.5944,
      "longitude": -118.1057,
      "country_code": "US"
    },
    {
      "city": "Melitopol’",
      "latitude": 46.8333,
      "longitude": 35.3667,
      "country_code": "UA"
    },
    {
      "city": "Zango",
      "latitude": 12.9333,
      "longitude": 8.5333,
      "country_code": "NG"
    },
    {
      "city": "Tama",
      "latitude": 35.6333,
      "longitude": 139.45,
      "country_code": "JP"
    },
    {
      "city": "Hollywood",
      "latitude": 26.0294,
      "longitude": -80.1679,
      "country_code": "US"
    },
    {
      "city": "Bālurghāt",
      "latitude": 25.2167,
      "longitude": 88.7667,
      "country_code": "IN"
    },
    {
      "city": "Midland",
      "latitude": 32.0249,
      "longitude": -102.1137,
      "country_code": "US"
    },
    {
      "city": "Surigao",
      "latitude": 9.7833,
      "longitude": 125.4833,
      "country_code": "PH"
    },
    {
      "city": "Dibrugarh",
      "latitude": 27.4833,
      "longitude": 95,
      "country_code": "IN"
    },
    {
      "city": "Mahajanga",
      "latitude": -15.67,
      "longitude": 46.345,
      "country_code": "MG"
    },
    {
      "city": "Salavat",
      "latitude": 53.3667,
      "longitude": 55.9333,
      "country_code": "RU"
    },
    {
      "city": "Bandırma",
      "latitude": 40.3542,
      "longitude": 27.9725,
      "country_code": "TR"
    },
    {
      "city": "Leesburg",
      "latitude": 28.7657,
      "longitude": -81.8996,
      "country_code": "US"
    },
    {
      "city": "Tuguegarao",
      "latitude": 17.6167,
      "longitude": 121.7167,
      "country_code": "PH"
    },
    {
      "city": "Gandajika",
      "latitude": -6.75,
      "longitude": 23.9667,
      "country_code": "CD"
    },
    {
      "city": "Silao",
      "latitude": 20.9478,
      "longitude": -101.4281,
      "country_code": "MX"
    },
    {
      "city": "Regensburg",
      "latitude": 49.0167,
      "longitude": 12.0833,
      "country_code": "DE"
    },
    {
      "city": "Ueda",
      "latitude": 36.4019,
      "longitude": 138.2492,
      "country_code": "JP"
    },
    {
      "city": "Port Arthur",
      "latitude": 29.8554,
      "longitude": -93.9264,
      "country_code": "US"
    },
    {
      "city": "York",
      "latitude": 53.9583,
      "longitude": -1.0803,
      "country_code": "GB"
    },
    {
      "city": "Palo Negro",
      "latitude": 10.16,
      "longitude": -67.5582,
      "country_code": "VE"
    },
    {
      "city": "Almetyevsk",
      "latitude": 54.9,
      "longitude": 52.3,
      "country_code": "RU"
    },
    {
      "city": "Kafr ash Shaykh",
      "latitude": 31.1,
      "longitude": 30.95,
      "country_code": "EG"
    },
    {
      "city": "Noda",
      "latitude": 35.955,
      "longitude": 139.8747,
      "country_code": "JP"
    },
    {
      "city": "Seogwipo",
      "latitude": 33.2497,
      "longitude": 126.56,
      "country_code": "KR"
    },
    {
      "city": "Moanda",
      "latitude": -5.9229,
      "longitude": 12.355,
      "country_code": "CD"
    },
    {
      "city": "Tete",
      "latitude": -16.1579,
      "longitude": 33.5898,
      "country_code": "MZ"
    },
    {
      "city": "Mzuzu",
      "latitude": -11.45,
      "longitude": 34.0333,
      "country_code": "MW"
    },
    {
      "city": "Fyzābād",
      "latitude": 26.7504,
      "longitude": 82.17,
      "country_code": "IN"
    },
    {
      "city": "Harrow",
      "latitude": 51.5836,
      "longitude": -0.3464,
      "country_code": "GB"
    },
    {
      "city": "Poole",
      "latitude": 50.7167,
      "longitude": -1.9833,
      "country_code": "GB"
    },
    {
      "city": "Semnān",
      "latitude": 35.5833,
      "longitude": 53.3833,
      "country_code": "IR"
    },
    {
      "city": "Hoeryŏng",
      "latitude": 42.4333,
      "longitude": 129.75,
      "country_code": "KP"
    },
    {
      "city": "Kırşehir",
      "latitude": 39.145,
      "longitude": 34.1608,
      "country_code": "TR"
    },
    {
      "city": "Muskegon",
      "latitude": 43.2281,
      "longitude": -86.2563,
      "country_code": "US"
    },
    {
      "city": "Sievierodonetsk",
      "latitude": 48.95,
      "longitude": 38.4833,
      "country_code": "UA"
    },
    {
      "city": "Guarapuava",
      "latitude": -25.38,
      "longitude": -51.48,
      "country_code": "BR"
    },
    {
      "city": "Sinp’o",
      "latitude": 40.0833,
      "longitude": 128.25,
      "country_code": "KP"
    },
    {
      "city": "Silchar",
      "latitude": 24.7904,
      "longitude": 92.79,
      "country_code": "IN"
    },
    {
      "city": "Macon",
      "latitude": 32.8065,
      "longitude": -83.6974,
      "country_code": "US"
    },
    {
      "city": "Kökshetaū",
      "latitude": 53.2824,
      "longitude": 69.3969,
      "country_code": "KZ"
    },
    {
      "city": "Macaé",
      "latitude": -22.38,
      "longitude": -41.79,
      "country_code": "BR"
    },
    {
      "city": "Cairns",
      "latitude": -16.9303,
      "longitude": 145.7703,
      "country_code": "AU"
    },
    {
      "city": "Yilan",
      "latitude": 24.75,
      "longitude": 121.75,
      "country_code": "TW"
    },
    {
      "city": "Papantla de Olarte",
      "latitude": 20.4478,
      "longitude": -97.32,
      "country_code": "MX"
    },
    {
      "city": "Kansas City",
      "latitude": 39.1234,
      "longitude": -94.7443,
      "country_code": "US"
    },
    {
      "city": "Ciudad de Melilla",
      "latitude": 35.2937,
      "longitude": -2.9383,
      "country_code": "ES"
    },
    {
      "city": "Shāntipur",
      "latitude": 23.25,
      "longitude": 88.43,
      "country_code": "IN"
    },
    {
      "city": "Kukichūō",
      "latitude": 36.0622,
      "longitude": 139.6669,
      "country_code": "JP"
    },
    {
      "city": "Golmeh",
      "latitude": 33.6304,
      "longitude": 46.43,
      "country_code": "IR"
    },
    {
      "city": "Zabīd",
      "latitude": 14.1951,
      "longitude": 43.3155,
      "country_code": "YE"
    },
    {
      "city": "Peristéri",
      "latitude": 38.0167,
      "longitude": 23.6833,
      "country_code": "GR"
    },
    {
      "city": "Hindupur",
      "latitude": 13.83,
      "longitude": 77.49,
      "country_code": "IN"
    },
    {
      "city": "Sunnyvale",
      "latitude": 37.3836,
      "longitude": -122.0256,
      "country_code": "US"
    },
    {
      "city": "Baubau",
      "latitude": -5.4667,
      "longitude": 122.633,
      "country_code": "ID"
    },
    {
      "city": "Mudon",
      "latitude": 16.2618,
      "longitude": 97.7215,
      "country_code": "MM"
    },
    {
      "city": "Sayama",
      "latitude": 35.8531,
      "longitude": 139.4122,
      "country_code": "JP"
    },
    {
      "city": "Taza",
      "latitude": 34.2144,
      "longitude": -4.0088,
      "country_code": "MA"
    },
    {
      "city": "Settat",
      "latitude": 33.0023,
      "longitude": -7.6198,
      "country_code": "MA"
    },
    {
      "city": "Imabari",
      "latitude": 34.0661,
      "longitude": 132.9978,
      "country_code": "JP"
    },
    {
      "city": "Foggia",
      "latitude": 41.4584,
      "longitude": 15.5519,
      "country_code": "IT"
    },
    {
      "city": "Erode",
      "latitude": 11.3408,
      "longitude": 77.7172,
      "country_code": "IN"
    },
    {
      "city": "Poços de Caldas",
      "latitude": -21.78,
      "longitude": -46.57,
      "country_code": "BR"
    },
    {
      "city": "Gwangyang",
      "latitude": 34.9403,
      "longitude": 127.7017,
      "country_code": "KR"
    },
    {
      "city": "Tororo",
      "latitude": 0.6928,
      "longitude": 34.1808,
      "country_code": "UG"
    },
    {
      "city": "Gonbad-e Kāvūs",
      "latitude": 37.25,
      "longitude": 55.1672,
      "country_code": "IR"
    },
    {
      "city": "Al Manāqil",
      "latitude": 14.2504,
      "longitude": 32.98,
      "country_code": "SD"
    },
    {
      "city": "Miass",
      "latitude": 55.05,
      "longitude": 60.1,
      "country_code": "RU"
    },
    {
      "city": "Tulancingo",
      "latitude": 20.0833,
      "longitude": -98.3667,
      "country_code": "MX"
    },
    {
      "city": "Nîmes",
      "latitude": 43.838,
      "longitude": 4.361,
      "country_code": "FR"
    },
    {
      "city": "Chinandega",
      "latitude": 12.6242,
      "longitude": -87.1297,
      "country_code": "NI"
    },
    {
      "city": "Saint Albans",
      "latitude": 51.755,
      "longitude": -0.336,
      "country_code": "GB"
    },
    {
      "city": "Nakhodka",
      "latitude": 42.8167,
      "longitude": 132.8833,
      "country_code": "RU"
    },
    {
      "city": "Quevedo",
      "latitude": -1.0333,
      "longitude": -79.45,
      "country_code": "EC"
    },
    {
      "city": "Bintulu",
      "latitude": 3.17,
      "longitude": 113.03,
      "country_code": "MY"
    },
    {
      "city": "Pomona",
      "latitude": 34.0585,
      "longitude": -117.7626,
      "country_code": "US"
    },
    {
      "city": "Siem Reap",
      "latitude": 13.3622,
      "longitude": 103.8597,
      "country_code": "KH"
    },
    {
      "city": "Escondido",
      "latitude": 33.1347,
      "longitude": -117.0722,
      "country_code": "US"
    },
    {
      "city": "Cao Lãnh",
      "latitude": 10.4603,
      "longitude": 105.6331,
      "country_code": "VN"
    },
    {
      "city": "Riobamba",
      "latitude": -1.6743,
      "longitude": -78.6483,
      "country_code": "EC"
    },
    {
      "city": "Vryheid",
      "latitude": -27.7694,
      "longitude": 30.7914,
      "country_code": "ZA"
    },
    {
      "city": "Aş Şuwayḩirah as Sāḩil",
      "latitude": 24.362,
      "longitude": 56.7344,
      "country_code": "OM"
    },
    {
      "city": "Paderborn",
      "latitude": 51.7167,
      "longitude": 8.7667,
      "country_code": "DE"
    },
    {
      "city": "Zamora",
      "latitude": 19.9833,
      "longitude": -102.2833,
      "country_code": "MX"
    },
    {
      "city": "Manzanillo",
      "latitude": 20.3397,
      "longitude": -77.1086,
      "country_code": "CU"
    },
    {
      "city": "Pasadena",
      "latitude": 29.6583,
      "longitude": -95.1499,
      "country_code": "US"
    },
    {
      "city": "Florencio Varela",
      "latitude": -34.8167,
      "longitude": -58.3833,
      "country_code": "AR"
    },
    {
      "city": "Komaki",
      "latitude": 35.2833,
      "longitude": 136.9167,
      "country_code": "JP"
    },
    {
      "city": "Talcahuano",
      "latitude": -36.7145,
      "longitude": -73.1141,
      "country_code": "CL"
    },
    {
      "city": "Kerch",
      "latitude": 45.3386,
      "longitude": 36.4681,
      "country_code": "UA"
    },
    {
      "city": "Patos de Minas",
      "latitude": -18.5871,
      "longitude": -46.5149,
      "country_code": "BR"
    },
    {
      "city": "Copiapó",
      "latitude": -27.3665,
      "longitude": -70.3323,
      "country_code": "CL"
    },
    {
      "city": "Badajoz",
      "latitude": 38.8803,
      "longitude": -6.9753,
      "country_code": "ES"
    },
    {
      "city": "M’Sila",
      "latitude": 35.7,
      "longitude": 4.545,
      "country_code": "DZ"
    },
    {
      "city": "Kragujevac",
      "latitude": 44.0142,
      "longitude": 20.9394,
      "country_code": "RS"
    },
    {
      "city": "Pointe-à-Pitre",
      "latitude": 16.2415,
      "longitude": -61.533,
      "country_code": "GP"
    },
    {
      "city": "Willemstad",
      "latitude": 12.1167,
      "longitude": -68.9333,
      "country_code": "CW"
    },
    {
      "city": "Rimini",
      "latitude": 44.0594,
      "longitude": 12.5683,
      "country_code": "IT"
    },
    {
      "city": "Dundee",
      "latitude": 56.462,
      "longitude": -2.9707,
      "country_code": "GB"
    },
    {
      "city": "Jijel",
      "latitude": 36.822,
      "longitude": 5.766,
      "country_code": "DZ"
    },
    {
      "city": "Ocumare del Tuy",
      "latitude": 10.1136,
      "longitude": -66.7814,
      "country_code": "VE"
    },
    {
      "city": "Valdivia",
      "latitude": -39.8142,
      "longitude": -73.2459,
      "country_code": "CL"
    },
    {
      "city": "Gulu",
      "latitude": 2.7667,
      "longitude": 32.3056,
      "country_code": "UG"
    },
    {
      "city": "La Ceiba",
      "latitude": 15.7631,
      "longitude": -86.797,
      "country_code": "HN"
    },
    {
      "city": "Shāhrūd",
      "latitude": 36.4167,
      "longitude": 55.0167,
      "country_code": "IR"
    },
    {
      "city": "Iruma",
      "latitude": 35.8358,
      "longitude": 139.3911,
      "country_code": "JP"
    },
    {
      "city": "Kashikishi",
      "latitude": -9.3172,
      "longitude": 28.7331,
      "country_code": "ZM"
    },
    {
      "city": "Sumbawanga",
      "latitude": -7.9667,
      "longitude": 31.6167,
      "country_code": "TZ"
    },
    {
      "city": "Keren",
      "latitude": 15.6804,
      "longitude": 38.45,
      "country_code": "ER"
    },
    {
      "city": "Odivelas",
      "latitude": 38.8,
      "longitude": -9.1833,
      "country_code": "PT"
    },
    {
      "city": "New Bedford",
      "latitude": 41.6697,
      "longitude": -70.9428,
      "country_code": "US"
    },
    {
      "city": "Jāmuria",
      "latitude": 23.7,
      "longitude": 87.08,
      "country_code": "IN"
    },
    {
      "city": "Kutaisi",
      "latitude": 42.25,
      "longitude": 42.7,
      "country_code": "GE"
    },
    {
      "city": "Potchefstroom",
      "latitude": -26.715,
      "longitude": 27.1033,
      "country_code": "ZA"
    },
    {
      "city": "Shimotoda",
      "latitude": 35.8175,
      "longitude": 139.6778,
      "country_code": "JP"
    },
    {
      "city": "Concordia",
      "latitude": -31.3922,
      "longitude": -58.0169,
      "country_code": "AR"
    },
    {
      "city": "Abbottabad",
      "latitude": 34.15,
      "longitude": 73.2167,
      "country_code": "PK"
    },
    {
      "city": "Delicias",
      "latitude": 28.1931,
      "longitude": -105.4717,
      "country_code": "MX"
    },
    {
      "city": "Mallawī",
      "latitude": 27.7306,
      "longitude": 30.8425,
      "country_code": "EG"
    },
    {
      "city": "Ağrı",
      "latitude": 39.7225,
      "longitude": 43.0544,
      "country_code": "TR"
    },
    {
      "city": "Amasya",
      "latitude": 40.65,
      "longitude": 35.8333,
      "country_code": "TR"
    },
    {
      "city": "Lạng Sơn",
      "latitude": 21.8478,
      "longitude": 106.7578,
      "country_code": "VN"
    },
    {
      "city": "Salamanca",
      "latitude": 40.9667,
      "longitude": -5.6639,
      "country_code": "ES"
    },
    {
      "city": "Kastamonu",
      "latitude": 41.3833,
      "longitude": 33.7833,
      "country_code": "TR"
    },
    {
      "city": "Marvdasht",
      "latitude": 29.8742,
      "longitude": 52.8025,
      "country_code": "IR"
    },
    {
      "city": "Goma",
      "latitude": -1.69,
      "longitude": 29.22,
      "country_code": "CD"
    },
    {
      "city": "Yonago",
      "latitude": 35.4281,
      "longitude": 133.3311,
      "country_code": "JP"
    },
    {
      "city": "Chingola",
      "latitude": -12.5447,
      "longitude": 27.8708,
      "country_code": "ZM"
    },
    {
      "city": "Fairfield",
      "latitude": 38.2592,
      "longitude": -122.0324,
      "country_code": "US"
    },
    {
      "city": "Mostaganem",
      "latitude": 35.9333,
      "longitude": 0.0903,
      "country_code": "DZ"
    },
    {
      "city": "Hābra",
      "latitude": 22.83,
      "longitude": 88.63,
      "country_code": "IN"
    },
    {
      "city": "Mauli",
      "latitude": 30.7194,
      "longitude": 76.7181,
      "country_code": "IN"
    },
    {
      "city": "Sibiu",
      "latitude": 45.8,
      "longitude": 24.15,
      "country_code": "RO"
    },
    {
      "city": "Naperville",
      "latitude": 41.7483,
      "longitude": -88.1657,
      "country_code": "US"
    },
    {
      "city": "Quilpué",
      "latitude": -33.0498,
      "longitude": -71.4415,
      "country_code": "CL"
    },
    {
      "city": "Dolores Hidalgo Cuna de la Independencia Nacional",
      "latitude": 21.1516,
      "longitude": -100.9369,
      "country_code": "MX"
    },
    {
      "city": "Kopeysk",
      "latitude": 55.1,
      "longitude": 61.6167,
      "country_code": "RU"
    },
    {
      "city": "Lüleburgaz",
      "latitude": 41.4056,
      "longitude": 27.3569,
      "country_code": "TR"
    },
    {
      "city": "Al Ḩawīyah",
      "latitude": 21.4411,
      "longitude": 40.4975,
      "country_code": "SA"
    },
    {
      "city": "Bellevue",
      "latitude": 47.5951,
      "longitude": -122.1535,
      "country_code": "US"
    },
    {
      "city": "Binghamton",
      "latitude": 42.1014,
      "longitude": -75.9093,
      "country_code": "US"
    },
    {
      "city": "Nchelenge",
      "latitude": -9.3467,
      "longitude": 28.7344,
      "country_code": "ZM"
    },
    {
      "city": "Negombo",
      "latitude": 7.2111,
      "longitude": 79.8386,
      "country_code": "LK"
    },
    {
      "city": "Ambāla",
      "latitude": 30.3786,
      "longitude": 76.7725,
      "country_code": "IN"
    },
    {
      "city": "Disūq",
      "latitude": 31.1308,
      "longitude": 30.6479,
      "country_code": "EG"
    },
    {
      "city": "Mangghystaū",
      "latitude": 43.6905,
      "longitude": 51.1417,
      "country_code": "KZ"
    },
    {
      "city": "Malakal",
      "latitude": 9.5333,
      "longitude": 31.65,
      "country_code": "SS"
    },
    {
      "city": "Bacău",
      "latitude": 46.5833,
      "longitude": 26.9167,
      "country_code": "RO"
    },
    {
      "city": "Osorno",
      "latitude": -40.5667,
      "longitude": -73.15,
      "country_code": "CL"
    },
    {
      "city": "Elkhart",
      "latitude": 41.6916,
      "longitude": -85.9628,
      "country_code": "US"
    },
    {
      "city": "Topeka",
      "latitude": 39.0346,
      "longitude": -95.6955,
      "country_code": "US"
    },
    {
      "city": "Mogi Guaçu",
      "latitude": -22.3719,
      "longitude": -46.9419,
      "country_code": "BR"
    },
    {
      "city": "Man",
      "latitude": 7.4004,
      "longitude": -7.55,
      "country_code": "CI"
    },
    {
      "city": "Joliet",
      "latitude": 41.5189,
      "longitude": -88.1499,
      "country_code": "US"
    },
    {
      "city": "Pyatigorsk",
      "latitude": 44.0333,
      "longitude": 43.05,
      "country_code": "RU"
    },
    {
      "city": "Clermont-Ferrand",
      "latitude": 45.7831,
      "longitude": 3.0824,
      "country_code": "FR"
    },
    {
      "city": "Moshi",
      "latitude": -3.3349,
      "longitude": 37.3404,
      "country_code": "TZ"
    },
    {
      "city": "Dar‘ā",
      "latitude": 32.625,
      "longitude": 36.105,
      "country_code": "SY"
    },
    {
      "city": "Rubtsovsk",
      "latitude": 51.5167,
      "longitude": 81.2,
      "country_code": "RU"
    },
    {
      "city": "Cam Ranh",
      "latitude": 11.902,
      "longitude": 109.2207,
      "country_code": "VN"
    },
    {
      "city": "Wamba",
      "latitude": 2.1404,
      "longitude": 27.99,
      "country_code": "CD"
    },
    {
      "city": "Franco da Rocha",
      "latitude": -23.3286,
      "longitude": -46.7244,
      "country_code": "BR"
    },
    {
      "city": "Dadu",
      "latitude": 26.7319,
      "longitude": 67.775,
      "country_code": "PK"
    },
    {
      "city": "Sagay",
      "latitude": 10.9,
      "longitude": 123.4167,
      "country_code": "PH"
    },
    {
      "city": "Bălţi",
      "latitude": 47.7617,
      "longitude": 27.9289,
      "country_code": "MD"
    },
    {
      "city": "San Juan",
      "latitude": 14.6,
      "longitude": 121.0333,
      "country_code": "PH"
    },
    {
      "city": "Kolomna",
      "latitude": 55.0833,
      "longitude": 38.7833,
      "country_code": "RU"
    },
    {
      "city": "Lárisa",
      "latitude": 39.6385,
      "longitude": 22.4131,
      "country_code": "GR"
    },
    {
      "city": "Misato",
      "latitude": 35.8303,
      "longitude": 139.8725,
      "country_code": "JP"
    },
    {
      "city": "San Miguel de Allende",
      "latitude": 20.9142,
      "longitude": -100.7436,
      "country_code": "MX"
    },
    {
      "city": "Beaumont",
      "latitude": 30.0849,
      "longitude": -94.1451,
      "country_code": "US"
    },
    {
      "city": "Paranaguá",
      "latitude": -25.5279,
      "longitude": -48.5345,
      "country_code": "BR"
    },
    {
      "city": "García",
      "latitude": 25.8167,
      "longitude": -100.5833,
      "country_code": "MX"
    },
    {
      "city": "Kakamigahara",
      "latitude": 35.3989,
      "longitude": 136.8486,
      "country_code": "JP"
    },
    {
      "city": "Logroño",
      "latitude": 42.4704,
      "longitude": -2.43,
      "country_code": "ES"
    },
    {
      "city": "Matanzas",
      "latitude": 23.0494,
      "longitude": -81.5736,
      "country_code": "CU"
    },
    {
      "city": "Ilagan",
      "latitude": 17.1333,
      "longitude": 121.8833,
      "country_code": "PH"
    },
    {
      "city": "David",
      "latitude": 8.4333,
      "longitude": -82.4333,
      "country_code": "PA"
    },
    {
      "city": "Le Mans",
      "latitude": 48.0077,
      "longitude": 0.1984,
      "country_code": "FR"
    },
    {
      "city": "San Justo",
      "latitude": -34.6833,
      "longitude": -58.55,
      "country_code": "AR"
    },
    {
      "city": "Qūchān",
      "latitude": 37.1118,
      "longitude": 58.5015,
      "country_code": "IR"
    },
    {
      "city": "Berezniki",
      "latitude": 59.4167,
      "longitude": 56.7833,
      "country_code": "RU"
    },
    {
      "city": "Shillong",
      "latitude": 25.5744,
      "longitude": 91.8789,
      "country_code": "IN"
    },
    {
      "city": "Ereğli",
      "latitude": 37.5058,
      "longitude": 34.0517,
      "country_code": "TR"
    },
    {
      "city": "Tizi Ouzou",
      "latitude": 36.8,
      "longitude": 4.0333,
      "country_code": "DZ"
    },
    {
      "city": "Durrës",
      "latitude": 41.3167,
      "longitude": 19.45,
      "country_code": "AL"
    },
    {
      "city": "Yalova",
      "latitude": 40.6556,
      "longitude": 29.275,
      "country_code": "TR"
    },
    {
      "city": "Villa de Cura",
      "latitude": 10.0386,
      "longitude": -67.4894,
      "country_code": "VE"
    },
    {
      "city": "Paterson",
      "latitude": 40.9147,
      "longitude": -74.1624,
      "country_code": "US"
    },
    {
      "city": "Merced",
      "latitude": 37.3057,
      "longitude": -120.4778,
      "country_code": "US"
    },
    {
      "city": "Kolār",
      "latitude": 13.1333,
      "longitude": 78.1333,
      "country_code": "IN"
    },
    {
      "city": "Cape Coast",
      "latitude": 5.1,
      "longitude": -1.25,
      "country_code": "GH"
    },
    {
      "city": "Al Mukallā",
      "latitude": 14.5333,
      "longitude": 49.1333,
      "country_code": "YE"
    },
    {
      "city": "Dongxing",
      "latitude": 21.5833,
      "longitude": 108.05,
      "country_code": "CN"
    },
    {
      "city": "Comayagua",
      "latitude": 14.46,
      "longitude": -87.65,
      "country_code": "HN"
    },
    {
      "city": "Barranca",
      "latitude": -10.7539,
      "longitude": -77.761,
      "country_code": "PE"
    },
    {
      "city": "Khasavyurt",
      "latitude": 43.25,
      "longitude": 46.5833,
      "country_code": "RU"
    },
    {
      "city": "Saguenay",
      "latitude": 48.4167,
      "longitude": -71.0667,
      "country_code": "CA"
    },
    {
      "city": "Tuxtepec",
      "latitude": 18.1,
      "longitude": -96.1167,
      "country_code": "MX"
    },
    {
      "city": "Kairouan",
      "latitude": 35.6804,
      "longitude": 10.1,
      "country_code": "TN"
    },
    {
      "city": "Marbella",
      "latitude": 36.5114,
      "longitude": -4.8834,
      "country_code": "ES"
    },
    {
      "city": "Huelva",
      "latitude": 37.25,
      "longitude": -6.95,
      "country_code": "ES"
    },
    {
      "city": "Kumba",
      "latitude": 4.6333,
      "longitude": 9.45,
      "country_code": "CM"
    },
    {
      "city": "Parnaíba",
      "latitude": -2.91,
      "longitude": -41.77,
      "country_code": "BR"
    },
    {
      "city": "Barrechid",
      "latitude": 33.27,
      "longitude": -7.5872,
      "country_code": "MA"
    },
    {
      "city": "Bharatpur",
      "latitude": 27.6833,
      "longitude": 84.4333,
      "country_code": "NP"
    },
    {
      "city": "Saïda",
      "latitude": 34.8404,
      "longitude": 0.14,
      "country_code": "DZ"
    },
    {
      "city": "Kusatsu",
      "latitude": 35.0167,
      "longitude": 135.9667,
      "country_code": "JP"
    },
    {
      "city": "Florencia",
      "latitude": 1.6142,
      "longitude": -75.6117,
      "country_code": "CO"
    },
    {
      "city": "Pueblo",
      "latitude": 38.2705,
      "longitude": -104.6112,
      "country_code": "US"
    },
    {
      "city": "Pleiku",
      "latitude": 13.9833,
      "longitude": 108,
      "country_code": "VN"
    },
    {
      "city": "Coimbra",
      "latitude": 40.2111,
      "longitude": -8.4291,
      "country_code": "PT"
    },
    {
      "city": "Ajdābiyā",
      "latitude": 30.77,
      "longitude": 20.22,
      "country_code": "LY"
    },
    {
      "city": "Tyler",
      "latitude": 32.3184,
      "longitude": -95.3062,
      "country_code": "US"
    },
    {
      "city": "Ciego de Ávila",
      "latitude": 21.8481,
      "longitude": -78.7631,
      "country_code": "CU"
    },
    {
      "city": "Pécs",
      "latitude": 46.0708,
      "longitude": 18.2331,
      "country_code": "HU"
    },
    {
      "city": "Ghaznī",
      "latitude": 33.5492,
      "longitude": 68.4233,
      "country_code": "AF"
    },
    {
      "city": "Blackpool",
      "latitude": 53.8142,
      "longitude": -3.0503,
      "country_code": "GB"
    },
    {
      "city": "Nawābganj",
      "latitude": 24.5804,
      "longitude": 88.35,
      "country_code": "BD"
    },
    {
      "city": "Altay",
      "latitude": 47.8666,
      "longitude": 88.1166,
      "country_code": "CN"
    },
    {
      "city": "El Progreso",
      "latitude": 15.4,
      "longitude": -87.8,
      "country_code": "HN"
    },
    {
      "city": "Torrance",
      "latitude": 33.8346,
      "longitude": -118.3417,
      "country_code": "US"
    },
    {
      "city": "Pemba",
      "latitude": -12.9667,
      "longitude": 40.5167,
      "country_code": "MZ"
    },
    {
      "city": "Jaú",
      "latitude": -22.2958,
      "longitude": -48.5578,
      "country_code": "BR"
    },
    {
      "city": "Metairie",
      "latitude": 29.9977,
      "longitude": -90.178,
      "country_code": "US"
    },
    {
      "city": "Touggourt",
      "latitude": 33.1,
      "longitude": 6.0667,
      "country_code": "DZ"
    },
    {
      "city": "Túxpam de Rodríguez Cano",
      "latitude": 20.95,
      "longitude": -97.4,
      "country_code": "MX"
    },
    {
      "city": "Nevşehir",
      "latitude": 38.625,
      "longitude": 34.7122,
      "country_code": "TR"
    },
    {
      "city": "Béchar",
      "latitude": 31.6111,
      "longitude": -2.23,
      "country_code": "DZ"
    },
    {
      "city": "Lévis",
      "latitude": 46.8,
      "longitude": -71.1833,
      "country_code": "CA"
    },
    {
      "city": "Bhīmavaram",
      "latitude": 16.5333,
      "longitude": 81.5333,
      "country_code": "IN"
    },
    {
      "city": "Bilbays",
      "latitude": 30.4167,
      "longitude": 31.5667,
      "country_code": "EG"
    },
    {
      "city": "Tottenham",
      "latitude": 51.588,
      "longitude": -0.072,
      "country_code": "GB"
    },
    {
      "city": "Aix-en-Provence",
      "latitude": 43.5263,
      "longitude": 5.4454,
      "country_code": "FR"
    },
    {
      "city": "Cizre",
      "latitude": 37.325,
      "longitude": 42.1958,
      "country_code": "TR"
    },
    {
      "city": "Arnhem",
      "latitude": 51.988,
      "longitude": 5.923,
      "country_code": "NL"
    },
    {
      "city": "Gisenyi",
      "latitude": -1.6928,
      "longitude": 29.25,
      "country_code": "RW"
    },
    {
      "city": "Fukayachō",
      "latitude": 36.2,
      "longitude": 139.2833,
      "country_code": "JP"
    },
    {
      "city": "Yuma",
      "latitude": 32.5992,
      "longitude": -114.5488,
      "country_code": "US"
    },
    {
      "city": "Telford",
      "latitude": 52.6766,
      "longitude": -2.4469,
      "country_code": "GB"
    },
    {
      "city": "Lichinga",
      "latitude": -13.3,
      "longitude": 35.2456,
      "country_code": "MZ"
    },
    {
      "city": "Ozamiz City",
      "latitude": 8.15,
      "longitude": 123.85,
      "country_code": "PH"
    },
    {
      "city": "Moundou",
      "latitude": 8.5667,
      "longitude": 16.0833,
      "country_code": "TD"
    },
    {
      "city": "Tetovo",
      "latitude": 42.0103,
      "longitude": 20.9714,
      "country_code": "MK"
    },
    {
      "city": "Nizip",
      "latitude": 37.0104,
      "longitude": 37.7985,
      "country_code": "TR"
    },
    {
      "city": "Maykop",
      "latitude": 44.6,
      "longitude": 40.0833,
      "country_code": "RU"
    },
    {
      "city": "Lausanne",
      "latitude": 46.5333,
      "longitude": 6.6333,
      "country_code": "CH"
    },
    {
      "city": "Kamālshahr",
      "latitude": 35.8622,
      "longitude": 50.8717,
      "country_code": "IR"
    },
    {
      "city": "Gweru",
      "latitude": -19.458,
      "longitude": 29.82,
      "country_code": "ZW"
    },
    {
      "city": "Kelowna",
      "latitude": 49.8881,
      "longitude": -119.4956,
      "country_code": "CA"
    },
    {
      "city": "Castanhal",
      "latitude": -1.2939,
      "longitude": -47.9264,
      "country_code": "BR"
    },
    {
      "city": "Irákleio",
      "latitude": 35.3333,
      "longitude": 25.1333,
      "country_code": "GR"
    },
    {
      "city": "Mandsaur",
      "latitude": 24.03,
      "longitude": 75.08,
      "country_code": "IN"
    },
    {
      "city": "Rybnik",
      "latitude": 50.0833,
      "longitude": 18.5,
      "country_code": "PL"
    },
    {
      "city": "Nong’an",
      "latitude": 44.4304,
      "longitude": 125.1701,
      "country_code": "CN"
    },
    {
      "city": "Rize",
      "latitude": 41.0167,
      "longitude": 40.5167,
      "country_code": "TR"
    },
    {
      "city": "Vlorë",
      "latitude": 40.45,
      "longitude": 19.4833,
      "country_code": "AL"
    },
    {
      "city": "Bizerte",
      "latitude": 37.2904,
      "longitude": 9.855,
      "country_code": "TN"
    },
    {
      "city": "Jahrom",
      "latitude": 28.5,
      "longitude": 53.56,
      "country_code": "IR"
    },
    {
      "city": "Surprise",
      "latitude": 33.68,
      "longitude": -112.4524,
      "country_code": "US"
    },
    {
      "city": "Columbia",
      "latitude": 38.9478,
      "longitude": -92.3256,
      "country_code": "US"
    },
    {
      "city": "Colima",
      "latitude": 19.2433,
      "longitude": -103.7247,
      "country_code": "MX"
    },
    {
      "city": "Ishizaki",
      "latitude": 38.4281,
      "longitude": 141.3061,
      "country_code": "JP"
    },
    {
      "city": "Athens",
      "latitude": 33.9508,
      "longitude": -83.3689,
      "country_code": "US"
    },
    {
      "city": "Roseville",
      "latitude": 38.7703,
      "longitude": -121.3196,
      "country_code": "US"
    },
    {
      "city": "Thornton",
      "latitude": 39.9197,
      "longitude": -104.9438,
      "country_code": "US"
    },
    {
      "city": "Khuzdar",
      "latitude": 27.8,
      "longitude": 66.6167,
      "country_code": "PK"
    },
    {
      "city": "Tepatitlán de Morelos",
      "latitude": 20.817,
      "longitude": -102.733,
      "country_code": "MX"
    },
    {
      "city": "Abbotsford",
      "latitude": 49.05,
      "longitude": -122.3167,
      "country_code": "CA"
    },
    {
      "city": "Mati",
      "latitude": 6.95,
      "longitude": 126.2333,
      "country_code": "PH"
    },
    {
      "city": "Ruda Śląska",
      "latitude": 50.2628,
      "longitude": 18.8536,
      "country_code": "PL"
    },
    {
      "city": "Miramar",
      "latitude": 25.9773,
      "longitude": -80.3351,
      "country_code": "US"
    },
    {
      "city": "Batu Pahat",
      "latitude": 1.85,
      "longitude": 102.93,
      "country_code": "MY"
    },
    {
      "city": "Schaarbeek",
      "latitude": 50.8675,
      "longitude": 4.3736,
      "country_code": "BE"
    },
    {
      "city": "Pasadena",
      "latitude": 34.1597,
      "longitude": -118.139,
      "country_code": "US"
    },
    {
      "city": "Kovrov",
      "latitude": 56.3606,
      "longitude": 41.3197,
      "country_code": "RU"
    },
    {
      "city": "Mesquite",
      "latitude": 32.7623,
      "longitude": -96.5889,
      "country_code": "US"
    },
    {
      "city": "Odintsovo",
      "latitude": 55.6733,
      "longitude": 37.2733,
      "country_code": "RU"
    },
    {
      "city": "Kuwana",
      "latitude": 35.0622,
      "longitude": 136.6839,
      "country_code": "JP"
    },
    {
      "city": "Kidapawan",
      "latitude": 7.0083,
      "longitude": 125.0894,
      "country_code": "PH"
    },
    {
      "city": "Santa Maria",
      "latitude": 34.9334,
      "longitude": -120.4432,
      "country_code": "US"
    },
    {
      "city": "Olathe",
      "latitude": 38.8832,
      "longitude": -94.8198,
      "country_code": "US"
    },
    {
      "city": "Masaya",
      "latitude": 11.9667,
      "longitude": -86.1,
      "country_code": "NI"
    },
    {
      "city": "Médéa",
      "latitude": 36.2675,
      "longitude": 2.75,
      "country_code": "DZ"
    },
    {
      "city": "Yaritagua",
      "latitude": 10.08,
      "longitude": -69.1261,
      "country_code": "VE"
    },
    {
      "city": "San Jose",
      "latitude": 15.7833,
      "longitude": 121,
      "country_code": "PH"
    },
    {
      "city": "Houma",
      "latitude": 29.5799,
      "longitude": -90.7058,
      "country_code": "US"
    },
    {
      "city": "Sāmarrā’",
      "latitude": 34.1959,
      "longitude": 43.8857,
      "country_code": "IQ"
    },
    {
      "city": "Koga",
      "latitude": 36.1833,
      "longitude": 139.7,
      "country_code": "JP"
    },
    {
      "city": "Sale",
      "latitude": 53.424,
      "longitude": -2.322,
      "country_code": "GB"
    },
    {
      "city": "Carolina",
      "latitude": 18.4054,
      "longitude": -65.9792,
      "country_code": "PR"
    },
    {
      "city": "Al ‘Aqabah",
      "latitude": 29.5167,
      "longitude": 35,
      "country_code": "JO"
    },
    {
      "city": "Torbat-e Ḩeydarīyeh",
      "latitude": 35.2739,
      "longitude": 59.2194,
      "country_code": "IR"
    },
    {
      "city": "Dawei",
      "latitude": 14.0367,
      "longitude": 98.1867,
      "country_code": "MM"
    },
    {
      "city": "Boulogne-Billancourt",
      "latitude": 48.8352,
      "longitude": 2.2409,
      "country_code": "FR"
    },
    {
      "city": "Zielona Góra",
      "latitude": 51.9397,
      "longitude": 15.505,
      "country_code": "PL"
    },
    {
      "city": "Atbara",
      "latitude": 17.7167,
      "longitude": 33.9833,
      "country_code": "SD"
    },
    {
      "city": "Tours",
      "latitude": 47.2436,
      "longitude": 0.6892,
      "country_code": "FR"
    },
    {
      "city": "Pakpattan",
      "latitude": 30.35,
      "longitude": 73.4,
      "country_code": "PK"
    },
    {
      "city": "Shizuishan",
      "latitude": 39.2333,
      "longitude": 106.769,
      "country_code": "CN"
    },
    {
      "city": "Tsuchiura",
      "latitude": 36.0667,
      "longitude": 140.2,
      "country_code": "JP"
    },
    {
      "city": "Chicacole",
      "latitude": 18.3,
      "longitude": 83.9,
      "country_code": "IN"
    },
    {
      "city": "Botucatu",
      "latitude": -22.8858,
      "longitude": -48.445,
      "country_code": "BR"
    },
    {
      "city": "Dhahran",
      "latitude": 26.2667,
      "longitude": 50.15,
      "country_code": "SA"
    },
    {
      "city": "Pābna",
      "latitude": 24.0004,
      "longitude": 89.25,
      "country_code": "BD"
    },
    {
      "city": "Coquitlam",
      "latitude": 49.2839,
      "longitude": -122.7919,
      "country_code": "CA"
    },
    {
      "city": "Carrollton",
      "latitude": 32.989,
      "longitude": -96.8999,
      "country_code": "US"
    },
    {
      "city": "Tân An",
      "latitude": 10.5322,
      "longitude": 106.4042,
      "country_code": "VN"
    },
    {
      "city": "Souk Ahras",
      "latitude": 36.2904,
      "longitude": 7.95,
      "country_code": "DZ"
    },
    {
      "city": "Caxias",
      "latitude": -4.833,
      "longitude": -43.35,
      "country_code": "BR"
    },
    {
      "city": "Grand Junction",
      "latitude": 39.0876,
      "longitude": -108.5673,
      "country_code": "US"
    },
    {
      "city": "Zacatecas",
      "latitude": 22.7736,
      "longitude": -102.5736,
      "country_code": "MX"
    },
    {
      "city": "Barahona",
      "latitude": 18.2079,
      "longitude": -71.0996,
      "country_code": "DO"
    },
    {
      "city": "Kokubunji",
      "latitude": 35.7108,
      "longitude": 139.4622,
      "country_code": "JP"
    },
    {
      "city": "Pīrānshahr",
      "latitude": 36.6944,
      "longitude": 45.1417,
      "country_code": "IR"
    },
    {
      "city": "Tiruvannāmalai",
      "latitude": 12.2604,
      "longitude": 79.1,
      "country_code": "IN"
    },
    {
      "city": "Amiens",
      "latitude": 49.892,
      "longitude": 2.299,
      "country_code": "FR"
    },
    {
      "city": "Umtata",
      "latitude": -31.58,
      "longitude": 28.79,
      "country_code": "ZA"
    },
    {
      "city": "Charleston",
      "latitude": 38.3484,
      "longitude": -81.6323,
      "country_code": "US"
    },
    {
      "city": "Orange",
      "latitude": 33.8038,
      "longitude": -117.8218,
      "country_code": "US"
    },
    {
      "city": "Fullerton",
      "latitude": 33.8841,
      "longitude": -117.9279,
      "country_code": "US"
    },
    {
      "city": "Sancti Spíritus",
      "latitude": 21.9339,
      "longitude": -79.4439,
      "country_code": "CU"
    },
    {
      "city": "Boulogne-sur-Mer",
      "latitude": 50.7264,
      "longitude": 1.6147,
      "country_code": "FR"
    },
    {
      "city": "Jequié",
      "latitude": -13.85,
      "longitude": -40.08,
      "country_code": "BR"
    },
    {
      "city": "Bat Yam",
      "latitude": 32.0231,
      "longitude": 34.7503,
      "country_code": "IL"
    },
    {
      "city": "Boca del Rio",
      "latitude": 19.1056,
      "longitude": -96.1078,
      "country_code": "MX"
    },
    {
      "city": "Mojokerto",
      "latitude": -7.4722,
      "longitude": 112.4336,
      "country_code": "ID"
    },
    {
      "city": "Darwin",
      "latitude": -12.4381,
      "longitude": 130.8411,
      "country_code": "AU"
    },
    {
      "city": "Zama",
      "latitude": 35.4886,
      "longitude": 139.4075,
      "country_code": "JP"
    },
    {
      "city": "Ingolstadt",
      "latitude": 48.7636,
      "longitude": 11.4261,
      "country_code": "DE"
    },
    {
      "city": "Mandya",
      "latitude": 12.5242,
      "longitude": 76.8958,
      "country_code": "IN"
    },
    {
      "city": "Greeley",
      "latitude": 40.4151,
      "longitude": -104.7706,
      "country_code": "US"
    },
    {
      "city": "Ch’ungmu",
      "latitude": 34.8458,
      "longitude": 128.4236,
      "country_code": "KR"
    },
    {
      "city": "Al Khmissat",
      "latitude": 33.81,
      "longitude": -6.06,
      "country_code": "MA"
    },
    {
      "city": "Birgañj",
      "latitude": 27,
      "longitude": 84.8667,
      "country_code": "NP"
    },
    {
      "city": "Iğdır",
      "latitude": 39.9167,
      "longitude": 44.0333,
      "country_code": "TR"
    },
    {
      "city": "Lira",
      "latitude": 2.2604,
      "longitude": 32.89,
      "country_code": "UG"
    },
    {
      "city": "Jicheon",
      "latitude": 36.1192,
      "longitude": 128.1153,
      "country_code": "KR"
    },
    {
      "city": "Yaizu",
      "latitude": 34.8667,
      "longitude": 138.3167,
      "country_code": "JP"
    },
    {
      "city": "Gunungsitoli",
      "latitude": 1.1167,
      "longitude": 97.5667,
      "country_code": "ID"
    },
    {
      "city": "Danao",
      "latitude": 10.5333,
      "longitude": 123.9333,
      "country_code": "PH"
    },
    {
      "city": "Yunxian Chengguanzhen",
      "latitude": 32.8082,
      "longitude": 110.8136,
      "country_code": "CN"
    },
    {
      "city": "Atibaia",
      "latitude": -23.1172,
      "longitude": -46.5506,
      "country_code": "BR"
    },
    {
      "city": "Jyväskylä",
      "latitude": 62.2333,
      "longitude": 25.7333,
      "country_code": "FI"
    },
    {
      "city": "Bānkura",
      "latitude": 23.25,
      "longitude": 87.0667,
      "country_code": "IN"
    },
    {
      "city": "Inazawa",
      "latitude": 35.25,
      "longitude": 136.7833,
      "country_code": "JP"
    },
    {
      "city": "Salerno",
      "latitude": 40.6806,
      "longitude": 14.7597,
      "country_code": "IT"
    },
    {
      "city": "Vila Franca de Xira",
      "latitude": 38.95,
      "longitude": -8.9833,
      "country_code": "PT"
    },
    {
      "city": "Quillacollo",
      "latitude": -17.3975,
      "longitude": -66.2817,
      "country_code": "BO"
    },
    {
      "city": "Santa María Texmelucan",
      "latitude": 19.2833,
      "longitude": -98.4333,
      "country_code": "MX"
    },
    {
      "city": "Livingstone",
      "latitude": -17.85,
      "longitude": 25.8667,
      "country_code": "ZM"
    },
    {
      "city": "Toowoomba",
      "latitude": -27.5667,
      "longitude": 151.95,
      "country_code": "AU"
    },
    {
      "city": "Bima",
      "latitude": -8.4667,
      "longitude": 118.717,
      "country_code": "ID"
    },
    {
      "city": "Porto Amboim",
      "latitude": -10.7183,
      "longitude": 13.75,
      "country_code": "AO"
    },
    {
      "city": "Maia",
      "latitude": 41.2333,
      "longitude": -8.6167,
      "country_code": "PT"
    },
    {
      "city": "Tarragona",
      "latitude": 41.1187,
      "longitude": 1.2453,
      "country_code": "ES"
    },
    {
      "city": "Encarnación",
      "latitude": -27.3333,
      "longitude": -55.8667,
      "country_code": "PY"
    },
    {
      "city": "Kisarazu",
      "latitude": 35.3761,
      "longitude": 139.9169,
      "country_code": "JP"
    },
    {
      "city": "Marīvān",
      "latitude": 35.5269,
      "longitude": 46.1761,
      "country_code": "IR"
    },
    {
      "city": "Uppsala",
      "latitude": 59.8601,
      "longitude": 17.64,
      "country_code": "SE"
    },
    {
      "city": "Chech’ŏn",
      "latitude": 37.1361,
      "longitude": 128.2119,
      "country_code": "KR"
    },
    {
      "city": "Jinotega",
      "latitude": 13.0833,
      "longitude": -86,
      "country_code": "NI"
    },
    {
      "city": "Pageralam",
      "latitude": -4.0217,
      "longitude": 103.2522,
      "country_code": "ID"
    },
    {
      "city": "Giresun",
      "latitude": 40.9,
      "longitude": 38.4167,
      "country_code": "TR"
    },
    {
      "city": "Termiz",
      "latitude": 37.2242,
      "longitude": 67.2783,
      "country_code": "UZ"
    },
    {
      "city": "Zinacantepec",
      "latitude": 19.2833,
      "longitude": -99.7333,
      "country_code": "MX"
    },
    {
      "city": "Târgu-Mureş",
      "latitude": 46.5497,
      "longitude": 24.5597,
      "country_code": "RO"
    },
    {
      "city": "Las Cruces",
      "latitude": 32.3265,
      "longitude": -106.7892,
      "country_code": "US"
    },
    {
      "city": "’s-Hertogenbosch",
      "latitude": 51.6833,
      "longitude": 5.3167,
      "country_code": "NL"
    },
    {
      "city": "Panama City",
      "latitude": 30.1995,
      "longitude": -85.6004,
      "country_code": "US"
    },
    {
      "city": "Blitar",
      "latitude": -8.1,
      "longitude": 112.15,
      "country_code": "ID"
    },
    {
      "city": "Harlingen",
      "latitude": 26.1917,
      "longitude": -97.6976,
      "country_code": "US"
    },
    {
      "city": "Chiang Mai",
      "latitude": 18.7889,
      "longitude": 98.9833,
      "country_code": "TH"
    },
    {
      "city": "Brighton",
      "latitude": 50.8429,
      "longitude": -0.1313,
      "country_code": "GB"
    },
    {
      "city": "Tobruk",
      "latitude": 32.0833,
      "longitude": 23.95,
      "country_code": "LY"
    },
    {
      "city": "Tauranga",
      "latitude": -37.6858,
      "longitude": 176.1667,
      "country_code": "NZ"
    },
    {
      "city": "Pyay",
      "latitude": 18.8165,
      "longitude": 95.2114,
      "country_code": "MM"
    },
    {
      "city": "Cartago",
      "latitude": 4.75,
      "longitude": -75.91,
      "country_code": "CO"
    },
    {
      "city": "Santiago",
      "latitude": 16.6833,
      "longitude": 121.55,
      "country_code": "PH"
    },
    {
      "city": "May Pen",
      "latitude": 17.95,
      "longitude": -77.25,
      "country_code": "JM"
    },
    {
      "city": "Urganch",
      "latitude": 41.5345,
      "longitude": 60.6249,
      "country_code": "UZ"
    },
    {
      "city": "Zākhū",
      "latitude": 37.1436,
      "longitude": 42.6819,
      "country_code": "IQ"
    },
    {
      "city": "Dumaguete City",
      "latitude": 9.3103,
      "longitude": 123.3081,
      "country_code": "PH"
    },
    {
      "city": "West Valley City",
      "latitude": 40.6889,
      "longitude": -112.0115,
      "country_code": "US"
    },
    {
      "city": "Shuangcheng",
      "latitude": 45.3503,
      "longitude": 126.28,
      "country_code": "CN"
    },
    {
      "city": "Andīmeshk",
      "latitude": 32.45,
      "longitude": 48.35,
      "country_code": "IR"
    },
    {
      "city": "Ōme",
      "latitude": 35.7883,
      "longitude": 139.275,
      "country_code": "JP"
    },
    {
      "city": "Tabaco",
      "latitude": 13.35,
      "longitude": 123.7333,
      "country_code": "PH"
    },
    {
      "city": "Nakhon Ratchasima",
      "latitude": 14.9736,
      "longitude": 102.0831,
      "country_code": "TH"
    },
    {
      "city": "Isahaya",
      "latitude": 32.8442,
      "longitude": 130.0536,
      "country_code": "JP"
    },
    {
      "city": "Ashqelon",
      "latitude": 31.6658,
      "longitude": 34.5664,
      "country_code": "IL"
    },
    {
      "city": "Shahreẕā",
      "latitude": 32.0089,
      "longitude": 51.8667,
      "country_code": "IR"
    },
    {
      "city": "Zābol",
      "latitude": 31.0308,
      "longitude": 61.4972,
      "country_code": "IR"
    },
    {
      "city": "Ramapo",
      "latitude": 41.1404,
      "longitude": -74.1072,
      "country_code": "US"
    },
    {
      "city": "Hampton",
      "latitude": 37.0551,
      "longitude": -76.363,
      "country_code": "US"
    },
    {
      "city": "Calapan",
      "latitude": 13.3667,
      "longitude": 121.2,
      "country_code": "PH"
    },
    {
      "city": "Trois-Rivières",
      "latitude": 46.35,
      "longitude": -72.55,
      "country_code": "CA"
    },
    {
      "city": "Urdaneta",
      "latitude": 15.9761,
      "longitude": 120.5711,
      "country_code": "PH"
    },
    {
      "city": "Milagro",
      "latitude": -2.1347,
      "longitude": -79.5872,
      "country_code": "EC"
    },
    {
      "city": "Heroica Guaymas",
      "latitude": 27.9183,
      "longitude": -110.8989,
      "country_code": "MX"
    },
    {
      "city": "Apatzingan de la Constitucion",
      "latitude": 19.0886,
      "longitude": -102.3508,
      "country_code": "MX"
    },
    {
      "city": "Batticaloa",
      "latitude": 7.717,
      "longitude": 81.7,
      "country_code": "LK"
    },
    {
      "city": "Reẖovot",
      "latitude": 31.8914,
      "longitude": 34.8078,
      "country_code": "IL"
    },
    {
      "city": "Abiko",
      "latitude": 35.8642,
      "longitude": 140.0282,
      "country_code": "JP"
    },
    {
      "city": "Idfū",
      "latitude": 24.9781,
      "longitude": 32.8789,
      "country_code": "EG"
    },
    {
      "city": "Tando Allahyar",
      "latitude": 25.4667,
      "longitude": 68.7167,
      "country_code": "PK"
    },
    {
      "city": "Warren",
      "latitude": 42.4934,
      "longitude": -83.027,
      "country_code": "US"
    },
    {
      "city": "Mauldin",
      "latitude": 34.7849,
      "longitude": -82.3005,
      "country_code": "US"
    },
    {
      "city": "Bloomington",
      "latitude": 40.4757,
      "longitude": -88.9703,
      "country_code": "US"
    },
    {
      "city": "Enfield",
      "latitude": 51.6522,
      "longitude": -0.0808,
      "country_code": "GB"
    },
    {
      "city": "Ségou",
      "latitude": 13.45,
      "longitude": -6.2667,
      "country_code": "ML"
    },
    {
      "city": "Coral Springs",
      "latitude": 26.2702,
      "longitude": -80.2591,
      "country_code": "US"
    },
    {
      "city": "Innsbruck",
      "latitude": 47.2683,
      "longitude": 11.3933,
      "country_code": "AT"
    },
    {
      "city": "Battambang",
      "latitude": 13.1,
      "longitude": 103.2,
      "country_code": "KH"
    },
    {
      "city": "Hassan",
      "latitude": 13.005,
      "longitude": 76.1028,
      "country_code": "IN"
    },
    {
      "city": "Round Rock",
      "latitude": 30.5254,
      "longitude": -97.666,
      "country_code": "US"
    },
    {
      "city": "Yakima",
      "latitude": 46.5923,
      "longitude": -120.5496,
      "country_code": "US"
    },
    {
      "city": "Khorramshahr",
      "latitude": 30.4333,
      "longitude": 48.1833,
      "country_code": "IR"
    },
    {
      "city": "Onomichi",
      "latitude": 34.4089,
      "longitude": 133.205,
      "country_code": "JP"
    },
    {
      "city": "Papeete",
      "latitude": -17.5334,
      "longitude": -149.5667,
      "country_code": "PF"
    },
    {
      "city": "Ouargla",
      "latitude": 31.95,
      "longitude": 5.3167,
      "country_code": "DZ"
    },
    {
      "city": "Trà Vinh",
      "latitude": 9.9369,
      "longitude": 106.3411,
      "country_code": "VN"
    },
    {
      "city": "Narita",
      "latitude": 35.7833,
      "longitude": 140.3167,
      "country_code": "JP"
    },
    {
      "city": "Ninh Bình",
      "latitude": 20.2539,
      "longitude": 105.975,
      "country_code": "VN"
    },
    {
      "city": "San Carlos",
      "latitude": 10.4929,
      "longitude": 123.4095,
      "country_code": "PH"
    },
    {
      "city": "Győr",
      "latitude": 47.6842,
      "longitude": 17.6344,
      "country_code": "HU"
    },
    {
      "city": "Ödemiş",
      "latitude": 38.2311,
      "longitude": 27.9719,
      "country_code": "TR"
    },
    {
      "city": "Kamëz",
      "latitude": 41.3833,
      "longitude": 19.7667,
      "country_code": "AL"
    },
    {
      "city": "San Luis",
      "latitude": 16.2,
      "longitude": -89.44,
      "country_code": "GT"
    },
    {
      "city": "Ibarra",
      "latitude": 0.3628,
      "longitude": -78.13,
      "country_code": "EC"
    },
    {
      "city": "Sterling Heights",
      "latitude": 42.5809,
      "longitude": -83.0305,
      "country_code": "US"
    },
    {
      "city": "Stavanger",
      "latitude": 58.9701,
      "longitude": 5.7333,
      "country_code": "NO"
    },
    {
      "city": "Yavatmāl",
      "latitude": 20.4,
      "longitude": 78.1333,
      "country_code": "IN"
    },
    {
      "city": "Ferrara",
      "latitude": 44.8353,
      "longitude": 11.6199,
      "country_code": "IT"
    },
    {
      "city": "Kent",
      "latitude": 47.3887,
      "longitude": -122.2129,
      "country_code": "US"
    },
    {
      "city": "Karabük",
      "latitude": 41.2,
      "longitude": 32.6333,
      "country_code": "TR"
    },
    {
      "city": "High Wycombe",
      "latitude": 51.6287,
      "longitude": -0.7482,
      "country_code": "GB"
    },
    {
      "city": "Jaraguá do Sul",
      "latitude": -26.48,
      "longitude": -49.1,
      "country_code": "BR"
    },
    {
      "city": "Calabozo",
      "latitude": 8.9219,
      "longitude": -67.4283,
      "country_code": "VE"
    },
    {
      "city": "Lae",
      "latitude": -6.7333,
      "longitude": 146.9833,
      "country_code": "PG"
    },
    {
      "city": "Kigoma",
      "latitude": -4.8833,
      "longitude": 29.6333,
      "country_code": "TZ"
    },
    {
      "city": "Pīlibhīt",
      "latitude": 28.64,
      "longitude": 79.81,
      "country_code": "IN"
    },
    {
      "city": "Guelph",
      "latitude": 43.55,
      "longitude": -80.25,
      "country_code": "CA"
    },
    {
      "city": "Pālghāt",
      "latitude": 10.7792,
      "longitude": 76.6547,
      "country_code": "IN"
    },
    {
      "city": "Buea",
      "latitude": 4.1667,
      "longitude": 9.2333,
      "country_code": "CM"
    },
    {
      "city": "Los Guayos",
      "latitude": 10.1833,
      "longitude": -67.9333,
      "country_code": "VE"
    },
    {
      "city": "Rijeka",
      "latitude": 45.3297,
      "longitude": 14.4322,
      "country_code": "HR"
    },
    {
      "city": "Spanish Town",
      "latitude": 17.9961,
      "longitude": -76.9547,
      "country_code": "JM"
    },
    {
      "city": "Pālakollu",
      "latitude": 16.5333,
      "longitude": 81.7333,
      "country_code": "IN"
    },
    {
      "city": "Kislovodsk",
      "latitude": 43.91,
      "longitude": 42.72,
      "country_code": "RU"
    },
    {
      "city": "Dipolog",
      "latitude": 8.5667,
      "longitude": 123.3333,
      "country_code": "PH"
    },
    {
      "city": "Surat Thani",
      "latitude": 9.1397,
      "longitude": 99.3306,
      "country_code": "TH"
    },
    {
      "city": "Ciénaga",
      "latitude": 11.0104,
      "longitude": -74.25,
      "country_code": "CO"
    },
    {
      "city": "Parepare",
      "latitude": -4.0167,
      "longitude": 119.6236,
      "country_code": "ID"
    },
    {
      "city": "Girardot",
      "latitude": 4.31,
      "longitude": -74.81,
      "country_code": "CO"
    },
    {
      "city": "Burlington",
      "latitude": 36.0758,
      "longitude": -79.4686,
      "country_code": "US"
    },
    {
      "city": "Abohar",
      "latitude": 30.1204,
      "longitude": 74.29,
      "country_code": "IN"
    },
    {
      "city": "Tychy",
      "latitude": 50.1667,
      "longitude": 19,
      "country_code": "PL"
    },
    {
      "city": "Marand",
      "latitude": 38.4167,
      "longitude": 45.7667,
      "country_code": "IR"
    },
    {
      "city": "Quibdó",
      "latitude": 5.6923,
      "longitude": -76.6582,
      "country_code": "CO"
    },
    {
      "city": "Kānchrāpāra",
      "latitude": 22.97,
      "longitude": 88.43,
      "country_code": "IN"
    },
    {
      "city": "Annecy",
      "latitude": 45.916,
      "longitude": 6.133,
      "country_code": "FR"
    },
    {
      "city": "Bellingham",
      "latitude": 48.7543,
      "longitude": -122.4687,
      "country_code": "US"
    },
    {
      "city": "Kozan",
      "latitude": 37.4507,
      "longitude": 35.8123,
      "country_code": "TR"
    },
    {
      "city": "Udon Thani",
      "latitude": 17.4164,
      "longitude": 102.75,
      "country_code": "TH"
    },
    {
      "city": "Iwakuni",
      "latitude": 34.1669,
      "longitude": 132.2197,
      "country_code": "JP"
    },
    {
      "city": "Jīroft",
      "latitude": 28.6781,
      "longitude": 57.7406,
      "country_code": "IR"
    },
    {
      "city": "Tabora",
      "latitude": -5.0167,
      "longitude": 32.8,
      "country_code": "TZ"
    },
    {
      "city": "Santa Clara",
      "latitude": 37.3645,
      "longitude": -121.968,
      "country_code": "US"
    },
    {
      "city": "Västerås",
      "latitude": 59.6173,
      "longitude": 16.5422,
      "country_code": "SE"
    },
    {
      "city": "Çayırova",
      "latitude": 40.8265,
      "longitude": 29.3745,
      "country_code": "TR"
    },
    {
      "city": "Sannār",
      "latitude": 13.55,
      "longitude": 33.6,
      "country_code": "SD"
    },
    {
      "city": "Lucheng",
      "latitude": 30.05,
      "longitude": 101.9667,
      "country_code": "CN"
    },
    {
      "city": "Racine",
      "latitude": 42.7274,
      "longitude": -87.8135,
      "country_code": "US"
    },
    {
      "city": "Greenville",
      "latitude": 35.5956,
      "longitude": -77.3768,
      "country_code": "US"
    },
    {
      "city": "Estelí",
      "latitude": 13.0833,
      "longitude": -86.35,
      "country_code": "NI"
    },
    {
      "city": "Taldyqorghan",
      "latitude": 45.0167,
      "longitude": 78.3667,
      "country_code": "KZ"
    },
    {
      "city": "Cambridge",
      "latitude": 43.3972,
      "longitude": -80.3114,
      "country_code": "CA"
    },
    {
      "city": "Calabayan",
      "latitude": 16.7667,
      "longitude": 121.7833,
      "country_code": "PH"
    },
    {
      "city": "Baidoa",
      "latitude": 3.1167,
      "longitude": 43.65,
      "country_code": "SO"
    },
    {
      "city": "Jaramānā",
      "latitude": 33.4833,
      "longitude": 36.35,
      "country_code": "SY"
    },
    {
      "city": "Fürth",
      "latitude": 49.4783,
      "longitude": 10.9903,
      "country_code": "DE"
    },
    {
      "city": "Serpukhov",
      "latitude": 54.9167,
      "longitude": 37.4,
      "country_code": "RU"
    },
    {
      "city": "Bolton",
      "latitude": 53.578,
      "longitude": -2.429,
      "country_code": "GB"
    },
    {
      "city": "Tukuyu",
      "latitude": -9.2583,
      "longitude": 33.6417,
      "country_code": "TZ"
    },
    {
      "city": "Stamford",
      "latitude": 41.1035,
      "longitude": -73.5583,
      "country_code": "US"
    },
    {
      "city": "Villa Alemana",
      "latitude": -33.0428,
      "longitude": -71.3744,
      "country_code": "CL"
    },
    {
      "city": "Kadoma",
      "latitude": 34.7333,
      "longitude": 135.5833,
      "country_code": "JP"
    },
    {
      "city": "Táriba",
      "latitude": 7.8167,
      "longitude": -72.2167,
      "country_code": "VE"
    },
    {
      "city": "Würzburg",
      "latitude": 49.7944,
      "longitude": 9.9294,
      "country_code": "DE"
    },
    {
      "city": "Songnim",
      "latitude": 38.7333,
      "longitude": 125.6333,
      "country_code": "KP"
    },
    {
      "city": "Mansa",
      "latitude": -11.1822,
      "longitude": 28.8833,
      "country_code": "ZM"
    },
    {
      "city": "Elizabeth",
      "latitude": 40.6657,
      "longitude": -74.1912,
      "country_code": "US"
    },
    {
      "city": "Opole",
      "latitude": 50.6722,
      "longitude": 17.9253,
      "country_code": "PL"
    },
    {
      "city": "Novocheboksarsk",
      "latitude": 56.1167,
      "longitude": 47.5,
      "country_code": "RU"
    },
    {
      "city": "Araras",
      "latitude": -22.3569,
      "longitude": -47.3839,
      "country_code": "BR"
    },
    {
      "city": "Romford",
      "latitude": 51.5768,
      "longitude": 0.1801,
      "country_code": "GB"
    },
    {
      "city": "Mīt Ghamr",
      "latitude": 30.7192,
      "longitude": 31.2628,
      "country_code": "EG"
    },
    {
      "city": "Puno",
      "latitude": -15.8433,
      "longitude": -70.0236,
      "country_code": "PE"
    },
    {
      "city": "Jaranwala",
      "latitude": 31.3342,
      "longitude": 73.4194,
      "country_code": "PK"
    },
    {
      "city": "Salto",
      "latitude": -31.3883,
      "longitude": -57.9606,
      "country_code": "UY"
    },
    {
      "city": "Newport",
      "latitude": 51.5833,
      "longitude": -3,
      "country_code": "GB"
    },
    {
      "city": "Alagoinhas",
      "latitude": -12.1356,
      "longitude": -38.4192,
      "country_code": "BR"
    },
    {
      "city": "Ōmiyachō",
      "latitude": 35.2222,
      "longitude": 138.6214,
      "country_code": "JP"
    },
    {
      "city": "Kamina",
      "latitude": -8.73,
      "longitude": 25.01,
      "country_code": "CD"
    },
    {
      "city": "Seto",
      "latitude": 35.2167,
      "longitude": 137.0833,
      "country_code": "JP"
    },
    {
      "city": "Pinsk",
      "latitude": 52.1228,
      "longitude": 26.095,
      "country_code": "BY"
    },
    {
      "city": "Vihari",
      "latitude": 30.0419,
      "longitude": 72.3528,
      "country_code": "PK"
    },
    {
      "city": "Pôrto Seguro",
      "latitude": -16.4296,
      "longitude": -39.08,
      "country_code": "BR"
    },
    {
      "city": "Koforidua",
      "latitude": 6.1,
      "longitude": -0.2667,
      "country_code": "GH"
    },
    {
      "city": "Ixtlahuaca",
      "latitude": 19.5689,
      "longitude": -99.7669,
      "country_code": "MX"
    },
    {
      "city": "Temperley",
      "latitude": -34.7667,
      "longitude": -58.3833,
      "country_code": "AR"
    },
    {
      "city": "Bataysk",
      "latitude": 47.1333,
      "longitude": 39.75,
      "country_code": "RU"
    },
    {
      "city": "Whitby",
      "latitude": 43.8833,
      "longitude": -78.9417,
      "country_code": "CA"
    },
    {
      "city": "Sakākā",
      "latitude": 30,
      "longitude": 40.1333,
      "country_code": "SA"
    },
    {
      "city": "Tumen",
      "latitude": 42.9661,
      "longitude": 129.8425,
      "country_code": "CN"
    },
    {
      "city": "Örebro",
      "latitude": 59.2669,
      "longitude": 15.1965,
      "country_code": "SE"
    },
    {
      "city": "Mỹ Tho",
      "latitude": 10.35,
      "longitude": 106.35,
      "country_code": "VN"
    },
    {
      "city": "Hāthras",
      "latitude": 27.6,
      "longitude": 78.05,
      "country_code": "IN"
    },
    {
      "city": "Divo",
      "latitude": 5.8372,
      "longitude": -5.3572,
      "country_code": "CI"
    },
    {
      "city": "Guasdualito",
      "latitude": 7.2467,
      "longitude": -70.7292,
      "country_code": "VE"
    },
    {
      "city": "Domodedovo",
      "latitude": 55.4333,
      "longitude": 37.75,
      "country_code": "RU"
    },
    {
      "city": "Darnah",
      "latitude": 32.7648,
      "longitude": 22.6391,
      "country_code": "LY"
    },
    {
      "city": "Port Blair",
      "latitude": 11.6667,
      "longitude": 92.75,
      "country_code": "IN"
    },
    {
      "city": "Cubatão",
      "latitude": -23.8953,
      "longitude": -46.4256,
      "country_code": "BR"
    },
    {
      "city": "Jāzān",
      "latitude": 16.8892,
      "longitude": 42.5611,
      "country_code": "SA"
    },
    {
      "city": "Anderlecht",
      "latitude": 50.8392,
      "longitude": 4.3297,
      "country_code": "BE"
    },
    {
      "city": "Alīpur Duār",
      "latitude": 26.4837,
      "longitude": 89.5667,
      "country_code": "IN"
    },
    {
      "city": "Neftekamsk",
      "latitude": 56.0833,
      "longitude": 54.25,
      "country_code": "RU"
    },
    {
      "city": "Johnson City",
      "latitude": 36.3406,
      "longitude": -82.3803,
      "country_code": "US"
    },
    {
      "city": "Silay",
      "latitude": 10.8,
      "longitude": 122.9667,
      "country_code": "PH"
    },
    {
      "city": "Chilapa de Álvarez",
      "latitude": 17.5944,
      "longitude": -99.1778,
      "country_code": "MX"
    },
    {
      "city": "León",
      "latitude": 42.5989,
      "longitude": -5.5669,
      "country_code": "ES"
    },
    {
      "city": "Bam",
      "latitude": 29.1083,
      "longitude": 58.3583,
      "country_code": "IR"
    },
    {
      "city": "Ulm",
      "latitude": 48.3984,
      "longitude": 9.9916,
      "country_code": "DE"
    },
    {
      "city": "Lafia",
      "latitude": 8.4904,
      "longitude": 8.52,
      "country_code": "NG"
    },
    {
      "city": "Tây Ninh",
      "latitude": 11.3131,
      "longitude": 106.0963,
      "country_code": "VN"
    },
    {
      "city": "Iizuka",
      "latitude": 33.6458,
      "longitude": 130.6914,
      "country_code": "JP"
    },
    {
      "city": "Santana de Parnaíba",
      "latitude": -23.4439,
      "longitude": -46.9178,
      "country_code": "BR"
    },
    {
      "city": "Heilbronn",
      "latitude": 49.1404,
      "longitude": 9.218,
      "country_code": "DE"
    },
    {
      "city": "Rustavi",
      "latitude": 41.5333,
      "longitude": 45,
      "country_code": "GE"
    },
    {
      "city": "Pakokku",
      "latitude": 21.332,
      "longitude": 95.0866,
      "country_code": "MM"
    },
    {
      "city": "Payakumbuh",
      "latitude": -0.2244,
      "longitude": 100.6325,
      "country_code": "ID"
    },
    {
      "city": "Angren",
      "latitude": 41.0167,
      "longitude": 70.1333,
      "country_code": "UZ"
    },
    {
      "city": "Sogamoso",
      "latitude": 5.72,
      "longitude": -72.94,
      "country_code": "CO"
    },
    {
      "city": "Leiria",
      "latitude": 39.7431,
      "longitude": -8.8069,
      "country_code": "PT"
    },
    {
      "city": "Basīrhat",
      "latitude": 22.6572,
      "longitude": 88.8942,
      "country_code": "IN"
    },
    {
      "city": "Miramar",
      "latitude": 22.3375,
      "longitude": -97.8694,
      "country_code": "MX"
    },
    {
      "city": "Leeuwarden",
      "latitude": 53.2504,
      "longitude": 5.7834,
      "country_code": "NL"
    },
    {
      "city": "Gafsa",
      "latitude": 34.4204,
      "longitude": 8.78,
      "country_code": "TN"
    },
    {
      "city": "Ünye",
      "latitude": 41.1271,
      "longitude": 37.2882,
      "country_code": "TR"
    },
    {
      "city": "Ramos Mejía",
      "latitude": -34.65,
      "longitude": -58.5667,
      "country_code": "AR"
    },
    {
      "city": "Navadwīp",
      "latitude": 23.4088,
      "longitude": 88.3657,
      "country_code": "IN"
    },
    {
      "city": "Pforzheim",
      "latitude": 48.895,
      "longitude": 8.705,
      "country_code": "DE"
    },
    {
      "city": "Exeter",
      "latitude": 50.7167,
      "longitude": -3.5333,
      "country_code": "GB"
    },
    {
      "city": "Lynchburg",
      "latitude": 37.4003,
      "longitude": -79.1909,
      "country_code": "US"
    },
    {
      "city": "Guntakal",
      "latitude": 15.17,
      "longitude": 77.38,
      "country_code": "IN"
    },
    {
      "city": "Pangkalpinang",
      "latitude": -2.1,
      "longitude": 106.1,
      "country_code": "ID"
    },
    {
      "city": "Latina",
      "latitude": 41.4676,
      "longitude": 12.9037,
      "country_code": "IT"
    },
    {
      "city": "Simi Valley",
      "latitude": 34.2663,
      "longitude": -118.749,
      "country_code": "US"
    },
    {
      "city": "Daitōchō",
      "latitude": 34.7119,
      "longitude": 135.6233,
      "country_code": "JP"
    },
    {
      "city": "Aalborg",
      "latitude": 57.0337,
      "longitude": 9.9166,
      "country_code": "DK"
    },
    {
      "city": "Guelma",
      "latitude": 36.466,
      "longitude": 7.428,
      "country_code": "DZ"
    },
    {
      "city": "Barbacena",
      "latitude": -21.2258,
      "longitude": -43.7739,
      "country_code": "BR"
    },
    {
      "city": "Monza",
      "latitude": 45.5836,
      "longitude": 9.2736,
      "country_code": "IT"
    },
    {
      "city": "Tengyue",
      "latitude": 25.0333,
      "longitude": 98.4666,
      "country_code": "CN"
    },
    {
      "city": "Solihull",
      "latitude": 52.413,
      "longitude": -1.778,
      "country_code": "GB"
    },
    {
      "city": "Dunedin",
      "latitude": -45.8667,
      "longitude": 170.5,
      "country_code": "NZ"
    },
    {
      "city": "Hālīsahar",
      "latitude": 22.95,
      "longitude": 88.42,
      "country_code": "IN"
    },
    {
      "city": "Nefteyugansk",
      "latitude": 61.1,
      "longitude": 72.6,
      "country_code": "RU"
    },
    {
      "city": "Magway",
      "latitude": 20.15,
      "longitude": 94.95,
      "country_code": "MM"
    },
    {
      "city": "Shashemenē",
      "latitude": 7.2004,
      "longitude": 38.59,
      "country_code": "ET"
    },
    {
      "city": "Rishra",
      "latitude": 22.71,
      "longitude": 88.35,
      "country_code": "IN"
    },
    {
      "city": "Malanje",
      "latitude": -9.54,
      "longitude": 16.34,
      "country_code": "AO"
    },
    {
      "city": "Magelang",
      "latitude": -7.4706,
      "longitude": 110.2178,
      "country_code": "ID"
    },
    {
      "city": "Gashua",
      "latitude": 12.8705,
      "longitude": 11.04,
      "country_code": "NG"
    },
    {
      "city": "Shchelkovo",
      "latitude": 55.9167,
      "longitude": 38,
      "country_code": "RU"
    },
    {
      "city": "Kampong Cham",
      "latitude": 12,
      "longitude": 105.45,
      "country_code": "KH"
    },
    {
      "city": "Santa Tecla",
      "latitude": 13.674,
      "longitude": -89.29,
      "country_code": "SV"
    },
    {
      "city": "Novomoskovsk",
      "latitude": 54.0333,
      "longitude": 38.2667,
      "country_code": "RU"
    },
    {
      "city": "Gorzów Wielkopolski",
      "latitude": 52.7333,
      "longitude": 15.25,
      "country_code": "PL"
    },
    {
      "city": "Cam Ranh",
      "latitude": 11.9136,
      "longitude": 109.1369,
      "country_code": "VN"
    },
    {
      "city": "Giugliano in Campania",
      "latitude": 40.9319,
      "longitude": 14.1956,
      "country_code": "IT"
    },
    {
      "city": "Kumbo",
      "latitude": 6.2,
      "longitude": 10.66,
      "country_code": "CM"
    },
    {
      "city": "Cagua",
      "latitude": 10.1831,
      "longitude": -67.45,
      "country_code": "VE"
    },
    {
      "city": "Cádiz",
      "latitude": 36.535,
      "longitude": -6.2975,
      "country_code": "ES"
    },
    {
      "city": "Jandira",
      "latitude": -23.5278,
      "longitude": -46.9028,
      "country_code": "BR"
    },
    {
      "city": "Ghardaïa",
      "latitude": 32.49,
      "longitude": 3.67,
      "country_code": "DZ"
    },
    {
      "city": "Gateshead",
      "latitude": 54.95,
      "longitude": -1.6,
      "country_code": "GB"
    },
    {
      "city": "Honchō",
      "latitude": 35.7581,
      "longitude": 139.5297,
      "country_code": "JP"
    },
    {
      "city": "Uruguaiana",
      "latitude": -29.755,
      "longitude": -57.0878,
      "country_code": "BR"
    },
    {
      "city": "Curicó",
      "latitude": -34.9854,
      "longitude": -71.2394,
      "country_code": "CL"
    },
    {
      "city": "Orizaba",
      "latitude": 18.85,
      "longitude": -97.1,
      "country_code": "MX"
    },
    {
      "city": "Ciudad de Atlixco",
      "latitude": 18.9,
      "longitude": -98.45,
      "country_code": "MX"
    },
    {
      "city": "Fort Smith",
      "latitude": 35.3493,
      "longitude": -94.3695,
      "country_code": "US"
    },
    {
      "city": "Resende",
      "latitude": -22.4689,
      "longitude": -44.4469,
      "country_code": "BR"
    },
    {
      "city": "Polatlı",
      "latitude": 39.5842,
      "longitude": 32.1472,
      "country_code": "TR"
    },
    {
      "city": "Porlamar",
      "latitude": 10.9556,
      "longitude": -63.8478,
      "country_code": "VE"
    },
    {
      "city": "Kenosha",
      "latitude": 42.5864,
      "longitude": -87.8765,
      "country_code": "US"
    },
    {
      "city": "Amherst",
      "latitude": 43.0117,
      "longitude": -78.7569,
      "country_code": "US"
    },
    {
      "city": "Gingoog",
      "latitude": 8.8167,
      "longitude": 125.1,
      "country_code": "PH"
    },
    {
      "city": "Dūmā",
      "latitude": 33.5722,
      "longitude": 36.4019,
      "country_code": "SY"
    },
    {
      "city": "Wolfsburg",
      "latitude": 52.4231,
      "longitude": 10.7872,
      "country_code": "DE"
    },
    {
      "city": "South Lyon",
      "latitude": 42.4614,
      "longitude": -83.6526,
      "country_code": "US"
    },
    {
      "city": "Pouso Alegre",
      "latitude": -22.22,
      "longitude": -45.94,
      "country_code": "BR"
    },
    {
      "city": "Maastricht",
      "latitude": 50.853,
      "longitude": 5.677,
      "country_code": "NL"
    },
    {
      "city": "Pervouralsk",
      "latitude": 56.9167,
      "longitude": 59.95,
      "country_code": "RU"
    },
    {
      "city": "Hosan",
      "latitude": 36.2039,
      "longitude": 127.0847,
      "country_code": "KR"
    },
    {
      "city": "Ise",
      "latitude": 34.4833,
      "longitude": 136.7167,
      "country_code": "JP"
    },
    {
      "city": "Boulder",
      "latitude": 40.0249,
      "longitude": -105.2523,
      "country_code": "US"
    },
    {
      "city": "Bimbo",
      "latitude": 4.3313,
      "longitude": 18.5163,
      "country_code": "CF"
    },
    {
      "city": "Baia Mare",
      "latitude": 47.6597,
      "longitude": 23.5819,
      "country_code": "RO"
    },
    {
      "city": "Savannakhet",
      "latitude": 16.55,
      "longitude": 104.75,
      "country_code": "LA"
    },
    {
      "city": "Al Ḩajar al Aswad",
      "latitude": 33.4581,
      "longitude": 36.3053,
      "country_code": "SY"
    },
    {
      "city": "Kadirli",
      "latitude": 37.3739,
      "longitude": 36.0961,
      "country_code": "TR"
    },
    {
      "city": "Brits",
      "latitude": -25.6167,
      "longitude": 27.7667,
      "country_code": "ZA"
    },
    {
      "city": "Cherkessk",
      "latitude": 44.2222,
      "longitude": 42.0575,
      "country_code": "RU"
    },
    {
      "city": "Indramayu",
      "latitude": -6.3356,
      "longitude": 108.319,
      "country_code": "ID"
    },
    {
      "city": "Higüey",
      "latitude": 18.616,
      "longitude": -68.708,
      "country_code": "DO"
    },
    {
      "city": "Rudnyy",
      "latitude": 52.9527,
      "longitude": 63.13,
      "country_code": "KZ"
    },
    {
      "city": "Khrustalnyi",
      "latitude": 48.1214,
      "longitude": 38.9453,
      "country_code": "UA"
    },
    {
      "city": "Honmachi",
      "latitude": 32.5178,
      "longitude": 130.6181,
      "country_code": "JP"
    },
    {
      "city": "Pescara",
      "latitude": 42.4643,
      "longitude": 14.2142,
      "country_code": "IT"
    },
    {
      "city": "San Pedro Garza García",
      "latitude": 25.6667,
      "longitude": -100.3,
      "country_code": "MX"
    },
    {
      "city": "Pleven",
      "latitude": 43.4078,
      "longitude": 24.6203,
      "country_code": "BG"
    },
    {
      "city": "Hội An",
      "latitude": 15.8733,
      "longitude": 108.3327,
      "country_code": "VN"
    },
    {
      "city": "Derbent",
      "latitude": 42.0692,
      "longitude": 48.2958,
      "country_code": "RU"
    },
    {
      "city": "Preston",
      "latitude": 53.759,
      "longitude": -2.699,
      "country_code": "GB"
    },
    {
      "city": "Villa de Álvarez",
      "latitude": 19.25,
      "longitude": -103.7333,
      "country_code": "MX"
    },
    {
      "city": "Pati",
      "latitude": -6.7415,
      "longitude": 111.0347,
      "country_code": "ID"
    },
    {
      "city": "Tsuruoka",
      "latitude": 38.7217,
      "longitude": 139.8217,
      "country_code": "JP"
    },
    {
      "city": "Munūf",
      "latitude": 30.4667,
      "longitude": 30.9333,
      "country_code": "EG"
    },
    {
      "city": "Gagnoa",
      "latitude": 6.1333,
      "longitude": -5.9333,
      "country_code": "CI"
    },
    {
      "city": "Punta Arenas",
      "latitude": -53.1627,
      "longitude": -70.9081,
      "country_code": "CL"
    },
    {
      "city": "Dąbrowa Górnicza",
      "latitude": 50.3239,
      "longitude": 19.1947,
      "country_code": "PL"
    },
    {
      "city": "Munch’ŏn",
      "latitude": 39.259,
      "longitude": 127.356,
      "country_code": "KP"
    },
    {
      "city": "Khénifra",
      "latitude": 32.93,
      "longitude": -5.66,
      "country_code": "MA"
    },
    {
      "city": "Alberton",
      "latitude": -26.2672,
      "longitude": 28.1219,
      "country_code": "ZA"
    },
    {
      "city": "Lianhe",
      "latitude": 47.1364,
      "longitude": 129.2859,
      "country_code": "CN"
    },
    {
      "city": "San Fernando",
      "latitude": 16.6167,
      "longitude": 120.3167,
      "country_code": "PH"
    },
    {
      "city": "Jirjā",
      "latitude": 26.3419,
      "longitude": 31.8894,
      "country_code": "EG"
    },
    {
      "city": "Patnos",
      "latitude": 39.2358,
      "longitude": 42.8686,
      "country_code": "TR"
    },
    {
      "city": "Bergamo",
      "latitude": 45.695,
      "longitude": 9.67,
      "country_code": "IT"
    },
    {
      "city": "Blackburn",
      "latitude": 53.748,
      "longitude": -2.482,
      "country_code": "GB"
    },
    {
      "city": "Barretos",
      "latitude": -20.5569,
      "longitude": -48.5678,
      "country_code": "BR"
    },
    {
      "city": "Machiques",
      "latitude": 10.0667,
      "longitude": -72.5667,
      "country_code": "VE"
    },
    {
      "city": "Ciudad Hidalgo",
      "latitude": 19.6923,
      "longitude": -100.5574,
      "country_code": "MX"
    },
    {
      "city": "Jalapa",
      "latitude": 14.6379,
      "longitude": -89.9904,
      "country_code": "GT"
    },
    {
      "city": "Yonashiro-teruma",
      "latitude": 26.3792,
      "longitude": 127.8575,
      "country_code": "JP"
    },
    {
      "city": "Behbahān",
      "latitude": 30.5958,
      "longitude": 50.2417,
      "country_code": "IR"
    },
    {
      "city": "Elbląg",
      "latitude": 54.1667,
      "longitude": 19.4,
      "country_code": "PL"
    },
    {
      "city": "Baidyabāti",
      "latitude": 22.79,
      "longitude": 88.32,
      "country_code": "IN"
    },
    {
      "city": "Pearland",
      "latitude": 29.5585,
      "longitude": -95.3215,
      "country_code": "US"
    },
    {
      "city": "Mufulira",
      "latitude": -12.5546,
      "longitude": 28.2604,
      "country_code": "ZM"
    },
    {
      "city": "Maina",
      "latitude": 13.4692,
      "longitude": 144.7332,
      "country_code": "GU"
    },
    {
      "city": "Kashiwara",
      "latitude": 34.5094,
      "longitude": 135.7925,
      "country_code": "JP"
    },
    {
      "city": "Kotamobagu",
      "latitude": 0.7333,
      "longitude": 124.3167,
      "country_code": "ID"
    },
    {
      "city": "Dharmavaram",
      "latitude": 14.4142,
      "longitude": 77.715,
      "country_code": "IN"
    },
    {
      "city": "Edéa",
      "latitude": 3.8,
      "longitude": 10.1333,
      "country_code": "CM"
    },
    {
      "city": "Setúbal",
      "latitude": 38.5243,
      "longitude": -8.8926,
      "country_code": "PT"
    },
    {
      "city": "Montreuil",
      "latitude": 48.8611,
      "longitude": 2.4436,
      "country_code": "FR"
    },
    {
      "city": "Ciudad Ojeda",
      "latitude": 10.2,
      "longitude": -71.3,
      "country_code": "VE"
    },
    {
      "city": "Pedro Juan Caballero",
      "latitude": -22.5667,
      "longitude": -55.7167,
      "country_code": "PY"
    },
    {
      "city": "Fier",
      "latitude": 40.7167,
      "longitude": 19.55,
      "country_code": "AL"
    },
    {
      "city": "Orekhovo-Zuyevo",
      "latitude": 55.8,
      "longitude": 38.9667,
      "country_code": "RU"
    },
    {
      "city": "Kamalia",
      "latitude": 30.7258,
      "longitude": 72.6447,
      "country_code": "PK"
    },
    {
      "city": "Gyumri",
      "latitude": 40.7833,
      "longitude": 43.8333,
      "country_code": "AM"
    },
    {
      "city": "Hòa Bình",
      "latitude": 20.8172,
      "longitude": 105.3375,
      "country_code": "VN"
    },
    {
      "city": "Perpignan",
      "latitude": 42.6986,
      "longitude": 2.8956,
      "country_code": "FR"
    },
    {
      "city": "Larache",
      "latitude": 35.2004,
      "longitude": -6.16,
      "country_code": "MA"
    },
    {
      "city": "Siracusa",
      "latitude": 37.0692,
      "longitude": 15.2875,
      "country_code": "IT"
    },
    {
      "city": "Dorūd",
      "latitude": 33.4933,
      "longitude": 49.075,
      "country_code": "IR"
    },
    {
      "city": "Puerto Barrios",
      "latitude": 15.73,
      "longitude": -88.6,
      "country_code": "GT"
    },
    {
      "city": "Ribeirão Pires",
      "latitude": -23.7108,
      "longitude": -46.4128,
      "country_code": "BR"
    },
    {
      "city": "Samandağ",
      "latitude": 36.085,
      "longitude": 35.9806,
      "country_code": "TR"
    },
    {
      "city": "Upington",
      "latitude": -28.4572,
      "longitude": 21.2425,
      "country_code": "ZA"
    },
    {
      "city": "Walthamstow",
      "latitude": 51.59,
      "longitude": 0,
      "country_code": "GB"
    },
    {
      "city": "Berkeley",
      "latitude": 37.8723,
      "longitude": -122.276,
      "country_code": "US"
    },
    {
      "city": "Płock",
      "latitude": 52.55,
      "longitude": 19.7,
      "country_code": "PL"
    },
    {
      "city": "Richardson",
      "latitude": 32.9717,
      "longitude": -96.7093,
      "country_code": "US"
    },
    {
      "city": "Doğubayazıt",
      "latitude": 39.55,
      "longitude": 44.0833,
      "country_code": "TR"
    },
    {
      "city": "Redding",
      "latitude": 40.5698,
      "longitude": -122.365,
      "country_code": "US"
    },
    {
      "city": "Arvada",
      "latitude": 39.8321,
      "longitude": -105.1511,
      "country_code": "US"
    },
    {
      "city": "Valinhos",
      "latitude": -22.9708,
      "longitude": -46.9958,
      "country_code": "BR"
    },
    {
      "city": "St. George",
      "latitude": 37.077,
      "longitude": -113.577,
      "country_code": "US"
    },
    {
      "city": "Kot Addu",
      "latitude": 30.47,
      "longitude": 70.9644,
      "country_code": "PK"
    },
    {
      "city": "Kallithéa",
      "latitude": 37.95,
      "longitude": 23.7,
      "country_code": "GR"
    },
    {
      "city": "Göttingen",
      "latitude": 51.5339,
      "longitude": 9.9356,
      "country_code": "DE"
    },
    {
      "city": "Pakxé",
      "latitude": 15.1167,
      "longitude": 105.7833,
      "country_code": "LA"
    },
    {
      "city": "Billings",
      "latitude": 45.7891,
      "longitude": -108.5524,
      "country_code": "US"
    },
    {
      "city": "Carcar",
      "latitude": 10.1167,
      "longitude": 123.6333,
      "country_code": "PH"
    },
    {
      "city": "Handa",
      "latitude": 34.8992,
      "longitude": 136.9267,
      "country_code": "JP"
    },
    {
      "city": "Gao",
      "latitude": 16.2666,
      "longitude": -0.05,
      "country_code": "ML"
    },
    {
      "city": "Guelmim",
      "latitude": 28.9833,
      "longitude": -10.0667,
      "country_code": "MA"
    },
    {
      "city": "Puerto Plata",
      "latitude": 19.7902,
      "longitude": -70.6902,
      "country_code": "DO"
    },
    {
      "city": "Darjeeling",
      "latitude": 27.0417,
      "longitude": 88.2631,
      "country_code": "IN"
    },
    {
      "city": "Yuba City",
      "latitude": 39.1357,
      "longitude": -121.6381,
      "country_code": "US"
    },
    {
      "city": "Moḩammad Shahr",
      "latitude": 35.7631,
      "longitude": 50.9172,
      "country_code": "IR"
    },
    {
      "city": "Sertãozinho",
      "latitude": -21.1378,
      "longitude": -47.99,
      "country_code": "BR"
    },
    {
      "city": "Fujimino",
      "latitude": 35.8794,
      "longitude": 139.5197,
      "country_code": "JP"
    },
    {
      "city": "Poá",
      "latitude": -23.5286,
      "longitude": -46.345,
      "country_code": "BR"
    },
    {
      "city": "Ebetsu",
      "latitude": 43.1039,
      "longitude": 141.5361,
      "country_code": "JP"
    },
    {
      "city": "Saint-Denis",
      "latitude": 48.9356,
      "longitude": 2.3539,
      "country_code": "FR"
    },
    {
      "city": "San Carlos",
      "latitude": 9.65,
      "longitude": -68.5833,
      "country_code": "VE"
    },
    {
      "city": "Ciudad Choluteca",
      "latitude": 13.3167,
      "longitude": -87.2167,
      "country_code": "HN"
    },
    {
      "city": "Várzea Paulista",
      "latitude": -23.2108,
      "longitude": -46.8278,
      "country_code": "BR"
    },
    {
      "city": "Rochester",
      "latitude": 44.0151,
      "longitude": -92.4778,
      "country_code": "US"
    },
    {
      "city": "Kaspiysk",
      "latitude": 42.8833,
      "longitude": 47.6333,
      "country_code": "RU"
    },
    {
      "city": "Zahlé",
      "latitude": 33.8439,
      "longitude": 35.9072,
      "country_code": "LB"
    },
    {
      "city": "East Los Angeles",
      "latitude": 34.0326,
      "longitude": -118.1691,
      "country_code": "US"
    },
    {
      "city": "Gudivāda",
      "latitude": 16.43,
      "longitude": 80.99,
      "country_code": "IN"
    },
    {
      "city": "Naz̧arābād",
      "latitude": 35.9522,
      "longitude": 50.6075,
      "country_code": "IR"
    },
    {
      "city": "Leominster",
      "latitude": 42.5209,
      "longitude": -71.7717,
      "country_code": "US"
    },
    {
      "city": "Ajax",
      "latitude": 43.8583,
      "longitude": -79.0364,
      "country_code": "CA"
    },
    {
      "city": "Kingsport",
      "latitude": 36.5224,
      "longitude": -82.5453,
      "country_code": "US"
    },
    {
      "city": "Butwāl",
      "latitude": 27.7,
      "longitude": 83.45,
      "country_code": "NP"
    },
    {
      "city": "Nouadhibou",
      "latitude": 20.95,
      "longitude": -17.0333,
      "country_code": "MR"
    },
    {
      "city": "Duluth",
      "latitude": 46.7756,
      "longitude": -92.1392,
      "country_code": "US"
    },
    {
      "city": "Nobeoka",
      "latitude": 32.5822,
      "longitude": 131.665,
      "country_code": "JP"
    },
    {
      "city": "Beppu",
      "latitude": 33.2847,
      "longitude": 131.4911,
      "country_code": "JP"
    },
    {
      "city": "Nazran",
      "latitude": 43.2167,
      "longitude": 44.7667,
      "country_code": "RU"
    },
    {
      "city": "Sopur",
      "latitude": 34.3,
      "longitude": 74.47,
      "country_code": "IN"
    },
    {
      "city": "Iguala de la Independencia",
      "latitude": 18.35,
      "longitude": -99.5333,
      "country_code": "MX"
    },
    {
      "city": "Guaratinguetá",
      "latitude": -22.8167,
      "longitude": -45.2278,
      "country_code": "BR"
    },
    {
      "city": "Lehigh Acres",
      "latitude": 26.612,
      "longitude": -81.6388,
      "country_code": "US"
    },
    {
      "city": "Huaraz",
      "latitude": -9.5333,
      "longitude": -77.5333,
      "country_code": "PE"
    },
    {
      "city": "Kōnosu",
      "latitude": 36.0658,
      "longitude": 139.5222,
      "country_code": "JP"
    },
    {
      "city": "Rock Hill",
      "latitude": 34.9416,
      "longitude": -81.0244,
      "country_code": "US"
    },
    {
      "city": "Ikoma",
      "latitude": 34.6919,
      "longitude": 135.7006,
      "country_code": "JP"
    },
    {
      "city": "Gilroy",
      "latitude": 37.0047,
      "longitude": -121.5855,
      "country_code": "US"
    },
    {
      "city": "Cheltenham",
      "latitude": 51.9,
      "longitude": -2.0667,
      "country_code": "GB"
    },
    {
      "city": "Cambridge",
      "latitude": 42.3759,
      "longitude": -71.1185,
      "country_code": "US"
    },
    {
      "city": "Nevinnomyssk",
      "latitude": 44.6333,
      "longitude": 41.9333,
      "country_code": "RU"
    },
    {
      "city": "Bruges",
      "latitude": 51.2089,
      "longitude": 3.2242,
      "country_code": "BE"
    },
    {
      "city": "Lahti",
      "latitude": 60.9833,
      "longitude": 25.6556,
      "country_code": "FI"
    },
    {
      "city": "Reutov",
      "latitude": 55.7667,
      "longitude": 37.8667,
      "country_code": "RU"
    },
    {
      "city": "Bandundu",
      "latitude": -3.31,
      "longitude": 17.38,
      "country_code": "CD"
    },
    {
      "city": "Charallave",
      "latitude": 10.2431,
      "longitude": -66.8622,
      "country_code": "VE"
    },
    {
      "city": "Nowshera",
      "latitude": 34.0153,
      "longitude": 71.9747,
      "country_code": "PK"
    },
    {
      "city": "Dharān",
      "latitude": 26.8167,
      "longitude": 87.2667,
      "country_code": "NP"
    },
    {
      "city": "Anuradhapura",
      "latitude": 8.335,
      "longitude": 80.4108,
      "country_code": "LK"
    },
    {
      "city": "Birigui",
      "latitude": -21.2889,
      "longitude": -50.34,
      "country_code": "BR"
    },
    {
      "city": "Bottrop",
      "latitude": 51.5232,
      "longitude": 6.9253,
      "country_code": "DE"
    },
    {
      "city": "Santa Cruz do Sul",
      "latitude": -29.7178,
      "longitude": -52.4258,
      "country_code": "BR"
    },
    {
      "city": "Sugar Land",
      "latitude": 29.5935,
      "longitude": -95.6357,
      "country_code": "US"
    },
    {
      "city": "Akishima",
      "latitude": 35.7056,
      "longitude": 139.3536,
      "country_code": "JP"
    },
    {
      "city": "Karatepe",
      "latitude": 40.6883,
      "longitude": 30.0144,
      "country_code": "TR"
    },
    {
      "city": "Forlì",
      "latitude": 44.2225,
      "longitude": 12.0408,
      "country_code": "IT"
    },
    {
      "city": "Cuautitlán",
      "latitude": 19.6833,
      "longitude": -99.1833,
      "country_code": "MX"
    },
    {
      "city": "Tecomán",
      "latitude": 18.9089,
      "longitude": -103.8747,
      "country_code": "MX"
    },
    {
      "city": "Giyon",
      "latitude": 8.5304,
      "longitude": 37.97,
      "country_code": "ET"
    },
    {
      "city": "Texas City",
      "latitude": 29.4128,
      "longitude": -94.9658,
      "country_code": "US"
    },
    {
      "city": "Bama",
      "latitude": 11.5204,
      "longitude": 13.69,
      "country_code": "NG"
    },
    {
      "city": "Bayawan",
      "latitude": 9.3667,
      "longitude": 122.8,
      "country_code": "PH"
    },
    {
      "city": "Iowa City",
      "latitude": 41.6559,
      "longitude": -91.5303,
      "country_code": "US"
    },
    {
      "city": "Saginaw",
      "latitude": 43.4199,
      "longitude": -83.9501,
      "country_code": "US"
    },
    {
      "city": "Trento",
      "latitude": 46.0667,
      "longitude": 11.1167,
      "country_code": "IT"
    },
    {
      "city": "Kabwe",
      "latitude": -14.4333,
      "longitude": 28.45,
      "country_code": "ZM"
    },
    {
      "city": "Jalingo",
      "latitude": 8.9004,
      "longitude": 11.36,
      "country_code": "NG"
    },
    {
      "city": "Luanshya",
      "latitude": -13.1333,
      "longitude": 28.4,
      "country_code": "ZM"
    },
    {
      "city": "Agadez",
      "latitude": 16.9959,
      "longitude": 7.9828,
      "country_code": "NE"
    },
    {
      "city": "Uzhhorod",
      "latitude": 48.6239,
      "longitude": 22.295,
      "country_code": "UA"
    },
    {
      "city": "Besançon",
      "latitude": 47.24,
      "longitude": 6.02,
      "country_code": "FR"
    },
    {
      "city": "Adilābād",
      "latitude": 19.6667,
      "longitude": 78.5333,
      "country_code": "IN"
    },
    {
      "city": "Obninsk",
      "latitude": 55.1,
      "longitude": 36.6167,
      "country_code": "RU"
    },
    {
      "city": "Chico",
      "latitude": 39.7575,
      "longitude": -121.8152,
      "country_code": "US"
    },
    {
      "city": "San Martín",
      "latitude": -33.0806,
      "longitude": -68.4706,
      "country_code": "AR"
    },
    {
      "city": "Kapaklı",
      "latitude": 41.3333,
      "longitude": 27.9667,
      "country_code": "TR"
    },
    {
      "city": "Basingstoke",
      "latitude": 51.2667,
      "longitude": -1.0876,
      "country_code": "GB"
    },
    {
      "city": "Wałbrzych",
      "latitude": 50.7667,
      "longitude": 16.2833,
      "country_code": "PL"
    },
    {
      "city": "Maidstone",
      "latitude": 51.272,
      "longitude": 0.529,
      "country_code": "GB"
    },
    {
      "city": "Xai-Xai",
      "latitude": -25.05,
      "longitude": 33.65,
      "country_code": "MZ"
    },
    {
      "city": "Linköping",
      "latitude": 58.4094,
      "longitude": 15.6257,
      "country_code": "SE"
    },
    {
      "city": "Reutlingen",
      "latitude": 48.4833,
      "longitude": 9.2167,
      "country_code": "DE"
    },
    {
      "city": "Langley",
      "latitude": 49.1044,
      "longitude": -122.5827,
      "country_code": "CA"
    },
    {
      "city": "Dover",
      "latitude": 39.161,
      "longitude": -75.5203,
      "country_code": "US"
    },
    {
      "city": "Temixco",
      "latitude": 18.85,
      "longitude": -99.2333,
      "country_code": "MX"
    },
    {
      "city": "Belfort",
      "latitude": 47.64,
      "longitude": 6.85,
      "country_code": "FR"
    },
    {
      "city": "Kindia",
      "latitude": 10.06,
      "longitude": -12.87,
      "country_code": "GN"
    },
    {
      "city": "Narasaraopet",
      "latitude": 16.236,
      "longitude": 80.054,
      "country_code": "IN"
    },
    {
      "city": "Nyíregyháza",
      "latitude": 47.95,
      "longitude": 21.7167,
      "country_code": "HU"
    },
    {
      "city": "Kyzyl",
      "latitude": 51.7167,
      "longitude": 94.45,
      "country_code": "RU"
    },
    {
      "city": "Conselheiro Lafaiete",
      "latitude": -20.67,
      "longitude": -43.79,
      "country_code": "BR"
    },
    {
      "city": "Machakos",
      "latitude": -1.5167,
      "longitude": 37.2667,
      "country_code": "KE"
    },
    {
      "city": "Nkongsamba",
      "latitude": 4.95,
      "longitude": 9.9167,
      "country_code": "CM"
    },
    {
      "city": "Smithtown",
      "latitude": 40.8662,
      "longitude": -73.2164,
      "country_code": "US"
    },
    {
      "city": "Norman",
      "latitude": 35.2335,
      "longitude": -97.3471,
      "country_code": "US"
    },
    {
      "city": "Mendoza",
      "latitude": -32.8833,
      "longitude": -68.8333,
      "country_code": "AR"
    },
    {
      "city": "Clearwater",
      "latitude": 27.9789,
      "longitude": -82.7622,
      "country_code": "US"
    },
    {
      "city": "Tandil",
      "latitude": -37.3167,
      "longitude": -59.1333,
      "country_code": "AR"
    },
    {
      "city": "Manp’o",
      "latitude": 41.157,
      "longitude": 126.29,
      "country_code": "KP"
    },
    {
      "city": "Kōenchō",
      "latitude": 43.8081,
      "longitude": 143.8942,
      "country_code": "JP"
    },
    {
      "city": "Buzău",
      "latitude": 45.1517,
      "longitude": 26.8167,
      "country_code": "RO"
    },
    {
      "city": "Araguari",
      "latitude": -18.6489,
      "longitude": -48.1869,
      "country_code": "BR"
    },
    {
      "city": "Tatuí",
      "latitude": -23.3556,
      "longitude": -47.8569,
      "country_code": "BR"
    },
    {
      "city": "Niihama",
      "latitude": 33.9603,
      "longitude": 133.2834,
      "country_code": "JP"
    },
    {
      "city": "Naga",
      "latitude": 10.2167,
      "longitude": 123.75,
      "country_code": "PH"
    },
    {
      "city": "Dimitrovgrad",
      "latitude": 54.2333,
      "longitude": 49.5833,
      "country_code": "RU"
    },
    {
      "city": "Port-Gentil",
      "latitude": -0.7167,
      "longitude": 8.7833,
      "country_code": "GA"
    },
    {
      "city": "Sassari",
      "latitude": 40.7267,
      "longitude": 8.5592,
      "country_code": "IT"
    },
    {
      "city": "Coeur d'Alene",
      "latitude": 47.7041,
      "longitude": -116.7935,
      "country_code": "US"
    },
    {
      "city": "Ponce",
      "latitude": 18.012,
      "longitude": -66.6198,
      "country_code": "PR"
    },
    {
      "city": "Chittaurgarh",
      "latitude": 24.8894,
      "longitude": 74.6239,
      "country_code": "IN"
    },
    {
      "city": "Seaside",
      "latitude": 36.6224,
      "longitude": -121.8191,
      "country_code": "US"
    },
    {
      "city": "Independence",
      "latitude": 39.0871,
      "longitude": -94.3501,
      "country_code": "US"
    },
    {
      "city": "Argenteuil",
      "latitude": 48.95,
      "longitude": 2.25,
      "country_code": "FR"
    },
    {
      "city": "Boké",
      "latitude": 10.94,
      "longitude": -14.3,
      "country_code": "GN"
    },
    {
      "city": "West Jordan",
      "latitude": 40.6024,
      "longitude": -112.0008,
      "country_code": "US"
    },
    {
      "city": "Abilene",
      "latitude": 32.4543,
      "longitude": -99.7384,
      "country_code": "US"
    },
    {
      "city": "Phatthaya",
      "latitude": 12.9496,
      "longitude": 100.893,
      "country_code": "TH"
    },
    {
      "city": "Khon Kaen",
      "latitude": 16.4297,
      "longitude": 102.8297,
      "country_code": "TH"
    },
    {
      "city": "Ramenskoye",
      "latitude": 55.5669,
      "longitude": 38.2303,
      "country_code": "RU"
    },
    {
      "city": "Nasushiobara",
      "latitude": 36.9617,
      "longitude": 140.0461,
      "country_code": "JP"
    },
    {
      "city": "Kilis",
      "latitude": 36.7167,
      "longitude": 37.1167,
      "country_code": "TR"
    },
    {
      "city": "Shibuya",
      "latitude": 35.6536,
      "longitude": 139.7092,
      "country_code": "JP"
    },
    {
      "city": "Nabeul",
      "latitude": 36.4603,
      "longitude": 10.73,
      "country_code": "TN"
    },
    {
      "city": "Parral",
      "latitude": 26.9333,
      "longitude": -105.6667,
      "country_code": "MX"
    },
    {
      "city": "Swabi",
      "latitude": 34.1167,
      "longitude": 72.4667,
      "country_code": "PK"
    },
    {
      "city": "Sano",
      "latitude": 36.3144,
      "longitude": 139.5783,
      "country_code": "JP"
    },
    {
      "city": "Huejutla de Reyes",
      "latitude": 21.1333,
      "longitude": -98.4167,
      "country_code": "MX"
    },
    {
      "city": "Sabhā",
      "latitude": 27.0333,
      "longitude": 14.4333,
      "country_code": "LY"
    },
    {
      "city": "Tahoua",
      "latitude": 14.9,
      "longitude": 5.2599,
      "country_code": "NE"
    },
    {
      "city": "Chelmsford",
      "latitude": 51.7361,
      "longitude": 0.4798,
      "country_code": "GB"
    },
    {
      "city": "Doncaster",
      "latitude": 53.515,
      "longitude": -1.133,
      "country_code": "GB"
    },
    {
      "city": "Valle de La Pascua",
      "latitude": 9.2033,
      "longitude": -66.0103,
      "country_code": "VE"
    },
    {
      "city": "Bloomington",
      "latitude": 39.1637,
      "longitude": -86.5257,
      "country_code": "US"
    },
    {
      "city": "Toliara",
      "latitude": -23.35,
      "longitude": 43.6667,
      "country_code": "MG"
    },
    {
      "city": "Garanhuns",
      "latitude": -8.89,
      "longitude": -36.5,
      "country_code": "BR"
    },
    {
      "city": "Berdyans’k",
      "latitude": 46.7598,
      "longitude": 36.7845,
      "country_code": "UA"
    },
    {
      "city": "El Monte",
      "latitude": 34.0739,
      "longitude": -118.0291,
      "country_code": "US"
    },
    {
      "city": "Otaru",
      "latitude": 43.1833,
      "longitude": 141,
      "country_code": "JP"
    },
    {
      "city": "Carlsbad",
      "latitude": 33.1247,
      "longitude": -117.2837,
      "country_code": "US"
    },
    {
      "city": "North Charleston",
      "latitude": 32.9066,
      "longitude": -80.0722,
      "country_code": "US"
    },
    {
      "city": "Bānsbāria",
      "latitude": 22.97,
      "longitude": 88.4,
      "country_code": "IN"
    },
    {
      "city": "Puerto Madryn",
      "latitude": -42.773,
      "longitude": -65.0366,
      "country_code": "AR"
    },
    {
      "city": "Helsingborg",
      "latitude": 56.0424,
      "longitude": 12.721,
      "country_code": "SE"
    },
    {
      "city": "Nagahama",
      "latitude": 35.3833,
      "longitude": 136.2833,
      "country_code": "JP"
    },
    {
      "city": "Hatsukaichi",
      "latitude": 34.3486,
      "longitude": 132.3317,
      "country_code": "JP"
    },
    {
      "city": "Sloviansk",
      "latitude": 48.87,
      "longitude": 37.625,
      "country_code": "UA"
    },
    {
      "city": "Koblenz",
      "latitude": 50.3597,
      "longitude": 7.5978,
      "country_code": "DE"
    },
    {
      "city": "Oktyabr’skiy",
      "latitude": 54.4833,
      "longitude": 53.4833,
      "country_code": "RU"
    },
    {
      "city": "Maribor",
      "latitude": 46.55,
      "longitude": 15.6333,
      "country_code": "SI"
    },
    {
      "city": "St. Cloud",
      "latitude": 45.5339,
      "longitude": -94.1718,
      "country_code": "US"
    },
    {
      "city": "Salto",
      "latitude": -23.2008,
      "longitude": -47.2869,
      "country_code": "BR"
    },
    {
      "city": "Zhijiang",
      "latitude": 27.4409,
      "longitude": 109.678,
      "country_code": "CN"
    },
    {
      "city": "Chorzów",
      "latitude": 50.3,
      "longitude": 18.95,
      "country_code": "PL"
    },
    {
      "city": "Hōfu",
      "latitude": 34.05,
      "longitude": 131.5667,
      "country_code": "JP"
    },
    {
      "city": "Las Delicias",
      "latitude": 28.2,
      "longitude": -105.5,
      "country_code": "MX"
    },
    {
      "city": "Lilan",
      "latitude": 23.8163,
      "longitude": 108.8847,
      "country_code": "CN"
    },
    {
      "city": "Bijeljina",
      "latitude": 44.75,
      "longitude": 19.2167,
      "country_code": "BA"
    },
    {
      "city": "Temecula",
      "latitude": 33.4928,
      "longitude": -117.1315,
      "country_code": "US"
    },
    {
      "city": "Bremerhaven",
      "latitude": 53.55,
      "longitude": 8.5833,
      "country_code": "DE"
    },
    {
      "city": "Kamagaya",
      "latitude": 35.7769,
      "longitude": 140.0008,
      "country_code": "JP"
    },
    {
      "city": "Bet Shemesh",
      "latitude": 31.7514,
      "longitude": 34.9886,
      "country_code": "IL"
    },
    {
      "city": "Ciudad de la Costa",
      "latitude": -34.8167,
      "longitude": -55.95,
      "country_code": "UY"
    },
    {
      "city": "Clovis",
      "latitude": 36.8278,
      "longitude": -119.6831,
      "country_code": "US"
    },
    {
      "city": "Bernal",
      "latitude": -34.7,
      "longitude": -58.2833,
      "country_code": "AR"
    },
    {
      "city": "Vālpārai",
      "latitude": 10.3204,
      "longitude": 76.97,
      "country_code": "IN"
    },
    {
      "city": "Iringa",
      "latitude": -7.77,
      "longitude": 35.69,
      "country_code": "TZ"
    },
    {
      "city": "Kandy",
      "latitude": 7.297,
      "longitude": 80.6385,
      "country_code": "LK"
    },
    {
      "city": "Hikone",
      "latitude": 35.2744,
      "longitude": 136.2597,
      "country_code": "JP"
    },
    {
      "city": "Cuito",
      "latitude": -12.38,
      "longitude": 16.94,
      "country_code": "AO"
    },
    {
      "city": "Ōshū",
      "latitude": 39.1444,
      "longitude": 141.1389,
      "country_code": "JP"
    },
    {
      "city": "Nikopol’",
      "latitude": 47.5772,
      "longitude": 34.3575,
      "country_code": "UA"
    },
    {
      "city": "Laghouat",
      "latitude": 33.81,
      "longitude": 2.88,
      "country_code": "DZ"
    },
    {
      "city": "Meridian",
      "latitude": 43.6112,
      "longitude": -116.3968,
      "country_code": "US"
    },
    {
      "city": "Saanich",
      "latitude": 48.484,
      "longitude": -123.381,
      "country_code": "CA"
    },
    {
      "city": "Āsela",
      "latitude": 7.95,
      "longitude": 39.1167,
      "country_code": "ET"
    },
    {
      "city": "Kankan",
      "latitude": 10.39,
      "longitude": -9.31,
      "country_code": "GN"
    },
    {
      "city": "Kuşadası",
      "latitude": 37.8586,
      "longitude": 27.2594,
      "country_code": "TR"
    },
    {
      "city": "Joünié",
      "latitude": 33.9697,
      "longitude": 35.6156,
      "country_code": "LB"
    },
    {
      "city": "Colchester",
      "latitude": 51.8917,
      "longitude": 0.903,
      "country_code": "GB"
    },
    {
      "city": "Recklinghausen",
      "latitude": 51.6167,
      "longitude": 7.2,
      "country_code": "DE"
    },
    {
      "city": "Pul-e Khumrī",
      "latitude": 35.95,
      "longitude": 68.7,
      "country_code": "AF"
    },
    {
      "city": "Tawau",
      "latitude": 4.2981,
      "longitude": 117.8831,
      "country_code": "MY"
    },
    {
      "city": "San Francisco del Rincón",
      "latitude": 21.0228,
      "longitude": -101.86,
      "country_code": "MX"
    },
    {
      "city": "Vicenza",
      "latitude": 45.55,
      "longitude": 11.55,
      "country_code": "IT"
    },
    {
      "city": "Paarl",
      "latitude": -33.7242,
      "longitude": 18.9558,
      "country_code": "ZA"
    },
    {
      "city": "Īrānshahr",
      "latitude": 27.2025,
      "longitude": 60.6847,
      "country_code": "IR"
    },
    {
      "city": "Sørum",
      "latitude": 59.9135,
      "longitude": 11.3472,
      "country_code": "NO"
    },
    {
      "city": "Habikino",
      "latitude": 34.5578,
      "longitude": 135.6061,
      "country_code": "JP"
    },
    {
      "city": "Itatiba",
      "latitude": -23.0058,
      "longitude": -46.8389,
      "country_code": "BR"
    },
    {
      "city": "Ubá",
      "latitude": -21.12,
      "longitude": -42.9428,
      "country_code": "BR"
    },
    {
      "city": "Caraguatatuba",
      "latitude": -23.62,
      "longitude": -45.4128,
      "country_code": "BR"
    },
    {
      "city": "Bukittinggi",
      "latitude": -0.3097,
      "longitude": 100.3753,
      "country_code": "ID"
    },
    {
      "city": "Higashiōmi",
      "latitude": 35.1128,
      "longitude": 136.2078,
      "country_code": "JP"
    },
    {
      "city": "Wythenshawe",
      "latitude": 53.392,
      "longitude": -2.264,
      "country_code": "GB"
    },
    {
      "city": "Erlangen",
      "latitude": 49.5964,
      "longitude": 11.0044,
      "country_code": "DE"
    },
    {
      "city": "Sa-ch’on",
      "latitude": 35.2347,
      "longitude": 128.3575,
      "country_code": "KR"
    },
    {
      "city": "Kipushi",
      "latitude": -11.76,
      "longitude": 27.25,
      "country_code": "CD"
    },
    {
      "city": "Linhares",
      "latitude": -19.39,
      "longitude": -40.05,
      "country_code": "BR"
    },
    {
      "city": "Catanduva",
      "latitude": -21.14,
      "longitude": -48.98,
      "country_code": "BR"
    },
    {
      "city": "Akçakale",
      "latitude": 36.7108,
      "longitude": 38.9478,
      "country_code": "TR"
    },
    {
      "city": "Bergisch Gladbach",
      "latitude": 50.9917,
      "longitude": 7.1367,
      "country_code": "DE"
    },
    {
      "city": "City of Isabela",
      "latitude": 6.7,
      "longitude": 121.9667,
      "country_code": "PH"
    },
    {
      "city": "Brandon",
      "latitude": 27.9367,
      "longitude": -82.3,
      "country_code": "US"
    },
    {
      "city": "Jaén",
      "latitude": 37.7697,
      "longitude": -3.7889,
      "country_code": "ES"
    },
    {
      "city": "Novyy Urengoy",
      "latitude": 66.0847,
      "longitude": 76.6789,
      "country_code": "RU"
    },
    {
      "city": "Montero",
      "latitude": -17.3333,
      "longitude": -63.3833,
      "country_code": "BO"
    },
    {
      "city": "Burdur",
      "latitude": 37.7167,
      "longitude": 30.2833,
      "country_code": "TR"
    },
    {
      "city": "Westminster",
      "latitude": 39.8837,
      "longitude": -105.0624,
      "country_code": "US"
    },
    {
      "city": "Castelar",
      "latitude": -34.65,
      "longitude": -58.65,
      "country_code": "AR"
    },
    {
      "city": "Sokodé",
      "latitude": 8.9833,
      "longitude": 1.1333,
      "country_code": "TG"
    },
    {
      "city": "Costa Mesa",
      "latitude": 33.6667,
      "longitude": -117.9135,
      "country_code": "US"
    },
    {
      "city": "Rotherham",
      "latitude": 53.43,
      "longitude": -1.357,
      "country_code": "GB"
    },
    {
      "city": "Hualien",
      "latitude": 23.9769,
      "longitude": 121.6044,
      "country_code": "TW"
    },
    {
      "city": "San Carlos de Bariloche",
      "latitude": -41.15,
      "longitude": -71.3,
      "country_code": "AR"
    },
    {
      "city": "Tondabayashichō",
      "latitude": 34.4992,
      "longitude": 135.5972,
      "country_code": "JP"
    },
    {
      "city": "Monroe",
      "latitude": 32.5183,
      "longitude": -92.0774,
      "country_code": "US"
    },
    {
      "city": "Zwolle",
      "latitude": 52.524,
      "longitude": 6.097,
      "country_code": "NL"
    },
    {
      "city": "Utica",
      "latitude": 43.0961,
      "longitude": -75.226,
      "country_code": "US"
    },
    {
      "city": "Santa Lucía",
      "latitude": 10.2606,
      "longitude": -66.6639,
      "country_code": "VE"
    },
    {
      "city": "Carora",
      "latitude": 10.1755,
      "longitude": -70.0828,
      "country_code": "VE"
    },
    {
      "city": "Khenchela",
      "latitude": 35.4167,
      "longitude": 7.1333,
      "country_code": "DZ"
    },
    {
      "city": "Iriga City",
      "latitude": 13.4167,
      "longitude": 123.4167,
      "country_code": "PH"
    },
    {
      "city": "Champdani",
      "latitude": 22.8,
      "longitude": 88.37,
      "country_code": "IN"
    },
    {
      "city": "Remscheid",
      "latitude": 51.1906,
      "longitude": 7.2247,
      "country_code": "DE"
    },
    {
      "city": "Kamyshin",
      "latitude": 50.0833,
      "longitude": 45.4,
      "country_code": "RU"
    },
    {
      "city": "Osmānābād",
      "latitude": 18.1667,
      "longitude": 76.05,
      "country_code": "IN"
    },
    {
      "city": "Algeciras",
      "latitude": 36.1267,
      "longitude": -5.4665,
      "country_code": "ES"
    },
    {
      "city": "Esteban Echeverría",
      "latitude": -34.8167,
      "longitude": -58.4667,
      "country_code": "AR"
    },
    {
      "city": "Dolgoprudnyy",
      "latitude": 55.9333,
      "longitude": 37.5,
      "country_code": "RU"
    },
    {
      "city": "Shkodër",
      "latitude": 42.0667,
      "longitude": 19.5,
      "country_code": "AL"
    },
    {
      "city": "Jena",
      "latitude": 50.9272,
      "longitude": 11.5864,
      "country_code": "DE"
    },
    {
      "city": "Mopti",
      "latitude": 14.49,
      "longitude": -4.18,
      "country_code": "ML"
    },
    {
      "city": "Kars",
      "latitude": 40.6069,
      "longitude": 43.0931,
      "country_code": "TR"
    },
    {
      "city": "Olmaliq",
      "latitude": 40.85,
      "longitude": 69.6,
      "country_code": "UZ"
    },
    {
      "city": "Cavite City",
      "latitude": 14.4833,
      "longitude": 120.9,
      "country_code": "PH"
    },
    {
      "city": "Kuopio",
      "latitude": 62.8925,
      "longitude": 27.6783,
      "country_code": "FI"
    },
    {
      "city": "Ciudad Mante",
      "latitude": 22.7333,
      "longitude": -98.95,
      "country_code": "MX"
    },
    {
      "city": "Pompano Beach",
      "latitude": 26.2428,
      "longitude": -80.1312,
      "country_code": "US"
    },
    {
      "city": "Tablada",
      "latitude": -34.6833,
      "longitude": -58.5333,
      "country_code": "AR"
    },
    {
      "city": "Laoag",
      "latitude": 18.2,
      "longitude": 120.6,
      "country_code": "PH"
    },
    {
      "city": "Zhukovskiy",
      "latitude": 55.6011,
      "longitude": 38.1161,
      "country_code": "RU"
    },
    {
      "city": "West Palm Beach",
      "latitude": 26.7468,
      "longitude": -80.1316,
      "country_code": "US"
    },
    {
      "city": "Funchal",
      "latitude": 32.65,
      "longitude": -16.9167,
      "country_code": "PT"
    },
    {
      "city": "Ligao",
      "latitude": 13.2167,
      "longitude": 123.5167,
      "country_code": "PH"
    },
    {
      "city": "Kuqa",
      "latitude": 41.7277,
      "longitude": 82.9364,
      "country_code": "CN"
    },
    {
      "city": "Nsukka",
      "latitude": 6.8567,
      "longitude": 7.3958,
      "country_code": "NG"
    },
    {
      "city": "Escuintla",
      "latitude": 15.3194,
      "longitude": -92.6583,
      "country_code": "MX"
    },
    {
      "city": "Kazo",
      "latitude": 36.1314,
      "longitude": 139.6019,
      "country_code": "JP"
    },
    {
      "city": "Hounslow",
      "latitude": 51.4668,
      "longitude": -0.375,
      "country_code": "GB"
    },
    {
      "city": "Terni",
      "latitude": 42.5667,
      "longitude": 12.65,
      "country_code": "IT"
    },
    {
      "city": "Waterloo",
      "latitude": 42.492,
      "longitude": -92.3522,
      "country_code": "US"
    },
    {
      "city": "Trier",
      "latitude": 49.7567,
      "longitude": 6.6414,
      "country_code": "DE"
    },
    {
      "city": "Terrebonne",
      "latitude": 45.7,
      "longitude": -73.6333,
      "country_code": "CA"
    },
    {
      "city": "Namur",
      "latitude": 50.4667,
      "longitude": 4.8667,
      "country_code": "BE"
    },
    {
      "city": "Rochdale",
      "latitude": 53.6136,
      "longitude": -2.161,
      "country_code": "GB"
    },
    {
      "city": "Murom",
      "latitude": 55.5725,
      "longitude": 42.0514,
      "country_code": "RU"
    },
    {
      "city": "Bedford",
      "latitude": 52.135,
      "longitude": -0.47,
      "country_code": "GB"
    },
    {
      "city": "Everett",
      "latitude": 47.9525,
      "longitude": -122.1669,
      "country_code": "US"
    },
    {
      "city": "Manzini",
      "latitude": -26.4833,
      "longitude": 31.3667,
      "country_code": "SZ"
    },
    {
      "city": "El Centro",
      "latitude": 32.7867,
      "longitude": -115.5586,
      "country_code": "US"
    },
    {
      "city": "Villa Mercedes",
      "latitude": -33.6667,
      "longitude": -65.4667,
      "country_code": "AR"
    },
    {
      "city": "Winterthur",
      "latitude": 47.4992,
      "longitude": 8.7267,
      "country_code": "CH"
    },
    {
      "city": "Jawhar",
      "latitude": 2.767,
      "longitude": 45.5166,
      "country_code": "SO"
    },
    {
      "city": "Sandachō",
      "latitude": 34.8894,
      "longitude": 135.2253,
      "country_code": "JP"
    },
    {
      "city": "Tuzla",
      "latitude": 44.5381,
      "longitude": 18.6761,
      "country_code": "BA"
    },
    {
      "city": "Tarnów",
      "latitude": 50.0125,
      "longitude": 20.9883,
      "country_code": "PL"
    },
    {
      "city": "Santa Fe",
      "latitude": 35.6619,
      "longitude": -105.9819,
      "country_code": "US"
    },
    {
      "city": "Khardah",
      "latitude": 22.72,
      "longitude": 88.38,
      "country_code": "IN"
    },
    {
      "city": "Gapan",
      "latitude": 15.3075,
      "longitude": 120.9453,
      "country_code": "PH"
    },
    {
      "city": "Nguru",
      "latitude": 12.8804,
      "longitude": 10.45,
      "country_code": "NG"
    },
    {
      "city": "Downey",
      "latitude": 33.9379,
      "longitude": -118.1312,
      "country_code": "US"
    },
    {
      "city": "Stockport",
      "latitude": 53.4083,
      "longitude": -2.1494,
      "country_code": "GB"
    },
    {
      "city": "Kecskemét",
      "latitude": 46.9074,
      "longitude": 19.6917,
      "country_code": "HU"
    },
    {
      "city": "Lowell",
      "latitude": 42.6389,
      "longitude": -71.3217,
      "country_code": "US"
    },
    {
      "city": "Ahuachapán",
      "latitude": 13.9214,
      "longitude": -89.845,
      "country_code": "SV"
    },
    {
      "city": "Fresnillo",
      "latitude": 23.175,
      "longitude": -102.8675,
      "country_code": "MX"
    },
    {
      "city": "Centennial",
      "latitude": 39.5926,
      "longitude": -104.8674,
      "country_code": "US"
    },
    {
      "city": "Włocławek",
      "latitude": 52.65,
      "longitude": 19.05,
      "country_code": "PL"
    },
    {
      "city": "Fasā",
      "latitude": 28.9381,
      "longitude": 53.6481,
      "country_code": "IR"
    },
    {
      "city": "As Salamīyah",
      "latitude": 35.0111,
      "longitude": 37.0531,
      "country_code": "SY"
    },
    {
      "city": "Yessentuki",
      "latitude": 44.0431,
      "longitude": 42.8644,
      "country_code": "RU"
    },
    {
      "city": "Elgin",
      "latitude": 42.0385,
      "longitude": -88.3229,
      "country_code": "US"
    },
    {
      "city": "Tabuk",
      "latitude": 17.45,
      "longitude": 121.4583,
      "country_code": "PH"
    },
    {
      "city": "Kiffa",
      "latitude": 16.6164,
      "longitude": -11.4044,
      "country_code": "MR"
    },
    {
      "city": "Dali",
      "latitude": 34.7953,
      "longitude": 109.9378,
      "country_code": "CN"
    },
    {
      "city": "Yenangyaung",
      "latitude": 20.4583,
      "longitude": 94.8732,
      "country_code": "MM"
    },
    {
      "city": "Ourinhos",
      "latitude": -22.9789,
      "longitude": -49.8708,
      "country_code": "BR"
    },
    {
      "city": "Quíbor",
      "latitude": 9.9281,
      "longitude": -69.5778,
      "country_code": "VE"
    },
    {
      "city": "Borāzjān",
      "latitude": 29.2667,
      "longitude": 51.2158,
      "country_code": "IR"
    },
    {
      "city": "Richmond",
      "latitude": 37.9477,
      "longitude": -122.339,
      "country_code": "US"
    },
    {
      "city": "Shinyanga",
      "latitude": -3.6619,
      "longitude": 33.4231,
      "country_code": "TZ"
    },
    {
      "city": "Ash Shaykh ‘Uthmān",
      "latitude": 12.8866,
      "longitude": 45.0279,
      "country_code": "YE"
    },
    {
      "city": "Genhe",
      "latitude": 50.7833,
      "longitude": 121.5167,
      "country_code": "CN"
    },
    {
      "city": "Montego Bay",
      "latitude": 18.4667,
      "longitude": -77.9167,
      "country_code": "JM"
    },
    {
      "city": "Jeonghae",
      "latitude": 35.5653,
      "longitude": 126.8561,
      "country_code": "KR"
    },
    {
      "city": "Shirayamamachi",
      "latitude": 36.5144,
      "longitude": 136.5656,
      "country_code": "JP"
    },
    {
      "city": "Bāneh",
      "latitude": 35.9975,
      "longitude": 45.8853,
      "country_code": "IR"
    },
    {
      "city": "Mascara",
      "latitude": 35.4,
      "longitude": 0.1333,
      "country_code": "DZ"
    },
    {
      "city": "Darlington",
      "latitude": 54.527,
      "longitude": -1.5526,
      "country_code": "GB"
    },
    {
      "city": "Broken Arrow",
      "latitude": 36.0365,
      "longitude": -95.7809,
      "country_code": "US"
    },
    {
      "city": "Tinaquillo",
      "latitude": 9.9167,
      "longitude": -68.3,
      "country_code": "VE"
    },
    {
      "city": "Milton",
      "latitude": 43.5083,
      "longitude": -79.8833,
      "country_code": "CA"
    },
    {
      "city": "Yŏju",
      "latitude": 37.2939,
      "longitude": 127.6383,
      "country_code": "KR"
    },
    {
      "city": "Bangaon",
      "latitude": 23.07,
      "longitude": 88.82,
      "country_code": "IN"
    },
    {
      "city": "Miami Gardens",
      "latitude": 25.9433,
      "longitude": -80.2426,
      "country_code": "US"
    },
    {
      "city": "Bagé",
      "latitude": -31.32,
      "longitude": -54.1,
      "country_code": "BR"
    },
    {
      "city": "Pisco",
      "latitude": -13.71,
      "longitude": -76.2032,
      "country_code": "PE"
    },
    {
      "city": "Dera Ismail Khan",
      "latitude": 31.8167,
      "longitude": 70.9167,
      "country_code": "PK"
    },
    {
      "city": "Taitung",
      "latitude": 22.7583,
      "longitude": 121.1444,
      "country_code": "TW"
    },
    {
      "city": "Mineshita",
      "latitude": 35.1186,
      "longitude": 138.9186,
      "country_code": "JP"
    },
    {
      "city": "The Woodlands",
      "latitude": 30.1738,
      "longitude": -95.5134,
      "country_code": "US"
    },
    {
      "city": "Bend",
      "latitude": 44.0562,
      "longitude": -121.3087,
      "country_code": "US"
    },
    {
      "city": "Burlington",
      "latitude": 44.4877,
      "longitude": -73.2314,
      "country_code": "US"
    },
    {
      "city": "Kandi",
      "latitude": 11.1304,
      "longitude": 2.94,
      "country_code": "BJ"
    },
    {
      "city": "Taourirt",
      "latitude": 34.41,
      "longitude": -2.89,
      "country_code": "MA"
    },
    {
      "city": "Apucarana",
      "latitude": -23.55,
      "longitude": -51.47,
      "country_code": "BR"
    },
    {
      "city": "Koszalin",
      "latitude": 54.1903,
      "longitude": 16.1817,
      "country_code": "PL"
    },
    {
      "city": "Baybay",
      "latitude": 10.6833,
      "longitude": 124.8,
      "country_code": "PH"
    },
    {
      "city": "Labé",
      "latitude": 11.3167,
      "longitude": -12.2833,
      "country_code": "GN"
    },
    {
      "city": "Jurupa Valley",
      "latitude": 34.001,
      "longitude": -117.4705,
      "country_code": "US"
    },
    {
      "city": "Gualeguaychú",
      "latitude": -33.0078,
      "longitude": -58.5111,
      "country_code": "AR"
    },
    {
      "city": "Caen",
      "latitude": 49.18,
      "longitude": -0.37,
      "country_code": "FR"
    },
    {
      "city": "Botoşani",
      "latitude": 47.7486,
      "longitude": 26.6694,
      "country_code": "RO"
    },
    {
      "city": "Sandy Springs",
      "latitude": 33.9366,
      "longitude": -84.3703,
      "country_code": "US"
    },
    {
      "city": "Yŏngju",
      "latitude": 36.8217,
      "longitude": 128.6308,
      "country_code": "KR"
    },
    {
      "city": "Gresham",
      "latitude": 45.5023,
      "longitude": -122.4413,
      "country_code": "US"
    },
    {
      "city": "Uitenhage",
      "latitude": -33.75,
      "longitude": 25.4,
      "country_code": "ZA"
    },
    {
      "city": "Bukoba",
      "latitude": -1.3333,
      "longitude": 31.8167,
      "country_code": "TZ"
    },
    {
      "city": "Corumbá",
      "latitude": -19.0089,
      "longitude": -57.6528,
      "country_code": "BR"
    },
    {
      "city": "Maxixe",
      "latitude": -23.8597,
      "longitude": 35.3472,
      "country_code": "MZ"
    },
    {
      "city": "Lewisville",
      "latitude": 33.0452,
      "longitude": -96.9823,
      "country_code": "US"
    },
    {
      "city": "Ipiales",
      "latitude": 0.8289,
      "longitude": -77.6406,
      "country_code": "CO"
    },
    {
      "city": "Hillsboro",
      "latitude": 45.5272,
      "longitude": -122.9361,
      "country_code": "US"
    },
    {
      "city": "Soma",
      "latitude": 39.1833,
      "longitude": 27.6056,
      "country_code": "TR"
    },
    {
      "city": "San Buenaventura",
      "latitude": 34.2741,
      "longitude": -119.2314,
      "country_code": "US"
    },
    {
      "city": "Musoma",
      "latitude": -1.5069,
      "longitude": 33.8042,
      "country_code": "TZ"
    },
    {
      "city": "Novoshakhtinsk",
      "latitude": 47.7667,
      "longitude": 39.9167,
      "country_code": "RU"
    },
    {
      "city": "Crawley",
      "latitude": 51.1092,
      "longitude": -0.1872,
      "country_code": "GB"
    },
    {
      "city": "Ferizaj",
      "latitude": 42.3667,
      "longitude": 21.1667,
      "country_code": "XK"
    },
    {
      "city": "Ikeda",
      "latitude": 34.8167,
      "longitude": 135.4333,
      "country_code": "JP"
    },
    {
      "city": "St. John's",
      "latitude": 47.4817,
      "longitude": -52.7971,
      "country_code": "CA"
    },
    {
      "city": "Jacksonville",
      "latitude": 34.7288,
      "longitude": -77.3941,
      "country_code": "US"
    },
    {
      "city": "Salford",
      "latitude": 53.483,
      "longitude": -2.2931,
      "country_code": "GB"
    },
    {
      "city": "Wembley",
      "latitude": 51.5528,
      "longitude": -0.2979,
      "country_code": "GB"
    },
    {
      "city": "Pottstown",
      "latitude": 40.2507,
      "longitude": -75.6444,
      "country_code": "US"
    },
    {
      "city": "Tajimi",
      "latitude": 35.3328,
      "longitude": 137.1322,
      "country_code": "JP"
    },
    {
      "city": "Moncton",
      "latitude": 46.1328,
      "longitude": -64.7714,
      "country_code": "CA"
    },
    {
      "city": "Tādpatri",
      "latitude": 14.92,
      "longitude": 78.02,
      "country_code": "IN"
    },
    {
      "city": "Huauchinango",
      "latitude": 20.1767,
      "longitude": -98.0528,
      "country_code": "MX"
    },
    {
      "city": "Yāsūj",
      "latitude": 30.6667,
      "longitude": 51.5833,
      "country_code": "IR"
    },
    {
      "city": "Jalpāiguri",
      "latitude": 26.5167,
      "longitude": 88.7333,
      "country_code": "IN"
    },
    {
      "city": "Dagenham",
      "latitude": 51.5397,
      "longitude": 0.1422,
      "country_code": "GB"
    },
    {
      "city": "Barletta",
      "latitude": 41.32,
      "longitude": 16.27,
      "country_code": "IT"
    },
    {
      "city": "Birnin Kebbi",
      "latitude": 12.4504,
      "longitude": 4.1999,
      "country_code": "NG"
    },
    {
      "city": "Šiauliai",
      "latitude": 55.9281,
      "longitude": 23.3167,
      "country_code": "LT"
    },
    {
      "city": "Seversk",
      "latitude": 56.6,
      "longitude": 84.85,
      "country_code": "RU"
    },
    {
      "city": "Teófilo Otoni",
      "latitude": -17.87,
      "longitude": -41.5,
      "country_code": "BR"
    },
    {
      "city": "El Limón",
      "latitude": 10.3059,
      "longitude": -67.6321,
      "country_code": "VE"
    },
    {
      "city": "Inglewood",
      "latitude": 33.9566,
      "longitude": -118.3444,
      "country_code": "US"
    },
    {
      "city": "Orsha",
      "latitude": 54.5092,
      "longitude": 30.4258,
      "country_code": "BY"
    },
    {
      "city": "An Nuhūd",
      "latitude": 12.6904,
      "longitude": 28.42,
      "country_code": "SD"
    },
    {
      "city": "San Rafael",
      "latitude": -34.6175,
      "longitude": -68.3356,
      "country_code": "AR"
    },
    {
      "city": "Tagbilaran City",
      "latitude": 9.65,
      "longitude": 123.85,
      "country_code": "PH"
    },
    {
      "city": "Thunder Bay",
      "latitude": 48.3822,
      "longitude": -89.2461,
      "country_code": "CA"
    },
    {
      "city": "Pavlohrad",
      "latitude": 48.52,
      "longitude": 35.87,
      "country_code": "UA"
    },
    {
      "city": "Spring Hill",
      "latitude": 28.4797,
      "longitude": -82.53,
      "country_code": "US"
    },
    {
      "city": "Yevpatoriya",
      "latitude": 45.2,
      "longitude": 33.3583,
      "country_code": "UA"
    },
    {
      "city": "Douliu",
      "latitude": 23.7075,
      "longitude": 120.5439,
      "country_code": "TW"
    },
    {
      "city": "Juazeiro",
      "latitude": -9.42,
      "longitude": -40.5,
      "country_code": "BR"
    },
    {
      "city": "Chaman",
      "latitude": 30.921,
      "longitude": 66.4597,
      "country_code": "PK"
    },
    {
      "city": "Queenstown",
      "latitude": -31.9,
      "longitude": 26.8833,
      "country_code": "ZA"
    },
    {
      "city": "Umm Qaşr",
      "latitude": 30.0342,
      "longitude": 47.9294,
      "country_code": "IQ"
    },
    {
      "city": "Sliven",
      "latitude": 42.6808,
      "longitude": 26.3164,
      "country_code": "BG"
    },
    {
      "city": "Suriāpet",
      "latitude": 17.15,
      "longitude": 79.6167,
      "country_code": "IN"
    },
    {
      "city": "Kogon Shahri",
      "latitude": 39.7211,
      "longitude": 64.5458,
      "country_code": "UZ"
    },
    {
      "city": "League City",
      "latitude": 29.4873,
      "longitude": -95.1087,
      "country_code": "US"
    },
    {
      "city": "Kefar Sava",
      "latitude": 32.1858,
      "longitude": 34.9077,
      "country_code": "IL"
    },
    {
      "city": "Alchevsk",
      "latitude": 48.4672,
      "longitude": 38.7983,
      "country_code": "UA"
    },
    {
      "city": "Gillingham",
      "latitude": 51.385,
      "longitude": 0.55,
      "country_code": "GB"
    },
    {
      "city": "Eau Claire",
      "latitude": 44.8199,
      "longitude": -91.4949,
      "country_code": "US"
    },
    {
      "city": "Bolzano",
      "latitude": 46.5,
      "longitude": 11.35,
      "country_code": "IT"
    },
    {
      "city": "Charsadda",
      "latitude": 34.1453,
      "longitude": 71.7308,
      "country_code": "PK"
    },
    {
      "city": "Roubaix",
      "latitude": 50.6901,
      "longitude": 3.1817,
      "country_code": "FR"
    },
    {
      "city": "Turlock",
      "latitude": 37.5053,
      "longitude": -120.8588,
      "country_code": "US"
    },
    {
      "city": "Temple",
      "latitude": 31.1076,
      "longitude": -97.3894,
      "country_code": "US"
    },
    {
      "city": "La Piedad",
      "latitude": 20.3333,
      "longitude": -102.0167,
      "country_code": "MX"
    },
    {
      "city": "Himamaylan",
      "latitude": 10.1,
      "longitude": 122.8667,
      "country_code": "PH"
    },
    {
      "city": "Mansfield",
      "latitude": 53.15,
      "longitude": -1.2,
      "country_code": "GB"
    },
    {
      "city": "Mmabatho",
      "latitude": -25.85,
      "longitude": 25.6333,
      "country_code": "ZA"
    },
    {
      "city": "Ilebo",
      "latitude": -4.3167,
      "longitude": 20.6,
      "country_code": "CD"
    },
    {
      "city": "Taungoo",
      "latitude": 18.9483,
      "longitude": 96.4179,
      "country_code": "MM"
    },
    {
      "city": "Dieppe",
      "latitude": 46.0989,
      "longitude": -64.7242,
      "country_code": "CA"
    },
    {
      "city": "Arzamas",
      "latitude": 55.3833,
      "longitude": 43.8,
      "country_code": "RU"
    },
    {
      "city": "Morón",
      "latitude": -34.65,
      "longitude": -58.6167,
      "country_code": "AR"
    },
    {
      "city": "Longjiang",
      "latitude": 47.3404,
      "longitude": 123.18,
      "country_code": "CN"
    },
    {
      "city": "San Felipe",
      "latitude": 21.4833,
      "longitude": -101.2167,
      "country_code": "MX"
    },
    {
      "city": "Songea",
      "latitude": -10.6833,
      "longitude": 35.65,
      "country_code": "TZ"
    },
    {
      "city": "Artëm",
      "latitude": 43.35,
      "longitude": 132.1833,
      "country_code": "RU"
    },
    {
      "city": "Noyabrsk",
      "latitude": 63.2017,
      "longitude": 75.4517,
      "country_code": "RU"
    },
    {
      "city": "Nakhon Si Thammarat",
      "latitude": 8.4333,
      "longitude": 99.9667,
      "country_code": "TH"
    },
    {
      "city": "Petržalka",
      "latitude": 48.1333,
      "longitude": 17.1167,
      "country_code": "SK"
    },
    {
      "city": "Chābahār",
      "latitude": 25.2836,
      "longitude": 60.6236,
      "country_code": "IR"
    },
    {
      "city": "Raba",
      "latitude": -8.4614,
      "longitude": 118.747,
      "country_code": "ID"
    },
    {
      "city": "La Banda",
      "latitude": -27.7333,
      "longitude": -64.25,
      "country_code": "AR"
    },
    {
      "city": "Ourense",
      "latitude": 42.3364,
      "longitude": -7.8633,
      "country_code": "ES"
    },
    {
      "city": "Sioux City",
      "latitude": 42.4959,
      "longitude": -96.3901,
      "country_code": "US"
    },
    {
      "city": "Kemalpaşa",
      "latitude": 38.4261,
      "longitude": 27.4172,
      "country_code": "TR"
    },
    {
      "city": "Salisbury",
      "latitude": 38.3756,
      "longitude": -75.5867,
      "country_code": "US"
    },
    {
      "city": "Vĩnh Long",
      "latitude": 10.255,
      "longitude": 105.9753,
      "country_code": "VN"
    },
    {
      "city": "Ballarat",
      "latitude": -37.55,
      "longitude": 143.85,
      "country_code": "AU"
    },
    {
      "city": "Davie",
      "latitude": 26.0789,
      "longitude": -80.287,
      "country_code": "US"
    },
    {
      "city": "Achinsk",
      "latitude": 56.2817,
      "longitude": 90.5039,
      "country_code": "RU"
    },
    {
      "city": "Daly City",
      "latitude": 37.6862,
      "longitude": -122.4685,
      "country_code": "US"
    },
    {
      "city": "Toride",
      "latitude": 35.9114,
      "longitude": 140.0503,
      "country_code": "JP"
    },
    {
      "city": "Subotica",
      "latitude": 46.0983,
      "longitude": 19.67,
      "country_code": "RS"
    },
    {
      "city": "Nusaybin",
      "latitude": 37.0833,
      "longitude": 41.2167,
      "country_code": "TR"
    },
    {
      "city": "Trincomalee",
      "latitude": 8.5667,
      "longitude": 81.2333,
      "country_code": "LK"
    },
    {
      "city": "Akhmīm",
      "latitude": 26.5642,
      "longitude": 31.7461,
      "country_code": "EG"
    },
    {
      "city": "Azare",
      "latitude": 11.6804,
      "longitude": 10.19,
      "country_code": "NG"
    },
    {
      "city": "Brovary",
      "latitude": 50.5114,
      "longitude": 30.7903,
      "country_code": "UA"
    },
    {
      "city": "Yelets",
      "latitude": 52.6167,
      "longitude": 38.4667,
      "country_code": "RU"
    },
    {
      "city": "Pushkino",
      "latitude": 56.0167,
      "longitude": 37.85,
      "country_code": "RU"
    },
    {
      "city": "Liberec",
      "latitude": 50.77,
      "longitude": 15.0584,
      "country_code": "CZ"
    },
    {
      "city": "Mazyr",
      "latitude": 52.05,
      "longitude": 29.2333,
      "country_code": "BY"
    },
    {
      "city": "Tikrīt",
      "latitude": 34.6,
      "longitude": 43.6833,
      "country_code": "IQ"
    },
    {
      "city": "Robāţ Karīm",
      "latitude": 35.4847,
      "longitude": 51.0828,
      "country_code": "IR"
    },
    {
      "city": "Koutiala",
      "latitude": 12.3904,
      "longitude": -5.47,
      "country_code": "ML"
    },
    {
      "city": "Passos",
      "latitude": -20.71,
      "longitude": -46.61,
      "country_code": "BR"
    },
    {
      "city": "Lerma",
      "latitude": 19.2847,
      "longitude": -99.5119,
      "country_code": "MX"
    },
    {
      "city": "Ciudad Río Bravo",
      "latitude": 25.9861,
      "longitude": -98.0889,
      "country_code": "MX"
    },
    {
      "city": "Allen",
      "latitude": 33.1088,
      "longitude": -96.6735,
      "country_code": "US"
    },
    {
      "city": "Tarīm",
      "latitude": 16.05,
      "longitude": 49,
      "country_code": "YE"
    },
    {
      "city": "Kroonstad",
      "latitude": -27.6456,
      "longitude": 27.2317,
      "country_code": "ZA"
    },
    {
      "city": "Kandhkot",
      "latitude": 28.4,
      "longitude": 69.3,
      "country_code": "PK"
    },
    {
      "city": "Granada",
      "latitude": 11.93,
      "longitude": -85.9561,
      "country_code": "NI"
    },
    {
      "city": "Novara",
      "latitude": 45.45,
      "longitude": 8.6167,
      "country_code": "IT"
    },
    {
      "city": "Kongolo",
      "latitude": -5.3795,
      "longitude": 26.98,
      "country_code": "CD"
    },
    {
      "city": "Moers",
      "latitude": 51.4592,
      "longitude": 6.6197,
      "country_code": "DE"
    },
    {
      "city": "Kalisz",
      "latitude": 51.757,
      "longitude": 18.083,
      "country_code": "PL"
    },
    {
      "city": "Saijō",
      "latitude": 33.9196,
      "longitude": 133.1812,
      "country_code": "JP"
    },
    {
      "city": "Yozgat",
      "latitude": 39.8208,
      "longitude": 34.8083,
      "country_code": "TR"
    },
    {
      "city": "Highlands Ranch",
      "latitude": 39.5419,
      "longitude": -104.9708,
      "country_code": "US"
    },
    {
      "city": "Al Fāw",
      "latitude": 29.98,
      "longitude": 48.47,
      "country_code": "IQ"
    },
    {
      "city": "West Covina",
      "latitude": 34.0555,
      "longitude": -117.9112,
      "country_code": "US"
    },
    {
      "city": "Salzgitter",
      "latitude": 52.1503,
      "longitude": 10.3593,
      "country_code": "DE"
    },
    {
      "city": "Berdsk",
      "latitude": 54.75,
      "longitude": 83.1,
      "country_code": "RU"
    },
    {
      "city": "Sparks",
      "latitude": 39.5729,
      "longitude": -119.7157,
      "country_code": "US"
    },
    {
      "city": "Waterloo",
      "latitude": 43.4667,
      "longitude": -80.5167,
      "country_code": "CA"
    },
    {
      "city": "Galle",
      "latitude": 6.0395,
      "longitude": 80.2194,
      "country_code": "LK"
    },
    {
      "city": "Tādepallegūdem",
      "latitude": 16.8333,
      "longitude": 81.5,
      "country_code": "IN"
    },
    {
      "city": "Zomba",
      "latitude": -15.3833,
      "longitude": 35.3333,
      "country_code": "MW"
    },
    {
      "city": "Dobrich",
      "latitude": 43.5667,
      "longitude": 27.8333,
      "country_code": "BG"
    },
    {
      "city": "Sergiyev Posad",
      "latitude": 56.3,
      "longitude": 38.1333,
      "country_code": "RU"
    },
    {
      "city": "Konotop",
      "latitude": 51.2369,
      "longitude": 33.2027,
      "country_code": "UA"
    },
    {
      "city": "Courbevoic",
      "latitude": 48.8978,
      "longitude": 2.2531,
      "country_code": "FR"
    },
    {
      "city": "Zihuatanejo",
      "latitude": 17.6444,
      "longitude": -101.5511,
      "country_code": "MX"
    },
    {
      "city": "Bouskoura",
      "latitude": 33.4489,
      "longitude": -7.6486,
      "country_code": "MA"
    },
    {
      "city": "Lysychansk",
      "latitude": 48.9169,
      "longitude": 38.4306,
      "country_code": "UA"
    },
    {
      "city": "Khāk-e ‘Alī",
      "latitude": 36.1283,
      "longitude": 50.1764,
      "country_code": "IR"
    },
    {
      "city": "Maumere",
      "latitude": -8.6189,
      "longitude": 122.2123,
      "country_code": "ID"
    },
    {
      "city": "Samal",
      "latitude": 7.05,
      "longitude": 125.7333,
      "country_code": "PH"
    },
    {
      "city": "Girona",
      "latitude": 41.9833,
      "longitude": 2.8167,
      "country_code": "ES"
    },
    {
      "city": "San Mateo",
      "latitude": 37.5521,
      "longitude": -122.3122,
      "country_code": "US"
    },
    {
      "city": "Villa Luzuriaga",
      "latitude": -34.6667,
      "longitude": -58.5833,
      "country_code": "AR"
    },
    {
      "city": "Eastbourne",
      "latitude": 50.77,
      "longitude": 0.28,
      "country_code": "GB"
    },
    {
      "city": "Worcester",
      "latitude": 52.192,
      "longitude": -2.22,
      "country_code": "GB"
    },
    {
      "city": "Caseros",
      "latitude": -34.6167,
      "longitude": -58.5333,
      "country_code": "AR"
    },
    {
      "city": "Fyfield",
      "latitude": 51.739,
      "longitude": 0.2722,
      "country_code": "GB"
    },
    {
      "city": "Tula de Allende",
      "latitude": 20.05,
      "longitude": -99.35,
      "country_code": "MX"
    },
    {
      "city": "Catbalogan",
      "latitude": 11.7833,
      "longitude": 124.8833,
      "country_code": "PH"
    },
    {
      "city": "Chongshan",
      "latitude": 18.7787,
      "longitude": 109.5117,
      "country_code": "CN"
    },
    {
      "city": "Abengourou",
      "latitude": 6.7297,
      "longitude": -3.4964,
      "country_code": "CI"
    },
    {
      "city": "Lower Hutt",
      "latitude": -41.2167,
      "longitude": 174.9167,
      "country_code": "NZ"
    },
    {
      "city": "Kalyani",
      "latitude": 22.975,
      "longitude": 88.4344,
      "country_code": "IN"
    },
    {
      "city": "Kilinochchi",
      "latitude": 9.4004,
      "longitude": 80.3999,
      "country_code": "LK"
    },
    {
      "city": "Sakado",
      "latitude": 35.9572,
      "longitude": 139.4031,
      "country_code": "JP"
    },
    {
      "city": "Isehara",
      "latitude": 35.4028,
      "longitude": 139.315,
      "country_code": "JP"
    },
    {
      "city": "Piacenza",
      "latitude": 45.05,
      "longitude": 9.7,
      "country_code": "IT"
    },
    {
      "city": "Ed Damer",
      "latitude": 17.59,
      "longitude": 33.96,
      "country_code": "SD"
    },
    {
      "city": "Norwalk",
      "latitude": 33.9069,
      "longitude": -118.0829,
      "country_code": "US"
    },
    {
      "city": "Santa Rosa",
      "latitude": -36.6203,
      "longitude": -64.2906,
      "country_code": "AR"
    },
    {
      "city": "Dolisie",
      "latitude": -4.1961,
      "longitude": 12.6731,
      "country_code": "CG"
    },
    {
      "city": "Negapatam",
      "latitude": 10.7667,
      "longitude": 79.8333,
      "country_code": "IN"
    },
    {
      "city": "Wigan",
      "latitude": 53.5448,
      "longitude": -2.6318,
      "country_code": "GB"
    },
    {
      "city": "Tourcoing",
      "latitude": 50.7239,
      "longitude": 3.1612,
      "country_code": "FR"
    },
    {
      "city": "Osijek",
      "latitude": 45.5603,
      "longitude": 18.6703,
      "country_code": "HR"
    },
    {
      "city": "Ariana",
      "latitude": 36.8667,
      "longitude": 10.2,
      "country_code": "TN"
    },
    {
      "city": "Siegen",
      "latitude": 50.8756,
      "longitude": 8.0167,
      "country_code": "DE"
    },
    {
      "city": "Gardēz",
      "latitude": 33.5931,
      "longitude": 69.2297,
      "country_code": "AF"
    },
    {
      "city": "Biak",
      "latitude": -1.1615,
      "longitude": 136.0485,
      "country_code": "ID"
    },
    {
      "city": "Columbia",
      "latitude": 39.2004,
      "longitude": -76.859,
      "country_code": "US"
    },
    {
      "city": "Elista",
      "latitude": 46.3167,
      "longitude": 44.2667,
      "country_code": "RU"
    },
    {
      "city": "Libertad",
      "latitude": -34.6833,
      "longitude": -58.6833,
      "country_code": "AR"
    },
    {
      "city": "Rialto",
      "latitude": 34.1174,
      "longitude": -117.3894,
      "country_code": "US"
    },
    {
      "city": "Thika",
      "latitude": -1.0396,
      "longitude": 37.09,
      "country_code": "KE"
    },
    {
      "city": "Manteca",
      "latitude": 37.7927,
      "longitude": -121.2264,
      "country_code": "US"
    },
    {
      "city": "Araxá",
      "latitude": -19.5928,
      "longitude": -46.9408,
      "country_code": "BR"
    },
    {
      "city": "Bumba",
      "latitude": 2.19,
      "longitude": 22.46,
      "country_code": "CD"
    },
    {
      "city": "Bayugan",
      "latitude": 8.7143,
      "longitude": 125.7481,
      "country_code": "PH"
    },
    {
      "city": "Burzaco",
      "latitude": -34.8167,
      "longitude": -58.3667,
      "country_code": "AR"
    },
    {
      "city": "Talara",
      "latitude": -4.5833,
      "longitude": -81.2667,
      "country_code": "PE"
    },
    {
      "city": "Novokuybyshevsk",
      "latitude": 53.1,
      "longitude": 49.9167,
      "country_code": "RU"
    },
    {
      "city": "Bergama",
      "latitude": 39.1228,
      "longitude": 27.1783,
      "country_code": "TR"
    },
    {
      "city": "Miryang",
      "latitude": 35.4933,
      "longitude": 128.7489,
      "country_code": "KR"
    },
    {
      "city": "Nyeri",
      "latitude": -0.4167,
      "longitude": 36.95,
      "country_code": "KE"
    },
    {
      "city": "Satu Mare",
      "latitude": 47.79,
      "longitude": 22.89,
      "country_code": "RO"
    },
    {
      "city": "Houzhuang",
      "latitude": 35.62,
      "longitude": 111.21,
      "country_code": "CN"
    },
    {
      "city": "Hildesheim",
      "latitude": 52.15,
      "longitude": 9.95,
      "country_code": "DE"
    },
    {
      "city": "Ginowan",
      "latitude": 26.2817,
      "longitude": 127.7783,
      "country_code": "JP"
    },
    {
      "city": "Sangju",
      "latitude": 36.4153,
      "longitude": 128.1606,
      "country_code": "KR"
    },
    {
      "city": "Kırklareli",
      "latitude": 41.7347,
      "longitude": 27.2253,
      "country_code": "TR"
    },
    {
      "city": "Hove",
      "latitude": 50.8352,
      "longitude": -0.1758,
      "country_code": "GB"
    },
    {
      "city": "Legnica",
      "latitude": 51.2101,
      "longitude": 16.1619,
      "country_code": "PL"
    },
    {
      "city": "Nanterre",
      "latitude": 48.8988,
      "longitude": 2.1969,
      "country_code": "FR"
    },
    {
      "city": "Bhadreswar",
      "latitude": 22.82,
      "longitude": 88.35,
      "country_code": "IN"
    },
    {
      "city": "Noginsk",
      "latitude": 55.85,
      "longitude": 38.4333,
      "country_code": "RU"
    },
    {
      "city": "Níkaia",
      "latitude": 37.9667,
      "longitude": 23.6333,
      "country_code": "GR"
    },
    {
      "city": "Lida",
      "latitude": 53.8872,
      "longitude": 25.3028,
      "country_code": "BY"
    },
    {
      "city": "Saint Helens",
      "latitude": 53.4541,
      "longitude": -2.7461,
      "country_code": "GB"
    },
    {
      "city": "Talisay",
      "latitude": 10.7333,
      "longitude": 122.9667,
      "country_code": "PH"
    },
    {
      "city": "El Cajon",
      "latitude": 32.8017,
      "longitude": -116.9605,
      "country_code": "US"
    },
    {
      "city": "Bethal",
      "latitude": -26.45,
      "longitude": 29.45,
      "country_code": "ZA"
    },
    {
      "city": "Mumias",
      "latitude": 0.3333,
      "longitude": 34.4833,
      "country_code": "KE"
    },
    {
      "city": "Burbank",
      "latitude": 34.1879,
      "longitude": -118.3235,
      "country_code": "US"
    },
    {
      "city": "Longmont",
      "latitude": 40.1686,
      "longitude": -105.1005,
      "country_code": "US"
    },
    {
      "city": "Yunfu",
      "latitude": 28.6331,
      "longitude": 104.4181,
      "country_code": "CN"
    },
    {
      "city": "Mayarí",
      "latitude": 20.6592,
      "longitude": -75.6781,
      "country_code": "CU"
    },
    {
      "city": "Mositai",
      "latitude": 45.5266,
      "longitude": 119.6506,
      "country_code": "CN"
    },
    {
      "city": "Dhangaḍhi̇̄",
      "latitude": 28.6833,
      "longitude": 80.6,
      "country_code": "NP"
    },
    {
      "city": "Kāshmar",
      "latitude": 35.2383,
      "longitude": 58.4656,
      "country_code": "IR"
    },
    {
      "city": "San Felipe del Progreso",
      "latitude": 19.7125,
      "longitude": -99.9511,
      "country_code": "MX"
    },
    {
      "city": "Klagenfurt",
      "latitude": 46.6167,
      "longitude": 14.3,
      "country_code": "AT"
    },
    {
      "city": "Delta",
      "latitude": 49.0847,
      "longitude": -123.0586,
      "country_code": "CA"
    },
    {
      "city": "Chilakalūrupet",
      "latitude": 16.0892,
      "longitude": 80.1672,
      "country_code": "IN"
    },
    {
      "city": "Coatepec",
      "latitude": 19.4553,
      "longitude": -96.9586,
      "country_code": "MX"
    },
    {
      "city": "Şabrātah",
      "latitude": 32.7922,
      "longitude": 12.4842,
      "country_code": "LY"
    },
    {
      "city": "Trindade",
      "latitude": -16.65,
      "longitude": -49.5,
      "country_code": "BR"
    },
    {
      "city": "Boryeong",
      "latitude": 36.3333,
      "longitude": 126.6167,
      "country_code": "KR"
    },
    {
      "city": "Shūshtar",
      "latitude": 32.0436,
      "longitude": 48.8569,
      "country_code": "IR"
    },
    {
      "city": "Santo Antônio de Jesus",
      "latitude": -12.9692,
      "longitude": -39.2611,
      "country_code": "BR"
    },
    {
      "city": "Teluk Intan",
      "latitude": 4.0333,
      "longitude": 101.0167,
      "country_code": "MY"
    },
    {
      "city": "Hemel Hempstead",
      "latitude": 51.7526,
      "longitude": -0.4692,
      "country_code": "GB"
    },
    {
      "city": "Assis",
      "latitude": -22.6619,
      "longitude": -50.4119,
      "country_code": "BR"
    },
    {
      "city": "Berisso",
      "latitude": -34.8667,
      "longitude": -57.8667,
      "country_code": "AR"
    },
    {
      "city": "Renton",
      "latitude": 47.4784,
      "longitude": -122.1919,
      "country_code": "US"
    },
    {
      "city": "Inzai",
      "latitude": 35.8322,
      "longitude": 140.1458,
      "country_code": "JP"
    },
    {
      "city": "Duitama",
      "latitude": 5.8305,
      "longitude": -73.02,
      "country_code": "CO"
    },
    {
      "city": "Chatham",
      "latitude": 42.4229,
      "longitude": -82.1324,
      "country_code": "CA"
    },
    {
      "city": "‘Ibrī",
      "latitude": 23.2254,
      "longitude": 56.517,
      "country_code": "OM"
    },
    {
      "city": "Vista",
      "latitude": 33.1896,
      "longitude": -117.2386,
      "country_code": "US"
    },
    {
      "city": "Olomouc",
      "latitude": 49.5939,
      "longitude": 17.2508,
      "country_code": "CZ"
    },
    {
      "city": "Zheleznogorsk",
      "latitude": 52.3333,
      "longitude": 35.3667,
      "country_code": "RU"
    },
    {
      "city": "Logan",
      "latitude": 41.74,
      "longitude": -111.8419,
      "country_code": "US"
    },
    {
      "city": "Patos",
      "latitude": -7.0196,
      "longitude": -37.29,
      "country_code": "BR"
    },
    {
      "city": "Sungai Penuh",
      "latitude": -2.0636,
      "longitude": 101.3961,
      "country_code": "ID"
    },
    {
      "city": "Vitry-sur-Seine",
      "latitude": 48.7875,
      "longitude": 2.3928,
      "country_code": "FR"
    },
    {
      "city": "Tizayuca",
      "latitude": 19.8333,
      "longitude": -98.9833,
      "country_code": "MX"
    },
    {
      "city": "Socopó",
      "latitude": 8.2322,
      "longitude": -70.8206,
      "country_code": "VE"
    },
    {
      "city": "Prescott Valley",
      "latitude": 34.5983,
      "longitude": -112.3176,
      "country_code": "US"
    },
    {
      "city": "Ancona",
      "latitude": 43.6167,
      "longitude": 13.5167,
      "country_code": "IT"
    },
    {
      "city": "Trinidad",
      "latitude": -14.8333,
      "longitude": -64.9,
      "country_code": "BO"
    },
    {
      "city": "Salihorsk",
      "latitude": 52.7842,
      "longitude": 27.5425,
      "country_code": "BY"
    },
    {
      "city": "Vacaville",
      "latitude": 38.359,
      "longitude": -121.968,
      "country_code": "US"
    },
    {
      "city": "San Luis de la Paz",
      "latitude": 21.3,
      "longitude": -100.5167,
      "country_code": "MX"
    },
    {
      "city": "Wakefield",
      "latitude": 53.68,
      "longitude": -1.49,
      "country_code": "GB"
    },
    {
      "city": "Chikusei",
      "latitude": 36.3072,
      "longitude": 139.9831,
      "country_code": "JP"
    },
    {
      "city": "Oued Zem",
      "latitude": 32.86,
      "longitude": -6.56,
      "country_code": "MA"
    },
    {
      "city": "Kani",
      "latitude": 35.4258,
      "longitude": 137.0611,
      "country_code": "JP"
    },
    {
      "city": "Edinburg",
      "latitude": 26.3197,
      "longitude": -98.1596,
      "country_code": "US"
    },
    {
      "city": "Kōnan",
      "latitude": 35.3333,
      "longitude": 136.8667,
      "country_code": "JP"
    },
    {
      "city": "Mishan",
      "latitude": 45.5504,
      "longitude": 131.88,
      "country_code": "CN"
    },
    {
      "city": "Gütersloh",
      "latitude": 51.9,
      "longitude": 8.3833,
      "country_code": "DE"
    },
    {
      "city": "Sakata",
      "latitude": 38.9144,
      "longitude": 139.8364,
      "country_code": "JP"
    },
    {
      "city": "Carmel",
      "latitude": 39.965,
      "longitude": -86.146,
      "country_code": "US"
    },
    {
      "city": "Spokane Valley",
      "latitude": 47.6626,
      "longitude": -117.2346,
      "country_code": "US"
    },
    {
      "city": "Oum el Bouaghi",
      "latitude": 35.8706,
      "longitude": 7.115,
      "country_code": "DZ"
    },
    {
      "city": "Watford",
      "latitude": 51.655,
      "longitude": -0.3957,
      "country_code": "GB"
    },
    {
      "city": "Jilotepec",
      "latitude": 19.9519,
      "longitude": -99.5328,
      "country_code": "MX"
    },
    {
      "city": "Navapolatsk",
      "latitude": 55.5333,
      "longitude": 28.6667,
      "country_code": "BY"
    },
    {
      "city": "Cottbus",
      "latitude": 51.7606,
      "longitude": 14.3342,
      "country_code": "DE"
    },
    {
      "city": "Edison",
      "latitude": 40.536,
      "longitude": -74.3697,
      "country_code": "US"
    },
    {
      "city": "Kpalimé",
      "latitude": 6.91,
      "longitude": 0.6281,
      "country_code": "TG"
    },
    {
      "city": "San Angelo",
      "latitude": 31.4424,
      "longitude": -100.4506,
      "country_code": "US"
    },
    {
      "city": "Lakewood",
      "latitude": 40.0763,
      "longitude": -74.2031,
      "country_code": "US"
    },
    {
      "city": "Kaiserslautern",
      "latitude": 49.4447,
      "longitude": 7.7689,
      "country_code": "DE"
    },
    {
      "city": "Gangtok",
      "latitude": 27.33,
      "longitude": 88.62,
      "country_code": "IN"
    },
    {
      "city": "La Crosse",
      "latitude": 43.824,
      "longitude": -91.2268,
      "country_code": "US"
    },
    {
      "city": "Ahar",
      "latitude": 38.475,
      "longitude": 47.0603,
      "country_code": "IR"
    },
    {
      "city": "Diourbel",
      "latitude": 14.655,
      "longitude": -16.2314,
      "country_code": "SN"
    },
    {
      "city": "Andria",
      "latitude": 41.2317,
      "longitude": 16.3083,
      "country_code": "IT"
    },
    {
      "city": "Tsuyama",
      "latitude": 35.1406,
      "longitude": 134.0319,
      "country_code": "JP"
    },
    {
      "city": "Arden-Arcade",
      "latitude": 38.6034,
      "longitude": -121.381,
      "country_code": "US"
    },
    {
      "city": "Masjed Soleymān",
      "latitude": 31.9333,
      "longitude": 49.3,
      "country_code": "IR"
    },
    {
      "city": "Mairiporã",
      "latitude": -23.3189,
      "longitude": -46.5869,
      "country_code": "BR"
    },
    {
      "city": "Torbat-e Jām",
      "latitude": 35.2439,
      "longitude": 60.6225,
      "country_code": "IR"
    },
    {
      "city": "Magangué",
      "latitude": 9.23,
      "longitude": -74.74,
      "country_code": "CO"
    },
    {
      "city": "Kam”yanets’-Podil’s’kyy",
      "latitude": 48.6806,
      "longitude": 26.5806,
      "country_code": "UA"
    },
    {
      "city": "Idaho Falls",
      "latitude": 43.4872,
      "longitude": -112.0362,
      "country_code": "US"
    },
    {
      "city": "Holland",
      "latitude": 42.7677,
      "longitude": -86.0985,
      "country_code": "US"
    },
    {
      "city": "Red Deer",
      "latitude": 52.2681,
      "longitude": -113.8111,
      "country_code": "CA"
    },
    {
      "city": "Charlottesville",
      "latitude": 38.0375,
      "longitude": -78.4855,
      "country_code": "US"
    },
    {
      "city": "Drohobych",
      "latitude": 49.35,
      "longitude": 23.5,
      "country_code": "UA"
    },
    {
      "city": "Shahrisabz",
      "latitude": 39.05,
      "longitude": 66.8333,
      "country_code": "UZ"
    },
    {
      "city": "Lincoln",
      "latitude": 53.2344,
      "longitude": -0.5386,
      "country_code": "GB"
    },
    {
      "city": "Longview",
      "latitude": 32.5193,
      "longitude": -94.7621,
      "country_code": "US"
    },
    {
      "city": "Woodbridge",
      "latitude": 40.5611,
      "longitude": -74.2943,
      "country_code": "US"
    },
    {
      "city": "Tracy",
      "latitude": 37.7269,
      "longitude": -121.4522,
      "country_code": "US"
    },
    {
      "city": "Kamloops",
      "latitude": 50.6761,
      "longitude": -120.3408,
      "country_code": "CA"
    },
    {
      "city": "Bento Gonçalves",
      "latitude": -29.1695,
      "longitude": -51.52,
      "country_code": "BR"
    },
    {
      "city": "Râmnicu Vâlcea",
      "latitude": 45.1047,
      "longitude": 24.3756,
      "country_code": "RO"
    },
    {
      "city": "Erechim",
      "latitude": -27.63,
      "longitude": -52.27,
      "country_code": "BR"
    },
    {
      "city": "Kettering",
      "latitude": 52.3931,
      "longitude": -0.7229,
      "country_code": "GB"
    },
    {
      "city": "Viseu",
      "latitude": 40.6667,
      "longitude": -7.9167,
      "country_code": "PT"
    },
    {
      "city": "Kohīma",
      "latitude": 25.6667,
      "longitude": 94.1194,
      "country_code": "IN"
    },
    {
      "city": "Mingəçevir",
      "latitude": 40.77,
      "longitude": 47.0489,
      "country_code": "AZ"
    },
    {
      "city": "Janakpur",
      "latitude": 26.7122,
      "longitude": 85.9217,
      "country_code": "NP"
    },
    {
      "city": "Chipata",
      "latitude": -13.6386,
      "longitude": 32.6453,
      "country_code": "ZM"
    },
    {
      "city": "Tultepec",
      "latitude": 19.685,
      "longitude": -99.1281,
      "country_code": "MX"
    },
    {
      "city": "Ciudad General Belgrano",
      "latitude": -34.7261,
      "longitude": -58.5289,
      "country_code": "AR"
    },
    {
      "city": "Khanty-Mansiysk",
      "latitude": 61,
      "longitude": 69,
      "country_code": "RU"
    },
    {
      "city": "Créteil",
      "latitude": 48.7911,
      "longitude": 2.4628,
      "country_code": "FR"
    },
    {
      "city": "Bismarck",
      "latitude": 46.8144,
      "longitude": -100.7694,
      "country_code": "US"
    },
    {
      "city": "Herẕliyya",
      "latitude": 32.1556,
      "longitude": 34.8422,
      "country_code": "IL"
    },
    {
      "city": "Yên Bái",
      "latitude": 21.7,
      "longitude": 104.8667,
      "country_code": "VN"
    },
    {
      "city": "Shumen",
      "latitude": 43.27,
      "longitude": 26.9244,
      "country_code": "BG"
    },
    {
      "city": "Orem",
      "latitude": 40.2983,
      "longitude": -111.6992,
      "country_code": "US"
    },
    {
      "city": "Yashio",
      "latitude": 35.8228,
      "longitude": 139.8392,
      "country_code": "JP"
    },
    {
      "city": "Half Way Tree",
      "latitude": 18.0106,
      "longitude": -76.7975,
      "country_code": "JM"
    },
    {
      "city": "Vị Thanh",
      "latitude": 9.7833,
      "longitude": 105.4708,
      "country_code": "VN"
    },
    {
      "city": "Tumbes",
      "latitude": -3.5667,
      "longitude": -80.45,
      "country_code": "PE"
    },
    {
      "city": "Malindi",
      "latitude": -3.21,
      "longitude": 40.1,
      "country_code": "KE"
    },
    {
      "city": "Székesfehérvár",
      "latitude": 47.2,
      "longitude": 18.4167,
      "country_code": "HU"
    },
    {
      "city": "Xırdalan",
      "latitude": 40.4486,
      "longitude": 49.7564,
      "country_code": "AZ"
    },
    {
      "city": "Tenancingo",
      "latitude": 18.9608,
      "longitude": -99.5906,
      "country_code": "MX"
    },
    {
      "city": "Ponta Porã",
      "latitude": -22.5361,
      "longitude": -55.7256,
      "country_code": "BR"
    },
    {
      "city": "Wangqing",
      "latitude": 43.3248,
      "longitude": 129.7343,
      "country_code": "CN"
    },
    {
      "city": "Sibolga",
      "latitude": 1.7425,
      "longitude": 98.7792,
      "country_code": "ID"
    },
    {
      "city": "Aubervilliers",
      "latitude": 48.9131,
      "longitude": 2.3831,
      "country_code": "FR"
    },
    {
      "city": "Balanga",
      "latitude": 14.6833,
      "longitude": 120.5333,
      "country_code": "PH"
    },
    {
      "city": "Bunia",
      "latitude": 1.5604,
      "longitude": 30.24,
      "country_code": "CD"
    },
    {
      "city": "Arauca",
      "latitude": 7.0903,
      "longitude": -70.7617,
      "country_code": "CO"
    },
    {
      "city": "Totonicapán",
      "latitude": 14.9108,
      "longitude": -91.3606,
      "country_code": "GT"
    },
    {
      "city": "Sidi Slimane",
      "latitude": 34.26,
      "longitude": -5.93,
      "country_code": "MA"
    },
    {
      "city": "Pejë",
      "latitude": 42.65,
      "longitude": 20.3,
      "country_code": "XK"
    },
    {
      "city": "Yishui",
      "latitude": 35.7904,
      "longitude": 118.62,
      "country_code": "CN"
    },
    {
      "city": "Fulham",
      "latitude": 51.4828,
      "longitude": -0.195,
      "country_code": "GB"
    },
    {
      "city": "Muriaé",
      "latitude": -21.13,
      "longitude": -42.39,
      "country_code": "BR"
    },
    {
      "city": "Schwerin",
      "latitude": 53.6333,
      "longitude": 11.4167,
      "country_code": "DE"
    },
    {
      "city": "San Francisco Solano",
      "latitude": -34.7667,
      "longitude": -58.3167,
      "country_code": "AR"
    },
    {
      "city": "Tartu",
      "latitude": 58.38,
      "longitude": 26.7225,
      "country_code": "EE"
    },
    {
      "city": "Ziftá",
      "latitude": 30.7119,
      "longitude": 31.2394,
      "country_code": "EG"
    },
    {
      "city": "České Budějovice",
      "latitude": 48.9747,
      "longitude": 14.4747,
      "country_code": "CZ"
    },
    {
      "city": "Colombes",
      "latitude": 48.9236,
      "longitude": 2.2522,
      "country_code": "FR"
    },
    {
      "city": "Çankırı",
      "latitude": 40.6,
      "longitude": 33.6167,
      "country_code": "TR"
    },
    {
      "city": "East Ham",
      "latitude": 51.5323,
      "longitude": 0.0554,
      "country_code": "GB"
    },
    {
      "city": "Masbate",
      "latitude": 12.3667,
      "longitude": 123.6167,
      "country_code": "PH"
    },
    {
      "city": "Kakamega",
      "latitude": 0.2833,
      "longitude": 34.75,
      "country_code": "KE"
    },
    {
      "city": "Río Gallegos",
      "latitude": -51.6333,
      "longitude": -69.2333,
      "country_code": "AR"
    },
    {
      "city": "Ludwigsburg",
      "latitude": 48.8975,
      "longitude": 9.1919,
      "country_code": "DE"
    },
    {
      "city": "Compton",
      "latitude": 33.893,
      "longitude": -118.2275,
      "country_code": "US"
    },
    {
      "city": "Errachidia",
      "latitude": 31.9319,
      "longitude": -4.4244,
      "country_code": "MA"
    },
    {
      "city": "Esslingen",
      "latitude": 48.7406,
      "longitude": 9.3108,
      "country_code": "DE"
    },
    {
      "city": "Al Bāḩah",
      "latitude": 20.0129,
      "longitude": 41.4677,
      "country_code": "SA"
    },
    {
      "city": "Yotsukaidō",
      "latitude": 35.67,
      "longitude": 140.1683,
      "country_code": "JP"
    },
    {
      "city": "Sunrise",
      "latitude": 26.1547,
      "longitude": -80.2997,
      "country_code": "US"
    },
    {
      "city": "Nouméa",
      "latitude": -22.2625,
      "longitude": 166.4443,
      "country_code": "NC"
    },
    {
      "city": "Barnsley",
      "latitude": 53.5537,
      "longitude": -1.4791,
      "country_code": "GB"
    },
    {
      "city": "Hartlepool",
      "latitude": 54.69,
      "longitude": -1.21,
      "country_code": "GB"
    },
    {
      "city": "Ōbu",
      "latitude": 35.0167,
      "longitude": 136.9667,
      "country_code": "JP"
    },
    {
      "city": "Gjakovë",
      "latitude": 42.3833,
      "longitude": 20.4333,
      "country_code": "XK"
    },
    {
      "city": "Mtwara",
      "latitude": -10.2736,
      "longitude": 40.1828,
      "country_code": "TZ"
    },
    {
      "city": "Ealing",
      "latitude": 51.5175,
      "longitude": -0.2988,
      "country_code": "GB"
    },
    {
      "city": "Birkenhead",
      "latitude": 53.393,
      "longitude": -3.014,
      "country_code": "GB"
    },
    {
      "city": "Guercif",
      "latitude": 34.23,
      "longitude": -3.36,
      "country_code": "MA"
    },
    {
      "city": "Quincy",
      "latitude": 42.2516,
      "longitude": -71.0183,
      "country_code": "US"
    },
    {
      "city": "Lynn",
      "latitude": 42.4779,
      "longitude": -70.9663,
      "country_code": "US"
    },
    {
      "city": "Monte Chingolo",
      "latitude": -34.7333,
      "longitude": -58.35,
      "country_code": "AR"
    },
    {
      "city": "Drobeta-Turnu Severin",
      "latitude": 44.6361,
      "longitude": 22.6556,
      "country_code": "RO"
    },
    {
      "city": "Nisshin",
      "latitude": 35.1333,
      "longitude": 137.0333,
      "country_code": "JP"
    },
    {
      "city": "Haskovo",
      "latitude": 41.9311,
      "longitude": 25.5575,
      "country_code": "BG"
    },
    {
      "city": "Suceava",
      "latitude": 47.6514,
      "longitude": 26.2556,
      "country_code": "RO"
    },
    {
      "city": "Hradec Králové",
      "latitude": 50.2092,
      "longitude": 15.8319,
      "country_code": "CZ"
    },
    {
      "city": "Al Fujayrah",
      "latitude": 25.1308,
      "longitude": 56.3347,
      "country_code": "AE"
    },
    {
      "city": "Ústí nad Labem",
      "latitude": 50.6592,
      "longitude": 14.0417,
      "country_code": "CZ"
    },
    {
      "city": "Ciudad Lázaro Cárdenas",
      "latitude": 17.9561,
      "longitude": -102.1922,
      "country_code": "MX"
    },
    {
      "city": "Şırnak",
      "latitude": 37.5164,
      "longitude": 42.4611,
      "country_code": "TR"
    },
    {
      "city": "South Gate",
      "latitude": 33.9448,
      "longitude": -118.1926,
      "country_code": "US"
    },
    {
      "city": "Miaoli",
      "latitude": 24.57,
      "longitude": 120.82,
      "country_code": "TW"
    },
    {
      "city": "Makeni",
      "latitude": 8.8817,
      "longitude": -12.0442,
      "country_code": "SL"
    },
    {
      "city": "Nuneaton",
      "latitude": 52.523,
      "longitude": -1.468,
      "country_code": "GB"
    },
    {
      "city": "Itanhaém",
      "latitude": -24.1831,
      "longitude": -46.7889,
      "country_code": "BR"
    },
    {
      "city": "Brixton",
      "latitude": 51.463,
      "longitude": -0.106,
      "country_code": "GB"
    },
    {
      "city": "Kirkland",
      "latitude": 47.6974,
      "longitude": -122.2054,
      "country_code": "US"
    },
    {
      "city": "Levallois-Perret",
      "latitude": 48.895,
      "longitude": 2.2872,
      "country_code": "FR"
    },
    {
      "city": "Brusque",
      "latitude": -27.13,
      "longitude": -48.93,
      "country_code": "BR"
    },
    {
      "city": "Santiago de Compostela",
      "latitude": 42.8805,
      "longitude": -8.5457,
      "country_code": "ES"
    },
    {
      "city": "Magadan",
      "latitude": 59.5667,
      "longitude": 150.8,
      "country_code": "RU"
    },
    {
      "city": "Pardubice",
      "latitude": 50.0386,
      "longitude": 15.7792,
      "country_code": "CZ"
    },
    {
      "city": "Bender",
      "latitude": 46.8333,
      "longitude": 29.4833,
      "country_code": "MD"
    },
    {
      "city": "Panevėžys",
      "latitude": 55.725,
      "longitude": 24.3639,
      "country_code": "LT"
    },
    {
      "city": "Jaffna",
      "latitude": 9.6647,
      "longitude": 80.0167,
      "country_code": "LK"
    },
    {
      "city": "Bromley",
      "latitude": 51.407,
      "longitude": 0.021,
      "country_code": "GB"
    },
    {
      "city": "Abaetetuba",
      "latitude": -1.7245,
      "longitude": -48.8849,
      "country_code": "BR"
    },
    {
      "city": "Queluz",
      "latitude": 38.7566,
      "longitude": -9.2545,
      "country_code": "PT"
    },
    {
      "city": "Bath",
      "latitude": 51.38,
      "longitude": -2.36,
      "country_code": "GB"
    },
    {
      "city": "Santana",
      "latitude": -0.0583,
      "longitude": -51.1817,
      "country_code": "BR"
    },
    {
      "city": "‘Amrān",
      "latitude": 15.65,
      "longitude": 43.9333,
      "country_code": "YE"
    },
    {
      "city": "Edmonton",
      "latitude": 51.6154,
      "longitude": -0.0708,
      "country_code": "GB"
    },
    {
      "city": "Lqoliaa",
      "latitude": 30.2942,
      "longitude": -9.4544,
      "country_code": "MA"
    },
    {
      "city": "Hayes",
      "latitude": 51.5127,
      "longitude": -0.4211,
      "country_code": "GB"
    },
    {
      "city": "Lobnya",
      "latitude": 56.0167,
      "longitude": 37.4833,
      "country_code": "RU"
    },
    {
      "city": "Francistown",
      "latitude": -21.1736,
      "longitude": 27.5125,
      "country_code": "BW"
    },
    {
      "city": "Catanzaro",
      "latitude": 38.91,
      "longitude": 16.5875,
      "country_code": "IT"
    },
    {
      "city": "Aulnay-sous-Bois",
      "latitude": 48.9386,
      "longitude": 2.4906,
      "country_code": "FR"
    },
    {
      "city": "Jönköping",
      "latitude": 57.7713,
      "longitude": 14.165,
      "country_code": "SE"
    },
    {
      "city": "Germantown",
      "latitude": 39.1755,
      "longitude": -77.2643,
      "country_code": "US"
    },
    {
      "city": "Babahoyo",
      "latitude": -1.8167,
      "longitude": -79.5167,
      "country_code": "EC"
    },
    {
      "city": "Takasagochō-takasemachi",
      "latitude": 34.7658,
      "longitude": 134.7906,
      "country_code": "JP"
    },
    {
      "city": "Glyfáda",
      "latitude": 37.88,
      "longitude": 23.7533,
      "country_code": "GR"
    },
    {
      "city": "Cadereyta Jiménez",
      "latitude": 25.6,
      "longitude": -100,
      "country_code": "MX"
    },
    {
      "city": "Westminster",
      "latitude": 33.7523,
      "longitude": -117.9938,
      "country_code": "US"
    },
    {
      "city": "Remedios de Escalada",
      "latitude": -34.7167,
      "longitude": -58.4,
      "country_code": "AR"
    },
    {
      "city": "Vanadzor",
      "latitude": 40.8128,
      "longitude": 44.4883,
      "country_code": "AM"
    },
    {
      "city": "Kitanagoya",
      "latitude": 35.25,
      "longitude": 136.8667,
      "country_code": "JP"
    },
    {
      "city": "Higashiyamato",
      "latitude": 35.7456,
      "longitude": 139.4267,
      "country_code": "JP"
    },
    {
      "city": "Ţarţūs",
      "latitude": 34.8833,
      "longitude": 35.8833,
      "country_code": "SY"
    },
    {
      "city": "Valjevo",
      "latitude": 44.2667,
      "longitude": 19.8833,
      "country_code": "RS"
    },
    {
      "city": "Santa Monica",
      "latitude": 34.0232,
      "longitude": -118.4813,
      "country_code": "US"
    },
    {
      "city": "Poitiers",
      "latitude": 46.58,
      "longitude": 0.34,
      "country_code": "FR"
    },
    {
      "city": "Acayucan",
      "latitude": 17.9422,
      "longitude": -94.9103,
      "country_code": "MX"
    },
    {
      "city": "Gjilan",
      "latitude": 42.47,
      "longitude": 21.47,
      "country_code": "XK"
    },
    {
      "city": "Jalal-Abad",
      "latitude": 40.9375,
      "longitude": 72.9861,
      "country_code": "KG"
    },
    {
      "city": "Umeå",
      "latitude": 63.8285,
      "longitude": 20.2706,
      "country_code": "SE"
    },
    {
      "city": "Prešov",
      "latitude": 49,
      "longitude": 21.2333,
      "country_code": "SK"
    },
    {
      "city": "Balkanabat",
      "latitude": 39.5119,
      "longitude": 54.365,
      "country_code": "TM"
    },
    {
      "city": "Mechelen",
      "latitude": 51.0281,
      "longitude": 4.4803,
      "country_code": "BE"
    },
    {
      "city": "Mukacheve",
      "latitude": 48.4414,
      "longitude": 22.7136,
      "country_code": "UA"
    },
    {
      "city": "As Salţ",
      "latitude": 32.0333,
      "longitude": 35.7333,
      "country_code": "JO"
    },
    {
      "city": "Ciudad de Ceuta",
      "latitude": 35.8867,
      "longitude": -5.3,
      "country_code": "ES"
    },
    {
      "city": "Versailles",
      "latitude": 48.8053,
      "longitude": 2.135,
      "country_code": "FR"
    },
    {
      "city": "Cáceres",
      "latitude": -16.05,
      "longitude": -57.51,
      "country_code": "BR"
    },
    {
      "city": "Vólos",
      "latitude": 39.3611,
      "longitude": 22.9425,
      "country_code": "GR"
    },
    {
      "city": "Carrières-sur-Seine",
      "latitude": 48.9108,
      "longitude": 2.2889,
      "country_code": "FR"
    },
    {
      "city": "Paulo Afonso",
      "latitude": -9.3307,
      "longitude": -38.2657,
      "country_code": "BR"
    },
    {
      "city": "Viana do Castelo",
      "latitude": 41.7,
      "longitude": -8.8333,
      "country_code": "PT"
    },
    {
      "city": "Woolwich",
      "latitude": 51.488,
      "longitude": 0.063,
      "country_code": "GB"
    },
    {
      "city": "Miami Beach",
      "latitude": 25.8171,
      "longitude": -80.1396,
      "country_code": "US"
    },
    {
      "city": "San Leandro",
      "latitude": 37.7071,
      "longitude": -122.1601,
      "country_code": "US"
    },
    {
      "city": "Bracknell",
      "latitude": 51.416,
      "longitude": -0.749,
      "country_code": "GB"
    },
    {
      "city": "Podujevë",
      "latitude": 42.9167,
      "longitude": 21.2,
      "country_code": "XK"
    },
    {
      "city": "Apizaco",
      "latitude": 19.4167,
      "longitude": -98.1333,
      "country_code": "MX"
    },
    {
      "city": "Coronel Oviedo",
      "latitude": -25.45,
      "longitude": -56.44,
      "country_code": "PY"
    },
    {
      "city": "Codó",
      "latitude": -4.4796,
      "longitude": -43.88,
      "country_code": "BR"
    },
    {
      "city": "Fuentes del Valle",
      "latitude": 19.6325,
      "longitude": -99.1386,
      "country_code": "MX"
    },
    {
      "city": "Ébolowa",
      "latitude": 2.9,
      "longitude": 11.15,
      "country_code": "CM"
    },
    {
      "city": "San Juan de los Morros",
      "latitude": 9.901,
      "longitude": -67.354,
      "country_code": "VE"
    },
    {
      "city": "Citrus Heights",
      "latitude": 38.6948,
      "longitude": -121.288,
      "country_code": "US"
    },
    {
      "city": "State College",
      "latitude": 40.7909,
      "longitude": -77.8568,
      "country_code": "US"
    },
    {
      "city": "Koudougou",
      "latitude": 12.25,
      "longitude": -2.3667,
      "country_code": "BF"
    },
    {
      "city": "Dārayyā",
      "latitude": 33.4589,
      "longitude": 36.2372,
      "country_code": "SY"
    },
    {
      "city": "Lokossa",
      "latitude": 6.615,
      "longitude": 1.715,
      "country_code": "BJ"
    },
    {
      "city": "Salina Cruz",
      "latitude": 16.1671,
      "longitude": -95.2,
      "country_code": "MX"
    },
    {
      "city": "Concepción",
      "latitude": -23.4025,
      "longitude": -57.4414,
      "country_code": "PY"
    },
    {
      "city": "Jalpa de Méndez",
      "latitude": 18.1764,
      "longitude": -93.0631,
      "country_code": "MX"
    },
    {
      "city": "Mardin",
      "latitude": 37.3167,
      "longitude": 40.7378,
      "country_code": "TR"
    },
    {
      "city": "Nakhon Sawan",
      "latitude": 15.7133,
      "longitude": 100.1353,
      "country_code": "TH"
    },
    {
      "city": "Como",
      "latitude": 45.8103,
      "longitude": 9.0861,
      "country_code": "IT"
    },
    {
      "city": "Nacajuca",
      "latitude": 18.1692,
      "longitude": -93.0197,
      "country_code": "MX"
    },
    {
      "city": "Cárdenas",
      "latitude": 17.983,
      "longitude": -93.367,
      "country_code": "MX"
    },
    {
      "city": "Loznica",
      "latitude": 44.5333,
      "longitude": 19.2258,
      "country_code": "RS"
    },
    {
      "city": "Edgware",
      "latitude": 51.6185,
      "longitude": -0.2729,
      "country_code": "GB"
    },
    {
      "city": "Tucupita",
      "latitude": 9.0575,
      "longitude": -62.0452,
      "country_code": "VE"
    },
    {
      "city": "Nabatîyé",
      "latitude": 33.3833,
      "longitude": 35.45,
      "country_code": "LB"
    },
    {
      "city": "Kanasín",
      "latitude": 20.9344,
      "longitude": -89.5578,
      "country_code": "MX"
    },
    {
      "city": "Ezpeleta",
      "latitude": -34.7517,
      "longitude": -58.2344,
      "country_code": "AR"
    },
    {
      "city": "Derry",
      "latitude": 55.0004,
      "longitude": -7.3333,
      "country_code": "GB"
    },
    {
      "city": "Piatra Neamţ",
      "latitude": 46.9275,
      "longitude": 26.3708,
      "country_code": "RO"
    },
    {
      "city": "Ath Thawrah",
      "latitude": 35.8344,
      "longitude": 38.5464,
      "country_code": "SY"
    },
    {
      "city": "Hawthorne",
      "latitude": 33.9146,
      "longitude": -118.3476,
      "country_code": "US"
    },
    {
      "city": "Lavras",
      "latitude": -21.2453,
      "longitude": -44.9997,
      "country_code": "BR"
    },
    {
      "city": "Avaré",
      "latitude": -23.0986,
      "longitude": -48.9258,
      "country_code": "BR"
    },
    {
      "city": "Busto Arsizio",
      "latitude": 45.612,
      "longitude": 8.8518,
      "country_code": "IT"
    },
    {
      "city": "Maasin",
      "latitude": 10.1333,
      "longitude": 124.85,
      "country_code": "PH"
    },
    {
      "city": "Kouvola",
      "latitude": 60.8681,
      "longitude": 26.7042,
      "country_code": "FI"
    },
    {
      "city": "Kuznetsk",
      "latitude": 53.1167,
      "longitude": 46.6,
      "country_code": "RU"
    },
    {
      "city": "Owariasahi",
      "latitude": 35.2167,
      "longitude": 137.0333,
      "country_code": "JP"
    },
    {
      "city": "Daugavpils",
      "latitude": 55.8714,
      "longitude": 26.5161,
      "country_code": "LV"
    },
    {
      "city": "Ciudad Lerdo",
      "latitude": 25.55,
      "longitude": -103.5167,
      "country_code": "MX"
    },
    {
      "city": "Issy-les-Moulineaux",
      "latitude": 48.8239,
      "longitude": 2.27,
      "country_code": "FR"
    },
    {
      "city": "Pori",
      "latitude": 61.4847,
      "longitude": 21.7972,
      "country_code": "FI"
    },
    {
      "city": "Scunthorpe",
      "latitude": 53.5809,
      "longitude": -0.6502,
      "country_code": "GB"
    },
    {
      "city": "Yambol",
      "latitude": 42.4844,
      "longitude": 26.5086,
      "country_code": "BG"
    },
    {
      "city": "Louga",
      "latitude": 15.6167,
      "longitude": -16.2167,
      "country_code": "SN"
    },
    {
      "city": "Manfalūţ",
      "latitude": 27.3128,
      "longitude": 30.9703,
      "country_code": "EG"
    },
    {
      "city": "Whittier",
      "latitude": 33.9678,
      "longitude": -118.0188,
      "country_code": "US"
    },
    {
      "city": "Clifton",
      "latitude": 40.8631,
      "longitude": -74.1575,
      "country_code": "US"
    },
    {
      "city": "Puerto Maldonado",
      "latitude": -12.6,
      "longitude": -69.1833,
      "country_code": "PE"
    },
    {
      "city": "Heṭauḍā",
      "latitude": 27.4167,
      "longitude": 85.0333,
      "country_code": "NP"
    },
    {
      "city": "Formosa",
      "latitude": -15.5395,
      "longitude": -47.34,
      "country_code": "BR"
    },
    {
      "city": "Chaguanas",
      "latitude": 10.5144,
      "longitude": -61.4075,
      "country_code": "TT"
    },
    {
      "city": "Cunduacán",
      "latitude": 18.0667,
      "longitude": -93.1667,
      "country_code": "MX"
    },
    {
      "city": "Chimaltenango",
      "latitude": 14.662,
      "longitude": -90.82,
      "country_code": "GT"
    },
    {
      "city": "Pazardzhik",
      "latitude": 42.1892,
      "longitude": 24.3317,
      "country_code": "BG"
    },
    {
      "city": "Uman’",
      "latitude": 48.75,
      "longitude": 30.2167,
      "country_code": "UA"
    },
    {
      "city": "Nagaoka",
      "latitude": 34.9267,
      "longitude": 135.6956,
      "country_code": "JP"
    },
    {
      "city": "Nazareth",
      "latitude": 32.7021,
      "longitude": 35.2978,
      "country_code": "IL"
    },
    {
      "city": "Ivanteyevka",
      "latitude": 55.97,
      "longitude": 37.92,
      "country_code": "RU"
    },
    {
      "city": "Tucuruí",
      "latitude": -3.68,
      "longitude": -49.72,
      "country_code": "BR"
    },
    {
      "city": "Chervonohrad",
      "latitude": 50.3822,
      "longitude": 24.2275,
      "country_code": "UA"
    },
    {
      "city": "Cozumel",
      "latitude": 20.5104,
      "longitude": -86.9493,
      "country_code": "MX"
    },
    {
      "city": "Cukai",
      "latitude": 4.2332,
      "longitude": 103.4479,
      "country_code": "MY"
    },
    {
      "city": "Mbarara",
      "latitude": -0.5996,
      "longitude": 30.65,
      "country_code": "UG"
    },
    {
      "city": "Champigny-sur-Marne",
      "latitude": 48.8172,
      "longitude": 2.5156,
      "country_code": "FR"
    },
    {
      "city": "Lucerne",
      "latitude": 47.0523,
      "longitude": 8.3059,
      "country_code": "CH"
    },
    {
      "city": "Mitrovicë",
      "latitude": 42.8833,
      "longitude": 20.8667,
      "country_code": "XK"
    },
    {
      "city": "Cabo San Lucas",
      "latitude": 22.8897,
      "longitude": -109.9156,
      "country_code": "MX"
    },
    {
      "city": "Rivera",
      "latitude": -30.9025,
      "longitude": -55.5506,
      "country_code": "UY"
    },
    {
      "city": "Kunitachi",
      "latitude": 35.6839,
      "longitude": 139.4414,
      "country_code": "JP"
    },
    {
      "city": "Saint-Ouen",
      "latitude": 48.9123,
      "longitude": 2.3342,
      "country_code": "FR"
    },
    {
      "city": "Ouidah",
      "latitude": 6.3604,
      "longitude": 2.09,
      "country_code": "BJ"
    },
    {
      "city": "Newmarket",
      "latitude": 44.05,
      "longitude": -79.4667,
      "country_code": "CA"
    },
    {
      "city": "Bitola",
      "latitude": 41.0319,
      "longitude": 21.3347,
      "country_code": "MK"
    },
    {
      "city": "Itumbiara",
      "latitude": -18.3996,
      "longitude": -49.21,
      "country_code": "BR"
    },
    {
      "city": "Milpitas",
      "latitude": 37.4339,
      "longitude": -121.8921,
      "country_code": "US"
    },
    {
      "city": "Pernik",
      "latitude": 42.6097,
      "longitude": 23.0308,
      "country_code": "BG"
    },
    {
      "city": "Clichy",
      "latitude": 48.9044,
      "longitude": 2.3064,
      "country_code": "FR"
    },
    {
      "city": "Phuket",
      "latitude": 7.8881,
      "longitude": 98.3975,
      "country_code": "TH"
    },
    {
      "city": "Ho",
      "latitude": 6.6114,
      "longitude": 0.4703,
      "country_code": "GH"
    },
    {
      "city": "West Bromwich",
      "latitude": 52.519,
      "longitude": -1.995,
      "country_code": "GB"
    },
    {
      "city": "Alhambra",
      "latitude": 34.084,
      "longitude": -118.1355,
      "country_code": "US"
    },
    {
      "city": "Žilina",
      "latitude": 49.2167,
      "longitude": 18.7333,
      "country_code": "SK"
    },
    {
      "city": "Reşiţa",
      "latitude": 45.297,
      "longitude": 21.8865,
      "country_code": "RO"
    },
    {
      "city": "Shinkai",
      "latitude": 35.8367,
      "longitude": 139.5803,
      "country_code": "JP"
    },
    {
      "city": "Chatham",
      "latitude": 51.37,
      "longitude": 0.52,
      "country_code": "GB"
    },
    {
      "city": "Rueil-Malmaison",
      "latitude": 48.876,
      "longitude": 2.181,
      "country_code": "FR"
    },
    {
      "city": "Antsiran̈ana",
      "latitude": -12.2765,
      "longitude": 49.3115,
      "country_code": "MG"
    },
    {
      "city": "Dudley",
      "latitude": 52.508,
      "longitude": -2.089,
      "country_code": "GB"
    },
    {
      "city": "Itaúna",
      "latitude": -20.0753,
      "longitude": -44.5764,
      "country_code": "BR"
    },
    {
      "city": "Ban Talat Rangsit",
      "latitude": 13.987,
      "longitude": 100.6095,
      "country_code": "TH"
    },
    {
      "city": "Lodwar",
      "latitude": 3.1167,
      "longitude": 35.6,
      "country_code": "KE"
    },
    {
      "city": "Târgu Jiu",
      "latitude": 45.0342,
      "longitude": 23.2747,
      "country_code": "RO"
    },
    {
      "city": "Zacatlán",
      "latitude": 19.9319,
      "longitude": -97.96,
      "country_code": "MX"
    },
    {
      "city": "Upper Darby",
      "latitude": 39.949,
      "longitude": -75.2892,
      "country_code": "US"
    },
    {
      "city": "Abomey",
      "latitude": 7.1853,
      "longitude": 1.9914,
      "country_code": "BJ"
    },
    {
      "city": "Mountain View",
      "latitude": 37.4,
      "longitude": -122.0796,
      "country_code": "US"
    },
    {
      "city": "Blagoevgrad",
      "latitude": 42.0219,
      "longitude": 23.0975,
      "country_code": "BG"
    },
    {
      "city": "Kasserine",
      "latitude": 35.1804,
      "longitude": 8.83,
      "country_code": "TN"
    },
    {
      "city": "Elbasan",
      "latitude": 41.1125,
      "longitude": 20.0822,
      "country_code": "AL"
    },
    {
      "city": "Al Muḩarraq",
      "latitude": 26.25,
      "longitude": 50.6167,
      "country_code": "BH"
    },
    {
      "city": "White Rock",
      "latitude": 49.025,
      "longitude": -122.8028,
      "country_code": "CA"
    },
    {
      "city": "Néa Ionía",
      "latitude": 38.0333,
      "longitude": 23.75,
      "country_code": "GR"
    },
    {
      "city": "Kayes",
      "latitude": 14.45,
      "longitude": -11.4167,
      "country_code": "ML"
    },
    {
      "city": "São Mateus",
      "latitude": -18.7201,
      "longitude": -39.8589,
      "country_code": "BR"
    },
    {
      "city": "South Shields",
      "latitude": 54.995,
      "longitude": -1.43,
      "country_code": "GB"
    },
    {
      "city": "Paisley",
      "latitude": 55.8466,
      "longitude": -4.4236,
      "country_code": "GB"
    },
    {
      "city": "Weston-super-Mare",
      "latitude": 51.346,
      "longitude": -2.977,
      "country_code": "GB"
    },
    {
      "city": "Goiana",
      "latitude": -7.5606,
      "longitude": -35.0025,
      "country_code": "BR"
    },
    {
      "city": "Bilecik",
      "latitude": 40.1431,
      "longitude": 29.9792,
      "country_code": "TR"
    },
    {
      "city": "Juchitán de Zaragoza",
      "latitude": 16.4333,
      "longitude": -95.0194,
      "country_code": "MX"
    },
    {
      "city": "Buena Park",
      "latitude": 33.8572,
      "longitude": -118.0046,
      "country_code": "US"
    },
    {
      "city": "Saint-Maur-des-Fossés",
      "latitude": 48.7994,
      "longitude": 2.4997,
      "country_code": "FR"
    },
    {
      "city": "Hakkari",
      "latitude": 37.5744,
      "longitude": 43.7408,
      "country_code": "TR"
    },
    {
      "city": "Somerville",
      "latitude": 42.3908,
      "longitude": -71.1013,
      "country_code": "US"
    },
    {
      "city": "Chalándri",
      "latitude": 38.0167,
      "longitude": 23.8,
      "country_code": "GR"
    },
    {
      "city": "Bury",
      "latitude": 53.593,
      "longitude": -2.298,
      "country_code": "GB"
    },
    {
      "city": "Três Lagoas",
      "latitude": -20.7876,
      "longitude": -51.7034,
      "country_code": "BR"
    },
    {
      "city": "Jataí",
      "latitude": -17.8794,
      "longitude": -51.7217,
      "country_code": "BR"
    },
    {
      "city": "Gravesend",
      "latitude": 51.4415,
      "longitude": 0.3685,
      "country_code": "GB"
    },
    {
      "city": "Avilés",
      "latitude": 43.5561,
      "longitude": -5.9222,
      "country_code": "ES"
    },
    {
      "city": "Deerfield Beach",
      "latitude": 26.305,
      "longitude": -80.1277,
      "country_code": "US"
    },
    {
      "city": "Târgovişte",
      "latitude": 44.9244,
      "longitude": 25.4572,
      "country_code": "RO"
    },
    {
      "city": "Altamira",
      "latitude": -3.1996,
      "longitude": -52.21,
      "country_code": "BR"
    },
    {
      "city": "Galway",
      "latitude": 53.2729,
      "longitude": -9.0418,
      "country_code": "IE"
    },
    {
      "city": "Natitingou",
      "latitude": 10.3204,
      "longitude": 1.39,
      "country_code": "BJ"
    },
    {
      "city": "São João del Rei",
      "latitude": -21.13,
      "longitude": -44.25,
      "country_code": "BR"
    },
    {
      "city": "Barreiro",
      "latitude": 38.6609,
      "longitude": -9.0733,
      "country_code": "PT"
    },
    {
      "city": "Paysandú",
      "latitude": -32.32,
      "longitude": -58.0756,
      "country_code": "UY"
    },
    {
      "city": "Cicero",
      "latitude": 41.8445,
      "longitude": -87.7593,
      "country_code": "US"
    },
    {
      "city": "Atakpamé",
      "latitude": 7.53,
      "longitude": 1.12,
      "country_code": "TG"
    },
    {
      "city": "Focşani",
      "latitude": 45.6997,
      "longitude": 27.1797,
      "country_code": "RO"
    },
    {
      "city": "Palmerston North",
      "latitude": -40.3549,
      "longitude": 175.6095,
      "country_code": "NZ"
    },
    {
      "city": "Iguatu",
      "latitude": -6.3594,
      "longitude": -39.2986,
      "country_code": "BR"
    },
    {
      "city": "Drancy",
      "latitude": 48.93,
      "longitude": 2.45,
      "country_code": "FR"
    },
    {
      "city": "Ādīgrat",
      "latitude": 14.2667,
      "longitude": 39.45,
      "country_code": "ET"
    },
    {
      "city": "Zuwārah",
      "latitude": 32.9333,
      "longitude": 12.0833,
      "country_code": "LY"
    },
    {
      "city": "Shancheng",
      "latitude": 34.7904,
      "longitude": 116.08,
      "country_code": "CN"
    },
    {
      "city": "Sidi Qacem",
      "latitude": 34.21,
      "longitude": -5.7,
      "country_code": "MA"
    },
    {
      "city": "Puerto Ayacucho",
      "latitude": 5.6631,
      "longitude": -67.6264,
      "country_code": "VE"
    },
    {
      "city": "Lawrence",
      "latitude": 42.7003,
      "longitude": -71.1626,
      "country_code": "US"
    },
    {
      "city": "Erdenet",
      "latitude": 49.0278,
      "longitude": 104.0444,
      "country_code": "MN"
    },
    {
      "city": "Rubí",
      "latitude": 41.4933,
      "longitude": 2.0325,
      "country_code": "ES"
    },
    {
      "city": "Temoaya",
      "latitude": 19.4686,
      "longitude": -99.5933,
      "country_code": "MX"
    },
    {
      "city": "Ouahigouya",
      "latitude": 13.5833,
      "longitude": -2.4167,
      "country_code": "BF"
    },
    {
      "city": "Silver Spring",
      "latitude": 39.0028,
      "longitude": -77.0207,
      "country_code": "US"
    },
    {
      "city": "Nakhon Pathom",
      "latitude": 13.8194,
      "longitude": 100.0581,
      "country_code": "TH"
    },
    {
      "city": "Lowestoft",
      "latitude": 52.48,
      "longitude": 1.75,
      "country_code": "GB"
    },
    {
      "city": "Pau",
      "latitude": 43.3,
      "longitude": -0.37,
      "country_code": "FR"
    },
    {
      "city": "Tejupilco",
      "latitude": 18.9058,
      "longitude": -100.1528,
      "country_code": "MX"
    },
    {
      "city": "Cheyenne",
      "latitude": 41.1351,
      "longitude": -104.79,
      "country_code": "US"
    },
    {
      "city": "Ubon Ratchathani",
      "latitude": 15.2281,
      "longitude": 104.8594,
      "country_code": "TH"
    },
    {
      "city": "Tustin",
      "latitude": 33.7309,
      "longitude": -117.8106,
      "country_code": "US"
    },
    {
      "city": "Lakewood",
      "latitude": 33.8471,
      "longitude": -118.1221,
      "country_code": "US"
    },
    {
      "city": "Carlisle",
      "latitude": 54.891,
      "longitude": -2.944,
      "country_code": "GB"
    },
    {
      "city": "Lisala",
      "latitude": 2.14,
      "longitude": 21.51,
      "country_code": "CD"
    },
    {
      "city": "Szombathely",
      "latitude": 47.2333,
      "longitude": 16.6333,
      "country_code": "HU"
    },
    {
      "city": "Banská Bystrica",
      "latitude": 48.7353,
      "longitude": 19.1453,
      "country_code": "SK"
    },
    {
      "city": "Ra‘ananna",
      "latitude": 32.1833,
      "longitude": 34.8667,
      "country_code": "IL"
    },
    {
      "city": "Harrogate",
      "latitude": 53.9919,
      "longitude": -1.5378,
      "country_code": "GB"
    },
    {
      "city": "Aveiro",
      "latitude": 40.6389,
      "longitude": -8.6553,
      "country_code": "PT"
    },
    {
      "city": "Tambacounda",
      "latitude": 13.7689,
      "longitude": -13.6672,
      "country_code": "SN"
    },
    {
      "city": "Newcastle under Lyme",
      "latitude": 53.0109,
      "longitude": -2.2278,
      "country_code": "GB"
    },
    {
      "city": "Inowrocław",
      "latitude": 52.7958,
      "longitude": 18.2611,
      "country_code": "PL"
    },
    {
      "city": "New Rochelle",
      "latitude": 40.9305,
      "longitude": -73.7836,
      "country_code": "US"
    },
    {
      "city": "Kensington",
      "latitude": 51.5,
      "longitude": -0.19,
      "country_code": "GB"
    },
    {
      "city": "La Rochelle",
      "latitude": 46.1591,
      "longitude": -1.1517,
      "country_code": "FR"
    },
    {
      "city": "Lebanon",
      "latitude": 40.3412,
      "longitude": -76.4227,
      "country_code": "US"
    },
    {
      "city": "East Kilbride",
      "latitude": 55.7645,
      "longitude": -4.1771,
      "country_code": "GB"
    },
    {
      "city": "Wa",
      "latitude": 10.0667,
      "longitude": -2.5,
      "country_code": "GH"
    },
    {
      "city": "Nitra",
      "latitude": 48.3147,
      "longitude": 18.0875,
      "country_code": "SK"
    },
    {
      "city": "Lomas del Mirador",
      "latitude": -34.6667,
      "longitude": -58.5297,
      "country_code": "AR"
    },
    {
      "city": "Maghāghah",
      "latitude": 28.6483,
      "longitude": 30.8422,
      "country_code": "EG"
    },
    {
      "city": "Mpanda",
      "latitude": -6.3436,
      "longitude": 31.0694,
      "country_code": "TZ"
    },
    {
      "city": "Bacabal",
      "latitude": -4.23,
      "longitude": -44.8,
      "country_code": "BR"
    },
    {
      "city": "Gladbeck",
      "latitude": 51.5713,
      "longitude": 6.9827,
      "country_code": "DE"
    },
    {
      "city": "Sankt Gallen",
      "latitude": 47.4233,
      "longitude": 9.3772,
      "country_code": "CH"
    },
    {
      "city": "Cachoeira do Sul",
      "latitude": -30.03,
      "longitude": -52.91,
      "country_code": "BR"
    },
    {
      "city": "Campo Mourão",
      "latitude": -24.0496,
      "longitude": -52.42,
      "country_code": "BR"
    },
    {
      "city": "Cannes",
      "latitude": 43.5513,
      "longitude": 7.0128,
      "country_code": "FR"
    },
    {
      "city": "Alameda",
      "latitude": 37.767,
      "longitude": -122.2672,
      "country_code": "US"
    },
    {
      "city": "Thornton Heath",
      "latitude": 51.4002,
      "longitude": -0.1086,
      "country_code": "GB"
    },
    {
      "city": "Watsonville",
      "latitude": 36.9206,
      "longitude": -121.7706,
      "country_code": "US"
    },
    {
      "city": "Tāluqān",
      "latitude": 36.7167,
      "longitude": 69.5167,
      "country_code": "AF"
    },
    {
      "city": "Juventino Rosas",
      "latitude": 20.65,
      "longitude": -101,
      "country_code": "MX"
    },
    {
      "city": "Jinja",
      "latitude": 0.4431,
      "longitude": 33.2128,
      "country_code": "UG"
    },
    {
      "city": "Davis",
      "latitude": 38.5552,
      "longitude": -121.7365,
      "country_code": "US"
    },
    {
      "city": "Berbérati",
      "latitude": 4.2667,
      "longitude": 15.7833,
      "country_code": "CF"
    },
    {
      "city": "Esbjerg",
      "latitude": 55.467,
      "longitude": 8.45,
      "country_code": "DK"
    },
    {
      "city": "Zrenjanin",
      "latitude": 45.3778,
      "longitude": 20.3861,
      "country_code": "RS"
    },
    {
      "city": "Las Piedras",
      "latitude": -34.7167,
      "longitude": -56.2167,
      "country_code": "UY"
    },
    {
      "city": "Surt",
      "latitude": 31.2,
      "longitude": 16.6,
      "country_code": "LY"
    },
    {
      "city": "Tamazunchale",
      "latitude": 21.2667,
      "longitude": -98.7833,
      "country_code": "MX"
    },
    {
      "city": "Pančevo",
      "latitude": 44.8739,
      "longitude": 20.6519,
      "country_code": "RS"
    },
    {
      "city": "Chiryū",
      "latitude": 35,
      "longitude": 137.1167,
      "country_code": "JP"
    },
    {
      "city": "Abéché",
      "latitude": 13.8331,
      "longitude": 20.8347,
      "country_code": "TD"
    },
    {
      "city": "Bellflower",
      "latitude": 33.888,
      "longitude": -118.1271,
      "country_code": "US"
    },
    {
      "city": "Ashford",
      "latitude": 51.1465,
      "longitude": 0.8676,
      "country_code": "GB"
    },
    {
      "city": "Bokhtar",
      "latitude": 37.8364,
      "longitude": 68.7803,
      "country_code": "TJ"
    },
    {
      "city": "Musashimurayama",
      "latitude": 35.7547,
      "longitude": 139.3875,
      "country_code": "JP"
    },
    {
      "city": "Nek’emtē",
      "latitude": 9.0905,
      "longitude": 36.53,
      "country_code": "ET"
    },
    {
      "city": "Calais",
      "latitude": 50.9481,
      "longitude": 1.8564,
      "country_code": "FR"
    },
    {
      "city": "Tamanrasset",
      "latitude": 22.785,
      "longitude": 5.5228,
      "country_code": "DZ"
    },
    {
      "city": "Ramla",
      "latitude": 31.9318,
      "longitude": 34.8736,
      "country_code": "IL"
    },
    {
      "city": "Montrouge",
      "latitude": 48.8172,
      "longitude": 2.3219,
      "country_code": "FR"
    },
    {
      "city": "Zadar",
      "latitude": 44.1167,
      "longitude": 15.2167,
      "country_code": "HR"
    },
    {
      "city": "Southall",
      "latitude": 51.5121,
      "longitude": -0.3779,
      "country_code": "GB"
    },
    {
      "city": "Guamúchil",
      "latitude": 25.4639,
      "longitude": -108.0794,
      "country_code": "MX"
    },
    {
      "city": "Quảng Trị",
      "latitude": 16.7504,
      "longitude": 107.2,
      "country_code": "VN"
    },
    {
      "city": "Antibes",
      "latitude": 43.5808,
      "longitude": 7.1239,
      "country_code": "FR"
    },
    {
      "city": "Zlín",
      "latitude": 49.2331,
      "longitude": 17.6669,
      "country_code": "CZ"
    },
    {
      "city": "Paracatu",
      "latitude": -17.2217,
      "longitude": -46.875,
      "country_code": "BR"
    },
    {
      "city": "Bistriţa",
      "latitude": 47.1333,
      "longitude": 24.4833,
      "country_code": "RO"
    },
    {
      "city": "Tissemsilt",
      "latitude": 35.6072,
      "longitude": 1.8106,
      "country_code": "DZ"
    },
    {
      "city": "Pine Hills",
      "latitude": 28.5818,
      "longitude": -81.4693,
      "country_code": "US"
    },
    {
      "city": "Joensuu",
      "latitude": 62.6,
      "longitude": 29.7639,
      "country_code": "FI"
    },
    {
      "city": "Bella Vista",
      "latitude": -34.5333,
      "longitude": -58.6667,
      "country_code": "AR"
    },
    {
      "city": "Rugby",
      "latitude": 52.37,
      "longitude": -1.26,
      "country_code": "GB"
    },
    {
      "city": "Darhan",
      "latitude": 49.4689,
      "longitude": 105.9575,
      "country_code": "MN"
    },
    {
      "city": "Centreville",
      "latitude": 38.8391,
      "longitude": -77.4388,
      "country_code": "US"
    },
    {
      "city": "Guasave",
      "latitude": 25.5744,
      "longitude": -108.4706,
      "country_code": "MX"
    },
    {
      "city": "Teyateyaneng",
      "latitude": -29.15,
      "longitude": 27.7333,
      "country_code": "LS"
    },
    {
      "city": "Burton upon Trent",
      "latitude": 52.8019,
      "longitude": -1.6367,
      "country_code": "GB"
    },
    {
      "city": "Karlstad",
      "latitude": 59.3671,
      "longitude": 13.4999,
      "country_code": "SE"
    },
    {
      "city": "Uxbridge",
      "latitude": 51.5404,
      "longitude": -0.4778,
      "country_code": "GB"
    },
    {
      "city": "Baldwin Park",
      "latitude": 34.0829,
      "longitude": -117.9721,
      "country_code": "US"
    },
    {
      "city": "Rioverde",
      "latitude": 21.93,
      "longitude": -99.98,
      "country_code": "MX"
    },
    {
      "city": "Toledo",
      "latitude": 39.867,
      "longitude": -4.0167,
      "country_code": "ES"
    },
    {
      "city": "Prey Veng",
      "latitude": 11.484,
      "longitude": 105.324,
      "country_code": "KH"
    },
    {
      "city": "Caguas",
      "latitude": 18.2319,
      "longitude": -66.0388,
      "country_code": "PR"
    },
    {
      "city": "Parintins",
      "latitude": -2.61,
      "longitude": -56.74,
      "country_code": "BR"
    },
    {
      "city": "Kiyosu",
      "latitude": 35.2,
      "longitude": 136.85,
      "country_code": "JP"
    },
    {
      "city": "Hekinan",
      "latitude": 34.8833,
      "longitude": 137,
      "country_code": "JP"
    },
    {
      "city": "Crewe",
      "latitude": 53.099,
      "longitude": -2.44,
      "country_code": "GB"
    },
    {
      "city": "Matehuala",
      "latitude": 23.6528,
      "longitude": -100.6444,
      "country_code": "MX"
    },
    {
      "city": "San Andrés",
      "latitude": 12.5847,
      "longitude": -81.7006,
      "country_code": "CO"
    },
    {
      "city": "Ijuí",
      "latitude": -28.3878,
      "longitude": -53.9147,
      "country_code": "BR"
    },
    {
      "city": "Naxçıvan",
      "latitude": 39.2089,
      "longitude": 45.4122,
      "country_code": "AZ"
    },
    {
      "city": "Garissa",
      "latitude": -0.4569,
      "longitude": 39.6583,
      "country_code": "KE"
    },
    {
      "city": "Manokwari",
      "latitude": -0.8711,
      "longitude": 134.0693,
      "country_code": "ID"
    },
    {
      "city": "Masvingo",
      "latitude": -20.0744,
      "longitude": 30.8328,
      "country_code": "ZW"
    },
    {
      "city": "Vincennes",
      "latitude": 48.8478,
      "longitude": 2.4392,
      "country_code": "FR"
    },
    {
      "city": "Assab",
      "latitude": 13.0078,
      "longitude": 42.7411,
      "country_code": "ER"
    },
    {
      "city": "Gosport",
      "latitude": 50.7948,
      "longitude": -1.1243,
      "country_code": "GB"
    },
    {
      "city": "Wandsworth",
      "latitude": 51.455,
      "longitude": -0.192,
      "country_code": "GB"
    },
    {
      "city": "Pôrto União",
      "latitude": -26.2396,
      "longitude": -51.08,
      "country_code": "BR"
    },
    {
      "city": "Salima",
      "latitude": -13.7829,
      "longitude": 34.4333,
      "country_code": "MW"
    },
    {
      "city": "Tulcea",
      "latitude": 45.19,
      "longitude": 28.8,
      "country_code": "RO"
    },
    {
      "city": "Birobidzhan",
      "latitude": 48.7833,
      "longitude": 132.9333,
      "country_code": "RU"
    },
    {
      "city": "Tsurugashima",
      "latitude": 35.9344,
      "longitude": 139.3931,
      "country_code": "JP"
    },
    {
      "city": "Yoshikawa",
      "latitude": 35.8911,
      "longitude": 139.8414,
      "country_code": "JP"
    },
    {
      "city": "Cabadbaran",
      "latitude": 9.1228,
      "longitude": 125.5346,
      "country_code": "PH"
    },
    {
      "city": "Kirtipur",
      "latitude": 27.6667,
      "longitude": 85.2833,
      "country_code": "NP"
    },
    {
      "city": "Irecê",
      "latitude": -11.3042,
      "longitude": -41.8558,
      "country_code": "BR"
    },
    {
      "city": "Yawata-shimizui",
      "latitude": 34.8756,
      "longitude": 135.7078,
      "country_code": "JP"
    },
    {
      "city": "Frontera",
      "latitude": 26.926,
      "longitude": -101.449,
      "country_code": "MX"
    },
    {
      "city": "Neuilly-sur-Seine",
      "latitude": 48.8881,
      "longitude": 2.2686,
      "country_code": "FR"
    },
    {
      "city": "Farāh",
      "latitude": 32.3436,
      "longitude": 62.1194,
      "country_code": "AF"
    },
    {
      "city": "Warzat",
      "latitude": 30.9167,
      "longitude": -6.9167,
      "country_code": "MA"
    },
    {
      "city": "Finchley",
      "latitude": 51.599,
      "longitude": -0.187,
      "country_code": "GB"
    },
    {
      "city": "Monastir",
      "latitude": 35.7307,
      "longitude": 10.7673,
      "country_code": "TN"
    },
    {
      "city": "Camden",
      "latitude": 39.9362,
      "longitude": -75.1073,
      "country_code": "US"
    },
    {
      "city": "Evanston",
      "latitude": 42.0463,
      "longitude": -87.6942,
      "country_code": "US"
    },
    {
      "city": "Havířov",
      "latitude": 49.7778,
      "longitude": 18.4228,
      "country_code": "CZ"
    },
    {
      "city": "Skien",
      "latitude": 59.2096,
      "longitude": 9.609,
      "country_code": "NO"
    },
    {
      "city": "Noisy-le-Grand",
      "latitude": 48.8478,
      "longitude": 2.5528,
      "country_code": "FR"
    },
    {
      "city": "Kismaayo",
      "latitude": -0.3603,
      "longitude": 42.5489,
      "country_code": "SO"
    },
    {
      "city": "San Juan",
      "latitude": 18.807,
      "longitude": -71.229,
      "country_code": "DO"
    },
    {
      "city": "Debre Mark’os",
      "latitude": 10.34,
      "longitude": 37.72,
      "country_code": "ET"
    },
    {
      "city": "Dabou",
      "latitude": 5.3256,
      "longitude": -4.3767,
      "country_code": "CI"
    },
    {
      "city": "Şa‘dah",
      "latitude": 16.9358,
      "longitude": 43.7644,
      "country_code": "YE"
    },
    {
      "city": "Inverness",
      "latitude": 57.4781,
      "longitude": -4.2233,
      "country_code": "GB"
    },
    {
      "city": "Feltham",
      "latitude": 51.4496,
      "longitude": -0.4089,
      "country_code": "GB"
    },
    {
      "city": "Lappeenranta",
      "latitude": 61.0583,
      "longitude": 28.1861,
      "country_code": "FI"
    },
    {
      "city": "Thohoyandou",
      "latitude": -22.95,
      "longitude": 30.4833,
      "country_code": "ZA"
    },
    {
      "city": "Chingford",
      "latitude": 51.631,
      "longitude": 0.016,
      "country_code": "GB"
    },
    {
      "city": "New Britain",
      "latitude": 41.6758,
      "longitude": -72.7862,
      "country_code": "US"
    },
    {
      "city": "Ārba Minch’",
      "latitude": 6.04,
      "longitude": 37.55,
      "country_code": "ET"
    },
    {
      "city": "Abancay",
      "latitude": -13.6333,
      "longitude": -72.8833,
      "country_code": "PE"
    },
    {
      "city": "Toyoake",
      "latitude": 35.0625,
      "longitude": 137.0089,
      "country_code": "JP"
    },
    {
      "city": "Veliko Tarnovo",
      "latitude": 43.0822,
      "longitude": 25.6317,
      "country_code": "BG"
    },
    {
      "city": "Ivry-sur-Seine",
      "latitude": 48.8078,
      "longitude": 2.3747,
      "country_code": "FR"
    },
    {
      "city": "Wilde",
      "latitude": -34.7,
      "longitude": -58.3167,
      "country_code": "AR"
    },
    {
      "city": "Pawtucket",
      "latitude": 41.8744,
      "longitude": -71.3743,
      "country_code": "US"
    },
    {
      "city": "Čačak",
      "latitude": 43.8914,
      "longitude": 20.3497,
      "country_code": "RS"
    },
    {
      "city": "La Chorrera",
      "latitude": 8.8792,
      "longitude": -79.7822,
      "country_code": "PA"
    },
    {
      "city": "Washington",
      "latitude": 54.9,
      "longitude": -1.52,
      "country_code": "GB"
    },
    {
      "city": "Lauderhill",
      "latitude": 26.1605,
      "longitude": -80.2242,
      "country_code": "US"
    },
    {
      "city": "Balsas",
      "latitude": -7.5325,
      "longitude": -46.0356,
      "country_code": "BR"
    },
    {
      "city": "Matara",
      "latitude": 5.949,
      "longitude": 80.5428,
      "country_code": "LK"
    },
    {
      "city": "Al Qūşīyah",
      "latitude": 27.4403,
      "longitude": 30.8183,
      "country_code": "EG"
    },
    {
      "city": "Szolnok",
      "latitude": 47.1747,
      "longitude": 20.1764,
      "country_code": "HU"
    },
    {
      "city": "Mamou",
      "latitude": 10.3736,
      "longitude": -12.0847,
      "country_code": "GN"
    },
    {
      "city": "Slatina",
      "latitude": 44.4297,
      "longitude": 24.3642,
      "country_code": "RO"
    },
    {
      "city": "Youssoufia",
      "latitude": 32.25,
      "longitude": -8.53,
      "country_code": "MA"
    },
    {
      "city": "Bitlis",
      "latitude": 38.4,
      "longitude": 42.1167,
      "country_code": "TR"
    },
    {
      "city": "Ajaccio",
      "latitude": 41.9267,
      "longitude": 8.7369,
      "country_code": "FR"
    },
    {
      "city": "Maidenhead",
      "latitude": 51.5217,
      "longitude": -0.7177,
      "country_code": "GB"
    },
    {
      "city": "Kasese",
      "latitude": 0.23,
      "longitude": 29.9883,
      "country_code": "UG"
    },
    {
      "city": "Phitsanulok",
      "latitude": 16.8158,
      "longitude": 100.2636,
      "country_code": "TH"
    },
    {
      "city": "Comonfort",
      "latitude": 20.7167,
      "longitude": -100.7667,
      "country_code": "MX"
    },
    {
      "city": "Misantla",
      "latitude": 19.9333,
      "longitude": -96.85,
      "country_code": "MX"
    },
    {
      "city": "Zinjibār",
      "latitude": 13.1283,
      "longitude": 45.3803,
      "country_code": "YE"
    },
    {
      "city": "Oroquieta",
      "latitude": 8.4833,
      "longitude": 123.8,
      "country_code": "PH"
    },
    {
      "city": "New Westminster",
      "latitude": 49.2069,
      "longitude": -122.9111,
      "country_code": "CA"
    },
    {
      "city": "Fujiidera",
      "latitude": 34.5747,
      "longitude": 135.5975,
      "country_code": "JP"
    },
    {
      "city": "Kumanovo",
      "latitude": 42.1403,
      "longitude": 21.7136,
      "country_code": "MK"
    },
    {
      "city": "Giv‘atayim",
      "latitude": 32.0697,
      "longitude": 34.8117,
      "country_code": "IL"
    },
    {
      "city": "Valle Hermoso",
      "latitude": 25.6736,
      "longitude": -97.8144,
      "country_code": "MX"
    },
    {
      "city": "Mindelo",
      "latitude": 16.8914,
      "longitude": -24.988,
      "country_code": "CV"
    },
    {
      "city": "Chiang Rai",
      "latitude": 19.9094,
      "longitude": 99.8275,
      "country_code": "TH"
    },
    {
      "city": "Āksum",
      "latitude": 14.1284,
      "longitude": 38.7173,
      "country_code": "ET"
    },
    {
      "city": "Benalmádena",
      "latitude": 36.5969,
      "longitude": -4.5535,
      "country_code": "ES"
    },
    {
      "city": "Wimbledon",
      "latitude": 51.422,
      "longitude": -0.208,
      "country_code": "GB"
    },
    {
      "city": "Sunyani",
      "latitude": 7.336,
      "longitude": -2.336,
      "country_code": "GH"
    },
    {
      "city": "Liepāja",
      "latitude": 56.5083,
      "longitude": 21.0111,
      "country_code": "LV"
    },
    {
      "city": "Loughborough",
      "latitude": 52.7705,
      "longitude": -1.2046,
      "country_code": "GB"
    },
    {
      "city": "Colonia del Sol",
      "latitude": 22.9125,
      "longitude": -109.9208,
      "country_code": "MX"
    },
    {
      "city": "Courcouronnes",
      "latitude": 48.6239,
      "longitude": 2.4294,
      "country_code": "FR"
    },
    {
      "city": "Sagaing",
      "latitude": 21.8822,
      "longitude": 95.9786,
      "country_code": "MM"
    },
    {
      "city": "Wilmington",
      "latitude": 39.7415,
      "longitude": -75.5413,
      "country_code": "US"
    },
    {
      "city": "Thakhèk",
      "latitude": 17.4,
      "longitude": 104.8,
      "country_code": "LA"
    },
    {
      "city": "Nizwá",
      "latitude": 22.9333,
      "longitude": 57.5333,
      "country_code": "OM"
    },
    {
      "city": "Tynemouth",
      "latitude": 55.017,
      "longitude": -1.423,
      "country_code": "GB"
    },
    {
      "city": "Vushtrri",
      "latitude": 42.8222,
      "longitude": 20.9694,
      "country_code": "XK"
    },
    {
      "city": "Walsall",
      "latitude": 52.58,
      "longitude": -1.98,
      "country_code": "GB"
    },
    {
      "city": "Moquegua",
      "latitude": -17.2,
      "longitude": -70.9333,
      "country_code": "PE"
    },
    {
      "city": "Itapeva",
      "latitude": -23.9822,
      "longitude": -48.8756,
      "country_code": "BR"
    },
    {
      "city": "Lynwood",
      "latitude": 33.924,
      "longitude": -118.2017,
      "country_code": "US"
    },
    {
      "city": "Castellammare di Stabia",
      "latitude": 40.7,
      "longitude": 14.4833,
      "country_code": "IT"
    },
    {
      "city": "Rochester",
      "latitude": 51.375,
      "longitude": 0.5,
      "country_code": "GB"
    },
    {
      "city": "Georgiyevsk",
      "latitude": 44.15,
      "longitude": 43.4667,
      "country_code": "RU"
    },
    {
      "city": "Vénissieux",
      "latitude": 45.6978,
      "longitude": 4.8867,
      "country_code": "FR"
    },
    {
      "city": "Passaic",
      "latitude": 40.8574,
      "longitude": -74.1282,
      "country_code": "US"
    },
    {
      "city": "Guaynabo",
      "latitude": 18.3839,
      "longitude": -66.1134,
      "country_code": "PR"
    },
    {
      "city": "Valença",
      "latitude": -13.3703,
      "longitude": -39.0731,
      "country_code": "BR"
    },
    {
      "city": "Santa Inês",
      "latitude": -3.6667,
      "longitude": -45.38,
      "country_code": "BR"
    },
    {
      "city": "Vratsa",
      "latitude": 43.2,
      "longitude": 23.55,
      "country_code": "BG"
    },
    {
      "city": "Putrajaya",
      "latitude": 2.914,
      "longitude": 101.7019,
      "country_code": "MY"
    },
    {
      "city": "Santo Ângelo",
      "latitude": -28.3,
      "longitude": -54.28,
      "country_code": "BR"
    },
    {
      "city": "Cergy",
      "latitude": 49.0361,
      "longitude": 2.0631,
      "country_code": "FR"
    },
    {
      "city": "Debre Birhan",
      "latitude": 9.6804,
      "longitude": 39.53,
      "country_code": "ET"
    },
    {
      "city": "Borongan",
      "latitude": 11.6,
      "longitude": 125.4333,
      "country_code": "PH"
    },
    {
      "city": "Itapetinga",
      "latitude": -15.2489,
      "longitude": -40.2478,
      "country_code": "BR"
    },
    {
      "city": "Playas de Rosarito",
      "latitude": 32.3422,
      "longitude": -117.0561,
      "country_code": "MX"
    },
    {
      "city": "Acton",
      "latitude": 51.5135,
      "longitude": -0.2707,
      "country_code": "GB"
    },
    {
      "city": "Bouira",
      "latitude": 36.3783,
      "longitude": 3.8925,
      "country_code": "DZ"
    },
    {
      "city": "Antony",
      "latitude": 48.7539,
      "longitude": 2.2975,
      "country_code": "FR"
    },
    {
      "city": "Mitcham",
      "latitude": 51.4009,
      "longitude": -0.1517,
      "country_code": "GB"
    },
    {
      "city": "San José del Guaviare",
      "latitude": 2.5653,
      "longitude": -72.6386,
      "country_code": "CO"
    },
    {
      "city": "Ponta Delgada",
      "latitude": 37.74,
      "longitude": -25.67,
      "country_code": "PT"
    },
    {
      "city": "Kitamoto",
      "latitude": 36.0269,
      "longitude": 139.53,
      "country_code": "JP"
    },
    {
      "city": "Gävle",
      "latitude": 60.667,
      "longitude": 17.1666,
      "country_code": "SE"
    },
    {
      "city": "Pantin",
      "latitude": 48.8966,
      "longitude": 2.4017,
      "country_code": "FR"
    },
    {
      "city": "L’Aquila",
      "latitude": 42.3504,
      "longitude": 13.39,
      "country_code": "IT"
    },
    {
      "city": "Wrecsam",
      "latitude": 53.046,
      "longitude": -2.993,
      "country_code": "GB"
    },
    {
      "city": "Gurupi",
      "latitude": -11.7292,
      "longitude": -49.0686,
      "country_code": "BR"
    },
    {
      "city": "Villa Domínico",
      "latitude": -34.6917,
      "longitude": -58.3333,
      "country_code": "AR"
    },
    {
      "city": "Şəki",
      "latitude": 41.1919,
      "longitude": 47.1706,
      "country_code": "AZ"
    },
    {
      "city": "Marsá Maţrūḩ",
      "latitude": 31.3333,
      "longitude": 27.2333,
      "country_code": "EG"
    },
    {
      "city": "Waterlooville",
      "latitude": 50.88,
      "longitude": -1.03,
      "country_code": "GB"
    },
    {
      "city": "Buynaksk",
      "latitude": 42.8167,
      "longitude": 47.1167,
      "country_code": "RU"
    },
    {
      "city": "Hämeenlinna",
      "latitude": 61,
      "longitude": 24.4414,
      "country_code": "FI"
    },
    {
      "city": "Gaithersburg",
      "latitude": 39.1346,
      "longitude": -77.2132,
      "country_code": "US"
    },
    {
      "city": "Union City",
      "latitude": 40.7674,
      "longitude": -74.0323,
      "country_code": "US"
    },
    {
      "city": "Picos",
      "latitude": -7.0769,
      "longitude": -41.4669,
      "country_code": "BR"
    },
    {
      "city": "Scarborough",
      "latitude": 54.2773,
      "longitude": -0.4017,
      "country_code": "GB"
    },
    {
      "city": "Caçador",
      "latitude": -26.7753,
      "longitude": -51.015,
      "country_code": "BR"
    },
    {
      "city": "South San Francisco",
      "latitude": 37.6536,
      "longitude": -122.4197,
      "country_code": "US"
    },
    {
      "city": "Timbaúba",
      "latitude": -7.5053,
      "longitude": -35.3183,
      "country_code": "BR"
    },
    {
      "city": "Curvelo",
      "latitude": -18.7564,
      "longitude": -44.4308,
      "country_code": "BR"
    },
    {
      "city": "Manacapuru",
      "latitude": -3.2997,
      "longitude": -60.6206,
      "country_code": "BR"
    },
    {
      "city": "Tecate",
      "latitude": 32.5667,
      "longitude": -116.6331,
      "country_code": "MX"
    },
    {
      "city": "Lào Cai",
      "latitude": 22.4194,
      "longitude": 103.995,
      "country_code": "VN"
    },
    {
      "city": "Farnborough",
      "latitude": 51.29,
      "longitude": -0.75,
      "country_code": "GB"
    },
    {
      "city": "Vaasa",
      "latitude": 63.1,
      "longitude": 21.6167,
      "country_code": "FI"
    },
    {
      "city": "Molepolole",
      "latitude": -24.4066,
      "longitude": 25.4951,
      "country_code": "BW"
    },
    {
      "city": "Potenza",
      "latitude": 40.6333,
      "longitude": 15.8,
      "country_code": "IT"
    },
    {
      "city": "Dimbokro",
      "latitude": 6.6505,
      "longitude": -4.71,
      "country_code": "CI"
    },
    {
      "city": "El Bayadh",
      "latitude": 33.6904,
      "longitude": 1.01,
      "country_code": "DZ"
    },
    {
      "city": "Valle de Bravo",
      "latitude": 19.1925,
      "longitude": -100.1306,
      "country_code": "MX"
    },
    {
      "city": "Mount Vernon",
      "latitude": 40.9136,
      "longitude": -73.8291,
      "country_code": "US"
    },
    {
      "city": "Amozoc",
      "latitude": 19.0333,
      "longitude": -98.05,
      "country_code": "MX"
    },
    {
      "city": "Twickenham",
      "latitude": 51.449,
      "longitude": -0.337,
      "country_code": "GB"
    },
    {
      "city": "Stourbridge",
      "latitude": 52.4575,
      "longitude": -2.1479,
      "country_code": "GB"
    },
    {
      "city": "Fryazino",
      "latitude": 55.95,
      "longitude": 38.05,
      "country_code": "RU"
    },
    {
      "city": "Linares",
      "latitude": 24.8597,
      "longitude": -99.5679,
      "country_code": "MX"
    },
    {
      "city": "Streatham",
      "latitude": 51.4279,
      "longitude": -0.1235,
      "country_code": "GB"
    },
    {
      "city": "Barking",
      "latitude": 51.54,
      "longitude": 0.08,
      "country_code": "GB"
    },
    {
      "city": "Épinay-sur-Seine",
      "latitude": 48.9553,
      "longitude": 2.3092,
      "country_code": "FR"
    },
    {
      "city": "Bolgatanga",
      "latitude": 10.7856,
      "longitude": -0.8514,
      "country_code": "GH"
    },
    {
      "city": "Tomigusuku",
      "latitude": 26.1772,
      "longitude": 127.6811,
      "country_code": "JP"
    },
    {
      "city": "Sabinas",
      "latitude": 27.86,
      "longitude": -101.12,
      "country_code": "MX"
    },
    {
      "city": "Prilep",
      "latitude": 41.3464,
      "longitude": 21.5542,
      "country_code": "MK"
    },
    {
      "city": "Sokhumi",
      "latitude": 43.0033,
      "longitude": 41.0153,
      "country_code": "GE"
    },
    {
      "city": "Redondo Beach",
      "latitude": 33.8574,
      "longitude": -118.3766,
      "country_code": "US"
    },
    {
      "city": "Kraljevo",
      "latitude": 43.7234,
      "longitude": 20.687,
      "country_code": "RS"
    },
    {
      "city": "Tamarac",
      "latitude": 26.2056,
      "longitude": -80.2542,
      "country_code": "US"
    },
    {
      "city": "Novi Pazar",
      "latitude": 43.15,
      "longitude": 20.5167,
      "country_code": "RS"
    },
    {
      "city": "Bayburt",
      "latitude": 40.2546,
      "longitude": 40.226,
      "country_code": "TR"
    },
    {
      "city": "Nālūt",
      "latitude": 31.8804,
      "longitude": 10.97,
      "country_code": "LY"
    },
    {
      "city": "Tatabánya",
      "latitude": 47.5862,
      "longitude": 18.3949,
      "country_code": "HU"
    },
    {
      "city": "La Seyne-sur-Mer",
      "latitude": 43.1,
      "longitude": 5.883,
      "country_code": "FR"
    },
    {
      "city": "Acámbaro",
      "latitude": 20.0361,
      "longitude": -100.7314,
      "country_code": "MX"
    },
    {
      "city": "Mazatenango",
      "latitude": 14.5304,
      "longitude": -91.51,
      "country_code": "GT"
    },
    {
      "city": "Trnava",
      "latitude": 48.3777,
      "longitude": 17.5862,
      "country_code": "SK"
    },
    {
      "city": "Caratinga",
      "latitude": -19.79,
      "longitude": -42.14,
      "country_code": "BR"
    },
    {
      "city": "Los Polvorines",
      "latitude": -34.5,
      "longitude": -58.7,
      "country_code": "AR"
    },
    {
      "city": "Kardzhali",
      "latitude": 41.64,
      "longitude": 25.3708,
      "country_code": "BG"
    },
    {
      "city": "Troyes",
      "latitude": 48.2997,
      "longitude": 4.0792,
      "country_code": "FR"
    },
    {
      "city": "Villejuif",
      "latitude": 48.7919,
      "longitude": 2.3636,
      "country_code": "FR"
    },
    {
      "city": "Goz-Beida",
      "latitude": 12.2236,
      "longitude": 21.4144,
      "country_code": "TD"
    },
    {
      "city": "Masaka",
      "latitude": -0.3296,
      "longitude": 31.73,
      "country_code": "UG"
    },
    {
      "city": "Singida",
      "latitude": -4.8186,
      "longitude": 34.7506,
      "country_code": "TZ"
    },
    {
      "city": "Dewsbury",
      "latitude": 53.691,
      "longitude": -1.633,
      "country_code": "GB"
    },
    {
      "city": "Arrecife",
      "latitude": 28.9625,
      "longitude": -13.5506,
      "country_code": "ES"
    },
    {
      "city": "Ioánnina",
      "latitude": 39.6647,
      "longitude": 20.8519,
      "country_code": "GR"
    },
    {
      "city": "Călăraşi",
      "latitude": 44.2,
      "longitude": 27.3333,
      "country_code": "RO"
    },
    {
      "city": "Maisons-Alfort",
      "latitude": 48.8058,
      "longitude": 2.4378,
      "country_code": "FR"
    },
    {
      "city": "La Línea de la Concepción",
      "latitude": 36.1611,
      "longitude": -5.3486,
      "country_code": "ES"
    },
    {
      "city": "Sarcelles",
      "latitude": 48.9956,
      "longitude": 2.3808,
      "country_code": "FR"
    },
    {
      "city": "Vilhena",
      "latitude": -12.7166,
      "longitude": -60.1166,
      "country_code": "BR"
    },
    {
      "city": "Altamira",
      "latitude": 22.3375,
      "longitude": -97.8694,
      "country_code": "MX"
    },
    {
      "city": "Widnes",
      "latitude": 53.363,
      "longitude": -2.728,
      "country_code": "GB"
    },
    {
      "city": "Granollers",
      "latitude": 41.6083,
      "longitude": 2.2889,
      "country_code": "ES"
    },
    {
      "city": "Cobán",
      "latitude": 15.47,
      "longitude": -90.38,
      "country_code": "GT"
    },
    {
      "city": "Schenectady",
      "latitude": 42.8025,
      "longitude": -73.9276,
      "country_code": "US"
    },
    {
      "city": "Cortazar",
      "latitude": 20.483,
      "longitude": -100.933,
      "country_code": "MX"
    },
    {
      "city": "Rundu",
      "latitude": -17.9167,
      "longitude": 19.7667,
      "country_code": "NA"
    },
    {
      "city": "Songkhla",
      "latitude": 7.2061,
      "longitude": 100.5967,
      "country_code": "TH"
    },
    {
      "city": "Solwezi",
      "latitude": -12.1833,
      "longitude": 26.4,
      "country_code": "ZM"
    },
    {
      "city": "Kitale",
      "latitude": 1.0167,
      "longitude": 35,
      "country_code": "KE"
    },
    {
      "city": "As Suwaydā’",
      "latitude": 32.7,
      "longitude": 36.5667,
      "country_code": "SY"
    },
    {
      "city": "Ouezzane",
      "latitude": 34.8,
      "longitude": -5.6,
      "country_code": "MA"
    },
    {
      "city": "Bayonne",
      "latitude": 40.6661,
      "longitude": -74.1141,
      "country_code": "US"
    },
    {
      "city": "Faro",
      "latitude": 37.0167,
      "longitude": -7.9333,
      "country_code": "PT"
    },
    {
      "city": "Faīẕābād",
      "latitude": 37.1298,
      "longitude": 70.5792,
      "country_code": "AF"
    },
    {
      "city": "Sinop",
      "latitude": 42.0267,
      "longitude": 35.1511,
      "country_code": "TR"
    },
    {
      "city": "Yoro",
      "latitude": 15.1333,
      "longitude": -87.1333,
      "country_code": "HN"
    },
    {
      "city": "Pruszków",
      "latitude": 52.1667,
      "longitude": 20.8,
      "country_code": "PL"
    },
    {
      "city": "East Orange",
      "latitude": 40.7651,
      "longitude": -74.2117,
      "country_code": "US"
    },
    {
      "city": "Nagari",
      "latitude": 13.33,
      "longitude": 79.58,
      "country_code": "IN"
    },
    {
      "city": "Latacunga",
      "latitude": -0.9333,
      "longitude": -78.6167,
      "country_code": "EC"
    },
    {
      "city": "Inhambane",
      "latitude": -23.865,
      "longitude": 35.3833,
      "country_code": "MZ"
    },
    {
      "city": "Tsushima",
      "latitude": 35.1833,
      "longitude": 136.7333,
      "country_code": "JP"
    },
    {
      "city": "Taunton",
      "latitude": 51.019,
      "longitude": -3.1,
      "country_code": "GB"
    },
    {
      "city": "Bangor",
      "latitude": 54.66,
      "longitude": -5.67,
      "country_code": "GB"
    },
    {
      "city": "Florence-Graham",
      "latitude": 33.9682,
      "longitude": -118.2447,
      "country_code": "US"
    },
    {
      "city": "Alba Iulia",
      "latitude": 46.0764,
      "longitude": 23.5728,
      "country_code": "RO"
    },
    {
      "city": "Pirapora",
      "latitude": -17.345,
      "longitude": -44.9419,
      "country_code": "BR"
    },
    {
      "city": "Aylesbury",
      "latitude": 51.8168,
      "longitude": -0.8124,
      "country_code": "GB"
    },
    {
      "city": "Sombrerete",
      "latitude": 23.6333,
      "longitude": -103.6397,
      "country_code": "MX"
    },
    {
      "city": "Cayenne",
      "latitude": 4.933,
      "longitude": -52.33,
      "country_code": "GF"
    },
    {
      "city": "Bondy",
      "latitude": 48.9022,
      "longitude": 2.4828,
      "country_code": "FR"
    },
    {
      "city": "Gorno-Altaysk",
      "latitude": 51.96,
      "longitude": 85.96,
      "country_code": "RU"
    },
    {
      "city": "Bragança",
      "latitude": -1.0536,
      "longitude": -46.7656,
      "country_code": "BR"
    },
    {
      "city": "Mukōchō",
      "latitude": 34.9486,
      "longitude": 135.6983,
      "country_code": "JP"
    },
    {
      "city": "Hasuda",
      "latitude": 35.9942,
      "longitude": 139.6622,
      "country_code": "JP"
    },
    {
      "city": "Le Blanc-Mesnil",
      "latitude": 48.9387,
      "longitude": 2.4614,
      "country_code": "FR"
    },
    {
      "city": "São Borja",
      "latitude": -28.6606,
      "longitude": -56.0044,
      "country_code": "BR"
    },
    {
      "city": "Sayama",
      "latitude": 34.5036,
      "longitude": 135.5556,
      "country_code": "JP"
    },
    {
      "city": "Halesowen",
      "latitude": 52.4502,
      "longitude": -2.0509,
      "country_code": "GB"
    },
    {
      "city": "Azua",
      "latitude": 18.454,
      "longitude": -70.729,
      "country_code": "DO"
    },
    {
      "city": "Ełk",
      "latitude": 53.8167,
      "longitude": 22.35,
      "country_code": "PL"
    },
    {
      "city": "Nkhotakota",
      "latitude": -12.9163,
      "longitude": 34.3,
      "country_code": "MW"
    },
    {
      "city": "Kyustendil",
      "latitude": 42.2811,
      "longitude": 22.6889,
      "country_code": "BG"
    },
    {
      "city": "Karakol",
      "latitude": 42.5,
      "longitude": 78.3833,
      "country_code": "KG"
    },
    {
      "city": "Canela",
      "latitude": -29.36,
      "longitude": -50.81,
      "country_code": "BR"
    },
    {
      "city": "Cherbourg",
      "latitude": 49.6504,
      "longitude": -1.65,
      "country_code": "FR"
    },
    {
      "city": "Ruislip",
      "latitude": 51.576,
      "longitude": -0.433,
      "country_code": "GB"
    },
    {
      "city": "Gabrovo",
      "latitude": 42.8711,
      "longitude": 25.315,
      "country_code": "BG"
    },
    {
      "city": "Fussa",
      "latitude": 35.7386,
      "longitude": 139.3267,
      "country_code": "JP"
    },
    {
      "city": "Kratie",
      "latitude": 12.4881,
      "longitude": 106.0188,
      "country_code": "KH"
    },
    {
      "city": "Assen",
      "latitude": 53,
      "longitude": 6.55,
      "country_code": "NL"
    },
    {
      "city": "Beledweyne",
      "latitude": 4.736,
      "longitude": 45.204,
      "country_code": "SO"
    },
    {
      "city": "Royal Tunbridge Wells",
      "latitude": 51.132,
      "longitude": 0.263,
      "country_code": "GB"
    },
    {
      "city": "Brentwood",
      "latitude": 40.7839,
      "longitude": -73.2522,
      "country_code": "US"
    },
    {
      "city": "Maldonado",
      "latitude": -34.9088,
      "longitude": -54.9581,
      "country_code": "UY"
    },
    {
      "city": "Khartsyzk",
      "latitude": 48.0333,
      "longitude": 38.15,
      "country_code": "UA"
    },
    {
      "city": "Wallasey",
      "latitude": 53.4158,
      "longitude": -3.0233,
      "country_code": "GB"
    },
    {
      "city": "Barrow in Furness",
      "latitude": 54.1108,
      "longitude": -3.2261,
      "country_code": "GB"
    },
    {
      "city": "Napier",
      "latitude": -39.4833,
      "longitude": 176.9167,
      "country_code": "NZ"
    },
    {
      "city": "Stryy",
      "latitude": 49.25,
      "longitude": 23.85,
      "country_code": "UA"
    },
    {
      "city": "Sopron",
      "latitude": 47.6833,
      "longitude": 16.5833,
      "country_code": "HU"
    },
    {
      "city": "North Miami",
      "latitude": 25.9007,
      "longitude": -80.1686,
      "country_code": "US"
    },
    {
      "city": "Skokie",
      "latitude": 42.0359,
      "longitude": -87.74,
      "country_code": "US"
    },
    {
      "city": "Telêmaco Borba",
      "latitude": -24.3239,
      "longitude": -50.6156,
      "country_code": "BR"
    },
    {
      "city": "Leskovac",
      "latitude": 42.9981,
      "longitude": 21.9461,
      "country_code": "RS"
    },
    {
      "city": "Santa Rosa",
      "latitude": -27.8708,
      "longitude": -54.4814,
      "country_code": "BR"
    },
    {
      "city": "Tataouine",
      "latitude": 33,
      "longitude": 10.4667,
      "country_code": "TN"
    },
    {
      "city": "Saraburi",
      "latitude": 14.5286,
      "longitude": 100.9114,
      "country_code": "TH"
    },
    {
      "city": "Fontenay-sous-Bois",
      "latitude": 48.8517,
      "longitude": 2.4772,
      "country_code": "FR"
    },
    {
      "city": "Rayong",
      "latitude": 12.6742,
      "longitude": 101.2789,
      "country_code": "TH"
    },
    {
      "city": "Kolda",
      "latitude": 12.8958,
      "longitude": -14.9408,
      "country_code": "SN"
    },
    {
      "city": "Santarém",
      "latitude": 39.2369,
      "longitude": -8.685,
      "country_code": "PT"
    },
    {
      "city": "Suresnes",
      "latitude": 48.87,
      "longitude": 2.22,
      "country_code": "FR"
    },
    {
      "city": "Chornomors’k",
      "latitude": 46.3017,
      "longitude": 30.6569,
      "country_code": "UA"
    },
    {
      "city": "Bobigny",
      "latitude": 48.9106,
      "longitude": 2.4397,
      "country_code": "FR"
    },
    {
      "city": "Puerto Limón",
      "latitude": 10.0022,
      "longitude": -83.084,
      "country_code": "CR"
    },
    {
      "city": "Madang",
      "latitude": -5.2248,
      "longitude": 145.7853,
      "country_code": "PG"
    },
    {
      "city": "Lytkarino",
      "latitude": 55.5833,
      "longitude": 37.8833,
      "country_code": "RU"
    },
    {
      "city": "Rafael Calzada",
      "latitude": -34.7833,
      "longitude": -58.3667,
      "country_code": "AR"
    },
    {
      "city": "Pico Rivera",
      "latitude": 33.9902,
      "longitude": -118.0888,
      "country_code": "US"
    },
    {
      "city": "Kaposvár",
      "latitude": 46.3667,
      "longitude": 17.7833,
      "country_code": "HU"
    },
    {
      "city": "North Bergen",
      "latitude": 40.7938,
      "longitude": -74.0242,
      "country_code": "US"
    },
    {
      "city": "Montebello",
      "latitude": 34.0155,
      "longitude": -118.1108,
      "country_code": "US"
    },
    {
      "city": "Caicó",
      "latitude": -6.4596,
      "longitude": -37.1,
      "country_code": "BR"
    },
    {
      "city": "Bāmyān",
      "latitude": 34.8167,
      "longitude": 67.8167,
      "country_code": "AF"
    },
    {
      "city": "Medenine",
      "latitude": 33.4,
      "longitude": 10.4167,
      "country_code": "TN"
    },
    {
      "city": "Portugalete",
      "latitude": 43.3194,
      "longitude": -3.0196,
      "country_code": "ES"
    },
    {
      "city": "Rovaniemi",
      "latitude": 66.5014,
      "longitude": 25.7347,
      "country_code": "FI"
    },
    {
      "city": "Yala",
      "latitude": 6.5397,
      "longitude": 101.2811,
      "country_code": "TH"
    },
    {
      "city": "Giurgiu",
      "latitude": 43.9,
      "longitude": 25.9667,
      "country_code": "RO"
    },
    {
      "city": "Chambéry",
      "latitude": 45.57,
      "longitude": 5.9118,
      "country_code": "FR"
    },
    {
      "city": "Samut Sakhon",
      "latitude": 13.5486,
      "longitude": 100.2775,
      "country_code": "TH"
    },
    {
      "city": "Janaúba",
      "latitude": -15.8025,
      "longitude": -43.3089,
      "country_code": "BR"
    },
    {
      "city": "Seinäjoki",
      "latitude": 62.7903,
      "longitude": 22.8403,
      "country_code": "FI"
    },
    {
      "city": "Ruhengeri",
      "latitude": -1.4944,
      "longitude": 29.6417,
      "country_code": "RW"
    },
    {
      "city": "Suileng",
      "latitude": 47.246,
      "longitude": 127.106,
      "country_code": "CN"
    },
    {
      "city": "National City",
      "latitude": 32.6654,
      "longitude": -117.0983,
      "country_code": "US"
    },
    {
      "city": "Guanambi",
      "latitude": -14.2233,
      "longitude": -42.7814,
      "country_code": "BR"
    },
    {
      "city": "Benslimane",
      "latitude": 33.6122,
      "longitude": -7.1211,
      "country_code": "MA"
    },
    {
      "city": "Koja",
      "latitude": 26.3643,
      "longitude": 127.8328,
      "country_code": "JP"
    },
    {
      "city": "Ariquemes",
      "latitude": -9.9396,
      "longitude": -63.08,
      "country_code": "BR"
    },
    {
      "city": "Coconut Creek",
      "latitude": 26.2803,
      "longitude": -80.1842,
      "country_code": "US"
    },
    {
      "city": "Bến Tre",
      "latitude": 10.2333,
      "longitude": 106.3833,
      "country_code": "VN"
    },
    {
      "city": "Gaalkacyo",
      "latitude": 6.7697,
      "longitude": 47.4308,
      "country_code": "SO"
    },
    {
      "city": "Limerick",
      "latitude": 52.6653,
      "longitude": -8.6238,
      "country_code": "IE"
    },
    {
      "city": "Yopal",
      "latitude": 5.347,
      "longitude": -72.406,
      "country_code": "CO"
    },
    {
      "city": "Lorient",
      "latitude": 47.75,
      "longitude": -3.36,
      "country_code": "FR"
    },
    {
      "city": "Trang",
      "latitude": 7.5561,
      "longitude": 99.6114,
      "country_code": "TH"
    },
    {
      "city": "Vacaria",
      "latitude": -28.5122,
      "longitude": -50.9339,
      "country_code": "BR"
    },
    {
      "city": "Melo",
      "latitude": -32.3595,
      "longitude": -54.18,
      "country_code": "UY"
    },
    {
      "city": "São Gabriel",
      "latitude": -30.3364,
      "longitude": -54.32,
      "country_code": "BR"
    },
    {
      "city": "Oyem",
      "latitude": 1.6,
      "longitude": 11.5667,
      "country_code": "GA"
    },
    {
      "city": "Lokoja",
      "latitude": 7.8004,
      "longitude": 6.7399,
      "country_code": "NG"
    },
    {
      "city": "Juigalpa",
      "latitude": 12.0833,
      "longitude": -85.4,
      "country_code": "NI"
    },
    {
      "city": "São José de Ribamar",
      "latitude": -2.55,
      "longitude": -44.07,
      "country_code": "BR"
    },
    {
      "city": "Växjö",
      "latitude": 56.8837,
      "longitude": 14.8167,
      "country_code": "SE"
    },
    {
      "city": "La Habra",
      "latitude": 33.9278,
      "longitude": -117.9513,
      "country_code": "US"
    },
    {
      "city": "The Hammocks",
      "latitude": 25.67,
      "longitude": -80.4483,
      "country_code": "US"
    },
    {
      "city": "Malden",
      "latitude": 42.4305,
      "longitude": -71.0576,
      "country_code": "US"
    },
    {
      "city": "Banfora",
      "latitude": 10.6308,
      "longitude": -4.7589,
      "country_code": "BF"
    },
    {
      "city": "San Pedro",
      "latitude": 25.7589,
      "longitude": -102.9844,
      "country_code": "MX"
    },
    {
      "city": "Hamura",
      "latitude": 35.7672,
      "longitude": 139.3111,
      "country_code": "JP"
    },
    {
      "city": "Świdnica",
      "latitude": 50.8438,
      "longitude": 16.4886,
      "country_code": "PL"
    },
    {
      "city": "Uíge",
      "latitude": -7.62,
      "longitude": 15.05,
      "country_code": "AO"
    },
    {
      "city": "Estância",
      "latitude": -11.2683,
      "longitude": -37.4383,
      "country_code": "BR"
    },
    {
      "city": "Arcoverde",
      "latitude": -8.42,
      "longitude": -37.07,
      "country_code": "BR"
    },
    {
      "city": "Zushi",
      "latitude": 35.2956,
      "longitude": 139.5803,
      "country_code": "JP"
    },
    {
      "city": "Temascalcingo",
      "latitude": 19.9147,
      "longitude": -100.0036,
      "country_code": "MX"
    },
    {
      "city": "Hereford",
      "latitude": 52.0565,
      "longitude": -2.716,
      "country_code": "GB"
    },
    {
      "city": "Mbanza Kongo",
      "latitude": -6.2667,
      "longitude": 14.25,
      "country_code": "AO"
    },
    {
      "city": "Veszprém",
      "latitude": 47.1,
      "longitude": 17.9167,
      "country_code": "HU"
    },
    {
      "city": "Itapipoca",
      "latitude": -3.4995,
      "longitude": -39.58,
      "country_code": "BR"
    },
    {
      "city": "Ellesmere Port",
      "latitude": 53.279,
      "longitude": -2.897,
      "country_code": "GB"
    },
    {
      "city": "Serrinha",
      "latitude": -11.6642,
      "longitude": -39.0075,
      "country_code": "BR"
    },
    {
      "city": "South Whittier",
      "latitude": 33.9336,
      "longitude": -118.0311,
      "country_code": "US"
    },
    {
      "city": "Etchojoa",
      "latitude": 26.8667,
      "longitude": -109.65,
      "country_code": "MX"
    },
    {
      "city": "West Allis",
      "latitude": 43.0068,
      "longitude": -88.0296,
      "country_code": "US"
    },
    {
      "city": "Ban Bang Kaeo",
      "latitude": 13.6371,
      "longitude": 100.6636,
      "country_code": "TH"
    },
    {
      "city": "Užice",
      "latitude": 43.85,
      "longitude": 19.85,
      "country_code": "RS"
    },
    {
      "city": "Fountainebleau",
      "latitude": 25.7723,
      "longitude": -80.3458,
      "country_code": "US"
    },
    {
      "city": "Taylorsville",
      "latitude": 40.657,
      "longitude": -111.9493,
      "country_code": "US"
    },
    {
      "city": "Itānagar",
      "latitude": 27.1,
      "longitude": 93.62,
      "country_code": "IN"
    },
    {
      "city": "Romita",
      "latitude": 20.8708,
      "longitude": -101.5169,
      "country_code": "MX"
    },
    {
      "city": "Suharekë",
      "latitude": 42.38,
      "longitude": 20.8219,
      "country_code": "XK"
    },
    {
      "city": "Béja",
      "latitude": 36.7304,
      "longitude": 9.19,
      "country_code": "TN"
    },
    {
      "city": "Klimovsk",
      "latitude": 55.3667,
      "longitude": 37.5333,
      "country_code": "RU"
    },
    {
      "city": "Bungoma",
      "latitude": 0.5666,
      "longitude": 34.5666,
      "country_code": "KE"
    },
    {
      "city": "San José Iturbide",
      "latitude": 21,
      "longitude": -100.3833,
      "country_code": "MX"
    },
    {
      "city": "Monterey Park",
      "latitude": 34.0497,
      "longitude": -118.1326,
      "country_code": "US"
    },
    {
      "city": "Concórdia",
      "latitude": -27.2342,
      "longitude": -52.0278,
      "country_code": "BR"
    },
    {
      "city": "Hod HaSharon",
      "latitude": 32.15,
      "longitude": 34.8833,
      "country_code": "IL"
    },
    {
      "city": "Puteaux",
      "latitude": 48.885,
      "longitude": 2.2389,
      "country_code": "FR"
    },
    {
      "city": "Ródos",
      "latitude": 36.4412,
      "longitude": 28.2225,
      "country_code": "GR"
    },
    {
      "city": "Formiga",
      "latitude": -20.4644,
      "longitude": -45.4264,
      "country_code": "BR"
    },
    {
      "city": "Samannūd",
      "latitude": 30.9667,
      "longitude": 31.25,
      "country_code": "EG"
    },
    {
      "city": "Mérida",
      "latitude": 38.9158,
      "longitude": -6.3333,
      "country_code": "ES"
    },
    {
      "city": "Gardena",
      "latitude": 33.8944,
      "longitude": -118.3073,
      "country_code": "US"
    },
    {
      "city": "Békéscsaba",
      "latitude": 46.6833,
      "longitude": 21.0833,
      "country_code": "HU"
    },
    {
      "city": "Cupertino",
      "latitude": 37.3168,
      "longitude": -122.0465,
      "country_code": "US"
    },
    {
      "city": "La Mesa",
      "latitude": 32.7703,
      "longitude": -117.0204,
      "country_code": "US"
    },
    {
      "city": "Brookline",
      "latitude": 42.3243,
      "longitude": -71.1408,
      "country_code": "US"
    },
    {
      "city": "Dzerzhinskiy",
      "latitude": 55.6333,
      "longitude": 37.85,
      "country_code": "RU"
    },
    {
      "city": "Artemisa",
      "latitude": 22.8136,
      "longitude": -82.7633,
      "country_code": "CU"
    },
    {
      "city": "San Buenaventura",
      "latitude": 19.2641,
      "longitude": -99.6746,
      "country_code": "MX"
    },
    {
      "city": "Actopan",
      "latitude": 20.267,
      "longitude": -98.933,
      "country_code": "MX"
    },
    {
      "city": "Kitgum",
      "latitude": 3.3004,
      "longitude": 32.87,
      "country_code": "UG"
    },
    {
      "city": "Yevlax",
      "latitude": 40.6172,
      "longitude": 47.15,
      "country_code": "AZ"
    },
    {
      "city": "Viedma",
      "latitude": -40.8,
      "longitude": -63,
      "country_code": "AR"
    },
    {
      "city": "Cerro de Pasco",
      "latitude": -10.6864,
      "longitude": -76.2625,
      "country_code": "PE"
    },
    {
      "city": "Kabinda",
      "latitude": -6.1296,
      "longitude": 24.48,
      "country_code": "CD"
    },
    {
      "city": "Braintree",
      "latitude": 51.878,
      "longitude": 0.55,
      "country_code": "GB"
    },
    {
      "city": "Tacuarembó",
      "latitude": -31.71,
      "longitude": -55.98,
      "country_code": "UY"
    },
    {
      "city": "Clamart",
      "latitude": 48.8014,
      "longitude": 2.2628,
      "country_code": "FR"
    },
    {
      "city": "Coari",
      "latitude": -4.085,
      "longitude": -63.1414,
      "country_code": "BR"
    },
    {
      "city": "Crateús",
      "latitude": -5.1783,
      "longitude": -40.6775,
      "country_code": "BR"
    },
    {
      "city": "Kruševac",
      "latitude": 43.5833,
      "longitude": 21.3267,
      "country_code": "RS"
    },
    {
      "city": "Margate",
      "latitude": 26.2466,
      "longitude": -80.2119,
      "country_code": "US"
    },
    {
      "city": "Qiryat Ata",
      "latitude": 32.8,
      "longitude": 35.1,
      "country_code": "IL"
    },
    {
      "city": "Carson City",
      "latitude": 39.1512,
      "longitude": -119.7474,
      "country_code": "US"
    },
    {
      "city": "Sevran",
      "latitude": 48.9333,
      "longitude": 2.5333,
      "country_code": "FR"
    },
    {
      "city": "Mandapeta",
      "latitude": 16.87,
      "longitude": 81.93,
      "country_code": "IN"
    },
    {
      "city": "Évora",
      "latitude": 38.5667,
      "longitude": -7.9,
      "country_code": "PT"
    },
    {
      "city": "Port Coquitlam",
      "latitude": 49.2625,
      "longitude": -122.7811,
      "country_code": "CA"
    },
    {
      "city": "Rosh Ha‘Ayin",
      "latitude": 32.0833,
      "longitude": 34.95,
      "country_code": "IL"
    },
    {
      "city": "Middletown",
      "latitude": 41.4459,
      "longitude": -74.4236,
      "country_code": "US"
    },
    {
      "city": "Chelles",
      "latitude": 48.8833,
      "longitude": 2.6,
      "country_code": "FR"
    },
    {
      "city": "Bondoukou",
      "latitude": 8.04,
      "longitude": -2.8,
      "country_code": "CI"
    },
    {
      "city": "Kendale Lakes",
      "latitude": 25.7081,
      "longitude": -80.4078,
      "country_code": "US"
    },
    {
      "city": "San Fernando",
      "latitude": 10.2833,
      "longitude": -61.4667,
      "country_code": "TT"
    },
    {
      "city": "Meaux",
      "latitude": 48.9603,
      "longitude": 2.8883,
      "country_code": "FR"
    },
    {
      "city": "Novohrad-Volynskyi",
      "latitude": 50.5833,
      "longitude": 27.6333,
      "country_code": "UA"
    },
    {
      "city": "Huamantla",
      "latitude": 19.3133,
      "longitude": -97.9228,
      "country_code": "MX"
    },
    {
      "city": "Chaniá",
      "latitude": 35.5167,
      "longitude": 24.0167,
      "country_code": "GR"
    },
    {
      "city": "Union",
      "latitude": 40.6953,
      "longitude": -74.2697,
      "country_code": "US"
    },
    {
      "city": "Vidin",
      "latitude": 43.9853,
      "longitude": 22.8764,
      "country_code": "BG"
    },
    {
      "city": "White Plains",
      "latitude": 41.022,
      "longitude": -73.7549,
      "country_code": "US"
    },
    {
      "city": "Huehuetenango",
      "latitude": 15.3147,
      "longitude": -91.4761,
      "country_code": "GT"
    },
    {
      "city": "Sartrouville",
      "latitude": 48.9372,
      "longitude": 2.1644,
      "country_code": "FR"
    },
    {
      "city": "Jefferson City",
      "latitude": 38.5676,
      "longitude": -92.1759,
      "country_code": "US"
    },
    {
      "city": "Zalaegerszeg",
      "latitude": 46.8392,
      "longitude": 16.8511,
      "country_code": "HU"
    },
    {
      "city": "Hendon",
      "latitude": 51.5837,
      "longitude": -0.2252,
      "country_code": "GB"
    },
    {
      "city": "Arcadia",
      "latitude": 34.1342,
      "longitude": -118.0373,
      "country_code": "US"
    },
    {
      "city": "Hilden",
      "latitude": 51.1714,
      "longitude": 6.9394,
      "country_code": "DE"
    },
    {
      "city": "Slavonski Brod",
      "latitude": 45.1553,
      "longitude": 18.0144,
      "country_code": "HR"
    },
    {
      "city": "Magong",
      "latitude": 23.5667,
      "longitude": 119.5833,
      "country_code": "TW"
    },
    {
      "city": "Jocotitlán",
      "latitude": 19.7072,
      "longitude": -99.7867,
      "country_code": "MX"
    },
    {
      "city": "Umm el Faḥm",
      "latitude": 32.5158,
      "longitude": 35.1525,
      "country_code": "IL"
    },
    {
      "city": "Alfortville",
      "latitude": 48.805,
      "longitude": 2.4239,
      "country_code": "FR"
    },
    {
      "city": "Samut Prakan",
      "latitude": 13.6004,
      "longitude": 100.5964,
      "country_code": "TH"
    },
    {
      "city": "Nuevo Casas Grandes",
      "latitude": 30.4167,
      "longitude": -107.9167,
      "country_code": "MX"
    },
    {
      "city": "Kidderminster",
      "latitude": 52.3885,
      "longitude": -2.249,
      "country_code": "GB"
    },
    {
      "city": "Lipjan",
      "latitude": 42.53,
      "longitude": 21.1386,
      "country_code": "XK"
    },
    {
      "city": "Zumpango",
      "latitude": 19.7969,
      "longitude": -99.0992,
      "country_code": "MX"
    },
    {
      "city": "Crosby",
      "latitude": 53.4872,
      "longitude": -3.0343,
      "country_code": "GB"
    },
    {
      "city": "Al Mafraq",
      "latitude": 32.2833,
      "longitude": 36.2333,
      "country_code": "JO"
    },
    {
      "city": "Hamilton",
      "latitude": 55.777,
      "longitude": -4.039,
      "country_code": "GB"
    },
    {
      "city": "Altrincham",
      "latitude": 53.3838,
      "longitude": -2.3547,
      "country_code": "GB"
    },
    {
      "city": "Tamiami",
      "latitude": 25.7556,
      "longitude": -80.4016,
      "country_code": "US"
    },
    {
      "city": "Huntington Park",
      "latitude": 33.98,
      "longitude": -118.2167,
      "country_code": "US"
    },
    {
      "city": "Mafeteng",
      "latitude": -29.8167,
      "longitude": 27.25,
      "country_code": "LS"
    },
    {
      "city": "Medford",
      "latitude": 42.4234,
      "longitude": -71.1087,
      "country_code": "US"
    },
    {
      "city": "Chinhoyi",
      "latitude": -17.35,
      "longitude": 30.2,
      "country_code": "ZW"
    },
    {
      "city": "Gümüşhane",
      "latitude": 40.4597,
      "longitude": 39.4778,
      "country_code": "TR"
    },
    {
      "city": "Pithāpuram",
      "latitude": 17.1167,
      "longitude": 82.2667,
      "country_code": "IN"
    },
    {
      "city": "Araguaína",
      "latitude": -7.19,
      "longitude": -48.21,
      "country_code": "BR"
    },
    {
      "city": "Belize City",
      "latitude": 17.4986,
      "longitude": -88.1886,
      "country_code": "BZ"
    },
    {
      "city": "Acatzingo",
      "latitude": 18.9817,
      "longitude": -97.7822,
      "country_code": "MX"
    },
    {
      "city": "Barri",
      "latitude": 51.405,
      "longitude": -3.27,
      "country_code": "GB"
    },
    {
      "city": "Adrar",
      "latitude": 27.8742,
      "longitude": -0.2939,
      "country_code": "DZ"
    },
    {
      "city": "Biel/Bienne",
      "latitude": 47.1372,
      "longitude": 7.2472,
      "country_code": "CH"
    },
    {
      "city": "Bắc Giang",
      "latitude": 21.2731,
      "longitude": 106.1947,
      "country_code": "VN"
    },
    {
      "city": "Ushuaia",
      "latitude": -54.8072,
      "longitude": -68.3044,
      "country_code": "AR"
    },
    {
      "city": "Royal Leamington Spa",
      "latitude": 52.292,
      "longitude": -1.537,
      "country_code": "GB"
    },
    {
      "city": "Jelgava",
      "latitude": 56.6522,
      "longitude": 23.7244,
      "country_code": "LV"
    },
    {
      "city": "Zalău",
      "latitude": 47.1911,
      "longitude": 23.0572,
      "country_code": "RO"
    },
    {
      "city": "Dunfermline",
      "latitude": 56.0719,
      "longitude": -3.4393,
      "country_code": "GB"
    },
    {
      "city": "Itacoatiara",
      "latitude": -3.1431,
      "longitude": -58.4442,
      "country_code": "BR"
    },
    {
      "city": "Sfântu-Gheorghe",
      "latitude": 45.8636,
      "longitude": 25.7875,
      "country_code": "RO"
    },
    {
      "city": "Muğla",
      "latitude": 37.2167,
      "longitude": 28.3667,
      "country_code": "TR"
    },
    {
      "city": "Llanelli",
      "latitude": 51.684,
      "longitude": -4.163,
      "country_code": "GB"
    },
    {
      "city": "Tandag",
      "latitude": 9.0667,
      "longitude": 126.1833,
      "country_code": "PH"
    },
    {
      "city": "Phra Nakhon Si Ayutthaya",
      "latitude": 14.355,
      "longitude": 100.565,
      "country_code": "TH"
    },
    {
      "city": "Kranj",
      "latitude": 46.2389,
      "longitude": 14.3556,
      "country_code": "SI"
    },
    {
      "city": "Salamá",
      "latitude": 15.1052,
      "longitude": -90.316,
      "country_code": "GT"
    },
    {
      "city": "Zouerate",
      "latitude": 22.7344,
      "longitude": -12.4725,
      "country_code": "MR"
    },
    {
      "city": "Trenčín",
      "latitude": 48.8942,
      "longitude": 18.0406,
      "country_code": "SK"
    },
    {
      "city": "Rahovec",
      "latitude": 42.3994,
      "longitude": 20.6547,
      "country_code": "XK"
    },
    {
      "city": "Vaslui",
      "latitude": 46.6383,
      "longitude": 27.7292,
      "country_code": "RO"
    },
    {
      "city": "Saint-Quentin",
      "latitude": 49.8486,
      "longitude": 3.2864,
      "country_code": "FR"
    },
    {
      "city": "Castelo Branco",
      "latitude": 39.823,
      "longitude": -7.4931,
      "country_code": "PT"
    },
    {
      "city": "Rio Tinto",
      "latitude": 41.1833,
      "longitude": -8.5667,
      "country_code": "PT"
    },
    {
      "city": "Rio Verde",
      "latitude": -17.8196,
      "longitude": -50.93,
      "country_code": "BR"
    },
    {
      "city": "Sankt Pölten",
      "latitude": 48.2,
      "longitude": 15.6167,
      "country_code": "AT"
    },
    {
      "city": "Vigan",
      "latitude": 17.5747,
      "longitude": 120.3869,
      "country_code": "PH"
    },
    {
      "city": "Weymouth",
      "latitude": 50.613,
      "longitude": -2.457,
      "country_code": "GB"
    },
    {
      "city": "Santa Rosa de Copán",
      "latitude": 14.7667,
      "longitude": -88.7833,
      "country_code": "HN"
    },
    {
      "city": "Halmstad",
      "latitude": 56.6718,
      "longitude": 12.8556,
      "country_code": "SE"
    },
    {
      "city": "Barra do Garças",
      "latitude": -15.8796,
      "longitude": -52.26,
      "country_code": "BR"
    },
    {
      "city": "Florida",
      "latitude": -34.5167,
      "longitude": -58.5,
      "country_code": "AR"
    },
    {
      "city": "Ohrid",
      "latitude": 41.1169,
      "longitude": 20.8019,
      "country_code": "MK"
    },
    {
      "city": "Greenford",
      "latitude": 51.5299,
      "longitude": -0.3488,
      "country_code": "GB"
    },
    {
      "city": "Ponte Nova",
      "latitude": -20.4164,
      "longitude": -42.9086,
      "country_code": "BR"
    },
    {
      "city": "Matamoros",
      "latitude": 25.533,
      "longitude": -103.25,
      "country_code": "MX"
    },
    {
      "city": "Guliston",
      "latitude": 40.4833,
      "longitude": 68.7833,
      "country_code": "UZ"
    },
    {
      "city": "Rowley Regis",
      "latitude": 52.48,
      "longitude": -2.06,
      "country_code": "GB"
    },
    {
      "city": "Bootle",
      "latitude": 53.4457,
      "longitude": -2.9891,
      "country_code": "GB"
    },
    {
      "city": "Francisco I. Madero",
      "latitude": 25.7753,
      "longitude": -103.2731,
      "country_code": "MX"
    },
    {
      "city": "New Brunswick",
      "latitude": 40.487,
      "longitude": -74.445,
      "country_code": "US"
    },
    {
      "city": "Aloha",
      "latitude": 45.492,
      "longitude": -122.8726,
      "country_code": "US"
    },
    {
      "city": "Lautoka",
      "latitude": -17.6242,
      "longitude": 177.4528,
      "country_code": "FJ"
    },
    {
      "city": "Senhor do Bonfim",
      "latitude": -10.4614,
      "longitude": -40.1894,
      "country_code": "BR"
    },
    {
      "city": "Itaberaba",
      "latitude": -12.5275,
      "longitude": -40.3069,
      "country_code": "BR"
    },
    {
      "city": "Fountain Valley",
      "latitude": 33.7105,
      "longitude": -117.9514,
      "country_code": "US"
    },
    {
      "city": "Villagrán",
      "latitude": 20.517,
      "longitude": -100.983,
      "country_code": "MX"
    },
    {
      "city": "Massy",
      "latitude": 48.7309,
      "longitude": 2.2713,
      "country_code": "FR"
    },
    {
      "city": "Paignton",
      "latitude": 50.4353,
      "longitude": -3.5625,
      "country_code": "GB"
    },
    {
      "city": "Lampang",
      "latitude": 18.3,
      "longitude": 99.5,
      "country_code": "TH"
    },
    {
      "city": "Lancaster",
      "latitude": 54.047,
      "longitude": -2.801,
      "country_code": "GB"
    },
    {
      "city": "Vranje",
      "latitude": 42.5542,
      "longitude": 21.8972,
      "country_code": "RS"
    },
    {
      "city": "Abū Qīr",
      "latitude": 31.3167,
      "longitude": 30.0667,
      "country_code": "EG"
    },
    {
      "city": "Ithaca",
      "latitude": 42.4442,
      "longitude": -76.5032,
      "country_code": "US"
    },
    {
      "city": "Chiapa de Corzo",
      "latitude": 16.7083,
      "longitude": -93.0169,
      "country_code": "MX"
    },
    {
      "city": "Madīnat Ḩamad",
      "latitude": 26.1128,
      "longitude": 50.5139,
      "country_code": "BH"
    },
    {
      "city": "Oak Lawn",
      "latitude": 41.7139,
      "longitude": -87.7528,
      "country_code": "US"
    },
    {
      "city": "Quixadá",
      "latitude": -4.9714,
      "longitude": -39.0153,
      "country_code": "BR"
    },
    {
      "city": "Padangpanjang",
      "latitude": -0.45,
      "longitude": 100.4167,
      "country_code": "ID"
    },
    {
      "city": "Mikkeli",
      "latitude": 61.6875,
      "longitude": 27.2736,
      "country_code": "FI"
    },
    {
      "city": "Corbeil-Essonnes",
      "latitude": 48.6139,
      "longitude": 2.482,
      "country_code": "FR"
    },
    {
      "city": "Malishevë",
      "latitude": 42.4828,
      "longitude": 20.7458,
      "country_code": "XK"
    },
    {
      "city": "Breves",
      "latitude": -1.6822,
      "longitude": -50.4803,
      "country_code": "BR"
    },
    {
      "city": "Busia",
      "latitude": 0.4669,
      "longitude": 34.09,
      "country_code": "UG"
    },
    {
      "city": "Morden",
      "latitude": 51.4015,
      "longitude": -0.1949,
      "country_code": "GB"
    },
    {
      "city": "Catford",
      "latitude": 51.4452,
      "longitude": -0.0207,
      "country_code": "GB"
    },
    {
      "city": "Folkestone",
      "latitude": 51.081,
      "longitude": 1.166,
      "country_code": "GB"
    },
    {
      "city": "Berwyn",
      "latitude": 41.8433,
      "longitude": -87.7909,
      "country_code": "US"
    },
    {
      "city": "Chārīkār",
      "latitude": 35.0183,
      "longitude": 69.1679,
      "country_code": "AF"
    },
    {
      "city": "Ibiza",
      "latitude": 38.9089,
      "longitude": 1.4328,
      "country_code": "ES"
    },
    {
      "city": "Shiraoka",
      "latitude": 36.0189,
      "longitude": 139.6769,
      "country_code": "JP"
    },
    {
      "city": "Prachuap Khiri Khan",
      "latitude": 11.8067,
      "longitude": 99.7956,
      "country_code": "TH"
    },
    {
      "city": "Korçë",
      "latitude": 40.6167,
      "longitude": 20.7667,
      "country_code": "AL"
    },
    {
      "city": "Rosemead",
      "latitude": 34.0689,
      "longitude": -118.0823,
      "country_code": "US"
    },
    {
      "city": "Tulcán",
      "latitude": 0.8117,
      "longitude": -77.7186,
      "country_code": "EC"
    },
    {
      "city": "Irvington",
      "latitude": 40.7242,
      "longitude": -74.2318,
      "country_code": "US"
    },
    {
      "city": "Paramount",
      "latitude": 33.8976,
      "longitude": -118.1652,
      "country_code": "US"
    },
    {
      "city": "Louangphabang",
      "latitude": 19.8931,
      "longitude": 102.1381,
      "country_code": "LA"
    },
    {
      "city": "Stratford",
      "latitude": 51.5423,
      "longitude": -0.0026,
      "country_code": "GB"
    },
    {
      "city": "Iganga",
      "latitude": 0.6092,
      "longitude": 33.4686,
      "country_code": "UG"
    },
    {
      "city": "Sakon Nakhon",
      "latitude": 17.1564,
      "longitude": 104.1456,
      "country_code": "TH"
    },
    {
      "city": "Cagnes-sur-Mer",
      "latitude": 43.6644,
      "longitude": 7.1489,
      "country_code": "FR"
    },
    {
      "city": "Sutton in Ashfield",
      "latitude": 53.125,
      "longitude": -1.261,
      "country_code": "GB"
    },
    {
      "city": "Pursat",
      "latitude": 12.5337,
      "longitude": 103.9167,
      "country_code": "KH"
    },
    {
      "city": "Macclesfield",
      "latitude": 53.2581,
      "longitude": -2.1274,
      "country_code": "GB"
    },
    {
      "city": "Whangarei",
      "latitude": -35.725,
      "longitude": 174.3236,
      "country_code": "NZ"
    },
    {
      "city": "Eger",
      "latitude": 47.8989,
      "longitude": 20.3747,
      "country_code": "HU"
    },
    {
      "city": "Nes Ẕiyyona",
      "latitude": 31.9333,
      "longitude": 34.8,
      "country_code": "IL"
    },
    {
      "city": "Santiago Teyahualco",
      "latitude": 19.6667,
      "longitude": -99.1333,
      "country_code": "MX"
    },
    {
      "city": "Marondera",
      "latitude": -18.1833,
      "longitude": 31.55,
      "country_code": "ZW"
    },
    {
      "city": "Wellingborough",
      "latitude": 52.2939,
      "longitude": -0.6964,
      "country_code": "GB"
    },
    {
      "city": "Moskovskiy",
      "latitude": 55.5991,
      "longitude": 37.355,
      "country_code": "RU"
    },
    {
      "city": "Rosny-sous-Bois",
      "latitude": 48.8667,
      "longitude": 2.4833,
      "country_code": "FR"
    },
    {
      "city": "Maha Sarakham",
      "latitude": 16.1772,
      "longitude": 103.3008,
      "country_code": "TH"
    },
    {
      "city": "Revere",
      "latitude": 42.4192,
      "longitude": -71.0036,
      "country_code": "US"
    },
    {
      "city": "Barra do Corda",
      "latitude": -5.5031,
      "longitude": -45.2369,
      "country_code": "BR"
    },
    {
      "city": "Helena",
      "latitude": 46.5965,
      "longitude": -112.0202,
      "country_code": "US"
    },
    {
      "city": "Takeo",
      "latitude": 10.9833,
      "longitude": 104.7833,
      "country_code": "KH"
    },
    {
      "city": "Barnet",
      "latitude": 51.6444,
      "longitude": -0.1997,
      "country_code": "GB"
    },
    {
      "city": "Vejle",
      "latitude": 55.709,
      "longitude": 9.535,
      "country_code": "DK"
    },
    {
      "city": "Kirkcaldy",
      "latitude": 56.1107,
      "longitude": -3.1674,
      "country_code": "GB"
    },
    {
      "city": "Aspen Hill",
      "latitude": 39.0928,
      "longitude": -77.0823,
      "country_code": "US"
    },
    {
      "city": "Leopoldina",
      "latitude": -21.5319,
      "longitude": -42.6431,
      "country_code": "BR"
    },
    {
      "city": "Cumbernauld",
      "latitude": 55.945,
      "longitude": -3.994,
      "country_code": "GB"
    },
    {
      "city": "Valladolid",
      "latitude": 20.6894,
      "longitude": -88.2017,
      "country_code": "MX"
    },
    {
      "city": "West New York",
      "latitude": 40.7856,
      "longitude": -74.0093,
      "country_code": "US"
    },
    {
      "city": "Mangochi",
      "latitude": -14.4781,
      "longitude": 35.2645,
      "country_code": "MW"
    },
    {
      "city": "Hoboken",
      "latitude": 40.7453,
      "longitude": -74.0279,
      "country_code": "US"
    },
    {
      "city": "Mongu",
      "latitude": -15.2796,
      "longitude": 23.12,
      "country_code": "ZM"
    },
    {
      "city": "Alytus",
      "latitude": 54.4014,
      "longitude": 24.0492,
      "country_code": "LT"
    },
    {
      "city": "Choisy-le-Roi",
      "latitude": 48.763,
      "longitude": 2.409,
      "country_code": "FR"
    },
    {
      "city": "Myrnohrad",
      "latitude": 48.3022,
      "longitude": 37.2614,
      "country_code": "UA"
    },
    {
      "city": "Aracati",
      "latitude": -4.5617,
      "longitude": -37.7697,
      "country_code": "BR"
    },
    {
      "city": "Iwakura",
      "latitude": 35.2833,
      "longitude": 136.8667,
      "country_code": "JP"
    },
    {
      "city": "Boujad",
      "latitude": 32.76,
      "longitude": -6.4,
      "country_code": "MA"
    },
    {
      "city": "Oak Park",
      "latitude": 41.8872,
      "longitude": -87.7899,
      "country_code": "US"
    },
    {
      "city": "Batley",
      "latitude": 53.716,
      "longitude": -1.627,
      "country_code": "GB"
    },
    {
      "city": "Jinotepe",
      "latitude": 11.85,
      "longitude": -86.2,
      "country_code": "NI"
    },
    {
      "city": "Ain El Aouda",
      "latitude": 33.8111,
      "longitude": -6.7922,
      "country_code": "MA"
    },
    {
      "city": "Takahama",
      "latitude": 34.9276,
      "longitude": 136.9877,
      "country_code": "JP"
    },
    {
      "city": "Elmshorn",
      "latitude": 53.7547,
      "longitude": 9.6536,
      "country_code": "DE"
    },
    {
      "city": "Floriano",
      "latitude": -6.7669,
      "longitude": -43.0225,
      "country_code": "BR"
    },
    {
      "city": "Bang Bua Thong",
      "latitude": 13.9099,
      "longitude": 100.4263,
      "country_code": "TH"
    },
    {
      "city": "Lamía",
      "latitude": 38.8972,
      "longitude": 22.4311,
      "country_code": "GR"
    },
    {
      "city": "Noisy-le-Sec",
      "latitude": 48.8894,
      "longitude": 2.4503,
      "country_code": "FR"
    },
    {
      "city": "Chake Chake",
      "latitude": -5.2395,
      "longitude": 39.77,
      "country_code": "TZ"
    },
    {
      "city": "Lənkəran",
      "latitude": 38.7536,
      "longitude": 48.8511,
      "country_code": "AZ"
    },
    {
      "city": "Suzukawa",
      "latitude": 35.3731,
      "longitude": 139.3842,
      "country_code": "JP"
    },
    {
      "city": "Vila Real",
      "latitude": 41.3002,
      "longitude": -7.7398,
      "country_code": "PT"
    },
    {
      "city": "Ocosingo",
      "latitude": 16.9072,
      "longitude": -92.0961,
      "country_code": "MX"
    },
    {
      "city": "Campo Belo",
      "latitude": -20.8896,
      "longitude": -45.28,
      "country_code": "BR"
    },
    {
      "city": "Cametá",
      "latitude": -2.2396,
      "longitude": -49.51,
      "country_code": "BR"
    },
    {
      "city": "Vaulx-en-Velin",
      "latitude": 45.7768,
      "longitude": 4.9186,
      "country_code": "FR"
    },
    {
      "city": "Itamaraju",
      "latitude": -17.0392,
      "longitude": -39.5311,
      "country_code": "BR"
    },
    {
      "city": "Pen-y-Bont ar Ogwr",
      "latitude": 51.5072,
      "longitude": -3.5784,
      "country_code": "GB"
    },
    {
      "city": "Teplice",
      "latitude": 50.6333,
      "longitude": 13.8167,
      "country_code": "CZ"
    },
    {
      "city": "Ramos Arizpe",
      "latitude": 25.55,
      "longitude": -100.9667,
      "country_code": "MX"
    },
    {
      "city": "Jihlava",
      "latitude": 49.4003,
      "longitude": 15.5906,
      "country_code": "CZ"
    },
    {
      "city": "Ratnapura",
      "latitude": 6.693,
      "longitude": 80.386,
      "country_code": "LK"
    },
    {
      "city": "Jendouba",
      "latitude": 36.5,
      "longitude": 8.75,
      "country_code": "TN"
    },
    {
      "city": "Sombor",
      "latitude": 45.78,
      "longitude": 19.12,
      "country_code": "RS"
    },
    {
      "city": "Campobasso",
      "latitude": 41.563,
      "longitude": 14.656,
      "country_code": "IT"
    },
    {
      "city": "Vryburg",
      "latitude": -26.95,
      "longitude": 24.7333,
      "country_code": "ZA"
    },
    {
      "city": "Eltham",
      "latitude": 51.451,
      "longitude": 0.052,
      "country_code": "GB"
    },
    {
      "city": "Levittown",
      "latitude": 40.7241,
      "longitude": -73.5125,
      "country_code": "US"
    },
    {
      "city": "Surbiton",
      "latitude": 51.394,
      "longitude": -0.307,
      "country_code": "GB"
    },
    {
      "city": "Perth Amboy",
      "latitude": 40.5203,
      "longitude": -74.2724,
      "country_code": "US"
    },
    {
      "city": "Ashton",
      "latitude": 53.4897,
      "longitude": -2.0952,
      "country_code": "GB"
    },
    {
      "city": "Tizimín",
      "latitude": 21.1425,
      "longitude": -88.1647,
      "country_code": "MX"
    },
    {
      "city": "Séguéla",
      "latitude": 7.9611,
      "longitude": -6.6731,
      "country_code": "CI"
    },
    {
      "city": "Placentia",
      "latitude": 33.8807,
      "longitude": -117.8553,
      "country_code": "US"
    },
    {
      "city": "Stretford",
      "latitude": 53.4466,
      "longitude": -2.3086,
      "country_code": "GB"
    },
    {
      "city": "Sar-e Pul",
      "latitude": 36.2214,
      "longitude": 65.9278,
      "country_code": "AF"
    },
    {
      "city": "Komotiní",
      "latitude": 41.1167,
      "longitude": 25.4,
      "country_code": "GR"
    },
    {
      "city": "Camocim",
      "latitude": -2.9022,
      "longitude": -40.8411,
      "country_code": "BR"
    },
    {
      "city": "Loreto",
      "latitude": 22.2667,
      "longitude": -101.9833,
      "country_code": "MX"
    },
    {
      "city": "Larnaca",
      "latitude": 34.9233,
      "longitude": 33.6305,
      "country_code": "CY"
    },
    {
      "city": "Capanema",
      "latitude": -1.1958,
      "longitude": -47.1808,
      "country_code": "BR"
    },
    {
      "city": "Bodupāl",
      "latitude": 17.4139,
      "longitude": 78.5783,
      "country_code": "IN"
    },
    {
      "city": "Longchamps",
      "latitude": -34.8596,
      "longitude": -58.387,
      "country_code": "AR"
    },
    {
      "city": "Jutiapa",
      "latitude": 14.29,
      "longitude": -89.9,
      "country_code": "GT"
    },
    {
      "city": "Kasuga",
      "latitude": 33.6108,
      "longitude": 130.4806,
      "country_code": "JP"
    },
    {
      "city": "Sisophon",
      "latitude": 13.5833,
      "longitude": 102.9833,
      "country_code": "KH"
    },
    {
      "city": "Aliso Viejo",
      "latitude": 33.5792,
      "longitude": -117.7289,
      "country_code": "US"
    },
    {
      "city": "Skenderaj",
      "latitude": 42.7467,
      "longitude": 20.7886,
      "country_code": "XK"
    },
    {
      "city": "Jarash",
      "latitude": 32.2723,
      "longitude": 35.8914,
      "country_code": "JO"
    },
    {
      "city": "Ḩarastā",
      "latitude": 33.5586,
      "longitude": 36.365,
      "country_code": "SY"
    },
    {
      "city": "Puttalam",
      "latitude": 8.033,
      "longitude": 79.826,
      "country_code": "LK"
    },
    {
      "city": "Welwyn Garden City",
      "latitude": 51.8062,
      "longitude": -0.1932,
      "country_code": "GB"
    },
    {
      "city": "Guaxupé",
      "latitude": -21.3053,
      "longitude": -46.7128,
      "country_code": "BR"
    },
    {
      "city": "Gbadolite",
      "latitude": 4.275,
      "longitude": 21,
      "country_code": "CD"
    },
    {
      "city": "La Reja",
      "latitude": -34.6394,
      "longitude": -58.8283,
      "country_code": "AR"
    },
    {
      "city": "West Bridgford",
      "latitude": 52.932,
      "longitude": -1.127,
      "country_code": "GB"
    },
    {
      "city": "Gennevilliers",
      "latitude": 48.9333,
      "longitude": 2.3,
      "country_code": "FR"
    },
    {
      "city": "Wheaton",
      "latitude": 39.0492,
      "longitude": -77.0572,
      "country_code": "US"
    },
    {
      "city": "Goianésia",
      "latitude": -15.3175,
      "longitude": -49.1175,
      "country_code": "BR"
    },
    {
      "city": "Yeovil",
      "latitude": 50.9452,
      "longitude": -2.637,
      "country_code": "GB"
    },
    {
      "city": "Beckenham",
      "latitude": 51.408,
      "longitude": -0.022,
      "country_code": "GB"
    },
    {
      "city": "Gracias",
      "latitude": 14.5833,
      "longitude": -88.5833,
      "country_code": "HN"
    },
    {
      "city": "Ma‘ān",
      "latitude": 30.192,
      "longitude": 35.736,
      "country_code": "JO"
    },
    {
      "city": "Cojutepeque",
      "latitude": 13.7167,
      "longitude": -88.9333,
      "country_code": "SV"
    },
    {
      "city": "Selibe Phikwe",
      "latitude": -21.9667,
      "longitude": 27.9167,
      "country_code": "BW"
    },
    {
      "city": "Villa Alsina",
      "latitude": -34.6667,
      "longitude": -58.4167,
      "country_code": "AR"
    },
    {
      "city": "Bom Jesus da Lapa",
      "latitude": -13.2495,
      "longitude": -43.44,
      "country_code": "BR"
    },
    {
      "city": "Plainfield",
      "latitude": 40.6154,
      "longitude": -74.4157,
      "country_code": "US"
    },
    {
      "city": "Garges-lès-Gonesse",
      "latitude": 48.9728,
      "longitude": 2.4008,
      "country_code": "FR"
    },
    {
      "city": "North Bethesda",
      "latitude": 39.0393,
      "longitude": -77.1191,
      "country_code": "US"
    },
    {
      "city": "Livry-Gargan",
      "latitude": 48.9192,
      "longitude": 2.5361,
      "country_code": "FR"
    },
    {
      "city": "Bagneux",
      "latitude": 48.7983,
      "longitude": 2.3137,
      "country_code": "FR"
    },
    {
      "city": "Tlalmanalco",
      "latitude": 19.2044,
      "longitude": -98.8025,
      "country_code": "MX"
    },
    {
      "city": "Moyobamba",
      "latitude": -6.0333,
      "longitude": -76.9667,
      "country_code": "PE"
    },
    {
      "city": "Al Khārijah",
      "latitude": 25.44,
      "longitude": 30.55,
      "country_code": "EG"
    },
    {
      "city": "Kotelniki",
      "latitude": 55.65,
      "longitude": 37.8667,
      "country_code": "RU"
    },
    {
      "city": "Al Balyanā",
      "latitude": 26.2329,
      "longitude": 31.9993,
      "country_code": "EG"
    },
    {
      "city": "Maun",
      "latitude": -19.9833,
      "longitude": 23.4167,
      "country_code": "BW"
    },
    {
      "city": "Zaranj",
      "latitude": 30.96,
      "longitude": 61.86,
      "country_code": "AF"
    },
    {
      "city": "La Garenne-Colombes",
      "latitude": 48.9056,
      "longitude": 2.2445,
      "country_code": "FR"
    },
    {
      "city": "Odienné",
      "latitude": 9.5,
      "longitude": -7.5667,
      "country_code": "CI"
    },
    {
      "city": "Cheshunt",
      "latitude": 51.702,
      "longitude": -0.035,
      "country_code": "GB"
    },
    {
      "city": "Nausori",
      "latitude": -18.0244,
      "longitude": 178.5454,
      "country_code": "FJ"
    },
    {
      "city": "Hāgere Hiywet",
      "latitude": 8.9833,
      "longitude": 37.85,
      "country_code": "ET"
    },
    {
      "city": "Cerritos",
      "latitude": 33.8677,
      "longitude": -118.0686,
      "country_code": "US"
    },
    {
      "city": "Meudon",
      "latitude": 48.8123,
      "longitude": 2.2382,
      "country_code": "FR"
    },
    {
      "city": "Dosso",
      "latitude": 13.05,
      "longitude": 3.2,
      "country_code": "NE"
    },
    {
      "city": "Kangar",
      "latitude": 6.4414,
      "longitude": 100.1986,
      "country_code": "MY"
    },
    {
      "city": "Al Aaroui",
      "latitude": 35.0104,
      "longitude": -3.0073,
      "country_code": "MA"
    },
    {
      "city": "Country Club",
      "latitude": 25.9407,
      "longitude": -80.3102,
      "country_code": "US"
    },
    {
      "city": "Lakewood",
      "latitude": 41.4824,
      "longitude": -81.8008,
      "country_code": "US"
    },
    {
      "city": "Coyhaique",
      "latitude": -45.5712,
      "longitude": -72.0685,
      "country_code": "CL"
    },
    {
      "city": "Montana",
      "latitude": 43.4078,
      "longitude": 23.225,
      "country_code": "BG"
    },
    {
      "city": "Huancavelica",
      "latitude": -12.785,
      "longitude": -74.9714,
      "country_code": "PE"
    },
    {
      "city": "Perth",
      "latitude": 56.397,
      "longitude": -3.437,
      "country_code": "GB"
    },
    {
      "city": "Brumado",
      "latitude": -14.2036,
      "longitude": -41.6653,
      "country_code": "BR"
    },
    {
      "city": "Dollard-des-Ormeaux",
      "latitude": 45.4833,
      "longitude": -73.8167,
      "country_code": "CA"
    },
    {
      "city": "Couva",
      "latitude": 10.4167,
      "longitude": -61.45,
      "country_code": "TT"
    },
    {
      "city": "Waterford",
      "latitude": 52.2583,
      "longitude": -7.119,
      "country_code": "IE"
    },
    {
      "city": "Bagnolet",
      "latitude": 48.8692,
      "longitude": 2.4181,
      "country_code": "FR"
    },
    {
      "city": "Ramat HaSharon",
      "latitude": 32.1461,
      "longitude": 34.8394,
      "country_code": "IL"
    },
    {
      "city": "Nelson",
      "latitude": -41.2931,
      "longitude": 173.2381,
      "country_code": "NZ"
    },
    {
      "city": "Mantes-la-Jolie",
      "latitude": 48.9908,
      "longitude": 1.7172,
      "country_code": "FR"
    },
    {
      "city": "Wajir",
      "latitude": 1.75,
      "longitude": 40.0667,
      "country_code": "KE"
    },
    {
      "city": "Canindé",
      "latitude": -4.3589,
      "longitude": -39.3117,
      "country_code": "BR"
    },
    {
      "city": "Karlovy Vary",
      "latitude": 50.2306,
      "longitude": 12.8725,
      "country_code": "CZ"
    },
    {
      "city": "San Isidro",
      "latitude": -34.4667,
      "longitude": -58.5167,
      "country_code": "AR"
    },
    {
      "city": "Luleå",
      "latitude": 65.5838,
      "longitude": 22.1915,
      "country_code": "SE"
    },
    {
      "city": "Florin",
      "latitude": 38.4832,
      "longitude": -121.4042,
      "country_code": "US"
    },
    {
      "city": "Piripiri",
      "latitude": -4.2733,
      "longitude": -41.7769,
      "country_code": "BR"
    },
    {
      "city": "Ayr",
      "latitude": 55.458,
      "longitude": -4.629,
      "country_code": "GB"
    },
    {
      "city": "José Mármol",
      "latitude": -34.7833,
      "longitude": -58.3667,
      "country_code": "AR"
    },
    {
      "city": "Jūrmala",
      "latitude": 56.968,
      "longitude": 23.7704,
      "country_code": "LV"
    },
    {
      "city": "Banbury",
      "latitude": 52.061,
      "longitude": -1.336,
      "country_code": "GB"
    },
    {
      "city": "Wokingham",
      "latitude": 51.41,
      "longitude": -0.84,
      "country_code": "GB"
    },
    {
      "city": "Moroleón",
      "latitude": 20.1333,
      "longitude": -101.2,
      "country_code": "MX"
    },
    {
      "city": "Cypress",
      "latitude": 33.8171,
      "longitude": -118.0386,
      "country_code": "US"
    },
    {
      "city": "Hollister",
      "latitude": 36.8563,
      "longitude": -121.3981,
      "country_code": "US"
    },
    {
      "city": "Mao",
      "latitude": 19.552,
      "longitude": -71.075,
      "country_code": "DO"
    },
    {
      "city": "North Highlands",
      "latitude": 38.6713,
      "longitude": -121.3721,
      "country_code": "US"
    },
    {
      "city": "Inhumas",
      "latitude": -16.3578,
      "longitude": -49.4961,
      "country_code": "BR"
    },
    {
      "city": "Rovenky",
      "latitude": 48.0833,
      "longitude": 39.3667,
      "country_code": "UA"
    },
    {
      "city": "Asadābād",
      "latitude": 34.8742,
      "longitude": 71.1528,
      "country_code": "AF"
    },
    {
      "city": "Bloomfield",
      "latitude": 40.8098,
      "longitude": -74.1868,
      "country_code": "US"
    },
    {
      "city": "Tlapa de Comonfort",
      "latitude": 17.5461,
      "longitude": -98.5764,
      "country_code": "MX"
    },
    {
      "city": "Invercargill",
      "latitude": -46.429,
      "longitude": 168.362,
      "country_code": "NZ"
    },
    {
      "city": "Châtillon",
      "latitude": 48.8,
      "longitude": 2.29,
      "country_code": "FR"
    },
    {
      "city": "Birendranagar",
      "latitude": 28.6,
      "longitude": 81.6333,
      "country_code": "NP"
    },
    {
      "city": "Nueva Loja",
      "latitude": 0.0844,
      "longitude": -76.8911,
      "country_code": "EC"
    },
    {
      "city": "Krasnoznamensk",
      "latitude": 55.6,
      "longitude": 37.0333,
      "country_code": "RU"
    },
    {
      "city": "Ceres",
      "latitude": 37.5953,
      "longitude": -120.9625,
      "country_code": "US"
    },
    {
      "city": "Puerto Escondido",
      "latitude": 15.8619,
      "longitude": -97.0672,
      "country_code": "MX"
    },
    {
      "city": "Serowe",
      "latitude": -22.3833,
      "longitude": 26.7167,
      "country_code": "BW"
    },
    {
      "city": "Kingston upon Thames",
      "latitude": 51.4103,
      "longitude": -0.2995,
      "country_code": "GB"
    },
    {
      "city": "Mandeville",
      "latitude": 18.0417,
      "longitude": -77.5072,
      "country_code": "JM"
    },
    {
      "city": "Nong Khai",
      "latitude": 17.8842,
      "longitude": 102.7467,
      "country_code": "TH"
    },
    {
      "city": "Salekhard",
      "latitude": 66.5333,
      "longitude": 66.6333,
      "country_code": "RU"
    },
    {
      "city": "Mercedes",
      "latitude": -33.25,
      "longitude": -58.0319,
      "country_code": "UY"
    },
    {
      "city": "Parras de la Fuente",
      "latitude": 25.4403,
      "longitude": -102.1792,
      "country_code": "MX"
    },
    {
      "city": "Emiliano Zapata",
      "latitude": 18.8667,
      "longitude": -99.15,
      "country_code": "MX"
    },
    {
      "city": "Bindura",
      "latitude": -17.3,
      "longitude": 31.3333,
      "country_code": "ZW"
    },
    {
      "city": "La Courneuve",
      "latitude": 48.9322,
      "longitude": 2.3967,
      "country_code": "FR"
    },
    {
      "city": "Gori",
      "latitude": 41.9817,
      "longitude": 44.1124,
      "country_code": "GE"
    },
    {
      "city": "Isiolo",
      "latitude": 0.35,
      "longitude": 37.5833,
      "country_code": "KE"
    },
    {
      "city": "La Mirada",
      "latitude": 33.9025,
      "longitude": -118.0093,
      "country_code": "US"
    },
    {
      "city": "Bastia",
      "latitude": 42.7008,
      "longitude": 9.4503,
      "country_code": "FR"
    },
    {
      "city": "El Kef",
      "latitude": 36.1826,
      "longitude": 8.7148,
      "country_code": "TN"
    },
    {
      "city": "Havant",
      "latitude": 50.85,
      "longitude": -0.98,
      "country_code": "GB"
    },
    {
      "city": "Talence",
      "latitude": 44.8,
      "longitude": -0.584,
      "country_code": "FR"
    },
    {
      "city": "Inuma",
      "latitude": 36,
      "longitude": 139.6239,
      "country_code": "JP"
    },
    {
      "city": "Leribe",
      "latitude": -28.8734,
      "longitude": 28.0416,
      "country_code": "LS"
    },
    {
      "city": "Chalon-sur-Saône",
      "latitude": 46.7806,
      "longitude": 4.8528,
      "country_code": "FR"
    },
    {
      "city": "Kanash",
      "latitude": 55.5167,
      "longitude": 47.5,
      "country_code": "RU"
    },
    {
      "city": "Hinckley",
      "latitude": 52.5413,
      "longitude": -1.3725,
      "country_code": "GB"
    },
    {
      "city": "Njombe",
      "latitude": -9.3296,
      "longitude": 34.77,
      "country_code": "TZ"
    },
    {
      "city": "Erith",
      "latitude": 51.48,
      "longitude": 0.1778,
      "country_code": "GB"
    },
    {
      "city": "New Amsterdam",
      "latitude": 6.25,
      "longitude": -57.5167,
      "country_code": "GY"
    },
    {
      "city": "Karmi’el",
      "latitude": 32.9,
      "longitude": 35.2833,
      "country_code": "IL"
    },
    {
      "city": "Morley",
      "latitude": 53.7492,
      "longitude": -1.6023,
      "country_code": "GB"
    },
    {
      "city": "Ḩajjah",
      "latitude": 15.695,
      "longitude": 43.5975,
      "country_code": "YE"
    },
    {
      "city": "Empalme",
      "latitude": 27.9617,
      "longitude": -110.8125,
      "country_code": "MX"
    },
    {
      "city": "Kokkola",
      "latitude": 63.8333,
      "longitude": 23.1333,
      "country_code": "FI"
    },
    {
      "city": "Middelburg",
      "latitude": 51.502,
      "longitude": 3.61,
      "country_code": "NL"
    },
    {
      "city": "Covina",
      "latitude": 34.0903,
      "longitude": -117.8817,
      "country_code": "US"
    },
    {
      "city": "Bang Kruai",
      "latitude": 13.8042,
      "longitude": 100.4755,
      "country_code": "TH"
    },
    {
      "city": "Tepalcatepec",
      "latitude": 19.1833,
      "longitude": -102.85,
      "country_code": "MX"
    },
    {
      "city": "Caluire-et-Cuire",
      "latitude": 45.7953,
      "longitude": 4.8472,
      "country_code": "FR"
    },
    {
      "city": "Antelope",
      "latitude": 38.7153,
      "longitude": -121.361,
      "country_code": "US"
    },
    {
      "city": "Murzuq",
      "latitude": 25.9136,
      "longitude": 13.9336,
      "country_code": "LY"
    },
    {
      "city": "Rosso",
      "latitude": 16.5128,
      "longitude": -15.805,
      "country_code": "MR"
    },
    {
      "city": "Naj‘ Ḩammādī",
      "latitude": 26.05,
      "longitude": 32.25,
      "country_code": "EG"
    },
    {
      "city": "Charenton-le-Pont",
      "latitude": 48.8265,
      "longitude": 2.405,
      "country_code": "FR"
    },
    {
      "city": "Chitré",
      "latitude": 7.9667,
      "longitude": -80.4333,
      "country_code": "PA"
    },
    {
      "city": "Salgueiro",
      "latitude": -8.0742,
      "longitude": -39.1192,
      "country_code": "BR"
    },
    {
      "city": "Badulla",
      "latitude": 6.9847,
      "longitude": 81.0564,
      "country_code": "LK"
    },
    {
      "city": "Nagykanizsa",
      "latitude": 46.4558,
      "longitude": 16.9975,
      "country_code": "HU"
    },
    {
      "city": "Malakoff",
      "latitude": 48.8169,
      "longitude": 2.2944,
      "country_code": "FR"
    },
    {
      "city": "Welling",
      "latitude": 51.4594,
      "longitude": 0.1097,
      "country_code": "GB"
    },
    {
      "city": "Viti",
      "latitude": 42.3167,
      "longitude": 21.35,
      "country_code": "XK"
    },
    {
      "city": "Boosaaso",
      "latitude": 11.28,
      "longitude": 49.18,
      "country_code": "SO"
    },
    {
      "city": "Izúcar de Matamoros",
      "latitude": 18.6,
      "longitude": -98.4667,
      "country_code": "MX"
    },
    {
      "city": "Qiryat Ono",
      "latitude": 32.0636,
      "longitude": 34.8553,
      "country_code": "IL"
    },
    {
      "city": "Castleford",
      "latitude": 53.716,
      "longitude": -1.356,
      "country_code": "GB"
    },
    {
      "city": "Santiago",
      "latitude": 8.1004,
      "longitude": -80.9833,
      "country_code": "PA"
    },
    {
      "city": "Le Cannet",
      "latitude": 43.5769,
      "longitude": 7.0194,
      "country_code": "FR"
    },
    {
      "city": "Fareham",
      "latitude": 50.85,
      "longitude": -1.18,
      "country_code": "GB"
    },
    {
      "city": "Kanye",
      "latitude": -24.9833,
      "longitude": 25.35,
      "country_code": "BW"
    },
    {
      "city": "Embu",
      "latitude": -0.5333,
      "longitude": 37.45,
      "country_code": "KE"
    },
    {
      "city": "Choma",
      "latitude": -16.8095,
      "longitude": 26.97,
      "country_code": "ZM"
    },
    {
      "city": "Saint-Brieuc",
      "latitude": 48.5136,
      "longitude": -2.7653,
      "country_code": "FR"
    },
    {
      "city": "Aweil",
      "latitude": 8.7666,
      "longitude": 27.4,
      "country_code": "SS"
    },
    {
      "city": "Östersund",
      "latitude": 63.1833,
      "longitude": 14.65,
      "country_code": "SE"
    },
    {
      "city": "Merthyr Tudful",
      "latitude": 51.743,
      "longitude": -3.378,
      "country_code": "GB"
    },
    {
      "city": "Stains",
      "latitude": 48.95,
      "longitude": 2.3833,
      "country_code": "FR"
    },
    {
      "city": "Rye",
      "latitude": 41.0076,
      "longitude": -73.6872,
      "country_code": "US"
    },
    {
      "city": "Trollhättan",
      "latitude": 58.2671,
      "longitude": 12.3,
      "country_code": "SE"
    },
    {
      "city": "Valenciennes",
      "latitude": 50.358,
      "longitude": 3.5233,
      "country_code": "FR"
    },
    {
      "city": "Mahdia",
      "latitude": 35.4839,
      "longitude": 11.0409,
      "country_code": "TN"
    },
    {
      "city": "Everett",
      "latitude": 42.4064,
      "longitude": -71.0545,
      "country_code": "US"
    },
    {
      "city": "Šibenik",
      "latitude": 43.7339,
      "longitude": 15.8956,
      "country_code": "HR"
    },
    {
      "city": "Cobija",
      "latitude": -11.0183,
      "longitude": -68.7537,
      "country_code": "BO"
    },
    {
      "city": "University",
      "latitude": 28.0771,
      "longitude": -82.4335,
      "country_code": "US"
    },
    {
      "city": "Urmston",
      "latitude": 53.4487,
      "longitude": -2.3747,
      "country_code": "GB"
    },
    {
      "city": "Antigua Guatemala",
      "latitude": 14.5567,
      "longitude": -90.7337,
      "country_code": "GT"
    },
    {
      "city": "Nueva Gerona",
      "latitude": 21.8847,
      "longitude": -82.8011,
      "country_code": "CU"
    },
    {
      "city": "Sololá",
      "latitude": 14.773,
      "longitude": -91.183,
      "country_code": "GT"
    },
    {
      "city": "Slobozia",
      "latitude": 44.5639,
      "longitude": 27.3661,
      "country_code": "RO"
    },
    {
      "city": "Vilvoorde",
      "latitude": 50.9281,
      "longitude": 4.4245,
      "country_code": "BE"
    },
    {
      "city": "Penedo",
      "latitude": -10.2903,
      "longitude": -36.5864,
      "country_code": "BR"
    },
    {
      "city": "Kingswood",
      "latitude": 51.46,
      "longitude": -2.505,
      "country_code": "GB"
    },
    {
      "city": "Araranguá",
      "latitude": -28.9357,
      "longitude": -49.4954,
      "country_code": "BR"
    },
    {
      "city": "Jerada",
      "latitude": 34.31,
      "longitude": -2.16,
      "country_code": "MA"
    },
    {
      "city": "Gbarnga",
      "latitude": 7.0104,
      "longitude": -9.49,
      "country_code": "LR"
    },
    {
      "city": "Alexandria",
      "latitude": 43.9686,
      "longitude": 25.3333,
      "country_code": "RO"
    },
    {
      "city": "Madīnat ‘Īsá",
      "latitude": 26.1736,
      "longitude": 50.5478,
      "country_code": "BH"
    },
    {
      "city": "Frutal",
      "latitude": -20.0247,
      "longitude": -48.9406,
      "country_code": "BR"
    },
    {
      "city": "Thun",
      "latitude": 46.759,
      "longitude": 7.63,
      "country_code": "CH"
    },
    {
      "city": "Vanves",
      "latitude": 48.8208,
      "longitude": 2.2897,
      "country_code": "FR"
    },
    {
      "city": "Buta",
      "latitude": 2.82,
      "longitude": 24.74,
      "country_code": "CD"
    },
    {
      "city": "Targovishte",
      "latitude": 43.2467,
      "longitude": 26.5719,
      "country_code": "BG"
    },
    {
      "city": "Jáltipan de Morelos",
      "latitude": 17.9703,
      "longitude": -94.7144,
      "country_code": "MX"
    },
    {
      "city": "Bluefields",
      "latitude": 12,
      "longitude": -83.75,
      "country_code": "NI"
    },
    {
      "city": "Bron",
      "latitude": 45.7394,
      "longitude": 4.9139,
      "country_code": "FR"
    },
    {
      "city": "Strumica",
      "latitude": 41.4375,
      "longitude": 22.6431,
      "country_code": "MK"
    },
    {
      "city": "Liberia",
      "latitude": 10.6338,
      "longitude": -85.4333,
      "country_code": "CR"
    },
    {
      "city": "Bellinzona",
      "latitude": 46.1956,
      "longitude": 9.0238,
      "country_code": "CH"
    },
    {
      "city": "Pattani",
      "latitude": 6.8664,
      "longitude": 101.2508,
      "country_code": "TH"
    },
    {
      "city": "Artigas",
      "latitude": -30.4667,
      "longitude": -56.4667,
      "country_code": "UY"
    },
    {
      "city": "Pénjamo",
      "latitude": 20.4311,
      "longitude": -101.7222,
      "country_code": "MX"
    },
    {
      "city": "Pinneberg",
      "latitude": 53.6591,
      "longitude": 9.8009,
      "country_code": "DE"
    },
    {
      "city": "Palmeira dos Índios",
      "latitude": -9.4166,
      "longitude": -36.6166,
      "country_code": "BR"
    },
    {
      "city": "Gagny",
      "latitude": 48.8833,
      "longitude": 2.5333,
      "country_code": "FR"
    },
    {
      "city": "Newbury",
      "latitude": 51.401,
      "longitude": -1.323,
      "country_code": "GB"
    },
    {
      "city": "Oakland Park",
      "latitude": 26.178,
      "longitude": -80.1528,
      "country_code": "US"
    },
    {
      "city": "Veles",
      "latitude": 41.7153,
      "longitude": 21.7753,
      "country_code": "MK"
    },
    {
      "city": "Arlington",
      "latitude": 42.4187,
      "longitude": -71.164,
      "country_code": "US"
    },
    {
      "city": "Altadena",
      "latitude": 34.1928,
      "longitude": -118.1345,
      "country_code": "US"
    },
    {
      "city": "Melun",
      "latitude": 48.5406,
      "longitude": 2.66,
      "country_code": "FR"
    },
    {
      "city": "Dunaújváros",
      "latitude": 46.9833,
      "longitude": 18.9167,
      "country_code": "HU"
    },
    {
      "city": "Sutton",
      "latitude": 51.3656,
      "longitude": -0.1963,
      "country_code": "GB"
    },
    {
      "city": "Jaguaquara",
      "latitude": -13.53,
      "longitude": -39.97,
      "country_code": "BR"
    },
    {
      "city": "Bridgwater",
      "latitude": 51.128,
      "longitude": -2.993,
      "country_code": "GB"
    },
    {
      "city": "Kabale",
      "latitude": -1.2496,
      "longitude": 29.98,
      "country_code": "UG"
    },
    {
      "city": "Świdnik",
      "latitude": 51.2333,
      "longitude": 22.7,
      "country_code": "PL"
    },
    {
      "city": "Pinheiro",
      "latitude": -2.5196,
      "longitude": -45.09,
      "country_code": "BR"
    },
    {
      "city": "Russas",
      "latitude": -4.9403,
      "longitude": -37.9758,
      "country_code": "BR"
    },
    {
      "city": "Qiryat Bialik",
      "latitude": 32.8331,
      "longitude": 35.0664,
      "country_code": "IL"
    },
    {
      "city": "Bishops Stortford",
      "latitude": 51.872,
      "longitude": 0.1725,
      "country_code": "GB"
    },
    {
      "city": "Trujillo Alto",
      "latitude": 18.3601,
      "longitude": -66.0103,
      "country_code": "PR"
    },
    {
      "city": "Bois-Colombes",
      "latitude": 48.9175,
      "longitude": 2.2683,
      "country_code": "FR"
    },
    {
      "city": "Lecherías",
      "latitude": 10.1889,
      "longitude": -64.6951,
      "country_code": "VE"
    },
    {
      "city": "Umm al Qaywayn",
      "latitude": 25.5653,
      "longitude": 55.5533,
      "country_code": "AE"
    },
    {
      "city": "Duncan",
      "latitude": 48.7787,
      "longitude": -123.7079,
      "country_code": "CA"
    },
    {
      "city": "El Aïoun",
      "latitude": 34.5853,
      "longitude": -2.5056,
      "country_code": "MA"
    },
    {
      "city": "Kirkby",
      "latitude": 53.4826,
      "longitude": -2.892,
      "country_code": "GB"
    },
    {
      "city": "Salisbury",
      "latitude": 51.074,
      "longitude": -1.7936,
      "country_code": "GB"
    },
    {
      "city": "Boumerdes",
      "latitude": 36.7594,
      "longitude": 3.4728,
      "country_code": "DZ"
    },
    {
      "city": "North Lauderdale",
      "latitude": 26.2113,
      "longitude": -80.2209,
      "country_code": "US"
    },
    {
      "city": "Caerphilly",
      "latitude": 51.578,
      "longitude": -3.218,
      "country_code": "GB"
    },
    {
      "city": "Tarbes",
      "latitude": 43.23,
      "longitude": 0.07,
      "country_code": "FR"
    },
    {
      "city": "Hackensack",
      "latitude": 40.889,
      "longitude": -74.0461,
      "country_code": "US"
    },
    {
      "city": "Arras",
      "latitude": 50.292,
      "longitude": 2.78,
      "country_code": "FR"
    },
    {
      "city": "Caloundra",
      "latitude": -26.7986,
      "longitude": 153.1289,
      "country_code": "AU"
    },
    {
      "city": "Rezé",
      "latitude": 47.1833,
      "longitude": -1.55,
      "country_code": "FR"
    },
    {
      "city": "Wattrelos",
      "latitude": 50.7,
      "longitude": 3.217,
      "country_code": "FR"
    },
    {
      "city": "Kampong Chhnang",
      "latitude": 12.25,
      "longitude": 104.6667,
      "country_code": "KH"
    },
    {
      "city": "Cleveland Heights",
      "latitude": 41.5112,
      "longitude": -81.5636,
      "country_code": "US"
    },
    {
      "city": "Fort Portal",
      "latitude": 0.671,
      "longitude": 30.275,
      "country_code": "UG"
    },
    {
      "city": "Ermezinde",
      "latitude": 41.2133,
      "longitude": -8.5472,
      "country_code": "PT"
    },
    {
      "city": "Haedo",
      "latitude": -34.65,
      "longitude": -58.6,
      "country_code": "AR"
    },
    {
      "city": "Paracho de Verduzco",
      "latitude": 19.65,
      "longitude": -102.0667,
      "country_code": "MX"
    },
    {
      "city": "Štip",
      "latitude": 41.7358,
      "longitude": 22.1914,
      "country_code": "MK"
    },
    {
      "city": "Annandale",
      "latitude": 38.8324,
      "longitude": -77.196,
      "country_code": "US"
    },
    {
      "city": "Drogheda",
      "latitude": 53.7139,
      "longitude": -6.3503,
      "country_code": "IE"
    },
    {
      "city": "Shefar‘am",
      "latitude": 32.8056,
      "longitude": 35.1694,
      "country_code": "IL"
    },
    {
      "city": "Munro",
      "latitude": -34.5333,
      "longitude": -58.5167,
      "country_code": "AR"
    },
    {
      "city": "Mineiros",
      "latitude": -17.5694,
      "longitude": -52.5511,
      "country_code": "BR"
    },
    {
      "city": "Concord",
      "latitude": 43.2305,
      "longitude": -71.5595,
      "country_code": "US"
    },
    {
      "city": "Uman",
      "latitude": 20.8833,
      "longitude": -89.75,
      "country_code": "MX"
    },
    {
      "city": "Grays",
      "latitude": 51.475,
      "longitude": 0.33,
      "country_code": "GB"
    },
    {
      "city": "Remanso",
      "latitude": -9.5996,
      "longitude": -42.11,
      "country_code": "BR"
    },
    {
      "city": "Abingdon",
      "latitude": 51.667,
      "longitude": -1.283,
      "country_code": "GB"
    },
    {
      "city": "Nanuque",
      "latitude": -17.8392,
      "longitude": -40.3539,
      "country_code": "BR"
    },
    {
      "city": "San Diego de la Unión",
      "latitude": 21.4656,
      "longitude": -100.8736,
      "country_code": "MX"
    },
    {
      "city": "Hódmezővásárhely",
      "latitude": 46.4303,
      "longitude": 20.3189,
      "country_code": "HU"
    },
    {
      "city": "Ramsgate",
      "latitude": 51.336,
      "longitude": 1.416,
      "country_code": "GB"
    },
    {
      "city": "Kalmar",
      "latitude": 56.6694,
      "longitude": 16.3218,
      "country_code": "SE"
    },
    {
      "city": "Nogent-sur-Marne",
      "latitude": 48.8375,
      "longitude": 2.4833,
      "country_code": "FR"
    },
    {
      "city": "Rohnert Park",
      "latitude": 38.348,
      "longitude": -122.6964,
      "country_code": "US"
    },
    {
      "city": "Zugdidi",
      "latitude": 42.5083,
      "longitude": 41.8667,
      "country_code": "GE"
    },
    {
      "city": "Mityana",
      "latitude": 0.4004,
      "longitude": 32.05,
      "country_code": "UG"
    },
    {
      "city": "Cacém",
      "latitude": 38.7704,
      "longitude": -9.3081,
      "country_code": "PT"
    },
    {
      "city": "Le Kremlin-Bicêtre",
      "latitude": 48.81,
      "longitude": 2.3581,
      "country_code": "FR"
    },
    {
      "city": "Diamantina",
      "latitude": -18.24,
      "longitude": -43.61,
      "country_code": "BR"
    },
    {
      "city": "Salem",
      "latitude": 42.5129,
      "longitude": -70.902,
      "country_code": "US"
    },
    {
      "city": "Ilkeston",
      "latitude": 52.971,
      "longitude": -1.309,
      "country_code": "GB"
    },
    {
      "city": "Kapan",
      "latitude": 39.2011,
      "longitude": 46.415,
      "country_code": "AM"
    },
    {
      "city": "Aldershot",
      "latitude": 51.248,
      "longitude": -0.758,
      "country_code": "GB"
    },
    {
      "city": "Cleethorpes",
      "latitude": 53.5533,
      "longitude": -0.0215,
      "country_code": "GB"
    },
    {
      "city": "Minas",
      "latitude": -34.3667,
      "longitude": -55.2333,
      "country_code": "UY"
    },
    {
      "city": "Leighton Buzzard",
      "latitude": 51.9165,
      "longitude": -0.6617,
      "country_code": "GB"
    },
    {
      "city": "Alajuela",
      "latitude": 10.0278,
      "longitude": -84.2041,
      "country_code": "CR"
    },
    {
      "city": "Whitney",
      "latitude": 36.1005,
      "longitude": -115.038,
      "country_code": "US"
    },
    {
      "city": "North Miami Beach",
      "latitude": 25.9302,
      "longitude": -80.166,
      "country_code": "US"
    },
    {
      "city": "Franceville",
      "latitude": -1.6333,
      "longitude": 13.5833,
      "country_code": "GA"
    },
    {
      "city": "Garbahaarrey",
      "latitude": 3.35,
      "longitude": 42.2667,
      "country_code": "SO"
    },
    {
      "city": "Perote",
      "latitude": 19.562,
      "longitude": -97.242,
      "country_code": "MX"
    },
    {
      "city": "Xique-Xique",
      "latitude": -10.8229,
      "longitude": -42.7281,
      "country_code": "BR"
    },
    {
      "city": "Freeport",
      "latitude": 40.6515,
      "longitude": -73.585,
      "country_code": "US"
    },
    {
      "city": "West Babylon",
      "latitude": 40.7112,
      "longitude": -73.3567,
      "country_code": "US"
    },
    {
      "city": "Dubrovnik",
      "latitude": 42.6403,
      "longitude": 18.1083,
      "country_code": "HR"
    },
    {
      "city": "Blyth",
      "latitude": 55.126,
      "longitude": -1.514,
      "country_code": "GB"
    },
    {
      "city": "Ciudad Manuel Doblado",
      "latitude": 20.7303,
      "longitude": -101.9533,
      "country_code": "MX"
    },
    {
      "city": "San Bruno",
      "latitude": 37.6254,
      "longitude": -122.4313,
      "country_code": "US"
    },
    {
      "city": "Quinhámel",
      "latitude": 11.8869,
      "longitude": -15.8556,
      "country_code": "GW"
    },
    {
      "city": "Le Perreux-Sur-Marne",
      "latitude": 48.8422,
      "longitude": 2.5036,
      "country_code": "FR"
    },
    {
      "city": "Silistra",
      "latitude": 44.1186,
      "longitude": 27.2603,
      "country_code": "BG"
    },
    {
      "city": "Hicksville",
      "latitude": 40.7637,
      "longitude": -73.5245,
      "country_code": "US"
    },
    {
      "city": "Guarda",
      "latitude": 40.5364,
      "longitude": -7.2683,
      "country_code": "PT"
    },
    {
      "city": "Si Sa Ket",
      "latitude": 15.1069,
      "longitude": 104.3294,
      "country_code": "TH"
    },
    {
      "city": "Aldridge",
      "latitude": 52.606,
      "longitude": -1.9179,
      "country_code": "GB"
    },
    {
      "city": "Nakama",
      "latitude": 33.8167,
      "longitude": 130.709,
      "country_code": "JP"
    },
    {
      "city": "Kampot",
      "latitude": 10.6,
      "longitude": 104.1667,
      "country_code": "KH"
    },
    {
      "city": "Fribourg",
      "latitude": 46.8,
      "longitude": 7.15,
      "country_code": "CH"
    },
    {
      "city": "Long Eaton",
      "latitude": 52.898,
      "longitude": -1.271,
      "country_code": "GB"
    },
    {
      "city": "Annemasse",
      "latitude": 46.1958,
      "longitude": 6.2364,
      "country_code": "FR"
    },
    {
      "city": "La Barca",
      "latitude": 20.2903,
      "longitude": -102.5456,
      "country_code": "MX"
    },
    {
      "city": "Arnold",
      "latitude": 53.005,
      "longitude": -1.127,
      "country_code": "GB"
    },
    {
      "city": "Lovech",
      "latitude": 43.1342,
      "longitude": 24.7172,
      "country_code": "BG"
    },
    {
      "city": "Itapecuru Mirim",
      "latitude": -3.3925,
      "longitude": -44.3586,
      "country_code": "BR"
    },
    {
      "city": "Berat",
      "latitude": 40.7049,
      "longitude": 19.9497,
      "country_code": "AL"
    },
    {
      "city": "Small Heath",
      "latitude": 52.4629,
      "longitude": -1.8542,
      "country_code": "GB"
    },
    {
      "city": "Myrhorod",
      "latitude": 49.964,
      "longitude": 33.6124,
      "country_code": "UA"
    },
    {
      "city": "Sidi Bouzid",
      "latitude": 35.0167,
      "longitude": 9.5,
      "country_code": "TN"
    },
    {
      "city": "Ardahan",
      "latitude": 41.1167,
      "longitude": 42.7,
      "country_code": "TR"
    },
    {
      "city": "Saint-Martin-d’Hères",
      "latitude": 45.1672,
      "longitude": 5.7653,
      "country_code": "FR"
    },
    {
      "city": "Douai",
      "latitude": 50.3714,
      "longitude": 3.08,
      "country_code": "FR"
    },
    {
      "city": "Dock Sur",
      "latitude": -34.6417,
      "longitude": -58.3478,
      "country_code": "AR"
    },
    {
      "city": "Bambari",
      "latitude": 5.7667,
      "longitude": 20.6833,
      "country_code": "CF"
    },
    {
      "city": "Herne Bay",
      "latitude": 51.37,
      "longitude": 1.13,
      "country_code": "GB"
    },
    {
      "city": "Tonalá",
      "latitude": 16.0894,
      "longitude": -93.7514,
      "country_code": "MX"
    },
    {
      "city": "Joaçaba",
      "latitude": -27.17,
      "longitude": -51.5,
      "country_code": "BR"
    },
    {
      "city": "Cao Bằng",
      "latitude": 22.6731,
      "longitude": 106.25,
      "country_code": "VN"
    },
    {
      "city": "San José",
      "latitude": -34.3333,
      "longitude": -56.7167,
      "country_code": "UY"
    },
    {
      "city": "Aberdare",
      "latitude": 51.713,
      "longitude": -3.445,
      "country_code": "GB"
    },
    {
      "city": "Franconville",
      "latitude": 48.9889,
      "longitude": 2.2314,
      "country_code": "FR"
    },
    {
      "city": "Damān",
      "latitude": 20.417,
      "longitude": 72.85,
      "country_code": "IN"
    },
    {
      "city": "Bell Gardens",
      "latitude": 33.9663,
      "longitude": -118.155,
      "country_code": "US"
    },
    {
      "city": "Laguna",
      "latitude": -28.48,
      "longitude": -48.78,
      "country_code": "BR"
    },
    {
      "city": "Razgrad",
      "latitude": 43.5267,
      "longitude": 26.5242,
      "country_code": "BG"
    },
    {
      "city": "Glenrothes",
      "latitude": 56.198,
      "longitude": -3.178,
      "country_code": "GB"
    },
    {
      "city": "Savigny-sur-Orge",
      "latitude": 48.6797,
      "longitude": 2.3457,
      "country_code": "FR"
    },
    {
      "city": "Kahama",
      "latitude": -3.84,
      "longitude": 32.6,
      "country_code": "TZ"
    },
    {
      "city": "Amudālavalasa",
      "latitude": 18.4167,
      "longitude": 83.9,
      "country_code": "IN"
    },
    {
      "city": "Lindi",
      "latitude": -9.9969,
      "longitude": 39.7144,
      "country_code": "TZ"
    },
    {
      "city": "Chiquimula",
      "latitude": 14.797,
      "longitude": -89.544,
      "country_code": "GT"
    },
    {
      "city": "Campbell",
      "latitude": 37.2802,
      "longitude": -121.9538,
      "country_code": "US"
    },
    {
      "city": "Port Talbot",
      "latitude": 51.5906,
      "longitude": -3.7986,
      "country_code": "GB"
    },
    {
      "city": "Bodø",
      "latitude": 67.2827,
      "longitude": 14.3751,
      "country_code": "NO"
    },
    {
      "city": "Puntarenas",
      "latitude": 9.9764,
      "longitude": -84.8339,
      "country_code": "CR"
    },
    {
      "city": "Woonsocket",
      "latitude": 42.001,
      "longitude": -71.4993,
      "country_code": "US"
    },
    {
      "city": "Xico",
      "latitude": 19.417,
      "longitude": -97,
      "country_code": "MX"
    },
    {
      "city": "Narathiwat",
      "latitude": 6.4264,
      "longitude": 101.8231,
      "country_code": "TH"
    },
    {
      "city": "Nueva Rosita",
      "latitude": 27.939,
      "longitude": -101.218,
      "country_code": "MX"
    },
    {
      "city": "Coroatá",
      "latitude": -4.13,
      "longitude": -44.1242,
      "country_code": "BR"
    },
    {
      "city": "La Paz",
      "latitude": 14.3169,
      "longitude": -87.6831,
      "country_code": "HN"
    },
    {
      "city": "Villa Adelina",
      "latitude": -34.5175,
      "longitude": -58.5475,
      "country_code": "AR"
    },
    {
      "city": "Morshansk",
      "latitude": 53.45,
      "longitude": 41.8,
      "country_code": "RU"
    },
    {
      "city": "Échirolles",
      "latitude": 45.1436,
      "longitude": 5.7183,
      "country_code": "FR"
    },
    {
      "city": "Palayan City",
      "latitude": 15.5333,
      "longitude": 121.0833,
      "country_code": "PH"
    },
    {
      "city": "Lusambo",
      "latitude": -4.9696,
      "longitude": 23.43,
      "country_code": "CD"
    },
    {
      "city": "Salvatierra",
      "latitude": 20.2156,
      "longitude": -100.8961,
      "country_code": "MX"
    },
    {
      "city": "Marcq-en-Baroeul",
      "latitude": 50.6711,
      "longitude": 3.0972,
      "country_code": "FR"
    },
    {
      "city": "Villarrica",
      "latitude": -25.75,
      "longitude": -56.4333,
      "country_code": "PY"
    },
    {
      "city": "Saurimo",
      "latitude": -9.6596,
      "longitude": 20.39,
      "country_code": "AO"
    },
    {
      "city": "Kisii",
      "latitude": -0.6817,
      "longitude": 34.7667,
      "country_code": "KE"
    },
    {
      "city": "Oriximiná",
      "latitude": -1.7656,
      "longitude": -55.8661,
      "country_code": "BR"
    },
    {
      "city": "Kozáni",
      "latitude": 40.3007,
      "longitude": 21.789,
      "country_code": "GR"
    },
    {
      "city": "Puerto Francisco de Orellana",
      "latitude": -0.4625,
      "longitude": -76.9842,
      "country_code": "EC"
    },
    {
      "city": "Vredenburg",
      "latitude": -32.9,
      "longitude": 17.9833,
      "country_code": "ZA"
    },
    {
      "city": "Malbork",
      "latitude": 54.0285,
      "longitude": 19.0444,
      "country_code": "PL"
    },
    {
      "city": "Panaji",
      "latitude": 15.48,
      "longitude": 73.83,
      "country_code": "IN"
    },
    {
      "city": "Greenacres",
      "latitude": 26.6272,
      "longitude": -80.1371,
      "country_code": "US"
    },
    {
      "city": "Villefranche-sur-Saône",
      "latitude": 45.9833,
      "longitude": 4.7167,
      "country_code": "FR"
    },
    {
      "city": "Hyde",
      "latitude": 53.4474,
      "longitude": -2.082,
      "country_code": "GB"
    },
    {
      "city": "Famagusta",
      "latitude": 35.1167,
      "longitude": 33.95,
      "country_code": "CY"
    },
    {
      "city": "Cachan",
      "latitude": 48.7919,
      "longitude": 2.3319,
      "country_code": "FR"
    },
    {
      "city": "Ngozi",
      "latitude": -2.9,
      "longitude": 29.8167,
      "country_code": "BI"
    },
    {
      "city": "Miyoshidai",
      "latitude": 35.8283,
      "longitude": 139.5267,
      "country_code": "JP"
    },
    {
      "city": "Barreiros",
      "latitude": -8.8183,
      "longitude": -35.1864,
      "country_code": "BR"
    },
    {
      "city": "Chartres",
      "latitude": 48.456,
      "longitude": 1.484,
      "country_code": "FR"
    },
    {
      "city": "Wilkes-Barre",
      "latitude": 41.2468,
      "longitude": -75.8759,
      "country_code": "US"
    },
    {
      "city": "Fleet",
      "latitude": 51.2834,
      "longitude": -0.8456,
      "country_code": "GB"
    },
    {
      "city": "Şəmkir",
      "latitude": 40.8564,
      "longitude": 46.0172,
      "country_code": "AZ"
    },
    {
      "city": "Pärnu",
      "latitude": 58.3844,
      "longitude": 24.4989,
      "country_code": "EE"
    },
    {
      "city": "Whitley Bay",
      "latitude": 55.0456,
      "longitude": -1.4443,
      "country_code": "GB"
    },
    {
      "city": "Dún Dealgan",
      "latitude": 54.009,
      "longitude": -6.4049,
      "country_code": "IE"
    },
    {
      "city": "Al Karnak",
      "latitude": 25.7184,
      "longitude": 32.6581,
      "country_code": "EG"
    },
    {
      "city": "Rosário do Sul",
      "latitude": -30.2583,
      "longitude": -54.9142,
      "country_code": "BR"
    },
    {
      "city": "Teaneck",
      "latitude": 40.89,
      "longitude": -74.0107,
      "country_code": "US"
    },
    {
      "city": "Poissy",
      "latitude": 48.9294,
      "longitude": 2.0456,
      "country_code": "FR"
    },
    {
      "city": "Bjelovar",
      "latitude": 45.8989,
      "longitude": 16.8422,
      "country_code": "HR"
    },
    {
      "city": "Al Bayḑā’",
      "latitude": 13.979,
      "longitude": 45.574,
      "country_code": "YE"
    },
    {
      "city": "Waipahu",
      "latitude": 21.3858,
      "longitude": -158.0103,
      "country_code": "US"
    },
    {
      "city": "Yambio",
      "latitude": 4.5705,
      "longitude": 28.4163,
      "country_code": "SS"
    },
    {
      "city": "Bouar",
      "latitude": 5.95,
      "longitude": 15.6,
      "country_code": "CF"
    },
    {
      "city": "Beeston",
      "latitude": 52.927,
      "longitude": -1.215,
      "country_code": "GB"
    },
    {
      "city": "Kanie",
      "latitude": 35.1322,
      "longitude": 136.7869,
      "country_code": "JP"
    },
    {
      "city": "Villepinte",
      "latitude": 48.955,
      "longitude": 2.541,
      "country_code": "FR"
    },
    {
      "city": "Ban Sai Ma Tai",
      "latitude": 13.8444,
      "longitude": 100.4829,
      "country_code": "TH"
    },
    {
      "city": "Camberley",
      "latitude": 51.335,
      "longitude": -0.742,
      "country_code": "GB"
    },
    {
      "city": "Agualva",
      "latitude": 38.77,
      "longitude": -9.2988,
      "country_code": "PT"
    },
    {
      "city": "Kaya",
      "latitude": 13.0904,
      "longitude": -1.09,
      "country_code": "BF"
    },
    {
      "city": "Al Wāsiţah",
      "latitude": 29.3372,
      "longitude": 31.2036,
      "country_code": "EG"
    },
    {
      "city": "Inongo",
      "latitude": -1.94,
      "longitude": 18.28,
      "country_code": "CD"
    },
    {
      "city": "Montclair",
      "latitude": 34.0714,
      "longitude": -117.698,
      "country_code": "US"
    },
    {
      "city": "Retalhuleu",
      "latitude": 14.5333,
      "longitude": -91.6833,
      "country_code": "GT"
    },
    {
      "city": "Maués",
      "latitude": -3.3896,
      "longitude": -57.72,
      "country_code": "BR"
    },
    {
      "city": "Deçan",
      "latitude": 42.5333,
      "longitude": 20.2833,
      "country_code": "XK"
    },
    {
      "city": "Dunstable",
      "latitude": 51.886,
      "longitude": -0.521,
      "country_code": "GB"
    },
    {
      "city": "Xaçmaz",
      "latitude": 41.4681,
      "longitude": 48.8028,
      "country_code": "AZ"
    },
    {
      "city": "Chachoengsao",
      "latitude": 13.6903,
      "longitude": 101.0703,
      "country_code": "TH"
    },
    {
      "city": "Bletchley",
      "latitude": 51.994,
      "longitude": -0.732,
      "country_code": "GB"
    },
    {
      "city": "Sainte-Geneviève-des-Bois",
      "latitude": 48.6369,
      "longitude": 2.3403,
      "country_code": "FR"
    },
    {
      "city": "Denton",
      "latitude": 53.4554,
      "longitude": -2.1122,
      "country_code": "GB"
    },
    {
      "city": "Surin",
      "latitude": 14.8833,
      "longitude": 103.4931,
      "country_code": "TH"
    },
    {
      "city": "San Gabriel",
      "latitude": 34.0948,
      "longitude": -118.099,
      "country_code": "US"
    },
    {
      "city": "Neuilly-sur-Marne",
      "latitude": 48.8537,
      "longitude": 2.549,
      "country_code": "FR"
    },
    {
      "city": "Koumra",
      "latitude": 8.9,
      "longitude": 17.55,
      "country_code": "TD"
    },
    {
      "city": "North Shields",
      "latitude": 55.0097,
      "longitude": -1.4448,
      "country_code": "GB"
    },
    {
      "city": "Zacatecoluca",
      "latitude": 13.508,
      "longitude": -88.868,
      "country_code": "SV"
    },
    {
      "city": "Hallandale Beach",
      "latitude": 25.9854,
      "longitude": -80.1423,
      "country_code": "US"
    },
    {
      "city": "Massawa",
      "latitude": 15.6,
      "longitude": 39.4333,
      "country_code": "ER"
    },
    {
      "city": "Pont-y-pŵl",
      "latitude": 51.703,
      "longitude": -3.041,
      "country_code": "GB"
    },
    {
      "city": "Santa Elena",
      "latitude": -2.2267,
      "longitude": -80.8583,
      "country_code": "EC"
    },
    {
      "city": "Kenton",
      "latitude": 51.5878,
      "longitude": -0.3086,
      "country_code": "GB"
    },
    {
      "city": "Keizer",
      "latitude": 45.0029,
      "longitude": -123.0241,
      "country_code": "US"
    },
    {
      "city": "Mochudi",
      "latitude": -24.377,
      "longitude": 26.152,
      "country_code": "BW"
    },
    {
      "city": "Vernier",
      "latitude": 46.2,
      "longitude": 6.1,
      "country_code": "CH"
    },
    {
      "city": "Chelsea",
      "latitude": 42.3959,
      "longitude": -71.0325,
      "country_code": "US"
    },
    {
      "city": "Bridlington",
      "latitude": 54.0819,
      "longitude": -0.1923,
      "country_code": "GB"
    },
    {
      "city": "Sopot",
      "latitude": 54.4419,
      "longitude": 18.5478,
      "country_code": "PL"
    },
    {
      "city": "La Puente",
      "latitude": 34.0323,
      "longitude": -117.9533,
      "country_code": "US"
    },
    {
      "city": "Conflans-Sainte-Honorine",
      "latitude": 48.9992,
      "longitude": 2.0983,
      "country_code": "FR"
    },
    {
      "city": "Tozeur",
      "latitude": 33.9304,
      "longitude": 8.13,
      "country_code": "TN"
    },
    {
      "city": "Celje",
      "latitude": 46.2291,
      "longitude": 15.2641,
      "country_code": "SI"
    },
    {
      "city": "Kendall West",
      "latitude": 25.7065,
      "longitude": -80.4388,
      "country_code": "US"
    },
    {
      "city": "Cristalina",
      "latitude": -16.7677,
      "longitude": -47.6153,
      "country_code": "BR"
    },
    {
      "city": "Florida",
      "latitude": -34.1,
      "longitude": -56.2167,
      "country_code": "UY"
    },
    {
      "city": "Port-de-Paix",
      "latitude": 19.9318,
      "longitude": -72.8295,
      "country_code": "HT"
    },
    {
      "city": "Istog",
      "latitude": 42.7833,
      "longitude": 20.4833,
      "country_code": "XK"
    },
    {
      "city": "Miercurea-Ciuc",
      "latitude": 46.3594,
      "longitude": 25.8039,
      "country_code": "RO"
    },
    {
      "city": "Mission Bend",
      "latitude": 29.6948,
      "longitude": -95.6657,
      "country_code": "US"
    },
    {
      "city": "Ağcabədi",
      "latitude": 40.0489,
      "longitude": 47.4502,
      "country_code": "AZ"
    },
    {
      "city": "Annapolis",
      "latitude": 38.9706,
      "longitude": -76.5047,
      "country_code": "US"
    },
    {
      "city": "Culver City",
      "latitude": 34.0058,
      "longitude": -118.3968,
      "country_code": "US"
    },
    {
      "city": "Walkden",
      "latitude": 53.5239,
      "longitude": -2.3991,
      "country_code": "GB"
    },
    {
      "city": "Durazno",
      "latitude": -33.3833,
      "longitude": -56.5167,
      "country_code": "UY"
    },
    {
      "city": "Houilles",
      "latitude": 48.9261,
      "longitude": 2.1892,
      "country_code": "FR"
    },
    {
      "city": "São Francisco do Sul",
      "latitude": -26.2433,
      "longitude": -48.6381,
      "country_code": "BR"
    },
    {
      "city": "Pánuco",
      "latitude": 22.05,
      "longitude": -98.1833,
      "country_code": "MX"
    },
    {
      "city": "Creil",
      "latitude": 49.2583,
      "longitude": 2.4833,
      "country_code": "FR"
    },
    {
      "city": "Nueva Italia de Ruiz",
      "latitude": 19.0194,
      "longitude": -102.1089,
      "country_code": "MX"
    },
    {
      "city": "Xam Nua",
      "latitude": 20.4133,
      "longitude": 104.048,
      "country_code": "LA"
    },
    {
      "city": "Tromsø",
      "latitude": 69.6489,
      "longitude": 18.9551,
      "country_code": "NO"
    },
    {
      "city": "Januária",
      "latitude": -15.4886,
      "longitude": -44.36,
      "country_code": "BR"
    },
    {
      "city": "Northolt",
      "latitude": 51.547,
      "longitude": -0.362,
      "country_code": "GB"
    },
    {
      "city": "Dédougou",
      "latitude": 12.4667,
      "longitude": -3.4667,
      "country_code": "BF"
    },
    {
      "city": "Frankfort",
      "latitude": 38.1924,
      "longitude": -84.8643,
      "country_code": "US"
    },
    {
      "city": "Brzeg",
      "latitude": 50.8667,
      "longitude": 17.4833,
      "country_code": "PL"
    },
    {
      "city": "Northglenn",
      "latitude": 39.9108,
      "longitude": -104.9783,
      "country_code": "US"
    },
    {
      "city": "Kavadarci",
      "latitude": 41.4328,
      "longitude": 22.0117,
      "country_code": "MK"
    },
    {
      "city": "Morrinhos",
      "latitude": -17.7311,
      "longitude": -49.0994,
      "country_code": "BR"
    },
    {
      "city": "Bərdə",
      "latitude": 40.3831,
      "longitude": 47.1186,
      "country_code": "AZ"
    },
    {
      "city": "Hà Giang",
      "latitude": 22.8233,
      "longitude": 104.9836,
      "country_code": "VN"
    },
    {
      "city": "Tuyên Quang",
      "latitude": 21.8281,
      "longitude": 105.2156,
      "country_code": "VN"
    },
    {
      "city": "Karonga",
      "latitude": -9.9329,
      "longitude": 33.9333,
      "country_code": "MW"
    },
    {
      "city": "Fort Lee",
      "latitude": 40.8509,
      "longitude": -73.9712,
      "country_code": "US"
    },
    {
      "city": "Highbury",
      "latitude": 51.552,
      "longitude": -0.097,
      "country_code": "GB"
    },
    {
      "city": "Zinacantán",
      "latitude": 16.7597,
      "longitude": -92.7222,
      "country_code": "MX"
    },
    {
      "city": "Le Plessis-Robinson",
      "latitude": 48.7811,
      "longitude": 2.2633,
      "country_code": "FR"
    },
    {
      "city": "Ewell",
      "latitude": 51.35,
      "longitude": -0.249,
      "country_code": "GB"
    },
    {
      "city": "Tunceli",
      "latitude": 39.1061,
      "longitude": 39.5481,
      "country_code": "TR"
    },
    {
      "city": "Les Lilas",
      "latitude": 48.88,
      "longitude": 2.42,
      "country_code": "FR"
    },
    {
      "city": "Lake Worth",
      "latitude": 26.6196,
      "longitude": -80.0591,
      "country_code": "US"
    },
    {
      "city": "Wisbech",
      "latitude": 52.664,
      "longitude": 0.16,
      "country_code": "GB"
    },
    {
      "city": "Bossangoa",
      "latitude": 6.4833,
      "longitude": 17.45,
      "country_code": "CF"
    },
    {
      "city": "Klinë",
      "latitude": 42.6217,
      "longitude": 20.5778,
      "country_code": "XK"
    },
    {
      "city": "Bucha",
      "latitude": 50.5464,
      "longitude": 30.235,
      "country_code": "UA"
    },
    {
      "city": "Chorley",
      "latitude": 53.653,
      "longitude": -2.632,
      "country_code": "GB"
    },
    {
      "city": "Zaïo",
      "latitude": 34.9396,
      "longitude": -2.7334,
      "country_code": "MA"
    },
    {
      "city": "Jacarèzinho",
      "latitude": -23.1606,
      "longitude": -49.9694,
      "country_code": "BR"
    },
    {
      "city": "Zeghanghane",
      "latitude": 35.1575,
      "longitude": -3.0017,
      "country_code": "MA"
    },
    {
      "city": "Hanwell",
      "latitude": 51.5189,
      "longitude": -0.3376,
      "country_code": "GB"
    },
    {
      "city": "L’Haÿ-les-Roses",
      "latitude": 48.78,
      "longitude": 2.3374,
      "country_code": "FR"
    },
    {
      "city": "Jiménez",
      "latitude": 27.13,
      "longitude": -104.9067,
      "country_code": "MX"
    },
    {
      "city": "Tuxpan",
      "latitude": 21.8667,
      "longitude": -105.45,
      "country_code": "MX"
    },
    {
      "city": "Falkirk",
      "latitude": 56.0011,
      "longitude": -3.7835,
      "country_code": "GB"
    },
    {
      "city": "Montclair",
      "latitude": 40.8254,
      "longitude": -74.211,
      "country_code": "US"
    },
    {
      "city": "Choybalsan",
      "latitude": 48.0706,
      "longitude": 114.5228,
      "country_code": "MN"
    },
    {
      "city": "Am-Timan",
      "latitude": 11.0333,
      "longitude": 20.2833,
      "country_code": "TD"
    },
    {
      "city": "Tenkodogo",
      "latitude": 11.7804,
      "longitude": -0.3697,
      "country_code": "BF"
    },
    {
      "city": "Massamá",
      "latitude": 38.7568,
      "longitude": -9.2748,
      "country_code": "PT"
    },
    {
      "city": "Trujillo",
      "latitude": 9.3667,
      "longitude": -70.4331,
      "country_code": "VE"
    },
    {
      "city": "Macuspana",
      "latitude": 17.7667,
      "longitude": -92.6,
      "country_code": "MX"
    },
    {
      "city": "Palaiseau",
      "latitude": 48.7145,
      "longitude": 2.2457,
      "country_code": "FR"
    },
    {
      "city": "Stanton",
      "latitude": 33.8002,
      "longitude": -117.9935,
      "country_code": "US"
    },
    {
      "city": "Redcar",
      "latitude": 54.618,
      "longitude": -1.069,
      "country_code": "GB"
    },
    {
      "city": "Kikinda",
      "latitude": 45.8244,
      "longitude": 20.4592,
      "country_code": "RS"
    },
    {
      "city": "Athis-Mons",
      "latitude": 48.7074,
      "longitude": 2.3889,
      "country_code": "FR"
    },
    {
      "city": "Flores",
      "latitude": 16.9337,
      "longitude": -89.8833,
      "country_code": "GT"
    },
    {
      "city": "Paphos",
      "latitude": 34.7761,
      "longitude": 32.4265,
      "country_code": "CY"
    },
    {
      "city": "Ali Sabieh",
      "latitude": 11.1558,
      "longitude": 42.7125,
      "country_code": "DJ"
    },
    {
      "city": "Adjumani",
      "latitude": 3.3614,
      "longitude": 31.8097,
      "country_code": "UG"
    },
    {
      "city": "Richmond West",
      "latitude": 25.6105,
      "longitude": -80.4297,
      "country_code": "US"
    },
    {
      "city": "Spalding",
      "latitude": 52.7858,
      "longitude": -0.1529,
      "country_code": "GB"
    },
    {
      "city": "South Miami Heights",
      "latitude": 25.5886,
      "longitude": -80.3862,
      "country_code": "US"
    },
    {
      "city": "Dori",
      "latitude": 14.05,
      "longitude": 0.05,
      "country_code": "BF"
    },
    {
      "city": "Capitão Poço",
      "latitude": -1.7464,
      "longitude": -47.0594,
      "country_code": "BR"
    },
    {
      "city": "Esch-sur-Alzette",
      "latitude": 49.4969,
      "longitude": 5.9806,
      "country_code": "LU"
    },
    {
      "city": "Escuinapa",
      "latitude": 22.9822,
      "longitude": -105.7031,
      "country_code": "MX"
    },
    {
      "city": "Kajaani",
      "latitude": 64.225,
      "longitude": 27.7333,
      "country_code": "FI"
    },
    {
      "city": "Salto del Guairá",
      "latitude": -24.02,
      "longitude": -54.34,
      "country_code": "PY"
    },
    {
      "city": "Pierrefitte-sur-Seine",
      "latitude": 48.9656,
      "longitude": 2.3614,
      "country_code": "FR"
    },
    {
      "city": "San Vicente",
      "latitude": 13.641,
      "longitude": -88.785,
      "country_code": "SV"
    },
    {
      "city": "Schaffhausen",
      "latitude": 47.6965,
      "longitude": 8.6339,
      "country_code": "CH"
    },
    {
      "city": "La Presa",
      "latitude": 32.711,
      "longitude": -117.0027,
      "country_code": "US"
    },
    {
      "city": "Valley Stream",
      "latitude": 40.6647,
      "longitude": -73.7044,
      "country_code": "US"
    },
    {
      "city": "Hanover Park",
      "latitude": 41.9819,
      "longitude": -88.1447,
      "country_code": "US"
    },
    {
      "city": "Ojuelos de Jalisco",
      "latitude": 21.8642,
      "longitude": -101.5933,
      "country_code": "MX"
    },
    {
      "city": "Hitchin",
      "latitude": 51.947,
      "longitude": -0.283,
      "country_code": "GB"
    },
    {
      "city": "East Meadow",
      "latitude": 40.7197,
      "longitude": -73.5604,
      "country_code": "US"
    },
    {
      "city": "‘Ataq",
      "latitude": 14.55,
      "longitude": 46.8,
      "country_code": "YE"
    },
    {
      "city": "Villeneuve-Saint-Georges",
      "latitude": 48.7325,
      "longitude": 2.4497,
      "country_code": "FR"
    },
    {
      "city": "Châtenay-Malabry",
      "latitude": 48.7653,
      "longitude": 2.2781,
      "country_code": "FR"
    },
    {
      "city": "Strood",
      "latitude": 51.393,
      "longitude": 0.478,
      "country_code": "GB"
    },
    {
      "city": "Clichy-sous-Bois",
      "latitude": 48.9102,
      "longitude": 2.5532,
      "country_code": "FR"
    },
    {
      "city": "Oranjestad",
      "latitude": 12.5186,
      "longitude": -70.0358,
      "country_code": "AW"
    },
    {
      "city": "Prijepolje",
      "latitude": 43.5439,
      "longitude": 19.6514,
      "country_code": "RS"
    },
    {
      "city": "Bocaiúva",
      "latitude": -17.1078,
      "longitude": -43.815,
      "country_code": "BR"
    },
    {
      "city": "Al Qunayţirah",
      "latitude": 33.1256,
      "longitude": 35.8239,
      "country_code": "SY"
    },
    {
      "city": "Chaiyaphum",
      "latitude": 15.8056,
      "longitude": 102.0311,
      "country_code": "TH"
    },
    {
      "city": "Villemomble",
      "latitude": 48.8833,
      "longitude": 2.5,
      "country_code": "FR"
    },
    {
      "city": "Egypt Lake-Leto",
      "latitude": 28.0177,
      "longitude": -82.5062,
      "country_code": "US"
    },
    {
      "city": "Swords",
      "latitude": 53.4597,
      "longitude": -6.2181,
      "country_code": "IE"
    },
    {
      "city": "Aventura",
      "latitude": 25.9565,
      "longitude": -80.1372,
      "country_code": "US"
    },
    {
      "city": "Nishihara",
      "latitude": 26.2261,
      "longitude": 127.7656,
      "country_code": "JP"
    },
    {
      "city": "Osório",
      "latitude": -29.8867,
      "longitude": -50.2697,
      "country_code": "BR"
    },
    {
      "city": "Park Ridge",
      "latitude": 42.0125,
      "longitude": -87.8436,
      "country_code": "US"
    },
    {
      "city": "Tenosique",
      "latitude": 17.4756,
      "longitude": -91.4225,
      "country_code": "MX"
    },
    {
      "city": "Thonon-les-Bains",
      "latitude": 46.3627,
      "longitude": 6.475,
      "country_code": "FR"
    },
    {
      "city": "Saint-Mandé",
      "latitude": 48.8422,
      "longitude": 2.4186,
      "country_code": "FR"
    },
    {
      "city": "Falun",
      "latitude": 60.613,
      "longitude": 15.647,
      "country_code": "SE"
    },
    {
      "city": "Letchworth",
      "latitude": 51.978,
      "longitude": -0.23,
      "country_code": "GB"
    },
    {
      "city": "Agen",
      "latitude": 44.2049,
      "longitude": 0.6212,
      "country_code": "FR"
    },
    {
      "city": "Santa Isabel",
      "latitude": 32.6314,
      "longitude": -115.5756,
      "country_code": "MX"
    },
    {
      "city": "Ratchaburi",
      "latitude": 13.5367,
      "longitude": 99.8169,
      "country_code": "TH"
    },
    {
      "city": "Wigston Magna",
      "latitude": 52.5812,
      "longitude": -1.093,
      "country_code": "GB"
    },
    {
      "city": "Saint Helier",
      "latitude": 49.1833,
      "longitude": -2.1167,
      "country_code": "JE"
    },
    {
      "city": "Marijampolė",
      "latitude": 54.5567,
      "longitude": 23.3544,
      "country_code": "LT"
    },
    {
      "city": "Roanne",
      "latitude": 46.0367,
      "longitude": 4.0689,
      "country_code": "FR"
    },
    {
      "city": "Pinner",
      "latitude": 51.5932,
      "longitude": -0.3894,
      "country_code": "GB"
    },
    {
      "city": "Bezons",
      "latitude": 48.9261,
      "longitude": 2.2178,
      "country_code": "FR"
    },
    {
      "city": "Karlskrona",
      "latitude": 56.203,
      "longitude": 15.296,
      "country_code": "SE"
    },
    {
      "city": "Ticul",
      "latitude": 20.3953,
      "longitude": -89.5339,
      "country_code": "MX"
    },
    {
      "city": "Calpulalpan",
      "latitude": 19.5869,
      "longitude": -98.5683,
      "country_code": "MX"
    },
    {
      "city": "Ebebiyín",
      "latitude": 2.15,
      "longitude": 11.3167,
      "country_code": "GQ"
    },
    {
      "city": "Trowbridge",
      "latitude": 51.32,
      "longitude": -2.21,
      "country_code": "GB"
    },
    {
      "city": "Czeladź",
      "latitude": 50.3333,
      "longitude": 19.0833,
      "country_code": "PL"
    },
    {
      "city": "Rayleigh",
      "latitude": 51.5864,
      "longitude": 0.6049,
      "country_code": "GB"
    },
    {
      "city": "West Hollywood",
      "latitude": 34.0882,
      "longitude": -118.3718,
      "country_code": "US"
    },
    {
      "city": "Earley",
      "latitude": 51.433,
      "longitude": -0.933,
      "country_code": "GB"
    },
    {
      "city": "Viry-Châtillon",
      "latitude": 48.6713,
      "longitude": 2.375,
      "country_code": "FR"
    },
    {
      "city": "Paso de Ovejas",
      "latitude": 19.285,
      "longitude": -96.44,
      "country_code": "MX"
    },
    {
      "city": "Bicester",
      "latitude": 51.9,
      "longitude": -1.15,
      "country_code": "GB"
    },
    {
      "city": "Abasolo",
      "latitude": 20.4511,
      "longitude": -101.5289,
      "country_code": "MX"
    },
    {
      "city": "Mörön",
      "latitude": 49.6375,
      "longitude": 100.1614,
      "country_code": "MN"
    },
    {
      "city": "Gisborne",
      "latitude": -38.6625,
      "longitude": 178.0178,
      "country_code": "NZ"
    },
    {
      "city": "Goba",
      "latitude": 7.01,
      "longitude": 39.97,
      "country_code": "ET"
    },
    {
      "city": "Schiltigheim",
      "latitude": 48.6078,
      "longitude": 7.75,
      "country_code": "FR"
    },
    {
      "city": "Göyçay",
      "latitude": 40.6553,
      "longitude": 47.7389,
      "country_code": "AZ"
    },
    {
      "city": "Richfield",
      "latitude": 44.8762,
      "longitude": -93.2833,
      "country_code": "US"
    },
    {
      "city": "Rutherglen",
      "latitude": 55.8286,
      "longitude": -4.2139,
      "country_code": "GB"
    },
    {
      "city": "Campo Maior",
      "latitude": -4.8278,
      "longitude": -42.1686,
      "country_code": "BR"
    },
    {
      "city": "Kearns",
      "latitude": 40.652,
      "longitude": -112.0093,
      "country_code": "US"
    },
    {
      "city": "Lincoln Park",
      "latitude": 42.2432,
      "longitude": -83.1811,
      "country_code": "US"
    },
    {
      "city": "Chur",
      "latitude": 46.8521,
      "longitude": 9.5297,
      "country_code": "CH"
    },
    {
      "city": "Minamishiro",
      "latitude": 36.0225,
      "longitude": 139.7228,
      "country_code": "JP"
    },
    {
      "city": "Ryde",
      "latitude": 50.7271,
      "longitude": -1.1618,
      "country_code": "GB"
    },
    {
      "city": "Amecameca de Juárez",
      "latitude": 19.1238,
      "longitude": -98.7665,
      "country_code": "MX"
    },
    {
      "city": "Zacapa",
      "latitude": 14.972,
      "longitude": -89.529,
      "country_code": "GT"
    },
    {
      "city": "Lichfield",
      "latitude": 52.6835,
      "longitude": -1.8265,
      "country_code": "GB"
    },
    {
      "city": "Ecclesfield",
      "latitude": 53.4429,
      "longitude": -1.4698,
      "country_code": "GB"
    },
    {
      "city": "Ometepec",
      "latitude": 16.6833,
      "longitude": -98.4167,
      "country_code": "MX"
    },
    {
      "city": "Lauderdale Lakes",
      "latitude": 26.1682,
      "longitude": -80.2017,
      "country_code": "US"
    },
    {
      "city": "Montigny-le-Bretonneux",
      "latitude": 48.7711,
      "longitude": 2.0333,
      "country_code": "FR"
    },
    {
      "city": "Chatou",
      "latitude": 48.8897,
      "longitude": 2.1573,
      "country_code": "FR"
    },
    {
      "city": "Pontypridd",
      "latitude": 51.602,
      "longitude": -3.342,
      "country_code": "GB"
    },
    {
      "city": "Krong Kep",
      "latitude": 10.4828,
      "longitude": 104.3167,
      "country_code": "KH"
    },
    {
      "city": "Kornwestheim",
      "latitude": 48.8597,
      "longitude": 9.185,
      "country_code": "DE"
    },
    {
      "city": "Prestwich",
      "latitude": 53.5333,
      "longitude": -2.2833,
      "country_code": "GB"
    },
    {
      "city": "Kamenicë",
      "latitude": 42.5839,
      "longitude": 21.575,
      "country_code": "XK"
    },
    {
      "city": "Viborg",
      "latitude": 56.4333,
      "longitude": 9.4,
      "country_code": "DK"
    },
    {
      "city": "Belleville",
      "latitude": 40.795,
      "longitude": -74.1616,
      "country_code": "US"
    },
    {
      "city": "Gostivar",
      "latitude": 41.8,
      "longitude": 20.9167,
      "country_code": "MK"
    },
    {
      "city": "Elmont",
      "latitude": 40.7033,
      "longitude": -73.7078,
      "country_code": "US"
    },
    {
      "city": "Ventspils",
      "latitude": 57.3897,
      "longitude": 21.5644,
      "country_code": "LV"
    },
    {
      "city": "Watertown Town",
      "latitude": 42.37,
      "longitude": -71.1774,
      "country_code": "US"
    },
    {
      "city": "Beja",
      "latitude": 38.0333,
      "longitude": -7.8833,
      "country_code": "PT"
    },
    {
      "city": "Vršac",
      "latitude": 45.1206,
      "longitude": 21.2986,
      "country_code": "RS"
    },
    {
      "city": "Paranaíba",
      "latitude": -19.6772,
      "longitude": -51.1908,
      "country_code": "BR"
    },
    {
      "city": "Brighouse",
      "latitude": 53.707,
      "longitude": -1.794,
      "country_code": "GB"
    },
    {
      "city": "Temple City",
      "latitude": 34.1021,
      "longitude": -118.0579,
      "country_code": "US"
    },
    {
      "city": "Farnworth",
      "latitude": 53.5452,
      "longitude": -2.3999,
      "country_code": "GB"
    },
    {
      "city": "Chillum",
      "latitude": 38.9667,
      "longitude": -76.979,
      "country_code": "US"
    },
    {
      "city": "Ermont",
      "latitude": 48.9922,
      "longitude": 2.2603,
      "country_code": "FR"
    },
    {
      "city": "La Asunción",
      "latitude": 11.0333,
      "longitude": -63.8833,
      "country_code": "VE"
    },
    {
      "city": "Cradock",
      "latitude": -32.1833,
      "longitude": 25.6167,
      "country_code": "ZA"
    },
    {
      "city": "Stroud",
      "latitude": 51.744,
      "longitude": -2.215,
      "country_code": "GB"
    },
    {
      "city": "Darwen",
      "latitude": 53.698,
      "longitude": -2.461,
      "country_code": "GB"
    },
    {
      "city": "Chuhuiv",
      "latitude": 49.8353,
      "longitude": 36.6756,
      "country_code": "UA"
    },
    {
      "city": "Ixtapan de la Sal",
      "latitude": 18.8333,
      "longitude": -99.6833,
      "country_code": "MX"
    },
    {
      "city": "Trappes",
      "latitude": 48.7775,
      "longitude": 2.0025,
      "country_code": "FR"
    },
    {
      "city": "Dover",
      "latitude": 51.1295,
      "longitude": 1.3089,
      "country_code": "GB"
    },
    {
      "city": "Timbuktu",
      "latitude": 16.7733,
      "longitude": -2.9994,
      "country_code": "ML"
    },
    {
      "city": "Bexleyheath",
      "latitude": 51.459,
      "longitude": 0.138,
      "country_code": "GB"
    },
    {
      "city": "Byumba",
      "latitude": -1.5794,
      "longitude": 30.0694,
      "country_code": "RW"
    },
    {
      "city": "Bell",
      "latitude": 33.9801,
      "longitude": -118.1798,
      "country_code": "US"
    },
    {
      "city": "Taibao",
      "latitude": 23.45,
      "longitude": 120.3333,
      "country_code": "TW"
    },
    {
      "city": "Roi Et",
      "latitude": 16.0578,
      "longitude": 103.6514,
      "country_code": "TH"
    },
    {
      "city": "Villanueva",
      "latitude": 22.3536,
      "longitude": -102.8831,
      "country_code": "MX"
    },
    {
      "city": "Talas",
      "latitude": 42.5184,
      "longitude": 72.2429,
      "country_code": "KG"
    },
    {
      "city": "Champotón",
      "latitude": 19.35,
      "longitude": -90.7167,
      "country_code": "MX"
    },
    {
      "city": "Nelson",
      "latitude": 53.8346,
      "longitude": -2.218,
      "country_code": "GB"
    },
    {
      "city": "Bragança",
      "latitude": 41.8,
      "longitude": -6.75,
      "country_code": "PT"
    },
    {
      "city": "Phatthalung",
      "latitude": 7.6178,
      "longitude": 100.0778,
      "country_code": "TH"
    },
    {
      "city": "Les Mureaux",
      "latitude": 48.9875,
      "longitude": 1.9172,
      "country_code": "FR"
    },
    {
      "city": "Neuchâtel",
      "latitude": 46.9903,
      "longitude": 6.9306,
      "country_code": "CH"
    },
    {
      "city": "Romainville",
      "latitude": 48.884,
      "longitude": 2.435,
      "country_code": "FR"
    },
    {
      "city": "Huyton",
      "latitude": 53.41,
      "longitude": -2.843,
      "country_code": "GB"
    },
    {
      "city": "Santa Cruz del Quiché",
      "latitude": 15.05,
      "longitude": -91.25,
      "country_code": "GT"
    },
    {
      "city": "Luebo",
      "latitude": -5.3495,
      "longitude": 21.41,
      "country_code": "CD"
    },
    {
      "city": "Bria",
      "latitude": 6.5369,
      "longitude": 21.9919,
      "country_code": "CF"
    },
    {
      "city": "Néa Filadélfeia",
      "latitude": 38.035,
      "longitude": 23.7381,
      "country_code": "GR"
    },
    {
      "city": "Manhattan Beach",
      "latitude": 33.8895,
      "longitude": -118.3972,
      "country_code": "US"
    },
    {
      "city": "Coatepec Harinas",
      "latitude": 18.9,
      "longitude": -99.7167,
      "country_code": "MX"
    },
    {
      "city": "Fresnes",
      "latitude": 48.755,
      "longitude": 2.3221,
      "country_code": "FR"
    },
    {
      "city": "Artvin",
      "latitude": 41.1822,
      "longitude": 41.8194,
      "country_code": "TR"
    },
    {
      "city": "Maīdān Shahr",
      "latitude": 34.3972,
      "longitude": 68.8697,
      "country_code": "AF"
    },
    {
      "city": "Nevers",
      "latitude": 46.9933,
      "longitude": 3.1572,
      "country_code": "FR"
    },
    {
      "city": "Villiers-sur-Marne",
      "latitude": 48.8275,
      "longitude": 2.5447,
      "country_code": "FR"
    },
    {
      "city": "Catemaco",
      "latitude": 18.4167,
      "longitude": -95.1167,
      "country_code": "MX"
    },
    {
      "city": "Pabellón de Arteaga",
      "latitude": 22.15,
      "longitude": -102.2667,
      "country_code": "MX"
    },
    {
      "city": "San Pedro de Ycuamandiyú",
      "latitude": -24.1,
      "longitude": -57.0833,
      "country_code": "PY"
    },
    {
      "city": "Dikhil",
      "latitude": 11.1086,
      "longitude": 42.3667,
      "country_code": "DJ"
    },
    {
      "city": "Ocotal",
      "latitude": 13.6333,
      "longitude": -86.4833,
      "country_code": "NI"
    },
    {
      "city": "Pontoise",
      "latitude": 49.0516,
      "longitude": 2.1017,
      "country_code": "FR"
    },
    {
      "city": "Grigny",
      "latitude": 48.6562,
      "longitude": 2.3849,
      "country_code": "FR"
    },
    {
      "city": "Englewood",
      "latitude": 39.6468,
      "longitude": -104.9942,
      "country_code": "US"
    },
    {
      "city": "Kampong Thom",
      "latitude": 12.7111,
      "longitude": 104.8886,
      "country_code": "KH"
    },
    {
      "city": "Tucano",
      "latitude": -10.9582,
      "longitude": -38.7908,
      "country_code": "BR"
    },
    {
      "city": "Golden Glades",
      "latitude": 25.9129,
      "longitude": -80.2013,
      "country_code": "US"
    },
    {
      "city": "Dragash",
      "latitude": 42.0611,
      "longitude": 20.6528,
      "country_code": "XK"
    },
    {
      "city": "Naryn",
      "latitude": 41.4333,
      "longitude": 76,
      "country_code": "KG"
    },
    {
      "city": "Laḩij",
      "latitude": 13.05,
      "longitude": 44.8833,
      "country_code": "YE"
    },
    {
      "city": "Vigneux-sur-Seine",
      "latitude": 48.7001,
      "longitude": 2.417,
      "country_code": "FR"
    },
    {
      "city": "Aosta",
      "latitude": 45.737,
      "longitude": 7.315,
      "country_code": "IT"
    },
    {
      "city": "Oildale",
      "latitude": 35.4249,
      "longitude": -119.0279,
      "country_code": "US"
    },
    {
      "city": "Ciudad Sabinas Hidalgo",
      "latitude": 26.5,
      "longitude": -100.1833,
      "country_code": "MX"
    },
    {
      "city": "Almenara",
      "latitude": -16.17,
      "longitude": -40.7,
      "country_code": "BR"
    },
    {
      "city": "Kalasin",
      "latitude": 16.4333,
      "longitude": 103.5,
      "country_code": "TH"
    },
    {
      "city": "Saint Neots",
      "latitude": 52.228,
      "longitude": -0.27,
      "country_code": "GB"
    },
    {
      "city": "Villa Celina",
      "latitude": -34.7006,
      "longitude": -58.4825,
      "country_code": "AR"
    },
    {
      "city": "Fontenay-aux-Roses",
      "latitude": 48.7893,
      "longitude": 2.2888,
      "country_code": "FR"
    },
    {
      "city": "Jacmel",
      "latitude": 18.235,
      "longitude": -72.537,
      "country_code": "HT"
    },
    {
      "city": "Santa Cruz",
      "latitude": -6.22,
      "longitude": -36.03,
      "country_code": "BR"
    },
    {
      "city": "Swakopmund",
      "latitude": -22.6667,
      "longitude": 14.5333,
      "country_code": "NA"
    },
    {
      "city": "Barra do Bugres",
      "latitude": -15.0725,
      "longitude": -57.1811,
      "country_code": "BR"
    },
    {
      "city": "Lens",
      "latitude": 50.4322,
      "longitude": 2.8333,
      "country_code": "FR"
    },
    {
      "city": "Azogues",
      "latitude": -2.7333,
      "longitude": -78.8333,
      "country_code": "EC"
    },
    {
      "city": "Huatabampo",
      "latitude": 26.8304,
      "longitude": -109.63,
      "country_code": "MX"
    },
    {
      "city": "Escárcega",
      "latitude": 18.6067,
      "longitude": -90.7344,
      "country_code": "MX"
    },
    {
      "city": "Norristown",
      "latitude": 40.1224,
      "longitude": -75.3398,
      "country_code": "US"
    },
    {
      "city": "Swadlincote",
      "latitude": 52.774,
      "longitude": -1.557,
      "country_code": "GB"
    },
    {
      "city": "Saint-Cloud",
      "latitude": 48.84,
      "longitude": 2.22,
      "country_code": "FR"
    },
    {
      "city": "Wishaw",
      "latitude": 55.7739,
      "longitude": -3.9189,
      "country_code": "GB"
    },
    {
      "city": "Icó",
      "latitude": -6.4,
      "longitude": -38.85,
      "country_code": "BR"
    },
    {
      "city": "Ozumba",
      "latitude": 19.0392,
      "longitude": -98.7936,
      "country_code": "MX"
    },
    {
      "city": "Deal",
      "latitude": 51.2226,
      "longitude": 1.4006,
      "country_code": "GB"
    },
    {
      "city": "Cananea",
      "latitude": 30.9819,
      "longitude": -110.3006,
      "country_code": "MX"
    },
    {
      "city": "Homa Bay",
      "latitude": -0.5167,
      "longitude": 34.45,
      "country_code": "KE"
    },
    {
      "city": "Bor",
      "latitude": 44.1303,
      "longitude": 22.1036,
      "country_code": "RS"
    },
    {
      "city": "Mažeikiai",
      "latitude": 56.3111,
      "longitude": 22.3361,
      "country_code": "LT"
    },
    {
      "city": "Busia",
      "latitude": 0.4608,
      "longitude": 34.1108,
      "country_code": "KE"
    },
    {
      "city": "São Luís Gonzaga",
      "latitude": -28.4083,
      "longitude": -54.9608,
      "country_code": "BR"
    },
    {
      "city": "University City",
      "latitude": 38.6657,
      "longitude": -90.3315,
      "country_code": "US"
    },
    {
      "city": "Borehamwood",
      "latitude": 51.6578,
      "longitude": -0.2723,
      "country_code": "GB"
    },
    {
      "city": "Ubaitaba",
      "latitude": -14.3,
      "longitude": -39.33,
      "country_code": "BR"
    },
    {
      "city": "Fushë Kosovë",
      "latitude": 42.63,
      "longitude": 21.12,
      "country_code": "XK"
    },
    {
      "city": "Midvale",
      "latitude": 40.6148,
      "longitude": -111.8928,
      "country_code": "US"
    },
    {
      "city": "Uttaradit",
      "latitude": 17.6256,
      "longitude": 100.0942,
      "country_code": "TH"
    },
    {
      "city": "Buenaventura Lakes",
      "latitude": 28.3349,
      "longitude": -81.3539,
      "country_code": "US"
    },
    {
      "city": "Owando",
      "latitude": -0.4833,
      "longitude": 15.9,
      "country_code": "CG"
    },
    {
      "city": "Kakata",
      "latitude": 6.53,
      "longitude": -10.3517,
      "country_code": "LR"
    },
    {
      "city": "Chester",
      "latitude": 39.8456,
      "longitude": -75.3718,
      "country_code": "US"
    },
    {
      "city": "Kampong Speu",
      "latitude": 11.45,
      "longitude": 104.5333,
      "country_code": "KH"
    },
    {
      "city": "Fada Ngourma",
      "latitude": 12.05,
      "longitude": 0.3667,
      "country_code": "BF"
    },
    {
      "city": "Barros Blancos",
      "latitude": -34.7542,
      "longitude": -56.0042,
      "country_code": "UY"
    },
    {
      "city": "Salgótarján",
      "latitude": 48.0853,
      "longitude": 19.7867,
      "country_code": "HU"
    },
    {
      "city": "Foster City",
      "latitude": 37.5553,
      "longitude": -122.2659,
      "country_code": "US"
    },
    {
      "city": "Pontefract",
      "latitude": 53.691,
      "longitude": -1.312,
      "country_code": "GB"
    },
    {
      "city": "Montgomery Village",
      "latitude": 39.1783,
      "longitude": -77.1957,
      "country_code": "US"
    },
    {
      "city": "Beverly Hills",
      "latitude": 34.0786,
      "longitude": -118.4021,
      "country_code": "US"
    },
    {
      "city": "Ciudad Sahagun",
      "latitude": 19.7714,
      "longitude": -98.5803,
      "country_code": "MX"
    },
    {
      "city": "Thiais",
      "latitude": 48.765,
      "longitude": 2.3923,
      "country_code": "FR"
    },
    {
      "city": "Foothill Farms",
      "latitude": 38.6867,
      "longitude": -121.3475,
      "country_code": "US"
    },
    {
      "city": "Westmont",
      "latitude": 33.9417,
      "longitude": -118.3018,
      "country_code": "US"
    },
    {
      "city": "Willenhall",
      "latitude": 52.5798,
      "longitude": -2.0605,
      "country_code": "GB"
    },
    {
      "city": "Chumphon",
      "latitude": 10.4939,
      "longitude": 99.18,
      "country_code": "TH"
    },
    {
      "city": "Fair Oaks",
      "latitude": 38.8653,
      "longitude": -77.3586,
      "country_code": "US"
    },
    {
      "city": "Nyköping",
      "latitude": 58.7582,
      "longitude": 17.0185,
      "country_code": "SE"
    },
    {
      "city": "Masindi",
      "latitude": 1.6744,
      "longitude": 31.715,
      "country_code": "UG"
    },
    {
      "city": "Glendale Heights",
      "latitude": 41.9196,
      "longitude": -88.0785,
      "country_code": "US"
    },
    {
      "city": "Bilwi",
      "latitude": 14.05,
      "longitude": -83.3833,
      "country_code": "NI"
    },
    {
      "city": "Iturama",
      "latitude": -19.73,
      "longitude": -50.2,
      "country_code": "BR"
    },
    {
      "city": "Kaçanik",
      "latitude": 42.2467,
      "longitude": 21.2553,
      "country_code": "XK"
    },
    {
      "city": "Long Beach",
      "latitude": 40.5887,
      "longitude": -73.666,
      "country_code": "US"
    },
    {
      "city": "Longton",
      "latitude": 52.9877,
      "longitude": -2.1327,
      "country_code": "GB"
    },
    {
      "city": "Mamoudzou",
      "latitude": -12.7871,
      "longitude": 45.275,
      "country_code": "YT"
    },
    {
      "city": "Plympton",
      "latitude": 50.386,
      "longitude": -4.051,
      "country_code": "GB"
    },
    {
      "city": "Sisak",
      "latitude": 45.4878,
      "longitude": 16.3742,
      "country_code": "HR"
    },
    {
      "city": "West Little River",
      "latitude": 25.857,
      "longitude": -80.2367,
      "country_code": "US"
    },
    {
      "city": "Birkirkara",
      "latitude": 35.9,
      "longitude": 14.4667,
      "country_code": "MT"
    },
    {
      "city": "Koh Kong",
      "latitude": 11.6167,
      "longitude": 102.9833,
      "country_code": "KH"
    },
    {
      "city": "Kyrenia",
      "latitude": 35.3403,
      "longitude": 33.3192,
      "country_code": "CY"
    },
    {
      "city": "Vandœuvre-lès-Nancy",
      "latitude": 48.6567,
      "longitude": 6.1683,
      "country_code": "FR"
    },
    {
      "city": "Juticalpa",
      "latitude": 14.6664,
      "longitude": -86.2186,
      "country_code": "HN"
    },
    {
      "city": "Huntington Station",
      "latitude": 40.8446,
      "longitude": -73.405,
      "country_code": "US"
    },
    {
      "city": "Bromsgrove",
      "latitude": 52.3353,
      "longitude": -2.0579,
      "country_code": "GB"
    },
    {
      "city": "Goussainville",
      "latitude": 49.0325,
      "longitude": 2.4747,
      "country_code": "FR"
    },
    {
      "city": "Mukdahan",
      "latitude": 16.5431,
      "longitude": 104.7228,
      "country_code": "TH"
    },
    {
      "city": "Óbidos",
      "latitude": -1.91,
      "longitude": -55.52,
      "country_code": "BR"
    },
    {
      "city": "Adrogue",
      "latitude": -34.8,
      "longitude": -58.3833,
      "country_code": "AR"
    },
    {
      "city": "Liévin",
      "latitude": 50.4228,
      "longitude": 2.7786,
      "country_code": "FR"
    },
    {
      "city": "Bulwell",
      "latitude": 53.001,
      "longitude": -1.197,
      "country_code": "GB"
    },
    {
      "city": "Rincón de Romos",
      "latitude": 22.2333,
      "longitude": -102.3167,
      "country_code": "MX"
    },
    {
      "city": "Presidente Dutra",
      "latitude": -5.29,
      "longitude": -44.49,
      "country_code": "BR"
    },
    {
      "city": "Kericho",
      "latitude": -0.3692,
      "longitude": 35.2839,
      "country_code": "KE"
    },
    {
      "city": "Sotteville-lès-Rouen",
      "latitude": 49.4092,
      "longitude": 1.09,
      "country_code": "FR"
    },
    {
      "city": "Eastchester",
      "latitude": 40.9536,
      "longitude": -73.8134,
      "country_code": "US"
    },
    {
      "city": "Pilar",
      "latitude": -26.8569,
      "longitude": -58.3039,
      "country_code": "PY"
    },
    {
      "city": "Kokhma",
      "latitude": 56.9333,
      "longitude": 41.0833,
      "country_code": "RU"
    },
    {
      "city": "Reddish",
      "latitude": 53.4383,
      "longitude": -2.1613,
      "country_code": "GB"
    },
    {
      "city": "Fair Lawn",
      "latitude": 40.9359,
      "longitude": -74.1177,
      "country_code": "US"
    },
    {
      "city": "Zumpango del Río",
      "latitude": 17.65,
      "longitude": -99.5,
      "country_code": "MX"
    },
    {
      "city": "Chkalov",
      "latitude": 40.2386,
      "longitude": 69.6967,
      "country_code": "TJ"
    },
    {
      "city": "Un’goofaaru",
      "latitude": 5.6681,
      "longitude": 73.0302,
      "country_code": "MV"
    },
    {
      "city": "Harper",
      "latitude": 4.3754,
      "longitude": -7.717,
      "country_code": "LR"
    },
    {
      "city": "Lambersart",
      "latitude": 50.65,
      "longitude": 3.025,
      "country_code": "FR"
    },
    {
      "city": "Périgueux",
      "latitude": 45.1929,
      "longitude": 0.7217,
      "country_code": "FR"
    },
    {
      "city": "Cramlington",
      "latitude": 55.082,
      "longitude": -1.585,
      "country_code": "GB"
    },
    {
      "city": "Ris-Orangis",
      "latitude": 48.6537,
      "longitude": 2.4161,
      "country_code": "FR"
    },
    {
      "city": "Savigny-le-Temple",
      "latitude": 48.5841,
      "longitude": 2.5832,
      "country_code": "FR"
    },
    {
      "city": "Ban Bang Krang",
      "latitude": 13.8442,
      "longitude": 100.4612,
      "country_code": "TH"
    },
    {
      "city": "Dagestanskiye Ogni",
      "latitude": 42.1167,
      "longitude": 48.2,
      "country_code": "RU"
    },
    {
      "city": "Mount Lebanon",
      "latitude": 40.3752,
      "longitude": -80.0493,
      "country_code": "US"
    },
    {
      "city": "Soledad de Doblado",
      "latitude": 19.0447,
      "longitude": -96.4233,
      "country_code": "MX"
    },
    {
      "city": "Kendal",
      "latitude": 54.326,
      "longitude": -2.745,
      "country_code": "GB"
    },
    {
      "city": "North Providence",
      "latitude": 41.8616,
      "longitude": -71.4575,
      "country_code": "US"
    },
    {
      "city": "Leticia",
      "latitude": -4.215,
      "longitude": -69.9411,
      "country_code": "CO"
    },
    {
      "city": "Côte-Saint-Luc",
      "latitude": 45.4687,
      "longitude": -73.6673,
      "country_code": "CA"
    },
    {
      "city": "Perry Barr",
      "latitude": 52.5249,
      "longitude": -1.9042,
      "country_code": "GB"
    },
    {
      "city": "Mandera",
      "latitude": 3.9167,
      "longitude": 41.8333,
      "country_code": "KE"
    },
    {
      "city": "Lawndale",
      "latitude": 33.8884,
      "longitude": -118.3531,
      "country_code": "US"
    },
    {
      "city": "Yverdon-les-Bains",
      "latitude": 46.7785,
      "longitude": 6.6408,
      "country_code": "CH"
    },
    {
      "city": "Franklin Square",
      "latitude": 40.7002,
      "longitude": -73.6775,
      "country_code": "US"
    },
    {
      "city": "Spring Valley",
      "latitude": 41.1151,
      "longitude": -74.0486,
      "country_code": "US"
    },
    {
      "city": "Otumba",
      "latitude": 19.6969,
      "longitude": -98.7547,
      "country_code": "MX"
    },
    {
      "city": "Bangassou",
      "latitude": 4.737,
      "longitude": 22.819,
      "country_code": "CF"
    },
    {
      "city": "Cambuslang",
      "latitude": 55.819,
      "longitude": -4.1671,
      "country_code": "GB"
    },
    {
      "city": "Chachapoyas",
      "latitude": -6.2167,
      "longitude": -77.85,
      "country_code": "PE"
    },
    {
      "city": "Darlaston",
      "latitude": 52.5708,
      "longitude": -2.0457,
      "country_code": "GB"
    },
    {
      "city": "West Ham",
      "latitude": 51.5347,
      "longitude": 0.0077,
      "country_code": "GB"
    },
    {
      "city": "College Park",
      "latitude": 38.996,
      "longitude": -76.9337,
      "country_code": "US"
    },
    {
      "city": "Rumbek",
      "latitude": 6.8,
      "longitude": 29.6833,
      "country_code": "SS"
    },
    {
      "city": "Szekszárd",
      "latitude": 46.3558,
      "longitude": 18.7039,
      "country_code": "HU"
    },
    {
      "city": "Boende",
      "latitude": -0.2196,
      "longitude": 20.86,
      "country_code": "CD"
    },
    {
      "city": "Álamo",
      "latitude": 20.9167,
      "longitude": -97.675,
      "country_code": "MX"
    },
    {
      "city": "Niquelândia",
      "latitude": -14.4696,
      "longitude": -48.47,
      "country_code": "BR"
    },
    {
      "city": "Rivas",
      "latitude": 11.4404,
      "longitude": -85.82,
      "country_code": "NI"
    },
    {
      "city": "Rillieux-la-Pape",
      "latitude": 45.8214,
      "longitude": 4.8983,
      "country_code": "FR"
    },
    {
      "city": "Eastpointe",
      "latitude": 42.4657,
      "longitude": -82.9461,
      "country_code": "US"
    },
    {
      "city": "Acaraú",
      "latitude": -2.8896,
      "longitude": -40.12,
      "country_code": "BR"
    },
    {
      "city": "Yerres",
      "latitude": 48.7171,
      "longitude": 2.4881,
      "country_code": "FR"
    },
    {
      "city": "Bourg-la-Reine",
      "latitude": 48.7796,
      "longitude": 2.3151,
      "country_code": "FR"
    },
    {
      "city": "Ulundi",
      "latitude": -28.335,
      "longitude": 31.4161,
      "country_code": "ZA"
    },
    {
      "city": "Zug",
      "latitude": 47.1692,
      "longitude": 8.5164,
      "country_code": "CH"
    },
    {
      "city": "San Juan",
      "latitude": 9.9609,
      "longitude": -84.0731,
      "country_code": "CR"
    },
    {
      "city": "Cuitzeo del Porvenir",
      "latitude": 19.9686,
      "longitude": -101.1394,
      "country_code": "MX"
    },
    {
      "city": "Aix-les-Bains",
      "latitude": 45.6885,
      "longitude": 5.9153,
      "country_code": "FR"
    },
    {
      "city": "Navolato",
      "latitude": 24.7656,
      "longitude": -107.7019,
      "country_code": "MX"
    },
    {
      "city": "Uniondale",
      "latitude": 40.7176,
      "longitude": -73.5947,
      "country_code": "US"
    },
    {
      "city": "Jérémie",
      "latitude": 18.6339,
      "longitude": -74.1184,
      "country_code": "HT"
    },
    {
      "city": "Rawson",
      "latitude": -43.3,
      "longitude": -65.1,
      "country_code": "AR"
    },
    {
      "city": "Garfield",
      "latitude": 40.8791,
      "longitude": -74.1085,
      "country_code": "US"
    },
    {
      "city": "Sannois",
      "latitude": 48.9722,
      "longitude": 2.2578,
      "country_code": "FR"
    },
    {
      "city": "Oullins",
      "latitude": 45.715,
      "longitude": 4.8083,
      "country_code": "FR"
    },
    {
      "city": "El Salto",
      "latitude": 23.7823,
      "longitude": -105.3585,
      "country_code": "MX"
    },
    {
      "city": "Shumerlya",
      "latitude": 55.5,
      "longitude": 46.4167,
      "country_code": "RU"
    },
    {
      "city": "Clifton",
      "latitude": 52.904,
      "longitude": -1.177,
      "country_code": "GB"
    },
    {
      "city": "Dieppe",
      "latitude": 49.92,
      "longitude": 1.08,
      "country_code": "FR"
    },
    {
      "city": "Babati",
      "latitude": -4.2117,
      "longitude": 35.7475,
      "country_code": "TZ"
    },
    {
      "city": "Saint-Laurent-du-Var",
      "latitude": 43.668,
      "longitude": 7.188,
      "country_code": "FR"
    },
    {
      "city": "Wood Green",
      "latitude": 51.5981,
      "longitude": -0.1149,
      "country_code": "GB"
    },
    {
      "city": "Chon Buri",
      "latitude": 13.3611,
      "longitude": 100.985,
      "country_code": "TH"
    },
    {
      "city": "Parkville",
      "latitude": 39.3832,
      "longitude": -76.5519,
      "country_code": "US"
    },
    {
      "city": "Frome",
      "latitude": 51.2279,
      "longitude": -2.3215,
      "country_code": "GB"
    },
    {
      "city": "Les Pavillons-sous-Bois",
      "latitude": 48.9,
      "longitude": 2.5,
      "country_code": "FR"
    },
    {
      "city": "Arcueil",
      "latitude": 48.8075,
      "longitude": 2.3361,
      "country_code": "FR"
    },
    {
      "city": "Smolyan",
      "latitude": 41.5753,
      "longitude": 24.7128,
      "country_code": "BG"
    },
    {
      "city": "Pallisa",
      "latitude": 1.145,
      "longitude": 33.7094,
      "country_code": "UG"
    },
    {
      "city": "Kaita",
      "latitude": 34.3722,
      "longitude": 132.5361,
      "country_code": "JP"
    },
    {
      "city": "Alenquer",
      "latitude": -1.9396,
      "longitude": -54.79,
      "country_code": "BR"
    },
    {
      "city": "Villiers-le-Bel",
      "latitude": 49.0094,
      "longitude": 2.3911,
      "country_code": "FR"
    },
    {
      "city": "Ipu",
      "latitude": -4.3196,
      "longitude": -40.7201,
      "country_code": "BR"
    },
    {
      "city": "Miracema",
      "latitude": -21.41,
      "longitude": -42.2,
      "country_code": "BR"
    },
    {
      "city": "Viana",
      "latitude": -3.2096,
      "longitude": -45,
      "country_code": "BR"
    },
    {
      "city": "Zaqatala",
      "latitude": 41.6336,
      "longitude": 46.6433,
      "country_code": "AZ"
    },
    {
      "city": "Miami Lakes",
      "latitude": 25.9125,
      "longitude": -80.3214,
      "country_code": "US"
    },
    {
      "city": "San Fernando",
      "latitude": 24.8504,
      "longitude": -98.16,
      "country_code": "MX"
    },
    {
      "city": "İmişli",
      "latitude": 39.8697,
      "longitude": 48.06,
      "country_code": "AZ"
    },
    {
      "city": "Montfermeil",
      "latitude": 48.9,
      "longitude": 2.5667,
      "country_code": "FR"
    },
    {
      "city": "Newton Abbot",
      "latitude": 50.529,
      "longitude": -3.61,
      "country_code": "GB"
    },
    {
      "city": "Péfki",
      "latitude": 38.0667,
      "longitude": 23.8,
      "country_code": "GR"
    },
    {
      "city": "Iporá",
      "latitude": -16.45,
      "longitude": -51.13,
      "country_code": "BR"
    },
    {
      "city": "Contla",
      "latitude": 19.3333,
      "longitude": -98.1667,
      "country_code": "MX"
    },
    {
      "city": "Hertford",
      "latitude": 51.795,
      "longitude": -0.078,
      "country_code": "GB"
    },
    {
      "city": "Břevnov",
      "latitude": 50.0833,
      "longitude": 14.3579,
      "country_code": "CZ"
    },
    {
      "city": "Oceanside",
      "latitude": 40.6328,
      "longitude": -73.6364,
      "country_code": "US"
    },
    {
      "city": "Pando",
      "latitude": -34.7167,
      "longitude": -55.9583,
      "country_code": "UY"
    },
    {
      "city": "Bègles",
      "latitude": 44.8086,
      "longitude": -0.5478,
      "country_code": "FR"
    },
    {
      "city": "Ridley",
      "latitude": 39.8854,
      "longitude": -75.328,
      "country_code": "US"
    },
    {
      "city": "Wete",
      "latitude": -5.0567,
      "longitude": 39.7281,
      "country_code": "TZ"
    },
    {
      "city": "Mytilíni",
      "latitude": 39.1114,
      "longitude": 26.5621,
      "country_code": "GR"
    },
    {
      "city": "Udomlya",
      "latitude": 57.8833,
      "longitude": 35.0167,
      "country_code": "RU"
    },
    {
      "city": "Arendal",
      "latitude": 58.4617,
      "longitude": 8.7721,
      "country_code": "NO"
    },
    {
      "city": "Nebbi",
      "latitude": 2.4758,
      "longitude": 31.1025,
      "country_code": "UG"
    },
    {
      "city": "Ashington",
      "latitude": 55.181,
      "longitude": -1.568,
      "country_code": "GB"
    },
    {
      "city": "Santa Vitória do Palmar",
      "latitude": -33.52,
      "longitude": -53.37,
      "country_code": "BR"
    },
    {
      "city": "Desnogorsk",
      "latitude": 54.1531,
      "longitude": 33.2903,
      "country_code": "RU"
    },
    {
      "city": "Menton",
      "latitude": 43.775,
      "longitude": 7.5,
      "country_code": "FR"
    },
    {
      "city": "Diffa",
      "latitude": 13.3171,
      "longitude": 12.6089,
      "country_code": "NE"
    },
    {
      "city": "San Pablo",
      "latitude": 37.9628,
      "longitude": -122.3425,
      "country_code": "US"
    },
    {
      "city": "Rhyl",
      "latitude": 53.321,
      "longitude": -3.48,
      "country_code": "GB"
    },
    {
      "city": "Ungheni",
      "latitude": 47.2042,
      "longitude": 27.7958,
      "country_code": "MD"
    },
    {
      "city": "Burlingame",
      "latitude": 37.586,
      "longitude": -122.3669,
      "country_code": "US"
    },
    {
      "city": "Trípoli",
      "latitude": 37.5083,
      "longitude": 22.375,
      "country_code": "GR"
    },
    {
      "city": "Čakovec",
      "latitude": 46.3833,
      "longitude": 16.4333,
      "country_code": "HR"
    },
    {
      "city": "Guyancourt",
      "latitude": 48.7714,
      "longitude": 2.0739,
      "country_code": "FR"
    },
    {
      "city": "Soissons",
      "latitude": 49.3817,
      "longitude": 3.3236,
      "country_code": "FR"
    },
    {
      "city": "Longbridge",
      "latitude": 52.395,
      "longitude": -1.979,
      "country_code": "GB"
    },
    {
      "city": "Rainham",
      "latitude": 51.36,
      "longitude": 0.61,
      "country_code": "GB"
    },
    {
      "city": "Pljevlja",
      "latitude": 43.3566,
      "longitude": 19.3502,
      "country_code": "ME"
    },
    {
      "city": "Ninomiya",
      "latitude": 35.2994,
      "longitude": 139.2553,
      "country_code": "JP"
    },
    {
      "city": "Kuala Belait",
      "latitude": 4.5833,
      "longitude": 114.1833,
      "country_code": "BN"
    },
    {
      "city": "Lobatse",
      "latitude": -25.2167,
      "longitude": 25.6667,
      "country_code": "BW"
    },
    {
      "city": "Conceição do Araguaia",
      "latitude": -8.25,
      "longitude": -49.29,
      "country_code": "BR"
    },
    {
      "city": "Bay Shore",
      "latitude": 40.7317,
      "longitude": -73.2505,
      "country_code": "US"
    },
    {
      "city": "Yate",
      "latitude": 51.5402,
      "longitude": -2.411,
      "country_code": "GB"
    },
    {
      "city": "Melton Mowbray",
      "latitude": 52.7661,
      "longitude": -0.886,
      "country_code": "GB"
    },
    {
      "city": "Krabi",
      "latitude": 8.0592,
      "longitude": 98.9189,
      "country_code": "TH"
    },
    {
      "city": "Eaubonne",
      "latitude": 48.9922,
      "longitude": 2.2806,
      "country_code": "FR"
    },
    {
      "city": "Xalisco",
      "latitude": 21.4481,
      "longitude": -104.9,
      "country_code": "MX"
    },
    {
      "city": "Carouge",
      "latitude": 46.1817,
      "longitude": 6.1404,
      "country_code": "CH"
    },
    {
      "city": "Avellaneda",
      "latitude": -34.6625,
      "longitude": -58.3678,
      "country_code": "AR"
    },
    {
      "city": "Kizuki",
      "latitude": 33.85,
      "longitude": 130.7,
      "country_code": "JP"
    },
    {
      "city": "Nova Cruz",
      "latitude": -6.4696,
      "longitude": -35.44,
      "country_code": "BR"
    },
    {
      "city": "Boscombe",
      "latitude": 50.725,
      "longitude": -1.84,
      "country_code": "GB"
    },
    {
      "city": "Kętrzyn",
      "latitude": 54.0833,
      "longitude": 21.3833,
      "country_code": "PL"
    },
    {
      "city": "City of Orange",
      "latitude": 40.7682,
      "longitude": -74.2348,
      "country_code": "US"
    },
    {
      "city": "Salyan",
      "latitude": 39.5968,
      "longitude": 48.9837,
      "country_code": "AZ"
    },
    {
      "city": "Portel",
      "latitude": -1.95,
      "longitude": -50.82,
      "country_code": "BR"
    },
    {
      "city": "Barnstaple",
      "latitude": 51.08,
      "longitude": -4.06,
      "country_code": "GB"
    },
    {
      "city": "Sterling",
      "latitude": 39.0052,
      "longitude": -77.405,
      "country_code": "US"
    },
    {
      "city": "Heredia",
      "latitude": 9.9985,
      "longitude": -84.1169,
      "country_code": "CR"
    },
    {
      "city": "Chichester",
      "latitude": 50.8365,
      "longitude": -0.7792,
      "country_code": "GB"
    },
    {
      "city": "Newton Mearns",
      "latitude": 55.7716,
      "longitude": -4.3347,
      "country_code": "GB"
    },
    {
      "city": "Jaynagar-Majilpur",
      "latitude": 22.1772,
      "longitude": 88.4258,
      "country_code": "IN"
    },
    {
      "city": "Chatan",
      "latitude": 26.32,
      "longitude": 127.7639,
      "country_code": "JP"
    },
    {
      "city": "Ladera Ranch",
      "latitude": 33.5491,
      "longitude": -117.6416,
      "country_code": "US"
    },
    {
      "city": "Jamay",
      "latitude": 20.2944,
      "longitude": -102.7097,
      "country_code": "MX"
    },
    {
      "city": "Long Branch",
      "latitude": 40.2965,
      "longitude": -73.9915,
      "country_code": "US"
    },
    {
      "city": "Santa Paula",
      "latitude": 34.3521,
      "longitude": -119.0698,
      "country_code": "US"
    },
    {
      "city": "Colinas",
      "latitude": -6.0395,
      "longitude": -44.24,
      "country_code": "BR"
    },
    {
      "city": "Banqiao",
      "latitude": 25.0143,
      "longitude": 121.4672,
      "country_code": "TW"
    },
    {
      "city": "Westchester",
      "latitude": 25.7474,
      "longitude": -80.3358,
      "country_code": "US"
    },
    {
      "city": "Mount Hagen",
      "latitude": -5.8667,
      "longitude": 144.2167,
      "country_code": "PG"
    },
    {
      "city": "San Carlos",
      "latitude": 37.4982,
      "longitude": -122.268,
      "country_code": "US"
    },
    {
      "city": "Savanna-la-Mar",
      "latitude": 18.2167,
      "longitude": -78.1333,
      "country_code": "JM"
    },
    {
      "city": "Vicente López",
      "latitude": -34.5333,
      "longitude": -58.475,
      "country_code": "AR"
    },
    {
      "city": "Bilston",
      "latitude": 52.566,
      "longitude": -2.0728,
      "country_code": "GB"
    },
    {
      "city": "Mutsamudu",
      "latitude": -12.1667,
      "longitude": 44.4,
      "country_code": "KM"
    },
    {
      "city": "Cahul",
      "latitude": 45.9075,
      "longitude": 28.1944,
      "country_code": "MD"
    },
    {
      "city": "Felipe Carrillo Puerto",
      "latitude": 19.5786,
      "longitude": -88.0453,
      "country_code": "MX"
    },
    {
      "city": "Golden Gate",
      "latitude": 26.1844,
      "longitude": -81.7031,
      "country_code": "US"
    },
    {
      "city": "Didcot",
      "latitude": 51.606,
      "longitude": -1.241,
      "country_code": "GB"
    },
    {
      "city": "Ojinaga",
      "latitude": 29.5644,
      "longitude": -104.4164,
      "country_code": "MX"
    },
    {
      "city": "Shotley Bridge",
      "latitude": 54.87,
      "longitude": -1.86,
      "country_code": "GB"
    },
    {
      "city": "Stepney",
      "latitude": 51.5152,
      "longitude": -0.0462,
      "country_code": "GB"
    },
    {
      "city": "Dübendorf",
      "latitude": 47.3981,
      "longitude": 8.6194,
      "country_code": "CH"
    },
    {
      "city": "Granja",
      "latitude": -3.1195,
      "longitude": -40.84,
      "country_code": "BR"
    },
    {
      "city": "Billericay",
      "latitude": 51.628,
      "longitude": 0.4184,
      "country_code": "GB"
    },
    {
      "city": "Trujillo",
      "latitude": 15.9167,
      "longitude": -86,
      "country_code": "HN"
    },
    {
      "city": "Moyale",
      "latitude": 3.527,
      "longitude": 39.056,
      "country_code": "KE"
    },
    {
      "city": "Limeil-Brévannes",
      "latitude": 48.7464,
      "longitude": 2.4883,
      "country_code": "FR"
    },
    {
      "city": "Treinta y Tres",
      "latitude": -33.2308,
      "longitude": -54.3822,
      "country_code": "UY"
    },
    {
      "city": "Stung Treng",
      "latitude": 13.5167,
      "longitude": 105.9667,
      "country_code": "KH"
    },
    {
      "city": "Bournville",
      "latitude": 52.4299,
      "longitude": -1.9355,
      "country_code": "GB"
    },
    {
      "city": "Rahway",
      "latitude": 40.6077,
      "longitude": -74.2807,
      "country_code": "US"
    },
    {
      "city": "Dietikon",
      "latitude": 47.4056,
      "longitude": 8.4039,
      "country_code": "CH"
    },
    {
      "city": "Leyton",
      "latitude": 51.5606,
      "longitude": -0.0155,
      "country_code": "GB"
    },
    {
      "city": "Tralee",
      "latitude": 52.2675,
      "longitude": -9.6962,
      "country_code": "IE"
    },
    {
      "city": "Newton Aycliffe",
      "latitude": 54.62,
      "longitude": -1.58,
      "country_code": "GB"
    },
    {
      "city": "Rēzekne",
      "latitude": 56.5067,
      "longitude": 27.3308,
      "country_code": "LV"
    },
    {
      "city": "Ban Krathum Lom",
      "latitude": 13.7482,
      "longitude": 100.3139,
      "country_code": "TH"
    },
    {
      "city": "Bussy-Saint-Georges",
      "latitude": 48.8422,
      "longitude": 2.6983,
      "country_code": "FR"
    },
    {
      "city": "Walton upon Thames",
      "latitude": 51.3868,
      "longitude": -0.4133,
      "country_code": "GB"
    },
    {
      "city": "Eastleigh",
      "latitude": 50.9667,
      "longitude": -1.35,
      "country_code": "GB"
    },
    {
      "city": "Brunoy",
      "latitude": 48.6979,
      "longitude": 2.5044,
      "country_code": "FR"
    },
    {
      "city": "Kanchanaburi",
      "latitude": 14.0194,
      "longitude": 99.5311,
      "country_code": "TH"
    },
    {
      "city": "Ağdaş",
      "latitude": 40.65,
      "longitude": 47.4833,
      "country_code": "AZ"
    },
    {
      "city": "Doba",
      "latitude": 8.65,
      "longitude": 16.85,
      "country_code": "TD"
    },
    {
      "city": "Bregenz",
      "latitude": 47.505,
      "longitude": 9.7492,
      "country_code": "AT"
    },
    {
      "city": "Suisun City",
      "latitude": 38.2473,
      "longitude": -122.009,
      "country_code": "US"
    },
    {
      "city": "Cheadle Hulme",
      "latitude": 53.3761,
      "longitude": -2.1897,
      "country_code": "GB"
    },
    {
      "city": "Nuwara Eliya",
      "latitude": 6.9667,
      "longitude": 80.7667,
      "country_code": "LK"
    },
    {
      "city": "Frontera",
      "latitude": 18.5336,
      "longitude": -92.6469,
      "country_code": "MX"
    },
    {
      "city": "Katima Mulilo",
      "latitude": -17.5039,
      "longitude": 24.275,
      "country_code": "NA"
    },
    {
      "city": "Hindley",
      "latitude": 53.5355,
      "longitude": -2.5658,
      "country_code": "GB"
    },
    {
      "city": "Chalatenango",
      "latitude": 14.072,
      "longitude": -89.094,
      "country_code": "SV"
    },
    {
      "city": "Mortsel",
      "latitude": 51.1703,
      "longitude": 4.4567,
      "country_code": "BE"
    },
    {
      "city": "Haverhill",
      "latitude": 52.08,
      "longitude": 0.44,
      "country_code": "GB"
    },
    {
      "city": "Bắc Kạn",
      "latitude": 22.1333,
      "longitude": 105.8333,
      "country_code": "VN"
    },
    {
      "city": "Bačka Palanka",
      "latitude": 45.2506,
      "longitude": 19.3886,
      "country_code": "RS"
    },
    {
      "city": "Armentières",
      "latitude": 50.6881,
      "longitude": 2.8811,
      "country_code": "FR"
    },
    {
      "city": "Nogales",
      "latitude": 18.8167,
      "longitude": -97.1667,
      "country_code": "MX"
    },
    {
      "city": "Villeparisis",
      "latitude": 48.9503,
      "longitude": 2.6025,
      "country_code": "FR"
    },
    {
      "city": "Northfield",
      "latitude": 52.408,
      "longitude": -1.963,
      "country_code": "GB"
    },
    {
      "city": "Burntwood",
      "latitude": 52.6831,
      "longitude": -1.92,
      "country_code": "GB"
    },
    {
      "city": "Westhoughton",
      "latitude": 53.549,
      "longitude": -2.529,
      "country_code": "GB"
    },
    {
      "city": "Cenon",
      "latitude": 44.8578,
      "longitude": -0.5317,
      "country_code": "FR"
    },
    {
      "city": "Oak Park",
      "latitude": 42.4649,
      "longitude": -83.1824,
      "country_code": "US"
    },
    {
      "city": "Linden",
      "latitude": 6,
      "longitude": -58.3,
      "country_code": "GY"
    },
    {
      "city": "Rocha",
      "latitude": -34.4833,
      "longitude": -54.35,
      "country_code": "UY"
    },
    {
      "city": "Estoril",
      "latitude": 38.7057,
      "longitude": -9.3977,
      "country_code": "PT"
    },
    {
      "city": "Santa Bárbara",
      "latitude": 14.9167,
      "longitude": -88.2333,
      "country_code": "HN"
    },
    {
      "city": "Khorugh",
      "latitude": 37.4917,
      "longitude": 71.5575,
      "country_code": "TJ"
    },
    {
      "city": "Colonia del Sacramento",
      "latitude": -34.4714,
      "longitude": -57.8442,
      "country_code": "UY"
    },
    {
      "city": "Hillerød",
      "latitude": 55.9333,
      "longitude": 12.3167,
      "country_code": "DK"
    },
    {
      "city": "Kamphaeng Phet",
      "latitude": 16.4811,
      "longitude": 99.5222,
      "country_code": "TH"
    },
    {
      "city": "Tulum",
      "latitude": 20.2119,
      "longitude": -87.4658,
      "country_code": "MX"
    },
    {
      "city": "Cuerámaro",
      "latitude": 20.6258,
      "longitude": -101.6739,
      "country_code": "MX"
    },
    {
      "city": "East Palo Alto",
      "latitude": 37.4671,
      "longitude": -122.1352,
      "country_code": "US"
    },
    {
      "city": "Saint-Sébastien-sur-Loire",
      "latitude": 47.2081,
      "longitude": -1.5014,
      "country_code": "FR"
    },
    {
      "city": "Port Chester",
      "latitude": 41.0052,
      "longitude": -73.668,
      "country_code": "US"
    },
    {
      "city": "Samut Songkhram",
      "latitude": 13.4097,
      "longitude": 100.0017,
      "country_code": "TH"
    },
    {
      "city": "West Falls Church",
      "latitude": 38.8648,
      "longitude": -77.1878,
      "country_code": "US"
    },
    {
      "city": "Leigh-on-Sea",
      "latitude": 51.5425,
      "longitude": 0.6535,
      "country_code": "GB"
    },
    {
      "city": "Penonomé",
      "latitude": 8.51,
      "longitude": -80.36,
      "country_code": "PA"
    },
    {
      "city": "Armavir",
      "latitude": 40.15,
      "longitude": 44.04,
      "country_code": "AM"
    },
    {
      "city": "Qahā",
      "latitude": 30.2833,
      "longitude": 31.2,
      "country_code": "EG"
    },
    {
      "city": "Clydebank",
      "latitude": 55.8997,
      "longitude": -4.4006,
      "country_code": "GB"
    },
    {
      "city": "Taverny",
      "latitude": 49.0264,
      "longitude": 2.2275,
      "country_code": "FR"
    },
    {
      "city": "Sèvres",
      "latitude": 48.8239,
      "longitude": 2.2117,
      "country_code": "FR"
    },
    {
      "city": "Hunucmá",
      "latitude": 21.0153,
      "longitude": -89.8744,
      "country_code": "MX"
    },
    {
      "city": "Vallauris",
      "latitude": 43.5805,
      "longitude": 7.0538,
      "country_code": "FR"
    },
    {
      "city": "Villeneuve-la-Garenne",
      "latitude": 48.9372,
      "longitude": 2.3278,
      "country_code": "FR"
    },
    {
      "city": "Buri Ram",
      "latitude": 14.9942,
      "longitude": 103.1022,
      "country_code": "TH"
    },
    {
      "city": "Brétigny-sur-Orge",
      "latitude": 48.6114,
      "longitude": 2.3059,
      "country_code": "FR"
    },
    {
      "city": "Mons-en-Baroeul",
      "latitude": 50.6369,
      "longitude": 3.1103,
      "country_code": "FR"
    },
    {
      "city": "Ölgiy",
      "latitude": 48.9656,
      "longitude": 89.9632,
      "country_code": "MN"
    },
    {
      "city": "Dollis Hill",
      "latitude": 51.5641,
      "longitude": -0.2341,
      "country_code": "GB"
    },
    {
      "city": "Wellington",
      "latitude": 52.7001,
      "longitude": -2.5157,
      "country_code": "GB"
    },
    {
      "city": "São Lourenço do Sul",
      "latitude": -31.37,
      "longitude": -51.98,
      "country_code": "BR"
    },
    {
      "city": "Sucy-en-Brie",
      "latitude": 48.7697,
      "longitude": 2.5228,
      "country_code": "FR"
    },
    {
      "city": "Pimenta Bueno",
      "latitude": -11.64,
      "longitude": -61.21,
      "country_code": "BR"
    },
    {
      "city": "Saint-Gratien",
      "latitude": 48.9719,
      "longitude": 2.2828,
      "country_code": "FR"
    },
    {
      "city": "Mendefera",
      "latitude": 14.8833,
      "longitude": 38.8167,
      "country_code": "ER"
    },
    {
      "city": "Consett",
      "latitude": 54.85,
      "longitude": -1.83,
      "country_code": "GB"
    },
    {
      "city": "Droylsden",
      "latitude": 53.4828,
      "longitude": -2.1582,
      "country_code": "GB"
    },
    {
      "city": "Nutley",
      "latitude": 40.8192,
      "longitude": -74.1571,
      "country_code": "US"
    },
    {
      "city": "Otjiwarongo",
      "latitude": -20.4642,
      "longitude": 16.6528,
      "country_code": "NA"
    },
    {
      "city": "Vichy",
      "latitude": 46.1278,
      "longitude": 3.4267,
      "country_code": "FR"
    },
    {
      "city": "Shamokin",
      "latitude": 40.7883,
      "longitude": -76.555,
      "country_code": "US"
    },
    {
      "city": "Tapiales",
      "latitude": -34.7058,
      "longitude": -58.5047,
      "country_code": "AR"
    },
    {
      "city": "Kočani",
      "latitude": 41.9167,
      "longitude": 22.4125,
      "country_code": "MK"
    },
    {
      "city": "Englewood",
      "latitude": 40.8917,
      "longitude": -73.9736,
      "country_code": "US"
    },
    {
      "city": "Mitú",
      "latitude": 1.2503,
      "longitude": -70.235,
      "country_code": "CO"
    },
    {
      "city": "Pires do Rio",
      "latitude": -17.2995,
      "longitude": -48.28,
      "country_code": "BR"
    },
    {
      "city": "Lapa",
      "latitude": -25.76,
      "longitude": -49.73,
      "country_code": "BR"
    },
    {
      "city": "Balham",
      "latitude": 51.4434,
      "longitude": -0.1525,
      "country_code": "GB"
    },
    {
      "city": "Harborne",
      "latitude": 52.46,
      "longitude": -1.95,
      "country_code": "GB"
    },
    {
      "city": "Shenley Brook End",
      "latitude": 52.009,
      "longitude": -0.789,
      "country_code": "GB"
    },
    {
      "city": "Winchester",
      "latitude": 36.1368,
      "longitude": -115.1299,
      "country_code": "US"
    },
    {
      "city": "Ouésso",
      "latitude": 1.6167,
      "longitude": 16.05,
      "country_code": "CG"
    },
    {
      "city": "Alençon",
      "latitude": 48.4306,
      "longitude": 0.0931,
      "country_code": "FR"
    },
    {
      "city": "Burbank",
      "latitude": 41.7444,
      "longitude": -87.7686,
      "country_code": "US"
    },
    {
      "city": "Bloxwich",
      "latitude": 52.614,
      "longitude": -2.004,
      "country_code": "GB"
    },
    {
      "city": "Caxito",
      "latitude": -8.6467,
      "longitude": 13.6642,
      "country_code": "AO"
    },
    {
      "city": "Upminster",
      "latitude": 51.5557,
      "longitude": 0.2512,
      "country_code": "GB"
    },
    {
      "city": "Vevey",
      "latitude": 46.4667,
      "longitude": 6.85,
      "country_code": "CH"
    },
    {
      "city": "Itambé",
      "latitude": -15.2396,
      "longitude": -40.63,
      "country_code": "BR"
    },
    {
      "city": "Tixtla de Guerrero",
      "latitude": 17.5667,
      "longitude": -99.4,
      "country_code": "MX"
    },
    {
      "city": "Santa Maria da Vitória",
      "latitude": -13.39,
      "longitude": -44.21,
      "country_code": "BR"
    },
    {
      "city": "Popondetta",
      "latitude": -8.7656,
      "longitude": 148.2347,
      "country_code": "PG"
    },
    {
      "city": "Drexel Hill",
      "latitude": 39.9495,
      "longitude": -75.3039,
      "country_code": "US"
    },
    {
      "city": "Littleover",
      "latitude": 52.906,
      "longitude": -1.505,
      "country_code": "GB"
    },
    {
      "city": "Le Bouscat",
      "latitude": 44.8651,
      "longitude": -0.5996,
      "country_code": "FR"
    },
    {
      "city": "Fleetwood",
      "latitude": 53.923,
      "longitude": -3.015,
      "country_code": "GB"
    },
    {
      "city": "Highgate",
      "latitude": 51.5716,
      "longitude": -0.1448,
      "country_code": "GB"
    },
    {
      "city": "Market Harborough",
      "latitude": 52.4775,
      "longitude": -0.9206,
      "country_code": "GB"
    },
    {
      "city": "Aldama",
      "latitude": 28.8386,
      "longitude": -105.9111,
      "country_code": "MX"
    },
    {
      "city": "Champs-Sur-Marne",
      "latitude": 48.8529,
      "longitude": 2.6027,
      "country_code": "FR"
    },
    {
      "city": "Qazax",
      "latitude": 41.0933,
      "longitude": 45.3661,
      "country_code": "AZ"
    },
    {
      "city": "Deuil-la-Barre",
      "latitude": 48.9767,
      "longitude": 2.3272,
      "country_code": "FR"
    },
    {
      "city": "Élancourt",
      "latitude": 48.7847,
      "longitude": 1.9589,
      "country_code": "FR"
    },
    {
      "city": "Losino-Petrovskiy",
      "latitude": 55.8667,
      "longitude": 38.2,
      "country_code": "RU"
    },
    {
      "city": "Oadby",
      "latitude": 52.5987,
      "longitude": -1.0763,
      "country_code": "GB"
    },
    {
      "city": "Hamar",
      "latitude": 60.7945,
      "longitude": 11.068,
      "country_code": "NO"
    },
    {
      "city": "Melrose",
      "latitude": 42.4556,
      "longitude": -71.059,
      "country_code": "US"
    },
    {
      "city": "Ocatlán",
      "latitude": 19.3167,
      "longitude": -98.2283,
      "country_code": "MX"
    },
    {
      "city": "Renens",
      "latitude": 46.5353,
      "longitude": 6.5897,
      "country_code": "CH"
    },
    {
      "city": "Erdington",
      "latitude": 52.5236,
      "longitude": -1.8378,
      "country_code": "GB"
    },
    {
      "city": "Mililani Town",
      "latitude": 21.4465,
      "longitude": -158.0147,
      "country_code": "US"
    },
    {
      "city": "Le Grand-Quevilly",
      "latitude": 49.4072,
      "longitude": 1.0531,
      "country_code": "FR"
    },
    {
      "city": "Jonava",
      "latitude": 55.0722,
      "longitude": 24.2806,
      "country_code": "LT"
    },
    {
      "city": "Bongor",
      "latitude": 10.2806,
      "longitude": 15.3722,
      "country_code": "TD"
    },
    {
      "city": "Mongo",
      "latitude": 12.1837,
      "longitude": 18.7,
      "country_code": "TD"
    },
    {
      "city": "La Madeleine",
      "latitude": 50.6558,
      "longitude": 3.071,
      "country_code": "FR"
    },
    {
      "city": "Penarth",
      "latitude": 51.43,
      "longitude": -3.17,
      "country_code": "GB"
    },
    {
      "city": "Acomb",
      "latitude": 53.955,
      "longitude": -1.126,
      "country_code": "GB"
    },
    {
      "city": "Dunleary",
      "latitude": 53.3,
      "longitude": -6.14,
      "country_code": "IE"
    },
    {
      "city": "Koulikoro",
      "latitude": 12.8833,
      "longitude": -7.55,
      "country_code": "ML"
    },
    {
      "city": "Béthune",
      "latitude": 50.5303,
      "longitude": 2.6408,
      "country_code": "FR"
    },
    {
      "city": "Neuilly-Plaisance",
      "latitude": 48.8619,
      "longitude": 2.5064,
      "country_code": "FR"
    },
    {
      "city": "Don Bosco",
      "latitude": -34.7,
      "longitude": -58.2833,
      "country_code": "AR"
    },
    {
      "city": "Tantoyuca",
      "latitude": 21.35,
      "longitude": -98.2333,
      "country_code": "MX"
    },
    {
      "city": "Isla Vista",
      "latitude": 34.4144,
      "longitude": -119.8581,
      "country_code": "US"
    },
    {
      "city": "Portishead",
      "latitude": 51.484,
      "longitude": -2.7626,
      "country_code": "GB"
    },
    {
      "city": "Tepetlaoxtoc",
      "latitude": 19.5731,
      "longitude": -98.8203,
      "country_code": "MX"
    },
    {
      "city": "Kičevo",
      "latitude": 41.5142,
      "longitude": 20.9631,
      "country_code": "MK"
    },
    {
      "city": "Koper",
      "latitude": 45.5475,
      "longitude": 13.7307,
      "country_code": "SI"
    },
    {
      "city": "Rehoboth",
      "latitude": -23.3167,
      "longitude": 17.0833,
      "country_code": "NA"
    },
    {
      "city": "Ciudad Altamirano",
      "latitude": 18.3583,
      "longitude": -100.6667,
      "country_code": "MX"
    },
    {
      "city": "Caversham",
      "latitude": 51.467,
      "longitude": -0.973,
      "country_code": "GB"
    },
    {
      "city": "Kings Norton",
      "latitude": 52.4072,
      "longitude": -1.9272,
      "country_code": "GB"
    },
    {
      "city": "Imperial Beach",
      "latitude": 32.5689,
      "longitude": -117.1184,
      "country_code": "US"
    },
    {
      "city": "Magdalena de Kino",
      "latitude": 30.6167,
      "longitude": -111.05,
      "country_code": "MX"
    },
    {
      "city": "Al Ghayz̧ah",
      "latitude": 16.2394,
      "longitude": 52.1638,
      "country_code": "YE"
    },
    {
      "city": "Shtime",
      "latitude": 42.4333,
      "longitude": 21.0333,
      "country_code": "XK"
    },
    {
      "city": "Hackney",
      "latitude": 51.5414,
      "longitude": -0.0266,
      "country_code": "GB"
    },
    {
      "city": "Velenje",
      "latitude": 46.3667,
      "longitude": 15.1167,
      "country_code": "SI"
    },
    {
      "city": "Bishopbriggs",
      "latitude": 55.9046,
      "longitude": -4.225,
      "country_code": "GB"
    },
    {
      "city": "Piastów",
      "latitude": 52.1833,
      "longitude": 20.85,
      "country_code": "PL"
    },
    {
      "city": "Bergenfield",
      "latitude": 40.9236,
      "longitude": -73.9983,
      "country_code": "US"
    },
    {
      "city": "Thornaby on Tees",
      "latitude": 54.5556,
      "longitude": -1.3049,
      "country_code": "GB"
    },
    {
      "city": "Stalybridge",
      "latitude": 53.4834,
      "longitude": -2.04,
      "country_code": "GB"
    },
    {
      "city": "Cerro Azul",
      "latitude": 21.2,
      "longitude": -97.7331,
      "country_code": "MX"
    },
    {
      "city": "Kingswinford",
      "latitude": 52.4981,
      "longitude": -2.1657,
      "country_code": "GB"
    },
    {
      "city": "Easton",
      "latitude": 40.6858,
      "longitude": -75.2209,
      "country_code": "US"
    },
    {
      "city": "Priboj",
      "latitude": 43.5816,
      "longitude": 19.5273,
      "country_code": "RS"
    },
    {
      "city": "Xoxocotla",
      "latitude": 18.685,
      "longitude": -99.2439,
      "country_code": "MX"
    },
    {
      "city": "West Whittier-Los Nietos",
      "latitude": 33.9759,
      "longitude": -118.0689,
      "country_code": "US"
    },
    {
      "city": "Indiana",
      "latitude": 40.622,
      "longitude": -79.1552,
      "country_code": "US"
    },
    {
      "city": "Farnley",
      "latitude": 53.7876,
      "longitude": -1.6159,
      "country_code": "GB"
    },
    {
      "city": "Sensuntepeque",
      "latitude": 13.88,
      "longitude": -88.63,
      "country_code": "SV"
    },
    {
      "city": "Orly",
      "latitude": 48.7439,
      "longitude": 2.3928,
      "country_code": "FR"
    },
    {
      "city": "Siliana",
      "latitude": 36.0833,
      "longitude": 9.3833,
      "country_code": "TN"
    },
    {
      "city": "Catió",
      "latitude": 11.2833,
      "longitude": -15.25,
      "country_code": "GW"
    },
    {
      "city": "La Unión",
      "latitude": 13.332,
      "longitude": -87.839,
      "country_code": "SV"
    },
    {
      "city": "Chapala",
      "latitude": 20.2933,
      "longitude": -103.1897,
      "country_code": "MX"
    },
    {
      "city": "Weingarten",
      "latitude": 47.8078,
      "longitude": 9.6417,
      "country_code": "DE"
    },
    {
      "city": "Maywood",
      "latitude": 33.9885,
      "longitude": -118.1877,
      "country_code": "US"
    },
    {
      "city": "Cormeilles-en-Parisis",
      "latitude": 48.9739,
      "longitude": 2.2014,
      "country_code": "FR"
    },
    {
      "city": "Belmont",
      "latitude": 37.5154,
      "longitude": -122.2955,
      "country_code": "US"
    },
    {
      "city": "Reisterstown",
      "latitude": 39.4552,
      "longitude": -76.8144,
      "country_code": "US"
    },
    {
      "city": "Alfreton",
      "latitude": 53.097,
      "longitude": -1.38,
      "country_code": "GB"
    },
    {
      "city": "Maisons-Laffitte",
      "latitude": 48.9469,
      "longitude": 2.1456,
      "country_code": "FR"
    },
    {
      "city": "Atlatlahucan",
      "latitude": 18.935,
      "longitude": -98.9,
      "country_code": "MX"
    },
    {
      "city": "Rolim de Moura",
      "latitude": -11.7302,
      "longitude": -61.7806,
      "country_code": "BR"
    },
    {
      "city": "Elgin",
      "latitude": 57.65,
      "longitude": -3.315,
      "country_code": "GB"
    },
    {
      "city": "Itaberaí",
      "latitude": -16.02,
      "longitude": -49.81,
      "country_code": "BR"
    },
    {
      "city": "Kościan",
      "latitude": 52.0833,
      "longitude": 16.65,
      "country_code": "PL"
    },
    {
      "city": "Nola",
      "latitude": 3.5337,
      "longitude": 16.0666,
      "country_code": "CF"
    },
    {
      "city": "La Valette-du-Var",
      "latitude": 43.1383,
      "longitude": 5.9831,
      "country_code": "FR"
    },
    {
      "city": "Kiryas Joel",
      "latitude": 41.3406,
      "longitude": -74.166,
      "country_code": "US"
    },
    {
      "city": "Lemon Grove",
      "latitude": 32.7331,
      "longitude": -117.0344,
      "country_code": "US"
    },
    {
      "city": "Lindenhurst",
      "latitude": 40.6858,
      "longitude": -73.371,
      "country_code": "US"
    },
    {
      "city": "Meoqui",
      "latitude": 28.2722,
      "longitude": -105.4819,
      "country_code": "MX"
    },
    {
      "city": "Felixstowe",
      "latitude": 51.9639,
      "longitude": 1.3515,
      "country_code": "GB"
    },
    {
      "city": "Ocampo",
      "latitude": 21.65,
      "longitude": -101.5,
      "country_code": "MX"
    },
    {
      "city": "Bayanhongor",
      "latitude": 46.1944,
      "longitude": 100.7181,
      "country_code": "MN"
    },
    {
      "city": "Blenheim",
      "latitude": -41.5167,
      "longitude": 173.95,
      "country_code": "NZ"
    },
    {
      "city": "Moyo",
      "latitude": 3.6504,
      "longitude": 31.72,
      "country_code": "UG"
    },
    {
      "city": "Camborne",
      "latitude": 50.213,
      "longitude": -5.3,
      "country_code": "GB"
    },
    {
      "city": "Voinjama",
      "latitude": 8.4167,
      "longitude": -9.75,
      "country_code": "LR"
    },
    {
      "city": "Nakhon Phanom",
      "latitude": 17.4069,
      "longitude": 104.7808,
      "country_code": "TH"
    },
    {
      "city": "Atherton",
      "latitude": 53.523,
      "longitude": -2.495,
      "country_code": "GB"
    },
    {
      "city": "Meyrin",
      "latitude": 46.2322,
      "longitude": 6.0791,
      "country_code": "CH"
    },
    {
      "city": "Utena",
      "latitude": 55.5,
      "longitude": 25.6028,
      "country_code": "LT"
    },
    {
      "city": "Stanmore",
      "latitude": 51.618,
      "longitude": -0.314,
      "country_code": "GB"
    },
    {
      "city": "Valmiera",
      "latitude": 57.5381,
      "longitude": 25.4231,
      "country_code": "LV"
    },
    {
      "city": "Suphan Buri",
      "latitude": 14.4675,
      "longitude": 100.1169,
      "country_code": "TH"
    },
    {
      "city": "Failsworth",
      "latitude": 53.5102,
      "longitude": -2.1575,
      "country_code": "GB"
    },
    {
      "city": "Torcy",
      "latitude": 48.8502,
      "longitude": 2.6508,
      "country_code": "FR"
    },
    {
      "city": "Dongola",
      "latitude": 19.1769,
      "longitude": 30.4839,
      "country_code": "SD"
    },
    {
      "city": "Mendi",
      "latitude": -6.1478,
      "longitude": 143.6572,
      "country_code": "PG"
    },
    {
      "city": "Viseu",
      "latitude": -1.1965,
      "longitude": -46.14,
      "country_code": "BR"
    },
    {
      "city": "Ulaangom",
      "latitude": 49.9833,
      "longitude": 92.0667,
      "country_code": "MN"
    },
    {
      "city": "University Park",
      "latitude": 25.7469,
      "longitude": -80.3684,
      "country_code": "US"
    },
    {
      "city": "Rodez",
      "latitude": 44.3506,
      "longitude": 2.575,
      "country_code": "FR"
    },
    {
      "city": "Whitefield",
      "latitude": 53.5521,
      "longitude": -2.2992,
      "country_code": "GB"
    },
    {
      "city": "Apodi",
      "latitude": -5.65,
      "longitude": -37.8,
      "country_code": "BR"
    },
    {
      "city": "Belper",
      "latitude": 53.029,
      "longitude": -1.475,
      "country_code": "GB"
    },
    {
      "city": "Oxkutzkab",
      "latitude": 20.3028,
      "longitude": -89.4183,
      "country_code": "MX"
    },
    {
      "city": "Soledad",
      "latitude": 36.4432,
      "longitude": -121.3426,
      "country_code": "US"
    },
    {
      "city": "Gjirokastër",
      "latitude": 40.0758,
      "longitude": 20.1389,
      "country_code": "AL"
    },
    {
      "city": "Lormont",
      "latitude": 44.8792,
      "longitude": -0.5217,
      "country_code": "FR"
    },
    {
      "city": "Chaville",
      "latitude": 48.8086,
      "longitude": 2.1886,
      "country_code": "FR"
    },
    {
      "city": "Malinalco",
      "latitude": 18.9483,
      "longitude": -99.4947,
      "country_code": "MX"
    },
    {
      "city": "Cliffside Park",
      "latitude": 40.8221,
      "longitude": -73.988,
      "country_code": "US"
    },
    {
      "city": "Eirunepé",
      "latitude": -6.66,
      "longitude": -69.8738,
      "country_code": "BR"
    },
    {
      "city": "Svay Rieng",
      "latitude": 11.0878,
      "longitude": 105.7994,
      "country_code": "KH"
    },
    {
      "city": "Leisure City",
      "latitude": 25.4937,
      "longitude": -80.4369,
      "country_code": "US"
    },
    {
      "city": "Sumbe",
      "latitude": -11.2052,
      "longitude": 13.8417,
      "country_code": "AO"
    },
    {
      "city": "Bajina Bašta",
      "latitude": 43.9731,
      "longitude": 19.5597,
      "country_code": "RS"
    },
    {
      "city": "Heroica Ciudad de Tlaxiaco",
      "latitude": 17.2704,
      "longitude": -97.68,
      "country_code": "MX"
    },
    {
      "city": "Belmont",
      "latitude": 42.396,
      "longitude": -71.1795,
      "country_code": "US"
    },
    {
      "city": "Clevedon",
      "latitude": 51.438,
      "longitude": -2.854,
      "country_code": "GB"
    },
    {
      "city": "Sainte-Thérèse",
      "latitude": 45.6333,
      "longitude": -73.85,
      "country_code": "CA"
    },
    {
      "city": "Hovd",
      "latitude": 48.0167,
      "longitude": 91.5667,
      "country_code": "MN"
    },
    {
      "city": "Le Petit-Quevilly",
      "latitude": 49.4311,
      "longitude": 1.0539,
      "country_code": "FR"
    },
    {
      "city": "Castaños",
      "latitude": 26.7833,
      "longitude": -101.4167,
      "country_code": "MX"
    },
    {
      "city": "Fontaine",
      "latitude": 45.1939,
      "longitude": 5.6856,
      "country_code": "FR"
    },
    {
      "city": "Cəlilabad",
      "latitude": 39.2042,
      "longitude": 48.4958,
      "country_code": "AZ"
    },
    {
      "city": "Litherland",
      "latitude": 53.4727,
      "longitude": -2.999,
      "country_code": "GB"
    },
    {
      "city": "Chandlers Ford",
      "latitude": 50.984,
      "longitude": -1.3792,
      "country_code": "GB"
    },
    {
      "city": "Nangō",
      "latitude": 34.6003,
      "longitude": 135.6956,
      "country_code": "JP"
    },
    {
      "city": "Jardim",
      "latitude": -21.4799,
      "longitude": -56.15,
      "country_code": "BR"
    },
    {
      "city": "Amnat Charoen",
      "latitude": 15.85,
      "longitude": 104.6333,
      "country_code": "TH"
    },
    {
      "city": "Morsang-sur-Orge",
      "latitude": 48.6618,
      "longitude": 2.3461,
      "country_code": "FR"
    },
    {
      "city": "Montgeron",
      "latitude": 48.7039,
      "longitude": 2.4605,
      "country_code": "FR"
    },
    {
      "city": "Itupiranga",
      "latitude": -5.12,
      "longitude": -49.3,
      "country_code": "BR"
    },
    {
      "city": "Croix",
      "latitude": 50.6781,
      "longitude": 3.1508,
      "country_code": "FR"
    },
    {
      "city": "Penwortham",
      "latitude": 53.74,
      "longitude": -2.72,
      "country_code": "GB"
    },
    {
      "city": "Szczytno",
      "latitude": 53.5628,
      "longitude": 20.9853,
      "country_code": "PL"
    },
    {
      "city": "El Tarf",
      "latitude": 36.7669,
      "longitude": 8.3136,
      "country_code": "DZ"
    },
    {
      "city": "Atoyac de Álvarez",
      "latitude": 17.2,
      "longitude": -100.4333,
      "country_code": "MX"
    },
    {
      "city": "Nar’yan-Mar",
      "latitude": 67.6378,
      "longitude": 53.0067,
      "country_code": "RU"
    },
    {
      "city": "Kidsgrove",
      "latitude": 53.0874,
      "longitude": -2.2478,
      "country_code": "GB"
    },
    {
      "city": "Ewa Gentry",
      "latitude": 21.3344,
      "longitude": -158.0262,
      "country_code": "US"
    },
    {
      "city": "Onex",
      "latitude": 46.1833,
      "longitude": 6.1,
      "country_code": "CH"
    },
    {
      "city": "San Juan Zitlaltepec",
      "latitude": 19.7167,
      "longitude": -99.05,
      "country_code": "MX"
    },
    {
      "city": "San Marcos",
      "latitude": 14.966,
      "longitude": -91.8,
      "country_code": "GT"
    },
    {
      "city": "Baturité",
      "latitude": -4.3296,
      "longitude": -38.88,
      "country_code": "BR"
    },
    {
      "city": "Zwedru",
      "latitude": 6.0704,
      "longitude": -8.13,
      "country_code": "LR"
    },
    {
      "city": "Decatur",
      "latitude": 33.7711,
      "longitude": -84.2968,
      "country_code": "US"
    },
    {
      "city": "Tipasa",
      "latitude": 36.5942,
      "longitude": 2.443,
      "country_code": "DZ"
    },
    {
      "city": "Kafr Shukr",
      "latitude": 30.547,
      "longitude": 31.2673,
      "country_code": "EG"
    },
    {
      "city": "South Bradenton",
      "latitude": 27.4612,
      "longitude": -82.5821,
      "country_code": "US"
    },
    {
      "city": "Laurel",
      "latitude": 39.095,
      "longitude": -76.8622,
      "country_code": "US"
    },
    {
      "city": "Guiseley",
      "latitude": 53.875,
      "longitude": -1.706,
      "country_code": "GB"
    },
    {
      "city": "Fray Bentos",
      "latitude": -33.1333,
      "longitude": -58.3,
      "country_code": "UY"
    },
    {
      "city": "Loos",
      "latitude": 50.6128,
      "longitude": 3.0144,
      "country_code": "FR"
    },
    {
      "city": "Northwood",
      "latitude": 51.601,
      "longitude": -0.4176,
      "country_code": "GB"
    },
    {
      "city": "Longjumeau",
      "latitude": 48.6943,
      "longitude": 2.2958,
      "country_code": "FR"
    },
    {
      "city": "Artashat",
      "latitude": 39.9539,
      "longitude": 44.5506,
      "country_code": "AM"
    },
    {
      "city": "Swinton",
      "latitude": 53.5122,
      "longitude": -2.3412,
      "country_code": "GB"
    },
    {
      "city": "El Cerrito",
      "latitude": 37.9197,
      "longitude": -122.3025,
      "country_code": "US"
    },
    {
      "city": "Aţ Ţafīlah",
      "latitude": 30.8375,
      "longitude": 35.6042,
      "country_code": "JO"
    },
    {
      "city": "Penistone",
      "latitude": 53.525,
      "longitude": -1.629,
      "country_code": "GB"
    },
    {
      "city": "Kérkyra",
      "latitude": 39.6239,
      "longitude": 19.9214,
      "country_code": "GR"
    },
    {
      "city": "Holborn",
      "latitude": 51.5172,
      "longitude": -0.1182,
      "country_code": "GB"
    },
    {
      "city": "Ossett",
      "latitude": 53.68,
      "longitude": -1.58,
      "country_code": "GB"
    },
    {
      "city": "Dronfield",
      "latitude": 53.3024,
      "longitude": -1.4664,
      "country_code": "GB"
    },
    {
      "city": "Sainte-Foy-lès-Lyon",
      "latitude": 45.73,
      "longitude": 4.8,
      "country_code": "FR"
    },
    {
      "city": "San Lorenzo",
      "latitude": 37.6737,
      "longitude": -122.1349,
      "country_code": "US"
    },
    {
      "city": "Canelones",
      "latitude": -34.538,
      "longitude": -56.284,
      "country_code": "UY"
    },
    {
      "city": "Puyo",
      "latitude": -1.483,
      "longitude": -77.987,
      "country_code": "EC"
    },
    {
      "city": "Friern Barnet",
      "latitude": 51.6126,
      "longitude": -0.1584,
      "country_code": "GB"
    },
    {
      "city": "Kafr Qāsim",
      "latitude": 32.1142,
      "longitude": 34.9772,
      "country_code": "IL"
    },
    {
      "city": "South Pasadena",
      "latitude": 34.1103,
      "longitude": -118.1573,
      "country_code": "US"
    },
    {
      "city": "Kenilworth",
      "latitude": 52.341,
      "longitude": -1.566,
      "country_code": "GB"
    },
    {
      "city": "Lambaréné",
      "latitude": -0.6883,
      "longitude": 10.2319,
      "country_code": "GA"
    },
    {
      "city": "Maesteg",
      "latitude": 51.61,
      "longitude": -3.65,
      "country_code": "GB"
    },
    {
      "city": "Valinda",
      "latitude": 34.0401,
      "longitude": -117.93,
      "country_code": "US"
    },
    {
      "city": "Visby",
      "latitude": 57.629,
      "longitude": 18.3071,
      "country_code": "SE"
    },
    {
      "city": "Montigny-lès-Metz",
      "latitude": 49.1006,
      "longitude": 6.1539,
      "country_code": "FR"
    },
    {
      "city": "Ban Khlong Ton Madua",
      "latitude": 13.6372,
      "longitude": 100.2967,
      "country_code": "TH"
    },
    {
      "city": "Coral Terrace",
      "latitude": 25.7464,
      "longitude": -80.3049,
      "country_code": "US"
    },
    {
      "city": "Paracuru",
      "latitude": -3.3995,
      "longitude": -39.04,
      "country_code": "BR"
    },
    {
      "city": "Mohale’s Hoek",
      "latitude": -30.159,
      "longitude": 27.48,
      "country_code": "LS"
    },
    {
      "city": "Levittown",
      "latitude": 18.4454,
      "longitude": -66.1759,
      "country_code": "PR"
    },
    {
      "city": "Palm Springs",
      "latitude": 26.6349,
      "longitude": -80.0968,
      "country_code": "US"
    },
    {
      "city": "Vukovar",
      "latitude": 45.35,
      "longitude": 19.0033,
      "country_code": "HR"
    },
    {
      "city": "Wewak",
      "latitude": -3.55,
      "longitude": 143.6333,
      "country_code": "PG"
    },
    {
      "city": "Sheldon",
      "latitude": 52.45,
      "longitude": -1.7666,
      "country_code": "GB"
    },
    {
      "city": "Baldwin",
      "latitude": 40.6634,
      "longitude": -73.6104,
      "country_code": "US"
    },
    {
      "city": "Hacı Zeynalabdin",
      "latitude": 40.6242,
      "longitude": 49.5575,
      "country_code": "AZ"
    },
    {
      "city": "Juneau",
      "latitude": 58.4546,
      "longitude": -134.1739,
      "country_code": "US"
    },
    {
      "city": "Santiago Ixcuintla",
      "latitude": 21.811,
      "longitude": -105.2079,
      "country_code": "MX"
    },
    {
      "city": "Normanton",
      "latitude": 53.697,
      "longitude": -1.416,
      "country_code": "GB"
    },
    {
      "city": "Kaga Bandoro",
      "latitude": 7.0006,
      "longitude": 19.1808,
      "country_code": "CF"
    },
    {
      "city": "Tbeng Meanchey",
      "latitude": 13.8167,
      "longitude": 104.9667,
      "country_code": "KH"
    },
    {
      "city": "Portalegre",
      "latitude": 39.3167,
      "longitude": -7.4167,
      "country_code": "PT"
    },
    {
      "city": "University Park",
      "latitude": 32.8506,
      "longitude": -96.7937,
      "country_code": "US"
    },
    {
      "city": "Bispham",
      "latitude": 53.852,
      "longitude": -3.041,
      "country_code": "GB"
    },
    {
      "city": "Cloverleaf",
      "latitude": 29.7882,
      "longitude": -95.1724,
      "country_code": "US"
    },
    {
      "city": "Le Plessis-Trévise",
      "latitude": 48.8111,
      "longitude": 2.5717,
      "country_code": "FR"
    },
    {
      "city": "Ptuj",
      "latitude": 46.4186,
      "longitude": 15.8714,
      "country_code": "SI"
    },
    {
      "city": "Krathum Baen",
      "latitude": 13.6519,
      "longitude": 100.2572,
      "country_code": "TH"
    },
    {
      "city": "Riverbank",
      "latitude": 37.7268,
      "longitude": -120.9402,
      "country_code": "US"
    },
    {
      "city": "Tassin-la-Demi-Lune",
      "latitude": 45.764,
      "longitude": 4.78,
      "country_code": "FR"
    },
    {
      "city": "Stratton Saint Margaret",
      "latitude": 51.586,
      "longitude": -1.762,
      "country_code": "GB"
    },
    {
      "city": "Lincolnia",
      "latitude": 38.8158,
      "longitude": -77.1543,
      "country_code": "US"
    },
    {
      "city": "Kanmaki",
      "latitude": 34.5628,
      "longitude": 135.7167,
      "country_code": "JP"
    },
    {
      "city": "March",
      "latitude": 52.551,
      "longitude": 0.088,
      "country_code": "GB"
    },
    {
      "city": "Tequixquiac",
      "latitude": 19.9097,
      "longitude": -99.1417,
      "country_code": "MX"
    },
    {
      "city": "Melrose Park",
      "latitude": 41.9029,
      "longitude": -87.8642,
      "country_code": "US"
    },
    {
      "city": "Kasamatsuchō",
      "latitude": 35.3672,
      "longitude": 136.7633,
      "country_code": "JP"
    },
    {
      "city": "Sühbaatar",
      "latitude": 50.2364,
      "longitude": 106.2064,
      "country_code": "MN"
    },
    {
      "city": "Reyes Acozac",
      "latitude": 19.7667,
      "longitude": -98.9833,
      "country_code": "MX"
    },
    {
      "city": "Baalbek",
      "latitude": 34.0061,
      "longitude": 36.2086,
      "country_code": "LB"
    },
    {
      "city": "Palmers Green",
      "latitude": 51.6178,
      "longitude": -0.1092,
      "country_code": "GB"
    },
    {
      "city": "Montmorency",
      "latitude": 48.9906,
      "longitude": 2.3228,
      "country_code": "FR"
    },
    {
      "city": "Hornsey",
      "latitude": 51.587,
      "longitude": -0.118,
      "country_code": "GB"
    },
    {
      "city": "Herndon",
      "latitude": 38.9699,
      "longitude": -77.3867,
      "country_code": "US"
    },
    {
      "city": "Maplewood",
      "latitude": 40.733,
      "longitude": -74.2711,
      "country_code": "US"
    },
    {
      "city": "Falmouth",
      "latitude": 50.15,
      "longitude": -5.07,
      "country_code": "GB"
    },
    {
      "city": "Royton",
      "latitude": 53.566,
      "longitude": -2.121,
      "country_code": "GB"
    },
    {
      "city": "Bailey's Crossroads",
      "latitude": 38.8477,
      "longitude": -77.1305,
      "country_code": "US"
    },
    {
      "city": "Chiconcuac",
      "latitude": 19.55,
      "longitude": -98.9,
      "country_code": "MX"
    },
    {
      "city": "Falagueira",
      "latitude": 38.759,
      "longitude": -9.2199,
      "country_code": "PT"
    },
    {
      "city": "Shārūnah",
      "latitude": 28.5667,
      "longitude": 30.85,
      "country_code": "EG"
    },
    {
      "city": "Rockville Centre",
      "latitude": 40.6644,
      "longitude": -73.6383,
      "country_code": "US"
    },
    {
      "city": "Linslade",
      "latitude": 51.9243,
      "longitude": -0.6774,
      "country_code": "GB"
    },
    {
      "city": "Lop Buri",
      "latitude": 14.8,
      "longitude": 100.6269,
      "country_code": "TH"
    },
    {
      "city": "Newquay",
      "latitude": 50.412,
      "longitude": -5.0757,
      "country_code": "GB"
    },
    {
      "city": "Gan Yavne",
      "latitude": 31.7886,
      "longitude": 34.7053,
      "country_code": "IL"
    },
    {
      "city": "Plumstead",
      "latitude": 51.49,
      "longitude": 0.09,
      "country_code": "GB"
    },
    {
      "city": "Watauga",
      "latitude": 32.8718,
      "longitude": -97.2515,
      "country_code": "US"
    },
    {
      "city": "Cotija de la Paz",
      "latitude": 19.81,
      "longitude": -102.7047,
      "country_code": "MX"
    },
    {
      "city": "Carlow",
      "latitude": 52.8306,
      "longitude": -6.9317,
      "country_code": "IE"
    },
    {
      "city": "La Celle-Saint-Cloud",
      "latitude": 48.8411,
      "longitude": 2.1344,
      "country_code": "FR"
    },
    {
      "city": "São João da Madeira",
      "latitude": 40.9,
      "longitude": -8.5,
      "country_code": "PT"
    },
    {
      "city": "Montigny-lès-Cormeilles",
      "latitude": 48.9944,
      "longitude": 2.1958,
      "country_code": "FR"
    },
    {
      "city": "Suitland",
      "latitude": 38.8492,
      "longitude": -76.9225,
      "country_code": "US"
    },
    {
      "city": "Fatick",
      "latitude": 14.3167,
      "longitude": -16.4167,
      "country_code": "SN"
    },
    {
      "city": "Chesham",
      "latitude": 51.712,
      "longitude": -0.612,
      "country_code": "GB"
    },
    {
      "city": "Lodi",
      "latitude": 40.8784,
      "longitude": -74.0814,
      "country_code": "US"
    },
    {
      "city": "Villa Sarmiento",
      "latitude": -34.6333,
      "longitude": -58.5667,
      "country_code": "AR"
    },
    {
      "city": "San Fernando",
      "latitude": 34.2886,
      "longitude": -118.4363,
      "country_code": "US"
    },
    {
      "city": "Chanthaburi",
      "latitude": 12.6086,
      "longitude": 102.1039,
      "country_code": "TH"
    },
    {
      "city": "Peekskill",
      "latitude": 41.2883,
      "longitude": -73.9227,
      "country_code": "US"
    },
    {
      "city": "Barras",
      "latitude": -4.25,
      "longitude": -42.3,
      "country_code": "BR"
    },
    {
      "city": "Terrytown",
      "latitude": 29.9014,
      "longitude": -90.0279,
      "country_code": "US"
    },
    {
      "city": "Vélizy-Villacoublay",
      "latitude": 48.7834,
      "longitude": 2.1834,
      "country_code": "FR"
    },
    {
      "city": "Kėdainiai",
      "latitude": 55.2833,
      "longitude": 23.9667,
      "country_code": "LT"
    },
    {
      "city": "Newton in Makerfield",
      "latitude": 53.45,
      "longitude": -2.633,
      "country_code": "GB"
    },
    {
      "city": "Vrbas",
      "latitude": 45.5697,
      "longitude": 19.6378,
      "country_code": "RS"
    },
    {
      "city": "Neath",
      "latitude": 51.66,
      "longitude": -3.81,
      "country_code": "GB"
    },
    {
      "city": "Huskvarna",
      "latitude": 57.7919,
      "longitude": 14.2756,
      "country_code": "SE"
    },
    {
      "city": "Atar",
      "latitude": 20.5167,
      "longitude": -13.05,
      "country_code": "MR"
    },
    {
      "city": "Motul",
      "latitude": 21.1667,
      "longitude": -89.4667,
      "country_code": "MX"
    },
    {
      "city": "Elmwood Park",
      "latitude": 41.9225,
      "longitude": -87.8163,
      "country_code": "US"
    },
    {
      "city": "Novo Mesto",
      "latitude": 45.7981,
      "longitude": 15.1628,
      "country_code": "SI"
    },
    {
      "city": "Renfrew",
      "latitude": 55.8791,
      "longitude": -4.3868,
      "country_code": "GB"
    },
    {
      "city": "Horwich",
      "latitude": 53.592,
      "longitude": -2.54,
      "country_code": "GB"
    },
    {
      "city": "Cottingham",
      "latitude": 53.7822,
      "longitude": -0.4136,
      "country_code": "GB"
    },
    {
      "city": "Southgate",
      "latitude": 51.6316,
      "longitude": -0.1265,
      "country_code": "GB"
    },
    {
      "city": "Guaranda",
      "latitude": -1.6056,
      "longitude": -79.0031,
      "country_code": "EC"
    },
    {
      "city": "Kibaha",
      "latitude": -6.7586,
      "longitude": 38.9289,
      "country_code": "TZ"
    },
    {
      "city": "Tysons",
      "latitude": 38.9215,
      "longitude": -77.2273,
      "country_code": "US"
    },
    {
      "city": "Tewkesbury",
      "latitude": 51.99,
      "longitude": -2.16,
      "country_code": "GB"
    },
    {
      "city": "Palm Tree",
      "latitude": 41.3411,
      "longitude": -74.1667,
      "country_code": "US"
    },
    {
      "city": "Satun",
      "latitude": 6.6147,
      "longitude": 100.0681,
      "country_code": "TH"
    },
    {
      "city": "Villeneuve-le-Roi",
      "latitude": 48.7333,
      "longitude": 2.4167,
      "country_code": "FR"
    },
    {
      "city": "Phetchaburi",
      "latitude": 13.1119,
      "longitude": 99.9458,
      "country_code": "TH"
    },
    {
      "city": "Copiague",
      "latitude": 40.6728,
      "longitude": -73.3932,
      "country_code": "US"
    },
    {
      "city": "Oak Ridge",
      "latitude": 28.4727,
      "longitude": -81.4169,
      "country_code": "US"
    },
    {
      "city": "Chilly-Mazarin",
      "latitude": 48.7025,
      "longitude": 2.3125,
      "country_code": "FR"
    },
    {
      "city": "Ashland",
      "latitude": 37.6942,
      "longitude": -122.1159,
      "country_code": "US"
    },
    {
      "city": "West Puente Valley",
      "latitude": 34.0512,
      "longitude": -117.9681,
      "country_code": "US"
    },
    {
      "city": "Rosemont",
      "latitude": 38.5477,
      "longitude": -121.3553,
      "country_code": "US"
    },
    {
      "city": "Southbourne",
      "latitude": 50.722,
      "longitude": -1.798,
      "country_code": "GB"
    },
    {
      "city": "Peterlee",
      "latitude": 54.76,
      "longitude": -1.33,
      "country_code": "GB"
    },
    {
      "city": "Kirkstall",
      "latitude": 53.816,
      "longitude": -1.602,
      "country_code": "GB"
    },
    {
      "city": "Penzance",
      "latitude": 50.119,
      "longitude": -5.537,
      "country_code": "GB"
    },
    {
      "city": "Ogre",
      "latitude": 56.8169,
      "longitude": 24.6047,
      "country_code": "LV"
    },
    {
      "city": "Cudahy",
      "latitude": 33.9631,
      "longitude": -118.183,
      "country_code": "US"
    },
    {
      "city": "The Crossings",
      "latitude": 25.6708,
      "longitude": -80.4018,
      "country_code": "US"
    },
    {
      "city": "Shoreham-by-Sea",
      "latitude": 50.834,
      "longitude": -0.273,
      "country_code": "GB"
    },
    {
      "city": "Seaham",
      "latitude": 54.84,
      "longitude": -1.34,
      "country_code": "GB"
    },
    {
      "city": "Allschwil",
      "latitude": 47.5508,
      "longitude": 7.5358,
      "country_code": "CH"
    },
    {
      "city": "Coudekerque-Branche",
      "latitude": 51.0253,
      "longitude": 2.3917,
      "country_code": "FR"
    },
    {
      "city": "Nkhata Bay",
      "latitude": -11.6333,
      "longitude": 34.3,
      "country_code": "MW"
    },
    {
      "city": "Hialeah Gardens",
      "latitude": 25.8878,
      "longitude": -80.3569,
      "country_code": "US"
    },
    {
      "city": "Sukhodilsk",
      "latitude": 48.35,
      "longitude": 39.7167,
      "country_code": "UA"
    },
    {
      "city": "Mantes-la-Ville",
      "latitude": 48.975,
      "longitude": 1.7117,
      "country_code": "FR"
    },
    {
      "city": "Carteret",
      "latitude": 40.5848,
      "longitude": -74.2284,
      "country_code": "US"
    },
    {
      "city": "Woodlawn",
      "latitude": 38.7332,
      "longitude": -77.1149,
      "country_code": "US"
    },
    {
      "city": "Opfikon",
      "latitude": 47.4331,
      "longitude": 8.5719,
      "country_code": "CH"
    },
    {
      "city": "Tena",
      "latitude": -0.989,
      "longitude": -77.8159,
      "country_code": "EC"
    },
    {
      "city": "Wasquehal",
      "latitude": 50.6694,
      "longitude": 3.1308,
      "country_code": "FR"
    },
    {
      "city": "Peto",
      "latitude": 20.1256,
      "longitude": -88.9214,
      "country_code": "MX"
    },
    {
      "city": "Biddulph",
      "latitude": 53.12,
      "longitude": -2.17,
      "country_code": "GB"
    },
    {
      "city": "Killingworth",
      "latitude": 55.0318,
      "longitude": -1.5557,
      "country_code": "GB"
    },
    {
      "city": "Loreto",
      "latitude": 26.0128,
      "longitude": -111.3433,
      "country_code": "MX"
    },
    {
      "city": "Naas",
      "latitude": 53.2158,
      "longitude": -6.6669,
      "country_code": "IE"
    },
    {
      "city": "Sacavém",
      "latitude": 38.7944,
      "longitude": -9.1053,
      "country_code": "PT"
    },
    {
      "city": "Jēkabpils",
      "latitude": 56.4975,
      "longitude": 25.8664,
      "country_code": "LV"
    },
    {
      "city": "Caterham",
      "latitude": 51.2803,
      "longitude": -0.0816,
      "country_code": "GB"
    },
    {
      "city": "Yonabaru",
      "latitude": 26.1994,
      "longitude": 127.7547,
      "country_code": "JP"
    },
    {
      "city": "Nyon",
      "latitude": 46.382,
      "longitude": 6.2389,
      "country_code": "CH"
    },
    {
      "city": "Ciudad Miguel Alemán",
      "latitude": 26.4003,
      "longitude": -99.0253,
      "country_code": "MX"
    },
    {
      "city": "Bellshill",
      "latitude": 55.8165,
      "longitude": -4.0262,
      "country_code": "GB"
    },
    {
      "city": "Worcester Park",
      "latitude": 51.3752,
      "longitude": -0.239,
      "country_code": "GB"
    },
    {
      "city": "Maywood",
      "latitude": 41.8798,
      "longitude": -87.8442,
      "country_code": "US"
    },
    {
      "city": "Davyhulme",
      "latitude": 53.4559,
      "longitude": -2.3683,
      "country_code": "GB"
    },
    {
      "city": "Fleury-les-Aubrais",
      "latitude": 47.9512,
      "longitude": 1.8745,
      "country_code": "FR"
    },
    {
      "city": "Hidalgotitlán",
      "latitude": 17.7833,
      "longitude": -94.6333,
      "country_code": "MX"
    },
    {
      "city": "Winter Gardens",
      "latitude": 32.8376,
      "longitude": -116.9268,
      "country_code": "US"
    },
    {
      "city": "Le Mée-sur-Seine",
      "latitude": 48.5333,
      "longitude": 2.6289,
      "country_code": "FR"
    },
    {
      "city": "Achères",
      "latitude": 48.9602,
      "longitude": 2.0684,
      "country_code": "FR"
    },
    {
      "city": "Kilkenny",
      "latitude": 52.6477,
      "longitude": -7.2561,
      "country_code": "IE"
    },
    {
      "city": "Alloa",
      "latitude": 56.116,
      "longitude": -3.793,
      "country_code": "GB"
    },
    {
      "city": "Aarau",
      "latitude": 47.3923,
      "longitude": 8.0446,
      "country_code": "CH"
    },
    {
      "city": "West Rancho Dominguez",
      "latitude": 33.9057,
      "longitude": -118.2682,
      "country_code": "US"
    },
    {
      "city": "Blue Island",
      "latitude": 41.6578,
      "longitude": -87.6812,
      "country_code": "US"
    },
    {
      "city": "Lamu",
      "latitude": -2.2686,
      "longitude": 40.9003,
      "country_code": "KE"
    },
    {
      "city": "Biləsuvar",
      "latitude": 39.4481,
      "longitude": 48.5428,
      "country_code": "AZ"
    },
    {
      "city": "Kayanza",
      "latitude": -2.9221,
      "longitude": 29.6293,
      "country_code": "BI"
    },
    {
      "city": "Sibiti",
      "latitude": -3.6833,
      "longitude": 13.35,
      "country_code": "CG"
    },
    {
      "city": "Llandudno",
      "latitude": 53.325,
      "longitude": -3.826,
      "country_code": "GB"
    },
    {
      "city": "Madingou",
      "latitude": -4.1536,
      "longitude": 13.55,
      "country_code": "CG"
    },
    {
      "city": "Bathgate",
      "latitude": 55.9024,
      "longitude": -3.6431,
      "country_code": "GB"
    },
    {
      "city": "Mzimba",
      "latitude": -11.9,
      "longitude": 33.6,
      "country_code": "MW"
    },
    {
      "city": "Sibut",
      "latitude": 5.7378,
      "longitude": 19.0867,
      "country_code": "CF"
    },
    {
      "city": "Rothwell",
      "latitude": 53.7485,
      "longitude": -1.478,
      "country_code": "GB"
    },
    {
      "city": "Goodmayes",
      "latitude": 51.5584,
      "longitude": 0.1119,
      "country_code": "GB"
    },
    {
      "city": "Uliastay",
      "latitude": 47.7417,
      "longitude": 96.8444,
      "country_code": "MN"
    },
    {
      "city": "Ives Estates",
      "latitude": 25.9632,
      "longitude": -80.183,
      "country_code": "US"
    },
    {
      "city": "Burnham-on-Sea",
      "latitude": 51.2376,
      "longitude": -2.9935,
      "country_code": "GB"
    },
    {
      "city": "Ahfir",
      "latitude": 34.9514,
      "longitude": -2.1025,
      "country_code": "MA"
    },
    {
      "city": "Nogent-sur-Oise",
      "latitude": 49.2756,
      "longitude": 2.4683,
      "country_code": "FR"
    },
    {
      "city": "Mödling",
      "latitude": 48.0856,
      "longitude": 16.2831,
      "country_code": "AT"
    },
    {
      "city": "Quedgeley",
      "latitude": 51.825,
      "longitude": -2.28,
      "country_code": "GB"
    },
    {
      "city": "Kayunga",
      "latitude": 0.7025,
      "longitude": 32.8886,
      "country_code": "UG"
    },
    {
      "city": "Dukinfield",
      "latitude": 53.4739,
      "longitude": -2.0828,
      "country_code": "GB"
    },
    {
      "city": "Mulanje",
      "latitude": -16.0316,
      "longitude": 35.5,
      "country_code": "MW"
    },
    {
      "city": "West Carson",
      "latitude": 33.8229,
      "longitude": -118.2931,
      "country_code": "US"
    },
    {
      "city": "Prestatyn",
      "latitude": 53.331,
      "longitude": -3.405,
      "country_code": "GB"
    },
    {
      "city": "Bafatá",
      "latitude": 12.1719,
      "longitude": -14.6575,
      "country_code": "GW"
    },
    {
      "city": "Dingle",
      "latitude": 53.3774,
      "longitude": -2.9613,
      "country_code": "GB"
    },
    {
      "city": "Phichit",
      "latitude": 16.4431,
      "longitude": 100.3467,
      "country_code": "TH"
    },
    {
      "city": "Mouila",
      "latitude": -1.8667,
      "longitude": 11.055,
      "country_code": "GA"
    },
    {
      "city": "Huanímaro",
      "latitude": 20.3675,
      "longitude": -101.4969,
      "country_code": "MX"
    },
    {
      "city": "Loei",
      "latitude": 17.4903,
      "longitude": 101.725,
      "country_code": "TH"
    },
    {
      "city": "Willowbrook",
      "latitude": 33.9199,
      "longitude": -118.2362,
      "country_code": "US"
    },
    {
      "city": "Millbrae",
      "latitude": 37.5994,
      "longitude": -122.4023,
      "country_code": "US"
    },
    {
      "city": "East Barnet",
      "latitude": 51.643,
      "longitude": -0.163,
      "country_code": "GB"
    },
    {
      "city": "Molesey",
      "latitude": 51.401,
      "longitude": -0.363,
      "country_code": "GB"
    },
    {
      "city": "Mbaïki",
      "latitude": 3.8833,
      "longitude": 18,
      "country_code": "CF"
    },
    {
      "city": "Soroca",
      "latitude": 48.1558,
      "longitude": 28.2975,
      "country_code": "MD"
    },
    {
      "city": "Hayesville",
      "latitude": 44.9794,
      "longitude": -122.9739,
      "country_code": "US"
    },
    {
      "city": "Nsanje",
      "latitude": -16.9167,
      "longitude": 35.2667,
      "country_code": "MW"
    },
    {
      "city": "Connahs Quay",
      "latitude": 53.2179,
      "longitude": -3.0573,
      "country_code": "GB"
    },
    {
      "city": "Truro",
      "latitude": 50.26,
      "longitude": -5.051,
      "country_code": "GB"
    },
    {
      "city": "Phetchabun",
      "latitude": 16.4169,
      "longitude": 101.1533,
      "country_code": "TH"
    },
    {
      "city": "Liversedge",
      "latitude": 53.7067,
      "longitude": -1.69,
      "country_code": "GB"
    },
    {
      "city": "Bella Unión",
      "latitude": -30.26,
      "longitude": -57.5992,
      "country_code": "UY"
    },
    {
      "city": "Caacupé",
      "latitude": -25.387,
      "longitude": -57.14,
      "country_code": "PY"
    },
    {
      "city": "Antrim",
      "latitude": 54.7173,
      "longitude": -6.2055,
      "country_code": "GB"
    },
    {
      "city": "Fortín de las Flores",
      "latitude": 18.9,
      "longitude": -97,
      "country_code": "MX"
    },
    {
      "city": "Mocoa",
      "latitude": 1.15,
      "longitude": -76.63,
      "country_code": "CO"
    },
    {
      "city": "Monsey",
      "latitude": 41.1181,
      "longitude": -74.0681,
      "country_code": "US"
    },
    {
      "city": "Telšiai",
      "latitude": 55.9833,
      "longitude": 22.25,
      "country_code": "LT"
    },
    {
      "city": "Guayama",
      "latitude": 17.9744,
      "longitude": -66.1104,
      "country_code": "PR"
    },
    {
      "city": "Landover",
      "latitude": 38.9241,
      "longitude": -76.8875,
      "country_code": "US"
    },
    {
      "city": "Linlithgow",
      "latitude": 55.9791,
      "longitude": -3.6105,
      "country_code": "GB"
    },
    {
      "city": "Keynsham",
      "latitude": 51.4135,
      "longitude": -2.4968,
      "country_code": "GB"
    },
    {
      "city": "Tauragė",
      "latitude": 55.2514,
      "longitude": 22.2903,
      "country_code": "LT"
    },
    {
      "city": "Kegalle",
      "latitude": 7.2531,
      "longitude": 80.3453,
      "country_code": "LK"
    },
    {
      "city": "Ghāt",
      "latitude": 24.95,
      "longitude": 10.3167,
      "country_code": "LY"
    },
    {
      "city": "Moreton",
      "latitude": 53.401,
      "longitude": -3.111,
      "country_code": "GB"
    },
    {
      "city": "Bedlington",
      "latitude": 55.133,
      "longitude": -1.583,
      "country_code": "GB"
    },
    {
      "city": "Hillside",
      "latitude": 40.6961,
      "longitude": -74.2286,
      "country_code": "US"
    },
    {
      "city": "Reinach",
      "latitude": 47.4936,
      "longitude": 7.5908,
      "country_code": "CH"
    },
    {
      "city": "Al Karak",
      "latitude": 31.1833,
      "longitude": 35.7,
      "country_code": "JO"
    },
    {
      "city": "Massapequa",
      "latitude": 40.6676,
      "longitude": -73.4706,
      "country_code": "US"
    },
    {
      "city": "Saint-Lambert",
      "latitude": 45.5,
      "longitude": -73.5167,
      "country_code": "CA"
    },
    {
      "city": "Woodhouse",
      "latitude": 53.358,
      "longitude": -1.373,
      "country_code": "GB"
    },
    {
      "city": "Aldo Bonzi",
      "latitude": -34.7083,
      "longitude": -58.5181,
      "country_code": "AR"
    },
    {
      "city": "Westbury",
      "latitude": 51.26,
      "longitude": -2.191,
      "country_code": "GB"
    },
    {
      "city": "Hadleigh",
      "latitude": 51.5535,
      "longitude": 0.6095,
      "country_code": "GB"
    },
    {
      "city": "Goroka",
      "latitude": -6.0833,
      "longitude": 145.3833,
      "country_code": "PG"
    },
    {
      "city": "Kew Green",
      "latitude": 51.5308,
      "longitude": -0.2248,
      "country_code": "GB"
    },
    {
      "city": "Roselle",
      "latitude": 40.6527,
      "longitude": -74.2599,
      "country_code": "US"
    },
    {
      "city": "Sunny Isles Beach",
      "latitude": 25.9385,
      "longitude": -80.1246,
      "country_code": "US"
    },
    {
      "city": "Kitagata",
      "latitude": 35.4369,
      "longitude": 136.6861,
      "country_code": "JP"
    },
    {
      "city": "Calne",
      "latitude": 51.438,
      "longitude": -2.005,
      "country_code": "GB"
    },
    {
      "city": "Jasmine Estates",
      "latitude": 28.293,
      "longitude": -82.6907,
      "country_code": "US"
    },
    {
      "city": "Carmelo",
      "latitude": -33.9999,
      "longitude": -58.2847,
      "country_code": "UY"
    },
    {
      "city": "Acatlán de Osorio",
      "latitude": 18.2086,
      "longitude": -98.0575,
      "country_code": "MX"
    },
    {
      "city": "Nantwich",
      "latitude": 53.067,
      "longitude": -2.522,
      "country_code": "GB"
    },
    {
      "city": "Nong Bua Lamphu",
      "latitude": 17.2042,
      "longitude": 102.4444,
      "country_code": "TH"
    },
    {
      "city": "Ashtarak",
      "latitude": 40.3,
      "longitude": 44.4,
      "country_code": "AM"
    },
    {
      "city": "Abbots Langley",
      "latitude": 51.701,
      "longitude": -0.416,
      "country_code": "GB"
    },
    {
      "city": "Obiliq",
      "latitude": 42.69,
      "longitude": 21.0778,
      "country_code": "XK"
    },
    {
      "city": "North Lynnwood",
      "latitude": 47.8533,
      "longitude": -122.2762,
      "country_code": "US"
    },
    {
      "city": "Hamtramck",
      "latitude": 42.3954,
      "longitude": -83.056,
      "country_code": "US"
    },
    {
      "city": "Hampton",
      "latitude": 51.422,
      "longitude": -0.367,
      "country_code": "GB"
    },
    {
      "city": "Hacıqabul",
      "latitude": 40.0375,
      "longitude": 48.935,
      "country_code": "AZ"
    },
    {
      "city": "Ayutla de los Libres",
      "latitude": 16.9,
      "longitude": -99.2167,
      "country_code": "MX"
    },
    {
      "city": "Schlieren",
      "latitude": 47.3989,
      "longitude": 8.4497,
      "country_code": "CH"
    },
    {
      "city": "Johnstone",
      "latitude": 55.8346,
      "longitude": -4.5027,
      "country_code": "GB"
    },
    {
      "city": "Bozoum",
      "latitude": 6.3172,
      "longitude": 16.3783,
      "country_code": "CF"
    },
    {
      "city": "Dover",
      "latitude": 40.002,
      "longitude": -76.8699,
      "country_code": "US"
    },
    {
      "city": "Kapolei",
      "latitude": 21.3403,
      "longitude": -158.0665,
      "country_code": "US"
    },
    {
      "city": "Mchinji",
      "latitude": -13.8167,
      "longitude": 32.9,
      "country_code": "MW"
    },
    {
      "city": "Pully",
      "latitude": 46.5167,
      "longitude": 6.6667,
      "country_code": "CH"
    },
    {
      "city": "Patcham",
      "latitude": 50.864,
      "longitude": -0.15,
      "country_code": "GB"
    },
    {
      "city": "Dawlish",
      "latitude": 50.581,
      "longitude": -3.466,
      "country_code": "GB"
    },
    {
      "city": "Virovitica",
      "latitude": 45.8333,
      "longitude": 17.3833,
      "country_code": "HR"
    },
    {
      "city": "Mickleover",
      "latitude": 52.901,
      "longitude": -1.552,
      "country_code": "GB"
    },
    {
      "city": "Redhill",
      "latitude": 51.2393,
      "longitude": -0.1726,
      "country_code": "GB"
    },
    {
      "city": "Maralal",
      "latitude": 1.1,
      "longitude": 36.7,
      "country_code": "KE"
    },
    {
      "city": "Mountlake Terrace",
      "latitude": 47.7921,
      "longitude": -122.3076,
      "country_code": "US"
    },
    {
      "city": "Lennox",
      "latitude": 33.938,
      "longitude": -118.3586,
      "country_code": "US"
    },
    {
      "city": "Hebburn",
      "latitude": 54.9718,
      "longitude": -1.5128,
      "country_code": "GB"
    },
    {
      "city": "North Plainfield",
      "latitude": 40.6209,
      "longitude": -74.4386,
      "country_code": "US"
    },
    {
      "city": "Lealman",
      "latitude": 27.8197,
      "longitude": -82.6847,
      "country_code": "US"
    },
    {
      "city": "Ukmergė",
      "latitude": 55.2667,
      "longitude": 24.75,
      "country_code": "LT"
    },
    {
      "city": "Santa Lucía",
      "latitude": -34.4525,
      "longitude": -56.3964,
      "country_code": "UY"
    },
    {
      "city": "Obock",
      "latitude": 11.9667,
      "longitude": 43.2833,
      "country_code": "DJ"
    },
    {
      "city": "Orhei",
      "latitude": 47.3831,
      "longitude": 28.8231,
      "country_code": "MD"
    },
    {
      "city": "Rutana",
      "latitude": -3.931,
      "longitude": 29.993,
      "country_code": "BI"
    },
    {
      "city": "Adliswil",
      "latitude": 47.3122,
      "longitude": 8.5256,
      "country_code": "CH"
    },
    {
      "city": "La Esperanza",
      "latitude": 14.3,
      "longitude": -88.1833,
      "country_code": "HN"
    },
    {
      "city": "Luena",
      "latitude": -11.79,
      "longitude": 19.9,
      "country_code": "AO"
    },
    {
      "city": "Tadaoka-higashi",
      "latitude": 34.4869,
      "longitude": 135.4011,
      "country_code": "JP"
    },
    {
      "city": "North Bay Shore",
      "latitude": 40.7601,
      "longitude": -73.2618,
      "country_code": "US"
    },
    {
      "city": "Thalwil",
      "latitude": 47.2953,
      "longitude": 8.5647,
      "country_code": "CH"
    },
    {
      "city": "Horsforth",
      "latitude": 53.8341,
      "longitude": -1.6429,
      "country_code": "GB"
    },
    {
      "city": "Sweetwater",
      "latitude": 25.7786,
      "longitude": -80.376,
      "country_code": "US"
    },
    {
      "city": "Telavi",
      "latitude": 41.9167,
      "longitude": 45.4833,
      "country_code": "GE"
    },
    {
      "city": "Ceres",
      "latitude": -15.3033,
      "longitude": -49.6052,
      "country_code": "BR"
    },
    {
      "city": "Hednesford",
      "latitude": 52.7115,
      "longitude": -2.0006,
      "country_code": "GB"
    },
    {
      "city": "Makakilo",
      "latitude": 21.3591,
      "longitude": -158.0813,
      "country_code": "US"
    },
    {
      "city": "Wolfratshausen",
      "latitude": 47.9133,
      "longitude": 11.4278,
      "country_code": "DE"
    },
    {
      "city": "Impfondo",
      "latitude": 1.6333,
      "longitude": 18.0667,
      "country_code": "CG"
    },
    {
      "city": "Quba",
      "latitude": 41.3653,
      "longitude": 48.5264,
      "country_code": "AZ"
    },
    {
      "city": "Birstall",
      "latitude": 53.7343,
      "longitude": -1.6609,
      "country_code": "GB"
    },
    {
      "city": "Moston",
      "latitude": 53.5156,
      "longitude": -2.1848,
      "country_code": "GB"
    },
    {
      "city": "Staines-upon-Thames",
      "latitude": 51.433,
      "longitude": -0.517,
      "country_code": "GB"
    },
    {
      "city": "Dolores",
      "latitude": -33.5333,
      "longitude": -58.2167,
      "country_code": "UY"
    },
    {
      "city": "Técpan de Galeana",
      "latitude": 17.25,
      "longitude": -100.6833,
      "country_code": "MX"
    },
    {
      "city": "Chemax",
      "latitude": 20.655,
      "longitude": -87.9372,
      "country_code": "MX"
    },
    {
      "city": "El Rosario",
      "latitude": 22.9922,
      "longitude": -105.8572,
      "country_code": "MX"
    },
    {
      "city": "Miahuatlán de Porfirio Díaz",
      "latitude": 16.33,
      "longitude": -96.6,
      "country_code": "MX"
    },
    {
      "city": "McNair",
      "latitude": 38.9513,
      "longitude": -77.4116,
      "country_code": "US"
    },
    {
      "city": "Wibsey",
      "latitude": 53.7672,
      "longitude": -1.7728,
      "country_code": "GB"
    },
    {
      "city": "Palisades Park",
      "latitude": 40.8472,
      "longitude": -73.9967,
      "country_code": "US"
    },
    {
      "city": "İsmayıllı",
      "latitude": 40.7839,
      "longitude": 48.1439,
      "country_code": "AZ"
    },
    {
      "city": "Ati",
      "latitude": 13.2139,
      "longitude": 18.3403,
      "country_code": "TD"
    },
    {
      "city": "El Dorado",
      "latitude": 24.3228,
      "longitude": -107.363,
      "country_code": "MX"
    },
    {
      "city": "Nan",
      "latitude": 18.7833,
      "longitude": 100.7833,
      "country_code": "TH"
    },
    {
      "city": "Cowley",
      "latitude": 51.733,
      "longitude": -1.215,
      "country_code": "GB"
    },
    {
      "city": "Palau",
      "latitude": 27.9167,
      "longitude": -101.4167,
      "country_code": "MX"
    },
    {
      "city": "Porthcawl",
      "latitude": 51.48,
      "longitude": -3.69,
      "country_code": "GB"
    },
    {
      "city": "New Brighton",
      "latitude": 53.432,
      "longitude": -3.049,
      "country_code": "GB"
    },
    {
      "city": "Bingley",
      "latitude": 53.8509,
      "longitude": -1.838,
      "country_code": "GB"
    },
    {
      "city": "South San Jose Hills",
      "latitude": 34.0123,
      "longitude": -117.9041,
      "country_code": "US"
    },
    {
      "city": "Yasothon",
      "latitude": 15.7883,
      "longitude": 104.1506,
      "country_code": "TH"
    },
    {
      "city": "South El Monte",
      "latitude": 34.0493,
      "longitude": -118.0484,
      "country_code": "US"
    },
    {
      "city": "Belgrave",
      "latitude": 52.6566,
      "longitude": -1.1262,
      "country_code": "GB"
    },
    {
      "city": "Baguley",
      "latitude": 53.399,
      "longitude": -2.276,
      "country_code": "GB"
    },
    {
      "city": "Warminster",
      "latitude": 51.205,
      "longitude": -2.181,
      "country_code": "GB"
    },
    {
      "city": "Ostermundigen",
      "latitude": 46.9553,
      "longitude": 7.4833,
      "country_code": "CH"
    },
    {
      "city": "West Derby",
      "latitude": 53.4338,
      "longitude": -2.907,
      "country_code": "GB"
    },
    {
      "city": "Haslingden",
      "latitude": 53.705,
      "longitude": -2.328,
      "country_code": "GB"
    },
    {
      "city": "Bubanza",
      "latitude": -3.0833,
      "longitude": 29.4,
      "country_code": "BI"
    },
    {
      "city": "Columbia Heights",
      "latitude": 45.0484,
      "longitude": -93.2472,
      "country_code": "US"
    },
    {
      "city": "Sunbury",
      "latitude": 51.423,
      "longitude": -0.424,
      "country_code": "GB"
    },
    {
      "city": "Stoke Gifford",
      "latitude": 51.517,
      "longitude": -2.548,
      "country_code": "GB"
    },
    {
      "city": "Nailsea",
      "latitude": 51.43,
      "longitude": -2.76,
      "country_code": "GB"
    },
    {
      "city": "Cleckheaton",
      "latitude": 53.725,
      "longitude": -1.719,
      "country_code": "GB"
    },
    {
      "city": "Somoto",
      "latitude": 13.4833,
      "longitude": -86.5833,
      "country_code": "NI"
    },
    {
      "city": "Senta",
      "latitude": 45.9231,
      "longitude": 20.0731,
      "country_code": "RS"
    },
    {
      "city": "Shirley",
      "latitude": 51.3813,
      "longitude": -0.0543,
      "country_code": "GB"
    },
    {
      "city": "Leagrave",
      "latitude": 51.903,
      "longitude": -0.466,
      "country_code": "GB"
    },
    {
      "city": "Santiago Tuxtla",
      "latitude": 18.4704,
      "longitude": -95.3,
      "country_code": "MX"
    },
    {
      "city": "Lomita",
      "latitude": 33.7933,
      "longitude": -118.3175,
      "country_code": "US"
    },
    {
      "city": "Cosham",
      "latitude": 50.8424,
      "longitude": -1.066,
      "country_code": "GB"
    },
    {
      "city": "Bayshore Gardens",
      "latitude": 27.4345,
      "longitude": -82.5794,
      "country_code": "US"
    },
    {
      "city": "Enfield Lock",
      "latitude": 51.6686,
      "longitude": -0.026,
      "country_code": "GB"
    },
    {
      "city": "Acala",
      "latitude": 16.5533,
      "longitude": -92.8069,
      "country_code": "MX"
    },
    {
      "city": "Ağsu",
      "latitude": 40.5708,
      "longitude": 48.3928,
      "country_code": "AZ"
    },
    {
      "city": "Āsosa",
      "latitude": 10.0667,
      "longitude": 34.5167,
      "country_code": "ET"
    },
    {
      "city": "North Bellmore",
      "latitude": 40.6904,
      "longitude": -73.539,
      "country_code": "US"
    },
    {
      "city": "Ağstafa",
      "latitude": 41.1167,
      "longitude": 45.45,
      "country_code": "AZ"
    },
    {
      "city": "Harwich",
      "latitude": 51.934,
      "longitude": 1.266,
      "country_code": "GB"
    },
    {
      "city": "Saffron Walden",
      "latitude": 52.022,
      "longitude": 0.243,
      "country_code": "GB"
    },
    {
      "city": "Basford",
      "latitude": 52.978,
      "longitude": -1.169,
      "country_code": "GB"
    },
    {
      "city": "Comrat",
      "latitude": 46.3003,
      "longitude": 28.6572,
      "country_code": "MD"
    },
    {
      "city": "Guastatoya",
      "latitude": 14.8539,
      "longitude": -90.0686,
      "country_code": "GT"
    },
    {
      "city": "Kirkland",
      "latitude": 45.45,
      "longitude": -73.8667,
      "country_code": "CA"
    },
    {
      "city": "Qormi",
      "latitude": 35.8794,
      "longitude": 14.4722,
      "country_code": "MT"
    },
    {
      "city": "West Hempstead",
      "latitude": 40.6959,
      "longitude": -73.6507,
      "country_code": "US"
    },
    {
      "city": "Arvayheer",
      "latitude": 46.2639,
      "longitude": 102.775,
      "country_code": "MN"
    },
    {
      "city": "Tyldesley",
      "latitude": 53.5166,
      "longitude": -2.4667,
      "country_code": "GB"
    },
    {
      "city": "Sligo",
      "latitude": 54.2667,
      "longitude": -8.4833,
      "country_code": "IE"
    },
    {
      "city": "Harrison",
      "latitude": 40.7431,
      "longitude": -74.1531,
      "country_code": "US"
    },
    {
      "city": "Hilsea",
      "latitude": 50.83,
      "longitude": -1.07,
      "country_code": "GB"
    },
    {
      "city": "West Chester",
      "latitude": 39.9601,
      "longitude": -75.6058,
      "country_code": "US"
    },
    {
      "city": "Hakha",
      "latitude": 22.65,
      "longitude": 93.6167,
      "country_code": "MM"
    },
    {
      "city": "Mubende",
      "latitude": 0.5904,
      "longitude": 31.37,
      "country_code": "UG"
    },
    {
      "city": "Ulcinj",
      "latitude": 41.9236,
      "longitude": 19.2056,
      "country_code": "ME"
    },
    {
      "city": "Tidjikja",
      "latitude": 18.55,
      "longitude": -11.4166,
      "country_code": "MR"
    },
    {
      "city": "Elmwood Park",
      "latitude": 40.905,
      "longitude": -74.1201,
      "country_code": "US"
    },
    {
      "city": "Stone",
      "latitude": 52.9,
      "longitude": -2.15,
      "country_code": "GB"
    },
    {
      "city": "Morges",
      "latitude": 46.5094,
      "longitude": 6.4986,
      "country_code": "CH"
    },
    {
      "city": "The Mumbles",
      "latitude": 51.573,
      "longitude": -3.9992,
      "country_code": "GB"
    },
    {
      "city": "Westmount",
      "latitude": 45.4833,
      "longitude": -73.6,
      "country_code": "CA"
    },
    {
      "city": "Fazakerley",
      "latitude": 53.4676,
      "longitude": -2.9408,
      "country_code": "GB"
    },
    {
      "city": "Maldon",
      "latitude": 51.7318,
      "longitude": 0.6758,
      "country_code": "GB"
    },
    {
      "city": "Kebili",
      "latitude": 33.69,
      "longitude": 8.971,
      "country_code": "TN"
    },
    {
      "city": "Wombwell",
      "latitude": 53.516,
      "longitude": -1.4,
      "country_code": "GB"
    },
    {
      "city": "Eldama Ravine",
      "latitude": 0.0504,
      "longitude": 35.72,
      "country_code": "KE"
    },
    {
      "city": "Tilbury",
      "latitude": 51.4606,
      "longitude": 0.3582,
      "country_code": "GB"
    },
    {
      "city": "Ciudad de Huitzuco",
      "latitude": 18.3,
      "longitude": -99.35,
      "country_code": "MX"
    },
    {
      "city": "La Cruz",
      "latitude": 23.9214,
      "longitude": -106.8919,
      "country_code": "MX"
    },
    {
      "city": "Tlaxcala",
      "latitude": 19.3191,
      "longitude": -98.1998,
      "country_code": "MX"
    },
    {
      "city": "Larkhall",
      "latitude": 55.737,
      "longitude": -3.972,
      "country_code": "GB"
    },
    {
      "city": "Tecuala",
      "latitude": 22.4004,
      "longitude": -105.46,
      "country_code": "MX"
    },
    {
      "city": "Schofield Barracks",
      "latitude": 21.4936,
      "longitude": -158.0617,
      "country_code": "US"
    },
    {
      "city": "Norwood",
      "latitude": 39.1605,
      "longitude": -84.4535,
      "country_code": "US"
    },
    {
      "city": "Ciudad Guadalupe Victoria",
      "latitude": 24.4497,
      "longitude": -104.1225,
      "country_code": "MX"
    },
    {
      "city": "Kavieng",
      "latitude": -2.5667,
      "longitude": 150.8,
      "country_code": "PG"
    },
    {
      "city": "Franconia",
      "latitude": 38.7682,
      "longitude": -77.1587,
      "country_code": "US"
    },
    {
      "city": "Clayton",
      "latitude": 53.782,
      "longitude": -1.8135,
      "country_code": "GB"
    },
    {
      "city": "Albany",
      "latitude": 37.8898,
      "longitude": -122.3018,
      "country_code": "US"
    },
    {
      "city": "Faranah",
      "latitude": 10.0404,
      "longitude": -10.75,
      "country_code": "GN"
    },
    {
      "city": "Phra Pradaeng",
      "latitude": 13.659,
      "longitude": 100.5329,
      "country_code": "TH"
    },
    {
      "city": "Milton",
      "latitude": 53.05,
      "longitude": -2.142,
      "country_code": "GB"
    },
    {
      "city": "Santa Catarina Juquila",
      "latitude": 16.2364,
      "longitude": -97.2919,
      "country_code": "MX"
    },
    {
      "city": "Kidbrooke",
      "latitude": 51.465,
      "longitude": 0.033,
      "country_code": "GB"
    },
    {
      "city": "Shipley",
      "latitude": 53.833,
      "longitude": -1.777,
      "country_code": "GB"
    },
    {
      "city": "Lezhë",
      "latitude": 41.7805,
      "longitude": 19.6434,
      "country_code": "AL"
    },
    {
      "city": "Santiago Tulantepec",
      "latitude": 20.0397,
      "longitude": -98.3575,
      "country_code": "MX"
    },
    {
      "city": "Central Falls",
      "latitude": 41.89,
      "longitude": -71.3934,
      "country_code": "US"
    },
    {
      "city": "Whickham",
      "latitude": 54.9456,
      "longitude": -1.6726,
      "country_code": "GB"
    },
    {
      "city": "Rodolfo Sánchez Taboada",
      "latitude": 31.7958,
      "longitude": -116.5911,
      "country_code": "MX"
    },
    {
      "city": "Deysbrook",
      "latitude": 53.429,
      "longitude": -2.934,
      "country_code": "GB"
    },
    {
      "city": "Mont-Royal",
      "latitude": 45.5161,
      "longitude": -73.6431,
      "country_code": "CA"
    },
    {
      "city": "La Crescenta-Montrose",
      "latitude": 34.2322,
      "longitude": -118.2353,
      "country_code": "US"
    },
    {
      "city": "Ciudad Hidalgo",
      "latitude": 14.6792,
      "longitude": -92.1497,
      "country_code": "MX"
    },
    {
      "city": "Cárdenas",
      "latitude": 22.0103,
      "longitude": -99.6522,
      "country_code": "MX"
    },
    {
      "city": "Barton upon Irwell",
      "latitude": 53.476,
      "longitude": -2.36,
      "country_code": "GB"
    },
    {
      "city": "Solothurn",
      "latitude": 47.2081,
      "longitude": 7.5375,
      "country_code": "CH"
    },
    {
      "city": "Lynbrook",
      "latitude": 40.6579,
      "longitude": -73.6742,
      "country_code": "US"
    },
    {
      "city": "Laï",
      "latitude": 9.4,
      "longitude": 16.3,
      "country_code": "TD"
    },
    {
      "city": "Bonnyrigg",
      "latitude": 55.8747,
      "longitude": -3.1031,
      "country_code": "GB"
    },
    {
      "city": "Budva",
      "latitude": 42.2847,
      "longitude": 18.8453,
      "country_code": "ME"
    },
    {
      "city": "Sơn La",
      "latitude": 21.327,
      "longitude": 103.9141,
      "country_code": "VN"
    },
    {
      "city": "Tchibanga",
      "latitude": -2.9331,
      "longitude": 10.9831,
      "country_code": "GA"
    },
    {
      "city": "Macas",
      "latitude": -2.3,
      "longitude": -78.1167,
      "country_code": "EC"
    },
    {
      "city": "Partick",
      "latitude": 55.8699,
      "longitude": -4.3125,
      "country_code": "GB"
    },
    {
      "city": "Netherton",
      "latitude": 52.4908,
      "longitude": -2.0835,
      "country_code": "GB"
    },
    {
      "city": "Hermosa Beach",
      "latitude": 33.8654,
      "longitude": -118.3966,
      "country_code": "US"
    },
    {
      "city": "Tillabéri",
      "latitude": 14.212,
      "longitude": 1.4531,
      "country_code": "NE"
    },
    {
      "city": "Seacroft",
      "latitude": 53.8222,
      "longitude": -1.4599,
      "country_code": "GB"
    },
    {
      "city": "Kawachichō",
      "latitude": 34.5783,
      "longitude": 135.7367,
      "country_code": "JP"
    },
    {
      "city": "Tepoztlán",
      "latitude": 18.9853,
      "longitude": -99.0997,
      "country_code": "MX"
    },
    {
      "city": "Attapu",
      "latitude": 14.8,
      "longitude": 106.8333,
      "country_code": "LA"
    },
    {
      "city": "Langley Park",
      "latitude": 38.9897,
      "longitude": -76.9808,
      "country_code": "US"
    },
    {
      "city": "Morristown",
      "latitude": 40.7966,
      "longitude": -74.4772,
      "country_code": "US"
    },
    {
      "city": "Baildon",
      "latitude": 53.851,
      "longitude": -1.763,
      "country_code": "GB"
    },
    {
      "city": "Sherrelwood",
      "latitude": 39.839,
      "longitude": -105.0014,
      "country_code": "US"
    },
    {
      "city": "Mineola",
      "latitude": 40.7469,
      "longitude": -73.6392,
      "country_code": "US"
    },
    {
      "city": "North Valley Stream",
      "latitude": 40.684,
      "longitude": -73.7077,
      "country_code": "US"
    },
    {
      "city": "Harrow Weald",
      "latitude": 51.604,
      "longitude": -0.339,
      "country_code": "GB"
    },
    {
      "city": "Evergreen Park",
      "latitude": 41.7213,
      "longitude": -87.7013,
      "country_code": "US"
    },
    {
      "city": "Addlestone",
      "latitude": 51.3695,
      "longitude": -0.4901,
      "country_code": "GB"
    },
    {
      "city": "Pemberton",
      "latitude": 53.536,
      "longitude": -2.6738,
      "country_code": "GB"
    },
    {
      "city": "Baabda",
      "latitude": 33.8333,
      "longitude": 35.5333,
      "country_code": "LB"
    },
    {
      "city": "West Wickham",
      "latitude": 51.3765,
      "longitude": -0.0193,
      "country_code": "GB"
    },
    {
      "city": "Binningen",
      "latitude": 47.5333,
      "longitude": 7.5667,
      "country_code": "CH"
    },
    {
      "city": "Apaxco de Ocampo",
      "latitude": 19.9733,
      "longitude": -99.17,
      "country_code": "MX"
    },
    {
      "city": "Mao",
      "latitude": 14.1194,
      "longitude": 15.3133,
      "country_code": "TD"
    },
    {
      "city": "Saltash",
      "latitude": 50.408,
      "longitude": -4.212,
      "country_code": "GB"
    },
    {
      "city": "Dzuunmod",
      "latitude": 47.7069,
      "longitude": 106.9494,
      "country_code": "MN"
    },
    {
      "city": "Wellington",
      "latitude": 50.9755,
      "longitude": -3.2243,
      "country_code": "GB"
    },
    {
      "city": "Bellaire",
      "latitude": 29.704,
      "longitude": -95.4622,
      "country_code": "US"
    },
    {
      "city": "Härnösand",
      "latitude": 62.6323,
      "longitude": 17.9379,
      "country_code": "SE"
    },
    {
      "city": "Keetmanshoop",
      "latitude": -26.5833,
      "longitude": 18.1333,
      "country_code": "NA"
    },
    {
      "city": "Paraguarí",
      "latitude": -25.62,
      "longitude": -57.16,
      "country_code": "PY"
    },
    {
      "city": "Hazel Grove",
      "latitude": 53.375,
      "longitude": -2.111,
      "country_code": "GB"
    },
    {
      "city": "Northenden",
      "latitude": 53.4075,
      "longitude": -2.2583,
      "country_code": "GB"
    },
    {
      "city": "Hinche",
      "latitude": 19.143,
      "longitude": -72.004,
      "country_code": "HT"
    },
    {
      "city": "Hūn",
      "latitude": 29.1167,
      "longitude": 15.9333,
      "country_code": "LY"
    },
    {
      "city": "Kimbe",
      "latitude": -5.55,
      "longitude": 150.143,
      "country_code": "PG"
    },
    {
      "city": "Đông Hà",
      "latitude": 16.8056,
      "longitude": 107.0906,
      "country_code": "VN"
    },
    {
      "city": "Puréparo de Echaíz",
      "latitude": 19.9,
      "longitude": -102,
      "country_code": "MX"
    },
    {
      "city": "Visaginas",
      "latitude": 55.6,
      "longitude": 26.4333,
      "country_code": "LT"
    },
    {
      "city": "Avenel",
      "latitude": 40.5839,
      "longitude": -74.272,
      "country_code": "US"
    },
    {
      "city": "North Amityville",
      "latitude": 40.7005,
      "longitude": -73.4118,
      "country_code": "US"
    },
    {
      "city": "Mansa Konko",
      "latitude": 13.3773,
      "longitude": -15.6786,
      "country_code": "GM"
    },
    {
      "city": "Prestwick",
      "latitude": 55.4956,
      "longitude": -4.6142,
      "country_code": "GB"
    },
    {
      "city": "Point Pleasant",
      "latitude": 40.0772,
      "longitude": -74.0702,
      "country_code": "US"
    },
    {
      "city": "Pakwach",
      "latitude": 2.45,
      "longitude": 31.5,
      "country_code": "UG"
    },
    {
      "city": "Hawthorne",
      "latitude": 40.9579,
      "longitude": -74.1581,
      "country_code": "US"
    },
    {
      "city": "La Crucecita",
      "latitude": 15.7753,
      "longitude": -96.1425,
      "country_code": "MX"
    },
    {
      "city": "Rwamagana",
      "latitude": -1.9525,
      "longitude": 30.4378,
      "country_code": "RW"
    },
    {
      "city": "Buckley",
      "latitude": 53.172,
      "longitude": -3.086,
      "country_code": "GB"
    },
    {
      "city": "Rock Ferry",
      "latitude": 53.373,
      "longitude": -3.008,
      "country_code": "GB"
    },
    {
      "city": "Banstead",
      "latitude": 51.322,
      "longitude": -0.204,
      "country_code": "GB"
    },
    {
      "city": "Siyəzən",
      "latitude": 41.0783,
      "longitude": 49.1061,
      "country_code": "AZ"
    },
    {
      "city": "Hythe",
      "latitude": 51.0716,
      "longitude": 1.084,
      "country_code": "GB"
    },
    {
      "city": "Bellwood",
      "latitude": 41.8829,
      "longitude": -87.8762,
      "country_code": "US"
    },
    {
      "city": "Vicente Guerrero",
      "latitude": 23.75,
      "longitude": -103.9833,
      "country_code": "MX"
    },
    {
      "city": "Leposaviq",
      "latitude": 43.1,
      "longitude": 20.8,
      "country_code": "XK"
    },
    {
      "city": "Goulmima",
      "latitude": 31.6944,
      "longitude": -4.9592,
      "country_code": "MA"
    },
    {
      "city": "Sabirabad",
      "latitude": 40.0053,
      "longitude": 48.4719,
      "country_code": "AZ"
    },
    {
      "city": "Clitheroe",
      "latitude": 53.8711,
      "longitude": -2.3916,
      "country_code": "GB"
    },
    {
      "city": "Bromborough",
      "latitude": 53.336,
      "longitude": -2.978,
      "country_code": "GB"
    },
    {
      "city": "North Massapequa",
      "latitude": 40.7031,
      "longitude": -73.4678,
      "country_code": "US"
    },
    {
      "city": "Molde",
      "latitude": 62.7483,
      "longitude": 7.1833,
      "country_code": "NO"
    },
    {
      "city": "Viljandi",
      "latitude": 58.3633,
      "longitude": 25.5956,
      "country_code": "EE"
    },
    {
      "city": "Hendaye",
      "latitude": 43.3586,
      "longitude": -1.7744,
      "country_code": "FR"
    },
    {
      "city": "Tsetserleg",
      "latitude": 47.4769,
      "longitude": 101.4503,
      "country_code": "MN"
    },
    {
      "city": "Winthrop",
      "latitude": 42.3751,
      "longitude": -70.9847,
      "country_code": "US"
    },
    {
      "city": "Cerritos",
      "latitude": 22.4275,
      "longitude": -100.2783,
      "country_code": "MX"
    },
    {
      "city": "Straşeni",
      "latitude": 47.1414,
      "longitude": 28.6103,
      "country_code": "MD"
    },
    {
      "city": "Beausoleil",
      "latitude": 43.7419,
      "longitude": 7.4236,
      "country_code": "FR"
    },
    {
      "city": "Pedreiras",
      "latitude": -4.5696,
      "longitude": -44.67,
      "country_code": "BR"
    },
    {
      "city": "Idylwood",
      "latitude": 38.8896,
      "longitude": -77.2055,
      "country_code": "US"
    },
    {
      "city": "Izamal",
      "latitude": 20.9314,
      "longitude": -89.0178,
      "country_code": "MX"
    },
    {
      "city": "Melksham",
      "latitude": 51.371,
      "longitude": -2.138,
      "country_code": "GB"
    },
    {
      "city": "Yiewsley",
      "latitude": 51.513,
      "longitude": -0.471,
      "country_code": "GB"
    },
    {
      "city": "Coquimatlán",
      "latitude": 19.2038,
      "longitude": -103.8086,
      "country_code": "MX"
    },
    {
      "city": "Bidston",
      "latitude": 53.402,
      "longitude": -3.078,
      "country_code": "GB"
    },
    {
      "city": "Bryn Mawr-Skyway",
      "latitude": 47.4949,
      "longitude": -122.2411,
      "country_code": "US"
    },
    {
      "city": "Seabrook",
      "latitude": 38.9802,
      "longitude": -76.8502,
      "country_code": "US"
    },
    {
      "city": "Yamazaki",
      "latitude": 34.9028,
      "longitude": 135.6886,
      "country_code": "JP"
    },
    {
      "city": "East Massapequa",
      "latitude": 40.6743,
      "longitude": -73.4358,
      "country_code": "US"
    },
    {
      "city": "Forfar",
      "latitude": 56.6442,
      "longitude": -2.8884,
      "country_code": "GB"
    },
    {
      "city": "Wallisellen",
      "latitude": 47.4122,
      "longitude": 8.5922,
      "country_code": "CH"
    },
    {
      "city": "São Gabriel da Cachoeira",
      "latitude": -0.1332,
      "longitude": -67.0833,
      "country_code": "BR"
    },
    {
      "city": "Brookfield",
      "latitude": 41.8245,
      "longitude": -87.847,
      "country_code": "US"
    },
    {
      "city": "Rutherford",
      "latitude": 40.8203,
      "longitude": -74.1057,
      "country_code": "US"
    },
    {
      "city": "Bebington",
      "latitude": 53.35,
      "longitude": -3.003,
      "country_code": "GB"
    },
    {
      "city": "Madera",
      "latitude": 29.19,
      "longitude": -108.1414,
      "country_code": "MX"
    },
    {
      "city": "Iselin",
      "latitude": 40.5702,
      "longitude": -74.317,
      "country_code": "US"
    },
    {
      "city": "Tindouf",
      "latitude": 27.6742,
      "longitude": -8.1478,
      "country_code": "DZ"
    },
    {
      "city": "Kédougou",
      "latitude": 12.5556,
      "longitude": -12.1807,
      "country_code": "SN"
    },
    {
      "city": "Burke Centre",
      "latitude": 38.7903,
      "longitude": -77.2999,
      "country_code": "US"
    },
    {
      "city": "Hyattsville",
      "latitude": 38.9612,
      "longitude": -76.9548,
      "country_code": "US"
    },
    {
      "city": "Pendlebury",
      "latitude": 53.5075,
      "longitude": -2.3154,
      "country_code": "GB"
    },
    {
      "city": "Dedza",
      "latitude": -14.3667,
      "longitude": 34.3333,
      "country_code": "MW"
    },
    {
      "city": "Gornalwood",
      "latitude": 52.523,
      "longitude": -2.124,
      "country_code": "GB"
    },
    {
      "city": "Llantrisant",
      "latitude": 51.5423,
      "longitude": -3.3785,
      "country_code": "GB"
    },
    {
      "city": "Sing Buri",
      "latitude": 14.8911,
      "longitude": 100.4031,
      "country_code": "TH"
    },
    {
      "city": "Hessle",
      "latitude": 53.7239,
      "longitude": -0.4319,
      "country_code": "GB"
    },
    {
      "city": "Royston",
      "latitude": 52.0471,
      "longitude": -0.0202,
      "country_code": "GB"
    },
    {
      "city": "Prachin Buri",
      "latitude": 14.0567,
      "longitude": 101.3739,
      "country_code": "TH"
    },
    {
      "city": "Amblecote",
      "latitude": 52.46,
      "longitude": -2.16,
      "country_code": "GB"
    },
    {
      "city": "Saint Budeaux",
      "latitude": 50.4033,
      "longitude": -4.1856,
      "country_code": "GB"
    },
    {
      "city": "Plungė",
      "latitude": 55.9167,
      "longitude": 21.85,
      "country_code": "LT"
    },
    {
      "city": "Sainte-Marthe-sur-le-Lac",
      "latitude": 45.53,
      "longitude": -73.93,
      "country_code": "CA"
    },
    {
      "city": "Tunapuna",
      "latitude": 10.6333,
      "longitude": -61.3833,
      "country_code": "TT"
    },
    {
      "city": "Prilly",
      "latitude": 46.5333,
      "longitude": 6.6,
      "country_code": "CH"
    },
    {
      "city": "Selby",
      "latitude": 53.7818,
      "longitude": -1.0703,
      "country_code": "GB"
    },
    {
      "city": "Orange Walk",
      "latitude": 18.075,
      "longitude": -88.5583,
      "country_code": "BZ"
    },
    {
      "city": "Torit",
      "latitude": 4.4167,
      "longitude": 32.5667,
      "country_code": "SS"
    },
    {
      "city": "Saatlı",
      "latitude": 39.9311,
      "longitude": 48.3697,
      "country_code": "AZ"
    },
    {
      "city": "Stapleford",
      "latitude": 52.929,
      "longitude": -1.274,
      "country_code": "GB"
    },
    {
      "city": "Akhaltsikhe",
      "latitude": 41.6389,
      "longitude": 42.9861,
      "country_code": "GE"
    },
    {
      "city": "Sa Kaeo",
      "latitude": 13.8206,
      "longitude": 102.0589,
      "country_code": "TH"
    },
    {
      "city": "Bourne",
      "latitude": 52.7684,
      "longitude": -0.3775,
      "country_code": "GB"
    },
    {
      "city": "Cedar Mill",
      "latitude": 45.5355,
      "longitude": -122.8006,
      "country_code": "US"
    },
    {
      "city": "Piran",
      "latitude": 45.5271,
      "longitude": 13.5685,
      "country_code": "SI"
    },
    {
      "city": "Eppelheim",
      "latitude": 49.4011,
      "longitude": 8.6297,
      "country_code": "DE"
    },
    {
      "city": "Kretinga",
      "latitude": 55.8758,
      "longitude": 21.2508,
      "country_code": "LT"
    },
    {
      "city": "Thônex",
      "latitude": 46.2,
      "longitude": 6.2167,
      "country_code": "CH"
    },
    {
      "city": "West Drayton",
      "latitude": 51.5043,
      "longitude": -0.4646,
      "country_code": "GB"
    },
    {
      "city": "Perivale",
      "latitude": 51.5383,
      "longitude": -0.3192,
      "country_code": "GB"
    },
    {
      "city": "Khaşab",
      "latitude": 26.1833,
      "longitude": 56.25,
      "country_code": "OM"
    },
    {
      "city": "Guerrero Negro",
      "latitude": 27.9589,
      "longitude": -114.0561,
      "country_code": "MX"
    },
    {
      "city": "Merrifield",
      "latitude": 38.8731,
      "longitude": -77.2426,
      "country_code": "US"
    },
    {
      "city": "Kidlington",
      "latitude": 51.823,
      "longitude": -1.291,
      "country_code": "GB"
    },
    {
      "city": "Santa Rosalía",
      "latitude": 27.3389,
      "longitude": -112.2669,
      "country_code": "MX"
    },
    {
      "city": "Valparaíso",
      "latitude": 22.7667,
      "longitude": -103.5667,
      "country_code": "MX"
    },
    {
      "city": "Rosyth",
      "latitude": 56.0339,
      "longitude": -3.4323,
      "country_code": "GB"
    },
    {
      "city": "Ban Houayxay",
      "latitude": 20.2833,
      "longitude": 100.4167,
      "country_code": "LA"
    },
    {
      "city": "Kukës",
      "latitude": 42.0758,
      "longitude": 20.4231,
      "country_code": "AL"
    },
    {
      "city": "Dover",
      "latitude": 40.8859,
      "longitude": -74.5597,
      "country_code": "US"
    },
    {
      "city": "Takoma Park",
      "latitude": 38.981,
      "longitude": -77.0028,
      "country_code": "US"
    },
    {
      "city": "Puerto Ayora",
      "latitude": -0.7444,
      "longitude": -90.3139,
      "country_code": "EC"
    },
    {
      "city": "Brierley Hill",
      "latitude": 52.4795,
      "longitude": -2.1245,
      "country_code": "GB"
    },
    {
      "city": "Swinton",
      "latitude": 53.4877,
      "longitude": -1.3149,
      "country_code": "GB"
    },
    {
      "city": "Little Hulton",
      "latitude": 53.53,
      "longitude": -2.418,
      "country_code": "GB"
    },
    {
      "city": "Marlow",
      "latitude": 51.57,
      "longitude": -0.78,
      "country_code": "GB"
    },
    {
      "city": "Esquimalt",
      "latitude": 48.4306,
      "longitude": -123.4147,
      "country_code": "CA"
    },
    {
      "city": "Greenfield",
      "latitude": 36.3232,
      "longitude": -121.2451,
      "country_code": "US"
    },
    {
      "city": "Glassmanor",
      "latitude": 38.8181,
      "longitude": -76.9836,
      "country_code": "US"
    },
    {
      "city": "Tak",
      "latitude": 16.8711,
      "longitude": 99.125,
      "country_code": "TH"
    },
    {
      "city": "Sudley",
      "latitude": 38.7878,
      "longitude": -77.4961,
      "country_code": "US"
    },
    {
      "city": "Phayao",
      "latitude": 19.1653,
      "longitude": 99.9036,
      "country_code": "TH"
    },
    {
      "city": "Caerfyrddin",
      "latitude": 51.856,
      "longitude": -4.316,
      "country_code": "GB"
    },
    {
      "city": "Deux-Montagnes",
      "latitude": 45.5333,
      "longitude": -73.8833,
      "country_code": "CA"
    },
    {
      "city": "Mehtar Lām",
      "latitude": 34.65,
      "longitude": 70.1833,
      "country_code": "AF"
    },
    {
      "city": "Villa Unión",
      "latitude": 23.1883,
      "longitude": -106.2158,
      "country_code": "MX"
    },
    {
      "city": "Chitipa",
      "latitude": -9.7019,
      "longitude": 33.27,
      "country_code": "MW"
    },
    {
      "city": "Bostonia",
      "latitude": 32.8189,
      "longitude": -116.9479,
      "country_code": "US"
    },
    {
      "city": "Dumont",
      "latitude": 40.9452,
      "longitude": -73.9923,
      "country_code": "US"
    },
    {
      "city": "Gobabis",
      "latitude": -22.45,
      "longitude": 18.9667,
      "country_code": "NA"
    },
    {
      "city": "Manassas Park",
      "latitude": 38.7719,
      "longitude": -77.445,
      "country_code": "US"
    },
    {
      "city": "Rossington",
      "latitude": 53.4759,
      "longitude": -1.0613,
      "country_code": "GB"
    },
    {
      "city": "Woodmere",
      "latitude": 40.6374,
      "longitude": -73.7219,
      "country_code": "US"
    },
    {
      "city": "Ojus",
      "latitude": 25.9563,
      "longitude": -80.1606,
      "country_code": "US"
    },
    {
      "city": "Dutse",
      "latitude": 11.7992,
      "longitude": 9.3503,
      "country_code": "NG"
    },
    {
      "city": "Stanley",
      "latitude": 53.7145,
      "longitude": -1.476,
      "country_code": "GB"
    },
    {
      "city": "Lowton",
      "latitude": 53.471,
      "longitude": -2.569,
      "country_code": "GB"
    },
    {
      "city": "South Houston",
      "latitude": 29.6611,
      "longitude": -95.2285,
      "country_code": "US"
    },
    {
      "city": "Ringwood",
      "latitude": 50.85,
      "longitude": -1.78,
      "country_code": "GB"
    },
    {
      "city": "Sudbury",
      "latitude": 51.5537,
      "longitude": -0.3199,
      "country_code": "GB"
    },
    {
      "city": "Wahiawa",
      "latitude": 21.5005,
      "longitude": -158.0198,
      "country_code": "US"
    },
    {
      "city": "Ilkley",
      "latitude": 53.925,
      "longitude": -1.822,
      "country_code": "GB"
    },
    {
      "city": "Guachochi",
      "latitude": 26.8194,
      "longitude": -107.07,
      "country_code": "MX"
    },
    {
      "city": "Live Oak",
      "latitude": 36.986,
      "longitude": -121.9804,
      "country_code": "US"
    },
    {
      "city": "Kamuli",
      "latitude": 0.9472,
      "longitude": 33.1197,
      "country_code": "UG"
    },
    {
      "city": "Juan Aldama",
      "latitude": 24.291,
      "longitude": -103.394,
      "country_code": "MX"
    },
    {
      "city": "Ovenden",
      "latitude": 53.7432,
      "longitude": -1.8779,
      "country_code": "GB"
    },
    {
      "city": "Childwall",
      "latitude": 53.395,
      "longitude": -2.881,
      "country_code": "GB"
    },
    {
      "city": "Verwood",
      "latitude": 50.8815,
      "longitude": -1.8785,
      "country_code": "GB"
    },
    {
      "city": "Balancán",
      "latitude": 17.8,
      "longitude": -91.53,
      "country_code": "MX"
    },
    {
      "city": "Whitby",
      "latitude": 54.4858,
      "longitude": -0.6206,
      "country_code": "GB"
    },
    {
      "city": "Hetton le Hole",
      "latitude": 54.8208,
      "longitude": -1.4488,
      "country_code": "GB"
    },
    {
      "city": "Marsabit",
      "latitude": 2.3333,
      "longitude": 37.9833,
      "country_code": "KE"
    },
    {
      "city": "Egg Buckland",
      "latitude": 50.4006,
      "longitude": -4.1136,
      "country_code": "GB"
    },
    {
      "city": "Trstenik",
      "latitude": 43.6186,
      "longitude": 20.9972,
      "country_code": "RS"
    },
    {
      "city": "Hawick",
      "latitude": 55.422,
      "longitude": -2.787,
      "country_code": "GB"
    },
    {
      "city": "Wanstead",
      "latitude": 51.5778,
      "longitude": 0.0286,
      "country_code": "GB"
    },
    {
      "city": "Newport Pagnell",
      "latitude": 52.087,
      "longitude": -0.722,
      "country_code": "GB"
    },
    {
      "city": "Kingstowne",
      "latitude": 38.7625,
      "longitude": -77.1445,
      "country_code": "US"
    },
    {
      "city": "Brownsville",
      "latitude": 25.8216,
      "longitude": -80.2417,
      "country_code": "US"
    },
    {
      "city": "Tilehurst",
      "latitude": 51.4579,
      "longitude": -1.0406,
      "country_code": "GB"
    },
    {
      "city": "Massapequa Park",
      "latitude": 40.6817,
      "longitude": -73.4496,
      "country_code": "US"
    },
    {
      "city": "Country Walk",
      "latitude": 25.6331,
      "longitude": -80.4353,
      "country_code": "US"
    },
    {
      "city": "Ma’rib",
      "latitude": 15.4228,
      "longitude": 45.3375,
      "country_code": "YE"
    },
    {
      "city": "Tukums",
      "latitude": 56.9669,
      "longitude": 23.1531,
      "country_code": "LV"
    },
    {
      "city": "Lansdale",
      "latitude": 40.2417,
      "longitude": -75.2812,
      "country_code": "US"
    },
    {
      "city": "Makokou",
      "latitude": 0.5667,
      "longitude": 12.8667,
      "country_code": "GA"
    },
    {
      "city": "Shenley Church End",
      "latitude": 52.022,
      "longitude": -0.788,
      "country_code": "GB"
    },
    {
      "city": "Calkiní",
      "latitude": 20.3667,
      "longitude": -90.05,
      "country_code": "MX"
    },
    {
      "city": "Pinewood",
      "latitude": 25.8697,
      "longitude": -80.2174,
      "country_code": "US"
    },
    {
      "city": "Vincent",
      "latitude": 34.0982,
      "longitude": -117.9238,
      "country_code": "US"
    },
    {
      "city": "Zaghouan",
      "latitude": 36.4,
      "longitude": 10.147,
      "country_code": "TN"
    },
    {
      "city": "Chaddesden",
      "latitude": 52.9301,
      "longitude": -1.4383,
      "country_code": "GB"
    },
    {
      "city": "San Ignacio",
      "latitude": 17.1588,
      "longitude": -89.0696,
      "country_code": "BZ"
    },
    {
      "city": "East Cleveland",
      "latitude": 41.5318,
      "longitude": -81.5795,
      "country_code": "US"
    },
    {
      "city": "Arbon",
      "latitude": 47.5167,
      "longitude": 9.4333,
      "country_code": "CH"
    },
    {
      "city": "Smethwick",
      "latitude": 52.4928,
      "longitude": -1.9682,
      "country_code": "GB"
    },
    {
      "city": "Coseley",
      "latitude": 52.55,
      "longitude": -2.083,
      "country_code": "GB"
    },
    {
      "city": "Brackley",
      "latitude": 52.032,
      "longitude": -1.147,
      "country_code": "GB"
    },
    {
      "city": "Tempoal de Sánchez",
      "latitude": 21.5167,
      "longitude": -98.3833,
      "country_code": "MX"
    },
    {
      "city": "Salaspils",
      "latitude": 56.8614,
      "longitude": 24.35,
      "country_code": "LV"
    },
    {
      "city": "Armthorpe",
      "latitude": 53.5352,
      "longitude": -1.0522,
      "country_code": "GB"
    },
    {
      "city": "Astara",
      "latitude": 38.44,
      "longitude": 48.875,
      "country_code": "AZ"
    },
    {
      "city": "Phrae",
      "latitude": 18.1436,
      "longitude": 100.1417,
      "country_code": "TH"
    },
    {
      "city": "Milngavie",
      "latitude": 55.9421,
      "longitude": -4.3137,
      "country_code": "GB"
    },
    {
      "city": "Yauco",
      "latitude": 18.0344,
      "longitude": -66.8615,
      "country_code": "PR"
    },
    {
      "city": "Zveçan",
      "latitude": 42.9,
      "longitude": 20.8333,
      "country_code": "XK"
    },
    {
      "city": "Puerto Carreño",
      "latitude": 6.1889,
      "longitude": -67.4858,
      "country_code": "CO"
    },
    {
      "city": "Bodmin",
      "latitude": 50.466,
      "longitude": -4.718,
      "country_code": "GB"
    },
    {
      "city": "Ntungamo",
      "latitude": -0.8794,
      "longitude": 30.2642,
      "country_code": "UG"
    },
    {
      "city": "Clayton",
      "latitude": 38.6444,
      "longitude": -90.3302,
      "country_code": "US"
    },
    {
      "city": "L’Ancienne-Lorette",
      "latitude": 46.8,
      "longitude": -71.35,
      "country_code": "CA"
    },
    {
      "city": "Redruth",
      "latitude": 50.233,
      "longitude": -5.224,
      "country_code": "GB"
    },
    {
      "city": "Walsall Wood",
      "latitude": 52.6277,
      "longitude": -1.9301,
      "country_code": "GB"
    },
    {
      "city": "East Rancho Dominguez",
      "latitude": 33.895,
      "longitude": -118.1956,
      "country_code": "US"
    },
    {
      "city": "Cuilapa",
      "latitude": 14.279,
      "longitude": -90.298,
      "country_code": "GT"
    },
    {
      "city": "Hollinwood",
      "latitude": 53.5183,
      "longitude": -2.144,
      "country_code": "GB"
    },
    {
      "city": "Struga",
      "latitude": 41.1775,
      "longitude": 20.6789,
      "country_code": "MK"
    },
    {
      "city": "Streetly",
      "latitude": 52.577,
      "longitude": -1.884,
      "country_code": "GB"
    },
    {
      "city": "Fraserburgh",
      "latitude": 57.693,
      "longitude": -2.005,
      "country_code": "GB"
    },
    {
      "city": "Vicente Guerrero",
      "latitude": 30.7264,
      "longitude": -115.9903,
      "country_code": "MX"
    },
    {
      "city": "Pathum Thani",
      "latitude": 13.9841,
      "longitude": 100.5512,
      "country_code": "TH"
    },
    {
      "city": "Conisbrough",
      "latitude": 53.479,
      "longitude": -1.227,
      "country_code": "GB"
    },
    {
      "city": "Thorpe Saint Andrew",
      "latitude": 52.6354,
      "longitude": 1.3431,
      "country_code": "GB"
    },
    {
      "city": "Rakvere",
      "latitude": 59.3506,
      "longitude": 26.3611,
      "country_code": "EE"
    },
    {
      "city": "Artesia",
      "latitude": 33.8676,
      "longitude": -118.0806,
      "country_code": "US"
    },
    {
      "city": "Richmond",
      "latitude": -41.3333,
      "longitude": 173.1833,
      "country_code": "NZ"
    },
    {
      "city": "Blunsdon Saint Andrew",
      "latitude": 51.61,
      "longitude": -1.79,
      "country_code": "GB"
    },
    {
      "city": "Herceg Novi",
      "latitude": 42.4531,
      "longitude": 18.5375,
      "country_code": "ME"
    },
    {
      "city": "Evington",
      "latitude": 52.621,
      "longitude": -1.072,
      "country_code": "GB"
    },
    {
      "city": "Chojnów",
      "latitude": 51.2667,
      "longitude": 15.9333,
      "country_code": "PL"
    },
    {
      "city": "Broughty Ferry",
      "latitude": 56.4672,
      "longitude": -2.8699,
      "country_code": "GB"
    },
    {
      "city": "Kitui",
      "latitude": -1.3667,
      "longitude": 38.0167,
      "country_code": "KE"
    },
    {
      "city": "Milford Haven",
      "latitude": 51.7142,
      "longitude": -5.0427,
      "country_code": "GB"
    },
    {
      "city": "San Francisco",
      "latitude": 13.7,
      "longitude": -88.1,
      "country_code": "SV"
    },
    {
      "city": "South Orange Village",
      "latitude": 40.7491,
      "longitude": -74.2602,
      "country_code": "US"
    },
    {
      "city": "Bredbury",
      "latitude": 53.42,
      "longitude": -2.113,
      "country_code": "GB"
    },
    {
      "city": "New Milford",
      "latitude": 40.9337,
      "longitude": -74.0196,
      "country_code": "US"
    },
    {
      "city": "Hall in Tirol",
      "latitude": 47.2833,
      "longitude": 11.5,
      "country_code": "AT"
    },
    {
      "city": "Glenmont",
      "latitude": 39.0698,
      "longitude": -77.0467,
      "country_code": "US"
    },
    {
      "city": "Cherryland",
      "latitude": 37.6792,
      "longitude": -122.1038,
      "country_code": "US"
    },
    {
      "city": "Little Lever",
      "latitude": 53.563,
      "longitude": -2.369,
      "country_code": "GB"
    },
    {
      "city": "Moussoro",
      "latitude": 13.6333,
      "longitude": 16.4833,
      "country_code": "TD"
    },
    {
      "city": "Hazel Park",
      "latitude": 42.4619,
      "longitude": -83.0977,
      "country_code": "US"
    },
    {
      "city": "Ranong",
      "latitude": 9.9619,
      "longitude": 98.6389,
      "country_code": "TH"
    },
    {
      "city": "Hybla Valley",
      "latitude": 38.7485,
      "longitude": -77.0822,
      "country_code": "US"
    },
    {
      "city": "Nakhon Nayok",
      "latitude": 14.2031,
      "longitude": 101.215,
      "country_code": "TH"
    },
    {
      "city": "Thatto Heath",
      "latitude": 53.4352,
      "longitude": -2.7481,
      "country_code": "GB"
    },
    {
      "city": "Mahikeng",
      "latitude": -25.8653,
      "longitude": 25.6442,
      "country_code": "ZA"
    },
    {
      "city": "Radoviš",
      "latitude": 41.6381,
      "longitude": 22.4644,
      "country_code": "MK"
    },
    {
      "city": "Sedgley",
      "latitude": 52.54,
      "longitude": -2.123,
      "country_code": "GB"
    },
    {
      "city": "Minehead",
      "latitude": 51.2038,
      "longitude": -3.4738,
      "country_code": "GB"
    },
    {
      "city": "Xaignabouli",
      "latitude": 19.2576,
      "longitude": 101.7103,
      "country_code": "LA"
    },
    {
      "city": "Roosevelt",
      "latitude": 40.6797,
      "longitude": -73.5837,
      "country_code": "US"
    },
    {
      "city": "Koulamoutou",
      "latitude": -1.1333,
      "longitude": 12.4833,
      "country_code": "GA"
    },
    {
      "city": "Villa Hayes",
      "latitude": -25.09,
      "longitude": -57.53,
      "country_code": "PY"
    },
    {
      "city": "Wollaston",
      "latitude": 52.4619,
      "longitude": -2.1663,
      "country_code": "GB"
    },
    {
      "city": "Bačka Topola",
      "latitude": 45.8089,
      "longitude": 19.635,
      "country_code": "RS"
    },
    {
      "city": "Broadwater",
      "latitude": 50.8282,
      "longitude": -0.3742,
      "country_code": "GB"
    },
    {
      "city": "Aldama",
      "latitude": 22.9194,
      "longitude": -98.0736,
      "country_code": "MX"
    },
    {
      "city": "Hillcrest Heights",
      "latitude": 38.8373,
      "longitude": -76.9641,
      "country_code": "US"
    },
    {
      "city": "Mexicaltzingo",
      "latitude": 19.2092,
      "longitude": -99.5858,
      "country_code": "MX"
    },
    {
      "city": "Buckingham",
      "latitude": 51.995,
      "longitude": -0.986,
      "country_code": "GB"
    },
    {
      "city": "Castle Bromwich",
      "latitude": 52.505,
      "longitude": -1.7856,
      "country_code": "GB"
    },
    {
      "city": "Aylestone",
      "latitude": 52.604,
      "longitude": -1.154,
      "country_code": "GB"
    },
    {
      "city": "Chard",
      "latitude": 50.8728,
      "longitude": -2.9587,
      "country_code": "GB"
    },
    {
      "city": "Spitalfields",
      "latitude": 51.5166,
      "longitude": -0.075,
      "country_code": "GB"
    },
    {
      "city": "Four Corners",
      "latitude": 44.9291,
      "longitude": -122.9731,
      "country_code": "US"
    },
    {
      "city": "Walnut Park",
      "latitude": 33.9683,
      "longitude": -118.222,
      "country_code": "US"
    },
    {
      "city": "Bryn",
      "latitude": 53.499,
      "longitude": -2.657,
      "country_code": "GB"
    },
    {
      "city": "Căuşeni",
      "latitude": 46.6442,
      "longitude": 29.4139,
      "country_code": "MD"
    },
    {
      "city": "Sutton on Hull",
      "latitude": 53.7806,
      "longitude": -0.3047,
      "country_code": "GB"
    },
    {
      "city": "Midsomer Norton",
      "latitude": 51.2842,
      "longitude": -2.4817,
      "country_code": "GB"
    },
    {
      "city": "Palmetto Estates",
      "latitude": 25.6211,
      "longitude": -80.3616,
      "country_code": "US"
    },
    {
      "city": "Šilutė",
      "latitude": 55.35,
      "longitude": 21.4833,
      "country_code": "LT"
    },
    {
      "city": "Ángel R. Cabada",
      "latitude": 18.5969,
      "longitude": -95.4453,
      "country_code": "MX"
    },
    {
      "city": "East San Gabriel",
      "latitude": 34.1198,
      "longitude": -118.0807,
      "country_code": "US"
    },
    {
      "city": "Southwick",
      "latitude": 50.836,
      "longitude": -0.239,
      "country_code": "GB"
    },
    {
      "city": "Avocado Heights",
      "latitude": 34.0381,
      "longitude": -118.0026,
      "country_code": "US"
    },
    {
      "city": "Anadyr",
      "latitude": 64.7333,
      "longitude": 177.5167,
      "country_code": "RU"
    },
    {
      "city": "Longbenton",
      "latitude": 55,
      "longitude": -1.57,
      "country_code": "GB"
    },
    {
      "city": "Pelsall",
      "latitude": 52.631,
      "longitude": -1.972,
      "country_code": "GB"
    },
    {
      "city": "Parkway",
      "latitude": 38.4993,
      "longitude": -121.452,
      "country_code": "US"
    },
    {
      "city": "Maliana",
      "latitude": -8.9917,
      "longitude": 125.2197,
      "country_code": "TL"
    },
    {
      "city": "Whakatane",
      "latitude": -37.964,
      "longitude": 176.984,
      "country_code": "NZ"
    },
    {
      "city": "White Center",
      "latitude": 47.5086,
      "longitude": -122.348,
      "country_code": "US"
    },
    {
      "city": "Candelaria",
      "latitude": 18.4043,
      "longitude": -66.2175,
      "country_code": "PR"
    },
    {
      "city": "Ascensión",
      "latitude": 31.0928,
      "longitude": -107.9964,
      "country_code": "MX"
    },
    {
      "city": "Floral Park",
      "latitude": 40.7226,
      "longitude": -73.7029,
      "country_code": "US"
    },
    {
      "city": "Sukhothai",
      "latitude": 17.0142,
      "longitude": 99.8219,
      "country_code": "TH"
    },
    {
      "city": "Altay",
      "latitude": 46.3728,
      "longitude": 96.2572,
      "country_code": "MN"
    },
    {
      "city": "Asperg",
      "latitude": 48.9064,
      "longitude": 9.1414,
      "country_code": "DE"
    },
    {
      "city": "Thornbury",
      "latitude": 51.6094,
      "longitude": -2.5249,
      "country_code": "GB"
    },
    {
      "city": "South River",
      "latitude": 40.4455,
      "longitude": -74.3784,
      "country_code": "US"
    },
    {
      "city": "Peshkopi",
      "latitude": 41.6831,
      "longitude": 20.4289,
      "country_code": "AL"
    },
    {
      "city": "Adelphi",
      "latitude": 39.0017,
      "longitude": -76.9649,
      "country_code": "US"
    },
    {
      "city": "Gevgelija",
      "latitude": 41.1392,
      "longitude": 22.5025,
      "country_code": "MK"
    },
    {
      "city": "Bellmore",
      "latitude": 40.6569,
      "longitude": -73.5285,
      "country_code": "US"
    },
    {
      "city": "North New Hyde Park",
      "latitude": 40.746,
      "longitude": -73.6876,
      "country_code": "US"
    },
    {
      "city": "Allestree",
      "latitude": 52.9519,
      "longitude": -1.4856,
      "country_code": "GB"
    },
    {
      "city": "Lye",
      "latitude": 52.459,
      "longitude": -2.116,
      "country_code": "GB"
    },
    {
      "city": "Mosgiel",
      "latitude": -45.875,
      "longitude": 170.348,
      "country_code": "NZ"
    },
    {
      "city": "Brownhills",
      "latitude": 52.647,
      "longitude": -1.933,
      "country_code": "GB"
    },
    {
      "city": "North Arlington",
      "latitude": 40.7875,
      "longitude": -74.1273,
      "country_code": "US"
    },
    {
      "city": "Bull Run",
      "latitude": 38.7802,
      "longitude": -77.5204,
      "country_code": "US"
    },
    {
      "city": "Stranraer",
      "latitude": 54.902,
      "longitude": -5.027,
      "country_code": "GB"
    },
    {
      "city": "Stanford",
      "latitude": 37.4252,
      "longitude": -122.1674,
      "country_code": "US"
    },
    {
      "city": "McFarland",
      "latitude": 35.6781,
      "longitude": -119.2414,
      "country_code": "US"
    },
    {
      "city": "Uthai Thani",
      "latitude": 15.38,
      "longitude": 100.025,
      "country_code": "TH"
    },
    {
      "city": "Fenton",
      "latitude": 52.9977,
      "longitude": -2.1578,
      "country_code": "GB"
    },
    {
      "city": "Ainaro",
      "latitude": -8.9833,
      "longitude": 125.5,
      "country_code": "TL"
    },
    {
      "city": "Parlier",
      "latitude": 36.6087,
      "longitude": -119.5434,
      "country_code": "US"
    },
    {
      "city": "Edineţ",
      "latitude": 48.1681,
      "longitude": 27.305,
      "country_code": "MD"
    },
    {
      "city": "West University Place",
      "latitude": 29.7157,
      "longitude": -95.4321,
      "country_code": "US"
    },
    {
      "city": "Palanga",
      "latitude": 55.9167,
      "longitude": 21.0639,
      "country_code": "LT"
    },
    {
      "city": "Knutsford",
      "latitude": 53.3025,
      "longitude": -2.3708,
      "country_code": "GB"
    },
    {
      "city": "Chepstow",
      "latitude": 51.642,
      "longitude": -2.675,
      "country_code": "GB"
    },
    {
      "city": "Kiboga",
      "latitude": 0.9161,
      "longitude": 31.7742,
      "country_code": "UG"
    },
    {
      "city": "Eggertsville",
      "latitude": 42.9665,
      "longitude": -78.8065,
      "country_code": "US"
    },
    {
      "city": "Chilwell",
      "latitude": 52.916,
      "longitude": -1.235,
      "country_code": "GB"
    },
    {
      "city": "Corsham",
      "latitude": 51.43,
      "longitude": -2.19,
      "country_code": "GB"
    },
    {
      "city": "East Riverdale",
      "latitude": 38.96,
      "longitude": -76.9108,
      "country_code": "US"
    },
    {
      "city": "Schwyz",
      "latitude": 47.0205,
      "longitude": 8.6583,
      "country_code": "CH"
    },
    {
      "city": "Sonoita",
      "latitude": 31.8614,
      "longitude": -112.8544,
      "country_code": "MX"
    },
    {
      "city": "Kürdəmir",
      "latitude": 40.3383,
      "longitude": 48.1608,
      "country_code": "AZ"
    },
    {
      "city": "La Palma",
      "latitude": 33.8504,
      "longitude": -118.0406,
      "country_code": "US"
    },
    {
      "city": "La Tour-de-Peilz",
      "latitude": 46.45,
      "longitude": 6.8667,
      "country_code": "CH"
    },
    {
      "city": "Pacific Grove",
      "latitude": 36.6192,
      "longitude": -121.9255,
      "country_code": "US"
    },
    {
      "city": "Asbury Park",
      "latitude": 40.2226,
      "longitude": -74.0119,
      "country_code": "US"
    },
    {
      "city": "Cēsis",
      "latitude": 57.3131,
      "longitude": 25.2747,
      "country_code": "LV"
    },
    {
      "city": "Göygöl",
      "latitude": 40.5905,
      "longitude": 46.3239,
      "country_code": "AZ"
    },
    {
      "city": "Hamworthy",
      "latitude": 50.7207,
      "longitude": -2.0109,
      "country_code": "GB"
    },
    {
      "city": "Berkley",
      "latitude": 42.4986,
      "longitude": -83.1853,
      "country_code": "US"
    },
    {
      "city": "Anenecuilco",
      "latitude": 18.7781,
      "longitude": -98.9861,
      "country_code": "MX"
    },
    {
      "city": "Westbury",
      "latitude": 40.7599,
      "longitude": -73.5891,
      "country_code": "US"
    },
    {
      "city": "Manga",
      "latitude": 11.6667,
      "longitude": -1.0667,
      "country_code": "BF"
    },
    {
      "city": "La Grange",
      "latitude": 41.8072,
      "longitude": -87.8741,
      "country_code": "US"
    },
    {
      "city": "Devizes",
      "latitude": 51.353,
      "longitude": -1.994,
      "country_code": "GB"
    },
    {
      "city": "Bartica",
      "latitude": 6.4,
      "longitude": -58.6167,
      "country_code": "GY"
    },
    {
      "city": "Radviliškis",
      "latitude": 55.8,
      "longitude": 23.55,
      "country_code": "LT"
    },
    {
      "city": "Wilkinsburg",
      "latitude": 40.4442,
      "longitude": -79.8733,
      "country_code": "US"
    },
    {
      "city": "El Fuerte",
      "latitude": 26.4214,
      "longitude": -108.62,
      "country_code": "MX"
    },
    {
      "city": "Zubin Potok",
      "latitude": 42.9167,
      "longitude": 20.6833,
      "country_code": "XK"
    },
    {
      "city": "Isla Mujeres",
      "latitude": 21.2084,
      "longitude": -86.7115,
      "country_code": "MX"
    },
    {
      "city": "La Magdalena Chichicaspa",
      "latitude": 19.4181,
      "longitude": -99.3228,
      "country_code": "MX"
    },
    {
      "city": "Campbelltown",
      "latitude": -34.0733,
      "longitude": 150.8261,
      "country_code": "AU"
    },
    {
      "city": "Liestal",
      "latitude": 47.4839,
      "longitude": 7.735,
      "country_code": "CH"
    },
    {
      "city": "Chêne-Bougeries",
      "latitude": 46.1833,
      "longitude": 6.1833,
      "country_code": "CH"
    },
    {
      "city": "Wordsley",
      "latitude": 52.483,
      "longitude": -2.15,
      "country_code": "GB"
    },
    {
      "city": "Snaresbrook",
      "latitude": 51.587,
      "longitude": 0.0146,
      "country_code": "GB"
    },
    {
      "city": "Santa María Huazolotitlán",
      "latitude": 16.3014,
      "longitude": -97.9125,
      "country_code": "MX"
    },
    {
      "city": "Paro",
      "latitude": 27.4333,
      "longitude": 89.4167,
      "country_code": "BT"
    },
    {
      "city": "Broughton Astley",
      "latitude": 52.5278,
      "longitude": -1.2275,
      "country_code": "GB"
    },
    {
      "city": "Seaford",
      "latitude": 40.6678,
      "longitude": -73.4922,
      "country_code": "US"
    },
    {
      "city": "Ecublens",
      "latitude": 46.5276,
      "longitude": 6.5605,
      "country_code": "CH"
    },
    {
      "city": "Phôngsali",
      "latitude": 21.6836,
      "longitude": 102.1053,
      "country_code": "LA"
    },
    {
      "city": "Lambeth",
      "latitude": 51.4903,
      "longitude": -0.1193,
      "country_code": "GB"
    },
    {
      "city": "Cuencamé de Ceniceros",
      "latitude": 24.8667,
      "longitude": -103.7,
      "country_code": "MX"
    },
    {
      "city": "Quthing",
      "latitude": -30.4001,
      "longitude": 27.7002,
      "country_code": "LS"
    },
    {
      "city": "West Park",
      "latitude": 25.984,
      "longitude": -80.1923,
      "country_code": "US"
    },
    {
      "city": "Wallingford",
      "latitude": 51.599,
      "longitude": -1.125,
      "country_code": "GB"
    },
    {
      "city": "Timperley",
      "latitude": 53.387,
      "longitude": -2.328,
      "country_code": "GB"
    },
    {
      "city": "Parkstone",
      "latitude": 50.71,
      "longitude": -1.95,
      "country_code": "GB"
    },
    {
      "city": "San Isidro Buen Suceso",
      "latitude": 19.1528,
      "longitude": -98.1069,
      "country_code": "MX"
    },
    {
      "city": "Sandridge",
      "latitude": 51.7808,
      "longitude": -0.3038,
      "country_code": "GB"
    },
    {
      "city": "Gwanda",
      "latitude": -20.945,
      "longitude": 29.025,
      "country_code": "ZW"
    },
    {
      "city": "Olton",
      "latitude": 52.4377,
      "longitude": -1.8058,
      "country_code": "GB"
    },
    {
      "city": "Masallı",
      "latitude": 39.0183,
      "longitude": 48.6669,
      "country_code": "AZ"
    },
    {
      "city": "Kenmore",
      "latitude": 42.9646,
      "longitude": -78.8713,
      "country_code": "US"
    },
    {
      "city": "Fayrōz Kōh",
      "latitude": 34.5225,
      "longitude": 65.2517,
      "country_code": "AF"
    },
    {
      "city": "Leopold",
      "latitude": -38.1892,
      "longitude": 144.4644,
      "country_code": "AU"
    },
    {
      "city": "Baucau",
      "latitude": -8.4667,
      "longitude": 126.45,
      "country_code": "TL"
    },
    {
      "city": "Saucillo",
      "latitude": 28.0333,
      "longitude": -105.2833,
      "country_code": "MX"
    },
    {
      "city": "José María Morelos",
      "latitude": 19.75,
      "longitude": -88.7,
      "country_code": "MX"
    },
    {
      "city": "South Farmingdale",
      "latitude": 40.7175,
      "longitude": -73.4471,
      "country_code": "US"
    },
    {
      "city": "Woolton",
      "latitude": 53.374,
      "longitude": -2.865,
      "country_code": "GB"
    },
    {
      "city": "Fords",
      "latitude": 40.5415,
      "longitude": -74.3124,
      "country_code": "US"
    },
    {
      "city": "Le Grand-Saconnex",
      "latitude": 46.2333,
      "longitude": 6.1167,
      "country_code": "CH"
    },
    {
      "city": "Newport",
      "latitude": 39.0855,
      "longitude": -84.4868,
      "country_code": "US"
    },
    {
      "city": "Killamarsh",
      "latitude": 53.3205,
      "longitude": -1.3116,
      "country_code": "GB"
    },
    {
      "city": "Prescot",
      "latitude": 53.422,
      "longitude": -2.814,
      "country_code": "GB"
    },
    {
      "city": "Huntington",
      "latitude": 53.9926,
      "longitude": -1.043,
      "country_code": "GB"
    },
    {
      "city": "Dzitbalché",
      "latitude": 20.3167,
      "longitude": -90.05,
      "country_code": "MX"
    },
    {
      "city": "Caldicot",
      "latitude": 51.591,
      "longitude": -2.7492,
      "country_code": "GB"
    },
    {
      "city": "Tadjourah",
      "latitude": 11.7833,
      "longitude": 42.8833,
      "country_code": "DJ"
    },
    {
      "city": "Abergavenny",
      "latitude": 51.824,
      "longitude": -3.0167,
      "country_code": "GB"
    },
    {
      "city": "Eisenstadt",
      "latitude": 47.8456,
      "longitude": 16.5189,
      "country_code": "AT"
    },
    {
      "city": "Rorschach",
      "latitude": 47.4786,
      "longitude": 9.4936,
      "country_code": "CH"
    },
    {
      "city": "Lykóvrysi",
      "latitude": 38.0667,
      "longitude": 23.7833,
      "country_code": "GR"
    },
    {
      "city": "Öndörhaan",
      "latitude": 47.3167,
      "longitude": 110.65,
      "country_code": "MN"
    },
    {
      "city": "Sironko",
      "latitude": 1.2294,
      "longitude": 34.2481,
      "country_code": "UG"
    },
    {
      "city": "Debar",
      "latitude": 41.525,
      "longitude": 20.5272,
      "country_code": "MK"
    },
    {
      "city": "Ewa Beach",
      "latitude": 21.3181,
      "longitude": -158.0073,
      "country_code": "US"
    },
    {
      "city": "Hwlffordd",
      "latitude": 51.8,
      "longitude": -4.97,
      "country_code": "GB"
    },
    {
      "city": "Pierre",
      "latitude": 44.3748,
      "longitude": -100.3205,
      "country_code": "US"
    },
    {
      "city": "Abertillery",
      "latitude": 51.73,
      "longitude": -3.13,
      "country_code": "GB"
    },
    {
      "city": "Hoyland Nether",
      "latitude": 53.4985,
      "longitude": -1.4406,
      "country_code": "GB"
    },
    {
      "city": "New Cassel",
      "latitude": 40.76,
      "longitude": -73.5649,
      "country_code": "US"
    },
    {
      "city": "Halawa",
      "latitude": 21.3753,
      "longitude": -157.9185,
      "country_code": "US"
    },
    {
      "city": "Bargoed",
      "latitude": 51.69,
      "longitude": -3.24,
      "country_code": "GB"
    },
    {
      "city": "Falls Church",
      "latitude": 38.8847,
      "longitude": -77.1751,
      "country_code": "US"
    },
    {
      "city": "Franklin Park",
      "latitude": 40.4439,
      "longitude": -74.5432,
      "country_code": "US"
    },
    {
      "city": "Cayey",
      "latitude": 18.115,
      "longitude": -66.163,
      "country_code": "PR"
    },
    {
      "city": "Luganville",
      "latitude": -15.5126,
      "longitude": 167.1766,
      "country_code": "VU"
    },
    {
      "city": "Kriva Palanka",
      "latitude": 42.2017,
      "longitude": 22.3317,
      "country_code": "MK"
    },
    {
      "city": "Forécariah",
      "latitude": 9.43,
      "longitude": -13.098,
      "country_code": "GN"
    },
    {
      "city": "Jaltenango",
      "latitude": 15.8725,
      "longitude": -92.725,
      "country_code": "MX"
    },
    {
      "city": "Pincourt",
      "latitude": 45.3833,
      "longitude": -73.9833,
      "country_code": "CA"
    },
    {
      "city": "Tierra Colorada",
      "latitude": 17.1656,
      "longitude": -99.5264,
      "country_code": "MX"
    },
    {
      "city": "North Fair Oaks",
      "latitude": 37.4754,
      "longitude": -122.2035,
      "country_code": "US"
    },
    {
      "city": "Basse Santa Su",
      "latitude": 13.31,
      "longitude": -14.223,
      "country_code": "GM"
    },
    {
      "city": "Ar Rommani",
      "latitude": 33.5333,
      "longitude": -6.6,
      "country_code": "MA"
    },
    {
      "city": "Baruun-Urt",
      "latitude": 46.6806,
      "longitude": 113.2792,
      "country_code": "MN"
    },
    {
      "city": "Villa Unión",
      "latitude": 23.9667,
      "longitude": -104.0333,
      "country_code": "MX"
    },
    {
      "city": "Olympia Heights",
      "latitude": 25.7241,
      "longitude": -80.339,
      "country_code": "US"
    },
    {
      "city": "Haddon",
      "latitude": 39.9063,
      "longitude": -75.0625,
      "country_code": "US"
    },
    {
      "city": "Carnoustie",
      "latitude": 56.5005,
      "longitude": -2.7147,
      "country_code": "GB"
    },
    {
      "city": "Port Antonio",
      "latitude": 18.1667,
      "longitude": -76.45,
      "country_code": "JM"
    },
    {
      "city": "Rayón",
      "latitude": 19.1481,
      "longitude": -99.58,
      "country_code": "MX"
    },
    {
      "city": "Gabú",
      "latitude": 12.2833,
      "longitude": -14.2167,
      "country_code": "GW"
    },
    {
      "city": "Ashby de la Zouch",
      "latitude": 52.746,
      "longitude": -1.476,
      "country_code": "GB"
    },
    {
      "city": "Tonyrefail",
      "latitude": 51.584,
      "longitude": -3.4306,
      "country_code": "GB"
    },
    {
      "city": "Wath upon Dearne",
      "latitude": 53.5022,
      "longitude": -1.3402,
      "country_code": "GB"
    },
    {
      "city": "Alsager",
      "latitude": 53.0961,
      "longitude": -2.3048,
      "country_code": "GB"
    },
    {
      "city": "Birsfelden",
      "latitude": 47.5531,
      "longitude": 7.6231,
      "country_code": "CH"
    },
    {
      "city": "Bacalar",
      "latitude": 18.6769,
      "longitude": -88.3953,
      "country_code": "MX"
    },
    {
      "city": "Muna",
      "latitude": 20.48,
      "longitude": -89.72,
      "country_code": "MX"
    },
    {
      "city": "Hambantota",
      "latitude": 6.1241,
      "longitude": 81.1185,
      "country_code": "LK"
    },
    {
      "city": "Weehawken",
      "latitude": 40.7676,
      "longitude": -74.0167,
      "country_code": "US"
    },
    {
      "city": "Haydock",
      "latitude": 53.4678,
      "longitude": -2.6609,
      "country_code": "GB"
    },
    {
      "city": "Neftçala",
      "latitude": 39.3791,
      "longitude": 49.2486,
      "country_code": "AZ"
    },
    {
      "city": "Cudworth",
      "latitude": 53.5784,
      "longitude": -1.4149,
      "country_code": "GB"
    },
    {
      "city": "Zefýri",
      "latitude": 38.0667,
      "longitude": 23.7167,
      "country_code": "GR"
    },
    {
      "city": "Qusar",
      "latitude": 41.4219,
      "longitude": 48.4214,
      "country_code": "AZ"
    },
    {
      "city": "Villars-sur-Glâne",
      "latitude": 46.7833,
      "longitude": 7.1167,
      "country_code": "CH"
    },
    {
      "city": "Brislington",
      "latitude": 51.4316,
      "longitude": -2.5439,
      "country_code": "GB"
    },
    {
      "city": "Shoeburyness",
      "latitude": 51.5316,
      "longitude": 0.7978,
      "country_code": "GB"
    },
    {
      "city": "Coalcomán de Vázquez Pallares",
      "latitude": 18.7771,
      "longitude": -103.1596,
      "country_code": "MX"
    },
    {
      "city": "Nuevo Progreso",
      "latitude": 26.0561,
      "longitude": -97.9522,
      "country_code": "MX"
    },
    {
      "city": "Cowley",
      "latitude": 51.528,
      "longitude": -0.481,
      "country_code": "GB"
    },
    {
      "city": "Yehud",
      "latitude": 32.0333,
      "longitude": 34.8833,
      "country_code": "IL"
    },
    {
      "city": "Fairview",
      "latitude": 40.8182,
      "longitude": -74.0022,
      "country_code": "US"
    },
    {
      "city": "Halstead",
      "latitude": 51.9451,
      "longitude": 0.6411,
      "country_code": "GB"
    },
    {
      "city": "Hawaiian Gardens",
      "latitude": 33.8303,
      "longitude": -118.0728,
      "country_code": "US"
    },
    {
      "city": "Norridge",
      "latitude": 41.9637,
      "longitude": -87.8231,
      "country_code": "US"
    },
    {
      "city": "Wealdstone",
      "latitude": 51.5957,
      "longitude": -0.3352,
      "country_code": "GB"
    },
    {
      "city": "Gillingham",
      "latitude": 51.0375,
      "longitude": -2.2748,
      "country_code": "GB"
    },
    {
      "city": "Oakham",
      "latitude": 52.6705,
      "longitude": -0.7333,
      "country_code": "GB"
    },
    {
      "city": "Hatch End",
      "latitude": 51.601,
      "longitude": -0.3743,
      "country_code": "GB"
    },
    {
      "city": "Lemington",
      "latitude": 54.972,
      "longitude": -1.723,
      "country_code": "GB"
    },
    {
      "city": "Street",
      "latitude": 51.1235,
      "longitude": -2.7381,
      "country_code": "GB"
    },
    {
      "city": "Cowes",
      "latitude": 50.7595,
      "longitude": -1.3002,
      "country_code": "GB"
    },
    {
      "city": "Willowick",
      "latitude": 41.6343,
      "longitude": -81.468,
      "country_code": "US"
    },
    {
      "city": "Lemon Hill",
      "latitude": 38.5172,
      "longitude": -121.4573,
      "country_code": "US"
    },
    {
      "city": "Sjenica",
      "latitude": 43.2667,
      "longitude": 20,
      "country_code": "RS"
    },
    {
      "city": "Raynes Park",
      "latitude": 51.4033,
      "longitude": -0.2321,
      "country_code": "GB"
    },
    {
      "city": "Burslem",
      "latitude": 53.0426,
      "longitude": -2.1879,
      "country_code": "GB"
    },
    {
      "city": "Ocean Pointe",
      "latitude": 21.3145,
      "longitude": -158.0289,
      "country_code": "US"
    },
    {
      "city": "Chinsali",
      "latitude": -10.5496,
      "longitude": 32.06,
      "country_code": "ZM"
    },
    {
      "city": "Ryhope",
      "latitude": 54.8679,
      "longitude": -1.3698,
      "country_code": "GB"
    },
    {
      "city": "Chichihualco",
      "latitude": 17.655,
      "longitude": -99.674,
      "country_code": "MX"
    },
    {
      "city": "Bishops Cleeve",
      "latitude": 51.947,
      "longitude": -2.061,
      "country_code": "GB"
    },
    {
      "city": "Helston",
      "latitude": 50.1,
      "longitude": -5.27,
      "country_code": "GB"
    },
    {
      "city": "Cetinje",
      "latitude": 42.3933,
      "longitude": 18.9219,
      "country_code": "ME"
    },
    {
      "city": "Kisoro",
      "latitude": -1.3539,
      "longitude": 29.6983,
      "country_code": "UG"
    },
    {
      "city": "Nacaome",
      "latitude": 13.5333,
      "longitude": -87.4833,
      "country_code": "HN"
    },
    {
      "city": "Kuressaare",
      "latitude": 58.2533,
      "longitude": 22.4861,
      "country_code": "EE"
    },
    {
      "city": "Altamirano",
      "latitude": 16.7361,
      "longitude": -92.0389,
      "country_code": "MX"
    },
    {
      "city": "Royston",
      "latitude": 53.61,
      "longitude": -1.45,
      "country_code": "GB"
    },
    {
      "city": "Lerma",
      "latitude": 19.8,
      "longitude": -90.6,
      "country_code": "MX"
    },
    {
      "city": "Chicago Ridge",
      "latitude": 41.7034,
      "longitude": -87.7795,
      "country_code": "US"
    },
    {
      "city": "Kippax",
      "latitude": 53.7669,
      "longitude": -1.3705,
      "country_code": "GB"
    },
    {
      "city": "Bishopstoke",
      "latitude": 50.9679,
      "longitude": -1.3278,
      "country_code": "GB"
    },
    {
      "city": "Canatlán",
      "latitude": 24.52,
      "longitude": -104.78,
      "country_code": "MX"
    },
    {
      "city": "Nova Gorica",
      "latitude": 45.9667,
      "longitude": 13.65,
      "country_code": "SI"
    },
    {
      "city": "Collingswood",
      "latitude": 39.916,
      "longitude": -75.0759,
      "country_code": "US"
    },
    {
      "city": "Kinkala",
      "latitude": -4.35,
      "longitude": 14.76,
      "country_code": "CG"
    },
    {
      "city": "Concord",
      "latitude": -33.8444,
      "longitude": 151.0903,
      "country_code": "AU"
    },
    {
      "city": "Negēlē",
      "latitude": 5.3166,
      "longitude": 39.5833,
      "country_code": "ET"
    },
    {
      "city": "Risca",
      "latitude": 51.608,
      "longitude": -3.091,
      "country_code": "GB"
    },
    {
      "city": "Kemp Mill",
      "latitude": 39.0412,
      "longitude": -77.0215,
      "country_code": "US"
    },
    {
      "city": "Glascote",
      "latitude": 52.6245,
      "longitude": -1.668,
      "country_code": "GB"
    },
    {
      "city": "Cheam",
      "latitude": 51.36,
      "longitude": -0.21,
      "country_code": "GB"
    },
    {
      "city": "Plav",
      "latitude": 42.5956,
      "longitude": 19.945,
      "country_code": "ME"
    },
    {
      "city": "Saint Ann’s Bay",
      "latitude": 18.435,
      "longitude": -77.2017,
      "country_code": "JM"
    },
    {
      "city": "Sveti Nikole",
      "latitude": 41.865,
      "longitude": 21.9425,
      "country_code": "MK"
    },
    {
      "city": "Whitefish Bay",
      "latitude": 43.1132,
      "longitude": -87.9004,
      "country_code": "US"
    },
    {
      "city": "Bexley",
      "latitude": 39.965,
      "longitude": -82.9343,
      "country_code": "US"
    },
    {
      "city": "San Patricio",
      "latitude": 19.2,
      "longitude": -104.6833,
      "country_code": "MX"
    },
    {
      "city": "Harper Woods",
      "latitude": 42.439,
      "longitude": -82.9292,
      "country_code": "US"
    },
    {
      "city": "Las Veredas",
      "latitude": 23.15,
      "longitude": -109.7,
      "country_code": "MX"
    },
    {
      "city": "González",
      "latitude": 22.8281,
      "longitude": -98.4306,
      "country_code": "MX"
    },
    {
      "city": "Naifaru",
      "latitude": 5.4442,
      "longitude": 73.3662,
      "country_code": "MV"
    },
    {
      "city": "Highland Park",
      "latitude": 40.5006,
      "longitude": -74.4283,
      "country_code": "US"
    },
    {
      "city": "Tovuz",
      "latitude": 40.9864,
      "longitude": 45.6275,
      "country_code": "AZ"
    },
    {
      "city": "Forest Park",
      "latitude": 41.8683,
      "longitude": -87.8157,
      "country_code": "US"
    },
    {
      "city": "Ang Thong",
      "latitude": 14.5925,
      "longitude": 100.4572,
      "country_code": "TH"
    },
    {
      "city": "Henley on Thames",
      "latitude": 51.536,
      "longitude": -0.898,
      "country_code": "GB"
    },
    {
      "city": "Weiz",
      "latitude": 47.2189,
      "longitude": 15.6253,
      "country_code": "AT"
    },
    {
      "city": "Shtërpcë",
      "latitude": 42.2333,
      "longitude": 21.0167,
      "country_code": "XK"
    },
    {
      "city": "Aberaman",
      "latitude": 51.7,
      "longitude": -3.4333,
      "country_code": "GB"
    },
    {
      "city": "Torpoint",
      "latitude": 50.376,
      "longitude": -4.205,
      "country_code": "GB"
    },
    {
      "city": "Hirnyk",
      "latitude": 48.05,
      "longitude": 37.3667,
      "country_code": "UA"
    },
    {
      "city": "Roselle Park",
      "latitude": 40.6653,
      "longitude": -74.2666,
      "country_code": "US"
    },
    {
      "city": "San Luis de La Loma",
      "latitude": 17.2714,
      "longitude": -100.8911,
      "country_code": "MX"
    },
    {
      "city": "Santa Ana",
      "latitude": 9.932,
      "longitude": -84.176,
      "country_code": "CR"
    },
    {
      "city": "Akil",
      "latitude": 20.2656,
      "longitude": -89.3478,
      "country_code": "MX"
    },
    {
      "city": "Tavistock",
      "latitude": 50.545,
      "longitude": -4.15,
      "country_code": "GB"
    },
    {
      "city": "Cupar",
      "latitude": 56.32,
      "longitude": -3.01,
      "country_code": "GB"
    },
    {
      "city": "Marton",
      "latitude": 54.5406,
      "longitude": -1.2124,
      "country_code": "GB"
    },
    {
      "city": "San Carlos",
      "latitude": 11.2,
      "longitude": -84.8333,
      "country_code": "NI"
    },
    {
      "city": "Stanwell",
      "latitude": 51.457,
      "longitude": -0.4715,
      "country_code": "GB"
    },
    {
      "city": "Ciudad Cuauhtémoc",
      "latitude": 22.1842,
      "longitude": -97.8325,
      "country_code": "MX"
    },
    {
      "city": "Grover Beach",
      "latitude": 35.1204,
      "longitude": -120.6199,
      "country_code": "US"
    },
    {
      "city": "Brierfield",
      "latitude": 53.824,
      "longitude": -2.235,
      "country_code": "GB"
    },
    {
      "city": "Chatteris",
      "latitude": 52.456,
      "longitude": 0.055,
      "country_code": "GB"
    },
    {
      "city": "Princeton Meadows",
      "latitude": 40.3332,
      "longitude": -74.5628,
      "country_code": "US"
    },
    {
      "city": "Ifield",
      "latitude": 51.1234,
      "longitude": -0.2073,
      "country_code": "GB"
    },
    {
      "city": "Buckhurst Hill",
      "latitude": 51.632,
      "longitude": 0.036,
      "country_code": "GB"
    },
    {
      "city": "Newport",
      "latitude": 52.7691,
      "longitude": -2.3787,
      "country_code": "GB"
    },
    {
      "city": "Nuevo Ideal",
      "latitude": 24.8875,
      "longitude": -105.0728,
      "country_code": "MX"
    },
    {
      "city": "Faya",
      "latitude": 17.93,
      "longitude": 19.1031,
      "country_code": "TD"
    },
    {
      "city": "Eaton Socon",
      "latitude": 52.22,
      "longitude": -0.29,
      "country_code": "GB"
    },
    {
      "city": "Negotino",
      "latitude": 41.4839,
      "longitude": 22.0892,
      "country_code": "MK"
    },
    {
      "city": "Waimalu",
      "latitude": 21.3913,
      "longitude": -157.9345,
      "country_code": "US"
    },
    {
      "city": "Horsell",
      "latitude": 51.3286,
      "longitude": -0.5617,
      "country_code": "GB"
    },
    {
      "city": "Whitchurch",
      "latitude": 52.969,
      "longitude": -2.682,
      "country_code": "GB"
    },
    {
      "city": "Platón Sánchez",
      "latitude": 21.2833,
      "longitude": -98.3667,
      "country_code": "MX"
    },
    {
      "city": "Edgewater",
      "latitude": 40.8237,
      "longitude": -73.974,
      "country_code": "US"
    },
    {
      "city": "Santa Bárbara",
      "latitude": 26.8133,
      "longitude": -105.8203,
      "country_code": "MX"
    },
    {
      "city": "Corinda",
      "latitude": -27.4833,
      "longitude": 153.1,
      "country_code": "AU"
    },
    {
      "city": "Kumi",
      "latitude": 1.4608,
      "longitude": 33.9361,
      "country_code": "UG"
    },
    {
      "city": "Stocksbridge",
      "latitude": 53.478,
      "longitude": -1.588,
      "country_code": "GB"
    },
    {
      "city": "Gladeview",
      "latitude": 25.8395,
      "longitude": -80.2368,
      "country_code": "US"
    },
    {
      "city": "Kilsyth",
      "latitude": 55.98,
      "longitude": -4.06,
      "country_code": "GB"
    },
    {
      "city": "Villa de Etla",
      "latitude": 17.2062,
      "longitude": -96.7989,
      "country_code": "MX"
    },
    {
      "city": "Drochia",
      "latitude": 48.0308,
      "longitude": 27.8126,
      "country_code": "MD"
    },
    {
      "city": "Tlacotalpan",
      "latitude": 18.6167,
      "longitude": -95.6667,
      "country_code": "MX"
    },
    {
      "city": "Delémont",
      "latitude": 47.3653,
      "longitude": 7.3472,
      "country_code": "CH"
    },
    {
      "city": "Männedorf",
      "latitude": 47.2553,
      "longitude": 8.6917,
      "country_code": "CH"
    },
    {
      "city": "Nieuw Nickerie",
      "latitude": 5.9261,
      "longitude": -56.9731,
      "country_code": "SR"
    },
    {
      "city": "Mwanza",
      "latitude": -15.6167,
      "longitude": 34.5167,
      "country_code": "MW"
    },
    {
      "city": "Barnoldswick",
      "latitude": 53.9147,
      "longitude": -2.1895,
      "country_code": "GB"
    },
    {
      "city": "Tixkokob",
      "latitude": 21.0022,
      "longitude": -89.3936,
      "country_code": "MX"
    },
    {
      "city": "Santa Ana",
      "latitude": 30.5406,
      "longitude": -111.1205,
      "country_code": "MX"
    },
    {
      "city": "Magugpo Poblacion",
      "latitude": 7.3821,
      "longitude": 125.8017,
      "country_code": "PH"
    },
    {
      "city": "Acanceh",
      "latitude": 20.8133,
      "longitude": -89.4524,
      "country_code": "MX"
    },
    {
      "city": "La Grange Park",
      "latitude": 41.8308,
      "longitude": -87.8723,
      "country_code": "US"
    },
    {
      "city": "Goldenrod",
      "latitude": 28.6114,
      "longitude": -81.2916,
      "country_code": "US"
    },
    {
      "city": "Shorewood",
      "latitude": 43.0914,
      "longitude": -87.8864,
      "country_code": "US"
    },
    {
      "city": "Flixton",
      "latitude": 53.447,
      "longitude": -2.391,
      "country_code": "GB"
    },
    {
      "city": "Huntington",
      "latitude": 38.7916,
      "longitude": -77.074,
      "country_code": "US"
    },
    {
      "city": "Bocas del Toro",
      "latitude": 9.3333,
      "longitude": -82.25,
      "country_code": "PA"
    },
    {
      "city": "Ormož",
      "latitude": 46.4071,
      "longitude": 16.1505,
      "country_code": "SI"
    },
    {
      "city": "Tetela del Volcán",
      "latitude": 18.8931,
      "longitude": -98.7297,
      "country_code": "MX"
    },
    {
      "city": "Steinbach am Taunus",
      "latitude": 50.1678,
      "longitude": 8.5719,
      "country_code": "DE"
    },
    {
      "city": "Ardmore",
      "latitude": 40.0033,
      "longitude": -75.2947,
      "country_code": "US"
    },
    {
      "city": "Handsworth",
      "latitude": 53.37,
      "longitude": -1.4,
      "country_code": "GB"
    },
    {
      "city": "Coatesville",
      "latitude": 39.9849,
      "longitude": -75.8199,
      "country_code": "US"
    },
    {
      "city": "Kibuye",
      "latitude": -2.0594,
      "longitude": 29.3481,
      "country_code": "RW"
    },
    {
      "city": "Pajacuarán",
      "latitude": 20.1178,
      "longitude": -102.5667,
      "country_code": "MX"
    },
    {
      "city": "Hellesdon",
      "latitude": 52.6485,
      "longitude": 1.2509,
      "country_code": "GB"
    },
    {
      "city": "Shepton Mallet",
      "latitude": 51.193,
      "longitude": -2.546,
      "country_code": "GB"
    },
    {
      "city": "Menongue",
      "latitude": -14.6666,
      "longitude": 17.7,
      "country_code": "AO"
    },
    {
      "city": "Mariental",
      "latitude": -24.6333,
      "longitude": 17.9667,
      "country_code": "NA"
    },
    {
      "city": "La Huacana",
      "latitude": 18.9625,
      "longitude": -101.8069,
      "country_code": "MX"
    },
    {
      "city": "Inverurie",
      "latitude": 57.28,
      "longitude": -2.38,
      "country_code": "GB"
    },
    {
      "city": "Steinkjer",
      "latitude": 64.0147,
      "longitude": 11.4942,
      "country_code": "NO"
    },
    {
      "city": "Stone Ridge",
      "latitude": 38.9295,
      "longitude": -77.5553,
      "country_code": "US"
    },
    {
      "city": "Novo Airão",
      "latitude": -2.6208,
      "longitude": -60.9438,
      "country_code": "BR"
    },
    {
      "city": "Río Grande",
      "latitude": 18.3789,
      "longitude": -65.8388,
      "country_code": "PR"
    },
    {
      "city": "New Carrollton",
      "latitude": 38.9654,
      "longitude": -76.8773,
      "country_code": "US"
    },
    {
      "city": "San Ignacio Cohuirimpo",
      "latitude": 27.05,
      "longitude": -109.4167,
      "country_code": "MX"
    },
    {
      "city": "Valga",
      "latitude": 57.7769,
      "longitude": 26.0311,
      "country_code": "EE"
    },
    {
      "city": "Ialoveni",
      "latitude": 46.9431,
      "longitude": 28.7778,
      "country_code": "MD"
    },
    {
      "city": "Ridgefield Park",
      "latitude": 40.8543,
      "longitude": -74.0201,
      "country_code": "US"
    },
    {
      "city": "Manatí",
      "latitude": 18.4283,
      "longitude": -66.4823,
      "country_code": "PR"
    },
    {
      "city": "Obo",
      "latitude": 5.4,
      "longitude": 26.5,
      "country_code": "CF"
    },
    {
      "city": "Daru",
      "latitude": -9.0833,
      "longitude": 143.2,
      "country_code": "PG"
    },
    {
      "city": "Lamphun",
      "latitude": 18.5803,
      "longitude": 99.0072,
      "country_code": "TH"
    },
    {
      "city": "Cuatro Ciénegas de Carranza",
      "latitude": 26.9861,
      "longitude": -102.0664,
      "country_code": "MX"
    },
    {
      "city": "Ziniaré",
      "latitude": 12.577,
      "longitude": -1.293,
      "country_code": "BF"
    },
    {
      "city": "Key Biscayne",
      "latitude": 25.6908,
      "longitude": -80.1653,
      "country_code": "US"
    },
    {
      "city": "Federal Heights",
      "latitude": 39.8651,
      "longitude": -105.0154,
      "country_code": "US"
    },
    {
      "city": "Cornelius",
      "latitude": 45.519,
      "longitude": -123.0514,
      "country_code": "US"
    },
    {
      "city": "Kingston",
      "latitude": 41.2652,
      "longitude": -75.8875,
      "country_code": "US"
    },
    {
      "city": "Tacotalpa",
      "latitude": 17.5931,
      "longitude": -92.8258,
      "country_code": "MX"
    },
    {
      "city": "University Heights",
      "latitude": 41.4948,
      "longitude": -81.5348,
      "country_code": "US"
    },
    {
      "city": "Candelaria",
      "latitude": 18.1844,
      "longitude": -91.0461,
      "country_code": "MX"
    },
    {
      "city": "Chai Nat",
      "latitude": 15.1872,
      "longitude": 100.1283,
      "country_code": "TH"
    },
    {
      "city": "Rokiškis",
      "latitude": 55.9616,
      "longitude": 25.5807,
      "country_code": "LT"
    },
    {
      "city": "Wilton Manors",
      "latitude": 26.1593,
      "longitude": -80.1395,
      "country_code": "US"
    },
    {
      "city": "Valadares",
      "latitude": 41.0997,
      "longitude": -8.6403,
      "country_code": "PT"
    },
    {
      "city": "Aţ Ţūr",
      "latitude": 28.2333,
      "longitude": 33.6167,
      "country_code": "EG"
    },
    {
      "city": "Blackwood",
      "latitude": 51.67,
      "longitude": -3.19,
      "country_code": "GB"
    },
    {
      "city": "Võru",
      "latitude": 57.8486,
      "longitude": 26.9928,
      "country_code": "EE"
    },
    {
      "city": "Exhall",
      "latitude": 52.47,
      "longitude": -1.48,
      "country_code": "GB"
    },
    {
      "city": "Tərtər",
      "latitude": 40.3353,
      "longitude": 46.9303,
      "country_code": "AZ"
    },
    {
      "city": "Clarkston",
      "latitude": 33.8117,
      "longitude": -84.2404,
      "country_code": "US"
    },
    {
      "city": "Glarus",
      "latitude": 47.0331,
      "longitude": 9.0664,
      "country_code": "CH"
    },
    {
      "city": "Caernarfon",
      "latitude": 53.14,
      "longitude": -4.27,
      "country_code": "GB"
    },
    {
      "city": "Shildon",
      "latitude": 54.63,
      "longitude": -1.65,
      "country_code": "GB"
    },
    {
      "city": "Tlahualilo de Zaragoza",
      "latitude": 26.1167,
      "longitude": -103.45,
      "country_code": "MX"
    },
    {
      "city": "Druskininkai",
      "latitude": 54.0206,
      "longitude": 23.9725,
      "country_code": "LT"
    },
    {
      "city": "Kralendijk",
      "latitude": 12.1508,
      "longitude": -68.2767,
      "country_code": "NL"
    },
    {
      "city": "Cherry Creek",
      "latitude": 39.6094,
      "longitude": -104.8645,
      "country_code": "US"
    },
    {
      "city": "Hînceşti",
      "latitude": 46.8258,
      "longitude": 28.5936,
      "country_code": "MD"
    },
    {
      "city": "Nairn",
      "latitude": 57.586,
      "longitude": -3.869,
      "country_code": "GB"
    },
    {
      "city": "Ermoúpoli",
      "latitude": 37.4504,
      "longitude": 24.9333,
      "country_code": "GR"
    },
    {
      "city": "Lantana",
      "latitude": 26.5834,
      "longitude": -80.0564,
      "country_code": "US"
    },
    {
      "city": "Sugarland Run",
      "latitude": 39.0309,
      "longitude": -77.3762,
      "country_code": "US"
    },
    {
      "city": "Ahuacatlán",
      "latitude": 21.0536,
      "longitude": -104.4869,
      "country_code": "MX"
    },
    {
      "city": "Roby",
      "latitude": 53.413,
      "longitude": -2.852,
      "country_code": "GB"
    },
    {
      "city": "Ntcheu",
      "latitude": -14.8167,
      "longitude": 34.6333,
      "country_code": "MW"
    },
    {
      "city": "Sîngerei",
      "latitude": 47.6406,
      "longitude": 28.1419,
      "country_code": "MD"
    },
    {
      "city": "Pelham",
      "latitude": 40.9,
      "longitude": -73.8064,
      "country_code": "US"
    },
    {
      "city": "Nueva Palmira",
      "latitude": -33.87,
      "longitude": -58.408,
      "country_code": "UY"
    },
    {
      "city": "Broadstone",
      "latitude": 50.7605,
      "longitude": -1.995,
      "country_code": "GB"
    },
    {
      "city": "Murska Sobota",
      "latitude": 46.6586,
      "longitude": 16.1619,
      "country_code": "SI"
    },
    {
      "city": "Bradford-on-Avon",
      "latitude": 51.347,
      "longitude": -2.251,
      "country_code": "GB"
    },
    {
      "city": "Worsley",
      "latitude": 53.5093,
      "longitude": -2.3845,
      "country_code": "GB"
    },
    {
      "city": "Chapeltown",
      "latitude": 53.462,
      "longitude": -1.466,
      "country_code": "GB"
    },
    {
      "city": "Ciudad Tula",
      "latitude": 23,
      "longitude": -99.72,
      "country_code": "MX"
    },
    {
      "city": "Bulgan",
      "latitude": 48.8103,
      "longitude": 103.5408,
      "country_code": "MN"
    },
    {
      "city": "Mariehamn",
      "latitude": 60.0986,
      "longitude": 19.9444,
      "country_code": "FI"
    },
    {
      "city": "Taraclia",
      "latitude": 45.9,
      "longitude": 28.6689,
      "country_code": "MD"
    },
    {
      "city": "Warfield",
      "latitude": 51.442,
      "longitude": -0.737,
      "country_code": "GB"
    },
    {
      "city": "Zamora",
      "latitude": -4.0692,
      "longitude": -78.9567,
      "country_code": "EC"
    },
    {
      "city": "Utley",
      "latitude": 53.88,
      "longitude": -1.91,
      "country_code": "GB"
    },
    {
      "city": "Larbert",
      "latitude": 56.0229,
      "longitude": -3.826,
      "country_code": "GB"
    },
    {
      "city": "Beyləqan",
      "latitude": 39.7692,
      "longitude": 47.6156,
      "country_code": "AZ"
    },
    {
      "city": "Patchogue",
      "latitude": 40.7621,
      "longitude": -73.0185,
      "country_code": "US"
    },
    {
      "city": "Allington",
      "latitude": 51.2903,
      "longitude": 0.5019,
      "country_code": "GB"
    },
    {
      "city": "Heybridge",
      "latitude": 51.7417,
      "longitude": 0.6897,
      "country_code": "GB"
    },
    {
      "city": "Sinop",
      "latitude": -11.85,
      "longitude": -55.46,
      "country_code": "BR"
    },
    {
      "city": "North Merrick",
      "latitude": 40.6871,
      "longitude": -73.5615,
      "country_code": "US"
    },
    {
      "city": "Qalāt",
      "latitude": 32.1061,
      "longitude": 66.9069,
      "country_code": "AF"
    },
    {
      "city": "Chuy",
      "latitude": -33.6833,
      "longitude": -53.45,
      "country_code": "UY"
    },
    {
      "city": "Batken",
      "latitude": 40.0625,
      "longitude": 70.8194,
      "country_code": "KG"
    },
    {
      "city": "Ayapango",
      "latitude": 19.1264,
      "longitude": -98.8028,
      "country_code": "MX"
    },
    {
      "city": "Porto Nacional",
      "latitude": -10.7,
      "longitude": -48.4199,
      "country_code": "BR"
    },
    {
      "city": "Făleşti",
      "latitude": 47.5736,
      "longitude": 27.7092,
      "country_code": "MD"
    },
    {
      "city": "Xicoténcatl",
      "latitude": 22.9958,
      "longitude": -98.9447,
      "country_code": "MX"
    },
    {
      "city": "Westwood Lakes",
      "latitude": 25.7237,
      "longitude": -80.3717,
      "country_code": "US"
    },
    {
      "city": "Assomada",
      "latitude": 15.0949,
      "longitude": -23.6654,
      "country_code": "CV"
    },
    {
      "city": "Tottington",
      "latitude": 53.613,
      "longitude": -2.339,
      "country_code": "GB"
    },
    {
      "city": "Minnehaha",
      "latitude": 45.6577,
      "longitude": -122.6204,
      "country_code": "US"
    },
    {
      "city": "Floreşti",
      "latitude": 47.8933,
      "longitude": 28.3014,
      "country_code": "MD"
    },
    {
      "city": "Emeryville",
      "latitude": 37.8382,
      "longitude": -122.2932,
      "country_code": "US"
    },
    {
      "city": "Cimişlia",
      "latitude": 46.52,
      "longitude": 28.7842,
      "country_code": "MD"
    },
    {
      "city": "Choix",
      "latitude": 26.7061,
      "longitude": -108.3219,
      "country_code": "MX"
    },
    {
      "city": "Dinnington",
      "latitude": 53.3667,
      "longitude": -1.2,
      "country_code": "GB"
    },
    {
      "city": "Tzucacab",
      "latitude": 20.0708,
      "longitude": -89.0506,
      "country_code": "MX"
    },
    {
      "city": "Anáhuac",
      "latitude": 28.48,
      "longitude": -106.7442,
      "country_code": "MX"
    },
    {
      "city": "Barwell",
      "latitude": 52.5682,
      "longitude": -1.3462,
      "country_code": "GB"
    },
    {
      "city": "Tekit",
      "latitude": 20.5322,
      "longitude": -89.3314,
      "country_code": "MX"
    },
    {
      "city": "Mpigi",
      "latitude": 0.225,
      "longitude": 32.3136,
      "country_code": "UG"
    },
    {
      "city": "Greenhill",
      "latitude": 51.36,
      "longitude": 1.103,
      "country_code": "GB"
    },
    {
      "city": "Robertsport",
      "latitude": 6.7533,
      "longitude": -11.3686,
      "country_code": "LR"
    },
    {
      "city": "Dundo",
      "latitude": -7.38,
      "longitude": 20.83,
      "country_code": "AO"
    },
    {
      "city": "Hasbrouck Heights",
      "latitude": 40.8618,
      "longitude": -74.0741,
      "country_code": "US"
    },
    {
      "city": "Clayton le Moors",
      "latitude": 53.775,
      "longitude": -2.384,
      "country_code": "GB"
    },
    {
      "city": "Dowlais",
      "latitude": 51.7585,
      "longitude": -3.3416,
      "country_code": "GB"
    },
    {
      "city": "Red Bank",
      "latitude": 40.3481,
      "longitude": -74.0672,
      "country_code": "US"
    },
    {
      "city": "Oak Hills",
      "latitude": 45.5403,
      "longitude": -122.8413,
      "country_code": "US"
    },
    {
      "city": "Saint Peters",
      "latitude": 51.3651,
      "longitude": 1.4191,
      "country_code": "GB"
    },
    {
      "city": "Amatlán de los Reyes",
      "latitude": 18.8457,
      "longitude": -96.9149,
      "country_code": "MX"
    },
    {
      "city": "Lydney",
      "latitude": 51.7286,
      "longitude": -2.5285,
      "country_code": "GB"
    },
    {
      "city": "South Miami",
      "latitude": 25.7079,
      "longitude": -80.2952,
      "country_code": "US"
    },
    {
      "city": "Llantwit Major",
      "latitude": 51.4062,
      "longitude": -3.475,
      "country_code": "GB"
    },
    {
      "city": "Sežana",
      "latitude": 45.7,
      "longitude": 13.85,
      "country_code": "SI"
    },
    {
      "city": "Rosario",
      "latitude": -34.3139,
      "longitude": -57.3525,
      "country_code": "UY"
    },
    {
      "city": "Gedling",
      "latitude": 52.975,
      "longitude": -1.081,
      "country_code": "GB"
    },
    {
      "city": "Đà Nẵng",
      "latitude": 16.0748,
      "longitude": 108.224,
      "country_code": "VN"
    },
    {
      "city": "San José el Viejo",
      "latitude": 23.1226,
      "longitude": -109.712,
      "country_code": "MX"
    },
    {
      "city": "Rosário",
      "latitude": -2.94,
      "longitude": -44.26,
      "country_code": "BR"
    },
    {
      "city": "Sigulda",
      "latitude": 57.1539,
      "longitude": 24.8544,
      "country_code": "LV"
    },
    {
      "city": "Catarman",
      "latitude": 12.4989,
      "longitude": 124.6377,
      "country_code": "PH"
    },
    {
      "city": "Kirkwall",
      "latitude": 58.981,
      "longitude": -2.96,
      "country_code": "GB"
    },
    {
      "city": "Clawson",
      "latitude": 42.5367,
      "longitude": -83.1504,
      "country_code": "US"
    },
    {
      "city": "Ferney-Voltaire",
      "latitude": 46.2558,
      "longitude": 6.1081,
      "country_code": "FR"
    },
    {
      "city": "North Wantagh",
      "latitude": 40.6983,
      "longitude": -73.5086,
      "country_code": "US"
    },
    {
      "city": "Berane",
      "latitude": 42.8473,
      "longitude": 19.8694,
      "country_code": "ME"
    },
    {
      "city": "Alum Rock",
      "latitude": 37.3695,
      "longitude": -121.8241,
      "country_code": "US"
    },
    {
      "city": "Launceston",
      "latitude": 50.635,
      "longitude": -4.354,
      "country_code": "GB"
    },
    {
      "city": "Kuldīga",
      "latitude": 56.9672,
      "longitude": 21.97,
      "country_code": "LV"
    },
    {
      "city": "Newman",
      "latitude": 37.3157,
      "longitude": -121.0211,
      "country_code": "US"
    },
    {
      "city": "Birtley",
      "latitude": 54.9,
      "longitude": -1.577,
      "country_code": "GB"
    },
    {
      "city": "Tiptree",
      "latitude": 51.81,
      "longitude": 0.75,
      "country_code": "GB"
    },
    {
      "city": "Ndélé",
      "latitude": 8.4091,
      "longitude": 20.653,
      "country_code": "CF"
    },
    {
      "city": "Woodbridge",
      "latitude": 52.094,
      "longitude": 1.318,
      "country_code": "GB"
    },
    {
      "city": "Fort Liberté",
      "latitude": 19.6656,
      "longitude": -71.8448,
      "country_code": "HT"
    },
    {
      "city": "Salisbury",
      "latitude": 40.7454,
      "longitude": -73.5604,
      "country_code": "US"
    },
    {
      "city": "Boxley",
      "latitude": 51.3024,
      "longitude": 0.5429,
      "country_code": "GB"
    },
    {
      "city": "Bol",
      "latitude": 13.4586,
      "longitude": 14.7147,
      "country_code": "TD"
    },
    {
      "city": "Tocantinópolis",
      "latitude": -6.3196,
      "longitude": -47.42,
      "country_code": "BR"
    },
    {
      "city": "Sidney",
      "latitude": 48.6506,
      "longitude": -123.3986,
      "country_code": "CA"
    },
    {
      "city": "Higuera de Zaragoza",
      "latitude": 25.95,
      "longitude": -109.2833,
      "country_code": "MX"
    },
    {
      "city": "Thornhill",
      "latitude": 53.6622,
      "longitude": -1.6124,
      "country_code": "GB"
    },
    {
      "city": "Alotau",
      "latitude": -10.3167,
      "longitude": 150.4333,
      "country_code": "PG"
    },
    {
      "city": "Brandon",
      "latitude": 52.4474,
      "longitude": 0.6242,
      "country_code": "GB"
    },
    {
      "city": "View Park-Windsor Hills",
      "latitude": 33.9955,
      "longitude": -118.3484,
      "country_code": "US"
    },
    {
      "city": "Mountain Ash",
      "latitude": 51.6814,
      "longitude": -3.3792,
      "country_code": "GB"
    },
    {
      "city": "Tlatlauquitepec",
      "latitude": 19.8528,
      "longitude": -97.4953,
      "country_code": "MX"
    },
    {
      "city": "Delčevo",
      "latitude": 41.9661,
      "longitude": 22.7747,
      "country_code": "MK"
    },
    {
      "city": "Saron",
      "latitude": -33.181,
      "longitude": 19.01,
      "country_code": "ZA"
    },
    {
      "city": "La Junta",
      "latitude": 28.4778,
      "longitude": -107.3317,
      "country_code": "MX"
    },
    {
      "city": "Waipio",
      "latitude": 21.4143,
      "longitude": -157.9965,
      "country_code": "US"
    },
    {
      "city": "Cuauhtémoc",
      "latitude": 19.3281,
      "longitude": -103.6028,
      "country_code": "MX"
    },
    {
      "city": "Yeadon",
      "latitude": 39.9325,
      "longitude": -75.2527,
      "country_code": "US"
    },
    {
      "city": "Wallington",
      "latitude": 40.8535,
      "longitude": -74.1069,
      "country_code": "US"
    },
    {
      "city": "Sanniquellie",
      "latitude": 7.371,
      "longitude": -8.685,
      "country_code": "LR"
    },
    {
      "city": "Cam",
      "latitude": 51.7,
      "longitude": -2.3667,
      "country_code": "GB"
    },
    {
      "city": "Qax",
      "latitude": 41.4194,
      "longitude": 46.9181,
      "country_code": "AZ"
    },
    {
      "city": "Home Gardens",
      "latitude": 33.8784,
      "longitude": -117.5116,
      "country_code": "US"
    },
    {
      "city": "Sandiacre",
      "latitude": 52.923,
      "longitude": -1.291,
      "country_code": "GB"
    },
    {
      "city": "River Edge",
      "latitude": 40.9268,
      "longitude": -74.0387,
      "country_code": "US"
    },
    {
      "city": "Yuscarán",
      "latitude": 13.9433,
      "longitude": -86.8667,
      "country_code": "HN"
    },
    {
      "city": "Halachó",
      "latitude": 20.4764,
      "longitude": -90.0819,
      "country_code": "MX"
    },
    {
      "city": "Signal Hill",
      "latitude": 33.8029,
      "longitude": -118.1681,
      "country_code": "US"
    },
    {
      "city": "Ḩadībū",
      "latitude": 12.6519,
      "longitude": 54.0239,
      "country_code": "YE"
    },
    {
      "city": "Richmond Heights",
      "latitude": 25.6347,
      "longitude": -80.372,
      "country_code": "US"
    },
    {
      "city": "Weißenthurm",
      "latitude": 50.4144,
      "longitude": 7.4606,
      "country_code": "DE"
    },
    {
      "city": "Leven",
      "latitude": 56.195,
      "longitude": -2.9942,
      "country_code": "GB"
    },
    {
      "city": "Concordia",
      "latitude": 23.2883,
      "longitude": -106.0675,
      "country_code": "MX"
    },
    {
      "city": "Leavesden Green",
      "latitude": 51.6967,
      "longitude": -0.3991,
      "country_code": "GB"
    },
    {
      "city": "Glastonbury",
      "latitude": 51.1485,
      "longitude": -2.714,
      "country_code": "GB"
    },
    {
      "city": "Mahadipur",
      "latitude": 24.8566,
      "longitude": 88.1248,
      "country_code": "IN"
    },
    {
      "city": "Dunbar",
      "latitude": 56.0027,
      "longitude": -2.5169,
      "country_code": "GB"
    },
    {
      "city": "Narborough",
      "latitude": 52.5727,
      "longitude": -1.2023,
      "country_code": "GB"
    },
    {
      "city": "Bolton upon Dearne",
      "latitude": 53.5197,
      "longitude": -1.3148,
      "country_code": "GB"
    },
    {
      "city": "Zacapoaxtla",
      "latitude": 19.8833,
      "longitude": -97.5833,
      "country_code": "MX"
    },
    {
      "city": "Cullercoats",
      "latitude": 55.033,
      "longitude": -1.433,
      "country_code": "GB"
    },
    {
      "city": "Yarm",
      "latitude": 54.505,
      "longitude": -1.348,
      "country_code": "GB"
    },
    {
      "city": "Elektrėnai",
      "latitude": 54.7886,
      "longitude": 24.6612,
      "country_code": "LT"
    },
    {
      "city": "Vanimo",
      "latitude": -2.6817,
      "longitude": 141.3014,
      "country_code": "PG"
    },
    {
      "city": "Olaine",
      "latitude": 56.7844,
      "longitude": 23.9369,
      "country_code": "LV"
    },
    {
      "city": "Stopsley",
      "latitude": 51.899,
      "longitude": -0.396,
      "country_code": "GB"
    },
    {
      "city": "Rye",
      "latitude": 50.95,
      "longitude": 0.73,
      "country_code": "GB"
    },
    {
      "city": "Rossmoor",
      "latitude": 33.7886,
      "longitude": -118.0803,
      "country_code": "US"
    },
    {
      "city": "Magas",
      "latitude": 43.1667,
      "longitude": 44.8167,
      "country_code": "RU"
    },
    {
      "city": "Coamo",
      "latitude": 18.0765,
      "longitude": -66.3638,
      "country_code": "PR"
    },
    {
      "city": "Westgate on Sea",
      "latitude": 51.3814,
      "longitude": 1.3381,
      "country_code": "GB"
    },
    {
      "city": "Piedmont",
      "latitude": 37.8226,
      "longitude": -122.23,
      "country_code": "US"
    },
    {
      "city": "Great Burstead",
      "latitude": 51.604,
      "longitude": 0.445,
      "country_code": "GB"
    },
    {
      "city": "Guttenberg",
      "latitude": 40.7927,
      "longitude": -74.0048,
      "country_code": "US"
    },
    {
      "city": "Summit",
      "latitude": 41.7877,
      "longitude": -87.8146,
      "country_code": "US"
    },
    {
      "city": "Rezina",
      "latitude": 47.7492,
      "longitude": 28.9622,
      "country_code": "MD"
    },
    {
      "city": "Loikaw",
      "latitude": 19.6742,
      "longitude": 97.2092,
      "country_code": "MM"
    },
    {
      "city": "Newbold",
      "latitude": 53.2519,
      "longitude": -1.4461,
      "country_code": "GB"
    },
    {
      "city": "Orange Cove",
      "latitude": 36.6211,
      "longitude": -119.3188,
      "country_code": "US"
    },
    {
      "city": "Sundon",
      "latitude": 51.92,
      "longitude": -0.47,
      "country_code": "GB"
    },
    {
      "city": "Woodchurch",
      "latitude": 53.375,
      "longitude": -3.084,
      "country_code": "GB"
    },
    {
      "city": "Biltine",
      "latitude": 14.5333,
      "longitude": 20.9167,
      "country_code": "TD"
    },
    {
      "city": "Suffern",
      "latitude": 41.1138,
      "longitude": -74.1421,
      "country_code": "US"
    },
    {
      "city": "La Trinidad",
      "latitude": 16.4556,
      "longitude": 120.5903,
      "country_code": "PH"
    },
    {
      "city": "Anenii Noi",
      "latitude": 46.8817,
      "longitude": 29.2308,
      "country_code": "MD"
    },
    {
      "city": "Rothwell",
      "latitude": 52.4254,
      "longitude": -0.8029,
      "country_code": "GB"
    },
    {
      "city": "Karuzi",
      "latitude": -3.1,
      "longitude": 30.163,
      "country_code": "BI"
    },
    {
      "city": "Bedwas",
      "latitude": 51.5926,
      "longitude": -3.2061,
      "country_code": "GB"
    },
    {
      "city": "Stonehouse",
      "latitude": 51.7478,
      "longitude": -2.2838,
      "country_code": "GB"
    },
    {
      "city": "Bramley",
      "latitude": 53.4253,
      "longitude": -1.2648,
      "country_code": "GB"
    },
    {
      "city": "Cocorit",
      "latitude": 27.5833,
      "longitude": -109.9667,
      "country_code": "MX"
    },
    {
      "city": "Cross Gates",
      "latitude": 53.8063,
      "longitude": -1.4506,
      "country_code": "GB"
    },
    {
      "city": "Călăraşi",
      "latitude": 47.2544,
      "longitude": 28.3081,
      "country_code": "MD"
    },
    {
      "city": "Vinica",
      "latitude": 41.8828,
      "longitude": 22.5092,
      "country_code": "MK"
    },
    {
      "city": "Pyle",
      "latitude": 51.5291,
      "longitude": -3.6953,
      "country_code": "GB"
    },
    {
      "city": "La Riviera",
      "latitude": 38.5683,
      "longitude": -121.3544,
      "country_code": "US"
    },
    {
      "city": "Ahumada",
      "latitude": 30.6186,
      "longitude": -106.5122,
      "country_code": "MX"
    },
    {
      "city": "Northbrook",
      "latitude": 39.2467,
      "longitude": -84.5796,
      "country_code": "US"
    },
    {
      "city": "Stainforth",
      "latitude": 53.5958,
      "longitude": -1.0253,
      "country_code": "GB"
    },
    {
      "city": "Bucksburn",
      "latitude": 57.177,
      "longitude": -2.175,
      "country_code": "GB"
    },
    {
      "city": "West Auckland",
      "latitude": 54.6318,
      "longitude": -1.721,
      "country_code": "GB"
    },
    {
      "city": "Marlborough",
      "latitude": 51.42,
      "longitude": -1.73,
      "country_code": "GB"
    },
    {
      "city": "Maili",
      "latitude": 21.4134,
      "longitude": -158.1702,
      "country_code": "US"
    },
    {
      "city": "Citrus",
      "latitude": 34.1161,
      "longitude": -117.889,
      "country_code": "US"
    },
    {
      "city": "Izola",
      "latitude": 45.5395,
      "longitude": 13.6604,
      "country_code": "SI"
    },
    {
      "city": "Little Ferry",
      "latitude": 40.8463,
      "longitude": -74.0388,
      "country_code": "US"
    },
    {
      "city": "Gowerton",
      "latitude": 51.648,
      "longitude": -4.043,
      "country_code": "GB"
    },
    {
      "city": "Daşkəsən",
      "latitude": 40.5181,
      "longitude": 46.0828,
      "country_code": "AZ"
    },
    {
      "city": "Shifnal",
      "latitude": 52.665,
      "longitude": -2.373,
      "country_code": "GB"
    },
    {
      "city": "Graçanicë",
      "latitude": 42.6,
      "longitude": 21.2,
      "country_code": "XK"
    },
    {
      "city": "Bela Crkva",
      "latitude": 44.8975,
      "longitude": 21.4172,
      "country_code": "RS"
    },
    {
      "city": "Naranja",
      "latitude": 25.5164,
      "longitude": -80.4221,
      "country_code": "US"
    },
    {
      "city": "Darby",
      "latitude": 39.921,
      "longitude": -75.2611,
      "country_code": "US"
    },
    {
      "city": "Oban",
      "latitude": 56.412,
      "longitude": -5.472,
      "country_code": "GB"
    },
    {
      "city": "Kavaratti",
      "latitude": 10.5626,
      "longitude": 72.6369,
      "country_code": "IN"
    },
    {
      "city": "El Higo",
      "latitude": 21.7667,
      "longitude": -98.45,
      "country_code": "MX"
    },
    {
      "city": "Jõhvi",
      "latitude": 59.3575,
      "longitude": 27.4122,
      "country_code": "EE"
    },
    {
      "city": "Latchford",
      "latitude": 53.3796,
      "longitude": -2.5645,
      "country_code": "GB"
    },
    {
      "city": "Lansdowne",
      "latitude": 39.9408,
      "longitude": -75.276,
      "country_code": "US"
    },
    {
      "city": "Harworth",
      "latitude": 53.417,
      "longitude": -1.075,
      "country_code": "GB"
    },
    {
      "city": "Guadalupe Yancuictlalpan",
      "latitude": 19.1831,
      "longitude": -99.4583,
      "country_code": "MX"
    },
    {
      "city": "Al Maḩwīt",
      "latitude": 15.4694,
      "longitude": 43.5453,
      "country_code": "YE"
    },
    {
      "city": "Ada",
      "latitude": 45.8014,
      "longitude": 20.1222,
      "country_code": "RS"
    },
    {
      "city": "Greenville",
      "latitude": 5.0111,
      "longitude": -9.0388,
      "country_code": "LR"
    },
    {
      "city": "Lake Stickney",
      "latitude": 47.8709,
      "longitude": -122.2596,
      "country_code": "US"
    },
    {
      "city": "North Lindenhurst",
      "latitude": 40.7072,
      "longitude": -73.3859,
      "country_code": "US"
    },
    {
      "city": "Kantunilkín",
      "latitude": 21.1,
      "longitude": -87.4833,
      "country_code": "MX"
    },
    {
      "city": "Biržai",
      "latitude": 56.2,
      "longitude": 24.75,
      "country_code": "LT"
    },
    {
      "city": "Kirundo",
      "latitude": -2.5833,
      "longitude": 30.1,
      "country_code": "BI"
    },
    {
      "city": "Haapsalu",
      "latitude": 58.9469,
      "longitude": 23.5369,
      "country_code": "EE"
    },
    {
      "city": "Gorleston-on-Sea",
      "latitude": 52.5757,
      "longitude": 1.7235,
      "country_code": "GB"
    },
    {
      "city": "Penryn",
      "latitude": 50.169,
      "longitude": -5.107,
      "country_code": "GB"
    },
    {
      "city": "Trat",
      "latitude": 12.2417,
      "longitude": 102.5125,
      "country_code": "TH"
    },
    {
      "city": "Sarnen",
      "latitude": 46.8969,
      "longitude": 8.2469,
      "country_code": "CH"
    },
    {
      "city": "Phangnga",
      "latitude": 8.4644,
      "longitude": 98.5317,
      "country_code": "TH"
    },
    {
      "city": "West Perrine",
      "latitude": 25.6061,
      "longitude": -80.3639,
      "country_code": "US"
    },
    {
      "city": "Filadelfia",
      "latitude": -22.34,
      "longitude": -60.03,
      "country_code": "PY"
    },
    {
      "city": "Jacinto City",
      "latitude": 29.7663,
      "longitude": -95.241,
      "country_code": "US"
    },
    {
      "city": "Santa María Huatulco",
      "latitude": 15.85,
      "longitude": -96.3333,
      "country_code": "MX"
    },
    {
      "city": "Church",
      "latitude": 53.755,
      "longitude": -2.386,
      "country_code": "GB"
    },
    {
      "city": "Anstey",
      "latitude": 52.6715,
      "longitude": -1.1955,
      "country_code": "GB"
    },
    {
      "city": "Ordubad",
      "latitude": 38.9047,
      "longitude": 46.0231,
      "country_code": "AZ"
    },
    {
      "city": "Lascano",
      "latitude": -33.6731,
      "longitude": -54.2078,
      "country_code": "UY"
    },
    {
      "city": "Wickersley",
      "latitude": 53.4199,
      "longitude": -1.2792,
      "country_code": "GB"
    },
    {
      "city": "Jurbarkas",
      "latitude": 55.0825,
      "longitude": 22.7714,
      "country_code": "LT"
    },
    {
      "city": "East Whittier",
      "latitude": 33.9244,
      "longitude": -117.9887,
      "country_code": "US"
    },
    {
      "city": "Cromer",
      "latitude": 52.931,
      "longitude": 1.302,
      "country_code": "GB"
    },
    {
      "city": "Butha-Buthe",
      "latitude": -28.7833,
      "longitude": 28.2333,
      "country_code": "LS"
    },
    {
      "city": "Saldus",
      "latitude": 56.6667,
      "longitude": 22.4936,
      "country_code": "LV"
    },
    {
      "city": "Altdorf",
      "latitude": 46.8806,
      "longitude": 8.6394,
      "country_code": "CH"
    },
    {
      "city": "Wistaston",
      "latitude": 53.0821,
      "longitude": -2.4747,
      "country_code": "GB"
    },
    {
      "city": "Cramond",
      "latitude": 55.9797,
      "longitude": -3.3007,
      "country_code": "GB"
    },
    {
      "city": "Roatán",
      "latitude": 16.33,
      "longitude": -86.519,
      "country_code": "HN"
    },
    {
      "city": "Sliema",
      "latitude": 35.9125,
      "longitude": 14.5019,
      "country_code": "MT"
    },
    {
      "city": "Kanjiža",
      "latitude": 46.0667,
      "longitude": 20.05,
      "country_code": "RS"
    },
    {
      "city": "Great Neck",
      "latitude": 40.8028,
      "longitude": -73.7332,
      "country_code": "US"
    },
    {
      "city": "Timberlane",
      "latitude": 29.8781,
      "longitude": -90.0303,
      "country_code": "US"
    },
    {
      "city": "West Haverstraw",
      "latitude": 41.2063,
      "longitude": -73.9883,
      "country_code": "US"
    },
    {
      "city": "Ondjiva",
      "latitude": -17.0667,
      "longitude": 15.7333,
      "country_code": "AO"
    },
    {
      "city": "Bound Brook",
      "latitude": 40.5676,
      "longitude": -74.5383,
      "country_code": "US"
    },
    {
      "city": "Birao",
      "latitude": 10.2837,
      "longitude": 22.7833,
      "country_code": "CF"
    },
    {
      "city": "Kirkham",
      "latitude": 53.782,
      "longitude": -2.87,
      "country_code": "GB"
    },
    {
      "city": "Buctzotz",
      "latitude": 21.2017,
      "longitude": -88.7928,
      "country_code": "MX"
    },
    {
      "city": "Radlett",
      "latitude": 51.685,
      "longitude": -0.318,
      "country_code": "GB"
    },
    {
      "city": "Nisporeni",
      "latitude": 47.0814,
      "longitude": 28.1783,
      "country_code": "MD"
    },
    {
      "city": "Vrnjačka Banja",
      "latitude": 43.6167,
      "longitude": 20.9,
      "country_code": "RS"
    },
    {
      "city": "Godmanchester",
      "latitude": 52.3176,
      "longitude": -0.1725,
      "country_code": "GB"
    },
    {
      "city": "Clowne",
      "latitude": 53.276,
      "longitude": -1.263,
      "country_code": "GB"
    },
    {
      "city": "Mojkovac",
      "latitude": 42.96,
      "longitude": 19.58,
      "country_code": "ME"
    },
    {
      "city": "Muyinga",
      "latitude": -2.85,
      "longitude": 30.3333,
      "country_code": "BI"
    },
    {
      "city": "Lincoln Village",
      "latitude": 39.9532,
      "longitude": -83.1314,
      "country_code": "US"
    },
    {
      "city": "Coppull",
      "latitude": 53.62,
      "longitude": -2.661,
      "country_code": "GB"
    },
    {
      "city": "Del Aire",
      "latitude": 33.9168,
      "longitude": -118.3693,
      "country_code": "US"
    },
    {
      "city": "Crieff",
      "latitude": 56.3757,
      "longitude": -3.8426,
      "country_code": "GB"
    },
    {
      "city": "San Francisco del Mar",
      "latitude": 16.3394,
      "longitude": -94.515,
      "country_code": "MX"
    },
    {
      "city": "Tarīn Kōṯ",
      "latitude": 32.6333,
      "longitude": 65.8667,
      "country_code": "AF"
    },
    {
      "city": "Hucknall under Huthwaite",
      "latitude": 53.125,
      "longitude": -1.301,
      "country_code": "GB"
    },
    {
      "city": "Westgate",
      "latitude": 26.6994,
      "longitude": -80.0989,
      "country_code": "US"
    },
    {
      "city": "Altar",
      "latitude": 30.7136,
      "longitude": -111.8353,
      "country_code": "MX"
    },
    {
      "city": "Capitola",
      "latitude": 36.9772,
      "longitude": -121.9538,
      "country_code": "US"
    },
    {
      "city": "Castillos",
      "latitude": -34.1989,
      "longitude": -53.8575,
      "country_code": "UY"
    },
    {
      "city": "Frampton Cotterell",
      "latitude": 51.54,
      "longitude": -2.48,
      "country_code": "GB"
    },
    {
      "city": "Whetstone",
      "latitude": 52.5724,
      "longitude": -1.1799,
      "country_code": "GB"
    },
    {
      "city": "Thrapston",
      "latitude": 52.397,
      "longitude": -0.538,
      "country_code": "GB"
    },
    {
      "city": "Cacheu",
      "latitude": 12.278,
      "longitude": -16.165,
      "country_code": "GW"
    },
    {
      "city": "Watervliet",
      "latitude": 42.7243,
      "longitude": -73.7068,
      "country_code": "US"
    },
    {
      "city": "Vilkaviškis",
      "latitude": 54.6667,
      "longitude": 23.0333,
      "country_code": "LT"
    },
    {
      "city": "Celestún",
      "latitude": 20.8583,
      "longitude": -90.4,
      "country_code": "MX"
    },
    {
      "city": "Hopelchén",
      "latitude": 19.7444,
      "longitude": -89.8453,
      "country_code": "MX"
    },
    {
      "city": "Duntocher",
      "latitude": 55.924,
      "longitude": -4.417,
      "country_code": "GB"
    },
    {
      "city": "Aintree",
      "latitude": 53.4793,
      "longitude": -2.9373,
      "country_code": "GB"
    },
    {
      "city": "East Rockaway",
      "latitude": 40.6432,
      "longitude": -73.6672,
      "country_code": "US"
    },
    {
      "city": "New Hyde Park",
      "latitude": 40.7324,
      "longitude": -73.6858,
      "country_code": "US"
    },
    {
      "city": "Inwood",
      "latitude": 40.6218,
      "longitude": -73.7507,
      "country_code": "US"
    },
    {
      "city": "Nueva Ocotepeque",
      "latitude": 14.4333,
      "longitude": -89.1833,
      "country_code": "HN"
    },
    {
      "city": "Marina del Rey",
      "latitude": 33.9765,
      "longitude": -118.4486,
      "country_code": "US"
    },
    {
      "city": "Huningue",
      "latitude": 47.5914,
      "longitude": 7.5831,
      "country_code": "FR"
    },
    {
      "city": "Charter Oak",
      "latitude": 34.1025,
      "longitude": -117.8564,
      "country_code": "US"
    },
    {
      "city": "Partington",
      "latitude": 53.42,
      "longitude": -2.43,
      "country_code": "GB"
    },
    {
      "city": "Novobërdë",
      "latitude": 42.6,
      "longitude": 21.4333,
      "country_code": "XK"
    },
    {
      "city": "Makamba",
      "latitude": -4.1333,
      "longitude": 29.8,
      "country_code": "BI"
    },
    {
      "city": "Highbridge",
      "latitude": 51.2189,
      "longitude": -2.973,
      "country_code": "GB"
    },
    {
      "city": "Pembroke",
      "latitude": 51.676,
      "longitude": -4.9158,
      "country_code": "GB"
    },
    {
      "city": "Tshabong",
      "latitude": -26.02,
      "longitude": 22.4056,
      "country_code": "BW"
    },
    {
      "city": "Thames Ditton",
      "latitude": 51.389,
      "longitude": -0.331,
      "country_code": "GB"
    },
    {
      "city": "Brechin",
      "latitude": 56.7299,
      "longitude": -2.6553,
      "country_code": "GB"
    },
    {
      "city": "Djambala",
      "latitude": -2.55,
      "longitude": 14.75,
      "country_code": "CG"
    },
    {
      "city": "Keansburg",
      "latitude": 40.4471,
      "longitude": -74.1316,
      "country_code": "US"
    },
    {
      "city": "Llantwit Fardre",
      "latitude": 51.5578,
      "longitude": -3.3341,
      "country_code": "GB"
    },
    {
      "city": "Maywood",
      "latitude": 40.9025,
      "longitude": -74.0634,
      "country_code": "US"
    },
    {
      "city": "Barrowford",
      "latitude": 53.851,
      "longitude": -2.221,
      "country_code": "GB"
    },
    {
      "city": "Pedra Badejo",
      "latitude": 15.1375,
      "longitude": -23.5333,
      "country_code": "CV"
    },
    {
      "city": "Littleborough",
      "latitude": 53.644,
      "longitude": -2.098,
      "country_code": "GB"
    },
    {
      "city": "Sherburn in Elmet",
      "latitude": 53.7973,
      "longitude": -1.2331,
      "country_code": "GB"
    },
    {
      "city": "Kundiawa",
      "latitude": -6.023,
      "longitude": 144.96,
      "country_code": "PG"
    },
    {
      "city": "Dinas Powys",
      "latitude": 51.4331,
      "longitude": -3.2134,
      "country_code": "GB"
    },
    {
      "city": "Ikeja",
      "latitude": 6.5965,
      "longitude": 3.3421,
      "country_code": "NG"
    },
    {
      "city": "Pájaros",
      "latitude": 18.3609,
      "longitude": -66.2184,
      "country_code": "PR"
    },
    {
      "city": "Withernsea",
      "latitude": 53.7285,
      "longitude": 0.0382,
      "country_code": "GB"
    },
    {
      "city": "Brookdale",
      "latitude": 40.8348,
      "longitude": -74.1798,
      "country_code": "US"
    },
    {
      "city": "Wadsley",
      "latitude": 53.41,
      "longitude": -1.52,
      "country_code": "GB"
    },
    {
      "city": "Stonegate",
      "latitude": 39.5356,
      "longitude": -104.8033,
      "country_code": "US"
    },
    {
      "city": "Wardle",
      "latitude": 53.647,
      "longitude": -2.132,
      "country_code": "GB"
    },
    {
      "city": "Bois-des-Filion",
      "latitude": 45.6667,
      "longitude": -73.75,
      "country_code": "CA"
    },
    {
      "city": "Coral Hills",
      "latitude": 38.8709,
      "longitude": -76.9234,
      "country_code": "US"
    },
    {
      "city": "Ojo Caliente",
      "latitude": 21.8606,
      "longitude": -102.684,
      "country_code": "MX"
    },
    {
      "city": "Govan",
      "latitude": 55.8615,
      "longitude": -4.3083,
      "country_code": "GB"
    },
    {
      "city": "Rožaje",
      "latitude": 42.8442,
      "longitude": 20.1679,
      "country_code": "ME"
    },
    {
      "city": "Aiea",
      "latitude": 21.3865,
      "longitude": -157.9232,
      "country_code": "US"
    },
    {
      "city": "Hani i Elezit",
      "latitude": 42.1475,
      "longitude": 21.2992,
      "country_code": "XK"
    },
    {
      "city": "Bladensburg",
      "latitude": 38.9424,
      "longitude": -76.9263,
      "country_code": "US"
    },
    {
      "city": "Bauska",
      "latitude": 56.4067,
      "longitude": 24.1875,
      "country_code": "LV"
    },
    {
      "city": "Thyolo",
      "latitude": -16.0667,
      "longitude": 35.1333,
      "country_code": "MW"
    },
    {
      "city": "Temascal",
      "latitude": 18.2394,
      "longitude": -96.4031,
      "country_code": "MX"
    },
    {
      "city": "Sabana Grande",
      "latitude": 18.0821,
      "longitude": -66.9673,
      "country_code": "PR"
    },
    {
      "city": "Kirriemuir",
      "latitude": 56.6692,
      "longitude": -3.0051,
      "country_code": "GB"
    },
    {
      "city": "Porth",
      "latitude": 51.6138,
      "longitude": -3.4095,
      "country_code": "GB"
    },
    {
      "city": "Tettenhall",
      "latitude": 52.5983,
      "longitude": -2.168,
      "country_code": "GB"
    },
    {
      "city": "North Kensington",
      "latitude": 39.0392,
      "longitude": -77.0723,
      "country_code": "US"
    },
    {
      "city": "Harlescott",
      "latitude": 52.7365,
      "longitude": -2.7226,
      "country_code": "GB"
    },
    {
      "city": "Woodlyn",
      "latitude": 39.8774,
      "longitude": -75.3445,
      "country_code": "US"
    },
    {
      "city": "Leisure World",
      "latitude": 39.1023,
      "longitude": -77.0691,
      "country_code": "US"
    },
    {
      "city": "Rîşcani",
      "latitude": 47.9561,
      "longitude": 27.5536,
      "country_code": "MD"
    },
    {
      "city": "Long Ditton",
      "latitude": 51.385,
      "longitude": -0.321,
      "country_code": "GB"
    },
    {
      "city": "Sawston",
      "latitude": 52.1247,
      "longitude": 0.1731,
      "country_code": "GB"
    },
    {
      "city": "Dobele",
      "latitude": 56.6258,
      "longitude": 23.2811,
      "country_code": "LV"
    },
    {
      "city": "Wood-Ridge",
      "latitude": 40.8507,
      "longitude": -74.0878,
      "country_code": "US"
    },
    {
      "city": "Talsi",
      "latitude": 57.2447,
      "longitude": 22.5889,
      "country_code": "LV"
    },
    {
      "city": "Ashbourne",
      "latitude": 53.016,
      "longitude": -1.731,
      "country_code": "GB"
    },
    {
      "city": "Las Tablas",
      "latitude": 7.7667,
      "longitude": -80.2833,
      "country_code": "PA"
    },
    {
      "city": "Brentwood",
      "latitude": 40.3734,
      "longitude": -79.9757,
      "country_code": "US"
    },
    {
      "city": "Kasane",
      "latitude": -17.7983,
      "longitude": 25.1536,
      "country_code": "BW"
    },
    {
      "city": "Katakwi",
      "latitude": 1.8911,
      "longitude": 33.9661,
      "country_code": "UG"
    },
    {
      "city": "Alcester",
      "latitude": 52.215,
      "longitude": -1.876,
      "country_code": "GB"
    },
    {
      "city": "Plainedge",
      "latitude": 40.724,
      "longitude": -73.477,
      "country_code": "US"
    },
    {
      "city": "Anykščiai",
      "latitude": 55.5344,
      "longitude": 25.1072,
      "country_code": "LT"
    },
    {
      "city": "Evinayong",
      "latitude": 1.45,
      "longitude": 10.5667,
      "country_code": "GQ"
    },
    {
      "city": "Žabalj",
      "latitude": 45.3667,
      "longitude": 20.0667,
      "country_code": "RS"
    },
    {
      "city": "Boulder Hill",
      "latitude": 41.7112,
      "longitude": -88.3353,
      "country_code": "US"
    },
    {
      "city": "South Amboy",
      "latitude": 40.4852,
      "longitude": -74.2831,
      "country_code": "US"
    },
    {
      "city": "Dursley",
      "latitude": 51.6811,
      "longitude": -2.3543,
      "country_code": "GB"
    },
    {
      "city": "Stepps",
      "latitude": 55.8908,
      "longitude": -4.1522,
      "country_code": "GB"
    },
    {
      "city": "Lerwick",
      "latitude": 60.155,
      "longitude": -1.145,
      "country_code": "GB"
    },
    {
      "city": "Sauce",
      "latitude": -34.6469,
      "longitude": -56.0628,
      "country_code": "UY"
    },
    {
      "city": "Stans",
      "latitude": 46.9594,
      "longitude": 8.3667,
      "country_code": "CH"
    },
    {
      "city": "Saltburn-by-the-Sea",
      "latitude": 54.5828,
      "longitude": -0.9732,
      "country_code": "GB"
    },
    {
      "city": "Billinge",
      "latitude": 53.4932,
      "longitude": -2.7129,
      "country_code": "GB"
    },
    {
      "city": "Dangriga",
      "latitude": 16.9667,
      "longitude": -88.2167,
      "country_code": "BZ"
    },
    {
      "city": "Derby",
      "latitude": 39.8401,
      "longitude": -104.9171,
      "country_code": "US"
    },
    {
      "city": "Broughton",
      "latitude": 53.5638,
      "longitude": -0.5465,
      "country_code": "GB"
    },
    {
      "city": "Inírida",
      "latitude": 3.854,
      "longitude": -67.9061,
      "country_code": "CO"
    },
    {
      "city": "Ewo",
      "latitude": -0.8667,
      "longitude": 14.8167,
      "country_code": "CG"
    },
    {
      "city": "Filey",
      "latitude": 54.2101,
      "longitude": -0.2893,
      "country_code": "GB"
    },
    {
      "city": "Manatuto",
      "latitude": -8.5167,
      "longitude": 126.0167,
      "country_code": "TL"
    },
    {
      "city": "Odžaci",
      "latitude": 45.5167,
      "longitude": 19.2667,
      "country_code": "RS"
    },
    {
      "city": "Cove",
      "latitude": 51.2965,
      "longitude": -0.7939,
      "country_code": "GB"
    },
    {
      "city": "Leonia",
      "latitude": 40.8638,
      "longitude": -73.9899,
      "country_code": "US"
    },
    {
      "city": "Gizo",
      "latitude": -8.1,
      "longitude": 156.85,
      "country_code": "SB"
    },
    {
      "city": "Stansted Mountfitchet",
      "latitude": 51.898,
      "longitude": 0.198,
      "country_code": "GB"
    },
    {
      "city": "Farmingdale",
      "latitude": 40.7328,
      "longitude": -73.4465,
      "country_code": "US"
    },
    {
      "city": "Wentworthville",
      "latitude": -33.8233,
      "longitude": 150.9678,
      "country_code": "AU"
    },
    {
      "city": "Stony Brook University",
      "latitude": 40.9099,
      "longitude": -73.1213,
      "country_code": "US"
    },
    {
      "city": "Lexden",
      "latitude": 51.8833,
      "longitude": 0.8667,
      "country_code": "GB"
    },
    {
      "city": "Sremski Karlovci",
      "latitude": 45.2,
      "longitude": 19.9333,
      "country_code": "RS"
    },
    {
      "city": "Temozon",
      "latitude": 20.8042,
      "longitude": -88.2028,
      "country_code": "MX"
    },
    {
      "city": "Gleno",
      "latitude": -8.7239,
      "longitude": 125.4361,
      "country_code": "TL"
    },
    {
      "city": "Budleigh Salterton",
      "latitude": 50.6284,
      "longitude": -3.3205,
      "country_code": "GB"
    },
    {
      "city": "Long Ashton",
      "latitude": 51.43,
      "longitude": -2.65,
      "country_code": "GB"
    },
    {
      "city": "Mokhotlong",
      "latitude": -29.2885,
      "longitude": 29.0656,
      "country_code": "LS"
    },
    {
      "city": "Cheddar",
      "latitude": 51.279,
      "longitude": -2.778,
      "country_code": "GB"
    },
    {
      "city": "Pontardawe",
      "latitude": 51.722,
      "longitude": -3.851,
      "country_code": "GB"
    },
    {
      "city": "Corozal",
      "latitude": 18.4,
      "longitude": -88.4,
      "country_code": "BZ"
    },
    {
      "city": "Gavarr",
      "latitude": 40.3667,
      "longitude": 45.1333,
      "country_code": "AM"
    },
    {
      "city": "Dore",
      "latitude": 53.3268,
      "longitude": -1.5345,
      "country_code": "GB"
    },
    {
      "city": "North Petherton",
      "latitude": 51.091,
      "longitude": -3.013,
      "country_code": "GB"
    },
    {
      "city": "Egham",
      "latitude": 51.429,
      "longitude": -0.548,
      "country_code": "GB"
    },
    {
      "city": "Collingdale",
      "latitude": 39.9151,
      "longitude": -75.2776,
      "country_code": "US"
    },
    {
      "city": "Pontardulais",
      "latitude": 51.71,
      "longitude": -4.04,
      "country_code": "GB"
    },
    {
      "city": "Saynshand",
      "latitude": 44.8917,
      "longitude": 110.1367,
      "country_code": "MN"
    },
    {
      "city": "Joniškis",
      "latitude": 56.2433,
      "longitude": 23.6179,
      "country_code": "LT"
    },
    {
      "city": "Eichwalde",
      "latitude": 52.3667,
      "longitude": 13.6167,
      "country_code": "DE"
    },
    {
      "city": "Frimley",
      "latitude": 51.3143,
      "longitude": -0.7387,
      "country_code": "GB"
    },
    {
      "city": "August",
      "latitude": 37.9797,
      "longitude": -121.2625,
      "country_code": "US"
    },
    {
      "city": "Leona Vicario",
      "latitude": 20.9922,
      "longitude": -87.2028,
      "country_code": "MX"
    },
    {
      "city": "West Miami",
      "latitude": 25.7578,
      "longitude": -80.2969,
      "country_code": "US"
    },
    {
      "city": "New Square",
      "latitude": 41.141,
      "longitude": -74.0294,
      "country_code": "US"
    },
    {
      "city": "Glodeni",
      "latitude": 47.7708,
      "longitude": 27.5144,
      "country_code": "MD"
    },
    {
      "city": "Folsom",
      "latitude": 39.8924,
      "longitude": -75.3287,
      "country_code": "US"
    },
    {
      "city": "Bécal",
      "latitude": 20.4414,
      "longitude": -90.0275,
      "country_code": "MX"
    },
    {
      "city": "Great Wakering",
      "latitude": 51.5516,
      "longitude": 0.8165,
      "country_code": "GB"
    },
    {
      "city": "Paide",
      "latitude": 58.8833,
      "longitude": 25.5667,
      "country_code": "EE"
    },
    {
      "city": "Santo Domingo Este",
      "latitude": 18.4885,
      "longitude": -69.8571,
      "country_code": "DO"
    },
    {
      "city": "Griffithstown",
      "latitude": 51.6853,
      "longitude": -3.0284,
      "country_code": "GB"
    },
    {
      "city": "Aleg",
      "latitude": 17.058,
      "longitude": -13.909,
      "country_code": "MR"
    },
    {
      "city": "Littlemore",
      "latitude": 51.72,
      "longitude": -1.227,
      "country_code": "GB"
    },
    {
      "city": "Swissvale",
      "latitude": 40.4207,
      "longitude": -79.8858,
      "country_code": "US"
    },
    {
      "city": "South San Gabriel",
      "latitude": 34.0489,
      "longitude": -118.0961,
      "country_code": "US"
    },
    {
      "city": "Prienai",
      "latitude": 54.6333,
      "longitude": 23.9417,
      "country_code": "LT"
    },
    {
      "city": "Audubon",
      "latitude": 39.8906,
      "longitude": -75.0722,
      "country_code": "US"
    },
    {
      "city": "Heage",
      "latitude": 53.05,
      "longitude": -1.447,
      "country_code": "GB"
    },
    {
      "city": "Handforth",
      "latitude": 53.35,
      "longitude": -2.216,
      "country_code": "GB"
    },
    {
      "city": "Galleywood",
      "latitude": 51.697,
      "longitude": 0.474,
      "country_code": "GB"
    },
    {
      "city": "Seven Corners",
      "latitude": 38.8658,
      "longitude": -77.1445,
      "country_code": "US"
    },
    {
      "city": "Greenbriar",
      "latitude": 38.8717,
      "longitude": -77.397,
      "country_code": "US"
    },
    {
      "city": "West Athens",
      "latitude": 33.9235,
      "longitude": -118.3033,
      "country_code": "US"
    },
    {
      "city": "Four Corners",
      "latitude": 39.0235,
      "longitude": -77.0102,
      "country_code": "US"
    },
    {
      "city": "Harleston",
      "latitude": 52.4024,
      "longitude": 1.2996,
      "country_code": "GB"
    },
    {
      "city": "San Antonino Castillo Velasco",
      "latitude": 16.8031,
      "longitude": -96.6839,
      "country_code": "MX"
    },
    {
      "city": "Basarabeasca",
      "latitude": 46.3333,
      "longitude": 28.9667,
      "country_code": "MD"
    },
    {
      "city": "Teaoraereke",
      "latitude": 1.3333,
      "longitude": 173,
      "country_code": "KI"
    },
    {
      "city": "Zərdab",
      "latitude": 40.2111,
      "longitude": 47.7108,
      "country_code": "AZ"
    },
    {
      "city": "Tadcaster",
      "latitude": 53.8852,
      "longitude": -1.262,
      "country_code": "GB"
    },
    {
      "city": "Great Meols",
      "latitude": 53.4014,
      "longitude": -3.1553,
      "country_code": "GB"
    },
    {
      "city": "Greymouth",
      "latitude": -42.4667,
      "longitude": 171.2,
      "country_code": "NZ"
    },
    {
      "city": "Varėna",
      "latitude": 54.2111,
      "longitude": 24.5722,
      "country_code": "LT"
    },
    {
      "city": "Malverne",
      "latitude": 40.6746,
      "longitude": -73.6721,
      "country_code": "US"
    },
    {
      "city": "Amble",
      "latitude": 55.3306,
      "longitude": -1.5783,
      "country_code": "GB"
    },
    {
      "city": "Wotton-under-Edge",
      "latitude": 51.638,
      "longitude": -2.349,
      "country_code": "GB"
    },
    {
      "city": "Paulton",
      "latitude": 51.3069,
      "longitude": -2.5027,
      "country_code": "GB"
    },
    {
      "city": "Stotfold",
      "latitude": 52.018,
      "longitude": -0.228,
      "country_code": "GB"
    },
    {
      "city": "Midway City",
      "latitude": 33.7451,
      "longitude": -117.9849,
      "country_code": "US"
    },
    {
      "city": "Brokopondo",
      "latitude": 5.0404,
      "longitude": -55.02,
      "country_code": "SR"
    },
    {
      "city": "Aibonito",
      "latitude": 18.1398,
      "longitude": -66.2659,
      "country_code": "PR"
    },
    {
      "city": "Kalibo",
      "latitude": 11.7086,
      "longitude": 122.3648,
      "country_code": "PH"
    },
    {
      "city": "Hoylake",
      "latitude": 53.39,
      "longitude": -3.18,
      "country_code": "GB"
    },
    {
      "city": "Bogota",
      "latitude": 40.875,
      "longitude": -74.0293,
      "country_code": "US"
    },
    {
      "city": "Harwood Heights",
      "latitude": 41.9663,
      "longitude": -87.8057,
      "country_code": "US"
    },
    {
      "city": "Grandview Heights",
      "latitude": 39.9793,
      "longitude": -83.0408,
      "country_code": "US"
    },
    {
      "city": "Puerto San Carlos",
      "latitude": 24.7894,
      "longitude": -112.1083,
      "country_code": "MX"
    },
    {
      "city": "Sorø",
      "latitude": 55.433,
      "longitude": 11.5667,
      "country_code": "DK"
    },
    {
      "city": "Haledon",
      "latitude": 40.9363,
      "longitude": -74.1887,
      "country_code": "US"
    },
    {
      "city": "Dormont",
      "latitude": 40.3941,
      "longitude": -80.0377,
      "country_code": "US"
    },
    {
      "city": "Arlesey",
      "latitude": 52.007,
      "longitude": -0.2654,
      "country_code": "GB"
    },
    {
      "city": "Wincanton",
      "latitude": 51.0559,
      "longitude": -2.4102,
      "country_code": "GB"
    },
    {
      "city": "Tayoltita",
      "latitude": 24.0833,
      "longitude": -105.9333,
      "country_code": "MX"
    },
    {
      "city": "Tetbury",
      "latitude": 51.636,
      "longitude": -2.158,
      "country_code": "GB"
    },
    {
      "city": "Balakən",
      "latitude": 41.7233,
      "longitude": 46.3919,
      "country_code": "AZ"
    },
    {
      "city": "Teabo",
      "latitude": 20.3997,
      "longitude": -89.2844,
      "country_code": "MX"
    },
    {
      "city": "Kelmė",
      "latitude": 55.6333,
      "longitude": 22.9333,
      "country_code": "LT"
    },
    {
      "city": "Yeghegnadzor",
      "latitude": 39.7667,
      "longitude": 45.35,
      "country_code": "AM"
    },
    {
      "city": "Ormesby",
      "latitude": 54.5492,
      "longitude": -1.1817,
      "country_code": "GB"
    },
    {
      "city": "Hengoed",
      "latitude": 51.65,
      "longitude": -3.23,
      "country_code": "GB"
    },
    {
      "city": "Ndalatando",
      "latitude": -9.3,
      "longitude": 14.9167,
      "country_code": "AO"
    },
    {
      "city": "Cheviot",
      "latitude": 39.1577,
      "longitude": -84.6139,
      "country_code": "US"
    },
    {
      "city": "Brynmawr",
      "latitude": 51.796,
      "longitude": -3.183,
      "country_code": "GB"
    },
    {
      "city": "Magor",
      "latitude": 51.5798,
      "longitude": -2.8312,
      "country_code": "GB"
    },
    {
      "city": "Beočin",
      "latitude": 45.1922,
      "longitude": 19.7203,
      "country_code": "RS"
    },
    {
      "city": "Qobustan",
      "latitude": 40.5333,
      "longitude": 48.9333,
      "country_code": "AZ"
    },
    {
      "city": "Soroti",
      "latitude": 1.6833,
      "longitude": 33.6167,
      "country_code": "UG"
    },
    {
      "city": "São Filipe",
      "latitude": 14.8966,
      "longitude": -24.4955,
      "country_code": "CV"
    },
    {
      "city": "Piste",
      "latitude": 20.6981,
      "longitude": -88.5886,
      "country_code": "MX"
    },
    {
      "city": "Alondra Park",
      "latitude": 33.8885,
      "longitude": -118.335,
      "country_code": "US"
    },
    {
      "city": "Mount Rainier",
      "latitude": 38.9423,
      "longitude": -76.9645,
      "country_code": "US"
    },
    {
      "city": "Maplewood",
      "latitude": 38.6121,
      "longitude": -90.324,
      "country_code": "US"
    },
    {
      "city": "Algodones",
      "latitude": 32.7153,
      "longitude": -114.7289,
      "country_code": "MX"
    },
    {
      "city": "Port Maria",
      "latitude": 18.3703,
      "longitude": -76.8903,
      "country_code": "JM"
    },
    {
      "city": "Ludza",
      "latitude": 56.5439,
      "longitude": 27.7211,
      "country_code": "LV"
    },
    {
      "city": "Guadalupe y Calvo",
      "latitude": 26.095,
      "longitude": -106.9644,
      "country_code": "MX"
    },
    {
      "city": "Garden City Park",
      "latitude": 40.7436,
      "longitude": -73.6639,
      "country_code": "US"
    },
    {
      "city": "Nangan",
      "latitude": 26.1598,
      "longitude": 119.9432,
      "country_code": "TW"
    },
    {
      "city": "Broadview Park",
      "latitude": 26.0979,
      "longitude": -80.2088,
      "country_code": "US"
    },
    {
      "city": "Malmesbury",
      "latitude": 51.584,
      "longitude": -2.098,
      "country_code": "GB"
    },
    {
      "city": "North Bay Village",
      "latitude": 25.8487,
      "longitude": -80.1535,
      "country_code": "US"
    },
    {
      "city": "Conshohocken",
      "latitude": 40.0772,
      "longitude": -75.3035,
      "country_code": "US"
    },
    {
      "city": "Newent",
      "latitude": 51.9302,
      "longitude": -2.4048,
      "country_code": "GB"
    },
    {
      "city": "Bellevue",
      "latitude": 40.4945,
      "longitude": -80.055,
      "country_code": "US"
    },
    {
      "city": "Calderitas",
      "latitude": 18.5544,
      "longitude": -88.2583,
      "country_code": "MX"
    },
    {
      "city": "Panindícuaro",
      "latitude": 19.9828,
      "longitude": -101.7606,
      "country_code": "MX"
    },
    {
      "city": "Mtskheta",
      "latitude": 41.85,
      "longitude": 44.7167,
      "country_code": "GE"
    },
    {
      "city": "Sokobanja",
      "latitude": 43.6394,
      "longitude": 21.8694,
      "country_code": "RS"
    },
    {
      "city": "Krāslava",
      "latitude": 55.8956,
      "longitude": 27.1644,
      "country_code": "LV"
    },
    {
      "city": "Panabá",
      "latitude": 21.2964,
      "longitude": -88.2706,
      "country_code": "MX"
    },
    {
      "city": "Juncos",
      "latitude": 18.2264,
      "longitude": -65.9163,
      "country_code": "PR"
    },
    {
      "city": "Illizi",
      "latitude": 26.4834,
      "longitude": 8.4666,
      "country_code": "DZ"
    },
    {
      "city": "Elderslie",
      "latitude": 55.8306,
      "longitude": -4.4842,
      "country_code": "GB"
    },
    {
      "city": "Caldwell",
      "latitude": 40.839,
      "longitude": -74.2776,
      "country_code": "US"
    },
    {
      "city": "Fgura",
      "latitude": 35.8703,
      "longitude": 14.5133,
      "country_code": "MT"
    },
    {
      "city": "San Juan Bautista",
      "latitude": -26.68,
      "longitude": -57.15,
      "country_code": "PY"
    },
    {
      "city": "Riverside",
      "latitude": 40.0358,
      "longitude": -74.9564,
      "country_code": "US"
    },
    {
      "city": "Falmouth",
      "latitude": 18.4936,
      "longitude": -77.6558,
      "country_code": "JM"
    },
    {
      "city": "Temple Hills",
      "latitude": 38.8106,
      "longitude": -76.9495,
      "country_code": "US"
    },
    {
      "city": "Boyes Hot Springs",
      "latitude": 38.3126,
      "longitude": -122.4888,
      "country_code": "US"
    },
    {
      "city": "Maḩmūd-e Rāqī",
      "latitude": 35.0167,
      "longitude": 69.3333,
      "country_code": "AF"
    },
    {
      "city": "Ħamrun",
      "latitude": 35.8847,
      "longitude": 14.4844,
      "country_code": "MT"
    },
    {
      "city": "Aizkraukle",
      "latitude": 56.6008,
      "longitude": 25.255,
      "country_code": "LV"
    },
    {
      "city": "Koboko",
      "latitude": 3.4136,
      "longitude": 30.9599,
      "country_code": "UG"
    },
    {
      "city": "Luquillo",
      "latitude": 18.3735,
      "longitude": -65.7218,
      "country_code": "PR"
    },
    {
      "city": "Naftalan",
      "latitude": 40.5058,
      "longitude": 46.8192,
      "country_code": "AZ"
    },
    {
      "city": "Bentiu",
      "latitude": 9.25,
      "longitude": 29.8,
      "country_code": "SS"
    },
    {
      "city": "Wilson",
      "latitude": 40.6844,
      "longitude": -75.2407,
      "country_code": "US"
    },
    {
      "city": "Palo Alto",
      "latitude": 21.9167,
      "longitude": -101.9667,
      "country_code": "MX"
    },
    {
      "city": "Rio Bravo",
      "latitude": 27.3648,
      "longitude": -99.482,
      "country_code": "US"
    },
    {
      "city": "Luba",
      "latitude": 3.45,
      "longitude": 8.55,
      "country_code": "GQ"
    },
    {
      "city": "Sheriff Hill",
      "latitude": 54.939,
      "longitude": -1.586,
      "country_code": "GB"
    },
    {
      "city": "Guadalupe",
      "latitude": 34.9608,
      "longitude": -120.5735,
      "country_code": "US"
    },
    {
      "city": "Pinchbeck",
      "latitude": 52.8147,
      "longitude": -0.1605,
      "country_code": "GB"
    },
    {
      "city": "Chickerell",
      "latitude": 50.624,
      "longitude": -2.5047,
      "country_code": "GB"
    },
    {
      "city": "Sabana Seca",
      "latitude": 18.4273,
      "longitude": -66.1809,
      "country_code": "PR"
    },
    {
      "city": "West Samoset",
      "latitude": 27.4702,
      "longitude": -82.5552,
      "country_code": "US"
    },
    {
      "city": "Fanwood",
      "latitude": 40.6417,
      "longitude": -74.3857,
      "country_code": "US"
    },
    {
      "city": "Baldwin Harbor",
      "latitude": 40.6296,
      "longitude": -73.6025,
      "country_code": "US"
    },
    {
      "city": "Xinguara",
      "latitude": -7.1006,
      "longitude": -49.948,
      "country_code": "BR"
    },
    {
      "city": "Holtville",
      "latitude": 32.813,
      "longitude": -115.378,
      "country_code": "US"
    },
    {
      "city": "Radstock",
      "latitude": 51.293,
      "longitude": -2.448,
      "country_code": "GB"
    },
    {
      "city": "San Lorenzo",
      "latitude": 18.1894,
      "longitude": -65.9674,
      "country_code": "PR"
    },
    {
      "city": "Arafat",
      "latitude": 18.0583,
      "longitude": -15.9621,
      "country_code": "MR"
    },
    {
      "city": "Angostura",
      "latitude": 25.3653,
      "longitude": -108.1622,
      "country_code": "MX"
    },
    {
      "city": "Calumet Park",
      "latitude": 41.665,
      "longitude": -87.6578,
      "country_code": "US"
    },
    {
      "city": "Glen Ridge",
      "latitude": 40.8041,
      "longitude": -74.2043,
      "country_code": "US"
    },
    {
      "city": "Waterbeach",
      "latitude": 52.2664,
      "longitude": 0.1908,
      "country_code": "GB"
    },
    {
      "city": "Glenside",
      "latitude": 40.1032,
      "longitude": -75.1517,
      "country_code": "US"
    },
    {
      "city": "Sen Monorom",
      "latitude": 12.45,
      "longitude": 107.2,
      "country_code": "KH"
    },
    {
      "city": "Brotton",
      "latitude": 54.568,
      "longitude": -0.937,
      "country_code": "GB"
    },
    {
      "city": "Nombre de Dios",
      "latitude": 23.85,
      "longitude": -104.2333,
      "country_code": "MX"
    },
    {
      "city": "Gulbene",
      "latitude": 57.175,
      "longitude": 26.7564,
      "country_code": "LV"
    },
    {
      "city": "Gurabo",
      "latitude": 18.2529,
      "longitude": -65.9786,
      "country_code": "PR"
    },
    {
      "city": "Leova",
      "latitude": 46.4786,
      "longitude": 28.2553,
      "country_code": "MD"
    },
    {
      "city": "Hatboro",
      "latitude": 40.1775,
      "longitude": -75.1054,
      "country_code": "US"
    },
    {
      "city": "Tala",
      "latitude": -34.3436,
      "longitude": -55.7617,
      "country_code": "UY"
    },
    {
      "city": "Esperanza",
      "latitude": 27.58,
      "longitude": -109.9298,
      "country_code": "MX"
    },
    {
      "city": "San Jose",
      "latitude": 10.745,
      "longitude": 121.9415,
      "country_code": "PH"
    },
    {
      "city": "Ruše",
      "latitude": 46.5383,
      "longitude": 15.5153,
      "country_code": "SI"
    },
    {
      "city": "Park City",
      "latitude": 42.3522,
      "longitude": -87.8915,
      "country_code": "US"
    },
    {
      "city": "Oğuz",
      "latitude": 41.0714,
      "longitude": 47.4653,
      "country_code": "AZ"
    },
    {
      "city": "Hillcrest",
      "latitude": 41.1298,
      "longitude": -74.035,
      "country_code": "US"
    },
    {
      "city": "Brayton",
      "latitude": 53.7682,
      "longitude": -1.0907,
      "country_code": "GB"
    },
    {
      "city": "Briceni",
      "latitude": 48.3628,
      "longitude": 27.085,
      "country_code": "MD"
    },
    {
      "city": "Mongomo",
      "latitude": 1.6287,
      "longitude": 11.3168,
      "country_code": "GQ"
    },
    {
      "city": "Goranboy",
      "latitude": 40.61,
      "longitude": 46.7872,
      "country_code": "AZ"
    },
    {
      "city": "Ruyigi",
      "latitude": -3.4667,
      "longitude": 30.25,
      "country_code": "BI"
    },
    {
      "city": "Lerik",
      "latitude": 38.7753,
      "longitude": 48.4153,
      "country_code": "AZ"
    },
    {
      "city": "Montpelier",
      "latitude": 44.2658,
      "longitude": -72.5717,
      "country_code": "US"
    },
    {
      "city": "Monaghan",
      "latitude": 54.2479,
      "longitude": -6.9708,
      "country_code": "IE"
    },
    {
      "city": "Līvāni",
      "latitude": 56.3539,
      "longitude": 26.1761,
      "country_code": "LV"
    },
    {
      "city": "Ocniţa",
      "latitude": 48.4167,
      "longitude": 27.4833,
      "country_code": "MD"
    },
    {
      "city": "Frontera Corozal",
      "latitude": 16.8211,
      "longitude": -90.8903,
      "country_code": "MX"
    },
    {
      "city": "Cwmbach",
      "latitude": 51.7072,
      "longitude": -3.4128,
      "country_code": "GB"
    },
    {
      "city": "Mobaye",
      "latitude": 4.3167,
      "longitude": 21.1833,
      "country_code": "CF"
    },
    {
      "city": "X-Cán",
      "latitude": 20.8583,
      "longitude": -87.6681,
      "country_code": "MX"
    },
    {
      "city": "Williston Park",
      "latitude": 40.7587,
      "longitude": -73.6465,
      "country_code": "US"
    },
    {
      "city": "Teleneşti",
      "latitude": 47.4997,
      "longitude": 28.3656,
      "country_code": "MD"
    },
    {
      "city": "Limbaži",
      "latitude": 57.5147,
      "longitude": 24.7131,
      "country_code": "LV"
    },
    {
      "city": "Hola",
      "latitude": -1.5,
      "longitude": 40.03,
      "country_code": "KE"
    },
    {
      "city": "Madona",
      "latitude": 56.8542,
      "longitude": 26.22,
      "country_code": "LV"
    },
    {
      "city": "Chicxulub Puerto",
      "latitude": 21.2939,
      "longitude": -89.6083,
      "country_code": "MX"
    },
    {
      "city": "Dunellen",
      "latitude": 40.5903,
      "longitude": -74.4656,
      "country_code": "US"
    },
    {
      "city": "South Monrovia Island",
      "latitude": 34.1234,
      "longitude": -117.9958,
      "country_code": "US"
    },
    {
      "city": "East Franklin",
      "latitude": 40.4933,
      "longitude": -74.4711,
      "country_code": "US"
    },
    {
      "city": "Lapovo",
      "latitude": 44.1842,
      "longitude": 21.0973,
      "country_code": "RS"
    },
    {
      "city": "Glenolden",
      "latitude": 39.8996,
      "longitude": -75.292,
      "country_code": "US"
    },
    {
      "city": "Nyack",
      "latitude": 41.0919,
      "longitude": -73.9143,
      "country_code": "US"
    },
    {
      "city": "Hampstead",
      "latitude": 45.4833,
      "longitude": -73.6333,
      "country_code": "CA"
    },
    {
      "city": "Donduşeni",
      "latitude": 48.2244,
      "longitude": 27.5853,
      "country_code": "MD"
    },
    {
      "city": "Ştefan Vodă",
      "latitude": 46.5153,
      "longitude": 29.6631,
      "country_code": "MD"
    },
    {
      "city": "Ewa Villages",
      "latitude": 21.3418,
      "longitude": -158.039,
      "country_code": "US"
    },
    {
      "city": "Nakasongola",
      "latitude": 1.3089,
      "longitude": 32.4564,
      "country_code": "UG"
    },
    {
      "city": "Daet",
      "latitude": 14.1122,
      "longitude": 122.9553,
      "country_code": "PH"
    },
    {
      "city": "Souderton",
      "latitude": 40.311,
      "longitude": -75.3224,
      "country_code": "US"
    },
    {
      "city": "Twin Rivers",
      "latitude": 40.263,
      "longitude": -74.4917,
      "country_code": "US"
    },
    {
      "city": "Ridley Park",
      "latitude": 39.8785,
      "longitude": -75.3251,
      "country_code": "US"
    },
    {
      "city": "Waikele",
      "latitude": 21.4025,
      "longitude": -158.0058,
      "country_code": "US"
    },
    {
      "city": "Great Neck Plaza",
      "latitude": 40.7869,
      "longitude": -73.7261,
      "country_code": "US"
    },
    {
      "city": "Berovo",
      "latitude": 41.7078,
      "longitude": 22.8564,
      "country_code": "MK"
    },
    {
      "city": "Trindade",
      "latitude": 0.3,
      "longitude": 6.6667,
      "country_code": "ST"
    },
    {
      "city": "Orland Hills",
      "latitude": 41.5905,
      "longitude": -87.8413,
      "country_code": "US"
    },
    {
      "city": "Virac",
      "latitude": 13.5848,
      "longitude": 124.2374,
      "country_code": "PH"
    },
    {
      "city": "Kratovo",
      "latitude": 42.0783,
      "longitude": 22.175,
      "country_code": "MK"
    },
    {
      "city": "Alūksne",
      "latitude": 57.4239,
      "longitude": 27.0503,
      "country_code": "LV"
    },
    {
      "city": "South Valley Stream",
      "latitude": 40.6557,
      "longitude": -73.7186,
      "country_code": "US"
    },
    {
      "city": "San Isidro",
      "latitude": 18.3919,
      "longitude": -65.8853,
      "country_code": "PR"
    },
    {
      "city": "Senglea",
      "latitude": 35.8875,
      "longitude": 14.5169,
      "country_code": "MT"
    },
    {
      "city": "Puerto Real",
      "latitude": 18.0762,
      "longitude": -67.1861,
      "country_code": "PR"
    },
    {
      "city": "Mahibadhoo",
    },
    {