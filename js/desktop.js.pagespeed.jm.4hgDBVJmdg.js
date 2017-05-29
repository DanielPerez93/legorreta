var grid_timeout=false;var init=0;var myScroll=false;jQuery.fn.reverse=[].reverse;$(document).ready(function(){$(window).load(function(){$('#blanket').velocity({'opacity':0},200,function(){$(this).remove()})})
$('.svg-hover').each(function(){$(this).find('img').last().velocity({opacity:0})})
$('.archive-overlay').on('mouseover',function(){$('.archive').find('.overlay').stop().show()})
$('.archive-overlay').on('mouseleave',function(){$('.archive').find('.overlay').stop().hide()})
if($('#down-arrow').length){$('#down-arrow').addClass('pulsate')}
if(Modernizr.touch){$('.project-thumbnail, .person-thumbnail').on('click',function(){var myobj=$(this)
if(myobj.hasClass('overlay-active')){return true}else{$('.overlay').stop().fadeOut(200)
$('.hidden-person-label').fadeOut(200)
$('.overlay-active').removeClass('overlay-active')
$(this).addClass('overlay-active').find('.overlay').stop().fadeIn(200)
$(this).find('.hidden-person-label').fadeIn(200)
return false;}})}
$('.project-thumbnail,.person-thumbnail').on('mouseover',function(){$(this).find('.overlay').fadeIn(200)
$(this).find('.hidden-person-label').fadeIn(200)})
$('.project-thumbnail,.person-thumbnail').on('mouseleave',function(){$(this).find('.overlay').stop().fadeOut(200)
$(this).find('.hidden-person-label').fadeOut(200)})
function changeLayout(animate){var grid_min_width=540;var grid=$('#grid-container')
if($('#grid-container-2').length){var grid_2=$('#grid-container-2')}
var golden_strict=1.61803398875;var body_width=(document.body.clientWidth>grid_min_width)?document.body.clientWidth:grid_min_width;var cols=$(window).width()>1199?6:4;var pixels_per_column=Math.ceil(body_width/cols);var pixels_per_row=parseInt(pixels_per_column/golden_ratio);var pixels_per_row_strict=parseInt(pixels_per_column/golden_strict);var grid_col_spacing=0;var grid_row_spacing=0;var grid_max_no_columns=3;var grid_min_no_columns=2;$('.golden').each(function(){$(this).stop().height(parseInt($(this).width()/golden_strict))})
var percent_20=(2*pixels_per_row_strict)*0.2;var style={paddingTop:percent_20,paddingBottom:percent_20}
$('.percent_20').css(style)
style={paddingTop:percent_20,}
$('#menu-nav').css(style)
$('#push').height($('#footer').outerHeight())
$('#container').css({'margin':'0 auto -'+$('#push').height()+'px'})
style={paddingBottom:percent_20,}
$('.percent_20_bottom').css(style)
if($('.process-block').length){var this_height=0;$('.process-block').each(function(i){this_height=$(this).height()>this_height?$(this).height():this_height;if(i+1==$('.process-block').length){$('.process-block-parent').height(this_height)}})}
if($('.article-copy-block-percent').length){$('.article-copy-block-percent').each(function(){if($(this).parent().next().find('.article-copy-block-percent').length){if($(this).attr('id')=='project-intro-inner'){$(this).parent().css({'padding-bottom':0}).next().css({'padding-top':0})
$(this).append('<div>&nbsp;</div>')}else{$(this).parent().css({'padding-bottom':0})}}})}
if(grid_active){$('.reducer').each(function(){if(cols==6){$(this).data('rows',$(this).data('orig-rows')).data('cols',6)}else{$(this).data('rows',Math.floor($(this).data('orig-rows')*0.6666)).data('cols',4)}})
if($('.similar').length){if(cols==4){$('.similar').first().children().last().removeClass('box').hide()}else{$('.similar').first().children().last().addClass('box').show()}}
if(page=='home'||page=='portfolio'||page=='team'||page=='blog'){var slice=($('.box').length%(cols/2)==0)?(cols/2)*-1:($('.box').length%(cols/2))*-1;if(page=='team'){slice=slice*2}
$('.box').css({'border-bottom-width':1})
var e=$('.box').slice(slice).css({'border-bottom-width':0})}
if($('.similar').length){var similar_slice=($('#grid-container-2').find('.box').length%(cols/2)==0)?(cols/2)*-1:($('#grid-container-2').find('.box').length%(cols/2))*-1;$('#grid-container-2').find('.box').css({'border-bottom-width':1})
var similar_e=$('#grid-container-2').find('.box').slice(similar_slice).css({'border-bottom-width':0})}
layoutResizing=1;var render=function(x,y,columns,rows){var style={top:y*(pixels_per_row+grid_row_spacing),left:x*(pixels_per_column+grid_col_spacing),width:(columns*(pixels_per_column+grid_col_spacing))-grid_col_spacing,height:(rows*(pixels_per_row+grid_row_spacing))-grid_row_spacing,}
style["border-left-width"]=(style.left==0)?0:1;style["border-top-width"]=(style.top==0)?0:1;var right_pos=style.left+style.width
style["border-right-width"]=((style.left+style.width)<(body_width+10)&&(style.left+style.width)>(body_width-10))?0:1;myobj=this
if(animate){this.stop().velocity(style,animation_speed,function(){if((page=='project'&&!$(this).parent().hasClass('similar'))||page=='clients'){var myobj=$(this)
if(parseInt(myobj.css('top'))+myobj.height()<grid.height()+20&&parseInt(myobj.css('top'))+myobj.height()>grid.height()-20){myobj.css({borderBottomWidth:'0px'})}else{myobj.stop().css({borderBottomWidth:'1px'})}}}).show();}else{this.stop().css(style).show();}
return 5;}
layout=new Grid().resize(cols);layout.render($(".box",grid),render);grid.data("rows",layout.rowsCount());grid.height(layout.rowsCount()*(pixels_per_row+grid_row_spacing))
if($('#grid-container-2').length){pixels_per_row=parseInt(pixels_per_column/1.61803398875);layout.render($(".box",grid_2),render);grid_2.data("rows",layout.rowsCount());grid_2.height(layout.rowsCount()*(pixels_per_row+grid_row_spacing))}
if(!animate&&(page=='project'||page=='clients')){$('.box').each(function(){if($(this).parent().hasClass('similar')){return false}
var myobj=$(this)
if(parseInt(myobj.css('top'))+myobj.height()<grid.height()+20&&parseInt(myobj.css('top'))+myobj.height()>grid.height()-20){myobj.css({borderBottomWidth:'0px'})}else{myobj.stop().css({borderBottomWidth:'1px'})}})}
layoutResizing=0;init=1;}}
changeLayout()
if(page=='home'||page=='blog'){if(Modernizr.touch){$('#home-push').touchwipe({wipeLeft:function(e){e.preventDefault();nextSlide();return false;},wipeRight:function(e){e.preventDefault();prevSlide();return false;},min_move_x:40,preventDefaultEvents:false});}
if($('#slideshow-wrapper').length||$('#blog-slideshow-wrapper').length){if($('.slide').length==2||$('.slide').length==3){$('.slide').each(function(i){$(this).clone().appendTo("#slideshow-container")})}
$('.slide').each(function(i){if(i==0){$(this).addClass('first').addClass('active');}
else if(i==1){$(this).addClass('next-slide');}
else{$(this).addClass('slide-waiting');}})
$('#ss-prev').on('click',function(){prevSlide()
return false;})
$('#ss-next').on('click',function(){nextSlide()
return false;})
function formatSlideShownNextMargin(myobj,animate){var obj_slide=myobj
var margin_left=$(window).width()
var style={translateX:(margin_left)}
if(animate){obj_slide.velocity(style,variable_speed,animation_easing)}else{obj_slide.velocity(style,0)}}
function formatSlideShowPrevMargin(myobj,animate){var obj_slide=myobj
var margin_left=$(window).width()
var style={translateX:(margin_left*-1)}
if(animate){obj_slide.velocity(style,variable_speed-75,animation_easing)}else{obj_slide.velocity(style,0)}}
function initPrevSlideshowSlide(){var to_append=$('#slideshow-container').children().last()
to_append.prependTo('#slideshow-container').removeClass('slide-waiting').addClass('prev-slide')
formatSlideShowPrevMargin(to_append,0)
formatSlideShownNextMargin($('.next-slide').first(),0)}
initPrevSlideshowSlide()
function nextSlide(){if($('body').hasClass('animating')){return false;}else{$('body').addClass('animating')}
clearInterval(homepage_slideshow_interval)
var active_slide=$('.active').first()
var margin_left=$(window).width()
if(active_slide.next().length){var incoming_slide=active_slide.next();}else{return false;}
var outgoing_slide=active_slide.prev();active_slide.velocity({translateX:margin_left*-1},animation_speed,animation_easing,function(){$(this).removeClass('first').removeClass('active').addClass('prev-slide')
setTimeout(function(){$('body').removeClass('animating')},25)
runHomepageSlideshow()})
var incoming_label=$('.slide-label-active').next().length?$('.slide-label-active').next():$('.slide-label').first()
$('.slide-label-active').velocity({opacity:0},animation_speed/2,function(){$(this).removeClass('slide-label-active')
incoming_label.velocity({opacity:1},animation_speed/2,function(){$(this).addClass('slide-label-active')})})
var incoming_dot=$('.slideshow-dot-active').next().length?$('.slideshow-dot-active').next():$('.slideshow-dot').first()
$('.slideshow-dot-active').not(incoming_dot).removeClass('slideshow-dot-active')
incoming_dot.addClass('slideshow-dot-active')
incoming_slide.velocity({translateX:0},animation_speed,animation_easing,function(){$(this).removeClass('next-slide').removeClass('slide-waiting').addClass('active').next().addClass('next-slide')})
outgoing_slide.velocity({translateX:'-='+margin_left},animation_speed,animation_easing,function(){$(this).removeClass('prev-slide').addClass('slide-waiting').appendTo('#slideshow-container').velocity({translateX:margin_left},{duration:0})})}
function prevSlide(){if($('body').hasClass('animating')){return false;}else{$('body').addClass('animating')}
clearInterval(homepage_slideshow_interval)
var active_slide=$('.active').first()
var margin_left=$(window).width()
var incoming_slide=active_slide.prev()
var outgoing_slide=active_slide.next()
var to_append=$('#slideshow-container').children().last()
to_append.prependTo('#slideshow-container').removeClass('slide-waiting').velocity({translateX:margin_left*-1},{duration:0})
active_slide.velocity({translateX:margin_left},animation_speed,animation_easing,function(){$(this).removeClass('first').removeClass('active').addClass('next-slide')
setTimeout(function(){$('body').removeClass('animating')},25)
runHomepageSlideshow()})
var incoming_label=$('.slide-label-active').prev().length?$('.slide-label-active').prev():$('.slide-label').last()
$('.slide-label-active').velocity({opacity:0},animation_speed/2,function(){$(this).removeClass('slide-label-active')
incoming_label.velocity({opacity:1},animation_speed/2,function(){$(this).addClass('slide-label-active')})})
var incoming_dot=$('.slideshow-dot-active').prev().length?$('.slideshow-dot-active').prev():$('.slideshow-dot').last()
$('.slideshow-dot-active').not(incoming_dot).removeClass('slideshow-dot-active')
incoming_dot.addClass('slideshow-dot-active')
incoming_slide.velocity({translateX:0},animation_speed,animation_easing,function(){$(this).removeClass('prev-slide').removeClass('slide-waiting').addClass('active').prev().addClass('prev-slide')})
outgoing_slide.velocity({translateX:'+='+margin_left},animation_speed,animation_easing,function(){$(this).removeClass('next-slide').addClass('slide-waiting').velocity({translateX:margin_left},{duration:0})})}}
var max_slide_width
function resizeSlideshow(){$('#home-push').height($('#slideshow-wrapper').height())
$('.slide').css({'width':'100%','left':'0'})
$('.slide-waiting').velocity({translateX:'100%'},0)}
resizeSlideshow();var iOS=(navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?true:false);if(iOS){$('*:not(html)').css('-webkit-transform','translate3d(0, 0, 0)')}
var homepage_slideshow_interval=false
function runHomepageSlideshow(){if($('.slide').length){homepage_slideshow_interval=setInterval(function(){nextSlide()},animation_frequency)}}
runHomepageSlideshow()
if(page=='home'){var threshold_start=$(window).height()-($('#header').height()*2)
var threshold_end=threshold_start+$('#header').height()
var home_copy_start;var home_copy_end;var homecopy_percentage;var arrows_start;var arrows_end;var label_start;var label_end;var label_percentage;function scrollerInit(refresh){threshold_start=$(window).height()-($('#header').height()*2)
threshold_end=threshold_start+$('#header').height()
home_copy_start=($(window).height()-$('#homepage-copy').position().top-$('#homepage-copy').height()-$('#header').height())*0.8
home_copy_end=home_copy_start+$('#homepage-copy').height()
homecopy_percentage=100/(home_copy_end-home_copy_start)
label_start=($(window).height()-$('#slideshow-labels').position().top-$('#slideshow-labels')[0].scrollHeight-$('#header').height())*0.6
label_end=label_start+$('#slideshow-labels')[0].scrollHeight
label_percentage=100/(label_end-label_start)
console.log('start:'+label_start+' -- end:'+label_end)
arrows_start=($(window).height()-$('#ss-prev').position().top-$('#ss-prev').height()-$('#header').height())*0.92
arrows_end=arrows_start+$('#ss-prev').height();arrows_percentage=100/(arrows_end-arrows_start)
if(refresh){setTimeout(function(){myScroll.refresh()},1000)}}
function updatePosition(){$('#down-arrow').removeClass('pulsate')
var pos=this.y*-1
if(page=='home'){if(pos<threshold_end){}else if(pos>=threshold_end){moveSearchForm();}
if(pos<arrows_start){$('#ss-next,#ss-prev').stop().css({'opacity':1,'z-index':2000})
$('#nav-2').css({'opacity':$('#nav-2').css({'opacity':1})})}else if(pos>arrows_end){$('#ss-next,#ss-prev').stop().css({'opacity':0,'z-index':0})
$('#nav-2').css({'opacity':0})}else{var change=((arrows_end-pos)*arrows_percentage)/100
$('#ss-next,#ss-prev').stop().css({'opacity':change},100)
$('#nav-2').css({'opacity':0})}
if(pos<home_copy_start){$('#homepage-copy').stop().css({'opacity':1})}else if(pos>home_copy_end){$('#homepage-copy').stop().css({'opacity':0})}else{var change=((home_copy_end-pos)*homecopy_percentage)/100
$('#homepage-copy').stop().css({'opacity':change},100)}
if(pos<label_start){$('#slideshow-labels').stop().css({'opacity':1})}else if(pos>label_end){$('#slideshow-labels').stop().css({'opacity':0})}else{var change=((label_end-pos)*label_percentage)/100
$('#slideshow-labels').stop().css({'opacity':change},100)}}}
myScroll=new IScroll('#iscroll-wrapper',{probeType:3,mouseWheel:true,useTransition:true,click:true});myScroll.on('scroll',updatePosition);myScroll.on('scrollEnd',updatePosition);scrollerInit(false);$('#nav-2').on('click',function(){var nav_position=($('#nav-2').position().top*-1)+$('#header').height()-1
myScroll.scrollTo(0,nav_position,1000);})
var slideshow_timeout=false;$(document).keydown(function(e){switch(e.keyCode){case 39:e.preventDefault();nextSlide()
return false;case 37:e.preventDefault();prevSlide()
return false;break;}});}}
$(window).resize(function(){if(page=='home'||page=='blog'){if(slideshow_timeout!==false){clearTimeout(slideshow_timeout)}
slideshow_timeout=setTimeout(function(){if(page=='home'){scrollerInit(true)}
resizeSlideshow()},100);}
if(grid_timeout!==false){clearTimeout(grid_timeout)}
grid_timeout=setTimeout(function(){changeLayout(true)},200);if($('.lightbox').length||page=='press'){if(lb_timeout!==false){clearTimeout(lb_timeout)}
if($(window).width()<540){$('.lb-slide').not('.active').css({opacity:0})}else{$('.lb-slide').not('.active').css({opacity:1})}
lb_timeout=setTimeout(function(){resizeViewport(false)},50);}
if(parseInt($('#menu').css('right'))>0){var this_right=$(window).width()<1200?'-50%':'-33.3333333333%';$('#menu').css({right:this_right})}
moveSearchForm()});function moveSearchForm(){if($('#nav-search').length){var neighbour=$('#nav-search')
var this_left=$('#nav-search').position().left+$('#nav-search').width()+parseInt($('#nav-search').css('margin-right'))
$('#nav-search-form').css('left',this_left)}}
setTimeout(function(){moveSearchForm()},200)
if($('.lightbox').length||$('.press-article-thumbnail').length){var lb_timeout=false;var active_lb=null;var images_loaded=false;var max_slide_width=87.5
var slide_ratio=0;if(Modernizr.touch){$('#lb-viewport').touchwipe({wipeLeft:function(){if($('.next-slide').length){carouselNext(false)}
return false;},wipeRight:function(){if($('.prev-slide').length){carouselPrev()}
return false;},min_move_x:40,preventDefaultEvents:true});}
$(document).keydown(function(e){if($('#lightbox').is(':visible')){switch(e.keyCode){case 27:e.preventDefault();$('#lb-close').click()
return false;case 39:e.preventDefault();if($('.next-slide').length){carouselNext(false)}
return false;case 37:e.preventDefault();if($('.prev-slide').length){carouselPrev()}
return false;break;}}});$('#lb-close').on('click',function(){$('#lightbox').hide();$('body').css({'overflow-y':'visible'})
$('#lb-viewport').children().remove()
images_loaded=false;})
function assignSlides(init){$('#lb-viewport').find('.lb-slide').each(function(i){if(i==0){$(this).addClass('first').addClass('active');}
else if(i==1){$(this).addClass('next-slide');}
else{$(this).addClass('slide-waiting');if(i==$('#lb-viewport').find('.lb-slide').length-1){initPrevSlide()}}
if(i==$('#lb-viewport').find('.lb-slide').length-1){$('#lightbox').show();$('body').css({'overflow-y':'hidden'})
if(!images_loaded){loadImages()}
resizeViewport()}})}
function reOrderLightbox(active_id){var activeSlide=$('#lb-viewport').find(".lb-slide[data-counter='"+active_id+"']")
var prev_all_len=activeSlide.prevAll().length
if(prev_all_len){activeSlide.prevAll().reverse().each(function(i){$(this).appendTo('#lb-viewport')
if(i+1==prev_all_len){assignSlides()}})}else{assignSlides()}}
$('.lightbox').on('click',function(){active_id=$(this).data('counter')
$('#lb-viewport-2').children().clone().appendTo('#lb-viewport')
reOrderLightbox(active_id)})
$('.press-article-thumbnail').on('click',function(e){e.preventDefault()
$('#lb-viewport').html('')
active_id=0
var thumb_id=$(this).index()+1
var viewport=$('#lb-viewport-'+thumb_id)
var press_slides=viewport.find('.lb-slide')
if(press_slides.length==2){press_slides.each(function(i){$(this).clone().appendTo('#lb-viewport')})}
$('.press-caption').not($('#press-caption-'+thumb_id)).hide()
$('#press-caption-'+thumb_id).show()
viewport.children().clone().appendTo('#lb-viewport')
reOrderLightbox(active_id)})
function loadImages(){if($('#lb-viewport').find('.unloaded').length==0){images_loaded=true;$('#lb-viewport').velocity({opacity:1})}
$('#lb-viewport').find('.unloaded:first').each(function(x){var myobj=$(this)
var img=new Image();var src=$(this).data('original');$(img).load(function(){myobj.removeClass("unloaded").addClass('loaded').attr('src',src)
resizeImages(myobj)
setTimeout(function(){loadImages()},10);}).attr('src',src);})}
function resizeImages(myobj){var photo_ratio=getOriginalRatioOfImg(myobj)
if(photo_ratio<=1){if(photo_ratio<slide_ratio){myobj.removeClass('landscape').addClass('portrait')}else{myobj.removeClass('portrait').addClass('landscape')}}else{if(photo_ratio<slide_ratio){myobj.removeClass('landscape').addClass('portrait')}else{myobj.removeClass('portrait').addClass('landscape')}}
if(myobj.height()<myobj.parent().height()){var this_top=(myobj.parent().height()-myobj.height())/2
myobj.css({'margin-top':this_top})}else{myobj.css({'margin-top':0})}
if(myobj.parent().hasClass('next-slide')){formatNextMargin(myobj.parent(),false)}
if(myobj.parent().hasClass('prev-slide')){formatPrevMargin(myobj.parent(),false)}}
function formatNextMargin(myobj,animate){var obj_slide=myobj
var obj_img=obj_slide.children().first()
var offset=(100-((100-max_slide_width)/2))*0.01
var margin_left=($(window).width()*offset)-((obj_slide.width()-obj_img.width())/2)
var style={translateX:margin_left+10}
if(animate){obj_slide.velocity(style,animation_speed,animation_easing)}else{obj_slide.velocity(style,0)}}
function formatPrevMargin(myobj,animate){var obj_slide=myobj
var obj_img=obj_slide.children().first()
var margin_left=($(window).width()/2)+(obj_img.width()/2)
var style={translateX:(margin_left*-1)-10}
if(animate){obj_slide.velocity(style,animation_speed,animation_easing)}else{obj_slide.velocity(style,0)}}
function initPrevSlide(){var to_append=$('#lb-viewport').children().last()
to_append.prependTo('#lb-viewport').removeClass('slide-waiting').addClass('prev-slide')
formatPrevMargin(to_append,0)}
function carouselNext(fromReset){if($('body').hasClass('animating')){return false;}else{$('body').addClass('animating')}
var active_slide=$('.active').first()
var active_img=active_slide.children().first()
var margin_left=($(window).width()/2)+(active_img.width()/2)
if(active_slide.next().length){var incoming_slide=active_slide.next();}else{return false;}
var outgoing_slide=active_slide.prev();active_slide.velocity({translateX:(margin_left*-1)-10},animation_speed,animation_easing,function(){$(this).removeClass('first').removeClass('active').addClass('prev-slide')
setTimeout(function(){$('body').removeClass('animating')},25)})
incoming_slide.velocity({translateX:0},animation_speed,animation_easing,function(){$(this).removeClass('next-slide').removeClass('slide-waiting').addClass('active').next().addClass('next-slide')})
formatNextMargin(incoming_slide.next(),1)
outgoing_slide.velocity({translateX:'-='+margin_left},animation_speed,animation_easing,function(){$(this).removeClass('prev-slide').addClass('slide-waiting').appendTo('#lb-viewport').velocity({translateX:(margin_left*2)+10},{duration:0})})}
function carouselPrev(){if($('body').hasClass('animating')){return false;}else{$('body').addClass('animating')}
var active_slide=$('.active').first()
var active_img=active_slide.children().first()
var margin_left=($(window).width()/2)+(active_img.width()/2)
var incoming_slide=active_slide.prev()
var outgoing_slide=active_slide.next()
var to_append=$('#lb-viewport').children().last()
to_append.prependTo('#lb-viewport').removeClass('slide-waiting').velocity({translateX:(margin_left*-2)-10},{duration:0})
active_slide.velocity({translateX:margin_left+10},animation_speed,animation_easing,function(){$(this).removeClass('first').removeClass('active').addClass('next-slide')
setTimeout(function(){$('body').removeClass('animating')},25)})
incoming_slide.velocity({translateX:0},animation_speed,animation_easing,function(){$(this).removeClass('prev-slide').removeClass('slide-waiting').addClass('active').prev().addClass('prev-slide')})
setTimeout(function(){formatPrevMargin(incoming_slide.prev(),1)},50)
outgoing_slide.velocity({translateX:'+='+margin_left},animation_speed,animation_easing,function(){$(this).removeClass('next-slide').addClass('slide-waiting').velocity({translateX:(margin_left*2)+10},{duration:0})})}
$('#lb-next').on('click',function(){carouselNext(false)
return false;})
$('#lb-prev').on('click',function(){carouselPrev()
return false;})
function getOriginalRatioOfImg(img_element){if(img_element.data('orig-width')==0||img_element.data('orig-height')==0){var t=new Image();t.src=(img_element[0].getAttribute?img_element[0].getAttribute("src"):false)||img_element[0].src;t.onload=function(){var orig_ratio=t.width/t.height;t=null;return orig_ratio;}}else{return img_element.data('orig-width')/img_element.data('orig-height')}}
function setSlideDims(){var this_left=(100-max_slide_width)/2;$('#lb-viewport').find('.lb-slide').css({'width':max_slide_width+'%','left':'6.25%'})
$('.slide-waiting').velocity({translateX:(200-(100-max_slide_width))+'%'},0)}
function resizeViewport(init){setSlideDims()
$('#lb-viewport').stop().height($(window).height()-($('#header').height()*3))
slide_ratio=$('#lb-viewport').find('.lb-slide').first().width()/$('.lb-slide').first().height()
if(!init){setWrapperHeight(init)}}
function setWrapperHeight(init){$('.loaded').each(function(i){resizeImages($(this))})}
if(!Modernizr.touch){$('.lightbox').on('mouseover',function(){$(this).find('.lb-opener').first().stop().velocity({opacity:1})})
$('.lightbox').on('mouseleave',function(){$(this).find('.lb-opener').first().stop().velocity({opacity:0})})}}
$('#share-open').on('click',function(){$('#share').find('.opaque').velocity({opacity:1}).css('cursor','pointer')
$(this).hide()
$('#share-close').css('display','inline-block')
return false})
$('#share-close').on('click',function(){$('#share').find('.opaque').velocity({opacity:0}).css('cursor','default')
$(this).hide()
$('#share-open').css('display','inline-block')
return false})
$('#nav-search').on('click',function(){if($('#nav-search-form').is(':visible')){$(this).find('img').last().removeClass('icon-hider')
$('#nav-search-form').hide()
$('#nav a').css({opacity:1})}else{$(this).find('img').last().addClass('icon-hider')
$('#nav-search-form').show()
$('#nav a').css({opacity:0})
$('#nav-search-input').focus()
if($('#menu').hasClass('menu-open')){$('#menu-closer').click()}}})
if(!Modernizr.touch){$('.svg-hover').on('mouseover',function(){$(this).find('img').first().stop().velocity({opacity:0},300).next().stop().velocity({opacity:1},300)})
$('.svg-hover').on('mouseleave',function(){$(this).find('img').first().stop().velocity({opacity:1},300).next().stop().velocity({opacity:0},300)})}
$('#menu-closer').on('click',function(){var this_right=$(window).width()<1200?'-50%':'-33.3333333333%';$('#menu').stop().velocity({right:this_right},200).removeClass('menu-open')})
$('#hamburger').on('click',function(){$('#menu').stop().velocity({right:0},200).addClass('menu-open')})
var active_person=1
function nextPerson(dir){if($('body').hasClass('animating')){return false}else{$('body').addClass('animating')}
outgoing=$('.process-block-active')
if(dir=='right'){if($('.process-'+(active_person+1)).length){incoming=$('.process-'+(active_person+1))
active_person++}else{incoming=$('.process-1')
active_person=1}}else{if($('.process-'+(active_person-1)).length){incoming=$('.process-'+(active_person-1))
active_person--}else{incoming=$('.process-'+people_count)
active_person=people_count}}
var outgoing_velocity={opacity:0,'z-index':0}
if(dir=='left'){outgoing_velocity["right"]='-100%';}else{outgoing_velocity["left"]='-100%';}
var outgoing_style=(dir=='right')?{right:0}:{left:0};outgoing.stop().velocity(outgoing_velocity,function(){outgoing.css({'left':'','right':''})}).removeClass('process-block-active')
var incoming_velocity={opacity:1,'z-index':1}
if(dir=='right'){incoming_velocity["right"]='0';}else{incoming_velocity["left"]='0';}
var incoming_style=(dir=='right')?{right:'-100%'}:{left:'-100%'};incoming.stop().css(incoming_style).velocity(incoming_velocity,function(){incoming.css({'left':'','right':''})
$('body').removeClass('animating')}).addClass('process-block-active')}
$('#people-next').on('click',function(){nextPerson('right');return false;})
$('#people-prev').on('click',function(){nextPerson('left');return false;})
$(document).keydown(function(e){if($('#people-lightbox').is(':visible')){switch(e.keyCode){case 27:e.preventDefault();$('#people-lb-close').click()
return false;case 39:e.preventDefault();nextPerson('right');return false;case 37:e.preventDefault();nextPerson('left');return false;break;}}});if(Modernizr.touch){$('.people-swipe').touchwipe({wipeLeft:function(e){e.preventDefault();nextPerson('right');return false;},wipeRight:function(e){e.preventDefault();nextPerson('left');return false;},min_move_x:40,preventDefaultEvents:false});}
$('#people-lb-close').on('click',function(){$('#people-lightbox').hide();$('#menu,#header').css({opacity:1})
$('body').css({'overflow-y':'visible'})})
$('.person-thumbnail').on('click',function(){var counter=$(this).data('counter')
if(counter!=active_person){$('.process-block-active').removeClass('process-block-active').css({'z-index':0,'opacity':0})
$('.process-'+counter).addClass('process-block-active').css({'z-index':1,'opacity':1})
active_person=counter}
$('#menu,#header').css({opacity:0})
$('#people-lightbox').show();$('body').css({'overflow-y':'hidden'})
changeLayout()
return false;})
$('.process-title a').on('click',function(){if($(this).parent().hasClass('process-title-highlighted')||$('body').hasClass('animating')){return false}else{$('body').addClass('animating')}
var myobj=$(this)
var parent=myobj.parent()
if(ignore_next){dir='left'
ignore_next=false;}else if(ignore_prev){dir='right'
ignore_prev=false;}else{var dir=myobj.data('process')>$('.process-title-highlighted').find('a').first().data('process')?'left':'right';}
$('.process-title-highlighted').removeClass('process-title-highlighted')
parent.addClass('process-title-highlighted')
outgoing=$('.process-block-active')
incoming=$('.process-'+myobj.data('process'))
var outgoing_velocity={opacity:0,'z-index':0}
if(dir=='right'){outgoing_velocity["right"]='-100%';}else{outgoing_velocity["left"]='-100%';}
var outgoing_style=(dir=='right')?{right:0}:{left:0};outgoing.stop().velocity(outgoing_velocity,function(){outgoing.css({'left':'','right':''})}).removeClass('process-block-active')
var incoming_velocity={opacity:1,'z-index':1}
if(dir=='left'){incoming_velocity["right"]='0';}else{incoming_velocity["left"]='0';}
var incoming_style=(dir=='left')?{right:'-100%'}:{left:'-100%'};incoming.stop().css(incoming_style).velocity(incoming_velocity,function(){incoming.css({'left':'','right':''})
$('body').removeClass('animating')}).addClass('process-block-active')
return false;})
var ignore_next=false;$('#process-next').on('click',function(){var myobj=$('.process-title-highlighted').first()
if(myobj.next().length){myobj.next().find('a').first().click()}else{ignore_next=true;$('.process-title a').first().click()}
return false;})
var ignore_prev=false;$('#process-prev').on('click',function(){var myobj=$('.process-title-highlighted').first()
if(myobj.prev().length){myobj.prev().find('a').first().click()}else{ignore_prev=true;$('.process-title a').last().click()}
return false;})
$(document).keydown(function(e){if(page=='about'){switch(e.keyCode){case 39:e.preventDefault();$('#process-next').click()
return false;case 37:e.preventDefault();$('#process-prev').click()
return false;break;}}});if(Modernizr.touch){$('.about-swipe').touchwipe({wipeLeft:function(){e.preventDefault();$('#process-next').click()
return false;},wipeRight:function(){e.preventDefault();$('#process-prev').click()
return false;},min_move_x:40,preventDefaultEvents:false});}
if(page=='blog'){}
if(('.slideshow-fullscreen-fade').length){$('.slideshow-fullscreen-fade').each(function(){SlideShowFullScreenFade($(this));})
$('.slideshow-comments').find('.comment-underline').last().removeClass('comment-underline')}})