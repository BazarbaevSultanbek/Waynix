import DetailPage from "../components/DetailPage";
import data from "../../http/services";

export default function ServicesDetailPage() {
  return <DetailPage title="Xizmat" data={data} basePath="/services" />;
}
