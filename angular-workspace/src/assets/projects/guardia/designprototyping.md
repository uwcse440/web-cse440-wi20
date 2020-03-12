### Refining Information Delivery
Federico Rubiolo, Christina Zhang, Zephyr Zhou
<img src="/logo.png" alt="Guardia icon">

#### Problem and Solution Overview
In situations of Intimate Partner Abuse, abusers will often utilize the internet/home network as one of their methods of exercising control over their partner. We are addressing the information asymmetry this creates between abuser and survivor by providing the survivor information about how a network is being utilized in the context of their privacy and security. With access to this information, we look to empower the user with an understanding of how control is being exercised over them, potentially leading them to discreetly find resources to help them out of their situation.

#### Initial Paper Prototype
As our UI is primarily an information delivery system, in our initial paper prototype we explored all of the information we could deliver to the user through the information collected by our HUB device. Below is an overview of the prototype:

<img src="/paper_overview.png" alt="paper prototype overview">

Our first task was to check the constant feed of device activity. This provided the user a log of all interaction with IoT and non-IoT devices so they could see the activity happening on the network.

<img src="/paper_task1.png" alt="paper prototype first task">

Our second task was to perform a cybersecurity analysis on a user's network and devices. The results of this were divided into four categories: Device security, Network security, Data security, and Application security. Alerts and notifications would be sent out after performing the analysis.

<img src="/paper_task2.png" alt="paper prototype second task">

The Device security section contained a personalized interface we called the Device HUB, which represented an IoT web. It included icons for each device on the network. Each device could be selected to find more info on that device and its activity, allowing users to delve deeper into the security conditions of each device. We provided indications of which devices were compromised using exclamation marks next to the corresponding devices. 

<img src="/paper_device_security.png" alt="paper prototype device security">

Network security was further subdivided into three categories: WIFI Security, IP Protection and Anti-tamper and Detection Security. Similarly to the Device HUB under Device security, each sub-category in network security had indications of the level of security, and each sub-category could be selected to see more information about it. 

<img src="/paper_network_security.png" alt="paper prototype network security">

Continuing the trend, the Data security and Application security sections had progress-bar style indicators of security for each data category and application on the user's devices. These sections would also provide the user with notifications and alerts regarding suspicious activity which would provide additional information on the suspicious activity. These notifications and alerts would also provide the user with suggestions with how to handle the event.

<img src="/paper_data_security.png" alt="paper prototype data security">
<img src="/paper_app_security.png" alt="paper prototype application security">

#### Testing Process
Our testing process was rather simple and relatively unstructured. Since the UI aspect of our design is primarily an information delivery system, our goal for our testing was to refine our UI down into the most intuitive and effective information delivery system we could make it. All our tests involved us giving a quick briefing on what our design is and what the UI portion of it served as, then setting the participants loose on our design starting from either the home screen or a notification on the lock screen and seeing how they navigated it, interacted with it, and how they reacted to the information presenting to them.
We had four participants. Our first two participants, a security proxy who had some security issues in their past and one of our classmates, performed the tests on our initial paper prototype. The third participant, our resident expert who co-wrote a paper strongly related to our problem space, was given our first full digital prototype of our UI. The fourth participant, a target end-user, tested the modified version of our digital prototype resulting from the third user test.
During each test, we asked the participants to “think out loud” as they navigated the design so we could get a gauge on what aspects made sense to them and what aspects were confusing. This was particularly true of our first, second, and fourth user tests. For our third test with the expert, we asked for a more expert analysis of everything in our design. Since they viewed our first digital prototype, this included wording on menu options and buttons, information delivery via color, ease of navigation, etc.

#### Testing Results and Prototype Refinement
Our first two user tests yielded rather straightforward results: the UI was confusing, it was unclear how one was meant to navigate it or what to do with it, and there was too much information, making it difficult to interpret what everything meant.

At this point, instead of making many changes to the paper prototype, we decided to immediately begin work on a digital version of our prototype. We did so in anticipation of our third user test being more of an expert evaluation, making us want to present a more refined-looking version of our prototype while also beginning to more easily explore how color could be used to convey information in our design. Furthermore, the third test was performed remotely, so being able to send the third participant a link to a digital prototype that could transition between screens made things run much more smoothly than holding up pieces of paper to a camera to transition between screens. Below is the first version of our digital prototype.

<img src="/digital1_homescreen.png" alt="first prototype home screen">
<img src="/digital1_interactions.png" alt="first prototype interaction log">
<img src="/digital1_cybersecurity.png" alt="first prototype cybersecurity page">
<img src="/digital1_vulnerability_analysis.png" alt="first prototype vulnerability analysis">

The first screen was our home screen. The second screen was linked to by the “Interaction History” button on the home screen. The third screen was linked to by its respective button on the home screen, as well as the fourth screen.
The idea behind this was to simplify down the control flow of the app and consolidate information down into a few more discrete categories while reducing information overload.

Our third participant provided plenty of feedback on this design, including:
+ Some of the words/terminology used were too technical and could be intimidating to someone who is unfamiliar with the terms
+ The use of colors to divide categories and also provide severity information was confusing and at times seemed contradictory in an intuitive sense
+ The categorization of security events was unnecessary and could be a barrier to entry if the user doesn’t fully grasp the differences between the categories
+ The interaction log seemed unnecessary with the existence of the vulnerability analysis page
+ The most important information, such as what was presented on the vulnerability analysis page, could be made more easily/readily accessible.

With this feedback, we decided to essentially turn our vulnerability analysis page into the home page. This home page would present events as the HUB device collects information, and there would be options to learn more about each event should a user want to inform themselves further than just the short summary presented on the home screen. Below is the original vulnerability analysis page and the new home page which shares a similar design. On this new home page we also used simpler language that still conveys the information we want to present.

<img src="/digital1_vulnerability_analysis.png" alt="first prototype vulnerability analysis">
<img src="/digital2_home.png" alt="second prototype home screen">

The “learn more” button in each event’s box leads to screens like the ones below. Here we present the user with more information on each event, as well as providing suggestions on how to handle the event. Some of the screens displayed are full examples, while others are more of templates.

<img src="/digital3_search_history.png" alt="first learn more page">
<img src="/digital3_failed_login.png" alt="second learn more page">
<img src="/digital2_phone_template.png" alt="third learn more page">
<img src="/digital2_laptop_template.png" alt="fourth learn more page">
<img src="/digital2_preventative_template.png" alt="fifth learn more page">

Finally, the buttons in the top corners of the home screen lead to the screens below, where we provide information about the limitations of our design as well as the significance of the colors on the home screen.

<img src="/digital3_search_history.png" alt="color explanation page">
<img src="/digital3_failed_login.png" alt="what Guardia tracks page">

This was the UI presented to our fourth participant, who’s test went quite smoothly. They believed our design to be intuitive to use. However, they did mention that the order/filter buttons on the home screen were confusing as two of them were just different orderings and the third was an ordering with a filter. We changed those to be separate order and filter drop down menus to eliminate that confusion.

<img src="/digital2_home_highlight.png" alt="original home page">
<img src="/digital3_home_highlight.png" alt="changed home page">

From our third user test onwards, we made a concerted effort to present nearly all information to the user in plain english. We realized that having scoring systems that either gave the user numerical scores or partially filled progress bars depending on the level of security was confusing and arbitrary. The less the aspects of our UI had to be learned or be explained to the user, the more effective and understandble our information delivery could become. Anything in our design from this point onward that relied in some way on a system that determined the severity of a situation using numbers would first be translated into some more easily understandble form - namely the certainty scores on the "learn more" pages and the per-event colors on the home page. We made sure to also explain the colors we used, and kept that as the only information delivery aspect that isn't directly in english, greatly reducing the number of things in our design that could create confusion.

#### Final Prototype/Mockup
Our user testing resulted in a major refinement in our information delivery within our design. From an initial design with all the information we could think of categorized and divided into different sections to one where all the information is much more centralized and there is no information presented to the user that is more than a single finger press or mouse click away from the home screen.

With our changes to our design also came changes to our two primary tasks. Our two new tasks became:
+ Check the feed of security events
+ Learn more about a specific security event

The first task is performed simply by opening the app. Since our home screen became the primary source of information delivery, the most pertinent and most summarized information is presented to the user there through the feed of security events. Below are examples of the home screen in a few different orderings as well as one filter, though all present the same overall informationa and have the same events as elements that make up the feed.

<img src="/final_digital_home1.png" alt="final home page ordering 1">
<img src="/final_digital_home2.png" alt="final home page ordering 2">
<img src="/final_digital_home3.png" alt="final home page ordering 3">
<img src="/final_digital_home4.png" alt="final home page ordering 2 and filter">

The second task is performed by hitting the "learn more" button on any one event on the home screen's feed. Doing so will lead the user to a screen like the one below.

<img src="/digital3_search_history.png" alt="``search history getting sent to another device`` learn more page">

This example corresponds to the event on the home page with the same summary in red text as the "learn more" page has in its top red box. This is where the user can gain a better understanding of what the information presented on their home feed means in a more detailed and explained form. It is also here that they can find suggestions on how to handle the event.

Below are more examples of the final "learn more" pages. Like before, there are fleshed out examples and templates.

<img src="/digital3_failed_login.png" alt="``failed login to your account`` learn more page">
<img src="/final_digital_laptop_template.png" alt="user laptop event learn more page">
<img src="/final_digital_phone_template.png" alt="user phone event learn more page">
<img src="/final_digital_preventative_template.png" alt="preventative measure learn more page">

Should the user be confused about what the colors on the home screen mean, they can use the corresponding option on the home page that will lead them to the screen giving them that information.

<img src="/final_digital_colors.png" alt="final explanation of colors page">

Similarly, if the user wants an understanding of what they can and cannot expect from our design, they can hit the "What does Guardia track?" button on the home screen to be led to the following screen where that is explained.

<img src="/final_digital_guardia_tracks.png" alt="final explanation of colors page">