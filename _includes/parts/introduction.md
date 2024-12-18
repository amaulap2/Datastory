# Introduction
You’ve probably noticed some odd stuff on YouTube — videos filled with spam or copy-pasted comments, or strange accounts posting the same random comments all over the place. Yep, a lot of this could be bots at work. These automated accounts are popping up everywhere, messing with everything from view counts to engagement metrics. In today’s digital world, bots are shaping YouTube in ways we wouldn’t expect, blurring the line between what’s real and what’s not. Let’s dive into how these bots are impacting the platform and why it’s a big deal.

This project aims to explore the growing bot problem on YouTube. With over 136,000 channels and 73 million videos in our dataset, we’re looking at how bots influence engagement metrics like views, likes, and comments. Our main goal is to identify bots based on their commenting patterns, specifically targeting videos uploaded within similar timeframes. We want to understand how these bots affect both the videos and channels they target, uncovering trends in content and engagement.

# Characterizing YouTube bots
YouTube bots generally show two kinds of behavior:
- Type-1: Posting a lot of comments under the same video.
- Type-2: Posting comments on a large number of different videos in a short time.

Since we don’t have ground truth data, we categorize accounts showing this behavior as "suspicious users" — they might be bots, but they could also be human. The challenge is to tell apart real, active YouTube users who comment frequently from bot accounts that spam comments. We define an active user as someone who’s posted at least 100 comments in their lifetime. To detect suspicious users, we look at how comments are distributed across days and how many different videos each user targets. Bots usually act abnormally, with much higher activity than the average user. So, we set an initial threshold to help filter out suspicious users.

## Filtering Suspicious Users (potential bots)
For Type-1 behavior, the average number of comments per video is around 1.5, with a standard deviation of about 4. However, some users (potentially bots) can post over a thousand comments on a single video. To flag potential bots, we define the threshold as the mean plus two times the standard deviation — i.e., 9 comments. This helps us catch accounts with unusually high commenting activity. For Type-2 behavior, we set an initial threshold of at least 10 videos commented on in a single day. This is a conservative threshold to help us distinguish bots from genuine users. Since bots are known to target thousands of videos, this threshold helps us be cautious in our data analysis and avoid false positives.

<div style="border: 2px solid #4CAF50; padding: 10px; background-color: #e8f5e9; border-radius: 8px; font-family: Arial, sans-serif;">
  <div style="font-size: 18px; color: #1976d2;">
     <p style="font-size: 18px; font-weight: bold;">Filter-1 = Mean + 2 * Standard Deviation = <span style="color: #d32f2f;">9 comments per video</span></p>
     <p style="font-size: 18px; font-weight: bold;">Filter-2 = <span style="color: #d32f2f;">10 videos commented in a day</span></p>
  </div>
</div>

# Can we reliably detect these bots?
What's interesting is that most suspicious users show both types of behaviors at the same time. In fact, a large portion of users from both categories fall into this overlap. Specifically, 53.83% of suspicious users with type 1 behavior and 76.53% of type 2 users are flagged by both filters. This overlap really strengthens the idea that suspicious users are likely bots.

<div style="text-align: center;">
  <img src="{{ site.baseurl }}/assets/data/introduction/violin.png" alt="Local Image">
</div>

The violin graph shows the distribution of videos commented on per day by normal and suspicious users. It helps compare how the two categories stack up and reveals that "suspicious" users tend to comment more often. The "normal" category has a tight, concentrated distribution, with most users commenting on only a few videos. On the other hand, the "suspicious" category is more spread out, with some users commenting on a lot more videos per day (up to 30).

