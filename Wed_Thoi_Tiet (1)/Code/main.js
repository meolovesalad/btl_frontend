var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var mo_ta = document.querySelector(".mo_ta");
var nhin_xa = document.querySelector(".nhin_xa span");
var gio = document.querySelector(".gio span");
var do_am = document.querySelector(".do_am span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");
var body = document.querySelector("body");

async function nhap(nhap_vt) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${nhap_vt}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`; // Lấy API từ weather wed

  let data = await fetch(apiUrl).then((res) => res.json());
  if (data.cod === 200) {
    content.classList.remove("hide");
    city.innerText = data.name;
    country.innerText = data.sys.country;
    nhin_xa.innerText = data.visibility + "m";
    gio.innerText = data.wind.speed + "m/s";
    do_am.innerText = data.main.humidity + "%";
    mo_ta.innerText = data.weather[0] ? data.weather[0].main : "";
    let temp = Math.round(data.main.temp);
    let tempValue = Math.round(data.main.temp) + "°C";
    value.innerText = tempValue;
    time.innerText = new Date().toLocaleString("vi-VN");

    if (temp <= 21) {
      body.setAttribute("class", "dong");
    } else if (temp <= 23) {
      body.setAttribute("class", "xuan");
    } else if (temp <= 26) {
      body.setAttribute("class", "thu");
    } else {
      body.setAttribute("class", "ha");
    }
  } else {
    content.classList.add("hide");
  }
}

search.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    let nhap_vt = search.value.trim();
    nhap(nhap_vt);
  }
});
nhap("ha noi");
