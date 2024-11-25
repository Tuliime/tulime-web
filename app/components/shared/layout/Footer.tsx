import { Button } from "../UI/Button";

export const Footer = () => {
  return (
    <footer className="flex flex-col px-20 py-10 mt-auto bg-[#495057]">
      <div className=" flex justify-between ">
        <div className=" text-gray-400 ">TULIIME</div>
        <div className="flex gap-8 text-gray-400">
          <div>
            <p>News</p>
            <p>Careers</p>
            <p>About Us</p>
            <p>Institutions</p>
          </div>
          <div>
            <p>Jobs</p>
            <p>Expertise</p>
            <p>Farm managers</p>
            <p>Agro products</p>
          </div>
          <div>
            <p>Contact</p>
            <p>Privacy</p>
            <p>Projects</p>
            <p>Adverts</p>
          </div>
          <div>
            <p>Chat</p>
            <p>Herbal medicine</p>
            <p>Veterinary Doctors</p>
            <p>Terms and conditions</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-gray-400">
          <p>Stay in the know</p>
          <p>Subscribe to our news letter</p>
          <div className=" flex  items-center gap-2">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 14 14"
            >
              <g fill="none">
                <g clip-path="url(#primeTwitter0)">
                  <path
                    fill="currentColor"
                    d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                  />
                </g>
                <defs>
                  <clipPath id="primeTwitter0">
                    <path fill="#fff" d="M0 0h14v14H0z" />
                  </clipPath>
                </defs>
              </g>
            </svg>
          </div>
        </div>
        <div></div>
        {/* <div className=" text-gray-100">TULIIME</div>
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
        </div> */}
      </div>
    </footer>
  );
};
