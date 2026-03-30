import RouteHeader from "../../../../components/RouteHeader/RouteHeader";
import CompleteProfileForm from "./components/CompleteProfile";

export default function CompleteProfile() {
  return (
    <>
      <div>
        <RouteHeader specialPadding="pt-4">Complete Profile</RouteHeader>
        <p className="text-xs font-medium text-stone-600 pb-3">
          Add your professional details so your team knows who you are
        </p>
        <div>
          <CompleteProfileForm />
        </div>
      </div>
    </>
  );
}
