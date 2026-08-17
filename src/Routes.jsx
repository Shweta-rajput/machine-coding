import { Routes, Route } from "react-router";
import Home from "./Home";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import FolderStructure from "./components/FolderStructure/FolderStructure";
import NestedCheckboxes from "./components/NestedCheckboxes/NestedCheckboxes";
import MultiToast from "./components/MultiToast/MultiToast";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import BubbleSortRepresentaion from "./components/BubbleSortRepresentaion";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/progress-bar" element={<ProgressBar />} />
      <Route path="/folder-tree" element={<FolderStructure />} />
      <Route path="/nested-checkboxes" element={<NestedCheckboxes />} />
      <Route path="/multiple-toasts" element={<MultiToast />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
      <Route
        path="/bubble-sort-representation"
        element={<BubbleSortRepresentaion />}
      />
    </Routes>
  );
};

export default AllRoutes;
