import React from "react";

const Form = () => {
  return (
    <>
      <main className="lg:grid grid-cols-2 gap-5 items-center">
        <div className="text-center lg:text-start">
          <h1 className="font-semibold text-3xl ">Priority Access</h1>
          <p className="pt-4 text-sm max-w-[22rem] md:max-w-lg mx-auto">
            Get ready to revolutionize the way you interact with your customers
            and drive sales with Loyalbaze. Skip the waitlist and get exclusive
            priority access to LoyalBaze. Limited slots available. Please tell
            us a bit about your business and needs and of our consultants will
            be in touch Immediately!
          </p>
        </div>
        <form action="" className="py-6 bg-[#1D2939] mt-8 rounded-md">
          <p className="pl-7 pb-4">Book a Consultation with us</p>
          <div className=" flex flex-col gap-4 w-[80%] md:w-[60%] lg:w-[100%] mx-auto lg:px-6">
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
              className=" bg-inherit border-2 w-full rounded-md py-1 px-2 pl-2 placeholder:text-[14px] caret-[linear-gradient(112.92deg,_#5404FF_18.35%,rgba(189,_59,_210,_0.94)_71.49%)] outline-none"
            >
              <option
                value="Select Country"
                className="placeholder:text-[14px] text-[14px]"
              >
                Select Country
              </option>
            </select>
            <textarea name="" id="" cols="30" rows="10" placeholder='Drop a message...' className="input bg-inheri"/>
          </div>
        </form>
      </main>
    </>
  );
};

export default Form;
