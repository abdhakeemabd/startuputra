export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Startup Sutra for a free consultation.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-10">
        Ready to take your business to the next level? Contact us today for a free consultation.
      </p>
      <div className="max-w-xl mx-auto text-left space-y-4">
        <p><strong>Email:</strong> contact@jnbconsulting.com</p>
        <p><strong>Phone:</strong> +91 12345 67890</p>
        <p><strong>Location:</strong> Kochi, Kerala, India</p>
      </div>
    </div>
  );
}
