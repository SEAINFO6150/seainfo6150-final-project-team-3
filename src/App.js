import React from "react";
import Navigation from "./Navigation/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <Navigation/>
  );
}

export default App;
