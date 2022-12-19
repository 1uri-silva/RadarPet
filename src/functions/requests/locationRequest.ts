import * as LocationRequest from 'expo-location';
import { Location } from '#models/Locations';

async function requestLocationForegroundPermission(): Promise<Location> {
	const { status } = await LocationRequest.requestForegroundPermissionsAsync();

	if (!status) {
		return;
	}

	const {
		coords: { latitude, longitude },
	} = await LocationRequest.getCurrentPositionAsync();

	return {
		latitude,
		longitude,
	};
}

export { requestLocationForegroundPermission };
