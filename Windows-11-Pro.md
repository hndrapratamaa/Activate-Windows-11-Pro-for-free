# Panduan Upgrade Windows 11 ke Versi Pro Secara Gratis

## Mengapa Harus Upgrade ke Windows 11 Pro?

Windows 11 Pro memiliki banyak fitur tambahan dibandingkan edisi Home. Beberapa di antaranya adalah:

- **BitLocker Encryption**: Melindungi data Anda dengan enkripsi canggih.
- **Remote Desktop Hosting**: Menggunakan perangkat Anda sebagai desktop jarak jauh yang dapat diakses dari mana saja.

## Apakah Bisa Upgrade dari Edisi Lain ke Pro?

Ya, Anda bisa! Hampir semua edisi Windows 11 mendukung upgrade ke Pro secara gratis.

## Catatan untuk Pengguna Windows Pro yang Belum Diaktifkan

Jika Anda sudah menggunakan Windows Pro tetapi belum mengaktifkannya, langsung lompat ke [langkah aktivasi](#mengaktifkan-windows-pro).

---

## Langkah-Langkah Upgrade Windows 11 ke Pro

### 1. Buka Command Prompt sebagai Administrator

1. Tekan tombol **Windows + R** pada keyboard.
2. Ketik **cmd.exe** di kotak dialog "Run".
3. Tekan **Ctrl + Shift + Enter** untuk membuka Command Prompt dengan akses administrator.
4. Klik "Yes" saat diminta konfirmasi.

Anda akan melihat jendela Command Prompt seperti ini:



### 2. Jalankan Perintah untuk Membersihkan Lisensi Lama

Ketik perintah berikut satu per satu dan tekan **Enter** setelah masing-masing perintah:

1. `slmgr.vbs /upk`
   - Akan muncul pesan konfirmasi, klik **OK**.
2. `slmgr.vbs /cpky`
   - Pesan konfirmasi kedua akan muncul, klik **OK** lagi.
3. `slmgr.vbs /ckms`
   - Klik **OK** pada pesan konfirmasi terakhir.

### 3. Periksa Edisi yang Dapat Diupgrade

Ketik perintah ini untuk memeriksa apakah perangkat Anda mendukung upgrade ke Pro:

```
DISM /online /Get-TargetEditions
```

Jika "Professional" muncul di daftar, Anda dapat melanjutkan ke langkah berikutnya.

### 4. Jalankan Instalasi Windows Pro

Ketik perintah berikut satu per satu di Command Prompt:

```
sc config LicenseManager start=auto & net start LicenseManager
```

```
sc config wuauserv start=auto & net start wuauserv
```

```
changepk.exe /productkey VK7JG-NPHTM-C97JM-9MPGT-3V66T
```

```
exit
```

Windows akan mulai menginstal fitur Pro. Tunggu hingga proses selesai. Jika Anda melihat pesan kesalahan, cukup restart komputer Anda.

Setelah restart, Windows akan memperbarui sistem dan memasang fitur tambahan. Setelah selesai, periksa pengaturan untuk memastikan edisi telah berubah menjadi Windows 11 Pro.

---

## Mengaktifkan Windows Pro

Untuk mengaktifkan Windows 11 Pro, ikuti langkah-langkah berikut:

1. Buka Command Prompt sebagai Administrator (ikuti langkah sebelumnya).
2. Ketik perintah berikut satu per satu:

```
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX
```

```
slmgr /skms kms8.msguides.com
```

```
slmgr /ato
```

Setelah selesai, Windows 11 Pro Anda akan diaktifkan.

---
