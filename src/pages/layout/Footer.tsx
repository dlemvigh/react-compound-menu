import {
  RecontextConsumer,
  RecontextProvider,
} from "../../components/recontext";

export default function Footer() {
  return (
    <footer className="App-footer">
      <RecontextProvider name="aaa">
        <RecontextConsumer />
        <hr />
        <RecontextProvider name="bbb">
          <RecontextConsumer />
          <hr />
          <RecontextProvider name="ccc">
            <RecontextConsumer />
          </RecontextProvider>
        </RecontextProvider>
      </RecontextProvider>
    </footer>
  );
}
