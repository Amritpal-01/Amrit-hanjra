/** @format */
"use client";
import { AlertCircle, InfoIcon } from 'lucide-react'
import React, { useEffect, useState, createContext, useContext } from 'react'


const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [note, setNote] = useState({ status: null, message: null });

    return (
        <NotificationContext.Provider value={{note, setNote}}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);