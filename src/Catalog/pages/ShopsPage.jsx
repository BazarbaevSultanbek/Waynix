import ListPage from "../components/ListPage";
import data from "../../http/shops";

export default function ShopsPage() {
  return (
    <ListPage
      title="Savdo markazlari"
      data={data}
      basePath="/shop"
      popularTitle="Mashhur savdo joylari"
    />
  );
}
