document.addEventListener("DOMContentLoaded", function () {
    function updateDateTime() {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString('ar-IQ');
        const formattedDate = now.toLocaleDateString('ar-IQ');
        document.getElementById('current_datetime').textContent = `التاريخ والوقت الحالي: ${formattedTime} ${formattedDate}`;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
});
