import { AppBar } from "@material-ui/core";
import { Toolbar, IconButton, Typography, Button } from "@material-ui/core";

const styles = {};

const Navbar = () => (
  <AppBar>
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
      <Typography variant="h6">Twitter, but better</Typography>
      <Button color="inherit" className="marginRight:'auto">
        Login
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
