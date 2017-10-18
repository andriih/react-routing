import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route , hashHistory } from 'react-router'

import App from './App';
import About from'./pages/About'
import Books from'./pages/Books'
import NotFound from'./pages/NotFound'

import 'material-components-web/dist/material-components-web.css';
import './index.css';


ReactDOM.render(
				<Router history={hashHistory}>
					<div>
						<Route path="/" component={App} />
						<Route path="about" component={About} />
						<Route path="books" component={Books} />
						<Route path="*" component={NotFound} />	

					</div>
				</Router>,
			document.getElementById('root')
	)