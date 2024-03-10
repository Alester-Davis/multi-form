$("document").ready(function(){
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth()+1
  mm = mm<10?'0'+mm.toString():mm
  dd = dd<10?'0'+dd.toString():dd
  let yyyy =  today.getFullYear()
  var today1 = yyyy + '-' + mm + '-' + dd
  $("#inp6").attr('max',today1);
  $("#prev1").click(function(){
    $("#form2").css('left','450px')
    $("#form1").css('left','40px')
    $(".progress").css('left','0px')
  })
  $("#prev2").click(function(){
    $("#form3").css('left','450px')
    $("#form2").css('left','40px')
    $(".progress").css('left','120px')
  })
})

//-------------------------Create Account------------------------
let accArr = []
let acclen = $(".acc").length
for(let i = 1;i<=acclen;i++){
  accArr.push(false)
}
function isUsername(id){
  let lower=0,n=0
  let clas = $("#"+id).attr('class')
  let num = parseInt(id.substring(clas.length))
  clas = clas+num
  let str = $("input#"+id).val()
  if(str === ""){
    accArr[num-1] = false
    $("input#"+id).css('border-bottom-color','red')
    $("."+clas+" ").addClass("error").text("Username field cannot be empty")
  }
  else if(str.length>7 && str.length<15){
    for(let n of str){
      if(n>='a' && n<='z'){
        lower++;
        accArr[num-1] = true
      }
      else if(n>='0' && n<='9'){
        n++
        accArr[num-1] = true
      }
      else if(n === '_'){
        accArr[num-1] = true
      }
      else{
        accArr[num-1] = false
        break
      }
    }
    if(accArr[num-1] === false){
      $("input#"+id).css('border-bottom-color','red')
      $("."+clas+" ").addClass("error").text("Username must contain at least one lower case alphabets and can contain numbers and underscore(_)")
    }
    else{
      if(lower>0){
        $("input#"+id).css('border-bottom-color',' #999')
          $("."+clas+" ").removeClass("error").text("")
      }
      else{
        $("input#"+id).css('border-bottom-color','red')
        accArr[num-1] = false
      }
    }
  }
  else{
    accArr[num-1] = false;
    $("input#"+id).css('border-bottom-color','red')
    $("."+clas+" ").addClass("error").text("Username must be 8-14 characters and must contain at least one lower case alphabets and can contain numbers and underscore(_)")
  }
}

let pass
function checkPass(id){
  let lower=0,higher=0,no=0,sp = 0
  let clas = $("#"+id).attr('class')
  let num = parseInt(id.substring(clas.length))
  clas = clas+num
  pass = $("input#"+id).val()
  if(pass === ""){
    accArr[num-1] = false
    $("input#"+id).css('border-bottom-color','red')
    $("."+clas+" ").addClass("error").text("Password cannot not be empty")
  }
  else if(pass.length>4 && pass.length<15){
    for(let n of pass){
      if(n>='a' && n<='z'){
        lower++
        accArr[num-1] = true
      }
      else if(n>='A' && n<='Z'){
        higher++
        accArr[num-1] = true
      }
      else if(n>='0' && n<='9'){
        no++;
        accArr[num-1] = true
      }
      else if(n==='$' || n==='#'|| n==='@'){
        sp++;
        accArr[num-1] = true
      }
      else{
        accArr[num-1] = false
        break
      }
    }
    if(accArr[num-1]!=false && lower>0 && higher>0 && no >0 && sp===1){
      $("input#"+id).css('border-bottom-color',' #999')
      $("."+clas+" ").removeClass("error").text("")
    }
    else{
      $("input#"+id).css('border-bottom-color','red')
      $("."+clas+" ").addClass("error").text("Password must contain at least one lower case alphabet, upper case alphabet, number and exactly one special character($,#,@)")
    }
  }
  else{
    accArr[num-1] = false
    $("input#"+id).css('border-bottom-color','red')
    $("."+clas+" ").addClass("error").text("Password must be 5-14 characters and must contain at least one lower case alphabet, upper case alphabet, number and exactly one special character($,#,@)")
  }
}

function checkCpass(id){
  let clas = $("#"+id).attr('class')
  let num = parseInt(id.substring(clas.length))
  clas = clas+num
  let str = $("input#"+id).val()
  if(str == ""){
    $("input#"+id).css('border-bottom-color','red')
    $("."+clas+" ").addClass("error").text("Field cannot not be empty and please make sure your password match")
  }
  else if(pass === str){
    accArr[num-1] = true
    $("input#"+id).css('border-bottom-color',' #999')
    $("."+clas+" ").removeClass("error").text("")
  }
  else{
    accArr[num-1] = false
    $("input#"+id).css('border-bottom-color','red')
    $("."+clas+" ").addClass("error").text("Please make sure your password match")
  }
}

function nextb1(){
  if(checkFlag(accArr)){
      $("#form1").css('left','450px')
      $("#form2").css('left','40px')
      $(".progress").css('left','120px')
  }
  else{
    flagFalse("acc")
  }
}

//----------------------------Personal-----------------------------------

let persArr = []
let perslen = $(".pers").length
for(let i = 1;i<=perslen;i++){
  persArr.push(false)
}
let onlyLetters = (str)=> /^[a-zA-Z]+$/.test(str)
function checkName(id){
  let clas = $("#"+id).attr('class')
  let num = parseInt(id.substring(clas.length))
  clas = clas+num
  let str = ($("input#"+id).val()).trim().split(" ")
  if($("input#"+id).val()==""){
    persArr[num-1] = false
    $("input#"+id).css('border-bottom-color','red')
    $("."+clas+" ").addClass("error").text("Field cannot not be empty")
  }
  else{
    for(let s of str){
      if(onlyLetters(s)){
        persArr[num-1] = true
        $("input#"+id).css('border-bottom-color',' #999')
        $("."+clas+" ").removeClass("error").text("")
      }
      else{
        persArr[num-1] = false
        $("input#"+id).css('border-bottom-color','red')
        $("."+clas+" ").addClass("error").text("Field must contain only Lower case and Upper case alphabets")
        break
      }
    }
  }
}

function checkNumber(id){
  let clas = $("#"+id).attr('class')
  let num = parseInt(id.substring(clas.length))
  clas = clas+num
  if($("input#"+id).val() != ""){
    persArr[num-1] = true
    $("input#"+id).css('border-bottom-color',' #999')
    $("."+clas+" ").removeClass("error").text("")
  }
  else{
    persArr[num-1] = false
    $("input#"+id).css('border-bottom-color','red')
    $("."+clas+" ").addClass("error").text("Field cannot not be empty")
  }
}

function checkDate(id){
  let clas = $("#"+id).attr('class')
  let num = parseInt(id.substring(clas.length))
  clas = clas+num
  if($("input#"+id).val()==""){
    persArr[num-1] = false
    $("input#"+id).css('border-bottom-color','red')
    $("."+clas+" ").addClass("error").text("Field cannot not be empty")
  }
  else{
    persArr[num-1] = true
    const curDate = new Date()
    const date = new Date($("input#"+id).val())
    let age = Math.floor((curDate - date.getTime())/31557600000)
    $("input#pers4").val(age)
  }
}

function nextb2(){
  if(checkFlag(persArr)){
    $("#form2").css('left','450px')
    $("#form3").css('left','40px')
    $(".progress").css('left','240px')
  }
  else{
    flagFalse("pers")
  }
}

//---------------------------Social Links--------------------------
let isValidURL = (str) =>{
  try{
    new URL(str)
    return true
  }
  catch(err){
    return false
  }
}


let linkArr = []
let linkLen = $(".link").length
for(let i = 1;i<=linkLen;i++){
  linkArr.push(false)
}
function checkUrl(id){
  let clas = $("#"+id).attr('class')
  let num = parseInt(id.substring(clas.length))
  clas = clas+num
  linkArr[num-1]= isValidURL($("input#"+id).val())
  if(linkArr[num-1]){
    $("input#"+id).css('border-bottom-color',' #999')
    $("."+clas+" ").removeClass("error").text("")
  }
  else{
    $("input#"+id).css('border-bottom-color',' red')
    $("."+clas+" ").addClass("error").text("Invalid Link")
  }

}

//-----------------------Additional---------------------------------
function checkFlag(arr){
  for(flag of arr){
    if(flag === false){
      return false
    }
  }
  return true
}

function flagFalse(main){
  var len = $("."+main).length
  for(let i=1;i<=len;i++){
    var func = $("#"+main+i).attr('oninput').split('(')[0]
    console.log(func)
    window[func](main+i)
  }
}
