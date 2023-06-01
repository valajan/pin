/**
 * @author Anthony Scheidler
 * Here is the global redux store
 * @var {Object} data contains all our pinned images
 * @var {Object} preview contains the image preview
 */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [
        {
            "img": "boilerplate.webp",
            "markers": [
                {
                    "top": 60,
                    "left": 75,
                    "name": "Chaise",
                    "subtitle": "Une chaise confortable",
                    "price": 125
                }
            ]
        }
    ],
    preview: {
        img: null,
        markers: []
    }
}

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        /**
         * 
         * @param {Object} state 
         * @param {Object} action (contains img and markers)
         * Add a pinned image to the global store
         */
        addItem: (state, action) => {
            const { img, markers } = action.payload
            state.data.push({ img: img, markers: markers })
        },
        /**
         * 
         * @param {Object} state 
         * @param {Object} action (contains index of the item and its markers)
         * Update the markers of the selected (index) image
         */
        updateMarkers: (state, action) => {
            const { index, markers } = action.payload
            state.data[index].markers = markers
        },
        /**
         * @param {Object} state 
         * @param {Object} action (contains img object url)
         * Modify preview.img value
         */
        updatePreviewImg: (state, action) => {
            state.preview.img = action.payload
        },
        /**
         * 
         * @param {Object} state 
         * @param {Object} action (contains markers)*
         * Modify preview.markers value
         */
        updatePreviewMarker: (state, action) => {
            state.preview.markers.push(action.payload)
        },
        /**
         * @param {Object} state 
         * Clear the preview values
         */
        clearPreview: (state) => {
            state.preview = {}
        }
    },
})

// Action creators are generated for each case reducer function
export const { addImage, addItem, updateMarkers, updatePreviewImg, updatePreviewMarker, clearPreview } = imagesSlice.actions

export default imagesSlice.reducer