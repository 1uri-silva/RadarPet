import { useContext } from 'react';
import { LocationContext } from '../contexts/locationContext';

const useLocation = () => {
	const context = useContext(LocationContext);

	if (!context) {
		throw new Error('Location context is not initialized');
	}

	return context;
};

export { useLocation };
