import React, { memo } from 'react';

const Dinalog = memo(( { heading, handle_close, handle_submit } ) => {
    return (
        <div>
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="p-6 text-center">

                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                {
                                    heading
                                }
                            </h3>
                            <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                onClick={
                                    handle_submit
                                }
                            >
                                Xác nhận
                            </button>
                            <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                onClick={
                                    handle_close
                                }
                            >
                                Thoát
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
});
Dinalog.displayName = 'Dinalog'
export default Dinalog;