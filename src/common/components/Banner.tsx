import Button from "./Button";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col px-7 py-3 border border-primary-color bg-white rounded-2xl gap-2 md:flex-row md:items-center md:justify-between md:px-14 md:py-9">
      <div className="max-w-md">
        <h2 className="text-primary-color font-bold text-xl md:text-3xl">
          Join us in creating a more mentally well Nation.
        </h2>
        <p className="mt-3 text-xs text-tertiary-color md:text-sm">
          If you are mental health professional or know someone who, You can
          share their details with us.
        </p>
      </div>
      <div>
        <Button label="Add to Directory" />
      </div>
    </div>
  );
};

export default Banner;
