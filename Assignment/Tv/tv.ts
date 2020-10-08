type state = "on"|"of";
let arr = [];
arr.push("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
arr.push("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4");
arr.push("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4");
arr.push("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4");
arr.push("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4");
arr.push("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4");
arr.push("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4");
arr.push("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4");
arr.push("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4");
arr.push("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4");
arr.push("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4");
let x = document.createElement("VIDEO");


let obj;

class Tv{
    brand
    channel
    price
    inches
    volume
    
    
    constructor(brand:string,price:number,inches:number,channel=1,volume=50){
        this.brand=brand;
        this.price=price;
        this.inches=inches;
        this.channel=channel;
        this.volume=volume;
    }
    changeChannelUp(num){
        if(num>0 && num<=10){
            this.channel=num;
            console.log(`${this.channel}`);
            
            x.setAttribute("src",arr[this.channel]);
            x.setAttribute("width", "320");
            x.setAttribute("height", "240");
            x.setAttribute("id", "vid");
            x.setAttribute("controls", "controls");
            let a = document.getElementById('vedio');
            a.append(x);
            //document.body.appendChild(x);
        }
    }
    changeChannelDown(num){
        if(num>0 && num<=10){
            this.channel=num;
            console.log(`${this.channel}`);
            let x= (<HTMLVideoElement>document.getElementById('vid'));
            x.src= arr[this.channel];
        }
    }
    increaseVolume(vol){
        if(vol>0 && vol<=100){
            this.volume=vol;
            console.log(`${this.volume}`);
        }
    }
    decreaseVolume(vol){
        if(vol>0 && vol<=100){
            this.volume=vol;
            console.log(`${this.volume}`);
        }
    }
    reSet(){
        this.channel=1;
        this.volume=50;
    }

}
class Led extends Tv{
   // screen
    energy
    lifespan
    refreshRate
    status
    constructor( brand,channel,price,inches,volume,status:state,energy,lifespan,refreshRate){
        super(brand,channel,price,inches,volume);
        //this.screen=screenthickness;
        this.energy=energy;
        this.lifespan=lifespan;
        this.refreshRate=refreshRate;
        this.status=status
    }
    getFeatures(){
        console.log(`TV Brand is ${this.brand} ${this.price} ${this.status} ${this.channel} ${this.volume}
        ${this.inches} ${this.lifespan}`);
    }

}

class Plasma extends Tv{
    // screen
     energy
     lifespan
     refreshRate
     status
     constructor( brand,channel,price,inches,volume,status:state,energy,lifespan,refreshRate){
         super(brand,channel,price,inches,volume);
         //this.screen=screenthickness;
         this.energy=energy;
         this.lifespan=lifespan;
         this.refreshRate=refreshRate;
         this.status=status
     }
     getFeatures(){
         console.log(`TV Brand is ${this.brand} ${this.price} ${this.status} ${this.channel} ${this.volume}
         ${this.inches} ${this.lifespan}`);
     }
 
 }

 function myFun(){
     let val = (<HTMLSelectElement>(document.getElementById('tv'))).value;
     console.log('hii');
     console.log(val);
     if(val=='Led'){
         let a = document.getElementById('vedio');
         a.style.backgroundImage = "url('led.jpg')";
         obj = new Led('pan',2,33000,44,60,'on','15v',15,'50HZ');
         obj.changeChannelUp(2);
         obj.changeChannelDown(1);
     }
     else{
        let a = document.getElementById('vedio');
        a.style.backgroundImage = "url('plasma.jpg')";
        obj = new Plasma('pan',2,33000,44,60,'on','15v',15,'50HZ');
        obj.changeChannelUp(2);
        //obj.changeChannelDown(1);
     }
 }
 let i=0;
 function channeldown(){
     let x = obj.channel;
     x--;
     obj.changeChannelDown(x);
 }
 function channelup(){
    let x = obj.channel;
    x++;
    console.log(x);
    obj.changeChannelUp(x);
 }
 function volumeup(){
    let x = obj.volume;
    x++;
    obj.increaseVolume(x);
 }
 function volumedown(){
    let x = obj.volume;
    x--;
    obj.decreaseVolume(x);

 }

