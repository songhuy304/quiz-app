import React from "react";

const items = [
  "All Recommendation",
  "Grammar",
  "Vocabulary",
  "Speaking",
  "Writing",
  "Conditionals",
];

interface CategoryProps {
  category: string;
  onChangeCategory: (value: string) => void;
}

const Category: React.FC<CategoryProps> = ({ category, onChangeCategory }) => {
  return (
    <div className="flex gap-2">
      {items.map((e, i) => (
        <button
          key={i}
          onClick={() => onChangeCategory(e)}
          className={`rounded-xl border ${
            category === e
              ? "border-custom-green-1 bg-custom-green-1 text-white hover:bg-custom-green-1/85"
              : "border-custom-gray-1 text-custom-gray-1 hover:text-custom-green-1"
          }  px-4 py-2 hover:border-custom-green-1  transition-colors`}
        >
          {e}
        </button>
      ))}
    </div>
  );
};

export default Category;
