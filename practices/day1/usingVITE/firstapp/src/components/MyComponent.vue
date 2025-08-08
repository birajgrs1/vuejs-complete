<template>
    <h1>This is MyComponent</h1>
    <p>{{myProp}}</p>
</template>

<script>
export default {
    name: 'MyComponent'
}
</script>

<!-- style -->
<style scoped>
h1 {
    background-color: aqua;
    color: #234567;
    font: bold;
}
p{
    color: #234567;
    margin: 10px;
}

</style> 