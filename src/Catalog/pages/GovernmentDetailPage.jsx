import DetailPage from "../components/DetailPage";
import data from "../../http/government";

export default function GovernmentDetailPage() {
  return <DetailPage title="Davlat idorasi" data={data} basePath="/government" />;
}
