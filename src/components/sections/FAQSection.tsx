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
      id: "2",
      question: "Bagaimana cara menyampaikan pengaduan terkait layanan pendidikan?",
      answer:
        "Pengaduan dapat disampaikan secara langsung di loket layanan pengaduan, melalui email resmi Dinas Pendidikan, atau melalui sistem pengaduan online pada laman resmi dinas. Setiap pengaduan akan mendapatkan nomor pelacakan untuk pemantauan status.",
    },
    {
      id: "3",
      question: "Kapan jam operasional pelayanan publik di Dinas Pendidikan?",
      answer:
        "Pelayanan publik dilaksanakan setiap hari kerja, Senin hingga Jumat pukul 08.00–16.00 WITA, dengan waktu istirahat pukul 12.00–13.00 WITA. Untuk layanan tertentu, disarankan membuat janji terlebih dahulu melalui telepon atau email resmi.",
    },
    {
      id: "4",
      question: "Bagaimana prosedur perpindahan sekolah antar kabupaten di Sulawesi Tenggara?",
      answer:
        "Siswa wajib memperoleh surat keterangan pindah dari sekolah asal, disertai surat rekomendasi dari Dinas Pendidikan kabupaten/kota asal, kemudian mengajukan permohonan ke Dinas Pendidikan kabupaten/kota tujuan dengan melengkapi dokumen pendukung seperti rapor dan kartu keluarga.",
    },
    {
      id: "5",
      question: "Apa saja program unggulan Dinas Pendidikan Sulawesi Tenggara?",
      answer:
        "Program unggulan meliputi: (1) Digitalisasi sekolah untuk pembelajaran modern, (2) Peningkatan kompetensi guru melalui pelatihan berkala, (3) Program beasiswa untuk siswa berprestasi dan kurang mampu, (4) Pembangunan dan rehabilitasi infrastruktur pendidikan, (5) Penguatan tata kelola pendidikan berbasis teknologi.",
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
        {/* <div className="text-center mt-12 p-8 bg-gradient-to-r from-government-blue/5 to-education-green/5 rounded-lg">
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
        </div> */}
      </div>
    </section>
  );
};

export default FAQSection;
