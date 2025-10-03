import React, { useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

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

  const storage = useLocalStorage("userData");

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      if (["doorNo", "street", "city"].includes(name)) {
        return { ...prev, address: { ...prev.address, [name]: value } };
      }
      return { ...prev, [name]: value };
    });
  };
  const saveFormData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    storage.setItem(formData);
  };

  const getUserForm = () => {
    return (
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          saveFormData(event)
        }
      >
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandle(event)
            }
          />
        </div>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandle(event)
            }
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
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onChangeHandle(event)
              }
            />
          </div>
          <div>
            <label htmlFor="street">Street</label>
            <input
              id="street"
              name="street"
              type="text"
              value={formData.address.street}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onChangeHandle(event)
              }
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              value={formData.address.city}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onChangeHandle(event)
              }
            />
          </div>
        </div>
        <div>
          <input id="save-btn" type="submit" value="Save to localStorage" />
        </div>
      </form>
    );
  };

  return (
    <div>
      {getUserForm()}
      <div id="result">
        <span>localStorage: (key:userData)</span>
        <button onClick={() => storage.removeItem()}>removeItem</button>
        <pre>{JSON.stringify(storage.getItem())}</pre>
      </div>
    </div>
  );
}
