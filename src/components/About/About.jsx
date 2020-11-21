import { Typography } from '@material-ui/core';

function About() {
	return (
		<div>
			<Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '40px' }}>ABOUT US</Typography>
			<Typography variant="h6" gutterBottom>PROFILE</Typography>
			<p>Adidas has its roots in Germany but we are a truly global company. Around the world we employ over 59,000 people. Employees from about 100 nations are working at our global HQ in Herzogenaurach, Germany – the ‘World of Sports’. In 2019 we produced over 1.1 billion sports and sports lifestyle products with independent manufacturing partners worldwide and generated sales of € 23.640 billion. These numbers alone can easily suggest that adidas is quite a large and also multifaceted organization. True. But we keep things simple, lean and fast. And we will use this approach now to give an overview of what our company is all about.</p>
			<Typography variant="h6" gutterBottom>IT IS ALL ABOUT SPORT</Typography>
			<p>This is where we come from, everything we do is rooted in sport. And sport plays an increasingly important role in more and more people’s lives, on and off the field of play. Sport is central to every culture and society and is core to an individual’s health and happiness. Therefore, we believe that, through sport, we have the power to change lives. This core belief guides the way we run our company, how we work with our partners, how we create our products, and how we engage with our consumers.</p>
			<Typography variant="h6" gutterBottom>WE PLAY TO WIN</Typography>
			<p>Athletes will not settle for average. And neither do we. We have a clear mission: To be the best sports company in the world. Every day, we come to work to create and sell the best sports and fitness products in the world, and to offer the best service and consumer experience – and to do it all in a sustainable way. To successfully do that, we focus entirely on our authentic sports brands as they connect and engage with our consumers.</p>
		</div>
	);
}

export default About;
