import Marquee from "react-fast-marquee";
import ServiceCard from "../../components/ServiceCard";
import bubble from "../../assets/bubble.png";

const serviceListData: Array<{
  imgSrc: string;
  title: string;
  description: string;
}> = [
  {
    imgSrc: bubble,
    title: "Cognitive Behavioral Therapy ( CBT )",
    description:
      "Helps individuals identify and change negative thought patterns, beliefs, and behaviors.",
  },
  {
    imgSrc: bubble,
    title: "Family Therapy",
    description:
      "Addresses communication and relationship issues within families to improve overall well-being.",
  },
  {
    imgSrc: bubble,
    title: "Couples Therapy",
    description:
      "Helps couples improve communication, resolve conflicts, and strengthen their relationship.",
  },
  {
    imgSrc: bubble,
    title: "Counseling",
    description:
      "Provides a supportive and confidential space for individuals to explore personal challenges and develop coping strategies.",
  },
  {
    imgSrc: bubble,
    title: "Mental Illness and Disorders",
    description:
      "Addresses a wide range of mental health conditions, including anxiety, depression, and trauma.",
  },
  {
    imgSrc: bubble,
    title: "Inquiry",
    description:
      "Focuses on exploring and understanding personal beliefs and values to promote self-awareness and growth.",
  },
  {
    imgSrc: bubble,
    title: "Queer Affirmative",
    description:
      "Provides a safe and affirming space for LGBTQ+ individuals to address specific challenges and explore their identities.",
  },
  {
    imgSrc: bubble,
    title: "Aversion Therapy for Addiction",
    description:
      "Helps individuals overcome addictive behaviors by associating them with unpleasant consequences.",
  },
  {
    imgSrc: bubble,
    title: "Transactional Analysis",
    description:
      "Examines communication patterns and interpersonal relationships to improve communication and resolve conflicts.",
  },
  {
    imgSrc: bubble,
    title: "Adolescence Counseling",
    description:
      "Provides support and guidance to adolescents navigating developmental challenges, such as identity formation, peer pressure, and academic stress.",
  },
  {
    imgSrc: bubble,
    title: "Anxiety",
    description:
      "Helps individuals understand and manage anxiety symptoms through various techniques, such as relaxation exercises and cognitive restructuring.",
  },
];
const ServiceSection = () => {
  return (
    <section id="service" className="bg-secondary-color px-4 py-4">
      <div className="container mx-auto">
        <div>
          <h2 className="text-tertiary-color font-bold text-3xl md:text-5xl">
            Our Expertise
          </h2>
          <p className="mt-2 text-sm md:text-[16px]">
            We have a directory of mental health professionals specialized in
            the following domains
          </p>
        </div>
        <Marquee className="mt-8" speed={150} pauseOnHover pauseOnClick>
          <div className="flex justify-center gap-8 ml-8">
            {serviceListData.map(({ imgSrc, title, description }) => (
              <ServiceCard
                {...{
                  imgSrc,
                  title,
                  description,
                }}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ServiceSection;
