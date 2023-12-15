import { useGallery } from "@/contexts/GalleryContext";

type ImageProps = {
    url: string;
}

export function Image({ url }: ImageProps) {
    const galleryInfo = useGallery();
    
    function handlePhotoPress() {
        galleryInfo?.setPhoto(url);
        galleryInfo?.handleModalPress();
    }

    return (
        <button onClick={handlePhotoPress} className="hover:opacity-60 transition-all ease-in duration-150 border rounded-lg border-gray-700 h-28">
            <img src={url} className="rounded-lg h-28 w-full object-cover" />
        </button>
    );
}