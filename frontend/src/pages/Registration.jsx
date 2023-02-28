import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";

export default function Registration() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  // const [kartu, setKartu] = useState("");
  // const [surat, setSurat] = useState("");
  // const [bukti, setBukti] = useState("");
  const onSubmit = (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("nama", data.nama);
    formData.append("ttl", data.ttl);
    formData.append("gender", data.gender);
    formData.append("sekolah", data.sekolah);
    formData.append("lomba", data.lomba);
    formData.append("idline", data.idline);
    formData.append("notelp", data.notelp);
    formData.append("kartu", data.kartu);
    formData.append("surat", data.surat);
    formData.append("foto", data.foto);
    formData.append("bukti", data.bukti);

    axios
      .post("https://nmgbc-backend.vercel.app/api/register/", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("Registrasi Berhasil!");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-[url('../public/img/bg.png')] font-Volkswagen min-h-screen">
        {loading && (
          <div className="fixed w-full flex items-center justify-center h-full bg-gray-700 opacity-30 -mt-20">
            <AiOutlineLoading className="animate-spin opacity-100" size={64} />
          </div>
        )}
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center py-12">
          Registration
        </h1>
        <div className="flex justify-center pb-32 px-20 md:px-[200px]">
          <form
            className="flex flex-col text-sm md:text-base max-w-[600px] w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>E-Mail</label>
            <input
              className={`rounded-full border-2 mb-2 md:px-2 md:py-1 border-[#B59DED] ${
                errors.email && "border-[#ee1f1f]"
              }`}
              {...register("email", { required: true, maxLength: 50 })}
            />
            <label>Nama Lengkap</label>{" "}
            {errors.nama?.type === "maxLength" && (
              <span className="text-[#ee1f1f] font-Stanberry">
                Maksimal karakter adalah 200
              </span>
            )}
            <input
              className={`rounded-full border-2 mb-2 md:px-2 md:py-1 border-[#B59DED] ${
                errors.nama && "border-[#ee1f1f]"
              }`}
              {...register("nama", { required: true, maxLength: 200 })}
            />
            <label>Tempat, Tanggal Lahir</label>
            {errors.ttl?.type === "maxLength" && (
              <span className="text-[#ee1f1f] font-Stanberry">
                Maksimal karakter adalah 100
              </span>
            )}
            <input
              className={`rounded-full border-2 mb-2 md:px-2 md:py-1 border-[#B59DED] ${
                errors.ttl && "border-[#ee1f1f]"
              }`}
              {...register("ttl", { required: true, maxLength: 100 })}
            />
            <label>Jenis Kelamin</label>
            <select
              {...register("gender", { required: true })}
              className="rounded-full border-2 mb-2 md:px-2 md:py-1 border-[#B59DED] cursor-pointer"
            >
              <option value="">Select one</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
            <label>Asal Sekolah</label>
            <input
              className={`rounded-full border-2 mb-2 md:px-2 md:py-1 border-[#B59DED] ${
                errors.sekolah && "border-[#ee1f1f]"
              }`}
              {...register("sekolah", { required: true, maxLength: 50 })}
            />
            <label>Lomba yang Dipilih</label>
            <select
              {...register("lomba", { required: true })}
              className="rounded-full border-2 mb-2 md:px-2 md:py-1 border-[#B59DED] cursor-pointer"
            >
              <option value="">Select one</option>
              <option value="Biology competition">Biology competition</option>
              {/* <option value="Public poster">Public poster</option>
              <option value="Health speech contest">Speech</option> */}
            </select>
            <label>ID Line</label>
            <input
              className={`rounded-full border-2 mb-2 md:px-2 md:py-1 border-[#B59DED] ${
                errors.idline && "border-[#ee1f1f]"
              }`}
              {...register("idline", { required: true, maxLength: 20 })}
            />
            <label>Nomor HP</label>
            <input
              className={`rounded-full border-2 mb-2 md:px-2 md:py-1 border-[#B59DED] ${
                errors.notelp && "border-[#ee1f1f]"
              }`}
              {...register("notelp", {
                required: true,
                minLength: 10,
                maxLength: 13,
              })}
            />
            <label>Link Kartu Identitas</label>
            <input
              className={`rounded-full border-2 mb-2 md:px-2 md:py-1 border-[#B59DED] ${
                errors.kartu && "border-[#ee1f1f]"
              }`}
              {...register("kartu", {
                required: true,
              })}
            />
            <label>Link Surat Keterangan</label>
            <input
              className={`rounded-full border-2 mb-2 md:px-2 md:py-1 border-[#B59DED] ${
                errors.surat && "border-[#ee1f1f]"
              }`}
              {...register("surat", {
                required: true,
              })}
            />
            <label>Link Pas Foto</label>
            <input
              className={`rounded-full border-2 mb-2 md:px-2 md:py-1 border-[#B59DED] ${
                errors.foto && "border-[#ee1f1f]"
              }`}
              {...register("foto", {
                required: true,
              })}
            />
            <label>Link Bukti Transfer</label>
            {/* <p className="text-xs">
              GITA MARCIA KARINA <br /> Bank Mandiri <br /> 1020009940153
            </p> */}
            <input
              className={`rounded-full border-2 mb-2 md:px-2 md:py-1 border-[#B59DED] ${
                errors.bukti && "border-[#ee1f1f]"
              }`}
              {...register("bukti", {
                required: true,
              })}
            />
            <input
              className="rounded-full border-2 mt-4 md:px-2 md:py-1 text-[#E46871] border-black cursor-pointer"
              type="submit"
            />
            {/* <Upload uploadFile={kartu} setUploadFile={setKartu}>
          Upload kartu pelajar/identitas
        </Upload>
        <Upload uploadFile={surat} setUploadFile={setSurat}>
          Upload surat keterangan sekolah
        </Upload>
        <Upload uploadFile={bukti} setUploadFile={setBukti}>
          Upload bukti pembayaran
        </Upload> */}
            <p className="mt-2">
              Peserta akan diinvite ke dalam grup WA oleh panitia setelah
              dilakukan konfirmasi melalui WA
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
