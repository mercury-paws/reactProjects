import ContactForm from "./сomponents/ContactForm/ContactForm";
import SearchBox from "./сomponents/SearchBox/SearchBox";
import ContactList from "./сomponents/ContactList/ContactList";
import initialContacts from "./phonebook.json";
import { useState } from "react";

export default function AppPhonebook() {
  const [contactList, setContactList] = useState(initialContacts);

  const handleFilter = (filterInput) => {
    setContactList(() =>
      initialContacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterInput.toLowerCase())
      )
    );
  };

  const handleDeleteContact = (contactId) => {
    setContactList((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleAddContact = (value) => {
    setContactList((prevContacts) => [...prevContacts, value]);
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={handleAddContact} />
        <SearchBox searchName={handleFilter} />
        <ContactList
          contacts={contactList}
          deleteContact={handleDeleteContact}
        />
      </div>
    </>
  );
}
