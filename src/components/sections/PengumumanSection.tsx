import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import useGetPengumuman from "@/features/pengumuman/useGetPengumuman";

const PengumumanSection = () => {
  const { pengumuman, isLoading } = useGetPengumuman();

  if (isLoading) return;

  const latestAnnouncement = pengumuman?.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-government-blue/10 rounded-full mb-4">
            <CalendarDays className="w-4 h-4 text-government-blue mr-2" />
            <span className="text-sm font-medium text-government-blue">
              Pengumuman
            </span>
          </div>
          <h2 className="capitalize text-center text-3xl md:text-4xl font-bold text-foreground mb-4">
            pengumuman resmi seputar pendidikan di Sulawesi Tenggara.
          </h2>
        </div>

        {/* Featured News */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Berita Utama */}
          <Card
            className={`lg:col-start-2
            lg:col-span-3 shadow-md rounded-2xl overflow-hidden`}
          >
            {/* Gambar besar */}
            <div className="w-full h-96 relative overflow-hidden">
              <img
                loading="lazy"
                src={`https://dashboard.btikpsultra.my.id/storage/${pengumuman?.[0]?.coverImage}`}
                alt={latestAnnouncement?.[0]?.judul}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten menempel rapat di bawah gambar */}
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-2xl font-bold line-clamp-2">
                {latestAnnouncement?.[0]?.judul}
              </h2>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Timer className="w-4 h-4" />{" "}
                  {new Date(latestAnnouncement?.[0]?.created_at).toLocaleTimeString()}
                </span>
                <span className="flex items-center gap-1">
                  📅{" "}
                  {new Date(latestAnnouncement?.[0]?.created_at).toLocaleDateString()}
                </span>
              </div>

              <p className="text-muted-foreground line-clamp-3">
                {latestAnnouncement?.[0]?.deskripsi}
              </p>

              <div className="mt-2">
                <Link to={`/berita/${latestAnnouncement?.[0]?.id}`}>
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
        </div>
      </div>
    </section>
  );
};

export default PengumumanSection;
