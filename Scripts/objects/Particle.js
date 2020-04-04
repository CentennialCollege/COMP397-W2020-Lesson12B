"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Particle = /** @class */ (function (_super) {
        __extends(Particle, _super);
        // CONSTRUCTOR
        function Particle(type, size) {
            if (size === void 0) { size = 50; }
            var _this = _super.call(this) || this;
            // PUBLIC INSTANCE VARIABLES
            // Physical Properties
            _this.velocity = new objects.Vector2();
            _this.acceleration = new objects.Vector2();
            _this.force = new objects.Vector2();
            _this.mass = 1.0;
            _this.life = 0; // lifetime remaining in seconds
            _this.size = size;
            _this.type = type;
            _this._initialize();
            return _this;
        }
        // PRIVATE METHODS
        Particle.prototype._initialize = function () {
            // this.graphics = new createjs.Graphics(); 
            this.graphics.clear();
            this.graphics.setStrokeStyle(1);
            this.graphics.beginStroke("#000000");
            this.graphics.beginFill("#000000");
            switch (this.type) {
                case enums.ParticleShape.CIRCLE:
                    this.graphics.drawCircle(0, 0, this.size);
                    break;
                case enums.ParticleShape.SQUARE:
                    this.graphics.drawRect(0, 0, this.size, this.size);
                    break;
                case enums.ParticleShape.TRIANGLE:
                    this.graphics.drawPolyStar(0, 0, this.size, 3, 0, 90);
                    break;
                case enums.ParticleShape.HEXAGON:
                    this.graphics.drawPolyStar(0, 0, this.size, 6, 0, 90);
                    break;
                case enums.ParticleShape.STAR:
                    this.graphics.drawPolyStar(0, 0, this.size, 5, 0.5, 90);
                    break;
            }
            this.graphics.endFill();
            //this.shape = new createjs.Shape(this.graphics);
        };
        // PUBLIC METHODS
        Particle.prototype.Update = function () {
            // physics calculations
            this.force.x /= this.mass;
            this.force.y /= this.mass;
            this.acceleration.add(this.force);
            this.velocity.add(this.acceleration);
        };
        return Particle;
    }(createjs.Shape));
    objects.Particle = Particle;
})(objects || (objects = {}));
//# sourceMappingURL=Particle.js.map