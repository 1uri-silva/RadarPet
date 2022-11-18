import * as Location from 'expo-location';

const useLocation = () => {
	const getCoordinates = async () => {
		const {
			coords: { latitude, longitude },
		} = await Location.getCurrentPositionAsync();
		return {
			latitude,
			longitude,
			latitudeDelta: 0.0122,
			longitudeDelta: 0.0123,
		};
	};

	return { getCoordinates };
};

export { useLocation };
