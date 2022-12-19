import { api } from '#services/api-axios';

import type { Pet, ResponsePet } from '#models/Pets';

async function handleNewPet(params: Pet): Promise<ResponsePet> {
	const { data } = await api.post<Pet>('pets', {
		id: params.id,
		name: params.name,
		age: params.age,
		species: params.species,
		location: params.location,
	});

	return {
		pet: data,
	};
}

export { handleNewPet };
