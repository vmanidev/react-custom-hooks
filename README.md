# React Custom Hooks

A collection of reusable custom hooks for React.

This project provides simple, lightweight, and reusable hooks that help developers handle common use cases efficiently.
It is designed to keep React components clean, maintainable, and free from repetitive logic.

---

## Hooks

* **useFetch** – A custom hook for fetching data from an API.

  It manages loading, error, and response states automatically, **helping you avoid writing repetitive logic**.


* **useLocalStorage** – A custom hook that links a state variable to `localStorage`.

  It keeps your data persistent across sessions and reloads, **eliminating the need to manually handle storage and retrieval**.

  
* **useDebounce** – A custom hook for delaying updates to rapidly changing values.

  It helps control how often expensive operations (like API calls or re-renders) run by waiting until input or state changes have settled, improving performance and user experience.  

---

## Installation

To get started with the repository locally:

```bash
git clone https://github.com/vmanidev/react-custom-hooks.git
cd react-custom-hooks
npm install
```

---

## License

This project is licensed under the **MIT License**.
