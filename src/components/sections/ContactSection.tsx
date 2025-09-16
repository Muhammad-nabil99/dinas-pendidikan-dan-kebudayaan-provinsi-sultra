import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-education-green/10 rounded-full mb-4">
            <Mail className="w-4 h-4 text-education-green mr-2" />
            <span className="text-sm font-medium text-education-green">Hubungi Kami</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontak & Informasi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami siap melayani dan membantu kebutuhan pendidikan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-government-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-government-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Alamat Kantor</h4>
                      <p className="text-muted-foreground">
                        Jalan Ahmad Yani No. 2, Kendari, Sulawesi Tenggara 93117<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-education-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-education-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Telepon & Fax</h4>
                      <p className="text-muted-foreground">
                        Telepon: (0401) 321234<br />
                        Fax: (0401) 321235<br />
                        Hotline: 0800-1234-5678
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Email</h4>
                      <p className="text-muted-foreground">
                        info@disdik.sultraprov.go.id<br />
                        pengaduan@disdik.sultraprov.go.id<br />
                        ppid@disdik.sultraprov.go.id
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Jam Pelayanan</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Senin - Kamis: 08:00 - 16:00 WITA</p>
                        <p>Jumat: 08:00 - 16:30 WITA</p>
                        <p>Istirahat: 12:00 - 13:00 WITA</p>
                        <p className="text-sm text-red-600 mt-2">
                          *Sabtu, Minggu dan hari libur nasional tutup
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl">Kirim Pesan</CardTitle>
                <p className="text-muted-foreground">
                  Sampaikan pertanyaan, saran, atau pengaduan Anda
                </p>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nama Depan*</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Masukkan nama depan"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nama Belakang*</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Masukkan nama belakang"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email*</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="nama@email.com"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="08xxxxxxxxxx"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subjek*</Label>
                    <Input 
                      id="subject" 
                      placeholder="Subjek pesan"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Pesan*</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      className="mt-2 resize-none"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:bg-gradient-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pesan
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Pesan akan direspon dalam 1-2 hari kerja. Untuk keperluan mendesak, 
                    hubungi langsung melalui telepon.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;