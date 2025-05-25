import {labelOne, inputClass} from "../AllClass"

export default function InputField({label, type, id}) {
  return (
    <>
      <label htmlFor={id} className={labelOne}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={inputClass}
        placeholder="Digite sua senha"
      />
    </>
  );
}
