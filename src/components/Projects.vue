<template>
  <div class="container">
    <div class="developmentarea">
      <div id="top">
        <the-head/>
      </div>
              <transition
                appear
                appear-class="custom-appear-class"
                appear-active-class="custom-appear-active-class">
      <div id="middle">
        <div id="thecontent">
          <div class="theheading">
            <div id="title">Projects</div>
            <div id="closeButton">
                <router-link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.024" height="11.024" viewBox="0 0 11.024 11.024">
                    <g id="Group_7" data-name="Group 7" transform="translate(-414.011 -966.551) rotate(45)">
                    <line id="Line_1" data-name="Line 1" y2="13" transform="translate(984 384.5)" fill="none" stroke="red" stroke-width="2"/>
                    <line id="Line_2" data-name="Line 2" x1="13" transform="translate(977.5 390.409)" fill="none" stroke="red" stroke-width="2"/>
                    </g>
                    </svg>
                </router-link>              
            </div>
          </div>
          <div class="projectbody">
            <transition appear appear-class="custom-appear-class" appear-active-class="custom-appear-active-class">
            <div id="project-one"><img src="@/assets/project-1.png" alt=""></div>
            </transition>
            <transition appear appear-class="two-appear-class" appear-active-class="two-appear-active-class">
            <div id="project-two"><img src="@/assets/project-2.png" alt=""></div>
            </transition>
            <transition appear appear-class="three-appear-class" appear-active-class="three-appear-active-class">
            <div id="project-three"><img src="@/assets/project-3.png" alt=""></div>
            </transition>
            <transition appear appear-class="four-appear-class" appear-active-class="four-appear-active-class">
            <div id="project-four"><img src="@/assets/project-4.png" alt=""></div>
            </transition>
          </div>
        </div>
      </div>
      </transition>
      <div id="bottom">
        <the-footer/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Projects'
}
</script>

<style scoped>
    #top{
    grid-row: 1/3;
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #middle{
    grid-row: 3/8;
    /* background-color: darkviolet; */
    position: relative;
  }
  #thecontent{
    border-top: 1px solid #00ffff;
    border-bottom: 1px solid #00ffff;
    /* background-color: blue; */
    height: 100%;
    width: 510px;
    position: absolute;
    left: 12%;
    box-sizing: border-box;
  }  
  .theheading{
    width: 510px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    /* border: 1px solid chartreuse; */
  }
  .projectbody{
    height: 80%;
    /* border: 1px solid snow; */
    width: 510px;
    display: grid;
    grid-template-columns:repeat(2,1fr) ;
    grid-template-rows: repeat(2,1fr);
    padding-top: 35px;
    box-sizing: border-box;
  }
  .projectbody > *{
    padding-left: 18px;
  }
  #project-one{
    grid-column:1/2;
    grid-row: 1/2;
  }
  #project-two{
    grid-column:2/3;
    grid-row: 1/2;
  }
  #project-three{
    grid-column:1/2;
    grid-row: 2/3;
  }
  #project-four{
    grid-column:2/3;
    grid-row: 2/3;
  }
  #title{
    color: #00ffff;
    font-family: 'Courier New', Courier, monospace;
    font-size: 17px;
    font-weight: bold;
  }
  #bottom{
    grid-row: 8/9;    
    /* background-color: green; */
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
.custom-appear-class{
    opacity: 0;
}
.two-appear-active-class{
   transition: all 3s;
}
.two-appear-class{
    opacity: 0;
}
.three-appear-active-class{
   transition: all 4.5s;
}
.three-appear-class{
    opacity: 0;
}
.four-appear-active-class{
   transition: all 6s;
}
.four-appear-class{
    opacity: 0;
}


   /* This is the tablet and small laptops media query 
  ___________________________________________________
  */

  @media (min-width: 601px) and (max-width: 900px){
      #thecontent{
      border-top: 1px solid #232B3D;
      border-bottom: 1px solid #232B3D;
    } 
      .theheading{
      padding: 1px 18px 1px 15px;
      box-sizing: border-box;
    }
  }


/* This is the smartphone media query */

  @media(max-width: 600px){
        #thecontent{
        border-top: 1px solid rgb(63, 93, 163);
        border-bottom: 1px solid #232B3D;  
        height: 100%;
        width: 320px;
        position: absolute;
        left: 0%;
        box-sizing: border-box;
      }
      .theheading{
        width: 320px;
        height: 30px;
            padding: 15px 40px 15px 30px;
        box-sizing: border-box;
      }
      .projectbody{
        height: 80%;
        /* border: 1px solid snow; */
        width: 320px;    
        display: grid;
        grid-template-columns:repeat(1fr) ;
        grid-template-rows: repeat(4,1fr);
        margin-top: 15px;
        padding-top: 20px;
        padding-left: 29px;
        overflow-y: scroll;
        box-sizing: border-box;
      }
        #title{
        font-size: 15px;
      }
        #project-one{
        grid-column:1/2;
        grid-row: 1/2;
        margin-bottom: 10px;
      }
      #project-two{
        grid-column:1/2;
        grid-row: 2/3;
        margin-bottom: 10px;
      }
      #project-three{
        grid-column:1/2;
        grid-row: 3/4;
        margin-bottom: 10px;
      }
      #project-four{
        grid-column:1/2;
        grid-row: 4/5;
        margin-bottom: 10px;
      }
    }
</style>