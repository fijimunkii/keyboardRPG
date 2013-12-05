keyboardRPG
===========

Chrome Extension RPG based on keyboard shortcuts

**Game optional**
Base MVP is to provide additional shortcuts

Browser ->
  tab switch
  tab close
  navigation focus
  scroll

WebApps ->
  Gmail ->
    archive
    select
    open -> archive
    open -> reply -> send(&archive)
  Stackoverflow ->
    search
    ....


Limitations of event listeners:
http://stackoverflow.com/a/7296303/2474735


Chrome APIs
===========
Commands API - http://developer.chrome.com/extensions/commands.html
-Use: http://stackoverflow.com/a/18499297/2474735

ContentScript - http://code.google.com/chrome/extensions/content_scripts.html
http://code.google.com/chrome/extensions/messaging.html
-Use: http://stackoverflow.com/a/5502314/2474735


User stories
============

1
* As a user
* I want to install this extension
* So I can gain additional functionality to my browser

1
* As a user
* I want the extension to be unobtrusive
* So I don't have to think about it

1
* As a user
* I want a keyboard shortcut to show me all available shortcuts
* So I have reference

1
* As a user
* I want available keyboard shortcuts tailored to the site I am currently on
* So that the functionality is relevant to what I am working on

1
* As a user
* I want to be able to turn shortcuts on/off
* So I can customize how the app works for me

1
* As a user
* I want to be able to log into the game part of the extension
* So I can participate in the game

1
* As a user
* I want points logged to my account for keyboard shortcuts
* To provide incentive for being efficient

1
* As a user
* I want to lose points for using the mouse
* To provide incentive against being inefficient

1
* As a user
* I want to have a shortcut to toggle sounds for the game
* As I don't always want to listen to the game, it should be able to work in the background

1
* As a user
* I want to have my points logged to a profile
* So I can see my score

1
* As a user
* I want to gain achievements
* So I can utitlize new keyboard shortcut workflows and show off badges

1
* As a user
* I want to see a high score list of other users in the game
* So I know what the ballpark is

1
* As a user
* I want to be able to friend other people in the game
* So I can see what my friends are up to

1
* As a user
* I want to gain points for referring my friends
* So I can level up in the game and collect rare badges

1
* As a user
* I want to recommend new sites and shortcuts
* So the game can better serve me


