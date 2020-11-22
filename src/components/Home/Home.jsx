import classes from './Home.module.css';
import { Typography } from '@material-ui/core';
import shoesDetails from "../../data/ShoesDetails";
import { Grid, Button } from "@material-ui/core";
import ProductCard from '../ProductCard/ProductCard'
import { Link } from "react-router-dom";

function Home() {

	shoesDetails.sort(() => Math.random() - 0.5);

	return (
		<>
			<img src={require('../../images/home.png').default} alt="banner" className={classes.banner} />
			<div>
				<Typography variant="h4" gutterBottom className={classes.trendingHeading}>NOW TRENDING</Typography>
				<Grid container spacing={2}>
					{shoesDetails.slice(0, 3).map((shoe, index) => <ProductCard key={index} shoe={shoe} className={classes.card} minimal />)}
				</Grid>
				<Link to="/products" className={classes.seeCollection}>
					<Button variant="outlined" color="secondary">
						See Collection
					</Button>
				</Link>
			</div>
		</>
	);
}

export default Home;
