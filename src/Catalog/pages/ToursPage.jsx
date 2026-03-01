import ListPage from "../components/ListPage";
import data from "../../http/tours";

export default function ToursPage() {
  return (
    <ListPage
      title="Turobyektlar"
      data={data}
      basePath="/tours"
      categoryKey="tours"
      popularTitle="Mashhur turobyektlar"
    />
  );
}
