import React from "react";

const CollaborationField = () => {
    return (
        <div className="w-11/12 mx-auto font-rubik">
            <h2 className="font-rubik font-semibold text-charcoal text-2xl my-5">Collaboration Field</h2>
            <div className="grid grid-cols-2">
                <div className="col-span-1 flex justify-center items-center border-r-4 border-charcoal">
                    <button type="button" className="bg-alabaster border-2 border-charcoal w-1/2 rounded-md flex flex-col items-center p-5" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-scale-animation-modal" data-hs-overlay="#modal-make-new">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 text-charcoal" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                        <h2 className="font-rubik font-semibold text-charcoal text-lg">Make New Field</h2>
                    </button>
                    {/* Modal Make New */}
                    <div id="modal-make-new" class="[--body-scroll:true] hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-scale-animation-modal-label">
                        <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 w-10/12 m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                            <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                                    <h3 id="hs-scale-animation-modal-label" class="font-bold text-gray-800 dark:text-white">
                                        Make New Field
                                    </h3>
                                    <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#modal-make-new">
                                        <span class="sr-only">Close</span>
                                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="p-4 overflow-y-auto">
                                    <div class="w-full">
                                        <label for="input-label" class="block text-lg font-rubik text-charcoal text-center font-bold mb-2 dark:text-white">Field Name</label>
                                        <input type="email" id="input-label" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter Your Field Name" />
                                    </div>
                                </div>
                                <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                                    <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#modal-make-new">
                                        Close
                                    </button>
                                    <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-charcoal text-alabaster hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                        Make It
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                    <button type="button" className="bg-alabaster border-2 border-charcoal w-1/2 rounded-md flex flex-col items-center p-5" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-scale-animation-modal" data-hs-overlay="#modal-join">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-10 text-charcoal" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                        <h2 className="font-rubik font-semibold text-charcoal text-lg">Join Field</h2>
                    </button>
                    {/* Modal Make New */}
                    <div id="modal-join" class="[--body-scroll:true] hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-scale-animation-modal-label">
                        <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 w-10/12 m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                            <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                                    <h3 id="hs-scale-animation-modal-label" class="font-bold text-gray-800 dark:text-white">
                                        Make New Field
                                    </h3>
                                    <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#modal-join">
                                        <span class="sr-only">Close</span>
                                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M18 6 6 18"></path>
                                            <path d="m6 6 12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="p-4 overflow-y-auto">
                                    <div class="w-full">
                                        <label for="input-label" class="block text-lg font-rubik text-charcoal text-center font-bold mb-2 dark:text-white">Field Code</label>
                                        <input type="email" id="input-label" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter Field Code" />
                                    </div>
                                </div>
                                <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                                    <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#modal-join">
                                        Close
                                    </button>
                                    <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-charcoal text-alabaster hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                        Join Field
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Collaboration Field */}
            <h2 className="font-rubik font-semibold text-charcoal text-2xl my-5">Ur Collaboration Field</h2>
            <div data-hs-carousel='{
                        "loadingClasses": "opacity-0",
                        "slidesQty": {
                            "xs": 1,
                            "lg": 3
                        },
                        "isDraggable": true
                        }' class="relative">
                <div class="hs-carousel w-full overflow-hidden bg-white rounded-lg">
                    <div class="relative min-h-72 -mx-1">
                        <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
                            <div class="hs-carousel-slide px-1">
                                <div class="flex justify-center h-full bg-alabaster border-2 border-charcoal rounded-lg p-6 dark:bg-neutral-900">
                                    <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">First collaboration field</span>
                                </div>
                            </div>
                            <div class="hs-carousel-slide px-1">
                                <div class="flex justify-center h-full bg-alabaster border-2 border-charcoal rounded-lg p-6 dark:bg-neutral-800">
                                    <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Second collaboration field</span>
                                </div>
                            </div>
                            <div class="hs-carousel-slide px-1">
                                <div class="flex justify-center h-full bg-alabaster border-2 border-charcoal rounded-lg p-6 dark:bg-neutral-700">
                                    <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Third collaboration field</span>
                                </div>
                            </div>
                            <div class="hs-carousel-slide px-1">
                                <div class="flex justify-center h-full bg-alabaster border-2 border-charcoal rounded-lg p-6 dark:bg-neutral-900">
                                    <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Fourth collaboration field</span>
                                </div>
                            </div>
                            <div class="hs-carousel-slide px-1">
                                <div class="flex justify-center h-full bg-alabaster border-2 border-charcoal rounded-lg p-6 dark:bg-neutral-800">
                                    <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Fifth collaboration field</span>
                                </div>
                            </div>
                            <div class="hs-carousel-slide px-1">
                                <div class="flex justify-center h-full bg-alabaster border-2 border-charcoal rounded-lg p-6 dark:bg-neutral-700">
                                    <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Sixth collaboration field</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <span class="text-2xl" aria-hidden="true">
                        <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </span>
                    <span class="sr-only">Previous</span>
                </button>
                <button type="button" class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <span class="sr-only">Next</span>
                    <span class="text-2xl" aria-hidden="true">
                        <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </span>
                </button>

                <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
            </div>
        </div>
    )
}

export default CollaborationField;