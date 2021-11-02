import './App.css';
import {NavLink, Route, Router, useHistory} from "react-router-dom";
import TermsOfUse from "./pages/termsOfUse";
import Main from "./pages/main";

function App() {
  const history = useHistory();
  return (
    <div className="App">
        <div className={"links"}>
            <NavLink className={"link"} to={"/"} exact activeStyle={{color:"pink"}}>main</NavLink>
            <NavLink className={"link"} to={"/terms-of-use"} color={"black"} exact  activeStyle={{color:"pink"}}>messages</NavLink>
        </div>
      <Router history={history}>
          <Route path={"/"} exact component={Main}/>
          <Route path={"/terms-of-use"} exact component={TermsOfUse}/>
      </Router>
    </div>
  );
}

export default App;
