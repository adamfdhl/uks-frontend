import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import DetailUnit from "./pages/DetailUnit/DetailUnit";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="App__content">
          <Route path="/detail/:id" exact>
            <DetailUnit />
          </Route>
          <Route path="/" exact component={Home} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
