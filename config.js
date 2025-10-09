// v1.1.
// ©️ 2025 JesseLikesWeather. Redistributable with necessary attribution: @JesseLikesWeather on YouTube
// config.js

export const mapboxToken = 'pk.eyJ1Ijoid2VhdGhlciIsImEiOiJjbHAxbHNjdncwaDhvMmptcno1ZTdqNDJ0In0.iywE3NefjboFg11a11ON0Q';

// Speed of tornado in meters per millisecond (adjust as needed)
export const tornadoSpeed = 0.07; // 100 m/s

export const points = [
   {
    name: "House Damaged",
    type: "damage",
     coordinates: [-97.599342, 46.571969],
     showWhen: "0.5",
    icon: "./images/house-white.svg"
   },
    {
    name: "House Damaged",
    type: "damage",
     coordinates: [-97.571028, 46.586475],
     showWhen: "0.2",
    icon: "./images/house-white.svg"
   },
   {
    name: "Train Derailed",
    type: "damage",
    coordinates: [-97.559978, 46.592978],
    showWhen: "0.5",
    icon: ""
   },
   {
    name: "Train Derailed",
    type: "damage",
    coordinates: [-97.551985, 46.60077],
    showWhen: "0.7",
    icon: ""
   },
      {
    name: "Houses Damaged",
    type: "damage",
    coordinates: [-97.54746045871607, 46.60430448933431],
    showWhen: "1",
    icon: "./images/house-white.svg"
   },
    {
    name: "Catastrophic Tree Damage",
    type: "damage",
    coordinates: [-97.542136, 46.617442],
    showWhen: "1",
    icon: ""
   },
  {
    name: "House Damaged",
    type: "damage",
    coordinates: [-97.532136, 46.631147],
    showWhen: "1",
    icon: "./images/house-white.svg"
   },
     {
    name: "House Damaged",
    type: "damage",
    coordinates: [-97.53565, 46.631916],
    showWhen: "1",
    icon: "./images/house-white.svg"
   },
 {
    name: "House Damaged",
    type: "damage",
    coordinates: [-97.524748, 46.657583],
    showWhen: "1",
    icon: "./images/house-white.svg"
   },
    {
    name: "House Damaged",
    type: "damage",
    coordinates: [-97.533312, 46.672294],
    showWhen: "1",
    icon: "./images/house-white.svg"
   }
];

// Enderlin, ND EF5
// Damage Swaths counted as tornado's max width. May not represent tornado's actual width.
// Last Edit: Wednesday, October 8th, 2025
// Enderlin, ND EF5
// Diameter values (miles) scaled linearly from 0 to max 0.333
export const keyframes = [
  [-97.614006, 46.567169, 0.003],
  [-97.603019, 46.572716, 0.06],
  [-97.594501, 46.57571, 0.12],
  [-97.590316, 46.577067, 0.16],
  [-97.587398, 46.577952, 0.19],
  [-97.585209, 46.578719, 0.22],
  [-97.582829, 46.580109, 0.28],
  [-97.580554, 46.58126, 0.30],
  [-97.57931, 46.582012, 0.31],
  [-97.578966, 46.582203, 0.32],
  [-97.577722, 46.582956, 0.32],
  [-97.576392, 46.583442, 0.31],
  [-97.575147, 46.583722, 0.32],
  [-97.573087, 46.584371, 0.34],
  [-97.572293, 46.584622, 0.34],
  [-97.571285, 46.58502, 0.36],
  [-97.569761, 46.58561, 0.38],
  [-97.569005, 46.585724, 0.43],
  [-97.565199, 46.587264, 0.56],
  [-97.561696, 46.589725, 0.74],
  [-97.559035, 46.591347, 0.84],
  [-97.557361, 46.592792, 0.85],
  [-97.555258, 46.595122, 0.92],
  [-97.553928, 46.596154, 0.93],
  [-97.552769, 46.59751, 0.95],
  [-97.551825, 46.599987, 1.01],
  [-97.54895, 46.603614, 0.98],
  [-97.548993, 46.603791, 1.02],
  [-97.546117, 46.606327, 1.03],
  [-97.544444, 46.608892, 1.07],
  [-97.542984, 46.61128, 1.06],
  [-97.54204, 46.614051, 1.03],
  [-97.540839, 46.616291, 1],
  [-97.538993, 46.619917, 0.93],
  [-97.537233, 46.623238, 0.84],
  [-97.536117, 46.624771, 0.78],
  [-97.534701, 46.626923, 0.69],
  [-97.533456, 46.630164, 0.63],
  [-97.532308, 46.631453, 0.58],
  [-97.531965, 46.63328, 0.54],
  [-97.530999, 46.636109, 0.55],
  [-97.530527, 46.639571, 0.54],
  [-97.530033, 46.643549, 0.53],
  [-97.529304, 46.651209, 0.53],
  [-97.52969, 46.654891, 0.53],
  [-97.529347, 46.657895, 0.53],
  [-97.52969, 46.66252, 0.54],
  [-97.530291, 46.666113, 0.52],
  [-97.530978, 46.670177, 0.50],
  [-97.532578, 46.673935, 0.48],
  [-97.533479, 46.676938, 0.47],
  [-97.534831, 46.678823, 0.45],
  [-97.535346, 46.68023, 0.45],
  [-97.537749, 46.683468, 0.44],
  [-97.539809, 46.686192, 0.46],
  [-97.541933, 46.688694, 0.44],
  [-97.544294, 46.690637, 0.42],
  [-97.546697, 46.692315, 0.43],
  [-97.548671, 46.693934, 0.42],
  [-97.550688, 46.695111, 0.40],
  [-97.555838, 46.697937, 0.32],
  [-97.5597, 46.69882, 0.31],
  [-97.566695, 46.698937, 0.24],
  [-97.574678, 46.695199, 0.14],
  [-97.575751, 46.694257, 0.14],
  [-97.578111, 46.690578, 0.06],
  [-97.580514, 46.686471, 0.00],
  [-97.58102, 46.685339, 0.00]
];


// Custom Swaths. This here is from the Philadelphia Tornado.
export const customSwaths = [
  {
    name: "Philadelphia, MS EF5 Damage Swath",
    coordinates: [
      [-88.95300558382746,32.87789316656124],
      [-88.95239099563699,32.87760616238246],
      [-88.9510584609321,32.87808483214009],
      [-88.94862151599294,32.87939169740208],
      [-88.94746629375446,32.88027277648445],
      [-88.94578307392952,32.88175426065427],
      [-88.9446428576088,32.88287053322692],
      [-88.94361958394215,32.88438558430855],
      [-88.94567692451254,32.88405799609142],
      [-88.9498041419415,32.88195662568612],
      [-88.95120850019964,32.88051711003653],
      [-88.95294124767804,32.87870497769859],
      [-88.95300558382746,32.87789316656124]
    ]
  }
];

// Show/hide animation player controls (slider, etc.)
export const showAnimationPlayer = true;
