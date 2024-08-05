import React from "react";

interface ProfileProps {
  name: string;
}

const ProfilePage: React.FC<ProfileProps> = ({ name }) => {
  return <div>ProfilePage: {name} </div>;
};

export default ProfilePage;
