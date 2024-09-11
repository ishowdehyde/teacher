import { useState } from "react";
import { assets } from "../assets/assets";

const Profile = () => {
  const [userData, setUserDate] = useState({
    name: "Ishola Abdulahi",
    image: assets.myprofile,
    email: "olawaleishola250@gmail",
    phone: "+234 815-511-3559",
    address: {
      line1: "30th Cross, Richmond",
      line2: "Circle, church Road, London",
    },
    gender: "Male",
    DOB: "2000-03-12",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img src={userData.image} className="w-36 rounded" />

      {isEdit ? (
        <input
          className="bg-gray-500 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserDate((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-200 max-w-52"
              type="number"
              value={userData.phone}
              onChange={(e) =>
                setUserDate((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p>address:</p>
          {isEdit ? (
            <p>
              <input
                onChange={(e) =>
                  setUserDate((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
              />
              <br />
              <input
                onChange={(e) =>
                  setUserDate((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p>
              {userData.address.line1} <br /> {userData.address.line2}{" "}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-30 bg-gray-100"
              onChange={(e) =>
                setUserDate((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              value={userData.DOB}
              onChange={(e) =>
                setUserDate((prev) => ({ ...prev, DOB: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-400">{userData.DOB}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-500"
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all duration-500"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
