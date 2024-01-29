import UtilityButton from "../Buttons/UtilityButton";

export default function ContactFormButton({ label, close, ...rest }) {
  return (
    <button {...rest} className="flex items-center justify-center">
      <UtilityButton label={label} styles="" />
    </button>
  );
}
