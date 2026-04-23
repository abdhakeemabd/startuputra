export const metadata = {
  title: "Our Services",
  description: "Explore our expert consulting services, including ISO certification and Lean consulting.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">ISO Certification</h2>
          <p className="text-gray-600">Expert guidance to help you achieve ISO certification quickly and efficiently.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Lean Consulting</h2>
          <p className="text-gray-600">Optimize your processes and reduce waste with our Lean consulting services.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Project Management</h2>
          <p className="text-gray-600">Professional management of your critical business projects from start to finish.</p>
        </div>
      </div>
    </div>
  );
}
