import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";

const Addmission = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    employeeCode: "",
    fatherOrHusbandName: "",
    department: "",
    dateOfJoining: "",
    biometricId: "",
    designation: "",
    classTeacherFor: "",
    qualification: "",
    contactNumber: "",
    address: "",
    institution: "",
    yearOfPassing: "",
    gradeOrPercentage: "",
  });

  const genders = ["Male", "Female", "Other"];
  const departments = [
    "Administration",
    "Accounts",
    "Academics",
    "Library",
    "Sports",
    "Transport",
    "Other",
  ];
  const qualifications = [
    "High School",
    "Bachelor's",
    "Master's",
    "PhD",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Employee Admission Submitted!");
    setFormData({
      name: "",
      gender: "",
      employeeCode: "",
      fatherOrHusbandName: "",
      department: "",
      dateOfJoining: "",
      biometricId: "",
      designation: "",
      classTeacherFor: "",
      qualification: "",
      contactNumber: "",
      address: "",
      institution: "",
      yearOfPassing: "",
      gradeOrPercentage: "",
    });
  };

  // Custom Listbox Renderer
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

          <Listbox.Options className="absolute left-0 top-full mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-40 overflow-y-auto z-50">
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
          Employee Admission Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto"
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-4 col-span-1">
            <div>
              <label className="text-[#023561] mb-2 block">Employee Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Employee Name"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            {renderListbox("Gender", "gender", genders)}
            <div>
              <label className="text-[#023561] mb-2 block">Employee Code</label>
              <input
                type="text"
                name="employeeCode"
                value={formData.employeeCode}
                onChange={handleChange}
                placeholder="Employee Code"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            <div>
              <label className="text-[#023561] mb-2 block">
                Father / Husband Name
              </label>
              <input
                type="text"
                name="fatherOrHusbandName"
                value={formData.fatherOrHusbandName}
                onChange={handleChange}
                placeholder="Father or Husband Name"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 col-span-1">
            {renderListbox("Department", "department", departments)}
            <div>
              <label className="text-[#023561] mb-2 block">Date of Joining</label>
              <input
                type="date"
                name="dateOfJoining"
                value={formData.dateOfJoining}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            <div>
              <label className="text-[#023561] mb-2 block">Biometric ID</label>
              <input
                type="text"
                name="biometricId"
                value={formData.biometricId}
                onChange={handleChange}
                placeholder="Biometric ID"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            <div>
              <label className="text-[#023561] mb-2 block">Designation</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Designation"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 col-span-1">
            <div>
              <label className="text-[#023561] mb-2 block">
                Class Teacher For
              </label>
              <input
                type="text"
                name="classTeacherFor"
                value={formData.classTeacherFor}
                onChange={handleChange}
                placeholder="Class Teacher For"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            {renderListbox("Qualification", "qualification", qualifications)}
            <div>
              <label className="text-[#023561] mb-2 block">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            <div >
              <label className="text-[#023561] mb-2 block">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Full Address"
                rows="1"
                className=" w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
          </div>

          {/* Column 4 (Education Details) */}
          <div className="flex flex-col gap-4 col-span-1">
            <div>
              <label className="text-[#023561] mb-2 block">Institution</label>
              <input
              required
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="Institution Name"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            <div>
              <label className="text-[#023561] mb-2 block">Year of Passing</label>
              <input
                type="text"
                name="yearOfPassing"
                value={formData.yearOfPassing}
                onChange={handleChange}
                placeholder="Year of Passing"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
            <div>
              <label className="text-[#023561] mb-2 block">
                Grade / Percentage
              </label>
              <input
                type="text"
                name="gradeOrPercentage"
                value={formData.gradeOrPercentage}
                onChange={handleChange}
                placeholder="Grade / Percentage"
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 transition-all"
              />
            </div>
          </div>

          {/* Submit */}
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

export default Addmission;
