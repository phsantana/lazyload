window.onload = lazyLoad;
window.onscroll = lazyLoad;

function lazyLoad(){	
	[].forEach.call(document.querySelectorAll('img[data-src]'), function(img){
		if((document.documentElement.scrollTop + window.innerHeight - (img.offsetTop+140)) >= img.parentNode.parentNode.parentNode.offsetTop){
			img.setAttribute('src', img.getAttribute('data-src'));
			img.onload = function(){
				img.style.animation = "fadeIn 2s ease";
				img.removeAttribute('data-src');
			}
		};
	});
}