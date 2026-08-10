import { useCallback, useEffect, useState } from "react";

const DATA = [
  [1, 0, 1],
  [1, 1, 0],
  [0, 1, 1],
];

const UberBox = () => {
  const [selected, setSelected] = useState([]);
  //   const [selected, setSelected] = useState(new Set());
  const [unLoading, setUnloading] = useState(false);

  //   using array
  const handleUx = useCallback(
    (e) => {
      const { target } = e;
      const item = target.getAttribute("data-item");
      const index = target.getAttribute("data-index");
      if (!item || unLoading || selected.includes(index.toString())) return;

      setSelected((prev) => [...prev, index]);
    },
    [selected, unLoading]
  );

  const deselectBox = useCallback(() => {
    setSelected((prev) => {
      var arr = [...prev];
      arr.shift();

      if (arr.length) {
        setTimeout(() => {
          deselectBox();
        }, 500);
      } else {
        setUnloading(false);
      }

      return arr;
    });
  }, []);

  useEffect(() => {
    var validBoxes = DATA.flat().reduce((acc, item) => (acc += item));
    if (selected.length === validBoxes) {
      setUnloading(true);
      deselectBox();
    }
  }, [selected, deselectBox]);

  //     using set
  //   const handleUx = useCallback(
  //     (e) => {
  //       const { target } = e;
  //       const item = target.getAttribute("data-item");
  //       const index = target.getAttribute("data-index");

  //       if (!item || unLoading) return;

  //       setSelected((prev) => {
  //         return new Set(prev.add(index));
  //       });
  //     },
  //     [unLoading]
  //   );

  //   useEffect(() => {
  //     const validBoxes = DATA.flat()?.reduce((acc, item) => (acc += item));

  //     if (validBoxes === selected.size) {
  //       const ar = Array.from(selected.keys());

  //       const remove = () => {
  //         setUnloading(true);
  //         if (ar.length) {
  //           const deselectKey = ar.shift();
  //           selected.delete(deselectKey);
  //           setSelected(new Set(selected));
  //           setTimeout(() => {
  //             remove();
  //           }, 500);
  //         } else {
  //           setUnloading(false);
  //         }
  //       };

  //       remove();
  //     }
  //   }, [selected]);

  return (
    <div className="box-wrapper" onClick={handleUx}>
      {DATA.flat()?.map((item, i) => {
        const hiddenBox = item === 0 ? "hidden" : "";
        const isSelected = selected.includes(i.toString()) ? "selected" : "";
        // const isSelected = selected.has(i.toString()) ? "selected" : "";

        return (
          <div
            key={i}
            data-item={item}
            data-index={i}
            className={`box ${hiddenBox} ${isSelected} `}
          ></div>
        );
      })}
    </div>
  );
};

export default UberBox;
