import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';

import { useLocation } from '../../hooks/useLocation';

const Map: React.FC = () => {
	const { params } = useRoute();
	const { region } = useLocation();

	const { latitude, longitude } = params as {
		latitude: number;
		longitude: number;
	};

	return (
		<MapView
			style={{ flex: 1 }}
			initialRegion={region}
			provider={PROVIDER_GOOGLE}
		>
			<Marker
				coordinate={{
					latitude,
					longitude,
				}}
			/>
		</MapView>
	);
};

export default Map;
