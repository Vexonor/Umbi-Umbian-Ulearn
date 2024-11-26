import React from "react";

const Benefit = ({ image, title, description }) => {
  return (
    <div class="flex bg-alabaster border-2 border-charcoal shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="w-64 h-auto">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
        <p class="mt-2 text-gray-500 dark:text-neutral-400">{description}</p>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
export default Benefit;
