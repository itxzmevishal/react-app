import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#023561]/20 via-[#023561]/10 to-[#023561]/5 p-4">
      <div className="relative w-full max-w-7xl p-8 rounded-3xl backdrop-blur-xl bg-white/15 border border-[#023561]/30 shadow-2xl overflow-hidden">
        {/* Background shapes */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#023561]/30 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#023561]/20 rounded-full opacity-30 blur-3xl"></div>

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
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
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
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
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
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
              />
            </div>
            <div>
              <label className="text-[#023561] mb-2 block">Religion</label>
              <select
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
              >
                <option value="">Select Religion</option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Christian">Christian</option>
                <option value="Sikh">Sikh</option>
                <option value="Buddhist">Buddhist</option>
                <option value="Other">Other</option>
              </select>
            </div>
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
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
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
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
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
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
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
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
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
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
              />
            </div>

            {/* Admission For Class Dropdown */}
            <div>
              <label className="text-[#023561] mb-2 block">
                Admission For Class
              </label>
              <select
                name="admissionForClass"
                value={formData.admissionForClass}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
              >
                <option value="">Select Class</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="VIII">VIII</option>
                <option value="IX">IX</option>
                <option value="X">X</option>
              </select>
            </div>

            <div>
              <label className="text-[#023561] mb-2 block">Section</label>
              <select
                name="section"
                value={formData.section}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>

            <div>
              <label className="text-[#023561] mb-2 block">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
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
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
              />
            </div>
            <div className="relative">
              <label className="text-[#023561] mb-2 block">Upload Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-[#023561]/40 bg-white/20 text-[#023561] shadow-inner focus:outline-none focus:ring-2 focus:ring-[#023561]/70 backdrop-blur-sm transition-all"
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
