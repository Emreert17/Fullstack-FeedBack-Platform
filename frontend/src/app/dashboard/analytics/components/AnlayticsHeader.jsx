import RouteHeader from "../../../../components/RouteHeader/RouteHeader";

export default function AnalyticsHeader() {
  return (
    <>
      <div>
        <RouteHeader specialPadding="pt-4">Analytics</RouteHeader>
        <p className="text-xs text-stone-500 font-medium">
          All data shown is from your submissions only
        </p>
      </div>
    </>
  );
}
