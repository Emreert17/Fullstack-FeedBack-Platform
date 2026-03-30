import RouteHeader from "../../../../components/RouteHeader/RouteHeader";
import UpdatePassword from "./components/UpdatePassword";

export default function Security() {
  return (
    <>
      <div>
        <RouteHeader specialPadding="pt-4">Security</RouteHeader>
        <p className="text-xs font-medium text-stone-600 pb-3">
          Keep your account safe with a strong password
        </p>
        <div>
          <UpdatePassword />
        </div>
      </div>
    </>
  );
}
