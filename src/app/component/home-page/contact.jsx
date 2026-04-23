import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="bg-black text-white py-16 text-center px-4">
      <h2 className="text-3xl font-bold">
        Ready to Grow Your Business?
      </h2>
      <p className="mt-4">
        Contact us today for expert consulting and ISO certification services.
      </p>

      <Link href="/contact">
        <button className="mt-6 bg-white text-black px-6 py-3 rounded">
          Contact Now
        </button>
      </Link>
    </section>
  )
}