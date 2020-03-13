<!-- TODO tagline a healthy dog is a happy dog -->

### Problem and Solution Overview

According to studies, approximately 60% of household dogs are overweight or obese. This is a problem because overweight dogs are at a higher risk of developing health issues and behavioral problems.

Our solution aims to empower dog owners to make better health decisions for their dogs by monitoring their dog’s weight and exercise, the two largest factors in obesity. Our design is made up of three components, an application, a collar clip on, and location tiles. The application is the main source of information for the dog owner where they can see all their dogs’ data. The collar clip on is essential for tracking the dogs location and exercise habits. This small device can be clipped on to any dog collar. The final component is location tiles that dog owners can place in locations of their choosing and that sends information to the application when a dog is near. Overall, our design is based on the fundamental idea that the more information a dog owner has, the better decisions they can make.

### Initial Paper Prototype

#### Overview Image

<p><img src="assets/projects/{{ project.path }}/prototyping/image39.jpg" width="100%" style="max-width: 600px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 1: All screens of the application</p>

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image49.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image21.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>
<p style="text-align: center">Figures 2 & 3: Collar clip on attachment</p>

<p><img src="assets/projects/{{ project.path }}/prototyping/image5.jpg" width="100%" style="max-width: 400px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 4: Tile sticker for location tracking</p>

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image35.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image33.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image34.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>
<p style="text-align: center">Figures 5,6,7: Additional Screens added after first heuristic evaluation. Figure 5 shows what options users have after clicking the menu in the upper left hand corner of the main screen. Figure 6 and 7 are error messages when syncing fails for the tiles and collar.</p>

#### Detailed Walkthrough

##### Task 1: Track and monitor dog’s exercise

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image6.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image3.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

These are the initial setup screens where the user would create a profile for themselves.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image4.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image11.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

Next, the app would ask the owner to input simple information about their dog like name, age, current weight, and breed(s). These fields are important because we have the functionality of supporting multiple pets for one account and we want to set up some recommendations based on the dog’s age and breed.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image22.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image43.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

Shown above is when the owner sets up the collar wearable. The collar wearable has proximity sensors that sense when it is near an optional tile the owner may have.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image2.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

Once a user is logged in, their home screen will change to show menus for tracking food consumption and exercise. If a user chooses exercise they will be shown their current days exercise tracking stats and also an option to see their performance across the month.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image27.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image9.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

##### Task 2: Track dog’s food intake from various sources

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image2.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

Once the user profile is set up and the owner is logged in, they can sync tiles to be able to track when their pet is in proximity of their food bowl by selecting Sync Tile on the main screen. Then they give the specific tile a name so it’s easier to track which tile their dog is in proximity to. If you place a tile by their dog bowl for example, naming it Bowl makes all tracking associated with that tile refer to it as Bowl.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image30.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image17.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image31.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image2.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

Once the tile is correctly synced, the owner can now see when their dog was in proximity of a tile. By selecting, “Food” and then “Tracking” the owner can see the data.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image44.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image10.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

### Testing Process

#### Participants

##### Participant 1

Our first participant has two small dogs that are 3 and 5 years old. She was chosen because she could benefit from our design since one of her dogs has minor weight issues.

##### Participant 2

We conducted our second usability test with the three girls from another group in the section. They were chosen because they have a good understanding of design and would be able to provide us some design suggestions.

##### Participant 3

We conducted our last usability test with a 20-year old male that owns a 6-year old Golden Retriever of healthy weight. We chose this participant to make sure that users with healthy dogs could still benefit and utilize our proposed design.

#### Methods

To ensure we were going to get our design right, we used a combination of Heuristic Design and Usability Testing. We also received some Visual Critique feedback which helped to finalize our design.

Our team ran Heuristic Evaluations with two different groups of HCI students, and immediately after each test we fixed issues that had a Severity Rating of 3 or 4. We didn’t want these issues to continue creating major usability issues for each further test.
We siloed any problems that had lower Severity Ratings and then fixed those after all of the tests were performed. This isn’t the typical dynamic, but it was justified due to time constraints.

For our Usability Tests, we performed a quick demographic interview, then we answered any preliminary questions the participant had about the project and our design. We gave the user one task at a time.

Then, we informed the users about the scenarios they would complete the tasks in. We debriefed them with more detailed information about our design and goals. We also asked about how they think about our design and asked more follow-up questions about the negative incidents that occurred.

While we made significant changes to our testing process for Heuristic Evaluation, we found that sticking to the originally defined process for Usability Tests worked best for our team.

### Testing Results and Prototype Refinement

The four main issues that came out of the Heuristic Evaluations were:

* Consistency and standards

  An issue where we didn’t have a hamburger button on each screen, and we didn’t consistently show the specifics of that menu. So our team added that button to each screen, and also added a screen that showed the contents of that menu.

* Help recognize, diagnose, and recover from errors

  An issue where we didn’t allow users to recover from or to diagnose errors, because there weren’t any warnings or guidance when tiles and collars had sync errors. We resolved this by adding those messages.

* Recognition rather than recall

  A problem where it wasn’t obvious enough whether a dog had enough exercise on a specific day, since numbers are bland. By including color screens in our paper prototype, we corrected this issue.

* Consistency and standards

  Lastly, we solved an issue where our layout was suggesting that syncing a tile was a similar task as tracking food or tracking exercise. We moved the sync tile button to the hamburger menu to solve this issue.

There were also four main issues that came out of the Usability Tests:

* Participant 1 noted that the Sync button on the collar clip wasn’t obvious on the paper prototype. This likely is more of an issue with the medium we used for prototyping, but we made sure to label the button more obviously.

* Participant 1 also wasn’t sure how to input the breed of one of her dogs. Her dog was a mixed-breed and our design didn’t clearly support the input of mixed-breed dogs. We corrected this by allowing the field more flexibility and by including a help button with a pop-up message for clarity.

* Participant 1 also asked if we could prompt her to sync a tile immediately after syncing a collar. This is something we didn’t think about initially, but really helped get new users to be able to use the app more quickly.

* Participants 2 and 3 noted that many of our labels were a bit too ambiguous, so we made changes throughout the app. One example is instead of using the term “Food” we changed it to “Food Data”.

The lack of mixed-breed support was a significant issue as only 5% of dogs in the US are purebred. This reduced the flexibility of our app which shrinks the population of participants that could use it. The workflow efficiency improvements and label and verbiage ambiguity were oversights by our design team, but participants who didn’t have the expert lens were able to find these quickly. One thing to note is that all participants were able to successfully complete the tasks which shows the advantages of having a simple design.

### Final Paper Prototype

#### Overview image

<p><img src="assets/projects/{{ project.path }}/prototyping/image47.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 1. Overview image</p>

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image51.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image28.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>
<p style="text-align: center">Figure 2 and 3. Collar Clip and Location Tile</p>

#### Task 1: Track and Monitor dog’s exercise.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image6.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image3.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image4.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

The user signs up and enters their dog’s name.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image26.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image20.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image22.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

User enters their dogs' information, optionally clicking for help if they have a mixed breed and then syncs the collar.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image48.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image32.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

User then moves forward and clicks to add a location tile.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image30.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image17.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image14.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image13.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

User then syncs their bowl tile and clicks done to get to the main application screen.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image27.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image45.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

After clicking exercise, they see the exercise data and can optionally look at the monthly overview.

#### Task 2: Track dog’s food intake from various sources

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image13.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image44.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image10.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

User clicks food then “tracking” from the main screen to see the dogs activity at various locations that tiles are placed in.

### Digital Mockup

#### Overview Prototype

<p><img src="assets/projects/{{ project.path }}/prototyping/image50.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 1. All screens</p>

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image36.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image16.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>
<p style="text-align: center">Figure 2 and 3. Collar Clip and Tile Sticker</p>

#### Detailed Walkthrough

##### Initial Setup

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image23.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image1.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>
<p style="text-align: center">Figure 1 and 2. Start and Create Account</p>

The user signs up and enters their dog’s name

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image12.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image24.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image46.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>
<p style="text-align: center">Figure 3-5. Dog’s info page, Mix Breed Explanation, and Sync with Collar.</p>

User enters their dog's information, optionally clicking for help if they have a mixed breed and then syncs the collar.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image7.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image40.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>
<p style="text-align: center">Figure 6-7. Synced page and Sync tile.</p>

User then moves forward and clicks to add a location tile.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image19.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image41.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image38.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>
<p style="text-align: center">Figure 8-10. Location input, Sync tile, Synced tile.</p>

User then syncs their bowl tile and clicks done to get to the main application screen.

##### Task 1: Track and Monitor dog’s exercise

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image42.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image18.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image37.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>
<p style="text-align: center">Figure 11-13: Main page, Exercise Data, and Monthly Overview.</p>

After clicking exercise, they see the exercise data and can optionally look at the monthly overview.

##### Task 2: Track dog’s food intake from various sources

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image42.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image8.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image29.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>
<p style="text-align: center">Figure 14-16: Main page, Food Data options, Tracking</p>

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image8.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image25.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>
<p style="text-align: center">Figure 17-18. Food Data options, and Food Recommendation.</p>

User clicks food then” tracking” from the main screen to see the dogs activity at various locations that tiles are placed in.

#### Scenario

Tom is a second-year student in college. He has a three-year-old mixed breed of golden retriever and husky named Brooklyn, who is severely overweight. The veterinarian told Tom to make sure Brooklyn gets enough exercise and eats no more than 800 calories per day. Tom starts to wonder how he could keep track and monitor Brooklyn’s exercise amount. Tom finds Feedo online.

He downloads the mobile application, and collar clip and location tiles are sent to him the next day. He put the collar clip on Brooklyn’s collar and the location tile on bowl. When Tom opens the app, he gets to the start page (Figure 1) and is asked to either sign in or create an account. Tom creates an account (Figure 2) and Brooklyn’s profile (Figure 3). He doesn’t know how to describe the breed because Brooklyn’s a mixed-breed. He clicks on the help button (Figure 3) and a message shows up to guide him to select the two breeds that Brooklyn is mixed of (Figure 4). Then, the app asks him to sync the collar clip with the phone (Figure 5). A successful connected message is shown (Figure 6).

Then, the app continues to ask Tom to sync a location tile (Figure 7). Tom enters the location of the tile (Figure 8) and starts syncing (Figure 9), and a confirmation message is shown (Figure 10). Now, Tom goes to the main page (Figure 11) and clicks on “Exercise Data” to see how far and how many steps Brooklyn has walked today (Figure 12). A month later, Tome clicks on “See Monthly Overview” to see how Brooklyn did over the last month (Figure 13). According to the color-coded calendar, Brooklyn did great (a lot of green squares).

Everyday, Tom goes to the food tracking page (Figure 16) via “Food Data” (Figure 14) and taps “Tracking” which gives him the data (Figure 15). He could see when Brooklyn has been eating and whether she has run to the neighbor’s house and asked for treats. Tom also puts the dog food brand into the recommendation page (Figure 18) and gives Brooklyn the amount of food recommended by the app. A month later, Brooklyn is back to being a happy and healthy dog.

#### Changes

In the paper prototype, on the main page, a drop-down menu shows after clicking on the hamburger menu. However, we change it to a full-length menu that slides from the side, as it is more conventional. The bigger the target, the less likely a mistake will be made.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image35.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image15.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

The second change is on the food tracking page. Originally, it only had multiple lines of time and location data. We want to change the systematic look and add images, because images are more pre-attentive than words. This will reduce the memory load for users.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/prototyping/image10.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/prototyping/image29.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>
