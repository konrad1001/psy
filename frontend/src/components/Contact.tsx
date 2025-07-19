interface ContactProps {
  content: any; // Replace `any` with the actual type for Contact data
}

function Contact({ content }: ContactProps) {
  return (
    <section>
      <h2>Contact</h2>
      <p>{content?.email || "No contact information available."}</p>
    </section>
  );
}

export default Contact;
