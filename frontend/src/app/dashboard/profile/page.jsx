import RouteHeader from "../../../components/RouteHeader/RouteHeader";
import ProfileContainer from "./components/ProfileContainer";

export default function Profile() {
  return (
    <div className="max-w-6xl mx-auto w-full px-6 pt-8 pb-14">
      <RouteHeader specialPadding="pb-6">Profile</RouteHeader>
      <ProfileContainer />
    </div>
  );
}
