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
  @media (min-width: 601px) and (max-width: 900px){
    .container{
    width: 600px;
    }
    .developmentarea{
    grid-column:1/-1;
  }
  }
  @media(max-width: 600px){
    .container{
    width: 320px;
    }
    .developmentarea{
    grid-column:1/-1;
  }

  }
</style>
