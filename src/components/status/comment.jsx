import { IconHeart, IconMessageCircle } from "@tabler/icons-react";

function Comment() {
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
          <div className="grid grid-cols-12 space-x-6 text-xs">
            <div className="col-span-1 md:col-span-1">
              <img
                src="https://i.pravatar.cc/30"
                alt=""
                srcset=""
                className="rounded-full border border-gray-300"
              />
            </div>
            <div className="col-span-11 w-full">
              <form action="#" method="post">
                <textarea
                  name="comment1"
                  placeholder="Write a comment"
                  className="border-b border-gray-300 focus:outline-none resize-none"
                ></textarea>
                <button
                  type="button"
                  className="w-full flex items-center space-x-1"
                >
                  <IconHeart size={20} stroke={1} strokeLinejoin="miter" />
                  <span>1K</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
