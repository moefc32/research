export default function datePrettier(timestamp, withTime = false, longDate = true) {
    if (!timestamp) return '-';

    const date = new Date(timestamp);

    if (isNaN(date.getTime())) {
        return '-';
    }

    const options = {
        weekday: longDate ? 'long' : undefined,
        day: 'numeric',
        month: longDate ? 'long' : 'short',
        year: 'numeric',
    };

    let formattedDate = date.toLocaleString('id-ID', options).trim();

    if (withTime) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const formattedTime = `${hours}:${minutes}:${seconds}`;

        return `${formattedDate} - ${formattedTime}`;
    }

    return formattedDate;
}
