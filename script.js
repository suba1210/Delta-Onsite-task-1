let whites = document.querySelectorAll('.white');
let blacks = document.querySelectorAll('.black');

function animation(key)
{
    key.classList.add('press');
}

function remove(key)
{
    key.classList.remove('press');
}



let Akey = document.getElementById('Akey');
let Aaud = document.getElementById('A');

Akey.addEventListener('click', ()=>{
    Aaud.currentTime =0;
    Aaud.play();
    animation(Akey)
    Aaud.addEventListener('ended',()=>{
        remove(Akey);
    })

})

let Abkey = document.getElementById('Abkey');
let Abaud = document.getElementById('Ab');

Abkey.addEventListener('click', ()=>{
    Abaud.currentTime =0;
    Abaud.play();
    animation(Abkey);
    Abaud.addEventListener('ended',()=>{
        remove(Abkey);
    })
})

let Bkey = document.getElementById('Bkey');
let Baud = document.getElementById('B');

Bkey.addEventListener('click', ()=>{
    Baud.currentTime =0;
    Baud.play();
    animation(Bkey);
    Baud.addEventListener('ended',()=>{
        remove(Bkey);
    })
})

let Bbkey = document.getElementById('Bbkey');
let Bbaud = document.getElementById('Bb');

Bbkey.addEventListener('click', ()=>{
    Bbaud.currentTime =0;
    Bbaud.play();
    animation(Bbkey);
    Bbaud.addEventListener('ended',()=>{
        remove(Bbkey);
    })
})

let Ckey = document.getElementById('Ckey');
let Caud = document.getElementById('C');

Ckey.addEventListener('click', ()=>{
    Caud.currentTime =0;
    Caud.play();
    animation(Ckey);
    Caud.addEventListener('ended',()=>{
        remove(Ckey);
    })
})

let Dkey = document.getElementById('Dkey');
let Daud = document.getElementById('D');

Dkey.addEventListener('click', ()=>{
    Daud.currentTime =0;
    Daud.play();
    animation(Dkey);
    Daud.addEventListener('ended',()=>{
        remove(Dkey);
    })
})

let Dbkey = document.getElementById('Dbkey');
let Dbaud = document.getElementById('Db');

Dbkey.addEventListener('click', ()=>{
    Dbaud.currentTime =0;
    Dbaud.play();
    animation(Dbkey);
    Dbaud.addEventListener('ended',()=>{
        remove(Dbkey);
    })
})


let Ekey = document.getElementById('Ekey');
let Eaud = document.getElementById('E');

Ekey.addEventListener('click', ()=>{
    Eaud.currentTime =0;
    Eaud.play();
    animation(Ekey);
    Eaud.addEventListener('ended',()=>{
        remove(Ekey);
    })
})

let Ebkey = document.getElementById('Ebkey');
let Ebaud = document.getElementById('Eb');

Ebkey.addEventListener('click', ()=>{
    Ebaud.currentTime =0;
    Ebaud.play();
    animation(Ebkey);
    Ebaud.addEventListener('ended',()=>{
        remove(Ebkey);
    })
})

let Fkey = document.getElementById('Fkey');
let Faud = document.getElementById('F');

Fkey.addEventListener('click', ()=>{
    Faud.currentTime =0;
    Faud.play();
    animation(Fkey);
    Faud.addEventListener('ended',()=>{
        remove(Fkey);
    })
})

let Gkey = document.getElementById('Gkey');
let Gaud = document.getElementById('G');

Gkey.addEventListener('click', ()=>{
    Gaud.currentTime =0;
    Gaud.play();
    animation(Gkey);
    Gaud.addEventListener('ended',()=>{
        remove(Gkey);
    })
})

let Gbkey = document.getElementById('Gbkey');
let Gbaud = document.getElementById('Gb');

Gbkey.addEventListener('click', ()=>{
    Gbaud.currentTime =0;
    Gbaud.play();
    animation(Gbkey);
    Gbaud.addEventListener('ended',()=>{
        remove(Gbkey);
    })
})



let D1key = document.getElementById('D1key');


D1key.addEventListener('click', ()=>{
    Daud.currentTime =0;
    Daud.play();
    animation(D1key);
    Daud.addEventListener('ended',()=>{
        remove(D1key);
    })
})

let Db1key = document.getElementById('Db1key');

Db1key.addEventListener('click', ()=>{
    Dbaud.currentTime =0;
    Dbaud.play();
    animation(Db1key);
    Dbaud.addEventListener('ended',()=>{
        remove(Db1key);
    })
})


let E1key = document.getElementById('E1key');


E1key.addEventListener('click', ()=>{
    Eaud.currentTime =0;
    Eaud.play();
    animation(E1key);
    Eaud.addEventListener('ended',()=>{
        remove(E1key);
    })
})

let Eb1key = document.getElementById('Eb1key');


Eb1key.addEventListener('click', ()=>{
    Ebaud.currentTime =0;
    Ebaud.play();
    animation(Eb1key);
    Ebaud.addEventListener('ended',()=>{
        remove(Eb1key);
    })
})

let F1key = document.getElementById('F1key');


F1key.addEventListener('click', ()=>{
    Faud.currentTime =0;
    Faud.play();
    animation(F1key);
    Faud.addEventListener('ended',()=>{
        remove(F1key);
    })
})

let G1key = document.getElementById('G1key');


G1key.addEventListener('click', ()=>{
    Gaud.currentTime =0;
    Gaud.play();
    animation(G1key);
    Gaud.addEventListener('ended',()=>{
        remove(G1key);
    })
})

let Gb1key = document.getElementById('Gb1key');


Gb1key.addEventListener('click', ()=>{
    Gbaud.currentTime =0;
    Gbaud.play();
    animation(Gb1key);
    Gbaud.addEventListener('ended',()=>{
        remove(Gb1key);
    })
})



