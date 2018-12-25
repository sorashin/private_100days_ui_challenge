require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"BodymovinLayer":[function(require,module,exports){

/*
BodymovinLayer
-
Implementation of Hernan Torrisi's "Bodymovin" plugin, for Framer.
by @72mena
 */
var insertScript,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

insertScript = function(localScript, webScript, name) {
  var e, head, lib, script;
  if (name == null) {
    name = 'JavaScript Library';
  }
  try {
    lib = Utils.domLoadDataSync(localScript);
    console.log("%c" + name + " Successfully Included Locally", "background: #DDFFE3; color: #007814");
  } catch (error) {
    e = error;
    try {
      lib = Utils.domLoadDataSync(webScript);
      console.log("%c" + name + " Successfully Included from Web", "background: #DDFFE3; color: #007814");
    } catch (error) {
      e = error;
      throw Error("Sorry, I couldn't load " + name);
    }
  }
  script = document.createElement("script");
  script.type = "text/javascript";
  script.innerHTML = lib;
  head = document.getElementsByTagName("head")[0];
  head.appendChild(script);
  return script;
};

insertScript("modules/bodymovin.min.js", "https://raw.githubusercontent.com/bodymovin/bodymovin/master/build/player/bodymovin.min.js", "Bodymovin Library");

exports.BodymovinLayer = (function(superClass) {
  extend(BodymovinLayer, superClass);

  BodymovinLayer.define("speed", {
    get: function() {
      return this._properties["speed"];
    },
    set: function(value) {
      this._properties["speed"] = value;
      if (this.built) {
        this.setSpeed(value);
      }
      return this.emit("change:speed");
    }
  });

  BodymovinLayer.define("direction", {
    get: function() {
      return this._properties["direction"];
    },
    set: function(value) {
      this._properties["direction"] = value;
      if (this.built) {
        this.setDirection(value);
      }
      return this.emit("change:direction");
    }
  });

  BodymovinLayer.define("path", {
    get: function() {
      return this._properties["path"];
    },
    set: function(value) {
      this._properties["path"] = value;
      if (this.built) {
        this.setSettings();
      }
      return this.emit("change:path");
    }
  });

  function BodymovinLayer(options) {
    var base, base1, base2, base3, base4, base5, base6;
    this.options = options != null ? options : {};
    if ((base = this.options).backgroundColor == null) {
      base.backgroundColor = null;
    }
    if ((base1 = this.options).path == null) {
      base1.path = null;
    }
    if ((base2 = this.options).autoplay == null) {
      base2.autoplay = true;
    }
    if ((base3 = this.options).loop == null) {
      base3.loop = true;
    }
    if ((base4 = this.options).speed == null) {
      base4.speed = 1;
    }
    if ((base5 = this.options).direction == null) {
      base5.direction = 1;
    }
    if ((base6 = this.options).renderer == null) {
      base6.renderer = "svg";
    }
    BodymovinLayer.__super__.constructor.call(this, this.options);
    if (this.options.path === null) {
      print("From BodymovinLayer: Setting a path to your json file is required.");
    }
    if (this.name === "") {
      print("From BodymovinLayer: The 'name' attribute is required.");
    }
    this.autoplay = this.options.autoplay;
    this.loop = this.options.loop;
    this.renderer = this.options.renderer;
    this.built = false;
    this._animationLayer = null;
    this.build();
  }

  BodymovinLayer.prototype.build = function() {
    this.html = '<div id=' + ("" + this.name) + '></div>';
    this.setSettings();
    return this.built = true;
  };

  BodymovinLayer.prototype.setSettings = function() {
    var _container, bodymovinSettings;
    _container = document.getElementById(this.name);
    _container.innerHTML = "";
    bodymovinSettings = {
      container: _container,
      path: this.path,
      renderer: this.renderer,
      autoplay: this.autoplay,
      loop: this.loop
    };
    this._animationLayer = bodymovin.loadAnimation(bodymovinSettings);
    this.setSpeed();
    return this.setDirection();
  };

  BodymovinLayer.prototype.play = function() {
    return this._animationLayer.play();
  };

  BodymovinLayer.prototype.stop = function() {
    return this._animationLayer.stop();
  };

  BodymovinLayer.prototype.pause = function() {
    return this._animationLayer.pause();
  };

  BodymovinLayer.prototype.goToAndPlay = function(value, isFrame) {
    if (isFrame == null) {
      isFrame = true;
    }
    return this._animationLayer.goToAndPlay(value, isFrame);
  };

  BodymovinLayer.prototype.goToAndStop = function(value, isFrame) {
    if (isFrame == null) {
      isFrame = true;
    }
    return this._animationLayer.goToAndStop(value, isFrame);
  };

  BodymovinLayer.prototype.playSegments = function(segments, forceFlag) {
    if (forceFlag == null) {
      forceFlag = true;
    }
    return this._animationLayer.playSegments(segments, forceFlag);
  };

  BodymovinLayer.prototype.setSpeed = function(speed) {
    if (speed == null) {
      speed = this.speed;
    }
    return this._animationLayer.setSpeed(speed);
  };

  BodymovinLayer.prototype.setDirection = function(direction) {
    if (direction == null) {
      direction = this.direction;
    }
    return this._animationLayer.setDirection(direction);
  };

  return BodymovinLayer;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NoaW5ha2FqL0Rlc2t0b3AvRHJpYmJibGUvMDczMS9ERU1PLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NoaW5ha2FqL0Rlc2t0b3AvRHJpYmJibGUvMDczMS9ERU1PLmZyYW1lci9tb2R1bGVzL0JvZHltb3ZpbkxheWVyLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIiMjI1xuQm9keW1vdmluTGF5ZXJcbi1cbkltcGxlbWVudGF0aW9uIG9mIEhlcm5hbiBUb3JyaXNpJ3MgXCJCb2R5bW92aW5cIiBwbHVnaW4sIGZvciBGcmFtZXIuXG5ieSBANzJtZW5hXG4jIyNcblxuIyBJTkNMVURFIExJQlJBUlkg4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG5pbnNlcnRTY3JpcHQgPSAobG9jYWxTY3JpcHQsIHdlYlNjcmlwdCwgbmFtZSA9ICdKYXZhU2NyaXB0IExpYnJhcnknKSAtPlxuXHR0cnlcblx0XHRsaWIgPSBVdGlscy5kb21Mb2FkRGF0YVN5bmMgbG9jYWxTY3JpcHRcblx0XHRjb25zb2xlLmxvZyBcIiVjI3tuYW1lfSBTdWNjZXNzZnVsbHkgSW5jbHVkZWQgTG9jYWxseVwiLCBcImJhY2tncm91bmQ6ICNEREZGRTM7IGNvbG9yOiAjMDA3ODE0XCJcblx0Y2F0Y2ggZVxuXHRcdHRyeVxuXHRcdFx0bGliID0gVXRpbHMuZG9tTG9hZERhdGFTeW5jIHdlYlNjcmlwdFxuXHRcdFx0Y29uc29sZS5sb2cgXCIlYyN7bmFtZX0gU3VjY2Vzc2Z1bGx5IEluY2x1ZGVkIGZyb20gV2ViXCIsIFwiYmFja2dyb3VuZDogI0RERkZFMzsgY29sb3I6ICMwMDc4MTRcIlxuXHRcdGNhdGNoIGVcblx0XHRcdHRocm93IEVycm9yKFwiU29ycnksIEkgY291bGRuJ3QgbG9hZCAje25hbWV9XCIpXG5cblxuXHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IFwic2NyaXB0XCJcblx0c2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiXG5cdHNjcmlwdC5pbm5lckhUTUwgPSBsaWJcblxuXHRoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdXG5cdGhlYWQuYXBwZW5kQ2hpbGQgc2NyaXB0XG5cblx0c2NyaXB0XG5cbmluc2VydFNjcmlwdChcIm1vZHVsZXMvYm9keW1vdmluLm1pbi5qc1wiLCBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ib2R5bW92aW4vYm9keW1vdmluL21hc3Rlci9idWlsZC9wbGF5ZXIvYm9keW1vdmluLm1pbi5qc1wiLCBcIkJvZHltb3ZpbiBMaWJyYXJ5XCIpXG5cblxuIyBCT0RZTU9WSU4gTEFZRVIg4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG5jbGFzcyBleHBvcnRzLkJvZHltb3ZpbkxheWVyIGV4dGVuZHMgTGF5ZXJcblxuXHRAZGVmaW5lIFwic3BlZWRcIixcblx0XHRnZXQ6IC0+IEBfcHJvcGVydGllc1tcInNwZWVkXCJdXG5cdFx0c2V0OiAodmFsdWUpIC0+XG5cdFx0XHRAX3Byb3BlcnRpZXNbXCJzcGVlZFwiXSA9IHZhbHVlXG5cdFx0XHRAc2V0U3BlZWQodmFsdWUpIGlmIEBidWlsdFxuXHRcdFx0QGVtaXQgXCJjaGFuZ2U6c3BlZWRcIlxuXG5cdEBkZWZpbmUgXCJkaXJlY3Rpb25cIixcblx0XHRnZXQ6IC0+IEBfcHJvcGVydGllc1tcImRpcmVjdGlvblwiXVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QF9wcm9wZXJ0aWVzW1wiZGlyZWN0aW9uXCJdID0gdmFsdWVcblx0XHRcdEBzZXREaXJlY3Rpb24odmFsdWUpIGlmIEBidWlsdFxuXHRcdFx0QGVtaXQgXCJjaGFuZ2U6ZGlyZWN0aW9uXCJcblxuXHRAZGVmaW5lIFwicGF0aFwiLFxuXHRcdGdldDogLT4gQF9wcm9wZXJ0aWVzW1wicGF0aFwiXVxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QF9wcm9wZXJ0aWVzW1wicGF0aFwiXSA9IHZhbHVlXG5cdFx0XHRAc2V0U2V0dGluZ3MoKSBpZiBAYnVpbHRcblx0XHRcdEBlbWl0IFwiY2hhbmdlOnBhdGhcIlxuXG5cblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblx0XHQjIERlZmF1bHRzXG5cdFx0QG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IG51bGxcblx0XHRAb3B0aW9ucy5wYXRoID89IG51bGxcblx0XHRAb3B0aW9ucy5hdXRvcGxheSA/PSB0cnVlXG5cdFx0QG9wdGlvbnMubG9vcCA/PSB0cnVlXG5cdFx0QG9wdGlvbnMuc3BlZWQgPz0gMVxuXHRcdEBvcHRpb25zLmRpcmVjdGlvbiA/PSAxXG5cdFx0QG9wdGlvbnMucmVuZGVyZXIgPz0gXCJzdmdcIlxuXG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdGlmIEBvcHRpb25zLnBhdGggaXMgbnVsbFxuXHRcdFx0cHJpbnQgXCJGcm9tIEJvZHltb3ZpbkxheWVyOiBTZXR0aW5nIGEgcGF0aCB0byB5b3VyIGpzb24gZmlsZSBpcyByZXF1aXJlZC5cIlxuXHRcdGlmIEBuYW1lIGlzIFwiXCJcblx0XHRcdHByaW50IFwiRnJvbSBCb2R5bW92aW5MYXllcjogVGhlICduYW1lJyBhdHRyaWJ1dGUgaXMgcmVxdWlyZWQuXCJcblxuXHRcdCNTaG9ydGN1dHNcblx0XHRAYXV0b3BsYXkgPSBAb3B0aW9ucy5hdXRvcGxheVxuXHRcdEBsb29wID0gQG9wdGlvbnMubG9vcFxuXHRcdEByZW5kZXJlciA9IEBvcHRpb25zLnJlbmRlcmVyXG5cblx0XHQjVmFyc1xuXHRcdEBidWlsdCA9IGZhbHNlXG5cdFx0QF9hbmltYXRpb25MYXllciA9IG51bGxcblxuXHRcdCNSdW5cblx0XHRAYnVpbGQoKVxuXG5cdGJ1aWxkOiAoKSAtPlxuXHRcdEBodG1sID0gJzxkaXYgaWQ9JytcIiN7QG5hbWV9XCIrJz48L2Rpdj4nXG5cdFx0QHNldFNldHRpbmdzKClcblx0XHRAYnVpbHQgPSB0cnVlXG5cblx0c2V0U2V0dGluZ3M6ICgpIC0+XG5cdFx0X2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKEBuYW1lKVxuXHRcdF9jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxuXG5cdFx0Ym9keW1vdmluU2V0dGluZ3MgPVxuXHRcdFx0Y29udGFpbmVyOiBfY29udGFpbmVyLFxuXHRcdFx0cGF0aDogQHBhdGgsXG5cdFx0XHRyZW5kZXJlcjogQHJlbmRlcmVyLFxuXHRcdFx0YXV0b3BsYXk6IEBhdXRvcGxheSxcblx0XHRcdGxvb3A6IEBsb29wXG5cblx0XHRAX2FuaW1hdGlvbkxheWVyID0gYm9keW1vdmluLmxvYWRBbmltYXRpb24oYm9keW1vdmluU2V0dGluZ3MpO1xuXHRcdEBzZXRTcGVlZCgpXG5cdFx0QHNldERpcmVjdGlvbigpXG5cblx0cGxheTogKCkgLT5cblx0XHRAX2FuaW1hdGlvbkxheWVyLnBsYXkoKVxuXHRzdG9wOiAoKSAtPlxuXHRcdEBfYW5pbWF0aW9uTGF5ZXIuc3RvcCgpXG5cdHBhdXNlOiAoKSAtPlxuXHRcdEBfYW5pbWF0aW9uTGF5ZXIucGF1c2UoKVxuXHRnb1RvQW5kUGxheTogKHZhbHVlLCBpc0ZyYW1lKSAtPlxuXHRcdGlzRnJhbWUgPz0gdHJ1ZVxuXHRcdEBfYW5pbWF0aW9uTGF5ZXIuZ29Ub0FuZFBsYXkodmFsdWUsIGlzRnJhbWUpXG5cdGdvVG9BbmRTdG9wOiAodmFsdWUsIGlzRnJhbWUpIC0+XG5cdFx0aXNGcmFtZSA/PSB0cnVlXG5cdFx0QF9hbmltYXRpb25MYXllci5nb1RvQW5kU3RvcCh2YWx1ZSwgaXNGcmFtZSlcblx0cGxheVNlZ21lbnRzOiAoc2VnbWVudHMsIGZvcmNlRmxhZykgLT5cblx0XHRmb3JjZUZsYWcgPz0gdHJ1ZVxuXHRcdEBfYW5pbWF0aW9uTGF5ZXIucGxheVNlZ21lbnRzKHNlZ21lbnRzLCBmb3JjZUZsYWcpXG5cdHNldFNwZWVkOiAoc3BlZWQpIC0+XG5cdFx0c3BlZWQgPz0gQHNwZWVkXG5cdFx0QF9hbmltYXRpb25MYXllci5zZXRTcGVlZChzcGVlZClcblx0c2V0RGlyZWN0aW9uOiAoZGlyZWN0aW9uKSAtPlxuXHRcdGRpcmVjdGlvbiA/PSBAZGlyZWN0aW9uXG5cdFx0QF9hbmltYXRpb25MYXllci5zZXREaXJlY3Rpb24oZGlyZWN0aW9uKVxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFFQUE7O0FEQUE7Ozs7OztBQUFBLElBQUEsWUFBQTtFQUFBOzs7QUFRQSxZQUFBLEdBQWUsU0FBQyxXQUFELEVBQWMsU0FBZCxFQUF5QixJQUF6QjtBQUNkLE1BQUE7O0lBRHVDLE9BQU87O0FBQzlDO0lBQ0MsR0FBQSxHQUFNLEtBQUssQ0FBQyxlQUFOLENBQXNCLFdBQXRCO0lBQ04sT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFBLEdBQUssSUFBTCxHQUFVLGdDQUF0QixFQUF1RCxxQ0FBdkQsRUFGRDtHQUFBLGFBQUE7SUFHTTtBQUNMO01BQ0MsR0FBQSxHQUFNLEtBQUssQ0FBQyxlQUFOLENBQXNCLFNBQXRCO01BQ04sT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFBLEdBQUssSUFBTCxHQUFVLGlDQUF0QixFQUF3RCxxQ0FBeEQsRUFGRDtLQUFBLGFBQUE7TUFHTTtBQUNMLFlBQU0sS0FBQSxDQUFNLHlCQUFBLEdBQTBCLElBQWhDLEVBSlA7S0FKRDs7RUFXQSxNQUFBLEdBQVMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkI7RUFDVCxNQUFNLENBQUMsSUFBUCxHQUFjO0VBQ2QsTUFBTSxDQUFDLFNBQVAsR0FBbUI7RUFFbkIsSUFBQSxHQUFPLFFBQVEsQ0FBQyxvQkFBVCxDQUE4QixNQUE5QixDQUFzQyxDQUFBLENBQUE7RUFDN0MsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsTUFBakI7U0FFQTtBQW5CYzs7QUFxQmYsWUFBQSxDQUFhLDBCQUFiLEVBQXlDLDRGQUF6QyxFQUF1SSxtQkFBdkk7O0FBSU0sT0FBTyxDQUFDOzs7RUFFYixjQUFDLENBQUEsTUFBRCxDQUFRLE9BQVIsRUFD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
