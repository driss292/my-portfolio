import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Contact() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-6 bg-[#0b192e]/50 border-b border-pink-600"
      id="contact"
    >
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">
          <span className="border-b-2 border-pink-600">Contact</span>
        </h2>
        <form
          action={"https://getform.io/f/awnnjkjb"}
          method="POST"
          className="space-y-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              type="text"
              placeholder="Prénom"
              name="firstname"
              className="text-black"
            />
            <Input
              type="text"
              placeholder="Nom"
              name="lastname"
              className="text-black"
            />
          </div>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            className="text-black"
          />
          <Textarea
            rows={15}
            placeholder="Votre Message"
            name="message"
            className="text-black"
          />
          <Button
            type="submit"
            className=" w-full flex items-center px-4 py-6 mx-auto my-8 text-white text-xl bg-pink-600 hover:bg-pink-300 hover:border-black"
          >
            Envoyer
          </Button>
        </form>
      </div>
    </section>
  );
}
