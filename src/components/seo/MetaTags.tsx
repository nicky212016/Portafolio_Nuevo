import { memo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import i18next from "i18next";
import profile from "../../data/profile.json";
import type { Profile } from "../../types";
import { tData } from "../../utils/tData";

const typedProfile = profile as unknown as Profile;

const MetaTags = () => {

  useEffect(() => {
    document.documentElement.lang = i18next.language;
  }, []);

  useEffect(() => {
    const onChange = (lng: string) => {
      document.documentElement.lang = lng;
    };
    i18next.on("languageChanged", onChange);
    return () => {
      i18next.off("languageChanged", onChange);
    };
  }, []);

  const title = `${typedProfile.name} — ${tData(typedProfile.title)}`;
  const description = tData(typedProfile.shortBio);
  const url = "https://portfolio-nicolas.vercel.app";
  const image = typedProfile.avatar;

  return (
    <Helmet>
      <html lang={i18next.language} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default memo(MetaTags);
