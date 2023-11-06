export default function Perks({ selected, onChange }) {
  function handleClick(e) {
    const { checked, name } = e.target;
    if (checked) onChange([...selected, name]);
    else onChange([...selected.filter((selectedName) => selectedName != name)]);
  }
  return (
    <>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="border rounded-md">
          <label className="flex gap-4 items-center p-2">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              onChange={handleClick}
              checked={selected.includes("AC")}
              name="AC"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="w-5 h-5 fill-gray-300"
              >
                <path d="M17 1v4.03l4.03-2.32 1 1.73L17 7.34v6.93l6-3.47V5h2v4.65l3.49-2.02 1 1.74L26 11.38l4.03 2.33-1 1.73-5.03-2.9L18 16l6 3.46 5.03-2.9 1 1.73L26 20.62l3.49 2.01-1 1.74L25 22.35V27h-2v-5.8l-6-3.47v6.93l5.03 2.9-1 1.73L17 26.97V31h-2v-4.03l-4.03 2.32-1-1.73 5.03-2.9v-6.93L9 21.2V27H7v-4.65l-3.49 2.02-1-1.74L6 20.62l-4.03-2.33 1-1.73L8 19.46 14 16l-6-3.46-5.03 2.9-1-1.73L6 11.38 2.51 9.37l1-1.74L7 9.65V5h2v5.8l6 3.47V7.34l-5.03-2.9 1-1.73L15 5.03V1z"></path>
              </svg>
            </span>
            <span className="text-xl">AC</span>
          </label>
        </div>
        <div className="border rounded-md">
          <label className="flex gap-4 items-center p-2">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              onChange={handleClick}
              checked={selected.includes("Fireplace")}
              name="Fireplace"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="w-5 h-5 fill-gray-300"
              >
                <path d="M31 6v2h-1v23h-6V13H8v18H2V8H1V6zm-15.37 9 .96.7c3.32 2.42 5.14 5.06 5.38 7.93l.02.28v.21l.01.14c0 3.18-2.7 5.74-6 5.74a5.9 5.9 0 0 1-5.99-5.39v-.21l-.01-.15a9.3 9.3 0 0 1 1.64-4.99l.22-.34.68-.98 1.24.79zM28 8H4v21h2V13a2 2 0 0 1 1.7-1.98l.15-.01L8 11h16a2 2 0 0 1 2 1.85V29h2zM16 25.36l-.1.09c-.61.65-.9 1.23-.9 1.72 0 .42.41.83 1 .83s1-.4 1-.83c0-.45-.24-.97-.76-1.56l-.15-.16zm.35-7.32-1.77 3.56-1.46-.93-.15.27a7.28 7.28 0 0 0-.94 2.75l-.02.29-.01.26v.12c.03.92.4 1.76 1.03 2.4.14-1.14.86-2.24 2.1-3.33l.23-.2.64-.53.64.53c1.38 1.16 2.19 2.32 2.33 3.53A3.6 3.6 0 0 0 20 24.49l.01-.22V24c-.1-1.86-1.12-3.7-3.13-5.5l-.27-.24zM31 2v2H1V2z"></path>
              </svg>
            </span>
            <span className="text-xl">Fireplace</span>
          </label>
        </div>
        <div className="border rounded-md">
          <label className="flex gap-4 items-center p-2">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              onChange={handleClick}
              checked={selected.includes("Ceiling Fan")}
              name="Ceiling Fan"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="w-5 h-5 fill-gray-300"
              >
                <path d="M20.33 3.08c1.5 2.24.96 5.55-1.38 9.9l-.12.2.18.18c.1.13.21.26.3.4l.23.38.14.02c.7.06 1.78-.11 2.87-.48.89-.3 1.78-.78 2.68-1.45l.66-.52a3 3 0 0 1 4.77 1.33l.12.44c.59 3.35.02 5.73-1.86 6.98-2.24 1.5-5.54.96-9.9-1.39a3 3 0 0 1-.27-.16l-.07.07-.39.3-.28.19V20c-.03.7.15 1.68.48 2.68.3.88.78 1.78 1.45 2.68l.26.33.26.33a3 3 0 0 1-.36 4.22C19 31 17.95 31 17 31h-.54l-1.39-.1c-1.24-.19-2.56-.65-3.36-1.84-1.5-2.25-.96-5.55 1.39-9.91.04-.09.1-.17.15-.25a4.12 4.12 0 0 1-.37-.4.82.82 0 0 0-.18-.23.5.5 0 0 0-.21-.11c-.7-.1-1.85.06-3.04.46-.88.3-1.78.78-2.68 1.45l-.66.52a3 3 0 0 1-4.77-1.33l-.12-.44c-.59-3.35-.02-5.73 1.86-6.98 2.24-1.5 5.55-.96 9.9 1.38l.1.05c.3-.3.55-.5.72-.61l.2-.13.03-.2c.06-.7-.11-1.78-.48-2.88a9.6 9.6 0 0 0-1.45-2.68l-.52-.66a3 3 0 0 1 1.33-4.77l.44-.12c3.35-.59 5.73-.02 6.98 1.86zm-5.31 16.8-.16.22c-2.04 3.77-2.5 6.45-1.49 7.85 1.13 1.55 4.63 1.55 5.44.77.38-.36.47-.89.2-1.31l-.37-.45a11.94 11.94 0 0 1-2.05-3.64 10.93 10.93 0 0 1-.59-3.03V20h-.14a4.01 4.01 0 0 1-.63-.07l-.21-.05zM4.09 13.52c-1.56 1.13-1.56 4.63-.78 5.44.36.38.9.46 1.32.19l.44-.36c1.2-.96 2.42-1.64 3.65-2.05 1.16-.4 2.33-.6 3.28-.6V16c0-.14 0-.28.02-.42l.08-.46-.16-.12c-3.78-2.03-6.46-2.5-7.85-1.48zm23.24-.36-.45.36c-1.2.96-2.41 1.64-3.64 2.05-1.15.38-2.3.6-3.24.6-.01.25-.05.5-.1.74l-.07.26.19.14c3.77 2.03 6.45 2.5 7.85 1.48 1.55-1.13 1.55-4.63.78-5.44-.36-.38-.9-.47-1.32-.19zM16 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13.2 3.39c-.37.36-.46.89-.18 1.31l.36.45c.95 1.2 1.64 2.42 2.05 3.64.37 1.14.59 2.27.59 3.2l.54.05.3.05.2.05.1-.13c2.04-3.77 2.5-6.45 1.49-7.84-1.13-1.56-4.63-1.56-5.44-.78z"></path>
              </svg>
            </span>
            <span className="text-xl">Ceiling Fan</span>
          </label>
        </div>
        <div className="border rounded-md">
          <label className="flex gap-4 items-center p-2">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              onChange={handleClick}
              checked={selected.includes("Kitchen")}
              name="Kitchen"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="w-5 h-5 fill-gray-300"
              >
                <path d="M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1zM2 1h1c4.47 0 6.93 6.37 7 18.5V21H4v10H2zm14 20c-1.6 0-3 1.75-3 4s1.4 4 3 4 3-1.75 3-4-1.4-4-3-4zM4 3.24V19h4l-.02-.96-.03-.95C7.67 9.16 6.24 4.62 4.22 3.36L4.1 3.3zm19 2.58v.49c.05 4.32 1.03 9.13 2 11.39V3.17a3 3 0 0 0-2 2.65zm4-2.65V17.7c.99-2.31 2-7.3 2-11.7a3 3 0 0 0-2-2.83z"></path>
              </svg>
            </span>
            <span className="text-xl">Kitchen</span>
          </label>
        </div>
        <div className="border rounded-md">
          <label className="flex gap-4 items-center p-2">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              onChange={handleClick}
              checked={selected.includes("Refrigerator")}
              name="Refrigerator"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="w-5 h-5 fill-gray-300"
              >
                <path d="M25 1a2 2 0 0 1 2 1.85V29a2 2 0 0 1-1.85 2H7a2 2 0 0 1-2-1.85V3a2 2 0 0 1 1.85-2H7zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </span>
            <span className="text-xl">Refrigerator</span>
          </label>
        </div>
        <div className="border rounded-md">
          <label className="flex gap-4 items-center p-2">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              onChange={handleClick}
              checked={selected.includes("Dishes and Silverware")}
              name="Dishes and Silverware"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="w-5 h-5 fill-gray-300"
              >
                <path d="M29 1v2a13 13 0 0 0-.3 26h.3v2a15 15 0 0 1-.31-30zM3 1h2v6h2V1h2v6h2V1h2v9a5 5 0 0 1-4 4.9V31H7V14.9a5.01 5.01 0 0 1-3.98-4.44L3 10.22V10zm26 6v2a7 7 0 0 0-.24 14H29v2a9 9 0 0 1-.27-18zM11 9H5v1.15a3 3 0 0 0 6 .03V10z"></path>
              </svg>
            </span>
            <span className="text-xl">Dishes and Silverware</span>
          </label>
        </div>
        <div className="border rounded-md">
          <label className="flex gap-4 items-center p-2">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              onChange={handleClick}
              checked={selected.includes("Private entrance")}
              name="Private entrance"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="w-5 h-5 fill-gray-300"
              >
                <path d="M25 1a2 2 0 0 1 2 1.85V29h2v2H3v-2h2V3a2 2 0 0 1 1.85-2H7zm0 2H7v26h18zm-3 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </span>
            <span className="text-xl">Private entrance</span>
          </label>
        </div>
        <div className="border rounded-md">
          <label className="flex gap-4 items-center p-2">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              onChange={handleClick}
              checked={selected.includes("Parking")}
              name="Parking"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="w-5 h-5 fill-gray-300"
              >
                <path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.7-5 .41 1.12A4.97 4.97 0 0 1 30 18v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2H8v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9c0-1.57.75-2.96 1.89-3.88L4.3 13H2v-2h3v.15L6.82 6.3A2 2 0 0 1 8.69 5h14.62c.83 0 1.58.52 1.87 1.3L27 11.15V11h3v2h-2.3zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v5h24zm-3-10h.56L23.3 7H8.69l-2.25 6H25zm-15 7h12v-2H10v2z"></path>
              </svg>
            </span>
            <span className="text-xl">Parking</span>
          </label>
        </div>
        <div className="border rounded-md">
          <label className="flex gap-4 items-center p-2">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              onChange={handleClick}
              checked={selected.includes("Building staff")}
              name="Building staff"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="w-5 h-5 fill-gray-300"
              >
                <path d="M21 3a2 2 0 0 1 2 1.85V12a7 7 0 0 1-2.23 5.12l-.2.18-.02.02.28.1A13.01 13.01 0 0 1 28.91 28H26.9a11 11 0 0 0-8.8-9.3l-.1-.02v-2.1a5 5 0 0 0 2.98-4.12l.02-.23V9H11v3a5 5 0 0 0 3 4.58v2.1a10.92 10.92 0 0 0-3 1.02V28H9v-6.99a11 11 0 0 0-3.9 7L3.1 28a13.02 13.02 0 0 1 7.8-10.46l.28-.11.28-.11-.23-.2a7 7 0 0 1-2.2-4.55l-.01-.3L9 12V5a2 2 0 0 1 1.85-2H11zm-3 23a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7-17H11v2h10z"></path>
              </svg>
            </span>
            <span className="text-xl">Building staff</span>
          </label>
        </div>
        <div className="border rounded-md">
          <label className="flex gap-4 items-center p-2">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              onChange={handleClick}
              checked={selected.includes("Self check-in")}
              name="Self check-in"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="w-5 h-5 fill-gray-300"
              >
                <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z"></path>
              </svg>
            </span>
            <span className="text-xl">Self check-in</span>
          </label>
        </div>
        <div className="border rounded-md">
          <label className="flex gap-4 items-center p-2">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              onChange={handleClick}
              checked={selected.includes("Wifi")}
              name="Wifi"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="w-5 h-5 fill-gray-300"
              >
                <path d="M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z"></path>
              </svg>
            </span>
            <span className="text-xl">Wifi</span>
          </label>
        </div>
        <div className="border rounded-md">
          <label className="flex gap-4 items-center p-2">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              onChange={handleClick}
              checked={selected.includes("Pets allowed")}
              name="Pets allowed"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="w-5 h-5 fill-gray-300"
              >
                <path d="M13.7 13.93a4 4 0 0 1 5.28.6l.29.37 4.77 6.75a4 4 0 0 1 .6 3.34 4 4 0 0 1-4.5 2.91l-.4-.08-3.48-.93a1 1 0 0 0-.52 0l-3.47.93a4 4 0 0 1-2.94-.35l-.4-.25a4 4 0 0 1-1.2-5.2l.23-.37 4.77-6.75a4 4 0 0 1 .96-.97zm3.75 1.9a2 2 0 0 0-2.98.08l-.1.14-4.84 6.86a2 2 0 0 0 2.05 3.02l.17-.04 4-1.07a1 1 0 0 1 .5 0l3.97 1.06.15.04a2 2 0 0 0 2.13-2.97l-4.95-7.01zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
              </svg>
            </span>
            <span className="text-xl">Pets allowed</span>
          </label>
        </div>
      </div>
    </>
  );
}
