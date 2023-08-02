const data = {
  countryData: [
    { CountryName: "Australia", CountryId: "1" },
    { CountryName: "United States", CountryId: "2" },
    { CountryName: "Viet Nam", CountryId: "3" },
  ],
  flowerData: [
    { flowerName: "Rose", CountryId: ["1","2","3"], flowerId: "101" },
    { flowerName: "Sunflower", CountryId: ["1","3"], flowerId: "102" },
    { flowerName: "Tulip ", CountryId: ["2", "3"], flowerId: "103" },
    { flowerName: "Magnolia", CountryId: ["1"], flowerId: "103" },
    { flowerName: "Cyclamen", CountryId: ["2"], flowerId: "102" },
    { flowerName: "Lotus  ", CountryId: ["3"], flowerId: "101" },
  ],
  colorData: [
    { colorName: "Red", ColorIds: ["101"] ,  },
    { colorName: "Pink", ColorIds: ["101"] },
    { colorName: "Blue", ColorIds: ["102"] },
    { colorName: "purple", ColorIds: ["102"] },
    { colorName: "White", ColorIds: ["103", "101"] },
    { colorName: "Yellow", ColorIds: ["103","102"] },
  ],

  
};

export default data