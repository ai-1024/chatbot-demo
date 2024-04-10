import Conversations from "./conversations";
import Footer from "./footer";
import Header from "./header";

export default function () {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <div className="flex-1">
        <Conversations />
      </div>
      <div className="mb-8 px-4">
        <Footer />
      </div>
    </div>
  );
}
