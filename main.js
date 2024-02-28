let load_more2023 = document.getElementById("load-more2023");
let load_more2024 = document.getElementById("load-more2024");

// Loding More event by clicking on button for 2023 events
let currentItem = 3;
function loadMoreBtn_2024() {
  let boxes = [
    ...document.querySelectorAll(".recent_events .event_2024 .card"),
  ];
  for (var i = currentItem; i < currentItem + 2; i++) {
    if (currentItem <= boxes.length) {
      boxes[i].style.display = "block";
    }
    console.log(currentItem);
  }
  currentItem += 2;
  // Hiding load more button after showing all the events.
  if (currentItem >= boxes.length) {
    load_more2024.style.display = "none";
  }
}
// Loding More event by clicking on button for 2023 events
currentItem = 4;
function loadMoreBtn_2023() {
  let boxes = [
    ...document.querySelectorAll(".recent_events .event_2023 .card"),
  ];
  for (var i = currentItem; i < currentItem + 2; i++) {
    if (currentItem <= boxes.length) {
      boxes[i].style.display = "block";
    }
    console.log(currentItem);
  }
  currentItem += 2;
  // Hiding load more button after showing all the events.
  if (currentItem >= boxes.length) {
    load_more2023.style.display = "none";
  }
}