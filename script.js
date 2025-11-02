$(document).ready(function () {
  console.log("jQuery is ready!");

// Task 1 

$("#changeText").click(() => {
  $("#aboutCafe p")
    .first()
    .fadeOut(200, function () {
      $(this)
        .text(
          "Every morning, the café fills with the scent of fresh pastries and gentle laughter."
        )
        .fadeIn(400);
    });
});

$("#changeHTML").click(() => {
  $("#aboutCafe h3")
    .html("<span style='color:#b88393;'>Our Story</span> — A Taste of Calm");
});

$("#changeStyle").click(() => {
  $("#aboutCafe")
    .css({
      backgroundColor: "#fff6f8",
      boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      transform: "scale(1.01)",
    })
    .animate({ opacity: 0.95 }, 200)
    .animate({ opacity: 1 }, 200);
});

// Task 2 
$("#hideText").click(() => {
  $("#visibilityText").hide(600);
});
$("#showText").click(() => {
  $("#visibilityText").show(600);
});
$("#toggleText").click(() => {
  $("#visibilityText").toggle(600);
});

// Task 3 
$("#fadeOut").click(() => {
  $("#fadeImg").fadeOut(800);
});
$("#fadeIn").click(() => {
  $("#fadeImg").fadeIn(800);
});
$("#fadeToggle").click(() => {
  $("#fadeImg").fadeToggle(800);
});

// Task 4 
$("#slideToggle").click(() => {
  $("#panel").slideToggle(700);
});


// Task 5
$("#addItem").click(() => {
  $("#menuList").append("<li>New Latte Blend</li>");
});

$("#prependItem").click(() => {
  $("#menuList").prepend("<li>Morning Espresso</li>");
});

$("#removeItem").click(() => {
  $("#menuList li:last").remove();
});

// Task 6 — Modifying Attributes
$("#changeImg").click(() => {
  $("#drinkImg").attr("src", "Coffee.jpg");
});

$("#changeLink").click(() => {
  $("#drinkLink")
    .attr("href", "https://www.wikipedia.org/wiki/Coffee")
    .text("Learn about coffee");
});

// Task 7 — Form Interaction (Live update)
$("#name").on("input", () => {
  $("#outputName").text("Name: " + $("#name").val());
});

$("#email").on("input", () => {
  $("#outputEmail").text("Email: " + $("#email").val());
});

$("#sendForm").click(() => {
  const name = $("#name").val().trim();
  const email = $("#email").val().trim();

  if (name && email) {
    alert(`Thank you, ${name}! Your details have been sent.`);
  } else {
    alert("Please fill out both name and email before sending.");
  }
});

// Task 8 — Basic Animation (only move & resize, no return)
$("#task8").click(() => {
  const box = $("#latteBox");
  box.stop(true, true).animate(
    { left: "70%", top: "40px", width: "110px", height: "110px" },
    900,
    "swing"
  );
});

// Task 9 — Sequential Animation (Flow — goes out and returns)
$("#task9").click(() => {
  const box = $("#latteBox");
  $("#animWrap").css("overflow", "visible"); // allow leaving area

  box.stop(true, true)
    .animate({ left: "80%" }, 600, "swing")
    .animate({ top: "130px" }, 600, "swing")
    .animate(
      { left: "110%", opacity: 0.4, width: "60px", height: "60px" },
      700,
      "swing"
    )
    .animate(
      { left: "20px", top: "70px", width: "80px", height: "80px", opacity: 1 },
      1000,
      "swing",
      () => $("#animWrap").css("overflow", "hidden")
    );
});

// Task 10 — Combined Animation (Blend — opacity + size + move, no return)
$("#task10").click(() => {
  const box = $("#latteBox");
  box.stop(true, true).animate(
    {
      left: "65%",
      top: "30px",
      width: "100px",
      height: "100px",
      opacity: 0.6,
    },
    1000,
    "swing"
  );
});

// Reset — instantly return to start
$("#resetLatte").click(() => {
  $("#latteBox").stop(true, true).css({
    left: "20px",
    top: "70px",
    width: "80px",
    height: "80px",
    opacity: 1,
  });
  $("#animWrap").css("overflow", "hidden");
});

  // --- Mini Project: Bouncing Ball ---
  let bouncing = false;
  let ball = $("#ball");
  let area = $("#ballArea");
  let bounceInterval;
  const gravity = 0.6;
  const bounce = 0.75;
  const speedX = 5;
  let velocityY = 0;
  let direction = 1;
  let leftPos = 10;
  let topPos = 10;

  function bounceStep() {
    if (!bouncing) return;
    leftPos += speedX * direction;
    topPos += velocityY;
    velocityY += gravity;

    if (topPos + ball.height() >= area.height()) {
      topPos = area.height() - ball.height();
      velocityY *= -bounce;
      ball.animate({ width: "65px", height: "55px" }, 100)
          .animate({ width: "60px", height: "60px" }, 150);
    }
    if (leftPos + ball.width() >= area.width() || leftPos <= 0) direction *= -1;

    ball.css({ left: leftPos + "px", top: topPos + "px" });
    requestAnimationFrame(bounceStep);
  }

  $("#startBounce").click(() => {
    if (!bouncing) { bouncing = true; bounceStep(); }
  });
  $("#stopBounce").click(() => bouncing = false);
  $("#resetBounce").click(() => {
    bouncing = false;
    leftPos = topPos = 10;
    velocityY = 0;
    ball.css({ top: "10px", left: "10px" });
  });
});
