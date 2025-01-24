import ServiceCard from "../../components/ServiceCard";
import bubble from "../../assets/bubble.png";
import couple from "../../assets/couple.png";
import inquiry from "../../assets/inquiry.png";
import queerAffirmative from "../../assets/queer_affirmative.png";
import addiction from "../../assets/addiction.png";
import transactionalAnalysis from "../../assets/transactional.png";

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
    imgSrc: couple,
    title: "Couples Therapy",
    description:
      "Helps couples improve communication, resolve conflicts, and strengthen their relationship.",
  },
  {
    imgSrc: inquiry,
    title: "Inquiry",
    description:
      "Focuses on exploring and understanding personal beliefs and values to promote self-awareness and growth.",
  },
  {
    imgSrc: queerAffirmative,
    title: "Queer Affirmative",
    description:
      "Provides a safe and affirming space for LGBTQ+ individuals to address specific challenges and explore their identities.",
  },
  {
    imgSrc: addiction,
    title: "Aversion Therapy for Addiction",
    description:
      "Helps individuals overcome addictive behaviors by associating them with unpleasant consequences.",
  },
  {
    imgSrc: transactionalAnalysis,
    title: "Transactional Analysis",
    description:
      "Examines communication patterns and interpersonal relationships to improve communication and resolve conflicts.",
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
        <div className="flex gap-8 mt-8 flex-wrap justify-center md:justify-between">
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
      </div>
    </section>
  );
};

export default ServiceSection;
