<template>
  <div class="container">
      <div class="developmentarea">
      
      <div id="main-home">
        <div id="centercontent">
          <the-head/>
          <section id="navigation">
            <div class="thenavcontent">
              <router-link to="/bio">Bio</router-link>
              <router-link to="/projects">Work</router-link>
              <router-link to="/">Writing</router-link>
            </div>
          </section>
          <the-footer/>
        </div>
      </div>      
      
    </div>
  </div>
</template>

<script>

export default {
name: 'Home'

}
</script>

<style scoped>
  #main-home{
    grid-row: 3/7;
    /* background-color: darkviolet; */
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
    box-sizing: border-box;
  }
  .thenavcontent > a{
    color: #00ffff;
    text-decoration: none;   
    font-family: 'Courier New', Courier, monospace;
    font-size: 17px;
    font-weight: bold;
    padding-top: 10px;   
    /* list-style-type: none; */
  }
  
  
  
  @media(max-width: 500px){
  #main-home{
    grid-row: 2/9;
    /* background-color: darkviolet; */

  }  
  #navigation{
    width: 320px;
    height: 150px;
    /* border: 1px solid green; */
    position: relative;
    box-sizing: border-box;
  }
  .thenavcontent{
    position: absolute;
    top: 20%;
    left: 36%;
    /* border: 1px solid red; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
    }
</style>


