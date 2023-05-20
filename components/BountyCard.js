import React from "react";

const BountyCard = ({ title, description }) => {
  return (
    <div class="rounded-2xl bg-gradient-to-r from-[#FF00F4] to-[#FF7400] p-1 shadow-xl">
      <a class="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
        <div class="mt-2">
          <h3 class="text-lg font-bold text-gray-900 sm:text-xl">{title}</h3>

          <p class="mt-2 text-sm text-gray-500">{description}</p>
          <div className="flex justify-end mt-4">
            <button className="btn btn-secondary " data-tip="participate">
              Solve
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BountyCard;
