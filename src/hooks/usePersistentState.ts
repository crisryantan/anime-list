'use client';

import { useState, useEffect } from 'react';

// Note: This hook is a wrapper around useState that persists the state to localStorage.
// It's used to persist the user profile state across page reloads.
export function usePersistentState<T>(
	key: string,
	initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
	const [state, setState] = useState<T>(initialValue);
	useEffect(() => {
		try {
			const item = window.localStorage.getItem(key);
			if (item) {
				setState(JSON.parse(item));
			}
		} catch (error) {
			console.error(`Error reading localStorage key "${key}":`, error);
		}
	}, [key]);

	useEffect(() => {
		try {
			window.localStorage.setItem(key, JSON.stringify(state));
		} catch (error) {
			console.error(`Error setting localStorage key "${key}":`, error);
		}
	}, [key, state]);

	return [state, setState];
} 