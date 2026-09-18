"use client";
import { useEffect, useState } from "react";
import BarIcon from "./BarIcon";
import Button from "./Button";

export default function Pagination({
  listLength = 3,
  itemsPerPage = 6,
  setStartPoint,
  setEndPoint,
}: {
  listLength: number;
  itemsPerPage: number;
  setStartPoint: any;
  setEndPoint: any;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(listLength / itemsPerPage);
  const paginationButtons = Array.from(
    { length: numberOfPages },
    (_, i) => i + 1,
  );
  const showLeftDots = numberOfPages > 3 && currentPage > 2;
  const showRightDots =
    numberOfPages > 3 && currentPage < paginationButtons.length - 1;
  const lastIndex = paginationButtons.length - 1;
  const showWindowButtons = paginationButtons.slice(
    1,
    paginationButtons.length - 1,
  );
  //   const lastWindowButton = showWindowButtons[showWindowButtons.length - 1];
  //   const startCollapse = showWindowButtons.length > 1;
  const moveToRight = () => {
    setCurrentPage((c) => (c < paginationButtons.length ? c + 1 : c));
  };
  const moveToLeft = () => {
    setCurrentPage((c) => (c > 1 ? c - 1 : c));
  };

  useEffect(() => {
    setStartPoint(currentPage * itemsPerPage - itemsPerPage);
    setEndPoint(currentPage * itemsPerPage);
    console.log(currentPage);
  }, [currentPage, itemsPerPage, setStartPoint, setEndPoint]);

  return (
    <div className="p-8 w-full ">
      <div className="ml-auto w-fit flex items-center gap-2">
        <button type="button" className="cursor-pointer" onClick={moveToLeft}>
          <div className="w-8 h-8 rounded-2 border-1 border-neutral-light/30 flex items-center justify-center">
            <BarIcon iconName="ArrowLeft" width={4.32} height={7} />
          </div>
        </button>
        <div
          className={`w-8 h-8 rounded-2 border-1 border-neutral-light/30 flex items-center justify-center  ${currentPage === 1 ? "bg-primary" : "bg-transparent"}`}
        >
          <Button
            className={`text-label-md font-label-md  ${currentPage === 1 ? "text-white" : "text-muted"}`}
            type={"button"}
          >
            {1}
          </Button>
        </div>
        {/* --------------------- */}
        {showLeftDots && (
          <div
            className={`w-8 h-8 rounded-2 border-1 border-neutral-light/30 flex items-center justify-center bg-transparent`}
          >
            <Button
              className={`text-label-md font-label-md text-muted`}
              type={"button"}
            >
              {"..."}
            </Button>
          </div>
        )}
        {paginationButtons.length > 1 && (
          <>
            {paginationButtons
              .slice(1, paginationButtons.length - 1)
              .map((btn, i) => {
                return (
                  <div
                    key={btn}
                    className={`w-8 h-8 rounded-2 border border-neutral-light/30 flex items-center justify-center ${
                      currentPage === btn ? "bg-primary" : "bg-transparent"
                    }`}
                  >
                    <Button
                      className={`text-label-md font-label-md ${
                        currentPage === btn ? "text-white" : "text-muted"
                      }`}
                      type="button"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {btn}
                    </Button>
                  </div>
                );
              })}
          </>
        )}
        {showRightDots && (
          <>
            <div
              className={`w-8 h-8 rounded-2 border-1 border-neutral-light/30 flex items-center justify-center bg-transparent`}
            >
              <Button
                className={`text-label-md font-label-md text-muted`}
                type={"button"}
              >
                {"..."}
              </Button>
            </div>
          </>
        )}
        {/* ============ */}
        <div
          className={`w-8 h-8 rounded-2 border-1 border-neutral-light/30 flex items-center justify-center  ${currentPage === lastIndex + 1 ? "bg-primary" : "bg-transparent"}`}
        >
          <Button
            className={`text-label-md font-label-md  ${currentPage === lastIndex + 1 ? "text-white" : "text-muted"}`}
            type={"button"}
            onClick={() => setCurrentPage(lastIndex + 1)}
          >
            {paginationButtons[lastIndex]}
          </Button>
        </div>

        <button type="button" className="cursor-pointer" onClick={moveToRight}>
          <div className="w-8 h-8 rounded-2 border-1 border-neutral-light/30 flex items-center justify-center">
            <BarIcon iconName="ArrowRight" width={4.32} height={7} />
          </div>
        </button>
      </div>
    </div>
  );
}
