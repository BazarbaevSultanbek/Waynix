import ListPage from "../components/ListPage";
import data from "../../http/entertainment";

export default function EntertainmentPage() {
  return (
    <ListPage
      title="Ko'ngil ochar va dam olish"
      data={data}
      basePath="/entertainment"
      popularTitle="Mashhur dam olish maskanlari"
    />
  );
}
