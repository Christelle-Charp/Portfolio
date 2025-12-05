// components/ContactForm.tsx
export default function ContactForm() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="space-y-6 w-full max-w-2xl"
    >
      <input
        type="hidden"
        name="access_key"
        value={process.env.NEXT_PUBLIC_WEB3_KEY}
      />

      <div>
        <label htmlFor="name" className="block mb-2 text-white">
          Votre nom
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          required
          className="w-full p-3 bg-black border border-white text-white rounded hover:border-blue-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-white">
          Votre mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
          className="w-full p-3 bg-black border border-white text-white rounded hover:border-blue-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-white">
          Votre message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={5}
          className="w-full p-3 bg-black border border-white text-white rounded hover:border-blue-400"
        />
      </div>

      <button
        type="submit"
        className="bg-white text-black px-6 py-3 rounded hover:text-blue-400"
      >
        Envoyer
      </button>
    </form>
  )
}