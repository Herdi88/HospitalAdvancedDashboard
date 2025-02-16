document.addEventListener("DOMContentLoaded", function () {
    function updateTime() {
        const currentTimeElement = document.getElementById("current_time");
        const now = new Date();
        const formattedTime = now.toLocaleString('ar-IQ', { timeZone: 'Asia/Baghdad' });
        currentTimeElement.textContent = `التاريخ والوقت الحالي: ${formattedTime}`;
    }

    updateTime();
    setInterval(updateTime, 60000);

    document.getElementById("refresh_data").addEventListener("click", function () {
        alert("سيتم تحديث البيانات لاحقًا");
    });
});
