import React from 'react';
import { Brain, Globe2, Users, Laptop, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Translation",
    description: "State-of-the-art neural machine translation for accurate results"
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "Multiple Languages",
    description: "Support for 22+ Indian languages and growing"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Driven",
    description: "Collaborative platform for language experts and users"
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Easy Integration",
    description: "Simple API integration for developers and businesses"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure Platform",
    description: "Enterprise-grade security for all translations"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Real-time Translation",
    description: "Instant translation for seamless communication"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Empowering India Through Language Technology
          </h2>
          <p className="text-lg text-gray-600">
            Discover the features that make Bhashini the leading platform for language translation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;