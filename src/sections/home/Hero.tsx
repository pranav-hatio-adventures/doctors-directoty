import herobg from "../../assets/herobg.png";
import Button from "../../common/components/Button";
import { ArrowRightIcon } from "../../common/svgIcons";
import quotationMark from "../../assets/quotationmark.png";

const Hero = () => {
  return (
    <section id="hero">
      <div
        className="container mx-auto bg-center bg-no-repeat bg-cover flex items-end justify-center relative before:absolute before:inset-0 before:bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.95)] to-100% sm:min-h-72 md:min-h-96 lg:min-h-[600px]"
        style={{
          backgroundImage: `url('${herobg}')`,
        }}
      >
        <div className="z-10 p-4 flex flex-col gap-2 items-center md:gap-8">
          <div className="text-center flex flex-col gap-0 md:gap-8">
            <h1 className="text-white font-medium text-xl sm:font-semibold sm:text-3xl md:text-7xl md:tracking-wide md:font-semibold">
              Project Pratiksha
            </h1>
            <span className="text-white font-normal sm:font-medum sm:text-xl md:text-3xl md:tracking-wide md:font-semibold">
              Empowering Minds, Building Stronger Communities
            </span>
          </div>
          <Button
            label="Find your mental support"
            link_to="directory"
            rightSection={
              <ArrowRightIcon
                className="w-5 h-5 ml-2"
                iconClassName="stroke-white"
              />
            }
            buttonClassName="flex items-center mb-2 md:mb-8"
          />
        </div>
      </div>
      <div className="container mx-auto px-7 py-7 md:px-14 md:py-28">
        <img src={quotationMark} alt="" className="float-start w-5 md:w-auto" />
        <p className="text-tertiary-color p-3 mx-6 font-light text-xs italic md:mx-12 md:text-2xl md:leading-10">
          Project Pratiksha is a voluntary initiative under the Global Shapers
          Kochi Hub, dedicated to improving mental health and well-being in the
          community. We believe that everyone deserves access to quality mental
          health support and a society that embraces mental well-being. Through
          a range of programs, including peer support, wellness workshops, and
          community outreach, we aim to empower individuals, reduce stigma, and
          create a more supportive environment for all.
        </p>
        <img
          src={quotationMark}
          alt=""
          className="float-end rotate-180 w-5 md:w-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
