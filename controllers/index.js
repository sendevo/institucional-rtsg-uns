// Inicializacion de la app
var app = angular.module("rtsrg", ['ngSanitize', 'ngRoute']);

app.run(function ($rootScope,$location) {
  
  jQuery.getJSON("database.json", function(data) { // Descargar base de datos
    $rootScope.db = data; 
    if($location.path() == "/research") // Si inicia directamente en publicaciones
      $rootScope.setResearchSection($rootScope.db.research.sections[0]); // Por defecto, mostrar el primer grupo de items
    if($location.path() == "/contact") // Si inicia en la seccion de contacto
      $rootScope.renderMap(); // Generar mapa
    $rootScope.$apply(); // Esto es asincrono asi que hay que actualizar el binding
  });

  $rootScope.setResearchSection = function(section){ // Al seleccionar una seccion del dropdown
    $rootScope.researchSection = section;
    $rootScope.researchSection.items = [];
    for(var k in section.content) // Generar arreglo de publicaciones (para ordenar, filtrar, etc)
      $rootScope.researchSection.items.push($rootScope.db.research.items[section.content[k]]);
    $rootScope.currentLocation = 'research';
  };

  $rootScope.viewMember = function(member){ // Copiar objeto con detalles del miembro para mostrar en modal
    $rootScope.selectedMember = member;
  };

  $rootScope.memberList = function (members) { // Devuelve los nombres de los autores separados por coma como string
    var names = [];
    for(var k in members)
      names.push($rootScope.db.group.members[members[k]].name);
    return names.join(", "); // Apellidos separados por coma
  };

  $rootScope.viewWork = function(work){ // Copiar objeto con detalles del miembro para mostrar en modal
    $rootScope.selectedWork = work;
  };

  $rootScope.readableTime = function(timestamp){ // Fecha y hora formal
    return moment(timestamp).format("DD/MM/YYYY HH:mm");
  };

  $rootScope.relativeTime = function(timestamp){ // Tiempo relativo al actual
    return moment(timestamp).fromNow();
  };

  $rootScope.renderMap = function(){ // Genera el mapa OpenstreetMap con Leaflet
    $rootScope.currentLocation='contact';
    setTimeout(function(){
      var map = L.map('map').setView([-38.694829,-62.2485402], 18);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: ''}).addTo(map);
      L.marker([-38.694829,-62.2485402]).addTo(map).bindPopup('IIIE - DIEC').openPopup();
    },500);
  };
})
.config(function ($routeProvider) { // Ruteo
  $routeProvider
  .when("/", {
    templateUrl: "views/home.html"
  })
  .when("/home", {
    templateUrl: "views/home.html"
  })
  .when("/group", {
    templateUrl: "views/group.html"
  })
  .when("/research", {
    templateUrl: "views/research.html"
  })
  .when("/our_work", {
    templateUrl: "views/work.html"
  })
  .when("/contact", {
    templateUrl: "views/contact.html"
  });
})
.config(['$locationProvider', function ($locationProvider) {
  // Ver: https://stackoverflow.com/questions/41272314/angular-all-slashes-in-url-changed-to-2f
  $locationProvider.hashPrefix('');
}])
.filter('trusted', ['$sce', function ($sce) {
  // Ver: https://stackoverflow.com/questions/39480969/angular-interpolateinterr-error-when-adding-url-from-variable
  return $sce.trustAsResourceUrl;
}]);
