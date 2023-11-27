export const getRandomImage = (): string => {
    const randomIndex = Math.floor(Math.random() * 8) + 1;
    const randomImage = `img/nature-${randomIndex}.jpg`;
    return randomImage;
}