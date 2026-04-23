import Banner from "./component/home-page/banner";
import WhyChooseUs from "./component/home-page/why-chose-us";
import Industries from "./component/home-page/Industries";
import ContactUs from "./component/home-page/contact";

export const metadata = {
  title: "ISO Certification & Business Consulting in Kerala",
  description:
    "Expert ISO certification, Lean consulting, and project management services in Kochi. Grow your business with professional consulting solutions.",
};

export default function Home() {
  return (
    <main>
      <Banner/>
      <WhyChooseUs />
      <Industries />
      <ContactUs/>
    </main>
  );
}
