"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://getform.io/f/awnnjkjb", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setFormData({ firstname: "", lastname: "", email: "", message: "" });
        toast.success("Formulaire envoyé avec succès !"); // Affichage de la notification
      } else {
        console.error("Erreur lors de l'envoi du formulaire.");
        toast.error("Erreur lors de l'envoi du formulaire.");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 md:px-6 bg-[#0b192e]/50 border-b border-pink-600"
      id="contact"
    >
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">
          <span className="border-b-2 border-pink-600">Contact</span>
        </h2>
        <form onSubmit={handleSubmit} method="POST" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              type="text"
              placeholder="Prénom"
              required
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="text-black"
            />
            <Input
              type="text"
              required
              placeholder="Nom"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="text-black"
            />
          </div>
          <Input
            type="email"
            required
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-black"
          />
          <Textarea
            rows={15}
            required
            placeholder="Votre Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="text-black"
          />
          <Button
            type="submit"
            className="w-full flex items-center px-4 py-6 mx-auto my-8 text-white text-xl bg-pink-600 hover:bg-pink-300 hover:border-black"
          >
            Envoyer
          </Button>
        </form>
        <ToastContainer /> {/* Conteneur pour les toasts */}
      </div>
    </section>
  );
}
