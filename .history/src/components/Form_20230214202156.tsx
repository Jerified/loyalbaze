import React from "react";

const Form = () => {
  return (
    <>
      <main className="lg:grid grid-cols-2 gap-8 items-center max-w-4xl mx-auto px-8 pt-6">
        <div className="text-center lg:text-start lg:place-items-center relative">
          <div className="lg:flex justify-start">
            <div className="grid place-items-center">
              <h1 className="font-semibold text-3xl tracking-wider">
                Priority Access
              </h1>
              <div className="">
                <svg
                  width="130"
                  height="70"
                  viewBox="0 0 176 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 4.8585C26.7327 3.78401 160.807 1.27686 171.613 4.8585C185.121 9.33556 39.9697 17.9315 32.6758 21.155C26.8406 23.7338 146.678 29.5718 153.702 30.2882C160.726 31.0045 70.2263 42.3583 71.3069 67"
                    stroke="#4A3AFF"
                    stroke-width="5.55173"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <p className="pt-4 text-sm max-w-[22rem] md:max-w-lg lg:max-w-[24rem] mx-auto lg:m-0">
            Get ready to revolutionize the way you interact with your customers
            and drive sales with Loyalbaze. Skip the waitlist and get exclusive
            priority access to LoyalBaze. Limited slots available. Please tell
            us a bit about your business and needs and of our consultants will
            be in touch Immediately!
          </p>
          <div className="absolute right-10">
            <svg
              width="40"
              height="60"
              viewBox="0 0 46 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0364 1.47205C22.3075 0.495278 23.6925 0.495274 23.9636 1.47205L29.3625 20.9258C29.4386 21.2002 29.6282 21.4291 29.8836 21.5551L45.1824 29.1032C45.9257 29.47 45.9257 30.53 45.1823 30.8968L29.8836 38.4449C29.6282 38.5709 29.4386 38.7998 29.3625 39.0742L23.9636 58.5279C23.6925 59.5047 22.3075 59.5047 22.0364 58.528L16.6375 39.0742C16.5614 38.7998 16.3718 38.5709 16.1164 38.4449L0.817651 30.8968C0.0742599 30.53 0.0742621 29.47 0.817654 29.1032L16.1164 21.5551C16.3718 21.4291 16.5614 21.2002 16.6375 20.9258L22.0364 1.47205Z"
                fill="#F4B41A"
              />
            </svg>
          </div>
        </div>
        <div className="relative">
          <div className="lg:absolute right-10 hidden lg:block">
            <svg
              width="41"
              height="50"
              viewBox="0 0 41 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 2.25C19.25 11.0833 14.2 28.75 2 28.75"
                stroke="#175CE1"
                stroke-width="3.75"
                stroke-linecap="round"
              />
              <path
                d="M20.25 48C21.25 38.3333 26.3 19 38.5 19"
                stroke="#175CE1"
                stroke-width="3.75"
                stroke-linecap="round"
              />
              <path
                d="M20.25 2C21.25 7.66667 26.3 19 38.5 19"
                stroke="#175CE1"
                stroke-width="3.75"
                stroke-linecap="round"
              />
              <path
                d="M20.25 48C19.25 41.6667 14.2 29 2 29"
                stroke="#175CE1"
                stroke-width="3.75"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="lg:absolute -left-10 top-10 hidden lg:block">
            <svg
              width="41"
              height="50"
              viewBox="0 0 41 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 2.25C19.25 11.0833 14.2 28.75 2 28.75"
                stroke="#175CE1"
                stroke-width="3.75"
                stroke-linecap="round"
              />
              <path
                d="M20.25 48C21.25 38.3333 26.3 19 38.5 19"
                stroke="#175CE1"
                stroke-width="3.75"
                stroke-linecap="round"
              />
              <path
                d="M20.25 2C21.25 7.66667 26.3 19 38.5 19"
                stroke="#175CE1"
                stroke-width="3.75"
                stroke-linecap="round"
              />
              <path
                d="M20.25 48C19.25 41.6667 14.2 29 2 29"
                stroke="#175CE1"
                stroke-width="3.75"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <form action="" className="py-8 bg-[#1D2939] my-16 rounded-md">
            <div className=" flex flex-col gap-4 mx-auto px-6 lg:px-8">
              <p className="">Book a Consultation with us</p>
              <input
                type="text"
                className="input"
                placeholder="Enter your Full name"
              />
              <input
                type="email"
                className="input"
                placeholder="Enter your work email"
              />
              <input type="tel" className="input" placeholder="Mobile number" />
              <input type="text" className="input" placeholder="Company Name" />
              <select
                name="Select Country"
                id=""
                className=" bg-inherit border-2 w-full rounded-md py-2 px-2 pl-2 placeholder:text-[14px] caret-[#A75FD2] outline-none text-[14px]"
              >
                <option
                  value="Select Country"
                  className="placeholder:text-[14px] text-[14px]"
                >
                  Select Country
                </option>
              </select>
              <textarea
                name=""
                id=""
                cols="0"
                rows="10"
                placeholder="Drop a message..."
                className=" bg-inherit border-2 w-full rounded-md py-1 px-2 pl-2 placeholder:text-[14px] caret-[linear-gradient(112.92deg,_#5404FF_18.35%,rgba(189,_59,_210,_0.94)_71.49%)] outline-none resize-non placeholder:text-white"
              />
              <button className=" px-3 py-1 rounded-full bg-[linear-gradient(112.92deg,_#5404FF_18.35%,rgba(189,_59,_210,_0.94)_71.49%)] text-sm">
                Send Request
              </button>
            </div>
          </form>
          <div className="lg:absolute right-0 bottom-3 hidden lg:block">
            <svg
              width="46"
              height="60"
              viewBox="0 0 46 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0364 1.47205C22.3075 0.495278 23.6925 0.495274 23.9636 1.47205L29.3625 20.9258C29.4386 21.2002 29.6282 21.4291 29.8836 21.5551L45.1824 29.1032C45.9257 29.47 45.9257 30.53 45.1823 30.8968L29.8836 38.4449C29.6282 38.5709 29.4386 38.7998 29.3625 39.0742L23.9636 58.5279C23.6925 59.5047 22.3075 59.5047 22.0364 58.528L16.6375 39.0742C16.5614 38.7998 16.3718 38.5709 16.1164 38.4449L0.817651 30.8968C0.0742599 30.53 0.0742621 29.47 0.817654 29.1032L16.1164 21.5551C16.3718 21.4291 16.5614 21.2002 16.6375 20.9258L22.0364 1.47205Z"
                fill="#F4B41A"
              />
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};

export default Form;
