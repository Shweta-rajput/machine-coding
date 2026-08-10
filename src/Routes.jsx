import { Routes, Route } from "react-router";
import Home from "./Home";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import FolderStructure from "./components/FolderStructure/FolderStructure";
import NestedCheckboxes from "./components/NestedCheckboxes/NestedCheckboxes";
import UberBox from "./components/UberBox/UberBox";
import MultiToast from "./components/MultiToast/MultiToast";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/progress-bar" element={<ProgressBar />} />
      <Route path="/folder-tree" element={<FolderStructure />} />
      <Route path="/nested-checkboxes" element={<NestedCheckboxes />} />
      <Route path="/multiple-toasts" element={<MultiToast />} />
      <Route path="/uber-box" element={<UberBox />} />
    </Routes>
  );
};

export default AllRoutes;
