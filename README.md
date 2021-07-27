# Visualization Project
# Kimberly Norman | Ashley Patricia Parra | Kellen Quinn | Jason Wang

### Project Summary
As a result of ongoing social issues in the United States, many law enforcement agencies are redefining themselves and how they do “business”. Many of these agencies are doing this in response to social outrage and are proactively reflecting on the notion that changes to policing and day-to-day operations must be made. The most prevalent and widely covered belief is the movement to “Defund the Police.” While this is indeed a call for budgetary changes, it’s also a call for agencies to redefine the types of calls that officers go on and to self-evaluate whether or not the police are the best institution to respond to certain call types. 

In March 2021, Tucson PD decided that due to budgetary woes that they would no longer respond to: financial crimes, civil matters, code enforcement matters, welfare checks (including mental health checks), non-criminal transports, deaths at medical facilities, abandoned lines (911 hang-ups), runaways, non-criminal homeless calls on public property, loud music/loud noise calls, suicidal subjects, trespassers inside certain abandoned buildings; contraband at schools, hospitals and courts (except for firearms), etc.

Another one of Tucson PD’s budgetary woes is that many officers are leaving the agency for nearby agencies that pay more/better. This is on top of the exodus of officers from the field across the nation as a result of some high profile police use of force matters and public response to them. 

Our project is an analysis of Tucson PD’s publicly available data to explore whether or not the agency’s budgetary woes, manpower issues, and realignment of purpose have affected their day-to-day operations as far as: events (whether calls for service or officer initiated), arrests, use of force incidents, etc. To accomplish this, we will be providing visualizations that a user can explore. 

### Data and JS Library
| Data or JS Library Name | Source URL    |
| --------------- | ------------- |
| TPD Arrest Data | [Arrest Data](https://opendata.tucsonaz.gov/sense/app/9921059b-aafd-4435-8098-234adb896bca/sheet/4ecaf75a-efda-415d-b346-5c1ee25fa86c/state/analysis)|
| Tucson Budget Report | [Budget PDF](https://www.tucsonaz.gov/files/budget/COT_Adopted_Budget_Fiscal_Year_2021_1_1.pdf.pdf)|
| C3.js | [C3.js Library](https://c3js.org/) |

### Project Methods and Approach
* For hosting and data storage, we utilized Heroku and its Postgres DB add-on.
* For data cleansing we used Excel to quickly filter and eliminate any rows with null values.
* For data transformation and loading, we used both pgAdmin and DBeaver to run SQL scripts that created table containers and imported our cleaned Excel csv files.
* For graphing, we utilized D3.js, Plotly.js, and C3.js to create them.
* For front end containers and design, we used Bootstrap and native CSS3 along with HTML5.

### Conclusion
Upon review, we were able to accomplish around 90% of what we set out to do. We were able to look at the budgetary data in comparison with the number of arrests from 2019 to 2021. We also looked at the breakdown of gender in the number of arrestees broken down by year. What we wished to accomplish was to look at arrestee demographics as well as number of calls in response to the budgetary and service cuts from TPD. Overall, we ran into many hurdles, but we accomplished most of what we wanted to see. For future builds, we hope that we can get a bigger data storage for all our data and able to implement the two graphs that we have to cut out in this interation.
