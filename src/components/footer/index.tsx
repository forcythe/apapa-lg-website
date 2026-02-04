"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { getFooterLinks, socialLinks } from "@/i18n/footer.data.i18n";
import type { FooterLinksMap } from "@/i18n/footer.data.i18n";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

import FooterArrow from "../../../public/svg-component/FooterArrow";

export const RenderSocialLinks = ({
  Icon,
  link,
}: {
  Icon: string;
  link: string;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-[44px] h-[44px] cursor-pointer rounded-[100px] border border-white flex justify-center items-center"
  >
    <Image
      alt="social_logo"
      src={Icon}
      height="24"
      width="24"
      loading="lazy"
      placeholder="blur"
      blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
    />
  </a>
);
const Footer = () => {
  const t = useTranslations();
  const footerLinks = useMemo<FooterLinksMap>(() => getFooterLinks(t), [t]);

  return (
    <div className="relative section-padding pt-[60px] pb-[40px] bg-accent text-white z-[1]">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/svgs/footer-bg.svg)",
          opacity: 0.9,
          zIndex: -1,
        }}
      ></div>
      <div className="grid grid-cols-1 md:grid-cols-3 xxl:grid-cols-4 xxxl:grid-cols-5 mb-[150px] md:mb-[244px] gap-[24px] mg:gap-[32px]">
        {Object.entries(footerLinks).map(([sectionTitle, links]) => (
          <div key={sectionTitle} className="w-full">
            <h3 className="text-[20px] leading-[28px] font-[FuturaLTBold] mb-8">
              {sectionTitle}
            </h3>
            <ul className="flex flex-col gap-5">
              {links.map(({ id, path, title, target }) => (
                <a
                  href={path}
                  key={id}
                  className="w-fit"
                  target={target}
                  rel={target === "_blank" ? "noopener noreferrer" : undefined}
                >
                  <li className="text-[14px] leading-[24px] md:text-base font-medium flex items-center gap-2 transition-all duration-200 ease-in-out hover:translate-x-1">
                    <FooterArrow />
                    <span>{title}</span>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        ))}
        <div className="w-full">
          <h3 className="text-[18px] leading-[8px] font-[FuturaLTBold] mb-6"></h3>
          <ul className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 w-fit">
            {socialLinks.map(({ id, link, Icon }) => (
              <RenderSocialLinks key={id} Icon={Icon} link={link} />
            ))}
          </ul>
        </div>
      </div>
      <div className="copyright w-full">
        <p className="text-[14px] leading-[24px] text-left">
          {t("Footer.copyright")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
