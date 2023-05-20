import React from "react";

const BountyCard = ({ title, content }) => {
  return (
    <div class="rounded-2xl bg-gradient-to-r from-[#FF00F4] to-[#FF7400] p-1 shadow-xl">
      <a class="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
        <div class="mt-2">
          <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
            Science of Chemistry
          </h3>

          <p class="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            adipisci.
          </p>
          <div className="flex justify-end mt-4">
            <button
              className="btn btn-secondary btn-circle tooltip tooltip-primary"
              data-tip="participate"
            >
              <i class="fa-regular fa-face-grin-wink"></i>
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BountyCard;
