import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { NavComponent } from './common';
import {onSignOut} from '../auth'

class Drawer extends Component {
	navigateToScreen = (route) => () => {
		const navigateAction = NavigationActions.navigate({
			routeName: route
		});
		this.props.navigation.dispatch(navigateAction);
	}

	render () {
		const { 
			menuStyle,
			menuHeaderStyle,
			headerTextStyle,
			navHeaderStyle,
			navHeaderTextStyle,
			navStyle,
			individualNavStyle,
			navTextStyle
		} = styles
		return (
			<View style={menuStyle}>
				<View style={menuHeaderStyle}>
					<Text style={headerTextStyle}>SenecaGlobal</Text>
				</View>
				<ScrollView>
					<View style={navHeaderStyle}>
						<Text style={navHeaderTextStyle}>Navigation</Text>
					</View>
					<View style={navStyle}>
						<NavComponent
							icon="home"
							screen="Home"
							onPress={this.navigateToScreen('Home')}
						/>
						<NavComponent
							icon="user"
							screen="Profile"
							onPress={this.navigateToScreen('Profile')}
						/>
						<NavComponent
							icon="info"
							screen="SenecaNews"
							onPress={this.navigateToScreen('SenecaNews')}
						/>
						<NavComponent
							icon="credit-card"
							screen="Ecards"
							onPress={this.navigateToScreen('Ecards')}
						/>
						<NavComponent
							icon="log-out"
							screen="Logout"
							onPress={() => onSignOut().then(() => this.props.navigation.navigate("SignedOut"))}
							style={{borderBottomWidth: 0}}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

Drawer.propTypes = {
  navigation: PropTypes.object
};

const styles = {
	menuStyle: {
		backgroundColor: 'black',
		flex: 1
	},
	menuHeaderStyle: {
		backgroundColor: '#ff9800',
		padding: 20
	},
	headerTextStyle: {
		color: '#fff',
		fontSize: 25
	},
	navHeaderStyle: {
		padding: 20
	},
	navHeaderTextStyle: {
		color: '#fff',
		fontSize: 20
	},
	navStyle: {
		borderWidth: 1,
		borderColor: '#212121'
	}
}


export { Drawer };