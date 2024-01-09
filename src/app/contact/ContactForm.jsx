"use client";
import React, { useState } from "react";

const ContactForm = () => {
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
    <>
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
    </>
  );
};

export default ContactForm;
