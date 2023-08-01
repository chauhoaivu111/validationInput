const data = {
  countryData: [
    { CountryName: "Australia", CountryId: "1" },
    { CountryName: "United States", CountryId: "2" },
    { CountryName: "Viet Nam", CountryId: "3" },
  ],
  stateData: [
    { StateName: "Rose", CountryIds: ["1" , "3"], StateId: "101" },
    { StateName: "Chrysanthemum", CountryIds: ["1"], StateId: "102" },
    { StateName: "Lily", CountryIds: ["2", "1"], StateId: "105" },
    { StateName: "Orchid", CountryIds: ["2", "1"], StateId: "105" },
  ],
  cityData: [
    { CityName: "Orchid1", StateIds: ["105"], CityId: 201 },
    { CityName: "Orchid2", StateIds: ["105"], CityId: 202 },
    { CityName: "Orchid3", StateIds: ["105"], CityId: 206 },
    { CityName: "Orchid4", StateIds: ["105"], CityId: 205, },
    { CityName: "Rose", StateIds: ["105", "101"], CityId: 213 },
    { CityName: "Rose1", StateIds: ["105", "101","102"], CityId: 213 , status: "true" },
    { CityName: "Rose2", StateIds: ["105", "101","102"], CityId: 213, status: "true" },
    { CityName: "Rose3", StateIds: ["105", "101","102"], CityId: 213, status: "true" },
    { CityName: "Rose4", StateIds: ["105", "101","102"], CityId: 213 },
    { CityName: "Launceston", StateIds: ["105"], CityId: 214 },
  ],
};