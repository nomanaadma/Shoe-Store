import { Header, Home, Product, ProductDetails, About, Contact, Footer, NotFound } from './components';
import { Route, Switch, Redirect } from 'react-router-dom';
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<Switch>
                <Route path="/" exact component={Home} />
				<Redirect from="/home" exact to="/" />
                <Route path="/product/:id" component={ProductDetails} />
                <Route path="/products" component={Product} />
				<Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
				<Route path="/not-found" component={NotFound} />
				<Redirect to="not-found" />
			</Switch>
			<Footer />
		</>
	)
}

export default App;
