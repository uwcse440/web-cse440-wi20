### Problem and Solution Overview
Sleep, especially for college-aged adolescents, is a crucial necessity. However,
many students have let it fall to the bottom of their priorities. Amid the pressure
of school, work, extracurricular activities, and social events, college students
fail to find the time to sleep. Our group in our design asked ourselves:

**How do we facilitate proper sleeping habits for those that can sleep earlier but won't?**

Our solution combines tracking, social networking, and sleep science into Doze: A Smart Pillow.

### Initial Paper Prototype

<p><img src="assets/projects/{{ project.path }}/initialmobileprototype.png" width="100%" style="max-width: 600px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/initialpillowinsertpaperprototype.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

In our initial paper prototype, we capture the basic functionality we wanted to incorporate
into our design. Our interface includes features such as a character or avatar to display
a user's progress, a small social network that allows users to share sleep habits, long-term
selfie tracking, a gallery of articles on sleep, and pillow controls.

The first task, creating a live progress tracker between users, is accomplished through the
social page of the app. A user can share their progress with others and the app facilitates
a competition based on the sleep data collected by their pillow. The app displays detailed
information on other people's sleep, so a user can understand what works well for others in
the community and adapt their own sleep habits based on that information.

The second task is to cultivate a relaxed mindset and environment for better sleep. Our pillow
tracks sleep data, such as hours slept, room temperature, and noise level. A user can use
this data to inform their decisions and get better sleep. If the user struggles to sleep,
they can check the app for recommendations from others or suggestions based on the data
collected by the pillow. The pillow additionally can play music to help the user fall
asleep or play an alarm in the morning to make a phone unnecessary for sleep.

### Testing Process
In each of the usability tests we conducted, we discussed how the test would be run with the
participant and afterwards debriefed the experience with them. During each test, Ying
ran the test and gave the participant tasks, Zoe recorded video of the test, and Kevin and
Geovani observed the participant's interactions. During the test, the participant was asked
to find their friend's score, find a certain data point in their report, and take a selfie.
We additionally allowed each participant time to explore the app and during the debrief asked
which features they liked, which ones felt unnecessary, and why they would or wouldn't use the
product.

We conducted these tests with three participants.  Our first participant was a prior CSE 440
student and the test took place in CSE2. We approached this participant because we wanted advice
from someone with experience in UI/UX. This participant is majoring in computer science and
currently is pursuing a career in UI/UX, so they had plenty of experience in the area. After
their test, we were able to refine our questions and tasks to be more focused and clear. It was
also after this test that we figured out the questions asked during debrief for future tests.

Our second participant was a computer science student and teaching assistant. This participant
offered a unique perspective because while he had a lot of technical experience, making
much of his insight unique from the previous test's participant. His advice helped us to
identify areas with unclear purpose and issues with privacy, which we used to modify the
prototype before our final test.

Our last test was with an HCI major at UW, conducted at the participant's house. We knew this
participant would have deeper insights considering her extensive experience with design. She
told us that our design was already clear and usable, but her suggestions greatly improved
the layout of the app to be more convenient and pertinent to the user's current needs.

### Testing Results and Prototype Refinement
Our testing identified the following issues which needed to be addressed.

#### Login information

<p><img src="assets/projects/{{ project.path }}/login.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

Many participants told us that privacy was a major concern with this app. Our original prototype
only had options for logging in with Facebook, Instagram, or Google to help with the social
aspect of the app. After listening to user concerns, we decided to add a proprietary log in
system for users who did not want their sleep data shared with these companies.

#### Data visualization

<p><img src="assets/projects/{{ project.path }}/data.jpg" width="100%" style="max-width: 300px; display: block; margin: auto;"></p>

Some participants found the sleep data report page confusing, so we modified it to clarify
which day the user was currently on and added the option to change the way data was displayed.

#### Home page display

<p><img src="assets/projects/{{ project.path }}/homepage.png" width="100%" style="max-width: 600px; display: block; margin: auto;"></p>

The original design had an animal avatar as a method to communicate current progress to the
user in a concise and generalizable manner. Participants found the animal confusing. We changed
the prototype to use a person or animoji avatar instead but recognized that further discussion
was needed on this feature.

#### Information search

<p><img src="assets/projects/{{ project.path }}/information.png" width="100%" style="max-width: 600px; display: block; margin: auto;"></p>

Participants loved the feature to search for sleep tips and music, but found the interface hard
to use, so we classified information in order to make finding information more intuitive.

#### Community ranking list

<p><img src="assets/projects/{{ project.path }}/ranking.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

Our original intention with the ranking list was to enable users to share their sleep habits
with others and to learn about how to improve their own sleep. Participants thought this
feature showed promise but shared too much personal information. We modified the feature to
aggregate data and display an overall score instead of specific sleep and wake times. We
additionally walked away from this with a greater focus on privacy.

### Final Paper Prototype

<p><img src="assets/projects/{{ project.path }}/finalpaperprototype.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

These changes resulted in our final paper prototype.  Our final prototype is similar to the
original in many ways but our testing allowed us to refine it.  This created a more focused
interface and a more intuitive layout.

The first task of creating a live progress tracker is improved by the changes made to the
social page. A user can now share their progress without divulging major personal information.
A user wanting to improve their sleep habits can more effectively and efficiently find tips or
advice from others in the simplified and categorized explore page. The changes we made turned
the app into a more encouraging social space as well.

The improved explore page also ties into our second task of cultivating a relaxed mindset and
environment for better sleep. The changed explore page makes information on improving your
sleep environment more timely and convenient to access. Users will find it easier to share
and find information they need.

### Digital Mockup

<p><img src="assets/projects/{{ project.path }}/userflow.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

The feedback we received on our paper prototypes all culminates in our digital mockup.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/dpLogin1.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/dpLogin2.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/dpLogin3.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/dpLogin4.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/dpLogin5.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/dpLogin6.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

The first time a user opens the app, they are taken through a short tutorial.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/dpHome1.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

The home page greets the user and contains the information most commonly used in our app.
The score is out of three stars and matches the one shared with others in the group a user
is a part of.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/dpLibrary1.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/dpLibrary2.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

The tabs at the bottom help the user navigate to different pages. The first of these is the
library page. This page displays information curated by Doze on sleep as well as tips and
recommendations by the community of users. A person hoping to improve their sleep can seek
help here. Information is categorized to make the interface intuitive and easy to navigate.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/dpReport1.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/dpReport2.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

The second tab, the report page, shows the user the data that their pillow has collected on
their sleep. The user has multiple options for how the sleep data can be displayed. Helpful
tips can pop up if they are necessary or relevant given the user's current data. Using this
data a user gains greater understanding of their current state and Doze will encourage them
to act upon it and improve their sleep habits.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/dpGroup1.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/dpGroup2.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/dpGroup3.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/dpGroup4.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

The group page hosts the social portion of the app. From here a user can create a group of
friends. The app avoids negative reinforcement, instead encouraging groups to work together
towards a group goal. Members can view each other's progress and encourage one another to
adopt healthy practices. The group page's design is centered on fostering healthy team
mentality to encourage conversation around sleep and positive feedback.

<p style="display: block; margin: auto; text-align: center;">
  <img src="assets/projects/{{ project.path }}/dpPillow1.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
  <img src="assets/projects/{{ project.path }}/dpPillow2.png" alt="initial prototype - pay area" width="100%" style="max-width: 200px; vertical-align: top;" class="m-3 border rounded">
</p>

The pillow page holds the controls for the smart pillow. The design is simple and intuitive
and allows the user to schedule alarms in advance or choose music to help them fall asleep.
The simplicity of the design prevents a user from needing their phone in the bedroom to
control their pillow.

In transitioning from a paper format to a digital one, a feature that was significantly
changed was the home page. We determined in earlier testing that an animal or human
avatar would feel weird for users, especially when dealing with low health. To encourage
healthy sleep habits, we removed the character and the HP bar, opting for a star rating
system to remove the discouraging negative reinforcement of our previous design. We
additionally modified the social networking page to reflect this change, making it
less of a competition and more of a team effort.

The digital mockup also goes into much greater detail than the paper prototypes. We
specify a central theme for color, font, and layout that was not explicitly decided
in paper prototypes or sketches.

The first task of creating a social progress tracker is greatly improved by these changes.
The group tab now focuses on team bonding and growth instead of competition. This change
significantly affects the way users interact with our app and encourages positive
conversations around sleep and self-care. The ranking system serves as a foundation
for this. The difference is subtle but can be illustrated by a simple example. Consider
someone new to the app or someone who falls out of good sleep habits. Our previous design
would show them low health warnings or a sad character, discouraging them from trying
harder and possibly pushing them away from our app. The new approach using positive
reinforcement encourages the user to continue trying and reach a new goal.

The second task of cultivate a relaxed mindset and environment for better sleep is
accomplished by our design's attention to tracking and data. Imagine a person trying
to improve their sleep. Our app communicates their sleep data clearly, but unlike other
existing solutions, Doze offers advice that is timely and relevant to the user's needs.
The user can additionally find help from the community in the explore tab. Information
in our app is readily available and organized intuitively, helping users achieve their
goals.

We aimed to create a design that would help college students develop healthier
sleep habits. This digital mockup combines all we have learned into a single interface
that accomplishes this goal.
