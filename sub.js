$(document).ready(()=>{

	// 今回の交差を監視する要素
	const boxes = document.querySelectorAll(".container")

	const options = {
		root: null, // ビューポートをルート要素とする
		rootMargin: "-20% 0px", // ビューポートの中心(50%)を判定基準とする
		threshold: 0 // 閾値は0とする
	};

	// Observer
	const observer = new IntersectionObserver(entries=>{
		entries.forEach(entry=>{
			if(entry.isIntersecting){
				$(".container").addClass("addimg");
                $(".container").removeClass("container");
                $(".disactive_footer").addClass("active_footer")
                $(".disactive_footer").removeClass("disactive_footer")
			}
            else{
                $(".addimg").addClass("container");
                $(".addimg").removeClass("addimg");
                $(".active_footer").addClass("disactive_footer")
                $(".active_footer").removeClass("active_footer")
                
            }
		});
	}, options);

	// それぞれのboxを監視する
	boxes.forEach(box => {
	  observer.observe(box);
	});
});