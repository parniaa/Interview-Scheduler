# Interview Scheduler

A lighthouse lab React project

## Features

    Users can create an interview with selected interviewer

    Users can edit or delete interviews
    Users can see the availability for each day of the week
    Interviews can be booked between Monday and Friday.

    A user can switch between weekdays.

    A user can book an interview in an empty appointment slot.
    Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.

    A user can cancel an existing interview.

    A user can edit the details of an existing interview.
    The list of days informs the user how many slots are available for each day.
    The expected day updates the number of spots available when an interview is booked or canceled.

    A user is presented with a confirmation when they attempt to cancel an interview.

    A user is shown an error if an interview cannot be saved or deleted.

    A user is shown a status indicator while asynchronous operations are in progress.
    When the user presses the close button of the error they are returned to the Form or - Show view (skipping Status and Confirm).

    The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Screenshots

!["Overall Look of the app"]("https://raw.githubusercontent.com/parniaa/Interview-Scheduler/master/docs/Screen%20Shot%202021-02-24%20at%208.33.05%20PM.png")

!["Saving an appointment"](https://raw.githubusercontent.com/parniaa/Interview-Scheduler/master/docs/Screen%20Shot%202021-02-24%20at%208.29.54%20PM.png)

!["Deleting an appointment"](https://raw.githubusercontent.com/parniaa/Interview-Scheduler/master/docs/Screen%20Shot%202021-02-24%20at%208.30.11%20PM.png)
