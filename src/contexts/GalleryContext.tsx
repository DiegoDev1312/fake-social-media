"use client";

import { createContext, useContext, useState } from "react";

type GalleryContextProps = {
    photo: string;
    setPhoto: (photo: string) => void;
    modalVisible: boolean;
    handleModalPress: () => void;
}

export const GalleryContext = createContext<GalleryContextProps | null>(null);

export function GalleryProvider({ children }: { children: React.ReactNode }) {
    const [photo, setPhoto] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const providerValues = {
        photo,
        setPhoto,
        modalVisible,
        handleModalPress,
    };

    function handleModalPress() {
        setModalVisible(!modalVisible);
    }

    return (
        <GalleryContext.Provider value={providerValues}>
            {children}
        </GalleryContext.Provider>
    );
}

export const useGallery = () => useContext(GalleryContext);
