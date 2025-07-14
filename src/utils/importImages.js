export const importImages = type => {
  const images = {
    slides: import.meta.glob("../assets/slideshow/*.jpg", { eager: true, as: "url" }),
    members: import.meta.glob("../assets/profiles/*.jpg", { eager: true, as: "url" })
  };
  const imageMap = {};

  for (const path in images[type]) {
    const fileName = path.split("/").pop();
    imageMap[fileName] = images[type][path];
  }

  return imageMap;
};