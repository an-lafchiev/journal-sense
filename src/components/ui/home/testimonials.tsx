import HomeData from "@/../public/content_home.json";

export default function Testimonials() {
  const testimonialsData = HomeData.testimonials_section;

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">{testimonialsData.title}</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {testimonialsData.subHeading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.testimonials.map(({ name, role, quote }, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-semibold">{name}</h4>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>
              <p className="text-gray-600">{quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
