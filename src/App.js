import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavbarTest from "./components/NavbarTest";
import OurProjects from "./OurProjects";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./components/Footer";
import ProjectDetails from "./ProjectDetails";
import DetailPage from "./DetailPage"
import AddProject from "./AddProject";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY ,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route path="/ourprojects">
              <NavbarTest />
              <OurProjects />
              <Footer/>
            </Route>
            <Route path="/detail">
              <NavbarTest />
              <DetailPage />
              <Footer/>
            </Route>
            <Route path="/aboutus">
              <NavbarTest />
              <AboutUs />
              <Footer/>
            </Route>
            <Route path="/contactus">
              <NavbarTest />
              <ContactUs />
              <Footer/>
            </Route>
            <Route exact path="/">
            <NavbarTest />
              <Home />
              <Footer/>
            </Route>
            <Route path="/project-details/:projectid">
            <NavbarTest />
              <ProjectDetails />
              <Footer/>
            </Route> 
             <Route path="/add-project">
             <NavbarTest />
              <AddProject />
              <Footer/>
            </Route>

          </Switch>
      </Router>
    </>
  );
}

export default App;
