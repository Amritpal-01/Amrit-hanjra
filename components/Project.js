import Image from 'next/image'
import React from 'react'

const Project = ({project}) => {
    const {domain, thumbnail, status, created_at, created_by, tech} = project;

    return (
        <div className="xl:flex-1/2 w-full px-2 flex flex-col">

            <div className="w-full p-2 bg-blue-100/10 border-b-0 border border-[#333333] rounded-t-xl">
                <div className="w-full aspect-[16/9] rounded-lg relative overflow-hidden">
                    <Image
                        fill
                        className="object-cover"
                        src={thumbnail}
                        alt="bg"
                    />
                </div>

                <div className="flex flex-wrap gap-y-4 px-4 py-4">
                    <div className="flex-1/2  flex flex-col">
                        <h3 className="text-[#838383] text-md">Domain</h3>
                        <h4 className="text-sm pl-3">{domain}</h4>
                    </div>
                    <div className="flex-1/2  flex flex-col">
                        <h3 className="text-[#838383] text-md">Status</h3>
                        <div className="flex items-center pl-2 gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <h4 className="text-sm">Ready</h4>
                        </div>
                    </div>
                    <div className="flex-1/2  flex flex-col">
                        <h3 className="text-[#838383] text-md">Created</h3>
                        <h4 className="text-sm pl-3">{created_at} by {created_by}</h4>
                    </div>
                </div>
            </div>

            <div className="h-14 w-full rounded-b-xl bg-[#161616] flex flex-row items-center px-4 gap-4 border border-[#333333] border-t-0">
                {tech.map(string => {
                    return <div key={string} className="bg-[#333333] border border-white/10 py-1 px-3 rounded-lg text-sm text-[]">{string}</div>
                })}
            </div>
        </div>

    )
}

export default Project