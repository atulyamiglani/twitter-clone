import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const Homepage = (props) => {
  return (
    <div>
      <h1>this shit isnt even visible </h1>
      <h1>Welcome to twitter, or something like that</h1>
      <Button component={Link} to={"/signup"}>
        Signup
      </Button>
      <Button component={Link} to={"/signin"}>
        Signin
      </Button>
    </div>
  );
};

export default Homepage;
