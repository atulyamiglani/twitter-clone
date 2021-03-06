import { AppBar } from "@material-ui/core";
import { Toolbar, IconButton, Button } from "@material-ui/core";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";

const styles = {};

const Navbar = () => (
  <AppBar>
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
      <IconButton variant="h6" component={Link} to={"/"} render={Homepage}>
        {" "}
        Twitter, but better
      </IconButton>
      <Button component={Link} to={"/signup"} color="inherit">
        Signup
      </Button>
      <Button component={Link} to={"/signin"} color="inherit">
        Login
      </Button>
    </Toolbar>
  </AppBar>
);

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, null)(Navbar);
