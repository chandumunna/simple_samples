System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var LBLoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LBLoginComponent = (function () {
                function LBLoginComponent(_http) {
                    this._http = _http;
                }
                LBLoginComponent.prototype.login = function () {
                    var credentials = {
                        "username": this.username,
                        "password": this.password
                    };
                    this._http.post('', JSON.stringify(credentials))
                        .map(function (res) { return res; }, function (err) { return 'login failed'; });
                };
                LBLoginComponent = __decorate([
                    core_1.Component({
                        selector: 'loopback-login',
                        templateUrl: 'app/loopback-login/loopback-login.html',
                        styleUrls: ['app/loopback-login/loopback-login.css']
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LBLoginComponent);
                return LBLoginComponent;
            }());
            exports_1("LBLoginComponent", LBLoginComponent);
        }
    }
});
//# sourceMappingURL=loopback-login.component.js.map