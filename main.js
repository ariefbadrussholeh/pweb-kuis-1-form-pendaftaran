const provinsi = document.getElementById("provinsi");

const getProvinsi = async () => {
  const response = await fetch("https://ibnux.github.io/data-indonesia/provinsi.json");
  const data = await response.json();
  return data;
};

const showProvinsi = async () => {
  const options = await getProvinsi();
  provinsi.value = options[0];
  options.forEach((element) => {
    const newOption = document.createElement("option");
    newOption.value = element.id;
    newOption.text = element.nama;
    provinsi.appendChild(newOption);
  });
};

showProvinsi();

function validate() {
  const nama = document.getElementById("nama").value;
  const kota = document.getElementById("kota").value;
  const alamat = document.getElementById("alamat").value;
  const kodePos = document.getElementById("kode-pos").value;
  const telepon = document.getElementById("telepon").value;
  const email = document.getElementById("email").value;
  const sponsor = document.getElementById("sponsor").value;
  const namaPerusahaan = document.getElementById("nama-perusahaan").value;
  const alamatPerusahaan = document.getElementById("alamat-perusahaan").value;
  const namaKontakPersonal = document.getElementById("nama-kontak-personal").value;
  const telpPersonal = document.getElementById("telp-personal").value;
  const emailPerusahaan = document.getElementById("email-perusahaan").value;

  var letters = /^[A-Za-z]+$/;

  if (nama == "" || kota == "" || alamat == "" || kodePos == "" || telepon == "" || email == "" || sponsor == "" || namaPerusahaan == "" || alamatPerusahaan == "" || namaKontakPersonal == "" || telpPersonal == "" || emailPerusahaan == "") {
    alert("Masih ada kolom yang kosong, isi terlebih dahulu");
  } else {
    alert("Selamat anda berhasil registrasi");
    window.location = "/succed.html";
  }
}
