import { API_BASE_URL } from "@/services/urls";

const normalizeApiData = (data: unknown): any => {
  if (Array.isArray(data)) {
    return data.map(normalizeApiData);
  }

  if (data && typeof data === "object") {
    const record = { ...(data as Record<string, any>) };
    const resolvedCover =
      record.coverImage ??
      record.cover_image ??
      record.coverImage_url ??
      record.cover_image_url;

    if (resolvedCover !== undefined) {
      record.coverImage = resolvedCover;
      record.cover_image = resolvedCover;
    }

    for (const key of Object.keys(record)) {
      if (record[key] && typeof record[key] === "object") {
        record[key] = normalizeApiData(record[key]);
      }
    }

    return record;
  }

  return data;
};

const fetchJson = async (url: string, init?: RequestInit) => {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`Request failed for ${url} (HTTP ${response.status})`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("json")) {
    throw new Error(
      `Expected JSON from ${url}, received ${contentType || "an unknown content type"}`
    );
  }

  const json = await response.json();
  return normalizeApiData(json);
};

export const getDashboard = async () => {
  return fetchJson(`${API_BASE_URL}/dashboard`);
};
export const getBerita = async () => {
  return fetchJson(`${API_BASE_URL}/berita`);
};
export const getDetailBerita = async (id: number) => {
  try {
    return await fetchJson(`${API_BASE_URL}/berita/${id}`);
  } catch {
    const list = await getBerita();
    return Array.isArray(list)
      ? list.find((item) => Number(item?.id) === Number(id)) ?? null
      : null;
  }
};
export const postApiLayanan = async (data) => {
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

  return fetchJson(`${API_BASE_URL}/layanan`, {
    method: "POST",
    body: formData,
  });
};
export const getTrackingStatus = async (kodeTracking: string) => {
  return fetchJson(
    `${API_BASE_URL}/layanan/status/${encodeURIComponent(kodeTracking)}`
  );
};
export const getProdukHukum = async () => {
  return fetchJson(`${API_BASE_URL}/produk-hukum`);
};
export const getAgenda = async () => {
  return fetchJson(`${API_BASE_URL}/agenda`);
};
export const getDetailAgenda = async (id: number) => {
  try {
    return await fetchJson(`${API_BASE_URL}/agenda/${id}`);
  } catch {
    const list = await getAgenda();
    return Array.isArray(list)
      ? list.find((item) => Number(item?.id) === Number(id)) ?? null
      : null;
  }
};
export const getPengumuman = async () => {
  return fetchJson(`${API_BASE_URL}/pengumuman`);
};
export const getDetailPengumuman = async (id: number) => {
  try {
    return await fetchJson(`${API_BASE_URL}/pengumuman/${id}`);
  } catch {
    const list = await getPengumuman();
    return Array.isArray(list)
      ? list.find((item) => Number(item?.id) === Number(id)) ?? null
      : null;
  }
};
export const getLaporanKegiatan = async () => {
  try {
    return await fetchJson(`${API_BASE_URL}/laporan-kegiatan`);
  } catch {
    return fetchJson(`${API_BASE_URL}/laporan`);
  }
};
export const getInovasi = async () => {
  return fetchJson(`${API_BASE_URL}/inovasi`);
};
export const getDetailInovasi = async (id: number) => {
  try {
    return await fetchJson(`${API_BASE_URL}/inovasi/${id}`);
  } catch {
    const list = await getInovasi();
    return Array.isArray(list)
      ? list.find((item) => Number(item?.id) === Number(id)) ?? null
      : null;
  }
};
export const getGaleri = async () => {
  const [galeriRes, berita, inovasi, agenda, pengumuman] = await Promise.all([
    fetchJson(`${API_BASE_URL}/galeri`).catch(() => null),
    getBerita().catch(() => []),
    getInovasi().catch(() => []),
    getAgenda().catch(() => []),
    getPengumuman().catch(() => []),
  ]);

  if (
    galeriRes &&
    typeof galeriRes === "object" &&
    !Array.isArray(galeriRes) &&
    (Array.isArray(galeriRes.berita) ||
      Array.isArray(galeriRes.inovasi) ||
      Array.isArray(galeriRes.agenda) ||
      Array.isArray(galeriRes.pengumuman))
  ) {
    return {
      berita: galeriRes.berita?.length ? galeriRes.berita : berita,
      inovasi: galeriRes.inovasi?.length ? galeriRes.inovasi : inovasi,
      agenda: galeriRes.agenda?.length ? galeriRes.agenda : agenda,
      pengumuman: galeriRes.pengumuman?.length
        ? galeriRes.pengumuman
        : pengumuman,
    };
  }

  return {
    berita: Array.isArray(berita) ? berita : [],
    inovasi: Array.isArray(inovasi) ? inovasi : [],
    agenda: Array.isArray(agenda) ? agenda : [],
    pengumuman: Array.isArray(pengumuman) ? pengumuman : [],
  };
};

export const getPPID = async () => {
  return fetchJson(`${API_BASE_URL}/ppid`);
};
