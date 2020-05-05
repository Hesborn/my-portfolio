<template>
  <div class="container">
    <div class="developmentarea">
      <div id="top">
        <the-head/>
      </div>
      <div id="middle">
        <transition appear appear-class="custom-appear-class" appear-active-class="custom-appear-active-class">
          <div id="thecontent">
            <div class="theheading">
              <div id="title">Bio</div>
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
            <div class="thebiobody">
              UI Designer, Front-End Developer &<br>
              Writer.
              <br><br>
              HTML5, CSS3, Javascript, Vue JS<br><br>
              Adobe XD, Adobe Illustrator,<br>
              Photoshop
              <br><br><br><br><br>
              Proud husband & father.<br><br>
              Loves Computers, Music, Books and<br>
              Films.<br><br>
              Living in Nairobi, Kenya.
            </div>
          </div>
        </transition>
      </div>  
      <div id="bottom">
        <the-footer/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Bio'
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
  .thebiobody{
    height: 60%;
    /* border: 1px solid snow; */
    position: relative;
    top: 5%;
    left: 24%;
    color: #ffffff;
    text-decoration: none;   
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
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


   /* This is the tablet and small laptops media query 
  ___________________________________________________
  */
  
@media (min-width: 601px) and (max-width:900px){
    #thecontent{
    border-top: 1px solid #232B3D;
    border-bottom: 1px solid #232B3D;   
    width: 600px;
    left: 0%;
    box-sizing: border-box;
  } 
    .theheading{
    width: 600px;
    display: flex;
    padding-left: 80px;
    padding-right: 85px;
    box-sizing: border-box;
  }
    .thebiobody{
    height: 85%;
    width: 300px;
    position: relative;
    left: 31%;
    font-size: 14px;
    box-sizing: border-box;
  }
}

  
  /* This is the smartphone media query */

  @media(max-width: 600px){
    #thecontent{
      border-top: 1px solid #232B3D;
      border-bottom: 1px solid #232B3D;    
      height: 92%;
      width: 320px;
      padding-top: 15px; 
      left: 0%;
    } 
    .theheading{
      width: 320px;
      display: flex;
      padding-left: 30px;
      padding-right: 40px;
      box-sizing: border-box;
    }
      .thebiobody{
      height: 75%;
      position: relative;
      top: 5%;
      left: 0%;
      font-size: 12px;
      padding-left: 30px;
      padding-top: 30px;
    }
      #title{
      font-size: 15px;
    }
  }
</style>