import DetailPage from "../components/DetailPage";
import data from "../../http/education";

export default function EducationDetailPage() {
  return <DetailPage title="Ta'lim maskani" data={data} basePath="/education" />;
}
