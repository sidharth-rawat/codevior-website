"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useContactMutation, ContactFormData } from "@/hooks/useContactMutation";

export default function Contact() {
  // const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    cc: "",
    bcc: "",
    attachments: [],
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const mutation = useContactMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({});
    setErrors({});

    // Remove empty optional fields
    const formDataToSubmit = {
      ...formData,
      cc: formData.cc || undefined,
      bcc: formData.bcc || undefined,
      attachments: selectedFiles.length > 0 ? selectedFiles : undefined,
    };

    try {
      const response = await mutation.mutateAsync(formDataToSubmit);
      
      if (response.success) {
        setSubmitStatus({
          success: true,
          message: response.message
        });
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          cc: "",
          bcc: "",
          attachments: [],
        });
        setSelectedFiles([]);
      } else {
        // Handle validation errors
        if (response.errors) {
          const newErrors: Record<string, string> = {};
          response.errors.forEach(error => {
            newErrors[error.field] = error.message;
          });
          setErrors(newErrors);
        }
        setSubmitStatus({
          success: false,
          message: response.message
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : "An unexpected error occurred. Please try again."
      });
    }
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = Array.from(e.target.files || []);
  //   setSelectedFiles(prev => [...prev, ...files]);
  // };

  // const removeFile = (index: number) => {
  //   setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  // };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl max-w-3xl mx-auto"
          >
            Get in touch with us to discuss your project or schedule a
            consultation
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {/* Status message */}
              {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
                  submitStatus.success 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {submitStatus.success 
                    ? <CheckCircle className="w-5 h-5" /> 
                    : <AlertCircle className="w-5 h-5" />}
                  <p>{submitStatus.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.service ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="app-development">App Development</option>
                    <option value="web-design">Web Design</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="llm-solutions">LLM Solutions</option>
                    <option value="digital-transformation">Steel Design and RCC Design</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-500">{errors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Optional Fields Section */}
                {/* <div className="border-t pt-6 mt-6">
                  <h3 className="text-lg font-semibold mb-4">Additional Options</h3>
                  
                  <div>
                    <label htmlFor="cc" className="block text-gray-700 mb-2">
                      CC Email <span className="text-gray-500 text-sm">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="cc"
                      name="cc"
                      value={formData.cc}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                        errors.cc ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.cc && (
                      <p className="mt-1 text-sm text-red-500">{errors.cc}</p>
                    )}
                  </div>

                  <div className="mt-4">
                    <label htmlFor="bcc" className="block text-gray-700 mb-2">
                      BCC Email <span className="text-gray-500 text-sm">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="bcc"
                      name="bcc"
                      value={formData.bcc}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                        errors.bcc ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.bcc && (
                      <p className="mt-1 text-sm text-red-500">{errors.bcc}</p>
                    )}
                  </div>

                  <div className="mt-4">
                    <label className="block text-gray-700 mb-2">
                      Attachments <span className="text-gray-500 text-sm">(Optional)</span>
                    </label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      multiple
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Paperclip className="w-4 h-4" />
                      Add Files
                    </button>
                    
                    {selectedFiles.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {selectedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                            <span className="text-sm text-gray-600 truncate">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-gray-500 hover:text-red-500"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div> */}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 disabled:bg-purple-400 disabled:cursor-not-allowed"
                >
                  {mutation.isPending ? (
                    <>
                      <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Kashipur+Uttarakhand+India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
                      >
                        Kashipur, Uttarakhand, India
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-600 mr-3" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a
                        href="tel:+918979049772"
                        className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
                      >
                        +91 8979049772
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-600 mr-3" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a
                        href="mailto:support@codevior.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
                      >
                        support@codevior.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="font-semibold">Monday - Friday:</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Saturday:</span>
                    <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Sunday:</span>
                    <span className="text-gray-600">Closed</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
