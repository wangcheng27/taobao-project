"use strict";var pid,paramindex,urlParams=location.search.match(/pid=(\d+)/);urlParams?(pid=urlParams[1],$.ajax({url:"/list",dataType:"json",data:{pid:pid},success:function(a){var s=a.data;console.log(s);new Page("page",{language:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"},pageData:{pageSize:10,total:s.length},show:function(a){a=s.slice(10*(a-1),10*a);console.log(a);var i="";a.forEach(function(a){i+='\n                  <div class="c-goods-item">\n                  <a href="./detial.html?id='+a.id+'">\n                    <div class="c-goods-item-top">\n                      <div class="c-goods-item-img">\n                        <img src="'+a.imgpath+'" alt="">\n                      </div>\n                    </div>\n                    <div class="c-goods-item-bottom">\n                      <div class="c-goods-item-price">\n                        <div class="c-goods-item-main-price">\n                          <div class="c-goods-item-babel">\n                            <span class="c-goods-item-price-label-text">特卖价</span>\n                          </div>\n                          <div class="c-goods-item-sale-price J-goods-item__sale-price">\n                            <span>¥</span>'+a.price+'\n                          </div>\n                        </div>\n                      </div>\n                      <div class="c-goods-item-name  c-goods-item-name--two-line">\n                       '+a.name+"\n                      </div>\n                    </div>\n                  </a>\n                </div>\n                "}),$(".c-goods-inner").html(i)}}),layer.close(loadindex)}})):(paramindex=layer.msg("非法访问！",{icon:2}),setTimeout(function(){return layer.close(paramindex),!(location.href="./list.html?pid=2")},800));