export const importTeamImages = () => {
  const images = import.meta.glob("../assets/profiles/*.jpg", { eager: true, as: "url" });
  const imageMap = {};

  for (const path in images) {
    const fileName = path.split("/").pop();
    imageMap[fileName] = images[path];
  }

  return imageMap;
};
