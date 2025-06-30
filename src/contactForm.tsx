// ContactForm.tsx
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_6bxfr4d',   // ID du service
        'template_aulbaam',  // ID du template
        form.current!,
        '-_yOcfiHTZIg1C0zd' // Clé publique
      )
      .then(
        () => alert('Message envoyé !'),
        () => alert('Erreur lors de l’envoi')
      )
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4 mt-10">
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Votre message"
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Envoyer
      </button>
    </form>
  )
}

export default ContactForm
