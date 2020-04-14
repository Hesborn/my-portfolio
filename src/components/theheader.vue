<template>
  <div class="headerstuff">
    <img src="@/assets/my-bust.png" alt="" class="thephoto">
    <p class="intro">Hello, my names are Hesborn Paul Ongwae and<br> I am a UI Designer, Front-end Developer<br> and Writer.</p>   
  </div>
</template>

<script>
export default {
  name: 'Bio',

}
</script>

<style scoped>
  .headerstuff{
    height: 90px;
    width: 685px;
    /* background-color: green; */
    position: relative;
  }
  .thephoto{
    position: absolute;
    left: 13%;
    /* border: 1px solid red; */
  }
  .intro{
    position: absolute;
    left: 30%;
    /* border: 1px solid red; */
  }
  p{
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    color: #ffffff;
  }
</style>