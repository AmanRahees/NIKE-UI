import { Navbar, Hero } from "./components/index";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">{/* Popular Products */}</section>
      <section className="padding">{/* Super Quality */}</section>
      <section className="padding-x py-10">{/* Services */}</section>
      <section className="padding">{/* Special Offers */}</section>
      <section className="bg-pale-blue padding">
        {/* Customer Reviews */}
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        {/* Subscribe */}
      </section>
      <section className="bg-black padding-x padding-t pb-8">Footer</section>
    </main>
  );
};

export default App;
