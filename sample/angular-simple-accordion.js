'use strict';

angular.module('simple-accordion', [])
    .directive('simpleAccordion', function($compile) {
        return {
            restrict: 'A',
            controller: function($scope, $element) {
                $scope.current = null;
                $scope.height = [];
                $scope.zero = {
                    height: 0
                };
                $scope.toggle = function(i) {
                    $scope.current = $scope.current === i ? null : i;
                };
                $scope.teste = 'lalala';
            },
            link: function(scope, el, attrs) {
                var itemSelector = attrs.itemSelector || 'li',
                    titleSelector = attrs.itemSelector || 'h2',
                    contentSelector = attrs.itemSelector || 'p';

                var items = el[0].querySelectorAll(itemSelector);
                for (var i in items) {
                    if (angular.isObject(items[i])) {
                        var title = items[i].querySelectorAll(titleSelector)[0];
                        var content = items[i].querySelectorAll(contentSelector)[0];
                        scope.height.push({
                            'height': (content.offsetHeight + 10) + 'px'
                        });
                        angular.element(items[i]).addClass('item').attr({
                            'ng-class': '{\'open\':current == ' + i + '}'
                        });
                        angular.element(title).addClass('title').attr('ng-click', 'toggle(' + i + ')');
                        angular.element(content).addClass('content').attr({
                            'ng-style': 'current == ' + i + '?height[' + i + ']:zero'
                        });;

                    }
                }
                $compile(angular.element(el).contents())(scope);
            }
        }
    });
