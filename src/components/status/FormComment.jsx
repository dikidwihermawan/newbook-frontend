import { IconSend2 } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

export const FormComment = () => {
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
          <IconSend2 size={20} stroke={1} strokeLinejoin="miter" />
        </button>
      </div>
    </form>
  );
};
