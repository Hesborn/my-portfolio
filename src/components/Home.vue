<template>
  <div class="container">
      <div class="developmentarea">
      <div id="top"></div>
      <div id="middle">
        <div id="centercontent">
          <the-head/>
          <section id="navigation">
            <div class="thenavcontent">
              <a href="#">Bio</a>
              <a href="#">Work</a>
              <a href="#">Writing</a>
            </div>
          </section>
          <the-footer/>
        </div>
      </div>
      <div id="bottom"></div>
    </div>
  </div>
</template>

<script>

export default {

name: 'Home'

}
</script>

<style scoped>

#top{
    grid-row: 1/3;
    /* background-color: yellow; */
  }
  #middle{
    grid-row: 3/7;
    /* background-color: darkviolet; */
  }  
  #bottom{
    grid-row: 7/9;
    /* background-color: green; */
  } 
  #navigation{
    width: 685px;
    height: 220px;
    /* border: 1px solid green; */
    position: relative;
    box-sizing: border-box;
  }
  .thenavcontent{
    position: absolute;
    top: 40%;
    left: 30%;
    /* border: 1px solid red; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  a{
    color: #00ffff;
    text-decoration: none;   
    font-family: 'Courier New', Courier, monospace;
    font-size: 17px;
    font-weight: bold;
    padding-top: 10px;   
  }
</style>
