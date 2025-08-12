<script setup>
import { ref, reactive } from "vue";

// Initialize form data reactively
const formData = reactive({
  fullname: "",
  email: "",
  password: "",
  message: "",
  terms: false, 
  fruits: [], 
  gender: "",
  country: "",
  qualifications: []
});

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted!", formData);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Full Name:</label>
      <input 
        type="text" 
        id="name" 
        placeholder="Enter your Full Name" 
        v-model.trim="formData.fullname" 
        required
      />
    </div>

    <div>
      <label for="email">Email:</label>
      <input 
        type="email" 
        id="email" 
        placeholder="Enter your Email" 
        v-model.trim="formData.email" 
        required
      />
    </div>

    <div>
      <label for="password">Password:</label>
      <input 
        type="password" 
        id="password" 
        placeholder="Enter your Password" 
        v-model="formData.password" 
        minlength="8" 
        required
      />
    </div>

    <div>
      <label for="message">Message:</label>
      <textarea 
        id="message" 
        rows="4" 
        placeholder="Enter your Message" 
        v-model.trim="formData.message"
      ></textarea>
    </div>

    <div>
      <label for="terms">
        <input 
          type="checkbox" 
          id="terms" 
          v-model="formData.terms" 
          required
        />
        I agree to the terms and conditions
      </label>
    </div>

    <div>
      <label for="fruits">Favorite Fruits:</label>
      <div>
        <label>
          <input 
            type="checkbox" 
            value="apple" 
            v-model="formData.fruits" 
          />
          Apple
        </label>
        <label>
          <input 
            type="checkbox" 
            value="banana" 
            v-model="formData.fruits" 
          />
          Banana
        </label>
        <label>
          <input 
            type="checkbox" 
            value="orange" 
            v-model="formData.fruits" 
          />
          Orange
        </label>
        <label>
          <input 
            type="checkbox" 
            value="grape" 
            v-model="formData.fruits" 
          />
          Grape
        </label>
        <label>
          <input 
            type="checkbox" 
            value="mango" 
            v-model="formData.fruits" 
          />
          Mango
        </label>
      </div>
    </div>

    <div>
      <label for="gender">Gender:</label>
      <div>
        <label>
          <input 
            type="radio" 
            value="male" 
            v-model="formData.gender" 
          />
          Male
        </label>
        <label>
          <input 
            type="radio" 
            value="female" 
            v-model="formData.gender" 
          />
          Female
        </label>
        <label>
          <input 
            type="radio" 
            value="other" 
            v-model="formData.gender" 
          />
          Other
        </label>
      </div>
    </div>

    <div>
      <label for="dropdown">Select a Country:</label>
      <select 
        id="dropdown" 
        v-model="formData.country" 
        required
      >
        <option value="">Select a country</option>
        <option value="nepal">Nepal</option>
        <option value="china">China</option>
        <option value="uk">UK</option>
        <option value="australia">Australia</option>
        <option value="india">India</option>
      </select>
    </div>

    <div>
      <label for="qualifications">Qualifications:</label>
      <select 
        id="qualifications" 
        v-model="formData.qualifications" 
        multiple 
      >
        <option value="bachelor">Bachelor's Degree</option>
        <option value="master">Master's Degree</option>
        <option value="phd">PhD</option>
        <option value="diploma">Diploma</option>
      </select>
    </div>

    <button type="submit" :disabled="!formData.terms">Submit</button>
  </form>

  <!-- Display form data -->
  <div class="details">
    <p>Full Name: {{ formData.fullname }}</p>
    <p>Email: {{ formData.email }}</p>
    <p>Password: {{ formData.password }}</p>
    <p>Message: {{ formData.message }}</p>
    <p>Terms Accepted: {{ formData.terms ? "Yes" : "No" }}</p>
    <p>Favorite Fruits: {{ formData.fruits.join(", ") || "None" }}</p>
    <p>Gender: {{ formData.gender }}</p>
    <p>Country: {{ formData.country || "Not selected" }}</p>
    <p>Qualifications: {{ formData.qualifications.join(", ") || "None" }}</p>
  </div>
</template>

<style scoped>
  form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }

  div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  textarea {
    resize: vertical;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .details {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f1f1f1;
  }
</style>
