"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import ReCAPTCHA from "react-google-recaptcha";
import { CheckCircle, Loader, XCircle } from "lucide-react";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Textarea } from "@/components/textarea";
import { Checkbox } from "@/components/checkbox";

export default function BeAnExhibitorForm() {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    terms: true,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      terms: checked,
    }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setCaptchaToken(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);

    if (!captchaToken) {
      setErrorMessage("Please complete the reCAPTCHA.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      resetForm();
      setSuccessMessage("Form submitted successfully!");
    } catch (error) {
      setErrorMessage("Failed to submit the form. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
      <Input label="Nome" name="name" type="text" placeholder="Seu nome" value={formData.name} onChange={handleChange} required />
      <Input label="E-mail" name="email" type="email" placeholder="Seu e-mail" value={formData.email} onChange={handleChange} required />
      <Input label="Telefone" name="phone" type="tel" placeholder="+55 (99) 9999-9999" value={formData.phone} onChange={handleChange} required />
      <Input label="Empresa" name="company" type="text" placeholder="Nome da sua empresa" value={formData.company} onChange={handleChange} required />
      <div className="col-span-2">
        <Textarea label="Mensagem" name="message" placeholder="Insira a sua mensagem" value={formData.message} onChange={handleChange} required />
      </div>
      <div className="col-span-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" checked={formData.terms} onChange={handleCheckboxChange}>
            Li e concordo com a
            <Link href="/politica-de-privacidade" className="underline">
              Políticas de Privacidade
            </Link>
          </Checkbox>
        </div>
      </div>
      <div className="col-span-2 min-h-20">
        <ReCAPTCHA sitekey="6LeXMPEqAAAAAF1Du4hCtddBPUsMQIMA70nKkjpz" onChange={handleCaptchaChange} />
      </div>
      <footer className="col-span-2 flex justify-end">
        <Button variant="primary" size="md" type="submit" disabled={loading}>
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader className="animate-spin" />
              Enviando
            </span>
          ) : (
            <span>Enviar</span>
          )}
        </Button>
        {successMessage && (
          <div className="flex items-center gap-2">
            <CheckCircle className="text-primary inline-block h-6 w-6" />
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="flex items-center gap-2">
            <XCircle className="text-error-light inline-block h-6 w-6" />
            {errorMessage}
          </div>
        )}
      </footer>
    </form>
  );
}
