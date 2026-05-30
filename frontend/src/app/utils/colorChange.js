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

export const colorChange = (status) => {
  return feedbackStatus.find((f) => f.status === status).color;
};
export const spanColorChange = (status) => {
  return statusSpan.find((f) => f.status === status).color;
};
