import DetailPage from "../components/DetailPage";
import data from "../../http/entertainment";

export default function EntertainmentDetailPage() {
  return <DetailPage title="Dam olish joyi" data={data} basePath="/entertainment" />;
}
