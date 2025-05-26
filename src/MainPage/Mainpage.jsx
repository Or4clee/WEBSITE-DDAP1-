import React from 'react'
import Navbar from '../Component/Navbar'
import './Mainpage.css'
import { Route, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { Link } from 'react-scroll'

function Mainpage(){
const navigate = useNavigate()

  return (
    <>
    <Navbar/>
    <main id = "home">
        <section  className="hero" aria-label="Innovation and Energy introduction">
            <div className="hero-text">
                <h1>Inovasi<br />Energi<span class="bolt" aria-hidden="true">⚡</span></h1>
                    <p>Disinilah tempat mengenai informasi terbaru mengenai inovasi - inovasi disektor energi serta memperkenalkan perusahaan - perusahaan hebat yang bergerak di bidang energi</p>
                    <button  className="button" > <a>News</a> </button>
                    </div>
                    <div className="hero-image">
                     
                </div>
        </section>
        <h2  id = "news" className="trending"> Trending Topic</h2>
        <section onClick = {() => navigate('/content')}  className="trending-grid" aria-label="Trending topics">
                <article className="trending-item" tabindex="0">
                <img src="https://storage.googleapis.com/a1aa/image/e1c33b62-544d-443e-da1b-b284a517fbf2.jpg" alt="Industrial automation machine with control panel inside a factory" width="320" height="180" draggable="false" />
                <div className="trending-info">
                <span>Industri<br />Otomasi</span>
                <span className="arrow" aria-hidden="true">→</span>
                </div>
            </article>
            <article className="trending-item" tabindex="0">
                <img src="https://storage.googleapis.com/a1aa/image/c5dcab71-8caf-435a-e2d4-c1fe093b2308.jpg" alt="Aerial view of buildings and greenery representing energy transition" width="320" height="180" draggable="false" />
                <div className="trending-info">
                <span>Transisi<br />Energi</span>
                <span className="arrow" aria-hidden="true">→</span>
                </div>
            </article>
            <article className="trending-item" tabindex="0">
                <img src="https://storage.googleapis.com/a1aa/image/be7c1b2a-1e61-427d-10e4-064739a05e6b.jpg" alt="Four humanoid robots and a man standing on a stage with black background" width="320" height="180" draggable="false" />
                <div className="trending-info">
                <span>Evolusi<br />AGI</span>
                <span className="arrow" aria-hidden="true">→</span>
                </div>
            </article>
            <article className="trending-item" tabindex="0">
                <img src="https://storage.googleapis.com/a1aa/image/395f9430-3b93-4701-be69-f60eece86297.jpg" alt="Server room with rows of servers and blue ambient lighting" width="320" height="180" draggable="false" />
                <div className="trending-info">
                <span>Keamanan<br />Siber</span>
                <span className="arrow" aria-hidden="true">→</span>
                </div>
            </article>
            </section>

            
            <div className='trendingtopic-footer'>
                <h3 className='novatech-trendingtopic-footer'>NovaTech</h3>
            </div>

            <section id = "lowonganpekerjaan" className='LowonganPekerjaan'>
                <h1>
                    Find Your Path
                </h1>
                <p>Lowongan karir yang tersedia di berbagai perusahaan</p>
            </section>

            <section className="cards">
                <article className="card">
                <img src="https://storage.googleapis.com/a1aa/image/b90dae68-fffd-4013-719d-1f13a25c5882.jpg" alt="Office environment with a person working on a computer in an Information Technology setting" />
                <div class="card-content">
                    <h2>Information Technology</h2>
                    <p>Jadilah bagian dari budaya yang kreatif, kolaboratif, cloud, robotika, administrasi jaringan.</p>
                </div>
                </article>

                <article className="card">
                <img src="https://storage.googleapis.com/a1aa/image/26516817-c2ac-4a98-200b-f985123111ce.jpg" alt="Two software developers discussing code on a blackboard in an industrial office" />
                <div className="card-content">
                    <h2>Software</h2>
                    <p>Transformasi digital ke Industrial Internet of Things. Pengembang dan insinyur perangkat lunak di berbagai sistem operasi dan berbagai platform.</p>
                </div>
                </article>

                <article className="card">
                <img src="https://storage.googleapis.com/a1aa/image/8e2985b2-95ca-47ab-3ab8-a193b9c8ed55.jpg" alt="Closeup of engineering machinery with metal parts being worked on" />
                <div className="card-content">
                    <h2>Engineering</h2>
                    <p>Di masa depan manufaktur akan canggih, mesin yang terhubung akan lebih pintar. Pengkodean, pembangunan, peretasan, desain, pengujian.</p>
                </div>
                </article>
             </section>
            <div class="image-section">
                <div class="overlay-text">
                    WHY WAIT WHEN<br />YOU CAN MAKE IT
                </div>
            </div>

            <section class="about">
            <h2>About us</h2>
            <p>
            NovaTech membantu organisasi memberikan berita fakta mengenai masalah kompleks di dunia dalam otomatisasi, inovasi, teknologi, dan transisi energi. Sebagai penyebar berita, kami menyediakan ruang untuk mencari fakta yang relevant yang dapat dijadikan referensi untuk inovasi melalui segmen bisnis Teknologi Dirgantara, Otomasi Bangunan, Solusi Energi dan Keberlanjutan, serta Otomasi Industri dengan tujuan untuk dapat membantu membuat dunia lebih cerdas, lebih aman, dan lebih berkelanjutan.
            </p>
            </section>

            <section class="trusted">
                We are a people and partner trusted news portal
            </section>

           
    </main>
    </>
    
  )
}

export default Mainpage
