import ListPage from "../components/ListPage";
import data from "../../http/hotels";

export default function HotelsPage() {
  return (
    <ListPage
      title="Mehmonxonalar"
      data={data}
      basePath="/hotels"
      popularTitle="Mashhur mehmonxonalar"
    />
  );
}
