"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const Page = () => {
  const { redirect } = useParams();

  const redirectTo = async () => {
    if (typeof redirect !== "string") {
      window.location.href = "/";
      return;
    }
    const params = redirect.replace(/%20/g, " ");
    const getData = await axios.post("/api/getShorten", { shortUrl: params });
    console.log(getData);

    if (getData.data.success) {
      window.location.href = getData.data.shorten.url;
      return;
    }
    window.location.href = "/";
    return;
  };

  useEffect(() => {
    redirectTo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className="min-h-[60vh]">{redirect}</div>;
};

export default Page;
