# angular2-dotnet-sequences

## HOWTO Build and Run

This is the .NET Web API  and Angular2 application built with Visual Studio 2017.

### Prerequisites

Visual Studio 2017

Node.js

### Instructions

* git clone https://github.com/dmitrynovik/angular2-dotnet-sequences.git


* Open solution in Visual Studio 2017

* Set startup project to NumericSequences.Web

* build and start debug which launches Web API 



* cd angular-dotnet-sequences/NumericSequences.Web

* npm install

* npm run

* browse http://localhost:24461/index.html


## Numeric Sequence Calculator
Goal As a USER
I want to calculate some numeric sequences
so that [TBD].

## Acceptance Criteria 

1. The software shall be web­based.

2. Unit tests shall be written for each functional component of the
software.

3. An end to end UI test shall be written for the software.

4. The source shall be saved to a github repository.

5. Any instructions required to run the software shall be included in a README.md file in the root of the repository.

6. The repository URL shall be supplied to World Nomads Group

### User Stories

#### S1 Instructions

I want to read some instructions on how to use the application so that it works first time for me.

Acceptance Criteria S1.1 The instructions shall be short and to the point.

#### S2 Enter Data

I want to enter a number and initiate the calculation of the numeric sequences so that I can view the results.

Acceptance Criteria S2.1 Input shall accept positive, whole numbers only.

S2.2 Where an input is invalid an error message shall be displayed.

#### S3 Results

I want to view the results of the numeric sequences so that [TBD].

Acceptance Criteria S3.1 The following numeric sequences shall be displayed:

S3.1.1 All numbers up to and including the number entered,

S3.1.2 All odd numbers up to and including the number entered,

S3.1.3 All even numbers up to and including the number entered,

S3.1.4 All numbers up to and including the number entered, except when,

S3.1.4.1 A number is a multiple of 3 output C, and when,

S3.1.4.2 A number is a multiple of 5 output E, and when,

S3.1.4.3 A number is a multiple of both 3 and 5 output Z,

S3.1.5 All fibonacci number up to and including the number entered.

