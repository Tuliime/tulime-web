import { Link } from "@remix-run/react";
import { ArrowIcon } from "./ArrowIcon";

export const SideBar = () => {
  return (
    <ul className="md:flex flex-col bg-white px-3 py-4 lg:gap-5 md:gap-2 rounded-lg transition-all shadow-lg  w-[28%]  sm:hidden">
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-800">
        <Link
          to="/agroproducts"
          className=" flex gap-1 justify-between items-center"
        >
          {/* <img src="/icons/maize.png" alt="" className=" w-[28px] h-[28px]" /> */}
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="m130.543 39.226l13.316 66.134a609 609 0 0 1 8.384-11.048l17.066-21.885l-.974 27.736c-.69 19.64-1.247 39.345-1.49 58.973c6.94-3.547 14.11-7.24 21.494-11.108c14.69-7.69 29.31-15.51 41.242-22.017c-3-6.667-6.218-13.2-9.916-19.5c-15.624-26.61-39.145-50.258-89.123-67.284zm300.03 3.724a53 53 0 0 0-4.28.22c4.59 6.668 9.32 12.88 14.29 18.708l12.968-12.967c-6.443-3.9-14.258-6.046-22.978-5.96zm-22.645 4.828a82 82 0 0 0-8.586 4.07c-1.83.996-3.664 1.98-5.495 2.973q1.17 1.872 2.348 3.7c4.43-2.915 8.834-5.77 13.195-8.533c-.49-.726-.975-1.473-1.462-2.21m58.35 13.86L452.874 75.04c5.875 5.755 12.12 11.16 18.86 16.336c1.55-11.45-.575-21.67-5.458-29.738zm-88.18 1.705c-6.794 3.656-13.59 7.3-20.38 10.94q2.28 3.855 4.588 7.52a1107 1107 0 0 1 19.073-13.343a302 302 0 0 1-3.28-5.117zm41.884 1.25a868 868 0 0 0-13.488 8.7a217 217 0 0 0 10.156 12.52l11.403-11.404a241 241 0 0 1-8.07-9.817zm-78.05 18.178a3632 3632 0 0 0-22.594 12.27c2.482 4.546 4.97 8.91 7.482 13.096a1307 1307 0 0 1 21.006-15.828a328 328 0 0 1-5.893-9.537zm49.808.426a1090 1090 0 0 0-19.33 13.54c4.776 6.542 9.727 12.63 14.96 18.357l16.766-16.768a241 241 0 0 1-12.396-15.13zm48.656 4.323l-11.29 11.288a205 205 0 0 0 10.673 9.46c3.202-4.148 6.437-8.332 9.593-12.415c-3.074-2.71-6.07-5.48-8.977-8.334zM303.61 103.73a1596 1596 0 0 0-21.975 12.503c3.508 6.854 7.005 13.322 10.537 19.414a1492 1492 0 0 1 20.443-16.435a365 365 0 0 1-9.004-15.48zm54.442 3.437a1320 1320 0 0 0-21.445 16.195c5.945 8.62 12.127 16.47 18.762 23.73l19.507-19.507c-5.9-6.388-11.475-13.17-16.824-20.418m105.27.074c-3.028 3.92-6.133 7.937-9.207 11.92a270 270 0 0 0 5.432 3.702c1.267-2.337 2.52-4.68 3.795-7.015a84 84 0 0 0 3.095-6.287a260 260 0 0 1-3.115-2.32m-46.695 4.048l-16.532 16.53a211 211 0 0 0 14.946 12.417c4.7-6.056 9.32-12.013 13.925-17.97a231 231 0 0 1-12.338-10.977zM266.2 125.565c-.83.906-1.07.793-1.485 1.09c-.558.4-1.1.752-1.735 1.153c-1.268.8-2.864 1.753-4.828 2.892a620 620 0 0 1-8.904 5.033a954 954 0 0 0-8.074 5.125c3.755 8.345 8.797 16.637 15.002 25.17a1641 1641 0 0 1 22.025-18.8c-4.073-6.815-8.057-14.03-12-21.663zm-116.65 2.803C90.93 211.753 34.103 335.944 40.22 432.138c5.696 6.334 12.39 12.947 19.215 17.95c7.61 5.582 15.156 8.76 19.907 8.76h.45l139.268 13.926c-68.43-92.97-72.94-220.298-69.51-344.406m293.692 4.87c-4.444 5.752-8.902 11.505-13.44 17.357a306 306 0 0 0 11.106 6.87c3.373-6.288 6.746-12.58 10.13-18.874a282 282 0 0 1-7.796-5.353m-120.662 1.107a1469 1469 0 0 0-20.822 16.8c6.816 10.3 13.91 19.52 21.61 27.948l19.51-19.508c-7.19-7.783-13.896-16.15-20.298-25.24m65.023 5.966l-19.508 19.51c6.02 5.5 12.446 10.686 19.374 15.687a5328 5328 0 0 0 16.686-21.283c-5.807-4.458-11.314-9.074-16.553-13.912zm-162.52 8.6a2998 2998 0 0 1-20.3 10.802c4.492 10.944 11.093 22.845 19.223 35.006c6.07-5.553 12.16-11.05 18.27-16.48c-7.103-9.59-12.857-19.13-17.192-29.327zm62.9 13.685a1635 1635 0 0 0-20.638 17.658c7.596 9.074 16.32 18.562 26.073 28.79l17.46-17.458c-8.167-8.842-15.714-18.43-22.894-28.99zm130.845 2.115a5340 5340 0 0 1-16.346 20.865c5.56 3.47 11.445 6.88 17.672 10.28a3633 3633 0 0 0 12.254-22.602c-4.7-2.8-9.226-5.642-13.58-8.543m-230.043 3.377a2206 2206 0 0 1-20.463 10.51c3.642 13.868 11.777 30.123 22.885 46.923a1725 1725 0 0 1 19.158-18.193c-9.026-13.173-16.406-26.366-21.58-39.24m166.818 4.225l-19.508 19.507c7.207 6.583 14.993 12.72 23.534 18.624a3476 3476 0 0 0 16.823-20.994c-7.41-5.446-14.336-11.123-20.85-17.138zM253.58 192.354a1697 1697 0 0 0-19.02 17.184c8.084 10.67 17.152 21.326 26.858 31.506l19.263-19.264c-10.142-10.567-19.194-20.173-27.1-29.426zm137.777 7.317a3438 3438 0 0 1-16.48 20.595c7.44 4.473 15.463 8.87 24.092 13.287a1600 1600 0 0 0 12.49-21.973c-7.073-3.895-13.765-7.85-20.103-11.91zm-67.754 4.642l-17.46 17.458a373 373 0 0 0 25.783 22.417a2584 2584 0 0 0 16.447-19.91c-8.91-6.3-17.12-12.9-24.77-19.965M167.437 221.79c.31 8.662.715 17.282 1.262 25.836q4.577-4.59 9.198-9.145a255 255 0 0 1-10.46-16.69zm53.653.22a1685 1685 0 0 0-19.352 18.423c8.29 11.04 17.64 22.08 27.68 32.61l19.263-19.263c-9.95-10.366-19.25-21.02-27.59-31.77zm142.412 12.268a2580 2580 0 0 1-17.106 20.73c.95.67 1.9 1.326 2.848 1.98c11.135-5.043 21.08-9.175 29.514-11.823c.806-.253 1.553-.48 2.33-.723c-6.137-3.337-12.01-6.713-17.586-10.164m-70.094.23l-19.264 19.262a371 371 0 0 0 28.62 24.633a2046 2046 0 0 0 17.456-20.314c-9.126-7.32-18.12-15.24-26.812-23.583zM188.6 253.257a1662 1662 0 0 0-18.024 18.104q.12 1.26.242 2.514c8.02 10.558 16.996 21.096 26.6 31.168l19.263-19.264c-10.078-10.5-19.56-21.436-28.08-32.52zm207.175 6.792c1.045.547-4.21-.04-11.627 2.29c-7.62 2.39-17.802 6.602-29.472 11.934c-23.342 10.665-52.773 25.796-82.73 40.12c-29.96 14.327-60.4 27.873-86.608 35.478c-.61.177-1.208.335-1.815.506c9.725 39.354 24.64 75.796 47.09 107.666c10.53-.556 19.844-2.732 28.217-6.078c18.345-7.332 32.617-20.42 44.62-35.205c12.005-14.786 21.526-31.097 30.673-44.343c4.573-6.623 9.025-12.513 14.183-17.188c5.16-4.675 11.558-8.383 19.036-8.383c16.213 0 30.66 10.89 45.064 26.074c9.18 9.68 18.34 21.64 27.37 34.79c2.69-28.988 8.2-55.247 7.468-77.426c-.482-14.58-3.403-27.167-10.916-38.607c-7.486-11.398-19.84-22.032-40.553-31.627zm-134.367 6.457l-19.264 19.263a378 378 0 0 0 16.637 14.94c1.8-.852 3.6-1.694 5.4-2.555a2354 2354 0 0 0 21.275-10.324a403 403 0 0 1-24.047-21.323zm-32 32l-19.264 19.263a378 378 0 0 0 3.27 3.075c8.875-3.585 18.068-7.574 27.39-11.795a420 420 0 0 1-11.396-10.543m-54.406 8.834a526 526 0 0 0 2.922 17.198l6.757-6.758a421 421 0 0 1-9.678-10.44z"
              />
            </svg>
            <span className="font-semibold">Agro Products</span>
          </div>
          <ArrowIcon />
        </Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-800">
        <Link
          to="/farm-inputs"
          className=" flex gap-3 justify-between items-center"
        >
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className=""
            >
              <path
                fill="currentColor"
                d="M18.5 7.47c-.74.73-.93 1.78-.58 2.68L15 13.07V11c0-.55-.45-1-1-1h-1.03c.03-.17.03-.33.03-.5C13 6.46 10.54 4 7.5 4A5.497 5.497 0 0 0 4 13.74V20c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-4.11l4.33-4.33c.9.35 1.95.17 2.67-.56zM4.05 10C4.03 9.83 4 9.67 4 9.5C4 7.57 5.57 6 7.5 6S11 7.57 11 9.5c0 .17-.03.33-.05.5z"
              />
            </svg>
            <span className="font-semibold">Farm Inputs</span>{" "}
          </div>
          <ArrowIcon />
        </Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-800">
        <Link
          to="/farm-inputs"
          className=" flex gap-1 justify-between items-center"
        >
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 48 48"
            >
              <g fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M24.767 17.736c.376.17.794.264 1.233.264h4v-6h2v-2h-3.341a6 6 0 1 0-3.892 7.736M23 8c-1.48 0-2.773.804-3.465 2h6.93A4 4 0 0 0 23 8m3 8a1 1 0 0 1-1-1v-3h3v4z"
                  clip-rule="evenodd"
                />
                <path d="M10 20a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h.054c.257 2.35 1.42 4.28 3.156 5.65c1.957 1.543 4.602 2.35 7.45 2.35c4.552 0 8.76-1.833 10.172-6.007a2.001 2.001 0 0 0 1.845-3.084l3.788-2.062l-.956-1.756l-4.856 2.643l-5.004-1.877h-.002A1 1 0 0 1 25 28.92V26a2 2 0 1 0-4 0v5a2 2 0 0 0 1.298 1.873l6.636 2.488C27.897 38.388 24.771 40 20.66 40c-2.487 0-4.671-.707-6.21-1.921c-1.313-1.035-2.184-2.456-2.398-4.218A4 4 0 0 0 15 30v-6a4 4 0 0 0-4-4h1.5a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2zm31.848 5.53l-1.696-1.06L36.696 30H42v-2h-1.696z" />
                <path d="M18 20a2 2 0 0 0-2 2v9.5a5.5 5.5 0 0 0 8.758 4.431l-3.162-1.186A4 4 0 0 1 19 31v-5a4 4 0 0 1 8 0v-3a3 3 0 0 0-3-3z" />
              </g>
            </svg>
            <span className="font-semibold">Farm Managers</span>
          </div>
          <ArrowIcon />
        </Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-800">
        <Link
          to="/veterinary-doctors"
          className=" flex gap-1 justify-between items-center"
        >
          <div className="flex gap-2">
            {/* <svg
              // fill="#000000"
              height="1.3em"
              width="1.3em"
              version="1.1"
              // id="Layer_1"
              // xmlns="http://www.w3.org/2000/svg"
              // xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512.001 512.001"
              // xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M511.971,494.906l-8.728-100.452c-2.986-34.378-27.095-63.239-59.99-71.818l-99.982-26.073 c-2.634-0.686-5.439,0.043-7.403,1.929l-2.45,2.351l-25.459-11.573l-2.377-14.535c9.64-6.145,18.499-14.321,25.893-23.667 c27.518-5.502,47.869-30.014,47.869-58.4V91.115c0-45.509-37.024-82.533-82.534-82.533h-81.622 c-27.43,0-52.997,13.578-68.393,36.322c-2.426,3.584-1.487,8.456,2.097,10.882c3.585,2.426,8.456,1.487,10.882-2.097 c12.475-18.431,33.191-29.434,55.413-29.434h81.622c36.868,0,66.861,29.993,66.861,66.86v40.956 c-3.013-1.767-6.508-2.797-10.246-2.797h-0.271v-4.106c0-2.449-1.145-4.757-3.095-6.239c-1.95-1.482-4.478-1.968-6.84-1.311 c-6.347,1.764-12.824,3.216-19.403,4.371c-12.295,2.157-24.955,3.253-37.837,3.253c-28.51,0-56.237-5.524-80.184-15.643 c-2.235-0.945-4.437-1.93-6.604-2.954c-0.149-0.07-0.3-0.139-0.448-0.21c-9.921-4.723-19.094-10.27-27.283-16.572 c-2.367-1.822-5.562-2.139-8.241-0.821c-2.679,1.319-4.376,4.046-4.376,7.031v33.201h-0.271c-3.739,0-7.233,1.031-10.246,2.797 V91.115c0-4.814,0.513-9.617,1.526-14.275c0.918-4.229-1.764-8.403-5.993-9.322c-4.228-0.919-8.403,1.765-9.322,5.993 c-1.25,5.75-1.883,11.672-1.883,17.603v101.553c0,28.296,20.278,52.797,47.699,58.367c7.422,9.433,16.335,17.686,26.035,23.878 l-2.348,14.356l-25.459,11.573l-2.45-2.351c-1.964-1.885-4.768-2.615-7.403-1.929l-99.982,26.073 c-32.895,8.578-57.003,37.44-59.99,71.818L0.029,494.903c-0.19,2.188,0.547,4.355,2.031,5.975c1.484,1.619,3.58,2.54,5.776,2.54 H95.85c0.004,0,0.007,0.001,0.011,0.001c0.003,0,0.007-0.001,0.01-0.001h320.256c0.004,0,0.007,0.001,0.01,0.001 c0.004,0,0.007-0.001,0.011-0.001h88.014c2.196,0,4.291-0.922,5.776-2.54C511.424,499.261,512.162,497.092,511.971,494.906z M353.156,144.946h0.271c2.576,0,4.672,2.096,4.672,4.672v18.675c0,2.576-2.096,4.672-4.672,4.672h-0.271V144.946z M347.878,222.311c0.099-0.264,0.196-0.528,0.293-0.792c0.265-0.728,0.523-1.458,0.769-2.188c0.237-0.702,0.464-1.404,0.681-2.105 c0.111-0.358,0.22-0.716,0.326-1.074c0.284-0.962,0.552-1.924,0.799-2.885c0.054-0.212,0.106-0.425,0.159-0.637 c0.547-2.197,0.997-4.387,1.346-6.565c0.021-0.13,0.044-0.26,0.064-0.39c0.166-1.07,0.305-2.136,0.421-3.198 c0.019-0.173,0.038-0.346,0.055-0.519c0.109-1.058,0.195-2.114,0.255-3.164c0.008-0.145,0.013-0.289,0.02-0.434 c0.054-1.098,0.09-2.192,0.09-3.278v-6.441h0.271c3.739,0,7.233-1.031,10.246-2.798v6.825h0c0,14.44-7.144,27.523-18.237,35.575 C346.32,226.281,347.133,224.302,347.878,222.311z M153.903,149.618c0-2.576,2.096-4.672,4.672-4.672h0.271v28.019h-0.271 c-2.576,0-4.672-2.096-4.672-4.672V149.618z M148.329,192.668v-6.828c3.013,1.767,6.508,2.798,10.246,2.798h0.271v6.637 c0,1.086,0.034,2.18,0.09,3.278c0.007,0.137,0.011,0.274,0.019,0.411c0.06,1.053,0.146,2.112,0.255,3.174 c0.017,0.161,0.033,0.323,0.051,0.484c0.117,1.069,0.257,2.142,0.424,3.219c0.018,0.116,0.039,0.233,0.056,0.349 c0.354,2.222,0.814,4.46,1.375,6.704c0.034,0.137,0.066,0.274,0.101,0.412c0.26,1.017,0.543,2.034,0.844,3.052 c0.08,0.273,0.163,0.546,0.247,0.819c0.282,0.921,0.577,1.841,0.892,2.762c0.148,0.436,0.307,0.868,0.463,1.303 c0.167,0.464,0.339,0.928,0.514,1.391c0.696,1.851,1.448,3.691,2.266,5.517C155.423,220.085,148.329,207.039,148.329,192.668z M177.439,212.904c-0.04-0.126-0.079-0.253-0.119-0.379c-0.235-0.758-0.45-1.514-0.656-2.272 c-0.076-0.282-0.155-0.564-0.227-0.845c-0.159-0.613-0.302-1.225-0.442-1.837c-0.087-0.381-0.177-0.764-0.256-1.145 c-0.111-0.528-0.207-1.053-0.302-1.58c-0.079-0.434-0.162-0.869-0.23-1.301c-0.08-0.501-0.143-0.999-0.209-1.498 c-0.057-0.435-0.121-0.871-0.168-1.303c-0.061-0.555-0.1-1.107-0.142-1.657c-0.028-0.364-0.067-0.731-0.087-1.093 c-0.051-0.911-0.079-1.819-0.079-2.72V180.8v-43.692v-26.087c30.662,19.122,70.4,29.89,111.462,29.89 c13.531,0,26.845-1.135,39.801-3.362c3.934-0.676,7.839-1.445,11.702-2.325v1.883v43.692v14.277c0,0.905-0.029,1.816-0.08,2.731 c-0.021,0.368-0.06,0.742-0.089,1.113c-0.043,0.549-0.081,1.096-0.142,1.647c-0.048,0.444-0.114,0.892-0.173,1.34 c-0.065,0.488-0.126,0.976-0.205,1.466c-0.072,0.45-0.158,0.905-0.241,1.357c-0.093,0.506-0.185,1.011-0.291,1.519 c-0.086,0.409-0.182,0.819-0.276,1.229c-0.134,0.58-0.27,1.16-0.42,1.741c-0.083,0.319-0.171,0.639-0.258,0.959 c-0.194,0.709-0.397,1.419-0.617,2.128c-0.055,0.18-0.113,0.36-0.17,0.54c-6.511,20.502-23,40.884-41.631,51.159 c-0.184,0.101-0.369,0.197-0.553,0.297c-0.596,0.322-1.194,0.63-1.794,0.93c-0.262,0.132-0.525,0.265-0.787,0.393 c-0.707,0.343-1.418,0.668-2.131,0.98c-0.287,0.125-0.575,0.245-0.861,0.365c-0.57,0.239-1.14,0.468-1.712,0.686 c-0.223,0.085-0.446,0.176-0.668,0.257c-0.763,0.28-1.528,0.539-2.294,0.782c-0.207,0.066-0.413,0.128-0.619,0.19 c-0.809,0.246-1.619,0.478-2.428,0.679l-0.976,0.242c-9.525,2.365-16.268,3.733-22.542,3.733c-3.966,0-8.015-0.527-12.906-1.529 c-0.489-0.1-0.986-0.205-1.493-0.315c-2.533-0.549-5.295-1.214-8.383-1.992c-0.81-0.204-1.619-0.439-2.426-0.686 c-0.198-0.061-0.395-0.121-0.594-0.185c-0.767-0.246-1.533-0.508-2.297-0.791c-0.208-0.077-0.417-0.162-0.625-0.242 c-0.604-0.232-1.208-0.476-1.81-0.731c-0.242-0.102-0.484-0.203-0.726-0.308c-0.743-0.327-1.484-0.67-2.221-1.03 c-0.208-0.101-0.416-0.208-0.624-0.311c-0.726-0.364-1.451-0.739-2.171-1.134c-0.058-0.032-0.118-0.063-0.177-0.095 C200.431,253.899,183.922,233.435,177.439,212.904z M214.341,301.803c2.383-1.083,4.068-3.286,4.491-5.869l2.215-13.543 c0.122,0.047,0.243,0.089,0.366,0.135c0.403,0.153,0.807,0.304,1.212,0.448c0.874,0.315,1.747,0.611,2.618,0.886 c0.215,0.068,0.432,0.131,0.648,0.196c1.011,0.307,2.021,0.597,3.027,0.849c10.84,2.729,18.669,4.309,26.608,4.309 c7.877,0,15.615-1.538,26.322-4.196l0.975-0.242c1.003-0.249,2.009-0.534,3.018-0.837c0.238-0.071,0.476-0.141,0.715-0.215 c0.869-0.272,1.741-0.563,2.612-0.875c0.442-0.157,0.883-0.323,1.323-0.489c0.144-0.055,0.288-0.104,0.434-0.16l2.245,13.733 c0.423,2.584,2.108,4.786,4.491,5.869l23.585,10.721l-65.245,62.609l-65.245-62.609L214.341,301.803z M141.822,376.101 c5.987,0,10.859,5.022,10.859,11.195s-4.871,11.195-10.859,11.195s-10.858-5.023-10.858-11.195S135.834,376.101,141.822,376.101z M423.321,487.747l-6.108-68.852c-0.382-4.311-4.183-7.496-8.499-7.114c-4.31,0.382-7.496,4.188-7.114,8.499l5.986,67.466h-303.17 l2.422-27.302c0.382-4.311-2.802-8.116-7.114-8.498c-4.303-0.38-8.116,2.802-8.498,7.114l-2.545,28.686H16.385l7.988-91.937 c2.415-27.788,21.837-51.099,48.33-58.009l61.282-15.98v39.805c-10.817,3.393-18.695,13.617-18.695,25.671 c0,14.815,11.902,26.868,26.532,26.868c14.629,0,26.533-12.054,26.533-26.868c0-12.054-7.879-22.278-18.696-25.671v-43.892 l18.784-4.898l79.721,76.501v50.673c0,4.328,3.509,7.837,7.837,7.837c4.328,0,7.837-3.509,7.837-7.837v-50.673l79.721-76.501 l10.122,2.639v46.971c-15.566,0.659-28.03,13.689-28.03,29.618v68.058c0,2.833,1.529,5.445,3.999,6.833l14.668,8.24 c1.214,0.682,2.531,1.006,3.832,1.006c2.74,0,5.401-1.44,6.839-4c2.12-3.773,0.779-8.551-2.994-10.67l-10.669-5.995v-63.472 c0-7.707,6.097-13.977,13.592-13.977h13.202c7.495,0,13.592,6.27,13.592,13.977v63.472l-10.668,5.995 c-3.773,2.12-5.114,6.897-2.994,10.67c2.119,3.773,6.897,5.114,10.67,2.994l14.667-8.24c2.47-1.388,3.999-4,3.999-6.833v-68.058 c0-15.929-12.464-28.96-28.03-29.618v-42.883l69.945,18.24c26.493,6.909,45.915,30.221,48.33,58.009l7.988,91.937H423.321z"></path>{" "}
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M103.289,411.782c-4.309-0.38-8.117,2.802-8.499,7.114l-1.284,14.478c-0.382,4.311,2.802,8.117,7.114,8.499 c0.236,0.021,0.469,0.031,0.702,0.031c4.014,0,7.435-3.07,7.797-7.144l1.284-14.478 C110.785,415.97,107.599,412.164,103.289,411.782z"></path>{" "}
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M205.412,147.978c-4.328,0-7.837,3.509-7.837,7.837v6.28c0,4.328,3.509,7.837,7.837,7.837 c4.328,0,7.837-3.509,7.837-7.837v-6.28C213.248,151.487,209.74,147.978,205.412,147.978z"></path>{" "}
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M306.591,147.978c-4.328,0-7.837,3.509-7.837,7.837v6.28c0,4.329,3.509,7.837,7.837,7.837s7.837-3.509,7.837-7.837v-6.28 C314.427,151.487,310.919,147.978,306.591,147.978z"></path>{" "}
                  </g>
                </g>
              </g>
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 50 50"
            >
              <path
                fill="currentColor"
                d="M18.48 18.875c2.33-.396 4.058-2.518 4.321-5.053c.267-2.578.869-12.938-3.02-12.279c-10.088 1.711-9.38 18.702-1.301 17.332m13.273 0c8.077 1.37 8.785-15.621-1.303-17.333c-3.888-.659-3.287 9.701-3.021 12.279c.264 2.536 1.994 4.658 4.324 5.054M14.336 26.88c0-1.348-.481-2.57-1.256-3.459c-1.275-1.666-5.328-5.035-6.323-4.172c-2.077 1.806-2.01 6.251-.759 9.481c.643 1.796 2.196 3.059 4.011 3.059c2.389 0 4.327-2.198 4.327-4.909m29.137-7.631c-.993-.863-5.046 2.506-6.321 4.172c-.775.889-1.257 2.111-1.257 3.459c0 2.711 1.94 4.909 4.327 4.909c1.816 0 3.37-1.263 4.013-3.059c1.248-3.23 1.317-7.675-.762-9.481m-8.136 15.277c-3.676-1.833-3.562-5.363-4.398-8.584c-.665-2.569-3.02-4.469-5.823-4.469a6.01 6.01 0 0 0-5.779 4.312c-.895 3.082-.356 6.67-4.363 8.717c-3.255 1.061-4.573 2.609-4.573 6.27c0 2.974 2.553 6.158 5.848 6.554c3.676.554 6.544-.17 8.867-1.494c2.323 1.324 5.189 2.047 8.871 1.494c3.293-.396 5.847-3.568 5.847-6.554c-.001-3.741-1.235-5.135-4.497-6.246M31 39h-3.811l.005 4h-4.156l.006-4H19v-4h4.045l-.006-4h4.156l-.005 4H31z"
              />
            </svg>
            <span className="font-semibold">Veterinary Doctors</span>
          </div>
          <ArrowIcon />
        </Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-800">
        <Link
          to="/institutions"
          className=" flex gap-1 justify-between items-center"
        >
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M247.759 14.358L16 125.946V184h480v-58.362ZM464 152H48v-5.946l200.241-96.412L464 146.362ZM16 496h480V392H16Zm32-72h416v40H48Zm24-216h32v160H72zm336 0h32v160h-32zm-224 0h32v160h-32zm112 0h32v160h-32z"
              />
            </svg>
            <span className="font-semibold">Institutions</span>
          </div>
          <ArrowIcon />
        </Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-800">
        <Link
          to="/institutions"
          className=" flex gap-1 justify-between items-center"
        >
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M16 10a6 6 0 0 1-6 6a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6M7.55 8.94a10 10 0 0 1 1.33-3.81a5 5 0 0 0-3.86 4.45H7.5c0-.22.03-.43.05-.64m1 .12a8 8 0 0 0-.05.52h3.06a8 8 0 0 0-.05-.52a9.1 9.1 0 0 0-1.48-3.89a9.1 9.1 0 0 0-1.48 3.9Zm4.01.52h2.42a5 5 0 0 0-3.79-4.44a10 10 0 0 1 1.37 4.44m-7.53 1a5 5 0 0 0 3.87 4.3a9.4 9.4 0 0 1-1.4-4.3zm5 4.21c1-1.47 1.43-2.9 1.52-4.21H8.52a8.53 8.53 0 0 0 1.52 4.21zm1.14.07a5 5 0 0 0 3.8-4.28h-2.41a9.35 9.35 0 0 1-1.39 4.28M3.07 6a7.97 7.97 0 0 0 0 8h1.18A6.96 6.96 0 0 1 3 10c0-1.49.46-2.87 1.25-4Zm12.68 0h1.18a7.97 7.97 0 0 1 0 8h-1.18A6.96 6.96 0 0 0 17 10c0-1.49-.46-2.87-1.25-4m2.74 7h1.05a9.9 9.9 0 0 0 0-6h-1.05a9.04 9.04 0 0 1 0 6M.46 13h1.05a9.04 9.04 0 0 1 0-6H.46a9.9 9.9 0 0 0 0 6"
              />
            </svg>
            <span className="font-semibold">News</span>
          </div>
          <ArrowIcon />
        </Link>
      </li>
      {/* <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-800">
        <Link to="/herbal-medicine">Herbal medicine</Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-800">
        <Link to="/jobs">Jobs</Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-800">
        <Link to="/chat">Chat</Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-800">
        <Link to="/about">About</Link>
      </li> */}
    </ul>
  );
};
