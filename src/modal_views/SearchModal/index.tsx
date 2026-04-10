"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { Modal } from "@/components";
import { ISearchModal } from "./SearchModal.types";
import { getHeaderRoutes } from "@/i18n/header.data.i18n";

import SearchIconBig from "../../../public/svg-component/SearchIconBig";
import ShareIcon from "../../../public/svg-component/ShareIcon";
import SearchInputButton from "../../../public/svg-component/SearchInputButton";
import FooterArrow from "../../../public/svg-component/FooterArrow";

const EXTRA_KEYWORDS_BY_PATH: Record<"en" | "pcm" | "yo", Record<string, string[]>> = {
  en: {
    "/": ["home", "homepage"],
    "/about-us": ["about", "who we are"],
    "/community/events": ["events", "event", "calendar"],
    "/government/projects": ["projects", "initiatives", "capital projects"],
  },
  pcm: {
    "/": ["home", "homepage"],
    "/about-us": ["about", "who we are in pidgin"],
    "/community/events": ["events", "calendar", "things dey happen"],
    "/government/projects": ["projects", "plans", "capital projects"],
  },
  yo: {
    "/": ["ile", "homepage"],
    "/about-us": ["nipa re", "about us in yoruba"],
    "/community/events": ["ise", "akojo", "calendar"],
    "/government/projects": ["ise agbese", "projects", "capital projects"],
  },
};

type SearchRouteItem = {
  title: string;
  path: string;
  target?: string;
};

const SearchModal = ({
  isShowSearchModal,
  onClickAwaySearchModal,
  onCloseSearchModal,
}: ISearchModal) => {
  const t = useTranslations();
  const locale = useLocale() as "en" | "pcm" | "yo";
  const router = useRouter();
  const [query, setQuery] = useState("");

  // const extraKeywordsByPath: Record<string, string[]> = {
  //   "/": ["home", "homepage"],
  //   "/about-us": ["about", "who we are"],
  //   "/about-us/history-of-apapa": ["history", "heritage", "apapa history"],
  //   "/about-us/departments-and-units": ["departments", "units", "directorates"],
  //   // "/government": ["governance", "leadership"],
  //   "/government/projects": ["projects", "initiatives", "capital projects"],
  //   "/government/organizational-structure": [
  //     "organizational structure",
  //     "organization chart",
  //     "org chart",
  //   ],
  //   "/government/organizational-structure/executive-chairman": [
  //     "chairman",
  //     "executive chairman",
  //   ],
  //   "/government/organizational-structure/council-manager": [
  //     "council manager",
  //     "manager profile",
  //   ],
  //   "/community": ["community", "get involved"],
  //   "/community/events": ["events", "event", "calendar"],
  //   "/community/faqs": ["faqs", "faq", "questions", "help"],
  //   "/community/feedback-portal": ["feedback", "complaints", "report"],
  //   "/community/polls-and-surveys": ["polls", "surveys", "vote"],
  //   "/community/volunteer-opportunities": [
  //     "volunteer",
  //     "volunteering",
  //     "opportunities",
  //   ],
  //   "/community/initiatives": ["initiatives", "programs", "projects"],
  // };

  const modalText = {
    en: {
      searchResults: "Search Results",
      noResultsPrefix: "No results found for",
      searchPlaceholder: "Search",
      searchAriaLabel: "Search",
      historyOfApapa: t("Nav.historyOfApapa"),
      eGovService: t("Nav.eGovServices"),
      events: t("Nav.events"),
      faq: t("Nav.faqs"),
      projects: t("Nav.projects"),
    },
    pcm: {
      searchResults: "Search Results",
      noResultsPrefix: "No result dey for",
      searchPlaceholder: "Search",
      searchAriaLabel: "Search",
      historyOfApapa: t("Nav.historyOfApapa"),
      eGovService: t("Nav.eGovServices"),
      events: t("Nav.events"),
      faq: t("Nav.faqs"),
      projects: t("Nav.projects"),
    },
    yo: {
      searchResults: "Abajade Iwadi",
      noResultsPrefix: "Ko si abajade fun",
      searchPlaceholder: "Wa",
      searchAriaLabel: "Wa",
      historyOfApapa: t("Nav.historyOfApapa"),
      eGovService: t("Nav.eGovServices"),
      events: t("Nav.events"),
      faq: t("Nav.faqs"),
      projects: t("Nav.projects"),
    },
  } as const;

  const text = modalText[locale] ?? modalText.en;

  // const searchItems = useMemo(() => {
  //   const routes = getHeaderRoutes(t);
  //   const flatItems = routes.flatMap((route) => {
  //     const base = [
  //       { title: route.title, path: route.path, target: undefined },
  //     ];
  //     const subTabs =
  //       (
  //         route.subTabs as
  //           | Array<{ title: string; path: string; target?: string }>
  //           | undefined
  //       )?.map((subTab) => ({
  //         title: subTab.title,
  //         path: subTab.path,
  //         target: subTab.target,
  //       })) ?? [];
  //     return [...base, ...subTabs];
  //   });

  //   const items = flatItems.map((item, index) => {
  //     const keywords = extraKeywordsByPath[item.path] ?? [];
  //     const searchText = [item.title, item.path, ...keywords]
  //       .join(" ")
  //       .toLowerCase();
  //     return {
  //       id: `${index}-${item.path}`,
  //       title: item.title,
  //       path: item.path,
  //       target: item.target,
  //       searchText,
  //     };
  //   });

  //   const seen = new Set<string>();
  //   return items.filter((item) => {
  //     if (seen.has(item.path)) return false;
  //     seen.add(item.path);
  //     return true;
  //   });
  // }, [t]);

  const searchItems = useMemo(() => {
    const routes = getHeaderRoutes(t);
    const flatItems: SearchRouteItem[] = routes.flatMap((route) => {
      const base: SearchRouteItem[] = [{ title: route.title, path: route.path }];
      const subTabs =
        route.subTabs?.map((subTab) => ({
          title: subTab.title,
          path: subTab.path,
          target: "target" in subTab ? subTab.target : undefined,
        })) ?? [];
      return [...base, ...subTabs];
    });

    const items = flatItems.map((item, index) => {
      const keywords = EXTRA_KEYWORDS_BY_PATH[locale]?.[item.path] ?? [];
      const searchText = [item.title, item.path, ...keywords]
        .join(" ")
        .toLowerCase();
      const isInternalPath = item.path.startsWith("/");
      const pathWithLocale = isInternalPath
        ? `/${locale}${item.path === "/" ? "" : item.path}`
        : item.path;
      return {
        id: `${index}-${item.path}`,
        title: item.title,
        path: pathWithLocale,
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
  }, [t, locale]);

  const normalizedQuery = query.trim().toLowerCase();
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const results = useMemo(() => {
    if (queryTokens.length === 0) return [];
    return searchItems.filter((item) =>
      queryTokens.every((token) => item.searchText.includes(token)),
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
                {results.length} {text.searchResults}
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
                  {text.noResultsPrefix} &quot;{normalizedQuery}&quot;.
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
                onClick={() => handleNavigate(`/${locale}/about-us/history-of-apapa`)}
              >
                <p className="text-sm whitespace-nowrap">{text.historyOfApapa}</p>
                <ShareIcon />
              </button>
              <button
                type="button"
                className="py-[10px] px-[8px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap"
                onClick={() =>
                  handleNavigate(
                    "https://lagosstate.gov.ng/services/governmentbenefits",
                    "_blank",
                  )
                }
              >
                <p className="text-sm  whitespace-nowrap">{text.eGovService}</p>
                <ShareIcon />
              </button>
              <button
                type="button"
                className="py-[10px] px-[8px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap"
                onClick={() => handleNavigate(`/${locale}/community/events`)}
              >
                <p className="text-sm  whitespace-nowrap">{text.events}</p>
                <ShareIcon />
              </button>
              <button
                type="button"
                className="py-[10px] px-[8px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap"
                onClick={() => handleNavigate(`/${locale}/community/faqs`)}
              >
                <p className="text-sm  whitespace-nowrap">{text.faq}</p>
                <ShareIcon />
              </button>
              <button
                type="button"
                className="py-[10px] px-[8px] rounded-[12px] bg-[#FFF6CC] flex items-center gap-3 w-fit  whitespace-nowrap"
                onClick={() => handleNavigate(`/${locale}/government/projects`)}
              >
                <p className="text-sm  whitespace-nowrap">{text.projects}</p>
                <ShareIcon />
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          <input
            className="w-full border border-[#D0D0D0] min-h-[56px] rounded-[100px] pt-[13px] pb-[15px] px-6"
            placeholder={text.searchPlaceholder}
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
            aria-label={text.searchAriaLabel}
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
