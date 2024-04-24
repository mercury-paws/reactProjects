import ContactForm from "./сomponents/ContactForm/ContactForm";
import SearchBox from "./сomponents/SearchBox/SearchBox";
import ContactList from "./сomponents/ContactList/ContactList";
import initialContacts from "./phonebook.json";

export default function AppPhonebook() {
  console.log(initialContacts);
  const handleAddContact = (value) => {
    console.log(value);
  };
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={handleAddContact} />
        <SearchBox />
        <ContactList contacts={initialContacts} />
      </div>
    </>
  );
}
