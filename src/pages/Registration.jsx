import React from "react";

import { useForm } from "react-hook-form";

export default function Registration() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
          {...register("gender")}
          className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
        >
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
          {...register("lomba")}
          className="rounded-full border-2 mb-2 px-2 py-1 border-[#B59DED]"
        >
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
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
        <input
          className="rounded-full border-2 mt-4 px-2 py-1 text-[#E46871] border-black"
          type="submit"
        />
      </form>
    </div>
  );
}
