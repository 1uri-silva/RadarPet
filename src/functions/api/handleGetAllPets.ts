import { api } from '#services/api-axios';

import type { Pet } from '#models/Pets';

async function handleGetAllPets(): Promise<Pet[]> {
	const { data } = await api.get<Pet[]>('pets');

	return data;
}

export { handleGetAllPets };
