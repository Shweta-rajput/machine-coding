import { useCallback, useState } from "react";

const Folder = ({ data }) => {
  return (
    <ul>
      {data?.map((item, i) => (
        <FolderItem key={i} item={item} />
      ))}
    </ul>
  );
};

const FolderItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleTree = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <li
      key={item.id}
      className={`${item?.children?.length ? "folder" : "file"} `}
    >
      <p onClick={handleToggleTree}>{item.name}</p>

      {!!item?.children?.length && (
        <div className={`folder-content ${isOpen ? "open" : "closed"}`}>
          <Folder data={item.children} />
        </div>
      )}
    </li>
  );
};

export default Folder;
