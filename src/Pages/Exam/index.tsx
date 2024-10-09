import React, { useState } from "react";
import Category from "./components/Category";
import { useGetExamsMutation } from "@/Redux/examSlice/examSlice";
import CardItem from "@/components/Ui/Card/Card";

const Exam = () => {
  const [category, setCategory] = useState<string>("All Recommendation");
  const [getExams, { data, isLoading }] = useGetExamsMutation();

  React.useEffect(() => {
    getExams();
  }, [getExams]);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  const onChangeCategory = (value: string) => {
    setCategory(value);
  };

  return (
    <div className="pt-24">
      <Category onChangeCategory={onChangeCategory} category={category} />
      <h3 className="mt-10 text-custom-black-1 text-xl font-bold">All exams</h3>
      <p className="text-custom-gray-1">We know the best things for You.  Top picks for You.</p>
      <div className="flex mt-10 gap-4">
        {data?.data.map((exam) => (
          <CardItem key={exam._id} exam={exam} />
        ))}
      </div>
    </div>
  );
};

export default Exam;
