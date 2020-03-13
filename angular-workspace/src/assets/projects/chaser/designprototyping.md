### Problem and Solution Overview
Existing moderation techniques demand constant diligence or impose expectations of complete sobriety. We typically adopt these techniques in response to a crisis. However, there is a large population of individuals who have not encountered a crisis, but spend and drink more than they desire. This problem is exacerbated by college budgets, liquor taxes, and youthful exuberance. Our aim is to establish consciousness of high-risk consumption habits in these social drinkers. Cha$r supports personal benchmarking and goal-setting without intruding on cherished celebratory spaces or dominating one’s attention. Our solution focuses on simplifying “in-the-moment” personal accountability to its most straight-foward and aggregating data that communicates habits.

### Initial Paper Prototype

#### Overview
Our first paper prototype features our initial interface and interactions. We designed our prototypes to focus on two key tasks for our social drinkers: setting their spending and drinking limits before the night out and counting their drinks and tracking their spending while out. 

<p><img src="assets/projects/{{ project.path }}/PAPER_PROTOTYPE_BEFORE_OVERVIEW.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

#### Task Execution 

##### Setting Spending and Drinking Limit

<p><img src="assets/projects/{{ project.path }}/task_1_paper_1.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

##### Counting Drinks and Tracking Spending While Out

<p><img src="assets/projects/{{ project.path }}/task_2_paper_1.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

### Testing Process
 
#### Methods
Our iteration cycle took advantage of feedback gathered during three distinct stages. Between each stage and each participant, the design was modified and evaluation methods were adjusted to fix the issues that surfaced.
 
* **Heuristic Evaluation:** We explained the design to a participant. They pointed out a variety of issues that we categorized using heuristic types and severity.

* **Usability Testing:** We presented a participant with a setting and tasks that we wanted them to complete. We then observed their interaction with the design and noted any issues. Finally we asked the participant for any explicit feedback on either the design or the process.

* **Design Review:** We explained the original and current design to a group of experts and gathered feedback.
 
While the first and last stage were performed once, usability testing was performed on multiple participants. The setting and the tasks that they were asked to perform changed with each participant to better reflect motivations for using the design and the natural setting that it would be used in. 
 
Initially we asked the user to set a limit on a specific date and then attempt to record consuming a drink. This resulted in a rigid and limited interaction with the design that we felt did not accurately represent how it would be used in the wild. After adjustments, the final prompt instead mentioned that the participant was going to attend an event on a specific date and that they were motivated to not overdrink or overspend. After observing their interaction, we then placed the participant at the event and told them that they have just consumed a drink and were motivated to check on their progress. We also removed hints toward application terminology in our prompt’s language, such as the phrase “set a limit”. The final prompt provided a more open-ended context that allowed the participant to explore the design more realistically and thoroughly.
 
#### Participants
**Heuristic Evaluation:** Conducted during lecture with a peer from HCI class.

**Usability Test 1:** Conducted at the Allen Library Research Commons with a peer in the HCDE department.

**Usability Test 2:** Conducted in a classroom during section with a peer from our HCI class.

**Usability Test 3:** Conducted at the Allen Library Research Commons with a 21 year old Asian male.

**Design Review:** Conducted in a classroom during section with peers from our HCI class and TAs.

### Testing Results
During the testing there were two major themes for the flaws that surfaced in our design. Many changes of various scale were applied as it went through numerous iterations. Shown below are some of the bigger and more impactful adjustments that were made to address these two themes.

#### Navigation

There was a fundamental inefficiency in how the screens were organized in the initial paper prototype. Participants often felt like they had to perform more actions than were needed or they got lost in the screens. While this issue existed in both of the applications, the impact was more substantial on the mobile side which required drastic changes. Outside of inefficiency we also had issues with certain elements of the design being misidentified as interactive or not.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/SET_LIMITS_BEFORE.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/SET_LIMITS_AFTER.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

During our usability test, we found that many of our participants would attempt to click on the limits that were enclosed in boxes and circles when we asked them to set their drinking or spending limit instead of clicking the edit button. Our participants mentioned that the numbers appeared to be clickable due to being enclosed in a box or circle, and that they didn’t notice the edit button until after spending some time looking through the screen. To fix this, we removed all the boxes and circles around the numbers to prevent the participants from trying to click on them to set their limits, and made the edit button larger to grab their attention from the start. 

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/HOME_SCREEN_BEFORE.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/HOME_SCREEN_AFTER.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

Another issue we found during our testing was our home page. When the participants were asked to set their drinking limit, some would attempt to tap the bottom left box on the home screen. The bottom left box was designed to show participants the current state of how much they spent and drank, but does not do anything when clicked. The main screen was serving a confusing dual function as both a landing page and portal between possible tasks. To fix this, we made the home page into a welcome screen. It greets the user and informs them of their current drinking and spending state through dialogue instead of a button-like box. In addition, graphics of the same information provide a visual alternative that eases comparison against your limit. A persistent on-screen toolbar now handles task navigation, since we expect users to jump between limit-setting and performance review. A similar fix was deployed for the watch, which displayed a two-option menu screen that placed inebriated users an extra touch away from recording their drinks. This extraneous menu was eliminated at this stage.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/heuristic_eval_watch_menu.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/heuristic_eval_watch_no_menu.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

#### Information Organization and Representation
Participants also had difficulty understanding the information shown during tracking on their smart watch and accessing the data tracked later on their mobile device. This is both due to that data sometimes being strictly not accessible or it being shown in a confusing manner. Changes were made both to the smart watch and the mobile application to address these issues.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/PAPER_BAR_GRAPH_PRE_DROPDOWN_CALENDAR.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/PAPER_BAR_GRAPH_POST_DROPDOWN_CALENDAR.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

A wearer had no way of examining their data from previous weeks. This was at odds with our vision of users exploring a series of previous nights-out to inform themselves during the limit choosing task. For example, if a user can recall feeling sick the day of their sister’s wedding, they might want to go quite far back in their history to review the count of drinks consumed that day. To address this, we added calendar functionality to the graph, allowing one to change the displayed month and year. We feel this access to a long-term counting history is critical in the formation of future goals and the avoidance of past mistakes.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/HOME_SCREEN_BEFORE.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/HOME_SCREEN_AFTER.jpg" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

During the usability testing and design review we found that people had a hard time figuring out where to find the track history button and confusing it with the current statistics button. We decided to separate these components and make the current statistics the main visual in the home page and moved the tracking button to a navigation bar. The home page greets people and lists current statistics (amount of drinks consumed and money spent) and the limits on drinks and spending they set for themselves. This visual representation is more effective because it shows people immediate information that is pertinent (current statistics compared to their set limits) and fixes the navigation problem within the home screen. 

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/heuristic_eval_watch_no_menu.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/colored_selection.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

During our design review we found that the buttons for counting drinks on the watch were not intuitive. Since they were all one color with small icons, it was hard to find the difference between the buttons and did not provide an affordance to click. To combat this, we kept the icons but made the buttons different colors. Separating the buttons using color, in addition to the drink icons, would make it easier for people to differentiate the buttons, especially if they are intoxicated and cannot read the icons. 

### Final Paper Prototype

#### Overview
Our final paper prototype is our more refined prototype with revised interface and interactions.  

<p><img src="assets/projects/{{ project.path }}/FULL_PAPER_PROTOTYPE_OVERVIEW.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

#### Task Execution 

##### Setting Spending and Drinking Limit

<p><img src="assets/projects/{{ project.path }}/task_1_paper_2.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

##### Counting Drinks and Tracking Spending While Out

<p><img src="assets/projects/{{ project.path }}/task_2_paper_2.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

### Digital Mockup

#### Overview
Our digital mockup is the final high fidelity mockup with our refined interface and interactions.

<p><img src="assets/projects/{{ project.path }}/FULL_DIGMOCKUP_OVERVIEW.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

#### Task Execution 

##### Setting Spending and Drinking Limit

<p><img src="assets/projects/{{ project.path }}/task_1_digital.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

##### Counting Drinks and Tracking Spending While Out

<p><img src="assets/projects/{{ project.path }}/task_2_digital.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

#### Adjustments
The main adjustment we made to the watch was adding a different color to each of the buttons to count drinks. By adding different colors, the buttons now afford clicking and helps people differentiate the buttons especially when they are intoxicated. In addition, the centralized theme of our watch and phone system is based on more pastel colors with the main color being a periwinkle blue to symbolize calmness. We used a dark theme in the smart watch app and a light theme in the phone app to separate the two modes, and is also symbolic for monitoring on the night out and reflecting the day after. 

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/final_paper_line_graph.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/digital_mockup_money_graph.png" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

We removed the line graph on the money history menu in favor of a bar graph. We made this change because the previous style of graph implied a continuous increase in spending between nights out, which isn’t an accurate model of the wearer’s discrete purchases. Using the same graph style as in the alcohol tab also maintains internal consistency. Finally, the switch above the graph prominently signals the activated mode which reduces the need to visually distinguish the two graphs, particularly in a manner that obfuscates the core data.
