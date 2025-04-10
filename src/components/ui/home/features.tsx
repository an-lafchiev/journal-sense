import HomeData from "@/../public/content_home.json";
import { BookOpen, LineChart, Shield } from "lucide-react";

const icons = {
  book: <BookOpen className="h-6 w-6 text-teal-600" />,
  chart: <LineChart className="h-6 w-6 text-teal-600" />,
  shield: <Shield className="h-6 w-6 text-teal-600" />,
};

export default function Features() {
  const featuresData = HomeData.features_section;
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">{featuresData.title}</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {featuresData.subHeading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                {icons[feature.icon as keyof typeof icons]}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
