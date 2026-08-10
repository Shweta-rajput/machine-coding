import { useCallback, useState } from "react";

const Folder = ({ data }) => {
  return (
    <ul className="folder-list">
      {data?.map((item) => (
        <FolderItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

const FolderItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(true);

  const hasChildren = !!item?.children?.length;

  const handleToggleTree = useCallback(() => {
    if (!hasChildren) return;

    setIsOpen((prev) => !prev);
  }, [hasChildren]);

  return (
    <li className={hasChildren ? "folder-item" : "file-item"}>
      <div className="folder-row" onClick={handleToggleTree}>
        {hasChildren ? (
          <span className={`folder-chevron ${isOpen ? "expanded" : ""}`}>
            ›
          </span>
        ) : (
          <span className="folder-spacer" />
        )}

        <span className="folder-icon">
          {hasChildren ? (isOpen ? "📂" : "📁") : "📄"}
        </span>

        <span className="folder-name">{item.name}</span>
      </div>

      {hasChildren && (
        <div className={`folder-content ${isOpen ? "open" : "closed"}`}>
          <Folder data={item.children} />
        </div>
      )}
    </li>
  );
};

export default Folder;
