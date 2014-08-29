(function(){
	var myResumeServices = angular.module('myResumeServices', []);
	
	/**************************************
	* Data service
	***************************************/
	
	myResumeServices.factory('myResumeData', function(utility){
		return {
			getProfile : function() {
				var profileData = {
					title            : 'Front End developer !',
					name             : 'Xavier Artot',
					birthDate        : '12/06/1970',
					startWorkingDate : '01/01/2009',
					experience       : "$1 ans, $2 ans d'expérience"
				};
				var age = utility.getDurationInYears(false, profileData.birthDate);
				var workExperience = utility.getDurationInYears(true, profileData.startWorkingDate);
				var experience = utility.replaceParameters(profileData.experience, [age, workExperience]);
				var profile = {
					title      : profileData.title,
					name  	   : profileData.name,
					experience : experience
				};
				return profile;
			},
			getTagCloud : function() {
				var tagCloud = [
					{label:'HTML5', level:0}, {label:'AJAX', level:0}, {label:'WordPress', level:2}, {label:'CSS3', level:0}, 
					{label:'CSS', level:0}, {label:'Shell', level:1},{label:'Unix', level:0}, {label:'SQL', level:0}, {label:'REST', level:0},
					{label:'Javascript', level:0}, {label:'JQuery', level:1}, {label:'AngularJS', level:0}, {label:'JSON', level:0},
					{label:'PHP', level:0}, {label:'Apache', level:0}
				];
				return tagCloud;
			},
			getSkills : function() {
				var skills = [
					{
					 title:'Web',
					 specificSkills:['Javascript', 'JQuery', 'AJAX', 'JSON', 'HTML5', 'CSS3', 'AngularJS', 'Twitter Bootstrap', 'LESS', 'PHP', 'Grunt']
					},
					{
					 title:'Langages et outils',
					 specificSkills:['Grunt', 'Vim', 'Git', 'shell Unix']
					},
					{
					 title:'Serveurs',
					 specificSkills:['Apache', 'NodeJS (lab)']
					},
					{
					 title:'Base de donnees',
					 specificSkills:['MySql', 'SQL']
					},
					{
					 title:'Méthodologies ',
					 specificSkills:['UML']
					},
					{
					 title:'Systèmes',
					 specificSkills:['Mac OS', 'Linux Debian']
					}
				];
				return skills;
			},
			getHobbies : function() {
				var hobbies = {
					hobby1 : {
						title : 'Sport',
						desc1 : 'Swimming (every day) and soccer',
						desc2 : ''
					},
					hobby2 : {
						title : 'trip',
						desc1 : 'De nature curieux, je voyage régulièrement dans le but de découvrir de nouvelles cultures.'
					},
					hobby3 : {
						title : 'Arte',
						desc1 : 'Je me passionne pour les arts modernes et les arts urbains. Je vais régulièrement voir des expositions (Warhol, Dali, Keith Haring, Banksy ...).',
						desc2 : 'De plus j\'assiste à des représentations théâtrales, les comédies de boulevard me plaisent particulièrement.'
					}
				};
				return hobbies;
			},
			getContact : function() {
				var contact = {
					form : {
						error   : 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer.',
						name    : 'Nom',
						email   : 'Email',
						message : 'Message',
						send    : 'Envoyer',
						confirm : {
							part1 : 'Thenk you for your message!',
							part2 : 'best regards',
							back  : 'Back to the form »'
						}
					},
					address : {
						city    : 'Austin',
						zipCode : '78702',
						email   : 'xavierartot[@]gmail.com'
					}
				};
				return contact;
			},
			getNavigation : function(){
				var nav = {
					profile : 'Profile',
					skills  : 'Skills',
					career  : 'Career',
					hobbies : 'Hobbies',
					contact : 'Contact'
				};
				return nav;
			},
			getTimeline : function(){
				var timeline = {
					lang    : 'fr',
          content : 'https://docs.google.com/spreadsheet/pub?key=0Agl_Dv6iEbDadHdKcHlHcTB5bzhvbF9iTWwyMmJHdkE&output=html'
            //'https://docs.google.com/spreadsheet/pub?key=0Aj1DRa-P1mk8dExmZUxzY2VzbzFUWm1jMnZJS09oZ0E&output=html' 
				}
				return timeline;
			},
			getLinks : function(){
				var links = {
					github   : 'https://github.com/xavierartot',
					linkedin : 'https://www.linkedin.com/profile/view?id=329656356&trk=nav_responsive_tab_profile',
					//twitter  : 'https://twitter.com/NicolasHuguet',
					resume   : 'data/resume.pdf'
				}
				return links;
			},
			getTechnos : function(){
				var technos = {
					img : [
						{
							src   : '/img/technos/angularjs.png',
							title : 'AngularJS'
						},
						{
							src   : '/img/technos/html5.png',
							title : 'HTML5'
						},
						{
							src   : '/img/technos/css3.png',
							title : 'CSS3'
						},
						{
							src   : '/img/technos/bootstrap.jpg',
							title : 'Twitter Bootstrap'
						},
						{
							src   : '/img/technos/ascensorjs.jpg',
							title : 'AscensorJS'
						}
					],
					source : {
						text     : 'Sources du site sur ',
						link     : 'https://github.com/ivierartot'
					}				
				}
				return technos;
			}
		};
	});
	
	/**************************************
	* Mail service
	***************************************/
	
	myResumeServices.factory('mailManager', function($http){
		return {
			getContactTemplates : function(){
				return {contactForm:'views/contactForm.html', contactConfirm:'views/contactConfirmation.html'};
			},
			submitContactForm : function(data, callbackSuccess, callbackError){
				$http.post('application/email.php', {name:data.name, email:data.email, message:data.message})
				.success(function(){
					callbackSuccess();
				})
				.error(function(){
					callbackError();
				});
			}
		};
	});
	
	/**************************************
	* Timeline service
	***************************************/
	
	myResumeServices.factory('timelineManager', function(){
		return {
			launchTimeline : function(dataUrl, lang){
				MY_RESUME.launchTimeline(dataUrl, lang);
			}
		};
	});
	
	/**************************************
	* Utility service
	***************************************/
	
	myResumeServices.factory('utility', function(){
		return {
			contains : function(value1, value2){
				return MY_RESUME.contains(value1, value2);
			},
			getDurationInYears : function(greater, startDate, endDate){
				return MY_RESUME.getDurationInYears(greater, startDate, endDate);
			},
			replaceParameters : function(string, values){
				return MY_RESUME.replaceParameters(string, values);
			}
		};
	});
	
	/**************************************
	* Loader management
	***************************************/
	
	// http method for which we want to display a spinner 
	var httpMethodWithSpinner = 'POST';
	// intercept http methods to add treatment
	myResumeServices.factory('myHttpInterceptor', function($q, $rootScope){
		return {
			'request': function(config) {
				if(config.method == httpMethodWithSpinner){
					// show loader
					$rootScope.$broadcast("show_loader");
				}
				return config || $q.when(config);
			},
			'response': function(response) {
				if(response.config.method == httpMethodWithSpinner){
					$rootScope.$broadcast("hide_loader");
				}
				return response || $q.when(response);
			},
			'responseError': function (rejection) {
				if(rejection.config.method == httpMethodWithSpinner){
					$rootScope.$broadcast("hide_loader");
				}
				return $q.reject(rejection);
			}
		};
	});
	myResumeServices.config(function($httpProvider){
		$httpProvider.interceptors.push('myHttpInterceptor');
	});
	myResumeServices.directive("loader", function(){
		return {
			link : function($scope, element){
				// hide the element initially
				element.hide();
				$scope.$on("show_loader", function () {
					element.show();
				});
				$scope.$on("hide_loader", function () {
					element.hide();
				});
			}
		};
	});
	
})();
