import { Location } from './Locations';

interface Pet {
	id: string;
	name: string;
	age: number;
	species: string;
	location: Location;
}

interface ResponsePet {
	pet: Pet;
}

export { Pet, ResponsePet };
