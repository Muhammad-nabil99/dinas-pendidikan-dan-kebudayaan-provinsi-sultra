import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { Mail, Phone, MapPin, Clock, FileText, ArrowRight } from "lucide-react"; // Tambah ikon
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Import Button shadcn

const ContactPage = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Halaman */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontak & Pusat Bantuan</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hubungi kami melalui informasi di bawah atau gunakan layanan pengaduan online resmi kami.
          </p>
        </div>

        {/* --- TOMBOL UTAMA KE HALAMAN LAPORAN --- */}
        <div className="mb-16 bg-white border-2 border-blue-100 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="hidden md:flex w-16 h-16 bg-blue-600 rounded-2xl items-center justify-center text-white">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Punya Pesan, Laporan atau Keluhan?</h2>
              <p className="text-gray-500">Sampaikan aspirasi dan laporan Anda melalui formulir resmi kami.</p>
            </div>
          </div>
          <Link to="/laporan" className="w-full md:w-auto">
            <Button size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl flex items-center gap-2">
              Buat Laporan Sekarang
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
        {/* -------------------------------------- */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Card Info 1: Alamat */}
          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="p-3 bg-blue-100 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Alamat Kantor</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jalan Ahmad Yani No. 2, Kendari,<br /> Sulawesi Tenggara 93117
              </p>
            </CardContent>
          </Card>

          {/* Card Info 2: Kontak */}
          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="p-3 bg-green-100 rounded-full mb-4">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Telepon & Email</h3>
              <p className="text-sm text-muted-foreground font-medium">0401-3212374</p>
              <p className="text-sm text-blue-600 underline">dikbud.sulawesitenggara@gmail.com</p>
            </CardContent>
          </Card>

          {/* Card Info 3: Jam Kerja */}
          <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="p-3 bg-orange-100 rounded-full mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Jam Pelayanan</h3>
              <p className="text-sm text-muted-foreground">Senin - Jumat</p>
              <p className="text-sm text-gray-900 font-bold">08:00 - 16:00 WITA</p>
            </CardContent>
          </Card>
        </div>

        {/* Google Maps */}
       <div className="mt-16 rounded-3xl overflow-hidden h-96 shadow-sm border border-gray-200">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d334.5268013849707!2d122.51297969202459!3d-3.9754014353997205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d98f3117da1349f%3A0xdd81587f211982b!2sDinas%20Pendidikan%20dan%20Kebudayaan%20Provinsi%20Sulawesi%20Tenggara!5e1!3m2!1sid!2sid!4v1769619736274!5m2!1sid!2sid" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen={true} 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="Lokasi Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara"
  ></iframe>
</div>
        </div>
    </div>
  );
};

export default ContactPage;