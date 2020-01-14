EditionsCtrl = function($scope, $http) {

  var url = function(edition_number) {
    if (edition_number === 14) {
      return "http://badatsports.com/2013/35511";
    } else if (edition_number < 22) {
      return "http://badatsports.com/2013/edition-"+edition_number;
    } else if (edition_number <= 41) {
      return "http://badatsports.com/2014/edition-"+edition_number;
    } else {
      return "http://badatsports.com/2015/edition-"+edition_number;
    }
  }

  $scope.editions =_.map(_.range(3, 45).reverse(), function(edition_number) {
    return {
      number: edition_number,
      url: url(edition_number),
      header: "http://danabassett.com.s3.amazonaws.com/badatsports/EDITION"+edition_number+"/whatsthetheader"+edition_number+".jpg"
    }
  });

}
