import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Listbox } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    admissionNo: "",
    firstName: "",
    lastName: "",
    gender: "",
    admissionForClass: "",
    section: "",
    fatherName: "",
    fatherCellPhone: "",
    motherName: "",
    motherCellPhone: "",
    dob: "",
    religion: "",
    admissionDate: "",
    image: null,
  });

  const religions = [
    "Hindu",
    "Muslim",
    "Christian",
    "Sikh",
    "Buddhist",
    "Other",
  ];
  const genders = ["Male", "Female", "Other"];
  const classes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  const sections = ["A", "B", "C", "D"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      admissionNo: "",
      firstName: "",
      lastName: "",
      gender: "",
      admissionForClass: "",
      section: "",
      fatherName: "",
      fatherCellPhone: "",
      motherName: "",
      motherCellPhone: "",
      dob: "",
      religion: "",
      admissionDate: "",
      image: null,
    });
    navigate("/login");
  };

  // Updated Listbox
  const renderListbox = (label, value, options) => (
    <div className="relative">
      <label className="text-[#023561] mb-2 block">{label}</label>
      <Listbox
        value={formData[value]}
        onChange={(val) => setFormData({ ...formData, [value]: val })}
      >
        <div className="relative">
          <Listbox.Button className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all">
            {formData[value] || `Select ${label}`}
            <HiSelector className="w-5 h-5 text-gray-500" />
          </Listbox.Button>

          <Listbox.Options className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-25 overflow-y-auto z-50">
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}
                value={option}
                className={({ active, selected }) =>
                  `cursor-pointer px-3 py-2 ${
                    active ? "bg-[#023561]/20" : ""
                  } ${selected ? "font-semibold" : ""}`
                }
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#023561]/20 via-[#023561]/10 to-[#023561]/5 p-8">
      <div className="relative w-full max-w-7xl p-8 rounded-3xl backdrop-blur-xl bg-white/15 border border-[#023561]/30 shadow-2xl overflow-visible">
        <h2 className="relative text-3xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#023561] to-[#03508C]">
          Student Registration
        </h2>

        <form
          onSubmit={handleSubmit}
          className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto"
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-4 col-span-1">
            <div>
              <label className="text-[#023561] mb-2 block">Admission No</label>
              <input
                type="text"
                name="admissionNo"
                value={formData.admissionNo}
                onChange={handleChange}
                placeholder="Admission No"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            <div>
              <label className="text-[#023561] mb-2 block">Father Name</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Father Name"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            <div>
              <label className="text-[#023561] mb-2 block">Mother Name</label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                placeholder="Mother Name"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            {renderListbox("Religion", "religion", religions)}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 col-span-1">
            <div>
              <label className="text-[#023561] mb-2 block">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            <div>
              <label className="text-[#023561] mb-2 block">
                Father Cell Phone
              </label>
              <input
                type="text"
                name="fatherCellPhone"
                value={formData.fatherCellPhone}
                onChange={handleChange}
                placeholder="Father Phone"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            <div>
              <label className="text-[#023561] mb-2 block">
                Mother Cell Phone
              </label>
              <input
                type="text"
                name="motherCellPhone"
                value={formData.motherCellPhone}
                onChange={handleChange}
                placeholder="Mother Phone"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            <div>
              <label className="text-[#023561] mb-2 block">
                Admission Date
              </label>
              <input
                type="date"
                name="admissionDate"
                value={formData.admissionDate}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 col-span-1">
            <div>
              <label className="text-[#023561] mb-2 block">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            {renderListbox("Admission For Class", "admissionForClass", classes)}
            {renderListbox("Section", "section", sections)}
            {renderListbox("Gender", "gender", genders)}
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1">
            <div>
              <label className="text-[#023561] mb-2 block">DOB</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                max={new Date().toISOString().split("T")[0]}
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            <div className="relative">
              <label className="text-[#023561] mb-2 block">Upload Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
              {formData.image && (
                <div className="mt-2 w-full h-42 relative">
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="Preview"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl border border-[#023561]/40 shadow-md"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 lg:col-span-4 mt-8 flex justify-center">
            <button
              type="submit"
              className="w-48 py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-[#023561] to-[#03508C] hover:from-[#03508C] hover:to-[#023561] shadow-lg transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
