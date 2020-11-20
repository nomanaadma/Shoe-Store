import { Header, Home, Product, ProductDetails, About, Contact, Footer, NotFound } from './components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<Container maxWidth="xl" className="wrapper">
				<Switch>
					<Route path="/" exact component={Home} />
					<Redirect from="/home" exact to="/" />
					<Route path="/product/:id" component={ProductDetails} />
					<Route path="/products/:page" component={Product} />
					<Route path="/products" component={Product} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/not-found" component={NotFound} />
					<Redirect to="not-found" />
				</Switch>
			</Container>
			<Footer />
		</>
	)
}

export default App;
