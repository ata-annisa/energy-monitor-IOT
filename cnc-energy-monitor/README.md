# CNC Energy Monitor (frontend)
Jalankan: `npm install && npm run dev` | Build: `npm run build`

Semua data saat ini SIMULASI (src/services/api.js + src/data/simulation.js). Tidak ada koneksi ke ESP32.
Untuk integrasi, ganti isi fungsi di `src/services/api.js` (UI tidak perlu diubah). Yang masih perlu ditentukan:
- GET  /api/monitoring/latest   -> {ts, v, i, p, e}   (satuan V, A, W, kWh)
- GET  /api/monitoring/history?from&to
- GET  /api/device/status       -> {online, lastSeen, relays:{1:{on,at},2:{on,at}}}
- POST /api/relay/:ch           -> {on} ; sukses hanya setelah ESP32 mengonfirmasi (ack)
- GET/PUT /api/settings
- Protokol ESP32 ke backend (MQTT/HTTP/WebSocket) dan sumber status mesin CNC nyata (belum ditentukan).
- Perhitungan daya aktif nyata perlu mempertimbangkan faktor daya/kalibrasi ACS712 dan ZMPT101B.
