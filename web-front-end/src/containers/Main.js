import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Main = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/signup">
          <AuthForm signUp={true} />
        </Route>
        <Route exact path="/signin">
          <AuthForm signUp={false} />
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

export default connect(mapStateToProps)(Main);
