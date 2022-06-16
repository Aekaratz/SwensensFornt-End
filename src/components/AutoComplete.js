import React, { useState } from "react";
import { FindAddressService } from "../services/AddressService";

export default function AutoComplete({ retrunValue, id }) {
  const [address, setAddress] = useState([]);

  async function findAddress(keyword) {
    if (keyword !== "") {
      if (keyword.length >= 2) {
        let result = await FindAddressService(keyword);
        setAddress(result);
      } else {
        setAddress([]);
      }
    } else {
      setAddress([]);
    }
  }

  return (
    <div id={id} key={id}>
      <div className=" relative">
        <input
          type="text"
          id="findAddress"
          onChange={async (e) => {
            await findAddress(e.target.value);
          }}
        />
        {address.length !== 0 ? (
          <div className=" absolute z-10 h-64 overflow-y-auto w-full bg-white drop-shadow-lg  grid grid-cols-1 divide-y">
            {address.map((value) => (
              <div
                key={value.subdistrictID}
                onClick={() => {
                  retrunValue(value);
                  setAddress([]);
                  document.getElementById("findAddress").value = "";
                }}
                className="p-2 cursor-pointer hover:bg-gray-200"
              >
                {value.subdistrictName + " -> " + value.districtName + " -> " + value.provinceName + " -> " + value.zipCode}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
