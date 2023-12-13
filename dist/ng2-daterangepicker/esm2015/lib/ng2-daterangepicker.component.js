import { Directive, Input, Output, EventEmitter } from '@angular/core';
import 'daterangepicker';
import $ from "jquery";
import * as i0 from "@angular/core";
import * as i1 from "./ng2-daterangepicker.service";
export class DaterangepickerComponent {
    constructor(input, config, differs) {
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
    ngAfterViewInit() {
        this.render();
        this.attachEvents();
    }
    ngDoCheck() {
        let optionsChanged = this._differ['options'].diff(this.options);
        let settingsChanged = this._differ['settings'].diff(this.config.settings);
        if (optionsChanged || settingsChanged) {
            this.render();
            this.attachEvents();
            if (this.activeRange && this.datePicker) {
                this.datePicker.setStartDate(this.activeRange.start);
                this.datePicker.setEndDate(this.activeRange.end);
            }
        }
    }
    ngOnDestroy() {
        this.destroyPicker();
    }
    render() {
        this.targetOptions = Object.assign({}, this.config.settings, this.options);
        $(this.input.nativeElement).daterangepicker(this.targetOptions, this.callback.bind(this));
        if (this.options.customClasses && this.options.customClasses.length) {
            for (let customClass of this.options.customClasses) {
                this.datePicker = $(this.input.nativeElement).data('daterangepicker').container.addClass(customClass);
            }
        }
        else {
            this.datePicker = $(this.input.nativeElement).data('daterangepicker');
        }
    }
    callback(start, end, label) {
        this.activeRange = {
            start: start,
            end: end,
            label: label
        };
        this.selected.emit(this.activeRange);
    }
    destroyPicker() {
        try {
            $(this.input.nativeElement).data('daterangepicker').remove();
        }
        catch (e) {
            console.log(e.message);
        }
    }
    attachEvents() {
        $(this.input.nativeElement).on('cancel.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.cancelDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('apply.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.applyDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('hideCalendar.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.hideCalendarDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('showCalendar.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.showCalendarDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('hide.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.hideDaterangepicker.emit(event);
        });
        $(this.input.nativeElement).on('show.daterangepicker', (e, picker) => {
            let event = { event: e, picker: picker };
            this.showDaterangepicker.emit(event);
        });
    }
}
DaterangepickerComponent.ɵfac = function DaterangepickerComponent_Factory(t) { return new (t || DaterangepickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.DaterangepickerConfig), i0.ɵɵdirectiveInject(i0.KeyValueDiffers)); };
DaterangepickerComponent.ɵdir = i0.ɵɵdefineDirective({ type: DaterangepickerComponent, selectors: [["", "daterangepicker", ""]], inputs: { options: "options" }, outputs: { selected: "selected", cancelDaterangepicker: "cancelDaterangepicker", applyDaterangepicker: "applyDaterangepicker", hideCalendarDaterangepicker: "hideCalendarDaterangepicker", showCalendarDaterangepicker: "showCalendarDaterangepicker", hideDaterangepicker: "hideDaterangepicker", showDaterangepicker: "showDaterangepicker" } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItZGF0ZXJhbmdlcGlja2VyLyIsInNvdXJjZXMiOlsibGliL25nMi1kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7OztBQU12QixNQUFNLE9BQU8sd0JBQXdCO0lBa0JuQyxZQUNVLEtBQWlCLEVBQ2pCLE1BQTZCLEVBQzdCLE9BQXdCO1FBRnhCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFsQjFCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFJakIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUVqQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QiwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsZ0NBQTJCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRCxnQ0FBMkIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU9qRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNu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cm95LFxuICBEb0NoZWNrLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIEtleVZhbHVlRGlmZmVyc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAnZGF0ZXJhbmdlcGlja2VyJztcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7IERhdGVyYW5nZXBpY2tlckNvbmZpZyB9IGZyb20gXCIuL25nMi1kYXRlcmFuZ2VwaWNrZXIuc2VydmljZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGF0ZXJhbmdlcGlja2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXJhbmdlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcblxuICBwcml2YXRlIGFjdGl2ZVJhbmdlOiBhbnk7XG4gIHByaXZhdGUgdGFyZ2V0T3B0aW9uczogYW55ID0ge307XG4gIHByaXZhdGUgX2RpZmZlcjogYW55ID0ge307XG5cbiAgcHVibGljIGRhdGVQaWNrZXI6IGFueTtcblxuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSB7fTtcblxuICBAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjYW5jZWxEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhcHBseURhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhpZGVDYWxlbmRhckRhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNob3dDYWxlbmRhckRhdGVyYW5nZXBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGhpZGVEYXRlcmFuZ2VwaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzaG93RGF0ZXJhbmdlcGlja2VyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjb25maWc6IERhdGVyYW5nZXBpY2tlckNvbmZpZyxcbiAgICBwcml2YXRlIGRpZmZlcnM6IEtleVZhbHVlRGlmZmVyc1xuICApIHtcbiAgICB0aGlzLl9kaWZmZXJbJ29wdGlvbnMnXSA9IHRoaXMuZGlmZmVycy5maW5kKHRoaXMub3B0aW9ucykuY3JlYXRlKCk7XG4gICAgdGhpcy5fZGlmZmVyWydzZXR0aW5ncyddID0gdGhpcy5kaWZmZXJzLmZpbmQodGhpcy5jb25maWcuc2V0dGluZ3MpLmNyZWF0ZSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5hdHRhY2hFdmVudHMoKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBsZXQgb3B0aW9uc0NoYW5nZWQgPSB0aGlzLl9kaWZmZXJbJ29wdGlvbnMnXS5kaWZmKHRoaXMub3B0aW9ucyk7XG4gICAgbGV0IHNldHRpbmdzQ2hhbmdlZCA9IHRoaXMuX2RpZmZlclsnc2V0dGluZ3MnXS5kaWZmKHRoaXMuY29uZmlnLnNldHRpbmdzKTtcblxuICAgIGlmIChvcHRpb25zQ2hhbmdlZCB8fCBzZXR0aW5nc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xuICAgICAgaWYgKHRoaXMuYWN0aXZlUmFuZ2UgJiYgdGhpcy5kYXRlUGlja2VyKSB7XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRTdGFydERhdGUodGhpcy5hY3RpdmVSYW5nZS5zdGFydCk7XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRFbmREYXRlKHRoaXMuYWN0aXZlUmFuZ2UuZW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lQaWNrZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIHRoaXMudGFyZ2V0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLnNldHRpbmdzLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgKDxhbnk+JCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpKS5kYXRlcmFuZ2VwaWNrZXIoXG4gICAgICB0aGlzLnRhcmdldE9wdGlvbnMsXG4gICAgICB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcylcbiAgICApO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jdXN0b21DbGFzc2VzICYmIHRoaXMub3B0aW9ucy5jdXN0b21DbGFzc2VzLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgY3VzdG9tQ2xhc3Mgb2YgdGhpcy5vcHRpb25zLmN1c3RvbUNsYXNzZXMpIHtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyID0gKFxuICAgICAgICAgIDxhbnk+JCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgICkuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykuY29udGFpbmVyLmFkZENsYXNzKGN1c3RvbUNsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRlUGlja2VyID0gKFxuICAgICAgICA8YW55PiQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KVxuICAgICAgKS5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGxiYWNrKHN0YXJ0PzogYW55LCBlbmQ/OiBhbnksIGxhYmVsPzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVSYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIGVuZDogZW5kLFxuICAgICAgbGFiZWw6IGxhYmVsXG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KHRoaXMuYWN0aXZlUmFuZ2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95UGlja2VyKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykucmVtb3ZlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEV2ZW50cygpOiB2b2lkIHtcbiAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ2NhbmNlbC5kYXRlcmFuZ2VwaWNrZXInLFxuICAgICAgKGU6IGFueSwgcGlja2VyOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0geyBldmVudDogZSwgcGlja2VyOiBwaWNrZXIgfTtcbiAgICAgICAgdGhpcy5jYW5jZWxEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJyxcbiAgICAgIChlOiBhbnksIHBpY2tlcjogYW55KSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XG4gICAgICAgIHRoaXMuYXBwbHlEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XG4gICAgICB9XG4gICAgKTtcblxuICAgICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5vbignaGlkZUNhbGVuZGFyLmRhdGVyYW5nZXBpY2tlcicsXG4gICAgICAoZTogYW55LCBwaWNrZXI6IGFueSkgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xuICAgICAgICB0aGlzLmhpZGVDYWxlbmRhckRhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdzaG93Q2FsZW5kYXIuZGF0ZXJhbmdlcGlja2VyJyxcbiAgICAgIChlOiBhbnksIHBpY2tlcjogYW55KSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XG4gICAgICAgIHRoaXMuc2hvd0NhbGVuZGFyRGF0ZXJhbmdlcGlja2VyLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCkub24oJ2hpZGUuZGF0ZXJhbmdlcGlja2VyJyxcbiAgICAgIChlOiBhbnksIHBpY2tlcjogYW55KSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IHsgZXZlbnQ6IGUsIHBpY2tlcjogcGlja2VyIH07XG4gICAgICAgIHRoaXMuaGlkZURhdGVyYW5nZXBpY2tlci5lbWl0KGV2ZW50KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpLm9uKCdzaG93LmRhdGVyYW5nZXBpY2tlcicsXG4gICAgICAoZTogYW55LCBwaWNrZXI6IGFueSkgPT4ge1xuICAgICAgICBsZXQgZXZlbnQgPSB7IGV2ZW50OiBlLCBwaWNrZXI6IHBpY2tlciB9O1xuICAgICAgICB0aGlzLnNob3dEYXRlcmFuZ2VwaWNrZXIuZW1pdChldmVudCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG59XG4iXX0=