interface ServiceCardProps {
  imgSrc?: string;
  title: string;
  description: string;
}
const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="p-5 max-w-72 rounded-2xl bg-white md:p-8 md:max-w-80">
      <div className="p-5 rounded-full bg-primary-color w-fit">
        <img src={props.imgSrc} alt="" className="w-9 h-9 md:w-11 md:h-11" />
      </div>
      <div className="mt-8">
        <h2 className="font-bold text-xl text-gray-dark-color md:text-2xl">
          {props.title}
        </h2>
        <p className="font-normal text-gray-color text-sm md:text-[16px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
