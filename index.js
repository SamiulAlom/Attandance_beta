

// select using css selectors (querySelector)
const presentBtnList = document.querySelectorAll(".p");
const absentBtnList = document.querySelectorAll(".a");

// starting with everyone being absent makes it easier for the user! so:
absentBtnList.forEach((item) => item.classList.add("r-light"));


let totalPresent = 0;
let totalAbsent = absentBtnList.length;

// showing the attendance data:
const updateChart = () => {
  // presence
  document.querySelector("#pt").textContent = totalPresent;
  document.querySelector("#pp").textContent =
    ((totalPresent * 100) / presentBtnList.length).toFixed(1) + "%";

  // absence
  document.querySelector("#at").textContent = totalAbsent;
  document.querySelector("#ap").textContent =
    ((totalAbsent * 100) / absentBtnList.length).toFixed(1) + "%";
};
updateChart();

for (let i = 0; i < presentBtnList.length; i++) {
  presentBtnList[i].addEventListener("click", () => {
    // updating class
    presentBtnList[i].classList.add("g-light");
    absentBtnList[i].classList.remove("r-light");

    // updating attendance data
    totalPresent++;
    totalAbsent -= totalAbsent ? 1 : 0;
    updateChart();
  });

  absentBtnList[i].addEventListener("click", () => {
    // updating class
    absentBtnList[i].classList.add("r-light");
    presentBtnList[i].classList.remove("g-light");

    // updating attendance data
    totalAbsent++;
    totalPresent -= totalPresent ? 1 : 0;
    updateChart();
  });
}
