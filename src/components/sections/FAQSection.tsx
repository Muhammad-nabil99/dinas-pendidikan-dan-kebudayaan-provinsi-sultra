import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const faqs = [
    {
      id: "1",
      question: "Bagaimana cara mengajukan legalisasi ijazah?",
      answer:
        "Untuk mengajukan legalisasi ijazah, Anda dapat datang langsung ke kantor Dinas Pendidikan dengan membawa fotocopy ijazah yang akan dilegalisasi, ijazah asli untuk dicocokan, dan kartu identitas. Proses legalisasi biasanya memakan waktu 1-2 hari kerja.",
    },
    {
      id: "2",
      question: "Apa saja syarat untuk mendapatkan beasiswa pendidikan?",
      answer:
        "Syarat umum beasiswa meliputi: (1) Siswa/mahasiswa berprestasi dengan nilai minimum yang ditentukan, (2) Berasal dari keluarga kurang mampu dengan surat keterangan tidak mampu, (3) Melengkapi dokumen pendukung seperti rapor, sertifikat prestasi, dan surat rekomendasi dari sekolah.",
    },
    {
      id: "3",
      question: "Bagaimana cara mengajukan pengaduan terkait pendidikan?",
      answer:
        "Pengaduan dapat diajukan melalui beberapa cara: (1) Datang langsung ke kantor Dinas Pendidikan, (2) Mengirim surat resmi, (3) Melalui email resmi dinas, (4) Menggunakan sistem pengaduan online di website. Setiap pengaduan akan mendapat nomor tracking untuk pemantauan status.",
    },
    {
      id: "4",
      question: "Kapan jadwal pelayanan publik di Dinas Pendidikan?",
      answer:
        "Pelayanan publik dibuka setiap hari kerja Senin-Jumat pukul 08:00-16:00 WITA dengan istirahat pukul 12:00-13:00 WITA. Untuk pelayanan tertentu, disarankan untuk membuat janji terlebih dahulu melalui telepon atau email.",
    },
    {
      id: "5",
      question: "Bagaimana prosedur pindah sekolah antar kabupaten?",
      answer:
        "Prosedur pindah sekolah meliputi: (1) Mengajukan surat pindah ke sekolah asal, (2) Mendapatkan surat rekomendasi dari Dinas Pendidikan kabupaten asal, (3) Mengajukan permohonan ke Dinas Pendidikan kabupaten tujuan, (4) Melengkapi dokumen seperti rapor, kartu keluarga, dan surat keterangan domisili.",
    },
    {
      id: "6",
      question: "Apa saja program unggulan Dinas Pendidikan Sulawesi Tenggara?",
      answer:
        "Program unggulan meliputi: (1) Digitalisasi sekolah untuk pembelajaran modern, (2) Peningkatan kompetensi guru melalui pelatihan berkala, (3) Program beasiswa untuk siswa berprestasi dan kurang mampu, (4) Pembangunan dan rehabilitasi infrastruktur pendidikan, (5) Program klinik pendidikan untuk konsultasi akademik.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-gold mr-2" />
            <span className="text-sm font-medium text-gold">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum seputar layanan pendidikan
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-card border rounded-lg px-6 shadow-soft hover:shadow-medium transition-shadow"
            >
              <AccordionTrigger className="text-left font-medium py-6 hover:text-government-blue hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-government-blue/5 to-education-green/5 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">
            Tidak menemukan jawaban?
          </h3>
          <p className="text-muted-foreground mb-4">
            Tim kami siap membantu menjawab pertanyaan spesifik Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="inline-flex items-center justify-center px-6 py-2 bg-government-blue text-white rounded-md hover:bg-government-blue-dark transition-colors"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
