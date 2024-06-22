

export const Footer = () => {
  return (
      <div className="flex flex-col gap-12 my-10 md:flex-row md:justify-between md:items-baseline">
      <ul className="flex gap-4 text-gray-500">
        <li>
          <a href="https://www.instagram.com">Instagram</a>
        </li>
        <li>
          <a href="https://www.facebook.com">facebook</a>
        </li>
        <li>
          <a href="https://www.x.com">X</a>
        </li>
      </ul>
      <div className="flex gap-2  ">
        <img src="./assets/Help-Avatar.svg" alt="help" className="h-16" />
        <div className="flex items-center">
          <a href="#" className="">
            We Are Hiring
          </a>
        </div>
      </div>
    </div>
  );
};
