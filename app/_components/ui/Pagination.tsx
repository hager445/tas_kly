"use client";
import { useEffect, useState } from "react";
import BarIcon from "./BarIcon";
import Button from "./Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { usePaginationContext } from "@/app/contexts/PaginationContext";

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
  const { currentPage, setCurrentPage } = usePaginationContext();
  const numberOfPages = Math.ceil(listLength / itemsPerPage);
  const paginationButtons = Array.from(
    { length: numberOfPages },
    (_, i) => i + 1,
  );
  const showLeftDots = numberOfPages > 3 && currentPage > 2;
  const showRightDots =
    numberOfPages > 3 && currentPage < paginationButtons.length - 1;
  const lastIndex = paginationButtons.length - 1;
  const moveToRight = () => {
    setCurrentPage((c: number) => (c < paginationButtons.length ? c + 1 : c));
  };
  const moveToLeft = () => {
    setCurrentPage((c) => (c > 1 ? c - 1 : c));
  };

  useEffect(() => {
    setStartPoint(currentPage * itemsPerPage - itemsPerPage);
    setEndPoint(currentPage * itemsPerPage);
    console.log(currentPage);
  }, [currentPage, itemsPerPage, setStartPoint, setEndPoint]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handlePageChange = (currentPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(currentPage));
    router.push(`${pathname}?${params.toString()}`);
  };
  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage]);
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
                const pageIndex = i;
                const isCurrentButton = currentPage - 2 === pageIndex;
                return (
                  isCurrentButton && (
                    <div
                      key={btn}
                      className={`w-8 h-8 rounded-2 border border-neutral-light/30 flex items-center justify-center ${
                        isCurrentButton ? "bg-primary" : "bg-transparent"
                      }`}
                    >
                      <Button
                        className={`text-label-md font-label-md ${
                          isCurrentButton ? "text-white" : "text-muted"
                        }`}
                        type="button"
                      >
                        {btn}
                      </Button>
                    </div>
                  )
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
