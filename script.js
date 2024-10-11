// script.js
document.getElementById('routerButton').addEventListener('click', function () {
    // قائمة الاحتمالات الافتراضية لعناوين IP الراوترات الشائعة
    const routerIps = ['192.168.1.1', '192.168.0.1', '192.168.100.1', '10.0.0.1'];

    // محاولة الوصول إلى صفحة الراوتر
    let found = false;
    const statusElement = document.getElementById('status');
    statusElement.innerText = 'جارٍ البحث عن الراوتر...';

    // التحقق من كل IP
    routerIps.forEach(ip => {
        fetch(`http://${ip}`, { method: 'HEAD', mode: 'no-cors' })
            .then(() => {
                if (!found) {
                    found = true;
                    window.location.href = `http://${ip}`;
                }
            })
            .catch(() => {
                statusElement.innerText = 'لم يتم العثور على الراوتر. حاول يدوياً.';
            });
    });
});
