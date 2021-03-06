import classes from "./ProductCard.module.css";
import {
	Grid,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core";
import { Rating } from '@material-ui/lab';
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Link } from "react-router-dom";

function ProductCard({ shoe, minimal, className }) {

	const images = require.context("../../", true);

	return (
		<Grid
			item
			xs={12}
			sm={6}
			md={4}
			className={classes.gridParentForRating+' '+className}
		>
			{ minimal !== true &&
				<div>
					<Rating
						className={classes.rating}
						name="customized-empty"
						defaultValue={shoe.rating}
						precision={0.1}
						emptyIcon={<StarBorderIcon fontSize="inherit" />}
						readOnly
					/>
					<span className={classes.priceTag}>${shoe.price}</span>
				</div>
			}
			<Link
				to={`/product/${shoe.id}`}
				className={classes.gridLink}
			>
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia
							component="img"
							alt={shoe.name}
							height="300"
							image={
								images(`.${shoe.images[0]}`).default
							}
							title={shoe.name}
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="h2"
								className={classes.homeCardName}
							>
								{shoe.name}
							</Typography>
							{ minimal !== true &&
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
									className={classes.homecarddesc}
								>
									{shoe.desc}
								</Typography>
							}
						</CardContent>
						<div className={classes.shopNow}>
							<span>{ minimal === true ? 'Shop Now' : 'See Details' }</span>
						</div>
					</CardActionArea>
				</Card>
			</Link>
		</Grid>
	);
}

export default ProductCard;