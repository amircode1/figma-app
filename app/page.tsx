import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GiftSection from "./components/GiftSection";
import Category from "./components/Category";
import StorySection from "./components/StorySection";
import Footer from "./components/Footer";
import ServiceBar from "./components/ServiceBar";
import ProductSlider from "./components/ProductSlider";
import dataRaw from "./data.json";
import BlogSlider from "./components/BlogSection";

const data = dataRaw as {
  products: { image: string; title: string; price: string }[];
  machines: { image: string; title: string; price: string }[];
  coffeeStuff: { image: string; title: string; price: string }[];
};

export default function Home() {
  return (
    <main className="bg-[#151515] min-h-screen font-yekan">
      <Header />
      <HeroSection />
      <Category />
      <ProductSlider
        title="پیشنهاد قهوه برای هر ذائقه و سلیقه"
        products={data.products}
      />
      <GiftSection />
      <ProductSlider
        title="لذت قهوه در خانه با دستگاه های اسپرسوساز"
        products={data.machines}
      />
      <StorySection />
      <ProductSlider
        title="از جوشوندن آب تا نوشیدن قهوه هر چی که لازم داری"
        products={data.coffeeStuff}
      />
      <BlogSlider/>
      <ServiceBar />
      <Footer />
    </main>
  );
}
