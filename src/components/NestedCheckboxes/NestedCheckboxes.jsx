import { useCallback, useState } from "react";
import { checkboxData } from "./Data";
import "./style.css";
import ProjectLayout from "../ProjectLayout";

const NestedCheckboxes = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = useCallback(
    (isChecked, item) => {
      const newState = { ...checkedItems };

      const checkAllChildren = (element) => {
        newState[element.id] = isChecked;

        element?.children?.forEach((child) => {
          checkAllChildren(child);
        });
      };

      const checkForParent = (element) => {
        if (!element?.children?.length) return;

        element.children.forEach((child) => {
          checkForParent(child);
        });

        newState[element.id] = element.children.every(
          (child) => newState[child.id],
        );
      };

      checkAllChildren(item);

      checkboxData.forEach((element) => {
        checkForParent(element);
      });

      setCheckedItems(newState);
    },
    [checkedItems],
  );

  return (
    <ProjectLayout
      title="Nested Checkboxes"
      description="Select nested items with automatic parent-child state handling."
      icon="☑️"
    >
      <div className="nested-checkboxes">
        <NestedTree
          data={checkboxData}
          checkedItems={checkedItems}
          onCheck={handleCheck}
        />
      </div>
    </ProjectLayout>
  );
};

const NestedTree = ({ data, checkedItems, onCheck }) => {
  return (
    <ul className="checkbox-tree">
      {data?.map((item) => (
        <li key={item.id} className="checkbox-item">
          <div className="checkbox-row">
            <input
              type="checkbox"
              id={`checkbox-${item.id}`}
              checked={checkedItems?.[item.id] || false}
              onChange={(e) => onCheck(e.target.checked, item)}
            />

            <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>
          </div>

          {!!item.children?.length && (
            <div className="checkbox-children">
              <NestedTree
                data={item.children}
                checkedItems={checkedItems}
                onCheck={onCheck}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NestedCheckboxes;
