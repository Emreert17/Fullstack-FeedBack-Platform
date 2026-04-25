import AnalyticsContainer from "./components/Container";
export const metadata = {
  title: "Dashboard",
  description: "Analytics dashboard for feedback system",
};
export default function Analytics() {
  return (
    <>
      <div>
        <AnalyticsContainer />
      </div>
    </>
  );
}
