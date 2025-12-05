// components/Contact.tsx
import ContactForm from "../ContactForm"

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white pl-24 pr-12 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Contact</h2>
        <p className="text-lg mb-12">
          Besoin de plus d&apos;informations ? N&apos;hésitez pas à me laisser un message.
        </p>

        {/* Wrapper pour centrer uniquement le formulaire */}
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}