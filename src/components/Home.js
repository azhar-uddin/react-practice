import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions, Animated } from 'react-native';
import { slider1, slider2, slider3, kyc } from '../images'

class Home extends Component {
	state = {
		screenHeight: Dimensions.get('window').height,      
  		screenWidth: Dimensions.get('window').width,
  		photos: [slider1, slider2, slider3],
	}
	scrollX = new Animated.Value(0)
	render() {
		let position = Animated.divide(this.scrollX, this.state.screenWidth);
		const {
			scrollViewStyle,
			viewStyle,
			boxStyle,
			contentStyle,
			headingStyle,
			corousalView,
			indicatorStyle
		} = styles
		return(
			<ScrollView style={scrollViewStyle}>
				<View style={viewStyle}>
					<View style={boxStyle}>
						<Text style={contentStyle}>Welcome SenecaGlobal Mobile Application</Text>
					</View>
					<View style={[boxStyle, { padding: 0}]}>
						<View style={corousalView}>
							<ScrollView
					            horizontal
					            pagingEnabled={true}
					            showsHorizontalScrollIndicator={false}
					            onScroll={Animated.event(
					              [{ nativeEvent: { contentOffset: { x: this.scrollX } } }]
					            )}
					          >
					          	{this.state.photos.map((src, i) => {
					          		return(
					          			<Image 
					          				key={i}
					          				resizeMode="cover"
					          				style={{width: this.state.screenWidth}}
					          				source={src}
					          			/>
					          		);
					          	})}
							</ScrollView>
							<View
								style={indicatorStyle}
							>
					          	{this.state.photos.map((_, i) => {
					          		let opacity = position.interpolate({
									  inputRange: [i - 0.50000000001, i - 0.5, i, i + 0.5, i + 0.50000000001], // only when position is ever so slightly more than +/- 0.5 of a dot's index...
									  outputRange: [0.3, 1, 1, 1, 0.3], // ... is when the opacity changes from 1 to 0.3
									  extrapolate: 'clamp'
									});
					          		return(
					          			<Animated.View
					          				key={i}
					          				style={{ opacity, height: 10, width: 10, backgroundColor: '#ff9800', margin: 10, borderRadius: 5 }}
					          			/>
					          		);
					          	})}
				          	</View>
						</View>
					</View>
					<View style={boxStyle}>
						<Text style={headingStyle}>Quality Policy :</Text>
						<Text style={contentStyle}>Deliver defect-free software services on time, exceeding client expectations</Text>
					</View>
					<View style={boxStyle}>
						<Text style={headingStyle}> Information Security Policy :</Text>
						<Text style={contentStyle}>Protect stakeholders information assets from identified risks, enabling business continuity and growth</Text>
					</View>
					<View style={boxStyle}>
						<Text style={headingStyle}>HR Initiative : Know Your Colleague</Text>
						<Image 	
							resizeMode="contain" 
							style={{padding: 0,width: this.state.screenWidth, height: (this.state.screenWidth)/2}} 
							source={kyc} />
					</View>
				</View>
			</ScrollView>
		);
	}
}

styles= {
	scrollViewStyle: {
		backgroundColor: '#fff',
		flex: 1
	},
	viewStyle: {
		flex: 1,
		paddingTop: 40,
	},
	boxStyle: {
		padding: 20,
		borderWidth: 1,
		borderColor: '#ddd',
		marginBottom: 40,
	},
	contentStyle: {
		color: '#000',
		fontSize: 15
	},
	headingStyle: {
		color: '#737373',
		fontSize: 18,
		marginBottom: 10
	},
	corousalView: { 
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	indicatorStyle: {
		flexDirection: 'row',
		position: 'absolute',
		alignSelf: 'flex-end'
	}
}

export { Home }