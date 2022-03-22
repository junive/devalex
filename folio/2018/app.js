var cvModule = angular.module('cvApp', []);

/* UI router 

var cvModule = angular.module('cvApp', ['ui.router']);

cvModule.config(function($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.otherwise('/');
 
    $stateProvider
        .state('home', {
            url:'/efface',
            templateUrl: 'effacer.html',
            controller: 'cvControl'
        })
        .state('about', {
            url:'/efface2',
            templateUrl: 'effacer2.html',
            controller: 'cvControl'
        })
});
*/

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

// Equivalent to document.ready but for angular ng-repeat
cvModule.directive('emitLastMain', function() {
	return function(scope) {
		if (scope.$last){
			scope.$emit('LastRepeaterMain');
		}
	}
});

// Allow to show html tag from sql / ajax / json! 
cvModule.filter('unsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});

// Main controller
 cvModule.controller('cvControl', function($scope, $location, $http, $q) {
	var cv = this;
	var promiseDataFromSql = $http.post("custom/datas.php");
    var deferDataToDom = $q.defer();
	cv.allProject = new Array();
	cv.currentNav = null;
	
	$scope.currentParentId = getURLParameter("parentId");
	
	cv.nav = [
	  {id : 1, text : 'Projets'},
	  {id : 2, text : 'Curriculums'},
	  {id : 3, text : 'Présentation'}
	];	

	// Show after Dom loading
	$(window).load(function() { 
		$("#loading-img").hide();
		$("#loading-body").css('visibility', 'visible');
	});
	
	// Create promise when ng-repeat is loaded on Dom
	$scope.$on('LastRepeaterMain', function(){
		deferDataToDom.resolve();
	});
	
	// Load the main when sql is loaded
	promiseDataFromSql.then(function(response) {
		cv.allProject = response.data.cvDB; 
	});
	
	// Hide Nav when dropdown on mobile
	$('.navbar-collapse').click('li', function() {
		$('.navbar-collapse').collapse('hide');
	});

	// Bootstrap Js function
	cv.collpaseProject = function(projectDomId) {
		$('.my-projects, ' + projectDomId + ', #my-footer').collapse("toggle");
	}
	
	// Select on the navbar
	cv.selectNav = function(newNav) { 	// Defaut nav
		// If no nav selected (index.html)
		newNav = (!newNav || newNav == null) ? cv.nav[0] : newNav;
		// Select the active nav for Dom
		cv.currentNav = newNav;
	}
	
	// Reload iframe project on each click
	cv.loadIframe = function(project) {
		var myProject = "#my-project-" + project.id;
		//var myIframe = myProject + " iframe";
		
		var myLoadingImg = myProject + " .my-loading";
		var myIframeParent = myProject + " .my-iframe-container";
		//$(myIframe).hide();
		$(myLoadingImg).show();
		
		// Problem with back with ctrl+R (not ctrl + F5)
		//$(myIframe).attr('src', parentFold + "/" + project.link);
		
		// Same than before, but after navigate on iframe
		 //$(myIframe)[0].contentDocument.location.replace(parentFold + "/"+ project.link); 
		
		
		if ( $(myIframeParent).children().length > 0) $(myIframeParent).empty();
		var myIframe = document.createElement('IFRAME');
		
		var isParentProject = function() {
			for (var i = 0; i < cv.allProject.length ;i++) {
				if (cv.allProject[i].parentId == project.id) return true;
			}
			return false;
		}
		
		if (cv.nav[project.parentId] == null) $(myIframe).attr("class", "embed-responsive-sub");
		 else if (isParentProject()) $(myIframe).attr("class", "embed-responsive-parent");
		 else $(myIframe).attr("class", "embed-responsive-item");

		$(myIframe).attr("src", siteUrl + "/" + project.link + "?parentId="+project.id) ;
		$(myIframeParent).append(myIframe);
		
		$(myIframe).load(function() {
			$(myLoadingImg).hide();
			//$(myIframe).show();
		});
	}

	
	// Allow to not reload the iframe project
	// Doesn't work with chrome : reload page on last back when navigate into iframe
	cv.iframeLoaded = new Array();
	cv.loadIframeWithCache = function(project) {
		if (cv.iframeLoaded.indexOf(project.id) == -1) {
			cv.iframeLoaded.push(project.id);
			cv.loadIframe(project);
		}
	}
	
	// Load the iframe and collapse page
	cv.selectProject = function(projectId) {
		var projectDomId = '#my-project-' + projectId;
		// When Datas are loaded
		//promiseDataFromSql.then(function(response) {
			// Dom loaded, When Ng repeat is finish
			deferDataToDom.promise.then(function(resolved) {
				// Get the project from data
				cv.allProject.forEach(function(proj) {
					if (projectId == proj.id) {
						cv.loadIframe(proj);
					}
				});
				
				if ($(projectDomId).is(":hidden")) { 
					cv.collpaseProject(projectDomId);
				}
			});
		//});
	}
	
	$scope.$watch( function( ) {
		return $location.path();
	}, function (catchedPath) {

		var tabPath = catchedPath.split("/");
		// Trigger the defaut page if parentId not found
		if (tabPath.length > 1 && tabPath[1] >= 0 && tabPath[1] <= cv.nav.length) {
			cv.nav.forEach(function(nav) {
				if (tabPath[1] == nav.id) {	
					cv.selectNav(nav);
					if (tabPath.length > 2) { // Select the project
						cv.selectProject(tabPath[2]);
					}
				}
			});
		} else cv.selectNav(null); // Defaut view (index.html)
		
		// restaure main view when was in a project
		if ($('.my-projects').is(":hidden") && tabPath.length <= 2) {
			cv.collpaseProject('#' + $(".my-iframes").find( ":visible" ).attr("id"));
		}
		
	  }
	);
});
