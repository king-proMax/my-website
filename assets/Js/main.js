// ===== تبديل الوضع النهاري / الليلي =====
const toggle = document.getElementById('toggleTheme');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// ===== فتح النوافذ المنبثقة للأدوات =====
const toolBtns = document.querySelectorAll('.tool-btn');
const popup = document.getElementById('popup');
const toolFrame = document.getElementById('toolFrame');
const closeBtn = document.querySelector('.close');

toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tool = btn.getAttribute('data-tool');
        toolFrame.src = `tools/${tool}.html`;  // رابط الأداة
        popup.style.display = 'flex';
    });
});

// إغلاق النافذة
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    toolFrame.src = '';
});

// إغلاق عند الضغط خارج المحتوى
window.addEventListener('click', e => {
    if (e.target === popup) {
        popup.style.display = 'none';
        toolFrame.src = '';
    }
});