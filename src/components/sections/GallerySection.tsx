import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Play, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { dummyAlbums } from "@/pages/Galery";
import ReactDOM from "react-dom";

// Define the type for a single album/gallery item
export interface GalleryItem {
  id: number;
  title: string;
  coverImage: string;
  description: string;
  category: "foto" | "video"; // Use literal types for known categories
  media?: { url: string }[];
}

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const galleryItems: GalleryItem[] = dummyAlbums.slice(0, 6);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  // Menutup modal saat klik di luar area modal
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (selectedItem) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedItem]);


  useEffect(() => {
  if (selectedItem) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  // Cleanup when component unmounts
  return () => {
    document.body.style.overflow = "auto";
  };
}, [selectedItem]);

  return (
    <section className="bg-white py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-4">
            <Camera className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-600">
              Galeri Kegiatan
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dokumentasi Kegiatan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kumpulan foto dan video kegiatan pendidikan di Sulawesi Tenggara
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryItems.map((item: GalleryItem) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute  inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="capitalize text-white font-semibold text-sm mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Play Icon (jika video) */}
                {item.category === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                )}
                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      item.category === "video"
                        ? "bg-red-500/80 text-white"
                        : "bg-blue-500/80 text-white"
                    }`}
                  >
                    {item.category === "video" ? (
                      <>
                        <Play className="w-3 h-3 mr-1" />
                        Video
                      </>
                    ) : (
                      <>
                        <Camera className="w-3 h-3 mr-1" />
                        Foto
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/Galery">
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              <span>Lihat Galeri Lengkap</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedItem &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
            <div
              ref={modalRef}
              className=" bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl w-full relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-700 hover:text-red-500 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="p-3">
                {selectedItem.category === "video" ? (
                  <video
                    src={selectedItem.media?.[0]?.url}
                    controls
                    className="w-full rounded-lg max-h-[60vh] object-cover"
                  />
                ) : (
                  <img
                    src={selectedItem.coverImage}
                    alt={selectedItem.title}
                    className="w-full rounded-lg max-h-[60vh] object-cover"
                  />
                )}
                <h2 className="capitalize my-2 text-2xl font-bold text-gray-900 mb-4">
                  {selectedItem.title}
                </h2>
                <p className="mt-4 text-gray-700">
                  {selectedItem.media[0].description}
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default GallerySection;
