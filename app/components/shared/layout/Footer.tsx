import { Button } from "../UI/Button";

export const Footer = () => {
  return (
    <footer className="flex flex-col px-20 py-10 mt-auto bg-[#495057]">
      <div className=" flex justify-between ">
        <div className=" text-gray-100">TULIIME</div>
        <div>
          <div>
            <p className="text-gray-100">NEW TO TULIIME?</p>
            <p className=" opacity-50 text-sm text-gray-100">
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
            <form className="flex gap-2 mt-2">
              <input
                type="email"
                placeholder="Email"
                className=" border-solid border-[1px] border-gray-300 px-3 rounded-sm py-1"
              />
              <Button variant="secondary">Subscribe</Button>
            </form>
          </div>
          <div></div>
        </div>
        <div>
          <p className=" text-gray-100">DOWNLOAD TULIIME APP FREE</p>
        </div>
      </div>
    </footer>
  );
};
