const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pesertaSchema = new Schema({
  email: String,
  nama: String,
  ttl: String,
  gender: String,
  sekolah: String,
  lomba: String,
  idline: String,
  notelp: String,
  kartu: String,
  surat: String,
  foto: String,
  bukti: String,
  is_verified: Boolean,
});
const peserta = mongoose.model("peserta", pesertaSchema);

module.exports = {
  peserta,
};
