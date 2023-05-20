import React from "react";
import CommunityCard from "../components/CommunityCard";

const community = () => {
  return (
    <div className="p-8 pt-12">
      <div className="grid grid-cols-2 gap-4">
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </div>
    </div>
  );
};

export default community;
