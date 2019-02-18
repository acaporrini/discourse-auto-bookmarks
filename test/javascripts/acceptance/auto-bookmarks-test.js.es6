import { acceptance } from "helpers/qunit-helpers";
acceptance("AutoBookmarks", { loggedIn: true });

test("add ID to header", assert => {
  visit("/");

  click("#create-topic");
  fillIn("#reply-title", "This is my title");

  fillIn(".d-editor-input", "# This is my H1 header for the test\n## This is h2, with special characters!");

  andThen(() => assert.equal(find('#this-is-my-h1-header-for-the-test').text(), "This is my H1 header for the test"));
  andThen(() => assert.equal(find('#this-is-h2-with-special-characters').text(), "This is h2, with special characters!"));
})


test("show bookmark link on hover", assert => {
  visit("/");

  click("#create-topic");
  fillIn("#reply-title", "This is my title");

  fillIn(".d-editor-input", "# This is my H1 header for the test\n## This is h2, with special characters!");

  andThen(function() {
    let h1 = find('#this-is-my-h1-header-for-the-test');
    h1.mouseenter();
  });

  andThen(function() {
    assert.ok(exists("a[href='#this-is-my-h1-header-for-the-test']"))
  });

  andThen(function() {
    let h2 = find('#this-is-h2-with-special-characters');
    h2.mouseenter();
  });

  andThen(function() {
    assert.ok(exists("a[href='#this-is-h2-with-special-characters']"))
  });
})
