import ContactForm from "./сomponents/ContactForm/ContactForm";
import SearchBox from "./сomponents/SearchBox/SearchBox";
import ContactList from "./сomponents/ContactList/ContactList";

export default function AppPhonebook() {
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}
