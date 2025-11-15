import React, { useState, useRef } from "react";
import { Send, Mail } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Contact() {

  const captchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "El nombre es obligatorio.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "El correo es obligatorio.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "El correo electrónico no es válido.";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "El asunto es obligatorio.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "El mensaje es obligatorio.";
      isValid = false;
    }

    if (!captchaToken) {
      tempErrors.captcha = "Por favor completa el captcha.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Por favor completa todos los campos correctamente.");
      return;
    }

    const form = new FormData();
    form.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "Envío de nuevo formulario de contacto");
    form.append("message", formData.message);


    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("¡Mensaje enviado correctamente!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();

      } else {
        setStatus(result.message || "Error al enviar tu mensaje.");
      }
    } catch (error) {
      setStatus("Ocurrió un error. Intenta nuevamente.");
      console.error("Error:", error);
    }
  };

  return (
    <main className="pt-20 bg-[#04081A] text-white min-h-screen">
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto mt-3">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Hablemos
                </h2>
                <p className="text-gray-300 text-lg">
                  ¿Tienes un proyecto en mente? Me encantaría escucharlo y trabajar juntos.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:dev.valenzuela02@gmail.com"
                  className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
                >
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400 hover:text-purple-400 transition-colors">
                      dev.valenzuela02@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/marlon-emerson-valenzuela-estrada-110a78162"
                  target="_blank"
                  className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
                >
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <BsLinkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-gray-400 hover:text-blue-400 transition-colors">
                      Ver perfil
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/EmersonValenzuela"
                  target="_blank"
                  className="flex items-center space-x-4 hover:opacity-80 transition-opacity"
                >
                  <div className="bg-gray-500/10 p-3 rounded-lg">
                    <BsGithub className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-gray-400 hover:text-gray-200 transition-colors">
                      Ver repositorios
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">

                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Tu nombre completo"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-800/50 border ${errors.name ? "border-red-500" : "border-gray-600"
                        } text-white`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-800/50 border ${errors.email ? "border-red-500" : "border-gray-600"
                        } text-white`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="¿De qué quieres hablar?"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-800/50 border ${errors.subject ? "border-red-500" : "border-gray-600"
                      } text-white`}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <textarea
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    rows="4"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-800/50 border ${errors.message ? "border-red-500" : "border-gray-600"
                      } text-white resize-none`}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-sm">{errors.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <HCaptcha
                    sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
                    onVerify={(token) => setCaptchaToken(token)}
                    onExpire={() => setCaptchaToken(null)}
                    ref={captchaRef}
                    theme="dark"
                  />
                  {errors.captcha && (
                    <p className="text-red-400 text-sm">{errors.captcha}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Enviar Mensaje</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {status && (
                <div className="mt-4 text-center text-sm text-purple-300">
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
