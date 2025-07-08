import React from "react";
import Card from "../Card";
import { FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaChartLine className="text-blue-500 text-4xl mb-4" />,
      title: "Advanced Analytics",
      description:
        "Gain deep insights into your sales performance with powerful, real-time dashboards and reports.",
    },
    {
      icon: <FaUsers className="text-green-500 text-4xl mb-4" />,
      title: "Customer Relationship Management",
      description:
        "Strengthen customer loyalty and engagement with integrated CRM tools.",
    },
    {
      icon: <FaLightbulb className="text-purple-500 text-4xl mb-4" />,
      title: "AI-Powered Recommendations",
      description:
        "Leverage artificial intelligence to identify new opportunities and optimize your sales funnel.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
          Why Choose <span className="text-blue-600">Slerate Sales Boost?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
