
import { useState } from "react";
// usestate allows the component to store and update data
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [page, setPage] = useState("home");
  // state is data that can change, page = current page displayed, setPage = function to change the page

  const pages = {
    home: Home,
    projects: ProjectsPage,
    contact: ContactPage
  };
  // page mapping object

const CurrentPage = pages[page];
// looks inside the page object, if page = "home", currentPage = homepage

  return (
    <Layout currentPage={page} setPage={setPage}>
      {/* renders layout component with 2 props, 
      selectedpage = which page is active,
      setpage = changes the page when a user clicks */}

      <CurrentPage/>
      {/* renders what component was selected */}

    </Layout>
  );
}
  
   
  

export default App;