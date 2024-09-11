import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedTeacher = ({ teachId, speciality }) => {
  const { teachers } = useContext(AppContext);
  const navigate = useNavigate();
  const [relTeacher, setRelTeacher] = useState([]);

  useEffect(() => {
    if (teachers.length > 0 && speciality) {
      const teachersData = teachers.filter(
        (teach) => teach.speciality === speciality && teach._id !== teachId
      );
      setRelTeacher(teachersData);
    }
  }, [teachers, speciality, teachId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-grey-900 md:mx-10">
      <h1 className="text-3xl font-medium">Related Teachers To Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted Teachers
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relTeacher.slice(0, 5).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img src={item.image} className="bg-blue-50" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-600">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/teachers");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        more
      </button>
    </div>
  );
};

export default RelatedTeacher;
