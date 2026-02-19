import ListPage from "../components/ListPage";
import data from "../../http/tours";

export default function ToursPage() {
  return (
    <ListPage
      title="Turobyektlar"
      data={data}
      basePath="/tours"
      popularTitle="Mashhur turobyektlar"
    />
  );
}
