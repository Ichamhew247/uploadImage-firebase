import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useEffect } from "react";
export function Homepage() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "media/");
  const uploadImage = () => {
    try {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `media/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageList((prev) => [...prev], url);
        });
        // alert("image uploaded!!!!");
      });
    } catch (err) {
      console.log("image Failed!!!!");
    }
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
      console.log(response);
    });
  }, []);

  const [showImage, setShowImage] = useState(false);
  const handleImageClick = () => {
    setShowImage(!showImage);
  };
  return (
    <>
      <div>
        <div className="flex flex-col ">
          <div className=" m-auto w-72 p-8">
            <input
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
          </div>
          <button
            onClick={uploadImage}
            className="border w-44 m-auto p-2 hover:bg-yellow-200 shadow-md"
          >
            Upload Image
          </button>
        </div>
        <div
          className="flex gap-2 justify-center p-8"
          onClick={handleImageClick}
        >
          {showImage ? (
            imageList.map((url) => (
              <div key={v4()}>
                <img className="w-64" src={url} />
              </div>
            ))
          ) : (
            <p className="cursor-pointer shadow-md p-4 hover:bg-sky-200">
              Click here to show images
            </p>
          )}
        </div>
      </div>
    </>
  );
}
