import DetailPage from "../components/DetailPage";
import data from "../../http/cafes";

export default function CafesDetailPage() {
  return <DetailPage title="Ovqatlanish joyi" data={data} basePath="/cafe" />;
}
