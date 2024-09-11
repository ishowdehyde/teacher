import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-600">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img src={assets.resize} className="w-full md:max-w-[360px]" />
        <div className="flex - flex-col justify-center gap-6 md:w-2/4 text-xl text-gray-700">
          <p>
            Welcome to Teacher Connect, secure your children life by giving them
            the righ teacher, who can shape them into your desire. Welcome to
            Teacher Connect, secure your children life by giving them the righ
            teacher, who can shape them into your desire.
          </p>
          <p>
            Welcome to Teacher Connect, secure your children life by giving them
            the righ teacher, who can shape them into your desire. Welcome to
            Teacher Connect, secure your children life by giving them the righ
            teacher, who can shape them into your desire.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Welcome to Teacher Connect, secure your children life by giving them
            the righ teacher, who can shape them into your desire.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Welcome to Teacher Connect, secure your children life by giving them
            the righ teacher, who can shape them into your desire.
          </p>
        </div>
        <div className="border px-10 md:px-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer">
          <b>Convenience:</b>
          <p>
            Welcome to Teacher Connect, secure your children life by giving them
            the righ teacher, who can shape them into your desire.
          </p>
        </div>
        <div className="border px-10 md:px-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-700 cursor-pointer">
          <b>Personalization:</b>
          <p>
            Welcome to Teacher Connect, secure your children life by giving them
            the righ teacher, who can shape them into your desire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
