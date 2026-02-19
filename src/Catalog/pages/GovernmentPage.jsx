import ListPage from "../components/ListPage";
import data from "../../http/government";

export default function GovernmentPage() {
  return (
    <ListPage
      title="Davlat idoralari"
      data={data}
      basePath="/government"
      popularTitle="Davlat idoralari"
    />
  );
}
