function card1() {
  const card_main = document.getElementsByClassName("container__1")[0];
  const card = document.getElementsByClassName("card_1")[0];
  const card_top_text = document.getElementsByClassName("card_text1")[0];
  const card_bottom = document.getElementsByClassName("text")[0];
  const card_corner = document.getElementsByClassName("corner")[0];
  const card_circle = document.getElementsByClassName("card_text5")[0];
  const button = document.getElementsByClassName("buy")[0];

  function aftermod() {
    card_top_text.style.color = "#D91667";
    card_top_text.innerHTML = card_top_text.innerHTML.replace(
      "Сказочное заморское яство",
      "Котэ не одобряет?"
    );
  }
  function aftermod_reverse() {
    card_top_text.style.color = "#666666";
    card_top_text.innerHTML = card_top_text.innerHTML.replace(
      "Котэ не одобряет?",
      "Сказочное заморское яство"
    );
  }

  let border = getComputedStyle(card_main);
  if (
    border.getPropertyValue("border-color") ==
      "rgb(0, 0, 0) rgb(22, 152, 217) rgb(22, 152, 217)" ||
    border.getPropertyValue(
      "-moz-border-end-color"
    ) /* Для корректной работы с mozilla */ == "rgb(22, 152, 217)"
  ) {
    card_main.style.borderColor = "#D91667";
    card_main.style.borderTop = "0";
    card_top_text.style.borderColor = "#D91667";
    card_corner.style.background =
      "linear-gradient(-45deg,white, white 28.5px, #D91667 0,#D91667 32px, transparent 0)";
    card_circle.style.backgroundColor = "#D91667";
    card_bottom.innerHTML = card_bottom.innerHTML.replace(
      "Чего сидишь? Порадуй кота, ",
      "Печень утки разварная с артишоками"
    );
    button.style.display = "none";
    card.addEventListener("mouseleave", aftermod);
  } else {
    card_main.style.borderColor = "#1698D9";
    card_main.style.borderTop = "0";
    card_top_text.style.borderColor = "#1698D9";
    card_corner.style.background =
      "linear-gradient(-45deg,white, white 28.5px, #1698D9 0,#1698D9 32px, transparent 0)";
    card_circle.style.backgroundColor = "#1698D9";
    card_bottom.innerHTML = card_bottom.innerHTML.replace(
      "Печень утки разварная с артишоками",
      "Чего сидишь? Порадуй кота, "
    );
    button.style.display = "inline";
    card_top_text.style.color = "#666666";
    card_top_text.innerHTML = card_top_text.innerHTML.replace(
      "Котэ не одобряет?",
      "Сказочное заморское яство"
    );
    card.addEventListener("mouseleave", aftermod_reverse);
  }
}

function card2() {
  const card_main = document.getElementsByClassName("container__2")[0];
  const card = document.getElementsByClassName("card_2")[0];
  const card_top_text = document.getElementsByClassName("card_text1")[1];
  const card_bottom = document.getElementsByClassName("text")[1];
  const card_corner = document.getElementsByClassName("corner")[1];
  const card_circle = document.getElementsByClassName("card_text5")[1];
  const button = document.getElementsByClassName("buy")[1];

  function aftermod() {
    card_top_text.style.color = "#D91667";
    card_top_text.innerHTML = card_top_text.innerHTML.replace(
      "Сказочное заморское яство",
      "Котэ не одобряет?"
    );
  }
  function aftermod_reverse() {
    card_top_text.style.color = "#666666";
    card_top_text.innerHTML = card_top_text.innerHTML.replace(
      "Котэ не одобряет?",
      "Сказочное заморское яство"
    );
  }

  let border = getComputedStyle(card_main);
  if (
    border.getPropertyValue("border-color") ==
      "rgb(0, 0, 0) rgb(22, 152, 217) rgb(22, 152, 217)" ||
    border.getPropertyValue(
      "-moz-border-end-color"
    ) /* Для корректной работы с mozilla */ == "rgb(22, 152, 217)"
  ) {
    card_main.style.borderColor = "#D91667";
    card_main.style.borderTop = "0";
    card_top_text.style.borderColor = "#D91667";
    card_corner.style.background =
      "linear-gradient(-45deg,white, white 28.5px, #D91667 0,#D91667 32px, transparent 0)";
    card_circle.style.backgroundColor = "#D91667";
    card_bottom.innerHTML = card_bottom.innerHTML.replace(
      "Чего сидишь? Порадуй кота, ",
      "Головы щучьи с чесноком да свежайшая сёмгушка."
    );
    button.style.display = "none";
    card.addEventListener("mouseleave", aftermod);
  } else {
    card_main.style.borderColor = "#1698D9";
    card_main.style.borderTop = "0";
    card_top_text.style.borderColor = "#1698D9";
    card_corner.style.background =
      "linear-gradient(-45deg,white, white 28.5px, #1698D9 0,#1698D9 32px, transparent 0)";
    card_circle.style.backgroundColor = "#1698D9";
    card_bottom.innerHTML = card_bottom.innerHTML.replace(
      "Головы щучьи с чесноком да свежайшая сёмгушка.",
      "Чего сидишь? Порадуй кота, "
    );
    button.style.display = "inline";
    card_top_text.style.color = "#666666";
    card_top_text.innerHTML = card_top_text.innerHTML.replace(
      "Котэ не одобряет?",
      "Сказочное заморское яство"
    );
    card.addEventListener("mouseleave", aftermod_reverse);
  }
}
/* Есть более верный способ сделать некликабельную карту, однако задание требовало
только одну такую, поэтому пошёл таким путём. */
function card3() {
  const card_main = document.getElementsByClassName("container__3")[0];
  const card = document.getElementsByClassName("card_3")[0];
  const card_top = document.getElementsByClassName("card_top__3")[0];
  const card_top_text = document.getElementsByClassName("card_text1")[2];
  const card_top_text2 = document.getElementsByClassName("card_text4")[2];
  const card_bottom = document.getElementsByClassName("text")[2];
  const card_corner = document.getElementsByClassName("corner")[2];
  const card_circle = document.getElementsByClassName("card_text5")[2];
  const button = document.getElementsByClassName("buy")[2];
  const image = document.getElementsByClassName("image__cat")[2];
  card_top.style.cursor = "default";
  card_top_text.style.borderColor = "hsla(0,0%,70%,.5)";
  card_top_text.style.color = "hsla(0,0%,70%,.5)";
  card_top_text2.style.color = "hsla(0,0%,70%,.5)";
  card_main.style.borderColor = "hsla(0,0%,70%,.5)";
  card_main.style.cursor = "default";
  card_corner.style.background =
    "linear-gradient(-45deg,white, white 28.5px, hsla(0,0%,100%,.85) 0,hsla(0,0%,100%,.85) 32px, transparent 0)";
  card_circle.style.backgroundColor = "#b3b3b3";
  card_bottom.innerHTML = card_bottom.innerHTML.replace(
    "Чего сидишь? Порадуй кота, ",
    "Печалька, с курой закончился"
  );
  card_bottom.style.color = "#ffff66";
  button.style.display = "none";
  card.style.color = "hsla(0,0%,70%,.5)";
  image.style.opacity = "0.5";
}
