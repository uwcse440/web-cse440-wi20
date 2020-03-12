##Overview 
We started our design research aiming to determine how best to improve sustainable eating habits in America. Through interviews with an expert in sustainability, a chef at a sustainable restaurant, and a college student with interest in eating more sustainably, we determined that helping people reduce their food waste would be the most effective approach. Statistics show that food waste costs the US billions of dollars per year and is a major source of methane released into the atmosphere. Additionally, our interviews showed a greater willingness to reduce food waste than any other method of improving sustainability identified in our research, such as cutting out red meat or buying locally from more expensive farms. 

There are two major causes of food waste identified in our design research that we aimed to address. The first is that people simply overstock their fridge and do not get around to eating their perishables until they have already spoiled. The second is that people sometimes need help figuring out what to do with the produce they buy, such as when one of our interviewees bought kale to be healthy but ended up finding it inedible. With these themes in mind we developed Fridgigotchi, a refrigerator attachment that keeps track of the food that is currently stocked and warns when food is close to spoiling, as well as allowing people to search for recipes with what they currently have in stock. This keeps people from forgetting what they have in their fridge until it spoils and inspires them to actually eat what they stock.
##Initial Paper Prototype
Our interface has two parts: a touch screen that acts as a visual inventory, and a scanner for scanning receipts to add more items (the small strip below).

<img src=”image34.png” alt=”Initial Prototype 1” title=”Initial Prototype 1”>

###Adding Items to and Removing Items from Fridgigotchi
A person can tap a button to manually add items to the inventory if the items do not come with a receipt.  The manual entry option has a keyboard for typing item names, which are then searched up on the internet, which the person can select from.

<img src=”image20.png” alt=”Initial Prototype 2” title=”Initial Prototype 2”><img src=”image31.png” alt=”Initial Prototype 3” title=”Initial Prototype 3”>
The other way a person can add items to the inventory by scanning a receipt.  The scanner reads the text on the receipt and automatically draws the items on the screen.  Before confirming that the item should be added on the screen, the person has a chance to edit the item’s display name.  When a new item is added the technology estimates its expiration, and stores how long it has left.

<img src=”image11.png” alt=”Initial Prototype 4” title=”Initial Prototype 4”><img src=”image35.png” alt=”Initial Prototype 5” title=”Initial Prototype 5”>
The items now appear in the main interface, along with health bars indicating the status of the food, as calculated by the technology.  When the person uses a food, in this case the tomato, they drag it off the screen.

<img src=”image4.png” alt=”Initial Prototype 6” title=”Initial Prototype 6”>
###Using Food Before it Spoils

If a person wants to figure out how to use foods before they expire, they can drag items to the “get recipes” plate in the lower left corner of the screen to get recommendations for this combination.  In this case, the person has moved yogurt and strawberries into the plate to get a recommendation.
After inputting the food items, this person gets recipe recommendations with the combination of strawberry and yogurt. The person can click the recipe they are interested in for more information.

<img src=”image9.png” alt=”Initial Prototype 7” title=”Initial Prototype 7”><img src=”image13.png” alt=”Initial Prototype 8” title=”Initial Prototype 8”>
###Figuring out what needs to be discarded
After one week, the fridge is getting worried because many foods including broccoli, lemon, carrot and tomato in the fridge are expiring soon.  We can tell which foods are going bad because their health bars are lowering.

<img src=”image3.png” alt=”Initial Prototype 9” title=”Initial Prototype 9”>
If someone is interested in the status of a food, in this case broccoli, they can tap it for more details.  A pop-up shows up with information on how many days the broccoli has and asks for confirmation if the person has used it.  The popup warns that the broccoli is starting to spoil.  Since the person has not eaten the broccoli yet, they tap “no”, exiting the pop-up.

<img src=”image16.png” alt=”Initial Prototype 10” title=”Initial Prototype 10”><img src=”image38.png” alt=”Initial Prototype 11” title=”Initial Prototype 11”>
After another week, the person gets a popup saying that the broccoli is now probably spoiled, and that they should probably discard it.

<img src=”image37.png” alt=”Initial Prototype 12” title=”Initial Prototype 12”>
##Testing Process
With our paper prototype finished, we were ready to move on to the testing phase. We conducted 4 tests in total: one heuristic test then three usability tests.
###Heuristic Evaluation
Heuristic evaluations are a way of detecting obvious design flaws that violate common design heuristics. The specific heuristics we tested against were Nielsen’s 10 design heuristics as they were outlined in class. 

Our heuristic evaluation was conducted in class with two classmates from a different group. Our participants, Amy and Beth, were both junior CSE students, neither of which reported too much prior interest in eating sustainably. However, since this was conducted in class with all groups needing testers, we felt that screening participants for being in our target audience would be prohibitively difficult and decided to continue with the test. We started by first introducing Fridgigotchi to our testers, describing its purpose and the general tasks that we aimed to solve with it. We then presented the paper prototype to our testers and asked them to attempt to walkthrough the system and get a feel for how it works. We encouraged them to look for heuristics violations with regards to the general flow and feel of the design. Once they felt fairly comfortable with how the paper prototype worked, we asked them to go through the design again, this time with a focus on more specific, element wise heuristic violations. This was the last part of the test, and we thanked them for their help. After the test had concluded, we rated the severity of each issue found on a scale from 0 (non-issue) to 4 (critical usability issue) and the ease of fixing the issue on a scale of 1 (near impossible) to 4 (trivial to fix). With this information aggregated, we discussed which revisions needed to be made and changed the paper prototype accordingly.
###Usability Test Protocol
Our protocol for usability testing was to first interview possible participants about their attitudes toward food waste. More specifically, we asked whether or not they have taken any conscious action to reduce food waste or have thought about their food waste in any way before the interview. If the participant answers yes to either of the two questions, we considered them part of Fridgigotchi’s target audience and continued with the usability test. We then introduced Fridgigotchi and a more detailed idea of how we intended to conduct our usability test, being sure to emphasize that they should feel free to point out any critiques they think of and to think out loud as they move through the prototype. They were then given three tasks: add food, both from a receipt and manually, into Fridgigotchi, search for recipes containing the food that was just input, and delete foods that have been finished. Once those tasks were completed, we asked for any final thoughts from the participant, then thanked them for their time.
###Usability Test 1
We conducted our first usability test with a junior CSE student. She noticed that she tends to create a lot of food waste recently, primarily due to her parents giving her food on a weekly basis but never spending enough time home to eat it. Rather than store it and deal with figuring out how to use it later, she tends to throw it away out of convenience. Fridgigotchi is intended to solve exactly these kinds of problems, so we chose this participant given she’s part of the target audience. The usability test was conducted in the Gates Center Undergraduate Commons. The paper prototype was laid out on an ottoman with our participant sitting in front of it. This space had some other CS undergrads present which made it less than ideal for conducting our usability test, but it was sufficiently quiet that we decided not to move. We also considered moving to a location with a fridge, but we did not want to be disturbed by people actually using the fridge. We were able to conduct the entire test uninterrupted. Ian was the facilitator, with Josh serving as the computer and Savanna as the observer.
###Usability Test 2
We conducted our second usability test with a senior HCDE student who we shared HCI section with. This section was dedicated to getting every group in section another usability test, so we did not do the same vetting of participants or environments that we would otherwise. We conducted the study in the section classroom in Mary Gates Hall for everyone’s convenience.
We still asked our food waste questions, and she said that while she has heard that food waste was a serious issue and considered making changes in the past, she has not thought about it recently or made any lasting changes. This test was conducted with Ian as the facilitator and computer and Savanna as the observer.

###Usability Test 3
Our third usability test was conducted with a junior CSE student in a research study room in the Gates Center. We used the gates center because it was where we could meet with our participants most easily, and the research study room was quiet. The participant herself was picked because she had actively tried to eat more sustainably through going vegetarian, and was open to making other changes. This test was conducted with Ian as the facilitator, Josh as the computer, and Vanessa as the observer.
###Testing Retrospective
One of the most important refinements we made was to our introduction to the tests. When we did tests with people from within class who understood how the test worked, we did not find too much introduction to the testing process necessary as they already knew their task and had some familiarity with Fridgigotchi. Tests with people outside the class however could be more challenging, and we had some participants who did not seem comfortable thinking out loud or exploring the prototype. Once we noticed this, we put more emphasis in the introduction that there are no wrong answers and to share whatever thoughts that they had. We also originally planned to test with the paper prototype on an actual refrigerator in a real-life setting. Ultimately, we found our implementation of this with tape tedious and slow to operate, so we decided to keep the paper prototype on tables.
##Testing Results and Prototype Refinement
Our heuristic evaluation, usability tests and design critique introduced some significant design issues that we later corrected to greatly improve the design. In this process, we learned some useful design practices. These were organized into these major themes:
###Theme 1: Promote positive reinforcement and real world match
**Issues #1: Negative reinforcement from eating food before it spoils** 
Through the usability test, we learned that our participants felt bad when they drag away happy foods. This was a huge problem in the design since one of our main goals in the product is to encourage people to eat food before it spoils If people wait until the foods get sad before consuming them, this defeats the purpose of Fridgigotchi.

<img src=”image4.png” alt=”Theme 1 Issue 1 1” title=”Theme 1 Issue 1 1”>
Before in our initial paper prototype design, people felt sad when consuming their food. Thus, our first change was to prevent negative reinforcement by removing the faces from foods, making consuming food an emotionally neutral experience. 

                   
<img src=”image21.png” alt=”Theme 1 Issue 1 2” title=”Theme 1 Issue 1 2”><img src=”image24.png” alt=”Theme 1 Issue 1 3” title=”Theme 1 Issue 1 3”>
After discovering the issues, in our final paper prototype, we removed faces from foods to solve the problem. People do not get sad anymore from consuming their food!

**Issue # 2: Missing logic match between system and real world of ‘fridge’ and lack of positive reinforcement**
We had originally had a fridge character who was on the screen with the foods with faces, and the foods would get consumed by the fridge. Through tests, we realized that our system did not logically match the real world. Consuming food was represented by dragging them into a fridge character, when in reality these foods were being taken out of a real-world fridge and eaten. 
		  
<img src=”image9.png” alt=”Theme 1 Issue 2 1” title=”Theme 1 Issue 2 1”>
			Before the change, feeding the fridge confuses users

Thus, we decided to remove the fridge character from our system and looked for a new character who  promotes positive reinforcement to replace him. Therefore, we found Snorlax, a big friendly character with a big appetite. 
               
<img src=”image2.png” alt=”Theme 1 Issue 2 2” title=”Theme 1 Issue 2 2”><img src=”image42.png” alt=”Theme 1 Issue 2 3” title=”Theme 1 Issue 2 3”>
We replaced the fridge with Snorlax to solve the problem and it got carried out into our digital design.

###Theme 2: Communicate a clear message
**Issue #3: Confusing health bar design**
Different foods have different fridge lifetimes, and one week left may be one food’s entire shelf life, while one week left may be one tenth of another food’s lifetime. Participants found the health bars difficult to read and gain insights from.  Therefore, we replaced them with text showing things like “4 days left” or “1 week left”.  
         				     
<img src=”image23.png” alt=”Theme 2 Issue 1 1” title=”Theme 2 Issue 1 1”>
Before the change, it was very difficult for people to tell which foods were expiring first based on the health bar.
            
<img src=”image6.png” alt=”Theme 2 Issue 1 2” title=”Theme 2 Issue 1 2”><img src=”image5.png” alt=”Theme 2 Issue 1 3” title=”Theme 2 Issue 1 3”>
After the change, we replaced health bars with the number of days left to solve the problem, which was carried into our final digital design.
##Final Paper Prototype
Here is an overview of the final paper prototype:

<img src=”image33.png” alt=”Final Paper Prototype 1” title=”Final Paper Prototype 1”>
Our interface has two parts: a touch screen that acts as a visual inventory, and a scanner for scanning receipts to add more items (the small strip below).
###Adding Items to and Removing Items from Fridgigotchi
A person can press a button to manually add items to the inventory if the items do not come with a receipt.  The manual entry option has a keyboard for typing item names, which are then searched up on the internet, which the person can select from.

<img src=”image30.png” alt=”Final Paper Prototype 2” title=”Final Paper Prototype 2”><img src=”image8.png” alt=”Final Paper Prototype 3” title=”Final Paper Prototype 3”>
The other way a person can add items to the inventory by scanning a receipt.  The scanner reads the text on the receipt and displays what it thinks each item is.  The person then has a chance to review the items being added and make changes, especially on items with information the scanner struggled to autofill. If the user doesn’t want to process an item right now, they can save it for later.  Before confirming that the item should be added on the screen, the person has a chance to edit the item’s display name and image.  When a new item is added the technology estimates its expiration, and stores how long it has left.  The person can edit this too.

<img src=”image14.png” alt=”Final Paper Prototype 4” title=”Final Paper Prototype 4”><img src=”image28.png” alt=”Final Paper Prototype 5” title=”Final Paper Prototype 5”>
The items now appear in the main interface, along with counters indicating the number of days left in the food, as calculated by the given expiration dates.

<img src=”image2.png” alt=”Final Paper Prototype 6” title=”Final Paper Prototype 6”>
When the person has consumed an item, they can either drag it off the screen or give it to Snorlax to eat.  

<img src=”image24.png” alt=”Final Paper Prototype 7” title=”Final Paper Prototype 7”>

###Using Food Before it Spoils
If a person wants to figure out how to use foods before they expire, they can drag items to the “get recipes” plate in the lower left corner of the screen to get recommendations for this combination.  In this case, the person has moved yogurt and strawberries into the plate to get a recommendation. “Show Recipes” appears as a user drags items onto the get recipes section.

<img src=”image10.png” alt=”Final Paper Prototype 8” title=”Final Paper Prototype 8”>
Now after inputting the food items, this person gets recipe recommendations with the combination of strawberry and yogurt. The person can click the recipe they are interested in for more information and watch a video of the creation.

<img src=”image41.png” alt=”Final Paper Prototype 9” title=”Final Paper Prototype 9”>
###Figuring out what needs to be discarded
One Week later, broccoli and lemon in the fridge are expiring soon.  We can tell which foods are going bad because their pictures have smell lines coming out of them.

<img src=”image21.png” alt=”Final Paper Prototype 10” title=”Final Paper Prototype 10”>

The person is interested in the status of the lemon and taps it to see more detail.  A pop-up shows up after clicking in  with information on how many days the lemon has and asks for confirmation if the person has used it.  The popup also has information from the internet on what indications to look for to see if the lemon has gone bad.  In this case, it is brown spots on the lemon.  The popup warns that the lemon is starting to spoil.  The person clicks “no” since they haven’t used up the lemon yet.

<img src=”image15.png” alt=”Final Paper Prototype 11” title=”Final Paper Prototype 11”>
Days later, the person gets a popup saying that the lemon is now probably spoiled, and that they should probably discard it.

<img src=”image19.png” alt=”Final Paper Prototype 12” title=”Final Paper Prototype 12”>




##Digital Mockup

<img src=”image39.png” alt=”Digital Mockup 1” title=”Digital Mockup 1”>
Our design now takes on the form of a touch screen that acts as an interactive visual inventory

<img src=”image18.png” alt=”Digital Mockup 2” title=”Digital Mockup 2”>
A person can press a button to manually add items to the inventory if the items do not come with a receipt.


<img src=”image43.png” alt=”Digital Mockup 3” title=”Digital Mockup 3”>
A person can press a button to manually add items to the inventory if the items do not come with a receipt.  The manual entry option has a keyboard for typing item names, which are then searched up on the internet, which the person can select from.


<img src=”image27.png” alt=”Digital Mockup 4” title=”Digital Mockup 4”>
The person can add items to the inventory by opening the camera and taking a picture of a receipt. The camera reads the text on the receipt and automatically draws the items on the screen.

<img src=”image32.png” alt=”Digital Mockup 5” title=”Digital Mockup 5”>
The person then has a chance to review the items being added and make changes, especially on items with information the scanner struggled to autofill. If the user doesn’t want to process an item right now, they can save it for later.  Before confirming that the item should be added on the screen, the person has a chance to edit the item’s display name and image.  When a new item is added the technology estimates its expiration, and stores how long it has left.  The person can edit this too. After taking the picture, the items then appear in the main interface, along with counters indicating the number of days left in the food, as calculated by the given expiration dates

<img src=”image44.png” alt=”Digital Mockup 6” title=”Digital Mockup 6”>
When the person has used an item, in this case broccoli, they can drag it off the screen or feed it to Snorlax.

<img src=”image26.png” alt=”Digital Mockup 7” title=”Digital Mockup 7”>
###Using Food Before it Expires
If a person wants to figure out how to use foods before they expire, they can drag items to the “get recipes” plate in the lower left corner of the screen to get recommendations for this combination.  In this case, the person has moved yogurt and strawberries into the plate to get a recommendation. “Show Recipes” appears as a user drags items onto the get recipes section.

<img src=”image12.png” alt=”Digital Mockup 8” title=”Digital Mockup 8”><img src=”image17.png” alt=”Digital Mockup 9” title=”Digital Mockup 9”>
Now after inputting the food items, this person gets recipe recommendations for their desired combination. The person can click the recipe they are interested in for more information and to watch a video of the recipe.  For interest in a particular recipe, the person can click the video to play on a larger screen and to see more details.

<img src=”image25.png” alt=”Digital Mockup 10” title=”Digital Mockup 10”><img src=”image7.png” alt=”Digital Mockup 11” title=”Digital Mockup 11”>
###Knowing What Food to Discard
One Week later, broccoli, chicken leg, cheese and tomato are expiring soon and it is obvious from the shadow on their icons and Snorlax’s worried face.

<img src=”image40.png” alt=”Digital Mockup 12” title=”Digital Mockup 12”>
The person is interested in the status of the broccoli and taps it to see more detail.

<img src=”image1.png” alt=”Digital Mockup 13” title=”Digital Mockup 13”>
A pop-up shows up after clicking in with information on how many days the broccoli has and asks for confirmation if the person has used it.  The popup also has information from the internet on what indications to look for to see if the broccoli has gone bad.  The popup warns that the broccoli is starting to spoil.  

<img src=”image22.png” alt=”Digital Mockup 14” title=”Digital Mockup 14”>
The person has not used the broccoli yet, so they click “no”

<img src=”image36.png” alt=”Digital Mockup 15” title=”Digital Mockup 15”>
Days later the person gets a popup saying that the broccoli is now probably spoiled and that they should probably discard it.

<img src=”image29.png” alt=”Digital Mockup 16” title=”Digital Mockup 16”>

###Changes from paper to digital prototype
We decided to change how people upload food from their receipts. Originally we had a separate scanner attached that people would scan barcodes and receipts into. After gathering people’s feedback, we realize this extra scanner component increases the cost and difficulty for users to adopt our product. Instead, we decided to let people scan directly through a device camera, making our product cheap, convenient and adaptable to many devices. 
In addition, we also darkened the icons of spoiled or near-spoiled foods to make it more obvious that these foods need attention. Originally this was done by drawing the icons with a “smell”, but in the digital mockup, this was less distinguishing.

