<template>
  <div class="container">
    <transition appear appear-class="custom-appear-class" appear-active-class="custom-appear-active-class">
      <div class="developmentarea">      
        <div id="main-home">
          <div id="centercontent">
            <the-head/>
                <transition appear appear-class="custom-appear-class" appear-active-class="navigation-appear-active-class">
                  <section id="navigation">
                    <div class="thenavcontent">
                      <router-link to="/bio">Bio</router-link>
                      <router-link to="/projects">Work</router-link>
                      <router-link to="/">Writing</router-link>
                    </div>
                  </section>
            </transition>
            <the-footer/>
          </div>
        </div>   
      </div>
     </transition>
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



/* THIS IS THE TRANSITION STUFF
_______________________________

IN vue transitions there ofcoure if need be, the [ appear-to-class ] which is our case it could have been [ .custom-appear-to-class ]
But i choose not to use it because essentially the ending state of my transitions was to be the value the default themselves to, the value i either set
or which is used by deafult

*/

  .custom-appear-active-class{
   transition: all 1.5s;
  }
.custom-appear-to-class{
    opacity: 1;
  }
.custom-appear-class{
    opacity: 0;
  }
.navigation-appear-active-class{
  transition: all 2s;
  }



  /* This is the tablet and small laptops media query 
  ___________________________________________________
  */

  @media (min-width: 601px) and (max-width: 900px){
    #main-home{
      grid-row: 2/9;
    }  
    #navigation{
      width: 600px;
      height: 150px;
    }
    .thenavcontent{
      top: 10%;
      left: 31%;
    }
  }


  /* This is the smartphone media query */

  @media(max-width: 600px){
      #main-home{
        grid-row: 2/9;
      }  
      #navigation{
        width: 320px;
        height: 150px;
      }
      .thenavcontent{
        top: 20%;
        left: 36%;
      }
    }
</style>


