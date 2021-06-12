import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WatchPage from "./pages/WatchPage";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello from React!</h1> */}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/watch">
          <WatchPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
