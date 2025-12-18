// DATA ARTIKEL (KAMU BISA TAMBAH SESUKA HATI)
const articles = [
    {
        title: "Hidup untuk Belajar",
        description: "Esensi hidup adalah menjadi pembelajar sepanjang hayat.",
        thumbnail: "life.jpg",
        link: "artikel1.html"
    },
    {
        title: "Continuation Writing Project",
        description: "Wait.",
        thumbnail: "assets/thumb2.jpg",
        link: "artikel2.html"
    },
    {
        title: "Continuation Writing Project",
        description: "Wait.",
        thumbnail: "assets/thumb3.jpg",
        link: "artikel3.html"
    }
];


// MENGISI DAFTAR ARTIKEL KE HTML
const listContainer = document.getElementById("article-list");

if (listContainer) {
    articles.forEach(a => {
        const card = document.createElement("div");
        card.className = "article-card";
        card.innerHTML = `
            <img src="${a.thumbnail}" alt="">
            <div class="text">
                <h3>${a.title}</h3>
                <p>${a.description}</p>
            </div>
        `;

        // klik → buka halaman artikel
        card.onclick = () => {
            window.location.href = a.link;
        };

        listContainer.appendChild(card);
    });
}
