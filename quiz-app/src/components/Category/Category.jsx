import React from "react";
import "./Category.css";
import {
  MdHtml,
  MdCss,
  MdJavascript,
  MdOutlineColorLens,
} from "react-icons/md";
import { HiOutlineCube } from "react-icons/hi";
import { IoMdCode } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import CategoryItem from "../CategoryItem/CategoryItem";

const categoryItems = [
  {
    id: 1,
    icon1: <MdHtml />,
    icon2: <IoMdCode />,
    title: "HTML",
    description: "Semantic architecture and web structure fundamentals.",
  },
  {
    id: 2,
    icon1: <MdCss />,
    icon2: <MdOutlineColorLens />,
    title: "CSS",
    description: "Visual design, layouts,and responsive or chestration.",
  },
  {
    id: 3,
    icon1: <MdJavascript />,
    icon2: <TbBrandJavascript />,
    title: "JavaScript",
    description: "Algorithmic logic and dynamic interaction flows.",
  },
  {
    id: 4,
    icon1: <HiOutlineCube />,
    icon2: <FaReact />,
    title: "React",
    description: "Component composition and reactive state management.",
  },
];

const Category = () => {
  return (
    <>
      <p className="curated-knowledge-text">CURATED KNOWLEDGE</p>
      <h1 className="select-categeory-text">
        Select <span className="span-category">Category.</span>
      </h1>
      <p className="category-head-description">
        Choose your discipline and measure your mastery. Each module is designed
        for cognitive clarity and focused progression.
      </p>
      <ul className="category-list-container">
        {categoryItems.map((each) => (
          <CategoryItem key={each.id} items={each} />
        ))}
      </ul>
      <ul className="current-postion-score-container">
        <li className="current-box-item">
          <h1 className="first-current-box-item">1200+</h1>
          <p className="second-current-box-item">CURATED QUESTIONS</p>
        </li>
        <li className="current-box-item">
          <h1 className="first-current-box-item">84%</h1>
          <p className="second-current-box-item">AVERAGE ACCURACY</p>
        </li>
        <li className="current-box-item">
          <h1 className="first-current-box-item">Mastery</h1>
          <p className="second-current-box-item">YOUR CURRENT PATH</p>
        </li>
      </ul>
      <div className="weekly-performance-container">
        <ul className="unordered-list-weekly-item-container">
          <h1 className="continue-your-streak">Continue your streak.</h1>
          <p className="weekly-performance-description">
            You've mastered 3 categories this week. Keep the momentum going to
            reach Scholar Level 13.
          </p>
          <button className="achievement-roadmap-btn">
            View Achievement Roadmap
          </button>
        </ul>
      </div>
    </>
  );
};

export default Category;
