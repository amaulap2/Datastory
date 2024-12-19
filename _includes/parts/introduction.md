# Introduction
You’ve probably noticed some odd stuff on YouTube — videos filled with spam or copy-pasted comments, or strange accounts posting the same random comments all over the place. Yep, a lot of this could be bots at work. These automated accounts are popping up everywhere, messing with everything from view counts to engagement metrics. In today’s digital world, bots are shaping YouTube in ways we wouldn’t expect, blurring the line between what’s real and what’s not. Let’s dive into how these bots are impacting the platform and why it’s a big deal.

This project aims to explore the growing bot problem on YouTube. With over 136,000 channels and 73 million videos in our dataset, we’re looking at how bots influence engagement metrics like views, likes, and comments. Our main goal is to identify bots based on their commenting patterns, specifically targeting videos uploaded within similar time-frames. We want to understand how these bots affect both the videos and channels they target, uncovering trends in content and engagement.

# Characterizing YouTube Bots
YouTube bots generally show two kinds of behavior:
- Type-1: Posting a lot of comments under the same video.
- Type-2: Posting comments on a large number of different videos in a short time.

Since we don’t have ground truth data, we categorize accounts showing this behavior as "suspicious users" — they might be bots, but they could also be human. The challenge is to tell apart real, active YouTube users who comment frequently from bot accounts that spam comments. We define an active user as someone who’s posted at least 100 comments in their lifetime. To detect suspicious users, we look at how comments are distributed across days and how many different videos each user targets. Bots usually act abnormally, with much higher activity than the average user. So, we set an initial threshold to help filter out suspicious users.

## Filtering Suspicious Users (potential bots)
For Type-1 behavior, the average number of comments per video is around 1.5, with a standard deviation of about 4. However, some users (potentially bots) can post over a thousand comments on a single video. To flag potential bots, we define the threshold as the mean plus two times the standard deviation — i.e., 9 comments. This helps us catch accounts with unusually high commenting activity. 

For Type-2 behavior, we set an initial threshold of at least 10 different videos commented on a single day. This is a conservative threshold to help us distinguish bots from genuine users. Since bots are known to target thousands of videos, this threshold helps us be cautious in our data analysis and avoid false positives.

<!-- <div style="border: 2px solidrgb(2, 13, 2); padding: 10px; background-color: #e8f5e9; border-radius: 8px; font-family: Arial, sans-serif;">
  <div style="font-size: 18px; color: #1976d2;">
     <p style="font-size: 18px; font-weight: bold;">Filter-1 = Mean + 2 * Standard Deviation = <span style="color: #d32f2f;">9 comments per video</span></p>
     <p style="font-size: 18px; font-weight: bold;">Filter-2 = <span style="color: #d32f2f;">10 videos commented in a day</span></p>
  </div>
</div> -->
<!-- <div style="border: 1px solid black; padding: 15px; background-color: white; border-radius: 8px; font-family: 'Times New Roman', serif;">
  <h2 style="margin-top: 0; text-align: center;">Filters for Data Analysis</h2>
  <ul style="list-style-type: none; padding: 0; margin: 0; font-size: 1.2em;">
    <li style="margin-bottom: 10px;">
      <strong>Filter-1:</strong> \( \text{Mean} + 2 \times \text{Standard Deviation} = \mathbf{9} \) comments per video
    </li>
    <li>
      <strong>Filter-2:</strong> At least \( \mathbf{10} \) videos commented in a day
    </li>
  </ul>
</div>
-->
<div style="border: 1px solid black; padding: 15px; background-color: white; border-radius: 8px; font-family: 'Times New Roman', serif;">
  <h2 style="margin-top: 0; text-align: center;">Filters for Data Analysis</h2>
  <ul style="list-style-type: none; padding: 0; margin: 0; font-size: 1.2em;">
    <li style="margin-bottom: 10px;">
      <strong>Filter-1:</strong>
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mi>Mean</mi>
        <mo>+</mo>
        <mn>2</mn>
        <mo>&#x2062;</mo>
        <mi>Standard</mi>
        <mo>&#x2062;</mo>
        <mi>Deviation</mi>
        <mo>=</mo>
        <mn>9</mn>
      </math>
      comments per video
    </li>
    <li>
      <strong>Filter-2:</strong>
      At least 
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mn>10</mn>
      </math>
      videos commented in a day
    </li>
  </ul>
</div>

## Can We Reliably Detect Bots? 
What's interesting is that most suspicious users show both types of behaviors at the same time. In fact, a large portion of users from both categories fall into this overlap. Specifically, 53.83% of suspicious users with type 1 behavior and 76.53% of type 2 users are flagged by both filters. This overlap really strengthens the idea that suspicious users are likely bots.

<div style="text-align: center;">
  <img src="{{ site.baseurl }}/assets/data/introduction/violin.png" alt="Local Image">
</div>

The violin graph shows the distribution of videos commented on per day by normal and suspicious users. It helps compare how the two categories stack up and reveals that "suspicious" users tend to comment more often. The "normal" category has a tight, concentrated distribution, with most users commenting on only a few videos. On the other hand, the "suspicious" category is more spread out, with some users commenting on a lot more videos per day (up to 30).

## Intersection

Let's study the link between the different type of bots. Let <math> <msub><mi>T</mi><mn>1</mn></msub></math> be the dataset of bots of type 1 and <math> <msub><mi>T</mi><mn>2</mn></msub></math> the dataset of bots of type 2. We define the following quantities :

<math display="block" class="tml-display" style="display:block math;">
  <mrow>
    <mo fence="true" form="prefix">{</mo>
    <mtable displaystyle="true" columnalign="right left">
      <mtr>
        <mtd class="tml-right" style="padding:0.7ex 0em 0.7ex 0em;">
          <mrow></mrow>
        </mtd>
        <mtd class="tml-left" style="padding:0.7ex 0em 0.7ex 0em;">
          <mrow>
            <msub>
              <mi>T</mi>
              <mn>1,2</mn>
            </msub>
            <mo>=</mo>
            <msub>
              <mi>T</mi>
              <mn>1</mn>
            </msub>
            <mo>∩</mo>
            <msub>
              <mi>T</mi>
              <mn>2</mn>
            </msub>
          </mrow>
        </mtd>
      </mtr>
      <mtr>
        <mtd class="tml-right" style="padding:0.7ex 0em 0.7ex 0em;">
          <mrow></mrow>
        </mtd>
        <mtd class="tml-left" style="padding:0.7ex 0em 0.7ex 0em;">
          <mrow>
            <msub>
              <menclose notation="top" class="tml-overline">
                <mi>T</mi>
              </menclose>
              <mn>1</mn>
            </msub>
            <mo>=</mo>
            <msub>
              <mi>T</mi>
              <mn>1</mn>
            </msub>
            <mi>\</mi>
            <msub>
              <mi>T</mi>
              <mn>1,2</mn>
            </msub>
          </mrow>
        </mtd>
      </mtr>
      <mtr>
        <mtd class="tml-right" style="padding:0.7ex 0em 0.7ex 0em;">
          <mrow></mrow>
        </mtd>
        <mtd class="tml-left" style="padding:0.7ex 0em 0.7ex 0em;">
          <mrow>
            <msub>
              <menclose notation="top" class="tml-overline">
                <mi>T</mi>
              </menclose>
              <mn>2</mn>
            </msub>
            <mo>=</mo>
            <msub>
              <mi>T</mi>
              <mn>2</mn>
            </msub>
            <mi>\</mi>
            <msub>
              <mi>T</mi>
              <mn>1,2</mn>
            </msub>
          </mrow>
        </mtd>
      </mtr>
    </mtable>
    <mo fence="true" form="postfix"></mo>
  </mrow>
</math>

We created a stacked area plot of the different groups. The intersection represents a big part of the datasets.

<div style="text-align: center;">
<figure>
  <img src="{{ site.baseurl }}/assets/data/introduction/different_types_of_bots.svg" alt="Stacked area" class='center'
  width="850px">
  <center>
  <figcaption>
  <p style="margin-top:-0.6cm;margin-left:0.2cm;">
    <font size=2> Stacked area plot of the evolution of the different type of bots.</font>
  </p>
  </figcaption>
  </center>
</figure>
</div>