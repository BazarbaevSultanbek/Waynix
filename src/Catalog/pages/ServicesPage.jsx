import ListPage from "../components/ListPage";
import data from "../../http/services";

export default function ServicesPage() {
  return (
    <ListPage
      title="Xizmatlar"
      data={data}
      basePath="/services"
      popularTitle="Mashhur xizmat markazlari"
    />
  );
}
