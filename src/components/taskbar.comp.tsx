import React from 'react';

type TaskbarProps = {
    openModal: () => void;
    toggleSidebar: () => void;
};

const Taskbar: React.FC<TaskbarProps> = ({openModal,toggleSidebar}) => {


    return (
        <header className="bg-gray-900 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                {/* Left Icon */}
                <div className="text-white text-2xl" onClick={toggleSidebar}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                {/* Right Icon with onClick handler */}
                <div className="text-white text-2xl" onClick={openModal}>
                    <i className="fa fa-question" aria-hidden="true"></i>
                </div>
            </div>
        </header>
    );
};

export default Taskbar;
