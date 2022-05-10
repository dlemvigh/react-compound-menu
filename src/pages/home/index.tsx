import Footer from "../layout/Footer";

import "./App.css";
import { Navigation } from "./Navigation";
import { TabExamples } from "./TabExamples";

export function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main className="App-main">
        <TabExamples />
      </main>
      <Footer />
    </div>
  );
}
