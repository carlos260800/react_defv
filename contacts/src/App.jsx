import axios from "axios";
import { useEffect, useState } from "react";
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
  const [search, setSearch] = useState("");

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

  const handlerSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    getContacts();
  }, []);

  useEffect(() => {
    if (search === "") {
      getContacts();
    }

    if (search !== "") {
      const contactsFilter = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
      );
      setContacts(contactsFilter);
    }
  }, [search]);

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handlerSearch}
        />
      </div>

      <ul>
        {contacts.map((contac) => (
          <MyContact key={contac.id} name={contac.name} phone={contac.phone} />
        ))}
      </ul>
    </div>
  );
};

export default App;
