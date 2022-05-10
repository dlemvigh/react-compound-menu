import Card from "../../components/Card";
import Tabs from "../../components/Tabs";

export function TabExamples() {
  return (
    <>
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
    </>
  );
}
