document.addEventListener("DOMContentLoaded", function () {
    const dataUrl = "https://raw.githubusercontent.com/Herdi88/HospitalTrackerPro/main/hospital_data.json";

    async function fetchData() {
        try {
            const response = await fetch(dataUrl);
            const data = await response.json();

            // Admitted Patients
            const admittedList = document.getElementById("admitted_patients_list");
            admittedList.innerHTML = data.admitted_patients.map(
                patient => `${patient.name} - غرفة ${patient.room} - IQD ${patient.cost}`
            ).join("<br>");
            document.getElementById("admitted_patients_total").textContent = `IQD ${data.admitted_patients_total}`;

            // Surgeries
            const surgeriesList = document.getElementById("surgeries_list");
            surgeriesList.innerHTML = data.surgeries.map(
                surgery => `${surgery.name} - د. ${surgery.doctor} - IQD ${surgery.cost}`
            ).join("<br>");
            document.getElementById("surgeries_total").textContent = `IQD ${data.surgeries_total}`;

            // Appointments
            document.getElementById("appointments_free").textContent = data.appointments_free;
            document.getElementById("appointments_paid").textContent = data.appointments_paid;
            document.getElementById("appointments_total").textContent = `IQD ${data.appointments_total}`;

            // Calls
            document.getElementById("calls_inbound").textContent = data.calls_inbound;
            document.getElementById("calls_outbound").textContent = data.calls_outbound;

            // Emergency Patients
            document.getElementById("emergency_patients").textContent = data.emergency_patients;
            document.getElementById("emergency_total").textContent = `IQD ${data.emergency_total}`;

            // Radiology Costs
            document.getElementById("radiology_total").textContent = `IQD ${data.radiology_total}`;

            // Lab Costs
            document.getElementById("lab_total").textContent = `IQD ${data.lab_total}`;

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function updateDateTime() {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString('ar-IQ');
        const formattedDate = now.toLocaleDateString('ar-IQ');
        document.getElementById('current_datetime').textContent = `التاريخ والوقت الحالي: ${formattedTime} ${formattedDate}`;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
    fetchData();
});
