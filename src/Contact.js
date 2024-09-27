import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    occupation: 'student',
    email: '',
    phone: '',
    contactMethod: 'email',
    subject: '',
    message: '',
    appointmentDate: '',
    urgency: 'low',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please agree to the privacy policy.');
      return;
    }

    console.log(formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      occupation: 'student',
      email: '',
      phone: '',
      contactMethod: 'email',
      subject: '',
      message: '',
      appointmentDate: '',
      urgency: 'low',
      consent: false
    });
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center p-6"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?fit=crop&w=1350&q=80')" }}
    >
      <div className="bg-gray-900 bg-opacity-90 shadow-2xl rounded-lg w-full max-w-3xl p-8 space-y-6 border border-gray-500">
        <h2 className="text-3xl font-bold text-center text-white">Contact Us</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-white">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-100 text-gray-900"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-white">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-100 text-gray-900"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-white">Phone Number</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-100 text-gray-900"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Subject Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-white">Subject</span>
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-100 text-gray-900"
              placeholder="Enter the subject"
              required
            />
          </div>

          {/* Preferred Contact Method */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-white">Preferred Contact Method</span>
            </label>
            <select
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="select select-bordered w-full bg-gray-100 text-gray-900"
              required
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>

          {/* Occupation Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-white">Occupation</span>
            </label>
            <select
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="select select-bordered w-full bg-gray-100 text-gray-900"
              required
            >
              <option value="student">Student</option>
              <option value="professional">Professional</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Appointment Date Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-white">Preferred Appointment Date</span>
            </label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-100 text-gray-900"
              required
            />
          </div>

          {/* Urgency Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-white">Urgency</span>
            </label>
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className="select select-bordered w-full bg-gray-100 text-gray-900"
              required
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          {/* Message Field */}
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text font-semibold text-white">Message</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full bg-gray-100 text-gray-900 h-32"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          {/* Consent Checkbox */}
          <div className="form-control col-span-2">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="checkbox checkbox-primary"
                required
              />
              <span className="label-text text-white ml-2">
                I agree to the privacy policy.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control col-span-2 mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
