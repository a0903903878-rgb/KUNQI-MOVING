document.addEventListener("DOMContentLoaded", function () {
    const galleryGrid = document.getElementById("galleryArticleGrid");
    const modal = document.getElementById("articleModal");
    const modalBody = document.getElementById("modalArticleBody");
    const modalClose = document.getElementById("modalCloseBtn");

    if (!galleryGrid || typeof MOVING_ARTICLES === "undefined") {
        return;
    }

    // Render 10 Article Cards into galleryGrid
    galleryGrid.innerHTML = MOVING_ARTICLES.map((art) => `
        <div class="article-card">
            <div class="article-card-img">
                <img src="${art.photo}" alt="${art.title}">
                <span class="category-badge">${art.category}</span>
            </div>
            <div class="article-card-body">
                <div class="meta-info">
                    <span><i class="fas fa-map-marker-alt"></i> ${art.location}</span>
                    <span><i class="far fa-calendar-alt"></i> ${art.date}</span>
                </div>
                <h3 class="article-title">${art.title}</h3>
                <p class="article-summary">${art.summary}</p>
                <div class="keywords-tags">
                    ${art.keywords.map(kw => `<span class="kw-tag">#${kw}</span>`).join('')}
                </div>
                <button class="btn-read-more" onclick="openArticleModal('${art.id}')">
                    <i class="fas fa-book-open"></i> 閱讀完整現場實錄
                </button>
            </div>
        </div>
    `).join('');

    // Global Modal Trigger Function
    window.openArticleModal = function (artId) {
        const art = MOVING_ARTICLES.find(a => a.id === artId);
        if (!art || !modal || !modalBody) return;

        modalBody.innerHTML = `
            <div class="modal-hero-img">
                <img src="${art.photo}" alt="${art.title}">
            </div>
            <div class="modal-content-inner">
                <div class="modal-meta-bar">
                    <span class="badge-cat">${art.category}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${art.location}</span>
                    <span><i class="far fa-calendar-alt"></i> ${art.date}</span>
                </div>
                <h2 class="modal-article-h2">${art.title}</h2>
                <div class="modal-kw-bar">
                    <i class="fas fa-tags"></i> 核心服務關鍵字：
                    ${art.keywords.map(kw => `<strong class="kw-highlight">${kw}</strong>`).join(' · ')}
                </div>
                <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 1.5rem 0;">
                <div class="modal-main-text">
                    ${art.content}
                </div>
                <div class="modal-cta-box">
                    <h4>需要專業的【${art.keywords[1]}】或【${art.keywords[2]}】服務嗎？</h4>
                    <p><strong>坤奇搬家</strong>提供免費現場與線上估價、合約契稅保障、不隨意加價！</p>
                    <a href="tel:0903903878" class="btn-cta-call"><i class="fas fa-phone-alt"></i> 撥打估價專線：0903-903-878</a>
                </div>
            </div>
        `;

        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    // Close Modal Functions
    function closeModal() {
        if (modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    }

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }

    if (modal) {
        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal && modal.classList.contains("active")) {
            closeModal();
        }
    });
});
