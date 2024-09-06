async function uploadFile(file: any) {
  const formData = new FormData();
  formData.append("Image", file); // Append the file to form data with key 'Image'

  try {
    const response = await fetch("/api/file", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Upload successful:", result);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}
