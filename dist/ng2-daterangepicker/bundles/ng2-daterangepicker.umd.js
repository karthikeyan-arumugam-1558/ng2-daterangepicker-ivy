(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('daterangepicker'), require('jquery')) :
    typeof define === 'function' && define.amd ? define('ng2-daterangepicker', ['exports', '@angular/core', 'daterangepicker', 'jquery'], factory) :
    (global = global || self, factory(global['ng2-daterangepicker'] = {}, global.ng.core, null, global.$));
}(this, (function (exports, core, daterangepicker, $) { 'use strict';

    $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var DaterangepickerConfig = /** @class */ (function () {
        function DaterangepickerConfig() {
            this.settings = {};
        }
        DaterangepickerConfig.ɵfac = function DaterangepickerConfig_Factory(t) { return new (t || DaterangepickerConfig)(); };
        DaterangepickerConfig.ɵprov = core["ɵɵdefineInjectable"]({ token: DaterangepickerConfig, factory: DaterangepickerConfig.ɵfac, providedIn: 'root' });
        return DaterangepickerConfig;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DaterangepickerConfig, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var DaterangepickerComponent = /** @class */ (function () {
        function DaterangepickerComponent(input, config, differs) {
            this.input = input;
            this.config = config;
            this.differs = differs;
            this.targetOptions = {};
            this._differ = {};
            this.options = {};
            this.selected = new core.EventEmitter();
            this.cancelDaterangepicker = new core.EventEmitter();
            this.applyDaterangepicker = new core.EventEmitter();
            this.hideCalendarDaterangepicker = new core.EventEmitter();
            this.showCalendarDaterangepicker = new core.EventEmitter();
            this.hideDaterangepicker = new core.EventEmitter();
            this.showDaterangepicker = new core.EventEmitter();
            this._differ['options'] = this.differs.find(this.options).create();
            this._differ['settings'] = this.differs.find(this.config.settings).create();
        }
        DaterangepickerComponent.prototype.ngAfterViewInit = function () {
            this.render();
            this.attachEvents();
        };
        DaterangepickerComponent.prototype.ngDoCheck = function () {
            var optionsChanged = this._differ['options'].diff(this.options);
            var settingsChanged = this._differ['settings'].diff(this.config.settings);
            if (optionsChanged || settingsChanged) {
                this.render();
                this.attachEvents();
                if (this.activeRange && this.datePicker) {
                    this.datePicker.setStartDate(this.activeRange.start);
                    this.datePicker.setEndDate(this.activeRange.end);
                }
            }
        };
        DaterangepickerComponent.prototype.ngOnDestroy = function () {
            this.destroyPicker();
        };
        DaterangepickerComponent.prototype.render = function () {
            var e_1, _a;
            this.targetOptions = Object.assign({}, this.config.settings, this.options);
            $(this.input.nativeElement).daterangepicker(this.targetOptions, this.callback.bind(this));
            if (this.options.customClasses && this.options.customClasses.length) {
                try {
                    for (var _b = __values(this.options.customClasses), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var customClass = _c.value;
                        this.datePicker = $(this.input.nativeElement).data('daterangepicker').container.addClass(customClass);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this.datePicker = $(this.input.nativeElement).data('daterangepicker');
            }
        };
        DaterangepickerComponent.prototype.callback = function (start, end, label) {
            this.activeRange = {
                start: start,
                end: end,
                label: label
            };
            this.selected.emit(this.activeRange);
        };
        DaterangepickerComponent.prototype.destroyPicker = function () {
            try {
                $(this.input.nativeElement).data('daterangepicker').remove();
            }
            catch (e) {
                console.log(e.message);
            }
        };
        DaterangepickerComponent.prototype.attachEvents = function () {
            var _this = this;
            $(this.input.nativeElement).on('cancel.daterangepicker', function (e, picker) {
                var event = { event: e, picker: picker };
                _this.cancelDaterangepicker.emit(event);
            });
            $(this.input.nativeElement).on('apply.daterangepicker', function (e, picker) {
                var event = { event: e, picker: picker };
                _this.applyDaterangepicker.emit(event);
            });
            $(this.input.nativeElement).on('hideCalendar.daterangepicker', function (e, picker) {
                var event = { event: e, picker: picker };
                _this.hideCalendarDaterangepicker.emit(event);
            });
            $(this.input.nativeElement).on('showCalendar.daterangepicker', function (e, picker) {
                var event = { event: e, picker: picker };
                _this.showCalendarDaterangepicker.emit(event);
            });
            $(this.input.nativeElement).on('hide.daterangepicker', function (e, picker) {
                var event = { event: e, picker: picker };
                _this.hideDaterangepicker.emit(event);
            });
            $(this.input.nativeElement).on('show.daterangepicker', function (e, picker) {
                var event = { event: e, picker: picker };
                _this.showDaterangepicker.emit(event);
            });
        };
        DaterangepickerComponent.ɵfac = function DaterangepickerComponent_Factory(t) { return new (t || DaterangepickerComponent)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](DaterangepickerConfig), core["ɵɵdirectiveInject"](core.KeyValueDiffers)); };
        DaterangepickerComponent.ɵdir = core["ɵɵdefineDirective"]({ type: DaterangepickerComponent, selectors: [["", "daterangepicker", ""]], inputs: { options: "options" }, outputs: { selected: "selected", cancelDaterangepicker: "cancelDaterangepicker", applyDaterangepicker: "applyDaterangepicker", hideCalendarDaterangepicker: "hideCalendarDaterangepicker", showCalendarDaterangepicker: "showCalendarDaterangepicker", hideDaterangepicker: "hideDaterangepicker", showDaterangepicker: "showDaterangepicker" } });
        return DaterangepickerComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DaterangepickerComponent, [{
            type: core.Directive,
            args: [{
                    selector: '[daterangepicker]'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: DaterangepickerConfig }, { type: core.KeyValueDiffers }]; }, { options: [{
                type: core.Input
            }], selected: [{
                type: core.Output
            }], cancelDaterangepicker: [{
                type: core.Output
            }], applyDaterangepicker: [{
                type: core.Output
            }], hideCalendarDaterangepicker: [{
                type: core.Output
            }], showCalendarDaterangepicker: [{
                type: core.Output
            }], hideDaterangepicker: [{
                type: core.Output
            }], showDaterangepicker: [{
                type: core.Output
            }] }); })();

    var Daterangepicker = /** @class */ (function () {
        function Daterangepicker() {
        }
        Daterangepicker.ɵmod = core["ɵɵdefineNgModule"]({ type: Daterangepicker });
        Daterangepicker.ɵinj = core["ɵɵdefineInjector"]({ factory: function Daterangepicker_Factory(t) { return new (t || Daterangepicker)(); }, imports: [[]] });
        return Daterangepicker;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](Daterangepicker, { declarations: [DaterangepickerComponent], exports: [DaterangepickerComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](Daterangepicker, [{
            type: core.NgModule,
            args: [{
                    declarations: [DaterangepickerComponent],
                    imports: [],
                    exports: [DaterangepickerComponent]
                }]
        }], null, null); })();

    exports.Daterangepicker = Daterangepicker;
    exports.DaterangepickerComponent = DaterangepickerComponent;
    exports.DaterangepickerConfig = DaterangepickerConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-daterangepicker.umd.js.map
