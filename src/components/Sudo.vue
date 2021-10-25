<template>
        <div class="main">
            <div class="fancy-border">
                <div v-for="(row,index) of mySudoMap" :key=index class="row">
                    <div v-for="(col,index) of row" :key=index class="col" >

                        <input type="text" class="text" v-model="col.cur" :class="{red:col.isNeed,green:((col.cur == col.correct) && col.isNeed)}" :disabled="!col.isNeed">
                    </div>
                </div> 
            </div>
            <transition name="fade" appear>
            <div class="fancy-border" v-if="isVisiable">
                <div v-for="(row,index) of mySudoMap" :key=index class="row">
                    <div v-for="(col,index) of row" :key=index class="col" >
                        <input type="text" class="text" v-model="col.correct" :class="{green:(col.isNeed)}" disabled>
                    </div>
                </div> 
            </div>
            </transition>

    </div>
    <div class="fs12 footer" @click="trigger" >
        <span v-if="!isVisiable">查看答案</span> <span v-else>隐藏答案</span> </div>
    
    
</template>

<script setup>
import {Sudoku} from 'utils/sudoku.js';
import { ref,reactive } from 'vue'

let start_arr = [
  [9, 8, 7, 6, 5, 4, 3, 2, 1],
  [3, 2, 1, 9, 8, 7, 6, 5, 4],
  [6, 5, 4, 3, 2, 1, 9, 8, 7],
  [1, 9, 8, 7, 6, 5, 4, 3, 2],
  [4, 3, 2, 1, 9, 8, 7, 6, 5],
  [7, 6, 5, 4, 3, 2, 1, 9, 8],
  [2, 1, 9, 8, 7, 6, 5, 4, 3],
  [0, 4, 3, 2, 1, 9, 8, 7, 6],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]
let s = new Sudoku(start_arr)

let end_arr = s.get_result()
let mySudoMap = reactive({});
for(let i=0;i<start_arr.length;i++){
    for(let j=0;j<start_arr[i].length;j++){
        // debugger;
        if(!mySudoMap['row'+i]){
            mySudoMap['row'+i] = {};
        }
        mySudoMap['row'+i]['col'+j] = {
            cur : start_arr[i][j] > 0 ? start_arr[i][j] : null,
            isNeed : (start_arr[i][j]<=0),
            correct : end_arr[i][j]
        }
    }

}
console.log('mu',mySudoMap.value)

let isVisiable = ref(false);
function trigger(){
    console.log(22,isVisiable)
    isVisiable.value = !isVisiable.value;
}
</script>

<style>
/**
 * Fancy border
 * ============
*/
.fs12{
    font-size: 12px;
}
.bold{
    font-weight: bold;
}
.red{
    color: red !important; 
}
.green{
    color: #9EDE73 !important;
}
.fancy-border {
  width: 70vh;
  height: 70vh;
  border: 25px solid #B88846;
  color: #B88846;
  border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E") 25;
  display: flex;
  flex-direction: column;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.show{
    margin-left: 50px;
    margin-top: 5px;
    cursor: pointer;
    display: absolute;
}
.main{
    display: flex;
    justify-content: space-around;
    width: 100vw;
    
}
.row{
    display: flex;
    flex-direction: row;
    flex-grow:1;
    /* align-items: center; */
    /* justify-content: center; */
}
.row:nth-child(3n+0) .col{
    border-bottom: 1px solid rgba(184,136,70,1);  
}
.row:nth-child(1) .col{
    border-top: 1px solid rgba(184,136,70,1);  
}
.col{
    flex-grow:1;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    flex-grow:1;
    border: 1px dashed rgba(184,136,70,0.2);
}
.col:nth-child(3n+1){
    border-left: 1px solid rgba(184,136,70,1);
}
.col:nth-last-child(1){
    border-right: 1px solid rgba(184,136,70,1);
}
.footer{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
    color:#B88846;
    
}

.text{
    border:0px;
    display: inline;
    background: none;
    outline: none;
    color:#B88846;
    /* color: #DF711B; */
    text-align: center;
    width: 100%;
    height: 100%;
    margin:0;
    padding: 0;

}
.text:focus{
    
}
/**
 * Pen Specific
 * ============
*/

body {
  background: #101b24;
  background: 082032;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

</style>