import { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

import { useRoute } from '@react-navigation/native';

const Map: React.FC = () => {
	const { params } = useRoute();
	const { latitude, longitude } = params as {
		latitude: number;
		longitude: number;
	};

	const [region, setRegion] = useState({
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});

	useEffect(() => {
		setRegion({
			latitude: latitude,
			longitude: longitude,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		});
	}, [latitude, longitude]);

	return (
		<MapView region={region} style={{ flex: 1 }} provider='google'>
			<Marker
				coordinate={{
					latitude: latitude,
					longitude: longitude,
				}}
			/>
		</MapView>
	);
};

export default Map;
