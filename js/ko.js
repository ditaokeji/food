// JavaScript Document

//返回顶部
	$(document).ready(function(){
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back_top').fadeIn();
			} else {
				$('#back_top').fadeOut();
			}
		});
    	$('#back_top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
		
		for(k=2;k<12;k++){/*用于分类的对齐*/
		$('.j-child-row'+k).each(function(index, element) {
				var fa = $(this).width();
				$(this).children().width(fa/k);
			});
		}
		
		for(k=2;k<12;k++){/*用于分类的对齐*/
		$('.j-child-auto'+k).each(function(index, element) {
				$(this).find('li').width(100/k+"%");
				var liNum = $(this).find('li');
				var liLeng=liNum.length;
				for(i=0;i<=k;i++){
					if((liLeng+i)%k==0){
						for(j=1;j<=k-i;j++){
							liNum.eq(liLeng-j).width(100/(k-i)+"%");
							}
						}
					}
			});
		}
	//ajax
	
	$("a.ajax-more-link").click(function(){
		if($ajaxmoreurl && $page <= $total_page){
      $.ajax({
        url: $ajaxmoreurl+'&page='+$page,
        success: function(data) {
          $('#main-content').append(data);
          $page++;
          if($page > $total_page){
            $("a.ajax-more-link").remove();
            $('.no-more').css({'display':'block'});
          }
	    }
        });
    }else{
      $('.no-more').css({'display':'block'});
      $(this).remove();
    }
	});
//ajax结束
	});
	
	
//导航
/*
	$(document).ready(function(){
		var aNavSpan=$('.nav-box span');
		for(var i=0; i<aNavSpan.length; i++){
			if((i+1)%4==0){
				aNavSpan.eq(i).find('a').css('background','none');
			}
		}
		aNavSpan.last().find('a').css('background','none');
	});
*/
//下拉导航
/*$(document).ready(function(){
	$('.top-box .ico-menu').click(function(){
		var navpanelHeight=$('#navpanel').height();
		var panelHeight=$('#navpanel ul li').length*$('#navpanel ul li').height()+5;
		if(navpanelHeight==0){
			$('#navpanel').animate({'height':panelHeight},200);
		}else{
			$('#navpanel').animate({'height':0},200);
		}
	});
});*/
