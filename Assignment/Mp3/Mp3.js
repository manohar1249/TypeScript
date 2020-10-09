var con = create('div', 'container', 'con');
var r1 = create('div', 'row', 'r1');
var c1 = create('div', 'col-6', 'c1');
var songname = tag('input', 'text', 'sname');
var submit = btn('input', 'submit', 'search', 'btn');
c1.append('Search Song', songname, submit);
r1.append(c1);
var r2 = create('div', 'row', 'r2');
var c2 = create('div', 'col', 'c2');
var x = document.createElement("AUDIO");
x.setAttribute('src', 'sample1.mp3');
x.setAttribute('controls', 'controls');
x.setAttribute('id', 'audio');
c2.append(x);
r2.append(c2);
var r3 = create('div', 'row', 'r3');
var c3 = create('div', 'col-5', 'c3');
var paylist = tag('input', 'text', 'pname');
c3.append('Type PlayList Name', paylist);
var c4 = create('div', 'col-4', 'c4');
var sname = tag('input', 'text', 'sname1');
c4.append('add song to Paylist', sname);
var c5 = create('div', 'col-3', 'c5');
var submit1 = btn('input', 'submit', 'add Paylist', 'btn1');
c5.append(submit1);
r3.append(c3, c4, c5);
var r4 = create('div', 'row', 'r4');
var c6 = create('div', 'col-5', 'c6');
var paylist1 = tag('input', 'text', 'pname1');
c6.append('Type PlayList Name', paylist1);
var c7 = create('div', 'col-4', 'c7');
var sname1 = tag('input', 'text', 'sname2');
c7.append('add song to Paylist', sname1);
var c8 = create('div', 'col-3', 'c8');
var submit2 = btn('input', 'submit', 'add Song To Paylist', 'btn2');
c8.append(submit2);
r4.append(c6, c7, c8);
var r5 = create('div', 'row', 'r5');
var c9 = create('div', 'col-5', 'c9');
var paylist2 = tag('input', 'text', 'pname2');
c9.append('Type PlayList Name to get rating', paylist2);
var c10 = create('div', 'col-4', 'c10');
var sname2 = tag('input', 'text', 'sname3');
c10.append('rating : ', sname2);
var c11 = create('div', 'col-3', 'c11');
var submit3 = btn('input', 'submit', 'add Song To Paylist', 'btn3');
c11.append(submit3);
r5.append(c9, c10, c11);
con.append(r1, r2, r3, r4, r5);
document.body.append(con);
var songsarr = [];
var paylists = [];
var Mp3 = /** @class */ (function () {
    function Mp3() {
    }
    Mp3.prototype.addSongs = function (name, url, rating) {
        if (rating === void 0) { rating = 0; }
        this.obj = {
            "name": name,
            "url": url,
            "rating": rating
        };
        songsarr.push(this.obj);
    };
    Mp3.prototype.searchSong = function (name) {
        songsarr.filter(function (s) {
            for (var key in s) {
                if (key == 'name' && s[key] == name) {
                    var a = document.getElementById('audio');
                    a.src = s['url'];
                }
            }
        });
    };
    Mp3.prototype.addPaylist = function (name, sname) {
        var _this = this;
        this.paylist = {
            'name': name
        };
        songsarr.filter(function (s) {
            for (var key in s) {
                if (key == 'name' && s[key] == sname) {
                    _this.paylist['songs'] = [s];
                }
            }
        });
        paylists.push(this.paylist);
    };
    Mp3.prototype.addSongToPaylist = function (name, sname) {
        var song;
        songsarr.filter(function (s) {
            for (var key in s) {
                if (key == 'name' && s[key] == sname) {
                    song = s;
                }
            }
        });
        paylists.filter(function (p) {
            for (var k in p) {
                if (k == 'name' && p[k] == name) {
                    p['songs'].push(song);
                }
            }
        });
    };
    Mp3.prototype.getPaylistRatings = function (pname) {
        var sum = 0;
        var c = 0;
        paylists.filter(function (p) {
            for (var key in p) {
                if (key == 'name' && p[key] == pname) {
                    for (var i = 0; i < p['songs'].length; i++) {
                        p['songs'].filter(function (s) {
                            for (var key_1 in s) {
                                if (key_1 == 'rating') {
                                    sum += (s[key_1]);
                                    c++;
                                }
                            }
                        });
                    }
                    console.log('rating is' + sum / c);
                    var rat = sum / c;
                    var sname_1 = document.getElementById('sname3');
                    sname_1.value = rat.toString();
                }
            }
        });
    };
    return Mp3;
}());
var ob = new Mp3();
ob.addSongs('song1', 'sample1.mp3', 6);
ob.addSongs('song2', 'https://www.kozco.com/tech/organfinale.mp3', 8);
ob.addSongs('song3', 'sample3.mp3', 9);
ob.addSongs('song4', 'sample4.mp3', 10);
//ob.searchSong('song2');
//ob.addPaylist('melody','song1');
//console.log(paylists);
var bt1 = document.getElementById('btn');
bt1.addEventListener('click', function () {
    var name = document.getElementById('sname').value;
    ob.searchSong(name);
    console.log(name);
});
var bt2 = document.getElementById('btn1');
bt2.addEventListener('click', function () {
    var pname = document.getElementById('pname').value;
    var sname = document.getElementById('sname1').value;
    ob.addPaylist(pname, sname);
    console.log(paylists);
});
var bt3 = document.getElementById('btn2');
bt3.addEventListener('click', function () {
    var pname = document.getElementById('pname1').value;
    var sname = document.getElementById('sname2').value;
    ob.addSongToPaylist(pname, sname);
    console.log(paylists);
});
var bt4 = document.getElementById('btn3');
bt4.addEventListener('click', function () {
    var pname = document.getElementById('pname2').value;
    // let sname =  (<HTMLInputElement>document.getElementById('sname3'));
    //ob.addSongToPaylist(pname,sname);
    //console.log(paylists);
    ob.getPaylistRatings(pname);
});
function create(ele, name, id) {
    var a = document.createElement(ele);
    a.setAttribute('class', name);
    a.setAttribute('id', id);
    return a;
}
function tag(ele, type, id) {
    var a = document.createElement(ele);
    a.setAttribute('type', type);
    a.setAttribute('id', id);
    return a;
}
function btn(ele, type, value, id) {
    var a = document.createElement(ele);
    a.setAttribute('type', type);
    a.setAttribute('id', id);
    a.setAttribute('value', value);
    return a;
}
