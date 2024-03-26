import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    try {
        const userItemsRef = collection(db, "users", userId, "items");
        const querySnapshot = await getDocs(userItemsRef);

        const items = querySnapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        }));

        return items;
    }
    catch (error) {
        console.error("Error getting items:", error);
    }
}

export const addItem = async (userId, item) => {
    try {
        const userItemsRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(userItemsRef, item);
        
        return docRef.id;
    } catch (error) {
        console.error("Error adding item:", error);
    }
}