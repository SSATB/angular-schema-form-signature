angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/signature/angular-schema-form-signature.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\r\n    <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\r\n    <div>\r\n        <signature-pad\r\n                ng-model=\"$$value$$\"\r\n                dataurl=\"$$value$$\"\r\n                accept=\"accept\"\r\n                clear=\"clear\"\r\n                height=\"{{form.height || 140}}\"\r\n                width=\"{{form.width || 368}}\"\r\n                class=\"form-control\"\r\n                style=\"height:auto\"\r\n                schema-validate=\"form\"></signature-pad>\r\n    </div>\r\n    <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\r\n    <button class=\"btn\" ng-click=\"clear()\">Reset signature</button>\r\n</div>\r\n");}]);
angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function(schemaFormProvider,  schemaFormDecoratorsProvider) {

          //Add to the bootstrap directive
          schemaFormDecoratorsProvider.addMapping(
              'bootstrapDecorator',
              'signature',
              'directives/decorators/bootstrap/signature/angular-schema-form-signature.html'
          );
          schemaFormDecoratorsProvider.createDirective(
              'signature',
              'directives/decorators/bootstrap/signature/angular-schema-form-signature.html'
          );
        }
    ]);
