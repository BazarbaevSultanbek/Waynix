import ListPage from "../components/ListPage";
import data from "../../http/services";

export default function ServicesPage() {
  return (
    <ListPage
      title="Xizmatlar"
      data={data}
      basePath="/services"
      categoryKey="services"
      popularTitle="Mashhur xizmat markazlari"
    />
  );
}
