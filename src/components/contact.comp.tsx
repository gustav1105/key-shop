import React from 'react';
import Modal from 'react-modal';

type ContactModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
};

Modal.setAppElement('#root'); // Bind modal to the root of your app

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onRequestClose }) => {
    const statement = process.env.REACT_APP_CONTACT_STATEMENT ?? 'statement';
    const address = process.env.REACT_APP_PHYSICAL_ADDRESS ?? 'address';

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Contact Info"
            className="relative bg-gray-100 p-8 rounded-lg shadow-lg mx-auto my-auto max-w-4xl w-full h-auto"
            overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
                &times;
            </button>
            <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Where to find us</h2>
                <p className="text-gray-700">
                    {statement}
                </p>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 mb-4 md:mb-0">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                                Type
                            </label>
                            <select
                                id="type"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="enquiry">Enquiry</option>
                                <option value="feedback">Feedback</option>
                                <option value="sales">Sales</option>
                                <option value="orders">Orders</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-1/3">
                    {/* Empty div to keep layout */}
                </div>
            </div>
            <div className="mt-6 text-gray-500 text-sm">
                <p>{address}</p>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-4">
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-600 w-10 h-10 text-xs font-bold"
                >
                    IG
                </a>
                <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-600 w-10 h-10 text-xs font-bold"
                >
                    YT
                </a>
                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-600 w-10 h-10 text-xs font-bold"
                >
                    LI
                </a>
            </div>
        </Modal>
    );
};

export default ContactModal;
