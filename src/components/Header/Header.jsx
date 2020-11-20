import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import classes from "./Header.module.css";
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.navbar}>
				<Toolbar>
					<div className={classes.logo}><img src={logo} style={{ width: '175px' }} alt="Logo" /></div>
					<NavLink to="/" exact activeClassName="active-nav" className={classes.menu}><Button color="inherit">Home</Button></NavLink>
					<NavLink to="/products" activeClassName="active-nav" className={classes.menu}><Button color="inherit">Products</Button></NavLink>
					<NavLink to="/about" activeClassName="active-nav" className={classes.menu}><Button color="inherit">About</Button></NavLink>
					<NavLink to="/contact" activeClassName="active-nav" className={classes.menu}><Button color="inherit">Contact</Button></NavLink>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
