/*--------------------------------------------------
Function Contact Formular
---------------------------------------------------*/	
		
	function ContactForm() {	
	
		// if( $('#contact-formular').length > 0 ){
			
		// 	$('#contactform').submit(function(){
		// 		var action = $(this).attr('action');
		// 		$("#message").slideUp(750,function() {
		// 			$('#message').hide();
		// 			$('#submit').attr('disabled','disabled');		
		// 			$.post(action, {
		// 				name: $('#name').val(),
		// 				email: $('#email').val(),
		// 				comments: $('#comments').val(),
		// 				verify: $('#verify').val()
		// 			},
		// 			function(data){
		// 				document.getElementById('message').innerHTML = data;
		// 				$('#message').slideDown('slow');
		// 				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
		// 				$('#submit').removeAttr('disabled');
		// 				if(data.match('success') != null) $('#contactform').slideUp('slow');		
		// 			}
		// 		);		
		// 		});		
		// 		return false;		
		// 	});		
		// }

		if( $('#contact-laminar').length > 0 ) {

			$('#contactform').submit(function(e) {

				e.preventDefault();
				
				var form = $(this);
				var url = form.attr('action');
				form.find('input#name').attr('disabled','disabled');
				form.find('input#email').attr('disabled','disabled');
				form.find('textarea#message').attr('disabled','disabled');
				form.find('input#submit').attr('disabled','disabled');
				form.find('input#submit').attr('value','Sending...');

				$.post(url, {
					name: form.find('input#name').val().trim(),
					email: form.find('input#email').val().trim(),
					message: form.find('textarea#message').val().trim()
				}, null, "json")
			  	.then(function(response) {
					form.find('input#name').removeAttr('disabled');
					form.find('input#name').val('');
					form.find('input#email').removeAttr('disabled');
					form.find('input#email').val('');
					form.find('textarea#message').removeAttr('disabled');
					form.find('textarea#message').val('');
					form.find('input#submit').removeAttr('disabled');
					form.find('input#submit').attr('value','Send Message');
					$('#contact-laminar').find('#form-message').append('<p><mark>Your message has been sent! We\'ll be in touch soon.</mark></p><hr/>');
				})
				.catch(function(response) {
					form.find('input#name').removeAttr('disabled');
					form.find('input#name').val('');
					form.find('input#email').removeAttr('disabled');
					form.find('input#email').val('');
					form.find('textarea#message').removeAttr('disabled');
					form.find('textarea#message').val('');
					form.find('input#submit').removeAttr('disabled');
					form.find('input#submit').attr('value','Send Message');
					$('#contact-laminar').find('#form-message').append('<p><mark>Something went wrong! Please try again.</mark></p><hr/>');
				});

			})

		}
		

	}//End ContactForm	


/*--------------------------------------------------
Function Contact Map
---------------------------------------------------*/	
		
	function ContactMap() {	
	
		if( jQuery('#map_canvas').length > 0 ){					
			var latlng = new google.maps.LatLng(43.270441,6.640888);
			var settings = {
				zoom: 14,
				center: new google.maps.LatLng(43.270441,6.640888),
				mapTypeControl: false,
				scrollwheel: false,
				draggable: true,
				panControl:false,
				scaleControl: false,
				zoomControl: false,
				streetViewControl:false,
				navigationControl: false};			
				var newstyle = [
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"saturation": 36
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 40
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						},
						{
							"weight": 1.2
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 21
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 29
						},
						{
							"weight": 0.2
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 18
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 19
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						}
					]
				}
			];
			var mapOptions = {
				styles: newstyle,
				mapTypeControlOptions: {
					 mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'holver']
				}
			};
			var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
			var mapType = new google.maps.StyledMapType(newstyle, { name:"Grayscale" });    
				map.mapTypes.set('holver', mapType);
				map.setMapTypeId('holver');
						
			
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});	
			var contentString = '<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h4 id="firstHeading" class="firstHeading" style="color:#000!important; font-weight:600; margin-bottom:0px;">Hello Friend!</h4>'+
				'<div id="bodyContent">'+
				'<p color:#999; font-size:14px; margin-bottom:10px">Here we are. Come to drink a coffee!</p>'+
				'</div>'+
				'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});	
			var companyImage = new google.maps.MarkerImage('images/marker.png',
				new google.maps.Size(58,63),<!-- Width and height of the marker -->
				new google.maps.Point(0,0),
				new google.maps.Point(35,20)<!-- Position of the marker -->
			);
			var companyPos = new google.maps.LatLng(43.270441,6.640888);	
			var companyMarker = new google.maps.Marker({
				position: companyPos,
				map: map,
				icon: companyImage,               
				title:"Our Office",
				zIndex: 3});	
			google.maps.event.addListener(companyMarker, 'click', function() {
				infowindow.open(map,companyMarker);
			});	
		}
		
		return false
	
	}//End ContactMap