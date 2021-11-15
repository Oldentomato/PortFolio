import {Switch, Route} from "react-router-dom"
import LandingPage from "../src/components/views/LandingPage/LandingPage"
import BoardPage from "../src/components/views/BoardPage/BoardPage"
import "./css/App.css"

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/Boards" component={BoardPage}/>
      </Switch>
    </div>

  );
}
