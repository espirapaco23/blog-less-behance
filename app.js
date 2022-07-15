$(function () {
  let filter = $("[data-filter");

  filter.on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data("filter");

    if (cat === "all") {
      $("[data-col").removeClass("hide");
    } else {
      $("[data-col").each(function () {
        let itemCol = $(this).data("col");
        if (itemCol != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  //modalw|||||||||||||||||||||||||||||||||||||||||||||||||||||||

  let modalWindow = $("[data-modal");
  let modalClose = $("[data-close");

  modalWindow.on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data("modal");
    $(modalId).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "rotateX(0)",
      });
    }, 400);

    $("#slider").slick("setPosition");
  });

  modalClose.on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    let modalCancel = $this.parents(".modal");

    modalCancel.find(".modal__dialog").css({
      transform: "rotateX(90deg)",
    });

    setTimeout(function () {
      modalCancel.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal").on("click", function (event) {
    let $this = $(this);
    $this.find(".modal__dialog").css({
      transform: "rotateX(90deg)",
    });

    setTimeout(function () {
      $this.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });

  //slick////////////////////////////
  $("#slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".sprev").on("click", function (event) {
    event.preventDefault();
    $("#slider").slick("slickPrev");
  });
  $(".snext").on("click", function (event) {
    event.preventDefault();
    $("#slider").slick("slickNext");
  });

  //////////////menu///////////

  let navM = $("#navMenu");
  let nav = $("#nav");

  navM.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
  });

  var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

  // fixedheader
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $(this).data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("#nav").removeClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset - 70,
      },
      700
    );
  });
});
