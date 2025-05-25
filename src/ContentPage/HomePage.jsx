import React from 'react'
import Navbar from '../Component/Navbar';

import './Homepage.css'

function HomePage() {
  return (
    <>
      <Navbar />
      <div class = "wrapper">
        <div className = "topContent">
          <section id="judul">
              <div className="content-title">
                  <h1>Industri Otomasi</h1>
              </div>
              <div className= "isi-content">
                <p>Industri otomasi adalah bidang industri yang berfokus pada penggunaan teknologi untuk 
                  mengoperasikan mesin, proses produksi, atau sistem dengan intervensi manusia yang minimal 
                  atau tanpa campur tangan sama sekali. Tujuannya adalah untuk meningkatkan efisiensi, kualitas, 
                  keselamatan, dan produktivitas dalam berbagai sektor.</p>
              </div>
          </section>
        </div>
        <div className = "boxContent">
        <section class="components-box" aria-label="Komponen Utama Industri Otomasi">
            <h3>Komponen Utama :</h3>
            <ol>
              <li><span>Sensor</span><br />Mengumpulkan data seperti suhu, tekanan, atau gerakan dari lingkungan sekitar.</li>
              <li><span>Kontroler (PLC/DCS)</span><br />Otak dari sistem otomasi yang mengatur logika dan proses kerja.</li>
              <li><span>Aktuator</span><br />Menggerakkan mesin atau perangkat berdasarkan perintah kontroler.</li>
              <li><span>HMI (Human-Machine Interface)</span><br />Layar antarmuka untuk operator mengontrol dan memantau sistem.</li>
              <li><span>Sistem Komunikasi</span><br />Menghubungkan seluruh perangkat agar bisa bekerja secara terintegrasi.</li>
            </ol>
          </section>
        </div>

        <section class="two-column" aria-label="Manfaat Otomasi Industri">
          <div>
            <img
              src="https://storage.googleapis.com/a1aa/image/356d2e1e-40bc-4aa7-6851-f87198ea8ae0.jpg"
              alt="Yellow industrial robotic arms working inside a modern factory with metal structures and bright lighting"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="text-content">
            <h3>Manfaat Otomasi Industri</h3>
            <ul>
              <li>Otomotif: Robot perakitan dan pengecatan mobil.</li>
              <li>Makanan dan Minuman: Pengisian dan pengemasan otomatis.</li>
              <li>Farmasi: Produksi dan kontrol kualitas obat secara otomatis.</li>
              <li>Logistik: Sortir paket dan pengiriman menggunakan sistem otomatis.</li>
            </ul>
          </div>
      </section>

      <section class="two-column-reverse" aria-label="Contoh Penerapan Industri Otomasi">
        <div class="text-content-reverse">
          <h3>Contoh Penerapan Industri Otomasi</h3>
          <ul>
            <li>Produktivitas lebih tinggi</li>
            <li>Kualitas produk lebih konsisten</li>
            <li>Mengurangi kesalahan manusia</li>
            <li>Meningkatkan keselamatan kerja</li>
            <li>Efisiensi biaya jangka panjang</li>
          </ul>
        </div>
        <div>
          <img
            src="https://storage.googleapis.com/a1aa/image/f75b4d20-648a-46f2-b7cd-d5f30a84760f.jpg"
            alt="Orange robotic arms assembling a car frame inside a factory with metal structures and bright lighting"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section class="future-box" aria-label="Masa Depan Industri Otomasi">
        <h3>Masa Depan Industri Otomasi</h3>
        <p>
          Industri otomasi terus berkembang pesat dengan hadirnya teknologi seperti Artificial Intelligence (AI), Internet of Things (IoT), dan robotika cerdas. Ini membuka peluang besar bagi perusahaan untuk menciptakan sistem produksi yang lebih pintar dan fleksibel.
        </p>
      </section>

      <footer>
        <p>NovaTech International, Inc.</p>
        <nav aria-label="Footer navigation">
          <a href="#">Corporate Information</a>
          <a href="#">Privacy notice</a>
          <a href="#">Cookie notice</a>
          <a href="#">Terms of use</a>
          <a href="#">Digital ID</a>
        </nav>
        </footer>
        </div>
        </>
  )
}

export default HomePage;
