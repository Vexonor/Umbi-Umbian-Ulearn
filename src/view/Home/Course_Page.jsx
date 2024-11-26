import React from "react";

const Course_Page =() => {

    return (
        <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-3 flex-col w-full
         ">
            <div class="flex w-full cols-span-1 flex-col border-2 border-black bg-white shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <img class="p-4 min-w-8 rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image"/>
            <h2 className="text-center font-light font-rubik text-gray-500"> made by jhon</h2>
            <div class="p-2 md:p-4">
          <h3 class="text-lg font-bold font-rubik text-gray-800 dark:text-white">
            Biologie
          </h3>
          <h4 className=" flex space-y-2 text-start font-semibold text-gray-800"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path></svg>10 User already in</h4>
          <p class="mt-1 pb-4 text-gray-500 dark:text-neutral-400">
          Learn the fundamentals of Biologic, including basic Knowladge. Start building a strong foundation for ur knowladge.
          </p>
          <h2 className=" flex space-y-2 text-start font-semibold text-gray-800"> This cours include</h2>
          <ul class="marker:text-gray-800 list-disc ps-3 pb-2 space-y-2 text-sm text-gray-600 dark:text-neutral-400">
                <li>
                    FAQ
                </li>
                <li>
                    License
                </li>
                <li>
                    Terms & Conditions
                </li>
                </ul>

                <h1 className=" text-start text-3xl font-bold text-gray-800 pb-2"> Rp.1.000.000</h1>
             <a class="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
            Start Learning
          </a>
            </div>
        </div>

        <div className="col-span-2 px-8"> 

            <h1 className="font-rubik font-bold text-start text-5xl text-gray-600 pb-2">Biologie </h1>
            <p class="mt-1 pb-1 text-gray-600 dark:text-neutral-400">
            Biology class is a subject that explores life and living organisms, from their structure to the processes that sustain life. In this class, students will learn about fundamental biology concepts such as cells, genetics, evolution, ecosystems, and human body systems. Through this learning, students will understand how living organisms function, interact with each other, and the importance of conservation and environmental sustainability. The goal of Biology class is to develop a deep scientific understanding and critical thinking skills to analyze life phenomena.
          </p>
          <h2 className="font-rubik font-semibold text-start text-xl text-gray-600 pb-2">Course Publish by:Aziz</h2>

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
export default Course_Page