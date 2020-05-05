<template>
  <div class="headerstuff">
    <img src="@/assets/my-bust.png" alt="" class="thephoto">
    <p class="intro">Hello, I'm Hesborn Paul Ongwae and I am a UI Designer, Front-end Developer and Writer.</p>   
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
    left: 12%;
    /* border: 1px solid red; */
  }
  .intro{
    width: 395px;
    position: absolute;
    left: 30%;
    /* border: 1px solid red; */
  }
  p{
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    color: #ffffff;
  }



  /* This is the tablet and small laptops media query 
  ___________________________________________________
  */

  @media (min-width: 601px) and (max-width: 900px){
    .headerstuff{
    height: 140px;
    width: 600px;
    box-sizing: border-box;     
    }
    .intro{
    width: 350px;    
    left: 30%;
    }
  }


  /* This is the smartphone media query */

  @media(max-width: 600px){
    .headerstuff{
    height: 140px;
    width: 320px;
    box-sizing: border-box;     
    }
    .thephoto{
    left: 33%;
    }
    .intro{
    width: 320px;    
    left: 0%;
    top: 60%;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;    
    }
    p{
    font-size: 13px;
    text-align: center;
    }
  }
</style>