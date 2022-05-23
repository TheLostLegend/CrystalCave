import {
    getFirestore,
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
    app
} from './index.js'

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const recordsQuery = await getDocs(collection(db, "Records"));


export async function updateTracksQuery(){
    recordsQuery = await getDocs(collection(db, "Records"));
}