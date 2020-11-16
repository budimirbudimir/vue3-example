<template>
  <!-- Think of template as of React's `render()` method -->
  <!-- TODO Should be broken into multiple modules -->
  <section>
    <div class="form-container">
      <h1>{{ locale.PHRASES_REGISTER }}</h1>
      <form @submit.prevent="submitForm">
        <div>
          <input v-model="state.name" type="text" placeholder="First name" />
        </div>

        <div>
          <input v-model="state.surname" type="text" placeholder="Last name" />
        </div>

        <div>
          <input v-model="state.email" type="text" placeholder="Email" />
        </div>

        <div>
          <input
            v-model="state.phone"
            type="text"
            placeholder="Mobile number"
          />
        </div>

        <div>
          <select v-model="state.title">
            <option value="" disabled selected>
              {{ locale.REGISTER_VALUE_TITLE }}
            </option>
            <option value="Mr">{{ locale.TITLE_MR }}</option>
            <option value="Mrs">{{ locale.TITLE_MRS }}</option>
            <option value="Miss">{{ locale.TITLE_MISS }}</option>
            <option value="Dr">{{ locale.TITLE_DR }}</option>
          </select>
        </div>

        <div>
          <p>{{ locale.REGISTER_VALUE_DEVELOPER }}</p>
          <input v-model="state.developer" type="radio" value="Yes" />
          {{ locale.PHRASES_YES }}
          <input v-model="state.developer" type="radio" value="No" />
          {{ locale.PHRASES_NO }}
        </div>

        <div>
          <span>{{ state.error }}</span>
        </div>

        <div>
          <button type="submit" class="submit">
            {{ locale.PHRASES_SUBMIT }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
// Import slice/store (hook-like) we need for this component.
import RegisterSlice from "./registerSlice";

// This imports all. Surely must be easier way to do this?
import * as locale from "../locales/en";

export default {
  // This is simple constructor method, logic is abstracted to RegisterSlice mostly.
  // RegisterSlice can be considered a useDispatch/useSelector replacement.
  setup() {
    const { state, submitForm } = RegisterSlice();
    return { state, submitForm, locale };
  },
};
</script>

<style scoped>
section {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-container {
  min-width: 260px;
  margin: 0 auto;
}
h1 {
  font-size: 48px;
  font-weight: 700;
}
input {
  display: block;
  background: #fff;
  border: 1px solid #ccc;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  box-shadow: 0px;
  outline: none;
  padding: 8px;
  transition: 0.15s;
  text-align: left;
}
select {
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
}
input[type="radio"] {
  height: auto;
  width: auto;

  display: inline-block;
  margin: 0 6px;
}
.submit {
  background-color: #333;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  width: 100%;
  padding: 8px;
  margin-top: 10px;
}
ul {
  padding: 0;
}
ul li {
  list-style: none;
  border: 2px solid green;
  width: 30%;
  margin: 10px auto 0;
}
</style>