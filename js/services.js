(function(){
	var myResumeServices = angular.module('myResumeServices', []);
	
	/**************************************
	* Data service
	***************************************/
	
	myResumeServices.factory('myResumeData', function(utility){
		return {
			getProfile : function() {
				var profileData = {
					title            : 'Front End Developer',
					name             : 'Xavier Artot',
					birthDate        : '12/06/1970',
					startWorkingDate : '01/01/2009',
					//experience       : "$1 years, $2 years experiences"
					experience       : "$2 years of experience"
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
					{label:'HTML5', level:1}, {label:'AJAX', level:1}, {label:'WordPress', level:1}, {label:'CSS3', level:0}, 
					{label:'Less', level:2}, {label:'Mixins', level:2}, {label:'CSS', level:2}, {label:'Unix Shell', level:1}, {label:'SQL', level:0}, {label:'REST', level:0},
					{label:'JavaScript', level:2}, {label:'jQuery', level:1}, {label:'AngularJS', level:1}, {label:'JSON', level:1},
					{label:'PHP', level:2}, {label:'MVC', level:1}, {label:'Grunt', level:1}, 
          {label:'Regex', level:1},{label:'PhoneGap', level:1},{label:'Mobile App', level:1},
          {label:'ZSH', level:1},{label:'GitHub', level:1},{label:'Terminal', level:1},
          {label:'Tmux', level:3},{label:'Linux', level:2},{label:'MAC', level:2},{label:'MySQL', level:1},
          {label:'WordPress Plugins', level:2},{label:'Responsive Design', level:2},{label:'Git', level:1},
          {label:'REST', level:0},{label:'Bootstrap', level:2},{label:'SEO', level:1},{label:'Apache', level:0}
				];
				return tagCloud;
			},
			getSkills : function() {
				var skills = [
					{
					 title:'Web',
					 specificSkills:['JavaScript', 'jQuery', 'AJAX', 'JSON', 'HTML5', 'CSS3', 'AngularJS',  'Less / Sass', 'PHP', 'Grunt']
					},
					{
					 title:'Tools and Languages',
					 specificSkills:['Vim', 'Tmux', 'Git', 'Unix shell', 'WordPress', 'GitHub', 'Grunt' ]
					},
					{
					 title:'Servers',
					 specificSkills:['Apache', 'NodeJS (lab)']
					},
					{
					 title:'Databases',
					 specificSkills:['MySQL', 'SQL']
					},
					{
					 title:'Frameworks ',
					 specificSkills:['PhoneGap','Twitter Bootstrap','AngularJS']
					},
					{
					 title:'Systems',
					 specificSkills:['Mac OS', 'Debian Linux']
					}
				];
				return skills;
			},
			getHobbies : function() {
				var hobbies = {
					hobby1 : {
						title : 'Sport',
						desc1 : 'Swimming, reading and cooking',
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
						error   : 'Error try again, please.',
						name    : 'Name',
						email   : 'Email',
						message : 'Message',
						send    : 'Send',
						confirm : {
							part1 : 'Thank you for your message!',
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
			//getTimeline : function(){
			//	var timeline = {
			//		lang    : 'en',
      //    content : 'https://docs.google.com/spreadsheet/pub?key=0Agl_Dv6iEbDadHdKcHlHcTB5bzhvbF9iTWwyMmJHdkE&output=html'
      //     //content :'https://docs.google.com/spreadsheet/pub?key=0Aj1DRa-P1mk8dExmZUxzY2VzbzFUWm1jMnZJS09oZ0E&output=html' 

			//	}
			//	return timeline;
			//},
			getLinks : function(){
				var links = {
					github   : 'https://github.com/xavierartot',
					linkedin : 'https://www.linkedin.com/profile/view?id=329656356&trk=nav_responsive_tab_profile',
					//twitter  : 'https://twitter.com/NicolasHuguet',
					resume   : 'data/resume.pdf'
				};
				return links;
			},
			getTechnos : function(){
				var technos = {
					img : [
						{
							src   : 'img/technos/angularjs.png',
							title : 'AngularJS'
						},
						{
							src   : 'img/technos/html5.png',
							title : 'HTML5'
						},
						{
							src   : 'img/technos/css3.png',
							title : 'CSS3'
						},
						{
							src   : 'img/technos/bootstrap.jpg',
							title : 'Twitter Bootstrap'
						},
						{
							src   : 'img/technos/ascensorjs.jpg',
							title : 'AscensorJS'
						}
					],
					source : {
						text     : 'Sources du site sur ',
						link     : 'https://github.com/xavierartot'
					}				
				};
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
