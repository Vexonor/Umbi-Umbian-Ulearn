import React from "react";

const Course_Page_After =() => {

    return (
        <div className="w-11/12 mx-auto">

            <div className="mb-4">
                <iframe class="w-full aspect-video rounded-2xl" src="https://www.youtube.com/embed/mD6uSGSjgr4?si=83KU3L-TIV0vxsvt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h1 className="font-rubik font-bold text-start text-5xl text-gray-600 pb-2">Biologie </h1>
            <p class="mt-1 pb-1 text-gray-600 dark:text-neutral-400">
            Biology class is a subject that explores life and living organisms, from their structure to the processes that sustain life. In this class, students will learn about fundamental biology concepts such as cells, genetics, evolution, ecosystems, and human body systems. Through this learning, students will understand how living organisms function, interact with each other, and the importance of conservation and environmental sustainability. The goal of Biology class is to develop a deep scientific understanding and critical thinking skills to analyze life phenomena.
          </p>
          <h2 className="font-rubik font-semibold text-start text-xl text-gray-600 pb-2">Course Publish by:Aziz</h2>



        <div className="grid grid-cols-3 flex-col w-full">
            <div className=" flex flex-col gap-2 max-h-24">
            <div class="flex flex-col bg-white border-2 border-black shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div class="bg-gray-100 border-2 border-b-black rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                    <p class="mt-1 text-sm font-rubik font-bold text-gray-800 dark:text-neutral-500">
                    Collaboration field
                    </p>
                </div>
                <div class="p-4  flex justify-between md:p-5">
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                    Team nairobi
                    </h3>
    
                    <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
                    Jump in
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    </a>
                </div>
                </div>


                <div class="flex flex-col bg-white border-2 border-black  shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div class="bg-gray-100 border-b-black border-2 rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                    <p class="mt-1 text-sm text-gray-800 font-rubik font-bold dark:text-neutral-500">
                    Forum field
                    </p>
                </div>
                <div class="p-4 flex justify-between md:p-5">
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                    Biologic class
                    </h3>
                    <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-end text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
                    Jump In
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
             

        <div className="col-span-2 px-8"> 
 
            {/* box benefit */}
            
            <div className=" w-full grid grid-cols-2 pb-4 bg-white border-2 border-black p-4 rounded-lg">
                <h1 className="font-rubik font-semibold text-start text-xl col-span-2"> benefit</h1>
                <ul class= " marker:text-gray-800 list-disc ps-3 pb-2 space-y-2 text-sm text-gray-600 dark:text-neutral-400">
                <li>
                    have a nice tutor
                </li>
                <li>
                    License
                </li>
                </ul>

                <ul class= " marker:text-gray-800 list-disc ps-3 pb-2 space-y-2 text-sm text-gray-600 dark:text-neutral-400">
                <li>
                    make a good connection
                </li>
                <li>
                    life
                </li>
                </ul>

            </div>

            {/* accordion */}

            <div className=" mt-4 bg-gray-500 border-2 border-gray-900 rounded-lg"> 
                <h2 className="font-rubik font-semibold text-start text-lg pl-6 text-white"> Module</h2>
            <div class="hs-accordion-group">
  <div class="hs-accordion active bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700" id="hs-bordered-heading-one">
    <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-bordered-collapse-one">
      <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
      <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
      </svg>
      Module 1
    </button>
    <div id="hs-basic-bordered-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-bordered-heading-one">
      <div class="pb-4 px-5">
        <p class="text-gray-800 dark:text-neutral-200">
          <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
        </p>
      </div>
    </div>
  </div>

  <div class="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700" id="hs-bordered-heading-two">
    <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-bordered-collapse-two">
      <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
      <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
      </svg>
      Module 2
    </button>
    <div id="hs-basic-bordered-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-bordered-heading-two">
      <div class="pb-4 px-5">
        <p class="text-gray-800 dark:text-neutral-200">
          <em>This is the second item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
        </p>
      </div>
    </div>
  </div>

  <div class="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700" id="hs-bordered-heading-three">
    <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-bordered-collapse-three">
      <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
      <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
      </svg>
      Module 3
    </button>
    <div id="hs-basic-bordered-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-bordered-heading-three">
      <div class="pb-4 px-5">
        <p class="text-gray-800 dark:text-neutral-200">
          <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
        </p>
      </div>
    </div>
  </div>
</div>
            </div>
{/*  close acordion */}
        </div>

        {/* new sec */}

        {/* broooff */}
    </div>
    <div className=" mt-6">
    </div>
<div className=" flex flex-col justify-center bg-gray-300 border-2 border-black p-6 rounded-lg"> 
    <h2 className=" font-bold font-rubik text-start pl-3"> Course Review  </h2>
     </div>
<div className=" flex flex-col justify-center bg-white border-2 border-black p-6 rounded-lg">



<div className=" mx-auto w-full col-span-3 justify justify-center border-2 border-gray-600 p-10 items-center bg-white rounded-lg mt-3">

<h2 className=" text-start font-rubik font-semibold text-xl"> This Course is suitable for </h2>

<h2 className=" pl-8 text-start font-rubik font-semibold py-2 text-2xl"> " beginner " </h2>

<h2 className=" text-start font-rubik font-semibold text-xl mb-3"> Base on 14 Review </h2>


{/* rating */}
<div className="flex flex-col w-full gap-4 ">

<div class="flex items-center  bg-white border-2 border-gray-600 px-4 py-3 rounded-lg">
<button type="button" class="size-5 inline-flex justify-center items-center text-2xl rounded-full text-red-500 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500">
    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
    </svg>
    
</button>
<h3 className=" font-rubik font-medium text-start pl-4 ">  12 cours Matrial</h3>

</div>

<div class="flex items-center  bg-white border-2 border-gray-600 px-4 py-3 rounded-lg ">
<button type="button" class="size-5 inline-flex justify-center items-center text-2xl rounded-full text-red-500 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500">
    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
    </svg>
    
</button>
<h3 className=" font-rubik font-medium text-start pl-4 ">  12 cours Matrial</h3>

</div>


<div class="flex items-center  bg-white border-2 border-gray-600 px-4 py-3 rounded-lg">
<button type="button" class="size-5 inline-flex justify-center items-center text-2xl rounded-full text-red-500 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500">
    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
    </svg>
    
</button>
<h3 className=" font-rubik font-medium text-start pl-4 ">  12 cours Matrial</h3>

</div>

<div class="flex items-center  bg-white border-2 border-gray-600 px-4 py-3 rounded-lg">
<button type="button" class="size-5 inline-flex justify-center items-center text-2xl rounded-full text-red-500 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500">
    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
    </svg>
    
</button>
<h3 className=" font-rubik font-medium text-start pl-4 ">  12 cours Matrial</h3>

</div>

</div>
{/* end rating */}


 </div>


 <div className=" mt-4">
    <div className=" flex flex-col gap-4 px-2">

    <div class="w-full relative bg-white border-2 border-black rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert" tabindex="-1" aria-labelledby="hs-toast-avatar-label">
<div class="flex p-4">
<div class="shrink-0">
<img class="inline-block size-8 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar"/>
</div>
<div class="ms-4 me-5">
<h3 id="hs-toast-avatar-label" class="text-gray-800 font-medium text-sm dark:text-white">
<span class="font-semibold">James</span>
</h3>
<div class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
Good Course i like it
</div>
</div>
</div>
</div>


<div class="w-full relative bg-white  border-2 border-black rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert" tabindex="-1" aria-labelledby="hs-toast-avatar-label">
<div class="flex p-4">
<div class="shrink-0">
<img class="inline-block size-8 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar"/>
</div>
<div class="ms-4 me-5">
<h3 id="hs-toast-avatar-label" class="text-gray-800 font-medium text-sm dark:text-white">
<span class="font-semibold">Iman Ro</span>
</h3>
<div class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
Eaaaaaaaaaaaaaaaaaaaaaa
</div>
</div>
</div>
</div>

<div class="w-full relative bg-white border-2 border-black rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert" tabindex="-1" aria-labelledby="hs-toast-avatar-label">
<div class="flex p-4">
<div class="shrink-0">
<img class="inline-block size-8 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar"/>
</div>
<div class="ms-4 me-5">
<h3 id="hs-toast-avatar-label" class="text-gray-800 font-medium text-sm dark:text-white">
<span class="font-semibold">Vederico</span>
</h3>
<div class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
Hurraaaaaaaaaaaa
</div>
</div>
</div>
</div>
    </div>
 </div>


 <div className=" flex justify-center items-center mt-4 ">

<button type="button" class="py-4 px-16 inline-flex items-center gap-x-2 text-sm font-rubik font-bold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800">
See more
</button>

 </div>




</div>


    </div>
    )
}
export default Course_Page_After