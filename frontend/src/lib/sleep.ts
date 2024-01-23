export default function sleep(milliseconds: number) {
    return new Promise((resolve, _) => {
        setTimeout(resolve, milliseconds);
    });
}