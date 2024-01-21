import Calculator from "~/components/calculator";
import Footer from "~/components/footer";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-5xl px-4 my-20 mx-auto">
        <Calculator />
      </div>
      <Footer />
    </div>
  );
}
