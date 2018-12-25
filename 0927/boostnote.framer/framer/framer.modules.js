require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"InputField":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.InputField = (function(superClass) {
  var INPUT_HIDE_PSUEDO_UI, INPUT_SELECTOR_NUMBER, INPUT_SELECTOR_SEARCH, PATTERN_NUMBER;

  extend(InputField, superClass);

  PATTERN_NUMBER = "[0-9]*";

  INPUT_HIDE_PSUEDO_UI = "{ -webkit-appearance: none; display: none; }";

  INPUT_SELECTOR_NUMBER = "input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button";

  INPUT_SELECTOR_SEARCH = "input[type=search]::-webkit-search-cancel-button";

  Events.Input = "InputField.OnInput";

  Events.Focus = "InputField.OnFocus";

  Events.Blur = "InputField.OnBlur";

  Events.Valid = "InputField.OnValid";

  Events.Invalid = "InputField.OnInvalid";

  Events.Match = "InputField.OnMatch";

  InputField.define("value", {
    get: function() {
      return this.input.value;
    },
    set: function(v) {
      if (!v) {
        return;
      }
      if (this.input) {
        return this.changeInputValue(v);
      }
    }
  });

  function InputField(options) {
    var base, base1, base10, base11, base2, base3, base4, base5, base6, base7, base8, base9, inputStyle, key, ref, val;
    this.options = options != null ? options : {};
    this.isNumber = false;
    this.isSearch = false;
    this.isEmpty = true;
    this.isValid = null;
    this.originalTextColor = null;
    if ((this.options.pattern != null) || (this.options.match != null)) {
      this.shouldCheckValidity = true;
    }
    if (this.options.lineHeight != null) {
      this.options.lineHeight = this.options.lineHeight + "px";
    }
    if ((base = this.options).name == null) {
      base.name = this.options.type + "Input";
    }
    if ((base1 = this.options).color == null) {
      base1.color = "black";
    }
    if ((base2 = this.options).backgroundColor == null) {
      base2.backgroundColor = "";
    }
    if ((base3 = this.options).borderRadius == null) {
      base3.borderRadius = 0;
    }
    if ((base4 = this.options).type == null) {
      base4.type = "text";
    }
    if ((base5 = this.options).fontSize == null) {
      base5.fontSize = 32;
    }
    if ((base6 = this.options).fontWeight == null) {
      base6.fontWeight = 300;
    }
    if ((base7 = this.options).fontFamily == null) {
      base7.fontFamily = "-apple-system, Helvetica Neue";
    }
    if ((base8 = this.options).lineHeight == null) {
      base8.lineHeight = 1.25;
    }
    if ((base9 = this.options).indent == null) {
      base9.indent = 0;
    }
    if ((base10 = this.options).placeHolderFocus == null) {
      base10.placeHolderFocus = null;
    }
    if ((base11 = this.options).placeHolderColor == null) {
      base11.placeHolderColor = null;
    }
    InputField.__super__.constructor.call(this, this.options);
    switch (this.options.type) {
      case "search":
        this.isSearch = true;
        break;
      case "number":
        this.isNumber = true;
        break;
      case "numbers-only":
      case "number-only":
        this.isNumber = true;
        this.options.type = this.options.pattern != null ? "number" : "text";
        this.options.pattern = this.options.pattern != null ? this.options.pattern : PATTERN_NUMBER;
    }
    this.html += (function() {
      switch (false) {
        case !this.isNumber:
          return "<style type='text/css'>" + INPUT_SELECTOR_NUMBER + INPUT_HIDE_PSUEDO_UI + "</style>";
        case !this.isSearch:
          return "<style type='text/css'>" + INPUT_SELECTOR_SEARCH + INPUT_HIDE_PSUEDO_UI + "</style>";
        default:
          return "";
      }
    }).call(this);
    if (this.options.placeHolderColor != null) {
      this.html += "<style type='text/css'>::-webkit-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-moz-placeholder { color: " + this.options.placeHolderColor + "; } :-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } ::-ms-input-placeholder { color: " + this.options.placeHolderColor + "; } :placeholder-shown { color: " + this.options.placeHolderColor + "; }</style>";
    }
    this.input = document.createElement("input");
    this.input.type = this.options.type;
    if (this.options.value != null) {
      this.input.value = this.options.value;
    }
    if (this.options.placeHolder != null) {
      this.input.placeholder = this.options.placeHolder;
    }
    if (this.options.pattern != null) {
      this.input.pattern = this.options.pattern;
    }
    if (this.options.maxLength != null) {
      this.input.setAttribute("maxLength", this.options.maxLength);
    }
    this.input.setAttribute("autocapitalize", (this.options.autoCapitalize === true ? "on" : "off"));
    this.input.setAttribute("autocomplete", (this.options.autoComplete === true ? "on" : "off"));
    this.input.setAttribute("autocorrect", (this.options.autoCorrect === true ? "on" : "off"));
    this._element.appendChild(this.input);
    this.isEmpty = !(((ref = this.options.value) != null ? ref.length : void 0) > 0);
    this.originalTextColor = this.options.color;
    inputStyle = {
      font: this.options.fontWeight + " " + this.options.fontSize + "px/" + this.options.lineHeight + " " + this.options.fontFamily,
      outline: "none",
      textIndent: this.options.indent + "px",
      backgroundColor: "transparent",
      height: "100%",
      width: "100%",
      pointerEvents: "none",
      margin: "0",
      padding: "0",
      "-webkit-appearance": "none"
    };
    for (key in inputStyle) {
      val = inputStyle[key];
      this.input.style[key] = val;
    }
    if (this.options.color != null) {
      this.input.style.color = this.options.color;
    }
    this.input.onfocus = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (_this.options.placeHolderFocus != null) {
          _this.input.placeholder = _this.options.placeHolderFocus;
        }
        document.body.scrollTop = 0;
        return _this.emit(Events.Focus, _this.input.value, _this);
      };
    })(this);
    this.input.onblur = (function(_this) {
      return function() {
        document.body.scrollTop = 0;
        if (!(_this.input.placeholder === _this.options.placeHolder || (_this.options.placeHolder == null))) {
          _this.input.placeholder = _this.options.placeHolder;
        }
        return _this.emit(Events.Blur, _this.input.value, _this);
      };
    })(this);
    this.input.oninput = (function(_this) {
      return function() {
        var ref1;
        _this.isEmpty = !(((ref1 = _this.input.value) != null ? ref1.length : void 0) > 0);
        _this.emit(Events.Input, _this.input.value, _this);
        return _this.checkValidity();
      };
    })(this);
    this.on(Events.TouchEnd, function() {
      return this.input.focus();
    });
    this.on("change:color", function() {
      return this.changeInputTextColor();
    });
  }

  InputField.prototype.checkValidity = function() {
    var ref, validity;
    if (!this.shouldCheckValidity) {
      return;
    }
    if (this.options.pattern != null) {
      validity = this.input.checkValidity();
      this.isEmpty = !(((ref = this.input.value) != null ? ref.length : void 0) > 0);
      if (this.isValid !== validity || this.isEmpty) {
        if (this.isEmpty || !validity) {
          this.isValid = false;
          this.emit(Events.Invalid, this.input.value, this);
        } else {
          this.isValid = true;
          this.emit(Events.Valid, this.input.value, this);
        }
      }
    }
    if (this.checkMatch()) {
      this.isValid = true;
      return this.emit(Events.Match, this.input.value, this);
    }
  };

  InputField.prototype.checkMatch = function() {
    var i, len, match, ref;
    if (this.options.match == null) {
      return false;
    }
    if (Array.isArray(this.options.match)) {
      ref = this.options.match;
      for (i = 0, len = ref.length; i < len; i++) {
        match = ref[i];
        if (this.input.value.indexOf(match) > -1) {
          return true;
        }
      }
    } else {
      if (this.input.value.indexOf(this.options.match) > -1) {
        return true;
      }
    }
    return false;
  };

  InputField.prototype.clear = function() {
    this.input.value = "";
    this.isValid = null;
    return this.isEmpty = true;
  };

  InputField.prototype.changeInputTextColor = function() {
    return this.input.style.color = this.color.toHexString();
  };

  InputField.prototype.changeInputValue = function(v) {
    this.input.value = v;
    return this.input.oninput();
  };

  return InputField;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NoaW5ha2FqL0Rlc2t0b3AvRHJpYmJibGUvMDkyNy9ib29zdG5vdGUuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvc2hpbmFrYWovRGVza3RvcC9EcmliYmJsZS8wOTI3L2Jvb3N0bm90ZS5mcmFtZXIvbW9kdWxlcy9JbnB1dEZpZWxkLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4jIENyZWF0ZWQgMDcgSmFuIDIwMTYgYnkgSm9yZGFuIFJvYmVydCBEb2Jzb24gLyBAam9yZGFuZG9ic29uIC8gSm9yZGFuRG9ic29uLmNvbVxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbiNcbiMgVmFsaWQgJiBUZXN0ZWQgSW5wdXRGaWVsZCBUeXBlczogXG4jIFx0XCJ0ZXh0XCIsIFwiZW1haWxcIiwgXCJudW1iZXJcIiwgXCJudW1iZXItb25seVwiLCBcInVybFwiLCBcInRlbFwiLCBcInBhc3N3b3JkXCIsIFwic2VhcmNoXCJcbiMgXHRcInRpbWVcIiwgXCJtb250aFwiLCBcImRhdGVcIiwgXCJkYXRldGltZS1sb2NhbFwiXG4jIFxuIyBUaGUgdGltZSAmIGRhdGUgdHlwZXMgUkVRVUlSRSB0aGUgdmFsdWUgcHJvcGVydHkgaXMgaW4gYSBjb3JyZWN0IGZvcm1hdCAmIElHTk9SRSB0aGUgcGxhY2Vob2xkZXIgcHJvcGVydHkuXG4jIFxuIyBIZXJlJ3MgYSBmZXcgZXhhbXBsZXMgdG8gdXNlIGZvciB0aGUgdmFsdWU6IHByb3BlcnR5IHdoZW4geW91IGNyZWF0ZSB0aGVtOlxuI1xuIyBcdCogdGltZTogXCIxMjozOFwiXG4jIFx0KiBtb250aDogXCIyMDE2LTAxXCJcbiMgXHQqIGRhdGU6IFwiMjAxNi0wMS0wNFwiXG4jIFx0KiBkYXRldGltZS1sb2NhbDogXCIyMDE2LTAxLTA0VDEyOjQ0OjMxLjE5MlwiXG4jXG4jIE5PVEVTIC8gXG4jIFx0U29tZSB0eXBlcyB3b3JrIGJldHRlciB0aGFuIG90aGVycyBvbiBtb2JpbGUgb3IgZGlzcGxheSBkaWZmZXJlbnRseSB0aGFuIGRlc2t0b3AuXG4jIFx0QWxsIHByb3BlcnRpZXMgd2lsbCB3b3JrIHdpdGggaW5wdXQgdHlwZSBcInRleHRcIiBidXQgbWF5IG5vdCB3b3JrIHdpdGggb3RoZXIgdHlwZXMuXG4jIFx0U29tZSBldmVudHMgd29uJ3QgZmlyZSBpZiB5b3UgZW50ZXIgaW5jb3JyZWN0IGNvbnRlbnQgZm9yIHRoZSBmaWVsZCB0eXBlOiBpLmUuIFwiaGVsbG9cIiBmb3IgaW5wdXQgdHlwZSBcIm51bWJlclwiLlxuIyBcdEZpbmQgbW9yZSBwYXR0ZXJucyBmb3IgVmFsaWQgYW5kIEludmFsaWQgZXZlbnRzIGF0IGh0dHA6Ly9odG1sNXBhdHRlcm4uY29tXG4jIFxuIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuXG5jbGFzcyBleHBvcnRzLklucHV0RmllbGQgZXh0ZW5kcyBMYXllclxuXG5cdFBBVFRFUk5fTlVNQkVSID0gXCJbMC05XSpcIlxuXHRcblx0SU5QVVRfSElERV9QU1VFRE9fVUkgID0gXCJ7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgZGlzcGxheTogbm9uZTsgfVwiXG5cdElOUFVUX1NFTEVDVE9SX05VTUJFUiA9IFwiaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b25cIlxuXHRJTlBVVF9TRUxFQ1RPUl9TRUFSQ0ggPSBcImlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvblwiXG5cdFxuXHRFdmVudHMuSW5wdXQgICA9IFwiSW5wdXRGaWVsZC5PbklucHV0XCJcblx0RXZlbnRzLkZvY3VzICAgPSBcIklucHV0RmllbGQuT25Gb2N1c1wiXG5cdEV2ZW50cy5CbHVyICAgID0gXCJJbnB1dEZpZWxkLk9uQmx1clwiXG5cdEV2ZW50cy5WYWxpZCAgID0gXCJJbnB1dEZpZWxkLk9uVmFsaWRcIlxuXHRFdmVudHMuSW52YWxpZCA9IFwiSW5wdXRGaWVsZC5PbkludmFsaWRcIlxuXHRFdmVudHMuTWF0Y2ggICA9IFwiSW5wdXRGaWVsZC5Pbk1hdGNoXCJcblx0XG5cdEBkZWZpbmUgXCJ2YWx1ZVwiLFxuXHRcdGdldDogLT5cblx0XHRcdEBpbnB1dC52YWx1ZVxuXHRcdFx0XG5cdFx0c2V0OiAodikgLT5cblx0XHRcdHJldHVybiB1bmxlc3MgdlxuXHRcdFx0aWYgQGlucHV0XG5cdFx0XHRcdEBjaGFuZ2VJbnB1dFZhbHVlIHZcblxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cdFxuXHRcdEBpc051bWJlciA9IGZhbHNlXG5cdFx0QGlzU2VhcmNoID0gZmFsc2Vcblx0XHRcblx0XHRAaXNFbXB0eSAgPSB0cnVlXG5cdFx0QGlzVmFsaWQgID0gbnVsbFxuXHRcdEBvcmlnaW5hbFRleHRDb2xvciA9IG51bGxcblx0XHRcblx0XHQjIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIENoZWNraW5nIEZsYWdcblx0XHRAc2hvdWxkQ2hlY2tWYWxpZGl0eSA9IHRydWUgaWYgQG9wdGlvbnMucGF0dGVybj8gb3IgQG9wdGlvbnMubWF0Y2g/XG5cblx0XHQjIE1ha2Ugc3VyZSB0aGlzIGlzIGluIHB4XG5cdFx0QG9wdGlvbnMubGluZUhlaWdodCA9IFwiI3tAb3B0aW9ucy5saW5lSGVpZ2h0fXB4XCIgaWYgQG9wdGlvbnMubGluZUhlaWdodD9cblx0XHQgXHRcdFx0XHRcdFx0XHRcdFxuXHRcdCMgRnJhbWVyIExheWVyIFByb3BzXG5cdFx0QG9wdGlvbnMubmFtZSAgICAgICAgICAgICA/PSBcIiN7QG9wdGlvbnMudHlwZX1JbnB1dFwiXG5cdFx0QG9wdGlvbnMuY29sb3IgICAgICAgICAgICA/PSBcImJsYWNrXCJcblx0XHRAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgID89IFwiXCJcblx0XHRAb3B0aW9ucy5ib3JkZXJSYWRpdXMgICAgID89IDBcblxuXHRcdCMgQ3VzdG9tIExheWVyIFByb3BzXHRcdFxuXHRcdEBvcHRpb25zLnR5cGUgICAgICAgICAgICAgPz0gXCJ0ZXh0XCJcblx0XHRAb3B0aW9ucy5mb250U2l6ZSAgICAgICAgID89IDMyXG5cdFx0QG9wdGlvbnMuZm9udFdlaWdodCAgICAgICA/PSAzMDBcblx0XHRAb3B0aW9ucy5mb250RmFtaWx5ICAgICAgID89IFwiLWFwcGxlLXN5c3RlbSwgSGVsdmV0aWNhIE5ldWVcIlxuXHRcdEBvcHRpb25zLmxpbmVIZWlnaHQgICAgICAgPz0gMS4yNVxuXHRcdEBvcHRpb25zLmluZGVudCAgICAgICAgICAgPz0gMFxuXHRcdEBvcHRpb25zLnBsYWNlSG9sZGVyRm9jdXMgPz0gbnVsbFxuXHRcdEBvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3IgPz0gbnVsbFxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblx0XHRcblx0XHQjIEFkanVzdCBhIGZldyB0aGluZ3MgZm9yIHZhcmlvdXMgdHlwZXNcblx0XHRcblx0XHRzd2l0Y2ggQG9wdGlvbnMudHlwZVxuXHRcdFx0d2hlbiBcInNlYXJjaFwiIHRoZW4gQGlzU2VhcmNoID0gdHJ1ZVxuXHRcdFx0d2hlbiBcIm51bWJlclwiIHRoZW4gQGlzTnVtYmVyID0gdHJ1ZVxuXHRcdFx0d2hlbiBcIm51bWJlcnMtb25seVwiLCBcIm51bWJlci1vbmx5XCJcblx0XHRcdFx0QGlzTnVtYmVyID0gdHJ1ZVxuXHRcdFx0XHRAb3B0aW9ucy50eXBlICAgID0gaWYgQG9wdGlvbnMucGF0dGVybj8gdGhlbiBcIm51bWJlclwiICAgICAgICAgIGVsc2UgXCJ0ZXh0XCJcblx0XHRcdFx0QG9wdGlvbnMucGF0dGVybiA9IGlmIEBvcHRpb25zLnBhdHRlcm4/IHRoZW4gQG9wdGlvbnMucGF0dGVybiBlbHNlIFBBVFRFUk5fTlVNQkVSXG5cdFx0XG5cdFx0QGh0bWwgKz0gc3dpdGNoXG5cdFx0XHR3aGVuIEBpc051bWJlciB0aGVuIFwiPHN0eWxlIHR5cGU9J3RleHQvY3NzJz4je0lOUFVUX1NFTEVDVE9SX05VTUJFUn0je0lOUFVUX0hJREVfUFNVRURPX1VJfTwvc3R5bGU+XCJcblx0XHRcdHdoZW4gQGlzU2VhcmNoIHRoZW4gXCI8c3R5bGUgdHlwZT0ndGV4dC9jc3MnPiN7SU5QVVRfU0VMRUNUT1JfU0VBUkNIfSN7SU5QVVRfSElERV9QU1VFRE9fVUl9PC9zdHlsZT5cIlxuXHRcdFx0ZWxzZSBcIlwiXG5cblx0XHRpZiBAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yP1xuXHRcdFx0QGh0bWwgKz0gXCI8c3R5bGUgdHlwZT0ndGV4dC9jc3MnPjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI3tAb3B0aW9ucy5wbGFjZUhvbGRlckNvbG9yfTsgfSA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9IDpwbGFjZWhvbGRlci1zaG93biB7IGNvbG9yOiAje0BvcHRpb25zLnBsYWNlSG9sZGVyQ29sb3J9OyB9PC9zdHlsZT5cIlxuXHRcdFx0XG5cdFx0IyBDcmVhdGUgVGhlIElucHV0XG5cdFx0XG5cdFx0QGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBcImlucHV0XCJcblx0XHRcblx0XHRAaW5wdXQudHlwZSAgICAgICAgPSBAb3B0aW9ucy50eXBlXG5cdFx0QGlucHV0LnZhbHVlICAgICAgID0gQG9wdGlvbnMudmFsdWUgICAgICAgICAgICAgICAgICBpZiBAb3B0aW9ucy52YWx1ZT9cblx0XHRAaW5wdXQucGxhY2Vob2xkZXIgPSBAb3B0aW9ucy5wbGFjZUhvbGRlciAgICAgICAgICAgIGlmIEBvcHRpb25zLnBsYWNlSG9sZGVyP1xuXHRcdEBpbnB1dC5wYXR0ZXJuICAgICA9IEBvcHRpb25zLnBhdHRlcm4gICAgICAgICAgICAgICAgaWYgQG9wdGlvbnMucGF0dGVybj9cblx0XHRAaW5wdXQuc2V0QXR0cmlidXRlKFwibWF4TGVuZ3RoXCIsIEBvcHRpb25zLm1heExlbmd0aCkgaWYgQG9wdGlvbnMubWF4TGVuZ3RoP1xuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY2FwaXRhbGl6ZVwiLCAoaWYgQG9wdGlvbnMuYXV0b0NhcGl0YWxpemUgaXMgdHJ1ZSB0aGVuIFwib25cIiBlbHNlIFwib2ZmXCIpKVxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgICAoaWYgQG9wdGlvbnMuYXV0b0NvbXBsZXRlICAgaXMgdHJ1ZSB0aGVuIFwib25cIiBlbHNlIFwib2ZmXCIpKVxuXHRcdEBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhdXRvY29ycmVjdFwiLCAgICAoaWYgQG9wdGlvbnMuYXV0b0NvcnJlY3QgICAgaXMgdHJ1ZSB0aGVuIFwib25cIiBlbHNlIFwib2ZmXCIpKVxuXHRcdFxuXHRcdEBfZWxlbWVudC5hcHBlbmRDaGlsZCBAaW5wdXRcblx0XHRcblx0XHQjIFNldHVwIFZhbHVlc1xuXHRcdEBpc0VtcHR5ICAgICAgICAgICA9ICEoQG9wdGlvbnMudmFsdWU/Lmxlbmd0aCA+IDApXG5cdFx0QG9yaWdpbmFsVGV4dENvbG9yID0gQG9wdGlvbnMuY29sb3Jcblx0XHRcblx0XHQjIFNldHVwIElucHV0IFN0eWxlXG5cdFx0XG5cdFx0aW5wdXRTdHlsZSA9XG5cdFx0XHRmb250OiBcIiN7QG9wdGlvbnMuZm9udFdlaWdodH0gI3tAb3B0aW9ucy5mb250U2l6ZX1weC8je0BvcHRpb25zLmxpbmVIZWlnaHR9ICN7QG9wdGlvbnMuZm9udEZhbWlseX1cIlxuXHRcdFx0b3V0bGluZTogXCJub25lXCJcblx0XHRcdHRleHRJbmRlbnQ6IFwiI3tAb3B0aW9ucy5pbmRlbnR9cHhcIlxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCJcblx0XHRcdGhlaWdodDogXCIxMDAlXCJcblx0XHRcdHdpZHRoOiAgXCIxMDAlXCJcblx0XHRcdHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXG5cdFx0XHRtYXJnaW46IFwiMFwiXG5cdFx0XHRwYWRkaW5nOiBcIjBcIlxuXHRcdFx0XCItd2Via2l0LWFwcGVhcmFuY2VcIjogXCJub25lXCJcblx0XHRcdFxuXHRcdEBpbnB1dC5zdHlsZVtrZXldICA9IHZhbCBmb3Iga2V5LCB2YWwgb2YgaW5wdXRTdHlsZVxuXHRcdEBpbnB1dC5zdHlsZS5jb2xvciA9IEBvcHRpb25zLmNvbG9yIGlmIEBvcHRpb25zLmNvbG9yP1xuXHRcdFxuXHRcdEBpbnB1dC5vbmZvY3VzID0gPT5cblx0XHRcdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuXHRcdFx0QGlucHV0LnBsYWNlaG9sZGVyID0gQG9wdGlvbnMucGxhY2VIb2xkZXJGb2N1cyBpZiBAb3B0aW9ucy5wbGFjZUhvbGRlckZvY3VzP1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwXG5cdFx0XHRAZW1pdChFdmVudHMuRm9jdXMsIEBpbnB1dC52YWx1ZSwgQClcblxuXHRcdEBpbnB1dC5vbmJsdXIgID0gPT5cblx0XHRcdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuXHRcdFx0dW5sZXNzIEBpbnB1dC5wbGFjZWhvbGRlciBpcyBAb3B0aW9ucy5wbGFjZUhvbGRlciBvciAhQG9wdGlvbnMucGxhY2VIb2xkZXI/XG5cdFx0XHRcdEBpbnB1dC5wbGFjZWhvbGRlciA9IEBvcHRpb25zLnBsYWNlSG9sZGVyXG5cdFx0XHRAZW1pdChFdmVudHMuQmx1ciwgQGlucHV0LnZhbHVlLCBAKVxuXG5cdFx0QGlucHV0Lm9uaW5wdXQgPSA9PlxuXHRcdFx0QGlzRW1wdHkgPSAhKCBAaW5wdXQudmFsdWU/Lmxlbmd0aCA+IDApXG5cdFx0XHRAZW1pdChFdmVudHMuSW5wdXQsIEBpbnB1dC52YWx1ZSwgQClcblx0XHRcdEBjaGVja1ZhbGlkaXR5KClcblx0XHRcdFxuXHRcdEBvbiBFdmVudHMuVG91Y2hFbmQsIC0+IEBpbnB1dC5mb2N1cygpXG5cdFx0QG9uIFwiY2hhbmdlOmNvbG9yXCIsICAtPiBAY2hhbmdlSW5wdXRUZXh0Q29sb3IoKVxuXHRcdFxuXHRjaGVja1ZhbGlkaXR5OiAtPlxuXHRcdHJldHVybiB1bmxlc3MgQHNob3VsZENoZWNrVmFsaWRpdHlcblxuXHRcdGlmIEBvcHRpb25zLnBhdHRlcm4/XG5cdFx0XHR2YWxpZGl0eSA9IEBpbnB1dC5jaGVja1ZhbGlkaXR5KClcblx0XHRcdEBpc0VtcHR5ID0gISggQGlucHV0LnZhbHVlPy5sZW5ndGggPiAwKVxuXHRcdFx0XG5cdFx0XHRpZiBAaXNWYWxpZCBpc250IHZhbGlkaXR5IG9yIEBpc0VtcHR5XG5cdFx0XHRcdGlmIEBpc0VtcHR5IG9yICF2YWxpZGl0eVxuXHRcdFx0XHRcdEBpc1ZhbGlkID0gZmFsc2Vcblx0XHRcdFx0XHRAZW1pdChFdmVudHMuSW52YWxpZCwgQGlucHV0LnZhbHVlLCBAKVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0QGlzVmFsaWQgPSB0cnVlXG5cdFx0XHRcdFx0QGVtaXQoRXZlbnRzLlZhbGlkLCAgIEBpbnB1dC52YWx1ZSwgQClcblx0XHRcdFx0XHRcblx0XHRpZiBAY2hlY2tNYXRjaCgpXG5cdFx0XHRAaXNWYWxpZCA9IHRydWVcblx0XHRcdEBlbWl0KEV2ZW50cy5NYXRjaCwgQGlucHV0LnZhbHVlLCBAKVxuXHRcdFx0XG5cdGNoZWNrTWF0Y2g6IC0+XG5cdFx0cmV0dXJuIGZhbHNlIHVubGVzcyBAb3B0aW9ucy5tYXRjaD9cblx0XHRpZiBBcnJheS5pc0FycmF5KEBvcHRpb25zLm1hdGNoKVxuXHRcdFx0Zm9yIG1hdGNoIGluIEBvcHRpb25zLm1hdGNoXG5cdFx0XHRcdHJldHVybiB0cnVlIGlmIEBpbnB1dC52YWx1ZS5pbmRleE9mKG1hdGNoKSA+IC0xXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHRydWUgaWYgQGlucHV0LnZhbHVlLmluZGV4T2YoQG9wdGlvbnMubWF0Y2gpID4gLTFcblx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdFxuXHRjbGVhcjogLT5cblx0XHRAaW5wdXQudmFsdWUgPSBcIlwiXG5cdFx0QGlzVmFsaWQgPSBudWxsXG5cdFx0QGlzRW1wdHkgPSB0cnVlXG5cdFx0XG5cdGNoYW5nZUlucHV0VGV4dENvbG9yOiAtPiBcblx0XHRAaW5wdXQuc3R5bGUuY29sb3IgPSBAY29sb3IudG9IZXhTdHJpbmcoKVxuXHRcblx0Y2hhbmdlSW5wdXRWYWx1ZTogKHYpIC0+XG5cdFx0QGlucHV0LnZhbHVlID0gdlxuXHRcdEBpbnB1dC5vbmlucHV0KClcblx0XHRcblx0XHRcblx0XHQiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBRDBCQSxJQUFBOzs7QUFBTSxPQUFPLENBQUM7QUFFYixNQUFBOzs7O0VBQUEsY0FBQSxHQUFpQjs7RUFFakIsb0JBQUEsR0FBd0I7O0VBQ3hCLHFCQUFBLEdBQXdCOztFQUN4QixxQkFBQSxHQUF3Qjs7RUFFeEIsTUFBTSxDQUFDLEtBQVAsR0FBaUI7O0VBQ2pCLE1BQU0sQ0FBQyxLQUFQLEdBQWlCOztFQUNqQixNQUFNLENBQUMsSUFBUCxHQUFpQjs7RUFDakIsTUFBTSxDQUFDLEtBQVAsR0FBaUI7O0VBQ2pCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCOztFQUNqQixNQUFNLENBQUMsS0FBUCxHQUFpQjs7RUFFakIsVUFBQyxDQUFBLE1BQUQsQ0FBUSxPQUFSLEVBQ0M7SUFBQSxHQUFBLEVBQUssU0FBQTthQUNKLElBQUMsQ0FBQSxLQUFLLENBQUM7SUFESCxDQUFMO0lBR0EsR0FBQSxFQUFLLFNBQUMsQ0FBRDtNQUNKLElBQUEsQ0FBYyxDQUFkO0FBQUEsZUFBQTs7TUFDQSxJQUFHLElBQUMsQ0FBQSxLQUFKO2VBQ0Ms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
