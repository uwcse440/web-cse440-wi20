<!-- TODO Tagline
#### Capture life as it happens
-->

### Problem and Solution Overview:
Capturing the precious moments during the trip is a common wish for most of the travellers. However, both taking photos of the scenes and remembering the happenings can be difficult to many people.
We want to design a mini camera and a mobile app to make it more convenient for travellers to capture those precious moments. They can easily take photos and take notes of happenings by talking to the camera. The mobile app would then support users to easily organize the memories, for example, by allowing quick deletion of duplicate photos.

### Initial Paper Prototype:
Our prototype has two components. The first one is a wearable PinPoint camera that can be attached to clothing or a hat, it takes photos and adds descriptions to them using a voice command. The second component is a mobile app connected to the camera via Bluetooth; the app stores and organizes photos taken by PinPoint camera.

<p><img src="assets/projects/{{ project.path }}/1_1.jpg" width="100%" style="max-width: 400px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 1.1 PinPoint camera prototype and relations between different screens in mobile app</p>

#### Task 1: Adding descriptions to photos at the moment they are taken

Selecting “Camera” on the “Settings” tab (fig. 1.2) takes the user to default camera settings (fig. 1.3).
The user switches “Bluetooth” toggle to connect the wearable camera and sees a pop-up window that device was successfully paired (fig. 1.4).
By clicking “Alert”, the user can select the volume of the sound, which sound to use when photo/notes were taken and whether to use vibration (fig. 1.5).
Selecting “Notes” on the “Settings” tab (fig. 1.2) takes the user to note settings (fig. 1.6).
There are options for notes autotranscription and keeping the original voice memo.
Selecting “Photos” on the “Settings” tab (fig. 1.2) takes the user to default photo settings (fig. 1.7).
Selecting “Take Photo” takes the user to default photo-taking routine. If “Auto” is selected, the user can choose the frequency of auto photo/note taking (fig. 1.8).
If the user wants photos/notes to be taken by voice command, the user should set up it. The user clicks “Set up taking photos” and sees pop-up notification (fig. 1.9).
When the user clicks “Continue”, the new pop-up window is displayed, and the app records command to be used for taking photos (fig. 1.10).
The “command successfully set up” notification is shown and the user can proceed taking photos via voice command (fig. 1.11).
The exact same routine happens when the user selects “Set up taking notes”.
When those set-ups are done, the user can take photos and record notes whenever he/she wants. For example, the user wears a PinPoint camera and goes hiking. When he see bears, he just says command and camera takes photos and notes.

<p><img src="assets/projects/{{ project.path }}/1_2-11.jpg" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

#### Task 2: Organizing/deleting duplicate pictures

The user selects the “Gallery” tab and sees recently added photos; burst photos and photos with notes have a pile of photos symbol or voice symbol respectively (fig. 1.12). When the user selects the group of the same photos (burst) with added voice memo, the user can scroll bottom field to see each photo from the series of photos (fig. 1.13). If the user doesn’t want to manually choose the best photo from each group, the user can go back to “Settings” (fig. 1.2), and select “Auto delete” on “Photos” tab (fig. 1.7). The user can change the maximum number of photos taken per one command and switch toggle to allow app analysis and keeping only the best photo from the whole series (fig.1.14). When the user returns back to the “Gallery”, the user sees only the best-quality photos (fig. 1.15).

<p><img src="assets/projects/{{ project.path }}/1_12-15.jpg" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

### Testing Process:
#### Inspection-based method:
We did our first round of testing by asking fellow classmates to perform heuristic evaluations of our product. We gave them some introduction of our product and asked them to evaluate our product based on Nielsen’s 10 Heuristics. This helped us quickly identify some usability problems before approaching real users.

#### Usability test:
After we refined our paper prototype based on the heuristic evaluation results, we did three rounds of usability tests and quickly iterated our design after each test.
Our first usability test was with Tim, a 21 year old student at the UW, which falls squarely in our target demographic. Tetiana served as the app, Josh served as the note taker, and Fengwei served as the facilitator. We gave a brief introduction of our product, then asked the participant to perform a series of tasks. We found that in this test, we had to provide quite a bit of background information before Tim was able to navigate through the tasks. We decided to add more context in the form of initial setup screens, which should allow for more user autonomy in future tests.
Our second usability test was with Catherine, a student at the UW. This time we provided more introduction about the basic product features, so that the participant had the same level of knowledge as a person who buys the product. This introduction, and the initial setup screens we added after the first usability test, allowed the participant to more easily navigate through our product. The participant was able to focus on the specific details of the product, such as confusion about some wordings.
Our third usability test was with Jenna. This time we tried to ask more questions during and after the test. This stimulated the participant to think about their own past experiences and give more useful feedback about the product by imagining using it in a real life situation. Asking the participant for comments or suggestions at the end of the test also allowed our participant to think about the big picture of the product and give more high-level feedback.

### Testing Results and Prototype Refinement:
#### Heuristic evaluation
##### Heuristic: Match between system and the real world
The functionality of “Take Photo” isn’t clear. The user might think it’s actual photo taking instead of set-up functionality.
We renamed the field from “Take Photo” to “Mode/Command” to avoid ambiguity (fig. 2.1).

<p><img src="assets/projects/{{ project.path }}/2_1.jpg" width="100%" style="max-width: 400px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 2.1</p>

##### Heuristic: User control and freedom
Unclear how to retrieve deleted photos.
We added a new tab that contains all deleted photos (fig. 2.2).

<p><img src="assets/projects/{{ project.path }}/2_2.jpg" width="100%" style="max-width: 400px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 2.2</p>

##### Heuristic: Consistency and standards
Unclear how to edit transcribed text.
We added a new button that allows users to edit text. When the button is pressed, the text becomes editable with options to cancel editing and save changes (fig 2.3).

<p><img src="assets/projects/{{ project.path }}/2_3.jpg" width="100%" style="max-width: 400px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 2.3</p>

#### Usability test
Our usability tests identified several major problems and led to a few major modifications:

##### Initial setup of camera functions
To eliminate confusion for the first time users and improve discoverability of functions, we thought it is very important to add an initial setup process to help get their preferred settings before starting to use the camera. This setup process is displayed in the final prototype task 1 section.

##### Handling duplicate photos and photo deletion
Our first participant had some difficulty distinguishing between deleting the entire series of photos versus deleting only some photos out of a series. We thought about the experience that we wanted to provide with our app, which is to create an app that makes recording memories as simple as possible. With this goal in mind, we decided to remove the ability to take a series of photos completely. Now, each time a photo is taken, a series of photos are taken but the best photo is automatically selected and saved, so the user never has to interact with deleting ‘duplicate’ photos.

##### Taking a photo and taking a voice memo
Participants asked about whether users can take photos and voice memos separately, can they be taken together with a single command, and how to end taking a voice memo. These urged us to think about more details regarding the design of our mini camera:
Photos and voice memos can be taken separately: this would allow users to be more flexible and keep more memories during their trip. We also iterated our app design to support displaying standalone audio notes.
Various ways to stop recording a voice memo: firstly, users can say a voice command to stop recording. Since users may forget to say the command, we also design the camera to stop recording after 15 seconds of silence. Given the situation that the environment is noisy, we also allow the camera to force stop recording after 5 minutes.

##### Gallery displaying the memories without photos attached
A very interesting point mentioned by one participant was that the gallery in the app has not much difference from the normal album in the mobile phones. Since our product is mainly used to help take photos and voice memos when traveling, users expect the app to display not only the photos but the memories along the trip. We thus changed our gallery in the app to display the photos and the transcribed voice memo in a timeline (fig. 2.4). We felt that this would allow us to be more specific to our target users, and allow users to be clearer about the focus and unique selling point of the product.

<p><img src="assets/projects/{{ project.path }}/2_4.jpg" width="100%" style="max-width: 400px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 2.4</p>

There are also many other minor modifications based on the usability test results:

##### Increased visibility to edit voice memo transcriptions

<p><img src="assets/projects/{{ project.path }}/2_5.jpg" width="100%" style="max-width: 500px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 2.5</p>

##### Adding the viewfinder

<p><img src="assets/projects/{{ project.path }}/2_6.jpg" width="100%" style="max-width: 600px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 2.6</p>

##### Clarifying confusing wording

Command vs. voice command (fig. 2.7) and notes vs. voice memos (fig. 2.8).

<p><img src="assets/projects/{{ project.path }}/2_7.jpg" width="100%" style="max-width: 400px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 2.7</p>

<p><img src="assets/projects/{{ project.path }}/2_8.jpg" width="100%" style="max-width: 400px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 2.8</p>

### Final Paper Prototype:

Our prototype has two components. The first one is a wearable PinPoint camera that can be attached to clothing or a hat, it takes photos and description to them using a voice command. The second component is a mobile app connected to the camera via Bluetooth; it stores and organizes photos taken by PinPoint camera.

<p><img src="assets/projects/{{ project.path }}/3_1.jpg" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>
<p style="text-align: center">Fig 3.1. PinPoint camera prototype and relations between different screens in mobile app</p>

#### Task 1: Taking photos and adding descriptions immediately

When the user uses the app for the first time, the user is guided through all required setup (fig 3.2). At the beginning, the user pairs the camera with a phone app (fig. 3.3-3.4). Then, the user chooses whether to take photos automatically between some intervals or to use voice command (fig. 3.5). In the next step, the user sets up the voice command to take a photo (fig. 3.7-3.9). After that, the user sets up the voice command to record the voice memos (fig. 3.10-3.12). Finally, the user sets up an alert to use after the photo/note was taken (fig. 3.13). When those set-ups are done, the user can take photos and record notes whenever he/she wants. Later, if the user wants to change this set up, he/she is able to do it in settings.

<p><img src="assets/projects/{{ project.path }}/3_2-13.jpg" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

The user wears a PinPoint camera, checks how the camera is attached and where it’s pointed to (fig. 3.14) and goes hiking. When the user sees bears, he just says command and camera takes photos and notes. Later, the user opens the app, and sees all pictures taken during the hike (fig. 3.15). When the user selects a photo with the voice sign, he sees both photo and transcribed notes (fig. 3.16).

<p><img src="assets/projects/{{ project.path }}/3_14-16.jpg" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

#### Task 2: Searching for specific moments

After removing manual deletion as a focus, we decided to switch our second task to searching for photos. After taking a photo and recording a memo to attach to that photo (fig. 3.17), users can navigate to our search menu (fig. 3.18). Searching for photos will use AI-powered photo recognition and descriptions (the transcribed memos) as searchable fields. Our search can also accommodate power users with an easy advanced search using keywords, two of which are illustrated in figures 3.19 and 3.20.

<p><img src="assets/projects/{{ project.path }}/3_17-20.jpg" width="100%" style="max-width: 600px; display: block; margin: auto;"></p>

### Digital Mockup:

Our camera is displayed in figure 4.1 and key functionality of the app is described in tasks section.

<p><img src="assets/projects/{{ project.path }}/4_1.jpg" width="100%" style="max-width: 100px; display: block; margin: auto;"></p>
<p style="text-align: center">Figure 4.1</p>

#### Task 1: Taking photos and adding descriptions (initial setup)

When the users use the app for the first time, they are guided through all required setup (fig 4.2). At the beginning, the users pair the camera with a phone app (fig. 4.3-4.4). Then, they choose whether they want photos to be taken automatically between some intervals (fig. 4.5). In the next step, users have an option to set up required voice commands (fig. 4.6). If they decide to do so, they set up the voice command to take a photo (fig. 4.7) and record the voice memos (fig. 4.8). Finally, the users set up an alert to use when the photo/note was taken (fig. 4.9). Later, if the users want to change this set up, they are able to do it in settings.

<p><img src="assets/projects/{{ project.path }}/4_2-9.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

The user wears a PinPoint camera, checks how the camera is attached and where it’s pointed to (fig. 4.10) and goes about their adventures. When users see something notable, they activate their camera using their preset voice commands. Later, they open the app and see all the pictures taken during their adventures (fig. 4.11). When the users select a photo with the voice sign, they see both photo and transcribed notes (fig. 4.12). Users can record an audio without taking a picture, if so, the audio note will be depicted as an audio symbol in the gallery (fig. 4.13). Users can also take photos without recording audio notes, in this case, the audio can be recorded anytime later (fig. 4.14).

<p><img src="assets/projects/{{ project.path }}/4_10-14.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

#### Task 2: Searching for specific moments

After taking photos and recording memos attached to photos (fig. 4.15), users can navigate to the search menu (fig. 4.16). Searching for photos will use AI-powered photo recognition and descriptions (the transcribed memos) as searchable fields. Our search can also accommodate power users with an easy advanced search using keywords, two of which (and/or keywords) are illustrated above (fig. 4.17 - 4.18).

<p><img src="assets/projects/{{ project.path }}/4_15-18.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

#### Changes to Design

More visual elements: In our initial setup process, we added a lot more visual elements to help users understand the current status of the app, be clearer about the actions they are supposed to take, and keep their attention on the app. For example, instead of words we used different colors and icons to represent the status of camera connection. We also used a microphone icon to represent the action of recording a voice command. We added illustrations to make the setup process more interesting and easy to understand for users.

Streamlined process: We thought that our initial setup process was actually a bit long and tedious for the users, so we tried to cut down some redundant pages in order to streamline the setup process. For example, in our paper prototype, we have three pages for users to finish setting up a voice command, with one page for the instructions, one page for recording command and one page for confirmation or the option to retake. In our digital design, we combined three pages into one, so that users can view the instructions, click on the microphone icon to record the voice memo, view the result directly on the page and have an option to confirm or retake.
