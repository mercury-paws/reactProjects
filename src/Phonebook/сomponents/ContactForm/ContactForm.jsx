import { Formik, Form, ErrorMessage, Field } from "formik";
import { nanoid } from "nanoid";

export default function ContactForm({ addContact }) {
  const contactId = nanoid();
  const addingContact = (values) => {
    const newContact = {
      id: contactId,
      name: values.name,
      number: values.number,
    };

    addContact(newContact);
  };

  return (
    <>
      <div>
        <p>Add the contact</p>
      </div>
      <Formik
        initialValues={{
          name: "John",
          number: "777 - 77 - 77",
        }}
        onSubmit={addingContact}
      >
        <Form id={contactId}>
          <label htmlFor={contactId}>Name</label>
          <Field id={contactId} name="name" />
          <ErrorMessage name="name" />
          <label htmlFor={contactId}>Number</label>
          <Field id={contactId} name="number" />
          <ErrorMessage name="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
