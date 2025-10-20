import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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

interface AlbumCardProps {
  album: Album;
  onClick: (album: Album) => void;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, onClick }) => {
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
      key={album.id + Math.random() * 100}
      className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-gallery-primary rounded-xl"
      onClick={() => onClick(album)}
    >
      <div className="relative overflow-hidden">
        <img
          loading="lazy"
          src={album.coverImage}
          alt={album.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {album.category === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
            <div className="bg-white bg-opacity-90 rounded-full p-3 transform scale-100 group-hover:scale-110 transition-transform duration-300">
              <Play className="h-6 w-6 text-gallery-primary" />
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge
            variant={album.category === "video" ? "default" : "secondary"}
            className={
              album.category === "video"
                ? "bg-gallery-primary hover:bg-gallery-primary-dark"
                : ""
            }
          >
            {album.category === "video" ? "Video" : "Foto"}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge variant="outline" className="bg-white bg-opacity-90">
            {album.mediaCount > 0 ? album.mediaCount : 1} Media
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-gallery-text-primary mb-2 line-clamp-2">
          {album.title}
        </h3>
        <div className="space-y-1 text-sm text-gallery-text-secondary">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(album.date)}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {album.location}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-gallery-primary hover:bg-gallery-primary-dark transition-colors duration-200"
          size="sm"
        >
          <Eye className="h-4 w-4 mr-2" />
          {album.category === "video" ? "Lihat Video" : "Lihat Album"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AlbumCard;
