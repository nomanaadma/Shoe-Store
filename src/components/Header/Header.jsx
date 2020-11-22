import classes from "./Header.module.css";
import logo from "../../images/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { ListItem, ListItemIcon, ListItemText, Divider, List, Drawer, IconButton, AppBar, Toolbar, Button } from "@material-ui/core"

function Header() {
	const location = useLocation();
	const activeClassName = "active-nav";

	const activeProductDetail = location.pathname.includes("product/")
		? activeClassName
		: "";

	const menuItems = [
		{ icon: () => <HomeIcon />, name: "Home", link: "/" },
		{ icon: () => <ListAltIcon />, name: "Products", link: "/products" },
		{ icon: () => <InfoIcon />, name: "About", link: "/about" },
		{ icon: () => <ContactMailIcon />, name: "Contact", link: "/contact" },
	];

	const [open, setOpen] = useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const menuClassName = link => {		
		if (link.includes("product")) {
			return classes.menu + " " + activeProductDetail;
		}
		return classes.menu;
	};

	return (
		<div className={classes.root}>
			<Drawer
				className={classes.drawer}
				variant="temporary"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					{menuItems.map(
						({ name, link, icon }, index) => {
							return (
								<NavLink
									key={index}
									to={link}
									exact
									activeClassName={activeClassName}
									className={menuClassName(link)}
									onClick={handleDrawerClose}
								>
									<ListItem button key={index}>
										<ListItemIcon>
											{icon()}
										</ListItemIcon>
										<ListItemText primary={name} />
									</ListItem>
								</NavLink>
							);
						}
					)}
				</List>
			</Drawer>
			<AppBar position="static" className={classes.navbar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(
							classes.menuButton,
							open && classes.hide
						)}
					>
						<MenuIcon />
					</IconButton>
					<div className={classes.logo}>
						<img src={logo} style={{ width: "175px" }} alt="Logo" />
					</div>

					{menuItems.map(({ name, link }, index) => {
						return (
							<NavLink
								key={index}
								to={link}
								exact
								activeClassName={activeClassName}
								className={menuClassName(link)+' '+classes.navitems}
							>
								<Button color="inherit">{name}</Button>
							</NavLink>
						);
					})}
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
