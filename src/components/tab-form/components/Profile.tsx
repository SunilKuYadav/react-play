import type { FormData } from "../index";

const Profile = (props: {
  formData: FormData;
  updateFormData: (
    key: keyof FormData,
    value: FormData[keyof FormData]
  ) => void;
}) => {
  const { formData, updateFormData } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <label>Name</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => updateFormData("name", e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => updateFormData("email", e.target.value)}
      />
      <label>Age</label>
      <input
        type="number"
        value={formData.age}
        onChange={(e) => updateFormData("age", Number(e.target.value))}
      />
    </div>
  );
};

export { Profile };
