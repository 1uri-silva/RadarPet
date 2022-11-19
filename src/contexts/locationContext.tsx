import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react';
import * as Location from 'expo-location';

type ContextProps = {
	region: {
		latitude: number;
		longitude: number;
		latitudeDelta: number;
		longitudeDelta: number;
	};
	getCoordinates(): Promise<void>;
};

const LocationContext = createContext({} as ContextProps);

const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [region, setRegion] = useState({
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});

	const getCoordinates = useCallback(async () => {
		const { status } = await Location.requestForegroundPermissionsAsync();
		if (!status) {
			return;
		}

		const {
			coords: { latitude, longitude },
		} = await Location.getCurrentPositionAsync();

		setRegion({
			latitude,
			longitude,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		});
	}, []);

	const values = useMemo(
		() => ({ region, getCoordinates }),
		[region, getCoordinates]
	);
	return (
		<LocationContext.Provider value={values}>
			{children}
		</LocationContext.Provider>
	);
};

export { LocationContext, LocationProvider };
