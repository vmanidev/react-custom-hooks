# useLocalStorage

A custom React hook for synchronizing a state variable with the browser’s **localStorage**.
It helps you **persist user state across page reloads**, while keeping the interface of `useState`-style hooks.
Designed for easy drop-in use in React apps.

---

## Features

* Initializes state from `localStorage` (if available), falling back to a default value
* Automatically writes updates to `localStorage` when the value changes
* Supports JSON serialization / deserialization
* Optionally supports a `remove` or reset method (if implemented)

---

## Demo Screenshorts/Recordings

<img width="1440" height="655" alt="Screenshot 2025-10-03 at 10 15 31 PM" src="https://github.com/user-attachments/assets/3f6e90bd-9101-4db4-8316-39310f83111f" />


https://github.com/user-attachments/assets/b14d7b2a-8352-4f43-9752-8cf3fd547506


