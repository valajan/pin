import '../App.css';
import PinImage from "../components/PinImage/PinImage.js"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { updatePreviewImg } from "../utils/crud"

export default function Admin() {
  const data = useSelector((state) => state.images.data)
  const preview = useSelector((state) => state.images.preview)
  const dispatch = useDispatch()

  /**
   * 
   * @param {Object} e (event)
   * Function to update preview image value with a file object URL
   * Then reset the input file value to null
   */
  function handleImageUpload(e) {
    let image = e.target.files[0]
    dispatch(updatePreviewImg(URL.createObjectURL(image)))
    e.target.value = null;
  }

  return (
    <div className="app">
      <main className="content">
        <input type="file" name="image" id="image" onChange={handleImageUpload} />
        {preview.img && (
          <PinImage item={{ img: preview.img, markers: [] }} index={data.length + 1} preview />
        )}
        {data && data.map((item, index) =>
          <PinImage item={item} index={index} key={index} />
        )}
        <Link to="/">Accueil</Link>
      </main>
    </div>
  );
}
