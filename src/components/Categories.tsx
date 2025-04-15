import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 1279, min: 1024 },
    items: 2,
    slidesToSlide: 2,
  },
  mobiletablet: {
    breakpoint: { max: 1023, min: 0 },
    items: 1,
  },
};

function Categories() {
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["mobiletablet", "desktop"]}
      >
        <div className="h-[650px] lg:h-screen">
          <div className="h-3/5 lg:h-[267px] bg-[#c189ff] text-[#01010c] px-4 py-12 flex items-center">
            <div className="w-full flex flex-col justify-between gap-12">
              <div>
                <p className="text-[32px] leading-[32px] font-medium">SIMs</p>
                <p className="mt-4 w-fit leading-[20px]">
                  Explore our comprehensive range of SIMs to find the perfect
                  fit for your connectivity needs.
                </p>
              </div>
              <div>
                <div className="flex text-[14px] w-max items-center gap-4 border-[#01010c] border rounded-[5rem] px-4 py-1">
                  <p>SIM</p>
                  <img
                    src="/images/arrow-right-short.svg"
                    alt=""
                    className="w-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-2/5 lg:h-full">
            <img
              src="/images/featured-sim.jpeg"
              alt=""
              className="object-cover w-[110%] h-full object-center"
            />
          </div>
        </div>
        <div className="h-[650px] lg:h-screen">
          <div className="h-3/5 lg:h-[267px] bg-[#18e1f3] text-[#01010c] px-4 py-12 flex items-center">
            <div className="w-full flex flex-col justify-between gap-12">
              <div>
                <p className="text-[32px] leading-[32px] font-medium">eSIMs</p>
                <p className="mt-4 w-fit leading-[20px]">
                  Our secure, scalable eSIMs deliver on-demand reliability for
                  Consumer, IoT, and M2M applications.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex text-[14px] w-max items-center gap-4 border-[#01010c] border rounded-[5rem] px-4 py-1">
                  <p>eSIMs</p>
                  <img
                    src="/images/arrow-right-short.svg"
                    alt=""
                    className="w-4"
                  />
                </div>
                <div className="flex text-[14px] w-max items-center gap-4 border-[#01010c] border rounded-[5rem] px-4 py-1">
                  <p>eSIM Interoperability</p>
                  <img
                    src="/images/arrow-right-short.svg"
                    alt=""
                    className="w-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-2/5 lg:h-full">
            <img
              src="/images/featured-esim.jpeg"
              alt=""
              className="object-cover w-[110%] h-full object-center"
            />
          </div>
        </div>
        <div className="h-[650px] lg:h-screen">
          <div className="h-3/5 lg:h-[267px] bg-[#2ee76f] text-[#01010c] px-4 py-12 flex items-center">
            <div className="w-full flex flex-col justify-between gap-12">
              <div>
                <p className="text-[32px] leading-[32px] font-medium">
                  eSIM Solutions
                </p>
                <p className="mt-4 w-fit leading-[20px]">
                  Manage eSIM subscriptions and streamline consumer onboarding
                  to drive acquisition and retention.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex text-[14px] w-max items-center gap-4 border-[#01010c] border rounded-[5rem] px-4 py-1">
                  <p>Remote SIM Provisioning</p>
                  <img
                    src="/images/arrow-right-short.svg"
                    alt=""
                    className="w-4"
                  />
                </div>
                <div className="flex text-[14px] w-max items-center gap-4 border-[#01010c] border rounded-[5rem] px-4 py-1">
                  <p>eSIM Onboarding Journeys</p>
                  <img
                    src="/images/arrow-right-short.svg"
                    alt=""
                    className="w-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-2/5 lg:h-full">
            <img
              src="/images/featured-esim-solutions.jpeg"
              alt=""
              className="object-cover w-[110%] h-full object-center"
            />
          </div>
        </div>
        <div className="h-[650px] lg:h-screen">
          <div className="h-3/5 lg:h-[267px] bg-[#fa9b26] text-[#01010c] px-4 py-12 flex items-center">
            <div className="w-full flex flex-col justify-between gap-12">
              <div>
                <p className="text-[32px] leading-[32px] font-medium">5G</p>
                <p className="mt-4 w-fit leading-[20px]">
                  Our solutions enable seamless integration of private and
                  public networks with advanced interoperable technology and
                  secure OTA management for remote SIM updates.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex text-[14px] w-max items-center gap-4 border-[#01010c] border rounded-[5rem] px-4 py-1">
                  <p>Private Networks</p>
                  <img
                    src="/images/arrow-right-short.svg"
                    alt=""
                    className="w-4"
                  />
                </div>
                <div className="flex text-[14px] w-max items-center gap-4 border-[#01010c] border rounded-[5rem] px-4 py-1">
                  <p>OTA Suite</p>
                  <img
                    src="/images/arrow-right-short.svg"
                    alt=""
                    className="w-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-2/5 lg:h-full">
            <img
              src="/images/featured-5g.jpeg"
              alt=""
              className="object-cover w-[110%] h-full object-center"
            />
          </div>
        </div>
        <div className="h-[650px] lg:h-screen">
          <div className="h-3/5 lg:h-[267px] bg-[#ff6359] text-[#01010c] px-4 py-12 flex items-center">
            <div className="w-full flex flex-col justify-between gap-12">
              <div>
                <p className="text-[32px] leading-[32px] font-medium">
                  Integrated SE
                </p>
                <p className="mt-4 w-fit leading-[20px]">
                  Integrated security and seamless connectivity are at the core
                  of our iSE and iSIM solutions, designed for advanced mobile
                  and IoT applications.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex text-[14px] w-max items-center gap-4 border-[#01010c] border rounded-[5rem] px-4 py-1">
                  <p>iSE</p>
                  <img
                    src="/images/arrow-right-short.svg"
                    alt=""
                    className="w-4"
                  />
                </div>
                <div className="flex text-[14px] w-max items-center gap-4 border-[#01010c] border rounded-[5rem] px-4 py-1">
                  <p>iSIM</p>
                  <img
                    src="/images/arrow-right-short.svg"
                    alt=""
                    className="w-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-2/5 lg:h-full">
            <img
              src="/images/featured-integrated-se.jpeg"
              alt=""
              className="object-cover w-[110%] h-full object-center"
            />
          </div>
        </div>
        <div className="h-[650px] lg:h-screen">
          <div className="h-3/5 lg:h-[267px] bg-[#5c9cff] text-[#01010c] px-4 py-12 flex items-center">
            <div className="w-full flex flex-col justify-between gap-12">
              <div>
                <p className="text-[32px] leading-[32px] font-medium">
                  IoT Connectivity
                </p>
                <p className="mt-4 w-fit leading-[20px]">
                  Seamlessly connect and secure your IoT ecosystem with
                  scalable, interoperable solutions designed to drive innovation
                  and enable future-proof connectivity.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex text-[14px] w-max items-center gap-4 border-[#01010c] border rounded-[5rem] px-4 py-1">
                  <p>IoT Connectivity</p>
                  <img
                    src="/images/arrow-right-short.svg"
                    alt=""
                    className="w-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-2/5 lg:h-full">
            <img
              src="/images/featured-iot-connectivity.jpeg"
              alt=""
              className="object-cover w-[110%] h-full object-center"
            />
          </div>
        </div>
      </Carousel>
      <div id="categories" className="overflow-hidden hidden xl:flex">
        <div className="flex w-max h-screen categoriesContainer">
          <div className="w-screen lg:w-[50vw]">
            <div className="bg-[#c189ff] h-[55vh] text-[#01010c] px-20 flex items-center">
              <div className="w-[320px]">
                <p className="text-[50px] leading-[50px] font-medium">SIMs</p>
                <p className="mt-4">
                  Explore our comprehensive range of SIMs to find the perfect
                  fit for your connectivity needs.
                </p>
                <div className="mt-10">
                  <div className="flex w-max items-center gap-4 border-[#01010c] border-2 rounded-[5rem] px-4 py-2">
                    <p>SIM</p>
                    <img
                      src="/images/arrow-right-short.svg"
                      alt=""
                      className="w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[45vh]">
              <img
                src="/images/featured-sim.jpeg"
                alt=""
                className="object-cover w-[110%] h-full object-center"
              />
            </div>
          </div>
          <div className="w-screen lg:w-[50vw] mt-24 categoriesItem">
            <div className="h-[65vh] bg-[#18e1f3] text-[#01010c] px-20 flex items-center item">
              <div className="w-[320px]">
                <p className="text-[50px] leading-[50px] font-medium">eSIMs</p>
                <p className="mt-4">
                  Our secure, scalable eSIMs deliver on-demand reliability for
                  Consumer, IoT, and M2M applications.
                </p>
                <div className="mt-10 flex gap-4 w-[500px]">
                  <div className="flex w-max items-center gap-4 border-[#01010c] border-2 rounded-[5rem] px-4 py-2">
                    <p>eSIMs</p>
                    <img
                      src="/images/arrow-right-short.svg"
                      alt=""
                      className="w-4"
                    />
                  </div>
                  <div className="flex w-max items-center gap-4 border-[#01010c] border-2 rounded-[5rem] px-4 py-2">
                    <p>eSIM Interoperability</p>
                    <img
                      src="/images/arrow-right-short.svg"
                      alt=""
                      className="w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[45vh]">
              <img
                src="/images/featured-esim.jpeg"
                alt=""
                className="object-cover w-[110%] h-full object-center"
              />
            </div>
          </div>
          <div className="w-screen lg:w-[50vw] mt-24 categoriesItem">
            <div className="h-[65vh] bg-[#2ee76f] text-[#01010c] px-20 flex items-center item">
              <div className="w-[320px]">
                <p className="text-[50px] leading-[50px] font-medium">
                  eSIM Solutions
                </p>
                <p className="mt-4">
                  Manage eSIM subscriptions and streamline consumer onboarding
                  to drive acquisition and retention.
                </p>
                <div className="mt-10 flex gap-4 w-[600px]">
                  <div className="flex w-max items-center gap-4 border-[#01010c] border-2 rounded-[5rem] px-4 py-2">
                    <p>Remote SIM Provisioning</p>
                    <img
                      src="/images/arrow-right-short.svg"
                      alt=""
                      className="w-4"
                    />
                  </div>
                  <div className="flex w-max items-center gap-4 border-[#01010c] border-2 rounded-[5rem] px-4 py-2">
                    <p>eSIM Onboarding Journeys</p>
                    <img
                      src="/images/arrow-right-short.svg"
                      alt=""
                      className="w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[45vh]">
              <img
                src="/images/featured-esim-solutions.jpeg"
                alt=""
                className="object-cover w-[110%] h-full object-center"
              />
            </div>
          </div>
          <div className="w-screen lg:w-[50vw] mt-24 categoriesItem">
            <div className="h-[65vh] bg-[#fa9b26] text-[#01010c] px-20 flex items-center item">
              <div className="w-[320px]">
                <p className="text-[50px] leading-[50px] font-medium">5G</p>
                <p className="mt-4">
                  Our solutions enable seamless integration of private and
                  public networks with advanced interoperable technology and
                  secure OTA management for remote SIM updates.
                </p>
                <div className="mt-10 flex gap-4 w-[600px]">
                  <div className="flex w-max items-center gap-4 border-[#01010c] border-2 rounded-[5rem] px-4 py-2">
                    <p>Private Networks</p>
                    <img
                      src="/images/arrow-right-short.svg"
                      alt=""
                      className="w-4"
                    />
                  </div>
                  <div className="flex w-max items-center gap-4 border-[#01010c] border-2 rounded-[5rem] px-4 py-2">
                    <p>OTA Suite</p>
                    <img
                      src="/images/arrow-right-short.svg"
                      alt=""
                      className="w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[45vh] bg-black">
              <img
                src="/images/featured-5g.jpeg"
                alt=""
                className="object-cover w-[110%] h-full object-center"
              />
            </div>
          </div>
          <div className="w-screen lg:w-[50vw] mt-24 categoriesItem">
            <div className="h-[65vh] bg-[#ff6359] text-[#01010c] px-20 flex items-center item">
              <div className="w-[320px]">
                <p className="text-[50px] leading-[50px] font-medium">
                  Integrated SE
                </p>
                <p className="mt-4">
                  Integrated security and seamless connectivity are at the core
                  of our iSE and iSIM solutions, designed for advanced mobile
                  and IoT applications.
                </p>
                <div className="mt-10 flex gap-4 w-[600px]">
                  <div className="flex w-max items-center gap-4 border-[#01010c] border-2 rounded-[5rem] px-4 py-2">
                    <p>iSE</p>
                    <img
                      src="/images/arrow-right-short.svg"
                      alt=""
                      className="w-4"
                    />
                  </div>
                  <div className="flex w-max items-center gap-4 border-[#01010c] border-2 rounded-[5rem] px-4 py-2">
                    <p>iSIM</p>
                    <img
                      src="/images/arrow-right-short.svg"
                      alt=""
                      className="w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[45vh] bg-[#bbb]">
              <img
                src="/images/featured-integrated-se.jpeg"
                alt=""
                className="object-cover w-[110%] h-full object-center"
              />
            </div>
          </div>
          <div className="w-screen lg:w-[50vw] mt-24 categoriesItem">
            <div className="h-[65vh] bg-[#5c9cff] text-[#01010c] px-20 flex items-center item">
              <div className="w-[320px]">
                <p className="text-[50px] leading-[50px] font-medium">
                  IoT Connectivity
                </p>
                <p className="mt-4">
                  Seamlessly connect and secure your IoT ecosystem with
                  scalable, interoperable solutions designed to drive innovation
                  and enable future-proof connectivity.
                </p>
                <div className="mt-10 flex gap-4 w-[600px]">
                  <div className="flex w-max items-center gap-4 border-[#01010c] border-2 rounded-[5rem] px-4 py-2">
                    <p>IoT Connectivity</p>
                    <img
                      src="/images/arrow-right-short.svg"
                      alt=""
                      className="w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[45vh] bg-teal-900">
              <img
                src="/images/featured-iot-connectivity.jpeg"
                alt=""
                className="object-cover w-[110%] h-full object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
