module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _ocean: objects.Ocean;
        private _particle: objects.Particle;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void 
        {
             //instantiate a new Text object
            this._welcomeLabel = new objects.Label("Mail Pilot", "80px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
             this._startButton = new objects.Button("startButton", 320, 430, true);

             this._ocean = new objects.Ocean();

             this._particle = new objects.Particle(enums.ParticleShape.SQUARE, 20);
             this._particle.x = 100;
             this._particle.y = 100;
            this.Main();
        }        
        
        public Update(): void 
        {
           this._ocean.Update();

           this._particle.Update();
        }
        
        public Main(): void 
        {
            //this.addChild(this._ocean);
       
            //this.addChild(this._welcomeLabel);

        
            //this.addChild(this._startButton);

            this._startButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });

            this.addChild(this._particle);

        }

        public Clean(): void{
            this.removeAllChildren();
        }

        
    }
}