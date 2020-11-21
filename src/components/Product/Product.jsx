import { Grid } from "@material-ui/core";
import { Pagination } from '@material-ui/lab';
import shoesDetails from "../../data/ShoesDetails";
import classes from "./Product.module.css";
import { useParams } from "react-router-dom";
import { paginate } from "../../utils/paginate";
import ProductCard from '../ProductCard/ProductCard'

function Products({ history }) {

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
			{currentShoes.map((shoe, index) => <ProductCard key={index} shoe={shoe} />)}
		</Grid>
		{ pageCount > 1 && <Pagination count={pageCount} onChange={paginationHandleChange} variant="outlined" page={page} color="secondary" className={classes.pagination} />}
		</>
	);
}

export default Products;
