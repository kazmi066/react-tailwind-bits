import { useRef, useEffect, useState } from "react";

const Resizable = ({ children, minWidth = 200 }) => {
  const resizableRef = useRef(null);
  const [width, setWidth] = useState<string | number>("100%");
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizing && resizableRef.current) {
        const parentWidth = resizableRef.current.parentElement.getBoundingClientRect().width;
        const newWidth = e.clientX - resizableRef.current.getBoundingClientRect().left;

        setWidth(Math.min(Math.max(newWidth, minWidth), parentWidth));
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, minWidth]);

  return (
    <div
      ref={resizableRef}
      style={{ width: typeof width === "string" ? width : `${width}px` }}
      className="relative"
    >
      {children}
      <div
        className="absolute top-0 right-0 h-full w-1 bg-gray-700 cursor-ew-resize"
        onMouseDown={() => setIsResizing(true)}
      />
    </div>
  );
};

export default Resizable;
