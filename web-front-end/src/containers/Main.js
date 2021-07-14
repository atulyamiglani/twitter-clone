import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import Navbar from "./Navbar";
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/authUser";

const Main = (props) => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/signup">
          <AuthForm
            signUp={true}
            authUser={authUser}
            submitButtonText="Get a new account!"
          />
        </Route>
        <Route exact path="/signin">
          <AuthForm
            signUp={false}
            authUser={authUser}
            submitButtonText="Log me in again"
          />
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default withRouter(connect(mapStateToProps, { authUser })(Main));
