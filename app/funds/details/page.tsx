import FundDetails from "@/app/_components/FundDetails";
import ReturnDetails from "@/app/_components/ReturnDetails";
import SchemDetails from "@/app/_components/SchemeDetails";

export default function FundDashboard() {
  return (
    <>
      <FundDetails />
      <SchemDetails />
      <ReturnDetails />
    </>
  );
}
