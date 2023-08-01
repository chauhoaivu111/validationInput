const data = {
  countryData: [
    { CountryName: "Australia", CountryId: "2" },
    { CountryName: "United States", CountryId: "1" },
    { CountryName: "UK", CountryId: "1" },
  ],
  stateData: [
    { StateName: "New York", CountryIds: ["1"], StateId: "101" },
    { StateName: "Virginia", CountryIds: ["1"], StateId: "102" },
    { StateName: "Tasmania", CountryIds: ["2", "1"], StateId: "105" },
    { StateName: "Virginias", CountryIds: ["1"], StateId: "102", status:"true" },
    { StateName: "Virginias", CountryIds: ["1"], StateId: "102", status:"true" },
  ],
  cityData: [
    { CityName: "Albany", StateIds: ["101"], CityId: 201 },
    { CityName: "Beacon", StateIds: ["101"], CityId: 202 },
    { CityName: "Emporia", StateIds: ["102"], CityId: 206 },
    { CityName: "Hampton", StateIds: ["102"], CityId: 205 },
    { CityName: "Hobart", StateIds: ["105", "101"], CityId: 213 },
    { CityName: "Launceston", StateIds: ["105"], CityId: 214 },
  ],
};