import { Link, Navigate, useParams } from "react-router-dom";
import { getProductBySlug } from "../data/product";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetailScreen = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return <Navigate to="/product/iphone-17" replace />;
  }

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      <Navbar />

      <main className="pt-12">
        <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6e6e73]">
            {product.eyebrow}
          </p>
          <h1 className="mt-3 text-5xl font-semibold sm:text-6xl lg:text-7xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-[#424245] sm:text-2xl">
            {product.tagline}
          </p>
          <p className="mt-5 text-lg font-semibold text-[#1d1d1f]">{product.price}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/iphone"
              className="rounded-full bg-[#0071e3] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0077ed]"
            >
              Buy
            </Link>
            <Link
              to="/"
              className="rounded-full border border-[#d2d2d7] px-6 py-2.5 text-sm font-semibold text-[#0071e3] transition hover:bg-[#f5f5f7]"
            >
              Learn more
            </Link>
          </div>

          <div className="mt-14 w-full overflow-hidden rounded-[40px] bg-[#f5f5f7] p-4 sm:p-8 lg:p-10">
            <img
              src={product.heroImage}
              alt={product.heroImageAlt}
              className="h-full w-full rounded-[28px] object-cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {product.highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-[#f5f5f7] p-8 text-left shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-[#1d1d1f]">{item.title}</h3>
                <p className="mt-3 text-[17px] leading-7 text-[#424245]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#fafafa] py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="overflow-hidden rounded-[40px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-16">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6e6e73]">
                    {product.sectionLabel}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                    {product.sectionTitle}
                  </h2>
                  <p className="mt-5 text-[17px] leading-8 text-[#424245]">
                    {product.sectionText}
                  </p>

                  <ul className="mt-8 space-y-3 text-[15px] text-[#1d1d1f]">
                    {product.specs.map((spec) => (
                      <li key={spec.label} className="flex justify-between border-b border-[#e5e5e5] pb-3">
                        <span className="text-[#6e6e73]">{spec.label}</span>
                        <span className="font-semibold">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <img
                  src={product.heroImage}
                  alt={product.heroImageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="rounded-[40px] bg-[#f5f5f7] p-8 sm:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">{product.detailTitle}</h2>
                <p className="mt-5 text-[17px] leading-8 text-[#424245]">
                  {product.detailText}
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6e6e73]">
                  Why Apple
                </p>
                <ul className="mt-5 space-y-4 text-[15px] leading-7 text-[#424245]">
                  <li>• Seamless integration with iPhone, iPad, Mac, and Apple Watch.</li>
                  <li>• Privacy features built into the core of every experience.</li>
                  <li>• Premium support and service with AppleCare and the Apple Store.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailScreen;
