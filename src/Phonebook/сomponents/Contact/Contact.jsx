import css from "./Contact.module.css";

export default function Contact({ contact }) {
  return (
    <div className={css.contactCard}>
      <div>
        <p>Name: {contact.name}</p>
        <p>Number: {contact.number}</p>
      </div>
      <button type="button">Delete</button>
    </div>
  );
}
