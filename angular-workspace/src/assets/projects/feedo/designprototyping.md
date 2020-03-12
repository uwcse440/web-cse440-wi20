### <span class="c20 c30">A3web: Design Prototyping</span>

<span class="c3">CSE440 | Section BB | Yuyue Zhu, IIya Kucherov, Kendra Specht, Vamsi Surapaneni</span>

## <span class="c13">Title:</span> <span class="c21">**Feedo**</span><span class="c15 c13"> - a healthy dog is a happy dog</span>

## <span class="c15 c13">Problem and Solution Overview:</span>

<span class="c3">According to studies, approximately 60% of household dogs are overweight or obese. This is a problem because overweight dogs are at a higher risk of developing health issues and behavioral problems.</span>

<span class="c13">Our solution aims to empower dog owners to make better health decisions for their dogs by monitoring their dog’s weight and exercise, the two largest factors in obesity. Our design is made up of three components, an application, a collar clip on, and location tiles. The application is the main source of information for the dog owner where they can see all their dogs’ data. The collar clip on is essential for tracking the dogs location and exercise habits. This small device can be clipped on to any dog collar. The final component is location tiles that dog owners can place in locations of their choosing and that sends information to the application when a dog is near. Overall, our design is based on the fundamental idea that the more information a dog owner has, the better decisions they can make.</span>

## <span class="c15 c13">Initial Paper Prototype:</span>

### <span class="c9">Overview Image</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 513.33px; height: 534.67px;">![](images/image39.jpg)</span>

<span class="c13 c22">Figure 1: All screens of the application</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 302.67px; height: 214.67px;">![](images/image49.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 162.67px; height: 217.33px;">![](images/image21.jpg)</span>

<span class="c22 c13">Figures 2 & 3: Collar clip on attachment</span>

<span class="c22 c13"></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 350.67px; height: 254.67px;">![](images/image5.jpg)</span>

<span class="c22 c13">Figure 4: Tile sticker for location tracking</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 168.00px; height: 286.67px;">![](images/image35.jpg)</span><span class="c13 c29"> </span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 170.67px; height: 286.67px;">![](images/image33.jpg)</span><span class="c13 c29"> </span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 166.67px; height: 286.67px;">![](images/image34.jpg)</span>

<span class="c22 c13">Figures 5,6,7: Additional Screens added after first heuristic evaluation. Figure 5 shows what options users have after clicking the menu in the upper left hand corner of the main screen. Figure 6 and 7 are error messages when syncing fails for the tiles and collar.</span>

### <span class="c9">Detailed Walkthrough:</span>

<span class="c21">Task 1: Track and monitor dog’s exercise</span>

<span class="c4"></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 182.75px; height: 305.50px;">![](images/image6.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 185.50px; height: 307.95px;">![](images/image3.jpg)</span>

<span class="c4"></span>

<span class="c3">These are the initial setup screens where the user would create a profile for themselves.</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 176.00px; height: 300.00px;">![](images/image4.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 176.00px; height: 298.67px;">![](images/image11.jpg)</span>

<span class="c4"></span>

<span class="c3">Next, the app would ask the owner to input simple information about their dog like name, age, current weight, and breed(s). These fields are important because we have the functionality of supporting multiple pets for one account and we want to set up some recommendations based on the dog’s age and breed.</span>

<span class="c4"></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 193.33px; height: 325.33px;">![](images/image22.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 192.00px; height: 326.67px;">![](images/image43.jpg)</span>

<span class="c4"></span>

<span class="c3">Shown above is when the owner sets up the collar wearable. The collar wearable has proximity sensors that sense when it is near an optional tile the owner may have.</span>

<span class="c4"></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 178.00px; height: 301.64px;">![](images/image2.jpg)</span>

<span class="c4"></span>

<span class="c13">Once a user is logged in, their home screen will change to show menus for tracking food consumption and exercise. If a user chooses exercise they will be shown their current days exercise tracking stats and also an option to see their performance across the month.</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 168.04px; height: 287.50px;">![](images/image27.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 169.00px; height: 287.54px;">![](images/image9.jpg)</span>

<span class="c11">Task 2: Track dog’s food intake from various sources</span>

<span class="c4"></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 157.00px; height: 266.98px;">![](images/image2.jpg)</span>

<span class="c4"></span>

<span class="c3">Once the user profile is set up and the owner is logged in, they can sync tiles to be able to track when their pet is in proximity of their food bowl by selecting Sync Tile on the main screen. Then they give the specific tile a name so it’s easier to track which tile their dog is in proximity to. If you place a tile by their dog bowl for example, naming it Bowl makes all tracking associated with that tile refer to it as Bowl.</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 160.17px; height: 268.50px;">![](images/image30.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 158.50px; height: 269.73px;">![](images/image17.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 163.50px; height: 272.81px;">![](images/image31.jpg)</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 187.50px; height: 321.28px;">![](images/image2.jpg)</span>

<span class="c13">Once the tile is correctly synced, the owner can now see when their dog was in proximity of a tile. By selecting, “Food” and then “Tracking” the owner can see the data.

</span> <span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 169.34px; height: 288.50px;">![](images/image44.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 173.70px; height: 290.50px;">![](images/image10.jpg)</span>

## <span class="c15 c13">Testing Process:</span>

#### <span class="c14">Participants:</span>

#### <span class="c6">Participant 1 (P1)</span>

<span class="c13">Our first participant has two small dogs that are 3 and 5 years old. She was chosen because she could benefit from our design since one of her dogs has minor weight issues.</span>

#### <span class="c6">Participant 2 (P2)</span>

<span class="c3">We conducted our second usability test with the three girls from another group in the section. They were chosen because they have a good understanding of design and would be able to provide us some design suggestions.</span>

#### <span class="c6">Participant 3 (P3)</span>

<span class="c13">We conducted our last usability test with a 20-year old male that owns a 6-year old Golden Retriever of healthy weight. We chose this participant to make sure that users with healthy dogs could still benefit and utilize our proposed design.</span>

#### <span class="c14">Methods:</span>

<span class="c3">To ensure we were going to get our design right, we used a combination of Heuristic Design and Usability Testing. We also received some Visual Critique feedback which helped to finalize our design.</span>

<span class="c13">Our team ran Heuristic Evaluations with two different groups of HCI students, and immediately after each test we fixed issues that had a Severity Rating of 3 or 4\. We didn’t want these issues to continue creating major usability issues for each further test. We</span> <span class="c13">siloed</span><span class="c3"> any problems that had lower Severity Ratings and then fixed those after all of the tests were performed. This isn’t the typical dynamic, but it was justified due to time constraints.</span>

<span class="c13">For our Usability Tests, we performed a quick demographic interview, then we answered any preliminary questions the participant had about the project and our design. We gave the user one task at a time.</span><span class="c13"> </span><span class="c3">Then, we informed the users about the scenarios they would complete the tasks in. We debriefed them with more detailed information about our design and goals. We also asked about how they think about our design and asked more follow-up questions about the negative incidents that occurred</span>

<span class="c3">While we made significant changes to our testing process for Heuristic Evaluation, we found that sticking to the originally defined process for Usability Tests worked best for our team.</span>

## <span class="c15 c13">Testing Results and Prototype Refinement:</span>

<span class="c3">The four main issues that came out of the Heuristic Evaluations were:</span>

*   <span class="c13">A</span> <span class="c21">Consistency and standards</span><span class="c3"> issue where we didn’t have a hamburger button on each screen, and we didn’t consistently show the specifics of that menu. So our team added that button to each screen, and also added a screen that showed the contents of that menu</span>
*   <span class="c13">An issue where we didn’t allow users</span> <span class="c21">Help recognize, diagnose, and recover from errors</span> <span class="c3">because there weren’t warnings or guidance when tiles and collars had sync errors. We resolved this by added those messages</span>
*   <span class="c13">A</span> <span class="c21">Recognition rather than recall</span><span class="c3"> problem where it wasn’t obvious enough whether a dog had enough exercise on a specific day. By including color screens in our paper prototype, we corrected this issue</span>
*   <span class="c13">Lastly, we solved a</span> <span class="c21">Consistency and standards</span><span class="c3"> issue where our layout was suggesting that syncing a tile was a similar task as tracking food or tracking exercise. We moved the sync tile button to the hamburger menu to solve this issue</span>

<span class="c3">There were also four main issues that came out of the Usability Tests:</span>

*   <span class="c3">Participant 1 noted that the Sync button on the collar clip wasn’t obvious on the paper prototype. This likely is more of an issue with the medium we used for prototyping, but we made sure to label the button more obviously</span>
*   <span class="c3">Participant 1 also wasn’t sure how to input the breed of one of her dogs. Her dog was a mixed-breed and our design didn’t clearly support the input of mixed-breed dogs. We corrected this by allowing the field more flexibility and by including a help button with a pop-up message for clarity</span>
*   <span class="c3">Participant 1 also asked if we could prompt her to sync a tile immediately after syncing a collar. This is something we didn’t think about initially, but really helped get new users to be able to use the app more quickly</span>
*   <span class="c3">Participants 2 and 3 noted that many of our labels were a bit too ambiguous, so we made changes throughout the app. One example is instead of using the term “Food” we changed it to “Food Data”</span>

<span class="c13">The lack of mixed-breed support was a significant issue as only 5% of dogs in the US are purebred. This reduced the flexibility of our app which shrinks the population of participants that could use it. The workflow efficiency improvements and label and verbiage ambiguity were oversights by our design team, but participants who didn’t have the expert lens were able to find these quickly. One thing to note is that all participants were able to successfully complete the tasks which shows the advantages of having a simple design.</span>

## <span class="c15 c13">Final Paper Prototype:</span>

### <span class="c9">Overview image</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 510.67px; height: 384.00px;">![](images/image47.png)</span>

<span class="c3">Figure 1\. Overview image</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 159.50px; height: 152.00px;">![](images/image51.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 218.50px; height: 150.62px;">![](images/image28.jpg)</span>

<span class="c3">Figure 2 and 3\. Collar Clip and Location Tile.</span>

<span class="c4">Task 1: Track and Monitor dog’s exercise.</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 178.67px; height: 298.67px;">![](images/image6.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 178.67px; height: 297.33px;">![](images/image3.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 172.00px; height: 294.67px;">![](images/image4.jpg)</span>

<span class="c3">The user signs up and enters their dog’s name.</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 164.00px; height: 278.67px;">![](images/image26.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 166.67px; height: 278.67px;">![](images/image20.jpg)</span><span class="c13"> </span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 164.00px; height: 278.67px;">![](images/image22.jpg)</span>

<span class="c3">User enters their dogs' information, optionally clicking for help if they have a mixed breed and then syncs the collar.</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 162.67px; height: 266.67px;">![](images/image48.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 160.00px; height: 269.33px;">![](images/image32.jpg)</span>

<span class="c3">User then moves forward and clicks to add a location tile.</span>

<span style="overflow: hidden; display: inline-block; margin: -0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 142.67px; height: 240.00px;">![](images/image30.jpg)</span><span style="overflow: hidden; display: inline-block; margin: -0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 141.33px; height: 242.67px;">![](images/image17.jpg)</span><span style="overflow: hidden; display: inline-block; margin: -0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 138.67px; height: 240.00px;">![](images/image14.jpg)</span><span style="overflow: hidden; display: inline-block; margin: -0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 148.00px; height: 245.33px;">![](images/image13.jpg)</span>

<span class="c3">User then syncs their bowl tile and clicks done to get to the main application screen.</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 150.67px; height: 256.00px;">![](images/image27.jpg)</span><span style="overflow: hidden; display: inline-block; margin: -0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 149.33px; height: 254.67px;">![](images/image45.png)</span>

<span class="c3">After clicking exercise, they see the exercise data and can optionally look at the monthly overview.</span>

<span class="c4">Task 2: Track dog’s food intake from various sources</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 160.00px; height: 264.00px;">![](images/image13.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 154.67px; height: 262.67px;">![](images/image44.jpg)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 157.33px; height: 262.67px;">![](images/image10.jpg)</span>

<span class="c13">U</span><span class="c3">ser clicks food then “tracking” from the main screen to see the dogs activity at various locations that tiles are placed in.</span>

## <span class="c13 c15">Digital Mockup:</span>

### <span class="c9">Overview Prototype</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 624.00px; height: 405.33px;">![](images/image50.png)</span>

<span class="c3">Figure 1. All screens</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 253.33px; height: 90.67px;">![](images/image36.png)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 185.33px; height: 153.33px;">![](images/image16.png)</span>

<span class="c3">Figure 2 and 3. Collar Clip and Tile Sticker</span>

### <span class="c9">Detailed Walkthrough</span>

#### <span class="c14">Initial Setup</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 181.33px; height: 322.67px;">![](images/image23.png)</span><span class="c13">                 </span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 182.67px; height: 322.67px;">![](images/image1.png)</span>

<span class="c3">Figure 1 and 2. Start and Create Account</span>

<span class="c3">The user signs up and enters their dog’s name</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 184.00px; height: 326.67px;">![](images/image12.png)</span><span class="c13">       </span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 185.33px; height: 326.67px;">![](images/image24.png)</span><span class="c13"></span> <span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 185.33px; height: 328.00px;">![](images/image46.png)</span>

<span class="c3">   Figure 3-5\. Dog’s info page, Mix Breed Explanation, and Sync with Collar.</span>

<span class="c3">User enters their dog's information, optionally clicking for help if they have a mixed breed and then syncs the collar.</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 163.50px; height: 291.77px;">![](images/image7.png)</span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 166.50px; height: 294.35px;">![](images/image40.png)</span>

<span class="c3">Figure 6-7\. Synced page and Sync tile.</span>

<span class="c3">User then moves forward and clicks to add a location tile.</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 145.33px; height: 257.33px;">![](images/image19.png)</span><span class="c13"></span> <span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 148.00px; height: 258.67px;">![](images/image41.png)</span><span class="c13"></span> <span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 152.83px; height: 261.00px;">![](images/image38.png)</span>

<span class="c3">Figure 8-10\. Location input, Sync tile, Synced tile.</span>

<span class="c3">User then syncs their bowl tile and clicks done to get to the main application screen.</span>

#### <span class="c20">Task 1: Track and Monitor dog’s exercise</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 162.50px; height: 287.41px;">![](images/image42.png)</span><span class="c13"></span> <span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 161.50px; height: 289.67px;">![](images/image18.png)</span><span class="c13"></span> <span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 165.00px; height: 292.85px;">![](images/image37.png)</span>

<span class="c3">Figure 11-13: Main page, Exercise Data, and Monthly Overview.</span>

<span class="c3">After clicking exercise, they see the exercise data and can optionally look at the monthly overview.</span>

#### <span class="c20">Task 2: Track dog’s food intake from various sources</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 169.33px; height: 298.67px;">![](images/image42.png)</span><span class="c13">           </span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 170.50px; height: 300.00px;">![](images/image8.png)</span><span class="c13">           </span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 170.67px; height: 298.67px;">![](images/image29.png)</span>

<span class="c13">Figure 14-16: Main page, Food Data options, Tracking</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 170.50px; height: 300.00px;">![](images/image8.png)</span><span class="c13"></span> <span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 169.00px; height: 300.56px;">![](images/image25.png)</span>

<span class="c3">Figure 17-18. Food Data options, and Food Recommendation.</span>

<span class="c3">User clicks food then” tracking” from the main screen to see the dogs activity at various locations that tiles are placed in.</span>

### <span class="c9">Scenario</span>

<span class="c3">Tom is a second-year student in college. He has a three-year-old mixed breed of golden retriever and husky named Brooklyn, who is severely overweight. The veterinarian told Tom to make sure Brooklyn gets enough exercise and eats no more than 800 calories per day. Tom starts to wonder how he could keep track and monitor Brooklyn’s exercise amount. Tom finds Feedo online. He downloads the mobile application, and collar clip and location tiles are sent to him the next day. He put the collar clip on Brooklyn’s collar and the location tile on bowl. When Tom opens the app, he gets to the start page (Figure 1) and is asked to either sign in or create an account. Tom creates an account (Figure 2) and Brooklyn’s profile (Figure 3). He doesn’t know how to describe the breed because Brooklyn’s a mixed-breed. He clicks on the help button (Figure 3) and a message shows up to guide him to select the two breeds that Brooklyn is mixed of (Figure 4). Then, the app asks him to sync the collar clip with the phone (Figure 5). A successful connected message is shown (Figure 6). Then, the app continues to ask Tom to sync a location tile (Figure 7). Tom enters the location of the tile (Figure 8) and starts syncing (Figure 9), and a confirmation message is shown (Figure 10). Now, Tom goes to the main page (Figure 11) and clicks on “Exercise Data” to see how far and how many steps Brooklyn has walked today (Figure 12). A month later, Tome clicks on “See Monthly Overview” to see how Brooklyn did over the last month (Figure 13). According to the color-coded calendar, Brooklyn did great (a lot of green squares). Everyday, Tom goes to the food tracking page (Figure 16) via “food data” (Figure 14) and taps “Tracking” which gives him the data (Figure 15). He could see when Brooklyn has been eating and whether she has run to the neighbor’s house and asked for treats. Tom also puts the dog food brand into the recommendation page (Figure 18) and gives Brooklyn the amount of food recommended by the app. A month later, Brooklyn is back to being a happy and healthy dog.</span>

### <span class="c9">Changes</span>

<span class="c3">In the paper prototype, on the main page, a drop-down menu shows after clicking on the hamburger menu. However, we change it to a full-length menu that slides from the side, as it is more conventional. The bigger the target, the less likely a mistake will be made.</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 166.85px; height: 285.50px;">![](images/image35.jpg)</span><span class="c13 c29">                   </span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 162.52px; height: 287.19px;">![](images/image15.png)</span>

<span class="c3">The second change is on the food tracking page. Originally, it only had multiple lines of time and location data. We want to change the systematic look and add images, because images are more pre-attentive than words. This will reduce the memory load for users.</span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 176.00px; height: 293.33px;">![](images/image10.jpg)</span><span class="c13">                   </span><span style="overflow: hidden; display: inline-block; margin: 0.00px -0.00px; border: 1.33px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 168.00px; height: 294.67px;">![](images/image29.png)</span>
