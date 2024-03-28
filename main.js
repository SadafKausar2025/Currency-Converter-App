console.log("Main.js is working");

const populate = async (value, currency) => {
  let myString = "";
  url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_E7wUYdLvjJKL9lBy1oQyFtE9HczuwH9Mf1ky5GSa&base_currency=" +
    currency;

  let response = await fetch(url);
  let rJson = await response.json();
  document.querySelector(".output").style.display = "block";

  for (let key of Object.keys(rJson["data"])) {
    myString += ` <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(
                          rJson["data"][key]["value"] * value
                        )}</td>
                    </tr>`;
  }
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = myString;
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  const value = parseInt(
    document.querySelector("input[name='quantity']").value
  );
  const currency = document.querySelector("select[name='currency']").value;
  populate(value, currency);
});
