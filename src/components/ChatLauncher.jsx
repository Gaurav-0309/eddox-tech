"use client";

import React, { useState } from "react";
import ChatWidget from "./chatWidget";

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <ChatWidget onClose={() => setOpen(false)} />}

      <button
        className="chat-launcher"
        aria-label="Open chat"
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="22"
          height="22"
        >
          <path d="M2 3.75A2.75 2.75 0 014.75 1h14.5A2.75 2.75 0 0122 3.75v9.5A2.75 2.75 0 0119.25 16H7.5L2 21V3.75z" />
        </svg>
      </button>
    </>
  );
}
