import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: {
      doorNo: "",
      street: "",
      city: "",
    },
  });

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const saveFormData = () => {};

  const getUserForm = () => {
    return (
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandle(event)
            }
          />
        </div>
        <div>
          <label htmlFor="phone">Phone No.</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            pattern="[0-9]{10}"
            maxLength={10}
            value={formData.phone}
            onChange={(event) => onChangeHandle(event)}
          />
        </div>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(event) => onChangeHandle(event)}
          />
        </div>
        <div id="address-container">
          <div className="input-title">Address</div>
          <div>
            <label htmlFor="doorNo">Door No.</label>
            <input
              id="doorNo"
              name="doorNo"
              type="text"
              value={formData.address.doorNo}
              onChange={(event) => onChangeHandle(event)}
            />
          </div>
          <div>
            <label htmlFor="street">Street</label>
            <input
              id="street"
              name="street"
              type="text"
              value={formData.address.street}
              onChange={(event) => onChangeHandle(event)}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              value={formData.address.city}
              onChange={(event) => onChangeHandle(event)}
            />
          </div>
        </div>
        <div>
          <input
            id="save-btn"
            type="submit"
            value="Save to localStorage"
            onSubmit={saveFormData}
            onChange={(event) => onChangeHandle(event)}
          />
        </div>
      </form>
    );
  };

  return <div>{getUserForm()}</div>;
}
