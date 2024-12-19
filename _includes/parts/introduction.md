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

<div style="border: 2px solidrgb(2, 13, 2); padding: 10px; background-color:rgb(17, 17, 17); border-radius: 8px; font-family: Arial, sans-serif;">
  <div style="font-size: 18px; color:rgb(15, 23, 31);">
     <p style="font-size: 18px; font-weight: bold;">Filter-1 = Mean + 2 * Standard Deviation = <span style="color:rgb(14, 12, 12);">9 comments per video</span></p>
     <p style="font-size: 18px; font-weight: bold;">Filter-2 = <span style="color:rgb(8, 8, 8);">10 videos commented in a day</span></p>
  </div>
</div>
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
<!-- <math display="block" class="tml-display" style="display: block; font-family: 'Times New Roman', serif; font-size: 1.5em;">
  <mrow>
    <mo fence="true" form="prefix" stretchy="true" style="font-size: 1.2em;">{</mo>
    <mtable displaystyle="true" columnalign="right left" style="margin-left: 1em;">
      <mtr>
        <mtd class="tml-right" style="padding: 0.7ex 0em 0.7ex 0em;">
          <mrow></mrow>
        </mtd>
        <mtd class="tml-left" style="padding: 0.7ex 0em 0.7ex 0em;">
          <mrow>
            <mi>Filter</mi>
            <mn>1</mn>
            <mo>:</mo>
            <mi>Mean</mi>
            <mo>+</mo>
            <mn>2</mn>
            <mo>×</mo>
            <mi>Standard</mi>
            <mi>Deviation</mi>
            <mo>=</mo>
            <mn>9</mn>
            <mo>comments</mo>
            <mo>per</mo>
            <mo>video</mo>
          </mrow>
        </mtd>
      </mtr>
      <mtr>
        <mtd class="tml-right" style="padding: 0.7ex 0em 0.7ex 0em;">
          <mrow></mrow>
        </mtd>
        <mtd class="tml-left" style="padding: 0.7ex 0em 0.7ex 0em;">
          <mrow>
            <mi>Filter</mi>
            <mn>2</mn>
            <mo>:</mo>
            <mo>At</mo>
            <mo>least</mo>
            <mn>10</mn>
            <mo>videos</mo>
            <mo>commented</mo>
            <mo>in</mo>
            <mo>a</mo>
            <mo>day</mo>
          </mrow>
        </mtd>
      </mtr>
    </mtable>
    <mo fence="true" form="postfix" stretchy="true" style="font-size: 1.2em;">}</mo>
  </mrow>
</math> -->


## Can We Reliably Detect Bots? 
The goal of this section is to demonstrate the reader that with our filters we were able to efficiently detect potential bots by separating them from normal users. First of all, we discovered that bots categories Type-1 and Type-2 overlap.

### Intersection

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

What's interesting is that most suspicious users show both types of behaviors at the same time. In fact, a large portion of users from both categories fall into this overlap. Specifically, 53.83% of suspicious users with type 1 behavior and 76.53% of type 2 users are flagged by both filters. This overlap really strengthens the idea that suspicious users are likely bots.

### Detecting Type-1 bots

We were able to compute a Hard-SVM hyperplane to separate normal users and bots for after filtering with Filter Type-1. 

<div style="text-align: center;" id="Figure1">
<figure>
  <iframe src="{{ site.baseurl }}/assets/data/type-1_analysis/3D_hyperplane_density.html" 
          width="100%" 
          height="500" 
          style="border:none;">
  </iframe>
  <center>
  <figcaption>
    <p style="margin-top:-0.6cm;margin-left:0.2cm;">
      <font size="2">Figure 1: 3D Plot of Average comments per user and number of different videos commented</font>
    </p>
  </figcaption>
  </center>
</figure>
</div>

We clearly see that bots Type-1 comment on **less different videos** (often less than 20) than normal users (usually way above 50). They have a higher number of **comments per user**,usually more than 20, whereas normal users are consistently under 10. This is computed by (total number of comments in a year)/(number of distinct videos commented that year). We can notice the increase of both metrics for both along the years. Beside that normal users only increase the number of different videos watched across years, illustrating the growth of the presence per users along the years, which was expected, as we use YT much more nowadays than 20 years ago. As a reminder normal users were selected randomly among users which had at least 100 comments in their lifetime, so potentially they could have more than 10 comments/user in this graph. However this is highly unlikely, this is why we were able to separate both groups with a Hard-SVM plane. 


### Detecting Type-2 bots
Now let's demonstrate the differences in the distribution between Type-2 bots and normal users.

<div style="text-align: center;" id="Figure1">
<figure>
  <iframe src="{{ site.baseurl }}/assets/data/introduction/dist_num_comments_norm_sus.html" 
          width="100%" 
          height="500" 
          style="border:none;">
  </iframe>
  <center>
  <figcaption>
    <p style="margin-top:-0.6cm;margin-left:0.2cm;">
      <font size="2">Figure 1: 3D Plot of Average comments per user and number of different videos commented</font>
    </p>
  </figcaption>
  </center>
</figure>
</div>

The violin graphs show the distribution of the number of different videos commented per day by normal and suspicious users. It helps to visualize that for Type-2 bots the pattern is very different from normal users.It reveals that "suspicious" users of Type-2 tend to comment on more videos. The "normal" category has a tight, concentrated distribution, with most users commenting on only a few videos. On the other hand, the "suspicious" category is more spread out, with some users commenting on a lot more videos per day (up to 30). 

Our analysis showed that filtering the data using Filter-1 and Filter-2 successfully identified two overlapping sets of suspicious users. These filters revealed key differences in behavior between bots and normal users, enabling us to distinguish the two groups effectively. This overlap provides further evidence of the presence of bot activity on YouTube.
