let familyLamp1 = document.getElementById("familyLamp1");
let familyLamp2 = document.getElementById("familyLamp2");
let familyLamp3 = document.getElementById("familyLamp3");
let eatLamp1 = document.getElementById("eatLamp1");
let sleepLamp1 = document.getElementById("sleepLamp1");
let sleepLamp2 = document.getElementById("sleepLamp2");
let guestLamp1 = document.getElementById("guestLamp1");
let guestLamp2 = document.getElementById("guestLamp2");
let guestLamp3 = document.getElementById("guestLamp3");
let guestLamp4 = document.getElementById("guestLamp4");

let familyToggle1 = document.getElementById("family-toggle1");
let familyToggle2 = document.getElementById("family-toggle2");
let familyToggle3 = document.getElementById("family-toggle3");
let eatToggle1 = document.getElementById("eat-toggle1");
let sleepToggle1 = document.getElementById("sleep-toggle1");
let sleepToggle2 = document.getElementById("sleep-toggle2");
let guestToggle1 = document.getElementById("guest-toggle1");
let guestToggle2 = document.getElementById("guest-toggle2");
let guestToggle3 = document.getElementById("guest-toggle3");
let guestToggle4 = document.getElementById("guest-toggle4");

let groupFamilyToggle = document.getElementById("group-family-toggle");
let groupEatToggle = document.getElementById("group-eat-toggle");
let groupSleepToggle = document.getElementById("group-sleep-toggle");
let groupGuestToggle = document.getElementById("group-guest-toggle");

function saklar() {
  // Ruangan Keluarga
  familyToggle1.checked
    ? (familyLamp1.src = "assets/images/on.gif")
    : (familyLamp1.src = "assets/images/off.gif");

  familyToggle2.checked
    ? (familyLamp2.src = "assets/images/on.gif")
    : (familyLamp2.src = "assets/images/off.gif");

  familyToggle3.checked
    ? (familyLamp3.src = "assets/images/on.gif")
    : (familyLamp3.src = "assets/images/off.gif");

  // Ruangan Makan
  eatToggle1.checked
    ? (eatLamp1.src = "assets/images/on.gif")
    : (eatLamp1.src = "assets/images/off.gif");

  // Ruangan Tidur
  sleepToggle1.checked
    ? (sleepLamp1.src = "assets/images/on.gif")
    : (sleepLamp1.src = "assets/images/off.gif");
  sleepToggle2.checked
    ? (sleepLamp2.src = "assets/images/on.gif")
    : (sleepLamp2.src = "assets/images/off.gif");

  // Ruangan Tamu
  guestToggle1.checked
    ? (guestLamp1.src = "assets/images/on.gif")
    : (guestLamp1.src = "assets/images/off.gif");

  guestToggle2.checked
    ? (guestLamp2.src = "assets/images/on.gif")
    : (guestLamp2.src = "assets/images/off.gif");

  guestToggle3.checked
    ? (guestLamp3.src = "assets/images/on.gif")
    : (guestLamp3.src = "assets/images/off.gif");

  guestToggle4.checked
    ? (guestLamp4.src = "assets/images/on.gif")
    : (guestLamp4.src = "assets/images/off.gif");
}

function roomSwitch() {
  // Ruangan Keluarga
  groupFamilyToggle.checked
    ? ((familyLamp1.src = "assets/images/on.gif"),
      (familyLamp2.src = "assets/images/on.gif"),
      (familyLamp3.src = "assets/images/on.gif"),
      (familyToggle1.checked = true),
      (familyToggle2.checked = true),
      (familyToggle3.checked = true))
    : ((familyLamp1.src = "assets/images/off.gif"),
      (familyLamp2.src = "assets/images/off.gif"),
      (familyLamp3.src = "assets/images/off.gif"),
      (familyToggle1.checked = false),
      (familyToggle2.checked = false),
      (familyToggle3.checked = false));

  // Ruangan Makan
  groupEatToggle.checked
    ? ((eatLamp1.src = "assets/images/on.gif"), (eatToggle1.checked = true))
    : ((eatLamp1.src = "assets/images/off.gif"), (eatToggle1.checked = false));

  // Ruangan Tidur
  groupSleepToggle.checked
    ? ((sleepLamp1.src = "assets/images/on.gif"),
      (sleepLamp2.src = "assets/images/on.gif"),
      (sleepToggle1.checked = true),
      (sleepToggle2.checked = true))
    : ((sleepLamp1.src = "assets/images/off.gif"),
      (sleepLamp2.src = "assets/images/off.gif"),
      (sleepToggle1.checked = false),
      (sleepToggle2.checked = false));

  // Ruangan Tamu
  groupGuestToggle.checked
    ? ((guestLamp1.src = "assets/images/on.gif"),
      (guestLamp2.src = "assets/images/on.gif"),
      (guestLamp3.src = "assets/images/on.gif"),
      (guestLamp4.src = "assets/images/on.gif"),
      (guestToggle1.checked = true),
      (guestToggle2.checked = true),
      (guestToggle3.checked = true),
      (guestToggle4.checked = true))
    : ((guestLamp1.src = "assets/images/off.gif"),
      (guestLamp2.src = "assets/images/off.gif"),
      (guestLamp3.src = "assets/images/off.gif"),
      (guestLamp4.src = "assets/images/off.gif"),
      (guestToggle1.checked = false),
      (guestToggle2.checked = false),
      (guestToggle3.checked = false),
      (guestToggle4.checked = false));
}
