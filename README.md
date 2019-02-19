# discourse-auto-bookmarks

discourse-auto-bookmarks is a [Discourse](https://github.com/discourse/discourse) plugin for adding automatic HTML bookmarks to topics and easily get a sharable link which points at specific parts of the text.

## Installation

Follow [Install a Plugin](https://meta.discourse.org/t/install-a-plugin/19157)
how-to from the official Discourse Meta, using `git clone https://github.com/acaporrini/auto-bookmarks.git`
as the plugin command.

## Usage
Hover over any h1,h2,h3,h4,h5,h6 header in your topics, a small bookmark icon will appear:


> ![Alt text](assets/images/hover.png?raw=true "Hover")


Right click the bookmark icon and select "Copy link address":


> ![Alt text](assets/images/copy.png?raw=true "Copy")



Now you can share this bookmark link, it will open the topic exactly at the point where the bookmark is.
## Testing
To run tests in your local environment visit [http://localhost:3000/qunit?qunit_skip_core=1&qunit_single_plugin=discourse-auto-bookmarks](http://localhost:3000/qunit?qunit_skip_core=1&qunit_single_plugin=discourse-auto-bookmarks)
## Feedback

If you have issues or suggestions for the plugin, please bring them up on
[Discourse Meta](https://meta.discourse.org).
