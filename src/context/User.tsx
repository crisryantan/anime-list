'use client';

import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { usePersistentState } from '@/hooks/usePersistentState';

interface UserInfo {
	username: string
	jobTitle: string
}

interface UserContextType {
	userInfo: UserInfo
	saveUserInfo: (userInfo: UserInfo) => void
	isProfileComplete: boolean
	openProfileModal: () => void
	isProfileModalOpen: boolean
	isLoading: boolean
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
	isEditing: boolean
}

const initialUserInfo: UserInfo = {
	username: '',
	jobTitle: '',
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
	const [isLoading, setIsLoading] = useState(true);
	const [isEditing, setIsEditing] = useState(false);
	const [userInfo, setUserInfo] = usePersistentState<UserInfo>('userInfo', initialUserInfo);
	const [isProfileModalOpen, setIsProfileModalOpen] = usePersistentState<boolean>('profileModalOpen', true);
	
	useEffect(() => {
		setIsLoading(false);
	}, []);

	const isProfileComplete = Boolean(userInfo.username && userInfo.jobTitle);
	
	const openProfileModal = (isEditing?:boolean) => {
		setIsProfileModalOpen(true);
		setIsEditing(isEditing || false);
	};

	const saveUserInfo = (userInfo: UserInfo) => {
		setUserInfo(userInfo);
		setIsProfileModalOpen(false);
		setIsEditing(false);
	};
    
	return (
		<UserContext.Provider
			value={{
				isLoading,
				userInfo,
				saveUserInfo,
				isProfileComplete,
				openProfileModal,
				isProfileModalOpen,
				setIsEditing,
				isEditing,			
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
} 