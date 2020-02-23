### Introduction

#### Problem

A recent study by [UC Berkeley](https://escholarship.org/uc/item/7jx6z631) showed that if one additional passenger was added to every 10 vehicles, 0.8 to 0.82 billion gallons of fuel could be saved annually in the U.S. This would also amount to a reduction of 7.2 million tons of greenhouse gas emissions. Furthermore, facilitating carpools is not only a step in reducing the impact of climate change but also has numerous positive benefits for individual citizens such as cost savings and reduced traffic congestion.

#### Solution

Our solution comes in the form of an application that is centered on providing its users with a safe and convenient way to find suitable people to carpool with. Our research shows that there was an interest in finding both routine and one-off carpools as long as safety and convenience was prioritized. Our design will feature a matching system that factors in background checks and user ratings to ensure safety. Its focus will be to allow users to build a reliable network of people to carpool with as well as easily organize carpools with existing contacts.

### Design Research

#### Goal
As carpooling is a fairly common activity across all populations, we wanted to explore the different contexts of carpooling with a focus on user’s current transport experience, previous carpool relationships and what factors they consider the most important with regards to carpooling

#### Methods
We used two methods, semi structured interviews and an online survey, to gather concrete findings for the direction of our design. 

**Semi-Structured Interviews**

We chose to use semi-structured interviews as our primary method for conducting our research. This involved a thirty minute interview with participants which loosely followed a framework of questions centered around our focus. This gave us flexibility in asking follow up questions to explore the specifics around each participant’s context.

*Interview Participants*

Our participants were students and working professionals as they would be the most likely to have routine commutes. We wanted feedback from people who do not drive to ask questions about their concerns with finding someone to carpool.  We also wanted feedback from people with their own cars to ask about their concerns with sharing their car. Our specific participant backgrounds were as follows:

* A working professional employed at the Columbia Tower in Downtown Seattle who buses to work
* A working professional employed in a small clinic in Shoreline who drives to work
* A university student who carpooled in highschool while living with a host family in Florida, where public transportation is not available. 
* A local university student who drives to school by herself
* A working professional that bikes to and from work every day

**Online Survey**

The goal with our online survey was to gather feedback from a wide variety of contexts that we could not cover with our interviews. Our survey questions covered the same themes as our interviews but also allowed us to ask direct questions, such as whether they would be interested in our concept, without any biases due to the anonymous nature of our survey.

### Design Research Results & Themes

<p><img src="assets/projects/{{ project.path }}/surveyresults.png" width="100%" style="float: right; max-width: 400px; display: block; margin: auto;"></p>

This tree graph shows the survey participants’ responses when asked about their three most important factors in carpooling. Highlighted in green are the four most common keywords: cost, friendliness, safety, and convenience. Through these results and the findings from the semi-structured interviews, we were able to develop two main focuses in our carpooling design.

<div class="clearfix"></div>

#### Safety
Almost every participant in our design research study brought up safety as their main concern towards carpooling. The survey results showed that they were interested in having background checks and features like reviews and ratings to help ensure a thorough screening for each member in the carpooling community. Four of the five participants in the semi-structured interviews also suggested allowing users to choose their own preferences for their fellow carpoolers in order to set mutual understandings of the expectations they have towards each other. For example, one of the university students suggested drivers should clarify if smoking or eating in the car is allowed, and passengers can suggest extra compensation for missing or late drivers. In general, most wanted the ability to modify their own carpooling communities and avoid riding with strangers whenever possible. This increases the likelihood that the carpooling group have common interests and friendly, non-awkward conversations through this customized filtering process.
 
#### Coordination
The most frequently mentioned issue from our participants was the lack of proper coordination within the carpooling group. The participants from both research methods wanted live updates and locations of their drivers and a clear itinerary for the entire ride. In addition, scheduling was a major factor in this problem. Two of the working professionals in the semi-structured interviews explained that they do not want anyone in the group to have to wait or to adjust their schedules in order to create the carpool. They wanted some flexibility that is required for their work, especially for the clinic worker who needs to be at her workplace according to her patients’ needs. However, if it was not too inconvenient for everyone in the group, they are more than happy to carpool in order to save money and gas.
 
### Identified Tasks
**Finding carpoolers with the same route**. This task is focused on ensuring that people are actually willing to carpool together. Almost all cases of carpooling that our participants partook in were when the carpoolers had a similar or identical destination. Intuitively, it is hard to motivate people to carpool if they must go out of their way to pick others up. As such, making sure the routes of the carpoolers are compatible is a high priority for our design.

**Communicating the location and status of the carpool**. This task was motivated by the participants indicating that scheduling and waiting for transportation were major pain points for them. This issue exists in other forms of transportation as well, such as public transit, shuttle buses, and rideshare services. Thus, we want our design to minimize the amount of waiting done by the carpoolers.

**Finding the most efficient routes**. Several participants mentioned they had difficulty coordinating carpools with multiple passengers, which involve several pick-up and drop-off locations. A design that can find the most efficient route will help alleviate this barrier.

**Finding a community with shared preferences**. Our participants had many different preferences when it came to carpooling. Cleanliness, driving speed, and talkativity are some examples of factors people consider when carpooling with others. By matching carpoolers that share similar preferences, we increase the chance of people will carpool together again in the future.

**Monitoring driving behaviors to ensure the safety of carpoolers**. Safety was a chief concern among the vast majority of our participants, and we wanted our design to give people peace of mind when carpooling.

**Seeing money/C02 emissions saved from carpooling**. The practical benefits of carpooling was a main motivating for many of our participants. For instance, one university student we interviewed mentioned they carpooled to reduce parking costs. By clearly showing these benefits to people, we can motivate them to carpool more frequently.

### Proposed Design Sketches
#### Design 1: Finding New People to Carpool With
The focus of this design is to help users find reliable people to carpool with. When adding a carpool, a user can choose their destination, set their schedule and edit their preferences. They will then be given a list of possible users that match their route, schedule, and preferences. Each match will be displayed as a profile with their description, driver rating, route, and preferences on a card. The user can choose to send a request to the carpool to the match. If the recipient of the request accepts then they can communicate with each other in a chat. New users can also be added to the group if approved by both parties. The user’s profile page also includes a summary of how much money they have saved through carpooling in comparison to driving solo as well as how much they have reduced their carbon emissions to motivate further carpooling.

<p><img src="assets/projects/{{ project.path }}/3design_find_people.png" width="100%" style="max-width: 650px; display: block; margin: auto;"></p>

#### Design 2: Gamification
This design is centered around gamification and creating a competitive environment to encourage people to carpool more frequently. The design will feature a way to create and join groups, which can be based on this such as workplace, city, etc. The groups will have a leaderboard of people that have participated the most in carpooling. This grouping will allow people to find others that share something in common with them, which would help expand a person’s network of people to carpool with. The design also features a statistics page for people to track various carpooling stats, as well as a badge system for reaching certain achievements.

<p><img src="assets/projects/{{ project.path }}/3design_gamification.png" width="100%" style="max-width: 650px; display: block; margin: auto;"></p>

#### Design 3: Connected Car Service
This designed platform is intended for the duration of the riding experience, which assumes that the carpooling group has already formed. By inputting the addresses of each passenger’s pick up point, it can determine the best way to arrange the pick-up points for the most efficient routes. It also allows for easy access to directions on the road and communication to passengers. This is particularly important in situations when there are unexpected delays or schedule changes while on the road. Moreover, It includes the ‘Passengers’ feature for specific passenger information. To facilitate the in-car activities, the “Music” feature allows all passengers to add their own choice of music onto the music queue in the car through their own devices. 

<p><img src="assets/projects/{{ project.path }}/3design_incar.png" width="100%" style="max-width: 650px; display: block; margin: auto;"></p>

### Selected Design and Storyboards
In the end, we chose to pursue our first design centered around “finding and matching individuals”. Matching passengers and drivers that share the same preferences provide a feeling of safety and comfort, which is a feature that is desired by an overwhelming number of our research participants. By allowing users to provide feedback for their past trips, whether it be by ratings, reviews, or other methods, it informs other users about people they are going to ride with. Moreover, many participants see heavy traffic and missing bus schedules as pain points of their current transportation method, which is another main focus of our first design, helping users communicate a reliable yet flexible schedule and provide timely updates. 

Some problems that we found with the “gamification design” are that it focused too heavily on routine carpools around a specific community, and not as much on one-off events, or for small friend groups.  It also assumes that there is a community or group that the user is already interested in joining, and does not help with finding or matching individuals. Our main concern for the “in-car experience design” is the lack of focus for this aspect of carpooling during user research. This results in not having as much time or information to help direct our design. However, we believe that there are elements of these designs that we can incorporate in our main design. For example, features like badge/achievement will help motivating users to carpool more frequently. With the in-car design, we can think of screens and interfaces that can make the actual carpooling experience better.
 
#### Task 1 - Finding Suitable Carpoolers
Our user research overwhelmingly showed that people wanted to know their carpooling group first before the carpooling experience. Rather than random strangers, they would like to have a network of reliable passengers through filtering or background checks for security. When asked the most important factor when deciding to carpool with someone, almost every participant mentioned “comfortability with other passengers”, “relationship”, and “reliability”. This is why we chose to center around this task based on finding suitable carpoolers. When the user creates an account, they will be asked to fill out their preferences for people they would like to carpool with. Then based on their preferences and schedules, they will then be able to find recommended carpoolers that share the same preferences. For example, the system will not match a rider who often eats in the car with a driver who cares a lot about their car’s cleanliness. 

<p><img src="assets/projects/{{ project.path }}/storyboard1.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>

#### Task 2 - Communicating Live Updates
Most of our research participants mentioned that delays and unexpected scheduling changes were the main problems with their carpooling experiences. We wanted to make sure this is included in our design as our targeted participants of students and working professionals mentioned that schedule changes and road-related delays were common. Before a trip starts, the driver will receive a personalizable notification regarding the start time of the carpool. When the driver starts to drive, the riders then will be able to receive notification regarding the current location of the driver and the estimated arrival time. Based on their settings, they will also be able to receive multiple notifications/messages regarding the trip status. In the best situation, all users will then be able to arrive on time. This task is especially useful in emergent cases, such as lateness, heavy traffic etc. By allowing the users to see the drivers/rider’s location and keep updating, this design helps facilitate communication and avoid conflicts. 

<p><img src="assets/projects/{{ project.path }}/storyboard2.png" width="100%" style="max-width: 800px; display: block; margin: auto;"></p>
