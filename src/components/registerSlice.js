// Wrapper for providing reactivity and memoization (used outside of state?)
import { reactive } from "vue";

import * as locale from "../locales/en";

// Component state instance, with state and 'reducers'.
// I believe this is called 'store pattern' or 'factory pattern' in Vue.
// It's similar to Context API in React, or ReduxToolkit slice.
export default function RegisterSlice() {
  let state = reactive({
    // Storing values for controlled inputs
    name: "",
    surname: "",
    email: "",
    phone: "",
    title: "",
    developer: "",

    // Simple validation example
    // Maybe should have separate errors for each field
    error: "",
  });
  let submitForm = (e) => {
    e.preventDefault();

    let formValid = validateForm();
    if (formValid) {
      // For now, just log it out and reset state
      console.log(locale.REGISTER_SUCCESSFUL_SUBMIT_LOG, { ...state });
      // Then reset the form data
      e.target.reset();
    }
  };
  let validateForm = () => {
    let err = "";

    console.log({ ...state });

    if (err === "" && state.name === "") err = locale.REGISTER_ERROR_FIRST_NAME;
    if (err === "" && state.surname === "")
      err = locale.REGISTER_ERROR_LAST_NAME;
    if (err === "" && state.email === "") err = locale.REGISTER_ERROR_EMAIL;
    if (err === "" && state.phone === "") err = locale.REGISTER_ERROR_PHONE;
    if (err === "" && state.title === "") err = locale.REGISTER_ERROR_TITLE;
    if (err === "" && state.developer === "")
      err = locale.REGISTER_ERROR_DEVELOPER;

    state.error = err;

    if (err === "") {
      return true;
    } else {
      return false;
    }
  };

  // In the end we just export all public stuff
  return { state, submitForm };
}
