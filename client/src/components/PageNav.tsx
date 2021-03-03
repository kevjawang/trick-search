import React from "react";
import { Button, ButtonGroup, IconButton, Link } from "@chakra-ui/react";
import { PaginationInfo } from "../generated/graphql";
import NextLink from "next/link";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { ParsedUrlQuery } from "querystring";

interface PageNavProps {
  pathname: string;
  query: ParsedUrlQuery;
  paginationInfo: PaginationInfo;
}

export const PageNav: React.FC<PageNavProps> = ({
  pathname,
  query,
  paginationInfo,
}) => {
  const currentPage = paginationInfo.currentPage;
  const pageCount = paginationInfo.pageCount;
  delete query["page"];

  var numberedButtons = [];
  var startPage = 1;
  var endPage = Math.min(pageCount, 5);
  if (currentPage > 3 && pageCount > 5) {
    startPage = currentPage - 2;
    endPage = currentPage + 2;
    if (currentPage + 4 >= pageCount) {
      startPage = pageCount - 4;
      endPage = pageCount;
    }
  }

  for (var i = startPage; i <= endPage; i++) {
    numberedButtons.push(
      <NextLink
        key={`pageButton${i}`}
        href={{
          pathname: `${pathname}`,
          query: {
            page: i,
            ...query,
          },
        }}
      >
        <Button isActive={currentPage == i}>{i}</Button>
      </NextLink>
    );
  }

  return (
    <>
      <ButtonGroup isAttached>
        {paginationInfo.hasPreviousPage && (
          <>
            <NextLink
              href={{
                pathname: `${pathname}`,
                query: {
                  page: 1,
                  ...query,
                },
              }}
            >
              <Link>
                <IconButton
                  aria-label="Return to first page"
                  icon={<FaAngleDoubleLeft />}
                />
              </Link>
            </NextLink>
            <NextLink
              href={{
                pathname: `${pathname}`,
                query: {
                  page: currentPage - 1,
                  ...query,
                },
              }}
            >
              <IconButton
                aria-label="Return to first page"
                icon={<FaAngleLeft />}
              />
            </NextLink>
          </>
        )}
        {numberedButtons}
        {paginationInfo.hasNextPage && (
          <>
            <NextLink
              href={{
                pathname: `${pathname}`,
                query: {
                  page: currentPage + 1,
                  ...query,
                },
              }}
            >
              <IconButton
                aria-label="Go to next page"
                icon={<FaAngleRight />}
              />
            </NextLink>
            <NextLink
              href={{
                pathname: `${pathname}`,
                query: {
                  page: pageCount,
                  ...query,
                },
              }}
              passHref
            >
              <IconButton
                aria-label="Go to last page"
                icon={<FaAngleDoubleRight />}
              />
            </NextLink>
          </>
        )}
      </ButtonGroup>
    </>
  );
};
