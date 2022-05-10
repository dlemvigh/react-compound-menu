import Footer from "../layout/Footer";

import { NavigationExample } from "./NavigationExample";
import { TabExamples } from "./TabExamples";

export function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationExample />
      </header>
      <main className="App-main">
        <TabExamples />
      </main>
      <Footer />
    </div>
  );
}
