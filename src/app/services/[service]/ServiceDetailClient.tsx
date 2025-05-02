"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface ServiceDetailClientProps {
  service: {
    title: string;
    icon: string;
    description: string;
    longDescription: string;
    features: string[];
    technologies: string[];
    pillars: {
      title: string;
      description: string;
      icon: string;
    }[];
    services: {
      name: string;
      icon: string;
    }[];
  };
}

export default function ServiceDetailClient({
  service,
}: ServiceDetailClientProps) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as LucideIcon;
  const PillarIcon = (icon: string) =>
    Icons[icon as keyof typeof Icons] as LucideIcon;
  const ServiceIcon = (icon: string) =>
    Icons[icon as keyof typeof Icons] as LucideIcon;

  return (
    <article className="pb-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            {IconComponent && (
              <IconComponent className="w-16 h-16" aria-hidden="true" />
            )}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl max-w-3xl mx-auto"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                About Our {service.title}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">{service.longDescription}</p>
              </div>

              {service.pillars && (
                <>
                  <h2 className="text-xl font-semibold mb-4 mt-8">
                    The Three Pillars of our {service.title} Service
                  </h2>
                  <div className="space-y-6">
                    {service.pillars.map((pillar, index) => {
                      const PillarIconComponent = PillarIcon(pillar.icon);
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white p-6 rounded-lg shadow-md"
                        >
                          <div className="flex items-center mb-4">
                            {PillarIconComponent && (
                              <PillarIconComponent
                                className="w-8 h-8 text-purple-600 mr-3"
                                aria-hidden="true"
                              />
                            )}
                            <h3 className="text-lg font-semibold text-purple-600">
                              {pillar.title}
                            </h3>
                          </div>
                          <p className="text-gray-600">{pillar.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {/* Left Column - Key Features */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <CheckCircle2
                          className="w-5 h-5 text-purple-600 mr-3 mt-1"
                          aria-hidden="true"
                        />
                        <span className="text-gray-600">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Right Column - Image */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={`/images/services/${service.title.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                    alt={`${service.title} services illustration`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </div>

              {service.services && (
                <>
                  <h2 className="text-xl font-semibold mb-4 mt-8">
                    Our {service.title} Services
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.services.map((serviceItem, index) => {
                      const ServiceIconComponent = ServiceIcon(
                        serviceItem.icon,
                      );
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-purple-50 p-4 rounded-lg flex items-center"
                        >
                          {ServiceIconComponent && (
                            <ServiceIconComponent
                              className="w-5 h-5 text-purple-600 mr-3"
                              aria-hidden="true"
                            />
                          )}
                          <span className="text-purple-600">
                            {serviceItem.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </>
              )}

              <h2 className="text-xl font-semibold mb-4 mt-8">
                Technologies We Use
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </article>
  );
}
