### Problem Overview

Alcohol is ubiquitous throughout cultural spaces. It is a source of entertainment, but also of danger, expenses, and health complications. Alcohol's association with forgetting responsibilities makes mechanisms of self-moderation unpopular. To date, none have been adopted at scale. Yet, habitual drinking, uncertain limits, and overspending remain a prevalent issue. 

Many existing tools fall into the pattern of "data-fetishism". The drinker experiences novel amusement toward trends in their consumption before ultimately discarding the app. Others are too heavy-handed, requiring one to drag out their phone to record statistics. Our goal is to approach this problem from an angle that encourages and rewards habits of mindful consumption while recognizing one's existing goals and social contexts.

### Research 
#### Methods

We conducted semi-structured interviews with college students who frequently consume alcohol and funds while out with friends. We chose interviews due to the complication of a contextual inquiry on inebriated individuals. College students were our primary population of interest due to their frequent involvement in drinking, socialization, and the purchase of alcohol while on a limited budget.

#### Goals

Our interview prompts started out broad and on the explorative side and grew to be more focused around identifying the topics below.

* People’s motivations for self regulation.
* Sources of frustration in current moderation and tracking methods.
* Methods tried before by them or their friends.
* Challenges that come with different environments in which they consume alcohol.
* Confidence in their general knowledge about alcohol.
* Personal signs that they or their friends have consumed too much.
* Actions that they would like to have access to or find intriguing but can not perform right now.

Many of the initial interviews were less effective in identifying a final design but helped us iterate on our interview scripts and create specific questions that we needed for making an informed choice for our final design. Indications that occasional binge drinking was intentional and desirable to social drinkers led us to refocus on participants experiences around the intersection of drinking and spending. 

#### Participants

We tried to choose participants that are still in college and have a decent amount of drinking experience. We also tried to have diversity in gender to and their majors. Finally we also interviewed a bartender to get the insight from the other side. For the bartender interview a different custom script was used. Overall during our research we ended up conducting interviews with six participants:

* Asian female. Majoring in Informatics. Drinks 1 - 5 times a week.
* Asian male. 21 years old. Majoring in HCD. Drinks once a month.
* Asian male. 21 years old. Majoring in CS. Drinks once a week.
* White male. 22 years old. Majoring in Physics. Drinks 1 - 2 times a week.
* Asian female. 19 years old. Majoring in Communications. Drinks a couple times a month.
* Asian female. 21 years old. Works as a bartender.

### Results & Themes

**”Ballpark” tracking methods are enjoyed for their simplicity**

Many participants tracked the amount of drinks they’ve had in their head, or on their arm with a marker. The bartender mentioned receipts being used by customers to keep a tally of drinks. Most participants lacked motivation to comprehensively log drinks due to inconvenience and risk of being labeled as “no fun”. Participants were resistant to the idea of pulling out their phone to track drinks, but saw the social impact of tracking amongst their friends as a non-issue. In fact, some participants perceived counting their drinks as a mechanism to show that you can handle a lot of alcohol.

**Drinkers are aware of short-term risks, but they sometimes ignore what they know**

Participants shared concerns about “blacking-out” and personal safety. One participant shared a salient memory of a friend’s emergency room visit after alcohol poisoning. The sentiment that *“It’s rarely worth it to get that drunk”* recognizes the dangers of overconsumption, but this line between *“a good amount drunk”* and *“too much”* seemed like something participants relied on past experience and physical sensation to gauge.

**Social drinkers distribute their drinking across locations**

Participants described moving locations frequently during nights out with their friends. One participant explained, *“Last Saturday, two days ago. I pregamed here and went out to a bar and then a club. I was with a group of friends.”*. This notion of “pre-gaming” and “kick-backs” was echoed throughout responses, and indicates that consecutive instances of drinking and spending may not always be co-located. Furthermore, the vendor of the alcohol was often a friend rather than a cashier.

**Nights out are expensive, and can involve a unanticipated expenses**

Many participants expressed difficulties regulating spending, with drinks, food, and ride-share services. Many of them offered estimation of their expenses, with the three highest spending $50, $60, and $80 per night. For frequent drinkers, this is a significant life expense that is difficult to trace due to the distribution of expenses across varying locations and type of purchase. Some participants attempted to set personal allowances, but had varying success in sticking to their goals. Another participant was comfortable being less vigilant *”I just swipe my card and I don’t keep track. I just sign it and I’m good to go*”.

### Identified Tasks

With our results in mind we carefully examined what was the current experience for our participants and what they were interested and motivated in pursuing. This led us to boil the possible achievable tasks to the ones listed below.

* **Preventing overspending on alcohol and food on a night out.** 
  We have found that monetary impact of drinking is the most appealing motivation factor for attempting to moderate yourself.

* **Knowing the total amount you spend on a night out.** 
  While similar in theme to previous task, many participants expressed concerns in aggressive moderation tactics and would rather just make their own conclusions based on the data. 

* **Selecting drinks to your taste, budget, and tolerance level.** 
  Many participants were not very well informed in how much alcohol they were consuming and showed interest in personalized assistance for nights out. 

* **Keeping track of how many drinks you have had.** 
  While the task itself is fairly straightforward there are many challenges in doing this effectively and unobtrusively on a smart device.

* **Having emergency contacts readily available for others to help.** 
  Being able to effectively help your friends and allow others to help you is one of the only aspects of consuming too much that our participants took seriously. 

* **Notifying someone when you’re in an uncomfortable situation.** 
  Outside of just having the information readily available, being able to easily send an SOS like message to an emergency contact when you are out drinking is a feature often requested by our participants.

### Proposal Sketches

There are three design spaces that we decided to explore. Each attempts to provide a solution to a slightly different subset of tasks and approaches the general problem of moderation from a novel angle.

#### Mobile Application

The main goal of the mobile application is to allow for a clear way to set and track spending goals. This design approaches the task by providing an insightful and feature full application that can be used before and after a night out to track your progress. There also extra features that allow you to reach out to an emergency contact for yourself or your friends.

<p><img src="assets/projects/{{ project.path }}/mobile_app_design.png" width="100%" style="max-width: 400px; display: block; margin: auto;"></p>

<p><img src="assets/projects/{{ project.path }}/mobile_app_design_2.png" width="100%" style="max-width: 400px; display: block; margin: auto;"></p>

#### Smart Watch Application

The smart watch design attempts to reuse existing hardware to provide a smarter solution for counting your drinks. Most of the interactions would happen on the actual watch face itself. While the amount of information displayed is much more limited, the ability to track and review the information in a convenient way differentiates this design from others.

<p><img src="assets/projects/{{ project.path }}/smart_watch_app_design.png" width="100%" style="max-width: 650px; display: block; margin: auto;"></p>

#### Smart Bracelet

A device specifically designed to be able to count your drinks allows for a more focused solution. While this design presents the most limited amount of information compared to others, it also provides both a subtler way to track and a combination of visual and tactile way of presenting the count of drinks consumed.

<p><img src="assets/projects/{{ project.path }}/smart_bracelet_design.png" width="100%" style="max-width: 650px; display: block; margin: auto;"></p>

### Selected Design

We chose to pursue a design that incorporates both a smart watch and a phone app. This allows us to both keep count of drinks consumed and track spending in an effective manner.

<p><img src="assets/projects/{{ project.path }}/selected_design.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

During our research, many participants expressed disinterest in moderation techniques that required extensive time and attention. Many were also reluctant to buy any new hardware for alcohol moderation due to doubt in effectiveness and convenience of any extra devices. They did display interest in something that integrates with their existing devices, such as a smart watch. This motivated us to pick a design that would take advantage of the existing smartwatch hardware and provide the convenience of your wrist while still backing it up with a full-fledged mobile app. Unlike other designs, it lends us the opportunity to project a streamlined interface to the wearer that is accessible during the act of drinking, while reserving the more complicated, descriptive tasks like reviewing your progress or adjusting your goals for the phone application. We believe physically separating the modes of goal-limited drinking and goal-setting could prevent social drinkers from feeling intruded on during their nights out, while still retaining the tools necessary to subtly keep themselves accountable. In our design we chose to target the tasks of keeping track of how much you drank and knowing the total amount you spent on a night out. These two tasks aligned the best with the core desires that our participants displayed. The information gathered during tracking your drinks and your spending is also an essential prerequisite for allowing the user to try and tackle the other tasks that we considered such as preventing overspending or reaching out to an emergency contact when someone over-consumes. Rather than imposing one specific goal, such as complete sobriety, our aim is to provide the wearer with an interface through which to set goals like saving money, learning limits, and cutting back on alcohol ahead-of-time. Then, the wearer can measure and evaluate their performance in comparison to those goals.

#### Storyboard 1

Counting drinks effectively on a night out is very helpful in allowing a person to identify that they should stop. Let us illustrate it by following our hero Otis through a series of events. Otis and his friends are out at a bar and one person suggests doing another round of drinks. Otis habitually checks his watch and realizes that he has consumed more than he thought. Based on this information he decides to take a pass and enjoys the rest of his night out, confident in his choice.

<p><img src="assets/projects/{{ project.path }}/storyboard_1.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

#### Storyboard 2

Realizing that you have spent too much can also serve as a great trigger to reconsider your actions. This time Otis is out at a club and he is having a great time. He offers to purchase drinks for his friends and continues to get drinks for some strangers. Yet after seeing how much he has spent he starts worrying about paying for his rent and even paying for his next meal. He decides to stop his spending for the night, feeling like he is making an informed choice.

<p><img src="assets/projects/{{ project.path }}/storyboard_2.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>
