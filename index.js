
let g1 = document.getElementById("g-1");
let r1 = document.getElementById("r-1"); 
g1.addEventListener("click", () =>{
        g1.classList.add("g-light");
        r1.classList.remove("r-light");
    });
r1.addEventListener("click", () =>{
    r1.classList.add("r-light");
    g1.classList.remove("g-light");
});


let g2 = document.getElementById("g-2");
let r2 = document.getElementById("r-2"); 
g2.addEventListener("click", () =>{
        g2.classList.add("g-light");
        r2.classList.remove("r-light");
    });
r2.addEventListener("click", () =>{
    r2.classList.add("r-light");
    g2.classList.remove("g-light");
});

let g3 = document.getElementById("g-3");
let r3 = document.getElementById("r-3"); 
g3.addEventListener("click", () =>{
        g3.classList.add("g-light");
        r3.classList.remove("r-light");
});
r3.addEventListener("click", () =>{
    r3.classList.add("r-light");
    g3.classList.remove("g-light");
});

let g4 = document.getElementById("g-4");
let r4 = document.getElementById("r-4"); 
g4.addEventListener("click", () =>{
    g4.classList.add("g-light");
    r4.classList.remove("r-light");
});
r4.addEventListener("click", () =>{
r4.classList.add("r-light");
g4.classList.remove("g-light");
});

let g5 = document.getElementById("g-5");
let r5 = document.getElementById("r-5");
g5.addEventListener("click", () =>{
    g5.classList.add("g-light");
    r5.classList.remove("r-light");
});
r5.addEventListener("click", () =>{
    r5.classList.add("r-light");
    g5.classList.remove("g-light");
});   
    
let g6 = document.getElementById("g-6");
let r6 = document.getElementById("r-6");
g6.addEventListener("click", () =>{
    g6.classList.add("g-light");
    r6.classList.remove("r-light");
});
r6.addEventListener("click", () =>{
    r6.classList.add("r-light");
    g6.classList.remove("g-light");
});   

let g7 = document.getElementById("g-7");
let r7 = document.getElementById("r-7");
g7.addEventListener("click", () =>{
    g7.classList.add("g-light");
    r7.classList.remove("r-light");
});
r7.addEventListener("click", () =>{
    r7.classList.add("r-light");
    g7.classList.remove("g-light");
});   

let g8 = document.getElementById("g-8");
let r8 = document.getElementById("r-8");
g8.addEventListener("click", () =>{
    g8.classList.add("g-light");
    r8.classList.remove("r-light");
});
r8.addEventListener("click", () =>{
    r8.classList.add("r-light");
    g8.classList.remove("g-light");
});   

let g9 = document.getElementById("g-9");
let r9 = document.getElementById("r-9");
g9.addEventListener("click", () =>{
    g9.classList.add("g-light");
    r9.classList.remove("r-light");
});
r9.addEventListener("click", () =>{
    r9.classList.add("r-light");
    g9.classList.remove("g-light");
});   

let g10 = document.getElementById("g-10");
let r10 = document.getElementById("r-10");
g10.addEventListener("click", () =>{
    g10.classList.add("g-light");
    r10.classList.remove("r-light");
});
r10.addEventListener("click", () =>{
    r10.classList.add("r-light");
    g10.classList.remove("g-light");
});   

let g11 = document.getElementById("g-11");
let r11 = document.getElementById("r-11");
g11.addEventListener("click", () =>{
    g11.classList.add("g-light");
    r11.classList.remove("r-light");
});
r11.addEventListener("click", () =>{
    r11.classList.add("r-light");
    g11.classList.remove("g-light");
});   

let g12 = document.getElementById("g-12");
let r12 = document.getElementById("r-12");
g12.addEventListener("click", () =>{
    g12.classList.add("g-light");
    r12.classList.remove("r-light");
});
r12.addEventListener("click", () =>{
    r12.classList.add("r-light");
    g12.classList.remove("g-light");
});   

let g13 = document.getElementById("g-13");
let r13 = document.getElementById("r-13");
g13.addEventListener("click", () =>{
    g13.classList.add("g-light");
    r13.classList.remove("r-light");
});
r13.addEventListener("click", () =>{
    r13.classList.add("r-light");
    g13.classList.remove("g-light");
});   

let g14 = document.getElementById("g-14");
let r14 = document.getElementById("r-14");
g14.addEventListener("click", () =>{
    g14.classList.add("g-light");
    r14.classList.remove("r-light");
});
r14.addEventListener("click", () =>{
    r14.classList.add("r-light");
    g14.classList.remove("g-light");
});   

let g15 = document.getElementById("g-15");
let r15 = document.getElementById("r-15");
g15.addEventListener("click", () =>{
    g15.classList.add("g-light");
    r15.classList.remove("r-light");
});
r15.addEventListener("click", () =>{
    r15.classList.add("r-light");
    g15.classList.remove("g-light");
});   






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