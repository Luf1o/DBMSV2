import React from "react";
import {
  Appliances,
  Non_Perishable,
  Perishable,
  Stationary,
} from "@/constants/demoData";
import Link from "next/link";

/*
    <ul className="">
          <li className=" flex flex-wrap  gap-2 justify-start">
            {DemoData.map((obj) => (
              <div className="w-[160px] h-[180px] flex flex-col justify-center items-center rounded-lg border border-neutral-400  bg-green-200">
                <div>
                  <p>{obj.price}</p>
                </div>
                <div className="flex gap-2">
                  <p>{obj.name}</p>
                  <p>~</p>
                  <p>{obj.id}</p>
                </div>
              </div>
            ))}
          </li>
        </ul>
*/
function ProductCard() {
  type objProp = { id: string; name: string; val1: string; val2: string };
  return (
    <div className="flex h-max ml-8">
      <div className="flex flex-wrap w-full h-auto gap-2">
        <div id="perishable" hidden>
          <h1 className="text-blue-600 text-2xl pl-10">Perishable</h1>
          <div className="flex flex-wrap max-w-[80vw] gap-2 justify-between">
            {Perishable.map((props: objProp) => (
              <div className="border-2 border-blue-500 p-6 items-center px-4 w-[25vw] rounded-lg bg-sky-200 flex">
                <div className="flex-1">
                  <div>Item Name</div>
                  <div>{[props.name]}</div>
                </div>

                <div className="flex-1">
                  <p>Quantity</p>
                  <p>{props.val1}</p>
                </div>
                <div className="flex-1">
                  <p>Price</p>
                  <p>{props.val2}</p>
                </div>

                <div className="flex-1 ">
                  <div>Product Id</div>
                  <div>
                    <p>{props.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="nonPerishable" hidden>
          <h1 className="text-blue-600 text-2xl pl-10">Applicance</h1>
          <div className="flex flex-wrap max-w-[80vw] gap-2 justify-between">
            {Appliances.map((props: objProp) => (
              <div className="border-2 border-blue-500 p-6 items-center px-4 w-[25vw] rounded-lg bg-sky-200 flex">
                <div className="flex-1">
                  <div>Item Name</div>
                  <div>{[props.name]}</div>
                </div>
                <div className="flex-1">
                  <p>Quantity</p>
                  <p>{props.val1}</p>
                </div>
                <div className="flex-1">
                  <p>Price</p>
                  <p>{props.val2}</p>
                </div>
                <div className="flex-1 ">
                  <div>Product Id</div>
                  <div>
                    <p>{props.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="stationary" hidden>
          <h1 className="text-blue-600 text-2xl pl-10">Stationary</h1>
          <div className="flex flex-wrap max-w-[80vw] gap-2 justify-between">
            {Stationary.map((props: objProp) => (
              <div className="border-2 border-blue-500 p-6 items-center px-4 w-[25vw] rounded-lg bg-sky-200 flex">
                <div className="flex-1">
                  <div>Item Name</div>
                  <div>{[props.name]}</div>
                </div>
                <div className="flex-1">
                  <p>Quantity</p>
                  <p>{props.val1}</p>
                </div>
                <div className="flex-1">
                  <p>Price</p>
                  <p>{props.val2}</p>
                </div>
                <div className="flex-1 ">
                  <div>Product Id</div>
                  <div>
                    <p>{props.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-blue-600 text-2xl pl-10">Non Perishable</h1>
          <div className="flex flex-wrap max-w-[80vw] gap-2 justify-between">
            {Non_Perishable.map((props: objProp) => (
              <div className="border-2 border-blue-500 p-6 items-center px-4 w-[25vw] rounded-lg bg-sky-200 flex">
                <div className="flex-1">
                  <div>Item Name</div>
                  <div>{[props.name]}</div>
                </div>
                <div className="flex-1">
                  <p>Quantity</p>
                  <p>{props.val1}</p>
                </div>
                <div className="flex-1">
                  <p>Price</p>
                  <p>{props.val2}</p>
                </div>
                <div className="flex-1 ">
                  <div>Product Id</div>
                  <div>
                    <p>{props.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
