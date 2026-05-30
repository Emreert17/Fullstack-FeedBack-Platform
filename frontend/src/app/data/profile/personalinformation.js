const identityNames = ["username", "email"];
const workNames = ["jobtitle", "department"];
const companyNames = ["companyname", "companysize"];
const locationNames = ["country", "city"];
const bioNames = ["bio"];

export const profileSection = [
  {
    label: "Profile",
    fields: identityNames,
  },
  {
    label: "Identity",
    fields: workNames,
  },
  {
    label: "Work",
    fields: companyNames,
  },
  {
    label: "Location",
    fields: locationNames,
  },
  {
    label: "Bio",
    fields: bioNames,
  },
];
