import HomeData from "@/../public/content_home.json";

export default function About() {
  const aboutData = HomeData.how_it_works_section;

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">{aboutData.title}</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {aboutData.subHeading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {aboutData.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-teal-600 text-white rounded-full flex items-center justify-center mb-6 text-lg font-bold">
                {step.step_number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
