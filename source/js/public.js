window.addEventListener('load', function () { 
        var a = location.hash.slice(2);
        if(a==""){
            location.hash="/incon1";
        }
        $("#list li").removeClass('onit');
        $("#list li").each(function(){
            if($(this).attr("data-id")==a){
                $(this).addClass('onit');
            }
        });
        $("#incon1").removeClass('show');
        $("#incon2").removeClass('show');
        $("#incon3").removeClass('show');
        $("#incon4").removeClass('show');
        $("#incon5").removeClass('show');
        $("#incon6").removeClass('show');
        $("#"+a).addClass('show');
}); 
    // hash变化时的处理 
window.addEventListener('hashchange', function () { 
        var a = location.hash.slice(2);
        if(a==""){
            location.hash="/incon1";
        }
        $("#list li").removeClass('onit');
        $("#list li").each(function(){
            if($(this).attr("data-id")==a){
                $(this).addClass('onit');
            }
        });
        $("#incon1").removeClass('show');
        $("#incon2").removeClass('show');
        $("#incon3").removeClass('show');
        $("#incon4").removeClass('show');
        $("#incon5").removeClass('show');
        $("#incon6").removeClass('show');
        $("#"+a).addClass('show');
      
}); 