/**
 * @author Anthony Scheidler
 * ViewImage component used by the front page
 * I made the choice to use ref to change dynamically markers style (visibility)
 * I made this choice for performances issues, and to make things easier to maintain and to understand
 * TODO: Design a better marker [ ]
 * TODO: Design a better tooltip [ ]
 * TODO: Make the hover for tooltip more friendly for mobile devices [ ]
 */

import React, { useEffect, useState, useRef } from 'react'
import ImageMarker from "react-image-marker"
import "./ViewImage.css"

export default function ViewImage({ item, index }) {
    const [markers] = useState(item.markers)
    const [isHovering, setHovering] = useState(false)
    const customMarkerRefs = useRef([])

    function toggleHover() {
        setHovering(!isHovering)
    }

    // Select all markers with .custom-marker class and add it to the customMarkersRefs.current Array[]
    useEffect(() => {
        const customMarkers = document.documentElement.querySelectorAll(".custom-marker");
        customMarkerRefs.current = Array.from(customMarkers);
    }, []);

    /**
     * If isHovering state changes, adjust the marker ref style visibility based of the previous isHovering state
     * Ex: isHovering = false ? so don't display marker(s)
     */
    useEffect(() => {
        customMarkerRefs.current.forEach((marker) => {
            if (marker) {
                marker.style.display = isHovering ? "block" : "none";
            }
        });
    }, [isHovering])

    /**
     * @param {*} props
     * react-image-maker offer the possibility to make our own custom marker,
     * here is a simple implementation
     */
    const CustomMarker = (props) => {
        return (
            <div className="tooltip">
                <div className="tooltip-card">
                    <div>
                        <p className='tooltip-name'>{props.name}</p>
                        <p className='tooltip-subtitle'>{props.subtitle}</p>
                    </div>
                    <p className='tooltip-price'>{props.price}€</p>
                </div>
                <div className="custom-marker" ref={(el) => customMarkerRefs.current.push(el)}></div>
            </div>
        );
    }

    return (
        <div onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()} className='content-wrapper'>
            <h2>Produit #{index}</h2>
            <div className='view-wrapper'>
            <ImageMarker src={item.img} markers={markers} markerComponent={CustomMarker} />
            </div>
        </div>
    )
}
