import { Clock } from "lucide-react";
import { useState } from "react";

function Insights() {
  const [data, setData] = useState(0);

  const blog = [
    {
      index: 0,
      read: 8,
      date: "24 February 2024",
      message: "Valid's Take on Multiple Enabled Profiles",
      images: "/images/mobile-people.jpeg",
    },
    {
      index: 1,
      read: 10,
      date: "22 October 2024",
      message: "Is This the End of the Line for SGP.02 (M2M)?",
      images: "/images/wireless-earbuds.jpeg",
    },
    {
      index: 2,
      read: 8,
      date: "24 September 2024",
      message: "Celebrating 50 Years of Smart Cards",
      images: "/images/template-mobile.jpeg",
    },
  ];

  return (
    <div className="bg-[#0a0d3a] px-2">
      <div className="h-[40rem] text-white flex justify-center items-center flex-col gap-10">
        <p className="text-[12px] font-semibold">LATEST INSIGHTS</p>
        <p className="text-[32px] leading-[40px] lg:text-[36px] w-[90%] font-medium lg:w-[70%] text-center lg:leading-[42px]">
          Stay informed on the latest trends and discover how the world around
          you is evolving.
        </p>
        <button
          type="button"
          className="text-[16px] py-[0.125rem] px-[0.125rem] rounded-[5rem] bg-[linear-gradient(to_right,_#f9453f,_#fa9b26_15%,_#2ee76f_30%,_#18e1f3_45%,_#3f0085_60%,_#18e1f3_75%,_#2ee76f_90%,_#fa9b26_105%,_#f9453f)]"
        >
          <p className="bg-[#0a0d3a] text-[14px] font-semibold rounded-[5rem] px-[3.5rem] py-[0.75rem]">
            All Insights
          </p>
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="text-[#01010c] h-[40rem] rounded-2xl relative">
          <div
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)",
            }}
            className="py-12 px-4 lg:p-12 h-[70%] bg-white rounded-tl-2xl rounded-bl-none relative z-20 rounded-br-none rounded-tr-2xl"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <p className="text-[12px] font-medium text-[#01010c]">
                Latest blog posts
              </p>
              <p className="text-[62px] lg:text-[105px] lg:-mt-2 text-[#131bff] leading-none">
                {blog[data].index + 1}/3
              </p>
            </div>
            <div className="flex items-center gap-4 my-8 text-[#01010c] text-[14px]">
              <p>{blog[data].date}</p>
              <div className="flex items-center gap-1">
                <Clock size="1rem" />
                <p>{blog[data].read} mins read</p>
              </div>
            </div>
            <div className="font-medium text-[22px] leading-[26px] lg:w-[15rem]">
              <p>{blog[data].message}</p>
            </div>
            <div className="flex gap-2 items-center mt-12">
              <button
                type="button"
                onClick={() => {
                  if (data >= 1) {
                    setData(data - 1);
                  }
                }}
                className="h-[36px] w-[36px] flex justify-center items-center rounded-full border border-black"
              >
                <svg
                  width="40%"
                  height="40%"
                  viewBox="0 0 31 12"
                  fill="none"
                  className="rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.5303 6.53032C30.8232 6.23743 30.8232 5.76256 30.5303 5.46966L25.7574 0.696695C25.4645 0.403801 24.9896 0.403801 24.6967 0.696695C24.4038 0.989588 24.4038 1.46446 24.6967 1.75736L28.9393 5.99999L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53032ZM1.31134e-07 6.75L30 6.74999L30 5.24999L-1.31134e-07 5.25L1.31134e-07 6.75Z"
                    fill="#01010C"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                onClick={() => {
                  if (data < 2) {
                    setData(data + 1);
                  }
                }}
                className="h-[36px] w-[36px] flex justify-center items-center rounded-full border border-black"
              >
                <svg
                  width="40%"
                  height="40%"
                  viewBox="0 0 31 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.5303 6.53032C30.8232 6.23743 30.8232 5.76256 30.5303 5.46966L25.7574 0.696695C25.4645 0.403801 24.9896 0.403801 24.6967 0.696695C24.4038 0.989588 24.4038 1.46446 24.6967 1.75736L28.9393 5.99999L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53032ZM1.31134e-07 6.75L30 6.74999L30 5.24999L-1.31134e-07 5.25L1.31134e-07 6.75Z"
                    fill="#01010C"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="h-[40%] w-full absolute left-0 bottom-0 rounded-bl-2xl rounded-br-2xl">
            <img
              src={blog[data].images}
              alt={blog[data].message}
              className="object-cover object-center h-full w-[110%] rounded-bl-2xl rounded-br-2xl"
            />
          </div>
        </div>
        <div className="bg-[url('/images/bg-events-7.jpeg')]  text-white h-[40rem] rounded-2xl bg-no-repeat bg-cover bg-center">
          <div className="flex flex-col justify-between py-12 px-4 lg:p-12 rounded-2xl h-full w-full bg-black/30">
            <div className="flex flex-col gap-8">
              <p className="text-[12px] font-medium">Next Event</p>
              <p className="text-[28px] leading-[28px] font-['Courier_Prime',_monospace] lg:text-[48px] w-min lg:leading-[52px]">
                MWC Barcelona 2025
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <p className="max-w-[320px] font-medium">
                MWC 2025 promises to be an unmissable event—where innovation,
                big ideas, and global change converge. It’s the only platform
                where you’ll hear from industry leaders, emerging voices, and
                visionary tech pioneers shaping the future of connectivity
              </p>
              <button
                type="button"
                className="px-8 h-[44px] text-[14px] flex items-center border font-semibold leading-none bg-white text-[#131bff] w-max rounded-[5rem]"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#131bff] text-white px-8 lg:px-16 py-12 gap-8 lg:py-20 h-[25rem] lg:h-[40rem] flex flex-col justify-between rounded-2xl">
          <div>
            <p className="text-[12px] font-semibold">WHITE PAPERS</p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[32px] leading-[36px] lg:text-[42px] lg:leading-[50px] lg:w-[80%] font-medium">
              Optimizing eSIM Adoption: Adoption Interoperability
            </p>
            <button
              type="button"
              className="px-8 h-[44px] text-[14px] flex items-center border font-semibold leading-none bg-white text-[#131bff] w-max rounded-[5rem]"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-[#182799] text-white px-8 lg:px-16 py-12 gap-8 lg:py-20 h-[30rem] sm:h-[25rem] lg:h-[40rem] flex flex-col justify-between rounded-2xl">
          <div>
            <p className="text-[12px] font-semibold">PRS</p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-[32px] leading-[36px] lg:text-[42px] lg:leading-[50px] lg:w-[80%] font-medium">
              CATEL Selects Valid’s Quarter-Size SIM Cards solution: A Step
              Towards Innovation and Sustainability
            </p>
            <button
              type="button"
              className="px-8 h-[44px] text-[14px] flex items-center border font-semibold leading-none bg-white text-[#131bff] w-max rounded-[5rem]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="py-[10rem] text-[46px] leading-[50px] lg:py-[25rem] mx-auto w-[90%] lg:w-[70%] font-medium flex text-center lg:leading-[84px] justify-center items-center lg:text-[84px] text-transparent bg-clip-text bg-[linear-gradient(90deg,#f9453f,#fa9b26_50%,#2ee76f_100%,#18e1f3_150%,#3f0085_200%)]">
        <p>Your trusted partner for secure and interoperable mobile services</p>
      </div>
    </div>
  );
}

export default Insights;
