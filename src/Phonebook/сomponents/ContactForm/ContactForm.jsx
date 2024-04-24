import { Formik, Form, ErrorMessage, Field } from "formik";

export default function ContactForm(addContact) {
  return (
    <>
      <div>
        <p>Add the contact</p>
      </div>
      <Formik
        initialValues={{
          name: "John",
          number: 777 - 77 - 77,
        }}
        onSubmit={addContact}
      >
        <Form>
          <label>Name</label>
          <Field name="name" />
          <ErrorMessage name="name" />
          <label>Number</label>
          <Field name="number" />
          <ErrorMessage name="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
