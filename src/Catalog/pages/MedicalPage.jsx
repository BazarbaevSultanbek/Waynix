import ListPage from "../components/ListPage";
import data from "../../http/medical";

export default function MedicalPage() {
  return (
    <ListPage
      title="Tibbiyot"
      data={data}
      basePath="/medical"
      popularTitle="Mashhur tibbiyot markazlari"
    />
  );
}
