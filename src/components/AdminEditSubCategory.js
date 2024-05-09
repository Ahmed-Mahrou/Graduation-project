import React, { useContext, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from "../helpers/uploadImage";
import DisplayImage from "./DisplayImage";
import { MdDelete } from "react-icons/md";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import Context from "../context";

function AdminEditSubCategory({ onClose, setFetchAgain, subCategoryData }) {
  const [imageView, setImageView] = useState(subCategoryData.image);

  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");
  const { token } = useContext(Context);
  const [data, setData] = useState({
    name: subCategoryData.name,
    category: subCategoryData.category,
  });
  const [categoryProduct, setCategoryProduct] = useState([]);

  const formData = objectToFormData(data);
  function objectToFormData(obj) {
    const formData = new FormData();

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        formData.append(key, obj[key]);
      }
    }

    return formData;
  }

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);
    setData((preve) => {
      return {
        ...preve,
        image: file,
      };
    });
    setImageView(uploadImageCloudinary.url);
  };

  const handleDeleteimage = () => {
    setImageView("");
    setData((preve) => {
      return {
        ...preve,
        image: null,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${SummaryApi.updateSubCategory.url}/${subCategoryData._id}`,
      {
        method: SummaryApi.updateSubCategory.method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    const responseData = await response.json();

    if (responseData.data) {
      toast.success("subcategory added successfully");
      onClose();
      setFetchAgain(true);
    }

    if (!responseData.data) {
      toast.error("there are an error");
      console.log(responseData);
    }
  };
  const fetchCategoryProduct = async () => {
    const response = await fetch(SummaryApi.categoryProduct.url);
    const dataResponse = await response.json();
    setCategoryProduct(dataResponse.data);
  };
  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  return (
    <div className="fixed w-full  h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-bold text-lg">Update subcategory</h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            <CgClose />
          </div>
        </div>

        <form
          className="grid p-4 gap-2 overflow-y-scroll h-full pb-5"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">SubCategory Name :</label>
          <input
            type="text"
            id="name"
            placeholder="enter Category name"
            name="name"
            value={formData.get("name")}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
          />
          <label htmlFor="category" className="mt-3">
            Category :
          </label>
          <select
            value={data.category}
            name="category"
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded"
          >
            <option value={""}>Select Category</option>
            {categoryProduct.map((el, index) => {
              return (
                <option value={el?._id} key={el?._id}>
                  {el?.name}
                </option>
              );
            })}
          </select>

          <label htmlFor="images" className="mt-3">
            SubCategory Image :
          </label>

          {!imageView && (
            <label htmlFor="uploadImageInput">
              <div className="p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
                <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                  <span className="text-4xl">
                    <FaCloudUploadAlt />
                  </span>
                  <p className="text-sm">Update subCategory Image</p>
                  <input
                    type="file"
                    name="image"
                    id="uploadImageInput"
                    className="hidden"
                    onChange={handleUploadProduct}
                  />
                </div>
              </div>
            </label>
          )}
          <div>
            {imageView ? (
              <div className="relative group">
                <img
                  src={imageView}
                  alt={imageView}
                  width={80}
                  height={80}
                  className="bg-slate-100 border cursor-pointer"
                  onClick={() => {
                    setOpenFullScreenImage(true);
                    setFullScreenImage(imageView);
                  }}
                />

                <div
                  className="absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer"
                  onClick={() => handleDeleteimage()}
                >
                  <MdDelete />
                </div>
              </div>
            ) : (
              <p className="text-red-600 text-xs">
                *Please upload Category image
              </p>
            )}
          </div>

          <button className="px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700">
            Update SubCategory
          </button>
        </form>
      </div>

      {/***display image full screen */}
      {openFullScreenImage && (
        <DisplayImage
          onClose={() => setOpenFullScreenImage(false)}
          imgUrl={fullScreenImage}
        />
      )}
    </div>
  );
}

export default AdminEditSubCategory;
