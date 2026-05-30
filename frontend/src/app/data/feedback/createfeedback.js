export const createFeedback = [
  {
    id: 1,
    name: "title",
    label: "Title",
    type: "input",
    placeholder: "Enter a title",
  },
  {
    id: 2,
    name: "category",
    label: "Category",
    type: "select",
    options: [
      { value: "feature", label: "Feature" },
      { value: "bug", label: "Bug" },
      { value: "ui", label: "UI" },
      { value: "ux", label: "UX" },
      { value: "enhancement", label: "Enhancement" },
    ],
  },
  {
    id: 3,
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Describe your feedback...",
  },
];
