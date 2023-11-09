let img_num_1,img_num_2,img_num_3,img_num_4,img_num_5,img_num_6,nowimg_1;
$(document).ready(()=>{
    img_num_1 = "game_img_2.png";//差し替える画像1つ目
    img_num_2 = "game_img_3.png";//差し替える画像2つ目
    img_num_3 = "game_img_4.png";//差し替える画像3つ目
    img_num_4 = "game_img_5.png";//差し替える画像4つ目
    img_num_5 = "game_img_6.png";//差し替える画像5つ目
    img_num_6 = "game_img_7.png";//差し替える画像6つ目
    nowimg_1 = img_num_1;//現在の画像情報
    setTimeout(imgChange,10000);//1500ms待ってから指定関数呼び出し
    
});

function imgChange(){//画像を変更する関数
    
    if(nowimg_1===img_num_1){//画像情報によって処理を変更
        nowimg_1 = img_num_2;//2つ目の画像の情報を入れる
    }
    else if(nowimg_1===img_num_2){
        nowimg_1 = img_num_3;//3つ目の画像の情報
    }
    else if(nowimg_1===img_num_3){
        nowimg_1 = img_num_4;//4つ目の画像の情報
    }
    else if(nowimg_1===img_num_4){
        nowimg_1 = img_num_5;//5つ目の画像の情報
    }
    else if(nowimg_1===img_num_5){
        nowimg_1 = img_num_6;//6つ目の画像の情報
    }
    else if(nowimg_1===img_num_6){
        nowimg_1 = img_num_1;//1つ目の画像の情報
    }
    console.log(nowimg_1);
    $("#img_1").attr("src",'./images/'+nowimg_1);//画像の差し替え
    $("#img_1").fadeTo(1000,1);//0秒かけて透過値を1にする(画像再表示)
    setTimeout(DelayTime,1500);//1500ms待ってから指定関数呼び出し
    
} 
function DelayTime(){
    setTimeout(DelayFadeout,7500);//7500ms待ってから指定関数呼び出し
    setTimeout(imgChange,10000);//1500ms待ってから指定関数呼び出し
    
}
function DelayFadeout(){
    $("#img_1").fadeTo(1500,0);//0秒かけて透過値を1にする(画像再表示)
}