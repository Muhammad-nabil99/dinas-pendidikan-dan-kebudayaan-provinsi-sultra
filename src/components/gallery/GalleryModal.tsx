import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface Media {
  id: string;
  type: "foto" | "video";
  url: string;
  thumbnail: string;
  title: string;
  description: string;
}

interface Album {
  id: string;
  title: string;
  category: "foto" | "video";
  instansi: "SMA" | "SMK" | "SLB";
  coverImage: string;
  mediaCount: number;
  date: string;
  location: string;
  description: string;
  media: Media[];
}

interface GalleryModalProps {
  selectedAlbum: Album | null;
  selectedMediaIndex: number;
  onClose: () => void;
  onMediaSelect: (index: number) => void;
  onNextMedia: () => void;
  onPrevMedia: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  selectedAlbum,
  selectedMediaIndex,
  onClose,
  onMediaSelect,
  onNextMedia,
  onPrevMedia,
}) => {
  // Fungsi untuk mengecek apakah URL adalah video YouTube
  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  // Fungsi untuk mendapatkan ID video YouTube dari URL
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Render media content berdasarkan jenis media
  const renderMediaContent = (media: Media) => {
    if (media.type === "foto") {
      return (
        <img
          loading="lazy"
          src={media.url}
          alt={media.title}
          className="w-full aspect-video object-cover object-center rounded-lg"
        />
      );
    } else {
      // Jika video YouTube, gunakan iframe
      if (isYouTubeUrl(media.url)) {
        const videoId = getYouTubeId(media.url);
        if (videoId) {
          return (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              className="w-full aspect-video rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          );
        }
      }

      // Jika video biasa, gunakan tag video
      return (
        <video
          src={media.url}
          controls
          className="w-full aspect-video object-cover rounded-lg"
        />
      );
    }
  };

  return (
    <Dialog open={!!selectedAlbum} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        {selectedAlbum && (
          <>
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="text-xl text-gallery-text-primary">
                {selectedAlbum.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 p-6">
              {/* Main Media Display */}
              <div className="relative">
                {renderMediaContent(selectedAlbum.media[selectedMediaIndex])}
                {/* Navigation Buttons */}
                {selectedAlbum.media.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100"
                      onClick={onPrevMedia}
                      disabled={selectedMediaIndex === 0}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100"
                      onClick={onNextMedia}
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
                          key={`${media.id}-${index}`}
                          className={`relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden ${
                            index === selectedMediaIndex
                              ? "ring-2 ring-gallery-primary"
                              : ""
                          }`}
                          onClick={() => onMediaSelect(index)}
                        >
                          <img
                            loading="lazy"
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
  );
};

export default GalleryModal;
