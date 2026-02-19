import DetailPage from "../components/DetailPage";
import data from "../../http/tours";

export default function ToursDetailPage() {
  return <DetailPage title="Turobyekt" data={data} basePath="/tours" />;
}
