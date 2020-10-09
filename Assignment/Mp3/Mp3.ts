
let con = create('div','container','con');
let r1 = create('div','row','r1');
let c1 = create('div','col-6','c1');
let songname = tag('input','text','sname');
let submit = btn('input','submit','search','btn');
c1.append('Search Song',songname,submit);
r1.append(c1);
let r2 = create('div','row','r2');
let c2 = create('div','col','c2');
let x = document.createElement("AUDIO");
x.setAttribute('src','sample1.mp3');
x.setAttribute('controls','controls');
x.setAttribute('id','audio');
c2.append(x);
r2.append(c2);
let r3 = create('div','row','r3');
let c3 = create('div','col-5','c3');
let paylist = tag('input','text','pname');
c3.append('Type PlayList Name',paylist)
let c4 = create('div','col-4','c4');
let sname = tag('input','text','sname1');
c4.append('add song to Paylist',sname);
let c5 = create('div','col-3','c5');
let submit1 = btn('input','submit','add Paylist','btn1');
c5.append(submit1)
r3.append(c3,c4,c5);

let r4 = create('div','row','r4');
let c6 = create('div','col-5','c6');
let paylist1 = tag('input','text','pname1');
c6.append('Type PlayList Name',paylist1)
let c7 = create('div','col-4','c7');
let sname1 = tag('input','text','sname2');
c7.append('add song to Paylist',sname1);
let c8 = create('div','col-3','c8');
let submit2 = btn('input','submit','add Song To Paylist','btn2');
c8.append(submit2)
r4.append(c6,c7,c8);

let r5 = create('div','row','r5');
let c9 = create('div','col-5','c9');
let paylist2 = tag('input','text','pname2');
c9.append('Type PlayList Name to get rating',paylist2)
let c10 = create('div','col-4','c10');
let sname2 = tag('input','text','sname3');
c10.append('rating : ',sname2);
let c11 = create('div','col-3','c11');
let submit3 = btn('input','submit','add Song To Paylist','btn3');
c11.append(submit3)
r5.append(c9,c10,c11);


con.append(r1,r2,r3,r4,r5);
document.body.append(con);


let songsarr = [];
let paylists = [];

class Mp3 {
    obj;
    paylist;
    sarr;
    constructor(){
        
    }
    addSongs(name,url,rating=0){
       this.obj = {
            "name":name,
            "url":url,
            "rating":rating
        }
        songsarr.push(this.obj);
    }
    searchSong(name){
        songsarr.filter((s)=>{
           for(let key in s){
               if(key=='name' && s[key]==name){
                   let a = (<HTMLAudioElement>document.getElementById('audio'));
                   a.src = s['url'];
               }
           }
        })
    }
    addPaylist(name:string,sname:string){
        this.paylist = {
            'name' : name
        }
        songsarr.filter((s)=>{
            for(let key in s){
                if(key=='name' && s[key]==sname){
                    this.paylist['songs']=[s];
                }
            
            }
        });
        paylists.push(this.paylist);
    }
    addSongToPaylist(name,sname){
        let song;
        songsarr.filter((s)=>{
            for(let key in s){
                if(key=='name' && s[key]==sname){
                    song = s;
                }
            
            }
        });
        paylists.filter((p)=>{
            for(let k in p){
                if(k=='name' && p[k]==name){
                    p['songs'].push(song);
                }
            }
        })

    }

    getPaylistRatings(pname){
        let sum=0;
        let c = 0;
        paylists.filter((p)=>{
            for(let key in p){
                if(key=='name' && p[key]==pname){
                    for(let i=0;i<p['songs'].length;i++){
                        p['songs'].filter((s)=>{
                            for(let key in s){
                                if(key=='rating'){
                                    sum+=(s[key]);
                                    c++;
                                }
                            }
                        })
                    }
                    console.log('rating is'+sum/c);
                    let rat = sum/c;
                    let sname =  (<HTMLInputElement>document.getElementById('sname3'));
                    sname.value= rat.toString();
                }
            }
        })
    }

}

let ob = new Mp3();
ob.addSongs('song1','sample1.mp3',6);
ob.addSongs('song2','https://www.kozco.com/tech/organfinale.mp3',8);
ob.addSongs('song3','sample3.mp3',9);
ob.addSongs('song4','sample4.mp3',10);
//ob.searchSong('song2');
//ob.addPaylist('melody','song1');
//console.log(paylists);

let bt1 = (<HTMLInputElement>document.getElementById('btn'));
bt1.addEventListener('click',()=>{
   let name =  (<HTMLInputElement>document.getElementById('sname')).value;
   ob.searchSong(name);
   console.log(name);
})

let bt2 = (<HTMLInputElement>document.getElementById('btn1'));
bt2.addEventListener('click',()=>{
    let pname =  (<HTMLInputElement>document.getElementById('pname')).value;
    let sname =  (<HTMLInputElement>document.getElementById('sname1')).value;
    ob.addPaylist(pname,sname);
    console.log(paylists);
})

let bt3 = (<HTMLInputElement>document.getElementById('btn2'));
bt3.addEventListener('click',()=>{
    let pname =  (<HTMLInputElement>document.getElementById('pname1')).value;
    let sname =  (<HTMLInputElement>document.getElementById('sname2')).value;
    ob.addSongToPaylist(pname,sname);
    console.log(paylists);
    
})

let bt4 = (<HTMLInputElement>document.getElementById('btn3'));
bt4.addEventListener('click',()=>{
    let pname =  (<HTMLInputElement>document.getElementById('pname2')).value;
   // let sname =  (<HTMLInputElement>document.getElementById('sname3'));
    //ob.addSongToPaylist(pname,sname);
    //console.log(paylists);
    ob.getPaylistRatings(pname);
})













function create(ele,name,id){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    a.setAttribute('id',id);
    return a;
}

function tag(ele,type,id){

    let a = document.createElement(ele);
    a.setAttribute('type',type);
    a.setAttribute('id',id);
    return a;

}
function btn(ele,type,value,id){
    let a = document.createElement(ele);
    a.setAttribute('type',type);
    a.setAttribute('id',id);
    a.setAttribute('value',value);
    return a;
}


