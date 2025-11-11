import { Calendar, ArrowLeft ,User} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import BgImage from '@/assets/tracking.jpg'
import KadisImages from '@/assets/kadis-dikbud.jpg'

const Sambutan = () => {
    return (
        <main>
            {/* Hero Section */}
            <section
                className="relative py-20 text-white bg-cover bg-center"
                style={{ backgroundImage: `url(${BgImage})` }}
            >
                <div className="absolute inset-0 bg-blue-900/70"></div>

                {/* Konten */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center mb-6">
                        <Link to="/">
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                <span className="hidden sm:inline">Kembali ke Beranda</span>
                            </Button>
                        </Link>
                    </div>

                    <div className="text-center">
                        <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full mb-3 sm:mb-4">
                            <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                            <span className="text-xs sm:text-sm font-medium">
                                Sambutan
                            </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                            Kepala Dinas
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl md:max-w-2xl mx-auto">
                            Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara 
                        </p>
                    </div>
                </div>
            </section>

            {/* Konten Sambutan */}
            <section className="bg-white py-12 sm:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-10">
                    
                    {/* Gambar di kiri */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img
                            src={KadisImages}
                            alt="Kepala Dinas"
                            className="rounded-2xl shadow-lg w-72 h-auto object-cover"
                        />
                    </div>

                    {/* Sambutan di kanan */}
                    <div className="w-full md:w-2/3">
                        <article className="flex flex-col gap-6 text-gray-800 text-base sm:text-lg leading-relaxed">
                            <p>Assalamu’alaikum warahmatullahi wabarakatuh,</p>
                            <p>Salam sejahtera bagi kita semua, Om Swastiastu, Namo Buddhaya, Salam Kebajikan.</p>

                            <p>Puji dan syukur kita panjatkan ke hadirat Allah Subhanahu Wa Ta’ala, Tuhan Yang Maha Esa, atas segala limpahan rahmat dan karunia-Nya, sehingga kita dapat menyaksikan hadirnya website resmi Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara sebagai wujud komitmen kami dalam memberikan layanan informasi yang cepat, transparan, dan terintegrasi kepada seluruh masyarakat.</p>

                            <p>Website ini kami hadirkan sebagai salah satu upaya mendukung terciptanya transformasi digital di sektor pendidikan dan kebudayaan. Kami percaya bahwa pemanfaatan teknologi informasi menjadi salah satu kunci penting dalam meningkatkan mutu layanan publik, khususnya di era globalisasi saat ini. Melalui website ini, masyarakat dapat dengan mudah mengakses berbagai informasi terkait program, kebijakan, kegiatan, dan layanan yang diselenggarakan oleh Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara.</p>

                            <p>Selain itu, website ini juga menjadi sarana komunikasi dan kolaborasi yang efektif antara pemerintah, masyarakat, dan pemangku kepentingan pendidikan dan kebudayaan. Kami berharap, platform ini dapat dimanfaatkan oleh berbagai pihak, mulai dari pelajar, pendidik, tenaga kependidikan, hingga masyarakat luas, untuk memperoleh informasi yang akurat, terpercaya, dan bermanfaat.</p>

                            <p>Kami mengucapkan terima kasih kepada semua pihak yang telah berkontribusi dalam pengembangan website ini. Semoga kehadiran website ini dapat memberikan manfaat besar bagi seluruh masyarakat, serta membawa kemajuan bagi pendidikan dan kebudayaan di daerah kita tercinta.</p>

                            <p>Wassalamu’alaikum warahmatullahi wabarakatuh,</p>
                            <p>Salam sejahtera bagi kita semua,</p>

                            {/* Signature Block */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-base">Kepala Dinas Pendidikan dan Kebudayaan</p>
                                <p className="text-base">Provinsi Sulawesi Tenggara</p>
                                <p className="font-bold text-lg mt-4">Prof. Dr. Aris, S.Pd., M.Hum.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Sambutan;
