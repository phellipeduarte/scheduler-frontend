import React from 'react'

export default function ProfileLoading() {
    return (
        <div className="animate-pulse">
            <div className="flex items-center mb-5">
                <svg className="w-12 h-12 me-3 text-shade-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div className="text-left ms-3">
                    <div className="h-4 bg-shade-200 rounded-full w-32 mb-2"></div>
                    <div className="w-48 h-3 bg-shade-200 rounded-full"></div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
                <div className="w-full md:w-24 h-7 bg-shade-200 rounded"></div>
                <div className="w-full md:w-24 h-7 bg-shade-200 rounded"></div>
            </div>
        </div>
    )
}