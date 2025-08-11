<script setup>
import { ref, reactive, isRef, isReactive, isProxy, unref, toRef, toRefs} from "vue";

const a = 10;
const b = ref(20);
const c = reactive({ value: 30 });
const msg = "Hello Vue 3!";
const myObject = reactive({ name: "Vue", version: 3 });

const myRef = ref(100);

console.log("Is 'a' a ref?", isRef(a)); // false
console.log("Is 'b' a ref?", isRef(b)); // true
console.log("Is 'c' a ref?", isRef(c)); // false
console.log("Is 'c' reactive?", isReactive(c)); // true

console.log("Is num return proxy?", isProxy(a)); // false
console.log("Is msg return proxy?", isProxy(msg)); // false
console.log("Is c return proxy?", isProxy(c)); // true
console.log("Is myObject return proxy?", isProxy(myObject)); // true

console.log("Unref myRef:", unref(myRef));

const user = reactive({
  name: "Rabin Shrestha",
  age: 30,
  address: {
    city: "Nepal",
    country: "Kathmandu",
  }
});
console.log("User details:", user);
console.log("Is user a ref?", isRef(user));
console.log("Is user reactive?", isReactive(user));

// converting name to ref
const userNameRef = toRef(user, 'name');
console.log("User name as ref:", userNameRef);
console.log("Is userNameRef a ref?", isRef(userNameRef));

const programmingLanguages = reactive({
  languages: ["JavaScript", "Python", "Java"],
  frameworks: ["Vue", "React", "Angular"],
  price: 100,    
});
console.log("Programming Languages:", programmingLanguages);
console.log("Is programmingLanguages a ref?", isRef(programmingLanguages));
console.log("Is programmingLanguages reactive?", isReactive(programmingLanguages));
// using toRefs to convert the entire object to refs
const programmingLanguagesRefs = toRefs(programmingLanguages);
console.log("Programming Languages as refs:", programmingLanguagesRefs);
console.log("Is programmingLanguagesRefs a ref?", isRef(programmingLanguagesRefs));
</script>
<template>
  <div class="container">
    <h1>Reactivity Utils</h1>
    <!-- <h2>Value of a: {{ a }}</h2>
    <h2>Value of b: {{ b }}</h2> -->
    <!-- user details   -->
    <!-- <h2>User Details:</h2>
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
    <p>City: {{ user.address.city }}</p>
    <p>Country: {{ user.address.country }}</p> -->
    <p>Check the console for ref checks...</p>
  </div>
</template>
<style scoped>
p {
  font-style: italic;
  color: gray;
  font-size: large;
}
</style>
