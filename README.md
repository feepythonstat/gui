# gui :)
front-end side of the world

Normal Mode

You are going to build an application to allow users to track personal statistics about their activities. A personal statistic is a numerical record for a person in a time series by day. For example, let's say I wanted to track how many flights of stairs I walked up in a day. My last week might look like:

Date	Flights
10/19/2015	8
10/20/2015	6
10/21/2015	7
10/22/2015	6
10/23/2015	8
10/24/2015	4
10/25/2015	6
Users of your application can create as many different activities to track as they want. They should have an easy-to-use interface to track their activities, allowing them to enter the number for the current day or any previous day.

You should allow for:

User registration
User login
Creating a new activity to track
Recording a stat for an activity for a day
Editing a stat
Showing a chart for an activity for any series of dates, defined by a start and stop date. The default should be the last 30 days.
Your chart can be generated using a variety of libraries. We'll learn about D3 on Wednesday, so you may want to wait to build it until then, but you are welcome to use any method you'd like.

Your application will be made up of an API and a JavaScript single-page app.

API Specification

For your API, we're specifying the endpoints you'll need and what they should do. The URLs below are not prefixed: yours should have /api/ in front of them.

As a team, you will need to determine the payload associated with each request/response.

All the endpoints require authentication. You will need to decide as a team if you will make authentication available via the API, and if so, what endpoints to use.

Front-End Specification

The front-end will be a single-page app using AngularJS. The app will be served separately from the Python webserver.

Registration and login can be on different pages than the main page (even outside of the AngularJS app) if need be.
