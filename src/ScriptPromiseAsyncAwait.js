console.log("/////AsyncAwaitPromises/////");

function MakeRequest(Location) {

  console.log(
    setTimeout(() => {
      return console.log("AsyncLog");
    }, 6000),
    console.log("AnotherLog: " + " " + Location)
  );
}
MakeRequest("Delhi");
