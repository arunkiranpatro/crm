"use client";

import { Tabs, TabLinks, TabLink, Tab, Loading, ReadOnlyData } from "digital-crm";

export default function CrmDemoPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Digital CRM &#8211; Next.js Integration Demo</h1>
      <p>
        Components imported from the <code>digital-crm</code> library.
      </p>

      <hr />

      <h2>Loading Component</h2>
      <Loading />
      <Loading>Fetching account data...</Loading>

      <hr />

      <h2>ReadOnlyData Component</h2>
      <ReadOnlyData label="Account Name" value="Acme Corporation" />
      <ReadOnlyData label="Account Manager" value="Jane Smith" />
      <ReadOnlyData label="Credit Limit" value="$50,000" ccicon />

      <hr />

      <h2>Tabs Component</h2>
      <Tabs defaultActive="0">
        <TabLinks>
          <TabLink id="0">Overview</TabLink>
          <TabLink id="1">Transactions</TabLink>
          <TabLink id="2">Settings</TabLink>
        </TabLinks>
        <Tab id="0">
          <div style={{ padding: "1rem" }}>
            <strong>Overview Panel</strong>
            <p>This tab shows the account overview.</p>
          </div>
        </Tab>
        <Tab id="1" deferLoaded>
          <div style={{ padding: "1rem" }}>
            <strong>Transactions Panel</strong>
            <p>Transaction history loads here.</p>
          </div>
        </Tab>
        <Tab id="2" deferLoaded>
          <div style={{ padding: "1rem" }}>
            <strong>Settings Panel</strong>
            <p>Account settings displayed here.</p>
          </div>
        </Tab>
      </Tabs>
    </main>
  );
}
