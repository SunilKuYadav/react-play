import type { FormData } from "../index";

const Setting = (props: {
  formData: FormData;
  updateFormData: (
    key: keyof FormData,
    value: FormData[keyof FormData]
  ) => void;
}) => {
  const { formData, updateFormData } = props;

  return (
    <div>
      <p>Do you agree with term</p>
      <input
        checked={formData.agreedToTerms === true}
        type="radio"
        name="agreedToTerms"
        value="yes"
        onChange={() => updateFormData("agreedToTerms", true)}
      />
      <label>yes</label>
      <br />
      <input
        checked={formData.agreedToTerms === false}
        type="radio"
        name="agreedToTerms"
        value="no"
        onChange={() => updateFormData("agreedToTerms", false)}
      />
      <label>No</label>
    </div>
  );
};

export { Setting };
