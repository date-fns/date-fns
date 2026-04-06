import "./App.css";
import { format } from "date-fns";

function App() {
  const today = new Date();
  const formattedDate = format(today, "yyyy-MM-dd");
  return (
    <>
      <div className="App">
        <h1>React Typescript Template</h1>
        <p>{formattedDate}</p>
      </div>
    </>
  );
}

export default App;
