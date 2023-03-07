export default function getAvatarColor(fullName) {
    let hash = 0;

    if (fullName.length === 0) return hash;

    for (let i = 0; i < fullName.length; i++) {
        hash = fullName.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }

    let color = '#';

    for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 255;

        color += ('00' + value.toString(16)).slice(-2);
    }

    return color;
};
