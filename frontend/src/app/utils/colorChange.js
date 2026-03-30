import { feedbackStatus } from "../data/data";
import { statusSpan } from "../data/data";
export const colorChange = (status) => {
  return feedbackStatus.find((f) => f.status === status).color;
};
export const spanColorChange = (status) => {
  return statusSpan.find((f) => f.status === status).color;
};
