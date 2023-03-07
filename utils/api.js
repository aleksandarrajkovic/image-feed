export async function fetchImages() {
    const response = await fetch(`https://picsum.photos/v2/list`);

    const data = await response.json();

    return data.map((item) => ({
        id: parseInt(item.id),
        author: item.author,
    }));
};
