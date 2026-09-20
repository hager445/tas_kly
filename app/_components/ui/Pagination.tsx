"use client";
import { useEffect, useState } from "react";
import BarIcon from "./BarIcon";
import Button from "./Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { usePaginationContext } from "@/app/contexts/PaginationContext";
import PageButton from "./PageButton";

export default function Pagination({
  listLength = 3,
  itemsPerPage = 6,
}: {
  listLength: number;
  itemsPerPage: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const staticPaginationButtonsLength = 3;
  const { currentPage, setCurrentPage } = usePaginationContext();
  console.log(currentPage);

  const numberOfPages = Math.ceil(listLength / itemsPerPage);
  const paginationButtons = Array.from(
    { length: numberOfPages },
    (_, i) => i + 1,
  );
  const staticPaginationButtons = Array.from(
    { length: staticPaginationButtonsLength },
    (_, i) => i + 1,
  );
  const showLeftDots = currentPage > staticPaginationButtonsLength;
  const showRightDots =
    numberOfPages > 3 && currentPage < paginationButtons.length - 1;
  const lastIndex = paginationButtons.length - 1;
  const handlePageChange = (currentPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(currentPage));
    router.push(`${pathname}?${params.toString()}`);
  };
  const moveToRight = () => {
    setCurrentPage((c: number) => (c < paginationButtons.length ? c + 1 : c));
    handlePageChange(currentPage);
  };
  const moveToLeft = () => {
    setCurrentPage((c) => (c > 1 ? c - 1 : c));
    handlePageChange(currentPage);
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

        <>
          {staticPaginationButtons.map((btn, i) => {
            return (
              <PageButton
                key={i}
                page={btn}
                isActive={currentPage === btn}
                onClick={() => setCurrentPage(btn)}
              />
            );
          })}
        </>

        {/* <PageButton
          page={1}
          isActive={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        /> */}
        {/* --------------------- */}
        {showLeftDots && <DotsButton />}
        {paginationButtons.length > 1 && (
          <>
            {paginationButtons
              .slice(
                staticPaginationButtonsLength,
                paginationButtons.length - 1,
              )
              .map((btn, i) => {
                const pageIndex = i + 4;

                const isCurrentButton = currentPage === pageIndex;
                console.log(
                  paginationButtons.slice(
                    staticPaginationButtonsLength,
                    paginationButtons.length - 1,
                  ),
                );

                return (
                  isCurrentButton && (
                    <PageButton
                      page={btn}
                      isActive={isCurrentButton}
                      onClick={() => setCurrentPage(btn)}
                    />
                  )
                );
              })}
          </>
        )}

        {showRightDots && (
          <>
            <DotsButton />
          </>
        )}
        {/* ============ */}

        <PageButton
          page={lastIndex + 1}
          isActive={currentPage === lastIndex + 1}
          onClick={() => setCurrentPage(lastIndex + 1)}
        />

        <button type="button" className="cursor-pointer" onClick={moveToRight}>
          <div className="w-8 h-8 rounded-2 border-1 border-neutral-light/30 flex items-center justify-center">
            <BarIcon iconName="ArrowRight" width={4.32} height={7} />
          </div>
        </button>
      </div>
    </div>
  );
}
function DotsButton() {
  return (
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
  );
}
