import React from "react";
import "preline/preline";
import Navbar from './components/navbar';
import Home from './view/Home/home';
import Payment from './view/Payment/Payment';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Course from './view/Course/course';
import MainTodo from './view/ToDoList/mainTodo';
import Course_Page from "./view/Home/Course_Page";
import Course_Page_After from "./view/Home/Course_Page_After";
import About from "./view/About/About";
import Login from './view/Login/Login';
import CollaborationField from './view/Collaboration/MainCollab';
import HomeAfterLogin from './view/Home/HomeRegistered';


function App() {
  return (
<Router>
      <header class="w-full dark:bg-neutral-800 bg-background bg-no-repeat bg-cover flex justify-center gap-4">
        {/* Navbar */}
        <nav className="fixed z-50 flex flex-wrap items-center justify-between w-11/12 px-4 py-3 mx-auto border-2 rounded-full bg-alabaster top-5 border-charcoal basis-full">
          <Navbar />
        </nav>

        <div className="flex flex-col items-center justify-center w-full h-screen bg-background ">
          <div className="absolute flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4 p-5 bg-alabaster rounded-xl md:p-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all delay-150 size-10 md:size-12 lg:size-16 text-charcoal hover:animate-bounce"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M76,152a36,36,0,1,0,36,36A36,36,0,0,0,76,152Zm0,56a20,20,0,1,1,20-20A20,20,0,0,1,76,208ZM42.34,106.34,56.69,92,42.34,77.66A8,8,0,0,1,53.66,66.34L68,80.69,82.34,66.34A8,8,0,0,1,93.66,77.66L79.31,92l14.35,14.34a8,8,0,0,1-11.32,11.32L68,103.31,53.66,117.66a8,8,0,0,1-11.32-11.32Zm187.32,96a8,8,0,0,1-11.32,11.32L204,199.31l-14.34,14.35a8,8,0,0,1-11.32-11.32L192.69,188l-14.35-14.34a8,8,0,0,1,11.32-11.32L204,176.69l14.34-14.35a8,8,0,0,1,11.32,11.32L215.31,188Zm-45.19-89.51c-6.18,22.33-25.32,41.63-46.53,46.93A8.13,8.13,0,0,1,136,160a8,8,0,0,1-1.93-15.76c15.63-3.91,30.35-18.91,35-35.68,3.19-11.5,3.22-29-14.71-46.9L152,59.31V80a8,8,0,0,1-16,0V40a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H163.31l2.35,2.34C183.9,68.59,190.58,90.78,184.47,112.83Z"></path>
              </svg>
              <h1 className="font-bold md:text-2xl lg:text-3xl font-rubik">
                Learn the Steps, Achieve Greatness
              </h1>
            </div>
            <p className="my-5 font-rubik md:text-2xl lg:text-3xl text-alabaster">
              With Online Learning & Collaborative Platform
            </p>
            <a
              href="#"
              className="w-5/12 p-2 font-semibold text-center rounded font-rubik text-charcoal lg:text-xl lg:p-4 bg-alabaster"
            >
              <button type="button">Start</button>
            </a>
          </div>
        </div>
      </header>

      <main className="my-10">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/course' element={<Course />} />
          <Route path='/todoList' element={<MainTodo />} />
          <Route path="/Course_Page" element={<Course_Page />} />
          <Route path="/Course_Page_After" element={<Course_Page_After />} />
          <Route path="/about" element={<About />} />
          <Route path='/collaboration' element={<CollaborationField />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home-registered' element={<HomeAfterLogin />} />
          <Route path='/payment' element={<Payment />} />


        </Routes>
      </main>

      <footer className="w-11/12 mx-auto">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
