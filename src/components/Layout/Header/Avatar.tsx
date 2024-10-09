import { logout, SelectUserDetail } from "@/Redux/userSlice/userSlice";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const Avatar = () => {
  const user = useSelector(SelectUserDetail);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    console.log("logout");
  };

  const items: MenuProps["items"] = [
    {
      label: <Link to="/profile">Profile</Link>,
      key: "1",
    },
    {
      label: <button onClick={handleLogout}>Logout</button>,
      key: "0",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-4">
      <img
        className="w-10 h-10 rounded-full"
        src={
          "https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"
        }
        alt="Rounded avatar"
      />
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Button>
          <Space>
            <p className="text-gray-500">{user?.username}</p>
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
};

export default Avatar;
