export default function datePrettier(timestamp) {
    if (!timestamp) return '-';

    const date = new Date(timestamp);

    if (isNaN(date.getTime())) {
        return '-';
    }

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };

    return date.toLocaleString('en-US', options).trim();
}
