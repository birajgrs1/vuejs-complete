<script>
export default{
    data(){
        return{
            value: 0
        }
    },
    methods: {
        increment(){
            this.value++
        }
    },
    mounted(){
        console.log(this.value);
    }   
}
</script>

<template>
    <p>Value: {{ value }}</p>
    <button @click="increment">Increment</button>
</template>

<style>
p{
    color: #234567;
    margin: 10px;

}
button{
    margin: 10px;
    border: 1px salmon solid;
}
</style>