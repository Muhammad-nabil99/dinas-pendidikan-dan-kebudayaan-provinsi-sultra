import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Play, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { dummyAlbums } from "@/pages/Galery";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const GallerySection = () => {
  const galleryItems = dummyAlbums.slice(0, 6);

  // State untuk modal
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const handlePrevMedia = () => {
    if (selectedMediaIndex > 0) {
      setSelectedMediaIndex((prev) => prev - 1);
    }
  };

  const handleNextMedia = () => {
    if (selectedAlbum && selectedMediaIndex < selectedAlbum.media.length - 1) {
      setSelectedMediaIndex((prev) => prev + 1);
    }
  };

  const handleMediaSelect = (index) => {
    setSelectedMediaIndex(index);
  };

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
              onClick={() => {
                setSelectedAlbum(item);
                setSelectedMediaIndex(0);
              }}
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

      {/* Modal dari kode pertama */}
      <Dialog
        open={!!selectedAlbum}
        onOpenChange={() => setSelectedAlbum(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedAlbum && (
            <>
             

              <div className="space-y-6">
                {/* Main Media Display */}
                <div className="relative">
                  {selectedAlbum.media[selectedMediaIndex]?.type === "video" ? (
                    <video
                      src={selectedAlbum.media[selectedMediaIndex].url}
                      controls
                      className="w-full h-64 sm:h-80 object-cover rounded-lg"
                    />
                  ) : (
                    <img
                      src={selectedAlbum.media[selectedMediaIndex]?.url}
                      alt={selectedAlbum.media[selectedMediaIndex]?.title}
                      className="w-full h-64 sm:h-80 object-cover rounded-lg"
                    />
                  )}

                  {/* Navigation Buttons */}
                  {selectedAlbum.media.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100"
                        onClick={handlePrevMedia}
                        disabled={selectedMediaIndex === 0}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100"
                        onClick={handleNextMedia}
                        disabled={
                          selectedMediaIndex === selectedAlbum.media.length - 1
                        }
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Media Info */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg text-gallery-text-primary mb-2">
                        {selectedAlbum.media[selectedMediaIndex]?.title}
                      </h3>
                      <div className="flex gap-2 mb-2">
                        {selectedAlbum.media[selectedMediaIndex]?.type ===
                          "video" && (
                          <Badge className="bg-gallery-primary hover:bg-gallery-primary-dark">
                            Video
                          </Badge>
                        )}
                        <Badge variant="outline">
                          {selectedMediaIndex + 1} dari{" "}
                          {selectedAlbum.media.length}
                        </Badge>
                      </div>
                      <p className="text-gallery-text-secondary">
                        {selectedAlbum.media[selectedMediaIndex]?.description}
                      </p>
                    </div>
                    <Button className="bg-gallery-primary hover:bg-gallery-primary-dark">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>

                  {/* Media Thumbnails */}
                  {selectedAlbum.media.length > 1 && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-gallery-text-primary">
                        Media Lainnya
                      </h4>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {selectedAlbum.media.map((media, index) => (
                          <div
                            key={media.id}
                            className={`relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden ${
                              index === selectedMediaIndex
                                ? "ring-2 ring-gallery-primary"
                                : ""
                            }`}
                            onClick={() => handleMediaSelect(index)}
                          >
                            <img
                              src={media.thumbnail}
                              alt={media.title}
                              className="w-16 h-16 object-cover"
                            />
                            {media.type === "video" && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                <Play className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
