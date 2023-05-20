import React from "react";

const BountyCard = ({ title, description, bounty, index }) => {
  return (
    <div class="rounded-2xl bg-gradient-to-r from-[#FF00F4] to-[#FF7400] p-1 shadow-xl">
      <a class="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
        <div class="mt-2">
          <h3 class="text-lg font-bold text-gray-900 sm:text-xl">{title}</h3>

          <p class="mt-2 text-sm text-gray-500">{description}</p>
          <div className="flex justify-end mt-4">
            <label
              htmlFor={"modal" + index}
              className="btn btn-secondary "
              data-tip="participate"
            >
              {bounty} &nbsp; <i class="fa-solid fa-trophy"></i>
            </label>
          </div>
        </div>
      </a>
      <input type="checkbox" id={"modal" + index} className="modal-toggle" />
      <label htmlFor={"modal" + index} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            {title} &nbsp; <i class="fa-solid fa-trophy"></i>
          </h3>
          <p className="py-4">{description}</p>
          <button className="btn btn-secondary btn-block">Submit</button>
        </label>
      </label>
    </div>
  );
};

export default BountyCard;
