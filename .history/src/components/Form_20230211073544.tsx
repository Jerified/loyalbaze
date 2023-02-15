import React from 'react'

const Form = () => {
  return (
    <>
      <main className="">
        <div className="text-center">
          <h1 className="font-semibold text-3xl ">Priority Access</h1>
          <p className="pt-4 text-sm max-w-[22rem] md:max-w-lg mx-auto">
            Get ready to revolutionize the way you interact with your customers
            and drive sales with Loyalbaze. Skip the waitlist and get exclusive
            priority access to LoyalBaze. Limited slots available. Please tell
            us a bit about your business and needs and of our consultants will
            be in touch Immediately!
          </p>
        </div>
        <form action="" className="pt-6">
          <p className="">Book a Consultation with us</p>
          <div className=" flex flex-col gap-4">
            <input
              type="text"
              className="bg-inherit border-2 w-full rounded-md py-1 px-2 pl-2 placeholder:text-[14px]"
              placeholder="Enter your Full name"
            />
            <input
              type="text"
              className="bg-inherit border-2 w-full rounded-md py-1 px-2 pl-2 placeholder:text-[14px]"
              placeholder="Enter your work email
            />
            <input
              type="text"
              className="bg-inherit border-2 w-full rounded-md py-1 px-2 pl-2 placeholder:text-[14px]"
              placeholder="Mobile number"
            />
            <input
              type="text"
              className="bg-inherit border-2 w-full rounded-md py-1 px-2 pl-2 placeholder:text-[14px]"
              placeholder="Company Name"
            />
            <input
              type="te"
              className="bg-inherit border-2 w-full rounded-md py-1 px-2 pl-2 placeholder:text-[14px]"
              placeholder="Enter your Full name"
            />
          </div>
        </form>
      </main>
    </>
  );
}

export default Form