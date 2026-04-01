import FeedBackForm from "./components/FeedbackForm";
import RouteHeader from "../../../components/RouteHeader/RouteHeader";

export default function CreateFeedBack() {
  return (
    <>
      <div>
        <RouteHeader specialPadding="py-4">Create FeedBack</RouteHeader>
        <FeedBackForm />
      </div>
    </>
  );
}
