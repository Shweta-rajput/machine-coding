import { useCallback, useState } from "react";
import { checkboxData } from "./Data";
import "./style.css";
import ProjectLayout from "../ProjectLayout";

const NestedCheckboxes = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = useCallback(
    (isChecked, item) => {
      let newState = { ...checkedItems };

      const checkAllChildrens = (element) => {
        newState[element.id] = isChecked;
        element?.children?.forEach((ele) => {
          checkAllChildrens(ele);
        });
      };

      const checkForParent = (element) => {
        const allChildrensChecked = element?.children?.every((ele) => {
          if (ele.children) {
            checkForParent(ele);
          }
          return newState[ele.id];
        });

        newState[element.id] = allChildrensChecked;
      };

      checkAllChildrens(item);

      checkboxData?.forEach((ele) => {
        checkForParent(ele);
      });

      setCheckedItems(newState);
    },
    [checkedItems, setCheckedItems],
  );

  return (
    <ProjectLayout
      title="Nested Checkboxes"
      description="Practice recursive state management with nested checkboxes."
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
    <ul>
      {data?.map((item) => {
        return (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={checkedItems?.[item.id] || false}
              onChange={(e) => onCheck(e.target.checked, item)}
            />
            <span>{item.label}</span>

            {!!item.children?.length && (
              <div>
                <NestedTree
                  data={item.children}
                  checkedItems={checkedItems}
                  onCheck={onCheck}
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NestedCheckboxes;
