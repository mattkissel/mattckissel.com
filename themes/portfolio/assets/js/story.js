
//   const figures = document.querySelectorAll("#picturebook figure");
//   let current = 0;

// //   function showPage(index) {
// //     figures.forEach((fig, i) => {
// //       if (i === index) {
// //         fig.classList.add("active");
// //       } else {
// //         fig.classList.remove("active");
// //       }
// //     });
// //   }
// // function showPage(index) {
// //   figures.forEach((fig, i) => {
// //     fig.classList.toggle("active", i === index);
// //   });
// // }

//   function showPage(index) {
//     let timeOut = 400; // must match the CSS transition duration
//     figures.forEach((fig, i) => {
//       if (i === index) {
//         // fade in
//         requestAnimationFrame(() => {
//           fig.classList.add("active");
//         });
//         setTimeout(() => {
//           fig.style.display = "block";
//         }, timeOut);
//       } else if (fig.classList.contains("active")) {
//         // fade out
//         fig.classList.remove("active");
//         // after fade duration, hide it
//         setTimeout(() => {
//           fig.style.display = "none";
//         }, timeOut);
//       } else {
//         fig.style.display = "none";
//       }
//     });
//   }

//   document.getElementById("prev").onclick = () => {
//     current = (current > 0) ? current -1 : figures.length - 1;
//     showPage(current);
//   }

//   document.getElementById("next").onclick = () => {
//     current = (current + 1) % figures.length;
//     showPage(current);
//   }

//   // Initialize
//   showPage(current);

const figures = document.querySelectorAll(".story-fig");
  const totalPages = figures.length;
  let current = 0;

  function showSpread(index) {
    // hide all first
    figures.forEach(fig => fig.style.display = "none");

    // show two pages starting at current index
    for (let i = index; i < index + 2 && i < totalPages; i++) {
      figures[i].style.display = "inline-block";
    }
  }

  document.getElementById("prev").addEventListener("click", () => {
    current = Math.max(0, current - 2);
    showSpread(current);
  });

  document.getElementById("next").addEventListener("click", () => {
    current = current + 2;
    if (current >= totalPages) {
      current = totalPages - (totalPages % 2 === 0 ? 2 : 1); // snap to last spread
    }
    showSpread(current);
  });

  showSpread(current); // initialize