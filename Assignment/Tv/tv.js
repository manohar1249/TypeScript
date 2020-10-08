var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = [];
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
var x = document.createElement("VIDEO");
var obj;
var Tv = /** @class */ (function () {
    function Tv(brand, price, inches, channel, volume) {
        if (channel === void 0) { channel = 1; }
        if (volume === void 0) { volume = 50; }
        this.brand = brand;
        this.price = price;
        this.inches = inches;
        this.channel = channel;
        this.volume = volume;
    }
    Tv.prototype.changeChannelUp = function (num) {
        if (num > 0 && num <= 10) {
            this.channel = num;
            console.log("" + this.channel);
            x.setAttribute("src", arr[this.channel]);
            x.setAttribute("width", "320");
            x.setAttribute("height", "240");
            x.setAttribute("id", "vid");
            x.setAttribute("controls", "controls");
            var a = document.getElementById('vedio');
            a.append(x);
            //document.body.appendChild(x);
        }
    };
    Tv.prototype.changeChannelDown = function (num) {
        if (num > 0 && num <= 10) {
            this.channel = num;
            console.log("" + this.channel);
            var x_1 = document.getElementById('vid');
            x_1.src = arr[this.channel];
        }
    };
    Tv.prototype.increaseVolume = function (vol) {
        if (vol > 0 && vol <= 100) {
            this.volume = vol;
            console.log("" + this.volume);
        }
    };
    Tv.prototype.decreaseVolume = function (vol) {
        if (vol > 0 && vol <= 100) {
            this.volume = vol;
            console.log("" + this.volume);
        }
    };
    Tv.prototype.reSet = function () {
        this.channel = 1;
        this.volume = 50;
    };
    return Tv;
}());
var Led = /** @class */ (function (_super) {
    __extends(Led, _super);
    function Led(brand, channel, price, inches, volume, status, energy, lifespan, refreshRate) {
        var _this = _super.call(this, brand, channel, price, inches, volume) || this;
        //this.screen=screenthickness;
        _this.energy = energy;
        _this.lifespan = lifespan;
        _this.refreshRate = refreshRate;
        _this.status = status;
        return _this;
    }
    Led.prototype.getFeatures = function () {
        console.log("TV Brand is " + this.brand + " " + this.price + " " + this.status + " " + this.channel + " " + this.volume + "\n        " + this.inches + " " + this.lifespan);
    };
    return Led;
}(Tv));
var Plasma = /** @class */ (function (_super) {
    __extends(Plasma, _super);
    function Plasma(brand, channel, price, inches, volume, status, energy, lifespan, refreshRate) {
        var _this = _super.call(this, brand, channel, price, inches, volume) || this;
        //this.screen=screenthickness;
        _this.energy = energy;
        _this.lifespan = lifespan;
        _this.refreshRate = refreshRate;
        _this.status = status;
        return _this;
    }
    Plasma.prototype.getFeatures = function () {
        console.log("TV Brand is " + this.brand + " " + this.price + " " + this.status + " " + this.channel + " " + this.volume + "\n         " + this.inches + " " + this.lifespan);
    };
    return Plasma;
}(Tv));
function myFun() {
    var val = (document.getElementById('tv')).value;
    console.log('hii');
    console.log(val);
    if (val == 'Led') {
        var a = document.getElementById('vedio');
        a.style.backgroundImage = "url('led.jpg')";
        obj = new Led('pan', 2, 33000, 44, 60, 'on', '15v', 15, '50HZ');
        obj.changeChannelUp(2);
        obj.changeChannelDown(1);
    }
    else {
        var a = document.getElementById('vedio');
        a.style.backgroundImage = "url('plasma.jpg')";
        obj = new Plasma('pan', 2, 33000, 44, 60, 'on', '15v', 15, '50HZ');
        obj.changeChannelUp(2);
        //obj.changeChannelDown(1);
    }
}
var i = 0;
function channeldown() {
    var x = obj.channel;
    x--;
    obj.changeChannelDown(x);
}
function channelup() {
    var x = obj.channel;
    x++;
    console.log(x);
    obj.changeChannelUp(x);
}
function volumeup() {
    var x = obj.volume;
    x++;
    obj.increaseVolume(x);
}
function volumedown() {
    var x = obj.volume;
    x--;
    obj.decreaseVolume(x);
}
