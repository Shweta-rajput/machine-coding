import ProjectLayout from "../ProjectLayout";
import { TREE_DATA } from "./data";
import Folder from "./Folder";
import "./style.css";

const FolderStructure = () => {
  return (
    <ProjectLayout
      title="Folder Tree"
      description="Explore a recursive folder and file structure."
      icon="📁"
    >
      <div className="folder-tree">
        <Folder data={TREE_DATA} />
      </div>
    </ProjectLayout>
  );
};

export default FolderStructure;
