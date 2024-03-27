let timer = document.querySelector(".container");
function num1(cb){
    setTimeout(()=>{
        timer.textContent ="10";
        cb()
    },2000)
    }
function num2(cb){
 setTimeout(()=>{
 timer.textContent ='9';
    cb()
 },2000)
}
function num3(cb){
    setTimeout(()=>{
        timer.textContent ="8";
        cb()
    },2000)
}
function num4(cb){
    setTimeout(()=>{
        timer.textContent ="7";
        cb()
    },2000)
}
function num5(cb){
    setTimeout(()=>{
        timer.textContent ="6";
        cb()
    },2000)
}
function num6(cb){
    setTimeout(()=>{
        timer.textContent ="5";
        cb()
    },2000)
}
function num7(cb){
    setTimeout(()=>{
        timer.textContent ="4";
        cb()
    },2000)
}
function num8(cb){
    setTimeout(()=>{
        timer.textContent ="3";
        cb()
    },2000)
}
function num9(cb){
    setTimeout(()=>{
        timer.textContent ="2";
        cb()
    },2000)
}
function num10(cb){
    setTimeout(()=>{
        timer.textContent ="1";
        cb()
    },2000)
}
function num12(cb){
    setTimeout(()=>{
        timer.textContent="happy independence day";
        cb()
    },2000)
}

function handle(){
  num1(()=>{
    num2(()=>{
        num3(()=>{
            num4(()=>{
                num5(()=>{
                    num6(()=>{
                        num7(()=>{
                            num8(()=>{
                              num9(()=>{
                                num10(()=>{
                                   num12(()=>{
                                    })
                                })
                            })
                            })
                        })
                    })
                })
            })
        })
    })
  })
}

handle();