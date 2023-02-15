import React from "react";

const Form = () => {
  return (
    <>
      <main className="lg:f flex-row grid-cols- gap-8 items-center">
        <div className="text-center lg:text-start lg:place-items-center">
          <h1 className="font-semibold text-3xl ">Priority Access</h1>
          <div className="grid place-items-center pt-1">
            <svg
              width="176"
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
          <p className="pt-4 text-sm max-w-[22rem] md:max-w-lg lg:max-w-sm mx-auto lg:m-0">
            Get ready to revolutionize the way you interact with your customers
            and drive sales with Loyalbaze. Skip the waitlist and get exclusive
            priority access to LoyalBaze. Limited slots available. Please tell
            us a bit about your business and needs and of our consultants will
            be in touch Immediately!
          </p>
        </div>
        <div className="">
          <form action="" className="py-8 bg-[#1D2939] my-16 rounded-md">
            <div className=" flex flex-col gap-4 w-[80% md:w-[60%] lg:w-[100%] mx-auto px-6">
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
        </div>
      </main>
    </>
  );
};

export default Form;
