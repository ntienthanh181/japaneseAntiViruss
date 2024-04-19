console.log("hello")
var a = 0
while (a== 10) {
    a++
  }
for(var i = 0; i = true ; i++){
    console.log("hello");
}
function printHello() {
    console.log("hello")
  
    printHello()
  }
  
  printHello()
  


let n = true;
function doSomething(n) {
    if(n > 1) {
      console.log("TASK COMPLETED!")
      return
    }
    console.log("I'm doing something.")
    doSomething(n)
  }
  doSomething(n)


  function doSomething(n) {
    if(n === 0) {
      console.log("TASK COMPLETED!")
      return
    }
    console.log("I'm doing something.")
    doSomething(n - 1)
  }
  doSomething(3)

  
function printHello() {
console.log("hello")

printHello()
}

printHello()



let counter = 2

function printHello() {
  console.log("hello")
  counter++
  console.log(counter)

  if (counter > 1) {
      printHello()
  }

  return;
}

printHello()