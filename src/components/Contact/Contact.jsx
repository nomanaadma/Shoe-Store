import classes from './Contact.module.css';
import { Card, CardContent, Typography, TextField, Button } from '@material-ui/core';

function Contact() {
	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant="h4" className={classes.heading} gutterBottom>Contact</Typography>
				<TextField label="Name" className={classes.field} />
				<TextField label="Email" className={classes.field} />
				<TextField label="Contact" className={classes.field} />
				<TextField
					className={classes.field+' '+classes.textarea}
					label="Message"
					multiline
					rows={4}
					variant="outlined"
				/>
				<Button variant="contained" color="primary" className={classes.field+' '+classes.button}>
					Contact
				</Button>
			</CardContent>
		</Card>
	);
}

export default Contact;
