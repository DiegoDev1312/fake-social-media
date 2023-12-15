import { useGallery } from "@/contexts/GalleryContext";

export function ModalArea() {
    const galleryInfo = useGallery();

    if (!galleryInfo?.modalVisible) {
        return null;
    }

    return (
        <div className="fixed bg-black/60 top-0 right-0 left-0 bottom-0 flex items-center justify-center">
            <button onClick={galleryInfo.handleModalPress} className="absolute right-8 top-6">
                <img className="h-10 w-10 object-fill" src="/close-icon.svg" />
            </button>
            <img className="sm:w-4/5 sm:h-3/4 w-11/12 h-96 object-cover shadow-2xl rounded-lg" src={galleryInfo?.photo} />
        </div>
    );
}