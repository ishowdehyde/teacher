import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Teachers = () => {
  const { speciality } = useParams();
  console.log(speciality);
  const [filterTeacher, setFilterTeacher] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { teachers } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterTeacher(
        teachers.filter((teach) => teach.speciality === speciality)
      );
    } else {
      setFilterTeacher(teachers);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [teachers, speciality]);

  return (
    <div>
      <p className="text-gray-700">Browse through the teachers specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? " bg-primary text-white" : ""
          }`}
        >
          Filter
        </button>
        <div
          className={` flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "General Subject"
                ? navigate("/teachers")
                : navigate("/teachers/General Subject")
            }
            className={`w-[100vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "General Subject" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            General Subject
          </p>
          <p
            onClick={() =>
              speciality === "Chemistry"
                ? navigate("/teachers")
                : navigate("/teachers/Chemistry")
            }
            className={`w-[100vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
              speciality === "Chemistry" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Chemistry
          </p>
          <p
            onClick={() =>
              speciality === "Biology"
                ? navigate("/teachers")
                : navigate("/teachers/Biology")
            }
            className={`w-[100vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
              speciality === "Biology" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Biology
          </p>
          <p
            onClick={() =>
              speciality === "English"
                ? navigate("/teachers")
                : navigate("/teachers/English")
            }
            className={`w-[100vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
              speciality === "English" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            English
          </p>
          <p
            onClick={() =>
              speciality === " Accouting"
                ? navigate("/teachers")
                : navigate("/teachers/ Accouting")
            }
            className={`w-[100vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
              speciality === "Accounting" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Accounting
          </p>
          <p
            onClick={() =>
              speciality === "Government"
                ? navigate("/teachers")
                : navigate("/teachers/Government")
            }
            className={`w-[100vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${
              speciality === "Government" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Government
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterTeacher.map((item, index) => (
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
      </div>
    </div>
  );
};

export default Teachers;
