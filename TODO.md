<<<<<<< HEAD
# TODO: Update ContactSection Form

- [x] Import useState from React
- [x] Import Select components from ui/select
- [x] Add form state with fields: judul, deskripsi, bidang, namaLengkap, emailPengirim, dokumen, foto
- [x] Add handleChange function for text inputs
- [x] Add handleFileChange function for file input
- [x] Add handleSubmit function to log form data
- [x] Replace form fields with new ones:
  - judul: Input
  - deskripsi: Textarea
  - bidang: Select with options Bidang SMA, Bidang SMK, Bidang PKLK, Bidang GTK, Bidang Perencanaan, Bidang Kebudayaan
  - namaLengkap: Input
  - emailPengirim: Input
  - dokumen: Input type="file" accept=".pdf"
  - foto: Input type="file" accept="image/*"
- [x] Update form onSubmit to handleSubmit
- [x] Ensure all styling classes remain the same
=======
# TODO: Fix LaporanKegiatan.tsx UI Rendering Issue

## Tasks
- [x] Edit `src/features/laporanKegiatan/useGetLaporanKegiatan.tsx` to return error from useQuery and add logging for data/error
- [x] Edit `src/pages/laporanKegiatan/LaporanKegiatan.tsx` to handle errors, improve filter logic (robust string checks), and add debugging logs for filtered data
- [ ] Run the app and check browser console for logs, verify API response in network tab
- [ ] If issues persist, inspect API data structure and adjust accordingly
>>>>>>> 9089e655e8000b93006e7dc7479975780385f205
