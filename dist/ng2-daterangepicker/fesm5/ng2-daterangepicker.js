import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, EventEmitter, ɵɵdirectiveInject, ElementRef, KeyValueDiffers, ɵɵdefineDirective, Directive, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __values } from 'tslib';
import 'daterangepicker';
import $ from 'jquery';

var DaterangepickerConfig = /** @class */ (function () {
    function DaterangepickerConfig() {
        this.settings = {};
    }
    DaterangepickerConfig.ɵfac = function DaterangepickerConfig_Factory(t) { return new (t || DaterangepickerConfig)(); };
    DaterangepickerConfig.ɵprov = ɵɵdefineInjectable({ token: DaterangepickerConfig, factory: DaterangepickerConfig.ɵfac, providedIn: 'root' });
    return DaterangepickerConfig;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DaterangepickerConfig, [{
        type: Injectable,
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
        this.selected = new EventEmitter();
        this.cancelDaterangepicker = new EventEmitter();
        this.applyDaterangepicker = new EventEmitter();
        this.hideCalendarDaterangepicker = new EventEmitter();
        this.showCalendarDaterangepicker = new EventEmitter();
        this.hideDaterangepicker = new EventEmitter();
        this.showDaterangepicker = new EventEmitter();
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
    DaterangepickerComponent.ɵfac = function DaterangepickerComponent_Factory(t) { return new (t || DaterangepickerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DaterangepickerConfig), ɵɵdirectiveInject(KeyValueDiffers)); };
    DaterangepickerComponent.ɵdir = ɵɵdefineDirective({ type: DaterangepickerComponent, selectors: [["", "daterangepicker", ""]], inputs: { options: "options" }, outputs: { selected: "selected", cancelDaterangepicker: "cancelDaterangepicker", applyDaterangepicker: "applyDaterangepicker", hideCalendarDaterangepicker: "hideCalendarDaterangepicker", showCalendarDaterangepicker: "showCalendarDaterangepicker", hideDaterangepicker: "hideDaterangepicker", showDaterangepicker: "showDaterangepicker" } });
    return DaterangepickerComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DaterangepickerComponent, [{
        type: Directive,
        args: [{
                selector: '[daterangepicker]'
            }]
    }], function () { return [{ type: ElementRef }, { type: DaterangepickerConfig }, { type: KeyValueDiffers }]; }, { options: [{
            type: Input
        }], selected: [{
            type: Output
        }], cancelDaterangepicker: [{
            type: Output
        }], applyDaterangepicker: [{
            type: Output
        }], hideCalendarDaterangepicker: [{
            type: Output
        }], showCalendarDaterangepicker: [{
            type: Output
        }], hideDaterangepicker: [{
            type: Output
        }], showDaterangepicker: [{
            type: Output
        }] }); })();

var Daterangepicker = /** @class */ (function () {
    function Daterangepicker() {
    }
    Daterangepicker.ɵmod = ɵɵdefineNgModule({ type: Daterangepicker });
    Daterangepicker.ɵinj = ɵɵdefineInjector({ factory: function Daterangepicker_Factory(t) { return new (t || Daterangepicker)(); }, imports: [[]] });
    return Daterangepicker;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(Daterangepicker, { declarations: [DaterangepickerComponent], exports: [DaterangepickerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(Daterangepicker, [{
        type: NgModule,
        args: [{
                declarations: [DaterangepickerComponent],
                imports: [],
                exports: [DaterangepickerComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng2-daterangepicker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Daterangepicker, DaterangepickerComponent, DaterangepickerConfig };
//# sourceMappingURL=ng2-daterangepicker.js.map
