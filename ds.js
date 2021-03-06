(function($){
	var id = Date.now();
	if($("#STYLE_"+id).size()<1){
		document.writeln("<style id='STYLE_"+id+"'>@CHARSET \"UTF-8\";*{-webkit-tap-highlight-color:rgb(230，199，211)}.box-size{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.ds-hide{display:none}.ds-reward-stl{font-family:\"microsoft yahei\";text-align:center;background:#E6C7D3;padding:10px 0px 10px 100px;color:#666;margin:0px auto;width:90%}#dsRewardBtn {padding: 0;margin: 0;left: 110px;font-size: 16px;font-weight: 600;line-height: 43px;display: block;border: 0px solid #fff;color: #FFF;}#dsRewardBtn span{display:inline-block;width:50px;height:50px;line-height:58px;color:#fff;font:400 25px/50px 'microsoft yahei';background:#E6C7D3}#dsRewardBtn:hover{cursor:pointer}.ds-dialog{z-index:9999;width:100%;height:100%; }.ds-dialog .ds-close-dialog{position:absolute;top:15px;right:20px;font:400 24px/24px Arial;width:20px;height:20px;text-align:center;padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none;font-weight:700;line-height:20px;opacity:.6;filter:alpha(opacity=20)}.ds-dialog .ds-close-dialog:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.6;filter:alpha(opacity=40)}.ds-dialog-bg{position:absolute;opacity:.6;filter:alpha(opacity=30);background:#000;z-index:9999;left:0;top:0;width:100%;height:100%}.ds-dialog-content{font-family:'microsoft yahei';font-size:14px;background-color:#FFF;position:fixed;padding:0 20px;z-index:10000;overflow:hidden;border-radius:6px;-webkit-box-shadow:0 3px 7px rgba(0,0,0,.3);-moz-box-shadow:0 3px 7px rgba(0,0,0,.3);box-shadow:0 3px 7px rgba(0,0,0,.3);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ds-dialog-pc{width:390px;height:380px;top:50%;left:50%;margin:-190px 0 0 -195px}.ds-dialog-wx{width:90%;height:280px;top:50%;margin-top:-140px;margin-left:5%}.ds-dialog-content h5{text-align:left;font-size:15px;font-weight:700;margin:15px 0;color:#555}.ds-payment-way{text-align:left}.ds-payment-way label{cursor:pointer;font-weight:400;display:inline-block;font-size:14px;margin:0 15px 0 0;padding:0}.ds-payment-way input[type=radio]{vertical-align:middle;margin:-2px 5px 0 0}.ds-payment-img{margin:15px 0;text-align:center}p.ds-pay-info{font-size:15px;margin:0 0 10px}.ds-pay-money{font-size:14px;margin-top:10px}.ds-pay-money p{margin:0}.ds-pay-money .ds-pay-money-sum{margin-bottom:4px}.ds-payment-img img{margin:0 auto;width:185px;}.ds-payment-img #qrCode_1{display:none}.ds-payment-img .qrcode-border{margin:0 auto}.ds-payment-img .qrcode-tip{width:250px;font-family:STsong;position:relative;margin:0 auto;font-size:14px;font-weight:700;background:#fff;height:15px;line-height:15px;margin-top:-12px}#qrCode_0 .qrcode-tip{color:#000}#qrCode_3 .qrcode-tip{color:#000}.ds-payment-img #qrCode_3{display:none}.ds-payment-img #qrCode_2{display:none}#qrCode_2 .qrcode-tip{color:#000}#qrCode_1 .qrcode-tip{color:#000}.wx_qrcode_container{text-align:center}.wx_qrcode_container h2{font-size:17px}.wx_qrcode_container p{font-size:14px}.ds-reward-stl{text-align:center;background:#fff;padding:0;color:#666;margin:0;width:0}#dsRewardBtn span{background:#7ab951;width:100px;height:50px;font-size:16px;font-weight:600;line-height:43px;border:0px solid #fff;}.share-s a{margin-top:-25px} .ds-payment-img .qrcode-border{border-radius: 29.97px; width: 236.89px; height: 236.89px; padding: 18.05px; margin-top: 25.53px; } </style>");
	}
	function write(){
		var content = "<div class=\"ds-dialog\" id='PAY_"+id+"'>"
		+"   <div class=\"ds-dialog-bg\" onclick=\"PaymentUtils.hide();\"></div>"
		+"   <div class=\"ds-dialog-content ds-dialog-pc \">"
		+"    <i class=\"ds-close-dialog\">&times;</i>"
		+"    <h5>选择打赏方式：</h5>"
		+"    <div class=\"ds-payment-way\">"
		+"     <label for=\"wechat\"><input type=\"radio\" id=\"wechat\" class=\"reward-radio\" value=\"0\" checked=\"checked\" name=\"reward-way\" />Wechat</label>"
		+"     <label for=\"alipay\"><input type=\"radio\" id=\"alipay\" class=\"reward-radio\" value=\"2\" name=\"reward-way\" />Alipay</label>"
		+ "    </div>"
		+ "    <div class=\"ds-payment-img\">"
		+ "     <div class=\"qrcode-img qrCode_0\" id=\"qrCode_0\">"
		+ "      <div class=\"qrcode-border box-size\" style=\"\">"
		+ "       <img  class=\"qrcode-img qrCode_0\" id=\"qrCode_0\" src=\"img/weixin1.jpg\" />"
		+ "      </div>"
		+ "      <p class=\"qrcode-tip\">这只是一个测试功能:)</p>"
		+ "     </div>"
 		+ "     <div class=\"qrcode-img qrCode_2\" id=\"qrCode_2\">"
		+ "      <div class=\"qrcode-border box-size\" style=\"\">"
		+ "       <img  class=\"qrcode-img qrCode_2\" id=\"qrCode_2\" src=\"img/zhifubao1.jpg\" />"
		+ "      </div>"
		+ "      <p class=\"qrcode-tip\">这只是一个测试功能:)</p>"
		+ "     </div>"
		+ "    </div>"
		+ "   </div>"
		+ "  </div> ";
		$("body").append(content);
	}
$(function(){
	write();
	var $pay = $("#PAY_"+id).hide();
	$pay.find(".ds-payment-way").bind("click",function(){
                $pay.find(".qrcode-img").hide();
		$pay.find(".qrCode_"+$pay.find("input[name=reward-way]:checked").val()).show();
	  });
	 $pay.find(".ds-close-dialog").bind("click",function(){
		  $pay.hide();
	 });
  });
  var PaymentUtils = window['PaymentUtils']={};
  PaymentUtils.show=function(){
	  $("#PAY_"+id).show();
  }
  PaymentUtils.hide=function(){
	  $("#PAY_"+id).hide();
  }
})(jQuery);