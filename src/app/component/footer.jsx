
export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-6xl mx-auto p-6 text-center">
        <p className="font-semibold">JNB Consulting</p>
        <p className="text-sm mt-2">Consulting Services in Kerala</p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
}