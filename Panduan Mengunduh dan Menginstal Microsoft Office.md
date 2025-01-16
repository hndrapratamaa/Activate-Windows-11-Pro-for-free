# Panduan Mengunduh dan Menginstal Microsoft Word, PowerPoint, dan Excel

**Catatan Penting**:
- Semua versi Office yang sudah terpasang akan dihapus secara otomatis selama instalasi. Pastikan Anda menyimpan pekerjaan dan menutup semua aplikasi Office yang sedang berjalan sebelum melanjutkan.

---

## Langkah 1: Unduh File yang Dibutuhkan

1. **Unduh Office Deployment Tool**:
   - Kunjungi tautan berikut untuk mengunduh alat: [Office Deployment Tool Download](https://support.microsoft.com/id-id/topic/office-deployment-tool-9fbd53e3-18a3-1aef-8cfe-e2eaeeeaaa4c).
   - Setelah unduhan selesai, **jalankan file dengan hak Administrator** untuk mengekstrak alat. Alat ini akan menghasilkan file `setup.exe`.

2. **Buat File Konfigurasi**:
   - Kunjungi: [Office Configuration Tool](https://config.office.com/deploymentsettings).
   - Gunakan alat ini untuk membuat file konfigurasi yang sesuai dengan kebutuhan Anda (misalnya, pilih aplikasi Word, PowerPoint, dan Excel).
   - Simpan file konfigurasi dengan nama `configuration.xml`.

3. **Siapkan Folder Instalasi**:
   - Buat folder baru di lokasi yang mudah diakses, misalnya di desktop atau drive C:.
     - Contoh nama folder: `OfficeSetup`.
   - Pindahkan file `setup.exe` dan file `configuration.xml` ke dalam folder `OfficeSetup`.

---

## Langkah 2: Unduh File Instalasi Office

1. Buka **Command Prompt** dengan langkah berikut:
   - Navigasikan ke folder `OfficeSetup` menggunakan **File Explorer**.
   - Klik pada bilah alamat di **File Explorer**, ketik `cmd`, lalu tekan **Enter**. Ini akan membuka Command Prompt dengan lokasi saat ini di folder `OfficeSetup`.

2. Pada jendela **Command Prompt**, ketik perintah berikut:
   ```
   setup /download configuration.xml
   ```
3. Tekan **Enter** untuk menjalankan perintah. File instalasi Office akan diunduh ke folder `OfficeSetup`.
   - **Catatan**: Proses unduhan berjalan di latar belakang dan mungkin memakan waktu cukup lama tergantung pada koneksi internet Anda.

4. Setelah unduhan selesai, Anda siap melanjutkan ke langkah instalasi.

---

## Langkah 3: Instalasi Produk Office

1. Pada jendela **Command Prompt** yang masih terbuka, ketik perintah berikut:
   ```
   setup /configure configuration.xml
   ```
2. Tekan **Enter** untuk memulai instalasi.

**Catatan**:
- Jika muncul kesalahan yang menyatakan versi Office sebelumnya masih terpasang, hapus instalasi Office lama secara manual, lalu jalankan kembali perintah di atas.

3. Tunggu hingga proses instalasi selesai. Setelah selesai, Anda akan kembali ke Command Prompt.

---

## Langkah 4: Selesai dan Siap Digunakan

1. Tutup **Command Prompt**.
2. Periksa desktop atau menu **Start** Anda. Microsoft Word, PowerPoint, dan Excel kini telah terinstal dan siap digunakan.

---

## Menginstal Produk Office Lain

Jika Anda perlu menginstal produk Office yang berbeda:
1. Hapus file `configuration.xml` dari folder `OfficeSetup`.
2. Ulangi panduan ini mulai dari **Langkah 1: Unduh File yang Dibutuhkan**.

---

Semoga panduan ini membantu Anda dalam menginstal produk Microsoft Office! Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi dukungan teknis.

