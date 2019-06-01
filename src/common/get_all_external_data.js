import { getCryptoCompareData } from "./cryptocompare_price_history";
import { getPortfolioPriceData } from "./iconomi_price_history";

async function getAllExternalData(
  icoins,
  cccoins,
  cckey,
  customdata,
  userinput
) {
  var iconomiData = null;
  var cryptocompareData = null;
  if (icoins) {
    iconomiData = await getPortfolioPriceData(icoins, userinput);
  }
  if (cccoins) {
    cryptocompareData = await getCryptoCompareData(cccoins, cckey, userinput);
  }
  var finalresult = [];

  if (icoins || cccoins) {
    Promise.all([iconomiData, cryptocompareData]).then(function(res) {
      var iconomi = res[0];
      var crypto = res[1];
      var resultObject = null;
      if (iconomi && crypto) {
        resultObject = [...iconomi, ...crypto];
      } else {
        if (iconomi) {
          resultObject = [...iconomi];
        } else {
          resultObject = [...crypto];
        }
      }
      finalresult.push(resultObject);
    });
  }

  return finalresult;
}

export { getAllExternalData };
