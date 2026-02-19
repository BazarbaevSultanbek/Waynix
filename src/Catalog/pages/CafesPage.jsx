import ListPage from "../components/ListPage";
import data from "../../http/cafes";

export default function CafesPage() {
  return (
    <ListPage
      title="Ovqatlanish joylari"
      data={data}
      basePath="/cafe"
      popularTitle="Mashhur ovqatlanish joylari"
    />
  );
}
