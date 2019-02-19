import { withPluginApi } from "discourse/lib/plugin-api";
import { iconHTML } from "discourse-common/lib/icon-library";

function toSnakeCase(string){
  return string.toLowerCase().split(" ").join("-").replace(/[^A-Za-z0-9-]+/g,'')
}
function createBookmark(_, header){
  var text = header.textContent
  $(header).attr("id", toSnakeCase(text))

  var bookmark_icon = " <a href='#" + toSnakeCase(text) + "'>" + iconHTML('bookmark') + "</a>"

  $(header).hover(function(){
    $(header).append(bookmark_icon)
  },
  function(){
    $(header).html(text)
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
