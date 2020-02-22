<!--
TODO: It would be nice to have a place to put their tagline
Capture life as it happens
--> 

### Problem and Solution Overview:
Taking photos is a convenient and effective way of keeping a record of the past scenes in our lives.  However, sometimes being in a rush on either a road or business trip, it is hard to find time to take a picture of every moment one might want to capture. And it is even harder to keep in mind every detail one might want to remember. But if we cannot recall the stories behind the pictures afterwards, those photos may have already lost much of its meaning.
Our solution is a wearable camera that can be attached to any clothes or hat. Pictures can be taken by a voice command or click of a button. For users who want to capture every moment without their intervention, auto capture is an option. The audio record feature helps to save all the details behind the lens of a camera. Pictures are shared with a phone, where they are organized into trips or searched by a keyword.

### Design Research Goals, Methods, and Participants:
Our design research initially focused on gathering data about the process of taking notes for photos. We used semi-structured interviews and tried to interview a variety of demographics. After interviewing our first candidate, we reflected on the primary use case for our app and decided that travel might be a slightly more focused design space to explore. This decision was driven in large part due to the current apps and processes that are already entrenched in many people’s photo arsenals. Our first interviewee had a very specific workflow using Instagram and Snapchat, and we felt that it would be exceedingly difficult to create a product that could be inserted into daily usage alongside these popular apps. With a specific area to focus on, we constructed questions to digest how photos play into how people currently travel. Since the major focus for our project was about helping to capture memories, a big portion of our interview was very functional in exploring the storytelling and reflecting process. The rest of our interview questions focused on pinpointing the pain points that currently exist when taking lots of photos in a short time period, as happens while travelling.

We targeted both men and women to interview. Our age range was mostly targeted at the young adults. Although our product is focused on aiding memory, we decided against creating something specifically for the elderly as we felt many older people don’t take many photos compared to the younger generation. We specifically looked to interview people that had gone on a trip in the distant past (over two years prior) to see how well they could recall the trip through looking at their photos.

### Design Research Results and Themes:
We had several ideas about potential directions heading into our interviews. Many of our initial ideas were somewhat polarizing. Since photos are such an intimate form of communication, our interviewees had varying levels of comfort regarding privacy. There were, however, several key themes that held true through all of our interviewees.

When asked about journaling or taking notes to assist in memory, many of our interviewees expressed that taking notes for photos requires too much effort. Most expressed that they had the desire to record more than just what they had photos of. Despite this, none of the candidates even considered journaling as a viable option due to the effort and level of commitment required. When prompted, several interviewees indicated that they would prefer to take notes on the spot, and would likely support a voice memo concept that enables lightweight and instant note-taking.

When asked why they took photos, interviewees brought up that photos are often used to convey a story. Although some photos were shared on social media, the majority of photos were often taken to piece together a narrative of the whole trip to share with friends and family. Many photos were taken to help illustrate interesting or funny stories encountered along the trip, an example being a grocery store selling a whole chicken in a box in Malaysia. The same interviewee also seemed to recall certain information only after reflecting on his photos. He had to be prompted about the sequence of the photos to remember additional details about the trip such as the timing of certain events and small interactions that weren’t photo-worthy. We decided that the usage of photos in conveying a story should be a core focus since most current photo taking apps largely emphasize the photos rather than the circumstances around the photos.

Almost all interviewees had some group photos/photos taken with others. Our interviewees indicated that group photos are always shared with members of the photo. They indicated that group photos are a great way to remember a shared experience, and that the photo is as much for everyone else included in the picture as it is for themselves. Sharing photos can oftentimes be somewhat of a hassle purely due to the extra steps it takes after taking photos, but our interviewees still found it important enough to put in the extra effort. Thus, we viewed the sharing of photos as an essential process that provided an opportunity for streamlining.

Among nearly all interviewees, one major pain point in dealing with photos is that searching for specific photos can be time consuming. One interviewee tried searching for photos from their Cambodia trip, but could not find them readily because the photos were grouped by city instead of by country. There were also times when an interviewee would tell a story and try to find the corresponding photo. We took this as a sign that we could implement a better way to search, potentially including the personal context of a photo as a searchable field.

### Identified Tasks:

- Taking photos.

  Pictures can be taken with just a simple voice command or a click of a button. Settings will also allow users to choose how often pictures to be taken and what kind of signal to be used (if any).
  
- Adding descriptions to photos.

  Users add voice memos right at the moment when a photo is taken. Then, the application will have an option to play the recording, or automatically transcribe it and add as text notes and keywords to the photo.
  
- Searching for specific photos.

  Custom keywords and tags are added to each photo. The application will allow users to do a  search for a photo not only by location or date, but also via advanced and personalized keywords.
  
- Photo sharing.

  All the pictures taken are automatically sent to all the people in the photo with a face recognition feature.
  
- Exploring New Places.

  Based on the user's preferences, an app will recommend the places other users with similar preferences like.
  
- Deleting Duplicate Pictures.

  All the blurred and similar pictures will automatically be pre-selected for deletion before sharing them with other devices.

### Proposed Design Sketches:
We came up with three different designs to address the problems we have learnt from the users. Each design focuses on a different use case and a set of tasks that the user can perform. Our first design is a travel photo management app that mainly addresses the pain points of existing camera and album apps, to make it more convenient and efficient for users to manage their travel photos. However, since we realized that there are also some inconveniences for people to even take photos when traveling, we came up with our second design - a wearable mini camera, to enable people to capture their travel moments more easily. Moreover, when analyzing our user research results, we found out that some user problems are specific to group travel scenarios. Therefore, we also designed an app to specifically enhance the group travel experience.

#### Design 1 - Travel Photo Management App
The first design is a mobile app focused on the improvement of existing mobile camera and album applications. It enables a few tasks that the users wish they could perform, including capturing stories, organizing, sharing and searching for photos. Users can record a voice memo when taking photos and the app will automatically transcribe it to a textual description of the photo. Users can then share the photos and the descriptions to others in a story format. Having the descriptions, the app allows more specific search function based on the keywords in photo descriptions. Moreover, the app can suggest blurred and duplicate photos to users for deletion.

<p><img src="assets/projects/{{ project.path }}/design1.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

#### Design 2 - Wearable Mini Camera
The wearable mini camera is a portable camera that can be attached to any model of glasses or pinned to the clothes. It is as lightweight and un-intrusive as possible to attach to any item of clothing, targeted for any user who wants to capture a photo without breaking a moment. Users can interact with the camera through buttons on the camera or voice command in order to take photos or record voice descriptions of the photo. The photos and voice memos are automatically transmitted to a mobile app, which allows users to manage or share the photos.

<p><img src="assets/projects/{{ project.path }}/design2.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

#### Design 3 - Group Travel Enhancement App
This travel enhancement app is targeted at groups travelling together, with the primary goal of making group travel as painless as possible. In this app, multiple users can specify that they will travel together, forming a travel group. Within this travel group, photos will be automatically shared among members, and suggestions for future itinerary will be offered to each user based on past travel history.

<p><img src="assets/projects/{{ project.path }}/design3.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

### Selected Design and Storyboards:
We have chosen to further develop our Wearable Mini Camera design. Based on our user research, we found out that people have various needs and pain points in different stages of the photo taking and management process. Reflecting on our initial goal of helping people remember more precious moments, we decided to focus on the “upstream” problem first, which is to enable people to capture more photos and stories easily when traveling. Together with the camera, we also want to design a mobile app, which stores all the good photos taken by the camera, and provides some essential functions in our first design for people to easily manage their photos.

#### Scenario 1: Taking Photos & Adding Descriptions by Wearable Mini Camera
<img src="assets/projects/{{ project.path }}/1-1.png" style="max-width: 225px; break-after: avoid;">
<img src="assets/projects/{{ project.path }}/1-2.png" style="max-width: 225px;">
<img src="assets/projects/{{ project.path }}/1-3.png" style="max-width: 225px; break-after: avoid;">
<img src="assets/projects/{{ project.path }}/1-4.png" style="max-width: 225px;">

#### Scenario 2: Searching for a Specific Photo in the Photo Management App
<img src="assets/projects/{{ project.path }}/2-1.png" style="max-width: 225px; break-after: avoid;">
<img src="assets/projects/{{ project.path }}/2-2.png" style="max-width: 225px;">
<img src="assets/projects/{{ project.path }}/2-3.png" style="max-width: 225px; break-after: avoid;">
<img src="assets/projects/{{ project.path }}/2-4.png" style="max-width: 225px;">
