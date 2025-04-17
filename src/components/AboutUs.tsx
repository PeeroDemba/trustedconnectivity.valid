function AboutUs() {
  return (
    <div className="bg-[#0a0d3a] relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-screen absolute top-0 left-0 object-cover"
      >
        <source src="/videos/video2.mp4"></source>
      </video>
      <div className="flex flex-col gap-20 lg:gap-40 px-[5vw] bg-[linear-gradient(to_bottom,#0a0d3aff,#0a0d3aaa_50%)] relative py-[5rem] lg:py-[10rem]">
        <div className=" text-white flex  justify-center items-center flex-col gap-10">
          <p className="text-[12px] font-semibold">ABOUT US</p>
          <p className="text-[32px] leading-[40px] lg:text-[36px] w-[90%] font-medium lg:w-[70%] text-center lg:leading-[42px]">
            We offer trusted connectivity solutions to device makers,
            connectivity providers and IoT players worldwide
          </p>
          <button
            type="button"
            className="text-[16px] py-[0.125rem] px-[0.125rem] rounded-[5rem] bg-[linear-gradient(to_right,_#f9453f,_#fa9b26_15%,_#2ee76f_30%,_#18e1f3_45%,_#3f0085_60%,_#18e1f3_75%,_#2ee76f_90%,_#fa9b26_105%,_#f9453f)]"
          >
            <p className="bg-[#0a0d3a] text-[14px] font-semibold rounded-[5rem] px-[3.5rem] py-[0.75rem]">
              More about us
            </p>
          </button>
        </div>
        <div className="text-white grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[62px] lg:text-[103px] font-medium lg:leading-[103px]">
              +900
            </p>
            <p className="text-[24px] leading-[28px] lg:text-[22px] font-['Courier_Prime',_monospace] text-center lg:leading-[24px] w-[90%] lg:w-4/5">
              Million connected devices use Valid's technology
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center lg:mt-20">
            <p className="text-[62px] lg:text-[103px] font-medium lg:leading-[103px]">
              +100
            </p>
            <p className="text-[24px] leading-[28px] lg:text-[22px] font-['Courier_Prime',_monospace] text-center lg:leading-[24px] w-[90%] lg:w-4/5">
              Remote SIM provisioning Platform implemented worldwide
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center lg:mt-40">
            <p className="text-[62px] lg:text-[103px] font-medium lg:leading-[103px]">
              Top5
            </p>
            <p className="text-[24px] leading-[28px] lg:text-[22px] font-['Courier_Prime',_monospace] text-center lg:leading-[24px] w-[90%] lg:w-4/5">
              SIM Manufacturer globally
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
