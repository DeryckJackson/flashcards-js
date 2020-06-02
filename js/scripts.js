$(document).ready(function() {
  // $(".flashcard").click(function() {
  //   $(".hidden").toggle();
  // });

  $(".flashcard").click(function() {
    // $(this).children(".hidden").toggle();
    $('.hidden', this).toggle()
  });
});