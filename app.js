document.addEventListener("DOMContentLoaded", function () {
    // Display current date and time in real-time
    function updateDateTime() {
        const now = new Date();
        const dateTimeStr = now.toLocaleString('ar-IQ', { hour12: false });
        document.getElementById('current_datetime').textContent = `التاريخ والوقت الحالي: ${dateTimeStr}`;
    }

    // Update every second
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Example data placeholders (Replace with real data from JSON or Google Sheet)
    document.getElementById('inpatients').textContent = 'محمد أحمد - غرفة 101 - IQD 250000';
    document.getElementById('inpatients_total').textContent = 'IQD 250000';

    document.getElementById('surgeries').textContent = 'عملية قلب - د. أحمد علي - IQD 500000';
    document.getElementById('surgeries_total').textContent = 'IQD 500000';

    document.getElementById('free_appointments').textContent = '30';
    document.getElementById('paid_appointments').textContent = '20';
    document.getElementById('appointments_total').textContent = 'IQD 400000';

    document.getElementById('inbound_calls').textContent = '300';
    document.getElementById('outbound_calls').textContent = '150';

    document.getElementById('emergency_patients').textContent = '15';
    document.getElementById('emergency_total').textContent = 'IQD 750000';

    document.getElementById('radiology_total').textContent = 'IQD 200000';
    document.getElementById('lab_total').textContent = 'IQD 300000';
    document.getElementById('procedures_total').textContent = 'IQD 150000';

    document.getElementById('avg_patient_cost').textContent = 'IQD 50000';
    document.getElementById('top_doctor').textContent = 'د. يوسف كريم';
    document.getElementById('top_surgeon').textContent = 'د. أحمد علي';
});
