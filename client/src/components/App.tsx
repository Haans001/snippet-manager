import { GlobalStyles } from 'assets/styles';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Create from 'pages/Create';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Helmet from './Helmet';
import Navbar from './Navbar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => (
	<Router>
		<GlobalStyles />
		<Helmet />
		<Navbar />
		<Switch>
			<Route path='/profile'>
				<Profile />
			</Route>
			<Route path='/create'>
				<Create />
			</Route>
			<Route path='/'>
				<Home />
			</Route>
		</Switch>
	</Router>
);

export default App;
