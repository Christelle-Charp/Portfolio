"use client";

import { useState } from "react";

export default function ContactForm() {
  const [errors, setErrors] = useState<{name?: string; email?: string; message?: string}>({});

  function validateForm(formData: FormData) {
    const newErrors: typeof errors = {};

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    if (name.length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Veuillez entrer une adresse email valide.";
    }

    if (message.length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères.";
    }

    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return; // stop si erreurs

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      alert("Votre message a été envoyé !");
      form.reset();
      setErrors({});
    } else {
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl">
      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3_KEY} />

      <div>
        <label htmlFor="name" className="block mb-2 text-white">Votre nom</label>
        <input
          type="text"
          name="name"
          id="name"
          className={`w-full p-3 bg-black border rounded hover:border-blue-400 text-white ${
            errors.name ? "border-red-500" : "border-white"
          }`}
        />
        {errors.name && <p className="text-red-400 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-white">Votre mail</label>
        <input
          type="email"
          name="email"
          id="email"
          className={`w-full p-3 bg-black border rounded hover:border-blue-400 text-white ${
            errors.email ? "border-red-500" : "border-white"
          }`}
        />
        {errors.email && <p className="text-red-400 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-white">Votre message</label>
        <textarea
          name="message"
          id="message"
          rows={5}
          className={`w-full p-3 bg-black border rounded hover:border-blue-400 text-white ${
            errors.message ? "border-red-500" : "border-white"
          }`}
        />
        {errors.message && <p className="text-red-400 mt-1">{errors.message}</p>}
      </div>

      <button type="submit" className="bg-white text-black px-6 py-3 rounded hover:text-blue-400">
        Envoyer
      </button>
    </form>
  );
}