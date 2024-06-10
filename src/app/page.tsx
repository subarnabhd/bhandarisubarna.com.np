import Slider from "./component/Slider";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Bar from "./component/Bar";

export default function Home() {
  return (
    <main >
      <Navbar />
      <Slider />
      <Bar />
      <About />
    </main>
  );
}
