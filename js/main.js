// Kunqi Moving Company Interactive Script
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // 2. Interactive Instant Estimate Calculator / Form Submission
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('custName')?.value || '貴賓';
            const phone = document.getElementById('custPhone')?.value || '';
            const moveDate = document.getElementById('moveDate')?.value || '';

            if (!phone) {
                alert('請填寫您的聯絡電話，以便搬家專員與您確認估價細節。');
                return;
            }

            alert(`感謝 ${name} 的預約申請！\n我們的專員將在 15 分鐘內透過電話 (${phone}) 與您聯繫，確認 ${moveDate ? moveDate : '預計搬遷日'} 的估價細節。\n\n您也可以直接點擊畫面右下角的 LINE 懸浮按鈕傳送現場照片進行免費精準估價！`);
            quoteForm.reset();
        });
    }

    // 3. Highlight Current Page Link in Nav
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        }
    });
});


// ===== FAQ Accordion Toggle =====
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                // Close all items
                faqItems.forEach(i => i.classList.remove('active'));
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
});

