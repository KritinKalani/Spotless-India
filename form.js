class Form{
    constructor(){
        this.button6 = createButton("Environment Department")
        //this.button1 = createButton("Forest Department")
        this.button2 = createButton("Energy/Electric Department")
        //this.button3 = createButton("Labor Department")
        this.button4 = createButton("Cleanliness Department")
        this.button5 = createButton("PublicWorks Department")
        this.location = createInput("Enter Location Manually");
        this.location.hide();
        this.checkbox = createCheckbox('', false);
        this.checkbox.hide();
  
        this.checkbox1 = createCheckbox('', false);
        this.checkbox1.hide();

        this.checkbox2 = createCheckbox('', false);
        this.checkbox2.hide();

        this.checkbox3 = createCheckbox('GPS', false);
        this.checkbox3.hide();
        this.submit = createButton("Submit");
        this.submit.hide();

        this.checkbox4 = createCheckbox('', false);
        this.checkbox4.hide();

        this.checkbox5 = createCheckbox('', false);
        this.checkbox5.hide();

        this.checkbox6 = createCheckbox('d', false);
        this.checkbox6.hide();

        this.checkbox7 = createCheckbox('', false);
this.checkbox5.hide;

    }
    display(){
//this.button1.position(10,100)
this.button2.position(10,150)
//this.button3.position(10,200)
this.button4.position(10,250)
this.button5.position(10,300)
this.button6.position(10,200)

/* this.button1.mousePressed(()=>{
    this.button = createButton("Post Query");
    this.button.position(550,620);
    gameState = 1;
    this.input = createInput("Enter photo/complaint here")
    this.input.position(500,600)
    this.button.mousePressed(()=>{
        gameState = 2;
        this.checkbox3.hide();
        this.location.hide();
        this.checkbox3 = createCheckbox('GPS', false);
    this.checkbox3.position(400,100)
    this.location = createInput("Enter Location Manually");
    this.location.position(400,150);
    this.submit = createButton("Submit");
    this.submit.position(450,180);
    this.submit.mousePressed(()=>{
        gameState = 3;
        })
    })
    this.checkbox.hide();
    this.checkbox1.hide();
    this.checkbox2.hide();
    this.checkbox4.hide();
    this.checkbox = createCheckbox('', false);
this.checkbox.position(500,500)
}) */
this.button2.mousePressed(()=>{
    this.button = createButton("Post Query");
    this.button.position(550,620);
    gameState = 1;
    this.input = createInput("Enter photo/complaint here")
    this.input.position(500,600)
    this.button.mousePressed(()=>{
        gameState = 2;
        this.checkbox3.hide();
        this.location.hide();
        this.checkbox3 = createCheckbox('GPS', false);
    this.checkbox3.position(400,100)
    this.location = createInput("Enter Location Manually");
    this.location.position(400,150);
    this.submit = createButton("Submit");
    this.submit.position(450,180);
    this.submit.mousePressed(()=>{
        gameState = 3;
        })
    })
    this.checkbox.hide();
    this.checkbox1.hide();
    this.checkbox2.hide();
    this.checkbox4.hide();
    this.checkbox5.hide();
    this.checkbox6.hide();
    this.checkbox7.hide();
    this.checkbox = createCheckbox('Street lamps not working', false);
    this.checkbox.position(500,100)
    this.checkbox1 = createCheckbox('Street lights still on', false);
    this.checkbox1.position(500,150)
    this.checkbox2 = createCheckbox('Street lights needed in the area', false);
    this.checkbox2.position(500,200)
    this.checkbox4 = createCheckbox('Electrical pole is falling', false);
    this.checkbox4.position(500,250)
    this.checkbox5 = createCheckbox('Open electric wire', false);
    this.checkbox5.position(500,300)
    this.checkbox6 = createCheckbox('Theft on government electric line', false);
    this.checkbox6.position(500,350)
})
/* this.button3.mousePressed(()=>{
    this.button = createButton("Post Query");
    this.button.position(550,620);
    gameState = 1;
    this.input = createInput("Enter photo/complaint here")
    this.input.position(500,600)
    this.button.mousePressed(()=>{
        gameState = 2;
        this.checkbox3.hide();
        this.location.hide();
        this.checkbox3 = createCheckbox('GPS', false);
    this.checkbox3.position(400,100)
    this.location = createInput("Enter Location Manually");
    this.location.position(400,150);
    this.submit = createButton("Submit");
    this.submit.position(450,180);
    this.submit.mousePressed(()=>{
        gameState = 3;
        })
    })
    this.checkbox.hide();
    this.checkbox1.hide();
    this.checkbox2.hide();
/* this.checkbox = createCheckbox('label', false);
this.checkbox.position(500,500) */
//}) */
this.button4.mousePressed(()=>{
    this.button = createButton("Post Query");
    this.button.position(550,620);
    gameState = 1;
    this.input = createInput("Enter photo/complaint here")
    this.input.position(500,600)
    this.button.mousePressed(()=>{
        gameState = 2;
        this.checkbox3.hide();
        this.location.hide();
        this.checkbox3 = createCheckbox('GPS', false);
    this.checkbox3.position(400,100)
    this.location = createInput("Enter Location Manually");
    this.location.position(400,150);
    this.submit = createButton("Submit");
    this.submit.position(450,180);
    this.submit.mousePressed(()=>{
        gameState = 3;
        })
    })
    this.checkbox.hide();
    this.checkbox1.hide();
    this.checkbox2.hide();
    this.checkbox4.hide();
    this.checkbox5.hide();
    this.checkbox6.hide();
    this.checkbox7.hide();
    this.checkbox = createCheckbox('Heap of garbage lying around', false);
this.checkbox.position(500,100)
this.checkbox1 = createCheckbox('Public place not clean/dirty', false);
this.checkbox1.position(500,150)
this.checkbox2 = createCheckbox('Sweeping not done', false);
this.checkbox2.position(500,200)
this.checkbox4 = createCheckbox('Water sources garbaged', false);
this.checkbox4.position(500,250)
this.checkbox5 = createCheckbox('Waste debris needs clearing', false);
this.checkbox5.position(500,300);
this.checkbox6 = createCheckbox('Garbage vehicle not arrived', false);
this.checkbox6.position(500,350);
this.checkbox7 = createCheckbox('Dead animals', false);
this.checkbox7.position(500,400);
})
this.button5.mousePressed(()=>{
    this.button = createButton("Post Query");
    this.button.position(550,620);
    gameState = 1;
    this.input = createInput("Enter photo/complaint here")
    this.input.position(500,600)
    this.button.mousePressed(()=>{
        gameState = 2;
        this.checkbox3.hide();
        this.location.hide();
        this.checkbox3 = createCheckbox('GPS', false);
    this.checkbox3.position(400,100)
    this.location = createInput("Enter Location Manually");
    this.location.position(400,150);
    this.submit = createButton("Submit");
    this.submit.position(450,180);
    this.submit.mousePressed(()=>{
        gameState = 3;
        })
    })
    this.checkbox.hide();
    this.checkbox1.hide();
    this.checkbox2.hide();
    this.checkbox4.hide();
    this.checkbox5.hide();
    this.checkbox6.hide();
    this.checkbox7.hide();
    this.checkbox = createCheckbox('Patch repair of road', false);
    this.checkbox.position(500,100)
    this.checkbox1 = createCheckbox('Sewerage holes needed to be closed', false);
    this.checkbox1.position(500,150)
    this.checkbox2 = createCheckbox('Road encroachment that needs clearing', false);
    this.checkbox2.position(500,200)
    this.checkbox7 = createCheckbox('Road signals needed', false);
    this.checkbox7.position(500,250)
    this.checkbox4 = createCheckbox('Speed breakers needed', false);
    this.checkbox4.position(500,300)
    this.checkbox5 = createCheckbox('Pedestal crossing needs clearing', false);
    this.checkbox5.position(500,350)
    this.checkbox6 = createCheckbox('Unauthorised hoardings need to be removes from signal boards', false);
    this.checkbox6.position(500,400)
})
this.button6.mousePressed(()=>{
    gameState = 1;
    this.button = createButton("Post Query");
    this.button.position(550,620);
    this.input = createInput("Enter photo/complaint here")
    this.input.position(500,600)
    this.button.mousePressed(()=>{
        gameState = 2;
        this.checkbox3.hide();
        this.location.hide();
        this.checkbox3 = createCheckbox('GPS', false);
    this.checkbox3.position(400,100)
    this.location = createInput("Enter Location Manually");
    this.location.position(400,150);
    this.submit = createButton("Submit");
    this.submit.position(450,180);
    this.submit.mousePressed(()=>{
        gameState = 3;
        })
    })
    this.checkbox.hide();
    this.checkbox1.hide();
    this.checkbox2.hide();
    this.checkbox4.hide();
    this.checkbox5.hide();
    this.checkbox6.hide();
    this.checkbox7.hide();
    this.checkbox.position(500,100)
this.checkbox = createCheckbox('Too much air/noise pollution', false);
this.checkbox.position(500,100)
this.checkbox1 = createCheckbox('Air pollution due to aste being burnt', false);
this.checkbox1.position(500,150)
this.checkbox2 = createCheckbox('Less trees', false);
this.checkbox2.position(500,250)
this.checkbox6 = createCheckbox('Industrial waste being dumped on land', false);
this.checkbox6.position(500,300)
this.checkbox4 = createCheckbox('Sewerage water polluting clean water/drinking water', false);
this.checkbox4.position(500,350)
this.checkbox5 = createCheckbox('Vehicles doing excessive air pollution', false);
this.checkbox5.position(500,200)
//this.checkbox2 = createCheckbox('')
/*     this.checkbox = createCheckbox('label', false);
this.checkbox.position(500,500) */
})
    }
}