import Footer from "./pages/layout/Footer";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Tabs from "./components/Tabs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card style={{ padding: 16 }}>
          <Nav>
            <Nav.Bar>
              <Nav.Item href="#">Home</Nav.Item>
              <Nav.Menu id="news" title="News">
                <Nav.Item href="#">Breaking news</Nav.Item>
              </Nav.Menu>
              <Nav.Item href="#departments">Departments</Nav.Item>
              <Nav.Menu id="who-are-we" title="Who are we">
                <Nav.Item href="#who">Who's who</Nav.Item>
                <Nav.Menu
                  id="stay-in-the-loop"
                  href="#"
                  title="Stay in the loop"
                >
                  <Nav.Item href="#">Siteimprove Glossary</Nav.Item>
                  <Nav.Item href="#">Useful email distribution lists</Nav.Item>
                  <Nav.Item href="#">Useful slack channels</Nav.Item>
                </Nav.Menu>
                <Nav.Item href="#">Executive Leadership Team</Nav.Item>
              </Nav.Menu>
              <Nav.Item href="#sintra">My Sintra</Nav.Item>
            </Nav.Bar>
          </Nav>
        </Card>
      </header>
      <main className="App-main">
        <Tabs>
          <Card>
            <Tabs.HeaderBar>
              <Tabs.Header id="tab-1">Tab 1</Tabs.Header>
              <Tabs.HeaderDivider />
              <Tabs.Header id="tab-2">Tab 2</Tabs.Header>
              <Tabs.HeaderDivider />
              <Tabs.Header id="tab-3">Tab 3</Tabs.Header>
            </Tabs.HeaderBar>
            <Tabs.Divider />
            <div style={{ padding: 8 }}>
              <Tabs.Content id="tab-1">111</Tabs.Content>
              <Tabs.Content id="tab-2">2</Tabs.Content>
              <Tabs.Content id="tab-3">3</Tabs.Content>
            </div>
          </Card>
        </Tabs>

        <Tabs tabIds={["tab-1", "tab-2", "tab-3"]}>
          <Card style={{ marginTop: 32 }}>
            <Tabs.HeaderBar>
              <Tabs.Header id="tab-1">Tab 1</Tabs.Header>
              <Tabs.HeaderDivider />
              <Tabs.Header id="tab-2">Tab 2</Tabs.Header>
              <Tabs.HeaderDivider />
              <Tabs.Header id="tab-3">Tab 3</Tabs.Header>
            </Tabs.HeaderBar>
          </Card>
          <Card style={{ marginTop: 8, padding: 8 }}>
            <Tabs.Content id="tab-1">1</Tabs.Content>
            <Tabs.Content id="tab-2">2</Tabs.Content>
            <Tabs.Content id="tab-3">3</Tabs.Content>
          </Card>
          <Card style={{ marginTop: 8, padding: 8 }}>
            <Tabs.Content id="tab-1">1.1</Tabs.Content>
            <Tabs.Content id="tab-2">2.2</Tabs.Content>
            <Tabs.Content id="tab-3">3.3</Tabs.Content>
          </Card>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}

export default App;
