import { createContext, ReactNode, useEffect, useState } from 'react';

import { requestLocationForegroundPermission } from '#functions/requests/locationRequest';

import { LocationRegion } from '#models/Locations';

const LocationContext = createContext({} as LocationRegion);

const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [region, setRegion] = useState<LocationRegion>({
		initialRegion: {
			latitude: 37.78825,
			longitude: -122.4324,
		},
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});

	useEffect(() => {
		requestLocationForegroundPermission().then(({ latitude, longitude }) => {
			setRegion({
				initialRegion: { latitude, longitude },
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			});
		});
	}, []);

	return (
		<LocationContext.Provider value={region}>
			{children}
		</LocationContext.Provider>
	);
};

export { LocationContext, LocationProvider };
