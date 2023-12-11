"use client";
import { Tab } from "@headlessui/react";

export default function MyTabs() {
  return (
    <div className="flex flex-col items-center">
      <Tab.Group>
        <Tab.List className="flex items-center gap-4">
          <Tab>Works</Tab>
          <Tab>Contact</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Works</Tab.Panel>
          <Tab.Panel>Contact</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
