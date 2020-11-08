import React from 'react';
import Contract1 from "../img/contract1.png";
import Contract2 from "../img/contract2.png";
import Contract3 from "../img/contract3.png";
import Contract4 from "../img/contract4.png";

function Connect() {
    const list = [
      {
        text:'Contract',
        img:Contract1
      },
      {
        text:'Heroes',
        img:Contract2
      },
      {
        text:'Community',
        img:Contract3
      },
      {
        text:'Wallet',
        img:Contract4
      }
    ];
    return (
      <div className="connect">
        {list.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.img}/>
              <span> {item.text}</span>
            </div>
          );
        })}
        <section></section>
      </div>
    )
}

export default Connect;

