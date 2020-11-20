import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import classes from "./Header.module.css";
import logo from '../../images/logo.png';

function Header() {

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.navbar}>
				<Toolbar>
					<div className={classes.logo}><img src={logo} style={{ width: '175px' }} alt="Logo" /></div>
					<a href="#" className={classes.menu}><Button color="inherit">Home</Button></a>
					<a href="#" className={classes.menu}><Button color="inherit">Products</Button></a>
					<a href="#" className={classes.menu}><Button color="inherit">About</Button></a>
					<a href="#" className={classes.menu}><Button color="inherit">Contact</Button></a>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
