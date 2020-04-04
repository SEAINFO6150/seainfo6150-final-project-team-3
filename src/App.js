import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import AdoptionList from "./Adoption/AdoptionList.jsx";
import AdoptionPage from "./Adoption/AdoptionPage.jsx";
import PetDetailPage from "./Adoption/PetDetailPage";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article"
};

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            {/* these links should show you how to connect up a link to a specific route */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/adoptionlist">Adoption</Link>
            </li>
            <li>
              <Link to="/bar/hats/sombrero">Bar</Link>
            </li>
            <li>
              <Link to="/baz">Baz</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/adoptionlist" exact component={AdoptionList} />

        <Route path="/adoption/:adoption" 
          exact 
          render = {({match}) => (
            <AdoptionPage adoption={match.params.adoption}/>

            )
          }
          />
        <Route 
          path="/detail/:id"        
          exact
          render={({ match }) => (
            <PetDetailPage id={match.params.id}/>
          )}
        />

        {/* passing parameters via a route path */}
        <Route
          path="/bar/:categoryId/:productId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Bar
              categoryId={match.params.categoryId}
              productId={match.params.productId}
            />
          )}
        />
        <Route
          path="/baz"
          exact
          render={() => <Baz content={externalContent} />}
        />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
