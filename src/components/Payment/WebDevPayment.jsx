import React from "react";
import webdev from "/images/Group7.png";
import Tick from "/images/Tick.png";

export default function WebDevPayment() {
  return (
    <main className="flex flex-col pb-32 overflow-hidden max-md:pb-20">
      <section className="self-center pt-6 pr-4 pb-16 pl-6 mt-28 w-full max-w-[1000px] bg-black rounded-xl border border-solid border-fuchsia-700 border-opacity-30 max-md:pl-4 max-md:mt-10 max-md:max-w-full">
        
        {/* Header */}
        <div className="flex justify-between w-full gap-5 text-2xl max-md:flex-col">
          <h2 className="text-stone-300">Your Course</h2>
          <h2 className="text-white">Payment Details</h2>
        </div>

        <div className="mt-10 max-md:mt-8 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            
            {/* Left Section */}
            <div className="w-[60%] max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-8 max-md:max-w-full">

                {/* Course Card */}
                <section className="p-5 border border-solid rounded-2xl border-fuchsia-700 bg-neutral-900 bg-opacity-60">
                  <div className="flex gap-4 max-md:flex-col">
                    
                    {/* Course Image */}
                    <div className="w-1/2 max-md:w-full">
                      <div className="flex justify-center w-full p-1 border border-solid rounded-lg border-fuchsia-700 bg-stone-950">
                        <img
                          src={webdev}
                          alt="Course Preview"
                          className="object-contain w-full aspect-[1.68]"
                        />
                      </div>
                    </div>

                    {/* Course Details */}
                    <div className="w-1/2 max-md:w-full">
                      <div className="mt-4 max-md:mt-8">
                        <div className="flex flex-col text-lg text-white">
                          <h2>Web Dev Cohort</h2>
                          <p className="mt-5">₹5999</p>
                        </div>

                        {/* Coupon Section */}
                        <div className="w-full mt-6">
                          <div className="flex items-center w-full gap-3">
                            <input
                              type="text"
                              placeholder="Enter Coupon Code"
                              className="w-full px-2 py-3 text-black rounded-lg bg-zinc-300 bg-opacity-60"
                            />
                            <button className="px-5 py-3 text-white border border-solid rounded-lg border-fuchsia-600 bg-stone-950 whitespace-nowrap hover:bg-fuchsia-600">
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>

                {/* Payment Info */}
                <section className="mt-6">
                  <h3 className="mb-3 text-base text-white">Payment & Support Info</h3>
                  <div className="w-full px-6 py-8 rounded-2xl bg-stone-950">
                    <div className="flex gap-4 max-md:flex-col">
                      <div className="w-1/3 max-md:w-full">
                        <div className="flex items-center gap-4 text-sm text-white">
                          <img src={Tick} alt="Refund Policy" className="w-10" />
                          <p>3-Days<br />Refund Policy</p>
                        </div>
                      </div>
                      <div className="w-1/3 max-md:w-full">
                        <div className="flex items-center gap-4 text-sm text-white">
                          <img src={Tick} alt="Contact Icon" className="w-10" />
                          <p>Contact Us</p>
                        </div>
                      </div>
                      <div className="w-1/3 max-md:w-full">
                        <div className="flex items-center gap-4 text-sm text-white">
                          <img src={Tick} alt="Certificate Icon" className="w-10" />
                          <p>Get Course<br />Completion Certificate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Section */}
            <div className="w-[40%] max-md:w-full">
              <aside className="flex flex-col w-full pt-6 text-white rounded-2xl bg-stone-950">
                <div className="px-6">
                  <div className="flex justify-between text-lg">
                    <div>
                      <h3>(Base Amount)</h3>
                      <h3 className="mt-6">(Platform fees)</h3>
                    </div>
                    <div className="text-right">
                      <p>₹3529</p>
                      <p className="mt-8">₹2471</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm">(Server, Streaming, Database, Bandwidth, etc)</p>
                  <div className="flex justify-between mt-6">
                    <div>
                      <h3 className="text-lg">(GST @18%)</h3>
                      <p className="text-sm">to Govt. of India</p>
                    </div>
                    <p className="text-lg">₹1080</p>
                  </div>
                </div>
                <hr className="h-px mt-16 border border-fuchsia-700" />
                <div className="flex justify-between px-6 mt-4 text-lg">
                  <h3>Total Amount</h3>
                  <p>₹5999</p>
                </div>
                <button className="px-12 py-4 mt-4 text-lg rounded-lg bg-fuchsia-700 hover:bg-fuchsia-600">
                  Proceed to Checkout
                </button>
              </aside>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
