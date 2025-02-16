import { CheckIcon } from "../../common/svgIcons";
import Stepper from "../../components/Stepper";

const About = () => {
  const statSingle = (stat: string, description: string) => (
    <div className="flex p-2 gap-3 min-w-52">
      <div className="w-6 h-6 rounded-full bg-[rgba(0,163,191,0.15)] flex items-center justify-center">
        <CheckIcon iconClassName="stroke-[#00A3BF]" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-4xl text-tertiary-color">{stat}+</span>
        <span className="font-normal text-base max-w-48">{description}</span>
      </div>
    </div>
  );
  return (
    <>
      <section id="about" className="py-5 bg-secondary-color px-4 md:py-36">
        <div className="container mx-auto flex justify-center">
          <div className="shadow rounded-2xl bg-white py-6 px-14 flex flex-col gap-16 w-fit">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl px-4 py-2 bg-secondary-color text-primary-color w-fit">
                <span className="text-primary-color font-semibold text-sm m-auto">
                  Statistics
                </span>
              </div>
              <h3 className="text-tertiary-color font-bold text-4xl">
                How far we have reached..
              </h3>
              <p className="font-normal text-lg text-gray-color">
                Project Pratiksha has helped hundreds of life around the Nation
                to heal
              </p>
            </div>
            <div className="flex gap-12 flex-wrap justify-between">
              {statSingle("100", "Hours of Sessions")}
              {statSingle("12", "Districts")}
              {statSingle("30", "Mental Health Professionals")}
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-24">
        <div className="container mx-auto flex items-center justify-center">
          <Stepper
            data={[
              {
                title: "Select your Location",
                description:
                  "Choose from the list of locations available in the dropdown",
              },
              {
                title: "Press the Submit button",
                description:
                  "Just press it and get the details of the professional",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default About;
