// Helper function to get images from a directory
export function getImagesFromDirectory(basePath: string, imageFiles: Array<{index?: number, filename?: string, extension: string}>): Array<{
  src: string;
  alt: string;
  format: "webp" | "jpg" | "png";
  width: number;
  height: number;
  widths: number[];
}> {
  const images = [];

  for (const file of imageFiles) {
    const fileName = file.filename ? `${file.filename}.${file.extension}` : `${file.index}.${file.extension}`;
    const altText = file.filename || `Image ${file.index}`;
    images.push({
      src: `${basePath}/${fileName}`,
      alt: altText,
      format: file.extension as "webp" | "jpg" | "png",
      width: 1200,
      height: 800,
      widths: [400, 800, 1200],
    });
  }

  return images;
}

// Experience images data
export const EXPERIENCE_IMAGES = {
  "Block Capital": getImagesFromDirectory("/experience/Block%20Capital", [
    {index: 1, extension: "webp"},
    {index: 2, extension: "webp"},
    {index: 3, extension: "webp"},
    {index: 4, extension: "webp"},
    {index: 5, extension: "webp"},
    {index: 6, extension: "webp"},
    {index: 7, extension: "webp"},
    {index: 8, extension: "webp"},
    { index: 9, extension: "webp" },
    {index: 10, extension: "webp"},
  ]),
  "Sireg Chile": getImagesFromDirectory("/experience/Sireg", [
    {index: 1, extension: "webp"},
    {index: 2, extension: "webp"},
    {index: 3, extension: "webp"},
    {index: 4, extension: "webp"},
    {index: 5, extension: "webp"},
    {index: 6, extension: "webp"},
    {index: 7, extension: "webp"},
  ]),
  "Price2Be": getImagesFromDirectory("/experience/Price2Be", [
    {index: 1, extension: "webp"},
    {index: 2, extension: "webp"},
    {index: 3, extension: "webp"},
    {index: 4, extension: "webp"},
    {index: 5, extension: "webp"},
    {index: 6, extension: "webp"},
  ]),
};

// Project images data
export const PROJECT_IMAGES = {
  "SS21.art": getImagesFromDirectory("/projects/ss21", [
    { filename: "home", extension: "webp" },
    { filename: "figma", extension: "webp" },
    { filename: "home phone", extension: "webp" },
    { filename: "explore desktop", extension: "webp" },
    { filename: "explore mobile", extension: "webp" },
    { filename: "login", extension: "webp" },
    { filename: "manifesto", extension: "webp" },
    { filename: "user panel", extension: "webp" },
    { filename: "user panel mobile", extension: "webp" },
    { filename: "admin panel", extension: "webp" },
    { filename: "admin panel users", extension: "webp" },
  ]),
  "Yoho": getImagesFromDirectory("/projects/Yoho", [
    { filename: "home", extension: "webp" },
    { filename: "experiences page", extension: "webp" },
    { filename: "cart", extension: "webp" },
    { filename: "checkyourgify", extension: "webp" },
    { filename: "experience details 2", extension: "webp" },
    { filename: "experience details mobile", extension: "webp" },
    { filename: "experience details tablet", extension: "webp" },
    { filename: "experience details", extension: "webp" },
    { filename: "experiencedetails figma", extension: "webp" },
    { filename: "experiences sizes figma", extension: "webp" },
    { filename: "faqs", extension: "webp" },
    { filename: "favourites", extension: "webp" },
    { filename: "full figma", extension: "webp" },
    { filename: "home figma", extension: "webp" },
    { filename: "howitworks", extension: "webp" },
    { filename: "workwithus tablet", extension: "webp" },
  ]),
  "Handy God": getImagesFromDirectory("/projects/Handy%20God", [
    {index: 1, extension: "webp"},
    {index: 2, extension: "webp"},
    {index: 3, extension: "webp"},
    {index: 4, extension: "webp"},
  ]),
  "Modern Fintech Landing Page": getImagesFromDirectory("/projects/Modern%20Fintech%20Landing%20Page", [
    {index: 1, extension: "webp"},
    {index: 2, extension: "webp"},
    {index: 3, extension: "webp"},
    { index: 4, extension: "webp" },
    {index: 5, extension: "webp"},
  ]),
  "Video Overlay Pipeline and Subtitle Editor": getImagesFromDirectory("/projects/VideoClipPy", [
    {index: 1, extension: "webp"},
    {index: 2, extension: "webp"},
    {index: 3, extension: "webp"},
    { index: 4, extension: "webp" },
    { index: 5, extension: "webp" },
    {index: 6, extension: "webp"},
  ]),
};

// Helper to get images for a specific experience/project
export function getExperienceImages(company: string) {
  return EXPERIENCE_IMAGES[company as keyof typeof EXPERIENCE_IMAGES] || [];
}

export function getProjectImages(projectName: string) {
  return PROJECT_IMAGES[projectName as keyof typeof PROJECT_IMAGES] || [];
}
