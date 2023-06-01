/**
 * @author Anthony Scheidler
 * Dialog component used by the PinImage component
 */

import React, { useState, useEffect } from 'react'
import "./Dialog.css"
import { updateMarkers, updatePreviewMarker } from "../../utils/crud.js"
import { useDispatch } from "react-redux"

export default function Dialog({ setDialog, setMarkers, point, markers, index, preview }) {
  const [name, setName] = useState(point.name || "")
  const [subtitle, setSubtitle] = useState(point.subtitle || "")
  const [price, setPrice] = useState(point.price || 0)
  const dispatch = useDispatch()

  /**
   * 
   * @param {Object} e to prevent page refresh
   * @var {Object} marker structure our marker object
   */
  function captureData(e) {
    let marker = {
      ...point,
      name,
      subtitle,
      price
    }
    e.preventDefault()
    setMarkers([...markers, marker])

    /**
     * If preview image update it with data
     * Else update image markers based on it's index in the global store
     */
    if (preview) {
      dispatch(updatePreviewMarker(marker))
    }
    else {
      dispatch(updateMarkers({ markers: [...markers, marker], index }))
    }

    setDialog(false)
  }

  /**
   * This hook is necessary to update point information used by the dialog form
   * So it changes name, subtitle and price of the current point selected (or default values)
   */
  useEffect(() => {
    setName(point.name || "")
    setSubtitle(point.subtitle || "")
    setPrice(point.price || 0)
  }, [point])

  return (
    <div className='dialog'>
      <h2>{point.price || point.name || point.subtitle ? "Modify" : "Add"} a marker</h2>
      <form onSubmit={captureData}>
        <input type="text" name='name' id='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" name='subtitle' id='subtitle' placeholder='Subtitle' value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
        <input type="number" name='price' id='price' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <div className='actions'>
          <button className='button-close' onClick={() => setDialog(false)}>Cancel</button>
          <button className="button-success" type="submit">Add Marker</button>
        </div>
      </form>
    </div>
  )
}
