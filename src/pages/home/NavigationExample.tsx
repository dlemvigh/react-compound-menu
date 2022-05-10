import Card from "../../components/Card";
import Nav from "../../components/Nav";

export function NavigationExample() {
  return (
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
            <Nav.Menu id="stay-in-the-loop" href="#" title="Stay in the loop">
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
  );
}
