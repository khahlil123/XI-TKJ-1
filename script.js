// ==========================================
// CRUD DOKUMENTASI XI TKJ 1
// ==========================================

const dataAwal = [
    {
        id: 1,
        judul: "Kegiatan Kelas",
        deskripsi: "Dokumentasi kegiatan kelas XI TKJ 1.",
        gambar: "img/kegiatan1.jpg"
    },
    {
        id: 2,
        judul: "Kegiatan Sekolah",
        deskripsi: "Momen kegiatan bersama teman-teman.",
        gambar: "img/kegiatan2.jpg"
    },
    {
        id: 3,
        judul: "Praktik TKJ",
        deskripsi: "Dokumentasi praktik dan pembelajaran TKJ.",
        gambar: "img/kegiatan3.jpg"
    }
];

let dokumentasi =
    JSON.parse(localStorage.getItem("dokumentasiTKJ1"))
    || dataAwal;


// ==========================================
// SIMPAN DATA
// ==========================================

function simpanData() {

    localStorage.setItem(
        "dokumentasiTKJ1",
        JSON.stringify(dokumentasi)
    );

}


// ==========================================
// TAMPILKAN DOKUMENTASI
// ==========================================

function tampilkanDokumentasi() {

    const gallery =
        document.querySelector(".gallery");

    if (!gallery) return;

    gallery.innerHTML = "";

    dokumentasi.forEach(function(item, index) {

        gallery.innerHTML += `

            <div class="gallery-item">

                <img
                    src="${item.gambar}"
                    alt="${item.judul}"
                >

                <div class="gallery-info">

                    <span>
                        XI TKJ 1
                    </span>

                    <h3>
                        ${item.judul}
                    </h3>

                    <p>
                        ${item.deskripsi}
                    </p>

                    <div class="crud-buttons">

                        <button
                            onclick="editDokumentasi(${index})">
                            ✏️ Edit
                        </button>

                        <button
                            onclick="hapusDokumentasi(${index})">
                            🗑️ Hapus
                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


// ==========================================
// BUKA FORM TAMBAH
// ==========================================

function tambahDokumentasi() {

    document.getElementById(
        "modalTambah"
    ).style.display = "flex";

}


// ==========================================
// TUTUP FORM
// ==========================================

function tutupModal() {

    document.getElementById(
        "modalTambah"
    ).style.display = "none";

}


// ==========================================
// SIMPAN DOKUMENTASI BARU
// ==========================================

function simpanDokumentasiBaru() {

    const judul =
        document.getElementById(
            "judulKegiatan"
        ).value.trim();


    const deskripsi =
        document.getElementById(
            "deskripsiKegiatan"
        ).value.trim();


    const gambar =
        document.getElementById(
            "gambarKegiatan"
        ).value.trim();


    if (
        judul === "" ||
        deskripsi === "" ||
        gambar === ""
    ) {

        alert(
            "⚠️ Semua data harus diisi!"
        );

        return;

    }


    dokumentasi.push({

        id: Date.now(),

        judul: judul,

        deskripsi: deskripsi,

        gambar: gambar

    });


    simpanData();

    tampilkanDokumentasi();

    tutupModal();


    document.getElementById(
        "judulKegiatan"
    ).value = "";


    document.getElementById(
        "deskripsiKegiatan"
    ).value = "";


    document.getElementById(
        "gambarKegiatan"
    ).value = "";


    alert(
        "✅ Dokumentasi berhasil ditambahkan!"
    );

}


// ==========================================
// EDIT
// ==========================================

function editDokumentasi(index) {

    const item =
        dokumentasi[index];


    const judulBaru =
        prompt(
            "Ubah judul:",
            item.judul
        );


    if (!judulBaru) return;


    const deskripsiBaru =
        prompt(
            "Ubah deskripsi:",
            item.deskripsi
        );


    if (!deskripsiBaru) return;


    item.judul =
        judulBaru;


    item.deskripsi =
        deskripsiBaru;


    simpanData();

    tampilkanDokumentasi();


    alert(
        "✅ Dokumentasi berhasil diubah!"
    );

}


// ==========================================
// HAPUS
// ==========================================

function hapusDokumentasi(index) {

    const yakin =
        confirm(
            "⚠️ Yakin ingin menghapus dokumentasi ini?"
        );


    if (!yakin) return;


    dokumentasi.splice(
        index,
        1
    );


    simpanData();

    tampilkanDokumentasi();


    alert(
        "🗑️ Dokumentasi berhasil dihapus!"
    );

}


// ==========================================
// SAAT WEBSITE DIBUKA
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        tampilkanDokumentasi();

    }
);