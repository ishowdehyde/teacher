import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-20 text-sm">
        <img src={assets.resize} className="w-full max-w-[360px]" />
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            4, Sunday ineh street, <br />
            iyanaisashi ojo road, Lagos.
          </p>
          <p className="text-gray-500">
            Tel:(+234) 815-511-3559 <br />
            Email:olawaleishola250@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            Careers at ISHOWDEHYDE
          </p>
          <p className="text-gray-500">
            learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
