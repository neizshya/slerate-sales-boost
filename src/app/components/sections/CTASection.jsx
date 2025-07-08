"use client";
import React, { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import Form from "../Form";

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert(`Thank you, ${data.name}! Your inquiry has been sent.`);
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("There was an error submitting your form. Please try again later.");
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };
  return (
    <section
      className="bg-blue-700 text-white py-16 md:py-20 text-center"
      id="CTA">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Skyrocket Your Sales?
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 opacity-90">
          Thousands of businesses already boosting their revenue with Slerate.
        </p>
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="secondary"
          className="text-base md:text-lg bg-yellow-400 text-blue-800 hover:bg-yellow-300">
          Join for Free
        </Button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Sign Up">
        <Form
          isLoading={isLoading}
          onSubmit={handleFormSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </section>
  );
};

export default CTASection;
