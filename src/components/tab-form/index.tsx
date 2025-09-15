import { useState } from "react";
import { Profile } from "./components/Profile";
import { Interest } from "./components/Interest";
import { Setting } from "./components/Setting";

import "./style.css";

// types
export interface FormData {
  name: string;
  email: string;
  age: number;
  interests: string[];
  agreedToTerms: boolean;
}

// consents
const tabs = [
  { name: "Profile", component: Profile },
  { name: "Interest", component: Interest },
  { name: "Setting", component: Setting },
];

const TabForm = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: 0,
    interests: ["Reading"],
    agreedToTerms: false,
  });

  const handleUpdateFormData = (
    key: keyof FormData,
    value: FormData[keyof FormData]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  const handleTabUpdate = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div style={{ marginTop: "1rem", border: "1px solid blue" }}>
      <div className="tab-wrapper">
        {tabs.map((tab, index) => (
          <button
            className="button"
            key={tab.name}
            onClick={() => handleTabUpdate(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {(() => {
          const ActiveTab = tabs[currentTab].component;
          return (
            <ActiveTab
              formData={formData}
              updateFormData={handleUpdateFormData}
            />
          );
        })()}
      </div>
      {currentTab === tabs.length - 1 && <button>Save</button>}
    </div>
  );
};

export { TabForm };
