import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    title : "",
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_20tfuqq",      // Service ID
        "template_wtbo2rb",     // Template ID
        {
          title: formData.title,  // Untuk {{title}} di subject
          name: formData.name,   // Untuk {{name}}
          email: formData.email, // Untuk {{email}}
          message: formData.message, // Untuk {{message}}
        },
        "92WRrlXl9bzxdC1uo"      // Public key
      );

      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");

    } catch (error) {
      console.error("Email Error:", error);
      setIsLoading(false);
      showAlertMessage("danger", "Something went wrong, please try again!");
    }
  };

  // ---- NEW: Send WhatsApp Function ----
  const sendWhatsappMessage = () => {
    const phoneNumber = "6281212271964"; // <== ganti ke nomor kamu
    const text = `Halo, saya ${formData.name}. Pesan: ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank"); // open WhatsApp
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life — I'm here to help.
          </p>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
              <label htmlFor="name" className="feild-label">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                className="field-input field-input-focus"
                placeholder="Recruit"
                autoComplete="name"
                value={formData.title}
                onChange={handleChange}
                required
              />
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="feild-label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="johndoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="feild-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-1 py-3 mb-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send Email" : "Sending..."}
          </button>

          {/* WhatsApp Button */}
          <button
            type="button"
            onClick={sendWhatsappMessage}
            className="w-full px-1 py-3 text-lg text-center text-black bg-green-400 rounded-md cursor-pointer hover:bg-green-500 hover:scale-105 transition"
          >
            Chat via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
