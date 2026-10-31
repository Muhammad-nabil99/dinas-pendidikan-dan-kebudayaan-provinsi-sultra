import { API_BASE_URL } from "@/services/urls";

export const getDashboard = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/dashboard`);
    const data = await response.json();
    return data;
  } catch (error) {
    new Error(error);
    console.log(error.message);
  }
};
export const getBerita = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/berita`);
    const data = await response.json();
    return data;
  } catch (error) {
    new Error(error);
    console.log(error.message);
  }
};
export const getDetailBerita = async (id: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/berita/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    new Error(error);
    console.log(error.message);
  }
};
export const postApiLayanan = async (data) => {
  try {
    const formData = new FormData();
    formData.append("judul", data.judul);
    formData.append("deskripsi", data.deskripsi);
    formData.append("bidang", data.bidang);
    formData.append("email_pengirim", data.email_pengirim);
    formData.append("nama_pengirim", data.nama_pengirim);
    formData.append("time", new Date().toISOString());
    if (data.files && data.files.length > 0) {
      data.files.forEach((file, index) => {
        formData.append(`files[${index}]`, file);
      });
    } else {
      console.warn("Foto tidak disertakan dalam pengiriman.");
    }
    if (data.dokumen) {
      formData.append("dokumen", data.dokumen);
    }

    const response = await fetch(
      `${API_BASE_URL}/layanan`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("❌ Gagal mengirim data:", error);
    throw error;
  }
};
export const getTrackingStatus = async (kodeTracking: string) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/layanan/status/${kodeTracking}`
    );

    if (!response.ok) {
      throw new Error(`Gagal mengambil status laporan (${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("❌ Gagal mengambil status laporan:", error);
    throw error;
  }
};
export const getProdukHukum = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/produk-hukum`);
    const data = await response.json();
    return data;
  } catch (error) {
    new Error(error);
    console.log(error.message);
  }
};
export const getAgenda = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/agenda`);
    const data = await response.json();
    return data;
  } catch (error) {
    new Error(error);
    console.log(error.message);
  }
};
export const getDetailAgenda = async (id: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/agenda/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    new Error(error);
    console.log(error.message);
  }
};
export const getPengumuman = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/pengumuman`);
    const data = await response.json();
    return data;
  } catch (error) {
    new Error(error);
    console.log(error.message);
  }
};
export const getDetailPengumuman = async (id: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/pengumuman/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    new Error(error);
    console.log(error.message);
  }
};
export const getLaporanKegiatan = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/laporan`);
    const data = await response.json();
    return data;
  } catch (error) {
    new Error(error);
    console.log(error.message);
  }
};
export const getInovasi = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/inovasi`);
    const data = await response.json();
    return data;
  } catch (error) {
    new Error(error);
    console.log(error.message);
  }
};
export const getDetailInovasi = async (id: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/inovasi/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
export const getGaleri = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/galeri`);
    const data = await response.json();
    return data;
  } catch (error) {
    new Error(error);
    console.log(error.message);
  }
};

export const getPPID = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/ppid`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
