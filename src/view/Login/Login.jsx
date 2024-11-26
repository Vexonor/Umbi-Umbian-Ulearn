import React from 'react'

const Login = () => {
    return (
        <div className="w-screen h-screen bg-alabaster flex justify-center items-center">
            <div className="bg-white border-2 border-charcoal rounded-lg w-6/12 p-10">
                <h2 className="text-center font-rubik font-semibold text-charcoal text-lg my-5">Create Account</h2>
                <div className="flex flex-col items-center gap-2">
                    <a href="#" className="border-2 w-1/2 border-charcoal rounded-md p-2 font-rubik font-medium flex justify-center items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-charcoal" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path></svg>
                        Sign Up With Google
                    </a>
                    <a href="#" className="border-2 w-1/2 border-charcoal rounded-md p-2 font-rubik font-medium flex justify-center items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-8 text-charcoal" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></svg>
                        Sign Up With Facebook
                    </a>
                    <div class="w-1/2 py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-400 before:me-6 after:flex-1 after:border-t after:border-gray-400 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    {/* Email */}
                    <div class="w-1/2">
                        <div class="flex justify-between items-center">
                            <label for="with-corner-hint" class="block text-sm font-medium mb-2 dark:text-white font-rubik text-charcoal">Email</label>
                        </div>
                        <input type="email" id="with-corner-hint" class="py-3 px-4 block w-full border-2 border-charcoal rounded-lg text-sm font-rubik focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="you@site.com" />
                    </div>
                    {/* Password */}
                    <div class="w-1/2">
                        <label class="block text-sm font-medium mb-2 dark:text-white font-rubik text-charcoal">Password</label>
                        <div class="relative">
                            <input id="hs-toggle-password" type="password" class="py-3 ps-4 pe-10 block w-full border-2 border-charcoal font-rubik rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter password" value="12345qwerty" />
                            <button type="button" data-hs-toggle-password='{
                                        "target": "#hs-toggle-password"
                                        }' class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500">
                                <svg class="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path class="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                    <path class="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                    <path class="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                    <line class="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                                    <path class="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle class="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 bg-charcoal my-5 mx-auto p-3 rounded-lg flex justify-center">
                    <a href="#" className="text-alabaster font-semibold w-full text-center">
                        Create Account
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Login;