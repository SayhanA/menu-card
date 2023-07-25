import { createContext, useState } from 'react';
import { addToDb } from '../../../fakedb';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [newItem, setNewItem] = useState("");
    const [removedItem, setRemoveItem] = useState("")

    const user = {
        name: "khalid"
    }

    const addItem = (id) => {
        addToDb(id);
    };

    const userInfo = {
        user,
        addItem,
        setNewItem,
        newItem,
        removedItem,
        setRemoveItem,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;