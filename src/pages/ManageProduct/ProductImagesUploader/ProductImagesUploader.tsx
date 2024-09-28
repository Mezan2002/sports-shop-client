import { ChangeEvent, useState } from "react";
import { FiX } from "react-icons/fi";

type UploadedFile = {
  name: string;
  url: string;
};

const ProductImagesUploader = () => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadedUrls, setUploadedUrls] = useState<UploadedFile[]>([]);
  const imgbbApiKey = "f497c40ee0ee665ed206980055c2500e";

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }

    setUploading(true);

    const uploadedUrlsArray: UploadedFile[] = [];

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("image", files[i]);

      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        if (data && data.data && data.data.url) {
          uploadedUrlsArray.push({
            name: files[i].name,
            url: data.data.url,
          });
        } else {
          alert(`Failed to upload image: ${files[i].name}`);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        alert(`Error uploading image: ${files[i].name}`);
      }
    }

    setUploadedUrls((prev) => [...prev, ...uploadedUrlsArray]);
    setUploading(false);
  };

  const handleRemoveImage = (imageURL: string) => {
    const filteredImages = uploadedUrls.filter(
      (image) => image.url !== imageURL
    );
    setUploadedUrls(filteredImages);
  };

  return (
    <div className="flex items-start gap-5 mb-10 border-b border-dashed pb-10">
      <div className="flex-1">
        <h6 className="text-xl font-semibold text-gray">Product Images</h6>
        <p className="font-medium text-gray-500">
          Upload the product images here, you can select one or more images.
        </p>
      </div>
      <div className="flex-1">
        {uploading && <p>Uploading images, please wait...</p>}
        <div className="mt-5 grid grid-cols-4 gap-2 mb-2">
          {uploadedUrls.map((file) => (
            <div key={file.url} className="relative">
              <div
                onClick={() => handleRemoveImage(file.url)}
                className="absolute -top-1 -right-1 border rounded-full bg-white cursor-pointer"
              >
                <FiX className="text-red-500" />
              </div>
              <img
                src={file.url}
                alt={file.name}
                className="w-full rounded-2xl object-cover border border-gray-400 h-36"
              />
            </div>
          ))}
        </div>
        <div className="container h-60 w-full rounded-lg shadow-lg flex flex-col items-center justify-between p-2.5 gap-1.5 bg-blue-50">
          <label
            htmlFor="product_image_uploader"
            className="flex-1 w-full border-2 border-dashed border-royalblue rounded-lg flex flex-col items-center justify-center cursor-pointer"
          >
            <img
              src="/src/assets/images/image-upload.png"
              alt="Image upload icon"
              className="w-20"
            />
            <p className="text-center text-black mt-5">
              Click to upload product image!
            </p>
          </label>

          <input
            multiple
            onChange={handleFileChange}
            id="product_image_uploader"
            type="file"
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImagesUploader;
