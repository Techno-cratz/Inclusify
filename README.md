## Inspiration
Online communication is growing very rapidly, with some countries quintupling users every 5 years. With such a large online base, it is imperative to ensure a comfortable and inclusive environment for different cultures, and people with accessibility needs.
Unfortunately, social media inclusivity is not growing nearly as rapidly as online communication. This causes a few groups to not be as connected  with the trends and happenings of today's social media.

## What it does
 Inclusify hopes to improve communication for users of different cultures, users with accessibility needs in today's connected world. 

It does so by accepting a user photo and caption. It then uses Azure ComputerVision API to give an image description, removes emojis if there are more than one, lowercases uppercase words, and uses LanguageTool API to camelcase hashtags with multiple words. It then returns this suggested caption back to the user, who can then post the image and caption to Twitter, Instagram, and Facebook using the HootSuite API.

## Challenges we ran into
Authentication with OAuth 2.0 using GET REST API  was something completely new to us. Despite facing many challenges with OAuth, we were able to finally figure it out. 

## Accomplishments that we're proud of
User authentication with OAuth was a challenging but rewarding task. Most of us were relatively new to JavaScript, particularly async functions. After several attempts, we all got the hang of it. Making a good looking frontend was also a proud moment!

## What's next for Inclusify
We are planning to include features like video captioning for supporting inclusive video, flagging captions which may be offensive to a group, and automated suggestions for when to post. Furthermore, we are also planning to make the app more robust.
