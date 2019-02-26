import { withPluginApi } from "discourse/lib/plugin-api";
import { iconHTML } from "discourse-common/lib/icon-library";

function toSnakeCase(string){
  return string.toLowerCase().split(" ").join("-").replace(/[^A-Za-z0-9-]+/g,'')
}
function createBookmark(_, header){
  let rawText = header.textContent
  $(header).attr("id", toSnakeCase(rawText))
  $(header).addClass("header-bookmark")
  let spanText = "<span class='header-text'>" + rawText + "</span>"
  let headerContent = "<a href='#" + toSnakeCase(rawText) + "' class='bookmark-link' hidden=true>" + iconHTML('bookmark')+  "</a>" + spanText
  $(header).html(headerContent)

  $(header).hover(function(){
    $(this).find("a").show()
  },
  function(){
    $(this).find("a").hide()
  })
}

function initializeAutoBookmark(api) {
  api.decorateCooked($elem => $.each($elem.find("h1, h2, h3, h4, h5, h6"), createBookmark));
}

export default {
  name: "discourse-auto-bookmarks",

  initialize() {
    withPluginApi("0.8.24", initializeAutoBookmark);
  }
};
