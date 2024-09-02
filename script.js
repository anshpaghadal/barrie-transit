function updateDateTime() {
    const now = new Date();
    
    const dateOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    };
    
    const dateString = now.toLocaleDateString('en-US', dateOptions).replace(/, /g, ' ');
    const timeString = now.toLocaleTimeString('en-US', timeOptions);

    document.getElementById('date').textContent = dateString;
    document.getElementById('time').textContent = timeString;
}

setInterval(updateDateTime, 1000); // Update the time every second
updateDateTime(); // Initial call to set the time immediately
