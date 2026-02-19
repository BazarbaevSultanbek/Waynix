import DetailPage from "../components/DetailPage";
import data from "../../http/hotels";

export default function HotelsDetailPage() {
  return <DetailPage title="Mehmonxona" data={data} basePath="/hotels" />;
}
