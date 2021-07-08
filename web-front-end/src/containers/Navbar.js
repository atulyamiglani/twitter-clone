import { AppBar } from "@material-ui/core";
import { Toolbar, IconButton, Button } from "@material-ui/core";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import { render } from "react-dom";

const styles = {};

const Navbar = () => (
  <Router>
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <IconButton variant="h6" component={Link} to={"/"}>
          {" "}
          Twitter, but better
        </IconButton>
        <Button component={Link} to={"/signup"} color="inherit" className="">
          Signup
        </Button>
        <Button component={Link} to={"/signin"} color="inherit" className="">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  </Router>
);

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, null)(Navbar);
