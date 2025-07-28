import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import classes from "./Contact.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const myLocation: [number, number] = [41.77669417841965, 44.806636812657594];

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [message, setMessage] = useState("");

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!nameRef.current?.value.trim()) errors.name = "Name is required.";
    if (!emailRef.current?.value.trim()) {
      errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(emailRef.current.value)) {
      errors.email = "Invalid email format.";
    }

    if (!phoneRef.current?.value.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\+?\d{7,15}$/.test(phoneRef.current.value)) {
      errors.phone = "Invalid phone number.";
    }

    if (!message.trim()) errors.message = "Message cannot be empty.";

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) errors.recaptcha = "Please confirm you're not a robot.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const recaptchaToken = recaptchaRef.current?.getValue();

    // ✅ Ready to submit:
    console.log("Form submitted:");
    console.log({
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      message,
      recaptchaToken,
    });

    recaptchaRef.current?.reset();
    setFormErrors({});
    setMessage("");

    // Optionally: clear inputs manually
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (phoneRef.current) phoneRef.current.value = "";
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitMessage}>
        <h1>Text Us</h1>
        <div className={classes.miniCont}>
            <input
            ref={nameRef}
            name="Name"
            type="text"
            placeholder="Name"
            className={classes.input}
            />
            {formErrors.name && <p className={classes.error}>{formErrors.name}</p>}
        </div>
        <div className={classes.miniCont}>
            <input
            ref={emailRef}
            name="Mail"
            type="email"
            placeholder="Mail"
            className={classes.input}
            />
            {formErrors.email && <p className={classes.error}>{formErrors.email}</p>}
        </div>
        <div className={classes.miniCont}>
            <input
            ref={phoneRef}
            name="Phone"
            type="tel"
            placeholder="Phone Number"
            className={classes.input}
            />
            {formErrors.phone && <p className={classes.error}>{formErrors.phone}</p>}
        </div>
        <div className={classes.miniCont}>
            <textarea
            ref={messageRef}
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
            }
            className={classes.bigTextArea}
            placeholder="Write your message here..."
            />
            {formErrors.message && <p className={classes.error}>{formErrors.message}</p>}
        </div>
            <ReCAPTCHA sitekey="YOUR_SITE_KEY_HERE" ref={recaptchaRef} />
            {formErrors.recaptcha && <p className={classes.error}>{formErrors.recaptcha}</p>}

        <button className={classes.button} type="submit">
          Send
        </button>
      </form>
      <div className={classes.filler}></div>
      <div className={classes.contacts}>
        <div className={classes.map}>
                  <MapContainer center={myLocation} zoom={17} style={{ height: '100%', width: '100' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={myLocation}>
                      <Popup>Giza</Popup>
                    </Marker>
                  </MapContainer>
        </div>
        <div className={classes.links}>
          <p className={classes.link}>info@gizashop.ge</p>
          <p className={classes.link}>Identification Code: 69696969</p>
          <p className={classes.link}>(032) 420 69 69</p>
          <p className={classes.link}>Tbilisi, Temqa, Anapis 414, Open Heart</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
