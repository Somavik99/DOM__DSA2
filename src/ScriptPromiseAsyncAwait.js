console.log("/////AsyncAwaitPromises/////");

function MakeRequest(Location) {
  console.log("////MakeRequest////");
  const TimerID = setTimeout(() => {
    console.log("////MakeRequestTimerID////");
    const CheckingReturn = function (arr = [], callBack) {
      console.log("////ArrayInput Function////");
      let arr2 = [1, 2, 32, 4, 5, 6, 78, 66];
      let ArrCheck = function () {
      
        for (let i = 0; i <= arr2.length - 1; i++) {
          if (arr.length !== arr2.length) {
            setTimeout(() => {
              console.log("////LoopTimer////");

              arr.push(arr2[i]);
              let NewArr = arr;
              console.log(NewArr.length);
              //   console.log(Object.keys(arr));
            }, 1000);

            // console.log(LoopTimer);
          } else {
            console.log(arr);
          }
        }
     
      };
      return ArrCheck();
    };

    const CallBackFunc = setTimeout(() => {
      return console.log("API Calling");
    }, 3000);
    console.log(Location);

    CheckingReturn([], CallBackFunc);
    console.log(TimeRanges);

    // return () => {
    //   clearTimeout();
    // };
  }, 2000);
  return () => {
    clearTimeout(TimerID, CallBackFunc);
  };
}
MakeRequest("Delhi");
