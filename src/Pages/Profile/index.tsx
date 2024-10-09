import React from "react";
import avatar from "@/assets/Image.jpg";
import { InputForm } from "@/components/Ui/Input/InputForm";
import { Button } from "antd";
import ListExam from "./ListExam";
const Profile = () => {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold">My account</h1>
      <div className="flex gap-12 mt-10">
        <div className="w-[180px] flex flex-col gap-4 text-custom-gray-1 font-medium">
          <p className="hover:text-custom-black-1 cursor-pointer">
            Information
          </p>
          <p className="hover:text-custom-black-1 cursor-pointer">My exams</p>
          <p className="hover:text-custom-black-1 cursor-pointer">...</p>
        </div>
        <div className="max-w-[700px] w-full flex flex-col gap-10">
          <div
            id="information"
            className="border border-custom-gray-1 rounded-lg p-4"
          >
            <h2 className="text-lg font-bold">Information</h2>
            <div className="flex pt-4 border-t border-custom-gray-1">
              <div className="w-[100px] h-[100px] overflow-hidden rounded-full bg-custom-gray-1">
                <img
                  src={avatar}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 ml-6">
                <InputForm label="User name" name="name" placeholder="Name" />
                <InputForm label="Email" name="email" placeholder="Email" />
                <InputForm label="Password" name="phone" placeholder="**********" />
              </div>
              <Button className="ml-auto mt-6 max-w-[100px] w-full" disabled type="primary">
                Save
              </Button>
            </div>
          </div>
          <ListExam />
        </div>
      </div>
    </div>
  );
};

export default Profile;
