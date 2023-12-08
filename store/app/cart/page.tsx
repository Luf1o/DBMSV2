"use client";
import { CartData } from "@/constants/demoData.js";

type objProp = {
  name: string;
  amt: string;
  price: string;
  id: string;
};

const Card = ({ id, name, amt, price }: objProp) => {
  return (
    <div className="flex justify-between items-center w-[60vh] h-20 bg-neutral-600 text-white rounded-lg p-3 mx-5 my-2">
      <div>{name}</div>
      <div>{amt}</div>
      <div>{price}</div>
    </div>
  );
};

export default function Cart() {
  return (
    <div className="w-screen h-max bg-blue-200 m-0 p-0 ">
      <div className="ps-2 pe-2 p-0 m-0 flex h-20 justify-between items-center border-4 border-b-purple-800">
        <div className="flex gap-5">
          <h3>Total Items</h3>
          <div>5</div>
        </div>
        <div className="flex gap-5">
          <h3>Total Cost</h3>
          <div>3600</div>
        </div>
      </div>
      <div className="h-max min-h-[750px] w-full">
        <ul className="flex flex-wrap justify-center p-0 m-0 scroll-m-0 ">
          {CartData.map((props) => (
            <Card
              id={props.id}
              name={props.name}
              price={props.price}
              amt={props.amt}
            ></Card>
          ))}
        </ul>
      </div>
    </div>
  );
}
