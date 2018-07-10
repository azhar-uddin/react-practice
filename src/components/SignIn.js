import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button, Input, Spinner } from './common';
import {onSignIn} from '../auth';
import { sglogo } from '../images'

class SignIn extends Component {
	state = {email: '', password: '', error: '', loading: false};
	
	onButtonPress() {
		const { email, password } = this.state
		this.setState({error: '', loading: true})

		fetch('http://192.168.7.74/SGMobileApp/api/public/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"email": "sirish.tallapak@senecaglobal.com",
				"password": "123123123"
			})
		})
		.then((response) => response.json())
		.then((responseJson) => {
			if(!responseJson.token){
				this.onLoginFail()
			} else {
				onSignIn(responseJson.token);
				this.props.navigation.navigate("SignedIn");
			}
		})
		.catch(this.onLoginFail.bind(this));
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication Failed.',
			loading: false
		})
	}

	onLoginSuccess() {
		this.setState({ 
			email: '',
			password: '',
			error: '', 
			loading: false 
		});
		console.log("adgasg")
		this.props.navigation.navigate("SignedIn");
	}

	renderButton() {
		if(this.state.loading) {
			return <Spinner size="small" />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				SIGN IN
			</Button>
		);
	}

	render() {
		const { 
			logoView,
			cardStyle,
			scrollViewStyle
		} = styles
		return(
			<ScrollView style={scrollViewStyle}>
				<View style={logoView}>
					<Image source={sglogo} />
				</View>
				<View style={cardStyle}>
					<Input 
						placeholder="myemail@example.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</View>
				<View style={cardStyle}>
					<Input 
						secureTextEntry
						placeholder="Password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</View>
				<Text>
					{this.state.error}
				</Text>
				<View style={cardStyle}>
					{ this.renderButton() }
				</View>
				<Text style={{alignSelf: 'center', marginTop: 10}}>© 2018 SenecaGlobal</Text>
			</ScrollView>
		);
	}
}

const styles = {
	scrollViewStyle: {
		backgroundColor: '#fff',
		flex: 1
	},
	cardStyle: {
		padding: 10,
		backgroundColor: '#fff',
		flexDirection: 'row',
	},
	logoView: {
		alignItems: 'center',
		padding: 20,
	},
}

export { SignIn }