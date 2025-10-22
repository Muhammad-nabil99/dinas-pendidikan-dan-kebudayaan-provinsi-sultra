import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Eye, Play } from "lucide-react";

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

interface AlbumListItemProps {
  album: Album;
  onClick: (album: Album) => void;
}

const AlbumListItem: React.FC<AlbumListItemProps> = ({ album, onClick }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card
      key={album.id}
      className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-gallery-primary rounded-xl"
      onClick={() => onClick(album)}
    >
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="relative flex-shrink-0">
            <img
              loading="lazy"
              src={album.coverImage}
              alt={album.title}
              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
            />
            {album.category === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                <div className="bg-white bg-opacity-90 rounded-full p-2">
                  <Play className="h-4 w-4 text-gallery-primary" />
                </div>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-gallery-text-primary text-sm sm:text-base">
                {album.title}
              </h3>
              <div className="flex gap-2">
                <Badge
                  variant={album.category === "video" ? "default" : "secondary"}
                  className={`text-xs ${
                    album.category === "video"
                      ? "bg-gallery-primary hover:bg-gallery-primary-dark"
                      : ""
                  }`}
                >
                  {album.category === "video" ? "Video" : "Foto"}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {album.mediaCount} Media
                </Badge>
              </div>
            </div>
            <div className="space-y-1 text-xs sm:text-sm text-gallery-text-secondary mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(album.date)}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {album.location}
              </div>
            </div>
            <Button
              size="sm"
              className="bg-gallery-primary hover:bg-gallery-primary-dark transition-colors duration-200 text-xs sm:text-sm"
            >
              <Eye className="h-3 w-3 mr-1" />
              {album.category === "video" ? "Lihat Video" : "Lihat Album"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlbumListItem;
