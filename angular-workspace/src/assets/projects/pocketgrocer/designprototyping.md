### Problem & Solution Overview

Current solutions exist to reduce or prevent food waste, but they address different stages of the farm-to-table process, like discounting ”ugly” produce to prevent them from being thrown out, or smart fridges that tend to cost thousands of dollars. Our design research revealed that users were generally aware of wasting food and the costs that came with throwing out food -- the greater challenge for households was keeping track of what foods they had and what foods they needed.

That is, people tended to over-purchase items they forgot they still had, and then end up with forgotten food sitting in their fridge or pantries. Our mobile app design seeks to help individuals keep inventory of their current groceries by easily logging their grocery purchases, and knowing how and when to dispose of food items that have gone bad, as well as being reminded of their older food items and to use them before they went bad. Beginning from paper sketches and ending with our digital prototype, we iterated our design focusing on these two key tasks to provide a simple, familiar design that participants could easily integrate into their usual grocery routines.

### Initial Paper Prototype

Based on our feedback from our original user research we decided the main features we wanted to add to our first prototype were the ability to scan groceries, keep track of the inventory, and have a way of knowing when food is going bad and how to dispose of it. We also wanted to add a tracking feature so people could see how much food waste they produce, and how much money they waste/save based on how attentive they are to their food waste habits.

<p><img src="assets/projects/{{ project.path }}/paper_initial/overview.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

#### Task 1: Keeping track of current groceries at home

From the main menu, users can tap “Scan Groceries” to take a photo of their receipt. After taking a photo, they are shown a preview of the items that were just added. At the top, if they tap “Tap for All Items”, they are then taken to the “My Items” page, which is a list of all of their own items. Otherwise, they can tap the hamburger button in the top left corner to return to the main menu. In addition to this list of grocery items, users can tap on “Track Food Waste” from the main menu and see both their food and money wasted over time.

<p><img src="assets/projects/{{ project.path }}/paper_initial/task1a.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_initial/task1b.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_initial/task1c.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_initial/task1d.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_initial/task1e.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

#### Task 2: Clearing out foods that have gone bad

In order to see items that have gone bad, or remove an expired item, the user will need to navigate to the main menu, and follow “My Items”. Once on the items page, they can select Categories from the button selections at the top of the screen, and two new buttons show up at the top labeled “Use it Soon” and “Expired”. By selecting Use it Soon they can see what items are expiring soon, and then follow each individual item for more info on how to use it. If they wanted to click on “Expired” this will show them all the items that have already gone bad based on their expiration date. After selecting a specific expired item, they can then see the disposal options for the item, and easily tap “Clear” to remove it from their items.

<p><img src="assets/projects/{{ project.path }}/paper_initial/task2a.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_initial/task2b.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_initial/task2c.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_initial/task2d.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_initial/task2e.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_initial/task2f.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

### Testing Process

Using both heuristic evaluations and usability tests, we received feedback from three UW students, asking them to pretend to use our app to check their groceries. In our usability tests, they complete several actions required by the two tasks we focused on. These actions included scanning new groceries, which was part of Task 1 (Keeping track of current groceries at home); throwing out expired groceries, which was part of Task 2 (Clearing out foods that have gone bad); and checking what groceries they currently had, which was part of both tasks.

### Testing Results/Refining Our Prototype

#### Usability Test 1

After our first usability test, we added the title “My Items” to our main items page for more clarity. In the same screen, we also merged the various sort and filter options (e.g. “Use it Soon”, “Expired”, “Categories”) into just two buttons, “Sort” and “Filter”. These buttons were both enlarged, along with a new “Show Days” button that could hide and show the number of days remaining in the shelf life of each food item; this new button helped reduce visual clutter for the user.

<p><img src="assets/projects/{{ project.path }}/usabilitytests/test1_myitems_before.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/usabilitytests/test1_myitems_after.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

In our “Items Scanned” page, we provided more control to users by adding buttons to retake the photo of their receipt, as well as the ability to manually edit food items before adding them to the user’s list.

<p><img src="assets/projects/{{ project.path }}/usabilitytests/test1_itemsscanned_before.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/usabilitytests/test1_itemsscanned_after.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

#### Usability Test 2

In our second usability test, we changed the hamburger menu into a bottom navigation bar to make navigation to the most important resources more accessible. Minor features, such as account settings and help, were unnecessary for this navigation bar as they did not assist in achieving our two tasks.

<p><img src="assets/projects/{{ project.path }}/usabilitytests/test2_hamburger_before.png" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/usabilitytests/test2_hamburger_after.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

Before our “Items Scanned” page, we also added a “Confirm Photo” page to provide users more control during each step in the process of adding new items. This also allowed us to remove the “Retake Photo” button that was on the “Items Scanned” page in our earlier prototype, and so the “Items Scanned” page now only had just a “Cancel” button and a “Confirm” button.

<p><img src="assets/projects/{{ project.path }}/usabilitytests/test2_confirmphoto.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/usabilitytests/test2_itemsscanned_before.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/usabilitytests/test2_itemsscanned_after.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

#### Usability Test 3

During our third usability test, we determined that users might want to add items manually without scanning a receipt. Therefore, we changed the “Camera” button in our navigation bar into an “Add” button. When users tapped it, they were then prompted to choose one of two floating buttons to either scan a receipt or manually add items.

<p><img src="assets/projects/{{ project.path }}/usabilitytests/test3_navbar_before.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/usabilitytests/test3_navbar_after.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

We also added a tutorial to explain all the features and shortcuts to users; this tutorial would only appear after an initial log-in. Some features, such as swiping on individual items to either share or delete them, weren’t intuitive for users, and so the tutorial helps users to efficiently navigate the app.

<p><img src="assets/projects/{{ project.path }}/usabilitytests/test3_tutorial.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

### Final Paper Prototype

Our final prototype encapsulates the major design changes made over the course of our three usability tests:

- Added color indicators to easily identify expected shelf lives

- Turned the hamburger menu into a navigation bar for easier access and usability

- Reduced the number of navigation items into actions directly utilized for our two tasks

- Combined the filter and sort functions into a single drop-down menu

- Added a tutorial page added to teach user shortcuts

- Streamlined the flow of adding new items when scanning receipts, and allow users to manually adding items

<p><img src="assets/projects/{{ project.path }}/paper_final/overview1.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_final/overview2.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_final/overview3.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_final/overview4.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_final/overview5.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_final/overview6.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_final/overview7.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

#### Task 1: Keeping track of current groceries at home

Because of its significant usage, users add items by tapping the button on the navigation bar, located in the middle. This prompts them to choose whether they want to take a photo of their receipt, or manually add items. Tapping on the camera prompts the user to take a photo, and after taking a photo, they are taken to a confirmation page. The user can look at their photo and either choose to retake it or continue with the photo. The system will read each item on the receipt and display them on the “Item Scanned” page. There, the user can edit the list by tapping the pencil button at the top. At the end, the user must confirm or cancel this list, and confirming will add the scanned items to the “My Items” page, which appears after confirmation.

<p><img src="assets/projects/{{ project.path }}/paper_final/task1a.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_final/task1b.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_final/task1c.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_final/task1d.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_final/task1e.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

#### Task 2: Clearing out foods that have gone bad

The expected shelf life for items are shown by the color indicators by each item. The user can also tap “Show Days” to see how many days are left for each item. To see only expired items, users can filter their items to “Show expired” from the “Filter” drop-down menu. Users can swipe left to remove expired items, or tap into the item itself to read about disposal, and then remove it from this same page. For items that are expiring soon, can share it with friends by swiping right, or by again tapping into the item’s info and tapping the “Share” button.

<p><img src="assets/projects/{{ project.path }}/paper_final/task2a.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_final/task2b.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_final/task2c.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/paper_final/task2d.jpg" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

### Digital Mockup

Between our final paper prototype and our digital mockup, we focused on creating visual elements that were easily recognizable from existing mobile apps (such as text fonts, button shadows, and a pencil or gear icon for editing items or going to settings, respectively). We also simplified the design by reducing the navigation bar to three pages -- the items list, adding new items, and the user’s profile, providing a more navigable visual interface that would not immediately overwhelm users by all the options available.

#### Task 1: Keeping track of current groceries at home

Users begin by tapping the center navigation button, taking them to the camera so that they can take a photo of their receipt; if users would rather add an item manually, there is also the alternative option on this same screen if they tap “ADD ITEMS MANUALLY”. After taking a photo, they can confirm the photo looks good, or go back to retake it if it is out of focus. Before finalizing items added to their list, they can check that the items were scanned correctly and make adjustments as needed. Upon confirming the items, they are then taken back to their items page.

<p><img src="assets/projects/{{ project.path }}/digital/task1a.png" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/digital/task1b.png" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/digital/task1c.png" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/digital/task1d.png" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

#### Task 2: Clearing out foods that have gone bad

Users can filter their items list to see only expired items, and will see only items that have gone past their expected expiration date; items expiring soon are not included as they have their own filter option. The user can then look at each individual item to learn more about the item and check for signs of expiration, as well as how to dispose of the containers. With a single tap of the “CLEAR ALL ITEMS” button at the bottom of the items list, users can then easily clear out all these expired items, and remove them from their list.

<p><img src="assets/projects/{{ project.path }}/digital/task2a.png" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/digital/task2b.png" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/digital/task2c.png" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/digital/task2d.png" width="100%" style="max-width: 450px; display: block; margin: auto;"></p>
