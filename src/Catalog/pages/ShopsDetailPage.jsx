import DetailPage from "../components/DetailPage";
import data from "../../http/shops";

export default function ShopsDetailPage() {
  return <DetailPage title="Savdo joyi" data={data} basePath="/shop" />;
}
