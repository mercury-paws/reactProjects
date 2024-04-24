import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <>
      <div>
        <p>Contact List:</p>
        <ul className={css.contactList}>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
