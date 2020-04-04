module objects
{
    export class Particle extends createjs.Shape
    {
        // PUBLIC INSTANCE VARIABLES

        // Physical Properties
        public velocity: objects.Vector2 = new objects.Vector2();
        public acceleration: objects.Vector2 = new objects.Vector2();
        public force: objects.Vector2 = new objects.Vector2();
        public mass: number = 1.0;

        public size: number;
        public sizeBegin: number;
        public sizeEnd: number;

        public speedLimitBegin:number;
        public speedLimitEnd:number;

        public life: number = 0; // lifetime remaining in seconds
        public lifespan: number;

        //TODO: public colour: objects.Colour;

        // rendering properties
        //public shape: createjs.Shape; // canvas shape
        public shapeWidth: number;
        public shapeHeight: number;
        //public graphics: createjs.Graphics; // graphics class
        public filters: createjs.Filter[]; // filters array
        public type: enums.ParticleShape;

        // CONSTRUCTOR
        constructor(type: enums.ParticleShape, size: number = 50)
        {
            super();

            this.size = size;
            this.type = type;

            this._initialize();
        }

        // PRIVATE METHODS
        private _initialize():void
        {
           // this.graphics = new createjs.Graphics(); 
            this.graphics.clear();
            this.graphics.setStrokeStyle(1);
            this.graphics.beginStroke("#000000");
            this.graphics.beginFill("#000000");
            switch(this.type)
            {
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
        }

        // PUBLIC METHODS
        public Update():void
        {
            // physics calculations
            this.force.x /= this.mass;
            this.force.y /= this.mass;
            this.acceleration.add(this.force);
            this.velocity.add(this.acceleration);
        }

    }
}