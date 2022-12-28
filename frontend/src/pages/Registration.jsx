import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Registration() {
  const { register, handleSubmit } = useForm();
  const [kartu_identitas, setKartuIdentitas] = useState("");
  const [surat, setSurat] = useState("");
  const [bukti, setBukti] = useState("");
  const [previewKartu, setPreviewKartu] = useState(null);
  const [previewSurat, setPreviewSurat] = useState(null);
  const [previewBukti, setPreviewBukti] = useState(null);

  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("nama", data.nama);
    formData.append("ttl", data.ttl);
    formData.append("gender", data.gender);
    formData.append("sekolah", data.sekolah);
    formData.append("lomba", data.lomba);
    formData.append("idline", data.idline);
    formData.append("notelp", data.notelp);
    formData.append("kartu_identitas", kartu_identitas);
    formData.append("surat_keterangan", surat);
    formData.append("bukti_pembayaran", bukti);

    axios
      .post("http://localhost:8080/api/register", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onKartuUpload = (e) => {
    setKartuIdentitas(e.target.files[0]);
    setPreviewKartu(URL.createObjectURL(e.target.files[0]));
  };
  const onSuratUpload = (e) => {
    setSurat(e.target.files[0]);
    setPreviewSurat(URL.createObjectURL(e.target.files[0]));
  };
  const onBuktiUpload = (e) => {
    setBukti(e.target.files[0]);
    setPreviewBukti(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="bg-[#BFEEFF] font-Volkswagen min-h-screen">
      <h1 className="text-4xl text-center py-12">Registration</h1>
      <form
        className="flex flex-col pb-32 px-64 md:px-[200px] xl:px-[640px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>E-Mail</label>
        <input
          className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
          {...register("email", { required: true, maxLength: 50 })}
        />
        <label>Nama Lengkap</label>
        <input
          className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
          {...register("nama", { required: true, maxLength: 50 })}
        />
        <label>Tempat, Tanggal Lahir</label>
        <input
          className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
          {...register("ttl", { required: true, maxLength: 50 })}
        />
        <label>Jenis Kelamin</label>
        <select
          {...register("gender", { required: true })}
          className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
        >
          <option value="">Select one</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <label>Asal Sekolah</label>
        <input
          className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
          {...register("sekolah", { required: true, maxLength: 50 })}
        />
        <label>Lomba yang Dipilih</label>
        <select
          {...register("lomba", { required: true })}
          className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
        >
          <option value="">Select one</option>
          <option value="Biology competition">Biology competition</option>
          <option value="Public poster">Public poster</option>
          <option value="Health speech contest">Speech</option>
        </select>
        <label>ID Line</label>
        <input
          className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
          {...register("idline", { required: true, maxLength: 20 })}
        />
        <label>Nomor HP</label>
        <input
          className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
          {...register("notelp", {
            required: true,
            minLength: 10,
            maxLength: 13,
          })}
        />
        <img src={previewKartu} alt="" width={100} />
        <label>Kartu pelajar/identitas</label>
        <input
          type="file"
          name="kartu_identitas"
          className="mb-2 border-[#B59DED]"
          required
          onChange={(e) => onKartuUpload(e)}
        />
        <img src={previewSurat} alt="" width={100} />
        <label>Surat keterangan sekolah</label>
        <input
          type="file"
          name="surat_keterangan"
          className="mb-2 border-[#B59DED]"
          required
          onChange={(e) => onSuratUpload(e)}
        />
        <img src={previewBukti} alt="" width={100} />
        <label>Bukti pembayaran</label>
        <input
          type="file"
          name="bukti_pembayaran"
          className="mb-2 border-[#B59DED]"
          required
          onChange={(e) => onBuktiUpload(e)}
        />
        <input
          className="rounded-full border-2 mt-4 px-2 py-1 text-[#E46871] border-black"
          type="submit"
        />
      </form>
    </div>
  );
}
