import React from "react";
import { NextSeo } from "next-seo";

const baseUrl = "https://www.genuineundead.io/";

const SEO = ({ title, description, imagePath, path }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={path ? `${baseUrl}/${path}` : baseUrl}
      openGraph={{
        url: path ? `${baseUrl}/${path}` : baseUrl,
        title,
        description:
          "24*24 pixel PFP you have never seen. 5995 classic, 3996 cyberpunk and 8 legendaries, over 200 hand drawn traits with a rich variety.",
        images: [
          {
            url: "/GU-BANNER.jpeg",
            width: 1500,
            height: 500,
            alt: "Og Image Alt",
            type: "image/jpeg",
          },
        ],
        site_name: "GenuineUndead",
      }}
      twitter={{
        handle: "@GenuineUndead",
        site: baseUrl,
        cardType: "summary_large_image",
      }}
      additionalLinkTags={[{ rel: "icon", href: "/images/GUicon.svg" }]}
      additionalMetaTags={[
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content:
            "pixel art, genuine, undead, rise and shine, nft, nft collection, best pixel art",
        },
      ]}
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
      }}
    />
  );
};

export default SEO;
