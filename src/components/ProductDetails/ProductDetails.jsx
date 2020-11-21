import classes from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';
import shoesDetails, { benefits, colors } from '../../data/ShoesDetails';
import Rating from '@material-ui/lab/Rating';
import { Paper, Typography, Chip, Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

function ProductDetails() {

	const { id } = useParams();
	const productDetail = shoesDetails.find(x => x.id === Number(id));
	const images = require.context("../../", true);
		
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Carousel autoPlay={true} animation={'slide'} interval={100000}>
                        {
                            productDetail.images.map((item, index) => {
                                return (
                                    <Paper className={classes.paperCarouselHeight} key={index}>
                                        <img src={images(`.${item}`).default} style={{ maxWidth: '100%' }} alt={productDetail.name + '-img-' + index}/>
                                    </Paper>
                                )
                            })
                        }
                    </Carousel>
                </Grid>
                <Grid item xs={12} sm={8}>
		
					<Typography variant="h3" className={classes.productheading} gutterBottom>{productDetail.name}</Typography>
					<Typography variant="h6" gutterBottom>Price: ${productDetail.price}</Typography>
					<Typography variant="h5" className={classes.sectionHeading} gutterBottom>Sizes</Typography>
					{
						productDetail.sizes.map((item, index) => {
							return (
								<Chip key={index} label={item} className={classes.chip} />
							)
						})
					}
					<Typography variant="h5" className={classes.sectionHeading} gutterBottom>Colors</Typography>
					{
						colors.map((item, index) => {
							return (
								<Chip key={index} label='1' className={classes.chip} style={{ color: item, backgroundColor: item, borderRadius: '50%' }} />
							)
						})
					}
					<Typography variant="h5" className={classes.sectionHeading} gutterBottom>Description</Typography>
					<p>{productDetail.desc}</p>
					<Typography variant="h5" className={classes.sectionHeading} gutterBottom>Benefits</Typography>
					<ul className={classes.benefits}>
						<p>{benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}</p>
					</ul>
					<Typography variant="h6" gutterBottom>Reviews ({productDetail.reviewsCount})</Typography>
					<Rating name="half-rating-read" defaultValue={productDetail.rating} precision={0.1} readOnly />
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductDetails;