import ListPage from "../components/ListPage";
import data from "../../http/education";

export default function EducationPage() {
  return (
    <ListPage
      title="Ta'lim"
      data={data}
      basePath="/education"
      popularTitle="Mashhur ta'lim maskanlari"
    />
  );
}
