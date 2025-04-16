import { ViewCard } from "../../components";
import { ViewTypes } from "../../utils/types";
import { Views } from "../../utils/utils";
import "./Home.css";



const Home = () => {
  return (
    <main className="card-grid">
      {Views.filter((view: ViewTypes) => view.image).map((view: ViewTypes) => (
        <ViewCard key={view.id} View={view} />
      ))}
    </main>
  )
}

export default Home;
