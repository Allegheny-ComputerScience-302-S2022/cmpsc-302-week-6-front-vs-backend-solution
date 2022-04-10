# `CMPSC 302` Web Development, Week 6: Front- vs. Back-end

* Assigned: 11 April 2022, 1:30 PM
* Due: 10 April 2022, 11:59 PM

## Talking to myself

### Requirements
#### Design

##### Wireframes

Tradtionally, when working on designs in the web space, you'll develop or be given "wireframes." These can range from sparse to dense in 
information population. For the purposes of our assignment, they're relatively general.

###### Desktop

![On yr main](https://allegheny-computerscience-302-s2022.github.io/cmpsc-302-week-4-basic-javascript-solution/media/desktop-wireframe.png)

###### Mobile

![On the Go](https://allegheny-computerscience-302-s2022.github.io/cmpsc-302-week-4-basic-javascript-solution/media/mobile-wireframe.png)

#### Functionality

## Making a GitHub Pages page

This assignment also requires you to make your work available via GitHub Pages. For a primer on where to find it
and how to do it:

- [ ] locate and click the `Settings` tab at the top of the screen
- [ ] from the menu at the left, select `Pages`
- [ ] locate the "Source" heading; set the "Branch" as `main`, and change the second drop-down to `/docs`
- [ ] click `Save`
- [ ] One last step: make the page _public_ by setting `GitHub Pages visibility` to `Public`
  * This step is _required_ for your HTML and CSS to pass validation!
A green box will appear at the top of the page listing the random URL that you've been assigned. This is your
URL!

## Setting up a Heroku app

To do the server ("back-end") part of this assignment, you'll need to head over to [Heroku](https://www.heroku.com) and create
a free account. Once you've created one:

1. Log in and find the `New` button (it's in the upper left corner)
2. Click `Create new app` and name it: `cmpsc-302-chat-server-YOUR_GITHUB_USERNAME`
3. Click `Create app`
4. On the resulting screen, locate the `Deployment` section
5. Click `GitHub`
6. Connect Heroku to your GitHub account
7. Once you've linked the account, select the `Allegheny-ComputerScience-302-S2022` organization
8. Search for your repository and link it

Once you've linked the repository, any `push` you make to your GitHub repository will also build the `app` directory on Heroku
at the address:

`APP_NAME`.heroku

## Accepting the assignment

- [ ] Using either the link posted to our class Discord or the [course schedule](https://cmpsc302.chompe.rs)
- [ ] Click the link provided for the lab assignment and accept it in GitHub classroom
- [ ] Once the assignment finishes building, click the link to go to your personal repository assignment

## "Cloning" a repository

### Using the correct download link

- [ ] On this repository's page, click the `Clone or download` button in the upper right hand corner
* You may need to scroll up to see it
- [ ] In the upper right corner of the box that appears, click `Use SSH`
- [ ] Copy the link that appears in the textbox below the phrase "Use a password with a protected key."

#### Cloning

* [ ] Type `ls` in your terminal window
* You should be in your `~` directory
- [ ] Find the folder you've made to hold class assignments (may involve `cd`ing)
- [ ] Once there, "clone" the repository using the link copied above
  * If I (the instructor) were to clone my own repository, I'd enter (your link will look different):

```
git clone git@github.com:Allegheny-ComputerScience-302-S2022/cmpsc-302-week-3-basic-style-exercises.git
```

## Wrap-up

### Submitting the assignment/saving progress

The GitHub platform is a place to store your work. So, it makes some sense that should be able to _clone_ (download) from it, and push back (upload) to it. Here, we'll learn this second part.

- [ ] `cd` to your `~` folder
- [ ] Locate your `cmpsc-302-week-3-basic-style-exercises` folder and `cd` to it.

Once in this folder, we need to tell git that there have been changes.

- [ ] Type `git add -A` and press `Enter`
* This tells git to look through the _entire_ folder structure for new changes and "stage" them

- [ ] Type `git commit -m "YOUR COMMIT MESSAGE"` to "label" the commit
* This is typically something like `git commit -m "Fixing a typo"` -- the message in quotes should be as descriptive as possible, while still remaining somewhat short

- [ ] To send all changes to the server, type `git push`
- [ ] At the prompt, input the password associated with the `SSH Key` you created earlier in this exercise (yesterday)

Once the process finishes successfully, we're done!
