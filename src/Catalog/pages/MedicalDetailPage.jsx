import DetailPage from "../components/DetailPage";
import data from "../../http/medical";

export default function MedicalDetailPage() {
  return <DetailPage title="Tibbiyot maskani" data={data} basePath="/medical" />;
}
