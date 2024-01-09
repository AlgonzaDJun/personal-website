"use client";
import React, { useState } from "react";
import "../css/contact.css";
import { BsBrowserSafari, BsGithub, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function page() {
  const [form, setForm] = useState({
    nama: "",
    nomorHape: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=6281243367761&text=Halo, perkenalkan saya ${encodeURIComponent(
        form.nama
      )}%0aSaya ingin menghubungi tentang ${encodeURIComponent(form.pesan)}`
    );
  };

  return (
    <div className="min-vh-100 w-100 mt-5 py-5 container px-3">
      <div className="p-3 row rounded-4 bg-white">
        <div className="col-md-8 col-12">
          <div className="mt-3 mb-5">
            <h2>Let's Get In Touch 👽</h2>
          </div>
          <div className="mb-3 text-white">
            <div className="d-flex justify-content-between flex-column flex-md-row gap-2 align-items-center mb-3">
              <div className="w-100">
                <input
                  name="nama"
                  type="text"
                  placeholder="Masukan nama antum"
                  className="p-2 rounded-2 me-auto w-100 "
                  value={form.nama}
                  onChange={handleChange}
                />
              </div>
              {/* <div className="w-100">
                <input
                  name="nomor-hape"
                  type="number"
                  placeholder="Masukan nomor hape antum"
                  className="p-2 rounded-2 ms-auto w-100"
                  value={form.nomorHape}
                  onChange={handleChange}
                />
              </div> */}
            </div>
            <div className="">
              <textarea
                className="w-100 p-2 rounded-2"
                name="pesan"
                id="pesan"
                cols=""
                rows="5"
                placeholder="Masukkan pesan antum kepada ana"
                value={form.pesan}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div>
            <button className="myButton w-100 mb-5" onClick={handleSubmit}>
              Kirim
            </button>
          </div>
        </div>

        {/* CONTACT SESSION */}
        <div className="col-md-4 col-12">
          <div className="mt-3 mb-5">
            <h2>Contact Me</h2>
          </div>
          <div className="ms-3">
            <div className="mb-3">
              <Link
                href="https://wa.me/6281243367761"
                className="d-flex align-items-center text-decoration-none"
              >
                <BsWhatsapp size={40} color="green" />
                <div className="ms-3" style={{ cursor: "pointer" }}>
                  <div className="text-muted">+6281243367761</div>
                </div>
              </Link>
            </div>
            <div className="mb-3">
              <Link
                href="mailto:algonsadewangga@gmail.com"
                className="d-flex align-items-center text-decoration-none flex-wrap"
              >
                <MdEmail size={40} color="#4285F4" />
                <div className="ms-0 ms-md-3" style={{ cursor: "pointer" }}>
                  <div className="text-muted ">algonsadewangga@gmail.com</div>
                </div>
              </Link>
            </div>
            <div className="mb-3">
              <Link
                href="https://github.com/AlgonzaDJun"
                className="d-flex align-items-center text-decoration-none"
              >
                <BsGithub size={40} color="black" />
                <div className="ms-3" style={{ cursor: "pointer" }}>
                  <div className="text-muted">AlgonzaDJun</div>
                </div>
              </Link>
            </div>
            <div className="mb-3">
              <Link
                href="/"
                className="d-flex align-items-center text-decoration-none"
              >
                <BsBrowserSafari size={40} color="0FB5ee" />
                <div className="ms-3" style={{ cursor: "pointer" }}>
                  <div className="text-muted">My Website</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
