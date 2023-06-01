/**
 * @author Anthony Scheidler
 * Basic redux store configuration
 */

import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from "../utils/crud"

export const store = configureStore({
    reducer: {
        images: imagesReducer
    },
})