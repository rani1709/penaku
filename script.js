// DATA ARTIKEL (KAMU BISA TAMBAH SESUKA HATI)
const articles = [
    {
        title: "Cara Menjadi Lebih Produktif",
        description: "Tips praktis untuk meningkatkan fokus & konsistensi.",
        thumbnail: "assets/thumb1.jpg",
        link: "artikel1.html"
    },
    {
        title: "Belajar Teknologi Tanpa Stres",
        description: "Cara belajar coding secara santai dan menyenangkan.",
        thumbnail: "assets/thumb2.jpg",
        link: "artikel2.html"
    },
    {
        title: "Mindset Positif untuk Remaja",
        description: "Bangun kebiasaan sehat dan pikiran yang kuat.",
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
