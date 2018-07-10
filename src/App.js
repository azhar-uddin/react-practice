import React, { Component } from 'react';
import { View } from 'react-native';
import { createRootNavigator } from './Router';
import { isSignedIn } from "./auth";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			signedIn: false,
			checkedSignIn: false
		};
	}

	componentDidMount() {
	isSignedIn()
		.then(res => this.setState({ signedIn: true, checkedSignIn: true }))
		.catch(err => alert("An error occurred"));
	}

	render() {
		const { checkedSignIn, signedIn } = this.state;
		if (!checkedSignIn) {
			return null;
		}
		const Layout = createRootNavigator(signedIn);
    	return <Layout />;
	}
}

export default App;