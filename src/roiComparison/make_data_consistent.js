import { getAllExternalData } from "./../common/get_all_external_data";

async function makeDataConsistent(
  usercoins,
  userccoins,
  cckey,
  customdata,
  userinput
) {
  function relDiff(a, b) {
    let percent;
    if(b !== 0) {
        if(a !== 0) {
          percent = (b - a) / a * 100;
        } else {
          percent = b * 100;
        }
    } else {
      percent = - a * 100;
    }
    return Math.floor(percent);
  }
  var get_final_result = await getAllExternalData(
    usercoins,
    userccoins,
    cckey,
    customdata,
    userinput
  );
  var alldata = await get_final_result;
  var formattedArray = [];
  if (customdata) {
    if (alldata.length > 0) {
      customdata.forEach(function(el) {
        alldata[0].push(el);
      });
    } else {
      alldata.push([]);
      customdata.forEach(function(el) {
        alldata[0].push(el);
      });
    }
  }
  alldata[0].forEach(function(portfolio) {
    var arr = [];
    var thare = portfolio.data;
    var min = 0;
    var max = 0;
    thare.forEach(function(item) {
      var price = item.y;
      var origprice = thare[0].y;
      var epochTime = item.x * 1000;
      var change = relDiff(origprice,price);
      if (change <= min) {
        min = change;
      }
      if (change >= max) {
        max = change;
      }
      arr.push({
        x: Number(epochTime),
        y: Number(change.toFixed(2)),
        price: Number(price)
      });
    });
    formattedArray.push({
      name: portfolio.name,
      data: arr,
      min: Number(min.toFixed(2)),
      max: Number(max.toFixed(2))
    });
  });
  return formattedArray;
}
export { makeDataConsistent };
