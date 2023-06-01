/**
 * @author Anthony Scheidler
 * PinImage component used by the admin page
 * There is not much complexity in it, there is more in the Dialog component
 */

import React, { useState } from 'react'
import ImageMarker from "react-image-marker"
import Dialog from "../Dialog/Dialog.js"
import "./PinImage.css"
import { useDispatch, useSelector } from 'react-redux'
import { addItem, clearPreview } from '../../utils/crud'

export default function PinImage({ item, index, preview }) {
    const [markers, setMarkers] = useState(item.markers)
    const [isDialog, setDialog] = useState(false);
    const [point, setPoint] = useState({})
    const previewData = useSelector((state) => state.images.preview)
    const dispatch = useDispatch()

    /**
     * 
     * @param {*} event 
     * This function change dialog state and set point (top, left) based on the event
     */
    function checkEvent(event) {
        setPoint(event)
        if (!isDialog) {
            setDialog(true)
        }
    }

    const CustomMarker = (props) => {
        return (
            <div className="custom-marker" onClick={() => checkEvent(props)}></div>
        );
    }

    /**
    * Function to save a preview pinned image to the global store
    */
    function saveData() {
        if (preview) {
            dispatch(addItem(previewData))
            dispatch(clearPreview())
        }
        setDialog(false)
    }

    // If user click on image, dialog shows up to add markers
    return (
        <div className='wrapper'>
            <ImageMarker src={item.img} markers={markers} onAddMarker={(e) => checkEvent(e)} markerComponent={CustomMarker} />
            <div className='dialog-container'>
                {isDialog ? <Dialog setDialog={setDialog} markers={markers} setMarkers={setMarkers} point={point} index={index} preview={preview} /> : ""}
            </div>
            {preview && (
                <div className='actions'>
                    <button className="button-close" onClick={() => dispatch(clearPreview())}>Cancel</button>
                    <button className="button-success" onClick={() => saveData()}>Save</button>
                </div>
            )}
        </div>
    )
}
