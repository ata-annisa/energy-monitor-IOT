# Sistem Monitoring Konsumsi Energi dan Manajemen Beban Listrik Berbasis IoT

Sistem ini dirancang untuk memantau konsumsi energi listrik dan kondisi operasional mesin CNC di lingkungan perusahaan. Proyek ini mengintegrasikan perangkat keras mikrokontroler IoT dengan antarmuka web interaktif untuk menyajikan analitik penggunaan daya dan fungsi kendali mesin jarak jauh.

## Arsitektur Perangkat Keras
Pemrosesan data fisik pada sistem ini mengandalkan komponen berikut:
* **Unit Pemroses Utama:** ESP32 bertindak sebagai otak komputasi dan jembatan komunikasi jaringan.
* **Sensor Arus:** Modul ACS712 digunakan untuk mengukur aliran arus listrik aktual pada beban mesin CNC.
* **Sensor Tegangan:** Modul ZMPT101B digunakan untuk membaca nilai tegangan listrik AC.
* **Aktuator:** Modul Relai terintegrasi untuk mengeksekusi pemutusan atau penyambungan arus listrik ke mesin berdasarkan perintah dari antarmuka pengguna.

## Topologi Sistem
1. **Akuisisi Data:** Sensor ACS712 dan ZMPT101B melakukan pembacaan parameter kelistrikan secara terus-menerus.
2. **Komputasi Lokal:** ESP32 mengonversi sinyal sensor menjadi metrik daya nyata (Tegangan, Arus, Watt, dan kWh) menggunakan faktor kalibrasi yang telah disesuaikan.
3. **Komunikasi Data:** ESP32 mentransmisikan *payload* data ke peladen dan mendengarkan instruksi *feedback* untuk mengontrol aktuator relai.
4. **Visualisasi & Kendali:** Antarmuka web membaca data dari *endpoint* API dan menampilkannya dalam dasbor analitik interaktif.

## Struktur Repositori
Repositori ini mengadopsi pendekatan modular. 
* `/cnc-energy-monitor`: Merupakan direktori khusus untuk kode sumber antarmuka pengguna (*frontend*). **Silakan merujuk pada file `README.md` di dalam folder ini untuk panduan instalasi dependensi dan instruksi eksekusi peladen lokal.**
* `/[Nama Folder Kode ESP32]`: [soon kode C++ Arduino/ESP32].

## Lampiran Visual
![soon Skema Rangkaian Hardware]
*Keterangan: Skema integrasi perangkat keras ESP32 dan sensor.*

<img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/afdf5dde-e8fc-4524-8de9-7c56352d9ef7" />
*Keterangan: Tampilan antarmuka pemantauan energi dan kendali mesin CNC.*
