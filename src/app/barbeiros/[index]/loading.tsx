import React from 'react'

function loading() {
    return (
        <main className="container py-4 md:py-4 px-4 w-full max-w-screen-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Conheça nossos barbeiros</h1>
            <div className="md:w-3/5 bg-shade-100 rounded px-3 py-5 md:p-10 animate-pulse">
                <div className="flex flex-col md:flex-row items-center p-5 md:p-0">
                    <svg className="w-28 h-28 text-shade-200 mb-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <div className="md:ms-4 text-center md:text-left flex flex-col items-center md:items-start">
                        <div className="h-8 bg-shade-200 rounded-full w-32 mb-2"></div>
                        <div className="w-48 h-3 bg-shade-200 rounded-full"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="h-3 bg-shade-200 rounded-full w-3/5"></div>
                    <div className="h-3 bg-shade-200 rounded-full w-2/5"></div>
                    <div className="h-3 bg-shade-200 rounded-full w-4/5"></div>
                    <div className="h-3 bg-shade-200 rounded-full w-3/5"></div>
                    <div className="h-3 bg-shade-200 rounded-full w-2/5"></div>
                    <div className="h-3 bg-shade-200 rounded-full w-4/5"></div>
                    <div className="h-3 bg-shade-200 rounded-full w-3/5"></div>
                    <div className="h-3 bg-shade-200 rounded-full w-3/5"></div>
                    <div className="h-3 bg-shade-200 rounded-full w-2/5"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 pt-5">
                    <div className="w-full md:w-64 h-10 bg-shade-200 rounded"></div>
                    <div className="w-full md:w-64 h-10 bg-shade-200 rounded"></div>
                </div>
            </div>
        </main>
    )
}

export default loading