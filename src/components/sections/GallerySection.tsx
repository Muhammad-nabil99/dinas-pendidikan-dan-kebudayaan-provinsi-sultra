import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Play } from "lucide-react";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import { Link } from "react-router-dom";

type GalleryItems = {
  id: number;
  type: string;
  title: string;
  image: string;
};

const GallerySection = () => {
  const galleryItems: GalleryItems[] = [
    {
      id: 1,
      type: "image",
      title: "PPBD 2024 sulawesi tenggara ",
      image: gallery1,
    },
    {
      id: 2,
      type: "image",
      title: "Profil Sekolah Unggulan",
      image: gallery2,
    },
    {
      id: 3,
      type: "image",
      title: "Workshop Guru Digital",
      image: gallery3,
    },
    {
      id: 4,
      type: "image",
      title: "Pembangunan Gedung Sekolah",
      image: gallery4,
    },
    {
      id: 5,
      type: "image",
      title: "Lomba Olimpiade Sains",
      image: gallery5,
    },
    {
      id: 6,
      type: "image",
      title: "Kegiatan Ekstrakurikuler",
      image: gallery6,
    },
  ];

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
              className="group overflow-hidden hover:shadow-medium transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
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
                {item.type === "video" && (
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
                      item.type === "video"
                        ? "bg-red-500/80 text-white"
                        : "bg-blue-500/80 text-white"
                    }`}
                  >
                    {item.type === "video" ? (
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
    </section>
  );
};

export default GallerySection;
