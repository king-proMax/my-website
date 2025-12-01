// وظيفة الوضع الليلي
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 1. التحقق مما إذا كان المستخدم قد حفظ الوضع مسبقاً
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    if(themeToggleBtn) themeToggleBtn.textContent = '☀️ الوضع النهاري';
}

// 2. تشغيل الزر عند الضغط عليه
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // حفظ الاختيار في الذاكرة
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️ الوضع النهاري';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙 الوضع الليلي';
        }
    });
}