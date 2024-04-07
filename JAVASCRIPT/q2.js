
x=parseInt(prompt("Enter Your physics Mark:"))
y=parseInt(prompt("Enter Your  chemistry Mark:"))
z=parseInt(prompt("Enter Your maths Mark:"))
i=x+y+z%3


if (i>=101){
    alert(`toper1`)
}

else if (i>=90) {
    alert(`A+`)
}

else if (i>=80) {
    alert(`A `)
}
else if (i>=70) {
    alert(`B+`)
}
else if (i>=60) {
    alert(`B`)
}
else if (i>=50) {
    alert(`c+`)
}
else {
    alert(`result is fail !!`)
}