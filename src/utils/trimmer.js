export const trimmer = (text, size=20) => {
    if (text.length < size) {
        return text;
    }
    return `${text.substr(0, size - 1)}..`;
}