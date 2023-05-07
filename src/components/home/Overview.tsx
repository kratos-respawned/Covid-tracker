import DashboardCards from "./DashboardCards";
import { Data } from "./Data";

function Overview() {
  return (
    <>
      {/* @ts-expect-error */}
      <DashboardCards />
      <Data />
    </>
  );
}

export default Overview;
