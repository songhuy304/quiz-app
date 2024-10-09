import { TExamResult } from "@/model/Question";
import { useGetExamHistoryMutation } from "@/Redux/examSlice/examSlice";
import { SelectUserDetail } from "@/Redux/userSlice/userSlice";
import { formatDate } from "@/utils/common";
import { Space, Table, TableProps } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListExam = () => {
  const [getExams, { data }] = useGetExamHistoryMutation();
  const user = useSelector(SelectUserDetail);

  useEffect(() => {
    getExams({ userName: user?.username || "" });
  }, [getExams, user]);

  console.log(data)

  const columns: TableProps<TExamResult>["columns"] = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      key: "Date & Time",
      render: (value: string) => {return formatDate(value);}
    },
    {
      title: "Point",
      dataIndex: "totalPoint",
      key: "Point",
      render: (value: number) => value.toFixed(0)
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/examsuccess/${record._id}`}>View</Link>
        </Space>
      ),
    },
  ];

  return (
    <div id="my-exams" className="border border-custom-gray-1 rounded-lg p-6">
      <h1 className="text-lg font-bold">My exams</h1>
      <div className="flex pt-4 border-t border-custom-gray-1 w-full">
        <Table<TExamResult>
          className="w-full"
          columns={columns}
          dataSource={data?.data as unknown as TExamResult[] || []}
        />
      </div>
    </div>
  );
};

export default ListExam;
