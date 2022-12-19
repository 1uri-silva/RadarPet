import React, { ReactNode } from 'react';
import { LocationProvider } from './locationContext';

const ContextsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	return <LocationProvider>{children}</LocationProvider>;
};

export { ContextsProvider };
