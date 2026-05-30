// All Feedback data
export const status_filters = ["all", "open", "in-progress", "planned", "done"];
export const filter_labels = {
  all: "All",
  open: "Open",
  "in-progress": "In Progress",
  planned: "Planned",
  done: "Done",
};

export const feedbackStatus = [
  { status: "open", color: "bg-red-200 text-red-800" },
  { status: "planned", color: "bg-yellow-200 text-yellow-800" },
  { status: "in-progress", color: "bg-blue-200 text-blue-800" },
  { status: "done", color: "bg-green-200 text-green-800" },
];
export const statusSpan = [
  { status: "open", color: "bg-red-300" },
  { status: "planned", color: "bg-yellow-300" },
  { status: "in-progress", color: "bg-blue-300" },
  { status: "done", color: "bg-green-300" },
];

// Complete Profile Data
const identityNames = ["username", "email"];
export const workNames = ["jobtitle", "department"];
export const companyNames = ["companyname", "companysize"];
export const locationNames = ["country", "city"];
export const sections = [
  {
    label: "Work Details",
    fields: workNames,
  },
  {
    label: "Company",
    fields: companyNames,
  },
  {
    label: "Location",
    fields: locationNames,
  },
];
//
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
