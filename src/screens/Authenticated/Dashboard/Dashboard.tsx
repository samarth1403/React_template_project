import React from "react";
import PrimaryButton from "../../../components";
import { clearStorage } from "../../../utils/storage";
import { useDispatch } from "react-redux";
import { setAuthentication } from "../../../utils/redux";

const Dashboard = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    clearStorage();
    dispatch(setAuthentication(null));
  };

  return (
    <div>
      <div>Dashboard </div>

      <PrimaryButton onClick={onLogout}>Logout</PrimaryButton>
    </div>
  );
};

export default Dashboard;
