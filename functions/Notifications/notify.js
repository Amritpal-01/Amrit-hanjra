"use client"
import { AlertCircle, InfoIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNotification } from './NotificationContext'


const Notify = () => {
    const {note} = useNotification();
    const [show, setShow] = useState(false);


    useEffect(() => {
        if (note.message) {
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 3000);
        }
    }, [note])

    return (
        <div className={`z-50 fixed w-full flex flex-col justify-center items-center py-5 transition-all duration-300 ${note.status === 200 ? 'text-green-400' : 'text-red-400'} ${show ? "translate-y-o" : "-translate-y-full"} top-0 z-50`}>
            <h3 className={`flex flex-row gap-2 text-md backdrop-blur-lg ${note.status === 200 ? 'bg-green-400/20' : 'bg-red-400/20'} py-1 px-2 rounded-xl`}>
                {note.status === 200 ? <InfoIcon /> : <AlertCircle />}
                {note.message}
            </h3>
        </div>
    )
}

export default Notify