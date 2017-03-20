function setTweetQuote(quote) {
  url = "https://twitter.com/intent/tweet?text=" + escape(quote);
  
  $(".tweet").on("click", function() {
    window.open(url);
});
}

setTweetQuote("Maybe our favorite quotations say more about us than about the stories and people we're quoting.");

function parseQuote(response) {
  document.getElementById("quoteText").innerHTML = "\""+response.quoteText + "\"";
  document.getElementById("quoteAuthor").innerHTML = response.quoteAuthor ? response.quoteAuthor:"unknown";
  setTweetQuote(response.quoteText);
}

$("#quoteButton").on("click", function() {
  $.getScript("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseQuote");
})