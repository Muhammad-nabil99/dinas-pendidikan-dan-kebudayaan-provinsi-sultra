import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useGetDetailBerita from "@/features/news/useGetDetailBerita";
import useGetBerita from "@/features/news/useGetBerita";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
} from "lucide-react";
import DetailLoadingSkeleton from "@/components/DetailLoadingSkeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DetailBerita = () => {
  const { slug } = useParams();
  const { berita, isLoading: isLoadingBerita } = useGetBerita();
  const { detailBerita, isLoading } = useGetDetailBerita(slug);

  if (isLoading || isLoadingBerita)
    return (
      <div className="min-h-screen bg-background">
        <DetailLoadingSkeleton />
      </div>
    );

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Article Content */}
        <article className="py-8">
          <div className="max-w-4xl my-14 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Link to="/berita">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali ke Berita
                </Button>
              </Link>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-government-blue/10 text-government-blue"
                >
                  {detailBerita?.category}
                </Badge>
                <div className="flex gap-1 items-center text-muted-foreground text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(detailBerita?.created_at).getDate() +
                    " hari yang lalu "}
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {detailBerita?.judul}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {detailBerita?.penyelenggara}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Bagikan
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Simpan
                  </Button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <LazyLoadImage
                effect={isLoading && "blur"}
                src={`https://dashboard.btikpsultra.my.id/storage/${detailBerita?.coverImage}`}
                alt={detailBerita?.judul}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div
              className="leading-7 prose prose-lg max-w-none text-foreground text-justify"
              style={{
                color: "hsl(var(--foreground))",
              }}
            >
              {detailBerita?.deskripsi}
            </div>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-sm text-muted-foreground">
                  Dipublikasikan oleh {detailBerita?.penyelenggara} pada{" "}
                  {new Date(detailBerita?.created_at).toLocaleDateString()}
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Bagikan Artikel
                  </Button>
                </div>
              </div>
            </footer>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Berita Terkait
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {berita
                .filter((item) => item.id !== detailBerita?.id)
                .slice(0, 3)
                .map((item) => (
                  <Link key={item.id} to={`/berita/${item.slug}`}>
                    <div className="group bg-card rounded-lg overflow-hidden hover:shadow-medium transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={`https://dashboard.btikpsultra.my.id/storage/${item?.coverImage}`}
                          alt={item?.judul}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <Badge
                          variant="secondary"
                          className="bg-education-green/10 text-education-green mb-2"
                        >
                          {item?.category}
                        </Badge>
                        <h3 className="font-semibold text-foreground group-hover:text-government-blue transition-colors line-clamp-2 mb-2">
                          {item?.judul}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {item?.deskripsi}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DetailBerita;
