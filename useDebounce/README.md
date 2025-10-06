# useDebounce

A custom React hook for **debouncing rapidly changing values or functions**.
It helps you **limit how often expensive operations run** (like API calls or input handlers) by waiting until the user stops typing or interacting for a specified delay.

Designed for simple and reusable integration in React apps.

---

## Features

* Delays updates to a value until after a specified wait time
* Helps prevent excessive re-renders or network requests
* Works seamlessly with controlled inputs and event handlers
* Lightweight and easy to integrate into existing components
* Can be paired with `useCallback` for optimized function debouncing

---

## Demo Screenshots/Recordings



https://github.com/user-attachments/assets/bc917d24-bb2c-4255-ac55-be775a58d8c9



---

## Parameters

| Parameter | Type     | Description                                                |
| --------- | -------- | ---------------------------------------------------------- |
| `value`   | `any`    | The value to debounce                                      |
| `delay`   | `number` | Delay duration (in ms) before updating the debounced value |

---

## Returns

| Return           | Type  | Description                              |
| ---------------- | ----- | ---------------------------------------- |
| `debouncedValue` | `any` | The debounced version of the input value |

---

## When to Use

* Debouncing **search inputs**, **filter changes**, or **scroll listeners**
* Avoiding **unnecessary API calls** during user typing
* Smoothing performance for **real-time UI updates**

