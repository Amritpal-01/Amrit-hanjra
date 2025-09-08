"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [selectionState, setSelectionState] = useState([
        {
            type: "home",
            state: true
        },
        {
            type: "about",
            state: false
        },
        {
            type: "skills",
            state: false
        },
        {
            type: "projects",
            state: false
        },
        {
            type: "contact",
            state: false
        },
    ]);
    const [activeSection, setActiveSection] = useState({
        type: "home",
        state: true
    });

    useEffect(() => {
        let which;
        let count = 0;

        selectionState.forEach((el, idx) => {
            if (el.state) {
                count++;
                which = el;
            }
        })


        if (count < 2) {
            setActiveSection(which);
        }
    }, [selectionState, setSelectionState])

    return (
        <NavigationContext.Provider value={{ selectionState, setSelectionState, activeSection, setActiveSection }}>
            {children}
        </NavigationContext.Provider>
    )
}

export const useNavigation = () => useContext(NavigationContext);