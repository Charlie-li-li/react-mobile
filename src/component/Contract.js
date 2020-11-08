import React from "react";

function Contract() {
  const list = [
    {
      title: "BTC",
      subTitle: "/USDT",
      mount: "7859.98",
      percent: "+12.5%",
    },
    {
      title: "BTC",
      subTitle: "/USDT",
      mount: "7859.98",
      percent: "+12.5%",
    },
    {
      title: "BTC",
      subTitle: "/USDT",
      mount: "7859.98",
      percent: "+12.5%",
    }
  ];
  return (
    <div className="contract">
      <div className="headline">Contract</div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <div className="desc">
                <span className="title">{item.title}</span>
                <span className="subtitle">{item.subTitle}</span>
              </div>
              <div className="mount">{item.mount}</div>
              <div className="btn">{item.percent}</div>
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default Contract;
