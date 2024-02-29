import { IconHeart, IconMessageCircle, IconSend } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

function Comment() {
  const textAreaRef = useRef(null);
  const [body, setBody] = useState("");

  const handleChange = (event) => {
    setBody(event.target.value);
  };

  useEffect(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, [body]);
  return (
    <div className="bg-white md:space-x-4 md:space-y-4 px-4 py-4 rounded-lg shadow-xl">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 md:col-span-1">
          <img
            src="https://i.pravatar.cc/30"
            alt=""
            srcset=""
            className="rounded-full border border-gray-300"
          />
        </div>
        <div className="col-span-10 md:col-span-11 space-y-2">
          {/* First comment */}
          <p className="text-sm font-semibold">Diki Dwi Hermawan</p>
          <p className="text-xs text-gray-600">5 Hours ago</p>
          <p className="text-xs tracking-tight antialiased">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            reprehenderit quae cupiditate, alias impedit placeat, molestias
            porro expedita atque voluptates nesciunt voluptate reiciendis fugit
            unde eos at. Aut, corporis quis.
          </p>
          <div className="flex items-center space-x-6">
            <div className="text-xs">
              <button
                type="button"
                className="w-full flex items-center space-x-1"
              >
                <IconHeart size={20} stroke={1} strokeLinejoin="miter" />
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
          <form action="#" method="post">
            <div className="flex space-x-4 text-xs items-start">
              <img
                src="https://i.pravatar.cc/30"
                className="items-start rounded-full lg:ml-0 border border-gray-100"
                alt="image"
              />
              <textarea
                ref={textAreaRef}
                value={body}
                onChange={handleChange}
                rows={1}
                placeholder="Write a comment"
                className="w-full py-2 overflow-hidden resize-none text-xs rounded-sm border-b border-gray-300 focus:outline-none focus:border-b focus:border-blue-300"
              />
              <button type="submit">
                <IconSend size={20} stroke={1} strokeLinejoin="miter" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comment;
