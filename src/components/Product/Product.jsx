import {
	Grid,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core";
import { Pagination, Rating } from '@material-ui/lab';
import shoesDetails from "../../data/ShoesDetails";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import classes from "./Product.module.css";
import { Link, useParams, Redirect } from "react-router-dom";
import { paginate } from "../../utils/paginate";

function Products({ history }) {

	const images = require.context("../../", true);
	let { page } = useParams();
	page = parseInt(page || '1');

	const pageSize = 6;
	let currentShoes = paginate(shoesDetails, page, pageSize);
	const pageCount = Math.ceil(shoesDetails.length / pageSize);

	const paginationHandleChange = (event, value) => {
		window.scroll({top: 0, left: 0, behavior: 'smooth' });
		history.push('/products/'+value);
    };

	return (
		<>
		<Grid container spacing={2}>
			{currentShoes.map((shoe, index) => {
				return (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						className={classes.gridParentForRating}
						key={index}
					>
						<Rating
							className={classes.rating}
							name="customized-empty"
							defaultValue={shoe.rating}
							precision={0.1}
							emptyIcon={<StarBorderIcon fontSize="inherit" />}
						/>
						<span className={classes.priceTag}>${shoe.price}</span>
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
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
											className={classes.homecarddesc}
										>
											{shoe.desc}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Link>
					</Grid>
				);
			})}
		</Grid>
		{ pageCount > 1 && <Pagination count={pageCount} onChange={paginationHandleChange} variant="outlined" page={page} color="secondary" className={classes.pagination} />}
		</>
	);
}

export default Products;
