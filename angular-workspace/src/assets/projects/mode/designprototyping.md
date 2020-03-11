# mode - productivity with intention
Smartphone use is more prevalent than ever before. With every update, people are becoming more and more invested in their virtual lives. Their work life, social life, and down time appear to all revolve around one device which has instant access to all of the world’s collective information. However, instead of using their phone as a productive tool, many people seem to have an unhealthy relationship with their device. We wanted to get to the root of this relationship and understand why phones aren’t being used to maximize different areas of people’s lives to their fullest potential.

## Solution

Initially, we thought that our problem lied in excessive phone usage, but we found that instead the problem was with unintentional phone usage.

As we talked to more and more individuals, both within and outside the college sphere, there was a theme that came up time and time again. Balance. People struggle with balancing productivity and entertainment within their professional and personal lives. We realized that smartphones already come with multiple ways to monitor your phone usage, yet many choose to either not look at their data or purposefully ignore it. Our app aims to make this data more visible in both passive and active forms.

Our app _mode_ utilizes a plant visual as a passive tracker of phone usage. As an individual operates their phone in work mode, or is not on their phone at all, the plant will begin to flourish. As they in turn begin to unconsciously scroll on apps such as social media, the plant then begins to wither and die. The plant then serves as a visual measurement between a user and their screen time data.

Through our app _mode_, individuals can find a better balance between work and play. Instead of eliminating the smartphone entirely, _mode_ allows you to use your phone with intention rather than distraction.

## Initial Paper Prototype

After we decided to focus on the unintentional phone usage problem, we started to build our first prototype based off the experiences of our participants in the design research phase.

#### Task 1

For our first task, we asked the user to add Instagram to the play mode and slack to work mode. Users do so by entering the mode app and clicking the setting button. Afterwards, they can edit their modes according to which apps they would like in each category to customize the app to their needs.

![Initial Prototype Task 1.1](../3web/initial_task1-1.png)

![Initial Prototype Task 1.2](../3web/initial_task1-2.png)

#### Task 2

For the second task, we asked the user to scroll through Instagram, keep an eye on their plant, and act accordingly. As they figure out that the plant is wilting due to their Instagram usage as a result of Instagram being in play mode, users switch to work mode or turn their phone off until their plant is revived.

![Initial Prototype Task 2.1](../3web/initial_task2-1.png)

![Initial Prototype Task 2.2](../3web/initial_task2-2.png)

## Testing Process

Our testing process allowed us to consistently iterate on the initial paper prototype, fixing small mistakes that led to big changes.

![Testing Process](../3web/testing_process.png)

We initially performed two separate low-risk heuristic evaluations to quickly identify obvious problems in our initial design. Through our heuristic evaluations, we found many small issues such as missing back buttons, internal inconsistencies with headers, and confusion between buttons.

By fixing these issues before the usability tests, we were able to remove design flaws before the user focused in on them. This allowed for finding major structural issues during our usability tests.

We then conducted the three usability tests. We asked each participant to complete two separate tasks critical to the functionality of _mode_.

We broke down our usability test down to our participant doing the task and reflecting on the action. After each task we asked them a series of questions to better understand how they reasoned through the task and if there were any unintuitive features that we had designed.

Here we were able to identify bigger problems with our design, and found that several key aspects were not intuitive as the walk-up-and-use technology that we wanted. From our usability tests, we were able to create a final paper prototype that was much more straightforward and friendly to our testers and easily translated to the digital space as a mockup.

## Testing Results and Prototype Refinement

After discovering pain points and confusion, we worked with our participants to brainstorm solutions to our issues. The problems that we found with our design includes confusion navigating different app features and difficulty finding the switch to change modes.

When we first administered the tasks, the first two participants had no idea how to perform them without exploration. We did our best to refrain from giving them key information, but they asked anyway. This wasn’t an issue during the heuristic evaluation when the evaluator was exploring functionality; it was only an issue when participants were asked to do specific things. To fix this disconnect, we added a brief tutorial for certain key functions that plays when you use the app for the first time and tested this with the third participant. The first task ran more smoothly, although he had a couple of suggestions for the tutorial to make it even more clear, which we have since refined.

![Refined Prototype Walkthrough](../3web/proto_walkthrough.png)

We also decided to rearrange the app into panels for a more intuitive layout. The many buttons were slightly confusing, especially when hand drawn, so panels broke apart the information. This is also a common iOS convention within apps, so participants easily figured out that the panels could be swiped due to the addition of the dots at the bottom indicating which panel you were on.

![Refined Prototype Panels](../3web/panels.png)

Participants did not know at all how to switch modes. After the first two usability tests, we added an option to include the iOS _mode_ “widget” accessible from the home screen by swiping right that provided a simple interface that only displayed which mode you were currently in and a switch for switching modes. This worked well for the third participant, but he was an Android user, and only knew how to access the widget this way with a hint. If this were to be actually implemented, we would still be able to create an Android widget, but we decided to also put a switch on the launch page of the Mode app that allows you to more clearly switch between modes. We don’t want switching to be too easy, because we wanted to enforce the idea of consciously shifting between modes to improve productivity rather than just when it is convenient.

![Refined Prototype Widget](../3web/widget.png)

## Final Paper Prototype

Here you can see an overview of our entire final prototype, and you can see some of the changes we’ve made since the initial prototype, such as a tutorial and widget system.

![Final Prototype Overview](../3web/prototype_overview.png)

#### Task 1

With our final paper prototype, the settings page that allows you to add apps to each mode is now  dual indicated with both color and symbols. When testing this prototype, participants were able to understand how to add and remove apps without any help or questions. We also added the instant feedback mechanism that moves an app to its respective category as soon as a participant adds it or removes it, which allows the participant to see the system status at all times.

![Final Prototype Task 1](../3web/final_task1.png)

#### Task 2

Our prototype now takes advantage of widget features to actively switch between modes. As you can see, when a participant spends too much time on Instagram, for example, they get a notification asking them to check on the status of their plant. When they navigate to the home screen and see that their plant is wilting, they can simply swipe left and use the mode widget to switch between work and play mode, and continue by using their phone for work to revive their plant.

![Final Prototype Task 2](../3web/final_task2.png)

## Digital Mockup

For our digital mockups, we kept a lot of our designs and concepts from our final paper prototype. Overall, the transition from paper prototype to mockup was pretty straight forward and we were able to implement rough ideas that weren't clear to our participants due to the low-fidelity nature of our prototype. The biggest changes and decisions came from pain points in our usability tests and in class critique such as a more comprehensive tutorial, plant status rather than dying notifications, and better icons for readability.

![Digital Mockup Overview](../3web/digital_overview.png)

#### Design Choices

When translating our prototype to our digital mockup, we decided on keeping a minimal theme with as few distractions as possible to reflect the nature of our app. With this aesthetic came a color scheme of pastel and lowly saturated colors of indigo, blue, and green to replicate a calming effect. We also chose the font Roboto, as it is an easy to read sans serif font with several different weights. This makes it easy to pair with itself at different points within the app headers, buttons, and content.

We created a consistent template for each screen, and kept headers, back arrows, icons, etc. the same for internal consistency. Finally, we included dual indication for most visual aspects, such as red x's vs green plusses, or red down arrows vs green up arrows to increase accessibility features. If we had more time in this course, we would have liked to design for multiple operating systems, but for our mockup we stuck to iOS and its conventions.

We also added data visualization to some of the statistics, such as graphs and medals with personal bests, to created an easier way to see progress in terms of limiting phone usage.

#### Task 1

For the first task using our digital mockup, users should tap the settings gear, now located the top right. They then choose the edit button for the mode that they are adjusting, and click add icons for their respective apps.

Rather than including several small buttons close together as before, we have the most important features spread over panels in accordance with iOS conventions and the statistics page as a panel accessed by swiping right. Any page within the app has back buttons that are clearly readable and it is easy to see which page you are navigating back to, which is often the _mode_ home screen.

![Digital Prototype Task 1](../3web/digital_task1.png)

#### Task 2

For the second task of our digital mockup, users first navigate to Instagram. After scrolling through for a few hours, a status update pops up and informs the user on the current state of the plant. In seeing the plant wilting, the user changes to work mode or shuts off their phone entirely to revive their plant. 

![Digital Prototype Task 2](../3web/digital_task2.png)

Overall, this project has been through many iterations to best provide a productivity tool for the modern phone user.
