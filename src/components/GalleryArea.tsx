"use client";

import { getImages } from "@/services/images";
import { ImageType } from "@/types/imageType";
import { useEffect, useRef, useState } from "react";
import { Image } from "./Image";
import { ModalArea } from "./ModalArea";

export function GalleryArea() {
    const observer = useRef<IntersectionObserver | null>(null);
    const observerPagination = useRef<HTMLDivElement | null>(null);

    const [photoList, setPhotoList] = useState<ImageType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        observer.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                const calcPage = page + 1;
                getImagesList(calcPage * 20);
                setPage(calcPage);
            }
        });
    }, [page]);

    useEffect(() => {
        if (observerPagination.current) {
            observer.current?.observe(observerPagination.current);
    
            return () => {
                observer.current?.disconnect();
            };
        }
    }, [observerPagination, isLoading]);

    useEffect(() => {
        getImagesList(20);
    }, []);

    async function getImagesList(limit: number) {
        setIsLoading(true);
        const photos = await getImages(limit);
        setPhotoList(photos);
        setIsLoading(false);
    }

    function renderImages() {
        return photoList.map((photo) => {
            return <Image url={photo.url} key={photo.id} />
        });
    }

    return (
        <div className="p-6">
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
                {renderImages()}
                {!isLoading && <div ref={observerPagination} className="text-white"></div>}
            </div>
            <ModalArea />
        </div>
    );
}
