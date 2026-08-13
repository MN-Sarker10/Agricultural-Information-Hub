function updateDateTime() {

    const now = new Date();

    const dateOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    };

    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    document.getElementById("date").innerHTML =
        now.toLocaleDateString("en-US", dateOptions);

    document.getElementById("time").innerHTML =
        now.toLocaleTimeString("en-US", timeOptions);
}

updateDateTime();

setInterval(updateDateTime, 1000);


// function updateDateTime() {
//     const now = new Date();
//     const element = document.getElementById("time").innerText = now.
//         toLocaleString();
// }

// setInterval(updateDateTime, 1000);
