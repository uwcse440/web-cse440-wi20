# Guardia
<img src="/logo.png" alt="logo" style="width:150px;height:150px;">

***

## Team members
Federico Rubiolo: 
<img src="/federico_rubiolo.png.png" alt="Federico Rubiolo" style="width:150px;height:200px;">

Christina Zhang: 
<img src="/christina_zhang.png" alt="Christina Zhang" style="width:150px;height:200px;">

Zehpyr Zhou: 
<img src="/zephyr_zhou.png" alt="Zephyr Zhou" style="width:150px;height:200px;">

***

### Problem and Solution Overview
    Our design uses concepts from [this paper](https://dl.acm.org/doi/pdf/10.1145/3025453.3025875) as a model for the stages of getting out of an abusive relationship, namely the labeling of the *physical control*, *escape*, and *life apart* phases of such a relationship. The specific problem we are tackling is bridging the information gap between the abuser and the survivor. It is all too common for an abuser to cut their partner off from help and certain information sources and/or to have some sort of surveilance strategy in order to effectively exercise their control. We look to provide the survivor with some of the information they are lacking in order to help empower them to feel confident enough in their knowledge of the situation to begin to find ways out of it. Our specific focus is on network related information asymmetry, such as if an abuser is monitoring network activity as a tool in their control strategy.
    
    The way we propose to do this is to have an internet connected HUB device that can be connected to a network that will monitor network activity *without contributing* to said network activity. The possibility of creating such a device that can monitor a network without speaking over it is the central assumption we have made in our design. The other assumption is that such a device could not be easily tampered with or reprogrammed, such as if an abuser managed to get their hands on it and tried to turn it into another tool they can use. The information collected by this device could be presented to the user via some client app or website to help inform decisions they make in their relationship, particularly as it pertains to how their network activity is being tracked.
    
***

### Design Research Goals, Methods, and Participants
    From the onset, we employed *value sensitive design* principles, with our primary focuses being *privacy* and *security*. The goal of our design research was to gain insight into what specific difficulties survivors face when trying to get out of an abusive relationship so we could narrow down on one big but specific problem we could design for.
    
    Due to the sensitive nature of our problem space, we did not want to try to reach out to actual survivors of Intimate Partner Abuse (IPA) as we felt putting people in that situation wouldn't be fair to them. Initially, we read anonymous posts on online forums from survivors, which gave us some examples of the types of situations and ways in things could go wrong that we needed to consider in our design. We also read the aforementioned [paper](https://dl.acm.org/doi/pdf/10.1145/3025453.3025875) as part of our design research. At this point we were also trying to make meetings with counselors on/near campus, hoping to interview them. We had no success in doing so. With the information we had at this point, we started making some designs.
    
    We later had the opportunity to have a video call with one of the authors of the [paper](https://dl.acm.org/doi/pdf/10.1145/3025453.3025875)]. We went into the call with the mindset of it being a semi-structured interview. We already had some designs forming and some ideas for what we could do to help survivors of IPA, and we wanted to see which ideas made sense to someone who knew far more than us on the subject and which problems made no sense. The call ended up helping us to greatly narrow the scope of our design, which at the time was still far too broad and non-specific.

***

### Design Research Results and Themes
    The insights gained from each element of our design research helped to progressively narrow our scope down until we were down to a point that felt specific enough without being too small to produce a full design around.
    
    The forum posts helped us cut out certain initial brainstorming ideas that made no sense or would be far too difficult to implement successfully.
    
    The [paper](https://dl.acm.org/doi/pdf/10.1145/3025453.3025875) provided our design some structure as we had a model with which to think of the process of getting out of an abusive relationship. It also provided more technology-specific insights into what design considerations made no real sense or, again, would be too difficult to implement correctly while accounting for all the nuance and individuality of each situation.
    
    The video call with the author of the paper was pivotal in narrowing the scope of our design onto one specific problem that we could address fully. It was from this call that we narrowed down on designing for bridging the information gap between the abuser and the survivor. Previously we had been designing more for helping the survivor through the *escape* and *life apart* phases. Switching the focus to bridging the information gap also shifted which part of the process we were designing for. We are designing for transitioning from the *physical control* to *escape* phases.
    
    One of the main takeaways of all our design research was that no one solution can solve every problem in our problem space. Our first designs had elements meant to assist with *escape* and *life apart*, while also tackling a task that had to do with transitioning from *physical control* to *escape*. We were trying to do too much and not devoting enough attention to any one of the problems we were considering. Once we narrowed our scope, we felt much happier with the direction the design was headed and much more confident in our ability to tackle the problem and produce a viable design solution. The more narrow scope also helped us understand what type of end-user we would be designing for, helping us also to apply some of the broader insights we gained from the earlier forum searches and from the [paper](https://dl.acm.org/doi/pdf/10.1145/3025453.3025875) itself.
    
***

### Identified Tasks
    Our initial 6 tasks for the 3 first design ideas we had were as such:
    + Super Ultimate Secure Login
    + Total and Immediate Data Deletion
    + Remote Local Data Transfer from One Device To Another
    + Compile an Escape Plan
    + Obtain Relevant Information to Local Resources
    + Access Log of Login Attempts With Information About What Device has Attempted to Login
    
    The idea of our far-too-broad designs was to provide the user one secure, private, and centralized location in which to keep all their *escape* and *life apart* related plans. Privacy and security were central to many of the tasks we initially chose. We needed a very secure login process for this reason. We wanted data storage to be local so that it wouldn't exist anywhere except on the device it was being used. The data deletion and transfer were for emergency situations where the end user may not feel safe. The login attempt log was meant to inform potential data deletions if they user felt they were being tracked. We put a lot of thought into how to leave no trace of our solution's presence on the user's device in case of an emergency.
    
    After we significantly narrowed our scope and modified our design, the two central tasks we designed for were as such:
    + Check the constant feed of network activity
    + Perform a cybersecurity analysis
    
    The network activity feed helps inform the user of how their network is being utilized, helping inform decisions on how and when to use the network the HUB device is connected to. Since we are assuming the device collects the information without being directly tracked by the network as it is doing is, this is a safe operation. The feed provides the user with information they would not otherwise have, and such information could assist them in forming a plan of how begin to wrangle free of the abuser's control.
    
    The cybersecurity analysis gives advice where the network feed does not. It uses the data being collected by the HUB device to evaluate the safety of the network it is related to and make suggestions on how to improve cybersecurity. This could, for example, suggest that a user don't use their home network for anything related to getting out of their relationship and instead do such searching at a public place, like a library, where it cannot be tracked.
    
    The internet could be a very valuable tool for survivors, but when they don't know how safe it is to use they can feel powerless to find a way out of an abusive relationship. These tasks help provide survivors with more information so they can know how to go about finding a way out of their situation.

***

### Proposed Design Sketches
    Our first three designs were created and sketched before the video call, so they are quite different from the design we ended up going with. Here's a very brief overview of each design and what considerations went into them.
    
#### Design 1:
<img src="/design1_task1.png" alt="Design 1, Task 1">
<img src="/design1_task2.png" alt="Design 1, Task 2">
<img src="/design1_task3.png" alt="Design 1, Task 3">
<img src="/design1_task4.png" alt="Design 1, Task 4">
<img src="/design1_task5.png" alt="Design 1, Task 5">
    The first design was focused on the *escape* phase and had the home screen as its central focus. The home screen linked directly to the tasks this design considered, making it quick and easy to access each of them after login. The primary focus of this design was the Escape Plan portion and the other tasks directly or indirectly contributed to the use of the Escape Plan. This design was meant to give the user one central place to store any *escape* and *life apart* planning related information.

#### Design 2:
<img src="/design2.png" alt="Design 2">
    The second design was centrally focused on being discrete and unassuming. It displayed a personalized interactive image, where certain gestures would perform the various tasks in this design, including the login process. Here we were exploring how to make it as difficult as possible for someone to even attempt to take control of the information in the app.

#### Design 3:
<img src="/design3_task1_1.png" alt="Design 3: Task 1_1">
<img src="/design3_task1_2.png" alt="Design 3: Task 1_2">
<img src="/design3_task2.png" alt="Design 3: Task 2">
<img src="/design3_task3.png" alt="Design 3: Task 3">
<img src="/design3_task4.png" alt="Design 3: Task 4">
    The third design shares the most similarities with our final design choice. This design was focused on device interaction logging and cybersecurity. The goal was to provide the user information about how their account was being accessed and make recommendation based off of this information.
    
    Each of these three designs specifically addressed the login process, as safety and privacy are important values to consider for our design. We were always considering how to keep the artifact from getting into the wrong hands.

***

### Selected Design and Storyboards
    After the video call and our decision to focus in on bridging the information gap between abuser and survivor, we knew we wanted to essentially take our "interaction log" task and blow that up into a full design of its own. In considering how to get more useful information than just login attempt information, we came up with the idea for the IoT HUB device that could be on a network. The device would collect network acticvity information for all devices on the network. We knew we had to make the aforementioned assumptions regarding its ability to collect information without contributing to network activity in relaying that information to the user for the design to work. With our assumptions made, we considered how to use the data the device would collect to present useful information to the user. From this, we came up with the two primary tasks of our design.

#### Checking Devices Interaction Log
<img src="/story1_1.png" alt="Storyboard 1">
<img src="/story1_2.png" alt="Storyboard 1">
    Here, Joan uses the interaction log to understand the strange behavior in the IoT devices in her household. Joan could use the information to disable the devices' internet connectivity, or to replace the devices altogether to limit her abuser's opportunities to access any of Joan's network information. The information is presented to Joan in a way that is easy for her to understand so that she can make an informed decision in how to deal with the situation.
    
    Since the data collected on the network is not limited to smart devices, the interaction log can also be used to understand some of the network behavior of more commonly used devices like desktops, laptops, and cell phones. This information can be used to make informed decisions on how to utilize the network that the HUB device is connected to.

#### Performing Cybersecurity Analysis
<img src="/story2.png" alt="Storyboard 2">
    Here, the cybersecurity analysis is performed to find malicious activity on the network from the abuser's hacking attempts. The data from the HUB device is used to evaluate the security conditions of Joan's network, warning her of someone's attempts to hack in. Joan's response is to change her passwords, which can save her accounts being accessed by her abuser as he tries to regain control of Joan.
    
    In an alternative example, one could use the cybersecurity analysis to receive recommendations on whether or not the HUB's network is safe to use freely or if there is another device on the network tracking activity. This type of information can be empowering for a survivor to take a step in the direction of getting out of their situation if they can be made aware of where they're free to use the internet without fear of being tracked or surveilled by their abuser.
    
***
    
    Overall, our design looks to provide the end user with information about their network and cybersecurity that it may otherwise be difficult to obtain. Through this infomration, one may feel empowered in their understanding of their situation, leading them begin to find a way out of it.