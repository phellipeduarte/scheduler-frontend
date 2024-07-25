import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-second w-full mt-auto">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Barbershop</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-shade-200 sm:mb-0">
                        <li>
                            <a href="/" className="hover:text-white transition-colors me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors me-4 md:me-6">Agenda</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors me-4 md:me-6">Admin</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 sm:mx-auto border-shade-300 lg:my-8" />
                <span className="block text-sm text-shade-300 sm:text-center">© 2024 <a href="/" className="hover:underline">Barbershop™</a>. Todos os direitos reservados.</span>
            </div>
        </footer>


    )
}
