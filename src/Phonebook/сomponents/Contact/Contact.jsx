import css from "./Contact.module.css";

export default function Contact({ contact, deleteContact }) {
  const handleDelete = () => {
    deleteContact(contact.id);
    console.log(contact.id);
  };

  return (
    <div className={css.contactCard}>
      <div>
        <p>Name: {contact.name}</p>
        <p>Number: {contact.number}</p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
