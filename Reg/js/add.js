function addition(){
    let x;
    x=document.getElementById('xvalue').value;
    console.log(typeof(x));
    x=Number(x);
    let y;
    y=document.getElementById('yvalue').value;
    console.log(typeof(y));
    y=Number(y);
    let z=x+y;
    document.getElementById('add').innerHTML=z;
}