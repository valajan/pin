/**
 * @author Anthony Scheidler
 * This is the front page used by clients to saw pinned images
 * I make the choice to separate the pinned images in two components
 * First, the ViewImage component used by the front page
 * Second, the PinImage component used by the admin page
 * I make this choice to keep things simple and to manage less
 * States and less scenarios in one component
 */

import '../App.css';
import ViewImage from '../components/ViewImage/ViewImage';
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Home() {
  // Call the redux images store to load data
  const data = useSelector((state) => state.images.data)

  return (
    <div className="app">
      <main className="content">
        {/* A simple map iteration over the data passed by the store */}
        {data && data.map((item, index) =>
          <div key={index}>
            <ViewImage item={item} index={index + 1} />
          </div>
        )}
        <Link to="/admin">Admin</Link>
      </main>
    </div>
  );
}
