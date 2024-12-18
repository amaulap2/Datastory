# Type-1 Bot Analysis

Type-1 bots, i.e. bots that post a lot of comments under the same video, are very common on Youtube. Indeed, we are very familiar with the *auto-reply bots* that content creators use on their channels to increase engagement on their channel. These bots are made to interact with the viewers and make them feel like they are part of a community. However, these bots can also be used to spam the comment section of a video, which can be very annoying for the viewers. 

In this section we will analyze the behavior of these bots and how they affect the engagement metrics of a video. We will also try to characterize where these bots are most active and what kind of content they target.

### Do Bots Target Specific Categories of Videos?

To answer this question, we first need to understand how bots are distributed across different categories of videos. We can do this by looking at the proportion of comments made by bots in each category over time.

<div style="text-align: center;">
<figure>
  <img src="{{ site.baseurl }}/assets/data/type-1_analysis/prop_comments_per_category_normal.svg" alt="Local Image" class='center'>
  <center>
  <figcaption>
  <p style="margin-top:-0.6cm;margin-left:0.2cm;">
    <font size=2>Figure 1: Proportion of Video Categories over time, Normal Users.</font>
  </p>
  </figcaption>
  </center>
</figure>
</div>

In Figure 1, we first show the proportion of comments per category over time for normal users (i.e. users not considered as having suspicious activities). We observe the emergence and decrease in interest in some categories. The most obvious one is the great increase in interest in *Gaming* especially since 2010. This is followed by a decrease in interest in *Music* and *Entertainment* categories.

<figure>
  <img src="{{ site.baseurl }}/assets/data/type-1_analysis/prop_comments_per_category_sus.svg" alt="Local Image" class='center'>
  <center>
  <figcaption>
  <p style="margin-top:-0.6cm;margin-left:0.2cm;">
    <font size=2>Figure 2: Proportion of Video Categories over time, Suspicious Users.</font>
  </p>
  </figcaption>
  </center>
</figure>

In Figure 2, we show the proportion of comments per category over time for suspicious users. We see that the proportion of comments per category tend to follow the same trend as normal users. Which makes sense since we could assume that bots would target the same categories as normal users. However we note that some categories attract more bots than normal users. For example, the *Howto & Style* category has a much higher proportion of comments from bots than it did for normal users.