$(document).ready(function(){

//Карусель для раздела Выполненные проекты
	
	var owl_1 = $("#owl-carousel1");
	owl_1.owlCarousel({
		loop: true,
		nav : false,
		mouseDrag: false,
		margin: 16,
		paginationNumbers: true,
		navText: ['←',
              '→'],
		responsive : { 
	    
	     0: { 
	      items: 3, 
	     }, 
     
	     1639: { 
	      items: 3, 
	      }, 
	    
	    }
		
	});


	$('#js-prev').on('click', function() {
	
		owl_1.trigger('prev.owl.carousel');
	
	});

	$('#js-next').on('click', function() {
	
		owl_1.trigger('next.owl.carousel');
	
	});




	// var owl_2 = $("#owl-carousel2");
	// owl_2.owlCarousel({
	// 	loop: true,
	// 	nav : false,
	// 	mouseDrag: false,
	// 	margin: 16,
	// 	paginationNumbers: true,
	// 	navText: ['←',
 //              '→'],
	// 	responsive : { 
	    
	//      0: { 
	//       items: 3, 
	//      }, 
     
	//      1639: { 
	//       items: 3, 
	//       }, 
	    
	//     }
		
	// });


	// $('#js-prev').on('click', function() {
	
	// 	owl_2.trigger('prev.owl.carousel');
	
	// });

	// $('#js-next').on('click', function() {
	
	// 	owl_2.trigger('next.owl.carousel');
	
	// });

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_1').css('background', 'url(../img/carousel/01_novosibirsk.png)');
		$('.slide_a_1 .description_background').css('background', 'url(../img/carousel/01_novosibirsk_bg.png)');
		$('.slide_a_1 .day').text('29');
		$('.slide_a_1 .month').text('мая');
		$('.slide_a_1 .week_day').text('пятница');
		$('.slide_a_1 .town').text('Новосибирск');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_1').css('background', 'url(../img/carousel/01_novosibirsk.png)');
		$('.slide_a_1 .description_background').css('background', 'url(../img/carousel/01_novosibirsk_bg.png)');
		$('.slide_a_1 .day').text('28');
		$('.slide_a_1 .month').text('июня');
		$('.slide_a_1 .week_day').text('воскресенье');
		$('.slide_a_1 .town').text('Новосибирск');
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_2').css('background', 'url(../img/carousel/03_tomsk.png)');
		$('.slide_a_2 .description_background').css('background', 'url(../img/carousel/03_tomsk_bg.png)');
		$('.slide_a_2 .day').text('30');
		$('.slide_a_2 .month').text('мая');
		$('.slide_a_2 .week_day').text('суббота');
		$('.slide_a_2 .town').text('Томск');
		$('.slide_a_2 .description_text').html('<p>Томск – это старейший из крупных городов Западной Сибири, который долгое время являлся центром огромной Томской губернии. Томск знаменит своими университетами (его даже называют «Русским Кембриджем») и деревянными домами с удивительными резными украшениями. В годы правления Сталина север нынешней Томской области стал одним из центров массовых ссылок репрессированных граждан СССР, и мы посетим тюремный музей, рядом с которым расположены памятные знаки различных этнических групп, пострадавших в годы репрессий. А, кроме того, Томск – это место проживания коренного населения, сибирских татар, поэтому мы сможем заглянуть в мечеть, которая находится в Татарской слободе.</p>');
		$('.slide_a_2 .description_text').append('<p>Вечером мы отправимся в удивительный кукольный театр, в котором показывают умные спектакли, а утром, ещё по дороге в Томск мы заедем в старинное русское село Турнаево, где полюбуемся деревянной церковью святого Серафима Саровского.</p>');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_2').css('background', 'url(../img/carousel/02_kolywan.png)');
		$('.slide_a_2 .description_background').css('background', 'url(../img/carousel/02_kolywan_bg.png)');
		$('.slide_a_2 .day').text('29');
		$('.slide_a_2 .month').text('июня');
		$('.slide_a_2 .week_day').text('понедельник');
		$('.slide_a_2 .town').text('Колывань');
		$('.slide_a_2 .description_text').html('<p>Ещё каких-то 120-130 лет назад самым развитым городом в этом месте Приобья была Колывань, расположенная в 50 километрах от нынешнего Новосибирска. С появлением нового города Колывань потеряла своё значение, но именно это позволило ей сохранить облик исторического поселения начала XX века. Полдня мы посвятим прогулке по этому городку, а также посещению Александро-Невского женского монастыря.</p>');
		$('.slide_a_2 .description_text').append('<p>Рядом с Колыванью расположено село Юрт-Ора, где живут чатские татары, представители коренного населения Сибири. Мы увидим реконструкцию усадьбы зажиточного татарина, узнаем о традиционных ремёслах чатов, а также посетим мечеть. Здесь же нас ждёт обед-дегустация блюд татарской кухни.</p>');
		$('.slide_a_2 .description_text').append('<p>После возвращения в город мы посетим Новосибирский зоопарк, где в сосновом лесу для зверей созданы такие условия содержания, которые позволяют им не только чувствовать себя комфортно, но и регулярно приносить потомство.</p>');
	})	

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_3').css('background', 'url(../img/carousel/03_tomsk.png)');
		$('.slide_a_3 .description_background').css('background', 'url(../img/carousel/04_tomsk_bg.png)');
		$('.slide_a_3 .day').text('31');
		$('.slide_a_3 .month').text('мая');
		$('.slide_a_3 .week_day').text('воскресенье');
		$('.slide_a_3 .town').text('Томск');
		$('.slide_a_3 .description_text').html('<p>Томск потребует от нас двух дней пребывания. Во второй день мы продолжим прогулки по городу, покатаемся на небольшом теплоходе по реке Томь и осмотрим Губернаторский квартал, в котором в конце XIX века бывал великий русский писатель Антон Павлович Чехов. После этого мы поднимемся на невысокую Воскресенскую гору, где посетим музей города (с его смотровой башни открывается великолепный вид на Томск), католический костёл, который был построен высланными в Сибирь поляками, и красивейшую православную церковь, возведённую в стиле «сибирского барокко» в XVIII веке. После этого мы проследуем в один из старейших в Сибири монастырей, Богородице-Алексиевский, где вы услышите мистическую историю о православном святом старце Фёдоре Кузьмиче.</p>');
		$('.slide_a_3 .description_text').append('<p>В течение этих двух дней в Томске мы будем знакомиться с традиционной русской сибирской кухней, а в завершающий вечер нас ждёт джаз в музыкальном кафе.</p>');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_3').css('background', 'url(../img/carousel/03_tomsk.png)');
		$('.slide_a_3 .description_background').css('background', 'url(../img/carousel/03_tomsk_bg.png)');
		$('.slide_a_3 .day').text('30');
		$('.slide_a_3 .month').text('июня');
		$('.slide_a_3 .week_day').text('вторник');
		$('.slide_a_3 .town').text('Томск');
		$('.slide_a_3 .description_text').html('<p>Томск – это старейший из крупных городов Западной Сибири, который долгое время являлся центром огромной Томской губернии. Томск знаменит своими университетами (его даже называют «Русским Кембриджем») и деревянными домами с удивительными резными украшениями. В годы правления Сталина север нынешней Томской области стал одним из центров массовых ссылок репрессированных граждан СССР, и мы посетим тюремный музей, рядом с которым расположены памятные знаки различных этнических групп, пострадавших в годы репрессий. А, кроме того, Томск – это место проживания коренного населения, сибирских татар, поэтому мы сможем заглянуть в мечеть, которая находится в Татарской слободе.</p>');
		$('.slide_a_3 .description_text').append('<p>Вечером мы отправимся в удивительный кукольный театр, в котором показывают умные спектакли, а утром, ещё по дороге в Томск мы заедем в старинное русское село Турнаево, где полюбуемся деревянной церковью святого Серафима Саровского.</p>');
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_4').css('background', 'url(../img/carousel/05_pisanica.png)');
		$('.slide_a_4 .description_background').css('background', 'url(../img/carousel/05_pisanica_bg.png)');
		$('.slide_a_4 .day').text('1');
		$('.slide_a_4 .month').text('июня');
		$('.slide_a_4 .week_day').text('понедельник');
		$('.slide_a_4 .town').text('Томская писаница');
		$('.slide_a_4 .description_text').html('<p>«Томская писаница» - это музей-заповедник, созданный в таёжном лесу вблизи выходящей из реки Томь скалы «Писаной». Такое название она получила из-за нанесённых на её поверхность петроглифов, древних рисунков эпохи неолита. Сейчас в музее под открытым небом помимо собственно петроглифической выставки, собраны экспонаты, демонстрирующие быт и культуру древних народов, а также коренного населения южного Притомья – шорцев.</p>');
		$('.slide_a_4 .description_text').append('<p>Заповедник «Томская писаница» находится рядом с городом Кемерово, столицей главного угольного региона России, Кузбасса, поэтому по пути в музей-заповедник и обратно мы сможем прогуляться по кемеровской Притомской набережной, а также посетить музей шахтёрского дела «Красная Горка» (где вы сможете почувствовать себя настоящими шахтёрами, спустившимися в шахту!) и познакомиться с творением великого российского скульптора Эрнста Неизвестного «Память шахтёрам Кузбасса».</p>');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_4').css('background', 'url(../img/carousel/04_tomsk.png)');
		$('.slide_a_4 .description_background').css('background', 'url(../img/carousel/04_tomsk_bg.png)');
		$('.slide_a_4 .day').text('1');
		$('.slide_a_4 .month').text('июля');
		$('.slide_a_4 .week_day').text('среда');
		$('.slide_a_4 .town').text('Томск');
		$('.slide_a_4 .description_text').html('<p>Томск потребует от нас двух дней пребывания. Во второй день мы продолжим прогулки по городу, покатаемся на небольшом теплоходе по реке Томь и осмотрим Губернаторский квартал, в котором в конце XIX века бывал великий русский писатель Антон Павлович Чехов. После этого мы поднимемся на невысокую Воскресенскую гору, где посетим музей города (с его смотровой башни открывается великолепный вид на Томск), католический костёл, который был построен высланными в Сибирь поляками, и красивейшую православную церковь, возведённую в стиле «сибирского барокко» в XVIII веке. После этого мы проследуем в один из старейших в Сибири монастырей, Богородице-Алексиевский, где вы услышите мистическую историю о православном святом старце Фёдоре Кузьмиче.</p>');
		$('.slide_a_4 .description_text').append('<p>В течение этих двух дней в Томске мы будем знакомиться с традиционной русской сибирской кухней, а в завершающий вечер нас ждёт джаз в музыкальном кафе.</p>');
	})
	

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_5').css('background', 'url(../img/carousel/06_akadem.jpg)');
		$('.slide_a_5 .description_background').css('background', 'url(../img/carousel/06_akadem_bg.jpg)');
		$('.slide_a_5 .day').text('2');
		$('.slide_a_5 .month').text('июня');
		$('.slide_a_5 .week_day').text('вторник');
		$('.slide_a_5 .town').text('Академгородок');
		$('.slide_a_5 .description_text').html('<p>Мы снова вернулись в Новосибирск. На сей раз, мы познакомимся с Академгородком, одним из главных научных центров России, а заодно – самым уютным и приветливым районом Новосибирска, расположенном в лесу. Академгородок – это два десятка научно-исследовательских институтов, занимающихся решением проблем, стоящих перед мировой наукой, университет, который готовит кадры для этих научных центров, а также Технопарк, где происходит внедрение разработок сибирских учёных в практическую жизнь. Кроме того, в Академгородке находится несколько легендарных музеев, которые мы посетим: музей этнографии и археологии, музей железнодорожной техники, архитектурно-исторический музей. </p>');
		$('.slide_a_5 .description_text').append('<p>Вечером мы отправимся в ещё один музей, частный «Интегральный музей Академгородка», где поболтаем с его хозяйкой, Настей Безносовой, дочерью одного из главных вольнодумцев Академгородка 60-х годов Германа Безносова.</p>');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_5').css('background', 'url(../img/carousel/05_pisanica.png)');
		$('.slide_a_5 .description_background').css('background', 'url(../img/carousel/05_pisanica_bg.png)');
		$('.slide_a_5 .day').text('2');
		$('.slide_a_5 .month').text('июля');
		$('.slide_a_5 .week_day').text('четверг');
		$('.slide_a_5 .town').text('Томская писаница');
		$('.slide_a_5 .description_text').html('<p>«Томская писаница» - это музей-заповедник, созданный в таёжном лесу вблизи выходящей из реки Томь скалы «Писаной». Такое название она получила из-за нанесённых на её поверхность петроглифов, древних рисунков эпохи неолита. Сейчас в музее под открытым небом помимо собственно петроглифической выставки, собраны экспонаты, демонстрирующие быт и культуру древних народов, а также коренного населения южного Притомья – шорцев.</p>');
		$('.slide_a_5 .description_text').append('<p>Заповедник «Томская писаница» находится рядом с городом Кемерово, столицей главного угольного региона России, Кузбасса, поэтому по пути в музей-заповедник и обратно мы сможем прогуляться по кемеровской Притомской набережной, а также посетить музей шахтёрского дела «Красная Горка» (где вы сможете почувствовать себя настоящими шахтёрами, спустившимися в шахту!) и познакомиться с творением великого российского скульптора Эрнста Неизвестного «Память шахтёрам Кузбасса».</p>');
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_6').css('background', 'url(../img/carousel/02_kolywan.png)');
		$('.slide_a_6 .description_background').css('background', 'url(../img/carousel/02_kolywan_bg.png)');
		$('.slide_a_6 .day').text('3');
		$('.slide_a_6 .month').text('июня');
		$('.slide_a_6 .week_day').text('среда');
		$('.slide_a_6 .town').text('Колывань');
		$('.slide_a_6 .description_text').html('<p>Ещё каких-то 120-130 лет назад самым развитым городом в этом месте Приобья была Колывань, расположенная в 50 километрах от нынешнего Новосибирска. С появлением нового города Колывань потеряла своё значение, но именно это позволило ей сохранить облик исторического поселения начала XX века. Полдня мы посвятим прогулке по этому городку, а также посещению Александро-Невского женского монастыря.</p>');
		$('.slide_a_6 .description_text').append('<p>Рядом с Колыванью расположено село Юрт-Ора, где живут чатские татары, представители коренного населения Сибири. Мы увидим реконструкцию усадьбы зажиточного татарина, узнаем о традиционных ремёслах чатов, а также посетим мечеть. Здесь же нас ждёт обед-дегустация блюд татарской кухни.</p>');
		$('.slide_a_6 .description_text').append('<p>После возвращения в город мы посетим Новосибирский зоопарк, где в сосновом лесу для зверей созданы такие условия содержания, которые позволяют им не только чувствовать себя комфортно, но и регулярно приносить потомство.</p>');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_6').css('background', 'url(../img/carousel/06_akadem.jpg)');
		$('.slide_a_6 .description_background').css('background', 'url(../img/carousel/06_akadem_bg.jpg)');
		$('.slide_a_6 .day').text('3');
		$('.slide_a_6 .month').text('июля');
		$('.slide_a_6 .week_day').text('пятница');
		$('.slide_a_6 .town').text('Академгородок');
		$('.slide_a_6 .description_text').html('<p>Мы снова вернулись в Новосибирск. На сей раз, мы познакомимся с Академгородком, одним из главных научных центров России, а заодно – самым уютным и приветливым районом Новосибирска, расположенном в лесу. Академгородок – это два десятка научно-исследовательских институтов, занимающихся решением проблем, стоящих перед мировой наукой, университет, который готовит кадры для этих научных центров, а также Технопарк, где происходит внедрение разработок сибирских учёных в практическую жизнь. Кроме того, в Академгородке находится несколько легендарных музеев, которые мы посетим: музей этнографии и археологии, музей железнодорожной техники, архитектурно-исторический музей.</p>');
		$('.slide_a_6 .description_text').append('<p>Вечером мы отправимся в ещё один музей, частный «Интегральный музей Академгородка», где поболтаем с его хозяйкой, Настей Безносовой, дочерью одного из главных вольнодумцев Академгородка 60-х годов Германа Безносова.</p>');
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_6').css('background', 'url(../img/carousel/02_kolywan.png)');
		$('.slide_a_6 .description_background').css('background', 'url(../img/carousel/02_kolywan_bg.png)');
		$('.slide_a_6 .day').text('3');
		$('.slide_a_6 .month').text('июня');
		$('.slide_a_6 .week_day').text('среда');
		$('.slide_a_6 .town').text('Колывань');
		$('.slide_a_6 .description_text').html('<p>Ещё каких-то 120-130 лет назад самым развитым городом в этом месте Приобья была Колывань, расположенная в 50 километрах от нынешнего Новосибирска. С появлением нового города Колывань потеряла своё значение, но именно это позволило ей сохранить облик исторического поселения начала XX века. Полдня мы посвятим прогулке по этому городку, а также посещению Александро-Невского женского монастыря.</p>');
		$('.slide_a_6 .description_text').append('<p>Рядом с Колыванью расположено село Юрт-Ора, где живут чатские татары, представители коренного населения Сибири. Мы увидим реконструкцию усадьбы зажиточного татарина, узнаем о традиционных ремёслах чатов, а также посетим мечеть. Здесь же нас ждёт обед-дегустация блюд татарской кухни.</p>');
		$('.slide_a_6 .description_text').append('<p>После возвращения в город мы посетим Новосибирский зоопарк, где в сосновом лесу для зверей созданы такие условия содержания, которые позволяют им не только чувствовать себя комфортно, но и регулярно приносить потомство.</p>');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_6').css('background', 'url(../img/carousel/06_akadem.jpg)');
		$('.slide_a_6 .description_background').css('background', 'url(../img/carousel/06_akadem_bg.jpg)');
		$('.slide_a_6 .day').text('3');
		$('.slide_a_6 .month').text('июля');
		$('.slide_a_6 .week_day').text('пятница');
		$('.slide_a_6 .town').text('Академгородок');
		$('.slide_a_6 .description_text').html('<p>Мы снова вернулись в Новосибирск. На сей раз, мы познакомимся с Академгородком, одним из главных научных центров России, а заодно – самым уютным и приветливым районом Новосибирска, расположенном в лесу. Академгородок – это два десятка научно-исследовательских институтов, занимающихся решением проблем, стоящих перед мировой наукой, университет, который готовит кадры для этих научных центров, а также Технопарк, где происходит внедрение разработок сибирских учёных в практическую жизнь. Кроме того, в Академгородке находится несколько легендарных музеев, которые мы посетим: музей этнографии и археологии, музей железнодорожной техники, архитектурно-исторический музей.</p>');
		$('.slide_a_6 .description_text').append('<p>Вечером мы отправимся в ещё один музей, частный «Интегральный музей Академгородка», где поболтаем с его хозяйкой, Настей Безносовой, дочерью одного из главных вольнодумцев Академгородка 60-х годов Германа Безносова.</p>');
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_7 .month').text('июня');
		$('.slide_a_7 .week_day').text('четверг');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_7 .month').text('июля');
		$('.slide_a_7 .week_day').text('суббота');		
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_8 .month').text('июня');
		$('.slide_a_8 .week_day').text('пятница');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_8 .month').text('июля');
		$('.slide_a_8 .week_day').text('воскресенье');		
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_9').css('background', 'url(../img/carousel/11_biysk.jpg)');
		$('.slide_a_9 .description_background').css('background', 'url(../img/carousel/11_biysk_bg.jpg)');
		$('.slide_a_9 .day').text('6');
		$('.slide_a_9 .month').text('июня');
		$('.slide_a_9 .week_day').text('суббота');
		$('.slide_a_9 .town').text('Бийск');
		$('.slide_a_9 .description_text').html('<p>Бийск – это второй по значимости город Алтайского края, настоящие ворота в Горный Алтай и Монголию. Собственно, торговля с Монголией и «инородцами» Алтая в XIX веке и легли в основу богатства этого города. Помимо исторического центра и замечательного городского музея, мы посетим ещё и место рождения реки Обь – она образуется в окрестностях Бийска путём слияния двух рек, Бии и Катуни.</p>');
		$('.slide_a_9 .description_text').append('<p>В этот день мы познакомимся не только с Бийском, но и с жизнью и творчеством одного из самых интересных уроженцев Сибири, писателя, кинорежиссёра и актёра Василия Шукшина, который родился недалеко от Бийска, но был популярен во всей России, став настоящим воплощением художественного образа «простого русского мужика». Мы посетим мемориальный комплекс, посвящённый Шукшину, в его родной деревне Сростки на реке Катунь. Это очень красивое село, жители которого бережно хранят память о своём знаменитом земляке.</p>');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_9').css('background', 'url(../img/carousel/09_belokuriha.jpg)');
		$('.slide_a_9 .description_background').css('background', 'url(../img/carousel/09_belokuriha_bg.jpg)');
		$('.slide_a_9 .day').text('6');
		$('.slide_a_9 .month').text('июля');
		$('.slide_a_9 .week_day').text('понедельник');
		$('.slide_a_9 .town').text('Белокуриха');
		$('.slide_a_9 .description_text').html('<p>Сегодня – день свободный от длительных переездов. Со вчерашнего вечера мы находимся на территории города-курорта Белокуриха, стоит познакомиться с его достопримечательностями. Белокуриха – это бальнеологический курорт федерального значения (лечебным фактором являются природные источники радоновых вод), расположенный в узкой долине одноимённой реки. Живописное ущелье застроено санаториями и домами отдыха, а прогулки пешком, на квадроциклах или джипах по невысоким горам или подъём на них с помощью канатной дороги – это одно из развлечений Белокурихи. Сегодня мы с вами проедем на джипах к скалам «Четыре брата», «Черепаха», «Врата Рая», «Скала желаний», а также поднимемся канатной дорогой на гору «Церковка», откуда откроются великолепные виды на Белокуриху и её окрестности.</p>');
		$('.slide_a_9 .description_text').append('<p>А ещё сегодня нас ждёт экзотический ужин – из свежевыловленной вами и приготовленной на живом огне рыбы.</p>');
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_10').css('background', 'url(../img/carousel/17_troitsa.png)');
		$('.slide_a_10 .description_background').css('background', 'url(../img/carousel/17_troitsa_bg.png)');
		$('.slide_a_10 .day').text('7');
		$('.slide_a_10 .month').text('июня');
		$('.slide_a_10 .week_day').text('воскресенье');
		$('.slide_a_10 .town').text('Троица');
		$('.slide_a_10 .description_text').html('<p>Сегодняшний день – праздничный. В это воскресенье Русская Православная церковь и все православные христиане отмечает Троицу, один из главных религиозных праздников. Это праздник единства Бога-Отца, Бога-Сына и Бога-Духа Святого. На Руси празднование Троицы чем-то напоминает празднование Рождества, поскольку символом этого праздника так же является дерево – русская берёза. Её ветками и листвой украшают не только дома, но и церкви.</p>');
		$('.slide_a_10 .description_text').append('<p>Мы посетим село Топольное, расположенное недалеко от Бийска, где живут «старообрядцы» - потомки людей, не принявших в XVII веке реформу Русской Православной церкви и изгнанные за это в Сибирь. У «старообрядцев» (или «кержаков») собственная система нравственных ценностей, они строго соблюдают религиозные каноны, живут закрытыми общинами.</p>');
		$('.slide_a_10 .description_text').append('<p>В Топольном мы увидим празднование Троицы таким, каким оно было в ту эпоху, когда Русь ещё не испытывала такого влияния Европы.</p>');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_10').css('background', 'url(../img/carousel/10_kupala.jpg)');
		$('.slide_a_10 .description_background').css('background', 'url(../img/carousel/10_kupala_bg.jpg)');
		$('.slide_a_10 .day').text('7');
		$('.slide_a_10 .month').text('июля');
		$('.slide_a_10 .week_day').text('вторник');
		$('.slide_a_10 .town').text('Купала');
		$('.slide_a_10 .description_text').html('<p>Сегодня – праздничный день. 7 июля Русская Православная церковь отмечает Рождество Иоанна Предтечи, или, как его называют в народе – День Ивана Купалы. Это удивительный праздник, «два в одном», поскольку изначально это был языческий славянский праздник очищения водой и огнём, христианская церковь лишь нашла ему позже объяснение в своей системе понятий. В этот день принято купаться, прыгать через огонь, хулиганить, любить. А Купальская ночь считается волшебной – ведь именно тогда должен расцвести цветок папоротника. Нашедший его будет богат и счастлив всю жизнь.</p>');
		$('.slide_a_10 .description_text').append('<p>В Сибири есть свои традиции празднования Ивана Купалы – редко кому в этот день удаётся остаться сухим, ведь водные битвы с применением различных «орудий» идут повсюду – и в городах, и в сёлах.</p>');
		$('.slide_a_10 .description_text').append('<p>Мы с вами увидим два празднования Дня Ивана Купалы: днём – на Киреевом озере, а вечером, когда зажигаются купальские костры и расцветает папоротник – вблизи Бийска.</p>');
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_11').css('background', 'url(../img/carousel/09_belokuriha.jpg)');
		$('.slide_a_11 .description_background').css('background', 'url(../img/carousel/09_belokuriha_bg.jpg)');
		$('.slide_a_11 .day').text('8');
		$('.slide_a_11 .month').text('июня');
		$('.slide_a_11 .week_day').text('понедельник');
		$('.slide_a_11 .town').text('Белокуриха');
		$('.slide_a_11 .description_text').html('<p>Сегодня – день свободный от длительных переездов. Мы уже третьи сутки находимся на территории города-курорта Белокуриха. Настала пора познакомиться с его достопримечательностями. Белокуриха – это бальнеологический курорт федерального значения (лечебным фактором являются природные источники радоновых вод), расположенный в узкой долине одноимённой реки. Живописное ущелье застроено санаториями и домами отдыха, а прогулки пешком, на квадроциклах или джипах по невысоким горам или подъём на них с помощью канатной дороги – это одно из развлечений Белокурихи. Сегодня мы с вами проедем на джипах к скалам «Четыре брата», «Черепаха», «Врата Рая», «Скала желаний», а также поднимемся канатной дорогой на гору «Церковка», откуда откроются великолепные виды на Белокуриху и её окрестности.</p>');
		$('.slide_a_11 .description_text').append('<p>А ещё сегодня нас ждёт экзотический ужин – из свежевыловленной вами и приготовленной на живом огне рыбы. </p>');	
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_11').css('background', 'url(../img/carousel/11_biysk.jpg)');
		$('.slide_a_11 .description_background').css('background', 'url(../img/carousel/11_biysk_bg.jpg)');
		$('.slide_a_11 .day').text('8');
		$('.slide_a_11 .month').text('июля');
		$('.slide_a_11 .week_day').text('среда');
		$('.slide_a_11 .town').text('Бийск');
		$('.slide_a_11 .description_text').html('<p>Бийск – это второй по значимости город Алтайского края, настоящие ворота в Горный Алтай и Монголию. Собственно, торговля с Монголией и «инородцами» Алтая в XIX веке и легли в основу богатства этого города. Помимо исторического центра и замечательного городского музея, мы посетим ещё и место рождения реки Обь – она образуется в окрестностях Бийска путём слияния двух рек, Бии и Катуни. </p>');
		$('.slide_a_11 .description_text').append('<p>В этот день мы познакомимся не только с Бийском, но и с жизнью и творчеством одного из самых интересных уроженцев Сибири, писателя, кинорежиссёра и актёра Василия Шукшина, который родился недалеко от Бийска, но был популярен во всей России, став настоящим воплощением художественного образа «простого русского мужика». Мы посетим мемориальный комплекс, посвящённый Шукшину, в его родной деревне Сростки на реке Катунь. Это очень красивое село, жители которого бережно хранят память о своём знаменитом земляке.</p>');
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_12 .month').text('июня');
		$('.slide_a_12 .week_day').text('вторник');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_12 .month').text('июля');
		$('.slide_a_12 .week_day').text('четверг');		
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_13 .month').text('июня');
		$('.slide_a_13 .week_day').text('среда');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_13 .month').text('июля');
		$('.slide_a_13 .week_day').text('пятница');		
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_14 .month').text('июня');
		$('.slide_a_14 .week_day').text('четверг');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_14 .month').text('июля');
		$('.slide_a_14 .week_day').text('суббота');		
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_15 .month').text('июня');
		$('.slide_a_15 .week_day').text('пятница');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_15 .month').text('июля');
		$('.slide_a_15 .week_day').text('воскресенье');		
	})

	$('#block_2_troitsa').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_ivan_kupala').removeClass('button_active');

		$('.slide_a_16 .month').text('июня');
		$('.slide_a_16 .week_day').text('суббота');
	})

	$('#block_2_ivan_kupala').on('click', function(){
		$(this).addClass('button_active');
		$('#block_2_troitsa').removeClass('button_active');

		$('.slide_a_16 .month').text('июля');
		$('.slide_a_16 .week_day').text('понедельник');		
	})


	$('.block_2 .slide .js_arrow_info').on('click', function() {
  		var id = '#'+$(this)[0]['parentNode']['id'];
  		$(id +' .description_background').show();
		$(id + ' .description_background').animate({height: "100%"}, 300);
  		$(id + ' .description').show();
  		$(id + ' .description').animate({height: "100%"}, 300);		
		$('.block_2 .owl-dots').css('z-index', -1);
		$('.block_2 .js_arrow').css('z-index', 0);	
	})

	$('.block_2 .slide').on('click', function() {
		var id = '#'+ $(this)[0]['id'];
		$(id +' .description_background').show();
		$(id + ' .description_background').animate({height: "100%"}, 300);
  		$(id + ' .description').show();
  		$(id + ' .description').animate({height: "100%"}, 300);		
		$('.block_2 .owl-dots').css('z-index', -1);
		$('.block_2 .js_arrow').css('z-index', 0);	
	});


	$('.block_2 .slide').on('mouseleave', function() {
		var id = '#'+ $(this)[0]['id'];
		$(id + ' .description_background').fadeOut(300);
		$(id +  ' .description_background').animate({height: "0"}, 300);
		$(id + ' .description').fadeOut();
		$(id + ' .description').animate({height: "0"}, 300);
		
		$('.block_2 .owl-dots').css('z-index', 1);
		$('.block_2 .js_arrow').css('z-index', 2);
	});

	$('.block_2 .description_button').on('click', function(){
		$('.block_1 #To_contact').trigger();
	})


function resize_prev_next(){
	var s=$("div.owl-dot").length;//Определяется, сколько кнопок пагинации
	console.log(s);
	if(	$( window ).width() >=1735) {
	var	p=s-1;
	var center_block=1639;
	}
	else if( ( $( window ).width() <1735 ) && ($( window ).width() >=1260) ) {
		p=s;
		var center_block=$( window ).width()-50-50; //Ширина центрального div
	}
	else{
		p=s;
		var center_block=1260-50-50;//Ширина центрального div
	}

	var l=12*(p-1)+25+16*(p-1);
	// var l=12*(p-1);
	var left=center_block/2-l/2-36-100;
	var right=center_block/2+l/2+100;

	$('#js-prev').css('left', left);
	$('#js-next').css('left', right);
}


resize_prev_next();
$( window ).resize(function(){
	resize_prev_next();
});



/****************************************************************/
/***************Закрытие попапа после отправки сообщения*********/
/****************************************************************/

   function dt_message_close(){
      $('#mess_send_result').hide();
   }


/****************************************************************/
/******************Выбор языка сайта*****************************/
/****************************************************************/

$('#select_lang_open').on('click', function(){
	$('#select_lang').fadeToggle();
})

})