import FeedBackForm from "./components/FeedBackForm";
import RouteHeader from "../../../components/RouteHeader/RouteHeader";

export default function CreateFeedBack() {
  return (
    <>
      <div className="py-2 px-10">
        <RouteHeader specialPadding="py-4">Create FeedBack</RouteHeader>
        <FeedBackForm />
      </div>
    </>
  );
}
