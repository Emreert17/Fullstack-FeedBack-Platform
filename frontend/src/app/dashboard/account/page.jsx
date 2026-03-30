import RouteHeader from "../../../components/RouteHeader/RouteHeader";
import QuickLinks from "./components/QuickLinks";
export default function Account() {
  return (
    <>
      <div className="flex flex-col">
        <RouteHeader specialPadding="pt-4">Account</RouteHeader>
        <p className="text-xs font-medium text-stone-600 pb-3">
          Manage your account details and linked pages
        </p>
        <div>
          <QuickLinks />
        </div>
      </div>
    </>
  );
}
