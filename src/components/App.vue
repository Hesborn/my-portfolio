<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  body{
    padding: 0;
    border: 0;
    margin: 0;
    background-color: #232B3D;
  }
  .container{
    width: 1024px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 100vh;
    /* background-color: cadetblue; */
    }
  .developmentarea{
    grid-column: 3/11;
    grid-row: 1/-1;
    /* background-color: red; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8,1fr);
  }
  @media(max-width: 500px){
    .container{
    width: 320px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 100vh;
    /* background-color: cadetblue; */
    }
    .developmentarea{
    grid-column:1/-1;
    grid-row: 1/-1;
    /* background-color: red; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8,1fr);
  }

  }
</style>
