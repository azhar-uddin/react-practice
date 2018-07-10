import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const NavComponent = (props) => {
	const {
		individualNavStyle,
		navTextStyle,
		iconViewStyle,
		screenViewStyle
	} = styles
	return(
		<TouchableWithoutFeedback 
			onPress={props.onPress}
		>
			<View style={individualNavStyle}>
				<View style={iconViewStyle}>
					<Icon 
		              name={props.icon}
		              size={30} 
		              color="white"
		            />
		        </View>
	            <View style={[screenViewStyle, props.style]}>
					<Text 
						style={navTextStyle}
					>
						{props.screen}
					</Text>
					<Icon 
		              name="chevron-right" 
		              size={30} 
		              color="grey"
		              style={{flex:1}}
		            />
				</View>
	        </View>
		</TouchableWithoutFeedback>
	);
}

const styles = {
	individualNavStyle: {
		flexDirection: 'row',
		flex: 1
	},
	navTextStyle: {
		color: '#fff',
		fontSize: 22,
		flex: 5
	},
	iconViewStyle: {
		padding: 15,
		flex: 1
	},
	screenViewStyle: {
		padding: 15,
		borderBottomWidth: 1,
		borderColor: '#212121',
		flex: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
}

export { NavComponent }