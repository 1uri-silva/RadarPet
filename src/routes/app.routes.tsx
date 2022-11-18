import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreensStackNavigator } from './navigation';

import Home from '../home';
import Pets from '../pets';
import Map from '../map';

export default function AppRoutes() {
	const { Navigator, Screen } =
		createNativeStackNavigator<ScreensStackNavigator>();

	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Screen name='Home' component={Home} />
				<Screen name='Pets' component={Pets} />
				<Screen name='Map' component={Map} />
			</Navigator>
		</NavigationContainer>
	);
}
