import { useRef, useState } from "react";
import GenderSelector from "../components/GenderSelector";
import AgreeCheckbox from "../components/AgreeCheckbox";
import classes from "./SignupForm.module.css";

const SignupForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const codeRef = useRef<HTMLInputElement>(null);

  const [gender, setGender] = useState("");
  const [agreeRules, setAgreeRules] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: Record<string, string> = {};

    const email = emailRef.current?.value.trim() || "";
    const password = passwordRef.current?.value.trim() || "";
    const repeatPassword = repeatPasswordRef.current?.value.trim() || "";
    const name = nameRef.current?.value.trim() || "";
    const surname = surnameRef.current?.value.trim() || "";
    const phone = phoneRef.current?.value.trim() || "";
    const code = codeRef.current?.value.trim() || "";

    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    if (password !== repeatPassword) newErrors.repeatPassword = "Passwords do not match.";
    if (!gender) newErrors.gender = "Gender must be selected.";
    if (!name) newErrors.name = "Name is required.";
    if (!surname) newErrors.surname = "Surname is required.";
    if (!phone) newErrors.phone = "Phone number is required.";
    if (!code) newErrors.code = "Code is required.";
    if (!agreeRules) newErrors.agree = "You must agree to the Terms and Conditions.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted with:", {
        email,
        password,
        name,
        surname,
        phone,
        code,
        gender,
        agreeRules,
      });
      // Optionally reset the form here
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.container}>
      <h1>Create Account</h1>

      <div className={classes.inputContainer}>
        <input placeholder="Email" className={classes.input} ref={emailRef} />
        {errors.email && <p className={classes.error}>{errors.email}</p>}

        <input type="password" placeholder="Password" className={classes.input} ref={passwordRef} />
        {errors.password && <p className={classes.error}>{errors.password}</p>}

        <input type="password" placeholder="Repeat Password" className={classes.input} ref={repeatPasswordRef} />
        {errors.repeatPassword && <p className={classes.error}>{errors.repeatPassword}</p>}
      </div>

      <div className={classes.gender}>
        <h2>Gender</h2>
        <GenderSelector
          value={gender}
          onChange={setGender}
          className={classes.optionButton}
          selectedClassName={classes.selected}
        />
        {errors.gender && <p className={classes.error}>{errors.gender}</p>}
      </div>

      <div className={classes.inputContainer}>
        <input placeholder="Name" className={classes.input} ref={nameRef} />
        {errors.name && <p className={classes.error}>{errors.name}</p>}

        <input placeholder="Surname" className={classes.input} ref={surnameRef} />
        {errors.surname && <p className={classes.error}>{errors.surname}</p>}

        <input placeholder="Phone Number" className={classes.input} ref={phoneRef} />
        {errors.phone && <p className={classes.error}>{errors.phone}</p>}

        <input placeholder="Code" className={classes.input} ref={codeRef} />
        {errors.code && <p className={classes.error}>{errors.code}</p>}
      </div>

      <AgreeCheckbox
        checked={agreeRules}
        onChange={setAgreeRules}
        label={
          <>
            I agree to the{" "}
            <a
              style={{ color: "blue" }}
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
          </>
        }
      />
      {errors.agree && <p className={classes.error}>{errors.agree}</p>}

      <button className={classes.button} type="submit">
        Confirm
      </button>
    </form>
  );
};

export default SignupForm;
