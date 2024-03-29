// @flow
import React, { useEffect } from "react";
import { IconHeart, IconMessageCircle } from "@tabler/icons-react";
import { FormComment } from "./FormComment";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatuses } from "../../store/statusSlice";

export const Statusbar = () => {
  const statuses = useSelector((state) => state.status.statuses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatuses());
    console.log(statuses);
  }, []);

  return (
    <div className="bg-white md:space-x-4 md:space-y-4 px-4 py-4 rounded-lg shadow-xl">
      <ul>
        {statuses.length != 0 ? (
          <li>
            {statuses.map(() => {
              return (
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <img
                      src="https://i.pravatar.cc/30"
                      alt=""
                      className="rounded-full border border-gray-300"
                    />
                  </div>
                  <div className="col-span-10 md:col-span-11 space-y-2">
                    {/* First comment */}
                    <p className="text-sm font-semibold">{statuses.name}</p>
                    <p className="text-xs text-gray-600">5 Hours ago</p>
                    <p className="text-xs tracking-tight antialiased">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore reprehenderit quae cupiditate, alias impedit
                      placeat, molestias porro expedita atque voluptates
                      nesciunt voluptate reiciendis fugit unde eos at. Aut,
                      corporis quis.
                    </p>
                    <div className="flex items-center space-x-6">
                      <div className="text-xs">
                        <button
                          type="button"
                          className="w-full flex items-center space-x-1"
                        >
                          <IconHeart
                            size={20}
                            stroke={1}
                            strokeLinejoin="miter"
                          />
                          <span>1K</span>
                        </button>
                      </div>
                      <div className="text-xs">
                        <button
                          type="button"
                          className="w-full flex items-center space-x-1"
                        >
                          <IconMessageCircle
                            size={20}
                            stroke={1}
                            strokeLinejoin="miter"
                          />
                          <span>988</span>
                        </button>
                      </div>
                    </div>
                    {/* End FirstComment */}
                    <FormComment />
                  </div>
                </div>
              );
            })}
          </li>
        ) : (
          <div className="text-center p-2">
            <span className="text-xs">No status updated</span>
          </div>
        )}
      </ul>
    </div>
  );
};
