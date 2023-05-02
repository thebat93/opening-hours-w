import { OpeningHoursCard } from "./modules/OpeningHours/view";
import { RawData } from "./modules/OpeningHours/types";
import data from './data.json';

const App = () => (
  <div className="App">
    <OpeningHoursCard data={data as RawData} />
  </div>
);

export default App;
