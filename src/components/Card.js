import React from "react";

const Card = ({ data }) => {
  if (!data) return;
  const title = data?.data?.title;
  const score = data?.data?.score;
  const url = data?.data?.url;
  const selftext_html = data?.data?.selftext_html;

  function htmlDecode(input) {
    let e = document.createElement("div");
    e.innerHTML = input;
    return e.childNodes.length !== 0 ? e.childNodes[0].textContent : "";
  }

  const decoded = htmlDecode(selftext_html);

  return (
    <div className="bg-transparent border border-red-600 rounded-sm w-[75%] p-6 flex flex-col justify-start items-start gap-4   hover:shadow-sm hover:-translate-y-1 hover:transition-all">
      <h3 className="text-red-600 font-medium text-xl">{title}</h3>
      <p
        className="text-slate-200 text-base font-normal md md-p md-ul md-ol md-hr md-pre md-pre-code md-p-a hover:md-p-a"
        dangerouslySetInnerHTML={{ __html: decoded }}
      ></p>
      <p className="text-slate-200 font-medium text-lg">
        Score: <span>{score}</span>
      </p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="bg-red-600 px-3 py-1 text-slate-200 font-normal rounded-sm hover:bg-red-500 -mb-4 hover:transition-all"
      >
        Link
      </a>
      `
    </div>
  );
};

export default Card;
