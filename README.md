# PPID (Pejabat Pengelola Informasi dan Dokumentasi) Backend API

## Overview
This document outlines the API endpoints and database schema for the PPID system of Dinas Pendidikan dan Kebudayaan Provinsi Sulawesi Tenggara.

---

## 🔄 DYNAMIC DATA ENDPOINTS (Priority Implementation)

### 1. Information Requests (Permohonan Informasi Publik)
**Database Table: ppid_permohonan**
```sql
CREATE TABLE ppid_permohonan (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama_lengkap VARCHAR(255) NOT NULL,
    nik VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telepon VARCHAR(20) NOT NULL,
    alamat TEXT NOT NULL,
    informasi_diminta TEXT NOT NULL,
    tujuan_penggunaan TEXT NOT NULL,
    status ENUM('pending', 'diproses', 'disetujui', 'ditolak') DEFAULT 'pending',
    tanggal_pengajuan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tanggal_diproses TIMESTAMP NULL,
    catatan_admin TEXT,
    file_pendukung VARCHAR(255),
    tracking_number VARCHAR(20) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### POST /api/ppid/permohonan
Submit new information request (Public)

**Request Body:**
```json
{
  "nama_lengkap": "John Doe",
  "nik": "1234567890123456",
  "email": "john@example.com",
  "telepon": "08123456789",
  "alamat": "Jl. Example No. 123",
  "informasi_diminta": "Data tentang program pendidikan 2023",
  "tujuan_penggunaan": "Penelitian akademik"
}
```

#### GET /api/ppid/permohonan
Get list of information requests (Admin only)

**Query Parameters:**
- `status`: pending, diproses, disetujui, ditolak
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `search`: Search by name or request content

#### GET /api/ppid/permohonan/track/:tracking_number
Track request status (Public)

#### PUT /api/ppid/permohonan/:id/status
Update request status (Admin only)

---

### 2. DIP Documents Management
**Database Table: ppid_dip_dokumen**
```sql
CREATE TABLE ppid_dip_dokumen (
    id INT PRIMARY KEY AUTO_INCREMENT,
    kategori_id INT NOT NULL,
    nama_dokumen VARCHAR(255) NOT NULL,
    deskripsi TEXT,
    file_url VARCHAR(500),
    file_size BIGINT,
    mime_type VARCHAR(100),
    tahun VARCHAR(4),
    tanggal_upload TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (kategori_id) REFERENCES ppid_dip_kategori(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### GET /api/ppid/dip/dokumen
Get DIP documents with filtering (Public)

**Query Parameters:**
- `kategori_id`: Filter by category
- `tahun`: Filter by year
- `search`: Search by document name
- `page`: Page number
- `limit`: Items per page

#### POST /api/ppid/dip/dokumen
Upload new DIP document (Admin only)

**Request Body (Form Data):**
- `kategori_id`: Category ID
- `nama_dokumen`: Document name
- `deskripsi`: Description
- `tahun`: Year
- `file`: File upload

#### PUT /api/ppid/dip/dokumen/:id
Update DIP document (Admin only)

#### DELETE /api/ppid/dip/dokumen/:id
Delete DIP document (Admin only)

---

### 3. Reports & Statistics
**Database Table: ppid_laporan**
```sql
CREATE TABLE ppid_laporan (
    id INT PRIMARY KEY AUTO_INCREMENT,
    bulan INT NOT NULL,
    tahun INT NOT NULL,
    total_permohonan INT DEFAULT 0,
    permohonan_diproses INT DEFAULT 0,
    permohonan_disetujui INT DEFAULT 0,
    permohonan_ditolak INT DEFAULT 0,
    waktu_rata_rata_proses INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_bulan_tahun (bulan, tahun)
);
```

#### GET /api/ppid/laporan/statistik
Get PPID statistics (Public)

#### GET /api/ppid/laporan/bulanan
Get monthly reports (Admin)

#### POST /api/ppid/laporan/bulanan
Create/update monthly report (Admin only)

---

## 📊 STATIC DATA ENDPOINTS (Implement Later)

### 1. PPID Profile
**Database Table: ppid_profil**
```sql
CREATE TABLE ppid_profil (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pengertian TEXT NOT NULL,
    dasar_hukum JSON,
    visi TEXT NOT NULL,
    misi JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### GET /api/ppid/profil
#### PUT /api/ppid/profil (Admin only)

### 2. PPID Contact Information
**Database Table: ppid_kontak**
```sql
CREATE TABLE ppid_kontak (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255),
    telepon VARCHAR(50),
    website VARCHAR(255),
    alamat TEXT,
    jam_pelayanan JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### GET /api/ppid/kontak
#### PUT /api/ppid/kontak (Admin only)

### 3. DIP Categories
**Database Table: ppid_dip_kategori**
```sql
CREATE TABLE ppid_dip_kategori (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama_kategori VARCHAR(255) NOT NULL,
    deskripsi TEXT,
    urutan INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### GET /api/ppid/dip/kategori
#### POST /api/ppid/dip/kategori (Admin only)
#### PUT /api/ppid/dip/kategori/:id (Admin only)
#### DELETE /api/ppid/dip/kategori/:id (Admin only)

---

## 🔐 Authentication & Security

### JWT Authentication
All admin endpoints require Bearer token:
```
Authorization: Bearer <token>
```

### File Upload Specifications
- **Max file size**: 10MB
- **Allowed types**: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG
- **Storage path**: `/uploads/ppid/`

### Rate Limiting
- **Public endpoints**: 100 requests/hour/IP
- **Authenticated endpoints**: 1000 requests/hour/user

---

## 📋 Data Validation Rules

### Information Request Validation:
- `nama_lengkap`: Required, 3-255 chars
- `nik`: Required, exactly 16 digits
- `email`: Required, valid email format
- `telepon`: Required, valid phone format
- `informasi_diminta`: Required, 10-1000 chars
- `tujuan_penggunaan`: Required, 10-500 chars

### File Upload Validation:
- Size: Max 10MB
- Types: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG
- Name: Max 255 chars

---

## 🚀 Implementation Priority

### Phase 1: Core Dynamic Features
1. ✅ Information requests (submit, track, manage)
2. ✅ DIP document upload/management
3. ✅ Basic statistics reporting

### Phase 2: Static Content Management
1. PPID profile management
2. Contact information management
3. DIP category management

### Phase 3: Advanced Features
1. File versioning
2. Advanced search and filtering
3. Automated notifications
4. Audit logging

---

## 🛠 Development Setup

### Environment Variables
```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=ppid_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=24h

UPLOAD_PATH=/uploads/ppid
MAX_FILE_SIZE=10485760
```

### Database Setup
1. Create MySQL database: `ppid_db`
2. Run the SQL scripts above for dynamic tables first
3. Set up indexes for performance:
```sql
CREATE INDEX idx_permohonan_status ON ppid_permohonan(status);
CREATE INDEX idx_permohonan_tracking ON ppid_permohonan(tracking_number);
CREATE INDEX idx_dip_kategori ON ppid_dip_dokumen(kategori_id);
CREATE INDEX idx_dip_tahun ON ppid_dip_dokumen(tahun);
```

### API Response Format
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* response data */ },
  "pagination": { /* pagination info */ }
}
```

### Error Response Format
```json
{
  "success": false,
  "message": "Error description",
  "errors": {
    "field_name": "Field-specific error"
  }
}
```

## Database Schema

### 1. ppid_profil (PPID Profile)
```sql
CREATE TABLE ppid_profil (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pengertian TEXT NOT NULL,
    dasar_hukum JSON, -- Array of legal basis
    visi TEXT NOT NULL,
    misi JSON, -- Array of mission points
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 2. ppid_kontak (PPID Contact)
```sql
CREATE TABLE ppid_kontak (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255),
    telepon VARCHAR(50),
    website VARCHAR(255),
    alamat TEXT,
    jam_pelayanan JSON, -- Operating hours
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 3. ppid_permohonan (Information Requests)
```sql
CREATE TABLE ppid_permohonan (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama_lengkap VARCHAR(255) NOT NULL,
    nik VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telepon VARCHAR(20) NOT NULL,
    alamat TEXT NOT NULL,
    informasi_diminta TEXT NOT NULL,
    tujuan_penggunaan TEXT NOT NULL,
    status ENUM('pending', 'diproses', 'disetujui', 'ditolak') DEFAULT 'pending',
    tanggal_pengajuan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tanggal_diproses TIMESTAMP NULL,
    catatan_admin TEXT,
    file_pendukung VARCHAR(255), -- File path if uploaded
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 4. ppid_dip_kategori (DIP Categories)
```sql
CREATE TABLE ppid_dip_kategori (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama_kategori VARCHAR(255) NOT NULL,
    deskripsi TEXT,
    urutan INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 5. ppid_dip_dokumen (DIP Documents)
```sql
CREATE TABLE ppid_dip_dokumen (
    id INT PRIMARY KEY AUTO_INCREMENT,
    kategori_id INT NOT NULL,
    nama_dokumen VARCHAR(255) NOT NULL,
    deskripsi TEXT,
    file_url VARCHAR(500),
    file_size BIGINT,
    mime_type VARCHAR(100),
    tahun VARCHAR(4),
    tanggal_upload TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (kategori_id) REFERENCES ppid_dip_kategori(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 6. ppid_laporan (PPID Reports/Statistics)
```sql
CREATE TABLE ppid_laporan (
    id INT PRIMARY KEY AUTO_INCREMENT,
    bulan INT NOT NULL,
    tahun INT NOT NULL,
    total_permohonan INT DEFAULT 0,
    permohonan_diproses INT DEFAULT 0,
    permohonan_disetujui INT DEFAULT 0,
    permohonan_ditolak INT DEFAULT 0,
    waktu_rata_rata_proses INT, -- in days
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_bulan_tahun (bulan, tahun)
);
```

## API Endpoints

### Base URL
```
/api/ppid
```

### Authentication
All endpoints require authentication using JWT token in Authorization header:
```
Authorization: Bearer <token>
```

---

## 1. PPID Profile Endpoints

### GET /api/ppid/profil
Get PPID profile information

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "pengertian": "PPID adalah pejabat yang bertanggung jawab di bidang penyimpanan pendokumentasian...",
    "dasar_hukum": [
      "UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik",
      "Peraturan Komisi Informasi..."
    ],
    "visi": "Mewujudkan pelayanan informasi publik yang transparan...",
    "misi": [
      "Memberikan pelayanan informasi yang cepat dan akurat",
      "Mengelola dokumentasi informasi secara sistematis"
    ]
  }
}
```

### PUT /api/ppid/profil
Update PPID profile (Admin only)

**Request Body:**
```json
{
  "pengertian": "Updated definition...",
  "dasar_hukum": ["Updated legal basis..."],
  "visi": "Updated vision...",
  "misi": ["Updated mission points..."]
}
```

---

## 2. PPID Contact Endpoints

### GET /api/ppid/kontak
Get PPID contact information

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "email": "ppid@disdik.sulteng.go.id",
    "telepon": "+62 xxx-xxxx-xxxx",
    "website": "ppid.disdik.sulteng.go.id",
    "alamat": "Alamat lengkap kantor",
    "jam_pelayanan": {
      "senin_kamis": "08:00 - 15:30 WIB",
      "jumat": "08:00 - 16:00 WIB",
      "online": "24 jam"
    }
  }
}
```

### PUT /api/ppid/kontak
Update PPID contact information (Admin only)

---

## 3. Information Request Endpoints

### POST /api/ppid/permohonan
Submit new information request

**Request Body:**
```json
{
  "nama_lengkap": "John Doe",
  "nik": "1234567890123456",
  "email": "john@example.com",
  "telepon": "08123456789",
  "alamat": "Jl. Example No. 123",
  "informasi_diminta": "Data tentang program pendidikan 2023",
  "tujuan_penggunaan": "Penelitian akademik"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Permohonan berhasil diajukan",
  "data": {
    "id": 123,
    "tracking_number": "PPID-2024-00123"
  }
}
```

### GET /api/ppid/permohonan
Get list of information requests (Admin only)

**Query Parameters:**
- `status`: Filter by status (pending, diproses, disetujui, ditolak)
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `search`: Search by name or request content

**Response:**
```json
{
  "success": true,
  "data": {
    "requests": [
      {
        "id": 123,
        "nama_lengkap": "John Doe",
        "informasi_diminta": "Data tentang program pendidikan 2023",
        "status": "pending",
        "tanggal_pengajuan": "2024-01-15T10:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 25,
      "total_pages": 3
    }
  }
}
```

### GET /api/ppid/permohonan/:id
Get specific information request details (Admin only)

### PUT /api/ppid/permohonan/:id/status
Update request status (Admin only)

**Request Body:**
```json
{
  "status": "disetujui",
  "catatan_admin": "Permohonan disetujui, dokumen akan disiapkan dalam 3 hari kerja"
}
```

### GET /api/ppid/permohonan/track/:tracking_number
Track request status (Public)

---

## 4. DIP (Daftar Informasi Publik) Endpoints

### GET /api/ppid/dip/kategori
Get all DIP categories

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "nama_kategori": "Organisasi dan Kepegawaian",
      "deskripsi": "Informasi tentang struktur organisasi, daftar pegawai...",
      "urutan": 1
    }
  ]
}
```

### POST /api/ppid/dip/kategori
Create new DIP category (Admin only)

### PUT /api/ppid/dip/kategori/:id
Update DIP category (Admin only)

### DELETE /api/ppid/dip/kategori/:id
Delete DIP category (Admin only)

### GET /api/ppid/dip/dokumen
Get DIP documents with filtering

**Query Parameters:**
- `kategori_id`: Filter by category
- `tahun`: Filter by year
- `search`: Search by document name
- `page`: Page number
- `limit`: Items per page

**Response:**
```json
{
  "success": true,
  "data": {
    "documents": [
      {
        "id": 1,
        "kategori_id": 1,
        "nama_dokumen": "Struktur Organisasi 2024",
        "deskripsi": "Diagram struktur organisasi terbaru",
        "file_url": "/uploads/dip/struktur-2024.pdf",
        "file_size": 2048576,
        "mime_type": "application/pdf",
        "tahun": "2024",
        "tanggal_upload": "2024-01-15T08:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 45,
      "total_pages": 5
    }
  }
}
```

### POST /api/ppid/dip/dokumen
Upload new DIP document (Admin only)

**Request Body (Form Data):**
- `kategori_id`: Category ID
- `nama_dokumen`: Document name
- `deskripsi`: Description
- `tahun`: Year
- `file`: File upload

### PUT /api/ppid/dip/dokumen/:id
Update DIP document (Admin only)

### DELETE /api/ppid/dip/dokumen/:id
Delete DIP document (Admin only)

---

## 5. Reports & Statistics Endpoints

### GET /api/ppid/laporan/statistik
Get PPID statistics

**Response:**
```json
{
  "success": true,
  "data": {
    "total_permohonan": 150,
    "permohonan_pending": 25,
    "permohonan_diproses": 30,
    "permohonan_disetujui": 85,
    "permohonan_ditolak": 10,
    "waktu_rata_rata_proses": 7,
    "total_dokumen_dip": 245
  }
}
```

### GET /api/ppid/laporan/bulanan
Get monthly reports

**Query Parameters:**
- `tahun`: Year (default: current year)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "bulan": 1,
      "tahun": 2024,
      "total_permohonan": 12,
      "permohonan_diproses": 10,
      "permohonan_disetujui": 8,
      "permohonan_ditolak": 2,
      "waktu_rata_rata_proses": 5
    }
  ]
}
```

### POST /api/ppid/laporan/bulanan
Create/update monthly report (Admin only)

---

## Error Response Format

All endpoints return errors in this format:
```json
{
  "success": false,
  "message": "Error description",
  "errors": {
    "field_name": "Field-specific error message"
  }
}
```

## Status Codes

- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `422`: Validation Error
- `500`: Internal Server Error

## File Upload

- Maximum file size: 10MB
- Allowed file types: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG
- Files are stored in `/uploads/ppid/` directory

## Rate Limiting

- Public endpoints: 100 requests per hour per IP
- Authenticated endpoints: 1000 requests per hour per user

## Data Validation Rules

### Information Request Validation:
- `nama_lengkap`: Required, min 3 chars, max 255 chars
- `nik`: Required, exactly 16 digits
- `email`: Required, valid email format
- `telepon`: Required, valid phone number format
- `alamat`: Required, min 10 chars
- `informasi_diminta`: Required, min 10 chars, max 1000 chars
- `tujuan_penggunaan`: Required, min 10 chars, max 500 chars

### File Upload Validation:
- File size: Max 10MB
- File types: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG
- File name: Max 255 characters

## Security Considerations

1. All sensitive endpoints require authentication
2. File uploads are scanned for malware
3. SQL injection prevention using parameterized queries
4. XSS prevention using input sanitization
5. Rate limiting to prevent abuse
6. CORS configuration for frontend access
7. HTTPS enforcement in production

## Development Setup

1. Install dependencies
2. Set up database with the schema above
3. Configure environment variables
4. Run database migrations
5. Start the server

## Environment Variables

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=ppid_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=24h

UPLOAD_PATH=/uploads/ppid
MAX_FILE_SIZE=10485760

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
