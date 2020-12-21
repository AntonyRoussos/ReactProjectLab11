import logo from "./logo.svg";
import "./App.css";
import { AllCourses } from "./Components/AllCourses";
import  NewCourse from './Components/NewCourse';
import EditCourse from './Components/EditCourse';
import { Dashboard } from "./Components/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Course } from "./Components/Course";
import { Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Dashboard</Navbar.Brand>
           <Nav className="mr-auto">
           <Nav.Link href="/allCourses" activeClassName="active">All Courses </Nav.Link>
           <Nav.Link href="/newCourse" activeClassName="active">New Course</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
        <Route
           exact path="/"
            render={() => {
              return <Dashboard></Dashboard>;
            }}
          ></Route>
          <Route
           exact path="/allCourses"
            render={() => {
              return <AllCourses></AllCourses>;
            }}
          ></Route>
          <Route
           exact path="/newCourse"
            render={() => {
              return <NewCourse></NewCourse>;
            }}
          ></Route>
          <Route
            path="/allCourses/:id"
            component={Course}
          ></Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

