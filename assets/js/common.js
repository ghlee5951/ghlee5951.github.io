'use strict'
window.requestAnimFrame = (function(callback){return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {window.setTimeout(callback , 1000/60);};})();
window.cancelAnimFrame = (function(){return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(id) {window.clearTimeout(id);};})();

const coalitionData = [
	{
		image : 'coalition-visual-1.png',
		keywords : [
			'무인 PetPass겸용1',
			'지자체1'
		],
		title : '화성 동탄여울공원 반려가족 놀이터1',
		desc : '경기 화성시 동부대로 1063-31'
	},
	{
		image : 'coalition-visual-1.png',
		keywords : [
			'무인 PetPass겸용2'
		],
		title : '화성 동탄여울공원 반려가족 놀이터2',
		desc : '경기 화성시 동부대로 1063-32'
	},
	{
		image : 'coalition-visual-1.png',
		keywords : [
			'무인 PetPass겸용',
			'지자체'
		],
		title : '화성 동탄여울공원 반려가족 놀이터',
		desc : '경기 화성시 동부대로 1063-3'
	},
	{
		image : 'coalition-visual-1.png',
		keywords : [
			'무인 PetPass겸용',
			'지자체'
		],
		title : '화성 동탄여울공원 반려가족 놀이터',
		desc : '경기 화성시 동부대로 1063-3'
	},
	{
		image : 'coalition-visual-1.png',
		keywords : [
			'무인 PetPass겸용',
			'지자체'
		],
		title : '화성 동탄여울공원 반려가족 놀이터',
		desc : '경기 화성시 동부대로 1063-3'
	},
	{
		image : 'coalition-visual-1.png',
		keywords : [
			'무인 PetPass겸용',
			'지자체'
		],
		title : '화성 동탄여울공원 반려가족 놀이터',
		desc : '경기 화성시 동부대로 1063-3'
	},
	{
		image : 'coalition-visual-1.png',
		keywords : [
			'무인 PetPass겸용',
			'지자체'
		],
		title : '화성 동탄여울공원 반려가족 놀이터',
		desc : '경기 화성시 동부대로 1063-3'
	},
	{
		image : 'coalition-visual-1.png',
		keywords : [
			'무인 PetPass겸용',
			'지자체'
		],
		title : '화성 동탄여울공원 반려가족 놀이터',
		desc : '경기 화성시 동부대로 1063-3'
	}
]

const include = {
  headerContainer: null,
  footerContainer: null,

  init() {
    this.headerContainer = document.getElementById('dHead');
    this.footerContainer = document.getElementById('dFoot');

    if (this.headerContainer && this.headerContainer.children.length === 0) {
      this.header();
    }
    if (this.footerContainer && this.footerContainer.children.length === 0) {
      this.footer();
    }
  },

  header() {
    const html = '';
    this.headerContainer.innerHTML = html;
  },

  footer() {
    const html = '';
    this.footerContainer.innerHTML = html;
  }
};

const common = {
  state : false,  
  stage: {
    width: 0,
    height: 0,
    top: 0,
    ptop: 0,
    pw: 0
  },
  elements: {
	wrap : null,
    header: null,
	gnb : null,
	pageUI : null,
	footer : null
  },

  init() {
    //include.init();

	if(this.state) return false;

	gsap.registerPlugin(ScrollTrigger);

	fadeEffect.init();

	//this.state = true;
    this.elements.wrap = document.querySelector('#wrap');
    this.elements.header = document.querySelector('#header');
	this.elements.gnb = document.querySelector('#gnb');
	this.elements.pageUI = document.querySelector('#page-ui');	
	this.elements.partner = document.querySelector('.partner');
	this.elements.special = document.querySelector('.special');
	this.elements.patent = document.querySelector('.patent');
	

	const countEl = document.querySelector('#count');

	if(countEl){
		this.countup = new countUp.CountUp( countEl , 6263254, {
			startVal: 1000000,	
			duration: 1,
			useEasing: false,
			useIndianSeparators: true,
			separator: ',',
		});	

		ScrollTrigger.create({
			trigger : countEl,
			start : () => ( 0 ) + ' 100%',
			end: () => "+=" + ( 1 ),
			scrub : false,
			markers : false,
			onEnter : () => {
				//console.log('on enter');		
				this.countup.reset();
				this.countup.start();
				
			},
			onLeaveBack : () => {
				//console.log('on leave Back');
			}
		});
	}


	const passEl = document.querySelector('.pass');
	if(passEl){
		this.passSwiper = new Swiper( passEl.querySelector('.swiper') , {				
			slidesPerView : 'auto' ,	
			observer: true, 
			observeParents: true, 
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			}	
		})	
	}

	pop.init();
	coalition.init();

	this.ready();
	
	window.addEventListener('load' , common.load);
	window.addEventListener('resize' , common.resize.bind(this));
	window.addEventListener('scroll' , common.scroll.bind(this));
  },

  ready() {
    this.resize();
    this.scroll();
  },

  load() {
    // 페이지 load 시 처리할 로직
  },

  resize() {
	this.stage.pw = this.stage.width;
    this.stage.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    this.stage.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.stage.top = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

	if(this.stage.pw != this.stage.width){
		//console.log('resize');		
		if(this.patentSwiper) this.patentSwiper.destroy(true , true) , this.patentSwiper = null;
		if(this.coalitionSwiper) this.coalitionSwiper.destroy(true , true) , this.coalitionSwiper = null;
		if(this.specialSwiper) this.specialSwiper.destroy(true , true) , this.specialSwiper = null;
		if(this.partnerPcSwiper) this.partnerPcSwiper.destroy(true , true) , this.partnerPcSwiper = null;
		if(this.partnerMoSwiper) this.partnerMoSwiper.destroy(true , true) , this.partnerMoSwiper = null;
		if(window.innerWidth <= 1024){
			this.patentSwiper = new Swiper(this.elements.patent.querySelector('.swiper') , {
				loop : true,
				slidesPerView: 'auto',
				simulateTouch : true,
				observeParents : true,
				observeSlideChildren : true,
				spaceBetween :12,
				speed :600,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				}
			});


			this.partnerPcSwiper = new Swiper(this.elements.special.querySelector('.swiper') , {
				loop : false,
				slidesPerView: 'auto',
				simulateTouch : true,
				observeParents : true,
				observeSlideChildren : true,
				spaceBetween :12,
				speed :600,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				}
			});

			this.specialSwiper = new Swiper(this.elements.partner.querySelector('.mo-banner .swiper') , {
				loop : true,
				slidesPerView: 'auto',
				simulateTouch : true,
				observeParents : true,
				observeSlideChildren : true,
				spaceBetween :16,
				speed :600,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				  }
			});

			this.coalitionSwiper = new Swiper(this.elements.partner.querySelector('.coalition-swiper .swiper') , {
				loop : true,
				slidesPerView: 1,
				simulateTouch : true,
				observeParents : true,
				observeSlideChildren : true,
				spaceBetween :30,
				speed :600,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				  }
			});
		}else{
			this.elements.partner.querySelector('.pc-banner .swiper').style.height = this.elements.partner.querySelector('.pc-banner .img').getBoundingClientRect().height + "px";
			this.partnerMoSwiper = new Swiper( this.elements.partner.querySelector('.pc-banner .swiper') , {
				loop : true,
				direction: "vertical",
				speed :400,
				spaceBetween : 20 ,
				observeParents : true,
				observeSlideChildren : true,
				simulateTouch : false,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				}
			});
		}


	}
  },

  scroll() {
    this.stage.top = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    if (this.elements.wrap && !this.elements.header.classList.contains('actived')) {
      const posY = 1;

      if (this.stage.top >= posY) {
        this.elements.wrap.classList.add('scroll');
      } else {
        this.elements.wrap.classList.remove('scroll');
      }


      if (this.stage.top <= posY) {
        this.elements.wrap.classList.remove('up', 'down');
      } else {
        if (this.elements.wrap.classList.contains('scroll') || this.elements.wrap.classList.contains('down')) {
          if (this.stage.ptop > this.stage.top) {
            this.elements.wrap.classList.remove('down');
            this.elements.wrap.classList.add('up');
          }
        }

        if (this.elements.wrap.classList.contains('scroll') || this.elements.wrap.classList.contains('up')) {
          if (this.stage.ptop < this.stage.top) {
            this.elements.wrap.classList.remove('up');
            this.elements.wrap.classList.add('down');
          }
        }
      }

	  if(this.elements.pageUI){			
		this.elements.pageUI.classList.toggle('actived' , common.stage.top > 100 );		
		const bottomSpace = (common.stage.width > common.breakpoint.mobile ) ? 20 : 0 ;
		const bottomY = window.pageYOffset + this.elements.footer.getBoundingClientRect().top - window.innerHeight + bottomSpace;		
		this.elements.pageUI.classList.toggle('bottom' , common.stage.top >= bottomY );
	};

      this.stage.ptop = this.stage.top;
    }
	
  },

  pageMove(y) {
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const pop = {
  state : false,
  prevElement: null,
  prevElements: [],
  activeElement: null,
  activeElements: [],
  isActive: false,
  zIndex: 9999,

  init() {

	if(this.state) return false;

	//this.state = true;
	
    document.body.addEventListener('click', (e) => {
      if (this.isActive && !e.target.closest('.pop-data')) {
        this.close(e.target);
      }
    });

    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
  },

  open(id, item, msg) {
    const element = document.querySelector(`#${id}`);

    if (element) {
      this.zIndex++;
      this.isActive = true;
      this.prevElements.push(item);
      this.activeElement = element;
      this.activeElements.push(element);

      if (element.classList.contains('layer-pop-message')) {
        if (msg) {
          const msgEl = element.querySelector('#alertPopValue');
          if (msgEl) {
            msgEl.innerHTML = msg;
          }
        } else {
          alert('내용이 없습니다.');
          return false;
        }
      }

      element.classList.add('actived');
      document.documentElement.classList.add('fix');
      //document.body.style.paddingRight = `${$WINDOW.getScrollBarWidth()}px`;
      element.style.zIndex = this.zIndex;	  
	  
      /*
      const view = element.querySelector('.layer-pop-view');
      view.setAttribute('tabindex', 0);
      setTimeout(() => view.focus(), 100);
      */
    } else {
      alert('컨텐츠가 없습니다.');
    }
  },

  close(item) {
    let element;

    if (typeof item === 'string') {
      element = document.querySelector(`#${item}`);
    } else {
      element = item.closest('.layer-pop-wrap');
    }

    if (element) {
      this.prevElement = this.prevElements[this.prevElements.length - 1];
      element.classList.remove('actived');

      /*
      const view = element.querySelector('.layer-pop-view');
      if (view) view.setAttribute('tabindex', -1);
      */

      setTimeout(() => {
        if (this.prevElement) {
          this.prevElement.focus();
        }
      }, 100);

      this.activeElements.pop();
      this.prevElements.pop();

      if (this.activeElements.length === 0) {
        this.isActive = false;
        setTimeout(() => {
          document.documentElement.classList.remove('fix');
         // document.body.style.paddingRight = '0px';
        }, 400);
      }
    }
  },

  resize() {	
    document.documentElement.style.setProperty('--scroll-bar-width', `${this.getScrollBarWidth()}px`);
  },
  getScrollBarWidth() {
    const inner = document.createElement('p');
    inner.style.width = '100%';
    inner.style.height = '200px';

    const outer = document.createElement('div');
    Object.assign(outer.style, {
      position: 'absolute',
      top: '0px',
      left: '0px',
      visibility: 'hidden',
      width: '200px',
      height: '150px',
      overflow: 'hidden'
    });

    outer.appendChild(inner);
    document.body.appendChild(outer);

    const w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    let w2 = inner.offsetWidth;
    if (w1 === w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return w1 - w2;
  }
};

const fadeEffect = {

	status:false,
	effects: [],
  
	init() {
		const elements = document.querySelectorAll('.effect-data');
		if (!elements.length) return;
		//console.log('fade effect init');	  		
		this.status = true;	  
		
		elements.forEach(el => {
			this.effects.push(fadeEffect.createItem(el));
		});	  
	},
  
	destroy(){
	  if(this.status){
		  this.status = false
		  //console.log('fade effect destroy')			
		  if(this.effects.length > 0 ){
			  
			  this.effects.forEach((element) => {	
				  if (element?.destroy) {
					  element.destroy();
				  }
			  });
			  this.effects = [];
			  
		  }
	  }
	},
	reset(){
		if(this.effects.length > 0 ){	
			//console.log('fade effect reset')		  
			this.effects.forEach((element) => {	
				element.resize();
			});			
		}
	},
	createItem(target) {
	  const _this = this;
	  const element = target;
	  const triggerPosition = target.getAttribute('data-trigger') || 1;
	  const stage = { pw : -1 , width: 0, height: 0, top: 0 };
	  const position = { y: 0, offsetY: 0 };
	  const guide = { status : false , dom : null };
  
	  const init = () => {
		  //console.log('init');
		  if(guide.status){
			  guide.dom = document.createElement('div');
			  guide.dom.style.position = "absolute";
			  guide.dom.style.width = "100%";
			  guide.dom.style.height = "1px";
			  guide.dom.style.top = "0px";
			  guide.dom.style.left = "0px";
			  guide.dom.style.backgroundColor = "#ff6600";
  
			  document.body.append(guide.dom);
		  }
	  }
  
	  const getTranslateXY = ( el ) => {
			const transform = window.getComputedStyle(el).transform;
  
			if (transform === 'none') {
			  return { x: 0, y: 0 };
			}
  
			const matrixValues = transform.match(/matrix\((.+)\)/);
  
			if (matrixValues) {
			  const values = matrixValues[1].split(', ');
			  const x = parseFloat(values[4]);
			  const y = parseFloat(values[5]);
			  return { x, y };
			}
  
			return { x: 0, y: 0 };
	  }
  
	  const getTranslateXYFrom3D = ( el ) => {
		  const transform = window.getComputedStyle(el).transform;
  
			if (transform === 'none') {
			  return { x: 0, y: 0 };
			}
  
			const matrix3dMatch = transform.match(/matrix3d\((.+)\)/);
  
			if (matrix3dMatch) {
			  const values = matrix3dMatch[1].split(', ');
			  const x = parseFloat(values[12]);
			  const y = parseFloat(values[13]);
			  return { x, y };
			}
  
			return getTranslateXY(el); // fallback to 2D
	  }
  
  
	  const scroll = () => {
		  //console.log('scroll');
		stage.top = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
		position.y = stage.top + stage.height * triggerPosition;
		element.classList.toggle('actived' , position.y >= position.offsetY);
	  };
  
	  const resize = () => {
		stage.pw = stage.width;
		stage.width = window.innerWidth;
		stage.height = window.innerHeight;
						
		const style = getTranslateXYFrom3D(element);
		//console.log(style);
		position.offsetY = window.pageYOffset + element.getBoundingClientRect().top - style.y;
		if(guide.status){
			guide.dom.style.top = position.offsetY + "px";
		}
		scroll();
		
	  };
  
	  const load = () => {
		  resize();
	  }
  
  
	  
  
	  const destroy = () => {
		  //console.log('fade element destroy');
		  if(guide.status) guide.dom.remove();
		  window.removeEventListener('load', scroll);
		  window.removeEventListener('scroll', scroll);
		  window.removeEventListener('resize', resize);		
	  }
  
	  // 초기 실행 및 scroll 이벤트 등록
	  init();
	  resize();
	  window.addEventListener('load', scroll);
	  window.addEventListener('scroll', scroll);
	  window.addEventListener('resize', resize);
  
	  // 반환 안 해도 되지만 추후 destroy 등 필요 시 객체화 가능
	  return {
		element,
		scroll,
		destroy,
		resize
	  };
	}
};

const createVideoPlayer = (options) => {
	const {
	  el,
	  autoPlay = false,
	  loop = false,
	  resize = false,
	  idx = 0,
	  onPlay,
	  onPause,
	  onEnd,
	  onError,
	  onInit,
	  onLoadedData,
	  progress = false,
	  progressEl = null
	} = options;
  
	const $parentElement = el;
	const $video = $parentElement.querySelector('video');
	let $videoState = true;
	let firstPlay = false;
  
	const player = {
	  target: null,
	  idx,
  
	  play() {
		if ($videoState) $video.play();
	  },
  
	  stop() {
		if ($videoState) $video.pause();
	  },
  
	  reset() {
		if ($videoState) {
		  $video.currentTime = 0;
		  $video.play();
		}
	  },
  
	  seekTo(index) {
		if ($videoState) $video.currentTime = index;
	  },
  
	  volume(number) {
		if ($videoState) $video.volume = number;
	  },
  
	  muted(flag) {
		if ($videoState) $video.muted = flag;
	  },
  
	  controls(flag) {
		if ($videoState) $video.controls = flag;
	  },
  
	  resize() {
		// resize 시 처리할 로직이 있다면 여기에
	  },
  
	  getVideoDuration() {
		return $video.duration;
	  },
  
	  // ✅ destroy 메서드 추가
	  destroy() {
		$video.pause();
		$video.removeAttribute('src');
		$video.load();
  
		// 이벤트 제거
		$video.onplay = null;
		$video.onplaying = null;
		$video.onpause = null;
		$video.onended = null;
		$video.onloadeddata = null;
		$video.onerror = null;
		$video.onunload = null;
  
		window.removeEventListener('resize', player.resize);
  
		if (progress && progressEl) {
		  gsap.killTweensOf(progressEl);
		  gsap.set(progressEl, { width: 0 });
		}
  
		$parentElement.classList.remove('actived');
		$videoState = false;
	  }
	};
  
	// 🎬 이벤트 바인딩
	$video.onplay = () => {
	  if (!$videoState) return;
	  $parentElement.classList.add('actived');
	  if (onPlay) onPlay.call(player);
	  if (progress && progressEl) {
		// 예: gsap.to(progressEl, { duration: $video.duration, width: '100%', ease: 'none' });
	  }
	  if (!firstPlay) firstPlay = true;
	};
  
	$video.onplaying = () => {
	  if ($videoState) {
		$parentElement.classList.add('actived');
		if (progress && progressEl) {
		  // 예: gsap.to(progressEl, { duration: $video.duration, width: '100%', ease: 'none' });
		}
	  }
	};
  
	$video.onpause = () => {
	  if (!$videoState) return;
	  if (onPause) onPause.call(player);
	  if (progress && progressEl) {
		// 예: gsap.killTweensOf(progressEl);
		// 예: gsap.set(progressEl, { width: 0 });
	  }
	};
  
	$video.onended = () => {
	  if (!$videoState) return;
	  if (loop) $video.play();
	  if (onEnd) onEnd.call(player);
	  if (progress && progressEl) {
		gsap.set(progressEl, { width: 0 });
	  }
	};
  
	$video.onloadeddata = () => {
	  $video.currentTime = 0;
	  if (onLoadedData) onLoadedData.call(player);
	  if (onInit) onInit.call(player);
	};
  
	$video.onerror = () => {
	  if (onError) onError(player);
	  $videoState = false;
	};
  
	$video.onunload = () => {
	  $videoState = false;
	};
  
	// 초기화
	player.target = player;
	player.resize();
	window.addEventListener('resize', player.resize);
  
	if (autoPlay) player.play();
  
	return player;
  };

const coalition = {
	container : null,
	init(){
		this.container = document.querySelector('.coalition-swiper')

		document.body.addEventListener('click', (e) => {			
			if (e.target.closest('.btn-gallery-nav')) {			  			  
			  const btnEl = e.target.closest('.btn-gallery-nav');
			  if(btnEl){
				const parentsEl = btnEl.closest('.swiper-wrapper');
				const parentEl = btnEl.parentNode;
				//const index = Array.from(parentsEl.children).indexOf(parentEl);
				const index = btnEl.getAttribute('data-index');
				this.view(index);			
			  }		  			  
			}
		  });

		this.set();
		this.resize();
		window.addEventListener('resize' , this.resize.bind(this));
	},

	set(){

		const listEl = this.container.querySelector('.swiper-wrapper');
		let html = '';

		coalitionData.forEach((item , idx) => {
			console.log(item);			
			html +='<div class="swiper-slide">';
			html +='	<button type="button" class="btn-gallery-nav" data-index="' + idx + '">';
			html +='		<span class="item-outer">';
			html +='			<span class="item-inner">';
			html +='				<span class="item-visual"><img src="assets/images/' + item.image + '" alt=""/></span>';
			html +='				<span class="item-label">';
			item.keywords.forEach((txt)=>{
				html +='					<span class="label">' + txt + '</span>';
			})
			html +='				</span>';
			html +='			</span>';
			html +='		</span>';
			html +='	</button>';
			html +='</div>';
		})

		listEl.innerHTML = html;
	},

	view( index ){
		const viewEl = document.querySelector('#coalitionDetail');
		let html ='';
		html += '<div class="item-visual"><img src="assets/images/' + coalitionData[index].image + '" alt=""/></div>';
		html += '<div class="item-info">';
		html += '	<div class="item-keyword">';
		coalitionData[index].keywords.forEach((txt)=>{
			html += '		<div class="keyword">' + txt + '</div>';
		});
		html += '	</div>';
		html += '	<div class="item-title">' + coalitionData[index].title + '</div>';
		html += '	<div class="item-desc">' + coalitionData[index].desc + '</div>';
		html += '</div>';

		viewEl.innerHTML = html;
		pop.open('coalitionView')
	},

	resize(){
		
	}
}


document.addEventListener('DOMContentLoaded' , function(){common.init();});