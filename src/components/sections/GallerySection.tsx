import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import { dummyAlbums } from "@/pages/Galery";

const GallerySection = () => {
  const galleryItems = dummyAlbums.slice(0, 6);

  // 🔑 State untuk modal
  const [selectedItem, setSelectedItem] = useState<typeof dummyAlbums[0] | null>(
    null
  );

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-education-green/10 rounded-full mb-4">
            <Camera className="w-4 h-4 text-education-green mr-2" />
            <span className="text-sm font-medium text-education-green">
              Galeri Kegiatan
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dokumentasi Kegiatan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kumpulan foto dan video kegiatan pendidikan di Sulawesi Tenggara
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              onClick={() => setSelectedItem(item)} // 👈 ketika klik, buka modal
              className="group overflow-hidden hover:shadow-medium transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm mb-2">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Play Icon */}
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
                    className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
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
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/Galery">
            <Button
              variant="outline"
              className="border-education-green text-education-green hover:bg-education-green hover:text-white"
            >
              <span>Lihat Galeri Lengkap</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full relative p-4">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-lg font-semibold mb-3">{selectedItem.title}</h2>

            {selectedItem.category === "video" ? (
              <video
                src={selectedItem.media[0].url}
                controls
                className="w-full rounded-lg"
              />
            ) : (
              <img
                src={selectedItem.coverImage}
                alt={selectedItem.title}
                className="w-full rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
