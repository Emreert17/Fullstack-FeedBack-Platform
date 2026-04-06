import RouteHeader from "../../../components/RouteHeader/RouteHeader";
import ProfileContainer from "./components/ProfileContainer";

export default function Profile() {
  return (
    <div className="max-w-6xl">
      <RouteHeader specialPadding="py-4">Profile</RouteHeader>
      <ProfileContainer />
    </div>
  );
}
