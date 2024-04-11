$(document).ready(function () {
  let cartItems = [];
  let defaultQuantity = 1;
  const $continueBtn = $("<div id='continueBtn'></div>").css({
    position: "relative",
    display: "none",
    marginTop: "2rem",
  });
  const $continueButton = $("<button>Continue</button>").click(function () {
    window.location.href =
      "cart.html?items=" + encodeURIComponent(JSON.stringify(cartItems));
    console.log("Items moved to the cart page");
    cartItems = [];
    $(".cart-link").text("Cart");
    $(".quantity-box").hide();
    $continueBtn.hide();
  });
  $continueBtn.append($continueButton);
  $(".others").append($continueBtn);

  $(".cart-link").each(function () {
    let $this = $(this);
    let itemName = $this.closest(".box").find("h3").text();

    let $quantityBox = $("<div class='quantity-box'></div>").hide();
    let $minusBtn = $("<button class='minus'>-</button>").css(
      "margin-right",
      "6px"
    );
    let $countSpan = $("<span>1</span>").css("margin-right", "6px");
    let $plusBtn = $("<button class='plus'>+</button>").css(
      "margin-right",
      "6px"
    );
    let $deleteBtn = $("<button class='delete-link'></button>").css(
      "margin-left",
      "10px"
    );
    let $deleteIcon = $("<i class='fas fa-trash delete-icon'></i>");
    let $cartIcon = $("<i class='fas fa-shopping-cart'></i>");

    $deleteBtn.append($deleteIcon);

    $this.on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      if ($quantityBox.is(":visible")) {
        return;
      } else {
        $this.text("");
        $this.append($quantityBox);
        $quantityBox.show();
        if ($countSpan.text() === defaultQuantity.toString()) {
          // Check if the quantity is equal to the default quantity
          $quantityBox.append($minusBtn, $countSpan, $plusBtn, $deleteBtn); // Add the delete button only if the quantity is greater than default
        } else {
          $quantityBox.append($minusBtn, $countSpan, $plusBtn, $deleteBtn); // Add delete button along with other buttons
        }

        $minusBtn.on("click", function (event) {
          event.preventDefault();
          let count = parseInt($countSpan.text());
          if (count > 1) {
            count--;
            $countSpan.text(count.toString());
            updateCartItemQuantity($this, count);
          }
        });

        $plusBtn.on("click", function (event) {
          event.preventDefault();
          let count = parseInt($countSpan.text());
          count++;
          $countSpan.text(count.toString());
          updateCartItemQuantity($this, count);
        });

        $deleteBtn.on("click", function (event) {
          event.preventDefault();
          cartItems = cartItems.filter((item) => item.name !== itemName);
          $quantityBox.hide();
          $quantityBox.empty();
          $this
            .text("")
            .append($cartIcon)
            .text("Cart")
            .css("font-size", "15px", "font-weight", "400");
          $continueBtn.hide();
          alert(itemName + " is removed from the cart.");
        });

        $deleteIcon.on("click", function (event) {
          event.stopPropagation();
          let $cartLink = $deleteIcon.closest(".cart-link");
          let $box = $cartLink.closest(".box");
          let $price = $box.find(".price");
          cartItems = cartItems.filter((item) => item.name !== itemName);
          $cartLink.children(".cart-icon").show();
          $price.show();
          $cartLink
            .text("")
            .append($cartIcon)
            .append("Cart")
            .css("font-size", "15px", "font-weight", "400");
          $quantityBox.hide();
          $quantityBox.empty();
          $countSpan.text(defaultQuantity);
          $continueBtn.hide();
          alert(itemName + " is removed from the cart.");
        });

        let itemPrice = $this.closest(".box").find(".price span").text();
        let itemQuantity = 1;
        let existingItem = cartItems.find((item) => item.name === itemName);
        if (existingItem) {
          itemQuantity = existingItem.quantity;
        }
        let item = {
          name: itemName,
          price: itemPrice,
          quantity: itemQuantity,
        };

        let index = cartItems.findIndex((item) => item.name === itemName);
        if (index !== -1) {
          cartItems[index] = item;
        } else {
          cartItems.push(item);
        }
        $continueBtn.show();
      }
    });
  });

  function updateCartItemQuantity($element, quantity) {
    let itemName = $element.closest(".box").find("h3").text();
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].name === itemName) {
        cartItems[i].quantity = quantity;
        break;
      }
    }
  }
});
$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(window).scrollTop() > 0) {
      $("#scroll-top").show();
    } else {
      $("#scroll-top").hide();
    }
  });

  //Smooth scroll
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});
document.body.style.overflow = "hidden"; // Hide the default scrollbar
  OverlayScrollbars(document.querySelectorAll("body"), {
    scrollbars: {
      autoHide: "scroll", // Show scrollbars only on scroll
      autoHideDelay: 500, // Delay before auto-hiding scrollbars
    },
  });
