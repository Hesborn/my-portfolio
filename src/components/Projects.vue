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
  @media(max-width: 500px){
    #thecontent{
    border-top: 1px solid #232B3D;
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
    display: flex;
    justify-content: space-between;
    padding: 15px 40px 15px 30px;
    box-sizing: border-box;
    /* border: 1px solid chartreuse; */
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