function formatDateToReadable(inputDate) {
    const date = new Date(inputDate); // Ensure the input is a Date object
    if (isNaN(date)) {
        throw new Error("Invalid date format. Please provide a valid date.");
    }

    const suffixes = ["th", "st", "nd", "rd"];
    const day = date.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = date.getFullYear();
    
    // Determine the correct suffix for the day
    const suffix = (day % 10 >= 1 && day % 10 <= 3 && ![11, 12, 13].includes(day % 100)) 
                   ? suffixes[day % 10] 
                   : suffixes[0];

    return `${day}${suffix} ${monthNames[date.getMonth()]} ${year}`;
}

function formatDateWithDay(inputDate) {
    const date = new Date(inputDate); // Ensure the input is a Date object
    if (isNaN(date)) {
        throw new Error("Invalid date format. Please provide a valid date.");
    }

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = date.getDate();
    const dayName = dayNames[date.getDay()];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${monthNames[date.getMonth()]} ${year}`;
}

export {
    formatDateWithDay,
    formatDateToReadable
}