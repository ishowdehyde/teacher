import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedTeacher from "../components/RelatedTeacher";

const Appointment = () => {
  const { teachId } = useParams();
  const { teachers, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["Sun", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [teacherInfo, setTeacherInfo] = useState(null);
  const [teacherSlot, setTeacherSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fecthTeacherInfo = () => {
    const teacherInfo = teachers.find((teach) => teach._id === teachId);
    setTeacherInfo(teacherInfo);
  };

  const getAvailableSlot = async () => {
    setTeacherSlot([]);

    // getting current date

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting end time of the date with index

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting hour
      if (today.getDate() == currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        // increamnet time by 30minute

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setTeacherSlot((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    getAvailableSlot();
  }, [teacherInfo]);

  useEffect(() => {
    console.log(teacherSlot);
  }, [teacherSlot]);

  useEffect(() => {
    fecthTeacherInfo();
  }, [teachers, teachId]);

  return (
    teacherInfo && (
      <div>
        {/* Teacher detail */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              src={teacherInfo.image}
              className="bg-blue w-full sm:max-w-72 rounded-lg"
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* Teachre info */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-950">
              {teacherInfo.name}
              <img src={assets.verify} width={20} height={20} className="w-5" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {teacherInfo.degree} - {teacherInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-sm rounded-full">
                {teacherInfo.experience}
              </button>
            </div>
            {/* teacher about */}
            <div className="justify-normal">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info} width={20} height={20} />
              </p>
              <p className="text-sm text-gray-600 max-w-[700px] mb-2">
                {teacherInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:
              <span className="text-gray-600">
                {currencySymbol}
                {teacherInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slot */}

        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-800">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-scroll mt-4">
            {teacherSlot.length &&
              teacherSlot.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  key={index}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {teacherSlot.length &&
              teacherSlot[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  key={index}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-500 border border-gray-400"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
            Book an appointment
          </button>
        </div>
        {/* listing related teacher */}
        <RelatedTeacher teachId={teachId} speciality={teacherInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
