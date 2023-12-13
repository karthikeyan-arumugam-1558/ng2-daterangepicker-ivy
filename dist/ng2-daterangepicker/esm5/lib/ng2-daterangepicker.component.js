import { __values } from "tslib";
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import 'daterangepicker';
import $ from "jquery";
import * as i0 from "@angular/core";
import * as i1 from "./ng2-daterangepicker.service";
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
    DaterangepickerComponent.ɵfac = function DaterangepickerComponent_Factory(t) { return new (t || DaterangepickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DaterangepickerConfig), i0.ɵɵdirectiveInject(i0.KeyValueDiffers)); };
    DaterangepickerComponent.ɵdir = i0.ɵɵdefineDirective({ type: DaterangepickerComponent, selectors: [["", "daterangepicker", ""]], inputs: { options: "options" }, outputs: { selected: "selected", cancelDaterangepicker: "cancelDaterangepicker", applyDaterangepicker: "applyDaterangepicker", hideCalendarDaterangepicker: "hideCalendarDaterangepicker", showCalendarDaterangepicker: "showCalendarDaterangepicker", hideDaterangepicker: "hideDaterangepicker", showDaterangepicker: "showDaterangepicker" } });
    return DaterangepickerComponent;
}());
export { DaterangepickerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DaterangepickerComponent, [{
        type: Directive,
        args: [{
                selector: '[daterangepicker]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.DaterangepickerConfig }, { type: i0.KeyValueDiffers }]; }, { options: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZGF0ZXJhbmdlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL25nMi1kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUlULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8saUJBQWlCLENBQUM7QUFDekIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7QUFHdkI7SUFxQkUsa0NBQ1UsS0FBaUIsRUFDakIsTUFBNkIsRUFDN0IsT0FBd0I7UUFGeEIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUF1QjtRQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQWxCMUIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUlqQixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBRWpCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLDBCQUFxQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0MseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyxnQ0FBMkIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELGdDQUEyQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakQsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBT2pELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25FLElBQUksQ0FBQyxPQUFP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dXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBEb0NoZWNrLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIEtleVZhbHVlRGlmZmVyc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAnZGF0ZXJhbmdlcGlja2VyJztcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7IERhdGVyYW5nZXBpY2tlckNvbmZpZyB9IGZyb20gXCIuL25nMi1kYXRlcmFuZ2VwaWNrZXIuc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGF0ZXJhbmdlcGlja2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXJhbmdlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcblxuICBwcml2YXRlIGFjdGl2ZVJhbmdlOiBhbnk7XG4gIHByaXZhdGUgdGFyZ2V0T3B0aW9uczogYW55ID0ge307XG4gIHByaXZhdGUgX2RpZmZlcjogYW55ID0ge307XG5cbiAgcHVibGljIGRhdGVQaWNrZXI6IGFueTtcblxuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSB7fTtcblxuICBAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjYW5jZWxEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhcHBseURhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhpZGVDYWxlbmRhckRhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNob3dDYWxlbmRhckRhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhpZGVEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzaG93RGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjb25maWc6IERhdGVyYW5nZXBpY2tlckNvbmZpZyxcbiAgICBwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVyc1xuICApIHtcbiAgICB0aGlzLl9kaWZmZXJbJ29wdGlvbnMnXSA9IHRoaXMuZGlmZmVycy5maW5kKHRoaXMub3B0aW9ucykuY3JlYXRlKCk7XG4gICAgdGhpcy5fZGlmZmVyWydzZXR0aW5ncyddID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5jb25maWcuc2V0dGluZ3MpLmNyZWF0ZSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5hdHRhY2hFdmVudHMoKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBsZXQgb3B0aW9uc0NoYW5nZWQgPSB0aGlzLl9kaWZmZXJbJ29wdGlvbnMnXS5kaWZmKHRoaXMub3B0aW9ucyk7XG4gICAgbGV0IHNldHRpbmdzQ2hhbmdlZCA9IHRoaXMuX2RpZmZlclsnc2V0dGluZ3MnXS5kaWZmKHRoaXMuY29uZmlnLnNldHRpbmdzKTtcblxuICAgIGlmIChvcHRpb25zQ2hhbmdlZCB8fCBzZXR0aW5nc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xuICAgICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UgJiYgdGhpcy5kYXRlUGlja2VyKSB7XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRTdGFydERhdGUodGhpcy5hY3RpdmVSYW5nZS5zdGFydCk7XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRFbmREYXRlKHRoaXMuYWN0aXZlUmFuZ2UuZW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lQaWNrZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMudGFyZ2V0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLnNldHRpbmdzLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgKDxhbnk+JCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpKS5kYXRlcmFuZ2VwaWNrZXIoXG4gICAgICB0aGlzLnRhcmdldE9wdGlvbnMsXG4gICAgICB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcylcbiAgICApO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jdXN0b21DbGFzc2VzICYmIHRoaXMub3B0aW9ucy5jdXN0b21DbGFzc2VzLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgY3VzdG9tQ2xhc3Mgb2YgdGhpcy5vcHRpb25zLmN1c3RvbUNsYXNzZXMpIHtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyID0gKFxuICAgICAgICAgIDxhbnk+JCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgICkuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykuY29udGFpbmVyLmFkZENsYXNzKGN1c3RvbUNsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlUGlja2VyID0gKFxuICAgICAgICA8YW55PiQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KVxuICAgICAgKS5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGxiYWNrKHN0YXJ0PzogYW55LCBlbmQ/OiBhbnksIGxhYmVsPzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVSYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIGVuZDogZW5kLFxuICAgICAgbGFiZWw6IGxhYmVsXG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KHRoaXMuYWN0aXZlUmFuZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95UGlja2VyKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykucmVtb3ZlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEV2ZW50cygpOiB2b2lkIHtcbiAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ2NhbmNlbC5kYXRlcmFuZ2VwaWNrZXInLFxuICAgICAgKGU6IGFueSwgcGlja2VyOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0geyBldmVudDogZSwgcGlja2VyOiBwaWNrZXIgfTtcbiAgICAgICAgdGhpcy5jYW5jZWxEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJyxcbiAgICAgIChlOiBhbnksIHBpY2tlcjogYW55KSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XG4gICAgICAgIHRoaXMuYXBwbHlEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignaGlkZUNhbGVuZGFyLmRhdGVyYW5nZXBpY2tlcicsXG4gICAgICAoZTogYW55LCBwaWNrZXI6IGFueSkgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xuICAgICAgICB0aGlzLmhpZGVDYWxlbmRhckRhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdzaG93Q2FsZW5kYXIuZGF0ZXJhbmdlcGlja2VyJyxcbiAgICAgIChlOiBhbnksIHBpY2tlcjogYW55KSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XG4gICAgICAgIHRoaXMuc2hvd0NhbGVuZGFyRGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ2hpZGUuZGF0ZXJhbmdlcGlja2VyJyxcbiAgICAgIChlOiBhbnksIHBpY2tlcjogYW55KSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XG4gICAgICAgIHRoaXMuaGlkZURhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdzaG93LmRhdGVyYW5nZXBpY2tlcicsXG4gICAgICAoZTogYW55LCBwaWNrZXI6IGFueSkgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xuICAgICAgICB0aGlzLnNob3dEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG59XG4iXX0=