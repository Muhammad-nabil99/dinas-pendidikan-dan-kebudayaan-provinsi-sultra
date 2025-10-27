import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import useGetBerita from "@/features/news/useGetBerita";

const NewsSection = () => {
  const { berita, isLoading } = useGetBerita();

  if (isLoading) return "Loading...";

  const latestNews = berita
    ?.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    ?.slice(0, 3);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-government-blue/10 rounded-full mb-4">
            <CalendarDays className="w-4 h-4 text-government-blue mr-2" />
            <span className="text-sm font-medium text-government-blue">
              Berita Terbaru
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Informasi & Berita Terkini
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ikuti perkembangan terbaru seputar pendidikan di Sulawesi Tenggara
          </p>
        </div>

        {/* Featured News */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Berita Utama */}
          <Card
            className={`${
              latestNews?.length <= 1 && "lg:col-start-2"
            } lg:col-span-3 shadow-md rounded-2xl overflow-hidden`}
          >
            {/* Gambar besar */}
            <div className="w-full h-96 relative overflow-hidden">
              <img
                loading="lazy"
                src={`https://dashboard.btikpsultra.my.id/storage/${latestNews?.[0]?.coverImage}`}
                alt={latestNews?.[0]?.judul}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten menempel rapat di bawah gambar */}
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-2xl font-bold line-clamp-2">
                {latestNews?.[0]?.judul}
              </h2>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Timer className="w-4 h-4" />{" "}
                  {new Date(latestNews?.[0]?.created_at).toLocaleTimeString()}
                </span>
                <span className="flex items-center gap-1">
                  📅{" "}
                  {new Date(latestNews?.[0]?.created_at).toLocaleDateString()}
                </span>
              </div>

              <p className="text-muted-foreground line-clamp-3">
                {latestNews?.[0]?.deskripsi}
              </p>

              <div className="mt-2">
                <Link to={`/berita/${latestNews?.[0]?.id}`}>
                  <Button
                    variant="default"
                    className="bg-gradient-to-r from-blue-600 to-green-400"
                  >
                    Selengkapnya
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Berita Lainnya */}
          {latestNews?.length > 1 && (
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {latestNews?.map((item) => (
                <Card
                  key={item?.id}
                  // className="flex flex-col p-4 shadow-sm rounded-xl h-full"
                  className="flex flex-col p-4 shadow-sm rounded-xl h-full bg-white/20 backdrop-blur-md border border-blue/30"
                >
                  <img
                    loading="lazy"
                    src={`https://dashboard.btikpsultra.my.id/storage/${item?.coverImage}`}
                    alt={item?.judul}
                    className="w-full h-32 rounded-md object-cover mb-3"
                  />
                  <div className="flex-1">
                    <Link to={`/berita/${item?.id}`}>
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">
                        {item?.judul}
                      </h4>
                    </Link>
                    <p className="text-xs text-muted-foreground mb-1">
                      {new Date(berita?.[0]?.created_at).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {item?.deskripsi}
                    </p>
                  </div>
                </Card>
              ))}

              <Button
                asChild
                className="col-span-2 w-full bg-gradient-to-r from-government-blue via-education-green to-green-400 text-white hover:opacity-90 mt-2"
              >
                <Link to="/berita">Lihat Semua Berita</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
