import { headers } from "next/headers";
import React from "react";
import parse from "html-react-parser";

// pages
import Home from "../page";

const AboutTelkom = async () => {
  try {
    const header = headers();

    const req = await fetch(
      "https://telkom-co-id-tciops-dev.apps.osh.telkom.co.id" +
        header.get("x-current-path")
    );

    const data = await req.json();

    const news =
      data.detailPage.content_attr[2].attr_value[0].content_val[0]
        .detail_content_val[0];

    return <Home news={news} />;
  } catch (err) {
    console.error(err);
  }
};

export default AboutTelkom;
