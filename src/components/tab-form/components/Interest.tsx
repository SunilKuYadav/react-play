import type { FormData } from "../index";

const INTERESTS = [
  "Sports",
  "Music",
  "Travel",
  "Reading",
  "Gaming",
  "Cooking",
  "Art",
  "Technology",
];

const Interest = (props: {
  formData: FormData;
  updateFormData: (
    key: keyof FormData,
    value: FormData[keyof FormData]
  ) => void;
}) => {
  const { formData, updateFormData } = props;

  const handleSelectInterest = (interest: string, isSelected: boolean) => {
    let updatedInterests = [...formData.interests];
    if (isSelected) {
      if (!updatedInterests.includes(interest)) {
        updatedInterests.push(interest);
      }
    } else {
      updatedInterests = updatedInterests.filter((i) => i !== interest);
    }
    updateFormData("interests", updatedInterests);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "200px",
        gap: "0.5rem",
      }}
    >
      {INTERESTS.map((interest) => (
        <div key={interest}>
          <input
            type="checkbox"
            checked={formData.interests.includes(interest)}
            onChange={(e) => {
              handleSelectInterest(interest, e.target.checked);
            }}
          />
          <label style={{ marginLeft: "5px" }} htmlFor={interest}>
            {interest}
          </label>
        </div>
      ))}
    </div>
  );
};

export { Interest };
