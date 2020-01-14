var app = angular.module("whatsTheT", [])

app.directive("avatar", function () {
  return {
    restrict: "A",
    link: function (scope, element, attrs) {
      $(element).append($.gravatar(attrs.avatar));
    }
  }
});

app.directive("expander", function ($timeout) {
  var collaspedHeight = 394;
  var expandedHeight = 900;
  var animationSpeed = 500

  var slide = function(edition, direction) {
    var wrappers = edition.find(".edition, .edition .iframe iframe, .edition .mask");
    var height = direction === 'down' ? expandedHeight : collaspedHeight;
    var expanded = direction === 'down';

    edition.attr("data-expander", expanded);
    wrappers.animate({ height: height }, {
      queue : false,
      duration : animationSpeed
    });
  };

  var loadIframe = function(edition, url) {
    var wrapper = edition.find('.iframe');
    var notLoaded = wrapper.find('iframe').length == 0;
    if (notLoaded) {
      edition.addClass('loading');
      wrapper.append("<iframe src="+ url +"></iframe>");
    }
    return notLoaded;
  }

  return {
    restrict: "A",
    link: function (scope, element, attrs) {

      $(element).find(".header").click(function(event) {
        var expandedEdition = $("[data-expander='true']");
        var clickedEdition = $(element);
        var notAlreadyExpanded = !expandedEdition.is(clickedEdition);
        var loading = loadIframe(clickedEdition, attrs.expander);
        var timeoutDuration = loading ? 1000 : 0;

        $timeout(function() {
          clickedEdition.removeClass('loading');
          slide(expandedEdition, 'up');
          if (notAlreadyExpanded) { slide(clickedEdition, 'down'); }
        }, timeoutDuration);
      });

    }
  };
});

app.directive("fancyHeader", function($window) {
  return {
    restrict: "A",
    link: function (scope, element, attrs) {
      $($window).scroll(function(data) {
        var top = data.currentTarget.scrollY;
        // console.log(top)
        element.toggleClass("mini", top >= 109)
      });
    }
  }
});
