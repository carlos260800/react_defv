import axios from "axios";
import { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import "./App.css";

// const MyContact = (props) => {
const MyContact = ({ name, phone }) => {
  return (
    <li className="contact-row">
      <div>
        <img className="contact-avatar" src="https://picsum.photos/100" />
      </div>
      <div className="contact-info">
        {/* <h4>{props.name}</h4> */}
        <h4>{name}</h4>
        {/* <span>{props.phone}</span> */}
        <span>{phone}</span>
      </div>
      <div className="phone-icon">
        <span>📞</span>
      </div>
    </li>
  );
};

const App = () => {
  const [contacts, setContacts] = useState([]);

  const getContacts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setContacts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const search = (value) => {
    if (value === "") {
      getContacts();
    }

    if (value !== "") {
      const contactsFilter = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(contactsFilter);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="App">
      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={(values) => {
          search(values.search);
        }}
      >
        <Form>
          <div className="form">
            <Field id="search" name="search" placeholder="Search" />
            <button type="submit">Search</button>
          </div>
        </Form>
      </Formik>
      <ul>
        {contacts.map((contac) => (
          <MyContact key={contac.id} name={contac.name} phone={contac.phone} />
        ))}
      </ul>
    </div>
  );
};

export default App;
