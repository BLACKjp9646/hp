console.log("JS");
$(document).ready(()=>{
	console.log("Ready!!");
	$("#btn").click(()=>{
        let gasorin = 0;
        let gas = $("#gasorin_kingaku").val();
        let kyori = $("#soukou_kyori").val();
        let nenpi = $("#kuruma_nenpi").val();
        if(gas!=0&&kyori!=0&&nenpi!=0){
        gasorin = gas*kyori/nenpi;
		$("#result").text("ガソリン代は"+parseInt(gasorin)+"円");    
        }
        else{
            $("#result").text("数値を入力してください");    
        }
	})
});
