interface Location {
	latitude: number;
	longitude: number;
}

interface LocationRegion {
	initialRegion: Location;
	latitudeDelta: number;
	longitudeDelta: number;
}

export { LocationRegion, Location };
