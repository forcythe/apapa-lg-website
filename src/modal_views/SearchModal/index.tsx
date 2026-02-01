"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { Modal } from "@/components";
import { ISearchModal } from "./SearchModal.types";
import { getHeaderRoutes } from "@/i18n/header.data.i18n";

import SearchIconBig from "../../../public/svg-component/SearchIconBig";
import ShareIcon from "../../../public/svg-component/ShareIcon";
import SearchInputButton from "../../../public/svg-component/SearchInputButton";
import FooterArrow from "../../../public/svg-component/FooterArrow";

const SearchModal = ({
  isShowSearchModal,
  onClickAwaySearchModal,
  onCloseSearchModal,
}: ISearchModal) => {
  const t = useTranslations();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const extraKeywordsByPath: Record<string, string[]> = {
    "/": ["home", "homepage"],
    "/about-us": ["about", "who we are"],
    "/about-us/history-of-apapa": ["history", "heritage", "apapa history"],
    "/about-us/departments-and-units": ["departments", "units", "directorates"],
    // "/government": ["governance", "leadership"],
    "/government/projects": ["projects", "initiatives", "capital projects"],
    "/government/organizational-structure": [
      "organizational structure",
      "organization chart",
      "org chart",
    ],
    "/government/organizational-structure/executive-chairman": [
      "chairman",
      "executive chairman",
    ],
    "/government/organizational-structure/council-manager": [
      "council manager",
      "manager profile",
    ],
    "/community": ["community", "get involved"],
    "/community/events": ["events", "event", "calendar"],
    "/community/faqs": ["faqs", "faq", "questions", "help"],
    "/community/feedback-portal": ["feedback", "complaints", "report"],
    "/community/polls-and-surveys": ["polls", "surveys", "vote"],
    "/community/volunteer-opportunities": [
      "volunteer",
      "volunteering",
      "opportunities",
    ],
    "/community/initiatives": ["initiatives", "programs", "projects"],
  };

  const searchItems = useMemo(() => {
    const routes = getHeaderRoutes(t);
    const flatItems = routes.flatMap((route) => {
      const base = [{ title: route.title, path: route.path, target: undefined }];
      const subTabs =
        (
          route.subTabs as
            | Array<{ title: string; path: string; target?: string }>
            | undefined
        )?.map((subTab) => ({
          title: subTab.title,
          path: subTab.path,
          target: subTab.target,
        })) ?? [];
      return [...base, ...subTabs];
    });

    const items = flatItems.map((item, index) => {
      const keywords = extraKeywordsByPath[item.path] ?? [];
      const searchText = [
        item.title,
        item.path,
        ...keywords,
      ]
        .join(" ")
        .toLowerCase();
      return {
        id: `${index}-${item.path}`,
        title: item.title,
        path: item.path,
        target: item.target,
        searchText,
      };
    });

    const seen = new Set<string>();
    return items.filter((item) => {
      if (seen.has(item.path)) return false;
      seen.add(item.path);
      return true;
    });
  }, [t]);

  const normalizedQuery = query.trim().toLowerCase();
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const results = useMemo(() => {
    if (queryTokens.length === 0) return [];
    return searchItems.filter((item) =>
      queryTokens.every((token) => item.searchText.includes(token))
    );
  }, [queryTokens, searchItems]);

  const handleNavigate = (path: string, target?: string) => {
    if (!path) return;
    if (target === "_blank" || path.startsWith("http")) {
      window.open(path, "_blank", "noopener,noreferrer");
    } else {
      router.push(path);
    }
    setQuery("");
    onCloseSearchModal();
  };

  const handleSubmit = () => {
    if (results.length > 0) {
      handleNavigate(results[0].path, results[0].target);
    }
  };

  const showSearchedItems = normalizedQuery.length > 0;
  return (
    <Modal
      isShow={isShowSearchModal as boolean}
      className=""
      contentClassName=""
      childrenClassName=""
      onClickAway={onClickAwaySearchModal}
      onClose={onCloseSearchModal}
      isTopIcon
      isShowCloseIcon
    >
      <div
        className={`flex flex-col justify-between ${
          showSearchedItems ? "gap-3" : "gap-10"
        } w-full`}
      >
        {showSearchedItems ? (
          <div className="w-full">
            <div className="w-fit mx-auto mb-[46px] flex items-center justify-center flex-col">
              <SearchIconBig className="max-w-[70px] min-w-[70px] max-h-[70px] min-h-[70px]" />
              <h6 className="font-[FuturaLTBold] text-[18px] leading-[28px]">
                {results.length} Search Results
              </h6>
            </div>
            <div className="flex flex-col gap-4 w-full">
              {results.length > 0 ? (
                results.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="bg-[#F7F7F7] p-4 px-6 flex items-center justify-between rounded-[16px] text-left"
                    onClick={() => handleNavigate(item.path, item.target)}
                  >
                    <p>{item.title}</p>
                    <FooterArrow fill="#AA8B00" />
                  </button>
                ))
              ) : (
                <p className="text-center text-gray-500 w-full">
                  No results found for &quot;{normalizedQuery}&quot;.
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="w-fit mx-auto mb-[26px]">
              <SearchIconBig className="max-w-[280px] min-w-[280px] max-h-[280px] min-h-[280px]" />
            </div>
            <div className="flex items-center flex-wrap justify-center gap-2">
              <button
                type="button"
                className="py-[14px] px-[12px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap"
                onClick={() => handleNavigate("/about-us/history-of-apapa")}
              >
                <p className="text-sm whitespace-nowrap">History of Apapa</p>
                <ShareIcon />
              </button>
              <button
                type="button"
                className="py-[10px] px-[8px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap"
                onClick={() =>
                  handleNavigate(
                    "https://lagosstate.gov.ng/services/governmentbenefits",
                    "_blank"
                  )
                }
              >
                <p className="text-sm  whitespace-nowrap">
                  E-government service
                </p>
                <ShareIcon />
              </button>
              <button
                type="button"
                className="py-[10px] px-[8px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap"
                onClick={() => handleNavigate("/community/events")}
              >
                <p className="text-sm  whitespace-nowrap">
                  Events
                </p>
                <ShareIcon />
              </button>
              <button
                type="button"
                className="py-[10px] px-[8px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap"
                onClick={() => handleNavigate("/community/faqs")}
              >
                <p className="text-sm  whitespace-nowrap">
                  Frequently asked questions
                </p>
                <ShareIcon />
              </button>
              <button
                type="button"
                className="py-[10px] px-[8px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap"
                onClick={() => handleNavigate("/government/projects")}
              >
                <p className="text-sm  whitespace-nowrap">
                  Projects
                </p>
                <ShareIcon />
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          <input
            className="w-full border border-[#D0D0D0] min-h-[56px] rounded-[100px] pt-[13px] pb-[15px] px-6"
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <button
            type="button"
            className="shrink-0"
            onClick={handleSubmit}
            aria-label="Search"
            disabled={queryTokens.length === 0}
          >
            <SearchInputButton />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
