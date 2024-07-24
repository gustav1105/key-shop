import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarCompProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const SidebarComp: React.FC<SidebarCompProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-800 opacity-75 z-40"
                    onClick={toggleSidebar}
                />
            )}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-500 ease-in-out z-50`}
            >
                <div className="flex items-center justify-between h-16 bg-gray-900 px-4">
                    <h1 className="text-2xl font-bold">Menu</h1>
                    <button onClick={toggleSidebar} className="text-white">X</button>
                </div>
                <div className="flex flex-col p-4">
                    <Link to="/" className="flex items-center py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
                        <i className="fa fa-home mr-2" aria-hidden="true"></i>
                        Home
                    </Link>
                    <Link to="/products" className="flex items-center py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
                        <i className="fa fa-keyboard mr-2" aria-hidden="true"></i>
                        Products
                    </Link>
                    <Link to="/showcase" className="flex items-center py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
                        <i className="fa fa-info mr-2" aria-hidden="true"></i>
                        Showcase
                    </Link>
                    <Link to="/search" className="flex items-center py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
                        <i className="fa fa-search mr-2" aria-hidden="true"></i>
                        Search
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SidebarComp;
