import { v2 as cloudinary } from "cloudinary";

export default async function imageUpload(filePath: string, fileName: string) {
  // Configuration
  cloudinary.config({
    cloud_name: "dttreinoq",
    api_key: "413248281344559",
    api_secret: "<your_api_secret>", // Click 'View API Keys' above to copy your API secret
  });

  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(filePath, {
      public_id: fileName,
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(uploadResult);

  // Optimize delivery by resizing and applying auto-format and auto-quality
  const optimizeUrl = cloudinary.url(fileName, {
    fetch_format: "auto",
    quality: "auto",
  });

  console.log(optimizeUrl);

  return optimizeUrl;
  // // Transform the image: auto-crop to square aspect_ratio
  // const autoCropUrl = cloudinary.url('shoes', {
  //     crop: 'auto',
  //     gravity: 'auto',
  //     width: 500,
  //     height: 500,
  // });

  // console.log(autoCropUrl);
}
