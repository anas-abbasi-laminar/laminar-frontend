jQuery(function ($) {

	$(document).ready(function() {
		
		"use strict";
		
		PageLoad();
		ScrollEffects();
		Sliders();	 
		FirstLoad(); 
		PageLoadActions(); 
		FitThumbScreenGSAP();
		FloatingLists();
		StickyLists();		
		ShowcaseSlider();
		ShowcaseWebglCore();  
		ShowcaseCarousel(); 		
		FitThumbScreenWEBGL();
		Portfolio();
		Shortcodes();		
		Core();
		JustifiedGrid();
		Lightbox();
		ContactForm();	
		PlayVideo();
		// ContactMap();
		CustomFunction();
	});
	
	
/*--------------------------------------------------
Function CustomFunction
---------------------------------------------------*/

	function CustomFunction() {
		
		//Add here your custom js code

		if( $('body.home').length > 0 ) {
			fetchBlogs();
		}

		if( $('body.blog-post').length > 0 ) {
			if(!$('body.blog-post').find('[data-trigger=fetch-blogs] .one_half').is(':empty')) {
				populateBlog($('body.blog-post').find('[data-trigger=fetch-blogs]').data('post-id'));
			}
		}
		
	}// End CustomFunction

	function fetchBlogs() {

		// Make a request for a user with a given ID
		axios.get('https://laminar-backend.herokuapp.com/api/posts', {
			params: {
				'filters[featured][$eq]': true,
				'sort': 'publishedAt:DESC',
				'fields[0]': 'title',
				'fields[1]': 'slug',
				'fields[2]': 'publishedAt',
				'populate[0]': 'cover',
				'populate[1]': 'author.picture'
			}
		})
		.then(function (response) {

			// handle success
			if( $('body.home').find('[data-trigger=fetch-blogs]').length > 0 ) {

				var ctr = 1;

				$.each(response.data.data, function(index, value) {

					$('body.home').find('[data-trigger=fetch-blogs] > .panel:nth-child(' + ctr + ') .panel-image a').attr('href', '/blog/' + value.attributes.slug);
					$('body.home').find('[data-trigger=fetch-blogs] > .panel:nth-child(' + ctr + ') .panel-image img').attr('src', value.attributes.cover.data.attributes.url + '?tr=w-512,h-512');
					$('body.home').find('[data-trigger=fetch-blogs] > .panel:nth-child(' + ctr + ') .panel-image img').attr('alt', value.attributes.cover.data.attributes.alternativeText + '?tr=w-512,h-512');
					$('body.home').find('[data-trigger=fetch-blogs] > .panel:nth-child(' + ctr + ') .post-categories li:nth-child(1) > a > span').attr('data-hover', value.attributes.author.data.attributes.name);
					$('body.home').find('[data-trigger=fetch-blogs] > .panel:nth-child(' + ctr + ') .post-categories li:nth-child(1) > a > span').html(value.attributes.author.data.attributes.name);
					$('body.home').find('[data-trigger=fetch-blogs] > .panel:nth-child(' + ctr + ') .post-categories li:nth-child(2) > a > time').attr('data-hover', value.attributes.publishedAt);
					$('body.home').find('[data-trigger=fetch-blogs] > .panel:nth-child(' + ctr + ') .post-categories li:nth-child(2) > a > time').attr('datetime', value.attributes.publishedAt);
					$('body.home').find('[data-trigger=fetch-blogs] > .panel:nth-child(' + ctr + ') .post-categories li:nth-child(2) > a > time').html(value.attributes.publishedAt);
					$('body.home').find('[data-trigger=fetch-blogs] > .panel:nth-child(' + ctr + ') .post-categories li:nth-child(2) > a > time').timeago()
					$('body.home').find('[data-trigger=fetch-blogs] > .panel:nth-child(' + ctr + ') .news-panel-title > span').html(value.attributes.title);

					ctr++;

				});

			}

		})
		.catch(function (error) {
		// handle error
			console.log(error);
		})
		.then(function () {
		// always executed
		});

	}

	function populateBlog(postID) {

		if( $('body.blog-post').find('[data-trigger=fetch-blogs]').length > 0 ) {
			switch(postID) {
				case 1:
					$('body.blog-post').find('[data-trigger=fetch-blogs] .one_half').html(decodeURIComponent('%3Cp%3EIn%20these%20last%20twenty%20years%2C%20I%20have%20seen%20computers%20upend%20newsooms%2C%20digital%20upend%20marketing%2C%20and%20now%20mobile%20upend%20entertainment.%20Along%20the%20way%2C%20I%20have%20started%20up%2C%20worked%20at%20startups%20and%20large%20companies%2C%20been%20acquihired%2C%20built%20global%20teams%2C%20and%20traveled%2C%20lived%20and%20worked%20in%20different%20parts%20of%20the%20world.%3C%2Fp%3E%3Cblockquote%3EAll%20made%20possible%20by%20my%20super-powers%20%E2%80%94%20an%20ability%20to%3Cb%3Ecommunicate%3C%2Fb%3E%2C%3Cb%3Ecode%3C%2Fb%3E%2C%20and%3Cb%3Ecare%20for%20people%3C%2Fb%3Ewell.%3C%2Fblockquote%3E%3Cp%3ESince%20hindsight%20is%202020%2C%20I%20couldn%27t%20resist%20using%20the%20pun%20and%20looking%20back%20at%20three%20key%20inflection%20points%20I%20lived%20through%20at%20the%20intersection%20of%20media%20and%20tech%20and%20how%20they%20so%20reliably%20inform%20my%20future.%3C%2Fp%3E%3Cp%3EIn%20the%20early%20noughts%2C%20I%20was%20part%20of%20newsrooms%20%28first%20print%20and%20then%20TV%29%20that%20were%20undergoing%20massive%20transformations.%20Typesetting%20was%20being%20replaced%20by%20QuarkXpress%2C%20email%20was%20becoming%20commonplace%2C%20the%20internet%20was%20spreading%20from%20the%20one%20computer%20in%20the%20corner%20to%20being%20widely%20available%20across%20all%20computers%2C%20and%20Facebook%20and%20Twitter%20were%20still%20a%20few%20years%20away.%3C%2Fp%3E%3Cp%3EThe%20thing%20that%20changed%20the%20most%2C%20was%20time%20%E2%80%94almost%20overnight%2C%20news-cycles%20became%20compressed%2C%20news%20got%20stale%20a%20lot%20quicker%2C%20what%20qualified%20as%20enough-time%20to%20research%20and%20do%20a%20story%20kept%20getting%20lesser%2C%20and%20the%20time%20to%20reflect%20slowly%20started%20to%20vanish.%3C%2Fp%3E%3Cp%3EFaster%20began%20to%20mean%20better.%3C%2Fp%3E%3Cp%3EIn%20the%20late%20noughts%20and%20early%20tens%2C%20I%20found%20myself%20in%20communication%20and%20advertising%20through%20the%20acquihire%20of%20my%20fledgling%20digital%20agency.%20I%20saw%20digital%20go%20from%20being%20a%20line-item%20and%20a%20check-box%20exercise%20in%20a%20traditional%20marketer%27s%20playbook%20to%20being%20seen%20as%20the%20cure-all%20panacea%20for%20all%20marketing%20problems.%3C%2Fp%3E%3Cp%3EBut%2C%20the%20real%20impact%20was%20on%20the%20pace%20at%20which%20audiences%20changed.%20Where%20cohorts%20could%20reliably%20be%20expected%20to%20stay%20the%20same%20for%20years%20%28if%20not%20decades%29%2C%20now%20audiences%20began%20to%20evolve%20faster%20and%20faster%2C%20moving%20from%20one%20meme%20to%20another%20and%20from%20one%20identity%20to%20many.%3C%2Fp%3E%3Cp%3EWe%27ve%20gone%20from%20a%20world%20where%20audience%20segments%20were%20made%20up%20of%20hundreds%20of%20thousands%20of%20people%2C%20to%20every%20one%20of%20us%20becoming%20a%20segment%20of%20one.%3C%2Fp%3E%3Cp%3EIn%20the%20mid%20to%20late%20tens%2C%20mobile%20networks%20completely%20upended%20entertainment.%20Since%20they%20first%20launched%2C%20the%20TV%20industry%20hadn%27t%20had%20to%20deal%20with%20the%20kind%20of%20transformation%20that%20arrived%20nearly%20overnight%20%E2%80%94%20after%20all%2C%20appointment%20viewing%20remained%20the%20norm%20even%20if%20a%20plethora%20of%20terrestial%2C%20cable%20and%20satellite%20channels%20competed%20for%20attention%20and%20ad%20dollars.%3C%2Fp%3E%3Cp%3EPiracy%2C%20Youtube%20and%20Netflix%20changed%20audiences%20forever.%20Suddenly%2C%20audiences%20were%20consuming%20the%20content%20they%20wanted%2C%20at%20a%20time%20of%20their%20own%20choosing.%3C%2Fp%3E%3Cp%3EA%20world%20where%20all%20entertainment%20is%20streamed%20is%20inevitable%2C%20but%20to%20me%2C%20the%20biggest%20change%20is%20in%20the%20nature%20of%20content%20itself.%20And%20no-one%20in%20the%20traditional%20industry%20has%20the%20time%2C%20money%20or%20intellectual%20bandwidth%20to%20even%20think%20about%20it%20because%20they%20are%20too%20busy%20trying%20to%20fix%20all%20the%20technical%20and%20engineering%20challenges%20of%20launching%20a%20streaming%20service%20at%20Netflix-scale.%3C%2Fp%3E%3Cp%3EWhich%2C%20very%20neatly%2C%20brings%20me%20to%20the%20present%20%E2%80%94%20where%20we%20have%20spent%20the%20better%20part%20of%202019%20building%20and%20verifying%20an%20engineering%20architecture%20that%20is%20designed%20for%20a%20world%20where%205G%20will%20be%20ubiquitious%2C%20where%204K%20streams%20will%20be%20the%20norm%2C%20and%20where%20appointment%20viewing%20will%20have%20gone%20the%20way%20of%20the%20dodo.%3C%2Fp%3E%3Cp%3ETo%20everybody%20in%20the%2020s%2C%20I%20can%20say%20only%20one%20thing%20%E2%80%94%20grab%20every%20job%20that%20gives%20you%20the%20opportunity%20to%20learn%2C%20and%20say%20yes%20to%20things%20that%20scare%20you.%3C%2Fp%3E%3Cp%3EThe%20universe%20is%20conspiring%20to%20help%20you%20succeed.%3C%2Fp%3E'));
					break;
				case 2:
					$('body.blog-post').find('[data-trigger=fetch-blogs] .one_half').html(decodeURIComponent('%3Cp%3EKhawar%2C%20or%20KB%20as%20he%20insists%20on%20being%20called%2C%20has%20been%20teaching%20people%20how%20to%20become%20Cisco%20Networking%20experts%20for%20thirty-odd%20years.%3C%2Fp%3E%3Cp%3EHere%27s%20a%20pretty%20representative%20review%3A%3C%2Fp%3E%3Cp%3E%3Cblockquote%3E%E2%80%9CTeaching%20Style%20%E2%80%94%20His%20explanations%20are%20EXCELLENT.%20He%20has%20a%20way%20of%20explaining%20the%20%E2%80%9Cwhy%E2%80%9D%20of%20different%20concepts%20in%20a%20way%20that%20makes%20a%20light%20bulb%20go%20off%20over%20your%20heard.%E2%80%9D%20-%3Ca%20class%3D%22link%22%20href%3D%22http%3A%2F%2Fwww.network-node.com%2Fblog%2F2017%2F10%2F6%2Fkhawar-butts-ccie-security-v5-review%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EKatherine%20McNamara%3C%2Fa%3E%3C%2Fblockquote%3E%3C%2Fp%3E%3Cp%3EWhen%20we%20spoke%20to%20him%20the%20first%20time%20earlier%20this%20year%2C%20we%20started%20to%20get%20a%20sense%20of%20the%20real%20tyranny%20of%20aggregation%20platforms%20like%20Youtube%20and%20Udemy.%3C%2Fp%3E%3Cp%3EWe%20learnt%20that%20world-beating%20content%20creators%20like%20KB%20are%20handing%20over%20their%20audiences%2C%20their%20content%20and%20between%20fifty%20and%20seventy%20percent%20of%20their%20revenue%20to%20folks%20who%20provide%20tech%20and%20reach.%3C%2Fp%3E%3Cp%3EIt%27s%20a%20pretty%20good%20set%20up.%3C%2Fp%3E%3Cp%3EFor%20folks%20who%20produce%20content%20that%20needs%20reach%20%28think%20entertainers%20starting%20out%29%2C%20Youtube%2C%20and%20increasingly%20Twitch%2C%20makes%20a%20lot%20of%20sense.%20They%20get%20in%20front%20of%20a%20lot%20of%20people%2C%20become%20popular%2C%20and%20convert%20that%20popularity%20into%20money%20through%20a%20variety%20of%20means%2C%20some%20direct%20%28buy%20my%20t-shirt%29%20and%20other%27s%20less%20direct%20%28buy%20their%20widget%29.%3C%2Fp%3E%3Cp%3EGrown%20adults%20with%20money%20in%20their%20wallets%20are%20clearly%20willing%20to%20pay%20%E2%80%9Chepta-CCIE%20and%20CCDE%E2%80%9D%20KB%20money%20to%20learn.%20He%20doesn%27t%20need%20to%20sell%20t-shirts%20to%20them%20%E2%80%94%20okay%2C%20he%20should%2C%20I%20think%20t-shirts%20with%20bad%20networking%20puns%20on%20them%20are%20a%20great%20idea.%20But%2C%20you%20get%20the%20idea%20%E2%80%94%20he%20doesn%27t%20need%20to%20put%20his%20content%20out%20for%20free.%3C%2Fp%3E%3Cp%3EAs%20we%20continue%20to%20build%20out%20tomorrow%27s%20video-streaming%20infrastructure%20at%20Laminar%2C%20we%20realised%20KB%20was%20perfect%20for%20us%20to%20test%20out%20a%20key%20hypothesis%20%E2%80%94%20are%20people%20willing%20to%20pay%20him%20directly%20for%20online%20classes%2C%20or%20will%20they%20insist%20on%20going%20through%20a%20Udemy%20or%20Coursera%3F%3C%2Fp%3E%3Cp%3EWe%20soft-launched%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fkbits.live%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EKBITS%20Live%3C%2Fa%3Efour%20weeks%20ago%20%28June%202020%2C%20O%27%20traveller%20from%20the%20future%29%2C%20and%20he%27s%20already%20made%20more%20money%20since%20than%20in%20all%20the%20time%20he%27s%20been%20on%20Udemy.%3C%2Fp%3E%3Cp%3EHere%20are%20three%20key%20learnings%3A%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cp%3EThe%20only%20thing%20standing%20in%20the%20way%20of%20a%20creator%20and%20revenue%20is%20the%20up-front%20cost%20of%20setting%20up%20world-class%20tech%2C%20so%20we%20gave%20KB%20our%20infrastructure%20at%20zero-cost.%20And%20we%20plan%20to%20do%20the%20same%20for%20any%20one%20who%20becomes%20our%20client.%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3ECreators%20don%27t%20mind%20sharing%20the%20wealth.%20Our%20simple%20promise%20%E2%80%94%20we%20make%20money%20when%20you%20make%20money%20%E2%80%94%20has%20helped%20both%20trust%20and%20revenue%20grow.%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3EGive%20a%20creator%20a%20platform%20they%20can%20monetize%20any%20which%20way%20they%20like%20and%20a%20little%20bit%20of%20support%20in%20building%20out%20marketing%20automation%2C%20and%20they%20%28and%20their%20existing%20fans%29%20will%20surprise%20you.%3C%2Fp%3E%3C%2Fli%3E%3C%2Fol%3E%3Cp%3EWe%27re%20doubling%20down%20on%20this%3A%20for%20anyone%20who%20wants%20to%20launch%20a%20subscriber%20led%20video%20streaming%20service%20%28at%20any%20scale%29%2C%20we%20give%20you%20everything%20you%20need%20at%20zero%20upfront%20cost%20and%20an%20extraordinarily%20reasonable%20share%20of%20revenue%20OR%20a%20flat%20fee%20per%20paying%20user%20if%20you%27re%20going%20to%20get%20hundreds%20of%20thousands%20of%20subscribers%20%3A%29%3C%2Fp%3E%3Cp%3EFor%20the%20moment%2C%20we%27re%20sitting%20back%20and%20enjoying%20KB%27s%20success%20making%20light%20bulbs%20go%20off%20over%20people%27s%20heads.%3C%2Fp%3E'));
					break;
				case 3:
					$('body.blog-post').find('[data-trigger=fetch-blogs] .one_half').html(decodeURIComponent('%3Cp%3EThe%20TV%20spot%2C%20the%20interstitial%20ad%2C%20the%20point-of-sale%20dangler%2C%20and%20their%20extended%20family%20are%20all%20heading%20towards%20history%27s%20dustbin%2C%20as%20interesting%20and%20nostalgic%20as%20rotary%20dial%20telephones%2C%20typewriters%2C%20and%201960s%20Jags.%3C%2Fp%3E%3Cp%3ENot%20because%20they%20aren%27t%20good%20%E2%80%94%20I%20would%20argue%20TV%20spots%20today%20are%20better%20than%20ever%20before.%20And%20digital%20ads%20are%20often%20brilliant.%20In-store%2Fpoint-of-sale%20advertising%20is%20going%20to%20be%20transformed%20by%20modern%20tech%20%28especially%20AR%2FMR%29%20in%20ways%20which%20I%20will%20not%20even%20try%20to%20predict.%3C%2Fp%3E%3Cp%3EAnd%20they%20still%20work%20%E2%80%94%20TV%20reaches%2090%25%20plus%20populations%20every%20month%20in%20most%20countries.%20And%20in%20growth-markets%2C%20with%20less%20sophisticated%20audiences%2C%20ad-viewing%20is%20normal%2C%20and%20belief%20in%20ads%20is%20often%20much%20higher%20than%20amongst%20more%20sophisticated%20audiences%20%28Medium%20readers%20and%20Netflix%20viewing%20cable-cutters%29.%3C%2Fp%3E%3Cp%3EThe%20problem%20is%20that%20the%20formats%20that%20have%20become%20the%20bread%20and%20butter%20of%20the%20advertising%20industry%20%E2%80%94%20their%20means%20to%20make%20money%E2%80%94will%20not%20survive%20the%20next%20ten%20years%20because%20of%20three%20clearly-visible%20trends%3A%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cp%3E%3Cb%3ETribalism%20based%20on%20identity%20will%20continue%20to%20increase%20in%20the%20near%20term.%3C%2Fb%3EThis%20means%20who%27s%20delivering%20the%20message%20will%20continue%20to%20become%20more%20important%20than%20what%20the%20message%20is.%20The%20%E2%80%9Cinfluencer%E2%80%9D%20of%20today%E2%80%94often%20dismissed%20as%20narcissistic%20and%20even%20vapid%E2%80%94is%20about%20to%20eat%20the%20lunch%20of%20every%20model%20in%20town.%20While%20agencies%20continue%20to%20serve%20as%20a%20bridge%20between%20many%20brands%20and%20influencers%20%E2%80%94%20they%20will%20be%20disinter-mediated%20because%20a%20creative-director%20isn%27t%20needed%20to%20match-make%20between%20a%20brand%20and%20an%20influencer.%20And%20don%27t%20be%20surprised%20if%20you%20see%20an%20%E2%80%9CInfluencer-Director%E2%80%9D%20in%20the%20team%20structure%20the%20next%20time%20an%20agency%20comes%20to%20pitch%20to%20you.%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3E%3Cb%3ERegulation%20will%20kill%20the%20effectiveness%20of%20programatic%20ad-buying.%3C%2Fb%3EThe%20GDPR%20is%20only%20the%20first%20sign%20of%20how%20governments%20across%20the%20world%20will%20reign%20in%20the%20willy-nilly%20gathering%20and%20sharing%20of%20personal%20data%20amongst%20media%20companies%20%28who%20call%20themselves%20digital%20platforms%29.%20Programatic%20engines%20rely%20on%20this%20data%20to%20sell%20cost-per-click%2Fconversion%20advertising%20models%20to%20brands.%20This%20will%20be%20matched%20by%20in-browser%2Fon-mobile%20technology%20and%20user%20decisions%20that%20will%20prevent%20tracking%20and%20recording%20of%20personal%20information%20%28identifiable%20or%20not%29.%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3E%3Cb%3EPublishers%20that%20rely%20on%20advertising%20as%20their%20sole%20source%20of%20revenue%20will%20atrophy%2C%20or%20add%20other%20revenue%20models.%3C%2Fb%3EClick-bait%20headlines%2C%20branded%20content%2C%20and%20every%20other%20abuse%20of%20the%20public%20trust%20by%20publishers%20are%20here%20to%20stay%2C%20but%20will%20continue%20to%20lose%20credibility%20and%2C%20more%20importantly%2C%20traction%20amongst%20the%20high-value%20audiences%20brands%20covet.%3C%2Fp%3E%3C%2Fli%3E%3C%2Fol%3E%3Cp%3EThese%20three%20trends%20will%20continue%20to%20drive%20down%20the%20value%20that%20advertising%20agencies%20provide%20%E2%80%94%20and%20there%27s%20very%20little%20the%20industry%20can%20do%20now.%3C%2Fp%3E%3Cp%3EAs%20a%20sector%20matures%2C%20businesses%20tend%20to%20consolidate%20%E2%80%94%20some%20become%20larger%20by%20buying%20out%20others%E2%80%94till%20you%20have%20a%20few%20left%20who%20compete%20against%20each%20other%20for%20the%20largest%20portion%20of%20the%20pie%2C%20while%20young%20upstarts%20with%20great%20ideas%20keep%20popping%20up%20and%20getting%20bought%20out.%3C%2Fp%3E%3Cp%3EWhen%20a%20sector%20starts%20to%20shrink%2C%20companies%20consolidate%20%E2%80%94%20collapsing%20internal%20barriers%2C%20breaking%20silos%2C%20and%20do%20everything%20else%20they%20can%20to%20extract%20efficiencies%20and%20unlock%20value.%3C%2Fp%3E%3Cp%3EFamously%2C%20when%20Steve%20Jobs%20returned%20to%20Apple%2C%20he%20got%20rid%20of%20multiple%20products%20and%20simplified%20everything%2C%20making%20it%20easier%20to%20figure%20out%20what%20value%20Apple%20offered%20to%20consumers.%20But%20the%20real%20turn-around%20started%20when%20Jobs%20introduced%20the%20iPod.%20A%20new%20product.%20Not%20a%20variation%2C%20or%20an%20amalgam%2C%20but%20something%20entirely%20new.%3C%2Fp%3E%3Cp%3EThe%20advertising%20industry%20has%20nothing%20new%20to%20offer.%20It%20will%20die.%3C%2Fp%3E%3Cp%3EI%20will%20miss%20it.%20And%20look%20forward%20to%20what%20emerges%20from%20the%20ashes.%3C%2Fp%3E'));
					break;
				case 4:
					$('body.blog-post').find('[data-trigger=fetch-blogs] .one_half').html(decodeURIComponent('%3Cp%3E%3Cb%3ENo%20Logo%3C%2Fb%3E%3Cbr%3E%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DclXnQ3eIMCY%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3ENaomi%20Klein%3C%2Fa%3E%3C%2Fp%3E%3Cp%3E%3Cb%3EThe%20Ascent%20of%20Money%3C%2Fb%3E%3Cbr%3E%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DfsrtB5lp60s%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3ENiall%20Ferguson%3C%2Fa%3E%3C%2Fp%3E%3Cp%3E%3Cb%3EAntifragile%3C%2Fb%3E%3Cbr%3E%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBaU7Sxk6Yk4%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3ENicholas%20Nassem%20Taleb%3C%2Fa%3E%3C%2Fp%3E%3Cp%3E%3Cb%3EScarcity%3A%20Why%20Having%20Too%20Little%20Means%20So%20Much%3C%2Fb%3E%3Cbr%3E%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D29yi-5226rs%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EEldar%20Shafir%20and%20Sendhil%20Mullainathan%3C%2Fa%3E%3C%2Fp%3E%3Cp%3E%3Cb%3EThe%20Third%20Industrial%20Revolution%3A%20A%20Radical%20New%20Sharing%20Economy%3C%2Fb%3E%3Cbr%3E%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQX3M8Ka9vUA%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EJeremy%20Rifkin%3C%2Fa%3E%3C%2Fp%3E%3Cp%3E%3Cb%3EPrediction%20Machines%3A%20The%20Simple%20Economics%20of%20Artificial%20Intelligence%3C%2Fb%3E%3Cbr%3E%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DByvPp5xGL1I%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EAjay%20Agrawal%2C%20Avi%20Goldfarb%2C%20and%20Joshua%20Gans%3C%2Fa%3E%3C%2Fp%3E%3Cp%3E%3Cb%3EThe%20Innovator%27s%20Dilemma%3C%2Fb%3E%3Cbr%3E%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZn6-KksdOgE%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EClayton%20M.%20Christensen%3C%2Fa%3E%3C%2Fp%3E'));
					break;
				case 5:
					$('body.blog-post').find('[data-trigger=fetch-blogs] .one_half').html(decodeURIComponent('%3Cp%3EIn%20their%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Finvestors.vimeo.com%2Fstatic-files%2Fba66963d-8182-4e29-aa18-41c4e8265022%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3Eannual%20letter%20to%20shareholders%3C%2Fa%3E%2C%20here%27s%20what%20Vimeo%20had%20to%20say%3A%3C%2Fp%3E%3Cblockquote%3EWe%20are%20a%20B2B%20solution%2C%20not%20the%20indie%20version%20of%20YouTube.%20We%20are%20both%20an%20established%20free%20video%20platform%20and%20an%20emerging%20enterprise%20software%20leader.%20But%20our%20customers%20don%27t%20care%20about%20how%20we%20define%20ourselves%3B%20they%20care%20about%20what%20Vimeo%20does%20for%20them.%3C%2Fblockquote%3E%3Cp%3EThey%27ve%20already%20caused%20a%20bit%20of%20a%20kerfuffle%20by%20telling%20about%201%25%20of%20their%20customers%20that%20they%20will%20be%20charged%20time%20times%20more.%20So%20they%27ve%20basically%20told%20their%20most%20valuable%20customers%20to%20cough%20up%20more%2C%20or%20else.%3C%2Fp%3E%3Cp%3EI%20do%20agree%20with%20one%20thing%20they%27ve%20said%20%E2%80%94%20%E2%80%9Cour%20customers%20don%27t%20care%20about%20how%20we%20define%20ourselves%3B%20they%20care%20about%20what%20Vimeo%20does%20for%20them.%E2%80%9D%3C%2Fp%3E%3Cp%3ESo%2C%20let%27s%20talk%20about%20what%20a%20serious%20media%20player%20should%20expect%20from%20an%20enterprise%20software%20offering%20%28like%20ours%29%3A%3C%2Fp%3E%3Col%3E%3Cli%3E%3Cp%3EA%20seamless%20video%20experience%20and%20apps%20across%20all%20classes%20of%20devices%20%E2%80%94%20and%20I%20don%27t%20mean%20all%20types%20of%20mobile%20phones.%20Video%20is%20watched%20on%20TVs%2C%20and%20the%20TV%20ecosystem%20is%20massively%20fragmented.%20We%20aren%27t%20just%20talking%20iOS%20vs%20Android.%20There%20are%20the%20giants%2C%20Samsung%20and%20LG%2C%20and%20then%20the%20giants%20no%20one%20has%20heard%20of%20%E2%80%94%20Vewd%2C%20Vida%20Hisense%2C%20Foxxum%20and%20others%20who%20provide%20the%20software%20platforms%20that%20TV%20manufacturers%20around%20the%20world%20use%20%28instead%20of%20Android%29.%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3EThe%20ability%20to%20serve%20different%20stream%20qualities%20and%20charge%20people%20differently%20%E2%80%94%20charge%20less%20for%20an%20SD%20subscription%2C%20and%20more%20for%204K.%20This%20is%20more%20important%20that%20you%20would%20think%20simply%20because%20purchase%20power%20isn%27t%20just%20an%20economic%20statistic%2C%20it%27s%20a%20reality%20%E2%80%94%20and%20that%20means%20every%20media%20company%20needs%20to%20be%20able%20to%20charge%20people%20in%20one%20country%20differently%20than%20people%20in%20another.%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3EContent%20licenses%20are%20real%20too.%20How%20about%20having%20the%20ability%20to%20decide%20what%20content%20is%20available%20in%20what%20region%2C%20so%20media%20companies%20can%20monetise%20their%20content%20directly%20in%20countries%20where%20local%20providers%20aren%27t%20willing%20to%20pay%20a%20premium%20for%20a%20content%20license.%3C%2Fp%3E%3C%2Fli%3E%3Cli%3E%3Cp%3EAnd%20don%27t%20get%20me%20started%20on%20supporting%20multiple%20payment%20gateways%20%28for%20the%20same%20plan%29%2C%20managing%20stream%20concurrency%20%28so%20even%20sharing%20passwords%20doesn%27t%20mean%20100%20people%20are%20watching%20content%20that%20one%20person%20is%20paying%20for%29%2C%20and%20managing%20%28and%20paying%29%20global%20taxes.%3C%2Fp%3E%3C%2Fli%3E%3C%2Fol%3E%3Cp%3EThe%20way%20I%20see%20it%2C%20Vimeo%20doesn%27t%20work%20for%20large%20media%20companies%20with%20outsized%20ambition.%20And%20Vimeo%20doesn%27t%20work%20for%20small%20creators.%20So%20who%20does%20Vimeo%20work%20for%3F%3C%2Fp%3E%3Cp%3EAt%20Laminar%2C%20we%20aren%27t%20trying%20to%20be%20all%20things%20for%20all%20people.%20We%20are%20an%20enterprise%20solution%20for%20media%20companies.%20If%20you%20have%20a%20large%20library%2C%20and%20can%20grow%20to%20a%20100%2C000%20or%20more%20subscribers%20with%20the%20potential%20to%20grow%20to%20millions%20of%20users%2C%20then%20we%20are%20perfect%20for%20you.%3C%2Fp%3E%3Cp%3EIf%20you%27d%20like%20to%20know%20more%20about%20how%20Laminar%20can%20help%20you%20launch%20an%20OTT%20in%2012%20weeks%20at%20zero%20up-front%20cost%20and%20without%20hiring%20a%20single%20engineer%20%28ever%29%2C%20talk%20to%20us.%3C%2Fp%3E'));
					break;
				case 6:
					$('body.blog-post').find('[data-trigger=fetch-blogs] .one_half').html(decodeURIComponent('%3Cp%3EWe%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.moneycontrol.com%2Fnews%2Fbusiness%2Fstartup%2Flaminar-bags-5-1-million-funding-to-help-media-firms-build-streaming-services-8561401.html%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3Ejust%20raised%20a%20little%20over%20%245%20million%3C%2Fa%3Ein%20seed%20funding%20from%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fleo.capital%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3ELeo%20Capital%3C%2Fa%3E%2C%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fartha.ventures%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EArtha%20India%20Ventures%3C%2Fa%3E%2C%3Ca%20class%3D%22link%22%20href%3D%22http%3A%2F%2Fgaruda.vc%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EGaruda%20Ventures%3C%2Fa%3E%2C%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.cloudcap.in%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3ECloudcap%3C%2Fa%3Eand%20Sampson%20Acquisitions%2C%20Inc.%20I%20want%20to%20start%20by%20thanking%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.linkedin.com%2Fin%2Frajulgarg%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3ERajul%3C%2Fa%3E%2C%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdinesh-k-singh%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EDinesh%3C%2Fa%3Eand%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshwetankv%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EShwetank%3C%2Fa%3Eat%20Leo%3B%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshowmedamani%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EAnirudh%3C%2Fa%3Eand%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.linkedin.com%2Fin%2Faparnapittie%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EAparna%3C%2Fa%3Eat%20Artha%3B%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.linkedin.com%2Fin%2Farpanpunyani%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EArpan%3C%2Fa%3Eand%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.linkedin.com%2Fin%2Frktaparia%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3ERishi%3C%2Fa%3Eat%20Garuda%3B%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.linkedin.com%2Fin%2Fkashisharma%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EKashish%3C%2Fa%3Eand%20Manj%20at%20Cloudcap%3B%20and%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.linkedin.com%2Fin%2Frodneysampson%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3ERodney%3C%2Fa%3Eat%20Sampson%20Acquisitions%2C%20Inc%20for%20believing%20in%20us%2C%20betting%20on%20us%2C%20and%20partnering%20us%20in%20the%20best%20way%20possible.%3C%2Fp%3E%3Cp%3EIn%202019%2C%20Laminar%20%E2%80%94%20the%20company%20I%20co-founded%20with%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshorav%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EKumar%20Shorav%3C%2Fa%3E%2C%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.linkedin.com%2Fin%2Fraheelkhursheed%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3ERaheel%20Khursheed%3C%2Fa%3E%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.linkedin.com%2Fin%2Ftirthrajnsingh%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3ETirthraj%20Singh%3C%2Fa%3E%2C%20and%20Yin%20Shanyang%20in%202019%20%E2%80%94%20set%20out%20to%20create%20the%20tech%20infrastructure%20every%20media%20company%20would%20need%2C%20sooner%20or%20later.%20This%20bet%20seemed%20like%20a%20sure%20thing%20%E2%80%94%20it%20was%20based%20on%20our%20experience%20and%20understanding%20on%20how%20the%20media%20makes%20money.%3C%2Fp%3E%3Cp%3EHere%27s%20the%20three%20step%20process%20that%20media%20companies%20you%20know%20and%20love%20use%20to%20make%20money%20%E2%80%94%20they%20create%20%28or%20buy%29%20content%2C%20they%20distribute%20that%20content%2C%20they%20get%20paid.%3C%2Fp%3E%3Cp%3EThe%20old%20model%20had%20two%20big%20players%20%E2%80%94%20the%20content%20creators%20%28think%20Disney%20or%20Paramount%29%20and%20the%20distributors%20%28think%20Sky%29.%20The%20content%20creators%20built%20relationships%20with%20their%20distributors%20who%20paid%20them%20%28sometimes%20a%20lot%29.%20The%20distributors%20went%20out%20and%20found%20subscribers%20and%20viewers%20and%20sold%20ads%20and%20did%20everything%20else%20in%20between%20%28set%20top%20box%20installations%2C%20anyone%3F%29.%3C%2Fp%3E%3Cp%3EThe%20key%20to%20making%20money%2C%20as%20you%20may%20have%20guessed%2C%20lies%20in%20distribution.%3C%2Fp%3E%3Cp%3EYou%20might%20think%20I%27m%20going%20to%20talk%20transformational%20tech%20here%2C%20but%20I%27m%20not%20%28well%2C%20I%20will%2C%20but%20not%20yet%29.%20Let%20me%20talk%20about%20Netflix%20for%20a%20moment.%3C%2Fp%3E%3Cp%3EHere%27s%20a%20short%20excerpt%20from%20a%20great%20article%20in%20Wired%20by%20Jeffrey%20M.%20O%27Brien%20from%20Dec%201%2C%202002%20%E2%80%94%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fwww.wired.com%2F2002%2F12%2Fnetflix-6%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EThe%20Netflix%20Effect%3C%2Fa%3E.%3C%2Fp%3E%3Cblockquote%3EWhile%20other%20video-on-demand%20companies%20build%20businesses%20around%20broadband%2C%20Netflix%20is%20taking%20a%20half-step%20toward%20the%20digital%20future%20with%20mass-produced%20DVDs%20%28%241%20each%29%20and%20an%20old-fashioned%20delivery%20mechanism%3A%20the%20US%20mail.%20The%20company%20has%20less%20than%202%20percent%20of%20the%20%248%20billion%20video%20rental%20market%2C%20but%20it%20doubled%20its%20customer%20base%20to%20750%2C000%20this%20year%2C%20and%20Hastings%20projects%20a%20million%20customers%2C%20and%20profitability%2C%20in%202003.%20Since%20subscribers%20pay%20up%20front%2C%20Netflix%20also%20has%20the%20steadiest%20revenue%20stream%20the%20industry%20has%20ever%20seen.%3Cbr%3ENetflix%20offers%20a%20low%20tech%20video-on-demand%20alternative%20%28to%20video%20store%20rentals%29.%20Jon%20and%20Alys%20subscribe%20to%20a%20%2419.95%20plan%20that%20allows%20them%20to%20rent%20as%20many%20movies%20as%20they%20want%20in%20a%20month%2C%20but%20no%20more%20than%20three%20at%20a%20time.%20After%20they%20watch%20a%20film%20and%20return%20it%20in%20a%20postage-paid%20envelope%2C%20the%20company%20mails%20them%20the%20next%20DVD%20from%20a%20list%20the%20couple%20maintain%20on%20their%20Netflix%20Web%20page%2C%20which%20offers%20recommendations%20based%20on%20their%20rental%20history.%20%28Liked%20The%20Royal%20Tenenbaums%3F%20Try%20Ghost%20World.%29%20If%20Netflix%20is%20out%20of%20Kissing%20Jessica%20Stein%2C%20Jon%20and%20Alys%20just%20receive%20the%20next%20movie%20on%20the%20list.%20On%20Friday%2C%20they%20have%20Donnie%20Darko%2C%20Pi%C3%B1ero%2C%20and%20In%20the%20Bedroom%20on%20top%20of%20their%20DVD%20player.%20They%20love%20Donnie%20Darko%2C%20mail%20it%20back%20on%20Saturday%2C%20and%20by%20Tuesday%2C%20Y%20Tu%20Mam%C3%A1%20Tambi%C3%A9n%20arrives.%20It%27s%20so%20convenient%20that%20the%20average%20Netflix%20customer%20watches%20five%20movies%20a%20month.%20Some%20subscribers%20rent%20twenty%20or%20more.%20%28Which%20is%20a%20problem%3A%20Netflix%20loses%20money%20on%20postage%20for%20households%20that%20rent%20more%20than%20five%20a%20month.%29%3C%2Fblockquote%3E%3Cp%3ELong%20before%20Netflix%20and%20chill%20was%20a%20thing%2C%20they%20cracked%20DVD%20distribution.%20The%20chosen%20method%20for%20customers%20to%20watch%20what%20they%20wanted%2C%20when%20they%20wanted%2C%20were%20DVD%20players.%20The%20biggest%20distributors%20of%20DVDs%20back%20then%20%E2%80%94%20Blockbuster%20and%20Walmart.%20Netflix%20came%20along%20and%20up-ended%20the%20game%2C%20quickly%20establishing%20themselves%20as%20the%20people%20who%20distributed%20DVDs%20the%20best%20AND%20treated%20their%20customers%20the%20best.%3C%2Fp%3E%3Cblockquote%3E%E2%80%9CThe%20dream%2020%20years%20from%20now%2C%E2%80%9D%20Hastings%20says%2C%20%E2%80%9Cis%20to%20have%20a%20global%20entertainment%20distribution%20company%20that%20provides%20a%20unique%20channel%20for%20film%20producers%20and%20studios.%E2%80%9D%3C%2Fblockquote%3E%3Cp%3EThat%20dream%20has%20come%20true%20%E2%80%94%20but%20differently%20than%20Hastings%20imagined.%20Netflix%20has%20gone%20from%20being%20the%20only%20streaming%20distributor%20%28worth%20talking%20about%29%20to%20being%20a%20direct-to-consumer%20content%20company.%3C%2Fp%3E%3Cp%3EAnd%20in%20doing%20so%2C%20they%20have%20forced%20the%20entire%20global%20media%20industry%20to%20a%20new%20equilibrium%20that%20is%20still%20in%20the%20making.%3C%2Fp%3E%3Cp%3EWhich%20is%20where%20we%20come%20in.%3C%2Fp%3E%3Cp%3EI%20will%20let%20our%20lead%20investor%20Leo%20Capital%20founding%20partner%20Rajul%20Garg%27s%20insightful%20comment%20do%20the%20talking%3A%20%E2%80%9CMedia%20companies%20can%20see%20content%20consumption%20rapidly%20shifting%20away%20from%20cable%2C%20satellite%20and%20DTH%20around%20the%20world.%20Laminar%20has%20timed%20this%20industry%20transition%20beautifully%20with%20a%20product%20that%20is%20ready%20today%20for%20media%20companies%20who%20don%27t%20want%20to%20spend%20time%20and%20money%20re-inventing%20the%20wheel%20and%20we%20are%20excited%20to%20partner%20them%20to%20help%20create%20the%20next%20global%20leader%20in%20the%20media-tech%20space.%E2%80%9D%3C%2Fp%3E%3Cp%3EOur%20thesis%20is%20simple%20%E2%80%94%20it%27s%20really%20hard%20for%20media%20companies%20to%20become%20engineering%20companies.%20They%20haven%27t%20had%20to%20for%20other%20modes%20of%20distribution%2C%20they%20shouldn%27t%20have%20to%20now.%20We%27ve%20built%20a%20cloud-based%2C%20fully-managed%20PaaS%20that%20enables%20content%20owners%20to%20launch%20a%20full%20featured%2C%20massively%20scalable%2C%20OTT%20service.%20It%20is%20transformational%20tech%20because%20importantly%2C%20they%20can%20focus%20on%20what%20they%20do%20best%20%E2%80%94%20create%20content%20and%20win%20audiences.%3C%2Fp%3E%3Cp%3E%3Cb%3EWe%20offer%20speed%3C%2Fb%3E%E2%80%94%20content%20owners%20can%20launch%20a%20global%20OTT%20service%20in%2012-weeks%20or%20less.%3C%2Fp%3E%3Cp%3E%3Cb%3EWe%20offer%20completeness%3C%2Fb%3E%E2%80%94%20companies%20get%20the%20ability%20to%20customise%20and%20launch%20apps%20across%20all%20classes%20of%20devices%2C%20set%20up%20multiple%20types%20of%20monetisation%20options%2C%20meet%20all%20tax%20and%20compliance%20requirements%2C%20and%20get%20a%20complete%20data%20and%20analytics%20suite%20%E2%80%94%20all%20out%20of%20the%20box.%3C%2Fp%3E%3Cp%3E%3Cb%3EWe%20offer%20a%20price%20advantage%3C%2Fb%3E%E2%80%94%20with%20a%20zero-capex%2C%20pure-opex%20model%2C%20media%20companies%20can%20spend%20their%20dollars%20on%20what%20their%20customers%20really%20want%20%E2%80%94%20content.%3C%2Fp%3E%3Cp%3E%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fchaupal.tv%2F%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3EChaupal%3C%2Fa%3E%2C%20a%20global%20streaming%20app%20targeting%20200%20million%20Punjabi%20and%20Bhojpuri%20speakers%20around%20the%20world%2C%20chose%20to%20launch%20using%20Laminar%27s%20PaaS.%20In%2012%20weeks%20they%20launched%20in%20110%20countries%2C%20with%20country%20specific%20plans%2C%20content%20and%20UI%20across%20all%20classes%20of%20mobile%20phones%2C%20TVs%20and%20other%20streaming%20devices.%3C%2Fp%3E%3Cp%3EAccording%20to%20Chaupal%20founder%20and%20MD%3Ca%20class%3D%22link%22%20href%3D%22https%3A%2F%2Fmedium.com%2F%40chaupaltv%22%20target%3D%22_blank%22%20rel%3D%22noreferrer%22%3ESandeep%20Bansal%3C%2Fa%3E%2C%20Laminar%20has%20enabled%20both%20his%20vision%20and%20his%20ambition%20by%20allowing%20the%20Chaupal%20organisation%20to%20focus%20on%20what%20they%20do%20best%20%E2%80%94%20creating%20amazing%20content%20and%20delight%20audiences%3A%3C%2Fp%3E%3Cblockquote%3E%E2%80%9CLaminar%20has%20been%20a%20game-changer%20for%20us.%20We%20were%20able%20to%20focus%20time%2C%20money%20and%20attention%20on%20what%20we%20know%20best.%20Their%20business%20model%20is%20the%20best%20thing%20about%20them%20%E2%80%94%20ensuring%20we%20win%20together%2C%20always.%E2%80%9D%3C%2Fblockquote%3E%3Cp%3EWe%20have%20already%20won%20customers%20in%20the%20US%2C%20South%20Asia%20and%20South-East%20Asia.%20And%20we%20are%20just%20getting%20started.%3C%2Fp%3E%3Cp%3EOur%20grand%20ambition%20is%20to%20power%20the%20Direct-to-Consumer%20media%20%28r%29evolution.%3C%2Fp%3E%3Cp%3ETalk%20to%20us%20if%20you%20are%20a%20content%20owner%20with%20grand%20ambitions.%3C%2Fp%3E'));
					break;
				default:
					$('body.blog-post').find('[data-trigger=fetch-blogs] .one_half').html('');
			}

		}

	}

/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

	function PageLoad() {
		
		gsap.set($(".menu-timeline .before-span"), {y: 120, opacity:0});
		
		// Page Navigation Events
		$(".preloader-wrap").on('mouseenter', function() {	
			var $this = $(this);			
			gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});
			gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
			$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
		});
							
		$(".preloader-wrap").on('mouseleave', function() {					
			gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
			gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
			$('#ball p').remove();				
		});		
		
		$('body').removeClass('hidden').removeClass('hidden-ball');
		
		gsap.to($("#header-container"), {duration: 0.5, opacity:1, delay:0.2, ease:Power2.easeOut}); 
		
		
		function initOnFirstLoad() {
		
			$('body').waitForImages({
				finished: function() {
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$('#ball p').remove();
					gsap.to($(".percentage-intro, .percentage"), {duration: 0.3, opacity:0, y:-10, delay:0, ease:Power2.easeInOut});
					gsap.to($(".preloader-intro"), {duration: 0.7, fopacity:1, y:-400, delay:0.2, ease:Power2.easeInOut});						
					gsap.to($(".preloader-wrap"), {duration: 0.7, yPercent: -101, delay:0.7, ease:Power2.easeInOut});
					gsap.set($(".preloader-wrap"), {visibility:'hidden', delay:1.7, opacity:0});					
					setTimeout(function(){
						$('body').waitForImages({
							finished: function() {
								gsap.to($(".header-middle, #footer-container, .showcase-counter, .swiper-pagination-bullet-active .counter"), {duration: 1, opacity:1, delay:0, ease:Power2.easeOut}); 										
							},
							waitForAll: true
						});
						
						if( $('.hero-video-wrapper').length > 0 ){
							$('#hero-image-wrapper').find('video').each(function() {
								$(this).get(0).play();
							}); 
						}
						
						gsap.to($("#main"), {duration: 0, opacity:1, delay:0, ease:Power2.easeOut});//modified time
						if( $('#hero').hasClass("has-image")) {								
							gsap.set($("#hero-bg-image"), {scale:1.1 , opacity:0});
							gsap.to($("#hero-bg-image"), {duration: 1, force3D:true, scale:1 , opacity:1, delay:0.2, ease:Power2.easeOut});							
							gsap.to($(".hero-arrow"), {duration: 0.5, force3D:true, y:-60, opacity:1, delay:0.6, ease:Power2.easeOut});
							gsap.set($("#hero .hero-subtitle span"), {y: 60, opacity:0});					
							gsap.to($("#hero .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0.6, ease:Power3.easeOut});
							gsap.to($("#hero-caption .hero-title span"), {y: 120, opacity:0});					
							gsap.to($("#hero-caption .hero-title span"), {duration: 1, y: 0, opacity:1, stagger:0.1, delay:0.7, ease:Power3.easeOut});
							gsap.to($(".hero-footer-right"), {duration: 1, force3D:true, y:0, opacity:1, rotation:0, delay:0.8, ease:Power2.easeOut});																				
							gsap.to($("#main-page-content, #page-nav"), {duration: 0.4, opacity:1, delay:1.15, ease:Power2.easeOut});
						} else {
							gsap.to($(".hero-arrow"), {duration: 0.5, force3D:true, y:-60, opacity:1, delay:0.5, ease:Power2.easeOut});							
							gsap.set($("#hero .hero-subtitle span"), {y: 60, opacity:0});					
							gsap.to($("#hero .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0.5, ease:Power3.easeOut});			
							gsap.to($("#hero-caption .hero-title span"), {y: 120, opacity:0});					
							gsap.to($("#hero-caption .hero-title span"), {duration: 1, y: 0, opacity:1, stagger:0.1, delay:0.6, ease:Power3.easeOut});
							gsap.to($(".hero-footer-right"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:0.8, ease:Power2.easeOut});									
							gsap.to($("#main-page-content, #page-nav"), {duration: 0.7, opacity:1, delay:1.1, ease:Power2.easeOut});
							gsap.to($(".error-button"), {duration: 0.4, y: 0, opacity:1, rotation:0, delay:1, ease:Power2.easeOut});				
						}	
						
						
						// Fading In Showcase Slider elements on Finised
						if( !$('#canvas-slider').hasClass("active")) {	
							gsap.set($('#canvas-slider'), {opacity:1, scale:1.1});
							gsap.to($('#canvas-slider'), {duration: 0.7, opacity:1, scale:1, delay:0.2, ease:Power2.easeOut});
						}
						gsap.set($("#showcase-slider-holder"), {opacity:0});															
						gsap.to($("#showcase-slider-holder"), {duration: 0.7, opacity:1, delay:0.3, ease:Power2.easeOut});
						gsap.to($(".showcase-pagination"), {duration: 0.3, opacity:1, delay:0.1, ease:Power2.easeOut});
						gsap.to($(".swiper-pagination-bullet-active").find('.translate-element span'), {duration: 0.5, y:0, opacity:1, delay:0.4, stagger: 0.05, ease:Power2.easeOut});				
						
						
						// Fading In Showcase Carousel elements on Finised
						gsap.set($("#showcase-carousel-holder"), {opacity:0});
						gsap.to($("#showcase-carousel-holder"), {duration: 0.7, opacity:1, delay:0.8, ease:Power2.easeOut});
						var slideWidth = $("#showcase-carousel-holder .swiper-slide").width()*0.5;
						gsap.set($("#showcase-carousel-holder .swiper-slide-active").prev().prev(), {x:-slideWidth, opacity:0});
						gsap.set($("#showcase-carousel-holder .swiper-slide-active").next().next(), {x:slideWidth, opacity:0});
						gsap.set($("#showcase-carousel-holder .swiper-slide-active").prev(), {x:-slideWidth, opacity:0});
						gsap.set($("#showcase-carousel-holder .swiper-slide-active").next(), {x:slideWidth, opacity:0});								
						gsap.to($("#showcase-carousel-holder .swiper-slide-active").prev().prev(), {duration: 0.7, x:0, delay:0.9, opacity:1, ease:Power2.easeOut});
						gsap.to($("#showcase-carousel-holder .swiper-slide-active").next().next(), {duration: 0.7, x:0, delay:0.9, opacity:1, ease:Power2.easeOut});
						gsap.to($("#showcase-carousel-holder .swiper-slide-active").prev(), {duration: 0.7, x:0, scale:1, delay:0.7, opacity:1, ease:Power2.easeOut});
						gsap.to($("#showcase-carousel-holder .swiper-slide-active").next(), {duration: 0.7, x:0, scale:1, delay:0.7, opacity:1, ease:Power2.easeOut});
						
						
						
						gsap.set($(".swiper-prev, .swiper-next, .swiper-pagination-bullet"), {opacity:0});	
						gsap.to($(".swiper-prev, .swiper-next, .swiper-pagination-bullet"), {duration: 0.3, y:0, opacity:1, rotation:0, delay:0.3, ease:Power2.easeOut});
						
						setTimeout( function(){	
							$('#showcase-slider-holder, #showcase-carousel-holder, .showcase-list-holder').addClass("loaded");
						} , 1500 );
						var tlSmallTitles = gsap.timeline();					
						$(".slide-small-title span").each(function(index, element) {
							tlSmallTitles.to(element, {duration: 0.5, force3D:true, y:0, opacity:1, delay:1, ease:Power2.easeOut}, index * 0.05)
						});
						
						
						
						var SlideListTitle = gsap.timeline();					
						$(".sl-title span, .split-title span").each(function(index, element) {
							SlideListTitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.5, ease:Power2.easeOut}, index * 0.05)
						});
						
						var SlideListSubtitle = gsap.timeline();					
						$(".sl-subtitle span, .split-subtitle span").each(function(index, element) {
							SlideListSubtitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.6, ease:Power2.easeOut}, index * 0.05)
						});
							
						setTimeout( function(){
							$('.slide-list').addClass('show-borders')
						} ,300 );
							
						setTimeout( function(){	
							$('body').removeClass("load-project-page").removeClass("load-project-page-carousel");
						} , 600 );
						
						setTimeout( function(){	
							$('body').removeClass("load-next-project");
							$('body').addClass("header-visible");
							$('#showcase-holder').removeClass("disabled");
						} , 1600 );
						
						setTimeout( function(){	
							$('body').removeClass("show-loader")
						} , 800 );	
						
					} , 600 );
				},
			waitForAll: true
		});
				
		}
		
		
		if (!$('body').hasClass("disable-ajaxload")) {
			
			
			
			var swapOpts = {
				slides: document.querySelectorAll('.preloader-list'),
				list: document.querySelector('.preloader-intro'),
				duration: 0,
				lineHeight: $('.preloader-intro').height()
			}
			
			var swapSlide = gsap.timeline({
				paused: true,
				repeat: -1
			});
			
			swapOpts.slides.forEach(function(slide, i) {
				// Create a label
				let label = "slide" + i;
				swapSlide.add(label);
				
				// Move the whole word
				if(i > 0) {
					swapSlide.to(swapOpts.slides, {
					  duration: swapOpts.duration,
					  y: i * -1 * swapOpts.lineHeight,
					}, label);
					
					// Add some blank space before the next animation
					swapSlide.to({}, {duration: 0.15});
				}
			})
			swapSlide.play();
			
			
			var width = 0,
				perfData = window.performance.timing, 
				EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
				time = ((EstimatedTime/100)%500) * 10
				
			// Loadbar Animation
			$(".loadbar").animate({
				width: width + "%"
			}, time  );	
			
			// Percentage Increment Animation
			var PercentageID = $("#precent"),
					start = 0,
					end = 100,
					durataion = time + 0;
					animateValue(PercentageID, start, end, durataion);
					
			function animateValue(id, start, end, duration) {
			  
				var range = end - start,
				  current = start,
				  increment = end > start? 1 : -1,
				  stepTime = Math.abs(Math.floor(duration / range)),
				  obj = $(id);
				
				var timer = setInterval(function() {
					current += increment;
					$(obj).text(current);
				  //obj.innerHTML = current;
					if (current == end) {
						clearInterval(timer);
					}
				}, stepTime);
			}
			
			// Fading Out Loadbar on Finised
			setTimeout(function(){
				swapSlide.pause()
				
				initOnFirstLoad();
		  
			}, time);
		
		} else {
			
			initOnFirstLoad();
		}
		
		
	}// End Page Load

	
	
/*--------------------------------------------------
Page Load Actions
---------------------------------------------------*/	
	
	function PageLoadActions() {
		
		
		// Default Page Navigation Load Events
		
		if (!isMobile()) {			
			$("#page-nav .page-title").on('mouseenter', function() {	
				var $this = $(this);			
				gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$("body").data('primary-color'), backgroundColor:$("body").data('primary-color')});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
				$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );				
			});								
			$("#page-nav .page-title").on('mouseleave', function() {					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$('#ball p').remove();				
			});		
		}		
		
		if (!$("body").hasClass("disable-ajaxload")) {
			$('#page-nav .page-title').on('click', function() {	
				$("body").addClass("show-loader");
				$('header').removeClass('white-header');
				$("#app").remove();
				$(".big-title-caption").remove();	
					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
				
				gsap.to('.hero-arrow i', {duration: 0.3, y:-40, opacity:0, delay:0, ease:Power2.easeInOut});				
				gsap.to('.next-hero-subtitle span', {duration: 0.3, y:-40, opacity:0, delay:0.05, stagger:0.03, ease:Power2.easeInOut});				
				gsap.to('.page-nav-caption:not(.marquee-title) .next-hero-title span', {duration: 0.5, y:-140, opacity:0, delay:0.1, stagger:0.03, ease:Power2.easeInOut});
				gsap.to('.page-nav-caption.marquee-title .next-hero-title span', {duration: 0.5, y:-300, opacity:0, delay:0.1, stagger:0, ease:Power2.easeInOut});					
				
				gsap.to($("#main-page-content, #hero, footer"), {duration: 0.3, opacity:0});
			});
		} else if ($("body").hasClass("disable-ajaxload")) {
			$('#page-nav .page-title').on('click', function() {					
				$("body").addClass("load-next-page");
				$("body").addClass("show-loader");
				$('header').removeClass('white-header');
				$("#app").remove();
				$(".big-title-caption").remove();	
					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
				
				gsap.to($("#main-page-content, #hero, #page-nav"), {duration: 0.3, opacity:0});
				gsap.to($("footer"), {duration: 0.3, opacity:0, delay:0, ease:Power2.easeInOut});
			});
		}
		
		
		// Project Page Navigation Load Events
		if (!isMobile()) {
			
			$("#project-nav .next-ajax-link-project").mouseenter(function(e) {	
				var $this = $(this);		
				$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );
				gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$this.data('color'), backgroundColor:$this.data('color')});			
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
				$("#project-nav .next-hero-title").addClass('hover-title');				
			});
							
			$("#project-nav .next-ajax-link-project").mouseleave(function(e) {
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$('#ball p').remove();
				$("#project-nav .next-hero-title").removeClass('hover-title');
			});
		}
		
		if (!$("body").hasClass("disable-ajaxload")) {
			
			
			if ($(".next-ajax-link-project").hasClass("auto-trigger")) {
				
				// cleanup every scroll trigger that may be still active in the ajax context
				if ( !(typeof window.ReachBottomArr === 'undefined' || window.ReachBottomArr === null) && Array.isArray( window.ReachBottomArr ) ) {
					
					window.ReachBottomArr.forEach( element => {
						
						element.kill();
					});
				}
				window.ReachBottomArr = new Array();
				
				$('#project-nav').each(function(){
					var $this = $(this);
					const ReachBottom = ScrollTrigger.create({
						id: Math.floor(Math.random() * 100),
						trigger: $("#project-nav"),
						start: "top top+=1px",
						end: ( st ) => "+=" + (st.vars.trigger.outerHeight(true) - window.innerHeight),
						onEnter: function( st ) { 
							console.log(st.vars.trigger[0].innerText);
							$("body").addClass("show-loader");						
							$this.delay(500).queue(function() {
								
								gsap.set($(".next-hero-progress"), {backgroundColor:"transparent"});
								gsap.to($(".next-hero-progress span"), {duration: 0.3, width:"0%", ease:Power2.easeInOut,onComplete: function() {
								  	gsap.set($(".next-hero-progress"), {opacity:0});
								}});
								var link = $this.find('a');
								link.trigger('click');
							});												
						},
						onRefresh: function( st ) {
							
							console.log("refresh scroll trigger project nav");
						},
						onLeaveBack: function() { 
							$("body").removeClass("show-loader");						
							$this.clearQueue();											
						}
					});				
					window.ReachBottomArr.push(ReachBottom);				
					$('body').waitForImages({
						finished: function() {
							setTimeout( function(){
								ReachBottom.refresh()	
							} , 200 );	
						},
						waitForAll: true
					});						
				});
			
			}
			
			if( $('#hero-image-wrapper').hasClass("change-header-color")) {
				$('#hero-footer').addClass("white-header");	
			}	
			
			$('.next-ajax-link-project').on('click', function() {					
				$("body").addClass("load-project-thumb-with-title");
				$('header').removeClass('white-header');
				$("#app").remove();
				$('.next-project-image-wrapper').addClass("temporary").appendTo('body');
				if ($(this).parents('#project-nav').hasClass("change-header")) {
					$("body").append('<div class="temporary-hero"><div class="outer content-max-width"><div class="inner"></div></div></div>');
				} else {
					$("body").append('<div class="temporary-hero light-content"><div class="outer content-max-width"><div class="inner"></div></div></div>');
				}
				$('.next-caption').appendTo('.temporary-hero .inner');
				
				var TLNextHeroSubTitleSpan = gsap.timeline();
				$(".temporary-hero .next-hero-subtitle span").each(function(index, element) {
					TLNextHeroSubTitleSpan.to(element, {duration: 0.3, y:-40, opacity:0, delay:0, ease:Power2.easeInOut}, index * 0.05)
				});
				
				var TLNextHeroTitleSpan = gsap.timeline();
				$(".temporary-hero .next-hero-title span").each(function(index, element) {
					TLNextHeroTitleSpan.to(element, {duration: 0.5, y:-140, opacity:0, delay:0.1, ease:Power2.easeInOut}, index * 0.05)
				});	
					
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
				
				gsap.to($("#main-page-content, #hero, #hero-image-wrapper"), {duration: 0.3, opacity:0});			
				gsap.to($(".next-project-image"), {duration: 0.7, scale:1, opacity:1, ease:Power2.easeInOut,onComplete: function() {
				  $('.temporary .next-project-image').addClass("visible")
				}});
				gsap.to($("footer, .all-works"), {duration: 0.3, opacity:0, ease:Power2.easeInOut});
			});
		} else if ($("body").hasClass("disable-ajaxload")) {
			$('.next-ajax-link-project').on('click', function() {					
				$("body").addClass("load-project-thumb-with-title").addClass("show-loader");							
				$('header').removeClass('white-header');
				$("#app").remove();									
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();				
				gsap.to($("#main-page-content, #hero, #hero-image-wrapper, #project-nav"), {duration: 0.3, opacity:0});			
				gsap.to($(".next-project-image"), {duration: 0.6, scale:1, opacity: 0, ease:Power2.easeOut});
				gsap.to($("footer, .all-works"), {duration: 0.3, opacity:0, ease:Power2.easeInOut});							
			});
		}
		
		
	}// Page Load Actions
	
	

	
/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {	
		
		gsap.set($("#show-filters, #counter-wrap"), {opacity:0, delay:0});
		
		$('body').waitForImages({
			finished: function() {
				$('body').removeClass('loading')
				setTimeout( function(){	
					$('body').removeClass('hidden').removeClass('scale-up').removeClass('scale-none');
				} , 1500 );
			},
			waitForAll: true
		});	
		
		$('body').waitForImages({
			finished: function() {
				gsap.to($("#header-container, .header-middle"), {duration: 1, force3D:true, opacity:1, ease:Power2.easeOut});				
			},
			waitForAll: true
		});
		
		gsap.to($("#main"), {duration: 0.3, opacity:1, delay:0, ease:Power2.easeOut});
		gsap.to($("#footer-container"), {duration: 1, force3D:true, opacity:1, delay:0.4, ease:Power2.easeOut});		
		
		if( $('#hero').hasClass("has-image")) {	
			if( $('body').hasClass("load-project-thumb-with-title")) {				
				gsap.to($("#hero-bg-image"), {duration: 0, scale:1 , opacity:1, delay:0, ease:Power2.easeOut});
				gsap.to($(".hero-arrow"), {duration: 0.5, y:-60, opacity:1, delay:0.3, ease:Power3.easeOut});				
				gsap.set($("#hero .hero-subtitle span"), {y: 60, opacity:0});					
				gsap.to($("#hero .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0.3, ease:Power3.easeOut});				
				gsap.set($("#hero-caption .hero-title span"), {y: 120, opacity:0});					
				gsap.to($("#hero-caption .hero-title span"), {duration: 1, y: 0, opacity:1, stagger:0.1, delay:0.4, ease:Power3.easeOut});
				gsap.to($(".hero-footer-right"), {duration: 0.7, y:0, opacity:1, delay:0.7, ease:Power3.easeOut});	
			} else if( $('body').hasClass("load-project-thumb")) {
				gsap.to($("#hero-bg-image"), {duration: 0, scale:1.02 , opacity:1, delay:0, ease:Power2.easeOut});
				gsap.to($(".hero-arrow"), {duration: 0.5, y:-60, opacity:1, delay:0.5, ease:Power3.easeOut});
				gsap.set($("#hero .hero-subtitle span"), {y: 60, opacity:0});					
				gsap.to($("#hero .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0.5, ease:Power3.easeOut});				
				gsap.set($("#hero-caption .hero-title span"), {y: 120, opacity:0});					
				gsap.to($("#hero-caption .hero-title span"), {duration: 1, y: 0, opacity:1, stagger:0.1, delay:0.6, ease:Power3.easeOut});
				gsap.to($(".hero-footer-right"), {duration: 0.7, y:0, opacity:1, delay:0.9, ease:Power3.easeOut});
			} else {
				gsap.set($("#hero-bg-image"), {scale:1.1 , opacity:0});
				$("#hero-bg-image").waitForImages({
					finished: function() {
						gsap.to($("#hero-bg-image"), {duration: 0.7, scale:1 , opacity:1, delay:0, ease:Power2.easeOut});				
					},
					waitForAll: true
				});
				
				gsap.to($(".hero-arrow"), {duration: 0.5, y:-60, opacity:1, delay:0.3, ease:Power3.easeOut});				
				gsap.set($("#hero .hero-subtitle span"), {y: 60, opacity:0});					
				gsap.to($("#hero .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0.3, ease:Power3.easeOut});				
				gsap.set($("#hero-caption .hero-title span"), {y: 120, opacity:0});					
				gsap.to($("#hero-caption .hero-title span"), {duration: 1, y: 0, opacity:1, stagger:0.1, delay:0.4, ease:Power3.easeOut});
				gsap.to($(".hero-footer-right"), {duration: 0.7, y:0, opacity:1, delay:0.7, ease:Power3.easeOut});	
			}
			gsap.to($("#main-page-content, #page-nav"), {duration: 0.4, opacity:1, delay:0.95, ease:Power2.easeOut});
		} else {
			gsap.to($(".hero-arrow"), {duration: 0.5, y:-60, opacity:1, delay:0.2, ease:Power3.easeOut});			
			gsap.set($("#hero .hero-subtitle span"), {y: 60, opacity:0});					
			gsap.to($("#hero .hero-subtitle span"), {duration: 0.7, y: 0, opacity:1, stagger:0.1, delay:0.2, ease:Power3.easeOut});			
			gsap.to($("#hero-caption .hero-title span"), {y: 120, opacity:0});					
			gsap.to($("#hero-caption .hero-title span"), {duration: 1, y: 0, opacity:1, stagger:0.1, delay:0.3, ease:Power3.easeOut});						
			gsap.to($(".hero-footer-right"), {duration: 0.7, force3D:true, y:0, opacity:1, rotation:0, delay:0.6, ease:Power2.easeOut});
			gsap.to($("#main-page-content, #page-nav"), {duration: 0.5, opacity:1, delay:0.35, ease:Power2.easeOut});
			gsap.to($(".post-article-wrap"), {duration: 0.4, force3D:true, y: 0, opacity:1, ease:Power2.easeOut});
			gsap.to($(".error-button"), {duration: 0.4, force3D:true, y: 0, opacity:1, rotation:0, delay:0.2, ease:Power2.easeOut});			
		}	
		
		// Fading In Showcase Slider on Finised
		if( !$('#canvas-slider').hasClass("active")) {	
			gsap.set($('#canvas-slider'), {opacity:0, scale:1.1});
		}
		gsap.set($("#showcase-slider-holder"), {opacity:0});
		gsap.set($(".swiper-prev, .swiper-next, .swiper-pagination-bullet"), {opacity:0});
		$('body').waitForImages({
			finished: function() {
				if( $('#showcase-slider-holder').length > 0 ){						
					//if( !$('#canvas-slider').hasClass("active")) {	
						gsap.to($('#canvas-slider'), {duration: 1, force3D:true, opacity:1, scale:1, delay:0.1, ease:Power2.easeOut});
					//}
					gsap.to($("#showcase-slider-holder"), {duration: 0.7, opacity:1, delay:0, ease:Power2.easeOut});
					gsap.to($(".showcase-pagination"), {duration: 0.2, opacity:1, delay:0, ease:Power2.easeOut});
					gsap.to($(".swiper-pagination-bullet-active").find('.translate-element span'), {duration: 0.5, y:0, opacity:1, delay:0.2, stagger: 0.05, ease:Power2.easeOut});					
					gsap.to($(".swiper-prev, .swiper-next, .swiper-pagination-bullet"), {duration: 0.3, y: 0, opacity:1, delay:0.2, ease:Power2.easeOut});
				}
			},
			waitForAll: true
		});	
		
		
		
		// Fading In Showcase Carousel on Finised
		gsap.set($("#showcase-carousel-holder"), {opacity:0});
		gsap.to($("#showcase-carousel-holder"), {duration: 0.7, opacity:1, delay:0.4, ease:Power2.easeOut});
		var slideWidth = $("#showcase-carousel-holder .swiper-slide").width()*0.5;
		gsap.set($("#showcase-carousel-holder .swiper-slide-active").prev().prev(), {x:-slideWidth, opacity:0});
		gsap.set($("#showcase-carousel-holder .swiper-slide-active").next().next(), {x:slideWidth, opacity:0});
		gsap.set($("#showcase-carousel-holder .swiper-slide-active").prev(), {x:-slideWidth, opacity:0});
		gsap.set($("#showcase-carousel-holder .swiper-slide-active").next(), {x:slideWidth, opacity:0});								
		gsap.to($("#showcase-carousel-holder .swiper-slide-active").prev().prev(), {duration: 0.7, x:0, delay:0.6, opacity:1, ease:Power2.easeOut});
		gsap.to($("#showcase-carousel-holder .swiper-slide-active").next().next(), {duration: 0.7, x:0, delay:0.6, opacity:1, ease:Power2.easeOut});
		gsap.to($("#showcase-carousel-holder .swiper-slide-active").prev(), {duration: 0.7, x:0, scale:1, delay:0.4, opacity:1, ease:Power2.easeOut});
		gsap.to($("#showcase-carousel-holder .swiper-slide-active").next(), {duration: 0.7, x:0, scale:1, delay:0.4, opacity:1, ease:Power2.easeOut});
		gsap.to($("footer .swiper-prev, footer .swiper-next, footer .swiper-pagination-bullet"), {duration: 0.3, y: 0, opacity:1, delay:0.2, ease:Power2.easeOut});		
		
		
		
		var tlSmallTitles = gsap.timeline();					
		$(".slide-small-title span").each(function(index, element) {
			tlSmallTitles.to(element, {duration: 0.5, force3D:true, y:0, opacity:1, delay:1, ease:Power2.easeOut}, index * 0.05)
		});
		// Fading In Floating Lists 
		var SlideListTitle = gsap.timeline();					
		$(".sl-title span, .split-title span").each(function(index, element) {
			SlideListTitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.5, ease:Power2.easeOut}, index * 0.05)
		});		
		var SlideListSubtitle = gsap.timeline();					
		$(".sl-subtitle span, .split-subtitle span").each(function(index, element) {
			SlideListSubtitle.to(element, {duration: 0.7, force3D:true, y:0, opacity:1, delay:0.6, ease:Power2.easeOut}, index * 0.05)
		});
		
		setTimeout( function(){
			$('.slide-list').addClass('show-borders')
		} ,300 );
		
		
		
		if( $('.load-project-thumb').length > 0 ){
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();
						$(".big-title-caption").remove();
						$('.thumb-wrapper').remove();				
					} ,450 );
				},
				waitForAll: true
			});
		} else if( $('.load-project-thumb-with-title').length > 0 ){
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();
						$('.thumb-wrapper').remove();	
						setTimeout( function(){
							$("#canvas-slider.active").remove();
						} , 100 );
						$(".temporary-hero").remove();
						gsap.to($(".next-project-image-wrapper.temporary"), {duration: 0.3, opacity: 0, ease:Power2.easeOut,onComplete: function() {
        					$(".next-project-image-wrapper.temporary").remove();
						}});
						$('body').removeClass("load-project-thumb-with-title").removeClass("show-loader");	
					} , 300 );
				},
				waitForAll: true
			});			
		} else if( $('.load-project-thumb-with-title-and-scale').length > 0 ){
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();
						$('.thumb-wrapper').remove();	
						$("#canvas-slider.active").remove();
						$(".temporary-hero").remove();
						gsap.to($(".next-project-image-wrapper.temporary"), {duration: 0.3, opacity: 0, ease:Power2.easeOut,onComplete: function() {
        					$(".next-project-image-wrapper.temporary").remove();
						}});
						$('body').removeClass("load-project-thumb-and-title").removeClass("show-loader");	
					} , 500 );
				},
				waitForAll: true
			});	
		} else {
			$('#hero-image-wrapper').waitForImages({
				finished: function() {
					setTimeout( function(){
						$('#hero-image-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
						$("#app.active").remove();	
						$("#canvas-slider.active").remove();
						$(".temporary-hero").remove();
						gsap.to($(".next-project-image-wrapper.temporary"), {duration: 0.3, opacity: 0, ease:Power2.easeOut,onComplete: function() {
							$(".next-project-image-wrapper.temporary").remove();
						}});
					} ,450 );
				},
				waitForAll: true
			});
		}
		
		setTimeout( function(){	
			$('header').removeClass('white-header');
			$('body').removeClass("load-project-page").removeClass("load-project-thumb").removeClass("load-next-project").removeClass("load-next-page");
			setTimeout( function(){	
				$('body').removeClass("load-project-thumb-with-title").removeClass("show-loader");
			} , 300 );			
		} , 800 );
		
	
	}// End Lazy Load		




	
	
	
/*--------------------------------------------------
Function Showcase Slider
---------------------------------------------------*/
	
	function ShowcaseSlider() {
		
	
		if( $('#showcase-slider-holder').length > 0 ){
			
			$("footer").addClass("showcase-footer");
			
			$('#showcase-slider .swiper-slide').each(function(i) {
				$(this).find('.slide-subtitle span').wrap( "<div></div>" );
				$(this).find('.slide-title span').wrap( "<div></div>" );
			});
			
			var titles = [];
			var subtitle = [];
			$('#showcase-slider .swiper-slide').each(function(i) {
			  	titles.push($(this).find('.slide-title').html());
				subtitle.push($(this).find('.slide-subtitle').html());
			});
								
			var interleaveOffset = 0.3;
			
			const showcaseSwiper = new Swiper('#showcase-slider', {
				direction: "horizontal",
				loop: true,				
				slidesPerView: 'auto',
				touchStartPreventDefault: false,  
				speed:1000,
				mousewheel: true,
				simulateTouch : true,
				parallax:true,
				navigation: {
					nextEl: '.swiper-next',
					prevEl: '.swiper-prev',
				},
				pagination: {
				  el: '.showcase-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return '<div class="' + className + '">' + '<div class="showcase-caption-wrapper">' + '<div class="content-max-width">' + '<div class="slide-arrow translate-element">' + '<span><i class="arrow-icon"></i></span>' + '</div>' + '<div class="slide-subtitle translate-element">' + subtitle[index] + '</div>' + '<div class="slide-title translate-element">' + titles[index] + '</div>' + '</div>' + '</div>' +'<div class="parallax-wrap">' + '<div class="parallax-element">' + '<svg class="fp-arc-loader disable-drag" width="20" height="20" viewBox="0 0 20 20">'+
								'<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"'+
								'stroke-opacity="1" stroke-width="2px"></circle>'+
								'<circle class="solid-fill" cx="10" cy="10" r="3"></circle>'+
								'</svg></div></div>' + '</div>';						 
					},
				},						
				on: {					
					slidePrevTransitionStart: function () {	
			
						$('.showcase-pagination').find('.swiper-pagination-bullet').each(function() {
							if (!$(this).hasClass("swiper-pagination-bullet-active")) {
								$('#trigger-slides .swiper-slide-active').find('div').first().each(function() {
									if (!$(this).hasClass("active")) {
										$(this).trigger('click');
									}
								});
								
								$('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function() {
									if (!$(this).hasClass("active")) {
										$(this).trigger('click');
									}
								}); 
								gsap.to($(this).find('.translate-element span'), {duration: 0.5, y:120, opacity:0, stagger: -0.02, ease:Power2.easeInOut,onComplete: function() {									
									gsap.set($(".swiper-pagination-bullet-active").find('.translate-element span'), {y:-120, opacity:0});
									gsap.to($(".swiper-pagination-bullet-active").find('.translate-element span'), {duration: 0.5, y:0, opacity:1, delay:0, stagger: -0.05, ease:Power2.easeOut});
								}});
							}
						});
												
					},
					slideNextTransitionStart: function () {	
			
						$('.showcase-pagination').find('.swiper-pagination-bullet').each(function() {
							if (!$(this).hasClass("swiper-pagination-bullet-active")) {
								$('#trigger-slides .swiper-slide-active').find('div').first().each(function() {
									if (!$(this).hasClass("active")) {
										$(this).trigger('click');
									}
								});
								
								$('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function() {
									if (!$(this).hasClass("active")) {
										$(this).trigger('click');
									}
								}); 
								gsap.to($(this).find('.translate-element span'), {duration: 0.5, y:-120, opacity:0, stagger: 0.02, ease:Power2.easeInOut,onComplete: function() {
									gsap.set($(".swiper-pagination-bullet-active").find('.translate-element span'), {y:120, opacity:0});
									gsap.to($(".swiper-pagination-bullet-active").find('.translate-element span'), {duration: 0.5, y:0, opacity:1, delay:0, stagger: 0.08, ease:Power2.easeOut});
								}});
							}
						});
												
					},	
					slideChangeTransitionStart: function () {
						
						$('body').addClass('disable-slider-interaction');
												
						if ($('.swiper-slide-active').hasClass("change-header")) {
								$('#page-content').delay(600).queue(function(next){
									$(this).removeClass('light-content');
									$('#magic-cursor').removeClass('light-content');
									next();
								});	
							} else {
								$('#page-content').delay(600).queue(function(next){
									$(this).addClass('light-content');
									$('#magic-cursor').addClass('light-content');
									next();
								});	
							}
							
							if ($('.swiper-slide-duplicate-active').hasClass("change-header")) {
								$('#page-content').delay(600).queue(function(next){
									$(this).removeClass('light-content');
									$('#magic-cursor').removeClass('light-content');
									next();
								});	
							} else {
								$('#page-content').delay(600).queue(function(next){
									$(this).addClass('light-content');
									$('#magic-cursor').addClass('light-content');
									next();
								});	
							}
						
						$('.swiper-slide').find('.slide-title').each(function() {
							$(this).removeClass('active-title');							
						});
						
						
					},
					slideChangeTransitionEnd: function () {
						
						$('body').removeClass('disable-slider-interaction');
						
						$('.swiper-slide-active').find('.slide-title').each(function() {
							$(this).addClass('active-title');							
						});
						
						$('.swiper-slide-duplicate-active').find('.slide-title').each(function() {
							$(this).addClass('active-title');	
						});						
						
					},
  				},
			});	
			
			
			if( $('#showcase-slider').length > 0 ){
				$('body').waitForImages({
					finished: function() {	
						showcaseSwiper.update();
					},				
					waitForAll: true
				});	
			}
			
			function BulletsPosition() {
				var bullets_count = $('.swiper-pagination-bullet .parallax-wrap').length;
				var bullets_count_width = $('.swiper-pagination-bullet .parallax-wrap').length * 40 / 2;
				var bullets_height = $('.showcase-pagination-wrap').height()/2;
				var window_width = $(window).width() / 2;
				var window_height = $(window).height() / 2;
				var footer_height = $('footer').height() / 2 ;
				for( i = 0; i < bullets_count; i++ ) { $('.swiper-pagination-bullet .parallax-wrap').eq( i ).css( 'left', (i * 40) - bullets_count_width + window_width).css( 'top', (bullets_height - 20) + window_height - footer_height);	}
			}
			
			BulletsPosition();
			
			var resizeTime;
			$(window).resize(function() {
				clearTimeout(resizeTime);
				resizeTime = setTimeout(doneResizing, 10);
			});
				
			function doneResizing(){
				BulletsPosition();
				LinesWidth();
			}
			
			if (!isMobile()) {
			
				$('#showcase-slider-holder .slide-title-wrapper').on('mousedown', function(event) {
					return false;
				});			
				
				$('.swiper-container').on('mousedown touchstart', function() {	
					if ($('#magic-cursor').hasClass("light-content")) {
						gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#fff',});
					} else {
						gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#000',});
					}
					$("body" ).addClass("scale-drag-x");
				});
					
				$('.swiper-container').on('mouseup touchend', function() {
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					$("body").removeClass("scale-drag-x");
				});
				
				$('body').on('mouseup touchend', function() {				
					$('body').removeClass('scale-drag-x');					
				});
				
				// Showcase Slider Hover Events
				$("#showcase-slider-holder .slide-title-wrapper").on('mouseenter', function() {	
					var $this = $(this);			
					gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$this.find('.slide-title').data('color'), backgroundColor:$this.find('.slide-title').data('color')});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).append( '<p class="first">' + $this.find('.slide-title').data("firstline") + '</p>' + '<p>' + $this.find('.slide-title').data("secondline") + '</p>' );	
					$("#showcase-slider-holder .slide-title").addClass('hover-title')			
				});
									
				$("#showcase-slider-holder .slide-title-wrapper").on('mouseleave', function() {					
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$('#ball p').remove();		
					$("#showcase-slider-holder .slide-title").removeClass('hover-title')		
				});
				
			
			}
			
			
			// Showcase Slider Project Load Events
			if (!$("body").hasClass("disable-ajaxload")) {
				$('#showcase-slider-holder .slide-title').on('click', function() {
					let parent_slide = $(this).closest( '.swiper-slide' );
					parent_slide.addClass('above');					
					$("body").addClass("load-project-thumb-with-title").addClass("show-loader");										
					gsap.to('footer, .showcase-pagination-wrap .parallax-element', {duration: 0.5, opacity:0, ease:Power4.easeInOut});					
					
					gsap.to($(".swiper-pagination-bullet-active").find('.translate-element span'), {duration: 0.5, y:-120, opacity:0, stagger: 0.02, ease:Power2.easeInOut});
						
					$(this).delay(150).queue(function() {
						var link = $(".above").find('a');
						link.trigger('click');
					});
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball p').remove();
					$('#ball i').remove();				
				});
			}  else {
				gsap.to('.slide-small-title span', {duration: 0.3, y:-30, opacity:0, delay:0, ease:Power2.easeIn});	
				gsap.to('#showcase-border', {duration: 0.5, width:'0', opacity:0, ease:Power4.easeInOut});
				gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
				gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball p').remove();
				$('#ball i').remove();
			}
			
			
		}	
		
			
	}//End Showcase Slider
	
	
/*--------------------------------------------------
Function Showcase Webgl Slider Core
---------------------------------------------------*/
	
	function ShowcaseWebglCore() {
		
	
		if( $('#showcase-slider-holder').length > 0 ){
			
			
			var vertex = 'varying vec2 vUv; void main() {  vUv = uv;  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );	}';
			var fragment = `
				varying vec2 vUv;

				uniform sampler2D currentImage;
				uniform sampler2D nextImage;
				uniform sampler2D disp;
				uniform float dispFactor;
				uniform float effectFactor;
				uniform vec4 resolution;

				void main() {

					vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

					vec4 disp = texture2D(disp, uv);
					vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
					vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
					vec4 _currentImage = texture2D(currentImage, distortedPosition);
					vec4 _nextImage = texture2D(nextImage, distortedPosition2);
					vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

					gl_FragColor = finalTexture; }

				`;

			var gl_canvas = new ClapatWebGL({
					vertex: vertex,
					fragment: fragment,
			});
			
			if( $('#showcase-slider').length > 0 ){
			
				var addEvents = function(){
	
					var triggerSlide = Array.from(document.getElementById('trigger-slides').querySelectorAll('.slide-wrap'));
					gl_canvas.isRunning = false;
	
					triggerSlide.forEach( (el) => {
	
						el.addEventListener('click', function() {
	
								if( !gl_canvas.isRunning ) {
	
									gl_canvas.isRunning = true;
	
									document.getElementById('trigger-slides').querySelectorAll('.active')[0].className = '';
									this.className = 'active';
	
									var slideId = parseInt( this.dataset.slide, 10 );
	
									gl_canvas.material.uniforms.nextImage.value = gl_canvas.textures[slideId];
									gl_canvas.material.uniforms.nextImage.needsUpdate = true;
	
									gsap.to( gl_canvas.material.uniforms.dispFactor, {
										duration: 1,
										value: 1,
										ease: 'Sine.easeInOut',
										onComplete: function () {
											gl_canvas.material.uniforms.currentImage.value = gl_canvas.textures[slideId];
											gl_canvas.material.uniforms.currentImage.needsUpdate = true;
											gl_canvas.material.uniforms.dispFactor.value = 0.0;
											gl_canvas.isRunning = false;
										}
									});
	
								}
	
						});
	
					});
	
				};
	
				addEvents();
				
			}
			
			
		}	
		
			
	}//End Showcase WebGL Core		
	
	
	
/*--------------------------------------------------
Function Showcase Carousel
---------------------------------------------------*/
	
	function ShowcaseCarousel() {
		
	
		if( $('#showcase-carousel-holder').length > 0 ){
			
			$("footer").addClass("showcase-footer")
								
			$('#showcase-carousel .swiper-slide').each(function(i) {
				$(this).find('.slide-subtitle span').wrap( "<div></div>" );
				$(this).find('.slide-title span').wrap( "<div></div>" );
			});
			
			var swiperOptions = {
				direction: "horizontal",
				loop: true,
				resistance : true,
				resistanceRatio:0.5,
				slidesPerView: 'auto',
				touchStartPreventDefault: false,  
				allowTouchMove:true,
				grabCursor: true, 
				speed:700,
				autoplay: false,
				mousewheel: true,
				centeredSlides: true,
				spaceBetween: 100,
				breakpoints: {
					320: {
					  spaceBetween: 0
					},
					479: {
					  spaceBetween: 10
					},
					767: {
					  spaceBetween: 20
					},
					1024: {
					  spaceBetween: 30
					}
				},
				parallax:true,
				navigation: {
					nextEl: '.swiper-next',
					prevEl: '.swiper-prev',
				},
				pagination: {
				  el: '.swiper-pagination',
						clickable: true,
						renderBullet: function (index, className) {
					    return '<span class="' + className + '">'+'<div class="parallax-wrap">' + '<div class="parallax-element">' + '<svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 20 20">'+
									'<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)" stroke="#FFF"'+ 'stroke-opacity="1" stroke-width="2px"></circle>' + '<circle class="solid-fill" cx="10" cy="10" r="3" fill="#FFF"></circle>' + '</svg></div></div></span>';
					},
			
				},						
				on: {					
					slideChangeTransitionStart: function () {
																	
						$('.swiper-slide').find('.slide-title').each(function() {
							$(this).removeClass('active-title');							
						});
						
						$('.swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						});
						
						
					},
					slideChangeTransitionEnd: function () {	
						
						$('.swiper-slide-active').find('.slide-title').each(function() {
							$(this).addClass('active-title');							
						});
						
						$('.swiper-slide-duplicate-active').find('.slide-title').each(function() {
							$(this).addClass('active-title');	
						});
						
						$('.swiper-slide-prev').find('video').each(function() {
							$(this).get(0).pause();
						});
						
						$('.swiper-slide-next').find('video').each(function() {
							$(this).get(0).pause();
						});
						
						
					},
  				},
			};
			
			
			var showcaseSwiper = new Swiper("#showcase-carousel", swiperOptions);	
			
			
			if( $('#showcase-carousel').length > 0 ){
				$('body').waitForImages({
					finished: function() {	
						showcaseSwiper.update();
					},				
					waitForAll: true
				});	
			}
			
			
			
			if (!isMobile()) {
			
				$('#showcase-carousel-holder .slide-title-wrapper').on('mousedown', function(event) {
					return false;
				});				
				
				$('.swiper-slide').on('mousedown touchstart', function() {	
					if ($('#magic-cursor').hasClass("light-content")) {
						gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#fff',});
					} else {
						gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#000',});
					}
					$("body" ).addClass("scale-drag-x");
				});
					
				$('.swiper-slide').on('mouseup touchend', function() {
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					$("body").removeClass("scale-drag-x");
				});
				
				$('body').on('mouseup touchend', function() {				
					$('body').removeClass('scale-drag-x');					
				});
				
				$("#showcase-carousel-holder .slide-title-wrapper").on('mouseenter', function() {	
					var $this = $(this);			
					gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$this.find('.slide-title').data('color'), backgroundColor:$this.find('.slide-title').data('color')});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).append( '<p class="first">' + $this.find('.slide-title').data("firstline") + '</p>' + '<p>' + $this.find('.slide-title').data("secondline") + '</p>' );	
					$("#showcase-carousel-holder .slide-title").addClass('hover-title')			
				});
									
				$("#showcase-carousel-holder .slide-title-wrapper").on('mouseleave', function() {					
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$('#ball p').remove();		
					$("#showcase-slider-holder .slide-title").removeClass('hover-title')		
				});
				
				$("#showcase-carousel-holder .swiper-slide").on('mouseenter', function() {
					gsap.set($(this).find('.slide-arrow span'), {y:30, opacity:0, });
					gsap.set($(this).find('.slide-subtitle span'), {y:30, opacity:0, });
					gsap.set($(this).find('.slide-title span'), {y:60, opacity:0, });
					gsap.to($(this).find('.slide-arrow span'), {duration: 0.3, y:0, opacity:1, delay:0, ease:Power2.easeInOut});
					gsap.to($(this).find('.slide-subtitle span'), {duration: 0.3, y:0, opacity:1, delay:0, stagger: 0.05, ease:Power2.easeInOut});
					gsap.to($(this).find('.slide-title span'), {duration: 0.5, y:0, opacity:1, delay:0.1, stagger: 0.05, ease:Power2.easeOut});							
				});
									
				$("#showcase-carousel-holder .swiper-slide").on('mouseleave', function() {	
					gsap.to($(this).find('.slide-arrow span'), {duration: 0.3, y:-30, opacity:0, delay:0, ease:Power2.easeInOut});
					gsap.to($(this).find('.slide-subtitle span'), {duration: 0.3, y:-30, opacity:0, delay:0, stagger: 0.05, ease:Power2.easeInOut});
					gsap.to($(this).find('.slide-title span'), {duration: 0.5, y:-60, opacity:0, delay:0.1, stagger: 0.05, ease:Power2.easeOut});								
				});
			
			}
			
		}	
		
			
	}//End Showcase Carousel	


	
	
/*--------------------------------------------------
Function Floating Lists
---------------------------------------------------*/

	function FloatingLists() {
	
		if( $('.showcase-list-holder').length > 0 ){
								
			gsap.utils.toArray('.slide-list').forEach((section, index) => {
				const z = section.querySelector('.sl-title');
				const w = section.querySelector('.sl-title span');
				const clone = w.cloneNode(true);
				const clone1 = w.cloneNode(true);
				w.parentNode.appendChild(clone);
				w.parentNode.appendChild(clone1);
				
				
				const [x, xEnd] = (index % 2) ? [ -((z.scrollWidth-section.offsetWidth)/2)+200, -((z.scrollWidth-section.offsetWidth)/2)-200] : [ -((z.scrollWidth-section.offsetWidth)/2)-200, -((z.scrollWidth-section.offsetWidth)/2)+200];
				gsap.fromTo(z, {  x  }, {
					x: xEnd,
					scrollTrigger: { 
						trigger: section,
						scrub: 0.5,
					}
				});
				
				
			});
			
			
			if (!isMobile()) {
				
				$(".slide-list").mouseenter(function(e) {
					var $this = $(this);	
					$('.slide-list').addClass('disable');
					$this.removeClass('disable');				
					gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$this.data('color'), backgroundColor:$this.data('color')});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).append( '<p class="first">' + $this.data("firstline") + '</p>' + '<p>' + $this.data("secondline") + '</p>' );
					$this.closest('.item').find('video').each(function() {
						$(this).get(0).play();
					});
				});
								
				$(".slide-list").mouseleave(function(e) {
					var $this = $(this);					
					$('.slide-list').removeClass('disable');
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$('#ball p').remove();
					$this.closest('.item').find('video').each(function() {
						$(this).get(0).pause();
					});
				});
			}
			
			
			if (isMobile()) {
				$('.hover-reveal').addClass('trigger-item-link');
				$('.sl-title').addClass('trigger-item-link');
			}
			
			if (!isMobile()) {
			
				if ($("body").hasClass("smooth-scroll")) {
					var elem = document.querySelector("#content-scroll");
					var scrollbar = Scrollbar.init(elem,
					{
						renderByPixels: true,
						damping:0.1
					});
				}
				
				const getMousePos = (e) => {
					let posx = 0;
					let posy = 0;
					if (!e) e = window.event;
					if (e.pageX || e.pageY) {
						posx = e.pageX;
						posy = e.pageY;
					}
					else if (e.clientX || e.clientY) 	{
						posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
						posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
					}
					return { x : posx, y : posy }
				}
			
				// Effect 1
				class HoverImgFx1 {
					constructor(el) {
						this.DOM = {el: el};
						this.DOM.reveal = this.DOM.el.querySelector('.hover-reveal');				
						this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
						this.DOM.revealInner.style.overflow = 'hidden';
						this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
						this.initEvents();
					}
					initEvents() {				
						
						this.positionElement = (ev) => {
							const mousePos = getMousePos(ev);
							if ($("body").hasClass("smooth-scroll")) {
								const docScrolls = {
									left : document.body.scrollLeft + document.documentElement.scrollLeft, 
									top : - scrollbar.scrollTop
								};
								gsap.to($('.hover-reveal'), { duration: 0.7, top: `${mousePos.y-($('.hover-reveal').height()/2)-docScrolls.top}px`, left: `${mousePos.x-($('.hover-reveal').width()/2)-docScrolls.left}px`, ease:Power4.easeOut });
							} else {
								const docScrolls = {
									left : document.body.scrollLeft + document.documentElement.scrollLeft, 
									top : document.body.scrollTop + document.documentElement.scrollTop
								};
								gsap.to($('.hover-reveal'), { duration: 1, top: `${mousePos.y+40-docScrolls.top}px`, left: `${mousePos.x+10-docScrolls.left}px`, ease:Power4.easeOut });
							}
							
						};
						this.mouseenterFn = (ev) => {
							this.positionElement(ev);
							this.showImage();
						};
						this.mousemoveFn = ev => requestAnimationFrame(() => {
							this.positionElement(ev);
						});
						this.mouseleaveFn = () => {
							this.hideImage();
						};
						
						this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
						this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
						this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
					}
					showImage() {
						gsap.killTweensOf(this.DOM.revealInner);
						gsap.killTweensOf(this.DOM.revealImg);
			
						this.tl = gsap.timeline({
							onStart: () => {
								this.DOM.reveal.style.opacity = 1;
								gsap.set(this.DOM.el, {zIndex: 1000});
							}
						})
						.add('begin')
						.add(gsap.to(this.DOM.revealInner, {
							duration: 0.4,
							ease: Sine.easeOut,
							startAt: {x: '-100%'},
							x: '0%'
						}), 'begin')
						.add(gsap.to(this.DOM.revealImg, {
							duration: 0.4,
							ease: Sine.easeOut,
							startAt: {x: '100%'},
							x: '0%'
						}), 'begin');
					}
					hideImage() {
						gsap.killTweensOf(this.DOM.revealInner);
						gsap.killTweensOf(this.DOM.revealImg);
			
						this.tl = gsap.timeline({
							onStart: () => {
								gsap.set(this.DOM.el, {zIndex: 999});
							},
							onComplete: () => {
								gsap.set(this.DOM.el, {zIndex: ''});
								gsap.set(this.DOM.reveal, {opacity: 0});
							}
						})
						.add('begin')
						.add(gsap.to(this.DOM.revealInner, {
							duration: 0.4,
							ease: Sine.easeOut,
							x: '100%'
						}), 'begin')
						
						.add(gsap.to(this.DOM.revealImg, {
							duration: 0.4,
							ease: Sine.easeOut,
							x: '-100%'
						}), 'begin');
					}
				}
				
				Array.from(document.querySelectorAll('.slide-list')).forEach(link => new HoverImgFx1(link));
				
			}
			
		}
		
		
	}// End Floating Lists
	
	
/*--------------------------------------------------
Function Sticky Lists
---------------------------------------------------*/

	function StickyLists() {
	
		if( $('.showcase-reverse-list-holder').length > 0 ){
			
			
			var imageHeight = $('.sr-slide').innerHeight();
			
			var leftImages = gsap.utils.toArray('.aside.left .sr-slide');
			var leftImagesHeight = (leftImages.length * imageHeight) -  window.innerHeight;
			
			var rightImages = gsap.utils.toArray('.aside.right .sr-slide');
			var rightImagesHeight = (rightImages.length * imageHeight) -  window.innerHeight;
			
			if( leftImages.length > rightImages.length ){				
				var durationHeight = (leftImages.length * imageHeight) -  window.innerHeight				
			} else if( rightImages.length > leftImages.length ){				
				var durationHeight = (rightImages.length * imageHeight) -  window.innerHeight					
			} else if( rightImages.length = leftImages.length ){				
				var durationHeight = (leftImages.length * imageHeight) -  window.innerHeight				
			}
			
			ScrollTrigger.create({			
				trigger: ".showcase-reverse-list",
				scrub: true,
				pin: true,
				start: () => "top top",
				end: () => "+=" + durationHeight,			
			});
			
			gsap.set(".aside.left", {y:-leftImagesHeight});
			
			gsap.timeline({
				scrollTrigger: {
					trigger: ".showcase-reverse-list",
					start: "top top",
					end: () => "+=" + durationHeight,
					scrub: true,
				}
			}).to(".aside.left", {y:0});
			
			gsap.timeline({
				scrollTrigger: {
					trigger: ".showcase-reverse-list",
					start: "top top",
					end: () => "+=" + durationHeight,
					scrub: true,
				}
			}).to(".aside.right", {y:-rightImagesHeight});
			
		}
		
		
	}// End Floating Lists	


/*--------------------------------------------------
Function Portfolio
---------------------------------------------------*/	
		
	function Portfolio() {
			
		if( $('.portfolio-wrap').length > 0 ){
			
			var $container = $('.portfolio');
		
			$container.isotope({
			  layoutMode: 'packery',
			  itemSelector: '.item',
			  gutter:0,
			  transitionDuration: "0.5s"
			});
			
			
			$('#filters a').on('click', function() {
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				$('.item').addClass('item-margins');
				var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector }, function( $changedItems, instance ) {
				  instance.$allAtoms.filter('.isotope-hidden').removeClass('is-filtered');
				  instance.$filteredAtoms.addClass('is-filtered');
				});		
				return false;
			});
			
			
			$('.portfolio-wrap').waitForImages({
				finished: function() {
					$("#all").trigger('click');
				},
				waitForAll: true
			});
			
			
			if ($('.portfolio-wrap').hasClass('parallax-two-grid')) {						
				if ($(window).width() > 767) {		
					$('.portfolio-wrap').waitForImages({
						finished: function() {
							gsap.utils.toArray('.vertical-parallax').forEach((parallaxElement, index) => {
								const parallaxElementChild = parallaxElement.querySelector(".item-parallax");
								const offsetParallax = parallaxElementChild.offsetHeight;					
								gsap.fromTo( parallaxElementChild, { y: offsetParallax * 0.3 },	{ y: -offsetParallax, 
									ease: "none",
										scrollTrigger: {
											trigger: parallaxElement,
											scrub: 1,
										}
									}
								);
							});
						},
						waitForAll: true
					});
				}
			
			}
			
			
			if ($('.portfolio-wrap').hasClass('parallax-three-grid')) {						
				if ($(window).width() > 767) {		
					$('.portfolio-wrap').waitForImages({
						finished: function() {
							gsap.utils.toArray('.item').forEach((parallaxElement, index) => {
								const parallaxElementChild = parallaxElement.querySelector(".item-parallax");
								const startMovement = (parallaxElement.offsetHeight * parallaxElement.dataset.startparallax);
								const endMovement = (parallaxElement.offsetHeight * parallaxElement.dataset.endparallax);						
								gsap.fromTo( parallaxElementChild, { y: startMovement },	{ y: endMovement, 
									ease: "none",
										scrollTrigger: {
											trigger: parallaxElement,
											scrub: true,
										}
									}
								);
							});
						},
						waitForAll: true
					});
				}			
			}
			
			
			if ($('.portfolio-wrap').hasClass('overlapping-grid')) {
				if ($(window).width() > 767) {	
					let delSections = document.querySelectorAll(".item.delayed-item");
					
					delSections.forEach(itemThumb => {				
						
						let imageAnim = gsap.to(itemThumb.querySelector(".item-parallax"), {
							y: "-100vh",
							ease: "none",
							paused: true
						});	
										
						let progressTo = gsap.quickTo(imageAnim, "progress", {ease: "power3", duration: parseFloat(itemThumb.dataset.scrub) || 0.2 });					
						
						gsap.to(itemThumb, {
							y: "100vh",
							ease: "none",
							scrollTrigger: { //Need Refresh on Resize
								scrub: true,
								trigger: itemThumb,
								start: "top bottom",
								end: "bottom top",
								onUpdate: self => progressTo(self.progress)
							}
						});	
									
					});
				}				
			}

			
			
			
			if (!$('.portfolio-wrap').hasClass('below-caption')) {				
				$('.item .item-title').each(function(i) {
					$(this).find('.item .item-title span').wrap( "<div></div>" );
				});
				
				$('.item .item-cat, .item .item-date').each(function(){
					var words = $(this).text().split(" ");
					var total = words.length;
					$(this).empty();
					for (index = 0; index < total; index ++){
						$(this).append($("<span /> ").text(words[index]));
					}
				});			
			}
			
			
			//Show Filters On overlay
			$('#show-filters, #close-filters').on('click', function() {			
				$('#filters-overlay').toggleClass('active');
				var navtitleheight = $(".hero-title").height()
				var navsubtitleheight = $(".hero-subtitle").height()
				
				setTimeout( function(){			
					if ($('#filters-overlay').hasClass("active")) {
						
						gsap.to($(".item-parallax"), {duration: 0.6, force3D:true, scale:0.9, opacity:0.3, delay:0.1, ease:Power2.easeInOut});					
						gsap.to($(".active .item-caption"), {duration: 0.3, opacity:0, ease:Power2.easeOut});
						gsap.to($("#show-filters, #counter-wrap"), {duration: 0.3, opacity:0, delay:0, ease:Power2.easeOut});
						gsap.to($("#show-filters, #counter-wrap"), {duration: 0, visibility:'hidden', delay:0.35, ease:Power2.easeOut}); 
						
						//Fade In Navigation Lists
						gsap.set($(".filters-info"), {y:30, opacity:0});
						gsap.to($(".filters-info"), {duration: 0.4, force3D:true, y:0, opacity:1, delay:0.5, ease:Power2.easeOut});
						var tlMenu = gsap.timeline();
						tlMenu.set($(".filters-timeline a"), {y:60, opacity:0});
						$(".filters-timeline a").each(function(index, element) {
							tlMenu.to(element, {duration: 0.5, y:0, opacity:1, delay:0.3, ease:Power3.easeOut}, index * 0.1)
						});
							
					} else {
						
						gsap.to($(".item-parallax"), {duration: 0.6, force3D:true, scale: 1, opacity:1, delay:0.3, ease:Power2.easeInOut});					
						gsap.to($(".active .item-caption"), {duration: 0.5, opacity:1, delay:0.5, ease:Power2.easeOut});
						gsap.set($("#show-filters, #counter-wrap"), {visibility:'visible', opacity:0});
						gsap.to($("#show-filters, #counter-wrap"), {duration: 0.3, opacity:1, delay:0.7, ease:Power2.easeOut});
						
						//Fade Out Navigation Lists
						gsap.to($(".filters-info"), {duration: 0.2, force3D:true, y:-30, opacity:0, delay:0, ease:Power1.easeIn});					
						var tlMenu = gsap.timeline();
						$(".filters-timeline a, .jssocials-share").each(function(index, element) {
							tlMenu.to(element, {duration: 0.25, opacity:0, y:-60, delay:0.1, ease:Power1.easeIn }, index * 0.1)
						});	
						gsap.to('#ball', {duration: 0.1, borderWidth: '4px', scale:0.5,});
						$("#ball").removeClass("close-icon");
						$('#ball i').remove();
						
					}							
				} , 20 );
			});
			
			
			gsap.to(".portfolio", {			  
				scrollTrigger: {
					trigger: ".portfolio",
					start: "top 40%",
					end: "bottom 90%",
					scrub: true,
					onEnter: function(st) { 
						gsap.to($("#show-filters"), {duration: 0.3, opacity:1, delay:0, ease:Power2.easeOut});
						$("#show-filters").addClass('enabled')					
					},
					onEnterBack: function(st) {
						gsap.to($("#show-filters"), {duration: 0.3, opacity:1, delay:0, ease:Power2.easeOut});
						$("#show-filters").addClass('enabled')
					},					
					onLeave: function(st) { 
						gsap.to($("#show-filters"), {duration: 0.15, opacity:0, delay:0, ease:Power2.easeOut});
						$("#show-filters").removeClass('enabled')				
					},
					onLeaveBack: function(st) { 
						gsap.to($("#show-filters"), {duration: 0.15, opacity:0, delay:0, ease:Power2.easeOut});
						$("#show-filters").removeClass('enabled')				
					},
					invalidateOnRefresh: true
				}
			});
			
			
			if (!isMobile()) {
				
				$(".item-parallax").on('mouseenter', function() {
					gsap.set($(this).find('.item-arrow i'), {y:30, opacity:0, });
					gsap.set($(this).find('.item-cat span, .item-date span'), {y:30, opacity:0, });
					gsap.set($(this).find('.item-title span'), {y:60, opacity:0, });
					gsap.to($(this).find('.item-arrow i'), {duration: 0.3, y:0, opacity:1, delay:0, ease:Power2.easeInOut});
					gsap.to($(this).find('.item-cat span, .item-date span'), {duration: 0.3, y:0, opacity:1, delay:0, stagger: 0, ease:Power2.easeInOut});
					gsap.to($(this).find('.item-title span'), {duration: 0.5, y:0, opacity:1, delay:0.1, stagger: 0.05, ease:Power2.easeOut});							
				});
									
				$(".item-parallax").on('mouseleave', function() {	
					gsap.to($(this).find('.item-arrow i'), {duration: 0.3, y:-30, opacity:0, delay:0, ease:Power2.easeInOut});
					gsap.to($(this).find('.item-cat span, .item-date span'), {duration: 0.3, y:-30, opacity:0, delay:0, stagger: 0, ease:Power2.easeInOut});
					gsap.to($(this).find('.item-title span'), {duration: 0.5, y:-60, opacity:0, delay:0.1, stagger: 0.05, ease:Power2.easeOut});								
				});
				
				$(".item-parallax").mouseenter(function(e) {
					var $this = $(this);					
					gsap.to('#ball', {duration: 0.3, borderWidth: '2px', scale: 1.2, borderColor:$this.parent().data('color'), backgroundColor:$this.parent().data('color')});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
					$( "#ball" ).append( '<p class="first">' + $this.parent().data("firstline") + '</p>' + '<p>' + $this.parent().data("secondline") + '</p>' );
					$this.closest('.item').find('video').each(function() {
						$(this).get(0).play();
					});
				});
								
				$(".item-parallax").mouseleave(function(e) {
					var $this = $(this);					
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999', backgroundColor:'transparent'});
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '4px', top: 0, left: 0});
					$('#ball p').remove();
					$this.closest('.item').find('video').each(function() {
						$(this).get(0).pause();
					});
				});
				
				$("#close-filters").mouseenter(function(e) {	
					$( "#ball" ).addClass("close-icon").append( '<i class="fa-solid fa-xmark"></i>' );
					if ($('#page-content').hasClass("light-content")) {
						gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#fff',});
						gsap.to('#ball i', {duration: 0.2, css:{color:"#fff"}});
					} else {
						gsap.to('#ball', {duration: 0.2, borderWidth: '2px', scale: 1, borderColor:'#000',});
						gsap.to('#ball i', {duration: 0.2, css:{color:"#000"}});
					}
					gsap.to('#ball-loader', {duration: 0.2, borderWidth: '2px', top: 2, left: 2});
				});
					
				$("#close-filters").mouseleave(function(e) {
					gsap.to('#ball', {duration: 0.2, borderWidth: '4px', scale:0.5, borderColor:'#999999',});
					gsap.to('#ball-loader', {duration: 0.2,borderWidth: '4px', top: 0, left: 0});
					$("#ball").removeClass("close-icon");
					$('#ball i').remove();
				});
			}
			
		}
	
	}//End Portfolio



	window.LoadViaAjax = function() {		
			
		FirstLoad();
		ScrollEffects();
		Sliders();
		PageLoadActions();		
		FloatingLists();
		StickyLists();
		FitThumbScreenGSAP();
		ShowcaseSlider();
		ShowcaseWebglCore();
		ShowcaseCarousel();		
		FitThumbScreenWEBGL();		
		LazyLoad();				
		Portfolio();			
		Shortcodes();		
		JustifiedGrid();
		Lightbox();
		PlayVideo();
		ContactForm();
		// ContactMap();
		CustomFunction();
		
	}//End Load Via Ajax
	
});	


var LoadViaAjax = window.LoadViaAjax;	
	
	
