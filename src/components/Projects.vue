<template>
  <div class="container">
    <div class="developmentarea">
      <div id="top">
        <the-head/>
      </div>
      <div id="middle">
        <div id="thecontent">
          <div class="theheading">
            <div id="title">Projects</div>
            <div id="closeButton">
              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="11.024" height="11.024" viewBox="0 0 11.024 11.024">
                <g id="Group_7" data-name="Group 7" transform="translate(-414.011 -966.551) rotate(45)">
                  <line id="Line_1" data-name="Line 1" y2="13" transform="translate(984 384.5)" fill="none" stroke="red" stroke-width="2"/>
                  <line id="Line_2" data-name="Line 2" x1="13" transform="translate(977.5 390.409)" fill="none" stroke="red" stroke-width="2"/>
                </g>
              </svg>
              </a>              
            </div>
          </div>
          <div class="projectbody">
            <div id="project-one"><img src="@/assets/project-1.png" alt=""></div>
            <div id="project-two"><img src="@/assets/project-2.png" alt=""></div>
            <div id="project-three"><img src="@/assets/project-3.png" alt=""></div>
            <div id="project-four"><img src="@/assets/project-4.png" alt=""></div>
          </div>
        </div>
      </div>
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
    box-sizing: border-box;
    display: grid;
    grid-template-columns:repeat(2,1fr) ;
    grid-template-rows: repeat(2,1fr);
    padding-top: 35px;
  }
  #project-one{
    grid-column:1/2;
    grid-row: 1/2;
    padding-left: 18px;
  }
  #project-two{
    grid-column:2/3;
    grid-row: 1/2;
    padding-left: 18px;
  }
  #project-three{
    grid-column:1/2;
    grid-row: 2/3;
    padding-left: 18px;
  }
  #project-four{
    grid-column:2/3;
    grid-row: 2/3;
    padding-left: 18px;
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
</style>